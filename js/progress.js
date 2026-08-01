/* Word Goblin — js/progress.js
 *
 * FableProgress: all persistent state, stored in localStorage under `wordGoblin.v1`.
 * Storage shape:
 *   { version, korean: {units:{}, vocab:{}, streak, bestStreak, lastStudy, paused, exercises:{}},
 *     chinese: {...}, settings: {email, scriptUrl, activeLangs, theme, subscribed, lastSyncAt,
 *                                syncKey, syncEnabled, lastPushAt, lastPullAt} }
 * v3 adds mergeCloud(): "most progress wins" reconciliation with a cloud copy of this same
 * shape, so two devices can be brought into agreement without either losing work.
 * The two language objects are fully independent — nothing in one ever reads the other.
 * Streak = consecutive calendar days with any recorded activity in THAT language.
 * Falls back to an in-memory store if localStorage is unavailable (private mode / file://
 * restrictions) so the app still runs, just without persistence.
 */
window.FableProgress = (function () {
  'use strict';

  var KEY = 'wordGoblin.v1';
  var LANGS = ['korean', 'chinese'];
  var ALIASES = { ko: 'korean', kor: 'korean', korean: 'korean', zh: 'chinese', cmn: 'chinese', chinese: 'chinese' };

  var memoryStore = null;   // used when localStorage throws
  var state = null;
  var listeners = [];
  var sectionListeners = [];   // fired only when a section is newly marked complete

  function normLang(lang) {
    var k = String(lang == null ? '' : lang).toLowerCase().trim();
    return ALIASES[k] || (k.indexOf('zh') === 0 ? 'chinese' : 'korean');
  }

  /* ------------------------------------------------------------- storage io */

  function readRaw() {
    if (memoryStore !== null) return memoryStore;
    try { return window.localStorage.getItem(KEY); }
    catch (e) { memoryStore = null; return null; }
  }

  function writeRaw(str) {
    try { window.localStorage.setItem(KEY, str); }
    catch (e) { memoryStore = str; }
  }

  function blankLang() {
    return {
      units: {},        // unitId -> { sections: {i:true}, correct, attempts, quizzes: {i:{correct,total,at}} }
      vocab: {},        // term  -> { seen: n, mastery: n, again: n, last: iso }
      streak: 0,
      bestStreak: 0,
      lastStudy: null,  // "YYYY-MM-DD"
      days: 0,
      paused: false
    };
  }

  function blankState() {
    return {
      version: 1,
      korean: blankLang(),
      chinese: blankLang(),
      settings: {
        email: '',
        scriptUrl: '',
        activeLangs: ['korean', 'chinese'],
        theme: 'auto',           // auto | light | dark
        subscribed: false,
        lastSyncAt: null,        // ISO string — last mini-lesson queue upload
        syncKey: '',             // cross-device progress sync key (v3)
        syncEnabled: false,
        lastPushAt: null,        // ISO string — last saveProgress
        lastPullAt: null         // ISO string — last successful loadProgress
      }
    };
  }

  /* Merge whatever we found on disk onto a fresh skeleton, so a partial/old/corrupt
     payload can never crash the app. */
  function coerce(raw) {
    var fresh = blankState();
    if (!raw || typeof raw !== 'object') return fresh;
    for (var i = 0; i < LANGS.length; i++) {
      var L = LANGS[i], src = raw[L];
      if (!src || typeof src !== 'object') continue;
      var dst = fresh[L];
      if (src.units && typeof src.units === 'object') {
        for (var uid in src.units) {
          if (!Object.prototype.hasOwnProperty.call(src.units, uid)) continue;
          var u = src.units[uid];
          if (!u || typeof u !== 'object') continue;
          dst.units[uid] = {
            sections: (u.sections && typeof u.sections === 'object') ? u.sections : {},
            correct: num(u.correct),
            attempts: num(u.attempts),
            quizzes: (u.quizzes && typeof u.quizzes === 'object') ? u.quizzes : {}
          };
        }
      }
      if (src.vocab && typeof src.vocab === 'object') {
        for (var t in src.vocab) {
          if (!Object.prototype.hasOwnProperty.call(src.vocab, t)) continue;
          var v = src.vocab[t];
          if (!v || typeof v !== 'object') continue;
          dst.vocab[t] = { seen: num(v.seen), mastery: num(v.mastery), again: num(v.again), last: v.last || null };
        }
      }
      dst.streak = num(src.streak);
      dst.bestStreak = Math.max(num(src.bestStreak), dst.streak);
      dst.days = num(src.days);
      dst.lastStudy = typeof src.lastStudy === 'string' ? src.lastStudy : null;
      dst.paused = !!src.paused;
    }
    var s = raw.settings;
    if (s && typeof s === 'object') {
      if (typeof s.email === 'string') fresh.settings.email = s.email;
      if (typeof s.scriptUrl === 'string') fresh.settings.scriptUrl = s.scriptUrl;
      if (typeof s.theme === 'string' && ['auto', 'light', 'dark'].indexOf(s.theme) !== -1) fresh.settings.theme = s.theme;
      if (typeof s.lastSyncAt === 'string') fresh.settings.lastSyncAt = s.lastSyncAt;
      if (typeof s.lastPushAt === 'string') fresh.settings.lastPushAt = s.lastPushAt;
      if (typeof s.lastPullAt === 'string') fresh.settings.lastPullAt = s.lastPullAt;
      if (typeof s.syncKey === 'string') fresh.settings.syncKey = normalizeKey(s.syncKey);
      fresh.settings.syncEnabled = !!s.syncEnabled;
      fresh.settings.subscribed = !!s.subscribed;
      if (Object.prototype.toString.call(s.activeLangs) === '[object Array]') {
        var al = [];
        for (var j = 0; j < s.activeLangs.length; j++) {
          var n = normLang(s.activeLangs[j]);
          if (al.indexOf(n) === -1) al.push(n);
        }
        fresh.settings.activeLangs = al.length ? al : ['korean', 'chinese'];
      }
    }
    return fresh;
  }

  function num(x) { var n = Number(x); return (isFinite(n) && n > 0) ? n : 0; }

  /* Crockford-style base32 (no I/L/O/U) — unambiguous when typed on a second device. */
  var KEY_ALPHABET = '0123456789ABCDEFGHJKMNPQRSTVWXYZ';
  var KEY_LENGTH = 12;

  function normalizeKey(k) {
    return String(k == null ? '' : k).toUpperCase().replace(/[^0-9A-Z]/g, '').slice(0, 32);
  }

  /** generateSyncKey() — cryptographically random 12-char key (falls back to Math.random). */
  function generateSyncKey() {
    var out = '', i;
    var bytes = null;
    try {
      if (window.crypto && typeof window.crypto.getRandomValues === 'function') {
        bytes = new Uint8Array(KEY_LENGTH);
        window.crypto.getRandomValues(bytes);
      }
    } catch (e) { bytes = null; }
    for (i = 0; i < KEY_LENGTH; i++) {
      var n = bytes ? bytes[i] : Math.floor(Math.random() * 256);
      out += KEY_ALPHABET.charAt(n % KEY_ALPHABET.length);
    }
    return out;
  }

  function load() {
    var raw = readRaw(), parsed = null;
    if (raw) { try { parsed = JSON.parse(raw); } catch (e) { parsed = null; } }
    state = coerce(parsed);
    return state;
  }

  function save() {
    try { writeRaw(JSON.stringify(state)); } catch (e) { /* quota / cyclic — ignore */ }
    emit();
  }

  function emit() {
    for (var i = 0; i < listeners.length; i++) { try { listeners[i](state); } catch (e) {} }
  }

  function subscribe(fn) {
    if (typeof fn === 'function') listeners.push(fn);
    return function () {
      var i = listeners.indexOf(fn);
      if (i !== -1) listeners.splice(i, 1);
    };
  }

  /** onSectionComplete(fn(lang, unitId, i)) — app.js uses this to re-sync the lesson queue.
      Kept as a separate channel so this module stays free of any network concern. */
  function onSectionComplete(fn) {
    if (typeof fn === 'function') sectionListeners.push(fn);
    return function () {
      var i = sectionListeners.indexOf(fn);
      if (i !== -1) sectionListeners.splice(i, 1);
    };
  }

  /* ------------------------------------------------------------- date/streak */

  function dayKey(d) {
    d = d || new Date();
    var m = d.getMonth() + 1, day = d.getDate();
    return d.getFullYear() + '-' + (m < 10 ? '0' + m : m) + '-' + (day < 10 ? '0' + day : day);
  }

  function daysBetween(a, b) {
    // a, b are "YYYY-MM-DD"; returns whole days b - a (local, DST-safe enough at noon)
    var pa = a.split('-'), pb = b.split('-');
    var da = new Date(+pa[0], +pa[1] - 1, +pa[2], 12, 0, 0);
    var db = new Date(+pb[0], +pb[1] - 1, +pb[2], 12, 0, 0);
    return Math.round((db - da) / 86400000);
  }

  /** touch(lang) — register activity today and roll the streak forward. */
  function touch(lang) {
    var L = normLang(lang), s = state[L], today = dayKey();
    if (s.lastStudy === today) return s.streak;
    if (s.lastStudy && daysBetween(s.lastStudy, today) === 1) s.streak = s.streak + 1;
    else s.streak = 1;
    s.days = s.days + 1;
    s.lastStudy = today;
    if (s.streak > s.bestStreak) s.bestStreak = s.streak;
    return s.streak;
  }

  /** currentStreak(lang) — streak as of *now* (a missed day zeroes it without a write). */
  function currentStreak(lang) {
    var s = state[normLang(lang)];
    if (!s.lastStudy) return 0;
    var gap = daysBetween(s.lastStudy, dayKey());
    if (gap <= 0) return s.streak;
    if (gap === 1) return s.streak;   // yesterday: still alive today
    return 0;
  }

  function studiedToday(lang) {
    return state[normLang(lang)].lastStudy === dayKey();
  }

  /* ------------------------------------------------------------------ units */

  function unitRec(L, unitId) {
    var s = state[L];
    if (!s.units[unitId]) s.units[unitId] = { sections: {}, correct: 0, attempts: 0, quizzes: {} };
    var u = s.units[unitId];
    if (!u.sections) u.sections = {};
    if (!u.quizzes) u.quizzes = {};
    return u;
  }

  /** markSection(lang, unitId, i, value) — value defaults to true; pass false to un-mark. */
  function markSection(lang, unitId, i, value) {
    var L = normLang(lang), u = unitRec(L, unitId);
    var done = (value === undefined) ? true : !!value;
    var was = !!u.sections[String(i)];
    if (done) { u.sections[String(i)] = true; touch(L); }
    else { delete u.sections[String(i)]; }
    save();
    if (done && !was) {
      for (var n = 0; n < sectionListeners.length; n++) {
        try { sectionListeners[n](L, unitId, i); } catch (e) {}
      }
    }
    return done;
  }

  function toggleSection(lang, unitId, i) {
    return markSection(lang, unitId, i, !isSectionComplete(lang, unitId, i));
  }

  function isSectionComplete(lang, unitId, i) {
    var u = state[normLang(lang)].units[unitId];
    return !!(u && u.sections && u.sections[String(i)]);
  }

  function sectionsComplete(lang, unitId) {
    var u = state[normLang(lang)].units[unitId];
    if (!u || !u.sections) return 0;
    var n = 0;
    for (var k in u.sections) if (Object.prototype.hasOwnProperty.call(u.sections, k) && u.sections[k]) n++;
    return n;
  }

  /** unitPercent(lang, unitId, totalSections) → 0..100 */
  function unitPercent(lang, unitId, total) {
    total = Number(total) || 0;
    if (total <= 0) return 0;
    return Math.max(0, Math.min(100, Math.round(sectionsComplete(lang, unitId) / total * 100)));
  }

  function isUnitComplete(lang, unitId, total) {
    return total > 0 && sectionsComplete(lang, unitId) >= total;
  }

  /* -------------------------------------------------------------- exercises */

  function recordExercise(lang, unitId, ok) {
    var L = normLang(lang), u = unitRec(L, unitId);
    u.attempts = (u.attempts || 0) + 1;
    if (ok) u.correct = (u.correct || 0) + 1;
    touch(L);
    save();
    return u;
  }

  function recordQuiz(lang, unitId, sectionIndex, correct, total) {
    var L = normLang(lang), u = unitRec(L, unitId);
    u.quizzes[String(sectionIndex)] = {
      correct: Number(correct) || 0,
      total: Number(total) || 0,
      at: new Date().toISOString()
    };
    touch(L);
    save();
    return u.quizzes[String(sectionIndex)];
  }

  function quizResult(lang, unitId, sectionIndex) {
    var u = state[normLang(lang)].units[unitId];
    return (u && u.quizzes && u.quizzes[String(sectionIndex)]) || null;
  }

  /* ------------------------------------------------------------------ vocab */

  function vocabRec(L, term) {
    var s = state[L];
    if (!s.vocab[term]) s.vocab[term] = { seen: 0, mastery: 0, again: 0, last: null };
    return s.vocab[term];
  }

  /** vocabSeen(lang, term) — count an exposure (viewing a word card, hearing it in a quiz). */
  function vocabSeen(lang, term) {
    if (!term) return null;
    var L = normLang(lang), v = vocabRec(L, String(term));
    v.seen = (v.seen || 0) + 1;
    v.last = new Date().toISOString();
    save();
    return v;
  }

  /** vocabMastery(lang, term, delta) — bump the mastery counter (clamped 0..5). */
  function vocabMastery(lang, term, delta) {
    if (!term) return null;
    var L = normLang(lang), v = vocabRec(L, String(term));
    var d = Number(delta);
    if (!isFinite(d)) d = 1;
    v.mastery = Math.max(0, Math.min(5, (v.mastery || 0) + d));
    if (d < 0) v.again = (v.again || 0) + 1;
    if (!v.seen) v.seen = 1;
    v.last = new Date().toISOString();
    touch(L);
    save();
    return v;
  }

  function getVocab(lang, term) {
    return state[normLang(lang)].vocab[String(term)] || null;
  }

  function hasSeen(lang, term) {
    var v = state[normLang(lang)].vocab[String(term)];
    return !!(v && v.seen > 0);
  }

  function seenCount(lang) {
    var v = state[normLang(lang)].vocab, n = 0;
    for (var k in v) if (Object.prototype.hasOwnProperty.call(v, k) && v[k].seen > 0) n++;
    return n;
  }

  function masteredCount(lang, threshold) {
    var t = Number(threshold) || 3;
    var v = state[normLang(lang)].vocab, n = 0;
    for (var k in v) if (Object.prototype.hasOwnProperty.call(v, k) && v[k].mastery >= t) n++;
    return n;
  }

  /* ----------------------------------------------------------- pause & prefs */

  function setPaused(lang, bool) {
    var L = normLang(lang);
    state[L].paused = !!bool;
    var al = state.settings.activeLangs || [];
    var i = al.indexOf(L);
    if (state[L].paused) { if (i !== -1) al.splice(i, 1); }
    else if (i === -1) { al.push(L); }
    state.settings.activeLangs = al;
    save();
    return state[L].paused;
  }

  function isPaused(lang) { return !!state[normLang(lang)].paused; }

  function togglePaused(lang) { return setPaused(lang, !isPaused(lang)); }

  /* ------------------------------------------------- mini-lesson queue sync */

  /** markSynced() — record that the lesson queue was just uploaded. */
  function markSynced(when) {
    state.settings.lastSyncAt = (when instanceof Date ? when : new Date()).toISOString();
    save();
    return state.settings.lastSyncAt;
  }

  function lastSyncDate() {
    var s = state.settings.lastSyncAt;
    if (!s) return null;
    var d = new Date(s);
    return isFinite(d.getTime()) ? d : null;
  }

  function syncedToday() {
    var d = lastSyncDate();
    return !!d && dayKey(d) === dayKey();
  }

  /** minutesSinceSync() — Infinity when never synced (used for the 1-per-hour throttle). */
  function minutesSinceSync() {
    var d = lastSyncDate();
    if (!d) return Infinity;
    return (Date.now() - d.getTime()) / 60000;
  }

  /* ------------------------------------------------ cross-device merge (v3) */

  /* Settings that identify THIS device / THIS account and must never be taken from the
     cloud blob, or a stale device could clobber the endpoint you just typed in. */
  var LOCAL_ONLY_SETTINGS = ['email', 'scriptUrl', 'syncKey', 'lastPushAt', 'lastPullAt', 'lastSyncAt'];

  function laterIso(a, b) {
    if (!a) return b || null;
    if (!b) return a;
    return (String(a) > String(b)) ? a : b;   // ISO-8601 sorts lexicographically
  }

  function markPushed(when) {
    state.settings.lastPushAt = (when instanceof Date ? when : new Date()).toISOString();
    save();
    return state.settings.lastPushAt;
  }

  function markPulled(when) {
    state.settings.lastPullAt = (when instanceof Date ? when : new Date()).toISOString();
    save();
    return state.settings.lastPullAt;
  }

  function minutesSince(iso) {
    if (!iso) return Infinity;
    var d = new Date(iso);
    if (!isFinite(d.getTime())) return Infinity;
    return (Date.now() - d.getTime()) / 60000;
  }

  function minutesSincePush() { return minutesSince(state.settings.lastPushAt); }

  /**
   * mergeCloud(cloudState, cloudUpdatedAt) — "most progress wins".
   *   sections  union · vocab seen/mastery/again max · unit correct/attempts max
   *   quizzes   best attempt kept · streak/bestStreak/days max · lastStudy latest
   *   settings  cloud wins only when its blob is newer than our last push, and never for
   *             email / scriptUrl / syncKey (or the local sync bookkeeping fields)
   * Returns { changed, adopted } — adopted = true when cloud settings were taken.
   */
  function mergeCloud(cloudRaw, cloudUpdatedAt) {
    if (!cloudRaw || typeof cloudRaw !== 'object') return { changed: false, adopted: false };
    var cloud = coerce(cloudRaw);          // normalise the remote blob exactly like a local one
    var changed = false, i, L, k;

    for (i = 0; i < LANGS.length; i++) {
      L = LANGS[i];
      var c = cloud[L], l = state[L];

      for (var uid in c.units) {
        if (!Object.prototype.hasOwnProperty.call(c.units, uid)) continue;
        var cu = c.units[uid];
        var lu = l.units[uid];
        if (!lu) { lu = l.units[uid] = { sections: {}, correct: 0, attempts: 0, quizzes: {} }; changed = true; }

        for (k in cu.sections) {
          if (!Object.prototype.hasOwnProperty.call(cu.sections, k)) continue;
          if (cu.sections[k] && !lu.sections[k]) { lu.sections[k] = true; changed = true; }
        }
        if (num(cu.correct) > num(lu.correct)) { lu.correct = num(cu.correct); changed = true; }
        if (num(cu.attempts) > num(lu.attempts)) { lu.attempts = num(cu.attempts); changed = true; }
        for (var qi in cu.quizzes) {
          if (!Object.prototype.hasOwnProperty.call(cu.quizzes, qi)) continue;
          var cq = cu.quizzes[qi], lq = lu.quizzes[qi];
          if (!lq || num(cq.correct) > num(lq.correct)) { lu.quizzes[qi] = cq; changed = true; }
        }
      }

      for (var term in c.vocab) {
        if (!Object.prototype.hasOwnProperty.call(c.vocab, term)) continue;
        var cv = c.vocab[term], lv = l.vocab[term];
        if (!lv) {
          l.vocab[term] = { seen: num(cv.seen), mastery: num(cv.mastery), again: num(cv.again), last: cv.last || null };
          changed = true;
          continue;
        }
        if (num(cv.seen) > num(lv.seen)) { lv.seen = num(cv.seen); changed = true; }
        if (num(cv.mastery) > num(lv.mastery)) { lv.mastery = num(cv.mastery); changed = true; }
        if (num(cv.again) > num(lv.again)) { lv.again = num(cv.again); changed = true; }
        var nl = laterIso(lv.last, cv.last);
        if (nl !== lv.last) { lv.last = nl; changed = true; }
      }

      if (num(c.streak) > num(l.streak)) { l.streak = num(c.streak); changed = true; }
      if (num(c.bestStreak) > num(l.bestStreak)) { l.bestStreak = num(c.bestStreak); changed = true; }
      if (num(c.days) > num(l.days)) { l.days = num(c.days); changed = true; }
      var ls = laterIso(l.lastStudy, c.lastStudy);
      if (ls !== l.lastStudy) { l.lastStudy = ls; changed = true; }
      if (l.bestStreak < l.streak) l.bestStreak = l.streak;
    }

    /* settings: newest blob wins, minus the protected identity fields */
    var adopted = false;
    var cloudNewer = !state.settings.lastPushAt ||
      (cloudUpdatedAt && String(cloudUpdatedAt) > String(state.settings.lastPushAt));
    if (cloudNewer && cloudRaw.settings && typeof cloudRaw.settings === 'object') {
      for (k in cloud.settings) {
        if (!Object.prototype.hasOwnProperty.call(cloud.settings, k)) continue;
        if (LOCAL_ONLY_SETTINGS.indexOf(k) !== -1) continue;
        // Only adopt keys the remote blob actually carried — coerce() back-fills defaults,
        // and a default must never masquerade as a deliberate remote change.
        if (!Object.prototype.hasOwnProperty.call(cloudRaw.settings, k)) continue;
        if (JSON.stringify(state.settings[k]) === JSON.stringify(cloud.settings[k])) continue;
        state.settings[k] = cloud.settings[k];
        adopted = true;
      }
      for (i = 0; i < LANGS.length; i++) {
        var raw = cloudRaw[LANGS[i]];
        if (!raw || typeof raw !== 'object' || !Object.prototype.hasOwnProperty.call(raw, 'paused')) continue;
        if (state[LANGS[i]].paused !== cloud[LANGS[i]].paused) {
          state[LANGS[i]].paused = cloud[LANGS[i]].paused;
          adopted = true;
        }
      }
    }

    if (changed || adopted) save();
    return { changed: changed, adopted: adopted };
  }

  function setSettings(patch) {
    if (!patch || typeof patch !== 'object') return state.settings;
    for (var k in patch) {
      if (Object.prototype.hasOwnProperty.call(patch, k)) state.settings[k] = patch[k];
    }
    save();
    return state.settings;
  }

  /* ------------------------------------------------------- export / import */

  function exportJson() {
    try { return JSON.stringify(state, null, 2); }
    catch (e) { return JSON.stringify(blankState(), null, 2); }
  }

  /** importJson(str) → {ok:true} | {ok:false, error:"..."} */
  function importJson(str) {
    var parsed;
    try { parsed = JSON.parse(String(str)); }
    catch (e) { return { ok: false, error: 'That is not valid JSON.' }; }
    if (!parsed || typeof parsed !== 'object') return { ok: false, error: 'Expected a JSON object.' };
    if (!parsed.korean && !parsed.chinese && !parsed.settings) {
      return { ok: false, error: 'This file does not look like a Word Goblin backup.' };
    }
    state = coerce(parsed);
    save();
    return { ok: true };
  }

  function reset(lang) {
    if (lang === undefined || lang === null) {
      var keepSettings = state.settings;
      state = blankState();
      state.settings = keepSettings;
    } else {
      state[normLang(lang)] = blankLang();
    }
    save();
    return state;
  }

  /* ------------------------------------------------------------------ boot */

  load();

  var api = {
    KEY: KEY,
    get: function () { return state; },
    save: save,
    reload: load,
    subscribe: subscribe,
    onSectionComplete: onSectionComplete,
    normLang: normLang,

    markSection: markSection,
    toggleSection: toggleSection,
    isSectionComplete: isSectionComplete,
    sectionsComplete: sectionsComplete,
    unitPercent: unitPercent,
    isUnitComplete: isUnitComplete,

    recordExercise: recordExercise,
    recordQuiz: recordQuiz,
    quizResult: quizResult,

    vocabSeen: vocabSeen,
    vocabMastery: vocabMastery,
    getVocab: getVocab,
    hasSeen: hasSeen,
    seenCount: seenCount,
    masteredCount: masteredCount,

    setPaused: setPaused,
    isPaused: isPaused,
    togglePaused: togglePaused,

    setSettings: setSettings,
    generateSyncKey: generateSyncKey,
    normalizeKey: normalizeKey,
    mergeCloud: mergeCloud,
    markPushed: markPushed,
    markPulled: markPulled,
    minutesSincePush: minutesSincePush,
    markSynced: markSynced,
    lastSyncDate: lastSyncDate,
    syncedToday: syncedToday,
    minutesSinceSync: minutesSinceSync,
    exportJson: exportJson,
    importJson: importJson,
    reset: reset,

    touch: touch,
    currentStreak: currentStreak,
    studiedToday: studiedToday,
    dayKey: dayKey
  };

  // `FableProgress.settings` reads as a live object, per the architecture contract.
  try {
    Object.defineProperty(api, 'settings', {
      get: function () { return state.settings; },
      enumerable: true
    });
  } catch (e) {
    api.settings = state.settings;
  }

  return api;
})();
