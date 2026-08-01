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
        buildPanel(panelNodes[i], lang, unit, i, opts, function () { refreshTab(i); });
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

    if (unit.textbookBasis.length) {
      var basis = el('div', 'basis');
      basis.appendChild(el('span', 'basis-label', 'Textbook basis'));
      var ul = el('ul', 'basis-list');
      unit.textbookBasis.forEach(function (b) { ul.appendChild(el('li', null, b)); });
      basis.appendChild(ul);
      head.appendChild(basis);
    }

    if (unit.overview.length) {
      var ov = el('div', 'overview');
      unit.overview.forEach(function (p) { ov.appendChild(U.para(p)); });
      head.appendChild(ov);
    }
    return head;
  }

  /* -------------------------------------------------------- panel bodies */

  function buildPanel(panel, lang, unit, i, opts, onMarked) {
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

  function renderDialogue(body, lang, sec) {
    if (sec.context) body.appendChild(el('p', 'scene', sec.context));

    var playAll = U.button('▶ Play the whole conversation', 'btn btn-ghost btn-sm', function () {
      var idx = 0;
      (function next() {
        if (idx >= sec.lines.length) return;
        var line = sec.lines[idx++];
        window.FableAudio.speak(line.text, lang);
        setTimeout(next, Math.max(1400, line.text.length * 190));
      })();
    });
    body.appendChild(playAll);

    var list = el('div', 'dialogue');
    sec.lines.forEach(function (line, n) {
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
      list.appendChild(row);
    });
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

  function renderGrammar(body, lang, sec) {
    sec.points.forEach(function (p, n) {
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
      body.appendChild(block);
    });
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

  return {
    renderUnit: renderUnit,
    vocabCard: vocabCard,
    linguisticsPanel: linguisticsPanel,
    native: native
  };
})();
