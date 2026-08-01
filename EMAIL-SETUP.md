# Word Goblin — Daily Mini-Lesson Emails (setup guide)

Word Goblin can email you a personalized **mini-lesson** every morning: one word of the day
per language you are studying, with its romanization, an example sentence, and the etymology
behind it — drawn from wherever you actually are in the curriculum.

There is no server and no subscription: it runs on **your own free Google account** using
Google Apps Script.

You do not need to know how to code. The whole thing is: paste one file, click Deploy, copy a
link into the app. Budget about **ten minutes**, once.

> **Sign-in and cross-device sync are NOT set up here.** App sign-in, membership, and
> progress sync are handled by Firebase — see **[FIREBASE-SETUP.md](FIREBASE-SETUP.md)**.
> This script does one thing: send the daily email. Subscribing from the app's Settings
> page still works with an automatic sync key the app generates for you — there is nothing
> to type or remember.

**How it works, briefly.** The Apps Script cannot see the curriculum or your saved progress —
those live in your browser. So the app uploads a small **lesson queue** (the next handful of
words for each language) whenever you study, and the script emails one word per language per
day, advancing through the queue. Until the app has synced a queue, the daily email is simply
a friendly reminder to open the app.

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
> JSON like `{"ok":true,"service":"Word Goblin email reminders","contract":"v6 (mini-lesson email only)","status":"running", ...}`.
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
    signup, so tomorrow's email already has real content in it. (Behind the scenes the app
    also generates and remembers a random **sync key** that protects your subscription —
    see [About the sync key](#about-the-sync-key).)
25. To verify end-to-end without waiting until tomorrow morning, go back to the Apps Script
    editor, pick **`sendDailyReminders`** in the function dropdown and click **▶ Run**.
    A mini-lesson should land in your inbox within a minute. (Check spam the first time.)

    Prefer a preview that does *not* consume a word from your queue? Run **`sendTestEmail`**
    instead — it sends a sample lesson to yourself and leaves your place in the queue alone.

**About the queue.** You do not manage it; the app does. It re-uploads the next words in
curriculum order when you subscribe, when you open the app, and after you finish a section —
so the emails follow your progress. If you stop using the app for a while, the queue runs out
and the daily email politely turns back into "open Word Goblin to refresh your lesson queue".
Open the app once and it refills.

To stop the emails: **Settings → Unsubscribe**. That deletes your address and your stored
lesson queues immediately. To erase everything the script holds for you (including the sync
key), use **Settings → Delete synced data** (the `deleteAll` action).

---

## About the sync key

The web-app URL is public — anyone who had it could otherwise subscribe or unsubscribe any
email address. So each address is protected by a **sync key**: a short random password the
app generates and stores for you automatically. You normally never see it or type it.

- The key is claimed by the **first** request that presents one for your email address. After
  that, requests with the wrong key are refused with `bad key` and change nothing.
- The key is **not a Google password** and grants nothing beyond this one script.
- If a device ever loses its key (cleared browser storage), the owner can read it back: in
  the Apps Script editor, select **`showMyKeys`** in the function dropdown, click **▶ Run**,
  and read the **Execution log**. Only you can do this; the editor and its logs are private
  to the Google account that owns the project.
- To start over with a fresh key, use **Settings → Delete synced data** (the `deleteAll`
  action), which clears the stored key along with the subscription. The next device to
  present a key claims it.

Note this key has nothing to do with app sign-in or progress sync — those are Firebase
(see [FIREBASE-SETUP.md](FIREBASE-SETUP.md)). It only guards the email subscription.

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
lesson queues are stored one property per language (10 words / 8 KB each); and the whole
property store holds 500 KB in total, so a personal deployment has room to spare.

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
| Subscribe/Unsubscribe is refused with **"bad key"** | The device's stored key does not match the one already claimed for that email — usually a device whose browser storage was cleared, or an old device claimed the key first | Run **`showMyKeys`** in the editor to see the stored key, or use **Settings → Delete synced data** (the `deleteAll` action) to clear it; the next request claims a fresh key. |
| Not sure whether anyone is subscribed, or what is queued | — | Run **`listSubscribers`** in the editor and read the Execution log: it prints each address, its languages, and how many words are left in each queue. |
| Want a full picture of what the script has stored | — | Run **`listStoredData`** — per address it prints subscription, queue counts, and whether a sync key is set. |
| Want to see the email design without waiting or using up a word | — | Run **`sendTestEmail`** — it sends one sample mini-lesson to yourself and does not advance any pointer. |

---

## For developers: the request/response contract (v6, email-only)

The app talks to the backend with a single POST endpoint. Any server that honours this
contract can replace `Code.gs` — the app only stores a URL. (Earlier contract versions also
carried Google sign-in, membership, and progress-sync actions; those moved to Firebase Auth +
Firestore in v6 and are gone from this endpoint.)

**Transport.** `POST <webAppUrl>` with `Content-Type: text/plain;charset=utf-8` and a JSON
string as the body. The `text/plain` type is deliberate: it keeps the request a CORS "simple
request", so the browser does not send a preflight `OPTIONS` — which Apps Script cannot
answer. From the hosted https build the response *is* readable cross-origin; from a `file://`
page it is not, so calls are fire-and-forget there. A replacement backend must accept a JSON
body under a `text/plain` content type and, if it enforces CORS, return
`Access-Control-Allow-Origin: *`.

### Sync key semantics

The endpoint is public, so the email address alone must not grant any action. Every address
may have one key, stored at `key:<email>`. The app generates the key client-side
(10+ characters from `crypto.getRandomValues`) and always sends it.

- **A request presenting no key is refused, always.** Anonymous requests can do nothing.
- The key is **claimed by the first request that presents one** for that address. An existing
  key is never overwritten.
- Once a key exists, every action for that address must present the exact matching `key`. A
  mismatch returns `{"ok":false,"error":"bad key"}` and has **no side effects**.
- `deleteAll` clears the key along with the data, so the address can be claimed again.
- The key is compared as an exact string, trimmed and capped at 128 characters.

### Requests

```jsonc
// 1. Subscribe. `queues` is optional — the app sends the first queue with the signup.
{ "action": "subscribe",
  "email": "you@example.com",
  "key": "8fK2pQ7xLm",
  "languages": ["korean", "chinese"],
  "queues": { "korean": [ /* QueueItem… */ ], "chinese": [ /* QueueItem… */ ] } }

// 2. Unsubscribe. Deletes the sub record AND both queue records; the key is kept.
{ "action": "unsubscribe", "email": "you@example.com", "key": "8fK2pQ7xLm" }

// 3. Sync — full replace of the listed languages' queues, pointers reset to 0.
//    Languages absent from `queues` are left untouched; an empty array clears that queue.
//    Requires an active subscription.
{ "action": "sync",
  "email": "you@example.com",
  "key": "8fK2pQ7xLm",
  "queues": { "korean": [ /* QueueItem… */ ] } }

// 4. Delete everything held for this address: subscription, queues AND the key.
{ "action": "deleteAll", "email": "you@example.com", "key": "8fK2pQ7xLm" }
```

A bare `GET <webAppUrl>` with no parameters returns the status JSON below.

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

{ "ok": true,  "action": "deleteAll", "email": "you@example.com",
  "deleted": { "subscription": true, "key": true } }

{ "ok": false, "error": "bad key" }
{ "ok": false, "error": "That does not look like a valid email address." }
```

### Status endpoint

`GET <webAppUrl>` returns a small diagnostic object, safe to open in a browser — counts only,
never addresses or lesson content:

```jsonc
{
  "ok": true,
  "service": "Word Goblin email reminders",
  "contract": "v6 (mini-lesson email only)",
  "status": "running",
  "subscribers": 1,
  "queues": { "stored": 2, "korean": 1, "chinese": 1, "itemsPending": 14 },
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

### Note for owners upgrading from an earlier deployment

Your live deployment keeps serving the version you last deployed — the old code keeps
sending the daily email fine, including any legacy sign-in/progress endpoints it carried
(the app simply no longer calls them). Pasting this v6 file and deploying a **New version**
is a cleanup, not an emergency: it removes the retired actions from the public endpoint.
Any leftover `prog:` / `progmeta:` / `allow:` / `invite:` Script Properties from the old
version are inert; delete them in ⚙ Project Settings → Script Properties if you want a tidy
store.
