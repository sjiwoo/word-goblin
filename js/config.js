/* Word Goblin — js/config.js
 *
 * Optional deployment defaults. Everything here is PUBLIC (this file ships with the app),
 * so only put values that are safe to publish. Filling in scriptUrl means new devices
 * never have to paste it: the landing page and Settings pre-fill from here.
 *
 * Note the trade-off: the web-app URL is otherwise unguessable, so publishing it here
 * lets anyone POST to your Apps Script (your data stays protected by the sync key and
 * Google sign-in; the exposure is subscribe/queue noise). Leave it '' to keep the URL
 * out of the public repo and paste it per device instead.
 */
window.WORDGOBLIN_DEFAULTS = {
  scriptUrl: '',           // plain URL, e.g. 'https://script.google.com/macros/s/XXXX/exec'

  /* Preferred: the URL encrypted with a passphrase you keep in your head, so the public
     repo never reveals it. Generate this with tools/encrypt-url.html (runs fully offline);
     the landing page then shows a one-time passphrase field on new devices.
     Shape: { v:1, it:1500000, salt:'…', iv:'…', ct:'…' } (all base64). */
  encryptedScriptUrl: null
};
