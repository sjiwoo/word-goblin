/* Word Goblin — js/config.js
 *
 * Public deployment settings. This file ships with the app, so treat everything in it as
 * world-readable — and that is fine by design: knowing the backend address or the OAuth
 * client ID grants nobody access. Sign-in is checked against the member whitelist inside
 * your Apps Script, so a stranger who reads these values still cannot get in, read a
 * single word of anyone's progress, or subscribe an address.
 *
 * Filling both fields in is what makes "Sign in with Google" appear immediately on the
 * landing page, for everyone, without an invite link or any typing.
 *
 *   scriptUrl       your Apps Script web-app URL, ending in /exec
 *                   (Deploy → Manage deployments → copy the Web app URL)
 *   googleClientId  the OAuth client ID from console.cloud.google.com → Credentials,
 *                   ending in .apps.googleusercontent.com. Optional: with it the button
 *                   paints instantly; without it the app asks the backend first.
 *
 * Leave a value as '' if you do not have it yet — invite links still carry the backend
 * address, so the app keeps working either way.
 */
window.WORDGOBLIN_DEFAULTS = {
  scriptUrl: '',
  googleClientId: ''
};
