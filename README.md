# Word Goblin 🧌

Hoard words like a goblin hoards shinies. Word Goblin is a self-contained web app that
teaches **Korean** and **Mandarin Chinese** as two fully independent tracks, with a
textbook-grade curriculum, a linguistics deep-dive behind every single word, click-to-hear
audio, offline support, cross-device progress sync, and a free daily mini-lesson email.

**Live app:** https://sjiwoo.github.io/word-goblin/

## What's inside

- **20 units** — per language: a script foundation module (Hangul / Pinyin + tones +
  characters), 8 core units modeled on the standard textbook canon (Integrated Korean ·
  Sogang · Yonsei · TTMIK for Korean; Integrated Chinese · HSK Standard Course · New
  Practical Chinese Reader for Chinese), and a slang & internet-language unit with honest
  "currency as of 2026" labels.
- **411 vocabulary entries**, each with an expandable **Linguistics** panel: origin,
  etymology (hanja/hanzi sources, Middle Chinese ancestry, Middle Korean forms), script
  analysis, phonology rules, and cognates across Korean/Chinese/Japanese. Uncertain
  etymologies are marked honestly; folk etymologies are labeled as such.
- **240 exercises** across five types: multiple choice, typing, listening, matching, and
  word ordering — with instant feedback and explanations.
- **Flashcard review** per language over every word you've seen.
- **Nothing is locked.** Start anywhere, jump anywhere. Pause one language, continue the
  other — the tracks never touch.
- **An AI tutor** (the 🧌 bubble in the corner) that answers questions on any page —
  grammar, etymology, "check my sentence" — grounded in the unit you're reading, with
  click-to-hear audio on the Korean/Chinese in its replies. Powered by your own free
  Google Gemini API key, called straight from your browser (see below).

## Using it

Open the live URL and sign in with Google — after that first sign-in the app is 100%
static and works offline (no build step, no CDN, no server). Opening `index.html`
straight from disk still runs the code, but the sign-in gate needs https, so first-time
use has to happen on the hosted version.

The app is **invite-only**, via a Firebase allowlist: anyone can press *Sign in with
Google* on the landing page, but only accounts the owner has added to the `allowlist`
collection in Firestore get in — everyone else is refused by name. Membership — not the
landing page — is what actually decides who gets in, and adding a member is one document
in the Firebase console (no code, no deploys). Owner setup is a one-time ~15-minute
walkthrough: **[FIREBASE-SETUP.md](FIREBASE-SETUP.md)**. The Firebase config values in
`js/config.js` are public by design and grant nothing on their own.
Once a device is signed in it goes straight to the app on every later visit, including
offline. On a phone, open the app once and *Add to Home Screen*: it installs as an app
and works offline afterwards. Progress and settings sync automatically across your
devices through your sign-in — no keys to type.

Audio uses your device's built-in Korean/Chinese voices (Web Speech API) — click any
native-script word or sentence to hear it.

Progress saves automatically in your browser. Settings → Export/Import gives you a JSON
backup at any time.

## Cross-device sync (built in) + daily mini-lesson emails (free, optional)

- **Sync** comes with your sign-in: progress and settings save to a Firestore document
  in the owner's Firebase project and follow you to any device you sign in on. Merging
  is most-progress-wins — studying on your phone and desktop never clobbers either side.
  Owner setup: **[FIREBASE-SETUP.md](FIREBASE-SETUP.md)**.
- **Daily email**: every morning you can get a **word-of-the-day mini-lesson** (term,
  romanization, example sentence, etymology background) drawn from your actual position
  in the curriculum — the app keeps a queue synced as you study. This runs on one small
  Google Apps Script the owner deploys in their own Google account in ~10 minutes — see
  **[EMAIL-SETUP.md](EMAIL-SETUP.md)**. Subscribing is one click in the app's Settings.

## AI tutor (free, optional)

Create a free API key at [Google AI Studio](https://aistudio.google.com/app/apikey)
(this is separate from a Gemini app subscription — the key is free on its own tier),
paste it in **Settings → AI tutor**, hit **Save**, and the 🧌 bubble comes alive. The
browser talks to Google's Gemini API directly; the key is never committed anywhere. The
key and model choice travel with the rest of your settings through cloud sync (your
Firestore document, readable only by you), so you only paste it once — sign in on a
second device and everything fills in. Optional hardening: in AI Studio, restrict the key to the HTTP referrer
`sjiwoo.github.io` so it works nowhere else.

## Extending the curriculum

Each unit is one standalone file in `data/korean/` or `data/chinese/` following the schema
in **[ARCHITECTURE.md](ARCHITECTURE.md)**. To add a unit: write `unit10.js` with the next
`order` number, add one `<script>` tag in `index.html`, add the path to `PRECACHE` in
`sw.js`, and bump the `CACHE` version. The unit map, quizzes, audio, review deck, and
email queue pick it up automatically. New languages are a small registry addition — the
whole engine is language-keyed.

## Repository layout

```
index.html              app shell (loads curriculum + engine as plain scripts)
css/style.css           design system (paper-and-ink, light/dark)
js/                     engine: audio, progress/sync, quiz, lesson renderer, router/app
js/firebase.js          FableCloud wrapper: Firebase Auth (Google) + Firestore sync
data/korean/            10 curriculum units (foundation + 8 core + slang)
data/chinese/           10 curriculum units (foundation + 8 core + slang)
firestore.rules         Firestore security rules (the real access control; commented)
FIREBASE-SETUP.md       owner's one-time Firebase walkthrough (sign-in + sync + allowlist)
email/Code.gs           Google Apps Script backend (daily mini-lesson email only)
EMAIL-SETUP.md          step-by-step email backend setup guide
ARCHITECTURE.md         full technical contract (data schema, engine APIs, sync protocol)
sw.js, manifest.webmanifest, icons/    PWA layer (offline + installable)
```

---

Built with [Claude Code](https://claude.com/claude-code).
