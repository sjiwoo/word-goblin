/* Word Goblin — js/app.js  (runs last)
 *
 * The shell: hash router, app chrome (header nav + theme), and the three top-level views
 * that aren't lessons — dashboard (#/), unit map (#/korean, #/chinese), flashcard review
 * (#/<lang>/review) and settings (#/settings).
 * Boots defensively: if some or all curriculum files failed to load, the app still renders
 * and reports what is missing instead of throwing.
 * Also owns the v2 daily-mini-lesson client duty: it builds a per-language "lesson queue" of
 * the learner's next unseen / low-mastery words and uploads it (fire-and-forget) to the user's
 * own Apps Script, which mails one item a day. See "mini-lesson queue (v2)" below.
 * Plain script — no modules; the only network calls in the whole app are the optional POST to
 * the user's own Google Apps Script endpoint and the optional AI-tutor calls in js/tutor.js.
 */
(function () {
  'use strict';

  var U = window.FableUI;
  var C = window.FableCurriculum;
  var P = window.FableProgress;
  var A = window.FableAudio;
  var el = U.el;

  var LANGS = ['korean', 'chinese'];
  var app, navLinks = {};

  /* ================================================================ theme */

  function applyTheme() {
    var t = P.settings.theme || 'auto';
    var root = document.documentElement;
    if (t === 'auto') root.removeAttribute('data-theme');
    else root.setAttribute('data-theme', t);
    var btn = document.getElementById('theme-toggle');
    if (btn) {
      var glyph = t === 'dark' ? '☾' : (t === 'light' ? '☀' : '◐');
      btn.textContent = glyph;
      btn.setAttribute('aria-label', 'Colour theme: ' + t + '. Click to change.');
      btn.title = 'Theme: ' + t;
    }
  }

  function cycleTheme() {
    var order = ['auto', 'light', 'dark'];
    var i = order.indexOf(P.settings.theme || 'auto');
    P.setSettings({ theme: order[(i + 1) % order.length] });
    applyTheme();
  }

  /* ================================================================ chrome */

  function buildChrome() {
    var header = el('header', 'topbar');
    var inner = el('div', 'topbar-inner');

    var brand = el('a', 'brand');
    brand.href = '#/';
    brand.appendChild(el('span', 'brand-mark', '書'));
    var bt = el('span', 'brand-text');
    bt.appendChild(el('strong', null, 'Word Goblin'));
    bt.appendChild(el('span', 'brand-sub', 'Korean · Mandarin'));
    brand.appendChild(bt);
    inner.appendChild(brand);

    var nav = el('nav', 'nav');
    nav.setAttribute('aria-label', 'Main');
    function link(href, label, native, key) {
      var a = el('a', 'navlink');
      a.href = href;
      if (native) a.appendChild(el('span', 'navlink-native', native));
      a.appendChild(el('span', 'navlink-label', label));
      navLinks[key] = a;
      nav.appendChild(a);
      return a;
    }
    link('#/', 'Home', null, 'home');
    link('#/korean', 'Korean', '한', 'korean');
    link('#/chinese', 'Chinese', '中', 'chinese');
    link('#/settings', 'Settings', null, 'settings');
    inner.appendChild(nav);

    var tbtn = U.button('◐', 'icon-btn theme-btn', cycleTheme);
    tbtn.id = 'theme-toggle';
    inner.appendChild(tbtn);

    header.appendChild(inner);
    document.body.insertBefore(header, document.body.firstChild);
  }

  function setActiveNav(key) {
    for (var k in navLinks) {
      if (!Object.prototype.hasOwnProperty.call(navLinks, k)) continue;
      var on = (k === key);
      navLinks[k].classList.toggle('active', on);
      if (on) navLinks[k].setAttribute('aria-current', 'page');
      else navLinks[k].removeAttribute('aria-current');
    }
  }

  function pageTitle(text) {
    document.title = text ? (text + ' · Word Goblin') : 'Word Goblin';
  }

  function section(cls) { return el('section', 'view ' + (cls || '')); }

  function crumb(lang, extra) {
    var meta = C.LANG_META[lang];
    var bar = el('nav', 'crumbs');
    bar.setAttribute('aria-label', 'Breadcrumb');
    var a1 = el('a', 'crumb', 'Home'); a1.href = '#/';
    bar.appendChild(a1);
    bar.appendChild(el('span', 'crumb-sep', '/'));
    var a2 = el('a', 'crumb', meta.name); a2.href = '#/' + meta.slug;
    bar.appendChild(a2);
    if (extra) {
      bar.appendChild(el('span', 'crumb-sep', '/'));
      bar.appendChild(el('span', 'crumb current', extra));
    }
    return bar;
  }

  /* ============================================================= dashboard */

  function viewHome() {
    setActiveNav('home');
    pageTitle('');
    var v = section('home');

    var hero = el('div', 'hero');
    hero.appendChild(el('p', 'hero-kicker', 'Two languages, two independent paths'));
    var h1 = el('h1', 'hero-title');
    h1.appendChild(el('span', 'hero-native ko', '한국어'));
    h1.appendChild(el('span', 'hero-amp', '·'));
    h1.appendChild(el('span', 'hero-native zh', '中文'));
    hero.appendChild(h1);
    hero.appendChild(el('p', 'hero-sub',
      'A textbook-grade course in Korean and Mandarin, with the etymology of every word, ' +
      'spoken audio on every line, and nothing ever locked.'));
    v.appendChild(hero);

    var grid = el('div', 'track-grid');
    LANGS.forEach(function (lang) { grid.appendChild(trackCard(lang)); });
    v.appendChild(grid);

    v.appendChild(todayStrip());
    return v;
  }

  function trackCard(lang) {
    var meta = C.LANG_META[lang];
    var units = C.units(lang);
    var pct = C.langPercent(lang);
    var paused = P.isPaused(lang);
    var streak = P.currentStreak(lang);

    var card = el('article', 'track-card lang-' + lang + (paused ? ' paused' : ''));
    var band = el('div', 'track-band');
    card.appendChild(band);

    var head = el('div', 'track-head');
    var titles = el('div', 'track-titles');
    var nat = el('div', 'track-native', meta.native);
    A.attach(nat, meta.native, lang);
    titles.appendChild(nat);
    titles.appendChild(el('h2', 'track-name', meta.name));
    titles.appendChild(el('p', 'track-tagline', meta.tagline));
    head.appendChild(titles);
    head.appendChild(U.ring(pct, 'ring-md'));
    card.appendChild(head);

    if (paused) {
      var badge = el('div', 'paused-badge');
      badge.appendChild(el('span', 'dot'));
      badge.appendChild(el('span', null, 'Paused — reminders off for this track'));
      card.appendChild(badge);
    }

    var stats = el('dl', 'stats');
    function stat(k, val, sub) {
      var w = el('div', 'stat');
      w.appendChild(el('dt', null, k));
      var dd = el('dd', null, String(val));
      if (sub) dd.appendChild(el('span', 'stat-sub', sub));
      w.appendChild(dd);
      stats.appendChild(w);
    }
    stat('Progress', pct + '%');
    stat('Streak', streak, streak === 1 ? ' day' : ' days');
    stat('Units', units.length);
    stat('Words seen', P.seenCount(lang));
    card.appendChild(stats);

    if (!units.length) {
      card.appendChild(U.para('No curriculum files for ' + meta.name + ' have loaded yet. ' +
        'Check that the data/' + meta.slug + '/*.js files are present next to index.html.', 'warn-note'));
    }

    var next = C.nextUnit(lang);
    var actions = el('div', 'track-actions');
    if (next) {
      var cont = el('a', 'btn btn-primary');
      cont.href = '#/' + meta.slug + '/unit/' + encodeURIComponent(next.id);
      cont.textContent = (pct === 0 ? 'Start ' : 'Continue ') + (next.order === 0 ? 'Foundation' : 'Unit ' + next.order);
      actions.appendChild(cont);
    }
    var mapLink = el('a', 'btn btn-ghost');
    mapLink.href = '#/' + meta.slug;
    mapLink.textContent = 'All units';
    actions.appendChild(mapLink);

    var revLink = el('a', 'btn btn-ghost');
    revLink.href = '#/' + meta.slug + '/review';
    revLink.textContent = 'Review';
    actions.appendChild(revLink);

    var pauseBtn = U.button(paused ? '▶ Resume track' : '❙❙ Pause track', 'btn btn-quiet', function () {
      P.togglePaused(lang);
      render();
    });
    pauseBtn.setAttribute('aria-pressed', paused ? 'true' : 'false');
    actions.appendChild(pauseBtn);

    card.appendChild(actions);
    return card;
  }

  function todayStrip() {
    var strip = el('div', 'today-strip');
    LANGS.forEach(function (lang) {
      var meta = C.LANG_META[lang];
      var done = P.studiedToday(lang);
      var chip = el('span', 'today-chip ' + (done ? 'done' : ''));
      chip.appendChild(el('span', 'today-mark', done ? '✓' : '○'));
      chip.appendChild(el('span', null, done ? meta.name + ' studied today' : meta.name + ' not studied today'));
      strip.appendChild(chip);
    });
    var s = el('a', 'today-link', P.settings.subscribed
      ? 'Your daily mini-lesson e-mail is on →'
      : 'Get a daily mini-lesson by e-mail →');
    s.href = '#/settings';
    strip.appendChild(s);
    return strip;
  }

  /* ============================================================== unit map */

  function viewUnits(lang) {
    var meta = C.LANG_META[lang];
    setActiveNav(lang);
    pageTitle(meta.name);
    var v = section('unitmap lang-' + lang);
    v.appendChild(crumb(lang));

    var head = el('header', 'map-head');
    var t = el('div', 'map-titles');
    t.appendChild(el('h1', 'map-title', meta.name));
    var nat = el('div', 'map-native', meta.native);
    A.attach(nat, meta.native, lang);
    t.appendChild(nat);
    t.appendChild(el('p', 'map-sub', meta.tagline + ' Every unit is open from the start.'));
    head.appendChild(t);
    head.appendChild(U.ring(C.langPercent(lang), 'ring-md'));
    v.appendChild(head);

    var bar = el('div', 'map-actions');
    var rev = el('a', 'btn btn-primary');
    rev.href = '#/' + meta.slug + '/review';
    rev.textContent = 'Flashcard review';
    bar.appendChild(rev);
    var pausedNow = P.isPaused(lang);
    var pb = U.button(pausedNow ? '▶ Resume track' : '❙❙ Pause track', 'btn btn-quiet', function () {
      P.togglePaused(lang);
      render();
    });
    bar.appendChild(pb);
    v.appendChild(bar);

    var units = C.units(lang);
    if (!units.length) {
      v.appendChild(emptyCurriculum(meta));
      return v;
    }

    var grid = el('div', 'unit-grid');
    units.forEach(function (u) {
      grid.appendChild(unitCard(lang, u));
    });
    v.appendChild(grid);
    return v;
  }

  function unitCard(lang, u) {
    var meta = C.LANG_META[lang];
    var total = u.sections.length;
    var pct = P.unitPercent(lang, u.id, total);
    var done = pct === 100;

    var a = el('a', 'ucard' + (done ? ' done' : ''));
    a.href = '#/' + meta.slug + '/unit/' + encodeURIComponent(u.id);

    var top = el('div', 'ucard-top');
    top.appendChild(el('span', 'ucard-num', u.order === 0 ? '基' : String(u.order)));
    top.appendChild(U.ring(pct, 'ring-sm'));
    a.appendChild(top);

    a.appendChild(el('h3', 'ucard-title', u.title));
    if (u.titleNative) a.appendChild(el('div', 'ucard-native', u.titleNative));
    if (u.subtitle) a.appendChild(el('p', 'ucard-sub', u.subtitle));

    var foot = el('div', 'ucard-foot');
    var types = {};
    u.sections.forEach(function (s) { types[s.type] = (types[s.type] || 0) + 1; });
    var order = ['dialogue', 'vocab', 'grammar', 'notes', 'practice'];
    order.forEach(function (t) {
      if (!types[t]) return;
      var chip = el('span', 'mini-chip mini-' + t, C.SECTION_LABEL[t] + (types[t] > 1 ? ' ×' + types[t] : ''));
      foot.appendChild(chip);
    });
    a.appendChild(foot);

    var status = el('div', 'ucard-status',
      done ? 'Complete' : P.sectionsComplete(lang, u.id) + ' / ' + total + ' sections');
    if (done) status.appendChild(el('span', 'ucard-check', ' ✓'));
    a.appendChild(status);
    return a;
  }

  function emptyCurriculum(meta) {
    var box = el('div', 'empty-box');
    box.appendChild(el('h2', null, 'No ' + meta.name + ' units loaded'));
    box.appendChild(U.para('The curriculum ships as plain <b>&lt;script&gt;</b> files. Make sure the folder ' +
      '<b>data/' + meta.slug + '/</b> sits next to <b>index.html</b> and contains foundation.js and unit01.js–unit08.js.'));
    var a = el('a', 'btn btn-ghost', 'Open settings diagnostics');
    a.href = '#/settings';
    box.appendChild(a);
    return box;
  }

  /* ============================================================== unit view */

  function viewUnit(lang, unitId, sectionIndex) {
    var meta = C.LANG_META[lang];
    var u = C.unit(lang, unitId);
    setActiveNav(lang);
    var v = section('unitview lang-' + lang);

    if (!u) {
      pageTitle('Unit not found');
      v.appendChild(crumb(lang, 'Unknown unit'));
      var box = el('div', 'empty-box');
      box.appendChild(el('h2', null, 'That unit isn’t available'));
      box.appendChild(U.para('The unit id <b>' + U.escapeHtml(unitId) + '</b> is not in the loaded ' +
        meta.name + ' curriculum. It may not have been written yet, or its data file failed to load.'));
      var back = el('a', 'btn btn-primary', 'Back to the ' + meta.name + ' unit map');
      back.href = '#/' + meta.slug;
      box.appendChild(back);
      v.appendChild(box);
      return v;
    }

    pageTitle(u.title);
    v.appendChild(crumb(lang, u.order === 0 ? 'Foundation' : 'Unit ' + u.order));

    var host = el('div', 'unit-host');
    v.appendChild(host);
    window.FableLesson.renderUnit(host, lang, u, {
      startSection: sectionIndex,
      onChange: function () { paintUnitFooter(); }
    });

    var footer = el('div', 'unit-footer');
    v.appendChild(footer);

    function paintUnitFooter() {
      U.clear(footer);
      var total = u.sections.length;
      var pctNow = P.unitPercent(lang, u.id, total);
      var prog = el('div', 'unit-progress');
      prog.appendChild(el('span', 'unit-progress-label',
        P.sectionsComplete(lang, u.id) + ' of ' + total + ' sections complete'));
      var track = el('div', 'pbar');
      var fill = el('div', 'pbar-fill');
      fill.style.width = pctNow + '%';
      track.appendChild(fill);
      prog.appendChild(track);
      footer.appendChild(prog);

      var list = C.units(lang);
      var idx = C.unitIndex(lang, u.id);
      var nav = el('div', 'unit-nav');
      if (idx > 0) {
        var pv = el('a', 'btn btn-ghost');
        pv.href = '#/' + meta.slug + '/unit/' + encodeURIComponent(list[idx - 1].id);
        pv.textContent = '← ' + list[idx - 1].title;
        nav.appendChild(pv);
      }
      var rv = el('a', 'btn btn-quiet');
      rv.href = '#/' + meta.slug + '/review';
      rv.textContent = 'Review vocabulary';
      nav.appendChild(rv);
      if (idx > -1 && idx < list.length - 1) {
        var nx = el('a', 'btn btn-primary');
        nx.href = '#/' + meta.slug + '/unit/' + encodeURIComponent(list[idx + 1].id);
        nx.textContent = list[idx + 1].title + ' →';
        nav.appendChild(nx);
      }
      footer.appendChild(nav);
    }
    paintUnitFooter();
    return v;
  }

  /* ================================================================ review */

  function viewReview(lang) {
    var meta = C.LANG_META[lang];
    setActiveNav(lang);
    pageTitle(meta.name + ' review');
    var v = section('review lang-' + lang);
    v.appendChild(crumb(lang, 'Review'));

    var all = C.allVocab(lang);
    var seen = all.filter(function (r) { return P.hasSeen(lang, r.item.term); });
    var usingFallback = !seen.length;
    var pool = usingFallback ? all : seen;

    var head = el('header', 'review-head');
    head.appendChild(el('h1', 'review-title', meta.name + ' flashcards'));
    head.appendChild(el('p', 'review-sub', usingFallback
      ? 'You haven’t opened any vocabulary sections yet, so this deck covers the whole ' + meta.name + ' curriculum.'
      : 'Reviewing the ' + pool.length + ' word' + (pool.length === 1 ? '' : 's') + ' you have met so far.'));
    v.appendChild(head);

    if (!pool.length) {
      var box = el('div', 'empty-box');
      box.appendChild(el('h2', null, 'Nothing to review yet'));
      box.appendChild(U.para('Open a unit and read a vocabulary section — every word you see joins this deck.'));
      var a = el('a', 'btn btn-primary', 'Browse ' + meta.name + ' units');
      a.href = '#/' + meta.slug;
      box.appendChild(a);
      v.appendChild(box);
      return v;
    }

    var stage = el('div', 'flash-stage');
    v.appendChild(stage);
    runDeck(stage, lang, U.shuffle(pool));
    return v;
  }

  function runDeck(stage, lang, deck) {
    var queue = deck.slice();
    var reviewed = 0, again = 0, good = 0;
    var total = queue.length;

    function draw() {
      U.clear(stage);
      if (!queue.length) return done();

      var rec = queue[0];
      var item = rec.item;

      var meterRow = el('div', 'flash-meter');
      meterRow.appendChild(el('span', 'flash-count', (reviewed + 1) + ' of ' + (reviewed + queue.length)));
      meterRow.appendChild(el('span', 'flash-unit', rec.unitTitle || ''));
      stage.appendChild(meterRow);

      var track = el('div', 'pbar');
      var fill = el('div', 'pbar-fill');
      fill.style.width = Math.round(reviewed / Math.max(1, reviewed + queue.length) * 100) + '%';
      track.appendChild(fill);
      stage.appendChild(track);

      var scene = el('div', 'flash-scene');
      var card = el('div', 'flash-card');
      card.setAttribute('role', 'button');
      card.setAttribute('tabindex', '0');
      card.setAttribute('aria-label', 'Flashcard. Press Enter to flip.');

      var front = el('div', 'flash-face flash-front');
      var term = el('div', 'flash-term', item.term);
      A.attach(term, item.audio || item.term, lang);   // speaks without flipping (click is stopped)
      front.appendChild(term);
      if (item.trad && item.trad !== item.term) {
        var tradN = el('div', 'flash-trad', item.trad);
        A.attach(tradN, item.trad, lang);
        front.appendChild(tradN);
      }
      front.appendChild(el('div', 'flash-hint', 'Tap to reveal'));

      var back = el('div', 'flash-face flash-back');
      if (item.roman) back.appendChild(el('div', 'flash-roman', item.roman));
      back.appendChild(el('div', 'flash-gloss', item.gloss || ''));
      if (item.pos) back.appendChild(el('span', 'chip chip-pos', item.pos));
      if (item.example && item.example.text) {
        var ex = el('div', 'flash-example');
        var exText = el('div', 'flash-ex-text', item.example.text);
        A.attach(exText, item.example.text, lang);
        ex.appendChild(exText);
        if (item.example.gloss) ex.appendChild(el('div', 'flash-ex-gloss', item.example.gloss));
        back.appendChild(ex);
      }
      var mrec = P.getVocab(lang, item.term);
      var dots = el('div', 'mastery');
      dots.setAttribute('aria-label', 'Mastery ' + ((mrec && mrec.mastery) || 0) + ' of 5');
      for (var d = 0; d < 5; d++) dots.appendChild(el('i', 'mdot' + (d < ((mrec && mrec.mastery) || 0) ? ' on' : '')));
      back.appendChild(dots);

      card.appendChild(front);
      card.appendChild(back);
      scene.appendChild(card);
      stage.appendChild(scene);

      var flipped = false;
      function flip() {
        flipped = !flipped;
        card.classList.toggle('flipped', flipped);
        card.setAttribute('aria-label', flipped ? 'Answer shown. Press Enter to flip back.' : 'Flashcard. Press Enter to flip.');
        grade.hidden = !flipped;
        if (flipped) A.speak(item.audio || item.term, lang);
      }
      card.addEventListener('click', flip);
      card.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') { e.preventDefault(); flip(); }
      });

      var tools = el('div', 'flash-tools');
      tools.appendChild(U.button('🔊 Hear it', 'btn btn-ghost btn-sm', function () {
        A.speak(item.audio || item.term, lang);
      }, { ariaLabel: 'Play audio: ' + item.term }));
      tools.appendChild(U.button('Flip', 'btn btn-ghost btn-sm', flip));
      var goUnit = el('a', 'btn btn-ghost btn-sm', 'Open unit');
      goUnit.href = '#/' + C.LANG_META[lang].slug + '/unit/' + encodeURIComponent(rec.unitId);
      tools.appendChild(goUnit);
      stage.appendChild(tools);

      var grade = el('div', 'flash-grade');
      grade.hidden = true;
      grade.appendChild(U.button('Again', 'btn btn-again', function () {
        P.vocabMastery(lang, item.term, -1);
        again++;
        var moved = queue.shift();
        queue.push(moved);          // see it again at the end of the round
        reviewed++;
        draw();
      }, { title: 'Show this card again later' }));
      grade.appendChild(U.button('Good', 'btn btn-good', function () {
        P.vocabMastery(lang, item.term, 1);
        good++;
        queue.shift();
        reviewed++;
        U.celebrate(scene);
        draw();
      }, { title: 'I knew this one' }));
      stage.appendChild(grade);

      var keys = el('p', 'flash-keys', 'Space flips · 1 = Again · 2 = Good');
      stage.appendChild(keys);

      stage.onkeydown = function (e) {
        if (!flipped) return;
        if (e.key === '1') { e.preventDefault(); grade.children[0].click(); }
        if (e.key === '2') { e.preventDefault(); grade.children[1].click(); }
      };

      void card.offsetWidth;
      card.classList.add('in');
      try { card.focus(); } catch (e) {}
    }

    function done() {
      U.clear(stage);
      var card = el('div', 'qcard summary-card in');
      card.appendChild(U.ring(100, 'ring-lg'));
      card.appendChild(el('h3', 'summary-title', 'Deck finished.'));
      card.appendChild(el('p', 'summary-line',
        good + ' marked good · ' + again + ' marked again · ' + total + ' cards in the deck.'));
      var row = el('div', 'summary-actions');
      row.appendChild(U.button('Shuffle and go again', 'btn btn-primary', function () {
        runDeck(stage, lang, U.shuffle(deck));
      }));
      var back = el('a', 'btn btn-ghost', 'Back to units');
      back.href = '#/' + C.LANG_META[lang].slug;
      row.appendChild(back);
      card.appendChild(row);
      stage.appendChild(card);
      U.celebrate(card);
    }

    draw();
  }

  /* ============================================================== settings */

  function field(labelText, node, hint) {
    var w = el('div', 'field');
    var l = el('label', 'field-label', labelText);
    if (node.id) l.setAttribute('for', node.id);
    w.appendChild(l);
    w.appendChild(node);
    if (hint) w.appendChild(U.para(hint, 'field-hint'));
    return w;
  }

  function viewSettings() {
    setActiveNav('settings');
    pageTitle('Settings');
    var v = section('settings');
    v.appendChild(el('h1', 'page-title', 'Settings'));
    v.appendChild(el('p', 'page-sub', 'Everything here is stored on this device only, except the e-mail address and lesson queue you choose to send to your own mini-lesson script.'));

    v.appendChild(cardAccount());
    v.appendChild(cardAppearance());
    v.appendChild(cardAudio());
    v.appendChild(cardEmail());
    v.appendChild(cardSync());
    if (window.FableTutor) v.appendChild(window.FableTutor.settingsCard());
    v.appendChild(cardBackup());
    v.appendChild(cardDiagnostics());
    return v;
  }

  function panel(title, subtitle) {
    var p = el('section', 'spanel');
    p.appendChild(el('h2', 'spanel-title', title));
    if (subtitle) p.appendChild(el('p', 'spanel-sub', subtitle));
    return p;
  }

  function cardAccount() {
    var p = panel('Account', 'Word Goblin is invite-only; this device is signed in with Google.');
    var s = P.settings;
    var row = el('div', 'signed-row');
    row.appendChild(el('span', 'signed-as',
      'Signed in as ' + (s.signedInAs && s.signedInAs !== 'local' ? s.signedInAs : (s.email || 'unknown'))));
    row.appendChild(U.button('Sign out', 'btn btn-primary btn-sm', function () {
      P.setSettings({ signedInAs: '' });
      window.location.reload();          // straight back to the landing gate
    }, { title: 'Only the sign-in is forgotten on this device' }));
    p.appendChild(row);
    p.appendChild(U.para('Signing out forgets the sign-in on this device only — your progress and ' +
      'settings stay saved here and in your synced copy, and signing back in picks them right up. ' +
      'Use it to switch Google accounts or to lock the app on a shared device.', 'field-hint'));
    return p;
  }

  function cardAppearance() {
    var p = panel('Appearance', 'Dark mode follows your system by default.');
    var seg = el('div', 'segmented');
    seg.setAttribute('role', 'group');
    seg.setAttribute('aria-label', 'Colour theme');
    ['auto', 'light', 'dark'].forEach(function (t) {
      var b = U.button(t.charAt(0).toUpperCase() + t.slice(1), 'seg', function () {
        P.setSettings({ theme: t });
        applyTheme();
        paint();
      });
      b.dataset.theme = t;
      seg.appendChild(b);
    });
    function paint() {
      var cur = P.settings.theme || 'auto';
      var kids = seg.querySelectorAll('.seg');
      for (var i = 0; i < kids.length; i++) {
        var on = kids[i].dataset.theme === cur;
        kids[i].classList.toggle('on', on);
        kids[i].setAttribute('aria-pressed', on ? 'true' : 'false');
      }
    }
    paint();
    p.appendChild(seg);
    return p;
  }

  function cardAudio() {
    var p = panel('Audio', 'Word Goblin speaks through your browser’s built-in voices — nothing is downloaded.');
    var list = el('div', 'voice-list');

    function row(lang) {
      var meta = C.LANG_META[lang];
      var r = el('div', 'voice-row');
      var info = el('div', 'voice-info');
      info.appendChild(el('div', 'voice-lang', meta.name + ' (' + A.LANG_CODE[lang] + ')'));
      var stat = el('div', 'voice-status');
      info.appendChild(stat);
      r.appendChild(info);
      var test = U.button('Test voice', 'btn btn-ghost btn-sm', function () {
        A.speak(lang === 'korean' ? '안녕하세요. 한국어 공부를 시작할까요?' : '你好。我们开始学中文吧。', lang);
      });
      r.appendChild(test);

      function paint() {
        var s = A.status(lang);
        U.clear(stat);
        if (!s.supported) {
          stat.className = 'voice-status bad';
          stat.textContent = 'This browser has no speech synthesis. Try Chrome, Edge or Safari.';
          test.disabled = true;
        } else if (!s.voice) {
          stat.className = 'voice-status warn';
          stat.textContent = 'No ' + meta.name + ' voice found on this device. ' +
            (navigator.platform && /Win/i.test(navigator.platform)
              ? 'Add one in Windows Settings → Time & language → Speech → Manage voices.'
              : 'Install a ' + s.code + ' system voice, or try a different browser.');
        } else {
          stat.className = 'voice-status ok';
          stat.textContent = 'Using “' + s.voice + '” (' + s.voiceLang + ')' +
            (s.count > 1 ? ' — ' + s.count + ' compatible voices available.' : '.');
        }
      }
      paint();
      A.onReady(paint);
      return r;
    }
    LANGS.forEach(function (l) { list.appendChild(row(l)); });
    p.appendChild(list);
    return p;
  }

  /* ================================================ mini-lesson queue (v2) ==
   * The Apps Script has neither the curriculum nor the learner's localStorage, so the app
   * uploads a small per-language queue of upcoming words and the script mails one a day.
   * Caps per the contract: ≤10 items and ≤8 KB serialized per language.
   */

  var QUEUE_MAX_ITEMS = 10;
  var QUEUE_MAX_BYTES = 8192;
  var BG_MAX_CHARS = 400;
  var LOW_MASTERY = 2;          // "low mastery" = below this on the 0–5 scale

  function utf8Bytes(s) {
    s = String(s == null ? '' : s);
    try { if (typeof Blob === 'function') return new Blob([s]).size; } catch (e) {}
    var n = 0;
    for (var i = 0; i < s.length; i++) {
      var c = s.charCodeAt(i);
      if (c < 0x80) n += 1;
      else if (c < 0x800) n += 2;
      else if (c >= 0xd800 && c <= 0xdbff) { n += 4; i++; }   // surrogate pair
      else n += 3;
    }
    return n;
  }

  function truncate(s, max) {
    s = String(s == null ? '' : s).replace(/\s+/g, ' ').trim();
    if (s.length <= max) return s;
    var cut = s.slice(0, max - 1);
    var sp = cut.lastIndexOf(' ');
    if (sp > max * 0.6) cut = cut.slice(0, sp);
    return cut.replace(/[\s,;:—–-]+$/, '') + '…';
  }

  /* Every vocab item of a language, tagged with its unit, in curriculum order. */
  function vocabWithUnits(lang) {
    var out = [];
    C.units(lang).forEach(function (u, idx) {
      u.sections.forEach(function (sec) {
        if (sec.type !== 'vocab') return;
        sec.items.forEach(function (it) { out.push({ item: it, unit: u, unitIndex: idx }); });
      });
    });
    return out;
  }

  function unitLabel(u) {
    return (u.order === 0 ? 'Foundation' : 'Unit ' + u.order) + ' · ' + u.title;
  }

  function toQueueItem(rec) {
    var it = rec.item;
    var ling = (it.linguistics && typeof it.linguistics === 'object') ? it.linguistics : {};
    var ety = ling.etymology;
    if (typeof ety === 'string') ety = [ety];
    if (!U.isArr(ety)) ety = [];

    var background = [];
    for (var i = 0; i < ety.length && background.length < 2; i++) {
      if (typeof ety[i] !== 'string' || !ety[i].trim()) continue;
      background.push(truncate(ety[i], BG_MAX_CHARS));
    }

    var q = {
      term: U.str(it.term),
      roman: U.str(it.roman),
      gloss: U.str(it.gloss),
      pos: U.str(it.pos),
      unit: unitLabel(rec.unit)
    };
    if (it.example && it.example.text) {
      q.example = {
        text: U.str(it.example.text),
        roman: U.str(it.example.roman),
        gloss: U.str(it.example.gloss)
      };
    }
    if (ling.origin) q.origin = U.str(ling.origin);
    if (background.length) q.background = background;
    return q;
  }

  /* Shrink a queue until it fits the byte cap: thin the backgrounds first, then drop
     trailing items. Always leaves at least one (hard-trimmed) item if there was one. */
  function fitQueue(items) {
    function size() { return utf8Bytes(JSON.stringify(items)); }
    if (!items.length || size() <= QUEUE_MAX_BYTES) return items;

    for (var i = items.length - 1; i >= 0 && size() > QUEUE_MAX_BYTES; i--) {
      if (items[i].background && items[i].background.length > 1) items[i].background.length = 1;
    }
    for (var j = items.length - 1; j >= 0 && size() > QUEUE_MAX_BYTES; j--) {
      if (items[j].background) items[j].background = [truncate(items[j].background[0], 200)];
    }
    for (var k = items.length - 1; k >= 0 && size() > QUEUE_MAX_BYTES; k--) {
      if (items[k].background) delete items[k].background;
    }
    while (items.length > 1 && size() > QUEUE_MAX_BYTES) items.pop();
    if (items.length === 1 && size() > QUEUE_MAX_BYTES && items[0].background) delete items[0].background;
    return items;
  }

  /**
   * buildQueue(lang) — the next unseen / low-mastery words in curriculum order, starting at
   * the learner's first incomplete unit and wrapping round if that runs dry.
   */
  function buildQueue(lang) {
    var all = vocabWithUnits(lang);
    if (!all.length) return [];

    var next = C.nextUnit(lang);
    var startIdx = next ? Math.max(0, C.unitIndex(lang, next.id)) : 0;

    var ordered = all.filter(function (r) { return r.unitIndex >= startIdx; })
      .concat(all.filter(function (r) { return r.unitIndex < startIdx; }));

    var picked = [], taken = {}, leftovers = [];
    ordered.forEach(function (r) {
      var term = r.item.term;
      if (!term || taken[term]) return;
      var v = P.getVocab(lang, term);
      var fresh = !v || !v.seen || (v.mastery || 0) < LOW_MASTERY;
      if (fresh) {
        if (picked.length < QUEUE_MAX_ITEMS) { taken[term] = 1; picked.push(r); }
      } else if (leftovers.length < QUEUE_MAX_ITEMS) {
        leftovers.push(r);
      }
    });
    // Everything already mastered? Still send something rather than an empty email.
    for (var i = 0; picked.length < QUEUE_MAX_ITEMS && i < leftovers.length; i++) {
      if (taken[leftovers[i].item.term]) continue;
      taken[leftovers[i].item.term] = 1;
      picked.push(leftovers[i]);
    }

    return fitQueue(picked.map(toQueueItem));
  }

  /** The languages whose queues should be uploaded: subscribed to, and not paused. */
  function syncLangs() {
    var active = P.settings.activeLangs || [];
    return LANGS.filter(function (l) { return active.indexOf(l) !== -1 && !P.isPaused(l); });
  }

  function buildQueues() {
    var out = {};
    syncLangs().forEach(function (l) { out[l] = buildQueue(l); });
    return out;
  }

  /**
   * syncQueues(reason, cb) — fire-and-forget upload of the lesson queues.
   * Replies are never assumed readable (file:// → Origin: null), so success is optimistic.
   */
  function syncQueues(reason, cb) {
    var s = P.settings;
    if (!s.subscribed || !s.scriptUrl || !s.email) { if (cb) cb({ ok: false, error: 'not subscribed' }); return; }
    var queues = buildQueues();
    if (!Object.keys(queues).length) { if (cb) cb({ ok: false, error: 'no active languages' }); return; }
    postJson(s.scriptUrl, keyedBody({ action: 'sync', email: s.email, queues: queues }), function (res) {
      if (res.ok) P.markSynced();
      if (window.console && console.debug) {
        console.debug('[WordGoblin] queue sync (' + reason + ')', res.ok ? 'sent' : res.error);
      }
      if (cb) cb(res);
    });
  }

  /** Section completions re-sync, at most once an hour. */
  function syncAfterSectionComplete() {
    var s = P.settings;
    if (!s.subscribed || !s.scriptUrl || !s.email) return;
    if (P.minutesSinceSync() < 60) return;
    syncQueues('section-complete');
  }

  function formatSyncTime(d) {
    if (!d) return 'never';
    var today = P.dayKey(), that = P.dayKey(d);
    var hh = d.getHours(), mm = d.getMinutes();
    var time = (hh < 10 ? '0' : '') + hh + ':' + (mm < 10 ? '0' : '') + mm;
    if (that === today) return 'today at ' + time;
    return that + ' at ' + time;
  }

  /* ========================================= cross-device progress sync (v3) ==
   * On https the Apps Script reply IS readable, so this half is request/response:
   * loadProgress → merge → saveProgress. On file:// the reply is opaque; we then skip the
   * pull entirely rather than risk merging nothing over real progress, and only push.
   */

  var PUSH_THROTTLE_MIN = 5;
  var pushTimer = 0;
  var dirtySincePush = false;
  var syncMsg = { text: '', kind: '' };
  var syncWatchers = [];

  function onSyncStateChange(fn) { if (typeof fn === 'function') syncWatchers.push(fn); }

  function setSyncMsg(text, kind) {
    syncMsg = { text: text || '', kind: kind || '' };
    for (var i = 0; i < syncWatchers.length; i++) { try { syncWatchers[i](); } catch (e) {} }
  }

  function syncConfigured() {
    var s = P.settings;
    return !!(s.scriptUrl && s.email && s.syncKey);
  }

  function syncActive() { return syncConfigured() && !!P.settings.syncEnabled; }

  function keyedBody(obj) {
    // v4: the backend refuses keyless requests outright, so every call carries a key —
    // generated here on first use if this device never got one from sign-in.
    if (!P.settings.syncKey) P.setSettings({ syncKey: P.generateSyncKey() });
    obj.key = P.settings.syncKey;
    return obj;
  }

  function describeSyncError(err) {
    if (err === 'bad key') {
      return 'Sync key rejected — this e-mail is already claimed by a different key. ' +
        'Enter the key from your other device (or use a different e-mail address).';
    }
    if (err === 'unreadable') {
      if (window.location.protocol === 'file:') {
        return 'Could not read the reply, so nothing was merged. Opening index.html from disk ' +
          'can only push — use the hosted (https) version of the app for full sync.';
      }
      return 'The script replied, but the reply could not be read. This almost always means the ' +
        'Apps Script deployment is not public: in script.google.com open Deploy → Manage ' +
        'deployments → ✏️ Edit, set “Execute as: Me” and “Who has access: Anyone” (NOT “Anyone ' +
        'with Google account”), press Deploy, and check the URL here ends in /exec (not /dev). ' +
        'Quick test: open <your URL>?action=status in a private/incognito window — it should ' +
        'show JSON, not a Google sign-in page.';
    }
    return err || 'Sync failed.';
  }

  /** pullProgress(cb) — loadProgress → merge into local. Never merges an unreadable reply. */
  function pullProgress(cb) {
    if (!syncConfigured()) { if (cb) cb({ ok: false, error: 'not configured' }); return; }
    var s = P.settings;
    postJson(s.scriptUrl, keyedBody({ action: 'loadProgress', email: s.email }), function (res) {
      if (!res.ok) { if (cb) cb(res); return; }
      if (res.opaque || !res.data || typeof res.data !== 'object') {
        if (cb) cb({ ok: false, error: 'unreadable' });
        return;
      }
      var payload = res.data;
      P.markPulled();
      if (!payload.progress) { if (cb) cb({ ok: true, had: false }); return; }
      var merged;
      try { merged = P.mergeCloud(payload.progress, payload.updatedAt); }
      catch (e) { if (cb) cb({ ok: false, error: 'That cloud backup could not be merged.' }); return; }
      if (cb) cb({ ok: true, had: true, merged: merged, updatedAt: payload.updatedAt });
    });
  }

  /** pushProgress({force}, cb) — saveProgress, throttled to one per PUSH_THROTTLE_MIN. */
  function pushProgress(opts, cb) {
    opts = opts || {};
    if (!syncConfigured()) { if (cb) cb({ ok: false, error: 'not configured' }); return; }
    if (!opts.force && P.minutesSincePush() < PUSH_THROTTLE_MIN) {
      if (cb) cb({ ok: false, error: 'throttled' });
      return;
    }
    var s = P.settings, blob;
    try { blob = JSON.parse(P.exportJson()); }
    catch (e) { if (cb) cb({ ok: false, error: 'Could not read local progress.' }); return; }

    dirtySincePush = false;
    postJson(s.scriptUrl, keyedBody({
      action: 'saveProgress',
      email: s.email,
      updatedAt: new Date().toISOString(),
      progress: blob
    }), function (res) {
      if (res.ok) P.markPushed();
      else dirtySincePush = true;
      if (cb) cb(res);
    });
  }

  /** syncNow(cb) — full round trip: pull + merge, then push the merged result back up. */
  function syncNow(cb) {
    if (!syncConfigured()) {
      setSyncMsg('Add your Apps Script URL, e-mail and a sync key first.', 'bad');
      if (cb) cb({ ok: false, error: 'not configured' });
      return;
    }
    setSyncMsg('Syncing…', '');
    pullProgress(function (pull) {
      if (!pull.ok && pull.error === 'bad key') {
        setSyncMsg(describeSyncError('bad key'), 'bad');
        if (cb) cb(pull);
        return;
      }
      pushProgress({ force: true }, function (push) {
        if (push.ok) {
          var note;
          if (!pull.ok) {
            note = 'Progress uploaded. ' + describeSyncError(pull.error);
            setSyncMsg(note, 'warn');
          } else if (pull.had && pull.merged && (pull.merged.changed || pull.merged.adopted)) {
            note = 'Merged your other device’s progress and uploaded the result.';
            setSyncMsg(note, 'ok');
            render();      // merged data can change every screen
          } else {
            note = pull.had ? 'Already up to date — progress uploaded.' : 'First device: progress uploaded.';
            setSyncMsg(note, 'ok');
          }
        } else {
          setSyncMsg(describeSyncError(push.error), 'bad');
        }
        if (cb) cb(push);
      });
    });
  }

  /* Study activity → coalesced, throttled push. */
  function schedulePush() {
    dirtySincePush = true;
    if (!syncActive() || pushTimer) return;
    pushTimer = setTimeout(function () {
      pushTimer = 0;
      if (!syncActive() || !dirtySincePush) return;
      pushProgress({}, function (res) {
        if (!res.ok && res.error === 'bad key') setSyncMsg(describeSyncError('bad key'), 'bad');
      });
    }, 4000);
  }

  /** Best-effort push as the page goes away — sendBeacon survives unload; fetch may not. */
  function beaconPush() {
    if (!syncActive() || !dirtySincePush) return;
    var s = P.settings, body;
    try {
      body = JSON.stringify(keyedBody({
        action: 'saveProgress', email: s.email,
        updatedAt: new Date().toISOString(),
        progress: JSON.parse(P.exportJson())
      }));
    } catch (e) { return; }
    var sent = false;
    try {
      if (navigator.sendBeacon) {
        sent = navigator.sendBeacon(s.scriptUrl, new Blob([body], { type: 'text/plain;charset=UTF-8' }));
      }
    } catch (e) { sent = false; }
    if (!sent && typeof window.fetch === 'function') {
      try {
        window.fetch(s.scriptUrl, {
          method: 'POST', mode: 'no-cors', keepalive: true,
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: body
        })['catch'](function () {});
        sent = true;
      } catch (e) {}
    }
    if (sent) { dirtySincePush = false; P.markPushed(); }
  }

  function cardEmail() {
    var p = panel('Daily mini-lesson e-mail',
      'Each morning you get a personalised mini-lesson — a word from where you actually are in the ' +
      'curriculum, with its example sentence and etymology. The app uploads a short queue of upcoming ' +
      'words; a free Google Apps Script that you deploy yourself mails one a day. See EMAIL-SETUP.md, ' +
      'then paste its web-app URL below.');

    var url = el('input', 'input');
    url.type = 'url';
    url.id = 'set-scripturl';
    url.placeholder = 'https://script.google.com/macros/s/…/exec';
    url.value = P.settings.scriptUrl || '';
    url.addEventListener('change', function () { P.setSettings({ scriptUrl: url.value.trim() }); });
    p.appendChild(field('Apps Script web-app URL', url, 'Stored on this device only.'));

    var email = el('input', 'input');
    email.type = 'email';
    email.id = 'set-email';
    email.placeholder = 'you@example.com';
    email.value = P.settings.email || '';
    email.addEventListener('change', function () { P.setSettings({ email: email.value.trim() }); });
    p.appendChild(field('Your e-mail address', email));

    var langsWrap = el('div', 'checks');
    langsWrap.setAttribute('role', 'group');
    langsWrap.setAttribute('aria-label', 'Languages to be reminded about');
    var boxes = {};
    LANGS.forEach(function (lang) {
      var id = 'chk-' + lang;
      var lab = el('label', 'check');
      var cb = el('input');
      cb.type = 'checkbox';
      cb.id = id;
      cb.checked = (P.settings.activeLangs || []).indexOf(lang) !== -1;
      boxes[lang] = cb;
      lab.appendChild(cb);
      lab.appendChild(el('span', null, C.LANG_META[lang].name));
      langsWrap.appendChild(lab);
    });
    p.appendChild(field('Send me mini-lessons in', langsWrap));

    var status = el('p', 'form-status');
    status.setAttribute('role', 'status');

    function selectedLangs() {
      var out = [];
      LANGS.forEach(function (l) { if (boxes[l].checked) out.push(l); });
      return out;
    }

    function send(action) {
      var addr = email.value.trim();
      var endpoint = url.value.trim();
      P.setSettings({ email: addr, scriptUrl: endpoint, activeLangs: selectedLangs() });
      if (!endpoint) { setStatus('Add your Apps Script URL first.', 'bad'); return; }
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(addr)) { setStatus('That e-mail address doesn’t look right.', 'bad'); return; }
      if (action === 'subscribe' && !selectedLangs().length) { setStatus('Pick at least one language.', 'bad'); return; }
      setStatus('Sending…', '');

      // v3: carry the sync key so the server can claim / verify it alongside the subscription
      var payload = keyedBody({ action: action, email: addr, languages: selectedLangs() });
      var queued = 0;
      if (action === 'subscribe') {
        // Mark subscribed first so buildQueues()/syncLangs() see the new state.
        P.setSettings({ subscribed: true });
        payload.queues = buildQueues();
        LANGS.forEach(function (l) { if (payload.queues[l]) queued += payload.queues[l].length; });
      }

      postJson(endpoint, payload, function (res) {
        if (res.ok) {
          if (action === 'subscribe') {
            P.markSynced();
            setStatus('Subscribed. ' + queued + ' upcoming word' + (queued === 1 ? '' : 's') +
              ' uploaded for your daily mini-lesson' +
              (res.opaque ? ' (the browser could not read the reply, but the request was delivered).' : '.'), 'ok');
          } else {
            P.setSettings({ subscribed: false });
            setStatus('Unsubscribed. You will not receive further mini-lessons' +
              (res.opaque ? ' (reply unreadable, request delivered).' : '.'), 'ok');
          }
        } else {
          if (action === 'subscribe') P.setSettings({ subscribed: false });
          setStatus(res.error || 'The request failed.', 'bad');
        }
        paintSync();
      });
    }

    function setStatus(msg, kind) {
      status.textContent = msg;
      status.className = 'form-status ' + (kind || '');
    }

    var row = el('div', 'btn-row');
    row.appendChild(U.button('Subscribe', 'btn btn-primary', function () { send('subscribe'); }));
    row.appendChild(U.button('Unsubscribe', 'btn btn-ghost', function () { send('unsubscribe'); }));
    p.appendChild(row);
    p.appendChild(status);

    /* read-only sync status + manual re-sync */
    var syncBox = el('div', 'sync-box');
    var syncLine = el('p', 'sync-line');
    syncLine.setAttribute('role', 'status');
    var syncBtn = U.button('Sync lesson queue now', 'btn btn-ghost btn-sm', function () {
      P.setSettings({ email: email.value.trim(), scriptUrl: url.value.trim(), activeLangs: selectedLangs() });
      setStatus('Uploading your lesson queue…', '');
      syncQueues('manual', function (res) {
        if (res.ok) {
          setStatus('Lesson queue uploaded' + (res.opaque ? ' (delivered; the reply could not be read).' : '.'), 'ok');
        } else if (res.error === 'not subscribed') {
          setStatus('Subscribe first — then the queue can sync.', 'bad');
        } else if (res.error === 'no active languages') {
          setStatus('Every selected track is paused, so there is nothing to send.', 'bad');
        } else {
          setStatus(res.error || 'Sync failed.', 'bad');
        }
        paintSync();
      });
    });
    syncBox.appendChild(syncLine);
    syncBox.appendChild(syncBtn);
    p.appendChild(syncBox);

    function paintSync() {
      var s = P.settings;
      var bits = [s.subscribed ? 'Subscribed on this device' : 'Not subscribed'];
      bits.push('lesson queue last synced ' + formatSyncTime(P.lastSyncDate()));
      var langs = syncLangs();
      if (langs.length) {
        var total = 0;
        var parts = langs.map(function (l) {
          var n = buildQueue(l).length;
          total += n;
          return n + ' ' + C.LANG_META[l].name;
        });
        bits.push('next up: ' + parts.join(' · ') + ' word' + (total === 1 ? '' : 's'));
      } else {
        bits.push('no active track selected');
      }
      syncLine.textContent = bits.join(' · ') + '.';
      syncLine.className = 'sync-line' + (s.subscribed ? ' on' : '');
      syncBtn.disabled = !(s.subscribed && s.scriptUrl && s.email);
    }
    paintSync();

    if (P.settings.subscribed) setStatus('This device last recorded a successful subscription.', 'ok');
    return p;
  }

  /**
   * POST JSON as text/plain (Apps Script quirk: avoids a CORS preflight).
   * This is the app's only network request and it targets the user's own endpoint.
   * If the response can't be read cross-origin we retry opaquely and report success.
   */
  function postJson(endpoint, payload, cb) {
    var body;
    try { body = JSON.stringify(payload); } catch (e) { cb({ ok: false, error: 'Could not encode the request.' }); return; }

    if (typeof window.fetch === 'function') {
      window.fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: body,
        redirect: 'follow'
      }).then(function (r) {
        return r.text().then(function (txt) { return { status: r.status, txt: txt }; });
      }).then(function (o) {
        var parsed = null;
        try { parsed = JSON.parse(o.txt); } catch (e) {}
        if (parsed && parsed.ok === false) cb({ ok: false, error: parsed.error || 'The script reported an error.' });
        else cb({ ok: true, data: parsed });
      })['catch'](function () {
        // Opaque fallback — the request still reaches Apps Script, we just can't read the reply.
        window.fetch(endpoint, {
          method: 'POST', mode: 'no-cors',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: body
        }).then(function () { cb({ ok: true, opaque: true }); })
          ['catch'](function () {
            cb({ ok: false, error: 'Could not reach that URL. Check the deployment is set to “Anyone” and the link ends in /exec.' });
          });
      });
      return;
    }

    var xhr = new XMLHttpRequest();
    xhr.open('POST', endpoint, true);
    xhr.setRequestHeader('Content-Type', 'text/plain;charset=utf-8');
    xhr.onload = function () { cb({ ok: xhr.status >= 200 && xhr.status < 400, error: 'HTTP ' + xhr.status }); };
    xhr.onerror = function () { cb({ ok: false, error: 'Could not reach that URL.' }); };
    xhr.send(body);
  }

  /* Google Identity Services loader — fetched on demand, only over http(s), never cached
     by the service worker (cross-origin). The app works fully without it. */
  var gsiCallbacks = null;
  function loadGsi(cb) {
    if (window.google && window.google.accounts && window.google.accounts.id) { cb(true); return; }
    if (gsiCallbacks) { gsiCallbacks.push(cb); return; }
    gsiCallbacks = [cb];
    var sc = document.createElement('script');
    sc.src = 'https://accounts.google.com/gsi/client';
    sc.async = true;
    sc.defer = true;
    sc.onload = function () { flushGsi(true); };
    sc.onerror = function () { flushGsi(false); };
    document.head.appendChild(sc);
  }
  function flushGsi(ok) {
    var q = gsiCallbacks || [];
    gsiCallbacks = null;
    for (var i = 0; i < q.length; i++) { try { q[i](ok); } catch (e) {} }
  }

  /* GIS allows one initialize() per page; both the landing gate and the Settings panel
     render buttons, so a single dispatcher routes credentials to whichever asked last. */
  var gisInited = false;
  var gisHandler = null;

  /** renderGoogleButton(clientId, host, onCredential, cb(ok)) — official button into host. */
  function renderGoogleButton(clientId, host, onCredential, cb) {
    loadGsi(function (ok) {
      if (!ok) { cb(false); return; }
      try {
        if (!gisInited) {
          window.google.accounts.id.initialize({
            client_id: clientId,
            callback: function (resp) { if (gisHandler) gisHandler(resp); }
          });
          gisInited = true;
        }
        gisHandler = onCredential;
        U.clear(host);
        window.google.accounts.id.renderButton(host, { theme: 'outline', size: 'large', shape: 'pill', text: 'signin_with' });
        cb(true);
      } catch (e) { cb(false); }
    });
  }

  /** True when Google sign-in could work at all in this environment. */
  function gsiPossibleHere() {
    var proto = window.location.protocol;
    return proto === 'https:' || window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
  }

  /**
   * completeGoogleLogin(resp, status, done) — verify the GIS credential with the user's
   * Apps Script, adopt {email, syncKey, subscription}, mark the device signed in, sync.
   * status(msg, kind) paints progress; done(ok) fires after the sync round-trip.
   */
  function completeGoogleLogin(resp, status, done) {
    if (!resp || !resp.credential) { status('Google sign-in returned no credential. Try again.', 'bad'); done(false); return; }
    status('Verifying your Google sign-in…', '');
    var body = { action: 'googleLogin', idToken: resp.credential };
    var invite = pendingInvite();
    if (invite) body.inviteToken = invite;
    postJson(P.settings.scriptUrl, body, function (res) {
      if (res.ok && res.data && res.data.email && res.data.key) {
        clearInvite();
        var patch = {
          email: String(res.data.email),
          syncKey: P.normalizeKey(res.data.key),
          syncEnabled: true,
          signedInAs: String(res.data.email)
        };
        if (res.data.subscribed) {
          patch.subscribed = true;
          if (U.isArr(res.data.languages)) {
            var langs = res.data.languages.filter(function (l) { return LANGS.indexOf(l) !== -1; });
            if (langs.length) patch.activeLangs = langs;
          }
        }
        P.setSettings(patch);
        status('Signed in as ' + res.data.email + ' — syncing…', 'ok');
        syncNow(function () { done(true); });
      } else if (res.ok) {
        status(describeSyncError('unreadable'), 'bad');
        done(false);
      } else {
        status(res.error || 'Google sign-in failed.', 'bad');
        done(false);
      }
    });
  }

  function cardSync() {
    var p = panel('Cross-device sync',
      'Study on your laptop, carry on from your phone. Your progress AND your settings — theme, ' +
      'mini-lesson languages, subscription state, even your AI-tutor key and model — are stored ' +
      'under the same Apps Script endpoint and e-mail address as the mini-lesson above, protected ' +
      'by a sync key you choose. Generate a key here, then on your other device enter the Apps ' +
      'Script URL and e-mail above, type the same key, and press “Save & sync” — the rest of the ' +
      'settings fill in from the cloud. Or skip the typing: with your Apps Script URL set, ' +
      '“Sign in with Google” proves the address and fetches the key in one click. Progress merges ' +
      'rather than overwrites: whichever device did more of something wins.');

    /* ---- one-click Google sign-in (appears when the backend has it enabled) ---- */
    var gBox = el('div', 'gsi-box');
    var gHost = el('div', 'gsi-btn');
    var gNote = el('p', 'field-hint gsi-note');
    gBox.appendChild(gHost);
    gBox.appendChild(gNote);
    p.appendChild(gBox);

    function initGoogleButton() {
      var s = P.settings;
      if (!gsiPossibleHere()) {
        gNote.textContent = 'Google sign-in needs the hosted (https) version of the app; the manual key below works everywhere.';
        return;
      }
      if (!s.scriptUrl) {
        gNote.textContent = 'Add your Apps Script URL above and Google sign-in appears here.';
        return;
      }
      gNote.textContent = 'Checking this backend for Google sign-in…';
      var cfgUrl = s.scriptUrl + (s.scriptUrl.indexOf('?') === -1 ? '?' : '&') + 'action=config';
      window.fetch(cfgUrl).then(function (r) { return r.json(); }).then(function (cfg) {
        var cid = cfg && cfg.googleClientId;
        if (!cid) {
          gNote.textContent = 'One-click sign-in unlocks after a one-time backend step: run setupGoogleLogin() ' +
            'in your Apps Script (EMAIL-SETUP.md walks through it). The manual key below works regardless.';
          return;
        }
        renderGoogleButton(cid, gHost, function (resp) {
          completeGoogleLogin(resp, setSyncMsg, function (ok) { if (ok) render(); });
        }, function (ok) {
          gNote.textContent = ok
            ? 'One click proves your address, fetches your sync key, and syncs everything — settings included.'
            : 'Could not load Google sign-in (offline?). Use the manual key below.';
        });
      })['catch'](function () {
        gNote.textContent = 'Could not reach the Apps Script to check for Google sign-in. The manual key below still works.';
      });
    }
    initGoogleButton();

    var keyRow = el('div', 'key-row');
    var key = el('input', 'input key-input');
    key.type = 'text';
    key.id = 'set-synckey';
    key.placeholder = 'e.g. K7M2QX9TB4RD';
    key.value = P.settings.syncKey || '';
    key.setAttribute('autocomplete', 'off');
    key.setAttribute('autocapitalize', 'characters');
    key.setAttribute('spellcheck', 'false');
    key.addEventListener('change', function () {
      var k = P.normalizeKey(key.value);
      key.value = k;
      P.setSettings({ syncKey: k, syncEnabled: !!k && P.settings.syncEnabled });
      paint();
    });
    keyRow.appendChild(key);
    keyRow.appendChild(U.button('Generate', 'btn btn-ghost btn-sm', function () {
      var k = P.generateSyncKey();
      key.value = k;
      P.setSettings({ syncKey: k, syncEnabled: true });
      setSyncMsg('New key generated. Type it on your other device to link them.', 'ok');
      paint();
    }, { title: 'Create a new random key' }));
    keyRow.appendChild(U.button('Copy', 'btn btn-ghost btn-sm', function () {
      key.focus();
      key.select();
      var done = false;
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(key.value);
          done = true;
        } else if (document.execCommand) {
          done = document.execCommand('copy');
        }
      } catch (e) { done = false; }
      setSyncMsg(done ? 'Key copied to the clipboard.' : 'Select the key above and copy it manually.', done ? 'ok' : 'warn');
    }, { title: 'Copy the key' }));
    p.appendChild(field('Sync key', keyRow,
      'Anyone with your e-mail address <b>and</b> this key can read your progress — treat it like a password. It is saved on this device and included in your progress export.'));

    var enableWrap = el('div', 'checks');
    var enableLab = el('label', 'check');
    var enable = el('input');
    enable.type = 'checkbox';
    enable.id = 'chk-syncenabled';
    enable.checked = !!P.settings.syncEnabled;
    enable.addEventListener('change', function () {
      P.setSettings({ syncEnabled: enable.checked });
      setSyncMsg(enable.checked ? 'This device will sync automatically.' : 'Automatic syncing paused on this device.', '');
      paint();
    });
    enableLab.appendChild(enable);
    enableLab.appendChild(el('span', null, 'Keep this device in sync automatically'));
    enableWrap.appendChild(enableLab);
    p.appendChild(field('Automatic sync', enableWrap));

    /* The confirm step: save the typed key, run a full sync, then re-render the whole
       Settings view so every panel (e-mail, AI tutor, appearance) shows the synced values. */
    var saveRow = el('div', 'btn-row');
    saveRow.appendChild(U.button('Save & sync', 'btn btn-primary', function () {
      var k = P.normalizeKey(key.value);
      key.value = k;
      P.setSettings({ syncKey: k, syncEnabled: !!k });
      if (!k) {
        setSyncMsg('Enter or generate a sync key first.', 'bad');
        paint();
        return;
      }
      if (!syncConfigured()) {
        setSyncMsg('Key saved. Now add the Apps Script URL and e-mail in the panel above, then press “Save & sync” again.', 'warn');
        paint();
        return;
      }
      syncNow(function (res) {
        if (res && res.ok) {
          setSyncMsg('Synced — settings below now reflect all your devices.', 'ok');
        }
        render();     // rebuild every settings panel with the merged values
      });
      paint();
    }));
    p.appendChild(saveRow);

    var box = el('div', 'sync-box');
    var line = el('p', 'sync-line');
    line.setAttribute('role', 'status');
    var btn = U.button('Sync now', 'btn btn-ghost btn-sm', function () {
      P.setSettings({ syncKey: P.normalizeKey(key.value) });
      syncNow(function () { paint(); });
      paint();
    });
    box.appendChild(line);
    box.appendChild(btn);
    p.appendChild(box);

    var note = el('p', 'form-status');
    p.appendChild(note);

    function stamp(iso, label) {
      if (!iso) return label + ' never';
      var d = new Date(iso);
      return isFinite(d.getTime()) ? label + ' ' + formatSyncTime(d) : label + ' never';
    }

    function paint() {
      var s = P.settings;
      var bits = [];
      if (!s.syncKey) bits.push('No sync key yet');
      else if (!syncConfigured()) bits.push('Key set — add the Apps Script URL and e-mail above to use it');
      else bits.push(s.syncEnabled ? 'Syncing as ' + s.email : 'Sync key ready (automatic sync off)');
      bits.push(stamp(s.lastPullAt, 'last pull'));
      bits.push(stamp(s.lastPushAt, 'last push'));
      line.textContent = bits.join(' · ') + '.';
      line.className = 'sync-line' + (syncActive() ? ' on' : '');
      btn.disabled = !syncConfigured();
      note.textContent = syncMsg.text;
      note.className = 'form-status ' + syncMsg.kind;
    }
    paint();
    onSyncStateChange(paint);
    return p;
  }

  function cardBackup() {
    var p = panel('Progress backup', 'Your progress lives in this browser under the key ' + P.KEY + '. Export it before clearing site data or switching device.');

    var out = el('textarea', 'code-area');
    out.rows = 6;
    out.readOnly = true;
    out.id = 'export-area';
    out.setAttribute('aria-label', 'Exported progress JSON');

    var status = el('p', 'form-status');
    status.setAttribute('role', 'status');

    var row1 = el('div', 'btn-row');
    row1.appendChild(U.button('Export to file', 'btn btn-primary', function () {
      var json = P.exportJson();
      out.value = json;
      try {
        var blob = new Blob([json], { type: 'application/json' });
        var a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = 'word-goblin-progress-' + P.dayKey() + '.json';
        document.body.appendChild(a);
        a.click();
        setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 500);
        status.textContent = 'Exported. The JSON is also shown below for copying.';
        status.className = 'form-status ok';
      } catch (e) {
        status.textContent = 'Download blocked by the browser — copy the JSON below instead.';
        status.className = 'form-status warn';
      }
    }));
    row1.appendChild(U.button('Show JSON', 'btn btn-ghost', function () {
      out.value = P.exportJson();
      out.focus();
      out.select();
      status.textContent = 'Copy this text somewhere safe.';
      status.className = 'form-status';
    }));
    p.appendChild(row1);
    p.appendChild(out);

    var imp = el('textarea', 'code-area');
    imp.rows = 5;
    imp.id = 'import-area';
    imp.placeholder = 'Paste a previously exported backup here…';
    p.appendChild(field('Restore from a backup', imp));

    var file = el('input', 'input file-input');
    file.type = 'file';
    file.accept = '.json,application/json,text/plain';
    file.id = 'import-file';
    file.addEventListener('change', function () {
      var f = file.files && file.files[0];
      if (!f) return;
      var reader = new FileReader();
      reader.onload = function () { imp.value = String(reader.result || ''); doImport(); };
      reader.onerror = function () { status.textContent = 'Could not read that file.'; status.className = 'form-status bad'; };
      reader.readAsText(f);
    });
    p.appendChild(field('…or choose a backup file', file));

    function doImport() {
      var res = P.importJson(imp.value);
      if (res.ok) {
        status.textContent = 'Progress restored.';
        status.className = 'form-status ok';
        applyTheme();
        setTimeout(render, 400);
      } else {
        status.textContent = res.error;
        status.className = 'form-status bad';
      }
    }

    var row2 = el('div', 'btn-row');
    row2.appendChild(U.button('Import', 'btn btn-primary', doImport));
    row2.appendChild(U.button('Reset all progress', 'btn btn-danger', function () {
      if (window.confirm('Erase all progress for both languages on this device? Settings are kept.')) {
        P.reset();
        status.textContent = 'Progress cleared.';
        status.className = 'form-status ok';
        setTimeout(render, 400);
      }
    }));
    p.appendChild(row2);
    p.appendChild(status);
    return p;
  }

  function cardDiagnostics() {
    var p = panel('Curriculum diagnostics', 'What loaded, and anything the app had to skip.');
    var tbl = el('div', 'diag-grid');
    LANGS.forEach(function (lang) {
      var meta = C.LANG_META[lang];
      var units = C.units(lang);
      var d = el('div', 'diag-cell');
      d.appendChild(el('h3', null, meta.name));
      d.appendChild(el('p', null, units.length + ' unit' + (units.length === 1 ? '' : 's') + ' · ' +
        C.vocabCount(lang) + ' vocabulary items'));
      var ul = el('ul', 'diag-units');
      units.forEach(function (u) {
        var li = el('li', null, (u.order === 0 ? 'F' : u.order) + '. ' + u.title + ' — ' + u.sections.length + ' sections');
        ul.appendChild(li);
      });
      if (!units.length) ul.appendChild(el('li', 'bad', 'no data files loaded'));
      d.appendChild(ul);
      tbl.appendChild(d);
    });
    p.appendChild(tbl);

    var issues = C.issues();
    var det = el('details', 'ling');
    var sum = el('summary', 'ling-summary');
    sum.appendChild(el('span', 'ling-title', 'Loader messages (' + issues.length + ')'));
    sum.appendChild(el('span', 'ling-caret', '▾'));
    det.appendChild(sum);
    var box = el('div', 'ling-body');
    if (!issues.length) box.appendChild(U.para('No problems found — every data file parsed cleanly.', 'ling-p'));
    else issues.forEach(function (m) { box.appendChild(el('p', 'ling-p mono', m)); });
    det.appendChild(box);
    p.appendChild(det);

    var reload = U.button('Re-scan curriculum', 'btn btn-ghost btn-sm', function () {
      C.rebuild();
      render();
    });
    p.appendChild(reload);
    return p;
  }

  /* ================================================================ router */

  function parseHash() {
    var h = String(window.location.hash || '').replace(/^#/, '');
    if (h.charAt(0) === '/') h = h.slice(1);
    var parts = h.split('/').filter(function (s) { return s !== ''; }).map(decodeURIComponent);
    return parts;
  }

  function langFromSlug(s) {
    s = String(s || '').toLowerCase();
    if (s === 'korean' || s === 'ko') return 'korean';
    if (s === 'chinese' || s === 'zh' || s === 'mandarin') return 'chinese';
    return null;
  }

  function render() {
    var parts = parseHash();
    var view;
    syncWatchers.length = 0;    // the old settings panel is about to be discarded
    try {
      if (!parts.length) {
        view = viewHome();
      } else if (parts[0] === 'settings') {
        view = viewSettings();
      } else {
        var lang = langFromSlug(parts[0]);
        if (!lang) { view = viewHome(); }
        else if (parts.length === 1) { view = viewUnits(lang); }
        else if (parts[1] === 'review') { view = viewReview(lang); }
        else if (parts[1] === 'unit' && parts[2]) { view = viewUnit(lang, parts[2], parts[3]); }
        else { view = viewUnits(lang); }
      }
    } catch (e) {
      if (window.console) console.error('[WordGoblin] view error', e);
      view = section('crash');
      view.appendChild(el('h1', 'page-title', 'Something went wrong rendering this page'));
      view.appendChild(U.para('The rest of the app still works. Details: <b>' + U.escapeHtml(e && e.message) + '</b>'));
      var a = el('a', 'btn btn-primary', 'Back to the dashboard');
      a.href = '#/';
      view.appendChild(a);
    }

    A.stop();
    U.clear(app);
    app.appendChild(view);
    void view.offsetWidth;
    view.classList.add('entered');
    window.scrollTo(0, 0);
  }

  /* ========================================================== landing gate
   * First thing a new device sees: a full-screen cover requiring Google sign-in.
   * There is no way past it without a verified sign-in — no skip, no local mode —
   * and the backend only signs in accounts on its member whitelist (contract v5).
   * New members arrive via single-use invite links minted in the Apps Script editor:
   *   <app>/#invite=<token>&be=<base64url of the backend /exec URL>
   * Both values ride the URL FRAGMENT, which browsers never send to any server, so
   * the backend address stays out of request logs. Once passed (signedInAs in
   * settings, device-local), boots go straight in, so the installed PWA still opens
   * instantly offline on a device that already signed in.
   */

  var INVITE_SS_KEY = 'wordGoblin.invite';

  /** Stashes #invite=…&be=… from an invite link, then cleans the address bar. */
  function captureInviteLink() {
    var h = window.location.hash || '';
    var m = /[#&]invite=([^&]+)/.exec(h);
    if (!m) return;
    try { window.sessionStorage.setItem(INVITE_SS_KEY, decodeURIComponent(m[1])); } catch (e) {}
    var be = /[#&]be=([^&]+)/.exec(h);
    if (be) {
      try {
        var b64 = decodeURIComponent(be[1]).replace(/-/g, '+').replace(/_/g, '/');
        while (b64.length % 4) b64 += '=';
        var u = window.atob(b64).trim();
        if (/^https:\/\/script\.google\.com\/.+\/exec$/.test(u)) P.setSettings({ scriptUrl: u });
      } catch (e) { /* malformed be= — the URL field still works */ }
    }
    window.location.hash = '#/';
  }

  function pendingInvite() {
    try { return window.sessionStorage.getItem(INVITE_SS_KEY) || ''; } catch (e) { return ''; }
  }

  function clearInvite() {
    try { window.sessionStorage.removeItem(INVITE_SS_KEY); } catch (e) {}
  }

  function showLanding() {
    var ov = el('div', 'landing');
    ov.setAttribute('role', 'dialog');
    ov.setAttribute('aria-label', 'Sign in to Word Goblin');
    var inner = el('div', 'landing-inner');

    var hero = el('div', 'landing-hero');
    hero.appendChild(el('div', 'landing-mark', '書'));
    hero.appendChild(el('h1', 'landing-title', 'Word Goblin'));
    var nat = el('p', 'landing-native');
    var ko = el('span', 'native landing-ko', '한국어');
    A.attach(ko, '한국어', 'korean', { icon: false });
    var zh = el('span', 'native landing-zh', '中文');
    A.attach(zh, '中文', 'chinese', { icon: false });
    nat.appendChild(ko);
    nat.appendChild(el('span', 'landing-dot', '·'));
    nat.appendChild(zh);
    hero.appendChild(nat);
    hero.appendChild(el('p', 'landing-sub',
      'A textbook-grade Korean and Mandarin course with the etymology of every word. ' +
      'Sign in with Google and your progress, settings and daily mini-lessons follow you everywhere.'));
    inner.appendChild(hero);

    var card = el('div', 'landing-card');
    var gHost = el('div', 'gsi-btn landing-gsi');
    var note = el('p', 'field-hint landing-note');
    var status = el('p', 'form-status');
    status.setAttribute('role', 'status');
    card.appendChild(gHost);
    card.appendChild(note);
    card.appendChild(status);

    var defaults = window.WORDGOBLIN_DEFAULTS || {};

    var urlWrap = el('div', 'field landing-url');
    var urlLabel = el('label', 'field-label', 'Apps Script web-app URL');
    urlLabel.setAttribute('for', 'landing-scripturl');
    var url = el('input', 'input');
    url.type = 'url';
    url.id = 'landing-scripturl';
    url.placeholder = 'https://script.google.com/macros/s/…/exec';
    url.value = P.settings.scriptUrl || U.str(defaults.scriptUrl) || '';
    urlWrap.appendChild(urlLabel);
    urlWrap.appendChild(url);
    urlWrap.appendChild(U.para('Fills in automatically from an invite link. Owners: this is your backend from EMAIL-SETUP.md.', 'field-hint'));
    urlWrap.hidden = !P.settings.scriptUrl && !U.str(defaults.scriptUrl);
    if (urlWrap.hidden) {
      var reveal = U.button('Enter a backend URL by hand', 'btn btn-quiet btn-sm landing-reveal', function () {
        urlWrap.hidden = false;
        reveal.hidden = true;
      });
      card.appendChild(reveal);
    }
    card.appendChild(urlWrap);

    inner.appendChild(card);
    ov.appendChild(inner);

    function statusFn(msg, kind) {
      status.textContent = msg;
      status.className = 'form-status ' + (kind || '');
    }

    function dismiss() {
      ov.classList.add('leaving');
      setTimeout(function () {
        if (ov.parentNode) ov.parentNode.removeChild(ov);
        render();                        // a fresh sign-in may have merged cloud data
      }, 320);
    }

    function tryInit() {
      var u = url.value.trim();
      if (u !== P.settings.scriptUrl) P.setSettings({ scriptUrl: u });
      U.clear(gHost);
      if (!gsiPossibleHere()) {
        note.textContent = 'Google sign-in only works on the hosted (https) app — open ' +
          'https://sjiwoo.github.io/word-goblin/ to sign in. Copies opened from disk cannot be used.';
        return;
      }
      if (!u) {
        note.textContent = 'Word Goblin is invite-only: open the invite link you were sent and ' +
          'this page fills in by itself. Owners can enter their backend URL by hand instead.';
        return;
      }
      note.textContent = 'Checking your backend…';
      var cfgUrl = u + (u.indexOf('?') === -1 ? '?' : '&') + 'action=config';
      window.fetch(cfgUrl).then(function (r) { return r.json(); }).then(function (cfg) {
        var cid = cfg && cfg.googleClientId;
        if (!cid) {
          note.textContent = 'This backend does not have Google sign-in enabled yet — run setupGoogleLogin() in the Apps Script editor (EMAIL-SETUP.md, "One-click Google sign-in"). Sign-in is required to enter.';
          return;
        }
        renderGoogleButton(cid, gHost, function (resp) {
          completeGoogleLogin(resp, statusFn, function (ok) { if (ok) dismiss(); });
        }, function (ok) {
          note.textContent = ok
            ? 'Sign in with the Google account whose e-mail you use for Word Goblin.'
            : 'Could not load Google sign-in — check your connection, then reload this page.';
        });
      })['catch'](function () {
        note.textContent = 'Could not reach that backend. If the URL is right (ends in /exec) and you are online, ' +
          'the usual cause is the deployment’s access setting: in script.google.com open Deploy → Manage ' +
          'deployments → ✏️, set “Execute as: Me” and “Who has access: Anyone”, pick New version, Deploy. ' +
          'Test: open the URL with ?action=config added, in a private window — you should see JSON, not a sign-in page.';
      });
    }

    url.addEventListener('change', tryInit);
    tryInit();
    document.body.appendChild(ov);
  }

  /* ================================================================== boot */

  /**
   * Service workers only exist over http/https — on file:// the app must run exactly as
   * before, so registration is skipped entirely there (no errors, no console noise).
   * 'sw.js' is relative, so it registers correctly from a GitHub Pages subpath.
   */
  function registerServiceWorker() {
    var proto = window.location.protocol;
    if (proto !== 'https:' && proto !== 'http:') return;
    if (!('serviceWorker' in navigator)) return;
    try {
      navigator.serviceWorker.register('sw.js')['catch'](function (e) {
        if (window.console) console.warn('[WordGoblin] service worker not registered', e && e.message);
      });
    } catch (e) { /* ignore */ }
  }

  function boot() {
    app = document.getElementById('app');
    if (!app) {
      app = el('main', 'app');
      app.id = 'app';
      document.body.appendChild(app);
    }
    buildChrome();
    applyTheme();
    C.rebuild();
    captureInviteLink();               // before routing: #invite=… is not a route

    var footer = el('footer', 'sitefoot');
    footer.appendChild(el('span', null, 'Word Goblin · offline-first · curriculum after KLEAR / Sogang / Yonsei / TTMIK and Integrated Chinese / HSK / NPCR'));
    document.body.appendChild(footer);

    window.addEventListener('hashchange', render);
    if (!window.location.hash) window.location.hash = '#/';
    render();

    /* Mini-lesson queue: refresh once a day at boot, and after section completions
       (throttled to one upload an hour). Both are fire-and-forget. */
    P.onSectionComplete(syncAfterSectionComplete);
    if (P.settings.subscribed && P.settings.scriptUrl && P.settings.email && !P.syncedToday()) {
      setTimeout(function () { syncQueues('boot'); }, 1200);
    }

    /* Cross-device progress sync: pull + merge + push at boot, then push after study
       activity (coalesced, ≤1 per 5 min) and once more as the page goes away.
       AI-tutor config changes (key/model) ride the same push. */
    P.subscribe(schedulePush);
    if (window.FableTutor) window.FableTutor.onConfigChange = schedulePush;
    if (syncActive()) setTimeout(function () { syncNow(); }, 400);
    window.addEventListener('pagehide', beaconPush);
    document.addEventListener('visibilitychange', function () {
      if (document.visibilityState === 'hidden') beaconPush();
    });

    registerServiceWorker();

    // Landing gate: until this device has signed in with Google, a full-screen cover
    // sits over the app. 'local' is the retired skip marker — those devices re-gate.
    if (!P.settings.signedInAs || P.settings.signedInAs === 'local') showLanding();

    // Voices arrive asynchronously; refresh the Settings hints when they do.
    A.onReady(function () {
      if (parseHash()[0] === 'settings') { /* status rows re-paint themselves via onReady */ }
    });
    document.body.classList.add('ready');
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
