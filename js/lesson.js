/* Word Goblin — js/lesson.js
 *
 * Two modules:
 *   1. window.FableCurriculum — defensive access layer over the `window.CURRICULUM` global
 *      that the 18 data files push into. It validates and normalises every unit/section,
 *      skips malformed entries (logging a warning rather than throwing), de-duplicates by
 *      id and sorts by `order`. The app must boot even if data files are missing.
 *   2. window.FableLesson — the unit renderer: header, section tabs (Dialogue / Vocabulary /
 *      Grammar / Notes / Practice as present), every native-script string wired to
 *      click-to-speak, vocab cards with the expandable Linguistics panel, and
 *      mark-section-complete buttons. Nothing is ever locked.
 * Plain script — no modules, no network.
 */

/* ====================================================== FableCurriculum ==== */
window.FableCurriculum = (function () {
  'use strict';

  var U = window.FableUI;
  var isArr = U.isArr;

  var LANG_META = {
    korean: { key: 'korean', slug: 'korean', code: 'ko', name: 'Korean', native: '한국어', script: 'Hangul',
      tagline: 'Hangul, honorifics, and the grammar of politeness.' },
    chinese: { key: 'chinese', slug: 'chinese', code: 'zh', name: 'Chinese', native: '中文', script: 'Hanzi',
      tagline: 'Tones, characters, and the logic of Mandarin word order.' }
  };

  var SECTION_TYPES = { dialogue: 1, vocab: 1, grammar: 1, notes: 1, practice: 1 };
  var SECTION_LABEL = { dialogue: 'Dialogue', vocab: 'Vocabulary', grammar: 'Grammar', notes: 'Notes', practice: 'Practice' };

  var cache = null;
  var issues = [];

  function warn(msg, obj) {
    issues.push(msg);
    if (window.console && console.warn) console.warn('[FableCurriculum] ' + msg, obj === undefined ? '' : obj);
  }

  function strArray(x) {
    if (typeof x === 'string') return x ? [x] : [];
    if (!isArr(x)) return [];
    var out = [];
    for (var i = 0; i < x.length; i++) {
      if (typeof x[i] === 'string' && x[i].trim()) out.push(x[i]);
    }
    return out;
  }

  function cleanSection(sec, unitId, idx) {
    if (!sec || typeof sec !== 'object' || !SECTION_TYPES[sec.type]) {
      warn('unit ' + unitId + ': dropped section ' + idx + ' (unknown type)', sec);
      return null;
    }
    var s = { type: sec.type, title: (typeof sec.title === 'string' && sec.title) ? sec.title : SECTION_LABEL[sec.type] };

    if (sec.type === 'dialogue') {
      s.context = typeof sec.context === 'string' ? sec.context : '';
      s.lines = (isArr(sec.lines) ? sec.lines : []).filter(function (l) {
        return l && typeof l === 'object' && typeof l.text === 'string' && l.text;
      });
      if (!s.lines.length) { warn('unit ' + unitId + ': dialogue section ' + idx + ' has no usable lines'); return null; }

    } else if (sec.type === 'vocab') {
      s.items = (isArr(sec.items) ? sec.items : []).filter(function (it) {
        return it && typeof it === 'object' && typeof it.term === 'string' && it.term;
      });
      if (!s.items.length) { warn('unit ' + unitId + ': vocab section ' + idx + ' has no usable items'); return null; }

    } else if (sec.type === 'grammar') {
      s.points = (isArr(sec.points) ? sec.points : []).filter(function (p) {
        return p && typeof p === 'object' && (p.name || p.pattern);
      }).map(function (p) {
        return {
          name: p.name || p.pattern || 'Grammar point',
          pattern: p.pattern || '',
          explanation: strArray(p.explanation),
          examples: (isArr(p.examples) ? p.examples : []).filter(function (e) {
            return e && typeof e === 'object' && typeof e.text === 'string' && e.text;
          })
        };
      });
      if (!s.points.length) { warn('unit ' + unitId + ': grammar section ' + idx + ' has no usable points'); return null; }

    } else if (sec.type === 'notes') {
      s.body = strArray(sec.body);
      if (!s.body.length) { warn('unit ' + unitId + ': notes section ' + idx + ' is empty'); return null; }

    } else if (sec.type === 'practice') {
      s.exercises = window.FableQuiz ? window.FableQuiz.filterExercises(sec.exercises) : [];
      if (!s.exercises.length) { warn('unit ' + unitId + ': practice section ' + idx + ' has no valid exercises'); return null; }
    }
    return s;
  }

  function cleanUnit(raw, langKey, fallbackIdx) {
    if (!raw || typeof raw !== 'object') { warn(langKey + ': dropped a non-object unit', raw); return null; }
    var id = (typeof raw.id === 'string' && raw.id) ? raw.id
      : (LANG_META[langKey].code + '-' + String(fallbackIdx).replace(/^(\d)$/, '0$1'));

    var order = Number(raw.order);
    if (!isFinite(order)) {
      var m = /(\d+)\s*$/.exec(id);
      order = m ? Number(m[1]) : (fallbackIdx + 100);
    }

    var sections = [];
    var rawSections = isArr(raw.sections) ? raw.sections : [];
    for (var i = 0; i < rawSections.length; i++) {
      var s = cleanSection(rawSections[i], id, i);
      if (s) sections.push(s);
    }
    if (!sections.length) { warn(langKey + ': unit ' + id + ' has no usable sections — skipped'); return null; }

    return {
      id: id,
      lang: langKey,
      order: order,
      title: (typeof raw.title === 'string' && raw.title) ? raw.title : ('Unit ' + order),
      titleNative: typeof raw.titleNative === 'string' ? raw.titleNative : '',
      subtitle: typeof raw.subtitle === 'string' ? raw.subtitle : '',
      textbookBasis: strArray(raw.textbookBasis),
      overview: strArray(raw.overview),
      sections: sections
    };
  }

  function build() {
    issues = [];
    var src = (window.CURRICULUM && typeof window.CURRICULUM === 'object') ? window.CURRICULUM : {};
    var out = { korean: [], chinese: [] };

    ['korean', 'chinese'].forEach(function (langKey) {
      var bucket = src[langKey];
      var list = (bucket && isArr(bucket.units)) ? bucket.units : [];
      if (!bucket) warn('no data registered for ' + langKey);
      else if (!list.length) warn(langKey + ': CURRICULUM.' + langKey + '.units is empty');

      var seen = {};
      for (var i = 0; i < list.length; i++) {
        var u;
        try { u = cleanUnit(list[i], langKey, i); }
        catch (e) { warn(langKey + ': unit at index ' + i + ' threw during validation (' + e.message + ')'); u = null; }
        if (!u) continue;
        if (seen[u.id]) { warn(langKey + ': duplicate unit id ' + u.id + ' — keeping the first'); continue; }
        seen[u.id] = true;
        out[langKey].push(u);
      }
      out[langKey].sort(function (a, b) {
        if (a.order !== b.order) return a.order - b.order;
        return a.id < b.id ? -1 : (a.id > b.id ? 1 : 0);
      });
    });

    cache = out;
    return cache;
  }

  function all() { return cache || build(); }

  function units(lang) {
    var L = window.FableProgress ? window.FableProgress.normLang(lang) : lang;
    return all()[L] || [];
  }

  function unit(lang, id) {
    var list = units(lang);
    for (var i = 0; i < list.length; i++) if (list[i].id === id) return list[i];
    return null;
  }

  function unitIndex(lang, id) {
    var list = units(lang);
    for (var i = 0; i < list.length; i++) if (list[i].id === id) return i;
    return -1;
  }

  function sectionCount(u) { return (u && u.sections) ? u.sections.length : 0; }

  /** allVocab(lang) → [{ item, unitId, unitTitle }] across every unit, in curriculum order. */
  function allVocab(lang) {
    var out = [], list = units(lang);
    for (var i = 0; i < list.length; i++) {
      var u = list[i];
      for (var s = 0; s < u.sections.length; s++) {
        var sec = u.sections[s];
        if (sec.type !== 'vocab') continue;
        for (var k = 0; k < sec.items.length; k++) {
          out.push({ item: sec.items[k], unitId: u.id, unitTitle: u.title });
        }
      }
    }
    return out;
  }

  function vocabCount(lang) { return allVocab(lang).length; }

  /** langPercent(lang) — share of all sections in the language marked complete. */
  function langPercent(lang) {
    var list = units(lang), total = 0, done = 0;
    for (var i = 0; i < list.length; i++) {
      total += list[i].sections.length;
      done += Math.min(window.FableProgress.sectionsComplete(lang, list[i].id), list[i].sections.length);
    }
    if (!total) return 0;
    return Math.round(done / total * 100);
  }

  /** nextUnit(lang) — first unit that is not fully complete (else the last one). */
  function nextUnit(lang) {
    var list = units(lang);
    for (var i = 0; i < list.length; i++) {
      if (!window.FableProgress.isUnitComplete(lang, list[i].id, list[i].sections.length)) return list[i];
    }
    return list.length ? list[list.length - 1] : null;
  }

  /** Tab labels: type name, disambiguated when a unit has two of the same type. */
  function tabLabels(u) {
    var counts = {}, totals = {};
    u.sections.forEach(function (s) { totals[s.type] = (totals[s.type] || 0) + 1; });
    return u.sections.map(function (s) {
      counts[s.type] = (counts[s.type] || 0) + 1;
      var base = SECTION_LABEL[s.type] || s.type;
      return totals[s.type] > 1 ? base + ' ' + counts[s.type] : base;
    });
  }

  return {
    LANG_META: LANG_META,
    SECTION_LABEL: SECTION_LABEL,
    rebuild: build,
    all: all,
    units: units,
    unit: unit,
    unitIndex: unitIndex,
    sectionCount: sectionCount,
    allVocab: allVocab,
    vocabCount: vocabCount,
    langPercent: langPercent,
    nextUnit: nextUnit,
    tabLabels: tabLabels,
    issues: function () { return issues.slice(); }
  };
})();

/* ========================================================== FableLesson ==== */
window.FableLesson = (function () {
  'use strict';

  var U = window.FableUI;
  var C = window.FableCurriculum;
  var el = U.el;

  /* A native-script span that speaks when clicked. */
  function native(text, lang, cls, tag) {
    var n = el(tag || 'span', 'native ' + (cls || ''), text);
    if (text) window.FableAudio.attach(n, text, lang);
    return n;
  }

  /* ---------------------------------------------------------- unit page */

  /** renderUnit(root, lang, unit, opts) — opts: { onChange, startSection } */
  function renderUnit(root, lang, unit, opts) {
    opts = opts || {};
    U.clear(root);
    var page = el('div', 'unit-page lang-' + lang);

    page.appendChild(unitHeader(lang, unit));

    var labels = C.tabLabels(unit);
    var tabsWrap = el('div', 'tabs-wrap');
    var tablist = el('div', 'tabs');
    tablist.setAttribute('role', 'tablist');
    tablist.setAttribute('aria-label', 'Sections of ' + unit.title);
    tabsWrap.appendChild(tablist);
    page.appendChild(tabsWrap);

    var panels = el('div', 'panels');
    page.appendChild(panels);

    var tabNodes = [], panelNodes = [], built = [];

    function select(i, focus) {
      for (var k = 0; k < tabNodes.length; k++) {
        var on = (k === i);
        tabNodes[k].classList.toggle('active', on);
        tabNodes[k].setAttribute('aria-selected', on ? 'true' : 'false');
        tabNodes[k].tabIndex = on ? 0 : -1;
        panelNodes[k].hidden = !on;
        panelNodes[k].classList.toggle('active', on);
      }
      if (!built[i]) {
        buildPanel(panelNodes[i], lang, unit, i, opts, function () { refreshTab(i); }, goTo);
        built[i] = true;
      }
      if (focus) { try { tabNodes[i].focus(); } catch (e) {} }
      panelNodes[i].classList.remove('fade-in');
      void panelNodes[i].offsetWidth;
      panelNodes[i].classList.add('fade-in');
    }

    function refreshTab(i) {
      var done = window.FableProgress.isSectionComplete(lang, unit.id, i);
      tabNodes[i].classList.toggle('done', done);
      var chk = tabNodes[i].querySelector('.tab-check');
      if (chk) chk.textContent = done ? '✓' : '';
      if (typeof opts.onChange === 'function') opts.onChange();
    }

    /* One-step navigation: land on the target section with its content at the top
     * of the viewport (just under the sticky bars) instead of the page top. */
    function goTo(i) {
      select(i);
      var y = tabsWrap.getBoundingClientRect().top + window.pageYOffset - 56;
      window.scrollTo(0, Math.max(0, y));
    }

    unit.sections.forEach(function (sec, i) {
      var t = U.button('', 'tab', function () { select(i); });
      t.setAttribute('role', 'tab');
      t.setAttribute('id', 'tab-' + unit.id + '-' + i);
      t.setAttribute('aria-controls', 'panel-' + unit.id + '-' + i);
      t.appendChild(el('span', 'tab-label', labels[i]));
      t.appendChild(el('span', 'tab-check', window.FableProgress.isSectionComplete(lang, unit.id, i) ? '✓' : ''));
      if (window.FableProgress.isSectionComplete(lang, unit.id, i)) t.classList.add('done');
      t.addEventListener('keydown', function (e) {
        var d = (e.key === 'ArrowRight') ? 1 : (e.key === 'ArrowLeft') ? -1 : 0;
        if (d) {
          e.preventDefault();
          select((i + d + tabNodes.length) % tabNodes.length, true);
        } else if (e.key === 'Home') { e.preventDefault(); select(0, true); }
        else if (e.key === 'End') { e.preventDefault(); select(tabNodes.length - 1, true); }
      });
      tablist.appendChild(t);
      tabNodes.push(t);

      var p = el('section', 'panel');
      p.setAttribute('role', 'tabpanel');
      p.setAttribute('id', 'panel-' + unit.id + '-' + i);
      p.setAttribute('aria-labelledby', 'tab-' + unit.id + '-' + i);
      p.hidden = true;
      panels.appendChild(p);
      panelNodes.push(p);
      built.push(false);
    });

    root.appendChild(page);

    var start = Number(opts.startSection);
    if (!isFinite(start) || start < 0 || start >= unit.sections.length) start = 0;
    if (unit.sections.length) select(start);
    else page.appendChild(U.para('This unit has no readable sections yet.', 'empty-note'));

    return page;
  }

  function unitHeader(lang, unit) {
    var meta = C.LANG_META[lang];
    var head = el('header', 'unit-head');

    var kicker = el('div', 'unit-kicker');
    kicker.appendChild(el('span', 'chip chip-lang', meta.name));
    kicker.appendChild(el('span', 'unit-num', unit.order === 0 ? 'Foundation' : 'Unit ' + unit.order));
    head.appendChild(kicker);

    var h1 = el('h1', 'unit-title', unit.title);
    head.appendChild(h1);

    if (unit.titleNative) {
      head.appendChild(native(unit.titleNative, lang, 'unit-title-native', 'div'));
    }
    if (unit.subtitle) head.appendChild(el('p', 'unit-subtitle', unit.subtitle));

    if (unit.textbookBasis.length) head.appendChild(basisBlock(unit));

    if (unit.overview.length) {
      var ov = el('div', 'overview');
      unit.overview.forEach(function (p) { ov.appendChild(U.para(p)); });
      head.appendChild(ov);
    }
    return head;
  }

  function basisBlock(unit) {
    var basis = el('div', 'basis');
    basis.appendChild(el('span', 'basis-label', 'Textbook basis'));
    var ul = el('ul', 'basis-list');
    unit.textbookBasis.forEach(function (b) { ul.appendChild(el('li', null, b)); });
    basis.appendChild(ul);
    return basis;
  }

  /* -------------------------------------------------------- panel bodies */

  function buildPanel(panel, lang, unit, i, opts, onMarked, goTo) {
    U.clear(panel);
    var sec = unit.sections[i];
    var head = el('div', 'panel-head');
    head.appendChild(el('h2', 'panel-title', sec.title));
    panel.appendChild(head);

    var body = el('div', 'panel-body');
    panel.appendChild(body);

    switch (sec.type) {
      case 'dialogue': renderDialogue(body, lang, sec); break;
      case 'vocab': renderVocab(body, lang, sec); break;
      case 'grammar': renderGrammar(body, lang, sec); break;
      case 'notes': renderNotes(body, lang, sec); break;
      case 'practice': renderPractice(body, lang, unit, sec, i, onMarked); break;
    }

    panel.appendChild(completeBar(lang, unit, i, onMarked));
    panel.appendChild(stepNav(lang, unit, i, onMarked, goTo));
  }

  /** stepNav(lang, unit, i, onMarked, goTo) — the bottom of every section is ONE step
   * forward: a card pointing at the next section of the same unit (Vocabulary 1 →
   * Vocabulary 2). Only the last section points at the next unit. Continuing also
   * marks a reading section as read; practice completion still comes from the quiz. */
  function stepNav(lang, unit, i, onMarked, goTo) {
    var wrap = el('div', 'step-nav');
    var labels = C.tabLabels(unit);

    function markRead() {
      if (unit.sections[i].type === 'practice') return;
      if (window.FableProgress.isSectionComplete(lang, unit.id, i)) return;
      window.FableProgress.markSection(lang, unit.id, i, true);
      if (typeof onMarked === 'function') onMarked();
    }

    function inner(kicker, label, sub) {
      var box = el('span', 'step-inner');
      var text = el('span', 'step-text');
      text.appendChild(el('span', 'step-kicker', kicker));
      text.appendChild(el('span', 'step-label', label));
      if (sub) text.appendChild(el('span', 'step-sub', sub));
      box.appendChild(text);
      box.appendChild(el('span', 'step-arrow', '→'));
      return box;
    }

    if (i + 1 < unit.sections.length) {
      var next = unit.sections[i + 1];
      var b = el('button', 'step-next');
      b.type = 'button';
      b.appendChild(inner('Next up', labels[i + 1], next.title !== labels[i + 1] ? next.title : ''));
      b.addEventListener('click', function () {
        markRead();
        if (typeof goTo === 'function') goTo(i + 1);
      });
      wrap.appendChild(b);
    } else {
      var meta = C.LANG_META[lang];
      var list = C.units(lang);
      var idx = C.unitIndex(lang, unit.id);
      var a = el('a', 'step-next');
      if (idx > -1 && idx < list.length - 1) {
        var nu = list[idx + 1];
        a.href = '#/' + meta.slug + '/unit/' + encodeURIComponent(nu.id);
        a.appendChild(inner('Next unit', nu.order === 0 ? 'Foundation' : 'Unit ' + nu.order, nu.title));
      } else {
        a.href = '#/' + meta.slug + '/review';
        a.appendChild(inner('End of the course — for now', 'Review vocabulary',
          'Flashcards over every word you have seen'));
      }
      a.addEventListener('click', markRead);
      wrap.appendChild(a);
    }
    return wrap;
  }

  function completeBar(lang, unit, i, onMarked) {
    var bar = el('div', 'complete-bar');
    var note = el('span', 'complete-note', '');
    var btn = U.button('', 'btn btn-complete', function () {
      window.FableProgress.toggleSection(lang, unit.id, i);
      paint();
      if (typeof onMarked === 'function') onMarked();
    });
    function paint() {
      var done = window.FableProgress.isSectionComplete(lang, unit.id, i);
      btn.textContent = done ? '✓ Completed — undo' : 'Mark section complete';
      btn.classList.toggle('is-done', done);
      btn.setAttribute('aria-pressed', done ? 'true' : 'false');
      note.textContent = done ? 'Marked complete. Nothing is ever locked — revisit any time.' : '';
    }
    paint();
    bar.appendChild(btn);
    bar.appendChild(note);
    return bar;
  }

  /* dialogue -------------------------------------------------------------- */

  function playAllButton(sec, lang) {
    return U.button('▶ Play the whole conversation', 'btn btn-ghost btn-sm', function () {
      var idx = 0;
      (function next() {
        if (idx >= sec.lines.length) return;
        var line = sec.lines[idx++];
        window.FableAudio.speak(line.text, lang);
        setTimeout(next, Math.max(1400, line.text.length * 190));
      })();
    });
  }

  function dialogueRow(line, n, lang) {
    var row = el('div', 'dline ' + (n % 2 ? 'alt' : ''));
    if (line.speaker) {
      var sp = el('div', 'dspeaker');
      sp.appendChild(native(line.speaker, lang, 'dspeaker-name', 'span'));
      row.appendChild(sp);
    }
    var bubble = el('div', 'dbubble');
    bubble.appendChild(native(line.text, lang, 'dtext', 'div'));
    if (line.roman) bubble.appendChild(el('div', 'droman', line.roman));
    if (line.gloss) bubble.appendChild(el('div', 'dgloss', line.gloss));
    row.appendChild(bubble);
    return row;
  }

  function renderDialogue(body, lang, sec) {
    if (sec.context) body.appendChild(el('p', 'scene', sec.context));
    body.appendChild(playAllButton(sec, lang));

    var list = el('div', 'dialogue');
    sec.lines.forEach(function (line, n) { list.appendChild(dialogueRow(line, n, lang)); });
    body.appendChild(list);
  }

  /* vocab ----------------------------------------------------------------- */

  function renderVocab(body, lang, sec) {
    var grid = el('div', 'vocab-grid');
    sec.items.forEach(function (item) {
      grid.appendChild(vocabCard(item, lang));
      try { window.FableProgress.vocabSeen(lang, item.term); } catch (e) {}
    });
    body.appendChild(grid);
  }

  /** vocabCard(item, lang) — term · roman · gloss · example + Linguistics reveal. */
  function vocabCard(item, lang) {
    var card = el('article', 'vcard');

    var top = el('div', 'vcard-top');
    var termWrap = el('div', 'vcard-termwrap');
    var termNode = native(item.term, lang, 'vcard-term', 'div');
    if (item.audio) {
      termNode.dataset.speak = item.audio;
      termNode.setAttribute('aria-label', 'Play audio: ' + item.audio);
    }
    termWrap.appendChild(termNode);
    if (item.trad && item.trad !== item.term) {
      var tradNode = el('div', 'vcard-trad', '傳統 ' + item.trad);
      window.FableAudio.attach(tradNode, item.trad, lang);
      termWrap.appendChild(tradNode);
    }
    top.appendChild(termWrap);

    var m = window.FableProgress.getVocab(lang, item.term);
    if (m && m.mastery > 0) {
      var dots = el('div', 'mastery');
      dots.setAttribute('aria-label', 'Mastery ' + m.mastery + ' of 5');
      for (var d = 0; d < 5; d++) dots.appendChild(el('i', 'mdot' + (d < m.mastery ? ' on' : '')));
      top.appendChild(dots);
    }
    card.appendChild(top);

    if (item.roman) card.appendChild(el('div', 'vcard-roman', item.roman));

    var glossRow = el('div', 'vcard-glossrow');
    glossRow.appendChild(el('span', 'vcard-gloss', item.gloss || ''));
    if (item.pos) glossRow.appendChild(el('span', 'chip chip-pos', item.pos));
    card.appendChild(glossRow);

    if (item.example && item.example.text) {
      var ex = el('div', 'vcard-example');
      ex.appendChild(native(item.example.text, lang, 'vex-text', 'div'));
      if (item.example.roman) ex.appendChild(el('div', 'vex-roman', item.example.roman));
      if (item.example.gloss) ex.appendChild(el('div', 'vex-gloss', item.example.gloss));
      card.appendChild(ex);
    }

    var ling = item.linguistics;
    if (ling && typeof ling === 'object') card.appendChild(linguisticsPanel(ling, lang));

    return card;
  }

  var LING_FIELDS = [
    { key: 'etymology', label: 'Etymology', icon: '⌛' },
    { key: 'script', label: 'Script', icon: '⿰' },
    { key: 'phonology', label: 'Phonology', icon: '♪' },
    { key: 'cognates', label: 'Cognates', icon: '⇄' }
  ];

  function linguisticsPanel(ling, lang) {
    var det = el('details', 'ling');
    var sum = el('summary', 'ling-summary');
    sum.appendChild(el('span', 'ling-title', 'Linguistics'));
    if (ling.origin) sum.appendChild(el('span', 'chip chip-origin', ling.origin));
    sum.appendChild(el('span', 'ling-caret', '▾'));
    det.appendChild(sum);

    var inner = el('div', 'ling-body');
    var any = false;
    LING_FIELDS.forEach(function (f) {
      var vals = ling[f.key];
      if (typeof vals === 'string') vals = vals ? [vals] : [];
      if (!U.isArr(vals) || !vals.length) return;
      any = true;
      var block = el('div', 'ling-block');
      var h = el('h4', 'ling-h');
      h.appendChild(el('span', 'ling-icon', f.icon));
      h.appendChild(el('span', null, f.label));
      block.appendChild(h);
      vals.forEach(function (v) {
        if (typeof v !== 'string' || !v.trim()) return;
        block.appendChild(U.para(v, 'ling-p'));
      });
      inner.appendChild(block);
    });
    if (!any) inner.appendChild(U.para('No linguistic notes recorded for this entry.', 'ling-p muted'));
    det.appendChild(inner);
    return det;
  }

  /* grammar --------------------------------------------------------------- */

  function grammarPointBlock(p, n, lang) {
    var block = el('article', 'gpoint');
    var head = el('div', 'gpoint-head');
    head.appendChild(el('span', 'gpoint-num', String(n + 1)));
    head.appendChild(el('h3', 'gpoint-name', p.name));
    block.appendChild(head);
    if (p.pattern) {
      var pat = el('div', 'gpattern');
      pat.appendChild(el('span', 'gpattern-label', 'Pattern'));
      pat.appendChild(el('code', 'gpattern-code', p.pattern));
      block.appendChild(pat);
    }
    p.explanation.forEach(function (t) { block.appendChild(U.para(t)); });
    if (p.examples.length) {
      var ul = el('ul', 'gexamples');
      p.examples.forEach(function (e) {
        var li = el('li', 'gex');
        li.appendChild(native(e.text, lang, 'gex-text', 'div'));
        if (e.roman) li.appendChild(el('div', 'gex-roman', e.roman));
        if (e.gloss) li.appendChild(el('div', 'gex-gloss', e.gloss));
        ul.appendChild(li);
      });
      block.appendChild(ul);
    }
    return block;
  }

  function renderGrammar(body, lang, sec) {
    sec.points.forEach(function (p, n) { body.appendChild(grammarPointBlock(p, n, lang)); });
  }

  /* notes ----------------------------------------------------------------- */

  function renderNotes(body, lang, sec) {
    var art = el('article', 'notes');
    sec.body.forEach(function (t) { art.appendChild(U.para(t)); });
    body.appendChild(art);
  }

  /* practice -------------------------------------------------------------- */

  function renderPractice(body, lang, unit, sec, i, onMarked) {
    var prev = window.FableProgress.quizResult(lang, unit.id, i);
    if (prev && prev.total) {
      body.appendChild(el('p', 'prev-score',
        'Last attempt: ' + prev.correct + ' / ' + prev.total + '. Practise as often as you like.'));
    }
    var host = el('div', 'quiz-host');
    body.appendChild(host);
    window.FableQuiz.render(host, sec.exercises, {
      lang: lang,
      unitId: unit.id,
      sectionIndex: i,
      onComplete: function () {
        window.FableProgress.markSection(lang, unit.id, i, true);
        if (typeof onMarked === 'function') onMarked();
        var bar = host.parentNode && host.parentNode.parentNode &&
          host.parentNode.parentNode.querySelector('.complete-bar .btn-complete');
        if (bar) {
          bar.textContent = '✓ Completed — undo';
          bar.classList.add('is-done');
          bar.setAttribute('aria-pressed', 'true');
        }
      }
    });
  }

  /* ------------------------------------------------------------ story mode
   * The phone lesson experience: the unit becomes a full-screen deck of cards —
   * one dialogue line / vocab word / grammar point per card — behind a segmented
   * progress bar (one segment per section), Instagram-story style. Tap the right
   * side (or swipe left, or →) for the next card; tap the left side to go back.
   * Reading sections mark themselves complete when their end card is reached;
   * practice still completes only by finishing the quiz. */

  function renderStory(root, lang, unit, opts) {
    opts = opts || {};
    var P = window.FableProgress;
    var meta = C.LANG_META[lang];
    var labels = C.tabLabels(unit);

    /* ---- flatten the unit into a plan of small cards */
    var plan = [{ sec: -1, kind: 'intro' }];
    unit.sections.forEach(function (sec, i) {
      if (sec.type === 'dialogue') {
        plan.push({ sec: i, kind: 'dlg-intro' });
        sec.lines.forEach(function (line, n) { plan.push({ sec: i, kind: 'dlg-line', line: line, n: n }); });
      } else if (sec.type === 'vocab') {
        sec.items.forEach(function (it, n) { plan.push({ sec: i, kind: 'vocab', item: it, n: n }); });
      } else if (sec.type === 'grammar') {
        sec.points.forEach(function (p, n) { plan.push({ sec: i, kind: 'gpoint', point: p, n: n }); });
      } else if (sec.type === 'notes') {
        for (var b = 0; b < sec.body.length; b += 2) {
          plan.push({ sec: i, kind: 'notes', paras: sec.body.slice(b, b + 2), first: b === 0 });
        }
      } else if (sec.type === 'practice') {
        plan.push({ sec: i, kind: 'practice' });
      }
      plan.push({ sec: i, kind: 'end' });
    });

    var secStart = [], secCount = [];
    plan.forEach(function (c, k) {
      if (c.sec < 0) return;
      if (secStart[c.sec] === undefined) secStart[c.sec] = k;
      secCount[c.sec] = (secCount[c.sec] || 0) + 1;
    });

    /* ---- chrome */
    U.clear(root);
    var story = el('div', 'story lang-' + lang);
    story.tabIndex = -1;

    var top = el('div', 'story-top');
    var segs = el('div', 'story-segs');
    var segFills = [];
    unit.sections.forEach(function () {
      var s = el('span', 'story-seg');
      var f = el('i');
      s.appendChild(f);
      segs.appendChild(s);
      segFills.push(f);
    });
    top.appendChild(segs);

    var head = el('div', 'story-head');
    head.appendChild(el('span', 'chip chip-lang',
      meta.name + ' · ' + (unit.order === 0 ? 'Foundation' : 'Unit ' + unit.order)));
    var headLabel = el('span', 'story-head-label', '');
    var headCount = el('span', 'story-head-count', '');
    head.appendChild(headLabel);
    head.appendChild(headCount);
    var close = el('a', 'story-close', '✕');
    close.href = '#/' + meta.slug;
    close.setAttribute('aria-label', 'Close the lesson');
    head.appendChild(close);
    top.appendChild(head);
    story.appendChild(top);

    var stage = el('div', 'story-stage');
    story.appendChild(stage);

    var navRow = el('div', 'story-nav');
    var prevB = U.button('‹', 'story-nav-btn', function () { show(pos - 1, -1); }, { ariaLabel: 'Previous card' });
    var nextB = U.button('›', 'story-nav-btn story-nav-next', function () { show(pos + 1, 1); }, { ariaLabel: 'Next card' });
    navRow.appendChild(prevB);
    navRow.appendChild(nextB);
    story.appendChild(navRow);

    /* ---- card builders */

    function secKicker(card, extra) {
      return el('div', 'story-sec-kicker', labels[card.sec] + (extra ? ' · ' + extra : ''));
    }

    function introCard() {
      var c = el('div', 'story-card story-intro');
      var kick = el('div', 'unit-kicker');
      kick.appendChild(el('span', 'unit-num', unit.order === 0 ? 'Foundation' : 'Unit ' + unit.order));
      c.appendChild(kick);
      c.appendChild(el('h1', 'story-unit-title', unit.title));
      if (unit.titleNative) c.appendChild(native(unit.titleNative, lang, 'unit-title-native', 'div'));
      if (unit.subtitle) c.appendChild(el('p', 'unit-subtitle', unit.subtitle));
      unit.overview.forEach(function (p) { c.appendChild(U.para(p)); });
      if (unit.textbookBasis.length) c.appendChild(basisBlock(unit));
      c.appendChild(el('p', 'story-tapnote', 'Tap the right side to begin ›'));
      return c;
    }

    function dlgIntroCard(card) {
      var sec = unit.sections[card.sec];
      var c = el('div', 'story-card');
      c.appendChild(secKicker(card));
      c.appendChild(el('h2', 'story-sec-title', sec.title));
      if (sec.context) c.appendChild(el('p', 'scene', sec.context));
      c.appendChild(playAllButton(sec, lang));
      c.appendChild(el('p', 'story-tapnote', 'One line per card — tap through the conversation ›'));
      return c;
    }

    function lineCard(card) {
      var line = card.line;
      var sec = unit.sections[card.sec];
      var c = el('div', 'story-card story-line');
      c.appendChild(secKicker(card, 'line ' + (card.n + 1) + ' of ' + sec.lines.length));
      var mid = el('div', 'story-line-mid');
      if (line.speaker) mid.appendChild(native(line.speaker, lang, 'story-speaker', 'div'));
      mid.appendChild(native(line.text, lang, 'story-term', 'div'));
      if (line.roman) mid.appendChild(el('div', 'story-roman', line.roman));
      if (line.gloss) mid.appendChild(el('div', 'story-gloss', line.gloss));
      c.appendChild(mid);
      return c;
    }

    function vocabStoryCard(card) {
      var sec = unit.sections[card.sec];
      var c = el('div', 'story-card story-vocab');
      c.appendChild(secKicker(card, 'word ' + (card.n + 1) + ' of ' + sec.items.length));
      c.appendChild(vocabCard(card.item, lang));
      return c;
    }

    function gpointCard(card) {
      var sec = unit.sections[card.sec];
      var c = el('div', 'story-card');
      c.appendChild(secKicker(card, 'point ' + (card.n + 1) + ' of ' + sec.points.length));
      c.appendChild(grammarPointBlock(card.point, card.n, lang));
      return c;
    }

    function notesCard(card) {
      var sec = unit.sections[card.sec];
      var c = el('div', 'story-card');
      c.appendChild(secKicker(card));
      if (card.first) c.appendChild(el('h2', 'story-sec-title', sec.title));
      card.paras.forEach(function (t) { c.appendChild(U.para(t)); });
      return c;
    }

    function practiceCard(card) {
      var sec = unit.sections[card.sec];
      var c = el('div', 'story-card story-practice');
      c.appendChild(secKicker(card));
      c.appendChild(el('h2', 'story-sec-title', sec.title));
      var body = el('div');
      c.appendChild(body);
      renderPractice(body, lang, unit, sec, card.sec, function () {
        if (typeof opts.onChange === 'function') opts.onChange();
        paintTop();
      });
      return c;
    }

    function endCard(card) {
      var i = card.sec;
      var sec = unit.sections[i];
      var isLast = (i === unit.sections.length - 1);
      var done = P.isSectionComplete(lang, unit.id, i);

      var c = el('div', 'story-card story-end');
      var mid = el('div', 'story-end-mid');
      c.appendChild(mid);

      mid.appendChild(el('div', 'story-end-mark' + (done ? '' : ' todo'), done ? '✓' : '…'));
      mid.appendChild(el('h2', 'story-end-title',
        labels[i] + (done ? ' complete' : '')));
      if (!done && sec.type === 'practice') {
        mid.appendChild(el('p', 'story-end-note', 'Finish the practice quiz to complete this section — tap left to go back to it.'));
      }

      var toggle = U.button('', 'btn btn-sm btn-complete' + (done ? ' is-done' : ''), function () {
        P.toggleSection(lang, unit.id, i);
        if (typeof opts.onChange === 'function') opts.onChange();
        show(pos, 0, true);   /* rebuild this card in place */
      });
      toggle.textContent = done ? '✓ Completed — undo' : 'Mark section complete';
      mid.appendChild(toggle);

      if (!isLast) {
        var nx = el('button', 'step-next');
        nx.type = 'button';
        var inner = el('span', 'step-inner');
        var text = el('span', 'step-text');
        text.appendChild(el('span', 'step-kicker', 'Next up'));
        text.appendChild(el('span', 'step-label', labels[i + 1]));
        if (unit.sections[i + 1].title !== labels[i + 1]) {
          text.appendChild(el('span', 'step-sub', unit.sections[i + 1].title));
        }
        inner.appendChild(text);
        inner.appendChild(el('span', 'step-arrow', '→'));
        nx.appendChild(inner);
        nx.addEventListener('click', function () { show(pos + 1, 1); });
        c.appendChild(nx);
      } else {
        var doneCount = P.sectionsComplete(lang, unit.id);
        mid.appendChild(el('p', 'story-end-note',
          doneCount + ' of ' + unit.sections.length + ' sections of this unit complete.'));
        var links = el('div', 'story-end-links');
        var list = C.units(lang);
        var idx = C.unitIndex(lang, unit.id);
        if (idx > -1 && idx < list.length - 1) {
          var nu = list[idx + 1];
          var a = el('a', 'btn btn-primary');
          a.href = '#/' + meta.slug + '/unit/' + encodeURIComponent(nu.id);
          a.textContent = (nu.order === 0 ? 'Foundation' : 'Unit ' + nu.order) + ' · ' + nu.title + ' →';
          links.appendChild(a);
        }
        var rv = el('a', 'btn btn-ghost', 'Review vocabulary');
        rv.href = '#/' + meta.slug + '/review';
        links.appendChild(rv);
        var map = el('a', 'btn btn-quiet', 'Back to the unit map');
        map.href = '#/' + meta.slug;
        links.appendChild(map);
        c.appendChild(links);
        if (doneCount === unit.sections.length) U.celebrate(mid);
      }
      return c;
    }

    function buildCard(k) {
      var card = plan[k];
      switch (card.kind) {
        case 'intro': return introCard();
        case 'dlg-intro': return dlgIntroCard(card);
        case 'dlg-line': return lineCard(card);
        case 'vocab': return vocabStoryCard(card);
        case 'gpoint': return gpointCard(card);
        case 'notes': return notesCard(card);
        case 'practice': return practiceCard(card);
        case 'end': return endCard(card);
      }
      return el('div', 'story-card');
    }

    /* ---- painting */

    function paintTop() {
      var card = plan[pos];
      for (var s = 0; s < unit.sections.length; s++) {
        var f = 0;
        if (s < card.sec || P.isSectionComplete(lang, unit.id, s)) f = 100;
        if (s === card.sec) f = Math.max(f, Math.round((pos - secStart[s] + 1) / secCount[s] * 100));
        segFills[s].style.width = f + '%';
        segs.children[s].classList.toggle('done', P.isSectionComplete(lang, unit.id, s));
      }
      if (card.sec < 0) {
        headLabel.textContent = 'Overview';
        headCount.textContent = '';
      } else {
        headLabel.textContent = labels[card.sec];
        headCount.textContent = (pos - secStart[card.sec] + 1) + ' / ' + secCount[card.sec];
      }
    }

    var pos = -1;
    var cache = {};   /* only the practice card is cached — the quiz session must survive back/forward */

    function show(k, dir, force) {
      k = Math.max(0, Math.min(plan.length - 1, k));
      if (k === pos && !force) return;
      pos = k;
      var card = plan[k];

      if (card.kind === 'vocab') { try { P.vocabSeen(lang, card.item.term); } catch (e) {} }
      if (card.kind === 'end' && unit.sections[card.sec].type !== 'practice'
          && !P.isSectionComplete(lang, unit.id, card.sec)) {
        P.markSection(lang, unit.id, card.sec, true);
        if (typeof opts.onChange === 'function') opts.onChange();
      }

      var node = cache[k] || buildCard(k);
      if (card.kind === 'practice') cache[k] = node;
      U.clear(stage);
      stage.appendChild(node);
      node.classList.remove('in', 'in-back');
      void node.offsetWidth;
      node.classList.add(dir < 0 ? 'in-back' : 'in');
      node.scrollTop = 0;

      paintTop();
      prevB.disabled = (pos === 0);
      nextB.disabled = (pos === plan.length - 1);
      if (document.activeElement === document.body) {
        try { story.focus({ preventScroll: true }); } catch (e) {}
      }

      /* keep the URL pointing at the current section so a reload resumes nearby */
      try {
        history.replaceState(null, '',
          '#/' + meta.slug + '/unit/' + encodeURIComponent(unit.id) + '/' + Math.max(0, card.sec));
      } catch (e) {}
    }

    /* ---- input: tap zones, swipe, arrow keys */

    stage.addEventListener('click', function (e) {
      if (e.target && e.target.closest &&
          e.target.closest('a, button, summary, details, input, textarea, select, .speakable, .quiz')) return;
      var r = stage.getBoundingClientRect();
      var back = (e.clientX - r.left) < r.width * 0.34;
      show(pos + (back ? -1 : 1), back ? -1 : 1);
    });

    var touch = null;
    stage.addEventListener('touchstart', function (e) {
      if (e.touches.length === 1) touch = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }, { passive: true });
    stage.addEventListener('touchend', function (e) {
      if (!touch) return;
      var t = e.changedTouches[0];
      var dx = t.clientX - touch.x, dy = t.clientY - touch.y;
      touch = null;
      if (Math.abs(dx) > 52 && Math.abs(dx) > Math.abs(dy) * 1.6) {
        show(pos + (dx < 0 ? 1 : -1), dx < 0 ? 1 : -1);
      }
    }, { passive: true });

    story.addEventListener('keydown', function (e) {
      if (e.target && /^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName)) return;
      if (e.key === 'ArrowRight') { e.preventDefault(); show(pos + 1, 1); }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); show(pos - 1, -1); }
    });

    root.appendChild(story);

    var start = Number(opts.startSection);
    var k0 = 0;
    if (isFinite(start) && start >= 0 && start < unit.sections.length && secStart[start] !== undefined) {
      k0 = secStart[start];
    }
    show(k0, 1, true);
    setTimeout(function () { try { story.focus({ preventScroll: true }); } catch (e) {} }, 0);

    return story;
  }

  return {
    renderUnit: renderUnit,
    renderStory: renderStory,
    vocabCard: vocabCard,
    linguisticsPanel: linguisticsPanel,
    native: native
  };
})();
