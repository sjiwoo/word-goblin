window.CURRICULUM = window.CURRICULUM || {};
(function () {
  const C = window.CURRICULUM;
  C.korean = C.korean || { units: [] };

  C.korean.units.push({
    id: "ko-09",
    order: 9,
    title: "Slang & Colloquial Speech",
    titleNative: "신조어와 유행어",
    subtitle: "Read a Korean group chat: 반말, 초성체, clipped compounds and Konglish — with honest notes on who you can say this to.",
    textbookBasis: [
      "Talk To Me In Korean, Real-Life Korean Conversations: Intermediate — unscripted dialogue and the TTMIK 반말 and slang lessons",
      "국립국어원 (National Institute of Korean Language), 신어 조사 보고서 — the annual neologism surveys that track coinages and their survival",
      "국립국어원 우리말샘 open dictionary — entries for 치맥, 혼밥, 맛집, 워라밸 and other coinages that have crossed into ordinary vocabulary",
      "Peter N. Liptak and Siwoo Kim, Korean Slang: As much as a Rat's Tail — register-annotated colloquial vocabulary",
      "국립국어원 표준 언어 예절 — the official guidance on speech levels that slang usage sits outside of"
    ],
    overview: [
      "Everything in Units 1 to 8 was Korean you can safely say to anyone. This unit is the opposite: it is the Korean your friends actually text each other, and almost none of it belongs in a 존댓말 situation. Treat it as a <b>reading and listening</b> skill first. Understanding 헐 대박 when a friend says it costs you nothing; saying 갑분싸 to your professor costs you something.",
      "Three warnings before you start. First, <b>every item here is 반말-zone vocabulary</b> unless the entry says otherwise — you use it with close friends of your own age or younger, and with nobody else. Second, slang <b>expires</b>, and using a dead coinage marks you more clearly than not knowing it at all; each vocab entry therefore carries an honest currency label as of 2026. Third, slang is the part of a language where a learner's instincts are worst, so the safe strategy is comprehension now and production later, after you have heard a Korean friend use the word first.",
      "The linguistics here is unusually rewarding. Korean neologisms are made by a small number of very productive processes — initial-syllable clipping (멘탈 붕괴 → 멘붕), acronymic compounding across four whole words (갑자기 분위기 싸해짐 → 갑분싸), English-Korean blending (노 + 재미 → 노잼), and a form of typing that uses bare Hangul letters as words in their own right (ㅋㅋ, ㅇㅇ, ㅠㅠ). That last one is only possible because Hangul letters are discrete, separable units — a structural property of the script that Latin-alphabet languages cannot imitate."
    ],
    sections: [
      {
        type: "dialogue",
        title: "대화: 카톡 — 이따 치맥?",
        context: "A KakaoTalk exchange between Jiho and Yerin, second-year university students and close friends of the same age. Read it as a phone screen: short bursts, no honorifics, no punctuation where a Korean would not bother. Note that every line is 반말 — this is exactly the register you must NOT use with a teacher, a stranger, or anyone older.",
        lines: [
          { speaker: "지호", text: "야 뭐 해? ㅋㅋ", roman: "Ya mwo hae? keukeu", gloss: "Hey, what are you doing? haha" },
          { speaker: "예린", text: "나 지금 혼밥 ㅋㅋㅋ 학식 진짜 노잼이야 ㅠㅠ", roman: "Na jigeum honbap keukeukeu. Haksik jinjja nojaemiya. yuyu", gloss: "I am eating alone right now lol. The cafeteria food is seriously joyless (crying)" },
          { speaker: "지호", text: "헐 대박 나도 아직 안 먹었어", roman: "Heol daebak. Nado ajik an meogeosseo.", gloss: "Whoa, no way. I have not eaten yet either." },
          { speaker: "예린", text: "그럼 이따 치맥 어때? 학교 앞에 맛집 하나 알아", roman: "Geureom itta chimaek eottae? Hakgyo ape matjip hana ara.", gloss: "Then how about chicken and beer later? I know a good place in front of campus." },
          { speaker: "지호", text: "ㅇㅇ 콜 ㅋㅋ 근데 나 오늘 시험 완전 망했어 멘붕 왔어 ㅠㅠ", roman: "Eungeung kol keukeu. Geunde na oneul siheom wanjeon manghaesseo. Menbung wasseo. yuyu", gloss: "Yeah, deal, haha. But I totally bombed my exam today. Complete meltdown (crying)" },
          { speaker: "예린", text: "아 진짜? 괜찮아 시험 끝나고 치맥이 국룰이지 ㅋㅋ", roman: "A jinjja? Gwaenchana. Siheom kkeunnago chimaegi gungnuriji keukeu.", gloss: "Oh really? It is fine. Chicken and beer after an exam is the unwritten rule, haha" },
          { speaker: "지호", text: "ㅋㅋㅋㅋ 인정 너 진짜 인싸다", roman: "Keukeukeukeu. Injeong. Neo jinjja inssada.", gloss: "hahaha Agreed. You are such an extrovert." },
          { speaker: "예린", text: "아니야 나 완전 아싸야 ㅋㅋ 여섯 시에 보자!", roman: "Aniya na wanjeon assaya keukeu. Yeoseot sie boja!", gloss: "No way, I am a total loner haha. See you at six!" },
          { speaker: "지호", text: "ㅇㅋ 이따 봐 셀카도 찍자 ㅋㅋ", roman: "Oke. Itta bwa. Selkado jjikja keukeu.", gloss: "OK. See you later. Let us take a selfie too, haha" },
          { speaker: "예린", text: "ㅇㅇ 파이팅!!", roman: "Eungeung. Paiting!!", gloss: "Yep. You got this!!" }
        ]
      },
      {
        type: "vocab",
        title: "단어: what Koreans actually type",
        items: [
          {
            term: "대박",
            roman: "daebak",
            gloss: "amazing, incredible, no way (also: a huge hit)",
            pos: "interjection / noun · casual, mild · still current (2026)",
            example: { text: "헐 대박, 진짜야?", roman: "Heol daebak, jinjjaya?", gloss: "Whoa, amazing — is that for real?" },
            linguistics: {
              origin: "native Korean or Sino-Korean (disputed)",
              etymology: [
                "Two competing accounts, and neither is settled. The popular etymology reads it as 대 (大, big) plus 박 (gourd), pointing to the folktale 흥부전, in which the poor brother saws open a gourd and treasure pours out — a jackpot in the most literal sense. The competing scholarly proposal is 大舶, a large trading ship, whose arrival in port meant a windfall for a merchant.",
                "The gourd account is the one Koreans themselves usually give, but folk etymologies are common precisely because they are satisfying, so it should not be reported as established. What is documented is the usage history: the noun phrase 대박이 나다 (to be a smash hit) is decades old and unremarkable, while the bare interjection 대박! meaning wow spread through youth speech in the 2000s and has since gone fully mainstream.",
                "<b>Register and currency:</b> Still thoroughly current in 2026 and the mildest item in this unit — you will hear it from broadcasters and from people in their fifties. It is nevertheless casual: fine in 반말 and tolerable in warm 해요체 among peers, but out of place in a business meeting or with a professor."
              ],
              script: [
                "Written in Hangul only. The 大 reading would give 대 and 舶 would give 박, so both proposed etymologies are orthographically invisible — which is part of why the question stays open."
              ],
              phonology: [
                "대박 is [대박] with an unreleased final ㄱ. The interjection is normally said with a sharp falling pitch on the second syllable, quite unlike the flat noun 대박 in 대박 상품.",
                "The intensified 개대박 and the stretched 대애박 both occur in speech and texting; lengthening a vowel for emphasis is a general Korean expressive device."
              ],
              cognates: [
                "Same family: 대박나다 (to become a smash hit), 대박집 (a wildly popular restaurant), 쪽박 (a small gourd — the opposite, meaning to go bust; 쪽박 차다 is to be ruined).",
                "The 쪽박/대박 pair is strong support for the gourd etymology, since 쪽박 unambiguously contains 박 in the gourd sense.",
                "Near-synonyms by register: 굉장하다 (formal), 엄청나다 (neutral), 쩐다 (slangier and coarser — avoid)."
              ]
            }
          },
          {
            term: "헐",
            roman: "heol",
            gloss: "whoa, ugh, no way (shock, disbelief or mild dismay)",
            pos: "interjection · 반말 / texting only · current, though it reads as millennial (2026)",
            example: { text: "헐, 그걸 진짜 샀어?", roman: "Heol, geugeol jinjja sasseo?", gloss: "Whoa, you actually bought that?" },
            linguistics: {
              origin: "native Korean, expressive (etymology uncertain)",
              etymology: [
                "헐 has no agreed source. The most common explanation treats it as a written rendering of a sharp exhalation — the sound of the breath going out of you — which would put it with 어휴 and 헉 in the class of breath-based interjections. Others connect it to 헐레벌떡 (panting) or to a clipped 허얼. None of these is documented; report it as uncertain.",
                "What is documented is its diffusion: it spread out of early-2000s Korean internet forum culture and was mainstream by around 2010. It occupies a wide semantic range — genuine shock, secondhand embarrassment, disappointment, or a placeholder when a situation is simply too much to comment on.",
                "<b>Register and currency:</b> Still in daily use in 2026 but now carries a faint generational stamp: it is the interjection of people who were teenagers in the 2010s. Text it to friends freely; never write it in an email, and do not use it in any 존댓말 exchange, where its bluntness reads as childish."
              ],
              script: [
                "One syllable block: ㅎ + ㅓ + ㄹ. In texting it is stretched for effect — 헐, 허얼, 헐헐, 헐랭 — with length mapping onto intensity, the same principle that governs ㅋㅋㅋ."
              ],
              phonology: [
                "헐 is [헐], said with a long fall. The ㄹ is a clear lateral coda.",
                "A distinct interjection 헉 [헉] means a sharp gasp of alarm and is not interchangeable: 헉 is fright, 헐 is disbelief."
              ],
              cognates: [
                "Interjection neighbours: 헉 (gasp), 대박 (wow), 어머 (oh my — traditionally female-associated), 아이고 (a general-purpose sigh, all ages), 와 (wow, neutral and safe in any register).",
                "If you want one interjection that is safe everywhere, it is 와 or 정말요. 헐 is not that word."
              ]
            }
          },
          {
            term: "ㅋㅋ",
            roman: "keukeu",
            gloss: "haha (typed laughter)",
            pos: "texting particle · written only · permanent fixture (2026)",
            audio: "크크",
            example: { text: "아 진짜 웃기다 ㅋㅋㅋ", roman: "A jinjja utgida keukeukeu.", gloss: "Ah, that is really funny hahaha" },
            linguistics: {
              origin: "native Korean, sound-symbolic",
              etymology: [
                "ㅋ is the Hangul letter kieuk, and repeating it renders the sound of laughter — 크크 or 키키 spelled with the consonant alone. Unlike an abbreviation, it is not short for anything: it is a phonetic pictograph of a laugh, comparable in function to English <i>hahaha</i> but written in a way only Hangul allows, because a Korean consonant letter is a discrete unit that can be typed outside a syllable block.",
                "It dates to the earliest Korean online communication — PC통신 bulletin boards of the early 1990s — and has outlived every other coinage in this unit. Treat it as permanent infrastructure rather than as slang.",
                "<b>Register and currency:</b> Universal in texting among peers and increasingly tolerated in workplace messengers downward or laterally. It is still <b>writing only</b> — nobody says it aloud — and it does not belong in an email to a professor or a client. Note also the pairing rule below: ㅋㅋ to friends, ㅎㅎ upward."
              ],
              script: [
                "ㅋ is ㄱ with one added stroke, Sejong's way of writing aspiration. Because Hangul letters are separable units rather than fused into a syllable, they can be typed alone — which is the structural precondition for this entire writing style. The Korean term for the practice is 초성체, initial-consonant style.",
                "Writing the syllables out in full as 크크 or 키키 changes the meaning: full spellings read as a villain's chuckle, and Korean subtitles use 크크크 for exactly that. The bare-jamo form is the neutral one."
              ],
              phonology: [
                "Set the TTS audio for this entry to 크크 so it has something speakable; the written form has no spoken counterpart.",
                "<b>Length is meaning.</b> A single ㅋ can read as cold, dismissive or sarcastic — sending just ㅋ after a friend's joke is a small insult. ㅋㅋ is neutral acknowledgement, ㅋㅋㅋㅋ is genuine amusement, and a long run signals real laughter. Learners routinely send one ㅋ and cause offence without knowing it.",
                "<b>ㅋㅋ versus ㅎㅎ:</b> ㅎㅎ (from 하하 / 허허) is softer, warmer and more deferential. The unwritten convention is ㅋㅋ sideways and downward, ㅎㅎ upward — to a senior colleague, an older student, or anyone you would use 존댓말 with. This is a genuine register distinction encoded in two letters."
              ],
              cognates: [
                "The typed-affect family: ㅎㅎ (soft laugh), ㅠㅠ and ㅜㅜ (crying), ㅡㅡ (deadpan annoyance), ㅇ_ㅇ (blank stare), ^^ (smile, older and now slightly dated).",
                "Full-word relatives: 웃기다 (to be funny), 빵 터지다 (to burst out laughing, literally to explode), 웃프다 (a blend of 웃기다 and 슬프다 — funny-sad, the Korean equivalent of bittersweet laughter).",
                "Cross-language: Japanese uses 笑 or w / www for the same job, and Mandarin uses 哈哈 or 233. Every East Asian internet culture built its own laughter marker out of its own script."
              ]
            }
          },
          {
            term: "ㅇㅇ",
            roman: "eungeung",
            gloss: "yeah, yep, mm-hm",
            pos: "texting initialism · 반말 only · current (2026)",
            audio: "응응",
            example: { text: "ㅇㅇ 나도 갈게", roman: "Eungeung nado galge.", gloss: "Yeah, I will go too." },
            linguistics: {
              origin: "native Korean, initialism",
              etymology: [
                "A true <b>초성체</b> initialism: 응응 (yeah yeah) reduced to its two initial consonants. Unlike ㅋㅋ, which is sound-symbolic, this one really is an abbreviation, and it can be expanded back into a pronounceable word.",
                "The mechanism is highly productive and generates a whole lexicon: ㄴㄴ (노노, no), ㅇㅋ (오케이, OK), ㄱㅅ (감사, thanks), ㅈㅅ (죄송, sorry), ㅅㄱ (수고, good work), ㅂㅂ (바이바이, bye), ㅊㅋ (축하, congrats), ㅁㄹ (몰라, dunno), ㄱㄱ (고고, let us go).",
                "<b>Register and currency:</b> Current and very common, but strictly 반말 and strictly typed. Sending ㅇㅋ or ㄱㅅ to a professor or a manager is a real social error — the abbreviation reads as if you could not be bothered to type four characters for them. Note that even ㄱㅅ, which expands to a polite word, is rude upward precisely because it is abbreviated."
              ],
              script: [
                "ㅇ (ieung) is the silent initial placeholder in a syllable like 응 — so as an initialism it is literally the letter that stands for no sound, standing in for the syllable. The batchim ㅇ of 응 is what carries the actual [ŋ], and the initialism throws it away, which is why the form only works in writing.",
                "Korean keyboards make this effortless: the two-set layout puts consonants under the left hand, so ㅇㅇ is two adjacent taps."
              ],
              phonology: [
                "Set the TTS audio to 응응 so the item is speakable; ㅇㅇ itself is unpronounceable as written.",
                "The spoken source 응 is [ɯŋ], a closed-mouth nasal grunt of agreement. Its polite counterpart is 네 or 예, and there is no honorific version of 응 — you switch words entirely.",
                "<b>Tone warning:</b> a bare ㅇㅇ with no other text reads as curt, and Koreans will read it as mild annoyance. Soften it with ㅋㅋ or a word: ㅇㅇ 알겠어 rather than a lone ㅇㅇ."
              ],
              cognates: [
                "The initialism family listed above, plus longer ones that are effectively puzzles: ㅇㄱㄹㅇ (이거 레알, this is real), ㅂㅂㅂㄱ (반박 불가, no argument possible).",
                "Spoken counterparts by register: 응 / 어 (반말), 네 / 예 (존댓말), 그렇습니다 (formal)."
              ]
            }
          },
          {
            term: "ㅠㅠ",
            roman: "yuyu",
            gloss: "crying eyes (sadness, pleading, mock-despair)",
            pos: "texting emoticon · written only · permanent fixture (2026)",
            audio: "흑흑",
            example: { text: "시험 망했어 ㅠㅠ", roman: "Siheom manghaesseo. yuyu", gloss: "I bombed the exam (crying)" },
            linguistics: {
              origin: "native Korean, pictographic use of a vowel letter",
              etymology: [
                "The Hangul vowel ㅠ (yu) is a horizontal bar with two strokes descending from it. Rotate nothing, change nothing: it simply <i>looks</i> like a pair of eyes with tears running down. ㅠㅠ is therefore not an abbreviation and not a sound — it is a picture drawn with a letter.",
                "This makes it the third distinct mechanism in this unit's texting vocabulary. ㅋㅋ is <b>phonetic</b> (a letter standing for a sound), ㅇㅇ is <b>abbreviatory</b> (a letter standing for a word), and ㅠㅠ is <b>pictographic</b> (a letter standing for an image). One script, three independent semiotic uses — a genuinely unusual situation, made possible by the geometric simplicity of Sejong's letter shapes.",
                "<b>Register and currency:</b> Permanent and universal in texting. Softer and more socially flexible than most items here — it is common even in semi-polite messages, since it reads as endearing rather than rude. Still writing-only, and still out of place in formal correspondence."
              ],
              script: [
                "ㅠ derives from ㅜ with an added stroke, in Sejong's system where the added stroke marks a y-glide. Its cousin ㅜ is used the same way (ㅜㅜ), and mixed forms such as ㅠㅜ suggest uneven, snuffling crying.",
                "The related 야민정음 tradition takes this visual play further: 눈물 (tears) written upside down looks like 롬곡, which is now itself a slang word for tears. See the grammar section on visual letter puns."
              ],
              phonology: [
                "There is no pronunciation. If forced to voice it, Koreans say 흑흑 (sobbing) or 엉엉 (bawling), which is why the TTS audio for this entry is set to 흑흑 rather than to the letter name.",
                "The romanisation yuyu is a spelling-out of the letter name and is not how anyone reads the symbol; it is given here only so the entry has a Latin form."
              ],
              cognates: [
                "The pictographic emoticon family: ㅜㅜ (crying), ㅡㅡ (flat, unimpressed), ㅇ_ㅇ (staring), ^^ (smiling, now dated), ㅎㅎ; also the Korean-style horizontal emoticons that read without tilting your head, unlike the Western :-).",
                "Word relatives: 울다 (to cry), 눈물 (tears), 슬프다 (to be sad), 속상하다 (to be upset)."
              ]
            }
          },
          {
            term: "노잼",
            roman: "nojaem",
            gloss: "boring, not funny, no fun",
            pos: "noun / adjective-ish · 반말 only · still current (2026)",
            example: { text: "그 영화 진짜 노잼이야.", roman: "Geu yeonghwa jinjja nojaemiya.", gloss: "That movie is seriously boring." },
            linguistics: {
              origin: "blend: English loan + clipped native compound",
              etymology: [
                "노 is the English word <i>no</i>, borrowed as a bare negator, and 잼 is a clipping of 재미 (fun — itself from Sino-Korean 滋味 by way of 자미, as covered in Unit 7's 재미있다). So 노잼 is an English particle glued to a truncated Korean noun: no-fun.",
                "The construction is productive and gives a small paradigm: 꿀잼 (honey-fun, hilarious), 핵잼 (nuclear-fun), 개꿀잼 (intensified further), and 노답 (no + 답, no answer — hopeless). The 노- prefix has become a live Korean morpheme, attaching to native and Sino-Korean roots alike, which is a real case of a borrowed function word being grammaticalised.",
                "<b>Register and currency:</b> Of the 잼 family, 노잼 has aged best and is still in ordinary use in 2026 — it survived because it fills a lexical gap that 재미없다 fills only clumsily. 반말 only. Do not use it about a person's work to their face; it is blunt."
              ],
              script: [
                "노 (ㄴ + ㅗ) 잼 (ㅈ + ㅐ + ㅁ). Written in Hangul only. The English source shows up nowhere in the spelling, which is typical of how thoroughly Korean naturalises loan morphemes."
              ],
              phonology: [
                "노잼 is [노잼]. English /n/ and /o/ map cleanly onto ㄴ and ㅗ with no adaptation needed — one reason <i>no</i> was borrowable as a bare morpheme where a word like <i>bland</i> could never be.",
                "It behaves like a noun and takes the copula: 노잼이야 (반말), 노잼이에요 (해요체, but the mismatch of a slang root with a polite ending is itself a joke). It does not conjugate as an adjective: 노잼해요 is not Korean."
              ],
              cognates: [
                "The 잼 family: 꿀잼, 핵잼, 개노잼, 존잼 (see the warning below), 갓띵작 for a masterpiece.",
                "<b>Honest warning:</b> you will also meet 존잼 and 존맛 / JMT with the same meaning-shape. The 존- prefix is a clipping of a vulgar intensifier, so those forms are genuinely coarse despite looking innocuous in Hangul. They are extremely common online; understand them, and do not produce them.",
                "Standard equivalents: 재미없다 (boring), 지루하다 (tedious), 심심하다 (bored, of a person)."
              ]
            }
          },
          {
            term: "꿀잼",
            roman: "kkuljaem",
            gloss: "hilarious, great fun",
            pos: "noun · 반말 only · fading — understood everywhere, said less (2026)",
            example: { text: "어제 그 예능 꿀잼이었어.", roman: "Eoje geu yeneung kkuljaemieosseo.", gloss: "That variety show yesterday was hilarious." },
            linguistics: {
              origin: "native compound with a clipped element",
              etymology: [
                "꿀 (honey) plus 잼 (clipped 재미). 꿀 is native, Middle Korean ᄭᅮᆯ, and it has become one of Korean's most productive slang intensifiers, meaning roughly sweet, cushy or excellent: 꿀팁 (a great tip), 꿀알바 (an easy part-time job), 꿀조합 (a great combination), 꿀성대 (a beautiful singing voice), 꿀빨다 (to have it easy).",
                "The metaphor is transparent and old — sweetness for pleasantness is cross-linguistically common — but its use as a bound intensifier prefix dates to the 2010s internet.",
                "<b>Register and currency:</b> Fading. 꿀잼 peaked in the mid-2010s and now sounds a half-generation old; younger speakers are more likely to say 개웃겨 or 존잼 (coarse, see above) or simply 웃기다. Everyone still understands it, so keep it as passive vocabulary. 반말 only."
              ],
              script: [
                "꿀 uses the tense consonant ㄲ, which descends from the Middle Korean initial cluster in ᄭᅮᆯ — the ㅅ-plus-ㄱ sequence that collapsed into a tense stop in the 17th century, the same process behind 쓰다 in Unit 5."
              ],
              phonology: [
                "Commonly pronounced with tensification at the compound seam, [꿀쨈], although the spelling shows only 잼. Native compounds tensify unpredictably, so this is worth hearing rather than deriving.",
                "Like 노잼 it is a noun and takes the copula: 꿀잼이야, 꿀잼이었어."
              ],
              cognates: [
                "The 꿀- family: 꿀팁, 꿀알바, 꿀조합, 꿀맛 (delicious — this one is standard, not slang, and is safe in polite speech).",
                "Note that 꿀맛 is ordinary Korean while 꿀잼 is slang; the same prefix straddles the register line depending on what it attaches to.",
                "Standard equivalents: 재미있다, 웃기다, 유쾌하다."
              ]
            }
          },
          {
            term: "멘붕",
            roman: "menbung",
            gloss: "a total meltdown, brain freeze, losing it",
            pos: "noun (with 오다 or 하다) · casual · dated but universally understood (2026)",
            example: { text: "시험 보고 완전 멘붕 왔어.", roman: "Siheom bogo wanjeon menbung wasseo.", gloss: "After the exam I completely lost it." },
            linguistics: {
              origin: "hybrid clipping: English loan + Sino-Korean",
              etymology: [
                "멘탈 (mental, from English, used as a noun meaning one's mental state) plus 붕괴 (崩壞, collapse). Each word is clipped to its first syllable and the two are welded together: 멘 + 붕 = 멘붕. The result mixes an English loan with a Sino-Korean compound in a single two-syllable word, which is about as good a snapshot of the modern Korean lexicon as you could design.",
                "붕괴 is worth unpacking: 崩 (to collapse, of a mountain — the mountain radical 山 over 朋 as phonetic) plus 壞 (to destroy, ruin). It is a heavy, formal word normally used of buildings and financial systems, and applying it to a person's composure is precisely the joke.",
                "The coinage spread around 2011 to 2012 and appears in the National Institute of Korean Language neologism surveys of that period — one of the best-documented Korean slang births.",
                "<b>Register and currency:</b> Dated. 멘붕 marks you as someone who was online in the early 2010s, and younger speakers use it semi-ironically or not at all. But it is understood by absolutely everyone, so it is safe to recognise and mildly risky to produce. Casual contexts only."
              ],
              script: [
                "멘 (ㅁ + ㅔ + ㄴ) 붕 (ㅂ + ㅜ + ㅇ). The hanja 崩壞 lie behind the second syllable but are never written; clipped slang always loses its orthographic history."
              ],
              phonology: [
                "멘붕 is [멘붕]. The ㄴ batchim of 멘 does not assimilate to the following ㅂ in careful speech, though rapid speech may produce [멤붕] by place assimilation — a change Korean orthography refuses to recognise, as with 친구 [칭구] in Unit 7.",
                "English /æ/ in <i>mental</i> maps to Korean ㅔ, not ㅐ, in current loan practice: 멘탈, not 맨탈."
              ],
              cognates: [
                "The 멘탈 family: 멘탈이 강하다 (to be mentally tough), 멘탈 관리 (managing your headspace), 유리 멘탈 (glass mental — someone easily rattled), 강철 멘탈 (steel mental).",
                "Korean words with 崩: 붕괴 (collapse), 붕어 is unrelated. Korean words with 壞: 파괴 (破壞, destruction), 손괴 (損壞, damage).",
                "Same formation pattern: 갑분싸, 워라밸, 심쿵 — all first-syllable clippings across word boundaries."
              ]
            }
          },
          {
            term: "심쿵",
            roman: "simkung",
            gloss: "heart-skip, a swoon (from someone being adorable or attractive)",
            pos: "noun (with 하다) · casual · fading (2026)",
            example: { text: "그 배우 웃는 거 보고 심쿵했어.", roman: "Geu baeu unneun geo bogo simkunghaesseo.", gloss: "I swooned when I saw that actor smile." },
            linguistics: {
              origin: "hybrid clipping: Sino-Korean + native ideophone",
              etymology: [
                "심장 (心臟, heart) clipped to 심, plus 쿵, the native ideophone for a heavy thud. Heart-thud. The formation is the same first-syllable clipping seen in 멘붕, but here the second element is not a clipping at all — it is a whole sound-symbolic word, which is why 심쿵 feels lighter and more playful than 멘붕.",
                "쿵 belongs to Korean's vast ideophone inventory and grades by consonant strength: 궁 / 쿵 / 꿍 and 둥 / 퉁 / 뚱 vary in weight and impact through the plain, aspirated and tense series. Choosing 쿵 rather than 콩 makes the heartbeat heavy rather than light.",
                "The word emerged around 2014 to 2015 in fan and variety-show culture and was widely covered in the press at the time.",
                "<b>Register and currency:</b> Fading. It survives mainly in entertainment media, fan communities and marketing copy; in everyday conversation it now sounds a bit twee. Casual only, and note that saying 심쿵 about a specific person to their face is flirtatious."
              ],
              script: [
                "심 = ㅅ + ㅣ + ㅁ, the hanja 心 (a pictograph of a heart with its chambers and aorta). 쿵 = ㅋ + ㅜ + ㅇ, purely native and unwritable in hanja."
              ],
              phonology: [
                "심쿵 is [심쿵]. The aspirated ㅋ carries the impact; replacing it with a plain ㄱ would give 심궁, which means nothing and sounds soft.",
                "It takes 하다: 심쿵하다, 심쿵했어요. There is also the noun phrase 심쿵 주의 (warning, heart-stopping content ahead), a caption convention."
              ],
              cognates: [
                "Korean words with 心: 심장 (heart, the organ), 관심 (關心, interest), 안심 (安心, relief), 중심 (中心, centre), 점심 (點心, lunch — Unit 5).",
                "Ideophone neighbours: 쿵쾅 (banging), 두근두근 (a fluttering heartbeat — standard Korean, safe in any register, and the polite way to say what 심쿵 says), 콩닥콩닥 (a lighter flutter).",
                "If you want the register-safe version of this idea, use 두근거리다."
              ]
            }
          },
          {
            term: "인싸",
            roman: "inssa",
            gloss: "an insider — a socially central, popular person",
            pos: "noun · casual · past peak but still used (2026)",
            example: { text: "쟤는 진짜 인싸야.", roman: "Jyaeneun jinjja inssaya.", gloss: "He is a real social butterfly." },
            linguistics: {
              origin: "clipped English loan",
              etymology: [
                "From English <i>insider</i>, borrowed as 인사이더 and then clipped to two syllables — but note what happens to the consonant. The plain ㅅ of 사 becomes the tense ㅆ: 인싸, not 인사. This tensification is <b>expressive</b>, not phonological: Korean slang systematically tenses consonants to make a word feel punchier, and the same thing happens in 아싸, 쌤 (from 선생님), 짱 and 꿀.",
                "The English source word means someone with inside knowledge; Korean shifted it to mean someone inside the social circle, which is a genuine semantic re-analysis rather than a borrowing error. Korean coined the meaning it needed.",
                "The pair 인싸 and 아싸 spread rapidly in 2018 and dominated that year's youth-slang coverage.",
                "<b>Register and currency:</b> Past its peak but still in ordinary use, having settled into the language rather than dying. Casual only. Calling someone 인싸 is usually friendly; calling yourself one is a boast, which is why the dialogue's 예린 deflects with 아싸."
              ],
              script: [
                "인 (ㅇ + ㅣ + ㄴ) 싸 (ㅆ + ㅏ). The doubled ㅅ writes tenseness directly, so the expressive intensification is visible on the page — an advantage of a featural script."
              ],
              phonology: [
                "인싸 is [인싸]. The tense ㅆ is articulated with a constricted glottis and no aspiration; an English speaker producing a plain [s] will say 인사, which means a greeting and will confuse everyone.",
                "The intermediate degree 그럴싸 is unrelated, but note 반인싸 (half-insider) and 인싸력 (insider-power, with the Sino-Korean suffix 力) as live derivatives."
              ],
              cognates: [
                "Same set: 아싸 (outsider), 핵인싸 (an extreme extrovert), 인싸템 (an item everyone popular has, with English <i>item</i> clipped to 템), 인싸력.",
                "Related loan-clippings with expressive tensing: 쌤 (teacher, from 선생님), 짱 (the best), 깜놀 (from 깜짝 놀라다, startled).",
                "Standard equivalents: 사교적이다 (sociable), 외향적이다 (extroverted), 인기가 많다 (popular)."
              ]
            }
          },
          {
            term: "아싸",
            roman: "assa",
            gloss: "an outsider — a loner, someone outside the social circle",
            pos: "noun · casual, self-deprecating · past peak but still used (2026)",
            example: { text: "나 대학교 때 완전 아싸였어.", roman: "Na daehakgyo ttae wanjeon assayeosseo.", gloss: "I was a total loner in university." },
            linguistics: {
              origin: "clipped English loan",
              etymology: [
                "From English <i>outsider</i> via 아웃사이더, clipped to the first syllable of each half and tensed: 아 + 싸. Formed on exactly the same template as 인싸, and the two were coined as a pair.",
                "Its pragmatics are notably gentler than the English word. 아싸 is most often used about <i>oneself</i>, as a light self-deprecating move, and Korean online culture has largely reclaimed it — 아싸의 삶 (the outsider life) is a genre of affectionate content about enjoying solitude, closely tied to the 혼밥 phenomenon below.",
                "<b>Register and currency:</b> Same trajectory as 인싸 — past peak, still current, casual only. Applying it to someone else can sting, so the safe use is about yourself."
              ],
              script: [
                "아 (ㅇ + ㅏ) 싸 (ㅆ + ㅏ). Two identical vowels give the word its bouncy, chantable shape."
              ],
              phonology: [
                "아싸 is [아싸]. It is a <b>homophone</b> of the celebratory shout 앗싸! (yes! got it!), which is an unrelated native interjection. Context separates them easily, but the coincidence is part of why the word caught on — the pun was free.",
                "English /aʊ/ in <i>out</i> would normally give 아우, and the clipping simply discards the second half, leaving 아."
              ],
              cognates: [
                "Same set: 인싸, 핵아싸, 아싸력, 혼코노 (혼자 코인 노래방 — going to a coin karaoke booth alone, a signature 아싸 activity).",
                "The homophone: 앗싸 (a cheer of triumph), which you will also see spelled 아싸 in casual typing.",
                "Standard equivalents: 내성적이다 (introverted), 혼자 있는 걸 좋아하다 (to like being alone)."
              ]
            }
          },
          {
            term: "치맥",
            roman: "chimaek",
            gloss: "fried chicken and beer (as a combined occasion)",
            pos: "noun · casual but fully mainstream · fully current, now ordinary vocabulary (2026)",
            example: { text: "오늘 저녁에 치맥 어때?", roman: "Oneul jeonyeoge chimaek eottae?", gloss: "How about chicken and beer this evening?" },
            linguistics: {
              origin: "clipped compound: English loan + Sino-Korean",
              etymology: [
                "치킨 (chicken, from English) plus 맥주 (麥酒, beer — literally barley-wine), each clipped to its first syllable. Like 멘붕 it welds a loanword to a Sino-Korean word, and like 멘붕 it is two syllables, which is the strongly preferred shape for a Korean clipped compound.",
                "麥酒 is itself worth noting: 麥 (barley — a pictograph of a wheat or barley plant with roots) plus 酒 (alcohol — the water radical 氵 plus 酉, a wine jar). Japanese uses the same characters for ビール only in formal writing, while Mandarin says 啤酒 píjiǔ, a phonetic borrowing of <i>beer</i>. Three languages, three strategies for the same drink.",
                "치맥 is a food-and-drink pairing treated as a single social event, and it has become genuinely institutional: Daegu has run a 치맥 festival since 2013, and the 2014 drama 별에서 온 그대 set off a chicken-and-beer boom in China. The word appears in 우리말샘, the National Institute of Korean Language's open dictionary.",
                "<b>Register and currency:</b> Fully current and no longer really slang — it has crossed into ordinary vocabulary, and you can say it in 존댓말 to a colleague without any awkwardness (치맥 하실래요?). It remains informal in the way that <i>grabbing a beer</i> is informal in English."
              ],
              script: [
                "치 (ㅊ + ㅣ) 맥 (ㅁ + ㅐ + ㄱ). The hanja 麥 lies behind 맥 but is never written in the slang compound."
              ],
              phonology: [
                "치맥 is [치맥] with an unreleased final ㄱ; 치맥이 resyllabifies to [치매기].",
                "English /tʃ/ maps to the aspirated ㅊ, and the English final /n/ of <i>chicken</i> is simply discarded by the clipping. The 맥 preserves the Middle Chinese entering-tone -k of 麥, the same conservatism seen in 책 and 댁 in earlier units."
              ],
              cognates: [
                "The X + 맥 family is fully productive: 소맥 (소주 + 맥주, the soju-beer bomb), 피맥 (피자 + 맥주), 책맥 (책 + 맥주, reading with a beer), 캠맥 (camping with a beer).",
                "Korean words with 麥: 맥주, 맥아 (麥芽, malt), 보리 is the native word for barley.",
                "Korean words with 酒: 소주 (燒酒), 청주 (淸酒), 음주 (飮酒, drinking), 주점 (酒店, a pub)."
              ]
            }
          },
          {
            term: "혼밥",
            roman: "honbap",
            gloss: "eating alone; a solo meal",
            pos: "noun (with 하다) · casual but mainstream · fully current (2026)",
            example: { text: "요즘 혼밥 자주 해요.", roman: "Yojeum honbap jaju haeyo.", gloss: "I eat alone a lot these days." },
            linguistics: {
              origin: "clipped native compound",
              etymology: [
                "혼자 (alone) clipped to 혼, plus 밥 (rice, a meal — Unit 5). Note that the clipping here lands on a syllable that happens to coincide with the Sino-Korean 婚 of 결혼, which is a pure accident: 혼자 is native, from Middle Korean ᄒᆞ오ᅀᅡ, and has nothing to do with marriage.",
                "The word emerged around 2015 to 2016 alongside a genuine social shift — single-person households passed a third of all Korean households in the late 2010s and are now the single largest household type. 혼밥 was the lexical response to a demographic fact, which is why it stuck when flashier coinages of the same years did not.",
                "It spawned a whole paradigm, and there is even a jokey 혼밥 레벨 scale circulating online that ranks solo dining from a convenience store up to Korean barbecue alone, which tells you how much social weight solo eating once carried.",
                "<b>Register and currency:</b> Fully current and register-neutral enough for 해요체 and for news copy. Fifteen years ago eating alone in Korea was faintly pitiable; the word helped normalise it."
              ],
              script: [
                "혼 (ㅎ + ㅗ + ㄴ) 밥 (ㅂ + ㅏ + ㅂ). Both halves native, written in Hangul only."
              ],
              phonology: [
                "혼밥 is [혼밥], with no tensification at the seam — compare 꿀잼 [꿀쨈], which does tensify. Compound tensification in Korean is lexically idiosyncratic, and slang compounds inherit that unpredictability.",
                "혼밥을 is [혼바블]; 혼밥하다 gives 혼밥해요, 혼밥했어요."
              ],
              cognates: [
                "The 혼- family: 혼술 (drinking alone), 혼영 (going to a film alone), 혼행 (travelling alone), 혼코노 (solo coin karaoke), 혼공 (studying alone).",
                "Adjacent social vocabulary: 1인 가구 (single-person household), 나홀로족 (the go-it-alone set), 소확행 (小確幸, small but certain happiness — a coinage taken from Murakami Haruki by way of Japanese).",
                "Standard equivalent: 혼자 밥을 먹다, which is what you would write in an essay."
              ]
            }
          },
          {
            term: "맛집",
            roman: "matjip",
            gloss: "a place known for great food",
            pos: "noun · neutral · fully current, ordinary vocabulary (2026)",
            example: { text: "학교 앞에 맛집 하나 알아.", roman: "Hakgyo ape matjip hana ara.", gloss: "I know a good food place in front of campus." },
            linguistics: {
              origin: "native compound",
              etymology: [
                "맛 (taste — Unit 6, from Middle Korean 맛) plus 집 (house, establishment). The 집 element is a fully productive suffix for premises in Korean: 술집 (bar), 밥집 (a plain eatery), 빵집 (bakery), 국숫집 (noodle shop), 헌책방 uses 방 instead.",
                "맛집 began as informal food-blog vocabulary in the 2000s and has been completely absorbed; it now appears in newspapers, on signage and in the National Institute of Korean Language open dictionary. It is included in this unit as a deliberate contrast: it shows what happens when a coinage <b>wins</b> and stops being slang at all.",
                "<b>Register and currency:</b> Register-neutral and safe everywhere — you can say 맛집이에요 to anyone. This is the end state that most of the words in this unit will never reach."
              ],
              script: [
                "맛 (ㅁ + ㅏ + ㅅ) 집 (ㅈ + ㅣ + ㅂ). Both native."
              ],
              phonology: [
                "맛집 is [맏찝]: the ㅅ batchim neutralises to [t] and tensifies the following ㅈ. Revised Romanization writes matjip, following the morphological spelling for a lexicalised compound.",
                "맛집을 is [맏찌블]. Learners who say [마스집] will not be understood."
              ],
              cognates: [
                "The 집 family: 술집, 빵집, 국밥집, 고깃집, 단골집 (a regular haunt).",
                "Food-discovery vocabulary: 맛집 탐방 (a food crawl), 웨이팅 (from English <i>waiting</i>, the queue outside a popular restaurant), 인생맛집 (a life-changing restaurant, with 인생 人生 used as an intensifier — 인생 사진, 인생 영화).",
                "The Sino-Korean formal counterpart is 유명 음식점 (a famous eating establishment)."
              ]
            }
          },
          {
            term: "국룰",
            roman: "gungnul",
            gloss: "the unwritten standard, the default everyone agrees on",
            pos: "noun · casual · current (2026)",
            example: { text: "비 오는 날엔 파전이 국룰이지.", roman: "Bi oneun naren pajeoni gungnuriji.", gloss: "Savoury pancake on a rainy day is the unwritten rule." },
            linguistics: {
              origin: "hybrid clipping: Sino-Korean + English loan",
              etymology: [
                "국민 (國民, the citizenry) clipped to 국, plus 룰 (from English <i>rule</i>). A national rule — meaning not a law but a convention so widely shared that departing from it is faintly perverse.",
                "The 국민 prefix was already productive before this coinage in the media sense of everyone's: 국민 배우 (the nation's actor), 국민 여동생 (the nation's little sister), 국민 간식 (the national snack). 국룰 simply clipped that prefix and attached a loanword.",
                "It spread through gaming and streaming communities in the late 2010s and is now general. Its typical use is to justify a small pleasure as culturally mandatory, which is exactly how 예린 uses it in the dialogue about chicken after an exam.",
                "<b>Register and currency:</b> Current and healthy in 2026. Casual — it is fine in warm 해요체 among peers but reads as jokey, so keep it out of anything formal."
              ],
              script: [
                "국 (ㄱ + ㅜ + ㄱ) 룰 (ㄹ + ㅜ + ㄹ). The hanja 國 lies behind 국 and is invisible in the spelling, as always with clipped slang."
              ],
              phonology: [
                "국룰 is pronounced <b>[궁눌]</b>, not [국룰]. Two regular rules fire in sequence: ㄹ after a ㄱ batchim becomes ㄴ (ㄱ + ㄹ → ㄱ + ㄴ), and then the ㄱ nasalises before that new ㄴ to give ㅇ. The same double change turns 독립 into [동닙] and 협력 into [혐녁].",
                "This makes 국룰 a very useful item: it is a fashionable new word whose pronunciation is governed entirely by an old, fully regular rule of Korean phonology. The Revised Romanization gungnul reflects the sound, not the spelling."
              ],
              cognates: [
                "Korean words with 國: 국민, 한국 (韓國), 국내 (國內, domestic), 국가 (國家, state), 애국 (愛國, patriotism).",
                "Same coinage pattern (Sino-Korean clip + English loan): 워라밸, 인싸템, 갓생 (from English <i>god</i> + 生, a highly disciplined life).",
                "Standard equivalents: 불문율 (不文律, an unwritten rule — the formal register word), 관례 (慣例, custom), 정석 (定石, the textbook approach)."
              ]
            }
          },
          {
            term: "워라밸",
            roman: "worabael",
            gloss: "work-life balance",
            pos: "noun · informal but mainstream · current, widely used in the press (2026)",
            example: { text: "저는 워라밸이 중요해요.", roman: "Jeoneun worabaeri jungyohaeyo.", gloss: "Work-life balance is important to me." },
            linguistics: {
              origin: "acronymic clipping of an English phrase",
              etymology: [
                "From the English phrase <i>work-life balance</i>, borrowed in full as 워크 라이프 밸런스 and then reduced to the first syllable of each element: 워 + 라 + 밸. The result is unintelligible to an English speaker even though every morpheme in it is English — the abbreviation follows Korean rules, not English ones.",
                "This is the single clearest demonstration of the difference between the two systems. English abbreviates by taking the first <b>letter</b> of each word (WLB). Korean abbreviates by taking the first <b>syllable</b> of each word, because the syllable block is the basic unit a Korean reader perceives. Apply the Korean rule to English material and you get 워라밸.",
                "The word entered Korean around 2017 to 2018 during public debate over working hours, and it survived the fad stage because the policy conversation kept going. It is now standard in HR, journalism and job advertisements.",
                "<b>Register and currency:</b> Current and unusually respectable for a coinage of this type — you can use it in 해요체 and in writing. It is still informal enough that a legal document would say 일과 삶의 균형 instead."
              ],
              script: [
                "워 (ㅇ + ㅝ) 라 (ㄹ + ㅏ) 밸 (ㅂ + ㅐ + ㄹ). Three syllables from three English words."
              ],
              phonology: [
                "워라밸 is [워라밸]. English /w/ plus /ɜr/ gives the Korean diphthong ㅝ; the /l/ of <i>life</i> becomes an intervocalic ㄹ flap; and the /v/ of <i>balance</i> maps to ㅂ, since Korean has no /v/ — the same substitution seen in 텔레비전 in Unit 5.",
                "워라밸이 resyllabifies to [워라배리], worabaeri."
              ],
              cognates: [
                "Same acronymic pattern on English material: 스라밸 (스터디 라이프 밸런스, study-life balance), 페이백, 셀프 카메라 → 셀카.",
                "Same pattern on Korean material: 갑분싸, 멘붕, 심쿵, 남친 (남자 친구), 여친, 알바 (from Japanese-mediated 아르바이트, itself from German <i>Arbeit</i>).",
                "Adjacent workplace vocabulary: 칼퇴 (칼같이 퇴근 — leaving work exactly on time), 저녁이 있는 삶 (a life with evenings, a political slogan of the 2010s), 번아웃 (burnout)."
              ]
            }
          },
          {
            term: "갑분싸",
            roman: "gapbunssa",
            gloss: "the moment a mood suddenly dies; an awkward silence after a bad joke",
            pos: "noun / interjection · 반말 only · dated — recognised, rarely said (2026)",
            example: { text: "그 말 하자마자 갑분싸 됐어.", roman: "Geu mal hajamaja gapbunssa dwaesseo.", gloss: "The moment he said that, the mood died." },
            linguistics: {
              origin: "four-word acronymic clipping",
              etymology: [
                "From the sentence 갑자기 분위기 싸해짐 — suddenly the atmosphere goes cold. Each word contributes its first syllable: 갑 + 분 + 싸. This is the Korean initial-syllable acronym at its most extreme, compressing an entire clause into three syllables.",
                "The parts: 갑자기 (suddenly, native), 분위기 (雰圍氣, atmosphere — a Sino-Korean compound of 雰 vapour, 圍 to surround, 氣 air, itself a Japanese-era translation of the scientific term <i>atmosphere</i>), and 싸하다, a native ideophonic adjective describing a cold, tingling, faintly unpleasant sensation, extended metaphorically to a room going quiet.",
                "It was one of the defining coinages of 2018 and appeared in that year's neologism coverage. Its decline has been fast, and there is a pleasing irony in the fact that saying 갑분싸 in 2026 is itself likely to cause a 갑분싸.",
                "<b>Register and currency:</b> Dated. Included here because you will still meet it in variety-show subtitles, older memes and comment threads, and because it is the best available illustration of the four-word acronym process. Recognise it; do not deploy it."
              ],
              script: [
                "갑 (ㄱ + ㅏ + ㅂ) 분 (ㅂ + ㅜ + ㄴ) 싸 (ㅆ + ㅏ). Nothing in the spelling reveals the source clause, which is why acronymic slang is opaque even to older native speakers."
              ],
              phonology: [
                "갑분싸 is [갑뿐싸]: the ㅂ batchim of 갑 tensifies the following ㅂ, exactly as in 학교 [학꾜] and 약속 [약쏙]. The romanisation gapbunssa follows the spelling rather than the sound.",
                "The tense ㅆ that ends the word comes straight from 싸하다 and is not expressive tensing, unlike the ㅆ of 인싸."
              ],
              cognates: [
                "Contemporaries from the same wave, most of them equally dated: 별다줄 (별걸 다 줄인다 — <i>they abbreviate absolutely everything</i>, a self-aware joke about this very process), 만반잘부 (만나서 반가워 잘 부탁해 — nice to meet you, be good to me), 인싸 and 아싸 above.",
                "The productive pattern continues with newer forms, but individual coinages turn over every two or three years — which is the real lesson of this entry.",
                "Standard equivalents: 분위기가 어색해지다, 썰렁하다 (to be corny, to fall flat)."
              ]
            }
          },
          {
            term: "셀카",
            roman: "selka",
            gloss: "a selfie",
            pos: "noun (with 찍다) · casual but mainstream · current (2026)",
            example: { text: "우리 셀카 한 장 찍자.", roman: "Uri selka han jang jjikja.", gloss: "Let us take one selfie." },
            linguistics: {
              origin: "clipped Konglish compound",
              etymology: [
                "셀프 (self) plus 카메라 (camera), each clipped to its first syllable. Neither element means anything in English on its own in this combination — <i>self camera</i> is not an English phrase — which makes 셀카 a genuine Konglish coinage rather than a borrowing.",
                "The chronology is worth noting: 셀카 was in wide Korean use from the early 2000s camera-phone era, several years before the English word <i>selfie</i> became international in around 2013. Korea named the thing first, in its own morphology, from English parts.",
                "The English loan 셀피 now competes with it, and 셀카 is holding its ground — partly because 셀카봉 (selfie stick) locked the shorter form into the language.",
                "<b>Register and currency:</b> Current and mild. Safe in 해요체 with peers; it is casual in the way <i>selfie</i> is casual in English, not in the way 갑분싸 is casual."
              ],
              script: [
                "셀 (ㅅ + ㅔ + ㄹ) 카 (ㅋ + ㅏ). Two syllables from two English words, following the standard Korean two-syllable target."
              ],
              phonology: [
                "셀카 is [셀카]. English /s/ before a front vowel gives plain ㅅ; the /f/ of <i>self</i> is discarded entirely by the clipping, sparing Korean the usual /f/ → ㅍ substitution.",
                "The /k/ of <i>camera</i> maps to aspirated ㅋ, following the general rule that English voiceless stops become Korean aspirates while English voiced stops become Korean plain stops: <i>coffee</i> → 커피, <i>bus</i> → 버스, <i>game</i> → 게임."
              ],
              cognates: [
                "Same family: 셀카봉 (selfie stick, with native 봉 from 棒 a pole), 셀피, 인생샷 (a once-in-a-lifetime shot), 보정 (補正, retouching), 필터.",
                "Other clipped Konglish compounds: 에어컨 (air conditioner), 리모컨 (remote control), 아파트 (apartment), 노트북 (laptop — note the meaning shift, since an English notebook is not a computer), 핸드폰 (mobile phone, a Korean coinage).",
                "Standard equivalent: 자기 사진을 찍다, which nobody says."
              ]
            }
          },
          {
            term: "파이팅",
            roman: "paiting",
            gloss: "you can do it! go for it! (encouragement)",
            pos: "interjection · safe in almost any register · permanent fixture (2026)",
            example: { text: "시험 잘 보세요. 파이팅!", roman: "Siheom jal boseyo. Paiting!", gloss: "Good luck on your exam. You can do it!" },
            linguistics: {
              origin: "Konglish semantic coinage from English",
              etymology: [
                "From English <i>fighting</i>, but the meaning is a Korean invention with no English counterpart. English <i>fighting!</i> shouted at a friend before an exam would be incomprehensible; Korean 파이팅! means take heart, go get them, I am rooting for you. The form is borrowed and the sense is local, which is the defining signature of Konglish.",
                "Two spellings coexist. <b>파이팅</b> is the form prescribed by the National Institute of Korean Language under the standard loanword transcription rules, which map English /f/ to ㅍ. <b>화이팅</b> is more common in actual use and maps /f/ before a back glide to ㅎ instead. The ㅎ spelling is often attributed to transmission through Japanese ファイト <i>faito</i>, and that route is plausible given the era of borrowing, but it has not been demonstrated — the Korean tendency to render /f/ + /w/ sequences with ㅎ may be sufficient on its own. Mark the Japanese route as probable, not certain.",
                "<b>Register and currency:</b> The exception in this unit. 파이팅 is permanent, universal and register-safe — coaches, colleagues, teachers and news anchors all use it, and you can say it to your boss. Included here precisely to show that not everything borrowed and colloquial is restricted."
              ],
              script: [
                "파 이 팅, three blocks. The variant 화이팅 differs in one letter and one strategy for the same English sound."
              ],
              phonology: [
                "Korean has no /f/. The standard adaptation is ㅍ [pʰ]: <i>file</i> → 파일, <i>coffee</i> → 커피, <i>fan</i> → 팬. The competing ㅎ strategy appears mainly before rounded vowels and glides, giving 화이팅 and the older 후라이 (fry) beside standard 프라이.",
                "The English -ing ending is uniformly rendered 잉/-ing → 팅 with a velar nasal coda, never as a separate syllable: <i>shopping</i> → 쇼핑, <i>meeting</i> → 미팅 (which in Korean means a group blind date, another semantic shift)."
              ],
              cognates: [
                "Konglish with shifted meaning: 미팅 (a group blind date), 서비스 (something free, on the house — Unit 6), 원룸 (a studio flat), 핸드폰, 아이쇼핑 (window shopping), 컨닝 (cheating on an exam, from <i>cunning</i>), 백미러 (rear-view mirror).",
                "Native equivalents for encouragement: 힘내세요 (take strength — the standard, and warmer), 잘하세요, 응원할게요 (I will cheer for you).",
                "If you want one phrase that always works, 힘내세요 is the native option and 파이팅 is the borrowed one. Both are safe."
              ]
            }
          },
          {
            term: "킹받다",
            roman: "kingbatda",
            gloss: "to be comically infuriating, to get on your nerves in a funny way",
            pos: "verb · 반말 only · current but faddish; may date fast (2026)",
            example: { text: "쟤 진짜 킹받게 하네 ㅋㅋ", roman: "Jyae jinjja kingbatge hane keukeu.", gloss: "He is being so infuriating, haha" },
            linguistics: {
              origin: "blend: English loan intensifier + native verb",
              etymology: [
                "A blend of 킹 (English <i>king</i>) with 열받다 (to get heated, to be angry — 열 熱 heat plus 받다 to receive). The 열 is deleted and 킹 takes its slot: 킹 + 받다.",
                "킹- has become a live slang intensifier prefix meaning maximally, borrowed from gaming and streaming culture, and it competes with the older 핵- (核, nuclear) and 개- (a native prefix that is now coarse). The same slot produced 갓- (from English <i>god</i>), as in 갓생 (a disciplined, admirable life) and 갓띵작.",
                "It spread around 2021 to 2022 through streamer and meme culture. The joke depends on the mismatch — a grand English word bolted onto a mundane Korean complaint — which is also why this kind of coinage tends not to last.",
                "<b>Register and currency:</b> Current in 2026 but visibly faddish, and of everything in this unit it is the item most likely to sound stale soonest. 반말 only, and only with friends who share the reference. Saying it about a person in earshot is a jab, not a compliment."
              ],
              script: [
                "킹 (ㅋ + ㅣ + ㅇ) 받 (ㅂ + ㅏ + ㄷ) 다. The English source is spelled entirely in Hangul, as always."
              ],
              phonology: [
                "킹받다 is [킹받따]: the ㄷ batchim tensifies the following ㄷ, the same regular tensification as 먹다 [먹따].",
                "English /k/ gives aspirated ㅋ and the /ŋ/ of <i>king</i> maps neatly onto the ㅇ batchim, so the loan needs almost no adaptation — which is part of why 킹 was available as a prefix."
              ],
              cognates: [
                "Intensifier prefixes, roughly by register from safe to coarse: 완전 (completely, safe), 핵 (核, nuclear), 킹 and 갓 (English-derived, jokey), 개 (native, now coarse — avoid), 존 (a clipping of a vulgar word — avoid entirely).",
                "Source verb: 열받다 (to be angry), which is itself informal but much safer, plus 화나다 (to get angry, neutral) and 짜증나다 (to be annoyed, neutral).",
                "If you want to say this in company, use 짜증나다."
              ]
            }
          }
        ]
      },
      {
        type: "grammar",
        title: "문법: how casual Korean is built",
        points: [
          {
            name: "반말: intimate speech, and when it is safe",
            pattern: "해요체 minus 요 · 이다 → -야 / -이야 · 나 / 내 for 저 / 제 · propositive -자 · imperative bare stem-form",
            explanation: [
              "Mechanically, <b>반말</b> is the easiest thing in Korean: take the 해요체 form you already know and delete the 요. 가요 → 가, 먹었어요 → 먹었어, 뭐 해요? → 뭐 해?, 좋아요 → 좋아. Questions are marked by rising intonation alone, and the future works the same way: 갈 거예요 → 갈 거야.",
              "Four things do change beyond the deletion. The <b>copula</b> becomes -야 after a vowel and -이야 after a consonant: 친구야, 학생이야 (not 학생야). The <b>pronouns</b> switch from humble to plain: 저 → 나, 제 → 내, 저희 → 우리. The <b>propositive</b> (let us) is -자 rather than -아/어요: 가자, 먹자, 보자, 찍자 — all four appear in this unit's dialogue. And the <b>imperative</b> is just the bare 해-form: 봐, 먹어, 와, or with the softer -아/어라 for a blunter order.",
              "The <b>vocative</b> 야 is 반말-only and worth flagging: 야! on its own means hey! and is fine between close friends but confrontational otherwise. Attached to a name it follows the consonant rule — 지호야 after a consonant, 예린아 after… in fact the rule is 야 after a vowel-final name (민수야) and 아 after a consonant-final name (예린아). Using -씨 instead is the neutral choice, and using someone's bare name with no suffix at all is intimate.",
              "Socially, 반말 is <b>not</b> merely informal — it is a claim about the relationship, and making that claim unilaterally is the single most common serious mistake a foreign speaker makes. It is safe with: close friends of the same age; people clearly younger whom you know; children; family members below you; and anyone who has explicitly invited it. The invitation is a real speech act — 말 놓으세요 or 말 편하게 해 — and it conventionally comes from the older or senior party. It is <b>not</b> safe with: strangers of any age, service workers, colleagues, teachers, anyone older, or anyone you met today, no matter how friendly the conversation feels.",
              "Practical rule for a learner: stay in 해요체 with everyone, understand 반말 when it is spoken to you, and switch only after someone offers. Nobody has ever been offended by a foreigner being too polite. Note also that a Korean switching <i>into</i> 반말 mid-argument with a stranger is an act of aggression, roughly equivalent to a deliberate insult — the same forms that signal warmth downward signal contempt sideways."
            ],
            examples: [
              { text: "뭐 해? 나 지금 집이야.", roman: "Mwo hae? Na jigeum jibiya.", gloss: "What are you up to? I am at home right now. (해요체 minus 요; 나 for 저; 이야 after a consonant)" },
              { text: "이따 같이 먹자.", roman: "Itta gachi meokja.", gloss: "Let us eat together later. (propositive -자 replaces -아/어요)" },
              { text: "여섯 시에 보자, 늦지 마.", roman: "Yeoseot sie boja, neutji ma.", gloss: "See you at six, do not be late. (반말 propositive plus negative imperative -지 마)" },
              { text: "너 그거 진짜 살 거야?", roman: "Neo geugeo jinjja sal geoya?", gloss: "Are you really going to buy that? (너 for 당신; -ㄹ 거예요 → -ㄹ 거야)" },
              { text: "말 편하게 하세요.", roman: "Mal pyeonhage haseyo.", gloss: "Please speak comfortably (i.e. let us drop the formality). — said in 존댓말, because the offer itself must be polite." }
            ]
          },
          {
            name: "Word formation: clipping and initial-syllable acronyms",
            pattern: "Word1 + Word2 → first syllable of each (멘탈 붕괴 → 멘붕) · extends to four-word clauses (갑자기 분위기 싸해짐 → 갑분싸)",
            explanation: [
              "Almost every noun coinage in this unit is built by one process: take the first syllable of each element and stick them together. 치킨 + 맥주 → 치맥. 혼자 + 밥 → 혼밥. 멘탈 + 붕괴 → 멘붕. 심장 + 쿵 → 심쿵. 셀프 + 카메라 → 셀카. 국민 + 룰 → 국룰. 남자 친구 → 남친. The output is almost always <b>two syllables</b>, which is the strongly preferred word shape in Korean — the same target that governs Sino-Korean compounds like 학교 and 시간.",
              "The unit of abbreviation is the <b>syllable</b>, not the letter, and this is the deep difference from English. English makes NASA and WLB out of initial letters because the letter is what an English reader sees as a unit. Korean makes 워라밸 out of <i>work-life balance</i> because the syllable block is what a Korean reader sees as a unit. Feed English material into the Korean machine and you get a word no English speaker can decode, built entirely from English morphemes.",
              "The process scales past two words. 갑분싸 compresses a four-word clause (갑자기 분위기 싸해짐) into three syllables; 만반잘부 compresses two whole sentences (만나서 반가워, 잘 부탁해) into four. Native speakers over about forty routinely cannot parse these, and there is a slang term for the phenomenon — 별다줄, itself an abbreviation of 별걸 다 줄인다, meaning <i>they shorten absolutely everything</i>. Korean has coined an abbreviation to complain about abbreviating.",
              "Two secondary processes ride along with clipping. <b>Expressive tensification</b> makes clipped slang punchier by doubling a consonant: 인사이더 → 인싸, 선생님 → 쌤, 아웃사이더 → 아싸. And <b>intensifier prefixes</b> stack onto the result, in a rough register ladder: 완전 (safe) and 핵 (核, nuclear) are fine among friends; 킹 and 갓 are jokey English borrowings; 개 is native but now coarse; and 존 is a clipping of a vulgar word and should be avoided entirely, even though you will see it constantly online.",
              "Knowing the machine is more useful than memorising its output, because the output turns over every few years while the machine does not. When you meet an opaque two-syllable word, try expanding each syllable into a plausible word — that will crack most of them."
            ],
            examples: [
              { text: "멘탈 붕괴 → 멘붕", roman: "mental bunggoe → menbung", gloss: "English loan + Sino-Korean, one syllable each: a meltdown." },
              { text: "치킨 + 맥주 → 치맥", roman: "chikin + maekju → chimaek", gloss: "English loan + Sino-Korean: chicken and beer as one event." },
              { text: "갑자기 분위기 싸해짐 → 갑분싸", roman: "gapjagi bunwigi ssahaejim → gapbunssa", gloss: "A four-word clause compressed to three syllables." },
              { text: "워크 라이프 밸런스 → 워라밸", roman: "wokeu raipeu baelleonseu → worabael", gloss: "Three English words, abbreviated by Korean syllable rules rather than English letter rules." },
              { text: "남자 친구 → 남친, 여자 친구 → 여친", roman: "namja chingu → namchin, yeoja chingu → yeochin", gloss: "Boyfriend and girlfriend — the same process applied to entirely ordinary vocabulary." }
            ]
          },
          {
            name: "초성체: writing with bare Hangul letters",
            pattern: "ㅋㅋ sound-symbolic · ㅇㅇ ㄱㅅ ㅈㅅ initialisms · ㅠㅠ ㅡㅡ pictographs · -ㅁ / -음 endings (음슴체)",
            explanation: [
              "Korean texting uses bare consonant and vowel letters as words. This is possible only because Hangul letters are discrete, separable units — a Korean can type ㅋ without committing to a syllable, whereas an English speaker cannot meaningfully type a lone consonant. The practice is called <b>초성체</b>, initial-consonant style, and it works in three quite different ways that are worth keeping apart.",
              "<b>Sound-symbolic:</b> ㅋㅋ and ㅎㅎ stand for the <i>sound</i> of laughing (크크, 하하). They are not abbreviations of anything. Length encodes intensity, and the two letters carry different social temperatures: ㅋㅋ is peer-to-peer and downward, ㅎㅎ is softer and the one to use upward. A single bare ㅋ reads as cold or sarcastic, which learners discover the hard way.",
              "<b>Abbreviatory:</b> ㅇㅇ (응응, yeah), ㄴㄴ (노노, no), ㅇㅋ (오케이), ㄱㅅ (감사, thanks), ㅈㅅ (죄송, sorry), ㅅㄱ (수고, good work), ㅂㅂ (bye), ㅊㅋ (축하, congrats). These genuinely stand for words and can be expanded. They are also the ones with real register danger: abbreviating a polite word makes it impolite, so ㄱㅅ to a senior is worse than typing nothing.",
              "<b>Pictographic:</b> ㅠㅠ and ㅜㅜ are crying eyes; ㅡㅡ is a flat, unimpressed stare. Here the letter is neither a sound nor an abbreviation but a picture. The tradition extends into <b>야민정음</b>, a game of substituting visually similar Hangul shapes: 멍멍이 becomes 댕댕이 (because 멍 and 댕 look alike at a glance), 귀여워 becomes 커여워, 명작 becomes 띵작, and 눈물 flipped upside down becomes 롬곡. Several of these have become real words — 댕댕이 is now a widespread affectionate term for a dog.",
              "One more texting register worth recognising is <b>음슴체</b>, ending sentences with the nominalising -ㅁ / -음 instead of a normal ending: 갔음, 먹었음, 좋음, 인정함. It sounds clipped and affectless, is common in notes, memos, reviews and forum posts, and is neither polite nor rude — it simply refuses to mark politeness at all, which is its appeal. Do not use it in a message to a professor, where refusing to choose a register is itself a choice."
            ],
            examples: [
              { text: "ㅋㅋㅋㅋ 진짜 웃겨", roman: "keukeukeukeu jinjja utgyeo", gloss: "hahaha that is really funny (length signals genuine laughter)" },
              { text: "ㅇㅇ ㅇㅋ 이따 봐", roman: "eungeung oke itta bwa", gloss: "Yeah, OK, see you later. (two initialisms, 반말 only)" },
              { text: "ㅈㅅ 늦었어 ㅠㅠ", roman: "joesong neujeosseo yuyu", gloss: "Sorry, I am late (crying) — note that abbreviating 죄송 makes it usable only with friends." },
              { text: "오늘 회의 끝났음. 자료는 내일 보냄.", roman: "Oneul hoeui kkeunnasseum. Jaryoneun naeil bonaem.", gloss: "Today's meeting is over. I will send the materials tomorrow. (음슴체 — neutral, memo-like)" },
              { text: "우리 집 댕댕이 사진 보내 줄까?", roman: "Uri jip daengdaengi sajin bonae julkka?", gloss: "Shall I send a photo of my dog? (야민정음 형태 댕댕이 for 멍멍이)" }
            ]
          },
          {
            name: "Konglish: how English becomes Korean",
            pattern: "phonological adaptation (f → ㅍ, v → ㅂ, no clusters → + ㅡ) · clipping · semantic re-coinage",
            explanation: [
              "English words entering Korean pass through three filters, and understanding them lets you predict most loanwords before you meet them.",
              "<b>Phonological adaptation.</b> Sounds Korean lacks are mapped onto the nearest available letter: /f/ → ㅍ (file 파일, coffee 커피), /v/ → ㅂ (television 텔레비전, balance 밸런스), /z/ → ㅈ (zero 제로), /θ/ → ㅅ or ㅆ. English voiceless stops become Korean aspirates and voiced stops become plain: <i>coffee</i> 커피 but <i>bus</i> 버스. Korean also forbids consonant clusters and most final consonants, so it inserts the vowel ㅡ to break them up: <i>stress</i> → 스트레스 (six syllables for one), <i>Christmas</i> → 크리스마스, <i>desk</i> → 데스크. A one-syllable English word routinely becomes a four-syllable Korean one, which is exactly why the clipping process in the previous grammar point exists — Korean creates long loans and then immediately shortens them.",
              "<b>Clipping.</b> The long adapted form gets cut back to two or three syllables: 에어컨디셔너 → 에어컨, 리모트 컨트롤 → 리모컨, 아파트먼트 → 아파트, 셀프 카메라 → 셀카, 아르바이트 → 알바. Note that 아르바이트 came from German <i>Arbeit</i> by way of Japanese, a reminder that not every Western loan in Korean came through English.",
              "<b>Semantic re-coinage.</b> This is the part that catches English speakers out, because the word is recognisable and the meaning is not. 파이팅 means good luck, not fighting. 미팅 is a group blind date. 서비스 is something free. 핸드폰 is a Korean invention. 노트북 is a laptop. 원룸 is a studio flat. 컨닝 (from <i>cunning</i>) is cheating on an exam. 아이쇼핑 is window shopping. 오바이트 is vomiting. 스킨십 (skinship) is physical affection. Some of these arrived via Japanese, some are Korean coinages, and the general term for the category is <b>콩글리시</b>.",
              "A learner's caution: do not assume an English word will work in Korean, and do not assume a Konglish word will work in English. Saying <i>I did a meeting yesterday</i> to a Korean friend and meaning a business meeting will produce a very different conversation than you intended."
            ],
            examples: [
              { text: "스트레스 받지 마.", roman: "Seuteureseu batji ma.", gloss: "Do not stress out. (one English syllable becomes five Korean ones, plus the native verb 받다)" },
              { text: "에어컨 좀 켜 줄래?", roman: "Eeokeon jom kyeo jullae?", gloss: "Could you turn on the air conditioner? (clipped from 에어컨디셔너)" },
              { text: "어제 소개팅 했어? 아니, 그냥 미팅.", roman: "Eoje sogaeting haesseo? Ani, geunyang miting.", gloss: "Did you go on a blind date yesterday? No, just a group date. (미팅 means a group blind date, not a business meeting)" },
              { text: "이건 서비스예요.", roman: "Igeon seobiseuyeyo.", gloss: "This one is on the house. (서비스 = free of charge, as in Unit 6)" },
              { text: "핸드폰 배터리 없어.", roman: "Haendeupon baeteori eopseo.", gloss: "My phone battery is dead. (핸드폰 is a Korean coinage from English parts)" }
            ]
          }
        ]
      },
      {
        type: "notes",
        title: "Culture note: the layered internet Korean, and how not to embarrass yourself",
        body: [
          "Korean slang stratifies by generation more sharply than English slang does, because Korea's online history is unusually well dated. The PC통신 bulletin boards of the early 1990s produced ㅋㅋ and the basic 초성체. The 싸이월드 and DC인사이드 era of the 2000s produced 헐, 즐, and the first wave of clipped compounds. The smartphone and KakaoTalk decade from 2010 produced 멘붕, 꿀잼, 심쿵 and 갑분싸. The streaming and short-video era from about 2020 produced 킹받다, 갓생 and the current churn. A Korean can place your age within about five years from which layer you speak, and a foreigner using a 2012 coinage in 2026 does not read as young — they read as someone who learned from an old textbook.",
          "This is why every entry in this unit carries a currency label, and why the honest advice is asymmetric: build a large passive vocabulary and a small active one. Understanding 갑분싸 in a subtitle costs nothing. Saying it costs a little social credit every time. The words safest to actually use are the ones that have stopped being slang — 대박, 치맥, 혼밥, 맛집, 파이팅, 셀카 — and the safest way to acquire the rest is to wait until a Korean friend uses one at you, then use it back.",
          "The register line online is real, not decorative. Korean internet communities are largely 존댓말 spaces despite the anonymity: comment sections on portals, open KakaoTalk chat rooms and most forums default to 해요체 or 합니다체 between strangers, and dropping into 반말 with someone you do not know is a recognised provocation with its own name, 반말 시비. Group chats for a class or a workplace are politeness minefields precisely because the participants span ranks — the usual solution is that everyone writes 해요체 with plenty of ㅎㅎ and emoji, and only the same-age subgroup breaks into 반말 in a side chat.",
          "A few conventions worth knowing before you are dropped into a Korean group chat. Messages are short and numerous — Koreans send five one-line messages where an English speaker sends one paragraph, and a long unbroken block reads as heavy or serious. Read receipts are visible in KakaoTalk, so the number beside your message disappearing means it was seen; leaving a message read and unanswered has its own vocabulary (읽씹, from 읽고 씹다, to read and ignore). And the workplace practice of 카톡 감옥 — being reachable by your team at all hours — became enough of a public issue to prompt legislative debate, which is part of the same conversation that produced 워라밸.",
          "Finally, a word on what this unit deliberately leaves out. Korean has a rich and creative profanity register, and several extremely common intensifiers — the 존- and 개- prefixes above all — are clippings or extensions of it. Those forms are everywhere online and you will meet them within a day of reading Korean comments. You should know what they are and where they come from; you should not use them, because a non-native speaker deploying Korean profanity lands very differently from a native doing it, and there is no upside. The register ladder given in the word-formation section — 완전, 핵, 킹, then the ones to avoid — is the practical version of this advice."
        ]
      },
      {
        type: "practice",
        title: "연습: reading the group chat",
        exercises: [
          {
            type: "mcq",
            prompt: "You are texting a professor. Which is acceptable?",
            promptAudio: "감사합니다",
            choices: ["ㄱㅅ", "ㅇㅇ", "감사합니다", "ㅇㅋ ㅋㅋ"],
            answer: 2,
            explain: "Initialisms are 반말-zone writing. Abbreviating a polite word makes it impolite, so ㄱㅅ is worse than useless upward. Nothing in the 초성체 system belongs in a message to a senior."
          },
          {
            type: "mcq",
            prompt: "Which item is safe to use in 존댓말 with a colleague?",
            promptAudio: "파이팅",
            choices: ["갑분싸", "킹받다", "파이팅", "노잼"],
            answer: 2,
            explain: "파이팅 is the exception in this unit — permanent and register-neutral, used by coaches, colleagues and newsreaders alike. 치맥, 혼밥 and 맛집 are similarly safe; the other three are casual-only, and 갑분싸 is dated as well."
          },
          {
            type: "mcq",
            prompt: "Why is 국룰 pronounced [궁눌]?",
            promptAudio: "국룰",
            choices: [
              "Because slang words have irregular pronunciations",
              "Because ㄹ after a ㄱ batchim becomes ㄴ, and the ㄱ then nasalises to ㅇ",
              "Because the hanja 國 is read 궁",
              "Because English rule is pronounced with an n in Korean"
            ],
            answer: 1,
            explain: "Two regular rules apply in sequence, exactly as in 독립 [동닙] and 협력 [혐녁]. A brand-new coinage is governed by a very old rule of Korean phonology."
          },
          {
            type: "mcq",
            prompt: "Your friend sends a joke and you reply with a single ㅋ. How does this read?",
            promptAudio: "크크크크",
            choices: [
              "Warm and enthusiastic",
              "Cold, sarcastic or dismissive",
              "Formal and respectful",
              "Confused"
            ],
            answer: 1,
            explain: "Length encodes intensity. One ㅋ reads as a flat, unamused acknowledgement; ㅋㅋ is neutral and ㅋㅋㅋㅋ is genuine laughter. Use ㅎㅎ instead when writing to someone senior."
          },
          {
            type: "typing",
            prompt: "Put 뭐 해요? into 반말.",
            answer: ["뭐 해?", "뭐 해", "뭐해?", "뭐해"],
            hint: "Delete the 요 and let intonation carry the question."
          },
          {
            type: "typing",
            prompt: "Write the slang word for chicken and beer.",
            answer: ["치맥", "치맥."],
            hint: "First syllable of 치킨 plus first syllable of 맥주."
          },
          {
            type: "typing",
            prompt: "Put 같이 먹어요 into 반말 as a suggestion (let us eat together).",
            answer: ["같이 먹자", "같이 먹자.", "같이 먹자!"],
            hint: "The 반말 propositive ending is -자."
          },
          {
            type: "listening",
            prompt: "What did you hear?",
            audioText: "헐 대박 진짜야?",
            choices: [
              "Whoa, amazing — is that for real?",
              "How much is it really?",
              "Sorry, I am late.",
              "Let us eat together later."
            ],
            answer: 0,
            explain: "헐 (disbelief) plus 대박 (amazing) plus 진짜야 (is it real, in 반말). Two interjections stacked is very common in speech."
          },
          {
            type: "listening",
            prompt: "Which word did you hear?",
            audioText: "혼밥",
            choices: ["혼밥", "한복", "홍보", "훈련"],
            answer: 0,
            explain: "혼밥 [혼밥] — 혼자 clipped to 혼, plus 밥. Note there is no tensification at the seam, unlike 맛집 [맏찝]."
          },
          {
            type: "match",
            prompt: "Match each clipped word with its full source.",
            pairs: [
              { a: "치맥", b: "치킨 + 맥주" },
              { a: "멘붕", b: "멘탈 + 붕괴" },
              { a: "셀카", b: "셀프 + 카메라" },
              { a: "혼밥", b: "혼자 + 밥" },
              { a: "워라밸", b: "워크 라이프 밸런스" },
              { a: "갑분싸", b: "갑자기 분위기 싸해짐" }
            ]
          },
          {
            type: "order",
            prompt: "Arrange this 반말 text message: 'I am eating alone right now, the cafeteria food is really boring.'",
            tokens: ["나", "지금", "혼밥", "학식", "진짜", "노잼이야"],
            answer: "나 지금 혼밥 학식 진짜 노잼이야"
          },
          {
            type: "order",
            prompt: "Arrange into a sentence: 'Then how about chicken and beer later?'",
            tokens: ["그럼", "이따", "치맥", "어때?"],
            answer: "그럼 이따 치맥 어때?"
          }
        ]
      }
    ]
  });
})();
