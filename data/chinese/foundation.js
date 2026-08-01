window.CURRICULUM = window.CURRICULUM || {};
(function () {
  const C = window.CURRICULUM;
  C.chinese = C.chinese || { units: [] };
  C.chinese.units.push({
    id: "zh-00",
    order: 0,
    title: "Foundation: Pinyin, Tones & Characters",
    titleNative: "拼音、声调与汉字",
    subtitle: "The sound system of Mandarin and the logic of the writing system.",
    textbookBasis: [
      "Integrated Chinese Level 1 Part 1 (4th ed.), Introduction: Pinyin & Pronunciation",
      "HSK Standard Course 1, Pronunciation lessons 1–5",
      "New Practical Chinese Reader 1, Lessons 1–6 (phonetics section)"
    ],
    overview: [
      "Mandarin Chinese has a small, tightly organised sound system. Every syllable is built from at most three parts: an <b>initial</b> (the opening consonant), a <b>final</b> (the vowel core plus any ending), and a <b>tone</b> (the pitch contour laid over the whole syllable). There are only about 400 distinct initial-plus-final combinations, and roughly 1,300 once tone is counted. Learning that closed inventory well, at the very start, is the single highest-return investment a beginner can make.",
      "The romanisation used in this course is <b>Hanyu Pinyin</b>, adopted by the People's Republic of China on 11 February 1958 and made the international standard for Chinese romanisation by ISO in 1982. Pinyin is a teaching and transcription tool, not the real writing system: it is a set of scaffolding that comes down once the characters are in place. Every unit after this one gives you characters first and pinyin as support.",
      "The second half of this module introduces <b>汉字 hànzì</b>, Chinese characters. Characters are not pictures of ideas, and they are not an alphabet. The great majority are <i>phono-semantic compounds</i>: one component hints at meaning, another hints at sound. Once you can see that structure, thousands of characters stop being arbitrary shapes and start being readable machinery. You will also learn the standard stroke types, the stroke-order rules that govern every character, and the radical system that dictionaries are built on."
    ],
    sections: [
      {
        type: "notes",
        title: "How Chinese has been romanised: the road to Pinyin",
        body: [
          "Chinese has been written alphabetically by outsiders for over four centuries. The Jesuit missionaries Matteo Ricci and Nicolas Trigault produced the first systematic Latin transcriptions around 1600–1626. In the nineteenth century the British diplomats Thomas Wade and Herbert Giles produced the <b>Wade-Giles</b> system, which dominated English-language scholarship until the 1980s and still survives in a few frozen spellings: Peking, Tsingtao, Kuomintang, Chiang Kai-shek, tai chi.",
          "Chinese-designed systems came next. <b>Zhuyin fuhao</b> (注音符号), often called Bopomofo after its first four symbols ㄅㄆㄇㄈ, was adopted in 1918. It uses invented symbols derived from character fragments rather than Latin letters, and it is still the standard teaching script for children in Taiwan. <b>Gwoyeu Romatzyh</b> (1928) spelled tone into the letters themselves rather than using diacritics, which made it precise but very hard to learn.",
          "<b>Hanyu Pinyin</b> was developed between 1955 and 1957 by a committee whose best-known member was the economist-turned-linguist <b>Zhou Youguang</b> (周有光, 1906–2017), later called the father of Pinyin. It was promulgated by the National People's Congress on 11 February 1958. Its design goals were explicitly practical: teach standard pronunciation to a population speaking hundreds of mutually unintelligible varieties, support literacy campaigns, and enable telegraphy and indexing. The United Nations adopted it in 1986; today it is also how nearly everyone types Chinese on a phone or computer.",
          "One warning that saves months of trouble: <b>Pinyin letters are not English letters</b>. The letters q, x, c, z, zh and the vowel written i all have values that have nothing to do with their English uses. Read pinyin as a code for Mandarin sounds, never as an English spelling."
        ]
      },
      {
        type: "grammar",
        title: "Initials — 声母 shēngmǔ (the 21 opening consonants)",
        points: [
          {
            name: "Aspiration, not voicing: b/p, d/t, g/k",
            pattern: "b d g = unaspirated · p t k = aspirated",
            explanation: [
              "English distinguishes <i>b</i> from <i>p</i> mainly by <b>voicing</b>: the vocal folds vibrate during English <i>b</i>. Mandarin does not use voicing for this contrast at all. Both b and p in pinyin are voiceless; what separates them is <b>aspiration</b>, the puff of air released after the consonant.",
              "Pinyin <b>b</b>, <b>d</b>, <b>g</b> are unaspirated: no puff, a clean tight release. They sound to an English ear roughly like the p, t, k in <i>spy</i>, <i>sty</i>, <i>sky</i>, where English aspiration is suppressed after s. Pinyin <b>p</b>, <b>t</b>, <b>k</b> are strongly aspirated, more forcefully than English p, t, k at the start of a word.",
              "Test yourself with a sheet of paper held in front of your mouth. Saying <i>pà</i> should visibly move the paper; saying <i>bà</i> should barely move it at all. This same aspirated/unaspirated pairing runs through three more pairs later on: j/q, zh/ch, and z/c."
            ],
            examples: [
              { text: "爸 / 怕", roman: "bà / pà", gloss: "dad / to fear — unaspirated vs aspirated" },
              { text: "大 / 他", roman: "dà / tā", gloss: "big / he — the d/t pair" },
              { text: "高 / 开", roman: "gāo / kāi", gloss: "tall / to open — the g/k pair" },
              { text: "m f n l h", roman: "mā fā nà lā hē", gloss: "the five initials that behave much as in English (h is rougher, from the back of the throat)" }
            ]
          },
          {
            name: "The palatal series j, q, x",
            pattern: "j q x + i / ü only",
            explanation: [
              "These three are made with the tongue blade flat against the hard palate, the tongue tip resting down behind the lower teeth. <b>j</b> is unaspirated, <b>q</b> is aspirated, <b>x</b> is the matching fricative. Approximate English starting points: j as in <i>jeep</i> but lighter and unvoiced, q roughly like the <i>ch</i> of <i>cheap</i>, x roughly like the <i>sh</i> of <i>sheep</i> — but all three should be brighter and further forward than their English models.",
              "j, q and x can only be followed by the high front vowels <b>i</b> and <b>ü</b> (or finals beginning with them). This is a hard restriction with a very useful consequence: because ü is the only rounded vowel that can appear there and u never can, <b>the umlaut is dropped in spelling</b> after j, q, x. So <i>ju</i>, <i>qu</i>, <i>xu</i> are pronounced jü, qü, xü. Compare <i>nü</i> and <i>lü</i>, where n and l can take both u and ü, so the umlaut must be written.",
              "The palatals are historically recent. In Middle Chinese they did not exist as a separate series: modern jī, qī, xī come from two older sources, velars (k-, kʰ-, x-) and dental sibilants (ts-, tsʰ-, s-), which both palatalised before high front vowels around the seventeenth and eighteenth centuries. This is why Peking became Beijing and Nanking became Nanjing — the old spellings preserve the pre-palatalisation velar."
            ],
            examples: [
              { text: "鸡 / 七 / 西", roman: "jī / qī / xī", gloss: "chicken / seven / west — the three palatals with the same final" },
              { text: "居 / 去 / 需", roman: "jū / qù / xū", gloss: "to reside / to go / to need — spelled with u, pronounced ü" },
              { text: "女 / 绿", roman: "nǚ / lǜ", gloss: "woman / green — here the umlaut must be written" }
            ]
          },
          {
            name: "The retroflex series zh, ch, sh, r",
            pattern: "zh ch sh r — tongue tip curled back",
            explanation: [
              "Curl the tongue tip up and slightly back toward the ridge behind your upper teeth, then release. <b>zh</b> is unaspirated (like the <i>j</i> of <i>jerk</i> with the tongue further back), <b>ch</b> is its aspirated partner, <b>sh</b> is the fricative, and <b>r</b> is the voiced counterpart of sh — closer to the <i>s</i> in <i>measure</i> pronounced with a curled tongue than to an English r.",
              "These four are the diagnostic sounds of standard northern Mandarin. Many southern speakers, and most Taiwanese speakers, merge them with the dental series z, c, s. Standard Mandarin (普通话 pǔtōnghuà) keeps them distinct, and Chinese input methods assume the distinction, so learn it now: 十 shí <i>ten</i> versus 四 sì <i>four</i> is a contrast you will need every day.",
              "After zh, ch, sh, r (and after z, c, s), the letter <b>i</b> does not represent a vowel like <i>ee</i>. It is a placeholder for a syllabic buzz that simply continues the consonant. So <i>zhi</i>, <i>chi</i>, <i>shi</i>, <i>ri</i> rhyme with nothing in English and definitely not with <i>see</i>."
            ],
            examples: [
              { text: "知 / 吃 / 十 / 日", roman: "zhī / chī / shí / rì", gloss: "to know / to eat / ten / sun, day" },
              { text: "四 / 十 / 是", roman: "sì / shí / shì", gloss: "four / ten / to be — the classic dental-vs-retroflex drill" },
              { text: "中国人", roman: "Zhōngguórén", gloss: "Chinese person — two retroflexes in one word" }
            ]
          },
          {
            name: "The dental sibilants z, c, s",
            pattern: "z c s — tongue tip at the upper teeth",
            explanation: [
              "The tongue tip touches the back of the upper front teeth, flat and forward. <b>z</b> is the unaspirated affricate, like the <i>ds</i> in <i>beds</i>; <b>c</b> is its aspirated partner, like the <i>ts</i> in <i>cats</i> but with a much stronger puff; <b>s</b> is a plain s as in English.",
              "The letter c is the single most common pinyin misreading among English speakers. It is never a k sound and never an s sound: <i>cài</i> (vegetable) begins ts-, not k- or s-. Likewise z is not the buzzing z of English <i>zoo</i>.",
              "Together with the palatals and the retroflexes, this gives Mandarin three parallel sibilant series in the same aspirated/unaspirated/fricative shape: <b>z c s</b> (dental), <b>zh ch sh</b> (retroflex), <b>j q x</b> (palatal). Nine consonants in one tidy grid — memorise the grid, not nine separate facts."
            ],
            examples: [
              { text: "字 / 次 / 四", roman: "zì / cì / sì", gloss: "character / time, occurrence / four" },
              { text: "菜", roman: "cài", gloss: "vegetable, dish — begins ts-, never k-" },
              { text: "早 / 草", roman: "zǎo / cǎo", gloss: "early / grass — unaspirated vs aspirated" }
            ]
          }
        ]
      },
      {
        type: "grammar",
        title: "Finals — 韵母 yùnmǔ (the vowel systems and spelling rules)",
        points: [
          {
            name: "Simple and compound finals",
            pattern: "a o e i u ü · ai ei ao ou · ia ie ua uo üe iao iou uai uei",
            explanation: [
              "The six simple finals are <b>a</b> (open, as in <i>father</i>), <b>o</b> (rounded, close to <i>aw</i> and in practice usually preceded by a w-glide), <b>e</b> (an unrounded mid-back vowel, roughly the <i>u</i> of <i>duh</i>, not the <i>e</i> of <i>bed</i>), <b>i</b> (as in <i>machine</i>), <b>u</b> (as in <i>rule</i>) and <b>ü</b> (say <i>ee</i>, then round your lips without moving your tongue — the French <i>u</i> or German <i>ü</i>).",
              "Compound finals are glides from one vowel position to another and must be said as a single smooth movement, never as two syllables: <b>ai</b>, <b>ei</b>, <b>ao</b>, <b>ou</b>. Adding a leading glide gives the rest: <b>ia, ie, iao, iou</b>; <b>ua, uo, uai, uei</b>; <b>üe</b>.",
              "Two traps. First, <b>e</b> changes value inside compounds: alone it is the <i>duh</i> vowel, but in <i>ei</i>, <i>ie</i> and <i>üe</i> it is a front <i>eh</i>. Second, <b>o</b> after b, p, m, f is pronounced with an inserted u-glide, so <i>bo</i> sounds like <i>buo</i> — which is why <i>bo</i> and <i>buo</i> never contrast."
            ],
            examples: [
              { text: "他 / 我 / 饿", roman: "tā / wǒ / è", gloss: "he / I / hungry — the simple finals a, uo, e" },
              { text: "买 / 给 / 好 / 都", roman: "mǎi / gěi / hǎo / dōu", gloss: "buy / give / good / all — ai, ei, ao, ou" },
              { text: "月 / 学 / 雪", roman: "yuè / xué / xuě", gloss: "moon / study / snow — the üe final, umlaut hidden after x and y" }
            ]
          },
          {
            name: "Nasal finals: -n versus -ng",
            pattern: "an en in ün · ang eng ing ong iong",
            explanation: [
              "Mandarin syllables can end in only two consonants, the alveolar nasal <b>-n</b> (tongue tip at the ridge behind the teeth, as in English <i>sun</i>) and the velar nasal <b>-ng</b> (tongue back against the soft palate, as in English <i>sung</i>). The contrast carries real meaning and cannot be skipped.",
              "The vowel usually shifts as well as the nasal, which is your best practical cue: <b>an</b> has a fronter, brighter a than <b>ang</b>, whose a is deep and back; <b>en</b> is a short neutral vowel while <b>eng</b> has a fuller, more open one. If you can hear the vowel difference you will hear the nasal difference.",
              "This -n / -ng pair is all that remains of a richer Middle Chinese system that also allowed -m endings and the stop endings -p, -t, -k. Those survived into Cantonese, Korean and Vietnamese but were lost in Mandarin between roughly the twelfth and sixteenth centuries. It is why 十 is <i>shí</i> in Mandarin but <i>sap6</i> in Cantonese and <i>sip</i> (십) in Korean."
            ],
            examples: [
              { text: "山 / 上", roman: "shān / shàng", gloss: "mountain / above — the -n / -ng contrast" },
              { text: "很 / 冷", roman: "hěn / lěng", gloss: "very / cold — en versus eng" },
              { text: "中 / 用", roman: "zhōng / yòng", gloss: "middle / to use — the ong and iong finals" }
            ]
          },
          {
            name: "Spelling rules you must know to read pinyin",
            pattern: "i- → yi- · u- → wu- · ü- → yu- · iou → iu · uei → ui · uen → un",
            explanation: [
              "Pinyin has a handful of purely orthographic conventions. When a final beginning with <b>i</b> stands alone as a whole syllable, it is written with y: <i>i</i> → <b>yi</b>, <i>ia</i> → <b>ya</b>, <i>ie</i> → <b>ye</b>, <i>iou</i> → <b>you</b>. When a final beginning with <b>u</b> stands alone, it is written with w: <i>u</i> → <b>wu</b>, <i>ua</i> → <b>wa</b>, <i>uo</i> → <b>wo</b>, <i>uei</i> → <b>wei</b>. When <b>ü</b> stands alone it becomes <b>yu</b>, and the umlaut disappears.",
              "Three finals are contracted when an initial precedes them: <b>iou → iu</b> (liù, not liou), <b>uei → ui</b> (duì, not duei), <b>uen → un</b> (chūn, not chuen). The dropped vowel is still lightly pronounced, which is why <i>liù</i> is not simply <i>lyu</i>.",
              "Finally, the <b>apostrophe</b> separates syllables when a syllable beginning with a, o or e follows another, preventing misreading: 西安 is <i>Xī'ān</i> (two syllables, the city) not <i>xiān</i> (one syllable). Compare 皮袄 <i>pí'ǎo</i> and 票 <i>piào</i>."
            ],
            examples: [
              { text: "有 / 六", roman: "yǒu / liù", gloss: "to have / six — the same final iou, spelled two ways" },
              { text: "对 / 位", roman: "duì / wèi", gloss: "correct / position — uei contracted and standing alone" },
              { text: "西安", roman: "Xī'ān", gloss: "Xi'an (city) — the apostrophe blocks the reading xiān" }
            ]
          },
          {
            name: "Where the tone mark goes",
            pattern: "a > o > e > i > u > ü; in iu and ui, mark the last vowel",
            explanation: [
              "A tone mark sits on the main vowel of the final. The priority order is simple: if there is an <b>a</b>, it takes the mark (hǎo, xiǎng). Otherwise if there is an <b>o</b> or an <b>e</b>, that takes it (gǒu, xiè). Otherwise the mark goes on <b>i</b>, <b>u</b> or <b>ü</b>.",
              "The one special case is the contracted finals <b>iu</b> and <b>ui</b>, where two candidates sit side by side. The rule is to mark the <b>second</b> vowel: liù, jiǔ, duì, guì. This matches the phonetics, since the contracted vowel is the one that carries the syllable's weight.",
              "When i takes a tone mark, its dot is replaced: nǐ, jī, xǐ. And a syllable with no mark at all is not toneless by accident — it is the <b>neutral tone</b>, a real and meaningful category covered in the next section."
            ],
            examples: [
              { text: "好 / 想", roman: "hǎo / xiǎng", gloss: "good / to want — a always wins" },
              { text: "九 / 贵", roman: "jiǔ / guì", gloss: "nine / expensive — iu and ui mark the second vowel" },
              { text: "你 / 学", roman: "nǐ / xué", gloss: "you / to study — i loses its dot; e beats u" }
            ]
          }
        ]
      },
      {
        type: "grammar",
        title: "The four tones and the neutral tone — 声调 shēngdiào",
        points: [
          {
            name: "The four full tones",
            pattern: "1st ā high level · 2nd á rising · 3rd ǎ low dipping · 4th à falling",
            explanation: [
              "Mandarin is a tone language: pitch contour is part of a word's identity, exactly as consonants are. Changing the tone changes the word, not the emotion. The classic demonstration syllable is <i>ma</i>: <b>mā</b> 妈 mother, <b>má</b> 麻 hemp, <b>mǎ</b> 马 horse, <b>mà</b> 骂 to scold, plus neutral <b>ma</b> 吗, the question particle.",
              "Linguists describe the contours with a 1-to-5 pitch scale where 5 is the top of your comfortable range. <b>First tone</b> is 55: high and flat, held steady like a sung note. <b>Second tone</b> is 35: rising from mid to high, like the English intonation of a surprised <i>What?</i> <b>Third tone</b> is 214 in careful citation: it drops low, sits there, then rises. <b>Fourth tone</b> is 51: a sharp fall from the top, like a firm English command, <i>Stop!</i>",
              "The most common beginner errors are letting first tone sag, making second tone start too high so it cannot rise, and over-performing the final rise of third tone. In real connected speech, third tone is mostly pronounced as a <b>half third tone</b> (21): low and flat, with no rise at all. The full dipping 214 appears mainly when a third-tone syllable is said alone or at the end of a phrase."
            ],
            examples: [
              { text: "妈 麻 马 骂 吗", roman: "mā má mǎ mà ma", gloss: "mother / hemp / horse / to scold / question particle" },
              { text: "汤 糖 躺 烫", roman: "tāng táng tǎng tàng", gloss: "soup / sugar / to lie down / scalding" },
              { text: "买 / 卖", roman: "mǎi / mài", gloss: "to buy / to sell — one tone apart, opposite meanings" },
              { text: "问 / 吻", roman: "wèn / wěn", gloss: "to ask / to kiss — a contrast worth getting right" }
            ]
          },
          {
            name: "The neutral tone — 轻声 qīngshēng",
            pattern: "written with no mark: māma, xièxie, de, le, ma",
            explanation: [
              "The neutral tone is short, light and unstressed, and it carries no contour of its own. Its actual pitch is determined by the tone before it: after first tone it lands mid-high, after second mid, after third relatively high, and after fourth low. You do not have to memorise those values — say the syllable quickly and weakly and it will fall into place.",
              "Neutral tone appears in four main places: on <b>grammatical particles</b> (的 de, 了 le, 吗 ma, 呢 ne, 吧 ba); on the <b>second syllable of many reduplicated kinship terms</b> (妈妈 māma, 爸爸 bàba, 哥哥 gēge); on certain <b>suffixes</b> (子 in 桌子 zhuōzi, 头 in 木头 mùtou, plural 们 in 我们 wǒmen); and on the second half of some common compounds (朋友 péngyou, 谢谢 xièxie, 东西 dōngxi).",
              "It is not optional decoration. 东西 <i>dōngxi</i> with a neutral second syllable means <i>thing, object</i>, while <i>dōngxī</i> with a full first tone means <i>east and west</i>. Similarly 大意 <i>dàyì</i> is <i>main idea</i> but <i>dàyi</i> is <i>careless</i>."
            ],
            examples: [
              { text: "妈妈", roman: "māma", gloss: "mum — second syllable neutral" },
              { text: "谢谢", roman: "xièxie", gloss: "thank you" },
              { text: "你好吗？", roman: "Nǐ hǎo ma?", gloss: "How are you? — the particle 吗 is neutral" },
              { text: "东西", roman: "dōngxi", gloss: "thing — versus dōngxī, east and west" }
            ]
          },
          {
            name: "Third-tone sandhi — 三声变调",
            pattern: "3 + 3 → 2 + 3 · 3 + (1/2/4/neutral) → half-third + tone",
            explanation: [
              "<i>Sandhi</i> is a Sanskrit grammatical term, literally <i>joining</i>, used in linguistics for sound changes at word boundaries. Mandarin's most important instance concerns the third tone. When two third tones are adjacent, <b>the first becomes a second tone</b>. 你好 is written nǐ hǎo but said <i>ní hǎo</i>; 很好 hěn hǎo is said <i>hén hǎo</i>; 你有 nǐ yǒu is said <i>ní yǒu</i>.",
              "This is a pronunciation rule only. Pinyin is always written with the underlying third-tone marks, and native speakers hear the word as third tone even while producing a rising contour. Do not rewrite the marks; just apply the rule when you speak.",
              "Before any other tone, a third tone becomes the <b>half third tone</b>: it falls low and stops, without the rise. 好吃 hǎochī, 老师 lǎoshī, 很忙 hěn máng, 可是 kěshì all begin with a low flat syllable. In strings of three or more third tones the grouping decides the outcome: 我很好 is normally <i>wó hén hǎo</i>, while 我想买 groups as <i>wǒ xiáng mǎi</i> because 想买 is the tighter unit."
            ],
            examples: [
              { text: "你好", roman: "nǐ hǎo → ní hǎo", gloss: "hello — the first third tone rises" },
              { text: "很好", roman: "hěn hǎo → hén hǎo", gloss: "very good" },
              { text: "老师", roman: "lǎoshī", gloss: "teacher — half third tone before a first tone" },
              { text: "我很好。", roman: "Wǒ hěn hǎo. → Wó hén hǎo.", gloss: "I am fine. — three third tones in a row" }
            ]
          },
          {
            name: "The tone changes of 不 bù and 一 yī",
            pattern: "不 + 4th → bú · 一 + 4th → yí · 一 + 1/2/3 → yì",
            explanation: [
              "Two very frequent words carry their own sandhi rules. The negator <b>不</b> is basically fourth tone, <i>bù</i>, but before another fourth tone it becomes second tone: 不是 <i>bú shì</i>, 不要 <i>bú yào</i>, 不对 <i>bú duì</i>, 不去 <i>bú qù</i>. Before first, second or third tones it stays <i>bù</i>: 不吃 bù chī, 不忙 bù máng, 不好 bù hǎo. Sandwiched inside a verb it also goes neutral: 好不好 hǎo bu hǎo.",
              "The number <b>一</b> is first tone, <i>yī</i>, when counting, when reciting digits (phone numbers, years, room numbers) and when it is the last syllable of a word: 一, 二, 三; 十一 shíyī; 第一 dì-yī. As a modifier before a measure word or noun it changes: before a fourth tone it becomes <b>yí</b> (一个 yí gè, 一样 yíyàng, 一定 yídìng), and before a first, second or third tone it becomes <b>yì</b> (一天 yì tiān, 一年 yì nián, 一起 yìqǐ, 一点 yìdiǎn).",
              "Note that 一个 yí gè looks like an exception, since 个 is usually pronounced neutral. It is not: 个 is underlyingly fourth tone (gè), and sandhi applies to the underlying tone. As with third-tone sandhi, dictionaries and textbooks vary on whether to print the changed marks; this course prints them where a set phrase is being taught, because that is how you will hear it."
            ],
            examples: [
              { text: "不是 / 不去", roman: "bú shì / bú qù", gloss: "is not / does not go — 不 rises before a fourth tone" },
              { text: "不好 / 不忙", roman: "bù hǎo / bù máng", gloss: "not good / not busy — 不 keeps its fourth tone" },
              { text: "一个 / 一样", roman: "yí gè / yíyàng", gloss: "one item / the same — 一 becomes yí" },
              { text: "一起 / 一天", roman: "yìqǐ / yì tiān", gloss: "together / one day — 一 becomes yì" }
            ]
          }
        ]
      },
      {
        type: "grammar",
        title: "Characters — 汉字 hànzì: strokes, order, radicals, structure",
        points: [
          {
            name: "The basic strokes — 笔画 bǐhuà",
            pattern: "橫 héng ㄧ · 竖 shù 丨 · 撇 piě 丿 · 捺 nà ㇏ · 点 diǎn 丶 · 提 tí ㇀ · 折 zhé · 钩 gōu",
            explanation: [
              "Every character, however complex, is assembled from a closed set of strokes. The six primary ones are the <b>horizontal</b> 横 (left to right), the <b>vertical</b> 竖 (top to bottom), the <b>left-falling</b> 撇 (down and to the left), the <b>right-falling</b> 捺 (down and to the right, thickening at the end), the <b>dot</b> 点, and the <b>rising</b> 提 (a short upward flick, used where a component is compressed).",
              "Compound strokes are built by adding a <b>turn</b> 折 or a <b>hook</b> 钩 without lifting the brush: 横折 in 口, 竖钩 in 小, 横折钩 in 月, 横撇弯钩 in the 阝 component. Chinese schoolchildren learn about thirty named compound strokes, but recognising the six primaries plus turns and hooks is enough to analyse anything you meet as a beginner.",
              "Stroke count matters practically. Paper dictionaries index characters by radical plus residual stroke count, handwriting-recognition input relies on stroke count and direction, and the standard character sets are officially defined stroke by stroke. Counting strokes correctly is a real skill: 我 is 7 strokes, 好 is 6, 学 is 8, 谢 is 12."
            ],
            examples: [
              { text: "一", roman: "yī", gloss: "one — a single horizontal 横" },
              { text: "十", roman: "shí", gloss: "ten — horizontal then vertical, 2 strokes" },
              { text: "小", roman: "xiǎo", gloss: "small — vertical-with-hook, then dot left, then dot right" },
              { text: "口", roman: "kǒu", gloss: "mouth — 3 strokes, not 4: the top-right corner is one turning stroke" }
            ]
          },
          {
            name: "Stroke order — 笔顺 bǐshùn",
            pattern: "top→bottom · left→right · horizontal before vertical · outside before inside · close the box last",
            explanation: [
              "Stroke order is not etiquette; it is what makes characters legible when written quickly, and it is what handwriting input on phones expects. The core rules, in priority order, are: write from <b>top to bottom</b>; write from <b>left to right</b>; write <b>horizontal before crossing vertical</b> (十 is 一 then 丨); write <b>left-falling before right-falling</b> (人 is 丿 then ㇏); write the <b>outside enclosure before the inside</b>, and <b>close the bottom of a box last</b> (国 is 冂-frame, then 玉, then the closing 一).",
              "There are a few learnable exceptions. A <b>centre vertical goes first</b> in symmetric characters like 小 and 水. A <b>through-stroke that pierces the whole character goes last</b>, as with the long vertical of 中 and the long horizontal of 母. A <b>top or upper-left dot goes first</b> but a <b>right-side or inside dot goes last</b>, which is why the dot of 玉 is written at the very end.",
              "Writing characters by hand, in the correct order, is still the fastest way to make them stick. The physical sequence encodes the component structure, so a character written correctly a dozen times becomes a single motor gesture rather than a picture you have to reconstruct from memory."
            ],
            examples: [
              { text: "十", roman: "shí", gloss: "ten — horizontal, then vertical" },
              { text: "人", roman: "rén", gloss: "person — left-falling, then right-falling" },
              { text: "木", roman: "mù", gloss: "tree — 一 丨 丿 ㇏, four strokes in that order" },
              { text: "国", roman: "guó", gloss: "country — frame first, 玉 inside, bottom line last" }
            ]
          },
          {
            name: "Radicals — 部首 bùshǒu",
            pattern: "semantic component + position (氵left · 艹top · 心bottom · 辶wrap)",
            explanation: [
              "A <b>radical</b> is the component under which a character is filed in a dictionary, and in most cases it is also the character's semantic hint. The standard modern list has 214 radicals, fixed by the <i>Kangxi Dictionary</i> (康熙字典) of 1716; simplified-character dictionaries use a reduced list of about 189–201. Learning the fifty most common radicals gives you a reading foothold in thousands of characters.",
              "Many radicals have a compressed <b>combining form</b> that differs from the free-standing character. 水 <i>water</i> becomes 氵 on the left (河, 海, 洗); 人 <i>person</i> becomes 亻 (你, 他, 们); 手 <i>hand</i> becomes 扌 (打, 拿, 找); 心 <i>heart</i> becomes 忄 on the left (忙, 快) but stays 心 at the bottom (想, 意); 火 <i>fire</i> becomes 灬 underneath (热, 点); 言 <i>speech</i> is simplified to 讠 (说, 语, 请).",
              "Radicals let you predict meaning zones before you know a word. Seeing 氵 tells you the character is probably about liquid; 木 about trees, wood or wooden things; 忄 about emotions and mental states; 讠 about speaking; 钅 about metal; 女 about women or kinship (though also, historically, a great deal of social bias baked into the script). This is a prediction, not a guarantee — some radicals are purely graphic assignments made for filing convenience."
            ],
            examples: [
              { text: "河 海 洗 汉", roman: "hé hǎi xǐ hàn", gloss: "river / sea / to wash / Han — all under the water radical 氵" },
              { text: "你 他 们 住", roman: "nǐ tā men zhù", gloss: "you / he / plural marker / to live — the person radical 亻" },
              { text: "说 语 请 谢", roman: "shuō yǔ qǐng xiè", gloss: "to speak / language / please / to thank — the speech radical 讠" },
              { text: "忙 快 想 意", roman: "máng kuài xiǎng yì", gloss: "busy / fast / to think / meaning — the heart radical 忄 and 心" }
            ]
          },
          {
            name: "How characters are built — the 六书 liùshū categories",
            pattern: "pictograph · indicative · compound ideograph · phono-semantic (≈80–90%) · loan · derivative",
            explanation: [
              "The traditional analysis, set out by Xu Shen (许慎) in the <i>Shuowen Jiezi</i> (说文解字) of about 100 CE, sorts characters into six types. <b>Pictographs</b> 象形 are stylised drawings: 日 sun, 月 moon, 山 mountain, 木 tree, 人 person. <b>Indicatives</b> 指事 use abstract marks for abstract things: 一 二 三, 上 above, 下 below, 中 middle. <b>Compound ideographs</b> 会意 join two meanings: 明 <i>bright</i> from sun plus moon, 休 <i>rest</i> from a person beside a tree, 林 <i>woods</i> from two trees.",
              "The category that actually matters most is the fourth. <b>Phono-semantic compounds</b> 形声 pair a <b>semantic</b> component with a <b>phonetic</b> one, and they account for roughly 80–90% of all characters in general use. 河 hé <i>river</i> is 氵 water plus 可 kě as phonetic; 妈 mā <i>mother</i> is 女 woman plus 马 mǎ as phonetic; 清 qīng <i>clear</i> is 氵 plus 青 qīng; 请 qǐng <i>please</i> is 讠 plus the same 青; 情 qíng <i>feeling</i> is 忄 plus 青. Learn one phonetic series and you get a family of characters at once.",
              "The last two categories are about usage rather than shape. <b>Loans</b> 假借 are rebus borrowings: an existing character is hijacked for an unrelated word that merely sounded the same, which is how 来 (originally a picture of a wheat plant) came to mean <i>come</i>, and how 不 came to mean <i>not</i>. <b>Derivative cognates</b> 转注 is the vaguest category and scholars still disagree on what Xu Shen meant by it.",
              "One caution for the whole system: sound change has eroded many phonetic hints over two thousand years. 每 měi is the phonetic in 海 hǎi and 梅 méi — obvious in Old Chinese, less so today. Treat a phonetic component as a clue to a family, not as a reliable pronunciation guide, and never trust a folk explanation that reads a modern moral into an ancient shape."
            ],
            examples: [
              { text: "日 月 山 木", roman: "rì yuè shān mù", gloss: "pictographs: sun, moon, mountain, tree" },
              { text: "一 二 三 上 下", roman: "yī èr sān shàng xià", gloss: "indicatives: abstract marks" },
              { text: "明 林 休", roman: "míng lín xiū", gloss: "compound ideographs: bright, woods, to rest" },
              { text: "清 请 情 晴", roman: "qīng qǐng qíng qíng", gloss: "phono-semantic family: all share the phonetic 青 qīng" }
            ]
          }
        ]
      },
      {
        type: "vocab",
        title: "Characters to know from day one",
        items: [
          {
            term: "一",
            roman: "yī",
            gloss: "one",
            pos: "number",
            example: { text: "一个人。", roman: "Yí gè rén.", gloss: "One person." },
            linguistics: {
              origin: "indicative (指事)",
              etymology: [
                "The simplest character in the script: a single horizontal tally stroke standing for the quantity one. 二 and 三 extend the same logic with two and three strokes. The form is unchanged from the oracle-bone inscriptions of roughly 1200 BCE to today, making it one of the most stable graphs in continuous human use.",
                "In accounting contexts a completely different character, 壹, is used instead, because a plain 一 can be altered into 二 or 三 with a stroke of the pen. This anti-fraud set of financial numerals (壹 贰 叁 肆…) dates to the Ming dynasty and still appears on Chinese cheques and receipts."
              ],
              script: [
                "One stroke, 横 héng, written left to right. Identical in simplified and traditional writing.",
                "As a component it is often not the number at all but a positional marker or a residue of an older shape, as in 上 <i>above</i> and 下 <i>below</i>, where the horizontal is the reference line."
              ],
              phonology: [
                "First tone in citation, in counting sequences, in dates and phone numbers, and word-finally (第一 dì-yī, 十一 shíyī).",
                "Before a measure word or noun it undergoes sandhi: <b>yí</b> before a fourth tone (一个 yí gè, 一定 yídìng) and <b>yì</b> before first, second and third tones (一天 yì tiān, 一年 yì nián, 一起 yìqǐ). Middle Chinese *ʔjit had a final -t stop, which survives in Korean 일 <i>il</i>, Japanese いち <i>ichi</i> and Cantonese <i>jat1</i>."
              ],
              cognates: [
                "Sino-Korean 일 (一), Sino-Japanese いち ichi / いつ itsu, Sino-Vietnamese nhất — all reflect the lost final -t.",
                "Compounds: 一起 yìqǐ <i>together</i>, 一样 yíyàng <i>the same</i>, 一点儿 yìdiǎnr <i>a little</i>, 第一 dì-yī <i>first</i>."
              ]
            }
          },
          {
            term: "人",
            roman: "rén",
            gloss: "person, people",
            pos: "noun",
            example: { text: "他是中国人。", roman: "Tā shì Zhōngguórén.", gloss: "He is Chinese." },
            linguistics: {
              origin: "pictograph (象形)",
              etymology: [
                "In the oracle-bone script 人 is a clear side view of a standing human being: a head-and-torso line with an arm hanging forward and legs below. Over the bronze and seal stages the figure straightened and lost its head, and clerical script (隶书) flattened it into the two strokes we write today.",
                "It is also the semantic head of an enormous family of characters concerning people and their actions, and it is radical 9 in the Kangxi system."
              ],
              script: [
                "Two strokes: 撇 (left-falling) then 捺 (right-falling), in that order. Simplified and traditional are identical.",
                "As a left-hand component it compresses to 亻 (called 单人旁): 你 you, 他 he, 们 plural marker, 住 to live, 作 to make. On top it appears as 𠆢 in 今 and 会."
              ],
              phonology: [
                "Second tone, rén, with the retroflex initial r-. Middle Chinese *ɲin, Old Chinese reconstructed around *niŋ. The Middle Chinese palatal nasal ɲ- regularly became modern Mandarin r-, which is why 人 rén, 日 rì and 肉 ròu all begin with r today.",
                "Very frequently reduced in fast speech inside 什么人, and it takes erhua in some northern words such as 人儿."
              ],
              cognates: [
                "Sino-Korean 인 (人) as in 인간 <i>ingan</i> human, Sino-Japanese じん jin / にん nin, Sino-Vietnamese nhân — the initial n- of these reflexes preserves the older nasal that Mandarin turned into r-.",
                "Within Chinese: 人们 rénmen <i>people</i>, 中国人 Zhōngguórén, 大人 dàrén <i>adult</i>, 别人 biéren <i>other people</i>. The related word 仁 rén <i>benevolence</i> is written with 亻 plus 二 and is central to Confucian ethics."
              ]
            }
          },
          {
            term: "山",
            roman: "shān",
            gloss: "mountain, hill",
            pos: "noun",
            example: { text: "那是一座山。", roman: "Nà shì yí zuò shān.", gloss: "That is a mountain." },
            linguistics: {
              origin: "pictograph (象形)",
              etymology: [
                "The oracle-bone form shows three peaks rising from a common base line — a mountain range seen in silhouette. The three-peak arrangement survived every stage of the script with almost no change, which makes 山 one of the easiest pictographs for a beginner to see through.",
                "It must be distinguished from 火 <i>fire</i>, whose early form also has an upward-flaring shape; the two diverged clearly by the seal stage."
              ],
              script: [
                "Three strokes: the centre vertical first, then the left-hand turning stroke 竖折, then the right vertical. Identical in simplified and traditional.",
                "Radical 46. As a component it may sit on the left (峰 <i>peak</i>, 岭 <i>ridge</i>) or on top (岸 <i>shore</i>, 岛 <i>island</i>), and it reliably signals terrain."
              ],
              phonology: [
                "First tone with the retroflex fricative sh-. Middle Chinese *ʂɛn. In Cantonese it is <i>saan1</i>, showing the same -n ending.",
                "Very common in place names, where it often takes no article and no measure word: 泰山 Tài Shān, 黄山 Huáng Shān, 中山 Zhōngshān."
              ],
              cognates: [
                "Sino-Korean 산 (山) as in 부산 Busan, Sino-Japanese さん san / ざん zan (富士山 Fujisan), Sino-Vietnamese sơn.",
                "Compounds: 山水 shānshuǐ <i>landscape</i>, literally mountains-and-water, the name of the classical painting genre; 火山 huǒshān <i>volcano</i>; 上山 shàng shān <i>to go up a mountain</i>."
              ]
            }
          },
          {
            term: "水",
            roman: "shuǐ",
            gloss: "water",
            pos: "noun",
            example: { text: "我喝水。", roman: "Wǒ hē shuǐ.", gloss: "I drink water." },
            linguistics: {
              origin: "pictograph (象形)",
              etymology: [
                "The early graph draws a central current line with droplets or eddies on either side — a stream seen from above. The seal-script form is still visibly liquid; clerical script squared it into the modern four strokes and obscured the picture.",
                "水 is one of the 五行 wǔxíng, the five phases (wood, fire, earth, metal, water) that organise traditional Chinese cosmology, medicine and calendrics, so it carries a great deal of cultural weight beyond the literal substance."
              ],
              script: [
                "Four strokes: centre vertical-with-hook first (the symmetric-centre rule), then the upper-left flick, the lower-left falling stroke, and the right-falling stroke.",
                "Radical 85. On the left it compresses to <b>氵</b>, the three-drops-of-water radical 三点水: 河 river, 海 sea, 洗 to wash, 酒 alcohol, 汉 Han. Underneath it can appear as 氺 (as in 泰). Seeing 氵 in an unfamiliar character is a strong hint that liquid is involved."
              ],
              phonology: [
                "Third tone. In careful isolation it has the full dipping 214 contour; before another third tone it rises (水果 shuǐguǒ → shuíguǒ).",
                "Middle Chinese *ɕwiX; the X marks the rising tone category 上声, which is the historical source of the modern third tone."
              ],
              cognates: [
                "Sino-Korean 수 (水) as in 수요일 <i>Wednesday</i>, literally water-day; Sino-Japanese すい sui (水曜日 suiyōbi, also Wednesday); Sino-Vietnamese thủy. The East Asian weekday names all run on this five-phases-plus-sun-and-moon scheme.",
                "Compounds: 开水 kāishuǐ <i>boiled water</i>, 水果 shuǐguǒ <i>fruit</i>, 汽水 qìshuǐ <i>soda</i>, 山水 shānshuǐ <i>landscape</i>."
              ]
            }
          },
          {
            term: "日",
            roman: "rì",
            gloss: "sun; day",
            pos: "noun",
            example: { text: "今天是几月几日？", roman: "Jīntiān shì jǐ yuè jǐ rì?", gloss: "What is today's date?" },
            linguistics: {
              origin: "pictograph (象形)",
              etymology: [
                "The oracle-bone form is a circle (sometimes an oval or a rounded square, depending on the ease of carving into bone) with a dot or short line at the centre. Writing on bone and shell favoured straight cuts, so the circle was often rendered angular from the very beginning; by seal script it was a regular oval and clerical script squared it definitively.",
                "The interior mark is usually explained as distinguishing the sun-disk from a plain 口 <i>mouth</i> or 囗 <i>enclosure</i>; some scholars have linked it to observations of sunspots, but that reading is speculative and should be treated as unproven."
              ],
              script: [
                "Four strokes: left vertical, top-and-right turning stroke, the middle horizontal, then the bottom horizontal that closes the box last.",
                "Radical 72. As a component it marks sun, light and time: 明 bright, 时 time, 早 early, 晚 late, 晴 clear weather, 星 star. Do not confuse it with 目 <i>eye</i>, which has two internal horizontals, or with 曰 <i>to say</i>, which is squatter and wider."
              ],
              phonology: [
                "Fourth tone, retroflex initial r-, and the vowel is the buzzing placeholder i, not <i>ee</i>. From Middle Chinese *ɲit, with the palatal nasal that became Mandarin r- and a final -t stop that Mandarin lost.",
                "In modern Mandarin 日 is largely a written and formal word for <i>day</i>; the spoken word is 天 tiān, and dates in speech normally use 号 hào rather than 日."
              ],
              cognates: [
                "Sino-Korean 일 (日) as in 일요일 <i>Sunday</i>, Sino-Japanese にち nichi / じつ jitsu (日本 Nihon, 'sun-origin', hence 'Land of the Rising Sun'), Sino-Vietnamese nhật. The -t of Middle Chinese survives in Korean 일 and Japanese jitsu.",
                "Compounds: 生日 shēngrì <i>birthday</i>, 日本 Rìběn <i>Japan</i>, 今日 jīnrì <i>today</i> (formal), 日子 rìzi <i>days, life</i>."
              ]
            }
          },
          {
            term: "月",
            roman: "yuè",
            gloss: "moon; month",
            pos: "noun",
            example: { text: "十月很好。", roman: "Shíyuè hěn hǎo.", gloss: "October is very nice." },
            linguistics: {
              origin: "pictograph (象形)",
              etymology: [
                "A crescent moon, drawn as a curved outline with one or two interior strokes. The crescent rather than the full disk was chosen precisely to contrast with 日, the round sun. In the earliest inscriptions 月 <i>moon</i> and 夕 <i>evening</i> are near-identical variants of the same crescent shape and were only gradually differentiated.",
                "Because a lunar cycle defines a month in the traditional calendar, the same character carries both meanings. Chinese month names are simply numbers plus 月: 一月 January, 二月 February, and so on."
              ],
              script: [
                "Four strokes, beginning with the left-falling stroke and the 横折钩 that forms the crescent, then the two internal horizontals.",
                "Radical 74 — but with a major caveat. In a large number of characters the component that looks like 月 is not the moon at all: it is 肉 <i>flesh</i>, which was flattened into an identical shape during the clerical-script reform. 脸 face, 肚 belly, 胖 fat, 肝 liver, 脑 brain all contain the flesh radical, not the moon. A reliable rule of thumb is that if the character concerns the body, the component is 肉."
              ],
              phonology: [
                "Fourth tone, yuè. The spelling ue conceals ü: the syllable is yüè. From Middle Chinese *ŋjwot, with an initial ŋ- and a final -t that Mandarin has both lost.",
                "Note the irregular month names in speech: 一月 yīyuè keeps first tone on 一 because it is part of a fixed name rather than a counted quantity."
              ],
              cognates: [
                "Sino-Korean 월 (月) as in 월요일 <i>Monday</i> (moon-day), Sino-Japanese げつ getsu / がつ gatsu (月曜日 getsuyōbi), Sino-Vietnamese nguyệt — the Vietnamese initial ng- preserves the Middle Chinese ŋ-.",
                "Compounds: 月亮 yuèliang <i>the moon</i> (the everyday word), 上个月 shàng gè yuè <i>last month</i>, 月饼 yuèbing <i>mooncake</i>."
              ]
            }
          },
          {
            term: "木",
            roman: "mù",
            gloss: "tree, wood",
            pos: "noun",
            example: { text: "这是木头。", roman: "Zhè shì mùtou.", gloss: "This is wood." },
            linguistics: {
              origin: "pictograph (象形)",
              etymology: [
                "A tree seen from the side: a central trunk, branches spreading upward, and roots spreading below. The early forms curve; the modern form has straightened the branches into a horizontal and the roots into the two falling strokes at the bottom.",
                "Doubling and tripling the graph produces new words on a transparent logic: 林 lín <i>a grove</i> (two trees) and 森 sēn <i>dense forest</i> (three). Together they make 森林 sēnlín, the ordinary modern word for <i>forest</i>."
              ],
              script: [
                "Four strokes in the order 一 丨 丿 ㇏ — a textbook demonstration of horizontal-before-vertical and left-falling-before-right-falling.",
                "Radical 75, and one of the most productive semantic components in the script: 树 tree, 林 grove, 桌 table, 椅 chair, 板 board, 校 school, 机 machine. Anything made of wood tends to carry it."
              ],
              phonology: [
                "Fourth tone. Middle Chinese *muwk, an entering-tone syllable ending in -k. Mandarin lost all such stop endings and redistributed those syllables across the four modern tones, which is why entering-tone words look tonally unpredictable from a Mandarin point of view.",
                "In 木头 mùtou the second syllable is neutral."
              ],
              cognates: [
                "Sino-Korean 목 (木) as in 목요일 <i>Thursday</i>, Sino-Japanese もく moku / ぼく boku, Sino-Vietnamese mộc, Cantonese muk6 — all four preserve the final -k that Mandarin dropped.",
                "Within Chinese: 木头 mùtou <i>wood</i>, 树木 shùmù <i>trees</i>, 木材 mùcái <i>timber</i>. The related 本 běn <i>root, origin</i> is 木 with a mark added at the base — an indicative built on a pictograph."
              ]
            }
          },
          {
            term: "火",
            roman: "huǒ",
            gloss: "fire",
            pos: "noun",
            example: { text: "火很大。", roman: "Huǒ hěn dà.", gloss: "The fire is big." },
            linguistics: {
              origin: "pictograph (象形)",
              etymology: [
                "The oracle-bone graph shows a flame with sparks or tongues rising on either side of a central blaze. Its resemblance to 山 in some early forms is a real source of confusion for palaeographers, and context is often what distinguishes them in inscriptions.",
                "Like 水, 火 is one of the five phases 五行 and therefore recurs throughout traditional medicine, cosmology and calendar terminology."
              ],
              script: [
                "Four strokes: the two side dots first (left, then right), then the left-falling stroke and the right-falling stroke.",
                "Radical 86. Beneath a character it flattens into <b>灬</b>, the four-dots form: 热 hot, 点 point/o'clock, 煮 to boil, 照 to shine. On the left it stays recognisable: 烧 to burn, 灯 lamp, 炒 to stir-fry."
              ],
              phonology: [
                "Third tone. Half third tone before other tones (火车 huǒchē is said with a low flat first syllable), full dip when final or isolated.",
                "Middle Chinese *xwaX. The modern h- of Mandarin corresponds to a velar fricative x- in Middle Chinese."
              ],
              cognates: [
                "Sino-Korean 화 (火) as in 화요일 <i>Tuesday</i>, Sino-Japanese か ka (火曜日 kayōbi), Sino-Vietnamese hỏa.",
                "Compounds: 火车 huǒchē <i>train</i>, literally fire-vehicle, a nineteenth-century coinage for the steam engine; 火山 huǒshān <i>volcano</i>; 着火 zháohuǒ <i>to catch fire</i>."
              ]
            }
          },
          {
            term: "中",
            roman: "zhōng",
            gloss: "middle, centre; China (in compounds)",
            pos: "noun",
            example: { text: "我学中文。", roman: "Wǒ xué Zhōngwén.", gloss: "I study Chinese." },
            linguistics: {
              origin: "indicative (指事)",
              etymology: [
                "The oracle-bone form is a vertical shaft passing through the middle of an enclosure, often with streamers drawn flying from the top and bottom of the shaft. The most widely accepted reading is that it depicts a banner or standard planted at the centre of an encampment or settlement — the muster point — from which the sense <i>centre</i> derives. The streamers were lost by the seal stage, leaving the bare shaft-through-a-box we write today.",
                "The name 中国 Zhōngguó, <i>the central state</i>, appears as early as the Western Zhou bronze inscription on the He zun vessel (around 1000 BCE), though there it refers to the royal domain rather than to anything like a modern nation."
              ],
              script: [
                "Four strokes: the box (vertical, turning stroke, horizontal) and then the long central vertical last — an example of the rule that a stroke piercing the whole character is written at the end.",
                "Identical in simplified and traditional writing. As a component it is usually phonetic, as in 忠 zhōng <i>loyal</i> (heart plus 中) and 钟 zhōng <i>clock, bell</i>."
              ],
              phonology: [
                "First tone as a noun or modifier, zhōng. It also has a fourth-tone reading <b>zhòng</b> meaning <i>to hit the mark</i>, as in 中奖 zhòngjiǎng <i>to win a prize</i> — a classic 破音字, a character with meaning-bearing tone alternation.",
                "Middle Chinese *ʈjuŋ. The -ng ending has been stable for two millennia."
              ],
              cognates: [
                "Sino-Korean 중 (中) as in 중국 <i>China</i>, Sino-Japanese ちゅう chū (中国 Chūgoku), Sino-Vietnamese trung.",
                "Compounds: 中国 Zhōngguó <i>China</i>, 中文 Zhōngwén <i>the Chinese language</i>, 中午 zhōngwǔ <i>noon</i>, 中间 zhōngjiān <i>in between</i>."
              ]
            }
          },
          {
            term: "马",
            trad: "馬",
            roman: "mǎ",
            gloss: "horse",
            pos: "noun",
            example: { text: "那匹马很大。", roman: "Nà pǐ mǎ hěn dà.", gloss: "That horse is very big." },
            linguistics: {
              origin: "pictograph (象形)",
              etymology: [
                "The oracle-bone graph is a horse in profile with an emphatically drawn mane, a large eye, a body, legs and a tail. The mane and eye are the identifying features; as the script formalised, the mane became the upper strokes of 馬 and the legs became the four dots at the bottom.",
                "Horses arrived in China from the steppe during the second millennium BCE together with the chariot, and they are among the most frequent subjects of Shang-dynasty oracle inscriptions, which record royal hunts, chariot teams and sacrifices."
              ],
              script: [
                "Traditional <b>馬</b> has ten strokes; simplified <b>马</b> has three. The simplification comes from the cursive (草书) handwritten form, in which the four leg-dots were swept into a single bottom stroke — this is the <i>cursive-derived</i> simplification method, one of the main techniques used in the 1956 reform.",
                "Radical 187. As a component 马 is very often the <b>phonetic</b> rather than the meaning: 妈 mā mother, 吗 ma question particle, 骂 mà to scold, 码 mǎ code/number all take their sound from it. When it is semantic instead, the character concerns horses: 骑 to ride, 驾 to drive."
              ],
              phonology: [
                "Third tone. Middle Chinese *maeX, Old Chinese reconstructed around *mˤraʔ.",
                "The 马 phonetic series is unusually clean in modern Mandarin: 妈 mā, 麻 má (unrelated graph but same rhyme), 马 mǎ, 骂 mà, 吗 ma — one syllable across all five tone categories, which is why textbooks use it to teach tones."
              ],
              cognates: [
                "Sino-Korean 마 (馬), Sino-Japanese ば ba / め me, and the native Japanese word うま uma is itself thought to be an early borrowing from Chinese. Mongolian <i>mori</i> and the wider Eurasian family of horse words have prompted speculation about ancient contact, but no borrowing direction is established.",
                "Compounds: 马上 mǎshàng <i>immediately</i>, literally <i>on horseback</i>; 马路 mǎlù <i>road</i>; 马虎 mǎhu <i>careless</i>."
              ]
            }
          },
          {
            term: "妈",
            trad: "媽",
            roman: "mā",
            gloss: "mother, mum",
            pos: "noun",
            audio: "妈妈",
            example: { text: "我妈妈很好。", roman: "Wǒ māma hěn hǎo.", gloss: "My mother is very well." },
            linguistics: {
              origin: "phono-semantic compound (形声)",
              etymology: [
                "A textbook phono-semantic compound: the semantic component <b>女</b> <i>woman</i> on the left tells you the meaning domain, and the phonetic component <b>马</b> mǎ on the right supplies the sound. The character is a relatively late creation — it is not found in the oracle bones and appears in the medieval glossaries, the <i>Guangya</i> of the third century CE glossing it as <i>mother</i>.",
                "It was made to write a word that already existed in speech. Like <i>mama</i> in an enormous number of unrelated languages, the syllable ma for <i>mother</i> arises independently from the easiest sound an infant produces; this is a well-documented universal tendency, not evidence of any relationship between Chinese and English."
              ],
              script: [
                "Simplified <b>妈</b> (6 strokes) versus traditional <b>媽</b> (13). The difference is entirely in the phonetic: 马 versus 馬. Whenever a simplified component is adopted, it is adopted everywhere it appears, so 馬 → 马 changes 媽, 嗎, 罵 and 碼 at a stroke. This <i>consistency across the character set</i> was a deliberate design principle of the 1956 reform.",
                "女 as a left-hand component compresses: its final horizontal becomes a rising 提 stroke so it does not collide with what follows."
              ],
              phonology: [
                "First tone, high and level. In the everyday reduplicated form 妈妈 the second syllable is <b>neutral</b>: māma, not māmā. The same pattern applies to 爸爸 bàba, 哥哥 gēge and 姐姐 jiějie.",
                "The vocative 妈 on its own is normally said with a full first tone."
              ],
              cognates: [
                "Sino-Korean 마 (媽) exists but is rare; Korean uses native 엄마 <i>eomma</i>. Japanese ママ mama is a modern loan from English, not from Chinese.",
                "Within Chinese: 妈妈 māma, 姑妈 gūmā <i>father's sister</i>, 大妈 dàmā <i>auntie</i> (a form of address for an older woman). The formal written word for mother is 母亲 mǔqīn, built on 母 mǔ."
              ]
            }
          },
          {
            term: "麻",
            roman: "má",
            gloss: "hemp; numb; (of food) tingly-numb",
            pos: "noun / adjective",
            example: { text: "这个菜很麻。", roman: "Zhège cài hěn má.", gloss: "This dish is very tingly-numb." },
            linguistics: {
              origin: "compound ideograph (会意)",
              etymology: [
                "The character shows hemp fibres being processed under a shelter: the outer <b>广</b> is a lean-to or open building, and the two elements inside represent stripped hemp stalks hung to dry. Hemp was the principal textile fibre of pre-cotton China, so a character depicting the workshop rather than the plant makes practical sense.",
                "The sense <i>numb, tingling</i> is a later extension, probably from the pins-and-needles sensation; from there comes the Sichuanese culinary term 麻辣 málà, the numbing-and-spicy flavour produced by Sichuan peppercorn together with chilli."
              ],
              script: [
                "Eleven strokes; identical in simplified and traditional. The 广 radical (radical 53) is written first, then the interior.",
                "麻 is itself a radical (200) and a productive phonetic: 摩 mó <i>to rub</i>, 磨 mó <i>to grind</i>, 麽/么 me, 蘑 mó <i>mushroom</i>."
              ],
              phonology: [
                "Second tone, rising. Middle Chinese *mae. It is the second-tone member of the mā/má/mǎ/mà/ma teaching set, though unlike the others it does not contain the 马 component — a useful reminder that similar sound does not require shared graph.",
                "The very common word 什么 shénme has 么, a simplification of 麼, whose phonetic core is 麻; in speech it is fully reduced to a neutral syllable."
              ],
              cognates: [
                "Sino-Korean 마 (麻) as in 마약 <i>narcotics</i>, Sino-Japanese ま ma / native あさ asa <i>hemp</i>, Sino-Vietnamese ma.",
                "Compounds: 麻烦 máfan <i>trouble, troublesome</i>, 麻辣 málà, 芝麻 zhīma <i>sesame</i>, 麻将 májiàng <i>mahjong</i>."
              ]
            }
          },
          {
            term: "骂",
            trad: "罵",
            roman: "mà",
            gloss: "to scold, to curse at",
            pos: "verb",
            example: { text: "他骂人。", roman: "Tā mà rén.", gloss: "He is cursing at people." },
            linguistics: {
              origin: "phono-semantic compound (形声)",
              etymology: [
                "The traditional form 罵 combines <b>网</b> <i>net</i>, written in its flattened top form 罒, with the phonetic <b>馬</b> mǎ. The net element is shared with 詈 lì <i>to revile</i> (net over 言 speech), and the usual explanation is that abusive speech was pictured as ensnaring or entangling its target. This reading is plausible and standard, but it is an interpretation of the semantic component rather than a documented fact about how the character was coined.",
                "Some palaeographers instead treat 罒 here as a purely graphic assignment for filing, with no live metaphor. Where scholars disagree, it is better to know that they disagree than to memorise a tidy story."
              ],
              script: [
                "Simplified <b>骂</b> (9 strokes) replaces 馬 with 马; the 罒 top is unchanged. Note that the top component is <b>网</b> net in its combining form, not 四 <i>four</i> and not 目 <i>eye</i> turned on its side, though all three look similar in print.",
                "Compare 买 mǎi and 卖 mài, which also have net-like tops but come from a different source (贝 shell/money)."
              ],
              phonology: [
                "Fourth tone, a sharp fall — fittingly for the meaning. Middle Chinese *maeH, where H marks the departing tone 去声, the historical source of modern fourth tone.",
                "It completes the mā-má-mǎ-mà-ma set used to teach the tone system."
              ],
              cognates: [
                "Sino-Korean 매 (罵), Sino-Japanese ば ba (罵倒 batō <i>to revile</i>), Sino-Vietnamese mạ.",
                "Compounds: 骂人 mà rén <i>to curse at someone</i>, 挨骂 ái mà <i>to get told off</i>. The polite everyday alternative is 说 shuō in the sense of <i>to tell off</i>: 我妈说我了."
              ]
            }
          },
          {
            term: "吗",
            trad: "嗎",
            roman: "ma",
            gloss: "yes/no question particle",
            pos: "particle",
            example: { text: "你好吗？", roman: "Nǐ hǎo ma?", gloss: "How are you?" },
            linguistics: {
              origin: "phono-semantic compound (形声)",
              etymology: [
                "The mouth radical <b>口</b> plus the phonetic <b>马</b>. The mouth radical here is not really semantic in the ordinary sense: it is the conventional marker for characters that write <b>sounds</b> rather than concepts — particles, interjections, onomatopoeia and phonetic transcriptions of foreign words. 吧 ba, 呢 ne, 啊 a, 咖啡 kāfēi and 吧 in 酒吧 <i>bar</i> all use it the same way.",
                "The particle itself is thought to have grammaticalised from a negative element in late Middle Chinese, with 无 or 麽 as the likely source; a sentence-final <i>...or not?</i> weakened into a bare question marker. The precise pathway is still debated, so treat the story as a well-supported hypothesis rather than settled fact."
              ],
              script: [
                "Simplified <b>吗</b> (6 strokes), traditional <b>嗎</b> (13) — again just 马 versus 馬.",
                "口 as a left-hand component sits high and small, in the upper-left of the square, rather than centred."
              ],
              phonology: [
                "Always <b>neutral tone</b>: short, light, and pitched by whatever precedes it. Writing it as mǎ or mà would make it a different word entirely.",
                "Critically, 吗 does <b>not</b> require rising intonation. Unlike English, where a yes/no question is marked by pitch rising at the end, Mandarin marks the question grammatically with 吗 and keeps the sentence's tones intact. Adding an English-style rise is one of the most audible foreign-accent markers."
              ],
              cognates: [
                "Sister particles built the same way: 呢 ne (follow-up questions), 吧 ba (suggestion or supposition), 啊 a (softening), 呀 ya.",
                "吗 has no meaningful Korean or Japanese reflex, since it is a Mandarin colloquial grammatical particle rather than a classical morpheme. Korean uses the ending -까/-요 and Japanese uses か for the same job."
              ]
            }
          },
          {
            term: "好",
            roman: "hǎo",
            gloss: "good, well; fine",
            pos: "adjective",
            example: { text: "你好！", roman: "Nǐ hǎo!", gloss: "Hello!" },
            linguistics: {
              origin: "compound ideograph (会意)",
              etymology: [
                "好 joins <b>女</b> <i>woman</i> and <b>子</b> <i>child</i>. The traditional analysis, going back to the <i>Shuowen Jiezi</i>, reads it as a woman with a child and therefore <i>good, fine</i>. The popular gloss that it means 'good because women love children' is a modern folk explanation with no ancient support and should be treated as such.",
                "Oracle-bone occurrences complicate the picture: 好 appears there as a clan or personal name, notably 妇好 Fù Hǎo, the Shang queen and general whose intact tomb was excavated at Anyang in 1976. Some palaeographers therefore argue the graph was originally a name-writing device whose semantic reading came later. The honest summary is that the woman-plus-child structure is certain but its original motivation is not."
              ],
              script: [
                "Six strokes; identical in simplified and traditional. 女 is written first, its bottom horizontal compressed into a rising 提, then 子.",
                "Radical 38 (女). The 女 radical heads a large group of characters for kinship and, less comfortably, a set of judgemental words whose composition reflects the social attitudes of the periods in which they were coined."
              ],
              phonology: [
                "Third tone as an adjective, hǎo. In 你好 the sequence is two third tones, so sandhi applies and it is said <i>ní hǎo</i>.",
                "There is a distinct fourth-tone reading <b>hào</b> meaning <i>to be fond of</i>: 爱好 àihào <i>hobby</i>, 好学 hàoxué <i>eager to learn</i>. The tone difference is the only thing separating these two words."
              ],
              cognates: [
                "Sino-Korean 호 (好) as in 호감 <i>good feeling</i>, Sino-Japanese こう kō (好意 kōi <i>goodwill</i>) with native reading この-む konomu <i>to like</i>, Sino-Vietnamese hảo.",
                "Compounds: 你好 nǐ hǎo, 好吃 hǎochī <i>tasty</i>, 好看 hǎokàn <i>good-looking</i>, 好久不见 hǎojiǔ bú jiàn <i>long time no see</i>. The pattern 好 + verb, meaning <i>good to (verb)</i>, is highly productive."
              ]
            }
          },
          {
            term: "不",
            roman: "bù",
            gloss: "not, no (general negator)",
            pos: "adverb",
            example: { text: "我不是学生。", roman: "Wǒ bú shì xuésheng.", gloss: "I am not a student." },
            linguistics: {
              origin: "loan / rebus (假借); original meaning uncertain",
              etymology: [
                "不 is one of the most frequent characters in Chinese and one of the least securely explained. Xu Shen's <i>Shuowen Jiezi</i> (c. 100 CE) says it depicts a bird flying up into the sky and not coming down — an account modern palaeography rejects as a Han-dynasty rationalisation of a shape whose origin was already lost.",
                "The leading modern proposal, based on the oracle-bone forms, is that the graph drew the <b>calyx or pedicel of a flower</b>, and that it was borrowed as a rebus for the homophonous negative particle. On this account the original botanical word was later written 柎 or 荂 once 不 had been taken over. The evidence is suggestive rather than conclusive, and reference works flag the origin as uncertain — which is the correct thing for a learner to know."
              ],
              script: [
                "Four strokes; identical in simplified and traditional. Do not confuse it with 下 <i>below</i> or 木.",
                "As a component it is usually phonetic-ish: 环 (traditional 環) is unrelated, but 否 fǒu <i>to negate</i> is 不 over 口, and 杯 bēi <i>cup</i> is 木 plus 不 as phonetic — the sound link is clearer in older stages of the language."
              ],
              phonology: [
                "Underlyingly fourth tone, <b>bù</b>. Before another fourth tone it becomes second tone: 不是 bú shì, 不要 bú yào, 不对 bú duì. Before first, second and third tones it stays bù: 不吃 bù chī, 不忙 bù máng, 不好 bù hǎo.",
                "Inside an A-not-A question or a potential complement it reduces to neutral: 好不好 hǎo bu hǎo, 看不见 kàn bu jiàn. Middle Chinese *pjuw / *pjut; the entering-tone variant with -t is the source of Korean 부/불 (as in 불가능 <i>impossible</i>)."
              ],
              cognates: [
                "Sino-Korean 불 / 부 (不) — 불가능 <i>impossible</i>, 부족 <i>insufficient</i>, with the -l reflecting Middle Chinese -t; Sino-Japanese ふ fu / ぶ bu (不便 fuben <i>inconvenient</i>); Sino-Vietnamese bất.",
                "Contrast with 没 méi, which negates 有 and past events: 不是 <i>is not</i> versus 没有 <i>does not have / did not</i>. Choosing between 不 and 没 is one of the first real grammar decisions a learner faces."
              ]
            }
          },
          {
            term: "河",
            roman: "hé",
            gloss: "river",
            pos: "noun",
            example: { text: "这条河很长。", roman: "Zhè tiáo hé hěn cháng.", gloss: "This river is very long." },
            linguistics: {
              origin: "phono-semantic compound (形声)",
              etymology: [
                "Semantic <b>氵</b> water plus phonetic <b>可</b> kě. The phonetic link is opaque in modern Mandarin (kě versus hé) but was transparent in Old Chinese, where both had velar initials: 可 reconstructed around *kʰˤajʔ and 河 around *ɡˤaj. Sound change since then has separated them.",
                "Originally 河 was not a generic word at all: in pre-Qin texts it names <b>the Yellow River</b> specifically, just as 江 jiāng named the Yangtze. Only later did each generalise, and even now there is a rough geographic split, with northern waterways more often called 河 and southern ones 江."
              ],
              script: [
                "Eight strokes; identical in simplified and traditional. Written 氵 first (three drops top to bottom), then 可.",
                "The 氵 radical is the single most useful radical for a beginner to internalise: 海 sea, 洗 to wash, 湖 lake, 汤 soup, 酒 wine, 汉 Han, 没 not-have, 游 to swim."
              ],
              phonology: [
                "Second tone, hé. Middle Chinese *ha. The Old Chinese velar initial *ɡ- became a fricative h- in Mandarin, a regular change.",
                "Frequently takes erhua in northern speech in the diminutive sense: 小河儿 xiǎohér <i>little stream</i>."
              ],
              cognates: [
                "Sino-Korean 하 (河) as in 은하수 <i>the Milky Way</i>, literally silver-river; Sino-Japanese か ka (河川 kasen <i>rivers</i>); Sino-Vietnamese hà.",
                "It has been proposed that 江 jiāng, the companion word, is an early loan from an Austroasiatic source (compare Vietnamese <i>sông</i>, reconstructed Proto-Austroasiatic *krung / *krong <i>river</i>), reflecting contact along the Yangtze. This is a genuine and much-discussed hypothesis, but it is not proven and applies to 江, not to 河.",
                "Compounds: 黄河 Huáng Hé <i>the Yellow River</i>, 河边 hébiān <i>riverside</i>, 银河 yínhé <i>galaxy</i>."
              ]
            }
          },
          {
            term: "学",
            trad: "學",
            roman: "xué",
            gloss: "to study, to learn; -ology",
            pos: "verb / bound morpheme",
            example: { text: "我学中文。", roman: "Wǒ xué Zhōngwén.", gloss: "I study Chinese." },
            linguistics: {
              origin: "phono-semantic compound (形声) with ideographic elements",
              etymology: [
                "The traditional form <b>學</b> is richly built. At the top, two hands 臼 flank <b>爻</b>, a pair of crossed lines usually identified with counting rods or the trigram strokes used in divination; beneath is <b>冖</b>, a roof or covering, and at the bottom <b>子</b>, a child. The whole is read as hands guiding a child under a roof — a schoolhouse. The 爻 element also serves as the <b>phonetic</b>, its Old Chinese reading being close to that of 學.",
                "The paired character <b>教</b> jiāo/jiào <i>to teach</i> shares the same top elements, and 覺/觉 jué <i>to perceive, to awaken</i> is 學 with 見 <i>see</i> replacing 子 — a small, coherent family about knowledge and awareness."
              ],
              script: [
                "Traditional <b>學</b> has 16 strokes; simplified <b>学</b> has 8. The simplification replaces the whole hands-and-rods upper assembly with the three-dot abbreviation 𭕄, a form taken from cursive writing. The same substitution appears in 觉 (覺), 誉 (譽) and 举 (舉) — again showing the reform's principle of applying one replacement consistently.",
                "Note that the simplification here destroys the etymology: 学 no longer shows the hands or the rods. This trade-off, legibility and speed against transparency of origin, is the central criticism of the simplified set."
              ],
              phonology: [
                "Second tone, xué. The spelling ue hides ü: the syllable is xüé, since after x the umlaut is never written.",
                "Middle Chinese *haewk, an entering-tone syllable ending in -k, with an initial that palatalised to modern x-. This single word is the clearest possible demonstration of why Korean and Japanese readings are useful evidence: both preserve the -k that Mandarin lost."
              ],
              cognates: [
                "Sino-Korean <b>학</b> (學) — 학교 <i>hakgyo</i> school, 학생 <i>haksaeng</i> student, 대학 <i>daehak</i> university. Sino-Japanese <b>がく gaku</b> — 学校 gakkō, 学生 gakusei, 大学 daigaku. Sino-Vietnamese <b>học</b> — học sinh. Cantonese hok6. Every one of these keeps the final -k.",
                "Within Chinese: 学生 xuésheng <i>student</i>, 学校 xuéxiào <i>school</i>, 大学 dàxué <i>university</i>, 学习 xuéxí <i>to study</i>, 数学 shùxué <i>mathematics</i>. As a suffix it forms field names exactly as English <i>-ology</i> does: 语言学 linguistics, 生物学 biology."
              ]
            }
          },
          {
            term: "语",
            trad: "語",
            roman: "yǔ",
            gloss: "language, speech",
            pos: "noun / bound morpheme",
            example: { text: "汉语很有意思。", roman: "Hànyǔ hěn yǒu yìsi.", gloss: "Chinese is very interesting." },
            linguistics: {
              origin: "phono-semantic compound (形声)",
              etymology: [
                "Semantic <b>言</b> <i>speech</i> plus phonetic <b>吾</b> wú <i>I, we</i> (a classical pronoun). The phonetic fit is excellent even in reconstruction: 吾 Old Chinese around *ŋˤa, 語 around *ŋ(r)aʔ — same initial nasal ŋ-, same rhyme, differing in tone category.",
                "言 itself is thought to depict a mouth with a tongue or a flute-like instrument above it, marking sound issuing from the mouth; it heads the whole family of speech characters."
              ],
              script: [
                "Simplified <b>语</b> (9 strokes) versus traditional <b>語</b> (14). The change is in the radical: 言 is abbreviated to <b>讠</b>, again a cursive-derived form applied uniformly across the character set — 说/說, 请/請, 谢/謝, 话/話, 读/讀 all shift together.",
                "Recognising 讠 is worth a great deal to a beginner, because it flags a character as belonging to the domain of speaking, saying, asking or language."
              ],
              phonology: [
                "Third tone, yǔ. The spelling yu is ü: the syllable is yü with no consonant onset.",
                "Middle Chinese *ŋjoX. Mandarin lost the initial ŋ- entirely before high front vowels, which is why the modern syllable begins with a bare glide while Cantonese still has jyu5 and Vietnamese has ngữ with the nasal intact."
              ],
              cognates: [
                "Sino-Korean 어 (語) — 한국어 <i>Korean language</i>, 영어 <i>English</i>, 언어 <i>language</i>. Sino-Japanese ご go — 日本語 Nihongo, 英語 Eigo, 言語 gengo. Sino-Vietnamese ngữ — ngôn ngữ.",
                "Within Chinese: 汉语 Hànyǔ <i>Chinese</i>, 英语 Yīngyǔ <i>English</i>, 语言 yǔyán <i>language</i>, 口语 kǒuyǔ <i>spoken language</i>. Note that 语 and 文 are not interchangeable: 汉语 emphasises the spoken language, 中文 the language including its writing."
              ]
            }
          }
        ]
      },
      {
        type: "notes",
        title: "Culture note: three thousand years of one writing system",
        body: [
          "Chinese characters are the oldest writing system still in continuous use. The earliest substantial corpus is the <b>oracle-bone script</b> 甲骨文 (jiǎgǔwén) of the late Shang dynasty, roughly 1250–1050 BCE: divination questions carved into ox scapulae and turtle plastrons, then cracked with a hot point so that a diviner could read the answer. They were discovered by accident in 1899, when the scholar Wang Yirong noticed inscribed 'dragon bones' being sold as medicine in a Beijing pharmacy. Some 150,000 pieces have since been excavated at Anyang, and around 1,500 of their 4,500 distinct graphs have been securely deciphered.",
          "Cast <b>bronze inscriptions</b> 金文 (jīnwén) of the Zhou dynasty follow, rounder and more decorative than the carved bone forms. Regional variation then multiplied during the Warring States period until the Qin unification of 221 BCE, when the chancellor Li Si imposed the <b>small seal script</b> 小篆 (xiǎozhuàn) as a single empire-wide standard — one of the most consequential acts of language planning in history.",
          "The decisive break came next. <b>Clerical script</b> 隶书 (lìshū), which matured under the Han dynasty, straightened the curving seal lines into flat, angular strokes suited to a brush on bamboo and silk. This 隶变 <i>clerical change</i> is why so many characters no longer look like what they depict: it converted drawings into strokes. Everything since is refinement — <b>regular script</b> 楷书 (kǎishū), settled by around the third to fifth centuries CE, is what you read today and is remarkably close to what a Tang-dynasty clerk wrote, alongside the faster <b>running</b> 行书 and <b>cursive</b> 草书 hands.",
          "The most recent reform is the <b>simplification</b> programme of the People's Republic, whose first official list appeared in 1956 and was revised in 1964 and 1986. About 2,200 characters were simplified, mostly by adopting long-established cursive or vernacular variants rather than by invention. Simplified characters are standard in mainland China, Singapore and Malaysia; <b>traditional</b> characters remain standard in Taiwan, Hong Kong and Macau, and in most overseas communities. This course teaches simplified forms and gives the traditional form whenever it differs, because a reader who knows both can move freely across the whole Chinese-speaking world."
        ]
      },
      {
        type: "practice",
        title: "Practice: sounds, tones and characters",
        exercises: [
          {
            type: "mcq",
            prompt: "What is the difference between pinyin b and p?",
            promptAudio: null,
            choices: [
              "b is voiced, p is voiceless",
              "b is unaspirated, p is aspirated — neither is voiced",
              "b is used before a, p before other vowels",
              "There is no difference in standard Mandarin"
            ],
            answer: 1,
            explain: "Mandarin does not use voicing to distinguish stops. Both b and p are voiceless; p is released with a strong puff of air and b is not. The same pairing gives d/t, g/k, j/q, zh/ch and z/c."
          },
          {
            type: "mcq",
            prompt: "How is 你好 actually pronounced in connected speech?",
            promptAudio: "你好",
            choices: ["nǐ hǎo", "ní hǎo", "nì hǎo", "nī hāo"],
            answer: 1,
            explain: "Third-tone sandhi: when two third tones are adjacent, the first becomes a second tone. The pinyin is still written nǐ hǎo, but it is said ní hǎo."
          },
          {
            type: "mcq",
            prompt: "Roughly what proportion of Chinese characters are phono-semantic compounds (形声)?",
            promptAudio: null,
            choices: ["About 10%", "About 30%", "About 50%", "About 80–90%"],
            answer: 3,
            explain: "The overwhelming majority of characters pair a semantic component with a phonetic one. Pictographs, indicatives and compound ideographs together are only a small minority, though they include many of the most frequent basic characters."
          },
          {
            type: "typing",
            prompt: "Type the pinyin for the character 学 (to study), with or without tone marks.",
            answer: ["xué", "xue", "xue2"],
            hint: "Second tone; the u is really ü, but the umlaut is never written after x."
          },
          {
            type: "typing",
            prompt: "不是 means 'is not'. Type the pinyin exactly as it is pronounced, showing the tone change on 不.",
            answer: ["bú shì", "búshì", "bu shi", "bushi", "bu2 shi4", "bú shi"],
            hint: "Before a fourth tone, 不 becomes second tone."
          },
          {
            type: "typing",
            prompt: "Type the character for 'person' (rén).",
            answer: ["人"],
            hint: "Two strokes: left-falling, then right-falling."
          },
          {
            type: "listening",
            prompt: "Listen and choose the tone you hear.",
            audioText: "马",
            choices: ["mā (first tone)", "má (second tone)", "mǎ (third tone)", "mà (fourth tone)"],
            answer: 2,
            explain: "马 mǎ 'horse' is third tone — low and dipping when said alone."
          },
          {
            type: "listening",
            prompt: "Listen: is this a retroflex or a dental sibilant?",
            audioText: "四",
            choices: ["shì (retroflex)", "sì (dental)", "xì (palatal)", "cì (dental affricate)"],
            answer: 1,
            explain: "四 sì has the plain dental s with the tongue tip at the upper teeth. Compare 十 shí, where the tongue tip curls back."
          },
          {
            type: "match",
            prompt: "Match each radical with the meaning zone it signals.",
            pairs: [
              { a: "氵", b: "water, liquid" },
              { a: "亻", b: "person" },
              { a: "讠", b: "speech, language" },
              { a: "忄", b: "heart, emotion" },
              { a: "木", b: "tree, wood" },
              { a: "灬", b: "fire, heat" }
            ]
          },
          {
            type: "match",
            prompt: "Match each character with its formation type.",
            pairs: [
              { a: "日", b: "pictograph (象形)" },
              { a: "三", b: "indicative (指事)" },
              { a: "好", b: "compound ideograph (会意)" },
              { a: "妈", b: "phono-semantic (形声)" },
              { a: "不", b: "loan / rebus (假借)" }
            ]
          },
          {
            type: "order",
            prompt: "Arrange the four tones of 'ma' in order, first through fourth.",
            tokens: ["mà", "mǎ", "má", "mā"],
            answer: "mā má mǎ mà"
          },
          {
            type: "order",
            prompt: "Arrange the stages of the script in historical order, oldest first.",
            tokens: ["楷书", "小篆", "甲骨文", "隶书"],
            answer: "甲骨文 小篆 隶书 楷书"
          }
        ]
      }
    ]
  });
})();
