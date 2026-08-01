# Word Goblin — Architecture

A self-contained HTML web app that teaches **Korean** and **Mandarin Chinese** as two fully
independent tracks, with textbook-grade curriculum, a linguistics deep-dive for every word,
click-to-hear audio, saved progress, and a free daily-email reminder backend.

## Design decisions (the why)

| Requirement | Decision |
|---|---|
| 1. Accessible as HTML | Pure static app: `index.html` + plain-script JS/CSS. **No build step, no modules, no fetch()** — must work opened directly via `file://` (fetch/ES-modules break on file:// CORS). Curriculum ships as `.js` files that register into a `window.CURRICULUM` global via ordinary `<script>` tags. |
| 2. Save progress | `localStorage` under key `wordGoblin.v1`, plus JSON export/import backup in Settings. |
| 3. Daily email | **Google Apps Script** (free forever, no server): a deployed web-app endpoint receives the email address from the app's Settings page; a daily time-driven trigger sends the reminder via `MailApp`. Setup is paste-one-file + click Deploy, documented in `EMAIL-SETUP.md`. |
| 4. Independent languages | Two parallel tracks with separate progress objects, separate dashboards, and a per-language pause toggle. Nothing in one track reads the other. |
| 5. Real-textbook curriculum | Korean arc follows **Integrated Korean Beginning 1 (KLEAR) / Sogang 1A / Yonsei 1 / TTMIK Level 1**; Chinese arc follows **Integrated Chinese Level 1 Part 1 / HSK Standard Course 1–2 / New Practical Chinese Reader 1**. Shared structural pattern used by all of them: script foundation module → themed units, each = dialogue → vocab list → 3–4 grammar points → culture note → exercises. Each unit cites its textbook basis on screen. |
| 6. Linguistics focus | Every vocab item carries a `linguistics` object (etymology, script/character analysis, phonology, cognates). UI: a "Linguistics" reveal on every word card. |
| 7. Audio | Web Speech API (`speechSynthesis`) with `ko-KR` / `zh-CN` voices — built into Windows/macOS/iOS/Android browsers, free, offline. Every rendered term/sentence is clickable → speaks. |
| 8. No locking | Every unit and section is reachable from the unit map at all times. Progress marks completion; it never gates. |
| 9. Interactive + visual | SPA with hash router, animated transitions, flashcards, 5 exercise types, mastery meters, streak tracking. Self-contained styling (system font stack — no CDN so it works offline). |
| 10. No Duolingo | Curriculum sourced from the textbook canon above; no gamified skill-tree cloning. |

## File layout & ownership (agents: do NOT touch files outside your set)

```
fable lingua/
  index.html                 ← Agent APP (loads css, all 18 data files, then js in order below)
  css/style.css              ← Agent APP
  js/audio.js                ← Agent APP   FableAudio
  js/progress.js             ← Agent APP   FableProgress
  js/quiz.js                 ← Agent APP   exercise renderers
  js/lesson.js               ← Agent APP   unit/section renderers incl. linguistics reveal
  js/tutor.js                ← post-launch  AI tutor chat bubble (Gemini, user's own key)
  js/app.js                  ← Agent APP   router, dashboard, settings (runs last)
  data/korean/foundation.js  ← Agent KO-A  (Hangul module, order 0)
  data/korean/unit01..04.js  ← Agent KO-A
  data/korean/unit05..08.js  ← Agent KO-B
  data/chinese/foundation.js ← Agent ZH-A  (Pinyin & tones + character intro, order 0)
  data/chinese/unit01..04.js ← Agent ZH-A
  data/chinese/unit05..08.js ← Agent ZH-B
  email/Code.gs              ← Agent MAIL
  EMAIL-SETUP.md             ← Agent MAIL
  README.md                  ← orchestrator (after integration)
```

`index.html` script order: all `data/**` files (defer not needed; plain scripts in body), then
`audio.js`, `progress.js`, `quiz.js`, `lesson.js`, `tutor.js`, `app.js`.

### AI tutor (js/tutor.js, added post-launch)

A floating chat bubble on every page, backed by the **Google Gemini API called directly from
the browser** (the API is CORS-open) — the app stays serverless. Contract points:

- Config lives in its OWN localStorage slot `wordGoblin.tutor.v1` = `{ apiKey, model }`,
  but is **bridged into exports and v3 cross-device sync** by progress.js: `exportJson()`
  grafts a top-level `tutor` field onto the blob (via `FableTutor.getSync()`, localStorage
  fallback), `mergeCloud()` adopts `cloudRaw.tutor` under the same newest-blob-wins rule as
  settings (routed through `FableTutor.applySync()` so the live UI updates), and
  `importJson()` restores it from backups. Guard: an empty cloud/backup value never blanks
  a locally stored key. `FableTutor.onConfigChange` is set by app.js to `schedulePush` so
  key/model edits propagate. The key is only ever sent to the user's own Apps Script
  (inside the progress blob, gated by the sync key) and `generativelanguage.googleapis.com`.
- Endpoint: `POST {API_BASE}{model}:streamGenerateContent?alt=sse` with header
  `x-goog-api-key`; SSE `data:` lines parsed incrementally; non-streaming
  `:generateContent` used only by the Settings "Test key" button. Default model
  `gemini-3.6-flash` (user-selectable in Settings).
- Each request sends a system instruction with the learner's live context (current
  track/unit, its section titles, up to 15 vocab terms, overall percent) rebuilt per message.
- Rendering is markdown-lite (**bold**, `code`, bullets) over escaped text; runs of Hangul /
  Han characters in replies become click-to-hear spans via `FableAudio.attach`.
- `window.FableTutor = { settingsCard, open }`; app.js embeds `settingsCard()` in Settings.
  tutor.js loads after quiz/lesson (needs FableUI/FableAudio/FableCurriculum), before app.js.
- sw.js never intercepts the API call (cross-origin), so offline mode simply reports
  "can't chat offline".

### Google sign-in (contract v4, optional)

One-click identity on top of the v3 sync key, using Google Identity Services in the browser
and token verification in the user's own Apps Script:

- Client (app.js): the Cross-device sync panel `GET`s `<scriptUrl>?action=config`; if it
  returns a `googleClientId`, the GIS library (`accounts.google.com/gsi/client`) is loaded
  on demand and `renderButton` draws the official button. The credential callback POSTs
  `{action:'googleLogin', idToken}` and on success adopts `{email, syncKey, syncEnabled,
  subscribed?, activeLangs?}` then runs `syncNow()` + re-render. https-only; file:// and
  un-configured backends fall back to the manual key with an explanatory hint.
- Server (Code.gs): `googleLogin_` verifies the ID token via
  `https://oauth2.googleapis.com/tokeninfo` — audience must equal the `googleClientId`
  script property, issuer must be accounts.google.com, `email_verified` must be true —
  then returns the stored `key:<email>` (creating a server-generated Crockford key on
  first login) plus subscription state. Owner enables it by pasting their OAuth client ID
  into `setupGoogleLogin()` and running it once (EMAIL-SETUP.md has the Cloud Console
  walkthrough). The client ID is public; all data access still goes through the sync key.

## Data contract (curriculum files)

Every data file is a plain script with this exact envelope:

```js
window.CURRICULUM = window.CURRICULUM || {};
(function () {
  const C = window.CURRICULUM;
  C.korean = C.korean || { units: [] };   // or C.chinese
  C.korean.units.push({ /* one unit object */ });
})();
```

One unit per file. The app sorts `units` by `order` at boot, so load order never matters.

### Unit object

```js
{
  id: "ko-01",              // "<ko|zh>-<2-digit order>"
  order: 1,                 // 0 = foundation module
  title: "Greetings & Introductions",
  titleNative: "인사와 소개",          // target-script title
  subtitle: "one-line summary",
  textbookBasis: ["Integrated Korean Beginning 1, Lesson 1", "Sogang 1A Unit 1"],
  overview: ["paragraph", "paragraph"],   // plain strings; <b>/<i> allowed, nothing else
  sections: [ /* Section objects, rendered in order */ ]
}
```

### Section objects (5 types — engine renders exactly these)

```js
{ type: "dialogue", title: "...", context: "scene-setting sentence",
  lines: [{ speaker: "민수", text: "안녕하세요?", roman: "annyeonghaseyo?", gloss: "Hello?" }] }

{ type: "vocab", title: "...", items: [ /* VocabItem */ ] }

{ type: "grammar", title: "...", points: [{
    name: "Topic particle 은/는", pattern: "N + 은/는",
    explanation: ["paragraph strings"],
    examples: [{ text: "...", roman: "...", gloss: "..." }] }] }

{ type: "notes", title: "Culture note: ...", body: ["paragraph strings"] }

{ type: "practice", title: "...", exercises: [ /* Exercise */ ] }
```

### VocabItem — the linguistics requirement lives here

```js
{
  term: "학교",                 // Chinese: simplified characters
  trad: "學校",                 // Chinese only; omit for Korean
  roman: "hakgyo",              // Revised Romanization / pinyin with tone marks (xuéxiào)
  gloss: "school",
  pos: "noun",
  audio: "학교",                // optional TTS override; defaults to term
  example: { text: "학교에 가요.", roman: "hakgyoe gayo.", gloss: "I go to school." },
  linguistics: {
    origin: "Sino-Korean",      // Sino-Korean | native Korean | loanword | compound / for zh: phono-semantic, pictograph, ideograph, compound ideograph, loan
    etymology: ["paragraphs: hanja 學校, Middle Chinese *hɛwk kˠau̯, semantic history"],
    script: ["character/hanja breakdown, radicals, component logic"],
    phonology: ["sound changes, pronunciation rules affecting this word"],
    cognates: ["related words in Korean/Chinese/Japanese sharing the root"]
  }
}
```

Every vocab item MUST have a substantive `linguistics` object — this is a core product
requirement, not optional garnish. Aim for genuinely accurate historical linguistics
(hanja/hanzi sources, Middle Chinese where relevant, native etymologies, sound-change notes).

### Exercise objects (engine implements exactly these 5)

```js
{ type: "mcq",    prompt: "What does 학교 mean?", promptAudio: "학교"|null,
  choices: ["school","teacher","student","book"], answer: 0, explain: "why" }
{ type: "typing", prompt: "Type 'hello' in Korean", answer: ["안녕하세요","안녕하세요?"], hint: "starts with 안" }
{ type: "match",  prompt: "Match the words", pairs: [{ a: "학교", b: "school" }, ...4–6 pairs] }
{ type: "listening", prompt: "What did you hear?", audioText: "안녕하세요",
  choices: [...], answer: 0, explain: "..." }
{ type: "order",  prompt: "Arrange into a sentence: 'I go to school'",
  tokens: ["학교에","가요"], answer: "학교에 가요" }   // answer = correct tokens joined with a space
```

## Engine APIs (js/, Agent APP implements)

```js
FableAudio.speak(text, lang)        // lang: "ko" | "zh"; picks best ko-KR/zh-CN voice, caches voice choice
FableAudio.attach(el, text, lang)   // helper: makes element clickable-to-speak with a 🔊 affordance

FableProgress.get()                          // whole state object
FableProgress.markSection(lang, unitId, i)   // section i of unit complete
FableProgress.recordExercise(lang, unitId, ok)
FableProgress.vocabSeen(lang, term) / vocabMastery bumps
FableProgress.setPaused(lang, bool)          // requirement 4
FableProgress.settings {email, scriptUrl, activeLangs}
FableProgress.exportJson() / importJson(str)
// storage shape: { korean: {units:{}, streak, lastStudy}, chinese: {...}, settings: {...} }
```

Router (hash-based): `#/` home dashboard (both tracks side by side, pause toggles),
`#/korean` unit map, `#/korean/unit/ko-01` unit view (section tabs), `#/korean/review`
flashcard review of all seen vocab, same for `#/chinese`, `#/settings` (email signup,
Apps Script URL, export/import, voice test). All units always clickable (requirement 8).

## Email backend contract (Agent MAIL + Agent APP) — v2: daily MINI-LESSON

The daily email is not a bare reminder: it is a personalized mini-lesson ("word of the day"
per active language) drawn from the learner's actual position in the curriculum. Since the
Apps Script has neither the curriculum nor the learner's localStorage progress, the app
uploads a small **lesson queue** and the script consumes one item per day.

Requests (app → script, `Content-Type: text/plain;charset=utf-8`, JSON string body — avoids
CORS preflight; app cannot read replies from file:// so all syncs are fire-and-forget):
- `{action:"subscribe", email, languages:["korean","chinese"], queues?}`
- `{action:"unsubscribe", email}`
- `{action:"sync", email, queues:{korean:[QueueItem…], chinese:[QueueItem…]}}` — full replace,
  resets that subscriber's pointers to 0.

`QueueItem` (client builds; hard cap 10 items/language and ≤8 KB serialized per language —
Script Properties values max out at 9 KB):
```js
{ term:"학교", roman:"hakgyo", gloss:"school", pos:"noun", unit:"Unit 3 · Places & Location",
  example:{ text:"학교에 가요.", roman:"hakgyoe gayo.", gloss:"I go to school." },
  origin:"Sino-Korean",
  background:["≤2 paragraphs, each trimmed ≤400 chars, from the word's linguistics.etymology"] }
```

Storage (Script Properties): `sub:<email>` → `{languages, subscribedAt}`;
`queue:<email>:<lang>` → `{items:[…], pointer:0, syncedAt}`.

`sendDailyReminders()` (daily trigger): per subscriber, per active language: take
`items[pointer]`, render a mini-lesson block (large native-script term, romanization, gloss,
part of speech, example sentence with translation, "Background" etymology paragraphs, unit
attribution), advance the pointer. Both languages share one email. If a queue is missing or
exhausted → fallback friendly reminder block: "open Word Goblin to refresh your lesson
queue". Keep quota guard + per-recipient try/catch.

Client side (Agent APP): queue = next unseen/low-mastery vocab items in curriculum order,
starting at the learner's first incomplete unit, per language, trimmed to fit the caps.
Sync triggers (fire-and-forget POST): on subscribe; on app load when subscribed and not yet
synced today; after any section completion. Subscribed-state + last-sync stored in settings.

`EMAIL-SETUP.md`: step-by-step with screenshots-level clarity: script.google.com → new project
→ paste → Deploy as web app (execute as me, access: anyone) → copy URL into app Settings.
Documents the v2 request contract above.

### v3 additions: cross-device progress sync + sync key

The app is also hosted on GitHub Pages (https), where Apps Script POST responses ARE
readable cross-origin — so progress sync is request/response, unlike the fire-and-forget
queue sync (which keeps its no-cors fallback for file:// use).

**Sync key (lightweight auth).** The endpoint is public, so email alone must not grant
read/write. The app generates a random key (10+ chars, crypto.getRandomValues) on first
use and persists it in settings; the user types the same key on their other devices.
Server stores `key:<email>` → token, claimed by the FIRST request that presents a key for
that email. Once set, every action below — and `sync`/`unsubscribe` from v2 — must present
the matching `key`; mismatch → `{ok:false, error:"bad key"}` (subscribe with a mismatched
key also fails; never overwrite an existing key). Progress sync works WITHOUT an email
subscription — key and subscription are independent.

**New actions** (same text/plain JSON POST):
- `{action:"saveProgress", email, key, updatedAt, progress:<app state object>}` — store blob.
  Chunk across Script Properties `prog:<email>:<n>` (8 KB chunks) with `progmeta:<email>` →
  `{chunks, bytes, updatedAt}`; reject blobs > 100 KB. LockService-guarded.
- `{action:"loadProgress", email, key}` → `{ok:true, progress, updatedAt}` or
  `{ok:true, progress:null}` if none. Also expose GET
  `?action=loadProgress&email=…&key=…` as a fallback path.
- Unsubscribe keeps stored progress (email opt-out ≠ delete my data);
  `{action:"deleteAll", email, key}` wipes sub, queues, progress, and key.

**Client (Agent APP):** on boot (when scriptUrl+email+key configured): loadProgress →
merge with local → save merged locally; push saveProgress after study activity (throttled,
e.g. ≤1/5 min, and on pagehide via sendBeacon-style best effort). Merge = per-item most
progress wins: union of completed sections, max per-word mastery counts and exercise
tallies, max streak, latest-timestamp settings. Settings UI: sync key field (generate /
show / copy), sync status line, "Sync now" button, and a short explainer.

## PWA / hosting (Agent APP)

Target: GitHub Pages (public repo `word-goblin`), so ALL asset URLs must stay relative
(no leading `/`). Add:
- `manifest.webmanifest` — name "Word Goblin", standalone display, theme/background colors
  from the design system, icons.
- `icons/icon.svg` + PNGs (192/512 + apple-touch-icon 180) — generated, ink-on-ivory "語"
  or dual-script mark consistent with the app aesthetic.
- `sw.js` — cache-first service worker precaching the full static app (bump-able CACHE
  version constant; network-falling-back-to-cache for same-origin GETs; never intercept
  the Apps Script origin). Registered from app.js only when NOT on file:// (service
  workers don't work on file:// — app must keep working there unchanged).
- `<link rel="manifest">`, theme-color meta, apple-touch-icon link in index.html.

## Curriculum outline (fixed — agents follow exactly)

**Korean** (KLEAR/Sogang/Yonsei/TTMIK arc)
- ko-00 Foundation: Hangul — letters, syllable blocks, batchim, pronunciation rules
- ko-01 Greetings & introductions — 이에요/예요, topic 은/는, 저/저는
- ko-02 Classroom & objects — 이것/그것/저것, subject 이/가, 있어요/없어요
- ko-03 Places & location — location 에/에서, position words, 어디
- ko-04 Numbers, time & dates — native vs Sino-Korean numbers, counters, 시/분, days
- ko-05 Daily activities — -아/어요 present conjugation, object 을/를, basic verbs
- ko-06 Food & shopping — 주세요, 얼마예요, counters, negation 안
- ko-07 Past tense & weekends — -았/었어요, 하고/과-와, time expressions
- ko-08 Plans & honorifics — -(으)ㄹ 거예요, honorific -(으)세요, 께서, speech levels
- ko-09 Slang & colloquial speech — real 반말/internet/text slang in current use (e.g. 대박, 헐, 꿀잼/노잼, 멘붕, 심쿵, 인싸/아싸, 치맥, ㅋㅋ/ㅇㅇ jamo-texting), register warnings (who/when NOT to use), linguistics = word-formation: clipping, acronymic compounds, Konglish adaptation, jamo initialisms; mark each item's currency (current vs dated) as of 2026

**Chinese** (Integrated Chinese / HSK 1–2 / NPCR arc)
- zh-00 Foundation: Pinyin & tones — initials, finals, 4 tones + neutral, tone sandhi (3rd tone, 不, 一); intro to characters: strokes, stroke order, radicals
- zh-01 Greetings — 你好, 是, 姓/叫, questions with 吗/呢
- zh-02 Family — 有, measure word 个, numbers 1–99, 几 vs 多少
- zh-03 Dates & time — 月/号/星期, 点/分, time-word placement
- zh-04 Hobbies — 喜欢, verb-object compounds, 想, 为什么/因为
- zh-05 Visiting friends — 在 (location), 哪儿, particle 呢, 一下
- zh-06 Appointments — 给 (to/for), 打电话, 要, 可以, time-before-verb order
- zh-07 Studying Chinese — 怎么, complement of degree 得, adverbs 也/都/太
- zh-08 Shopping & money — 多少钱, 块/毛/分, 太…了, comparison with 比
- zh-09 Slang & internet Chinese — real colloquial/网络用语 in current use (e.g. 牛, 加油, 吃货, 学霸/学渣, 靠谱, 打卡, 躺平, 内卷, 佛系, 吐槽, number slang 666/88/520, letter abbreviations like yyds), register warnings, linguistics = homophone substitution, number rebus, Japanese-loan slang (宅/吐槽), abbreviation culture; mark each item's currency (current vs dated) as of 2026

Per unit: dialogue 6–10 lines · 14–20 vocab items (full linguistics each) · 3–4 grammar
points · 1 culture/notes section · 8–12 exercises mixing all 5 types. Foundation modules
replace the dialogue with extra `notes`/`grammar` sections teaching the script/sound system,
plus a vocab section of the letters/sounds themselves (linguistics = script history:
Sejong/훈민정음 for Hangul; oracle-bone→clerical evolution for characters).

## Visual direction (Agent APP)

Warm paper-and-ink aesthetic, not corporate SaaS: ivory background, ink-charcoal text,
Korean track accented **taegeuk blue→red gradient**, Chinese track **cinnabar red→gold**.
Large native-script typography as a design element, card-based layout, soft shadows,
smooth 150–250 ms transitions, subtle confetti/pulse on correct answers. Fully responsive
(phone → desktop). System font stack (`"Segoe UI", "Malgun Gothic", "Microsoft YaHei", …`)
so CJK renders well offline. Dark mode via `prefers-color-scheme` with a manual toggle.
