# Word Goblin — Architecture

A self-contained HTML web app that teaches **Korean** and **Mandarin Chinese** as two fully
independent tracks, with textbook-grade curriculum, a linguistics deep-dive for every word,
click-to-hear audio, saved progress, and a free daily-email reminder backend.

## Design decisions (the why)

| Requirement | Decision |
|---|---|
| 1. Accessible as HTML | Pure static app: `index.html` + plain-script JS/CSS. **No build step, no modules, no fetch()** — must work opened directly via `file://` (fetch/ES-modules break on file:// CORS). Curriculum ships as `.js` files that register into a `window.CURRICULUM` global via ordinary `<script>` tags. |
| 2. Save progress | `localStorage` under key `wordGoblin.v1`, plus JSON export/import backup in Settings, plus automatic cloud sync to a per-user Firestore document once signed in (see "Sign-in + cloud sync"). |
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
  js/firebase.js             ← Agent APP   FableCloud: Firebase Auth + Firestore sync wrapper
  js/config.js               ← owner        public deployment config (firebase values, scriptUrl)
  js/app.js                  ← Agent APP   router, dashboard, settings (runs last)
  data/korean/foundation.js  ← Agent KO-A  (Hangul module, order 0)
  data/korean/unit01..04.js  ← Agent KO-A
  data/korean/unit05..08.js  ← Agent KO-B
  data/chinese/foundation.js ← Agent ZH-A  (Pinyin & tones + character intro, order 0)
  data/chinese/unit01..04.js ← Agent ZH-A
  data/chinese/unit05..08.js ← Agent ZH-B
  email/Code.gs              ← Agent MAIL   daily mini-lesson email backend (v6, email-only)
  EMAIL-SETUP.md             ← Agent MAIL
  firestore.rules            ← Agent MAIL   Firestore security rules (real access control)
  FIREBASE-SETUP.md          ← Agent MAIL   owner's one-time Firebase console walkthrough
  README.md                  ← orchestrator (after integration)
```

`index.html` script order: all `data/**` files (defer not needed; plain scripts in body), then
`config.js`, `audio.js`, `progress.js`, `quiz.js`, `lesson.js`, `tutor.js`, `firebase.js`,
`app.js` (firebase.js only needs to precede app.js).

### AI tutor (js/tutor.js, added post-launch)

A floating chat bubble on every page, backed by the **Google Gemini API called directly from
the browser** (the API is CORS-open) — the app stays serverless. Contract points:

- Config lives in its OWN localStorage slot `wordGoblin.tutor.v1` = `{ apiKey, model }`,
  but is **bridged into exports and cross-device sync** by progress.js: `exportJson()`
  grafts a top-level `tutor` field onto the blob (via `FableTutor.getSync()`, localStorage
  fallback), `mergeCloud()` adopts `cloudRaw.tutor` under the same newest-blob-wins rule as
  settings (routed through `FableTutor.applySync()` so the live UI updates), and
  `importJson()` restores it from backups. Guard: an empty cloud/backup value never blanks
  a locally stored key. `FableTutor.onConfigChange` is set by app.js to `schedulePush` so
  key/model edits propagate. The key is only ever sent to the user's own Firestore document
  (inside the synced blob, readable only by that signed-in user under the rules) and
  `generativelanguage.googleapis.com`.
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

### Sign-in + cloud sync (Firebase Auth + Firestore)

Identity and cross-device progress sync run on Firebase; the app stays a static site.
Owner setup is console-only — FIREBASE-SETUP.md — and membership is managed as documents,
never code.

- **FableCloud wrapper (js/firebase.js).** All Firebase access goes through one wrapper
  object, `window.FableCloud`. It loads the **compat SDK, pinned 10.12.2** (firebase-app-compat,
  firebase-auth-compat, firebase-firestore-compat) — compat, not modular, so the app keeps
  its no-build plain-script architecture. Stub-friendly: if `window.firebase` is already
  defined when firebase.js runs (tests, offline shims), it uses that instead of injecting
  the CDN scripts. Config comes from `WORDGOBLIN_DEFAULTS.firebase` in js/config.js
  (`apiKey`, `authDomain`, `projectId`, `appId`) — public by design; with no config,
  FableCloud reports itself unavailable and the app explains the owner setup step.
- **Sign-in flow.** Firebase Auth, Google provider (`signInWithPopup`, redirect fallback).
  After auth, the client checks membership by `get`ting `allowlist/<its own lowercased
  email>`; a non-member is signed out of the app UI and refused by name (the rules refuse
  their data access regardless — the client check is just the polite message).
- **Landing gate (app.js `showLanding`).** Unchanged mechanics: boot overlays a
  full-screen sign-in page until `settings.signedInAs` holds a verified Google address
  (device-local — in `LOCAL_ONLY_SETTINGS` and coerce(), never adopted from the cloud).
  There is NO skip. A device that has signed in once boots straight in, including
  offline, so the installed PWA still works; file:// copies are told to open the hosted
  app (Firebase Auth needs https). "Sign out on this device" (Settings → Account) clears
  `signedInAs` and reloads, which re-gates.
- **Firestore data model.**
  - `allowlist/{email}` — one doc per member; the doc ID is the member's Google address,
    LOWERCASE. No fields required (existence = membership). The owner adds/removes these
    in the Firebase console; clients can only `get` their own entry (no list, no writes).
  - `users/{uid}` — one doc per member, keyed by Firebase Auth UID:
    `{ email, blob, updatedAt, pushedAt }` where `blob` is the app's whole export
    (`exportJson()` output) as ONE JSON string, `updatedAt` is the client's ISO
    timestamp, and `pushedAt` is a Firestore server timestamp.
- **Rules summary (firestore.rules, repo root — publish via the console Rules tab).**
  Helpers: `signedIn()`, `userEmail()` = `request.auth.token.email.lower()`, `isMember()`
  = `exists(allowlist/<userEmail()>)`, plus an `email_verified` requirement. A user may
  read/write only `users/<their own uid>`, only while signed in, verified, and
  allowlisted; writes additionally require `blob` to be a string under 256 KB and
  `data.email == userEmail()`. `allowlist` allows `get` of your own doc only. Everything
  else is default-deny.
- **Sync transport.** Same merge semantics as before: on boot/sign-in the client reads
  `users/{uid}`, parses `blob`, and runs `P.mergeCloud` (per-item most-progress-wins:
  union of completed sections, max mastery/exercise tallies, max streak,
  newest-timestamp settings/tutor); pushes are throttled writes of the full export
  string after study activity. The blob-as-string design means Firestore never needs to
  know the app's schema, and the 256 KB rule cap bounds abuse.
- **Email backend (contract v6, key-only).** The Apps Script backend is now EMAIL-ONLY:
  subscribe / unsubscribe / sync (lesson queues) / deleteAll, all requiring the
  client-generated sync key (`authorize_` refuses keyless requests outright; first
  presented key claims the address). No sign-in, no membership, no progress storage.
  See EMAIL-SETUP.md for the full v6 contract.
- **Honest scope note:** the gate (like everything client-side on a public static site)
  is UX-level, not content security — the curriculum lives in a public repo and anyone
  can read it there. What the rules actually enforce is DATA access: nobody but a
  signed-in, verified, allowlisted member can read or write their synced progress, and
  nobody can read anyone else's.

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

### Lesson navigation (one step at a time + phone story mode)

- **Tabbed unit view (viewports > 680px).** Every section panel ends with a `step-nav`
  card pointing at the NEXT section of the same unit (Vocabulary 1 → Vocabulary 2);
  only the last section's card points at the next unit (or review, at end of track).
  The unit footer deliberately has NO next-unit button — progression is one section at
  a time. Continuing via the card also marks a READING section (dialogue/vocab/grammar/
  notes) complete; practice still completes only by finishing its quiz.
- **Story mode (viewports ≤ 680px).** `FableLesson.renderStory(root, lang, unit,
  {startSection})` replaces the tabbed view with a full-screen Instagram-story-style
  deck (`viewUnit` picks per `matchMedia`, re-rendering when the breakpoint is
  crossed; `body.story-open` locks page scroll and is cleared by every route render).
  The unit is flattened into cards: intro → per-section runs (one card per dialogue
  line / vocab word / grammar point, notes 2 paragraphs per card, the whole quiz as
  one card) each closed by an end card. Navigation: tap right/left thirds of the
  stage (guarded so links, buttons, speakables, details and the quiz never advance),
  horizontal swipe, arrow keys, and floating ‹ › buttons. A segmented bar on top
  fills per section; the current hash is `history.replaceState`d to the section index
  so reloads resume nearby. Reading sections auto-mark complete when their end card
  is reached; the end card carries the undo toggle. The story sits at z 50 — above
  the topbar (40), below the tutor goblin (59/60), which stays usable mid-lesson.

## Email backend contract (Agent MAIL + Agent APP) — v6: daily MINI-LESSON, email-only

The daily email is not a bare reminder: it is a personalized mini-lesson ("word of the day"
per active language) drawn from the learner's actual position in the curriculum. Since the
Apps Script has neither the curriculum nor the learner's localStorage progress, the app
uploads a small **lesson queue** and the script consumes one item per day.

Since v6 this backend does NOTHING else: Google sign-in, membership/invites, and progress
sync all moved to Firebase (see "Sign-in + cloud sync" above). What remains is keyed by the
app's automatically generated **sync key** (see below).

Requests (app → script, `Content-Type: text/plain;charset=utf-8`, JSON string body — avoids
CORS preflight; app cannot read replies from file:// so those syncs are fire-and-forget).
Every request carries the sync `key`:
- `{action:"subscribe", email, key, languages:["korean","chinese"], queues?}`
- `{action:"unsubscribe", email, key}`
- `{action:"sync", email, key, queues:{korean:[QueueItem…], chinese:[QueueItem…]}}` — full
  replace, resets that subscriber's pointers to 0.
- `{action:"deleteAll", email, key}` — wipes subscription, queues, and the key itself.

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

### The sync key (lightweight auth for the email endpoint)

The endpoint is public, so an email address alone must not grant any action. The app
generates a random key (10+ chars, crypto.getRandomValues) automatically and persists it in
settings; the user never sees or types it. Server stores `key:<email>`, claimed by the
FIRST request that presents a key for that email. Rules (hardened): a request presenting
NO key is refused outright; once a key is stored, every action must present the exact
matching `key`; mismatch → `{ok:false, error:"bad key"}` with no side effects; an existing
key is never overwritten, and only `deleteAll` clears it.

Progress storage is NOT part of this backend anymore (v6): cross-device progress sync is a
Firestore document per user — see "Sign-in + cloud sync (Firebase Auth + Firestore)" above.
The full v6 request/response contract, caps, storage shape and status endpoint are
documented in EMAIL-SETUP.md ("For developers").

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
