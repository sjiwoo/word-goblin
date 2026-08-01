# Word Goblin — Firebase setup (sign-in + progress sync)

Word Goblin's **Sign in with Google** button and its **cross-device progress sync** run on
Firebase — Google's free app platform. You (the owner) set it up once, in the browser, with
no code and nothing to install. Budget about **15 minutes**.

What you get at the end:

- Anyone can *press* "Sign in with Google", but only people **you** have put on the member
  list get into the app. Everyone else is politely refused by name.
- Each member's progress and settings save to the cloud automatically and follow them
  across devices — no sync keys to type.
- Adding a member forever after = adding **one document** in a web console. Removing one =
  deleting that document. No code, no redeploys, ever.

The free ("Spark") tier is far more than this app can use. The optional daily mini-lesson
email is separate and unchanged — that still runs on Apps Script, see
[EMAIL-SETUP.md](EMAIL-SETUP.md).

---

## Part 1 — Create the Firebase project

1. Go to **[console.firebase.google.com](https://console.firebase.google.com)** and sign in
   with your Google account.
2. Click **Add project** (or **Create a project**).
3. Name it `word-goblin` (any name works), click **Continue**.
4. When asked about **Google Analytics**, turn it **OFF** (toggle at the bottom) — the app
   doesn't use it. Click **Create project**, wait a few seconds, click **Continue**.

## Part 2 — Turn on Google sign-in

5. In the left sidebar: **Build → Authentication**.
6. Click **Get started**.
7. Open the **Sign-in method** tab → under *Sign-in providers* click **Google**.
8. Flip the **Enable** toggle, pick your email under **Support email for project**, click
   **Save**.

## Part 3 — Authorize the app's web address

9. Still in Authentication, open the **Settings** tab → **Authorized domains**.
10. Confirm **`sjiwoo.github.io`** is in the list; if not, click **Add domain**, type
    `sjiwoo.github.io`, and add it. (`localhost` is pre-authorized already, which covers
    local testing.)

## Part 4 — Create the database

11. Left sidebar: **Build → Firestore Database** → **Create database**.
12. Choose **Start in production mode** (locked down — our own rules come next). **Next**.
13. Location: pick **nam5 (United States)** or whichever multi-region/region is nearest to
    you. **Create** (the location can never be changed later, but any choice works fine).

## Part 5 — Install the security rules

14. In Firestore, open the **Rules** tab.
15. Select everything in the editor and delete it.
16. Open the file **`firestore.rules`** from this repository, copy its entire contents,
    paste it into the editor.
17. Click **Publish**.

These rules are the actual security: only signed-in, verified, allowlisted members can
touch data, and each member can only touch their own document.

## Part 6 — Add yourself as the first member

18. In Firestore, open the **Data** tab.
19. Click **Start collection**. Collection ID: **`allowlist`** (exactly, lowercase). **Next**.
20. For the first document, set **Document ID** to **`undagada@gmail.com`** — the Google
    address you'll sign in with, all **lowercase**. No fields are needed (if the console
    insists on one, add field `addedAt`, type *string*, value today's date). Click **Save**.

**That's the entire membership system.** From now on:

- **Add a member:** Firestore → Data → `allowlist` → **Add document** → Document ID =
  their Google email, lowercase → Save.
- **Remove a member:** click their document → 🗑 delete.

## Part 7 — Connect the app to your project

21. Click the **gear icon** next to *Project Overview* (top-left) → **Project settings**.
22. On the **General** tab, scroll to **Your apps** → click the **`</>`** (Web) icon.
23. App nickname: `word-goblin` → leave **Firebase Hosting** unchecked → **Register app**.
24. The console shows a code snippet containing a `firebaseConfig` object. Copy the values
    of **`apiKey`**, **`authDomain`**, **`projectId`**, and **`appId`**.
25. Open **`js/config.js`** in this repository and paste those four values into the
    `WORDGOBLIN_DEFAULTS.firebase` object (each one in quotes, matching the field names).
26. Commit and push the change so the live site picks it up.

> These values are **PUBLIC by design** — they only tell the browser *which* Firebase
> project to talk to, like a street address. They grant no access by themselves. All actual
> security lives in the rules you published (Part 5) plus the allowlist (Part 6). Every
> Firebase web app ships its config in page source; this is how the platform is meant to work.

## Part 8 — Verify it works

27. Open **https://sjiwoo.github.io/word-goblin/** in a **private/incognito window** (so no
    old state interferes).
28. Click **Sign in with Google** and pick the account you allowlisted → you should land in
    the app, and progress made on one device should appear on another after signing in there.
29. Optional negative test: sign in with a Google account that is *not* on the allowlist →
    the app should refuse it by name ("… is not a member"). That proves the gate works.

---

## FAQ

**Are the config values in `js/config.js` secret?**
No. `apiKey`, `authDomain`, `projectId` and `appId` are identifiers, not credentials — they
appear in the page source of every Firebase web app on the internet. Someone with them can
attempt to talk to your project, but the Firestore rules refuse everything except a
signed-in, email-verified, allowlisted member touching their own document. Security is the
rules + allowlist, not secrecy of the config.

**How do I add a member?**
Firestore → **Data** tab → `allowlist` collection → **Add document** → Document ID = their
Google email address, **lowercase** → Save. Done — they can sign in immediately.

**How do I remove a member?**
Delete their document from `allowlist`. From that moment the rules refuse their reads and
writes, so syncing stops. A device where they were already signed in may still show its
locally cached copy of the app until they sign out or reload — at which point the gate
turns them away. If you also want their stored progress gone, delete their document under
the `users` collection too.

**What still uses the Apps Script backend?**
Only the optional **daily mini-lesson email** (and its lesson-queue uploads from the app's
Settings page). Sign-in and progress sync no longer touch it at all. See
[EMAIL-SETUP.md](EMAIL-SETUP.md).

**Does this cost anything?**
No. The Spark (free) tier includes 50,000 document reads and 20,000 writes per day; this
app uses a handful per user per session.
