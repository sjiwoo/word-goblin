/**
 * Word Goblin — mini-lesson email + progress-sync backend  (contract v5, invite-only)
 * ------------------------------------------------------------------
 * Single-file Google Apps Script (V8 runtime). No libraries, no server, free forever.
 *
 * What it does
 *   1. doPost()             receives subscribe / unsubscribe / sync / saveProgress /
 *                           loadProgress / deleteAll calls from the Word Goblin app and
 *                           stores everything in Script Properties.
 *   2. sendDailyReminders() runs once a day (time-driven trigger) and emails every subscriber
 *                           a personalized MINI-LESSON — one "word of the day" per active
 *                           language, taken from the lesson queue the app uploaded.
 *   3. setupTrigger()       you run this ONCE by hand to install the daily trigger.
 *
 * Why a queue: this script has no access to the curriculum or to the learner's browser
 * storage, so the app uploads the next few vocabulary items ("the queue") and the script
 * consumes exactly one per language per day. Until a queue has been synced, the email
 * gracefully degrades to a plain study reminder.
 *
 * Why a sync key: the web-app URL is public, so an email address alone must not be enough
 * to read or overwrite somebody's saved progress. Each email gets a `key:<email>` token,
 * claimed by the first request that presents one; every action must present the matching
 * key, and requests carrying no key at all are refused outright. Progress sync and email
 * subscription are independent — you can sync progress without ever subscribing to the
 * emails.
 *
 * Setup instructions live in EMAIL-SETUP.md next to this file.
 */

/* ==================================================================
   CONFIGURATION — the only things you normally need to change
   ================================================================== */

/**
 * Hour of the day the email goes out, 0–23, in the SCRIPT's timezone.
 * 8 = around 8:00 am. Google fires time-driven triggers within a ~1 hour window,
 * so 8 means "somewhere between 8:00 and 9:00".
 * Change the script timezone in: Project Settings (gear icon) → Time zone.
 * After changing this value, run setupTrigger() again.
 */
var REMINDER_HOUR = 8;

/** Shown as the email sender name. */
var SENDER_NAME = 'Word Goblin';

/** Where the app lives — used to build invite links. */
var APP_URL = 'https://sjiwoo.github.io/word-goblin/';

/**
 * This deployment's /exec URL, embedded (base64, in the URL fragment) in invite links so
 * an invited friend never has to type it. Leave '' to auto-detect; if the auto-detected
 * value ever ends in /dev (it can when run from the editor), paste the real /exec URL here.
 */
var SCRIPT_URL = '';

/* --- Queue limits. Script Properties cap each stored value at 9 KB, so queues are
       stored one property per language and are trimmed to fit before writing. --- */
var MAX_QUEUE_ITEMS = 10;      // items kept per language
var MAX_QUEUE_BYTES = 8192;    // 8 KB serialized ceiling per language, under the 9 KB limit
var MAX_BACKGROUND_PARAGRAPHS = 2;
var MAX_BACKGROUND_CHARS = 400;
var MAX_FIELD_CHARS = 200;     // term / roman / gloss / pos / unit / example fields

/* --- Progress-blob limits. The saved app state is chunked across properties because a
       single Script Property value cannot exceed 9 KB. --- */
var PROGRESS_CHUNK_BYTES = 8192;    // 8 KB per chunk, under the 9 KB property limit
var MAX_PROGRESS_BYTES = 102400;    // 100 KB total; larger blobs are rejected outright
var MAX_KEY_CHARS = 128;            // sanity ceiling on the sync key

/** Script Properties key prefixes. */
var SUB_PREFIX = 'sub:';            // sub:<email>          -> {languages, subscribedAt}
var QUEUE_PREFIX = 'queue:';        // queue:<email>:<lang> -> {items, pointer, syncedAt}
var KEY_PREFIX = 'key:';            // key:<email>          -> sync key (plain string)
var PROG_PREFIX = 'prog:';          // prog:<email>:<n>     -> one chunk of the JSON blob
var PROGMETA_PREFIX = 'progmeta:';  // progmeta:<email>     -> {chunks, bytes, updatedAt}
var ALLOW_PREFIX = 'allow:';        // allow:<email>        -> {addedAt, via} member whitelist
var INVITE_PREFIX = 'invite:';      // invite:<token>       -> {createdAt, note} single-use
var INVITE_TTL_DAYS = 30;           // unredeemed invites expire after this many days
var LEGACY_KEY = 'subscribers';     // v1 single-blob storage, migrated automatically

/** Returned verbatim whenever the presented sync key does not match the stored one. */
var BAD_KEY_ERROR = 'bad key';

/**
 * Rotating study tips, shown as a small footer extra under the lesson.
 * One is chosen per day from the day-of-year, so the list cycles through the year.
 * Add or edit freely — any length works.
 */
var STUDY_TIPS = [
  'Say every new word out loud three times. Your mouth learns a language slower than your eyes do.',
  'Review yesterday’s word before starting anything new — five minutes of review beats twenty of fresh input.',
  'Read the example sentence once for meaning, then again just for rhythm. Prosody is half of sounding natural.',
  'When a word feels arbitrary, read its background. Words you understand the history of stick.',
  'Shadow the audio in the app: play a line, then repeat it while it is still ringing in your ear.',
  'Write three sentences about your actual day using today’s word.',
  'Do not translate word-by-word. Learn the whole chunk — phrases are the real unit of fluency.',
  'Short and daily beats long and occasional. Ten focused minutes today is worth more than an hour on Sunday.',
  'Cover the gloss and read the target script alone. Recognition without a crutch is the real test.',
  'Explain today’s word out loud as if teaching it. Gaps in your understanding show up instantly.',
  'Practise the sounds you find hardest deliberately — the ones you avoid are the ones that mark your accent.',
  'Re-do an old unit’s exercises. Material that felt hard last month is the clearest proof of progress.',
  'Label something in your home with today’s word if it fits. Passive exposure is free repetition.',
  'Guess before you check. A wrong guess you correct is remembered far better than an answer you were handed.'
];

/** Display metadata per language track (colours mirror the app's accents). */
var LANGUAGE_INFO = {
  korean:  { label: 'Korean',  native: '한국어', from: '#2f5fbf', to: '#c8332f' }, // taegeuk blue→red
  chinese: { label: 'Chinese', native: '中文',   from: '#c8332f', to: '#d9a441' }  // cinnabar→gold
};

/** Canonical language order used everywhere. */
var LANGUAGE_ORDER = ['korean', 'chinese'];

/* ==================================================================
   WEB APP ENDPOINTS
   ================================================================== */

/**
 * GET handler. Two jobs:
 *   1. `?action=loadProgress&email=…&key=…` — fallback read path for clients that cannot
 *      POST (or whose POST is blocked); same result shape as the POST action.
 *   2. no parameters — a tiny status page so you can paste the /exec URL into a browser
 *      and confirm the deployment is live. Counts only; no addresses, keys or content.
 */
function doGet(e) {
  migrateLegacy_();

  var params = (e && e.parameter) ? e.parameter : {};

  // `?action=config` — public, non-secret client configuration (the OAuth client ID is
  // public by design). The app uses this to decide whether to show "Sign in with Google".
  if (String(params.action || '').toLowerCase() === 'config') {
    return jsonOut_({
      ok: true,
      googleClientId: String(PropertiesService.getScriptProperties().getProperty('googleClientId') || '')
    });
  }

  if (String(params.action || '').toLowerCase() === 'loadprogress') {
    var email = normalizeEmail_(params.email);
    if (!isValidEmail_(email)) {
      return jsonOut_({ ok: false, error: 'That does not look like a valid email address.' });
    }
    return loadProgress_(email, params.key);
  }

  var emails = listSubscriberEmails_();
  var queueStats = { stored: 0, korean: 0, chinese: 0, itemsPending: 0 };

  for (var i = 0; i < emails.length; i++) {
    for (var j = 0; j < LANGUAGE_ORDER.length; j++) {
      var lang = LANGUAGE_ORDER[j];
      var q = readQueue_(emails[i], lang);
      if (!q) continue;
      queueStats.stored++;
      queueStats[lang]++;
      queueStats.itemsPending += Math.max(0, q.items.length - q.pointer);
    }
  }

  // Counts of the other stored record types — how many, never whose or what.
  var allKeys = PropertiesService.getScriptProperties().getKeys();
  var progressBlobs = 0;
  var syncKeys = 0;
  for (var k = 0; k < allKeys.length; k++) {
    if (allKeys[k].indexOf(PROGMETA_PREFIX) === 0) progressBlobs++;
    else if (allKeys[k].indexOf(KEY_PREFIX) === 0) syncKeys++;
  }

  return jsonOut_({
    ok: true,
    service: 'Word Goblin email reminders',
    contract: 'v5 (invite-only + mini-lesson + progress sync)',
    status: 'running',
    subscribers: emails.length,
    queues: queueStats,
    progressBlobs: progressBlobs,
    syncKeys: syncKeys,
    reminderHour: REMINDER_HOUR,
    timezone: scriptTimezone_(),
    triggerInstalled: hasDailyTrigger_(),
    serverTime: new Date().toISOString()
  });
}

/**
 * POST handler — subscribe / unsubscribe / sync / saveProgress / loadProgress / deleteAll.
 *
 * The app posts with Content-Type: text/plain so the browser does not fire a CORS
 * preflight (Apps Script cannot answer OPTIONS requests). That means the JSON arrives
 * as a raw string in e.postData.contents rather than parsed form fields, so we parse
 * it ourselves. Form-encoded bodies are also accepted as a fallback.
 *
 * Requests:
 *   {"action":"subscribe","email":"a@b.com","languages":["korean","chinese"],"queues":{…},"key":"…"}
 *   {"action":"unsubscribe","email":"a@b.com","key":"…"}
 *   {"action":"sync","email":"a@b.com","queues":{"korean":[QueueItem,…]},"key":"…"}
 *   {"action":"saveProgress","email":"a@b.com","key":"…","updatedAt":"…","progress":{…}}
 *   {"action":"loadProgress","email":"a@b.com","key":"…"}
 *   {"action":"deleteAll","email":"a@b.com","key":"…"}
 * Response: {"ok":true, ...} or {"ok":false,"error":"..."} — always HTTP 200.
 *
 * Queue/subscription calls from a file:// page are fire-and-forget (the reply cannot be
 * read cross-origin); progress calls are made from the hosted https build, which can read
 * the response.
 */
function doPost(e) {
  try {
    migrateLegacy_();

    var body = parseBody_(e);
    if (!body) return jsonOut_({ ok: false, error: 'Could not read request body as JSON.' });

    var action = String(body.action || '').toLowerCase();

    // Google login carries no email of its own — the address comes out of the verified
    // ID token — so it is dispatched before the email check.
    if (action === 'googlelogin') return googleLogin_(body.idToken, body.inviteToken);

    var email = normalizeEmail_(body.email);

    if (!isValidEmail_(email)) {
      return jsonOut_({ ok: false, error: 'That does not look like a valid email address.' });
    }

    if (action === 'subscribe') return subscribe_(email, body.key, body.languages, body.queues);
    if (action === 'unsubscribe') return unsubscribe_(email, body.key);
    if (action === 'sync') return sync_(email, body.key, body.queues);
    if (action === 'saveprogress') return saveProgress_(email, body.key, body.updatedAt, body.progress);
    if (action === 'loadprogress') return loadProgress_(email, body.key);
    if (action === 'deleteall') return deleteAll_(email, body.key);

    return jsonOut_({
      ok: false,
      error: 'Unknown action "' + action + '". Use "subscribe", "unsubscribe", "sync", ' +
             '"saveProgress", "loadProgress" or "deleteAll".'
    });
  } catch (err) {
    // Never let an exception bubble out — the app only knows how to read JSON.
    Logger.log('doPost error: ' + err);
    return jsonOut_({ ok: false, error: 'Server error: ' + err });
  }
}

/* ==================================================================
   ACTIONS
   ================================================================== */

/**
 * Adds or updates a subscriber. Re-subscribing just updates the language list.
 * An optional `queues` object is stored in the same call (same rules as sync).
 */
function subscribe_(email, key, languages, queues) {
  var langs = normalizeLanguages_(languages);

  // If the client omitted `languages` but sent queues, infer the tracks from the queue keys.
  if (!langs.length && queues) langs = normalizeLanguages_(Object.keys(queues));

  if (!langs.length) {
    return jsonOut_({ ok: false, error: 'Pick at least one language ("korean" and/or "chinese").' });
  }

  var queueResult = null;
  var lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    if (!authorize_(email, key)) return badKey_(email, 'subscribe');

    var existing = readSub_(email);
    writeSub_(email, {
      languages: langs,
      subscribedAt: (existing && existing.subscribedAt) ? existing.subscribedAt : new Date().toISOString()
    });
    if (queues) queueResult = storeQueues_(email, queues);
  } finally {
    lock.releaseLock();
  }

  Logger.log('Subscribed: ' + email + ' [' + langs.join(', ') + ']');
  var out = { ok: true, action: 'subscribe', email: email, languages: langs };
  if (queueResult) out.queues = queueResult;
  return jsonOut_(out);
}

/**
 * Removes a subscriber: the sub: record AND both queue: records.
 * Saved progress and the sync key are deliberately kept — opting out of the emails is not
 * the same as deleting your data. Use deleteAll for that.
 */
function unsubscribe_(email, key) {
  var lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    if (!authorize_(email, key)) return badKey_(email, 'unsubscribe');

    var existed = !!readSub_(email);
    var props = PropertiesService.getScriptProperties();
    props.deleteProperty(subKey_(email));
    for (var i = 0; i < LANGUAGE_ORDER.length; i++) {
      props.deleteProperty(queueKey_(email, LANGUAGE_ORDER[i]));
    }
    Logger.log('Unsubscribed: ' + email + (existed ? '' : ' (was not subscribed)'));
    return jsonOut_({ ok: true, action: 'unsubscribe', email: email, wasSubscribed: existed });
  } finally {
    lock.releaseLock();
  }
}

/**
 * Full replace of a subscriber's lesson queues. Each language present in `queues` is
 * replaced wholesale and its pointer reset to 0; languages absent from the payload are
 * left untouched. Unknown addresses are rejected so that a stale browser tab cannot
 * resurrect a subscription somebody just cancelled.
 */
function sync_(email, key, queues) {
  if (!queues || typeof queues !== 'object') {
    return jsonOut_({ ok: false, error: 'sync requires a "queues" object.' });
  }

  var lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    if (!authorize_(email, key)) return badKey_(email, 'sync');

    // Lesson queues only make sense for someone receiving the emails, so this action
    // (unlike progress sync) still requires an active subscription.
    if (!readSub_(email)) {
      Logger.log('sync ignored for non-subscriber: ' + email);
      return jsonOut_({ ok: false, error: 'That address is not subscribed. Subscribe first.' });
    }
    var result = storeQueues_(email, queues);
    Logger.log('Queues synced for ' + email + ': ' + JSON.stringify(result));
    return jsonOut_({ ok: true, action: 'sync', email: email, queues: result });
  } finally {
    lock.releaseLock();
  }
}

/* ==================================================================
   SYNC KEY (lightweight auth)
   ================================================================== */

/**
 * Checks the presented key against the stored one, claiming it if this address does not
 * have a key yet. Returns true when the caller may proceed, false for "bad key".
 *
 * Rules (hardened, 2026-08-01):
 *   - No key presented → refuse, always. Anonymous requests can do nothing — this closes
 *     the old pre-v3 keyless window (which let anyone who knew the URL subscribe an
 *     address that had no key yet, or probe it).
 *   - No key stored yet + a key presented → claim it, allow. First device wins.
 *   - Key stored → the presented key must match exactly, otherwise refuse.
 * An existing key is never overwritten; the only way to clear it is deleteAll.
 * (The app has always generated its key client-side before calling, so nothing legit
 * arrives keyless.)
 *
 * Callers must already hold the script lock when they mutate anything afterwards, so the
 * claim and the write land together.
 */
function authorize_(email, key) {
  var provided = normalizeKey_(key);
  if (!provided) return false;

  // Members only (contract v5): an address outside the whitelist cannot claim a key,
  // store data, or subscribe — so a stranger who learns the URL can do nothing with it.
  if (!isAllowed_(email)) {
    Logger.log('Refused non-member request for ' + email);
    return false;
  }

  var props = PropertiesService.getScriptProperties();
  var stored = props.getProperty(keyKey_(email));
  if (stored) return provided === stored;

  props.setProperty(keyKey_(email), provided);
  Logger.log('Sync key claimed for ' + email);
  return true;
}

/** Uniform refusal. Logged so the owner can see attempts, but never echoes the key. */
function badKey_(email, action) {
  Logger.log('Rejected ' + action + ' for ' + email + ': sync key mismatch.');
  return jsonOut_({ ok: false, error: BAD_KEY_ERROR });
}

/** Trims and length-caps a key; anything empty counts as "no key presented". */
function normalizeKey_(value) {
  var key = String(value == null ? '' : value).trim();
  return key.length > MAX_KEY_CHARS ? key.slice(0, MAX_KEY_CHARS) : key;
}

/* ==================================================================
   GOOGLE SIGN-IN (contract v4, optional)

   The app renders a "Sign in with Google" button (Google Identity Services, in the
   browser). The resulting ID token is posted here; this script verifies it against
   Google's tokeninfo endpoint and, for the proven address, returns the stored sync
   key (creating one on first login). One click on a new device replaces typing the
   email + sync key by hand. Set-up: run setupGoogleLogin() once with your OAuth
   client ID pasted in — see EMAIL-SETUP.md.
   ================================================================== */

/**
 * ONE-TIME SETUP: paste your OAuth client ID between the quotes and run this once.
 * Create the ID at console.cloud.google.com → APIs & Services → Credentials →
 * Create credentials → OAuth client ID → Web application, with your app's origin
 * (e.g. https://sjiwoo.github.io) under "Authorized JavaScript origins".
 */
function setupGoogleLogin() {
  var CLIENT_ID = 'PASTE-YOUR-CLIENT-ID-HERE.apps.googleusercontent.com';
  if (CLIENT_ID.indexOf('PASTE-YOUR') === 0) {
    throw new Error('Edit setupGoogleLogin() first: replace the placeholder with your real OAuth client ID, then run it again.');
  }
  PropertiesService.getScriptProperties().setProperty('googleClientId', CLIENT_ID);
  Logger.log('Google sign-in enabled for client ID: ' + CLIENT_ID);
}

/**
 * Verifies a Google ID token and returns { email, key } for the proven address.
 * Verification is delegated to Google's own tokeninfo endpoint (it checks the
 * signature and expiry); we additionally require our audience, a Google issuer,
 * and a verified email address.
 */
function googleLogin_(idToken, inviteToken) {
  var clientId = String(PropertiesService.getScriptProperties().getProperty('googleClientId') || '');
  if (!clientId) {
    return jsonOut_({ ok: false, error: 'Google sign-in is not enabled on this backend yet — run setupGoogleLogin() in the Apps Script editor (see EMAIL-SETUP.md).' });
  }
  var token = String(idToken == null ? '' : idToken);
  if (!token) return jsonOut_({ ok: false, error: 'The Google credential was missing. Try signing in again.' });

  var payload = null;
  try {
    var res = UrlFetchApp.fetch(
      'https://oauth2.googleapis.com/tokeninfo?id_token=' + encodeURIComponent(token),
      { muteHttpExceptions: true });
    if (res.getResponseCode() === 200) payload = JSON.parse(res.getContentText());
  } catch (err) {
    Logger.log('googleLogin tokeninfo error: ' + err);
    payload = null;
  }

  if (!payload || payload.aud !== clientId ||
      (payload.iss !== 'https://accounts.google.com' && payload.iss !== 'accounts.google.com') ||
      String(payload.email_verified) !== 'true') {
    Logger.log('googleLogin rejected: ' + (payload ? 'aud/iss/verification mismatch' : 'token not verifiable'));
    return jsonOut_({ ok: false, error: 'Google sign-in could not be verified. Try again.' });
  }

  var email = normalizeEmail_(payload.email);
  if (!isValidEmail_(email)) {
    return jsonOut_({ ok: false, error: 'Google returned an unusable email address.' });
  }

  var lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    // Members only (contract v5). A valid single-use invite token whitelists the
    // signing-in address on the spot; anyone else is turned away by name.
    if (!isAllowed_(email) && !consumeInvite_(inviteToken, email)) {
      Logger.log('googleLogin refused: ' + email + ' is not a member' +
                 (inviteToken ? ' (invite token invalid, used, or expired)' : ''));
      return jsonOut_({
        ok: false,
        code: 'notInvited',
        error: 'This Google account (' + email + ') is not on the member list. ' +
               'Ask the app owner for an invite link' +
               (inviteToken ? ' — the one you used has already been used or has expired.' : '.')
      });
    }

    var props = PropertiesService.getScriptProperties();
    var key = props.getProperty(keyKey_(email));
    if (!key) {
      key = generateKey_();
      props.setProperty(keyKey_(email), key);
      Logger.log('Sync key created via Google sign-in for ' + email);
    } else {
      Logger.log('Google sign-in: existing sync key returned to ' + email);
    }
    var sub = readSub_(email);
    return jsonOut_({
      ok: true,
      action: 'googleLogin',
      email: email,
      key: key,
      subscribed: !!sub,
      languages: (sub && sub.languages) ? sub.languages : []
    });
  } finally {
    lock.releaseLock();
  }
}

/**
 * Same alphabet the app uses (Crockford base32, no I/L/O/U) so keys stay typeable.
 * Entropy comes from Utilities.getUuid() (Java SecureRandom underneath) hashed through
 * SHA-256 — Math.random() is avoided because its xorshift state is recoverable from a
 * handful of observed outputs. 256 % 32 == 0, so the mapping below is unbiased.
 */
function generateKey_() {
  var alphabet = '0123456789ABCDEFGHJKMNPQRSTVWXYZ';
  var digest = Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256,
    Utilities.getUuid() + Utilities.getUuid());
  var out = '';
  for (var i = 0; i < 12; i++) {
    out += alphabet.charAt((digest[i] & 255) % alphabet.length);
  }
  return out;
}

/* ==================================================================
   MEMBERS + INVITES (contract v5)

   The app is invite-only: googleLogin_ and authorize_ both check the whitelist, so a
   non-member can neither sign in nor touch any stored data even if they know this URL.
   The account that owns this script is always a member — you can never lock yourself
   out. Everyone else gets in through addMember() or a single-use invite link.
   ================================================================== */

/** True when this address may use the app: the script owner, or a whitelisted member. */
function isAllowed_(email) {
  if (!email) return false;
  if (PropertiesService.getScriptProperties().getProperty(ALLOW_PREFIX + email)) return true;
  return normalizeEmail_(Session.getEffectiveUser().getEmail()) === email;
}

/**
 * Redeems a single-use invite token for the given (already Google-verified) address:
 * deletes the token and whitelists the address in one step. Returns false for a missing,
 * already-used, or expired token. Caller holds the script lock, so a token can never be
 * redeemed twice in a race.
 */
function consumeInvite_(token, email) {
  var t = String(token == null ? '' : token).trim();
  if (!t || t.length > 64 || !/^[0-9A-Z]+$/.test(t)) return false;

  var props = PropertiesService.getScriptProperties();
  var raw = props.getProperty(INVITE_PREFIX + t);
  if (!raw) return false;

  var rec = null;
  try { rec = JSON.parse(raw); } catch (err) { rec = null; }
  props.deleteProperty(INVITE_PREFIX + t);   // single-use, even when expired

  if (rec && rec.createdAt &&
      (Date.now() - new Date(rec.createdAt).getTime()) > INVITE_TTL_DAYS * 86400000) {
    Logger.log('Invite expired (unused for over ' + INVITE_TTL_DAYS + ' days): ' + t.slice(0, 4) + '…');
    return false;
  }

  props.setProperty(ALLOW_PREFIX + email, JSON.stringify({
    addedAt: new Date().toISOString(),
    via: 'invite' + (rec && rec.note ? ':' + rec.note : '')
  }));
  Logger.log('Invite redeemed: ' + email + ' is now a member.');
  return true;
}

/** 20-char single-use invite token from the same CSPRNG-backed digest as sync keys. */
function generateToken_() {
  var alphabet = '0123456789ABCDEFGHJKMNPQRSTVWXYZ';
  var digest = Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256,
    Utilities.getUuid() + Utilities.getUuid());
  var out = '';
  for (var i = 0; i < 20; i++) {
    out += alphabet.charAt((digest[i] & 255) % alphabet.length);
  }
  return out;
}

/** The invite URL for a token: app address + token + this backend's URL, all in the fragment. */
function inviteUrl_(token) {
  var be = SCRIPT_URL || ScriptApp.getService().getUrl() || '';
  if (be.indexOf('/dev') !== -1 || !/\/exec$/.test(be)) {
    Logger.log('WARNING: auto-detected backend URL looks wrong (' + be + '). ' +
               'Paste your real /exec URL into the SCRIPT_URL variable at the top and rerun.');
  }
  return APP_URL + '#invite=' + token + '&be=' +
         Utilities.base64EncodeWebSafe(be).replace(/=+$/, '');
}

/**
 * RUN THIS to invite someone: prints a single-use link (valid ~30 days) to the execution
 * log. Send it over any channel you like; the first Google account signed in with it
 * becomes a member. The link carries the backend address in the URL fragment, which
 * browsers never transmit to servers, so it stays out of request logs.
 */
function createInviteLink() {
  var token = generateToken_();
  PropertiesService.getScriptProperties().setProperty(INVITE_PREFIX + token,
    JSON.stringify({ createdAt: new Date().toISOString() }));
  var link = inviteUrl_(token);
  Logger.log('Single-use invite link (expires in ' + INVITE_TTL_DAYS + ' days if unused):\n\n' + link);
  return link;
}

/**
 * RUN THIS to invite someone by email: paste their address into TO, run, and they get a
 * short invitation email with their personal single-use link.
 */
function emailInvite() {
  var TO = 'PASTE-THEIR-EMAIL-HERE';
  if (TO.indexOf('PASTE-') === 0) {
    throw new Error('Edit emailInvite() first: replace the placeholder with the recipient address, then run again.');
  }
  var link = createInviteLink();
  MailApp.sendEmail({
    to: TO,
    subject: 'You’re invited to Word Goblin 🧌',
    name: SENDER_NAME,
    htmlBody:
      '<p>You’ve been invited to <b>Word Goblin</b> — a Korean + Chinese course with the ' +
      'etymology of every word.</p>' +
      '<p><a href="' + link + '">Accept the invite and open the app</a> (sign in with the Google ' +
      'account you want to use — the link works once).</p>' +
      '<p style="color:#8a8378;font-size:13px;">If the link has expired, ask for a new one.</p>',
    body: 'You’re invited to Word Goblin.\n\nOpen this link and sign in with Google (it works once):\n' +
          link + '\n\nIf it has expired, ask for a new one.'
  });
  Logger.log('Invite emailed to ' + TO);
}

/** RUN THIS to whitelist an address directly (no invite link). */
function addMember() {
  var EMAIL = 'PASTE-THEIR-EMAIL-HERE';
  if (EMAIL.indexOf('PASTE-') === 0) {
    throw new Error('Edit addMember() first: replace the placeholder with the member address, then run again.');
  }
  var email = normalizeEmail_(EMAIL);
  if (!isValidEmail_(email)) throw new Error('"' + EMAIL + '" does not look like an email address.');
  PropertiesService.getScriptProperties().setProperty(ALLOW_PREFIX + email,
    JSON.stringify({ addedAt: new Date().toISOString(), via: 'addMember' }));
  Logger.log(email + ' is now a member.');
}

/**
 * RUN THIS to remove a member. They can no longer sign in or sync, but their stored
 * data stays until you (or they, while still signed in) run deleteAll for the address.
 */
function removeMember() {
  var EMAIL = 'PASTE-THEIR-EMAIL-HERE';
  if (EMAIL.indexOf('PASTE-') === 0) {
    throw new Error('Edit removeMember() first: replace the placeholder with the member address, then run again.');
  }
  var email = normalizeEmail_(EMAIL);
  PropertiesService.getScriptProperties().deleteProperty(ALLOW_PREFIX + email);
  Logger.log(email + ' removed from the member list. Their synced data is untouched — ' +
             'run deleteAll-style cleanup separately if you want it gone.');
}

/** Prints the member list and any outstanding (unredeemed) invites. */
function listMembers() {
  var props = PropertiesService.getScriptProperties();
  var keys = props.getKeys().sort();
  var members = 0, invites = 0;

  Logger.log('Owner (always a member): ' + normalizeEmail_(Session.getEffectiveUser().getEmail()));
  for (var i = 0; i < keys.length; i++) {
    if (keys[i].indexOf(ALLOW_PREFIX) === 0) {
      members++;
      Logger.log('Member: ' + keys[i].slice(ALLOW_PREFIX.length) + '  ' + (props.getProperty(keys[i]) || ''));
    } else if (keys[i].indexOf(INVITE_PREFIX) === 0) {
      invites++;
      Logger.log('Open invite: ' + keys[i].slice(INVITE_PREFIX.length).slice(0, 4) + '…  ' +
                 (props.getProperty(keys[i]) || ''));
    }
  }
  Logger.log(members + ' member(s) besides you, ' + invites + ' unredeemed invite(s).');
}

/* ==================================================================
   PROGRESS SYNC (cross-device)
   ================================================================== */

/**
 * Stores the app's whole progress object for this address.
 *
 * A Script Property value cannot exceed 9 KB, so the serialized blob is split into 8 KB
 * chunks written to prog:<email>:0, prog:<email>:1, … with a progmeta:<email> record
 * describing the set. Chunks left over from a previous, larger save are deleted so a
 * shorter blob can never be read back with stale tail data appended.
 *
 * Works whether or not the address is subscribed to the emails — progress sync and the
 * email subscription are independent features.
 */
function saveProgress_(email, key, updatedAt, progress) {
  if (progress === null || progress === undefined || typeof progress !== 'object') {
    return jsonOut_({ ok: false, error: 'saveProgress requires a "progress" object.' });
  }

  var serialized;
  try {
    serialized = JSON.stringify(progress);
  } catch (err) {
    return jsonOut_({ ok: false, error: 'progress could not be serialized: ' + err });
  }

  if (serialized.length > MAX_PROGRESS_BYTES) {
    return jsonOut_({
      ok: false,
      error: 'progress is ' + serialized.length + ' bytes, over the ' +
             MAX_PROGRESS_BYTES + ' byte limit.'
    });
  }

  var stamp = (typeof updatedAt === 'string' && updatedAt) ? updatedAt : new Date().toISOString();
  var chunkCount = Math.ceil(serialized.length / PROGRESS_CHUNK_BYTES) || 1;

  var lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    if (!authorize_(email, key)) return badKey_(email, 'saveProgress');

    var props = PropertiesService.getScriptProperties();
    var batch = {};
    for (var i = 0; i < chunkCount; i++) {
      batch[progKey_(email, i)] = serialized.substr(i * PROGRESS_CHUNK_BYTES, PROGRESS_CHUNK_BYTES);
    }
    batch[progmetaKey_(email)] = JSON.stringify({
      chunks: chunkCount,
      bytes: serialized.length,
      updatedAt: stamp
    });
    props.setProperties(batch);          // one call, so a partial write is far less likely

    var removed = deleteProgressChunks_(email, chunkCount);   // drop any longer previous blob

    Logger.log('saveProgress ' + email + ': ' + serialized.length + ' bytes in ' + chunkCount +
               ' chunk(s)' + (removed ? ', ' + removed + ' stale chunk(s) removed' : ''));

    return jsonOut_({
      ok: true,
      action: 'saveProgress',
      email: email,
      bytes: serialized.length,
      chunks: chunkCount,
      updatedAt: stamp
    });
  } finally {
    lock.releaseLock();
  }
}

/**
 * Returns the stored progress object, or progress:null when this address has never saved.
 * Used by both the POST action and the GET fallback path.
 */
function loadProgress_(email, key) {
  if (!authorize_(email, key)) return badKey_(email, 'loadProgress');

  var meta = readJsonProperty_(progmetaKey_(email));
  if (!meta || !meta.chunks) {
    return jsonOut_({ ok: true, action: 'loadProgress', email: email, progress: null });
  }

  var props = PropertiesService.getScriptProperties();
  var parts = [];
  for (var i = 0; i < meta.chunks; i++) {
    var part = props.getProperty(progKey_(email, i));
    if (part === null) {
      // A missing chunk means the blob cannot be reassembled. Say so rather than returning
      // null, which the client would read as "nothing saved yet" and could then overwrite.
      Logger.log('loadProgress ' + email + ': chunk ' + i + ' of ' + meta.chunks + ' missing.');
      return jsonOut_({
        ok: false,
        error: 'Stored progress is incomplete (chunk ' + i + ' of ' + meta.chunks +
               ' missing). Save again from a device that still has your progress.'
      });
    }
    parts.push(part);
  }

  var raw = parts.join('');
  try {
    return jsonOut_({
      ok: true,
      action: 'loadProgress',
      email: email,
      progress: JSON.parse(raw),
      updatedAt: meta.updatedAt || null,
      bytes: raw.length
    });
  } catch (err) {
    Logger.log('loadProgress ' + email + ': stored blob will not parse: ' + err);
    return jsonOut_({ ok: false, error: 'Stored progress is corrupt and could not be read.' });
  }
}

/**
 * Wipes everything held for this address: subscription, lesson queues, progress chunks,
 * progress metadata and the sync key itself. After this the address is unknown again and
 * the next request presenting a key claims a fresh one.
 */
function deleteAll_(email, key) {
  var lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    if (!authorize_(email, key)) return badKey_(email, 'deleteAll');

    var props = PropertiesService.getScriptProperties();
    var hadSub = !!readSub_(email);
    var hadProgress = !!props.getProperty(progmetaKey_(email));

    props.deleteProperty(subKey_(email));
    for (var i = 0; i < LANGUAGE_ORDER.length; i++) {
      props.deleteProperty(queueKey_(email, LANGUAGE_ORDER[i]));
    }
    props.deleteProperty(progmetaKey_(email));
    var chunks = deleteProgressChunks_(email, 0);
    props.deleteProperty(keyKey_(email));

    Logger.log('deleteAll for ' + email + ': subscription=' + hadSub + ', progress=' + hadProgress +
               ', ' + chunks + ' chunk(s) removed, sync key cleared.');

    return jsonOut_({
      ok: true,
      action: 'deleteAll',
      email: email,
      deleted: { subscription: hadSub, progress: hadProgress, chunks: chunks, key: true }
    });
  } finally {
    lock.releaseLock();
  }
}

/**
 * Deletes prog:<email>:<n> properties with n >= fromIndex. Scans the key list rather than
 * trusting the metadata, so orphaned chunks from an interrupted save are cleaned up too.
 * Returns how many were removed.
 */
function deleteProgressChunks_(email, fromIndex) {
  var props = PropertiesService.getScriptProperties();
  var prefix = PROG_PREFIX + email + ':';
  var keys = props.getKeys();
  var removed = 0;

  for (var i = 0; i < keys.length; i++) {
    if (keys[i].indexOf(prefix) !== 0) continue;
    var index = parseInt(keys[i].slice(prefix.length), 10);
    if (isNaN(index) || index >= fromIndex) {
      props.deleteProperty(keys[i]);
      removed++;
    }
  }
  return removed;
}

/* ==================================================================
   QUEUE STORAGE + VALIDATION
   ================================================================== */

/**
 * Validates, trims and writes one queue property per language.
 * Returns a per-language report, e.g. { korean: {stored: 8}, chinese: {error: "..."} }.
 *
 * Caps are enforced here as well as in the client, because a malformed or oversized
 * payload must never be written: Script Properties reject values over 9 KB, which would
 * throw mid-write and could leave a subscriber with a half-updated queue.
 */
function storeQueues_(email, queues) {
  var report = {};
  var props = PropertiesService.getScriptProperties();

  for (var i = 0; i < LANGUAGE_ORDER.length; i++) {
    var lang = LANGUAGE_ORDER[i];
    if (!Object.prototype.hasOwnProperty.call(queues, lang)) continue;

    var raw = queues[lang];
    if (!Array.isArray(raw)) {
      report[lang] = { error: 'queues.' + lang + ' must be an array.' };
      continue;
    }

    // 1. Clean every item and drop anything without a term. Hard cap on count.
    var items = [];
    for (var j = 0; j < raw.length && items.length < MAX_QUEUE_ITEMS; j++) {
      var clean = sanitizeItem_(raw[j]);
      if (clean) items.push(clean);
    }

    if (!items.length) {
      // An empty array is a legitimate "nothing queued" signal: clear the stored queue.
      props.deleteProperty(queueKey_(email, lang));
      report[lang] = { stored: 0, cleared: true };
      continue;
    }

    // 2. Shrink from the end until the serialized record fits under the byte ceiling.
    var record = { items: items, pointer: 0, syncedAt: new Date().toISOString() };
    var dropped = 0;
    var serialized = JSON.stringify(record);
    while (serialized.length > MAX_QUEUE_BYTES && record.items.length > 1) {
      record.items.pop();
      dropped++;
      serialized = JSON.stringify(record);
    }

    // 3. If even a single item is too large, reject this language rather than corrupt storage.
    if (serialized.length > MAX_QUEUE_BYTES) {
      var msg = 'queues.' + lang + ' rejected: a single item serializes to ' +
                serialized.length + ' bytes, over the ' + MAX_QUEUE_BYTES + ' byte limit.';
      Logger.log(msg + ' (' + email + ')');
      report[lang] = { error: msg };
      continue;   // leave any previously stored queue intact
    }

    props.setProperty(queueKey_(email, lang), serialized);
    report[lang] = { stored: record.items.length, bytes: serialized.length };
    if (dropped) report[lang].droppedForSize = dropped;
  }

  return report;
}

/**
 * Normalizes one QueueItem. Returns null if it has no usable term.
 * Shape: {term, roman, gloss, pos, unit, example:{text,roman,gloss}, origin, background:[…]}
 */
function sanitizeItem_(raw) {
  if (!raw || typeof raw !== 'object') return null;

  var term = trimField_(raw.term);
  if (!term) return null;

  var item = { term: term };
  if (trimField_(raw.roman)) item.roman = trimField_(raw.roman);
  if (trimField_(raw.gloss)) item.gloss = trimField_(raw.gloss);
  if (trimField_(raw.pos)) item.pos = trimField_(raw.pos);
  if (trimField_(raw.unit)) item.unit = trimField_(raw.unit);
  if (trimField_(raw.origin)) item.origin = trimField_(raw.origin);

  if (raw.example && typeof raw.example === 'object') {
    var ex = {};
    if (trimField_(raw.example.text)) ex.text = trimField_(raw.example.text);
    if (trimField_(raw.example.roman)) ex.roman = trimField_(raw.example.roman);
    if (trimField_(raw.example.gloss)) ex.gloss = trimField_(raw.example.gloss);
    if (ex.text) item.example = ex;
  }

  var background = [];
  var src = Array.isArray(raw.background) ? raw.background : (raw.background ? [raw.background] : []);
  for (var i = 0; i < src.length && background.length < MAX_BACKGROUND_PARAGRAPHS; i++) {
    var para = truncate_(String(src[i] == null ? '' : src[i]).trim(), MAX_BACKGROUND_CHARS);
    if (para) background.push(para);
  }
  if (background.length) item.background = background;

  return item;
}

function trimField_(value) {
  return truncate_(String(value == null ? '' : value).trim(), MAX_FIELD_CHARS);
}

function truncate_(text, max) {
  return text.length > max ? text.slice(0, max - 1).trim() + '…' : text;
}

/* ==================================================================
   DAILY SEND — this is what the trigger calls
   ================================================================== */

/**
 * Emails every subscriber their mini-lesson. Safe to run by hand at any time to test.
 * Each recipient is wrapped in its own try/catch so one bad address (or hitting the
 * free 100-emails-per-day Gmail quota) cannot stop the rest of the run.
 */
function sendDailyReminders() {
  migrateLegacy_();

  var emails = listSubscriberEmails_();
  var tip = tipOfTheDay_();
  var sent = 0;
  var failed = 0;

  Logger.log('sendDailyReminders: ' + emails.length + ' subscriber(s), quota remaining = ' +
             MailApp.getRemainingDailyQuota());

  for (var i = 0; i < emails.length; i++) {
    var address = emails[i];
    var record = readSub_(address) || {};
    var langs = normalizeLanguages_(record.languages);
    if (!langs.length) langs = LANGUAGE_ORDER.slice();

    // Stop cleanly rather than throwing once the daily quota is exhausted.
    if (MailApp.getRemainingDailyQuota() <= 0) {
      Logger.log('Daily MailApp quota exhausted — ' + (emails.length - i) +
                 ' subscriber(s) not emailed today. They will be reached tomorrow.');
      break;
    }

    try {
      // Take one lesson per active language; pointers advance only after a successful send.
      var lessons = [];
      for (var j = 0; j < langs.length; j++) {
        lessons.push({ lang: langs[j], item: peekLesson_(address, langs[j]) });
      }

      MailApp.sendEmail({
        to: address,
        subject: subjectFor_(lessons),
        name: SENDER_NAME,
        htmlBody: buildHtmlEmail_(lessons, tip),
        body: buildPlainEmail_(lessons, tip)   // fallback for plain-text mail clients
      });
      sent++;

      for (var k = 0; k < lessons.length; k++) {
        if (lessons[k].item) advancePointer_(address, lessons[k].lang);
      }
    } catch (err) {
      failed++;
      Logger.log('Failed to email ' + address + ': ' + err);
    }
  }

  Logger.log('sendDailyReminders done: ' + sent + ' sent, ' + failed + ' failed.');
}

/** Today's item for one language, or null if there is no queue / it is used up. */
function peekLesson_(email, lang) {
  var q = readQueue_(email, lang);
  if (!q || !q.items.length || q.pointer >= q.items.length) return null;
  return q.items[q.pointer];
}

/** Moves the queue pointer on by one after a lesson has actually been emailed. */
function advancePointer_(email, lang) {
  var q = readQueue_(email, lang);
  if (!q) return;
  q.pointer = Math.min(q.pointer + 1, q.items.length);
  PropertiesService.getScriptProperties().setProperty(queueKey_(email, lang), JSON.stringify(q));
}

/* ==================================================================
   EMAIL CONTENT
   ================================================================== */

/**
 * Subject line: leads with the actual word(s) of the day when a queue is available,
 * otherwise falls back to the plain reminder wording.
 */
function subjectFor_(lessons) {
  var withItems = lessons.filter(function (l) { return !!l.item; });

  if (withItems.length === 1) {
    var it = withItems[0].item;
    return 'Today’s word: ' + it.term + (it.gloss ? ' — ' + it.gloss : '');
  }
  if (withItems.length > 1) {
    return 'Today’s words: ' + withItems.map(function (l) { return l.item.term; }).join(' · ');
  }
  return 'Time for your ' + joinLabels_(lessons.map(function (l) { return l.lang; })) + ' study session';
}

/** Human-readable list of language labels: "Korean", "Korean & Chinese". */
function joinLabels_(langs) {
  var labels = langs.map(function (l) { return LANGUAGE_INFO[l].label; });
  return labels.length > 1 ? labels.join(' & ') : labels[0];
}

/**
 * Builds the mobile-friendly HTML email: one mini-lesson card per active language.
 * Email clients strip <style> blocks and ignore most modern CSS, so everything is
 * inline on tables — that is what actually renders the same in Gmail, Outlook and iOS Mail.
 */
function buildHtmlEmail_(lessons, tip) {
  var primary = LANGUAGE_INFO[lessons[0].lang];
  var gradient = 'linear-gradient(90deg,' + primary.from + ',' + primary.to + ')';
  var anyLesson = lessons.some(function (l) { return !!l.item; });

  var cards = lessons.map(function (l) {
    return l.item ? lessonCardHtml_(l.lang, l.item) : fallbackCardHtml_(l.lang);
  }).join('');

  return '' +
  '<!-- Word Goblin daily mini-lesson -->' +
  '<div style="margin:0;padding:24px 12px;background:#f3efe6;' +
       'font-family:-apple-system,BlinkMacSystemFont,\'Segoe UI\',\'Malgun Gothic\',' +
       '\'Microsoft YaHei\',Roboto,Helvetica,Arial,sans-serif;">' +
    '<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" ' +
           'style="max-width:520px;margin:0 auto;background:#fdfbf6;border-radius:14px;' +
           'overflow:hidden;box-shadow:0 2px 10px rgba(43,42,40,0.10);">' +

      // Accent bar
      '<tr><td style="height:6px;background:' + primary.from + ';' +
          'background-image:' + gradient + ';font-size:0;line-height:0;">&nbsp;</td></tr>' +

      // Header
      '<tr><td style="padding:26px 26px 4px 26px;">' +
        '<p style="margin:0 0 6px 0;font-size:12px;letter-spacing:1.5px;text-transform:uppercase;' +
           'color:#8a8378;">Word Goblin</p>' +
        '<h1 style="margin:0 0 10px 0;font-size:22px;line-height:1.3;color:#2b2a28;font-weight:600;">' +
          (anyLesson
            ? 'Your mini-lesson for today'
            : 'Time for your ' + joinLabels_(lessons.map(function (l) { return l.lang; })) +
              ' study session') +
        '</h1>' +
      '</td></tr>' +

      // Lesson cards
      '<tr><td style="padding:8px 26px 0 26px;">' + cards + '</td></tr>' +

      // Tip of the day
      '<tr><td style="padding:6px 26px 22px 26px;">' +
        '<p style="margin:0;font-size:13px;line-height:1.6;color:#6f6a60;">' +
          '<b style="color:#8a8378;">Tip of the day:</b> ' + escapeHtml_(tip) +
        '</p>' +
      '</td></tr>' +

      // Footer
      '<tr><td style="padding:0 26px 26px 26px;border-top:1px solid #e7e0d2;">' +
        '<p style="margin:16px 0 0 0;font-size:12px;line-height:1.6;color:#8a8378;">' +
          'You are getting this because you asked Word Goblin for a daily lesson. ' +
          'To stop them, open the app → <b>Settings</b> → <b>Unsubscribe</b>.' +
        '</p>' +
      '</td></tr>' +

    '</table>' +
  '</div>';
}

/** One language's word-of-the-day card. */
function lessonCardHtml_(lang, item) {
  var info = LANGUAGE_INFO[lang];
  var html = '' +
  '<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" ' +
         'style="margin:0 0 18px 0;background:#ffffff;border:1px solid #e7e0d2;' +
         'border-top:3px solid ' + info.from + ';border-radius:10px;">' +
    '<tr><td style="padding:18px 18px 16px 18px;">' +

      // Track + unit attribution
      '<p style="margin:0 0 12px 0;font-size:11px;letter-spacing:1.2px;text-transform:uppercase;' +
         'color:' + info.from + ';">' +
        escapeHtml_(info.native) + ' &middot; ' + escapeHtml_(info.label) +
        (item.unit
          ? ' <span style="color:#a39b8d;">&nbsp;|&nbsp; ' + escapeHtml_(item.unit) + '</span>'
          : '') +
      '</p>' +

      // The word itself
      '<p style="margin:0 0 4px 0;font-size:40px;line-height:1.25;color:#2b2a28;font-weight:600;">' +
        escapeHtml_(item.term) +
      '</p>' +
      (item.roman
        ? '<p style="margin:0 0 2px 0;font-size:16px;line-height:1.4;color:' + info.from + ';">' +
            escapeHtml_(item.roman) + '</p>'
        : '') +
      '<p style="margin:0 0 14px 0;font-size:17px;line-height:1.5;color:#4a463f;">' +
        escapeHtml_(item.gloss || '') +
        (item.pos
          ? ' <span style="font-size:13px;color:#8a8378;font-style:italic;">(' +
            escapeHtml_(item.pos) + ')</span>'
          : '') +
      '</p>';

  // Example sentence
  if (item.example && item.example.text) {
    html +=
      '<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" ' +
             'style="margin:0 0 14px 0;background:#f6f1e6;border-left:3px solid ' + info.to + ';' +
             'border-radius:6px;">' +
        '<tr><td style="padding:12px 14px;">' +
          '<p style="margin:0 0 4px 0;font-size:18px;line-height:1.6;color:#2b2a28;">' +
            escapeHtml_(item.example.text) + '</p>' +
          (item.example.roman
            ? '<p style="margin:0 0 4px 0;font-size:13px;line-height:1.5;color:#8a8378;">' +
                escapeHtml_(item.example.roman) + '</p>'
            : '') +
          (item.example.gloss
            ? '<p style="margin:0;font-size:14px;line-height:1.5;color:#4a463f;">' +
                escapeHtml_(item.example.gloss) + '</p>'
            : '') +
        '</td></tr>' +
      '</table>';
  }

  // Background / etymology
  if (item.background && item.background.length) {
    html +=
      '<p style="margin:0 0 6px 0;font-size:11px;letter-spacing:1.2px;text-transform:uppercase;' +
         'color:#8a8378;">Background' +
        (item.origin
          ? ' <span style="text-transform:none;letter-spacing:0;color:#a39b8d;">— ' +
            escapeHtml_(item.origin) + '</span>'
          : '') +
      '</p>';
    for (var i = 0; i < item.background.length; i++) {
      html += '<p style="margin:0 0 8px 0;font-size:14px;line-height:1.65;color:#4a463f;">' +
                escapeHtml_(item.background[i]) + '</p>';
    }
  } else if (item.origin) {
    html += '<p style="margin:0;font-size:13px;line-height:1.5;color:#8a8378;">Origin: ' +
              escapeHtml_(item.origin) + '</p>';
  }

  return html + '</td></tr></table>';
}

/** Shown for a language whose queue is missing or used up. */
function fallbackCardHtml_(lang) {
  var info = LANGUAGE_INFO[lang];
  return '' +
  '<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" ' +
         'style="margin:0 0 18px 0;background:#ffffff;border:1px solid #e7e0d2;' +
         'border-top:3px solid ' + info.from + ';border-radius:10px;">' +
    '<tr><td style="padding:18px;">' +
      '<p style="margin:0 0 10px 0;font-size:11px;letter-spacing:1.2px;text-transform:uppercase;' +
         'color:' + info.from + ';">' +
        escapeHtml_(info.native) + ' &middot; ' + escapeHtml_(info.label) +
      '</p>' +
      '<p style="margin:0;font-size:15px;line-height:1.6;color:#4a463f;">' +
        'No ' + escapeHtml_(info.label) + ' word queued for today. ' +
        'Open Word Goblin to refresh your lesson queue — it syncs automatically as you study, ' +
        'and tomorrow’s email will pick up where you left off.' +
      '</p>' +
    '</td></tr>' +
  '</table>';
}

/** Plain-text version of the same email. */
function buildPlainEmail_(lessons, tip) {
  var out = [];
  var anyLesson = lessons.some(function (l) { return !!l.item; });

  out.push(anyLesson
    ? 'Your Word Goblin mini-lesson for today'
    : 'Time for your ' + joinLabels_(lessons.map(function (l) { return l.lang; })) + ' study session');
  out.push('');

  for (var i = 0; i < lessons.length; i++) {
    var lang = lessons[i].lang;
    var item = lessons[i].item;
    var info = LANGUAGE_INFO[lang];

    out.push('== ' + info.label + ' (' + info.native + ') ==');

    if (!item) {
      out.push('No word queued for today. Open Word Goblin to refresh your lesson queue.');
      out.push('');
      continue;
    }

    if (item.unit) out.push(item.unit);
    out.push(item.term + (item.roman ? '  [' + item.roman + ']' : ''));
    out.push((item.gloss || '') + (item.pos ? ' (' + item.pos + ')' : ''));

    if (item.example && item.example.text) {
      out.push('');
      out.push('  ' + item.example.text);
      if (item.example.roman) out.push('  ' + item.example.roman);
      if (item.example.gloss) out.push('  ' + item.example.gloss);
    }

    if (item.background && item.background.length) {
      out.push('');
      out.push('Background' + (item.origin ? ' (' + item.origin + ')' : '') + ':');
      for (var j = 0; j < item.background.length; j++) out.push(item.background[j]);
    } else if (item.origin) {
      out.push('Origin: ' + item.origin);
    }
    out.push('');
  }

  out.push('Tip of the day: ' + tip);
  out.push('');
  out.push('--');
  out.push('To stop these emails, open the app -> Settings -> Unsubscribe.');
  return out.join('\n');
}

/** Picks the tip for today from the day of the year, so it rotates through the list. */
function tipOfTheDay_() {
  var day = parseInt(Utilities.formatDate(new Date(), scriptTimezone_(), 'D'), 10) || 1;
  return STUDY_TIPS[(day - 1) % STUDY_TIPS.length];
}

/* ==================================================================
   TRIGGER INSTALLATION
   ================================================================== */

/**
 * Run this ONCE from the Apps Script editor (and again whenever you change
 * REMINDER_HOUR). It is idempotent: any existing sendDailyReminders trigger is
 * removed first, so you can never end up with duplicate daily emails.
 */
function setupTrigger() {
  var removed = 0;
  var triggers = ScriptApp.getProjectTriggers();
  for (var i = 0; i < triggers.length; i++) {
    if (triggers[i].getHandlerFunction() === 'sendDailyReminders') {
      ScriptApp.deleteTrigger(triggers[i]);
      removed++;
    }
  }

  ScriptApp.newTrigger('sendDailyReminders')
    .timeBased()
    .atHour(REMINDER_HOUR)
    .everyDays(1)
    .create();

  var msg = 'Daily lesson trigger installed for ~' + REMINDER_HOUR + ':00 (' + scriptTimezone_() + ').' +
            (removed ? ' Removed ' + removed + ' old trigger(s).' : '');
  Logger.log(msg);
  return msg;
}

/** True if the daily trigger is currently installed (used by doGet's status output). */
function hasDailyTrigger_() {
  var triggers = ScriptApp.getProjectTriggers();
  for (var i = 0; i < triggers.length; i++) {
    if (triggers[i].getHandlerFunction() === 'sendDailyReminders') return true;
  }
  return false;
}

/* ==================================================================
   MANUAL HELPERS — run from the editor when troubleshooting
   ================================================================== */

/** Prints subscribers and their queue state (words left, last sync) to the execution log. */
function listSubscribers() {
  migrateLegacy_();

  var emails = listSubscriberEmails_();
  for (var i = 0; i < emails.length; i++) {
    var email = emails[i];
    var sub = readSub_(email) || {};
    var parts = [];
    for (var j = 0; j < LANGUAGE_ORDER.length; j++) {
      var lang = LANGUAGE_ORDER[j];
      var q = readQueue_(email, lang);
      parts.push(q
        ? lang + ': ' + (q.items.length - q.pointer) + ' of ' + q.items.length +
          ' left, synced ' + q.syncedAt
        : lang + ': no queue');
    }
    Logger.log(email + '  [' + (sub.languages || []).join(', ') + ']  ' + parts.join('  |  '));
  }
  Logger.log(emails.length + ' subscriber(s).');
}

/**
 * Sends one sample email to the Google account running the script, WITHOUT advancing
 * any pointers. Uses your real queue if you are subscribed, otherwise a built-in demo
 * word so you can see the mini-lesson layout before the app has synced anything.
 */
function sendTestEmail() {
  var me = Session.getEffectiveUser().getEmail();
  var address = normalizeEmail_(me);
  var sub = readSub_(address);
  var langs = sub ? normalizeLanguages_(sub.languages) : [];
  if (!langs.length) langs = LANGUAGE_ORDER.slice();

  var lessons = langs.map(function (lang) {
    return { lang: lang, item: peekLesson_(address, lang) || demoItem_(lang) };
  });

  MailApp.sendEmail({
    to: me,
    subject: '[Test] ' + subjectFor_(lessons),
    name: SENDER_NAME,
    htmlBody: buildHtmlEmail_(lessons, tipOfTheDay_()),
    body: buildPlainEmail_(lessons, tipOfTheDay_())
  });
  Logger.log('Test mini-lesson sent to ' + me + ' (pointers not advanced).');
}

/**
 * Overview of everything the script stores, per address: subscription, sync key present,
 * saved progress size and age. Key VALUES are not printed here — use showMyKeys for that.
 */
function listStoredData() {
  migrateLegacy_();

  var props = PropertiesService.getScriptProperties();
  var emails = allKnownEmails_();

  for (var i = 0; i < emails.length; i++) {
    var email = emails[i];
    var sub = readSub_(email);
    var meta = readJsonProperty_(progmetaKey_(email));
    var queues = [];

    for (var j = 0; j < LANGUAGE_ORDER.length; j++) {
      var q = readQueue_(email, LANGUAGE_ORDER[j]);
      if (q) queues.push(LANGUAGE_ORDER[j] + ' ' + (q.items.length - q.pointer) + '/' + q.items.length);
    }

    Logger.log(
      email +
      '\n    subscribed : ' + (sub ? 'yes [' + (sub.languages || []).join(', ') + ']' : 'no') +
      '\n    queues     : ' + (queues.length ? queues.join(', ') : 'none') +
      '\n    sync key   : ' + (props.getProperty(keyKey_(email)) ? 'set' : 'not set') +
      '\n    progress   : ' + (meta ? meta.bytes + ' bytes in ' + meta.chunks + ' chunk(s), updated ' +
                                      meta.updatedAt : 'none')
    );
  }
  Logger.log(emails.length + ' address(es) stored.');
}

/**
 * Prints the sync keys in plain text — this is the intended recovery path when you have
 * forgotten the key you generated on your first device.
 *
 * It is safe because only you can run it: the Apps Script editor and its execution log are
 * private to the Google account that owns this project. Do not screen-share the output.
 */
function showMyKeys() {
  var props = PropertiesService.getScriptProperties();
  var emails = allKnownEmails_();
  var found = 0;

  for (var i = 0; i < emails.length; i++) {
    var key = props.getProperty(keyKey_(emails[i]));
    if (!key) continue;
    Logger.log(emails[i] + '  →  ' + key);
    found++;
  }
  Logger.log(found + ' sync key(s). Type the key exactly as shown into Settings on your other device.');
}

/** Sample content used only by sendTestEmail() when no real queue exists. */
function demoItem_(lang) {
  if (lang === 'chinese') {
    return {
      term: '学校', roman: 'xuéxiào', gloss: 'school', pos: 'noun',
      unit: 'Unit 5 · Visiting Friends', origin: 'compound (semantic)',
      example: { text: '我去学校。', roman: 'Wǒ qù xuéxiào.', gloss: 'I go to school.' },
      background: [
        '学 "to study" plus 校 "school building" — a transparent compound naming the place where studying happens.',
        'The pair was borrowed wholesale into Korean as 학교 and Japanese as 学校 (gakkō).'
      ]
    };
  }
  return {
    term: '학교', roman: 'hakgyo', gloss: 'school', pos: 'noun',
    unit: 'Unit 3 · Places & Location', origin: 'Sino-Korean',
    example: { text: '학교에 가요.', roman: 'hakgyoe gayo.', gloss: 'I go to school.' },
    background: [
      'From the hanja 學校, Middle Chinese *hɛwk-kˠaew — literally "study building".',
      'The 학 syllable recurs throughout the vocabulary of education: 학생 student, 학기 semester, 대학 university.'
    ]
  };
}

/* ==================================================================
   STORAGE
   ================================================================== */

function subKey_(email) { return SUB_PREFIX + email; }
function queueKey_(email, lang) { return QUEUE_PREFIX + email + ':' + lang; }
function keyKey_(email) { return KEY_PREFIX + email; }
function progKey_(email, index) { return PROG_PREFIX + email + ':' + index; }
function progmetaKey_(email) { return PROGMETA_PREFIX + email; }

/**
 * Every address this script holds anything for — subscribers, sync keys and progress
 * blobs alike. Used by the reporting helpers below.
 */
function allKnownEmails_() {
  var keys = PropertiesService.getScriptProperties().getKeys();
  var seen = {};
  var prefixes = [SUB_PREFIX, KEY_PREFIX, PROGMETA_PREFIX];

  for (var i = 0; i < keys.length; i++) {
    for (var j = 0; j < prefixes.length; j++) {
      if (keys[i].indexOf(prefixes[j]) === 0) {
        seen[keys[i].slice(prefixes[j].length)] = true;
        break;
      }
    }
  }
  return Object.keys(seen).sort();
}

/** All subscribed addresses, read from the sub: prefix (no separate index to keep in sync). */
function listSubscriberEmails_() {
  var keys = PropertiesService.getScriptProperties().getKeys();
  var out = [];
  for (var i = 0; i < keys.length; i++) {
    if (keys[i].indexOf(SUB_PREFIX) === 0) out.push(keys[i].slice(SUB_PREFIX.length));
  }
  return out.sort();
}

/** {languages, subscribedAt} or null. */
function readSub_(email) {
  var rec = readJsonProperty_(subKey_(email));
  if (!rec || typeof rec !== 'object') return null;
  if (!Array.isArray(rec.languages)) rec.languages = [];
  return rec;
}

function writeSub_(email, record) {
  PropertiesService.getScriptProperties().setProperty(subKey_(email), JSON.stringify(record));
}

/** {items, pointer, syncedAt} or null. */
function readQueue_(email, lang) {
  var rec = readJsonProperty_(queueKey_(email, lang));
  if (!rec || !Array.isArray(rec.items)) return null;
  rec.pointer = (typeof rec.pointer === 'number' && rec.pointer >= 0) ? rec.pointer : 0;
  return rec;
}

/** Parses a JSON property, returning null instead of throwing on a corrupt value. */
function readJsonProperty_(key) {
  var raw = PropertiesService.getScriptProperties().getProperty(key);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch (err) {
    Logger.log('Corrupt property "' + key + '", ignoring: ' + err);
    return null;
  }
}

/**
 * One-time upgrade from the v1 layout (a single "subscribers" blob) to the v2
 * per-subscriber keys. No-op once it has run, and harmless on fresh installs.
 */
function migrateLegacy_() {
  var props = PropertiesService.getScriptProperties();
  var raw = props.getProperty(LEGACY_KEY);
  if (!raw) return;

  try {
    var old = JSON.parse(raw) || {};
    var emails = Object.keys(old);
    for (var i = 0; i < emails.length; i++) {
      var email = normalizeEmail_(emails[i]);
      if (!isValidEmail_(email) || readSub_(email)) continue;
      var rec = old[emails[i]] || {};
      writeSub_(email, {
        languages: normalizeLanguages_(rec.languages),
        subscribedAt: rec.subscribedAt || new Date().toISOString()
      });
    }
    Logger.log('Migrated ' + emails.length + ' subscriber(s) from the v1 storage layout.');
  } catch (err) {
    Logger.log('Legacy migration skipped: ' + err);
  }
  props.deleteProperty(LEGACY_KEY);
}

/* ==================================================================
   SMALL UTILITIES
   ================================================================== */

/** Reads the POST body whether it arrived as text/plain JSON or as form parameters. */
function parseBody_(e) {
  if (!e) return null;

  if (e.postData && e.postData.contents) {
    try {
      return JSON.parse(e.postData.contents);
    } catch (err) {
      // Fall through: some clients form-encode instead.
    }
  }
  if (e.parameter && e.parameter.payload) {
    try {
      return JSON.parse(e.parameter.payload);
    } catch (err) { /* ignore */ }
  }
  if (e.parameter && e.parameter.action) return e.parameter;

  return null;
}

function normalizeEmail_(value) {
  return String(value == null ? '' : value).trim().toLowerCase();
}

/** Pragmatic email check: something@something.tld with no spaces. */
function isValidEmail_(email) {
  return /^[^\s@,;]+@[^\s@,;]+\.[A-Za-z]{2,}$/.test(email) && email.length <= 254;
}

/** Keeps only the languages this app knows about, de-duplicated and in a stable order. */
function normalizeLanguages_(languages) {
  var list = Array.isArray(languages) ? languages : (languages ? [languages] : []);
  var seen = {};
  for (var i = 0; i < list.length; i++) {
    var key = String(list[i]).trim().toLowerCase();
    if (LANGUAGE_INFO[key]) seen[key] = true;
  }
  // Stable display order: Korean first, then Chinese.
  return LANGUAGE_ORDER.filter(function (l) { return seen[l]; });
}

/** Escapes text that gets dropped into the HTML email. */
function escapeHtml_(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function scriptTimezone_() {
  return Session.getScriptTimeZone();
}

/** Wraps any object as a JSON web-app response. */
function jsonOut_(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
