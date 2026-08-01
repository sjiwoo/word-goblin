# Word Goblin — Daily Mini-Lesson Emails & Cross-Device Sync (setup guide)

Word Goblin can email you a personalized **mini-lesson** every morning: one word of the day
per language you are studying, with its romanization, an example sentence, and the etymology
behind it — drawn from wherever you actually are in the curriculum.

The same setup also gives you **cross-device sync**: study on your laptop, pick up on your
phone with your progress intact. You can use either feature on its own — sync works whether
or not you subscribe to the emails.

There is no server and no subscription: it runs on **your own free Google account** using
Google Apps Script.

You do not need to know how to code. The whole thing is: paste one file, click Deploy, copy a
link into the app. Budget about **ten minutes**, once.

**How it works, briefly.** The Apps Script cannot see the curriculum or your saved progress —
those live in your browser. So the app uploads a small **lesson queue** (the next handful of
words for each language) whenever you study, and the script emails one word per language per
day, advancing through the queue. Until the app has synced a queue, the daily email is simply
a friendly reminder to open the app. The app also uploads a copy of your progress, protected
by a **sync key**, which is what lets a second device pick it up.

**What you need**

- A Google account (any free Gmail account works)
- The file `email/Code.gs` from this project
- A desktop or laptop browser (the Apps Script editor is awkward on phones)

---

## Part 1 — Create the script

1. Go to **[script.google.com](https://script.google.com)** and sign in with the Google
   account that should *send* the emails. Lessons will arrive from this address.
2. Click **New project** (top-left). A new project opens with a file called `Code.gs`
   containing a few lines of placeholder code:
   ```
   function myFunction() {
   }
   ```
3. Click anywhere in that code area, select everything (**Ctrl+A**, or **Cmd+A** on a Mac)
   and delete it. The editor should now be completely empty.
4. Open `email/Code.gs` from the Word Goblin folder in any text editor (Notepad, TextEdit,
   VS Code — anything). Select all, copy.
5. Paste it into the empty Apps Script editor.
6. Give the project a name so you can find it later: click **Untitled project** at the top
   and type `Word Goblin Reminders`, then press Enter.
7. Click the **save icon** (💾) in the toolbar, or press **Ctrl+S**.

> **Optional — pick your delivery time now.** Near the top of the pasted code there is a line
> `var REMINDER_HOUR = 8;`. That means "around 8:00 am". Change the `8` to any hour from
> `0`–`23` (`19` = 7 pm) and save. See [Changing the time or timezone](#changing-the-time-or-timezone).

---

## Part 2 — Run `setupTrigger` once (this is where you authorize it)

This step tells Google "run the send function once a day", and grants the script permission
to send email as you.

8. In the toolbar there is a function dropdown — it probably says `doGet`. Click it and
   choose **`setupTrigger`**.
9. Click **▶ Run**.
10. A window appears: **Authorization required**. Click **Review permissions**.
11. Choose your Google account.
12. You will see a scary-looking screen: **"Google hasn't verified this app"**.
    This is expected and safe — see [Why the warning screens are safe](#why-the-warning-screens-are-safe)
    below. Click **Advanced** (small link, bottom-left), then
    **Go to Word Goblin Reminders (unsafe)**.
13. A permissions list appears — it asks to *send email as you* and *run when you are not
    present*. Click **Allow**.
14. The **Execution log** at the bottom of the editor should print something like:
    ```
    Daily lesson trigger installed for ~8:00 (America/Los_Angeles).
    ```
    If you see that line, the daily schedule is live.

> You only ever need to run `setupTrigger` again if you change `REMINDER_HOUR`. Running it
> twice is harmless — it deletes the old trigger before making a new one, so you can never
> end up getting two emails a day.

---

## Part 3 — Deploy it as a web app

This creates the URL that the Word Goblin app talks to when you subscribe and when it
uploads your lesson queue.

15. Click **Deploy** (blue button, top-right) → **New deployment**.
16. Click the **gear icon** next to "Select type" → choose **Web app**.
17. Fill in the three fields:

    | Field | Set it to |
    |---|---|
    | **Description** | `Word Goblin` (anything you like) |
    | **Execute as** | **Me (your@gmail.com)** |
    | **Who has access** | **Anyone** |

    ⚠️ **"Who has access" must be "Anyone"** — not "Anyone with Google account", not
    "Only myself". This is the single most common mistake. "Anyone" here means "the app in
    your browser is allowed to reach this URL"; it does **not** publish your email address
    or your lessons.
18. Click **Deploy**. Authorize again if prompted (same screens as above).
19. Copy the **Web app URL**. It ends in `/exec` and looks like:
    ```
    https://script.google.com/macros/s/AKfycbx...long...string/exec
    ```
    Click **Copy**, then **Done**.

> **Sanity check:** paste that URL straight into a new browser tab. You should see a line of
> JSON like `{"ok":true,"service":"Word Goblin email reminders","contract":"v2 (mini-lesson)","status":"running", ...}`.
> If you see that, the deployment works. If you see a Google sign-in page or an error page,
> jump to [Troubleshooting](#troubleshooting).

---

## Part 4 — Connect the app and subscribe

20. Open Word Goblin and go to **Settings**.
21. Paste the `/exec` URL into the **Apps Script URL** field.
22. Enter the email address that should *receive* the lessons (it does not have to be the
    same account that sends them).
23. Tick the language(s) you want lessons for — Korean, Chinese, or both.
24. Click **Subscribe**. The app immediately uploads your first lesson queue along with the
    signup, so tomorrow's email already has real content in it.
25. To verify end-to-end without waiting until tomorrow morning, go back to the Apps Script
    editor, pick **`sendDailyReminders`** in the function dropdown and click **▶ Run**.
    A mini-lesson should land in your inbox within a minute. (Check spam the first time.)

    Prefer a preview that does *not* consume a word from your queue? Run **`sendTestEmail`**
    instead — it sends a sample lesson to yourself and leaves your place in the queue alone.

> Only want cross-device sync, not the emails? You can skip the Subscribe button entirely —
> just fill in the Apps Script URL, your email and a sync key, and go straight to
> [Studying on more than one device](#studying-on-more-than-one-device-the-sync-key).

**About the queue.** You do not manage it; the app does. It re-uploads the next words in
curriculum order when you subscribe, when you open the app, and after you finish a section —
so the emails follow your progress. If you stop using the app for a while, the queue runs out
and the daily email politely turns back into "open Word Goblin to refresh your lesson queue".
Open the app once and it refills.

To stop the emails: **Settings → Unsubscribe**. That deletes your address and your stored
lesson queues immediately. Your synced progress is deliberately kept — opting out of the
emails is not the same as deleting your data. To erase everything the script holds for you,
use **Settings → Delete synced data** (or run `deleteAll` yourself, see the developer section).

---

## Studying on more than one device (the sync key)

The web-app URL is public — anyone who had it could otherwise guess an email address and read
or overwrite that person's progress. So each address is protected by a **sync key**: a short
random password the app generates for you.

**On your first device**

1. In **Settings**, next to **Sync key**, click **Generate**. The app creates a random key and
   saves it locally.
2. That is it. From then on the app uploads your progress automatically as you study.

**On your second device**

3. Open Word Goblin there, paste the same **Apps Script URL** into Settings.
4. Enter the **same email address** and type the **same sync key** — exactly, including case.
   Use **Show**/**Copy** on the first device to read it off accurately.
5. Click **Sync now**. Your progress downloads and merges with whatever is on that device
   (the further-along value wins for each unit, word and streak, so nothing is lost).

**Things worth knowing**

- The key is claimed by the **first** request that presents one for your email address. After
  that, requests with the wrong key are refused with `bad key` and change nothing.
- The key is **not a Google password** and grants nothing beyond this one script. Treat it like
  a shared-notes password.
- **If you forget it**, you can read it back — you own the script. In the Apps Script editor,
  select **`showMyKeys`** in the function dropdown, click **▶ Run**, and open the
  **Execution log**: it prints each email address and its key. Only you can do this; the editor
  and its logs are private to the Google account that owns the project. Type the key it shows
  into Settings on the other device.
- To start over with a fresh key, use **Settings → Delete synced data** (the `deleteAll`
  action), which clears the stored key along with everything else. The next device to present
  a key claims it.
- Prefer not to sync at all? Leave the sync key blank. The daily emails work without it.

---

## One-click Google sign-in (optional)

Instead of typing your email and sync key on every device, you can add a **Sign in with
Google** button to the app's sync panel: one click proves you own the address, fetches your
sync key from the script (creating one on first login), and syncs everything. Setup is a
one-time ten minutes:

**A. Create an OAuth client ID** (free, in any Google Cloud project)

1. Go to **console.cloud.google.com** → create a project if you have none (name it anything).
2. **APIs & Services → OAuth consent screen**: choose **External**, fill in just the app name
   ("Word Goblin") and your email, save through the steps. You can leave it in *Testing* and
   add yourself under **Test users** — that is enough for personal use.
3. **APIs & Services → Credentials → Create credentials → OAuth client ID** →
   Application type **Web application**.
4. Under **Authorized JavaScript origins** add the origin you open the app from:
   `https://sjiwoo.github.io` (no path). Add `http://localhost:8123` too if you ever test
   locally.
5. Create, and copy the **Client ID** (ends in `.apps.googleusercontent.com`).

**B. Tell your script about it**

6. In the Apps Script editor, open `Code.gs`, find **`setupGoogleLogin`**, paste your client
   ID over the placeholder string, select `setupGoogleLogin` in the function dropdown, and
   click **▶ Run** once.
7. If you edited the code (updating to a newer Code.gs), redeploy: **Deploy → Manage
   deployments → ✏️ → New version → Deploy** (the URL stays the same).

That's it. Open the app's **Settings → Cross-device sync** on any device: with the Apps
Script URL filled in, the Google button appears there automatically. The button needs the
hosted (https) app; the manual sync key keeps working everywhere, with or without this.

How it works (developer contract v5): the app posts
`{"action":"googleLogin","idToken":"<Google ID token>","inviteToken":"<optional>"}`; the
script verifies the token against `https://oauth2.googleapis.com/tokeninfo` (audience must
equal the stored `googleClientId` script property, issuer must be Google, email must be
verified), checks the member whitelist (redeeming a valid invite token on the spot), and
replies `{"ok":true,"email":…,"key":…,"subscribed":…,"languages":[…]}` — or
`{"ok":false,"code":"notInvited",…}` for accounts that are not members. `GET ?action=config`
returns `{"ok":true,"googleClientId":…}` so the app knows whether to show the button. The
client ID is public by design; membership plus the sync key gate all data access.

---

## Members & invites

The app is **invite-only**: only Google accounts on the script's whitelist can sign in or
touch any stored data. Your own account (the one that owns the script) is always a member —
you can never lock yourself out. Everything below runs from the Apps Script editor
(select the function in the dropdown, press **▶ Run**, read the **Execution log**):

- **`createInviteLink()`** — prints a single-use invite link, valid 30 days. Send it to a
  friend any way you like; the first Google account they sign in with becomes a member.
  The link carries your backend address in the URL *fragment* (`#…`), which browsers never
  send to any server — so it stays out of logs. **Tip:** run it once for yourself too and
  keep the link — it's the easiest way to set up your own new devices.
- **`emailInvite()`** — same, but emails the link for you: edit the `TO` address at the top
  of the function first, then run.
- **`addMember()` / `removeMember()`** — whitelist or un-whitelist an address directly
  (edit the `EMAIL` placeholder, run). Removing a member blocks future sign-ins and syncs;
  their already-stored data stays until deleted.
- **`listMembers()`** — prints current members and unredeemed invites.

If the link `createInviteLink()` prints ever looks wrong (contains `/dev` instead of
`/exec`), paste your real web-app URL into the `SCRIPT_URL` variable at the top of Code.gs
and run it again.

---

## Why the warning screens are safe

Google shows "Google hasn't verified this app" for *every* script that has not gone through
their commercial publisher review. Verification is for apps distributed to strangers.

In this case:

- **You are the author.** You pasted the code yourself and can read every line of it.
- **It runs entirely inside your own Google account.** Nothing is sent to Word Goblin's
  authors or to any third party — there is no external server involved.
- **The permissions it asks for are the minimum it needs**: send email as you (to deliver the
  lesson), run while you are away (so the daily trigger can fire), and store small properties
  (your address and lesson queue).
- **You can revoke it in one click** at any time:
  [myaccount.google.com/permissions](https://myaccount.google.com/permissions) → find
  *Word Goblin Reminders* → **Remove access**.

The word "unsafe" on the *Advanced* link is Google's blanket wording for unverified scripts,
not a judgement about this code.

---

## Changing the time or timezone

**The hour** — in the editor, edit the line near the top:

```js
var REMINDER_HOUR = 8;   // 0–23; 8 = around 8:00 am
```

Save (**Ctrl+S**), then run **`setupTrigger`** again. That is required — the old trigger keeps
the old hour until you re-run it.

**The timezone** — the hour is interpreted in the *script's* timezone, which defaults to
whatever Google guessed for your account:

1. Click the **⚙ Project Settings** gear in the left sidebar.
2. Under **Time zone**, pick your zone.
3. Go back to the editor and run **`setupTrigger`** once more.

You can confirm both at once by loading your `/exec` URL in a browser — the status JSON shows
`reminderHour`, `timezone`, and `triggerInstalled`.

**About precision:** Google fires time-driven triggers within roughly a one-hour window. Set
to `8` and the email typically arrives between 8:00 and 9:00. This is a Google platform
limit, not something the script can tighten.

---

## Quota notes

Apps Script running on a **free Gmail (@gmail.com) account** can send **100 emails per day**.
Google Workspace accounts get 1,500/day.

For personal use this is far more than enough — one email per subscriber per day means you
could have 100 people on the list. The script handles the limit gracefully:

- Each recipient is sent inside its own error handler, so one bad address never stops the run.
- Before each send it checks the remaining quota and stops cleanly when it hits zero, logging
  how many people were skipped. They are simply emailed the next day.
- Queue pointers only advance *after* a message is successfully sent, so a skipped or failed
  send never silently burns that day's word.
- To see your remaining quota, check the log after a `sendDailyReminders` run — the first log
  line reports it.

Other limits worth knowing: total script runtime is capped at 6 minutes per execution (a run
of 100 emails takes a few seconds); each Script Property value maxes out at 9 KB, which is why
lesson queues are stored one property per language (10 words / 8 KB each) and why a synced
progress blob is split into 8 KB chunks; a single progress blob is capped at 100 KB; and the
whole property store holds 500 KB in total, so a personal deployment syncing one or two
devices has room to spare. Progress sync uses no email quota at all — it is pure storage.

---

## Troubleshooting

| Symptom | Likely cause | Fix |
|---|---|---|
| App says "could not reach the server" when you click Subscribe | The URL is the `/dev` link, not `/exec` | Re-copy the URL from **Deploy → Manage deployments**. It must end in `/exec`. The `/dev` URL only works while you are signed into the editor. |
| Loading the URL in a browser shows a **Google sign-in page** | "Who has access" was left as *Only myself* or *Anyone with Google account* | **Deploy → Manage deployments → ✏️ edit → Who has access: Anyone → Deploy.** |
| Loading the URL shows "Sorry, unable to open the file" or a 404 | The deployment was deleted, or you copied a partial URL | Create a fresh deployment (Part 3) and re-paste the new URL into Settings. |
| Subscribe works, but no email ever arrives in the morning | `setupTrigger` was never run | In the editor: select **`setupTrigger`** → **▶ Run**. Confirm with **⏰ Triggers** in the left sidebar — you should see one `sendDailyReminders` / Time-driven / Day timer row. |
| No email, and the Triggers page shows a **failure** | Authorization lapsed, or the send threw | Open **Executions** in the left sidebar, click the failed run, read the error. Re-running `setupTrigger` and re-authorizing fixes most cases. |
| The email arrives but says **"No word queued for today"** | The app has never synced a queue, or the queue ran out | Open Word Goblin while the Apps Script URL is saved in Settings and study a section — it uploads a fresh queue automatically. Verify with **`listSubscribers`** (see below) or the `queues` counts in the status JSON. |
| Emails keep repeating the **same word** | Pointers are not advancing — usually the send is failing after the first recipient | Check **Executions** for errors; the log line `sendDailyReminders done: N sent, M failed` tells you which. |
| The email shows a word you already know well | The queue is built from your progress at sync time | Study further in the app; the next sync re-queues from your current position. |
| The email arrives but lands in **Spam** / Promotions | First message from a new sender | Open it, click **Not spam** / drag it to Primary, and add the sender address to your contacts. Later emails will go to the inbox. |
| Email arrives at the wrong time of day | Script timezone differs from yours | Fix the timezone in **Project Settings**, then re-run `setupTrigger`. See above. |
| Two emails every day | Two triggers exist (rare — usually from manual creation) | Run `setupTrigger` once; it deletes every existing `sendDailyReminders` trigger before creating one. |
| You changed `REMINDER_HOUR` but nothing changed | The trigger still holds the old hour | Re-run `setupTrigger`. |
| You edited the code and the app's behaviour did not change | Web apps serve the last *deployed* version | **Deploy → Manage deployments → ✏️ edit → Version: New version → Deploy.** The URL stays the same. |
| Second device says **"bad key"** | The key does not match the one already claimed for that email — nearly always a typo, a missing character, or wrong capitalisation | Run **`showMyKeys`** in the editor, read the exact key from the Execution log, and retype it. Check the email address matches too — the key is per address. |
| Second device says "bad key" and you never set a key | Someone (or an old device of yours) already claimed a key for that address | Run **`showMyKeys`** to see it. To reset, use **Settings → Delete synced data** on the device that *does* work, or run the `deleteAll` action; the next device to present a key claims a fresh one. |
| Progress is not syncing between devices | Apps Script URL, email or sync key missing on one device | All three must be filled in on **both** devices, with the same email and key. Press **Sync now** and check the sync status line. Loading `…/exec` in a browser should show `progressBlobs: 1` or more once a save has landed. |
| Progress syncs but one device looks behind | The two devices merge on load; a device only pulls when it starts or when you press Sync now | Press **Sync now** on the device that looks behind. Nothing is overwritten — the merge keeps the further-along value for each item. |
| "Stored progress is incomplete" | A save was interrupted part-way | Press **Sync now** on the device that still has your progress locally; a fresh save replaces the damaged one. |
| Not sure whether anyone is subscribed, or what is queued | — | Run **`listSubscribers`** in the editor and read the Execution log: it prints each address, its languages, and how many words are left in each queue. |
| Want a full picture of what the script has stored | — | Run **`listStoredData`** — per address it prints subscription, queue counts, whether a sync key is set, and the size and age of the saved progress. |
| Forgot your sync key | — | Run **`showMyKeys`** — it prints each address and its key in the Execution log. |
| Want to see the email design without waiting or using up a word | — | Run **`sendTestEmail`** — it sends one sample mini-lesson to yourself and does not advance any pointer. |

---

## For developers: the request/response contract (v3)

The app talks to the backend with a single POST endpoint. Any server that honours this
contract can replace `Code.gs` — the app only stores a URL.

**Transport.** `POST <webAppUrl>` with `Content-Type: text/plain;charset=utf-8` and a JSON
string as the body. The `text/plain` type is deliberate: it keeps the request a CORS "simple
request", so the browser does not send a preflight `OPTIONS` — which Apps Script cannot
answer. From the hosted https build the response *is* readable cross-origin, so progress sync
is a normal request/response; from a `file://` page it is not, so the queue and subscription
calls are fire-and-forget there. A replacement backend must accept a JSON body under a
`text/plain` content type and, if it enforces CORS, return `Access-Control-Allow-Origin: *`.

### Sync key semantics

The endpoint is public, so the email address alone must not grant read or write access. Every
address may have one key, stored at `key:<email>`.

- The key is **claimed by the first request that presents one** for that address. An existing
  key is never overwritten.
- Once a key exists, **every** action for that address — `subscribe`, `unsubscribe`, `sync`,
  `saveProgress`, `loadProgress`, `deleteAll` — must present the matching `key`. A mismatch
  (or a missing key) returns `{"ok":false,"error":"bad key"}` and has **no side effects**.
- If no key has ever been claimed and none is presented, the request is allowed and nothing is
  claimed. That keeps email-only, pre-v3 clients working.
- `deleteAll` clears the key along with the data, so the address can be claimed again.
- Keys and subscriptions are independent: `saveProgress` / `loadProgress` work for an address
  that has never subscribed. (`sync` is the one exception — a lesson queue is only meaningful
  for a subscriber, so it still requires an active subscription.)
- The key is compared as an exact string, trimmed and capped at 128 characters. The client
  generates 10+ characters from `crypto.getRandomValues`.

### Requests

`key` is optional only until one has been claimed for the address; after that it is required
on all six actions.

```jsonc
// 1. Subscribe. `queues` is optional — the app sends the first queue with the signup.
{ "action": "subscribe",
  "email": "you@example.com",
  "key": "8fK2pQ7xLm",
  "languages": ["korean", "chinese"],
  "queues": { "korean": [ /* QueueItem… */ ], "chinese": [ /* QueueItem… */ ] } }

// 2. Unsubscribe. Deletes the sub record AND both queue records.
//    Progress and the sync key are KEPT — opting out of email is not deleting data.
{ "action": "unsubscribe", "email": "you@example.com", "key": "8fK2pQ7xLm" }

// 3. Sync — full replace of the listed languages' queues, pointers reset to 0.
//    Languages absent from `queues` are left untouched; an empty array clears that queue.
//    Requires an active subscription.
{ "action": "sync",
  "email": "you@example.com",
  "key": "8fK2pQ7xLm",
  "queues": { "korean": [ /* QueueItem… */ ] } }

// 4. Save progress. `progress` is the app's whole state object; `updatedAt` is an ISO
//    string (the server substitutes its own clock if it is missing).
//    Does NOT require a subscription.
{ "action": "saveProgress",
  "email": "you@example.com",
  "key": "8fK2pQ7xLm",
  "updatedAt": "2026-07-31T15:04:05.000Z",
  "progress": { /* app state */ } }

// 5. Load progress. Does NOT require a subscription.
{ "action": "loadProgress", "email": "you@example.com", "key": "8fK2pQ7xLm" }

// 6. Delete everything held for this address: subscription, queues, progress AND the key.
{ "action": "deleteAll", "email": "you@example.com", "key": "8fK2pQ7xLm" }
```

`loadProgress` is also reachable over GET as a fallback for clients that cannot POST:

```
GET <webAppUrl>?action=loadProgress&email=you%40example.com&key=8fK2pQ7xLm
```

A bare `GET <webAppUrl>` with no `action` parameter still returns the status JSON below.

`languages` accepts `"korean"`, `"chinese"`, or both; unknown values are dropped, and a
subscribe with no valid language is rejected. Emails are lower-cased and trimmed before
storage, so the address is the de-duplication key. `sync` for an address that is not
subscribed is rejected, so a stale tab cannot resurrect a cancelled subscription.

### QueueItem

```jsonc
{
  "term":  "학교",
  "roman": "hakgyo",
  "gloss": "school",
  "pos":   "noun",
  "unit":  "Unit 3 · Places & Location",
  "example": { "text": "학교에 가요.", "roman": "hakgyoe gayo.", "gloss": "I go to school." },
  "origin": "Sino-Korean",
  "background": ["≤2 paragraphs from the word's linguistics.etymology, ≤400 chars each"]
}
```

Only `term` is required; every other field is optional and simply omitted from the rendered
lesson when absent.

**Server-side caps** (enforced again here, not just in the client, so a bad payload can never
be written — Script Properties reject values over 9 KB and would throw mid-write):

| Cap | Value | Behaviour when exceeded |
|---|---|---|
| Items per language | 10 | Extra items dropped from the end |
| Serialized bytes per language | 8192 | Items dropped from the end until it fits; if a *single* item still exceeds it, that language is rejected and its previously stored queue is left intact |
| Background paragraphs | 2 | Extra paragraphs dropped |
| Background chars/paragraph | 400 | Truncated with an ellipsis |
| Other text fields | 200 | Truncated with an ellipsis |
| Items without a `term` | — | Dropped |

### Responses

Always HTTP 200 with `application/json`; check the `ok` field, not the status code (Apps
Script cannot set arbitrary status codes).

```jsonc
{ "ok": true, "action": "subscribe", "email": "you@example.com", "languages": ["korean"],
  "queues": { "korean": { "stored": 8, "bytes": 4210 } } }

{ "ok": true, "action": "sync", "email": "you@example.com",
  "queues": { "korean": { "stored": 10, "bytes": 5330 },
              "chinese": { "error": "queues.chinese rejected: a single item serializes to …" } } }

{ "ok": true,  "action": "unsubscribe", "email": "you@example.com", "wasSubscribed": true }

{ "ok": true,  "action": "saveProgress", "email": "you@example.com",
  "bytes": 18442, "chunks": 3, "updatedAt": "2026-07-31T15:04:05.000Z" }

{ "ok": true,  "action": "loadProgress", "email": "you@example.com",
  "progress": { /* app state */ }, "updatedAt": "2026-07-31T15:04:05.000Z", "bytes": 18442 }
{ "ok": true,  "action": "loadProgress", "email": "you@example.com", "progress": null }

{ "ok": true,  "action": "deleteAll", "email": "you@example.com",
  "deleted": { "subscription": true, "progress": true, "chunks": 3, "key": true } }

{ "ok": false, "error": "bad key" }
{ "ok": false, "error": "That does not look like a valid email address." }
```

`progress: null` means "nothing has ever been saved for this address" — a client may safely
treat it as a first sync. Anything else that goes wrong (an incomplete or corrupt blob) comes
back as `ok:false` precisely so a client never mistakes a read failure for an empty account
and overwrites good data.

### Progress blob storage

`saveProgress` serializes `progress`, rejects it outright above **100 KB**, then splits it
into **8 KB chunks** written to `prog:<email>:0`, `prog:<email>:1`, … with a `progmeta:<email>`
record describing the set. Chunks left over from a previous, larger save are deleted in the
same operation, so a shorter blob can never be read back with stale tail data appended. The
whole thing runs under `LockService`, and the chunks plus metadata are written in a single
`setProperties` call.

Chunking exists because one Script Property value cannot exceed 9 KB. A replacement backend
with real storage can ignore all of this and keep the blob whole — only the request and
response shapes are part of the contract.

### Status endpoint

`GET <webAppUrl>` returns a small diagnostic object, safe to open in a browser — counts only,
never addresses or lesson content:

```jsonc
{
  "ok": true,
  "service": "Word Goblin email reminders",
  "contract": "v3 (mini-lesson + progress sync)",
  "status": "running",
  "subscribers": 1,
  "queues": { "stored": 2, "korean": 1, "chinese": 1, "itemsPending": 14 },
  "progressBlobs": 1,
  "syncKeys": 1,
  "reminderHour": 8,
  "timezone": "America/Los_Angeles",
  "triggerInstalled": true,
  "serverTime": "2026-07-31T15:04:05.000Z"
}
```

### Storage shape

Script Properties, one property per record so nothing approaches the 9 KB per-value limit:

```jsonc
// sub:you@example.com
{ "languages": ["korean", "chinese"], "subscribedAt": "2026-07-31T15:04:05.000Z" }

// queue:you@example.com:korean
{ "items": [ /* QueueItem… */ ], "pointer": 3, "syncedAt": "2026-07-31T15:04:05.000Z" }

// key:you@example.com          (plain string, not JSON)
"8fK2pQ7xLm"

// progmeta:you@example.com
{ "chunks": 3, "bytes": 18442, "updatedAt": "2026-07-31T15:04:05.000Z" }

// prog:you@example.com:0 … prog:you@example.com:2   (plain string slices of the JSON blob)
"{\"korean\":{\"units\":{…"
```

A v1 deployment's single `subscribers` blob is migrated to this layout automatically on the
first request after the update, then deleted.

### Scheduled job

`sendDailyReminders()` iterates the `sub:` keys and sends one message per subscriber
containing one mini-lesson block per active language: large native-script term, romanization,
gloss, part of speech, example sentence with translation, "Background" etymology paragraphs,
and unit attribution — plus a rotating study tip selected from `STUDY_TIPS` by day-of-year.
The subject line leads with the day's word(s). A language whose queue is missing or exhausted
gets a fallback block asking the learner to open the app. The pointer for a language advances
only after its message has been sent successfully. Every message is inline-styled responsive
HTML with a plain-text alternative, and writes are guarded by `LockService` to avoid lost
updates from concurrent syncs.
