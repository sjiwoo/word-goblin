/* Word Goblin — sw.js  (service worker)
 *
 * Offline-first shell for the GitHub Pages deployment. Every URL here is RELATIVE, so the
 * app works from any subpath (…github.io/word-goblin/) as well as from a domain root.
 *
 * Strategy:
 *   install  — precache the whole static app (tolerates individual misses so one absent
 *              data file can never wedge the install)
 *   activate — drop every cache except CACHE, then claim open clients
 *   fetch    — SAME-ORIGIN GET ONLY, stale-while-revalidate: serve the cached copy at once
 *              and refresh it in the background; fall back to the network, then to the
 *              cached shell for navigations. Cross-origin requests (the user's Apps Script
 *              endpoint) are never intercepted — they fall straight through to the network.
 *
 * Bump CACHE on every deploy to roll clients onto the new build.
 */
const CACHE = 'word-goblin-v12';

const PRECACHE = [
  './',
  './index.html',
  './manifest.webmanifest',
  './css/style.css',

  './js/config.js',
  './js/audio.js',
  './js/progress.js',
  './js/quiz.js',
  './js/lesson.js',
  './js/tutor.js',
  './js/app.js',

  './data/korean/foundation.js',
  './data/korean/unit01.js',
  './data/korean/unit02.js',
  './data/korean/unit03.js',
  './data/korean/unit04.js',
  './data/korean/unit05.js',
  './data/korean/unit06.js',
  './data/korean/unit07.js',
  './data/korean/unit08.js',
  './data/korean/unit09.js',
  './data/chinese/foundation.js',
  './data/chinese/unit01.js',
  './data/chinese/unit02.js',
  './data/chinese/unit03.js',
  './data/chinese/unit04.js',
  './data/chinese/unit05.js',
  './data/chinese/unit06.js',
  './data/chinese/unit07.js',
  './data/chinese/unit08.js',
  './data/chinese/unit09.js',

  './icons/icon.svg',
  './icons/icon-maskable.svg',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-192.png',
  './icons/icon-maskable-512.png',
  './icons/apple-touch-icon-180.png'
];

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE).then(function (cache) {
      // add() one by one: a missing asset must not abort the whole precache
      return Promise.all(PRECACHE.map(function (url) {
        return cache.add(new Request(url, { cache: 'reload' }))['catch'](function () { return null; });
      }));
    }).then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.map(function (k) {
        return k === CACHE ? null : caches['delete'](k);
      }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('message', function (event) {
  if (event.data === 'skipWaiting') self.skipWaiting();
});

self.addEventListener('fetch', function (event) {
  const req = event.request;

  if (req.method !== 'GET') return;                       // never touch the Apps Script POSTs

  let url;
  try { url = new URL(req.url); } catch (e) { return; }
  if (url.origin !== self.location.origin) return;        // never touch cross-origin
  if (url.protocol !== 'http:' && url.protocol !== 'https:') return;

  event.respondWith(
    caches.open(CACHE).then(function (cache) {
      return cache.match(req, { ignoreSearch: true }).then(function (cached) {
        const network = fetch(req).then(function (res) {
          if (res && res.ok && res.type === 'basic') cache.put(req, res.clone());
          return res;
        })['catch'](function () { return null; });

        if (cached) {
          event.waitUntil(network);                       // stale-while-revalidate
          return cached;
        }
        return network.then(function (res) {
          if (res) return res;
          if (req.mode === 'navigate') {                  // offline deep-link → app shell
            return cache.match('./index.html') || cache.match('./');
          }
          return new Response('', { status: 504, statusText: 'Offline' });
        });
      });
    })
  );
});
