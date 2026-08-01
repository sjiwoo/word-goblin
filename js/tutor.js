/* Word Goblin — js/tutor.js
 *
 * The AI tutor: a floating chat bubble available on every page, answering questions about
 * the language, the current unit, grammar, etymology — anything. Powered by the learner's
 * OWN Google Gemini API key, called directly from the browser (the Gemini API allows
 * cross-origin requests), so the app stays 100% static: no server, no proxy.
 *
 * The key is stored in its own localStorage slot (wordGoblin.tutor.v1) — deliberately
 * OUTSIDE the FableProgress blob, so it is never included in progress exports, never
 * uploaded by cross-device sync, and never leaves this device.
 *
 * Exposes window.FableTutor = { settingsCard } for app.js to embed in the Settings view.
 * Plain script — loads after quiz.js/lesson.js (needs FableUI/FableCurriculum/FableAudio),
 * before app.js.
 */
(function () {
  'use strict';

  var STORE_KEY = 'wordGoblin.tutor.v1';
  var API_BASE = 'https://generativelanguage.googleapis.com/v1beta/models/';
  var MODELS = [
    { id: 'gemini-3.6-flash', label: 'Gemini 3.6 Flash — fast (recommended)' },
    { id: 'gemini-3.1-pro', label: 'Gemini 3.1 Pro — deepest answers (preview)' },
    { id: 'gemini-3.5-flash-lite', label: 'Gemini 3.5 Flash-Lite — fastest, cheapest' }
  ];
  var DEFAULT_MODEL = MODELS[0].id;
  var HISTORY_SENT_MAX = 20;      // messages included per request (memory keeps them all)
  var INPUT_MAX = 4000;

  var U = window.FableUI;
  var el = U.el;

  /* ================================================================ storage */

  function loadCfg() {
    try {
      var raw = window.localStorage.getItem(STORE_KEY);
      if (raw) {
        var o = JSON.parse(raw);
        if (o && typeof o === 'object') {
          return { apiKey: U.str(o.apiKey), model: U.str(o.model) || DEFAULT_MODEL };
        }
      }
    } catch (e) {}
    return { apiKey: '', model: DEFAULT_MODEL };
  }

  var cfg = loadCfg();

  function saveCfg(patch) {
    for (var k in patch) {
      if (Object.prototype.hasOwnProperty.call(patch, k)) cfg[k] = patch[k];
    }
    try { window.localStorage.setItem(STORE_KEY, JSON.stringify(cfg)); } catch (e) {}
    // Let app.js schedule a cross-device push so other devices pick the change up.
    try {
      if (window.FableTutor && typeof window.FableTutor.onConfigChange === 'function') {
        window.FableTutor.onConfigChange();
      }
    } catch (e) {}
  }

  function configured() { return !!cfg.apiKey; }

  /* ================================================================ context
   * A short note about where the learner is right now, prepended to the system
   * instruction so "what does this grammar point mean?" has something to bite on. */

  function currentContext() {
    var C = window.FableCurriculum;
    var P = window.FableProgress;
    var lines = [];
    try {
      var h = String(window.location.hash || '').replace(/^#\/?/, '');
      var parts = h.split('/').filter(function (s) { return s !== ''; }).map(decodeURIComponent);
      var lang = null;
      if (parts[0] === 'korean' || parts[0] === 'ko') lang = 'korean';
      if (parts[0] === 'chinese' || parts[0] === 'zh' || parts[0] === 'mandarin') lang = 'chinese';

      if (lang) {
        var meta = C.LANG_META[lang];
        lines.push('The learner is currently in the ' + meta.name + ' track.');
        if (parts[1] === 'unit' && parts[2]) {
          var u = C.unit(lang, parts[2]);
          if (u) {
            lines.push('They are viewing "' + u.title + '"' + (u.subtitle ? ' — ' + u.subtitle : '') +
              ' (' + (u.order === 0 ? 'Foundation' : 'Unit ' + u.order) + ').');
            var secs = [], terms = [];
            u.sections.forEach(function (s) {
              if (s.title) secs.push(s.title);
              if (s.type === 'vocab' && U.isArr(s.items)) {
                s.items.forEach(function (it) {
                  if (terms.length < 15 && it.term) {
                    terms.push(it.term + (it.gloss ? ' (' + it.gloss + ')' : ''));
                  }
                });
              }
            });
            if (secs.length) lines.push('Unit sections: ' + secs.join(' · ') + '.');
            if (terms.length) lines.push('Unit vocabulary includes: ' + terms.join(', ') + '.');
          }
        } else if (parts[1] === 'review') {
          lines.push('They are doing flashcard review.');
        }
      }
      lines.push('Overall progress: Korean ' + C.langPercent('korean') + '% (' +
        P.seenCount('korean') + ' words seen), Chinese ' + C.langPercent('chinese') + '% (' +
        P.seenCount('chinese') + ' words seen).');
    } catch (e) {}
    return lines.join('\n');
  }

  function systemInstruction() {
    return 'You are the Word Goblin tutor, a friendly expert teacher of Korean and Mandarin ' +
      'Chinese built into the Word Goblin web app (a textbook-style course with a strong ' +
      'linguistics/etymology focus: hanja and hanzi origins, Middle Chinese ancestry, sound ' +
      'change, cognates).\n' +
      'Guidelines:\n' +
      '- Answer in English unless asked otherwise. Always write Korean in Hangul and Mandarin ' +
      'in simplified characters, each followed by romanization in parentheses (Revised ' +
      'Romanization for Korean, pinyin with tone marks for Mandarin).\n' +
      '- Be concise and concrete: short paragraphs, example sentences over theory dumps.\n' +
      '- Love etymology: when relevant, mention where a word comes from, honestly flagging ' +
      'uncertain etymologies.\n' +
      '- If asked to translate or check a sentence, correct it gently and explain why.\n' +
      '- You may use **bold**, `code`, and simple bullet lists; no tables or headings.\n\n' +
      currentContext();
  }

  /* ============================================================ Gemini call */

  function friendlyError(status, apiMessage) {
    if (status === 400 && /API key not valid|API_KEY_INVALID/i.test(apiMessage || '')) {
      return 'That API key was rejected. Check it in Settings → AI tutor.';
    }
    if (status === 401 || status === 403) {
      return 'The API key was refused (HTTP ' + status + '). Check the key in Settings → AI tutor, ' +
        'and that it has no site restrictions blocking this page.';
    }
    if (status === 404) return 'Model not found — pick a different model in Settings → AI tutor.';
    if (status === 429) return 'Rate limit or quota reached on your Gemini key. Wait a minute and try again.';
    if (status >= 500) return 'Gemini had a server hiccup (HTTP ' + status + '). Try again.';
    return apiMessage || ('The request failed (HTTP ' + status + ').');
  }

  /**
   * stream(history, onDelta, done) — streamGenerateContent over SSE.
   * history: [{role:'user'|'model', text}]  ·  onDelta(fullTextSoFar)  ·  done(errOrNull, fullText)
   * Returns the AbortController (may be null if fetch/AbortController are unavailable).
   */
  function stream(history, onDelta, done) {
    var ctrl = (typeof AbortController === 'function') ? new AbortController() : null;
    var url = API_BASE + encodeURIComponent(cfg.model) + ':streamGenerateContent?alt=sse';
    var body = {
      system_instruction: { parts: [{ text: systemInstruction() }] },
      contents: history.slice(-HISTORY_SENT_MAX).map(function (m) {
        return { role: m.role, parts: [{ text: m.text }] };
      }),
      generationConfig: { temperature: 0.6, maxOutputTokens: 2048 }
    };

    var full = '';
    var sseBuf = '';

    function takeSse(chunk, flush) {
      sseBuf += chunk;
      var lines = sseBuf.split(/\r?\n/);
      sseBuf = flush ? '' : lines.pop();
      for (var i = 0; i < lines.length; i++) {
        var line = lines[i];
        if (line.slice(0, 5) !== 'data:') continue;
        var payload = line.slice(5).replace(/^\s+/, '');
        if (!payload || payload === '[DONE]') continue;
        var obj = null;
        try { obj = JSON.parse(payload); } catch (e) { continue; }
        var cand = obj && obj.candidates && obj.candidates[0];
        var parts = cand && cand.content && cand.content.parts;
        if (U.isArr(parts)) {
          for (var p = 0; p < parts.length; p++) {
            if (typeof parts[p].text === 'string') full += parts[p].text;
          }
        }
      }
    }

    window.fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-goog-api-key': cfg.apiKey },
      body: JSON.stringify(body),
      signal: ctrl ? ctrl.signal : undefined
    }).then(function (res) {
      if (!res.ok) {
        return res.text().then(function (txt) {
          var msg = '';
          try { msg = (JSON.parse(txt).error || {}).message || ''; } catch (e) {}
          throw new Error(friendlyError(res.status, msg));
        });
      }
      if (res.body && res.body.getReader) {
        var reader = res.body.getReader();
        var dec = new TextDecoder('utf-8');
        function pump() {
          return reader.read().then(function (r) {
            if (r.done) {
              takeSse(dec.decode(), true);
              done(null, full);
              return;
            }
            takeSse(dec.decode(r.value, { stream: true }), false);
            onDelta(full);
            return pump();
          });
        }
        return pump();
      }
      // No ReadableStream support: read the whole SSE body, parse it the same way.
      return res.text().then(function (txt) {
        takeSse(txt, true);
        done(null, full);
      });
    })['catch'](function (err) {
      if (err && err.name === 'AbortError') { done({ aborted: true }, full); return; }
      var msg = (err && err.message) || 'Could not reach the Gemini API. Are you online?';
      if (/Failed to fetch|NetworkError|Load failed/i.test(msg)) {
        msg = 'Could not reach the Gemini API — check your connection (offline mode can’t chat).';
      }
      done({ message: msg }, full);
    });

    return ctrl;
  }

  /** One tiny non-streaming call used by the Settings "Test key" button. */
  function testKey(key, model, cb) {
    window.fetch(API_BASE + encodeURIComponent(model) + ':generateContent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-goog-api-key': key },
      body: JSON.stringify({
        contents: [{ role: 'user', parts: [{ text: 'Reply with exactly: OK' }] }],
        generationConfig: { maxOutputTokens: 10 }
      })
    }).then(function (res) {
      if (res.ok) { cb({ ok: true }); return; }
      res.text().then(function (txt) {
        var msg = '';
        try { msg = (JSON.parse(txt).error || {}).message || ''; } catch (e) {}
        cb({ ok: false, error: friendlyError(res.status, msg) });
      });
    })['catch'](function () {
      cb({ ok: false, error: 'Could not reach the Gemini API. Are you online?' });
    });
  }

  /* ======================================================== message render
   * Markdown-lite: **bold**, `code`, bullet lists. Everything else is plain text.
   * After rendering, runs of Hangul / Han characters become click-to-hear spans
   * (same FableAudio voices as the rest of the app). */

  function renderInline(target, s) {
    var html = U.escapeHtml(s)
      .replace(/\*\*([^*\n]+)\*\*/g, '<strong>$1</strong>')
      .replace(/`([^`\n]+)`/g, '<code>$1</code>');
    target.innerHTML = html;
    return target;
  }

  var RE_HANGUL = /[가-힣ᄀ-ᇿ㄰-㆏]+/;
  var RE_HAN = /[一-鿿㐀-䶿豈-﫿]+/;

  function attachSpeech(root) {
    var A = window.FableAudio;
    if (!A || !A.attach) return;
    var walker = [];
    (function collect(n) {
      for (var c = n.firstChild; c; c = c.nextSibling) {
        if (c.nodeType === 3) walker.push(c);
        else if (c.nodeType === 1) collect(c);
      }
    })(root);
    walker.forEach(function (node) {
      var text = node.nodeValue;
      var re = /([가-힣ᄀ-ᇿ㄰-㆏]+|[一-鿿㐀-䶿豈-﫿]+)/g;
      if (!re.test(text)) return;
      re.lastIndex = 0;
      var frag = document.createDocumentFragment();
      var last = 0, m;
      while ((m = re.exec(text))) {
        if (m.index > last) frag.appendChild(document.createTextNode(text.slice(last, m.index)));
        var lang = RE_HANGUL.test(m[0]) ? 'korean' : 'chinese';
        var span = el('span', 'tutor-say', m[0]);
        A.attach(span, m[0], lang);
        frag.appendChild(span);
        last = m.index + m[0].length;
      }
      if (last < text.length) frag.appendChild(document.createTextNode(text.slice(last)));
      node.parentNode.replaceChild(frag, node);
    });
  }

  function renderMessage(target, s) {
    U.clear(target);
    var blocks = String(s || '').split(/\n/);
    var list = null;
    for (var i = 0; i < blocks.length; i++) {
      var line = blocks[i];
      var m = /^\s*[-*•]\s+(.*)$/.exec(line);
      if (m) {
        if (!list) { list = el('ul', 'tutor-list'); target.appendChild(list); }
        list.appendChild(renderInline(el('li'), m[1]));
        continue;
      }
      list = null;
      if (!line.trim()) continue;
      target.appendChild(renderInline(el('p', 'tutor-p'), line.replace(/^#+\s*/, '')));
    }
    attachSpeech(target);
  }

  /* ================================================================== panel */

  var history = [];               // [{role:'user'|'model', text}] — survives route changes
  var open = false;
  var busy = null;                // AbortController of the in-flight request, or null
  var bubbleBtn, panel, msgHost, input, sendBtn, emptyHost;

  function scrollDown() { msgHost.scrollTop = msgHost.scrollHeight; }

  function addMsg(role, text) {
    var row = el('div', 'tutor-msg tutor-' + role);
    var b = el('div', 'tutor-bubble');
    if (role === 'user') b.textContent = text;
    else renderMessage(b, text);
    row.appendChild(b);
    msgHost.appendChild(row);
    scrollDown();
    return b;
  }

  function paintEmpty() {
    U.clear(emptyHost);
    if (history.length) return;
    if (!configured()) {
      var setup = el('div', 'tutor-setup');
      setup.appendChild(el('h3', 'tutor-setup-title', 'One thing first: a Gemini API key'));
      setup.appendChild(U.para(
        'The tutor talks to Google Gemini straight from your browser using your own free API key ' +
        '(this is separate from a Gemini app subscription). Create one at ' +
        '<b>aistudio.google.com</b> → “Get API key”, then paste it here. If you use cross-device ' +
        'sync, the key travels to your other devices through your own Apps Script; it never goes ' +
        'anywhere else.', 'tutor-setup-p'));
      var link = el('a', 'tutor-link', 'Open Google AI Studio ↗');
      link.href = 'https://aistudio.google.com/app/apikey';
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      setup.appendChild(link);

      var row = el('div', 'tutor-keyrow');
      var inp = el('input', 'input');
      inp.type = 'password';
      inp.placeholder = 'Paste your Gemini API key';
      inp.setAttribute('autocomplete', 'off');
      row.appendChild(inp);
      row.appendChild(U.button('Save', 'btn btn-primary btn-sm', function () {
        var k = inp.value.trim();
        if (!k) return;
        saveCfg({ apiKey: k });
        paintEmpty();
        input.focus();
      }));
      setup.appendChild(row);
      emptyHost.appendChild(setup);
      return;
    }
    var hello = el('div', 'tutor-hello');
    hello.appendChild(el('div', 'tutor-hello-mark', '🧌'));
    hello.appendChild(el('p', 'tutor-hello-p',
      'Ask me anything — a grammar point on this page, where a word comes from, or “check my sentence”.'));
    var chips = el('div', 'tutor-chips');
    ['Explain the grammar in this unit simply',
     'Where does this unit’s hardest word come from?',
     'Quiz me on this unit’s vocabulary',
     'How do I say “I’m still learning, please speak slowly”?'].forEach(function (q) {
      chips.appendChild(U.button(q, 'tutor-chip', function () { send(q); }));
    });
    hello.appendChild(chips);
    emptyHost.appendChild(hello);
  }

  function setBusy(ctrl) {
    busy = ctrl || null;
    sendBtn.textContent = busy ? '◼' : '➤';
    sendBtn.title = busy ? 'Stop generating' : 'Send';
    sendBtn.setAttribute('aria-label', sendBtn.title);
  }

  function send(text) {
    text = String(text == null ? input.value : text).trim().slice(0, INPUT_MAX);
    if (!text || busy || !configured()) return;
    input.value = '';
    input.style.height = '';
    paintEmpty();

    history.push({ role: 'user', text: text });
    addMsg('user', text);

    var bubble = addMsg('model', '');
    bubble.classList.add('thinking');
    bubble.appendChild(el('span', 'tutor-dots', '· · ·'));

    var ctrl = stream(history, function (soFar) {
      bubble.classList.remove('thinking');
      renderMessage(bubble, soFar);
      scrollDown();
    }, function (err, full) {
      setBusy(null);
      bubble.classList.remove('thinking');
      if (full) {
        renderMessage(bubble, full);
        history.push({ role: 'model', text: full });
      }
      if (err && !err.aborted) {
        bubble.appendChild(el('p', 'tutor-error', err.message || 'Something went wrong.'));
      } else if (err && err.aborted && !full) {
        bubble.parentNode.parentNode.removeChild(bubble.parentNode);
      }
      scrollDown();
      input.focus();
    });
    setBusy(ctrl);
    scrollDown();
  }

  function togglePanel(force) {
    open = (force !== undefined) ? !!force : !open;
    panel.classList.toggle('open', open);
    bubbleBtn.classList.toggle('open', open);
    bubbleBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    bubbleBtn.setAttribute('aria-label', open ? 'Close the AI tutor' : 'Ask the AI tutor');
    if (open) {
      paintEmpty();
      setTimeout(function () { try { input.focus(); } catch (e) {} }, 150);
    }
  }

  function buildUi() {
    bubbleBtn = U.button('🧌', 'tutor-fab', function () { togglePanel(); });
    bubbleBtn.setAttribute('aria-expanded', 'false');
    bubbleBtn.setAttribute('aria-label', 'Ask the AI tutor');
    bubbleBtn.title = 'Ask the Goblin';

    panel = el('aside', 'tutor-panel');
    panel.setAttribute('role', 'dialog');
    panel.setAttribute('aria-label', 'AI tutor chat');

    var head = el('header', 'tutor-head');
    var ht = el('div', 'tutor-head-titles');
    ht.appendChild(el('strong', 'tutor-title', 'Ask the Goblin'));
    ht.appendChild(el('span', 'tutor-model', cfg.model));
    head.appendChild(ht);
    var tools = el('div', 'tutor-head-tools');
    tools.appendChild(U.button('↺', 'icon-btn', function () {
      if (busy) { try { busy.abort(); } catch (e) {} }
      history.length = 0;
      U.clear(msgHost);
      paintEmpty();
    }, { title: 'New conversation', ariaLabel: 'Start a new conversation' }));
    tools.appendChild(U.button('✕', 'icon-btn', function () { togglePanel(false); },
      { title: 'Close', ariaLabel: 'Close the tutor' }));
    head.appendChild(tools);
    panel.appendChild(head);

    var scroller = el('div', 'tutor-scroll');
    emptyHost = el('div', 'tutor-empty');
    scroller.appendChild(emptyHost);
    msgHost = el('div', 'tutor-msgs');
    msgHost.setAttribute('aria-live', 'polite');
    scroller.appendChild(msgHost);
    panel.appendChild(scroller);

    var form = el('div', 'tutor-form');
    input = el('textarea', 'tutor-input');
    input.rows = 1;
    input.maxLength = INPUT_MAX;
    input.placeholder = 'Ask about a word, grammar, etymology…';
    input.setAttribute('aria-label', 'Message the tutor');
    input.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); }
    });
    input.addEventListener('input', function () {
      input.style.height = 'auto';
      input.style.height = Math.min(input.scrollHeight, 120) + 'px';
    });
    form.appendChild(input);
    sendBtn = U.button('➤', 'tutor-send', function () {
      if (busy) { try { busy.abort(); } catch (e) {} return; }
      send();
    }, { ariaLabel: 'Send' });
    form.appendChild(sendBtn);
    panel.appendChild(form);

    document.body.appendChild(panel);
    document.body.appendChild(bubbleBtn);

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && open) togglePanel(false);
    });

    /* On phones the on-screen keyboard covers position:fixed elements; ride the visual
       viewport so the input stays visible while typing. */
    if (window.visualViewport) {
      var vv = window.visualViewport;
      var fitPanel = function () {
        if (!open) { panel.style.bottom = ''; return; }
        var covered = Math.max(0, window.innerHeight - vv.height - vv.offsetTop);
        panel.style.bottom = covered > 1 ? covered + 'px' : '';
        if (covered > 1) scrollDown();
      };
      vv.addEventListener('resize', fitPanel);
      vv.addEventListener('scroll', fitPanel);
    }
  }

  /* ======================================================== settings panel */

  function settingsCard() {
    var p = el('section', 'spanel');
    p.appendChild(el('h2', 'spanel-title', 'AI tutor (Gemini)'));
    p.appendChild(U.para(
      'The 🧌 bubble in the corner answers questions on any page, grounded in the unit you ' +
      'are reading. It calls Google’s Gemini API <b>directly from your browser</b> with your ' +
      'own key — the app has no server. The key is saved on this device and, if cross-device ' +
      'sync is set up, carried to your other devices through your own Apps Script (it is sent ' +
      'nowhere else). Create a free key at aistudio.google.com → “Get API key”. Note: a Gemini ' +
      'app subscription is separate — the API key is free on its own generous tier.', 'spanel-sub'));

    function field(labelText, node, hint) {
      var w = el('div', 'field');
      var l = el('label', 'field-label', labelText);
      if (node.id) l.setAttribute('for', node.id);
      w.appendChild(l);
      w.appendChild(node);
      if (hint) w.appendChild(U.para(hint, 'field-hint'));
      return w;
    }

    var key = el('input', 'input');
    key.type = 'password';
    key.id = 'set-geminikey';
    key.placeholder = 'AIza…';
    key.value = cfg.apiKey;
    key.setAttribute('autocomplete', 'off');
    key.addEventListener('change', function () { saveCfg({ apiKey: key.value.trim() }); });
    p.appendChild(field('Gemini API key', key,
      'Tip: in AI Studio you can restrict the key to this site (HTTP referrer ' +
      '<b>sjiwoo.github.io</b>) so it is useless anywhere else.'));

    var sel = el('select', 'input');
    sel.id = 'set-geminimodel';
    var found = false;
    MODELS.forEach(function (m) {
      var o = el('option', null, m.label);
      o.value = m.id;
      if (m.id === cfg.model) { o.selected = true; found = true; }
      sel.appendChild(o);
    });
    if (!found && cfg.model) {
      var custom = el('option', null, cfg.model + ' (custom)');
      custom.value = cfg.model;
      custom.selected = true;
      sel.appendChild(custom);
    }
    sel.addEventListener('change', function () {
      saveCfg({ model: sel.value });
      var tag = panel && panel.querySelector('.tutor-model');
      if (tag) tag.textContent = cfg.model;
    });
    p.appendChild(field('Model', sel));

    var status = el('p', 'form-status');
    status.setAttribute('role', 'status');
    var row = el('div', 'btn-row');
    row.appendChild(U.button('Save', 'btn btn-primary', function () {
      saveCfg({ apiKey: key.value.trim(), model: sel.value });
      status.textContent = cfg.apiKey
        ? 'Saved. It will reach your other devices on their next sync.'
        : 'Saved (no key set — the tutor stays asleep until you add one).';
      status.className = 'form-status ok';
    }));
    row.appendChild(U.button('Test key', 'btn btn-ghost', function () {
      var k = key.value.trim();
      if (!k) { status.textContent = 'Paste a key first.'; status.className = 'form-status bad'; return; }
      saveCfg({ apiKey: k, model: sel.value });
      status.textContent = 'Testing…';
      status.className = 'form-status';
      testKey(k, sel.value, function (res) {
        status.textContent = res.ok ? 'Key works — the goblin is ready to talk.' : res.error;
        status.className = 'form-status ' + (res.ok ? 'ok' : 'bad');
      });
    }));
    row.appendChild(U.button('Forget key', 'btn btn-ghost', function () {
      saveCfg({ apiKey: '' });
      key.value = '';
      status.textContent = 'Key removed from this device.';
      status.className = 'form-status ok';
    }));
    p.appendChild(row);
    p.appendChild(status);
    return p;
  }

  /* =================================================================== boot */

  function boot() { buildUi(); }

  window.FableTutor = {
    settingsCard: settingsCard,
    open: function () { togglePanel(true); },

    /* Cross-device sync bridge (called by progress.js). getSync feeds exports/pushes;
       applySync lands a merged cloud config in this module's live cfg + the UI. */
    getSync: function () { return { apiKey: cfg.apiKey, model: cfg.model }; },
    applySync: function (o) {
      if (!o || typeof o !== 'object') return;
      var patch = {};
      if (typeof o.apiKey === 'string' && o.apiKey) patch.apiKey = o.apiKey;
      if (typeof o.model === 'string' && o.model) patch.model = o.model;
      saveCfg(patch);
      var tag = panel && panel.querySelector('.tutor-model');
      if (tag) tag.textContent = cfg.model;
    },
    onConfigChange: null
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
