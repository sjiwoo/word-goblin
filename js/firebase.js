/* Word Goblin — js/firebase.js
 *
 * FableCloud: the sign-in + cross-device sync transport, built on Firebase Auth and
 * Firestore. Loads the Firebase *compat* SDKs (plain-script builds, global `firebase`
 * namespace) on demand by injecting script tags — nothing here uses modules, so the app
 * still boots from file:// where this layer simply reports itself unavailable.
 *
 * Data model (see FIREBASE-SETUP.md for the matching security rules):
 *   allowlist/{email}  — presence of a doc = that Google account may enter. Rules let a
 *                        signed-in user read only their OWN email's doc.
 *   users/{uid}        — { email, blob (exported progress JSON string), updatedAt (ISO),
 *                        pushedAt (server timestamp) }. Rules restrict to the owner uid.
 *
 * Everything is callbacks, matching the rest of the codebase; errors are short
 * human-readable strings. QA can stub the whole SDK: if window.firebase already exists
 * with initializeApp, no scripts are injected and the stub is used directly.
 */
window.FableCloud = (function () {
  'use strict';

  var SDK_URLS = [
    'https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js',
    'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth-compat.js',
    'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore-compat.js'
  ];

  var initState = 'idle';        // 'idle' | 'loading' | 'done'
  var initOk = false;
  var initQueue = [];            // callbacks waiting for init to settle
  var authListeners = [];
  var authKnown = false;         // onAuthStateChanged has fired at least once
  var authKnownQueue = [];       // one-shot callbacks waiting for that first fire
  var currentUser = null;        // {uid, email, emailVerified} | null

  function noop() {}

  /* ------------------------------------------------------------ availability */

  function cfg() {
    var d = window.WORDGOBLIN_DEFAULTS || {};
    var f = (d.firebase && typeof d.firebase === 'object') ? d.firebase : {};
    return {
      apiKey: String(f.apiKey || ''),
      authDomain: String(f.authDomain || ''),
      projectId: String(f.projectId || ''),
      appId: String(f.appId || '')
    };
  }

  function hostOk() {
    var proto = window.location.protocol;
    var host = window.location.hostname;
    return proto === 'https:' || host === 'localhost' || host === '127.0.0.1';
  }

  /** available() — config filled in AND an origin where Firebase Auth can work. */
  function available() {
    var c = cfg();
    return !!(c.apiKey && c.projectId && c.appId && c.authDomain) && hostOk();
  }

  /* ------------------------------------------------------------------- init */

  function toUser(u) {
    if (!u) return null;
    return {
      uid: String(u.uid || ''),
      email: String(u.email || '').toLowerCase(),
      emailVerified: !!u.emailVerified
    };
  }

  function loadScripts(urls, cb) {
    var i = 0;
    function next() {
      if (i >= urls.length) { cb(true); return; }
      var sc = document.createElement('script');
      sc.src = urls[i];
      sc.async = false;                 // preserve execution order
      sc.onload = function () { i++; next(); };
      sc.onerror = function () { cb(false); };
      document.head.appendChild(sc);
    }
    next();
  }

  function fireAuth() {
    for (var i = 0; i < authListeners.length; i++) {
      try { authListeners[i](currentUser); } catch (e) {}
    }
  }

  function finishInit(ok) {
    initState = 'done';
    initOk = ok;
    var q = initQueue;
    initQueue = [];
    for (var i = 0; i < q.length; i++) { try { q[i](ok); } catch (e) {} }
  }

  /**
   * init(cb(ok)) — idempotent. Injects the SDKs (or reuses a pre-existing / stubbed
   * `window.firebase`), initializes the app once, wires auth-state plumbing, and
   * completes any pending redirect sign-in. cb(false) when the scripts cannot load
   * (offline) or setup throws.
   */
  function init(cb) {
    cb = (typeof cb === 'function') ? cb : noop;
    if (initState === 'done') { cb(initOk); return; }
    initQueue.push(cb);
    if (initState === 'loading') return;
    initState = 'loading';

    function setUp() {
      var ok = false;
      try {
        if (!(window.firebase.apps && window.firebase.apps.length)) {
          window.firebase.initializeApp(cfg());
        }
        window.firebase.auth().onAuthStateChanged(function (u) {
          currentUser = toUser(u);
          authKnown = true;
          var waiting = authKnownQueue;
          authKnownQueue = [];
          for (var w = 0; w < waiting.length; w++) { try { waiting[w](); } catch (e3) {} }
          fireAuth();
        });
        // Complete a pending signInWithRedirect round trip; failures surface via
        // onAuthStateChanged staying null, so the error itself is ignorable.
        try {
          var rr = window.firebase.auth().getRedirectResult();
          if (rr && typeof rr['catch'] === 'function') rr['catch'](noop);
        } catch (e2) {}
        ok = true;
      } catch (e) {
        ok = false;
      }
      finishInit(ok);
    }

    // A pre-existing global (test stub, or a previous load) is used as-is.
    if (window.firebase && typeof window.firebase.initializeApp === 'function') {
      setUp();
      return;
    }
    loadScripts(SDK_URLS, function (loaded) {
      if (!loaded || !window.firebase || typeof window.firebase.initializeApp !== 'function') {
        finishInit(false);
        return;
      }
      setUp();
    });
  }

  /** ready() — init has completed successfully. */
  function ready() { return initState === 'done' && initOk; }

  /* ------------------------------------------------------------------- auth */

  /** onAuth(cb(userOrNull)) — fires on every auth change; immediately if state is known. */
  function onAuth(cb) {
    if (typeof cb !== 'function') return;
    authListeners.push(cb);
    if (authKnown) { try { cb(currentUser); } catch (e) {} }
  }

  function shortError(err) {
    var code = (err && err.code) || '';
    if (code === 'auth/popup-blocked') return 'The sign-in pop-up was blocked by the browser.';
    if (code === 'auth/popup-closed-by-user') return 'The sign-in window was closed before finishing.';
    if (code === 'auth/network-request-failed') return 'Network error — check your connection and try again.';
    if (code === 'auth/unauthorized-domain') return 'This site is not authorized for sign-in (owner: add it in the Firebase console).';
    if (code === 'permission-denied') return 'The server refused the request (permission denied).';
    if (code === 'unavailable') return 'The sync service is unreachable right now.';
    var msg = (err && err.message) ? String(err.message) : '';
    if (msg.length > 160) msg = msg.slice(0, 160) + '…';
    return msg || 'The request failed.';
  }

  /**
   * signIn(cb(err, user)) — Google popup sign-in; falls back to a full-page redirect when
   * the environment cannot do popups. After a redirect the page navigates away, so the
   * result arrives on the next boot via onAuth (init completes the redirect).
   */
  function signIn(cb) {
    cb = (typeof cb === 'function') ? cb : noop;
    if (!ready()) { cb('Sign-in is not ready — check your connection and reload.', null); return; }
    var provider;
    try { provider = new window.firebase.auth.GoogleAuthProvider(); }
    catch (e) { cb('Google sign-in could not start.', null); return; }
    try {
      window.firebase.auth().signInWithPopup(provider).then(function (res) {
        cb(null, toUser(res && res.user));
      })['catch'](function (err) {
        var code = (err && err.code) || '';
        if (code === 'auth/popup-blocked' ||
            code === 'auth/cancelled-popup-request' ||
            code === 'auth/operation-not-supported-in-this-environment') {
          try {
            var rp = window.firebase.auth().signInWithRedirect(provider);
            if (rp && typeof rp['catch'] === 'function') {
              rp['catch'](function () {
                cb('Could not open Google sign-in. Check pop-up settings and try again.', null);
              });
            }
            return;                     // page is navigating away; onAuth picks it up later
          } catch (e2) {}
        }
        cb(shortError(err), null);
      });
    } catch (e3) {
      cb('Google sign-in could not start.', null);
    }
  }

  /** signOutUser(cb) — always calls cb, even if the SDK never loaded. */
  function signOutUser(cb) {
    cb = (typeof cb === 'function') ? cb : noop;
    if (!ready()) { cb(); return; }
    try {
      window.firebase.auth().signOut().then(function () { cb(); })['catch'](function () { cb(); });
    } catch (e) { cb(); }
  }

  function liveUser() {
    try { return window.firebase.auth().currentUser || null; } catch (e) { return null; }
  }

  /**
   * whenAuthKnown(cb) — defers cb until the SDK's first onAuthStateChanged fire. The
   * compat SDK restores a signed-in session from IndexedDB asynchronously AFTER init,
   * so reading auth().currentUser too early reports "signed out" on every real boot.
   * Every data call below waits on this; once init succeeded the first fire is
   * guaranteed (the restored user, or a definitive null).
   */
  function whenAuthKnown(cb) {
    if (authKnown) { cb(); return; }
    authKnownQueue.push(cb);
  }

  /* -------------------------------------------------------------- firestore */

  /**
   * checkMember(email, cb(status)) — status is 'member' | 'notMember' | 'error'.
   * The security rules only let a user read their OWN email's allowlist doc; a
   * permission-denied therefore means "you are not that member" → 'notMember'.
   */
  function checkMember(email, cb) {
    cb = (typeof cb === 'function') ? cb : noop;
    var key = String(email || '').toLowerCase().trim();
    if (!ready() || !key) { cb('error'); return; }
    whenAuthKnown(function () {
      try {
        window.firebase.firestore().collection('allowlist').doc(key).get().then(function (snap) {
          cb(snap && snap.exists ? 'member' : 'notMember');
        })['catch'](function (err) {
          cb(((err && err.code) === 'permission-denied') ? 'notMember' : 'error');
        });
      } catch (e) { cb('error'); }
    });
  }

  /** pull(cb(err, resultOrNull)) — users/{uid}; result = {blob, updatedAt} or null. */
  function pull(cb) {
    cb = (typeof cb === 'function') ? cb : noop;
    if (!ready()) { cb('Cloud sync is not ready.', null); return; }
    whenAuthKnown(function () {
      var u = liveUser();
      if (!u) { cb('Not signed in.', null); return; }
      try {
        window.firebase.firestore().collection('users').doc(u.uid).get().then(function (snap) {
          if (!snap || !snap.exists) { cb(null, null); return; }
          var d = snap.data() || {};
          cb(null, { blob: String(d.blob || ''), updatedAt: String(d.updatedAt || '') });
        })['catch'](function (err) { cb(shortError(err), null); });
      } catch (e) { cb('Could not read the cloud copy.', null); }
    });
  }

  /** push(blobString, updatedAtIso, cb(err)) — overwrites users/{uid} (merge:false). */
  function push(blobString, updatedAtIso, cb) {
    cb = (typeof cb === 'function') ? cb : noop;
    if (!ready()) { cb('Cloud sync is not ready.'); return; }
    whenAuthKnown(function () {
      var u = liveUser();
      if (!u) { cb('Not signed in.'); return; }
      var doc = {
        email: String(u.email || '').toLowerCase(),
        blob: String(blobString == null ? '' : blobString),
        updatedAt: String(updatedAtIso || '')
      };
      try {
        if (window.firebase.firestore.FieldValue &&
            typeof window.firebase.firestore.FieldValue.serverTimestamp === 'function') {
          doc.pushedAt = window.firebase.firestore.FieldValue.serverTimestamp();
        }
      } catch (e) { /* stubbed SDK without FieldValue — pushedAt omitted */ }
      try {
        window.firebase.firestore().collection('users').doc(u.uid).set(doc, { merge: false })
          .then(function () { cb(null); })['catch'](function (err) { cb(shortError(err)); });
      } catch (e2) { cb('Could not save the cloud copy.'); }
    });
  }

  /* -------------------------------------------------------------------- api */

  return {
    available: available,
    init: init,
    ready: ready,
    onAuth: onAuth,
    signIn: signIn,
    signOutUser: signOutUser,
    checkMember: checkMember,
    pull: pull,
    push: push
  };
})();
