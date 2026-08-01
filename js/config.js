/* Word Goblin — js/config.js
 * Optional deployment defaults. Everything here is PUBLIC (this file ships with the app).
 * scriptUrl may stay empty: members receive the backend address inside their invite link
 * (in the URL fragment, which browsers never send to servers), and the backend itself
 * only talks to whitelisted Google accounts — so nothing secret needs to live here.
 */
window.WORDGOBLIN_DEFAULTS = {
  scriptUrl: ''
};
