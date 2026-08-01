/* Word Goblin — js/quiz.js
 *
 * Two things live here:
 *   1. window.FableUI — the tiny shared DOM toolkit used by quiz.js, lesson.js and app.js
 *      (element builder, safe rich text for the <b>/<i>-only strings in the data contract,
 *      shuffle, focus-ring-friendly buttons, confetti).
 *   2. window.FableQuiz — the exercise engine. Implements exactly the five contract types:
 *      mcq · typing · listening · match · order.
 *      One question at a time, instant feedback + explanation, correct/incorrect animation,
 *      then a score summary recorded into FableProgress.
 * Plain script — no modules, no network.
 */

/* ============================================================== FableUI ==== */
window.FableUI = (function () {
  'use strict';

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text !== undefined && text !== null) n.textContent = String(text);
    return n;
  }

  function clear(node) {
    while (node && node.firstChild) node.removeChild(node.firstChild);
    return node;
  }

  function escapeHtml(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  /* The data contract allows <b> and <i> inside prose strings and nothing else.
     Escape everything, then re-enable exactly those tags (plus <br>). */
  function richText(node, s) {
    var html = escapeHtml(s)
      .replace(/&lt;(\/?)(b|i|em|strong)&gt;/g, '<$1$2>')
      .replace(/&lt;br\s*\/?&gt;/g, '<br>');
    node.innerHTML = html;
    return node;
  }

  function para(text, cls) {
    return richText(el('p', cls || 'prose'), text);
  }

  function button(label, cls, onClick, opts) {
    var b = el('button', cls || 'btn', label);
    b.type = 'button';
    if (opts && opts.ariaLabel) b.setAttribute('aria-label', opts.ariaLabel);
    if (opts && opts.title) b.title = opts.title;
    if (onClick) b.addEventListener('click', onClick);
    return b;
  }

  function shuffle(list) {
    var a = (list || []).slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function isArr(x) { return Object.prototype.toString.call(x) === '[object Array]'; }

  function str(x) { return (typeof x === 'string') ? x : (x == null ? '' : String(x)); }

  /* Confetti: a dozen paper flecks, purely decorative, self-cleaning. */
  function celebrate(anchor) {
    if (!anchor) return;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    var host = el('div', 'confetti');
    host.setAttribute('aria-hidden', 'true');
    var colors = ['#c8102e', '#1f4fa3', '#d9a441', '#2f8f5b', '#c8352a'];
    for (var i = 0; i < 14; i++) {
      var f = el('i', 'fleck');
      f.style.background = colors[i % colors.length];
      f.style.left = (10 + Math.random() * 80) + '%';
      f.style.animationDelay = (Math.random() * 120) + 'ms';
      f.style.transform = 'rotate(' + Math.floor(Math.random() * 360) + 'deg)';
      host.appendChild(f);
    }
    anchor.appendChild(host);
    setTimeout(function () { if (host.parentNode) host.parentNode.removeChild(host); }, 1400);
  }

  function pulse(node, cls) {
    if (!node) return;
    node.classList.remove('anim-correct', 'anim-wrong');
    void node.offsetWidth;
    node.classList.add(cls);
    setTimeout(function () { node.classList.remove(cls); }, 700);
  }

  function ring(percent, cls) {
    /* Inline-SVG completion ring — no external assets. */
    var p = Math.max(0, Math.min(100, Math.round(percent || 0)));
    var wrap = el('div', 'ring ' + (cls || ''));
    var r = 26, c = 2 * Math.PI * r;
    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 64 64');
    svg.setAttribute('class', 'ring-svg');
    svg.setAttribute('aria-hidden', 'true');
    var bg = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    bg.setAttribute('cx', '32'); bg.setAttribute('cy', '32'); bg.setAttribute('r', String(r));
    bg.setAttribute('class', 'ring-bg');
    var fg = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    fg.setAttribute('cx', '32'); fg.setAttribute('cy', '32'); fg.setAttribute('r', String(r));
    fg.setAttribute('class', 'ring-fg');
    fg.setAttribute('stroke-dasharray', c.toFixed(1));
    fg.setAttribute('stroke-dashoffset', (c * (1 - p / 100)).toFixed(1));
    svg.appendChild(bg); svg.appendChild(fg);
    wrap.appendChild(svg);
    var lab = el('span', 'ring-label', p === 100 ? '✓' : (p + '%'));
    wrap.appendChild(lab);
    wrap.setAttribute('role', 'img');
    wrap.setAttribute('aria-label', p + '% complete');
    return wrap;
  }

  return {
    el: el, clear: clear, escapeHtml: escapeHtml, richText: richText, para: para,
    button: button, shuffle: shuffle, isArr: isArr, str: str,
    celebrate: celebrate, pulse: pulse, ring: ring
  };
})();

/* ============================================================ FableQuiz ==== */
window.FableQuiz = (function () {
  'use strict';

  var U = window.FableUI;
  var el = U.el, isArr = U.isArr;

  var TYPES = { mcq: 1, typing: 1, listening: 1, match: 1, order: 1 };

  /* ----------------------------------------------------------- validation */

  function validExercise(x) {
    if (!x || typeof x !== 'object' || !TYPES[x.type]) return false;
    switch (x.type) {
      case 'mcq':
        return isArr(x.choices) && x.choices.length >= 2 &&
          typeof x.answer === 'number' && x.answer >= 0 && x.answer < x.choices.length;
      case 'listening':
        return !!x.audioText && isArr(x.choices) && x.choices.length >= 2 &&
          typeof x.answer === 'number' && x.answer >= 0 && x.answer < x.choices.length;
      case 'typing':
        return (isArr(x.answer) && x.answer.length > 0) || (typeof x.answer === 'string' && x.answer.length > 0);
      case 'match':
        return isArr(x.pairs) && x.pairs.length >= 2 &&
          x.pairs.every(function (p) { return p && p.a != null && p.b != null; });
      case 'order':
        return isArr(x.tokens) && x.tokens.length >= 2 && typeof x.answer === 'string' && x.answer.length > 0;
    }
    return false;
  }

  function filterExercises(list) {
    if (!isArr(list)) return [];
    var out = [];
    for (var i = 0; i < list.length; i++) {
      if (validExercise(list[i])) out.push(list[i]);
      else if (window.console && list[i]) console.warn('[FableQuiz] skipping malformed exercise', list[i]);
    }
    return out;
  }

  /* ------------------------------------------------------ answer matching */

  /** Trim, collapse inner whitespace, drop trailing ? . ! and common full-width variants. */
  function normalizeAnswer(s) {
    return U.str(s)
      .replace(/\s+/g, ' ')
      .trim()
      .replace(/[?.!？。！\s]+$/g, '')
      .trim();
  }

  function typingAccepts(ex, input) {
    var given = normalizeAnswer(input);
    if (!given) return false;
    var accepted = isArr(ex.answer) ? ex.answer : [ex.answer];
    var loose = given.toLocaleLowerCase();
    for (var i = 0; i < accepted.length; i++) {
      var a = normalizeAnswer(accepted[i]);
      if (!a) continue;
      if (given === a) return true;
      if (loose === a.toLocaleLowerCase()) return true;
    }
    return false;
  }

  /* --------------------------------------------------------------- shell */

  /**
   * render(container, exercises, opts)
   * opts: { lang, unitId, sectionIndex, title, onComplete(result) }
   */
  function render(container, exercises, opts) {
    opts = opts || {};
    var lang = window.FableProgress ? window.FableProgress.normLang(opts.lang) : (opts.lang || 'korean');
    var list = filterExercises(exercises);

    U.clear(container);
    if (!list.length) {
      container.appendChild(U.para('No practice exercises are available for this section.', 'empty-note'));
      return null;
    }

    var session = {
      lang: lang,
      unitId: opts.unitId || 'unknown',
      sectionIndex: (opts.sectionIndex === undefined ? 0 : opts.sectionIndex),
      list: list,
      index: 0,
      correct: 0,
      answered: [],
      onComplete: opts.onComplete
    };

    var root = el('div', 'quiz');
    var bar = el('div', 'quiz-bar');
    var barFill = el('div', 'quiz-bar-fill');
    bar.appendChild(barFill);
    var meta = el('div', 'quiz-meta');
    var counter = el('span', 'quiz-counter');
    var scoreTag = el('span', 'quiz-score');
    meta.appendChild(counter); meta.appendChild(scoreTag);
    var stage = el('div', 'quiz-stage');
    stage.setAttribute('aria-live', 'polite');

    root.appendChild(meta);
    root.appendChild(bar);
    root.appendChild(stage);
    container.appendChild(root);

    session.stage = stage;
    session.counter = counter;
    session.scoreTag = scoreTag;
    session.barFill = barFill;

    step(session);
    return session;
  }

  function step(S) {
    if (S.index >= S.list.length) return summary(S);
    var ex = S.list[S.index];
    S.counter.textContent = 'Question ' + (S.index + 1) + ' of ' + S.list.length;
    S.scoreTag.textContent = S.correct + ' correct';
    S.barFill.style.width = Math.round(S.index / S.list.length * 100) + '%';

    U.clear(S.stage);
    var card = el('div', 'qcard qcard-' + ex.type);
    card.appendChild(typeBadge(ex.type));
    S.stage.appendChild(card);

    var promptRow = el('div', 'qprompt');
    var promptText = el('div', 'qprompt-text');
    U.richText(promptText, ex.prompt || defaultPrompt(ex.type));
    promptRow.appendChild(promptText);
    if (ex.promptAudio) {
      var spk = U.button('🔊', 'icon-btn', null, { ariaLabel: 'Play audio: ' + ex.promptAudio, title: 'Hear it' });
      spk.addEventListener('click', function () { window.FableAudio.speak(ex.promptAudio, S.lang); });
      promptRow.appendChild(spk);
    }
    card.appendChild(promptRow);

    var body = el('div', 'qbody');
    card.appendChild(body);
    var feedback = el('div', 'qfeedback');
    card.appendChild(feedback);
    var footer = el('div', 'qfooter');
    card.appendChild(footer);

    var ctx = { S: S, ex: ex, card: card, body: body, feedback: feedback, footer: footer, done: false };

    switch (ex.type) {
      case 'mcq': renderChoices(ctx, ex.choices, ex.answer, null); break;
      case 'listening': renderListening(ctx); break;
      case 'typing': renderTyping(ctx); break;
      case 'match': renderMatch(ctx); break;
      case 'order': renderOrder(ctx); break;
    }
    // Smooth entrance
    void card.offsetWidth;
    card.classList.add('in');
  }

  function defaultPrompt(type) {
    return type === 'listening' ? 'What did you hear?' : 'Answer the question';
  }

  function typeBadge(type) {
    var names = { mcq: 'Multiple choice', typing: 'Type it', listening: 'Listening', match: 'Matching', order: 'Word order' };
    return el('span', 'qtype', names[type] || type);
  }

  /* --------------------------------------------------------- finish a Q */

  function finish(ctx, ok, extraNode) {
    if (ctx.done) return;
    ctx.done = true;
    var S = ctx.S, ex = ctx.ex;
    if (ok) S.correct++;
    S.answered.push({ type: ex.type, ok: !!ok });

    try { window.FableProgress.recordExercise(S.lang, S.unitId, !!ok); } catch (e) {}
    if (ex.type === 'listening' && ex.audioText) {
      try { window.FableProgress.vocabSeen(S.lang, ex.audioText); } catch (e) {}
    }

    U.clear(ctx.feedback);
    var verdict = el('div', 'verdict ' + (ok ? 'ok' : 'no'));
    verdict.appendChild(el('span', 'verdict-mark', ok ? '✓' : '✕'));
    verdict.appendChild(el('span', 'verdict-text', ok ? pickPraise() : 'Not quite'));
    ctx.feedback.appendChild(verdict);
    if (extraNode) ctx.feedback.appendChild(extraNode);
    if (ex.explain) ctx.feedback.appendChild(U.para(ex.explain, 'explain'));
    ctx.feedback.classList.add('shown');

    U.pulse(ctx.card, ok ? 'anim-correct' : 'anim-wrong');
    if (ok) U.celebrate(ctx.card);

    S.scoreTag.textContent = S.correct + ' correct';

    U.clear(ctx.footer);
    var last = (S.index === S.list.length - 1);
    var next = U.button(last ? 'See results' : 'Next question →', 'btn btn-primary', function () {
      S.index++;
      step(S);
    });
    ctx.footer.appendChild(next);
    try { next.focus(); } catch (e) {}
  }

  var PRAISE = ['Correct!', 'Exactly right', 'Nicely done', 'That’s it', 'Perfect'];
  function pickPraise() { return PRAISE[Math.floor(Math.random() * PRAISE.length)]; }

  /* ------------------------------------------------------------- 1. mcq */

  function renderChoices(ctx, choices, answerIdx, speakLangText) {
    var wrap = el('div', 'choices');
    var order = [];
    for (var i = 0; i < choices.length; i++) order.push(i);

    order.forEach(function (i) {
      var b = U.button('', 'choice', null);
      var letter = el('span', 'choice-key', String.fromCharCode(65 + i));
      var lab = el('span', 'choice-text');
      U.richText(lab, choices[i]);
      b.appendChild(letter);
      b.appendChild(lab);
      b.addEventListener('click', function () {
        if (ctx.done) return;
        var ok = (i === answerIdx);
        var kids = wrap.querySelectorAll('.choice');
        for (var k = 0; k < kids.length; k++) {
          kids[k].disabled = true;
          kids[k].classList.add('locked');
        }
        b.classList.add(ok ? 'is-correct' : 'is-wrong');
        if (!ok && kids[answerIdx]) kids[answerIdx].classList.add('is-correct', 'reveal');
        finish(ctx, ok, null);
      });
      wrap.appendChild(b);
    });
    ctx.body.appendChild(wrap);
    if (speakLangText) { /* reserved */ }
  }

  /* ------------------------------------------------------- 2. listening */

  function renderListening(ctx) {
    var S = ctx.S, ex = ctx.ex;
    var play = U.button('', 'play-big', null, { ariaLabel: 'Play the audio clip again' });
    play.appendChild(el('span', 'play-glyph', '🔊'));
    play.appendChild(el('span', 'play-label', 'Play again'));
    play.addEventListener('click', function () { window.FableAudio.speak(ex.audioText, S.lang); });
    ctx.body.appendChild(play);

    if (!window.FableAudio.isSupported()) {
      ctx.body.appendChild(U.para('Your browser has no speech synthesis, so the clip is shown as text: ' +
        ex.audioText, 'warn-note'));
    } else {
      setTimeout(function () { window.FableAudio.speak(ex.audioText, S.lang); }, 220);
    }
    renderChoices(ctx, ex.choices, ex.answer, null);
  }

  /* -------------------------------------------------------- 3. typing */

  function renderTyping(ctx) {
    var ex = ctx.ex;
    var form = el('div', 'typing');
    var input = el('input', 'typing-input');
    input.type = 'text';
    input.setAttribute('autocomplete', 'off');
    input.setAttribute('autocorrect', 'off');
    input.setAttribute('autocapitalize', 'off');
    input.setAttribute('spellcheck', 'false');
    input.setAttribute('aria-label', 'Your answer');
    input.placeholder = 'Type your answer…';
    form.appendChild(input);

    var check = U.button('Check', 'btn btn-primary', submit);
    form.appendChild(check);
    ctx.body.appendChild(form);

    if (ex.hint) {
      var hintWrap = el('div', 'hint-wrap');
      var hintBtn = U.button('Show hint', 'btn btn-ghost btn-sm', function () {
        hintBtn.remove();
        hintWrap.appendChild(U.para('Hint: ' + ex.hint, 'hint'));
      });
      hintWrap.appendChild(hintBtn);
      ctx.body.appendChild(hintWrap);
    }

    input.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') { e.preventDefault(); submit(); }
    });
    setTimeout(function () { try { input.focus(); } catch (e) {} }, 60);

    function submit() {
      if (ctx.done) return;
      var ok = typingAccepts(ex, input.value);
      input.disabled = true;
      check.disabled = true;
      input.classList.add(ok ? 'is-correct' : 'is-wrong');
      var reveal = null;
      if (!ok) {
        var accepted = isArr(ex.answer) ? ex.answer : [ex.answer];
        reveal = el('div', 'reveal-answer');
        reveal.appendChild(el('span', 'reveal-label', 'Answer:'));
        var a = el('span', 'reveal-value native', accepted[0]);
        window.FableAudio.attach(a, accepted[0], ctx.S.lang);
        reveal.appendChild(a);
        if (accepted.length > 1) {
          reveal.appendChild(el('span', 'reveal-alt', 'also accepted: ' + accepted.slice(1).join(' · ')));
        }
      }
      finish(ctx, ok, reveal);
    }
  }

  /* --------------------------------------------------------- 4. match */

  function renderMatch(ctx) {
    var ex = ctx.ex, S = ctx.S;
    var pairs = ex.pairs.slice();
    var left = U.shuffle(pairs.map(function (p, i) { return { i: i, text: U.str(p.a) }; }));
    var right = U.shuffle(pairs.map(function (p, i) { return { i: i, text: U.str(p.b) }; }));

    var grid = el('div', 'match-grid');
    var colA = el('div', 'match-col');
    var colB = el('div', 'match-col');
    colA.setAttribute('aria-label', 'Terms');
    colB.setAttribute('aria-label', 'Meanings');
    grid.appendChild(colA); grid.appendChild(colB);
    ctx.body.appendChild(grid);

    var status = el('div', 'match-status', 'Tap a term, then its match.');
    ctx.body.appendChild(status);

    var selected = null, matched = 0, mistakes = 0, busy = false;

    function makeTile(item, side) {
      var b = U.button('', 'match-tile ' + (side === 'a' ? 'side-a native' : 'side-b'), null);
      b.appendChild(el('span', 'match-text', item.text));
      if (side === 'a') {
        var s = el('span', 'spk-icon', '🔊');
        s.setAttribute('aria-hidden', 'true');
        b.appendChild(s);
      }
      b.setAttribute('aria-label', item.text);
      b.dataset.pair = String(item.i);
      b.dataset.side = side;
      b.addEventListener('click', function () { onTile(b, item, side); });
      return b;
    }

    function onTile(node, item, side) {
      if (ctx.done || busy || node.classList.contains('done')) return;
      if (side === 'a') window.FableAudio.speak(item.text, S.lang);
      if (!selected) {
        selected = { node: node, item: item, side: side };
        node.classList.add('sel');
        status.textContent = 'Now pick its match.';
        return;
      }
      if (selected.node === node) {
        node.classList.remove('sel');
        selected = null;
        status.textContent = 'Tap a term, then its match.';
        return;
      }
      if (selected.side === side) {   // switching selection within the same column
        selected.node.classList.remove('sel');
        selected = { node: node, item: item, side: side };
        node.classList.add('sel');
        return;
      }
      var ok = (selected.item.i === item.i);
      var first = selected;
      selected = null;
      if (ok) {
        first.node.classList.remove('sel');
        first.node.classList.add('done');
        node.classList.add('done');
        first.node.disabled = true;
        node.disabled = true;
        matched++;
        status.textContent = matched + ' of ' + pairs.length + ' matched.';
        if (matched === pairs.length) {
          var note = el('div', 'match-summary',
            mistakes === 0 ? 'All matched on the first try.' : 'All matched — ' + mistakes + ' mis-tap' + (mistakes === 1 ? '' : 's') + '.');
          finish(ctx, mistakes === 0, note);
        }
      } else {
        mistakes++;
        busy = true;
        first.node.classList.remove('sel');
        first.node.classList.add('bad');
        node.classList.add('bad');
        status.textContent = 'Not a pair — try again.';
        setTimeout(function () {
          first.node.classList.remove('bad');
          node.classList.remove('bad');
          busy = false;
        }, 460);
      }
    }

    left.forEach(function (it) { colA.appendChild(makeTile(it, 'a')); });
    right.forEach(function (it) { colB.appendChild(makeTile(it, 'b')); });
  }

  /* ---------------------------------------------------------- 5. order */

  function renderOrder(ctx) {
    var ex = ctx.ex, S = ctx.S;
    var pool = U.shuffle(ex.tokens.map(function (t, i) { return { i: i, text: U.str(t) }; }));
    var chosen = [];

    var line = el('div', 'order-line');
    line.setAttribute('aria-label', 'Your sentence');
    var poolBox = el('div', 'order-pool');
    ctx.body.appendChild(line);
    ctx.body.appendChild(poolBox);

    var actions = el('div', 'order-actions');
    var check = U.button('Check', 'btn btn-primary', submit);
    var undo = U.button('Clear', 'btn btn-ghost btn-sm', function () {
      if (ctx.done) return;
      chosen = [];
      draw();
    });
    actions.appendChild(check);
    actions.appendChild(undo);
    ctx.body.appendChild(actions);

    function draw() {
      U.clear(line);
      U.clear(poolBox);
      if (!chosen.length) {
        line.appendChild(el('span', 'order-placeholder', 'Tap the words below in order…'));
      }
      chosen.forEach(function (tok, pos) {
        var b = U.button('', 'token token-picked native', function () {
          if (ctx.done) return;
          chosen.splice(pos, 1);
          draw();
        });
        b.appendChild(el('span', 'token-text', tok.text));
        b.setAttribute('aria-label', 'Remove ' + tok.text);
        line.appendChild(b);
      });
      pool.forEach(function (tok) {
        var used = chosen.some(function (c) { return c.i === tok.i; });
        if (used) return;
        var b = U.button('', 'token native', function () {
          if (ctx.done) return;
          chosen.push(tok);
          window.FableAudio.speak(tok.text, S.lang);
          draw();
        });
        b.appendChild(el('span', 'token-text', tok.text));
        b.setAttribute('aria-label', 'Add ' + tok.text);
        poolBox.appendChild(b);
      });
      check.disabled = (chosen.length !== ex.tokens.length);
    }

    function submit() {
      if (ctx.done) return;
      var given = chosen.map(function (t) { return t.text; }).join(' ');
      var ok = normalizeAnswer(given) === normalizeAnswer(ex.answer) ||
        normalizeAnswer(given.replace(/\s+/g, '')) === normalizeAnswer(ex.answer.replace(/\s+/g, ''));
      var kids = ctx.body.querySelectorAll('.token');
      for (var i = 0; i < kids.length; i++) kids[i].disabled = true;
      check.disabled = true;
      undo.disabled = true;
      line.classList.add(ok ? 'is-correct' : 'is-wrong');
      var reveal = null;
      if (!ok) {
        reveal = el('div', 'reveal-answer');
        reveal.appendChild(el('span', 'reveal-label', 'Correct order:'));
        var a = el('span', 'reveal-value native', ex.answer);
        window.FableAudio.attach(a, ex.answer, S.lang);
        reveal.appendChild(a);
      } else {
        window.FableAudio.speak(ex.answer, S.lang);
      }
      finish(ctx, ok, reveal);
    }

    draw();
  }

  /* -------------------------------------------------------- summary */

  function summary(S) {
    var total = S.list.length;
    var pct = Math.round(S.correct / total * 100);
    S.counter.textContent = 'Practice complete';
    S.scoreTag.textContent = S.correct + ' / ' + total;
    S.barFill.style.width = '100%';

    try { window.FableProgress.recordQuiz(S.lang, S.unitId, S.sectionIndex, S.correct, total); } catch (e) {}

    U.clear(S.stage);
    var card = el('div', 'qcard summary-card');
    card.appendChild(U.ring(pct, 'ring-lg'));
    var h = el('h3', 'summary-title', pct === 100 ? 'Flawless.' : (pct >= 70 ? 'Well done.' : 'Good practice.'));
    card.appendChild(h);
    card.appendChild(el('p', 'summary-line', 'You answered ' + S.correct + ' of ' + total + ' correctly.'));

    var breakdown = el('ul', 'summary-list');
    S.answered.forEach(function (a, i) {
      var li = el('li', 'summary-item ' + (a.ok ? 'ok' : 'no'));
      li.appendChild(el('span', 'summary-num', String(i + 1)));
      li.appendChild(el('span', 'summary-mark', a.ok ? '✓' : '✕'));
      li.appendChild(el('span', 'summary-type', a.type));
      breakdown.appendChild(li);
    });
    card.appendChild(breakdown);

    var row = el('div', 'summary-actions');
    row.appendChild(U.button('Practise again', 'btn btn-primary', function () {
      S.index = 0; S.correct = 0; S.answered = [];
      step(S);
    }));
    if (typeof S.onComplete === 'function') {
      row.appendChild(U.button('Mark section complete ✓', 'btn btn-ghost', function () {
        S.onComplete({ correct: S.correct, total: total, percent: pct });
      }));
    }
    card.appendChild(row);
    S.stage.appendChild(card);
    void card.offsetWidth;
    card.classList.add('in');
    if (pct >= 70) U.celebrate(card);
  }

  return {
    render: render,
    normalizeAnswer: normalizeAnswer,
    typingAccepts: typingAccepts,
    validExercise: validExercise,
    filterExercises: filterExercises
  };
})();
