/* Word Goblin — js/config.js
 *
 * Public deployment settings. This file ships with the app, so everything in it is
 * world-readable — and that is fine by design:
 *
 *   scriptUrl  your Apps Script web-app URL, ending in /exec
 *              (Deploy → Manage deployments → copy the Web app URL).
 *              It only powers the optional daily mini-lesson e-mail feature
 *              (Settings → Daily mini-lesson e-mail); knowing it grants nobody access.
 *
 *   firebase   the web-app config pasted from the Firebase console — FIREBASE-SETUP.md
 *              walks through it. None of these values are secrets: they only tell the
 *              browser which Firebase project to talk to. Access control is enforced
 *              server-side by the Firestore security rules and the `allowlist`
 *              collection, so a stranger who reads them still cannot sign in past the
 *              member check or read a word of anyone's progress.
 *
 * Leave a value as '' if you do not have it yet — the app itself runs fully without them.
 */
window.WORDGOBLIN_DEFAULTS = {
  scriptUrl: 'https://script.google.com/macros/s/AKfycbxtlGnGmumFnBzyR4G2ql79LHOL1rqMsKcdhd-hWViYWfv4WPjzYWx194iAWIBg8_ELxA/exec',
  // OAuth client for the Google Identity Services sign-in button (public by design).
  // Its ID token is exchanged with Firebase via signInWithCredential — the reliable
  // path on mobile, where Firebase's own popup/redirect flows break on github.io.
  googleClientId: '723840638835-ou9a35tc501rqi8865sq987aqgdqi71a.apps.googleusercontent.com',
  firebase: {
    apiKey: 'AIzaSyAtOi5C9r8Yr2Dfyyxtn4wTwLw_WWbOa4Q',
    authDomain: 'wordgoblin-d29e9.firebaseapp.com',
    projectId: 'wordgoblin-d29e9',
    appId: '1:977387689614:web:aaed0d67c9330a0e39dbdf'
  }
};
