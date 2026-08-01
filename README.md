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

Open the live URL, or open `index.html` straight from disk — the app is 100% static and
works offline (no build step, no CDN, no server). On a phone, open the URL once and
*Add to Home Screen*: it installs as an app and works offline afterwards.

Audio uses your device's built-in Korean/Chinese voices (Web Speech API) — click any
native-script word or sentence to hear it.

Progress saves automatically in your browser. Settings → Export/Import gives you a JSON
backup at any time.

## Daily mini-lesson emails + cross-device sync (free, optional)

Both are powered by one small Google Apps Script you deploy in your own Google account in
~5 minutes — see **[EMAIL-SETUP.md](EMAIL-SETUP.md)**. Once set up:

- Every morning you get a **word-of-the-day mini-lesson** (term, romanization, example
  sentence, etymology background) drawn from your actual position in the curriculum —
  the app keeps a queue synced as you study.
- Your progress syncs across devices: generate a **sync key** on one device, type it on
  the other, and studying on your phone and desktop merges cleanly (most-progress-wins,
  never clobbers).
- Optional **Sign in with Google**: after a one-time OAuth-client setup (see
  EMAIL-SETUP.md), a Google button in Settings replaces the typing — one click proves
  your address, fetches your sync key, and syncs settings and progress.

Everything stays in your own Google account; nothing is sent anywhere else.

## AI tutor (free, optional)

Create a free API key at [Google AI Studio](https://aistudio.google.com/app/apikey)
(this is separate from a Gemini app subscription — the key is free on its own tier),
paste it in **Settings → AI tutor**, hit **Save**, and the 🧌 bubble comes alive. The
browser talks to Google's Gemini API directly; the key is never committed anywhere. If
you use cross-device sync, the key and model choice travel with the rest of your
settings through your own Apps Script (gated by your sync key), so you only paste it
once — on a second device, enter the sync key and press **Save & sync** and everything
fills in. Optional hardening: in AI Studio, restrict the key to the HTTP referrer
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
data/korean/            10 curriculum units (foundation + 8 core + slang)
data/chinese/           10 curriculum units (foundation + 8 core + slang)
email/Code.gs           Google Apps Script backend (mini-lesson email + progress sync)
EMAIL-SETUP.md          step-by-step backend setup guide
ARCHITECTURE.md         full technical contract (data schema, engine APIs, sync protocol)
sw.js, manifest.webmanifest, icons/    PWA layer (offline + installable)
```

---

Built with [Claude Code](https://claude.com/claude-code).
