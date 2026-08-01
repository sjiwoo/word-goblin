/* Word Goblin — js/audio.js
 *
 * FableAudio: a thin, defensive wrapper around the Web Speech API (speechSynthesis).
 * Responsibilities:
 *   - pick the best available ko-KR / zh-CN voice, cache the choice, refresh it when the
 *     browser fires `voiceschanged` (Chrome + iOS Safari populate voices asynchronously);
 *   - cancel any in-flight utterance before speaking a new one;
 *   - degrade gracefully when no synthesis or no matching voice exists, and expose that
 *     state so Settings can show a "no voice found" hint;
 *   - attach(): turn any element into an accessible click/Enter/Space-to-speak control
 *     with a subtle 🔊 affordance.
 * Public: speak, stop, attach, status, voicesFor, onReady, isSupported, LANG_CODE.
 * Plain script — no modules, no network. Works from file://.
 */
window.FableAudio = (function () {
  'use strict';

  var SYNTH = (typeof window !== 'undefined' && window.speechSynthesis) ? window.speechSynthesis : null;

  /* Language profiles. `accept` codes are ranked fallbacks (Taiwanese/HK Mandarin voices
     still read simplified text fine, so they beat "no voice at all"). */
  var PROFILES = {
    korean: {
      key: 'korean',
      code: 'ko-KR',
      prefix: 'ko',
      label: 'Korean',
      rate: 0.92,
      accept: ['ko-kr', 'ko'],
      prefer: ['heami', 'yuna', 'sora', 'google 한국의', 'google korean', 'microsoft heami', 'nari', 'siwon']
    },
    chinese: {
      key: 'chinese',
      code: 'zh-CN',
      prefix: 'zh',
      label: 'Mandarin Chinese',
      rate: 0.9,
      accept: ['zh-cn', 'zh-hans', 'zh-hans-cn', 'zh-sg', 'zh', 'cmn-hans-cn', 'zh-tw', 'zh-hk'],
      prefer: ['huihui', 'yaoyao', 'kangkang', 'tingting', 'ting-ting', 'google 普通话', 'google mandarin',
        'xiaoxiao', 'yunyang', 'li-mu', 'meijia']
    }
  };

  var ALIASES = {
    ko: 'korean', kor: 'korean', korean: 'korean', 'ko-kr': 'korean',
    zh: 'chinese', cmn: 'chinese', chinese: 'chinese', mandarin: 'chinese', 'zh-cn': 'chinese'
  };

  var cache = { korean: null, chinese: null };
  var resolved = false;      // have we ever seen a non-empty voice list?
  var readyCbs = [];
  var pending = null;        // {text, profile} queued while voices load
  var pendingTimer = 0;

  function normLang(lang) {
    var k = String(lang == null ? '' : lang).toLowerCase().trim();
    return ALIASES[k] || (k.indexOf('ko') === 0 ? 'korean' : (k.indexOf('zh') === 0 ? 'chinese' : 'korean'));
  }

  function profileOf(lang) {
    return PROFILES[normLang(lang)];
  }

  function allVoices() {
    if (!SYNTH || typeof SYNTH.getVoices !== 'function') return [];
    var v;
    try { v = SYNTH.getVoices(); } catch (e) { v = null; }
    return (v && v.length) ? v : [];
  }

  function voiceLang(v) {
    return String(v && v.lang || '').toLowerCase().replace(/_/g, '-');
  }

  /* Score a voice for a language profile. Higher is better; <= 0 means unusable. */
  function score(voice, p) {
    var vl = voiceLang(voice);
    if (!vl) return 0;
    var idx = p.accept.indexOf(vl);
    var s = 0;
    if (idx >= 0) {
      s = 100 - idx * 6;
    } else if (vl.indexOf(p.prefix + '-') === 0 || vl === p.prefix) {
      s = 55;
    } else {
      return 0;
    }
    if (voice.localService) s += 8;
    if (voice['default']) s += 3;
    var name = String(voice.name || '').toLowerCase();
    for (var i = 0; i < p.prefer.length; i++) {
      if (name.indexOf(p.prefer[i]) !== -1) { s += 24 - i; break; }
    }
    return s;
  }

  function pickVoice(langKey) {
    var p = PROFILES[langKey];
    var list = allVoices();
    if (!list.length) return null;
    var best = null, bestScore = 0;
    for (var i = 0; i < list.length; i++) {
      var s = score(list[i], p);
      if (s > bestScore) { bestScore = s; best = list[i]; }
    }
    return best;
  }

  function refresh() {
    var list = allVoices();
    if (!list.length) return false;
    resolved = true;
    cache.korean = pickVoice('korean');
    cache.chinese = pickVoice('chinese');
    var cbs = readyCbs.slice();
    for (var i = 0; i < cbs.length; i++) { try { cbs[i](); } catch (e) {} }
    return true;
  }

  function voiceFor(langKey) {
    if (!resolved) refresh();
    return cache[langKey] || null;
  }

  /* ---- voiceschanged plumbing (Chrome/iOS load voices after first paint) ---- */
  if (SYNTH) {
    try {
      if (typeof SYNTH.addEventListener === 'function') {
        SYNTH.addEventListener('voiceschanged', onVoicesChanged);
      } else {
        SYNTH.onvoiceschanged = onVoicesChanged;
      }
    } catch (e) { /* ignore */ }
    // Some engines never fire the event; poll briefly at boot.
    var tries = 0;
    var poll = setInterval(function () {
      tries++;
      if (refresh() || tries > 20) clearInterval(poll);
    }, 250);
  }

  function onVoicesChanged() {
    refresh();
    if (pending) {
      var q = pending;
      pending = null;
      if (pendingTimer) { clearTimeout(pendingTimer); pendingTimer = 0; }
      doSpeak(q.text, q.profile);
    }
  }

  function doSpeak(text, p) {
    var u;
    try {
      u = new window.SpeechSynthesisUtterance(String(text));
    } catch (e) { return false; }
    var v = voiceFor(p.key);
    if (v) u.voice = v;
    u.lang = (v && v.lang) ? v.lang : p.code;
    u.rate = p.rate;
    u.pitch = 1;
    u.volume = 1;
    try {
      SYNTH.cancel();       // stop whatever is queued/playing first
      SYNTH.speak(u);
      // Chrome sometimes leaves the queue paused after a cancel().
      if (SYNTH.paused && typeof SYNTH.resume === 'function') SYNTH.resume();
    } catch (e) { return false; }
    return true;
  }

  /* ------------------------------------------------------------------ public */

  function isSupported() { return !!SYNTH && typeof window.SpeechSynthesisUtterance === 'function'; }

  function stop() {
    if (!SYNTH) return;
    try { SYNTH.cancel(); } catch (e) {}
  }

  /* Jamo-only chat strings (ㅋㅋ, ㅇㅇ, ㅠㅠ …) have no canonical reading — TTS engines
     skip them or spell out letter names. Substitute the conventional spoken forms
     (curriculum vocab entries carry their own `audio` overrides; this catches dialogue). */
  var KO_CHAT_SPOKEN = [
    [/ㅇㅇ/g, '응응'],
    [/[ㅋ]+/g, '크크'],
    [/[ㅎ]+/g, '하하'],
    [/[ㅠㅜ]{2,}/g, '흑흑']
  ];
  function speakable(text, key) {
    var s = String(text);
    if (key === 'ko') {
      for (var i = 0; i < KO_CHAT_SPOKEN.length; i++) s = s.replace(KO_CHAT_SPOKEN[i][0], KO_CHAT_SPOKEN[i][1]);
    }
    return s;
  }

  /**
   * speak(text, lang) — lang: "ko"|"zh" (also accepts "korean"/"chinese").
   * Returns true if the utterance was handed to the synthesiser (or queued for it).
   */
  function speak(text, lang) {
    if (!isSupported() || text == null || text === '') return false;
    var p = profileOf(lang);
    text = speakable(text, p.key);
    if (!resolved && !allVoices().length) {
      // Voices not ready yet: queue this request; voiceschanged (or the timeout) flushes it.
      pending = { text: text, profile: p };
      if (pendingTimer) clearTimeout(pendingTimer);
      pendingTimer = setTimeout(function () {
        pendingTimer = 0;
        if (pending) { var q = pending; pending = null; doSpeak(q.text, q.profile); }
      }, 600);
      return true;
    }
    return doSpeak(text, p);
  }

  /**
   * attach(el, text, lang, opts) — make an element clickable-to-speak.
   * opts: { icon:false } to skip the 🔊 glyph, { label:"..." } to override the aria-label.
   */
  function attach(el, text, lang, opts) {
    if (!el) return el;
    opts = opts || {};
    var say = (text == null ? (el.textContent || '') : String(text)).trim();
    if (!say) return el;

    el.classList.add('speakable');
    if (!el.hasAttribute('role')) el.setAttribute('role', 'button');
    if (!el.hasAttribute('tabindex')) el.setAttribute('tabindex', '0');
    el.setAttribute('aria-label', opts.label || ('Play audio: ' + say));
    el.setAttribute('title', 'Click to hear');
    el.dataset.speak = say;
    el.dataset.speakLang = normLang(lang);

    if (opts.icon !== false && !el.querySelector('.spk-icon')) {
      var ic = document.createElement('span');
      ic.className = 'spk-icon';
      ic.setAttribute('aria-hidden', 'true');
      ic.textContent = '🔊';
      el.appendChild(ic);
    }

    function fire(ev) {
      if (ev) { ev.preventDefault(); ev.stopPropagation(); }
      var ok = speak(say, normLang(lang));
      el.classList.remove('speaking');
      // force reflow so the animation restarts on rapid repeat clicks
      void el.offsetWidth;
      el.classList.add('speaking');
      setTimeout(function () { el.classList.remove('speaking'); }, 650);
      if (!ok) el.classList.add('speak-unavailable');
    }

    el.addEventListener('click', fire);
    el.addEventListener('keydown', function (ev) {
      if (ev.key === 'Enter' || ev.key === ' ' || ev.key === 'Spacebar') fire(ev);
    });
    return el;
  }

  /** status(lang) → { supported, voice, voiceLang, code, label, count } for the Settings hint. */
  function status(lang) {
    var p = profileOf(lang);
    var v = isSupported() ? voiceFor(p.key) : null;
    var list = allVoices();
    var n = 0;
    for (var i = 0; i < list.length; i++) if (score(list[i], p) > 0) n++;
    return {
      supported: isSupported(),
      code: p.code,
      label: p.label,
      voice: v ? v.name : null,
      voiceLang: v ? v.lang : null,
      count: n
    };
  }

  function voicesFor(lang) {
    var p = profileOf(lang);
    return allVoices().filter(function (v) { return score(v, p) > 0; });
  }

  /** onReady(cb) — called once voices are known (and again on every voiceschanged). */
  function onReady(cb) {
    if (typeof cb !== 'function') return;
    readyCbs.push(cb);
    if (resolved) { try { cb(); } catch (e) {} }
  }

  return {
    speak: speak,
    stop: stop,
    attach: attach,
    status: status,
    voicesFor: voicesFor,
    onReady: onReady,
    refresh: refresh,
    isSupported: isSupported,
    normLang: normLang,
    LANG_CODE: { korean: 'ko-KR', chinese: 'zh-CN' }
  };
})();
