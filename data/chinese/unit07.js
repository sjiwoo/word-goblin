window.CURRICULUM = window.CURRICULUM || {};
(function () {
  const C = window.CURRICULUM;
  C.chinese = C.chinese || { units: [] };

  C.chinese.units.push({
    id: "zh-07",
    order: 7,
    title: "Studying Chinese",
    titleNative: "学中文",
    subtitle: "Talking about how you study: asking 怎么, judging performance with 得, and stacking the adverbs 也, 都 and 太.",
    textbookBasis: [
      "Integrated Chinese Level 1 Part 1, Lesson 7 (Studying Chinese)",
      "HSK Standard Course 2, Lessons 8–12",
      "New Practical Chinese Reader 1, Lesson 12 (我全身都不舒服) — complement of degree"
    ],
    overview: [
      "This unit turns the language back on itself: you now talk about learning Chinese in Chinese. Three structures do the work, and all three are high-frequency for the rest of your studies.",
      "<b>怎么</b> zěnme asks <i>how</i> — by what method. 你怎么学中文? asks about your study routine. Its cousin <b>怎么样</b> zěnmeyàng asks <i>how is it? / how about it?</i> and is the all-purpose way to request an opinion or float a suggestion.",
      "The <b>complement of degree</b> with 得 de is the big one. Chinese cannot say <i>speak well</i> by putting an adverb before the verb; it says 说得很好, verb + 得 + evaluation. Any judgement of how well, how fast, how badly an action is performed goes into this frame, and once you have it you can describe skill, speed and quality in any domain.",
      "Finally the adverbs. <b>也</b> yě (also), <b>都</b> dōu (all/both) and <b>太</b> tài (too) all belong to a class of words that must stand <i>before the verb</i> and can never begin a sentence or trail at the end. English speakers habitually produce 我学中文也 or 也我学中文; both are wrong. Fixing adverb position now will clean up a large share of your future sentences."
    ],
    sections: [
      {
        type: "dialogue",
        title: "Dialogue: 中文难不难？",
        context: "Xiaoyu and Mark are in the library after class, comparing notes on how they study.",
        lines: [
          { speaker: "小雨", text: "马克，你的中文说得很好！", roman: "Mǎkè, nǐ de Zhōngwén shuō de hěn hǎo!", gloss: "Mark, you speak Chinese really well!" },
          { speaker: "马克", text: "哪里哪里，我说得很慢。", roman: "Nǎli nǎli, wǒ shuō de hěn màn.", gloss: "Not at all — I speak very slowly." },
          { speaker: "小雨", text: "你每天怎么学中文？", roman: "Nǐ měitiān zěnme xué Zhōngwén?", gloss: "How do you study Chinese every day?" },
          { speaker: "马克", text: "我每天预习生词，也复习语法。", roman: "Wǒ měitiān yùxí shēngcí, yě fùxí yǔfǎ.", gloss: "Every day I preview the new words and also review the grammar." },
          { speaker: "小雨", text: "语法难吗？", roman: "Yǔfǎ nán ma?", gloss: "Is the grammar hard?" },
          { speaker: "马克", text: "语法不太难，可是汉字太难了！我写得很慢，也写得不好。", roman: "Yǔfǎ bú tài nán, kěshì Hànzì tài nán le! Wǒ xiě de hěn màn, yě xiě de bù hǎo.", gloss: "The grammar isn't too hard, but the characters are really hard! I write slowly, and I write badly too." },
          { speaker: "小雨", text: "王老师说话说得快不快？", roman: "Wáng lǎoshī shuōhuà shuō de kuài bu kuài?", gloss: "Does Teacher Wang speak fast?" },
          { speaker: "马克", text: "他说得太快了，我不懂。", roman: "Tā shuō de tài kuài le, wǒ bù dǒng.", gloss: "He speaks much too fast — I don't understand." },
          { speaker: "小雨", text: "我可以教你。我们都学中文，都要考试。", roman: "Wǒ kěyǐ jiāo nǐ. Wǒmen dōu xué Zhōngwén, dōu yào kǎoshì.", gloss: "I can teach you. We're both studying Chinese and we both have the exam." },
          { speaker: "马克", text: "太好了，你真好！", roman: "Tài hǎo le, nǐ zhēn hǎo!", gloss: "That's wonderful — you're really kind!" }
        ]
      },
      {
        type: "vocab",
        title: "Vocabulary (20 items)",
        items: [
          {
            term: "怎么",
            trad: "怎麼",
            roman: "zěnme",
            gloss: "how, in what way; how come",
            pos: "question word",
            example: { text: "这个字怎么写？", roman: "Zhège zì zěnme xiě?", gloss: "How do you write this character?" },
            linguistics: {
              origin: "vernacular compound (phono-semantic graph + grammaticalized suffix)",
              etymology: [
                "怎么 is a relatively young, purely vernacular word. It becomes common in Song and Yuan colloquial writing and has no Classical pedigree — Classical Chinese asked <i>how</i> with 何 hé, 奚 xī or 安 ān.",
                "The -么 suffix is the same one in 什么 shénme and 那么 nàme. The standard account, associated with the grammarian Lü Shuxiang, traces it to 物 wù (thing) via the Tang-Song forms 甚物 / 是物, which weakened to 甚麼 and then 什麼. So 什么 is historically <i>what thing</i>, and the suffix generalized from there onto other interrogatives."
              ],
              script: [
                "怎 = 心 (heart) + 乍 zhà as a rough phonetic. The heart radical is typical of vernacular words about thinking and manner.",
                "麼 is 幺 (a small skein of silk) with 麻 má as phonetic; 么 is the simplified form, taken from an existing cursive abbreviation. Taiwan writes 怎麼."
              ],
              phonology: [
                "zěnme: third tone plus a <b>neutral</b> syllable. Never pronounce it zěnmé.",
                "In rapid Beijing speech it often reduces further, to something like <i>zěm</i>, especially in 怎么了 zěnme le (what's up?)."
              ],
              cognates: [
                "怎么样 zěnmeyàng (how is it?), 怎么办 zěnme bàn (what's to be done?), 什么 shénme (what), 那么 nàme (so, in that way), 这么 zhème (this way, so).",
                "Because it is a vernacular Mandarin word with no Classical basis, 怎么 has no Sino-Korean or Sino-Japanese reflex — a useful reminder that the shared East Asian vocabulary is the <i>literary</i> layer only."
              ]
            }
          },
          {
            term: "怎么样",
            trad: "怎麼樣",
            roman: "zěnmeyàng",
            gloss: "how is it? how about it? what do you think?",
            pos: "question phrase",
            example: { text: "明天下午两点，怎么样？", roman: "Míngtiān xiàwǔ liǎng diǎn, zěnmeyàng?", gloss: "Two o'clock tomorrow afternoon — how's that?" },
            linguistics: {
              origin: "compound (怎么 + 样)",
              etymology: [
                "Literally <i>in what manner/shape</i>. 样 means <i>appearance, pattern, sample</i>, so 怎么样 asks what shape a thing is in — the perfect vehicle for both <i>how is it going?</i> and <i>how does that sound?</i>",
                "樣 originally denoted a kind of oak and its acorn (the Shuowen gloss), and the path to <i>model, sample, pattern</i> runs through the use of a specimen as a template. The modern senses — 样子 yàngzi (appearance), 一样 yíyàng (the same), 样品 yàngpǐn (sample) — all sit on <i>template</i>."
              ],
              script: [
                "Traditional 樣 = 木 (wood) + 羕 as phonetic, remembering the tree. Simplified 样 keeps 木 and swaps in 羊 yáng, a shorter phonetic.",
                "羊 (sheep) is one of the most productive phonetics in the script: 洋, 详, 氧, 养."
              ],
              phonology: [
                "zěnmeyàng: third, neutral, fourth. The stress lands on the final syllable.",
                "The negative answer is not a negated form of this phrase — you answer with a description: 很好, 不太好, 马马虎虎 mǎmǎhūhū (so-so)."
              ],
              cognates: [
                "一样 yíyàng (the same), 样子 yàngzi (appearance), 这样 zhèyàng (like this), 那样 nàyàng (like that), 各种各样 gèzhǒng-gèyàng (all kinds).",
                "Useful pairing: 你怎么样? (how are you doing?) is more casual and more genuinely enquiring than the textbook 你好吗?, which many native speakers rarely say to each other."
              ]
            }
          },
          {
            term: "得",
            roman: "de",
            gloss: "(structural particle linking a verb to a description of how it is done)",
            pos: "particle",
            example: { text: "他说得很快。", roman: "Tā shuō de hěn kuài.", gloss: "He speaks very fast." },
            linguistics: {
              origin: "pictographic-ideographic compound, later grammaticalized",
              etymology: [
                "The oracle-bone graph shows a hand 又 grasping a cowrie shell 貝 — <i>to get, to obtain</i>. A 彳 element (a step, half of 行) was added in bronze script, giving <i>to go out and acquire</i>. That verb is the modern 得 dé, <i>to obtain</i>.",
                "The particle is a grammaticalization of that verb. Placed after another verb, 得 first meant <i>manage to get (a result)</i> — 看得见 (look and manage to see). From the resultative sense it bleached into a pure link between an action and a comment on it: 说得很快, <i>speaks, and the getting of it is fast</i>. This verb-to-particle path is one of the best documented in the history of Chinese grammar, running from the Han period through Tang vernacular."
              ],
              script: [
                "The right-hand element in the modern form is a flattened 貝 over 寸 (a hand); the cowrie is no longer recognizable.",
                "Traditional and simplified are identical. One graph, three words: 得 dé (obtain), 得 de (particle), 得 děi (must)."
              ],
              phonology: [
                "As the structural particle it is <b>always neutral tone</b>: de, short and unstressed. Pronouncing it dé signals the verb instead.",
                "The three readings must be kept apart: 我得到了 wǒ dédào le (I obtained it); 他跑得很快 tā pǎo de hěn kuài (he runs fast); 我得走了 wǒ děi zǒu le (I must go). Only context and the surrounding syntax disambiguate them in writing."
              ],
              cognates: [
                "Sibling particles that are also neutral-tone de: 的 (modifier link — 我的书), 地 (adverbial link — 慢慢地走). Three characters, one sound, three jobs; sorting them out is a rite of passage.",
                "得 as a verb: 得到 dédào (obtain), 取得 qǔdé (acquire), 觉得 juéde (feel that), 值得 zhíde (be worth)."
              ]
            }
          },
          {
            term: "说",
            trad: "說",
            roman: "shuō",
            gloss: "to speak, to say",
            pos: "verb",
            example: { text: "他说中文说得很好。", roman: "Tā shuō Zhōngwén shuō de hěn hǎo.", gloss: "He speaks Chinese very well." },
            linguistics: {
              origin: "phono-semantic compound",
              etymology: [
                "言 (speech) + 兑 as phonetic. The 兑 series is a good illustration of how far readings drift: it gives 说 shuō, 悦 yuè (pleased), 脱 tuō (to shed), 锐 ruì (sharp) and 税 shuì (tax) — all once phonetically close.",
                "The graph writes three related words distinguished by reading: shuō <i>to speak</i>, shuì <i>to persuade</i> (游说 yóushuì, the travelling persuaders of the Warring States), and archaic yuè = 悦 <i>to be pleased</i> — the reading intended in the opening line of the Analects, 学而时习之，不亦说乎."
              ],
              script: [
                "Simplified 说 reduces 言 to 讠 and 兑 keeps its shape.",
                "The 言 radical marks the whole domain of speech: 话, 语, 词, 谈, 讲, 认, 讨论."
              ],
              phonology: [
                "First tone, shuō. The initial is retroflex sh-, and the final -uo is a rounded glide — many learners flatten it to <i>shwo</i>, which is close enough.",
                "说话 shuōhuà (to talk) is a verb-object compound and therefore separable: 说了半天话 (talked for ages). This matters for the 得 construction, as the grammar section explains."
              ],
              cognates: [
                "说话 shuōhuà (speak), 说明 shuōmíng (explain), 小说 xiǎoshuō (novel, <i>small talk</i> in the old sense of minor discourse), 听说 tīngshuō (hear it said), 说不定 shuōbudìng (perhaps).",
                "Sino-Korean 설 (설명 seolmyeong = 說明); Sino-Japanese セツ setsu (説明 setsumei, 小説 shōsetsu)."
              ]
            }
          },
          {
            term: "写",
            trad: "寫",
            roman: "xiě",
            gloss: "to write",
            pos: "verb",
            example: { text: "这个汉字你写得很漂亮。", roman: "Zhège Hànzì nǐ xiě de hěn piàoliang.", gloss: "You've written this character beautifully." },
            linguistics: {
              origin: "phono-semantic compound",
              etymology: [
                "寫 is 宀 (roof) + 舄 xì as phonetic. Its earliest meaning is not <i>write</i> but <i>to set down, to unload, to transfer</i> — to move the contents of one container into another, under a roof.",
                "From <i>transfer</i> came <i>to copy out</i> (transferring text from one surface to another) and only then the general <i>to write</i>. The old sense survives in 写生 xiěshēng (to draw from life — transferring what you see onto paper) and 描写 miáoxiě (to depict)."
              ],
              script: [
                "Simplified 写 keeps a reduced roof 冖 and replaces the complicated 舄 with 与. Note that the simplified roof loses its dot — 写 has 冖, not 宀, a detail that trips up handwriting.",
                "In Japan the same character is 写 (写真 shashin, photograph — literally <i>copying the real</i>), independently simplified to almost the same shape."
              ],
              phonology: [
                "Third tone, xiě. The initial x- is the alveolo-palatal fricative; the vowel is the -ie diphthong.",
                "写 xiě and 血 xiě/xuè (blood) are a genuine confusable pair in speech; 谢 xiè (thanks) differs only in tone."
              ],
              cognates: [
                "写字 xiě zì (write characters), 写信 xiě xìn (write a letter), 描写 miáoxiě (describe), 写作 xiězuò (writing, composition), 手写 shǒuxiě (handwrite).",
                "Sino-Korean 사 (사진 sajin = 寫真, photograph — the same Sino-Japanese coinage); Sino-Japanese シャ sha (写真 shashin, 描写 byōsha)."
              ]
            }
          },
          {
            term: "汉字",
            trad: "漢字",
            roman: "Hànzì",
            gloss: "Chinese character",
            pos: "noun",
            example: { text: "我认识五百个汉字。", roman: "Wǒ rènshi wǔbǎi ge Hànzì.", gloss: "I know five hundred characters." },
            linguistics: {
              origin: "compound (ethnonym + noun)",
              etymology: [
                "<i>Han writing</i>. 漢 was originally the name of a river (the Han, a tributary of the Yangtze), which named the Han dynasty (206 BCE–220 CE), which in turn named the Han people — still the term for China's majority ethnicity, 汉族 Hànzú. Because the dynasty coincided with the standardization of the script, the characters are <i>Han</i> characters.",
                "字 is the more interesting half. Its parts are 宀 (roof) and 子 (child), and its original meaning is <i>to bear young, to breed</i>. Xu Shen's preface to the 说文解字 (100 CE) uses the term technically: 文 wén are the simple, indivisible graphs, and 字 zì are the <b>derived</b> graphs bred from them by combination. A 字 is literally an offspring character."
              ],
              script: [
                "The simplification 漢 → 汉 is the most drastic kind: the entire right-hand element is replaced by 又. The same substitution produced 難 → 难, 歡 → 欢, 僅 → 仅, 鄧 → 邓 — 又 functions as a generic placeholder rather than a phonetic.",
                "字 was not simplified."
              ],
              phonology: [
                "Hànzì: two fourth tones. Capitalized in pinyin because 汉 is a proper-noun element.",
                "Distinguish 汉字 Hànzì (the written characters) from 汉语 Hànyǔ (the Chinese language) and 中文 Zhōngwén (Chinese, especially written/as a subject). 字 alone means a single character; 词 cí means a word, which may be one or several characters."
              ],
              cognates: [
                "汉语 Hànyǔ, 汉族 Hànzú, 汉朝 Hàncháo (Han dynasty), 名字 míngzi (name), 生字 shēngzì (unfamiliar character), 打字 dǎzì (to type).",
                "The word travelled with the script: Korean 한자 hanja, Japanese 漢字 kanji, Vietnamese Hán tự — all the same two characters, all naming the same borrowed writing system."
              ]
            }
          },
          {
            term: "生词",
            trad: "生詞",
            roman: "shēngcí",
            gloss: "new vocabulary word",
            pos: "noun",
            example: { text: "今天的生词不太难。", roman: "Jīntiān de shēngcí bú tài nán.", gloss: "Today's new words aren't too hard." },
            linguistics: {
              origin: "compound (adjective + noun)",
              etymology: [
                "Literally <i>raw words</i>. 生 shēng means <i>to be born, alive</i> and, by a very productive extension, <i>raw, unfamiliar, not yet processed</i>. Its opposite 熟 shú means <i>cooked</i> and also <i>familiar</i>. So a stranger is 生人 shēngrén and an old acquaintance is 熟人 shúrén; uncooked meat is 生肉 and a word you have not yet digested is a 生词.",
                "This raw/cooked metaphor for familiarity is thoroughly embedded in Chinese and is worth internalizing: 眼生 yǎnshēng (looks unfamiliar), 手生 shǒushēng (out of practice), 熟练 shúliàn (skilled)."
              ],
              script: [
                "生 is a pictograph: a sprout (屮) pushing up out of the ground line (一). It is one of the oldest and most transparent graphs in the script.",
                "詞 = 言 (speech) + 司 sī as phonetic; simplified 词 uses 讠. 司 means <i>to manage, an office</i> and also lends its sound to 饲 sì and 伺 cì/sì."
              ],
              phonology: [
                "shēngcí: first tone then second tone. The initial of 词 is the unaspirated dental affricate c- — actually aspirated [tsʰ]; contrast 词 cí with 子 zǐ (unaspirated).",
                "生 has an unusually wide range: shēng in every use, but the meanings run from <i>to give birth</i> to <i>student</i> (学生) to <i>raw</i> to <i>very</i> in 生气 shēngqì (get angry)."
              ],
              cognates: [
                "生字 shēngzì (unfamiliar character), 学生 xuésheng (student), 生日 shēngrì (birthday), 医生 yīshēng (doctor), 词典 cídiǎn (dictionary), 单词 dāncí (a word).",
                "Sino-Korean 생 (학생 haksaeng = 學生); Sino-Japanese セイ/ショウ sei/shō (学生 gakusei, 一生 isshō)."
              ]
            }
          },
          {
            term: "语法",
            trad: "語法",
            roman: "yǔfǎ",
            gloss: "grammar",
            pos: "noun",
            example: { text: "中文的语法不太难。", roman: "Zhōngwén de yǔfǎ bú tài nán.", gloss: "Chinese grammar isn't too difficult." },
            linguistics: {
              origin: "modern compound (noun + noun)",
              etymology: [
                "<i>Language rules</i>. 語 is speech or language; 法 is law, method, rule. The compound is a modern coinage — traditional Chinese scholarship analysed texts through 训诂 xùngǔ (exegesis) and 音韵 yīnyùn (phonology) rather than through grammar in the Western sense, and the first Chinese grammar in that mould, 马氏文通, appeared only in 1898. Japanese chose 文法 bunpō for the same concept, and 文法 wénfǎ is also used in Chinese, particularly in Taiwan.",
                "法 has a spectacular etymology. The full ancient form is 灋, made of 氵 (water, for the levelness of justice), 去 (to remove), and 廌 zhì — a mythical one-horned beast said to butt the guilty party in a trial. Justice was literally trial by monster. The 廌 was dropped from the everyday form, leaving 法."
              ],
              script: [
                "語 = 言 + 吾 wú as phonetic (吾 = <i>I, my</i> in Classical Chinese). Simplified 语 uses 讠.",
                "法 was never simplified beyond the ancient loss of 廌."
              ],
              phonology: [
                "yǔfǎ is <b>two third tones</b>, so sandhi applies: it is pronounced <i>yúfǎ</i>.",
                "法 is normally fǎ; you may hear fá in Taiwan for 法国 Fàguó/Fǎguó (France), where regional norms differ."
              ],
              cognates: [
                "语言 yǔyán (language), 汉语 Hànyǔ (Chinese), 英语 Yīngyǔ (English), 办法 bànfǎ (method), 法律 fǎlǜ (law), 方法 fāngfǎ (method).",
                "Sino-Korean 어/법 (언어 eoneo = 言語, 방법 bangbeop = 方法); Sino-Japanese ゴ/ホウ go/hō (言語 gengo, 方法 hōhō)."
              ]
            }
          },
          {
            term: "懂",
            roman: "dǒng",
            gloss: "to understand",
            pos: "verb",
            example: { text: "老师说的话我都懂。", roman: "Lǎoshī shuō de huà wǒ dōu dǒng.", gloss: "I understand everything the teacher says." },
            linguistics: {
              origin: "phono-semantic compound (late graph)",
              etymology: [
                "懂 is a late character — it is not in the Shuowen and becomes common only in Ming vernacular writing. It is 忄 (heart) + 董 dǒng as phonetic, and it wrote a colloquial northern word for <i>to grasp mentally</i>.",
                "The literary equivalents are 明白 míngbai, 了解 liǎojiě and 理解 lǐjiě; 懂 remains the everyday spoken word. As with 找 in the previous unit, its lateness is a reminder that a large part of the spoken lexicon has no Classical ancestry at all."
              ],
              script: [
                "董 is itself 艹 (grass) + 重 zhòng as phonetic, and means <i>to supervise, to direct</i> (董事 dǒngshì, a company director). It contributes only sound to 懂.",
                "Traditional and simplified are identical."
              ],
              phonology: [
                "Third tone, dǒng. Before another third tone it rises: 懂你 is said <i>dóng nǐ</i>.",
                "懂 combines with 得/不 to form potential complements: 听得懂 tīngdedǒng (can understand by listening), 听不懂 tīngbudǒng (cannot make it out), 看得懂 kàndedǒng (can read and understand). These are extremely common and use the same 得 you learn in this unit."
              ],
              cognates: [
                "懂事 dǒngshì (sensible, of a child), 不懂 bù dǒng (not understand), 听不懂 tīngbudǒng, 懂行 dǒngháng (know one's stuff).",
                "Because 懂 is a vernacular Mandarin word, Korean and Japanese have no borrowing of it; they use reflexes of 理解 (이해 ihae, 理解 rikai) instead."
              ]
            }
          },
          {
            term: "难",
            trad: "難",
            roman: "nán",
            gloss: "difficult, hard",
            pos: "adjective",
            example: { text: "写汉字很难。", roman: "Xiě Hànzì hěn nán.", gloss: "Writing characters is hard." },
            linguistics: {
              origin: "phono-semantic compound",
              etymology: [
                "難 is 堇 (phonetic) + 隹 (short-tailed bird). The Shuowen treats it as the name of a bird, and the meaning <i>difficult</i> is generally taken to be a phonetic loan onto that graph — the bird has nothing to do with hardship.",
                "The character writes two related words distinguished by tone: nán <i>difficult</i> and nàn <i>calamity, disaster</i> (灾难 zāinàn, 难民 nànmín refugees). The tonal split is another instance of the departing-tone derivation seen in 兴 and 空."
              ],
              script: [
                "Simplified 难 substitutes 又 for the whole left element, exactly as in 汉 and 欢.",
                "隹 zhuī, the short-tailed bird, is the same component you met in 進/进 and in 谁, 集, 雅."
              ],
              phonology: [
                "Second tone nán for <i>difficult</i>; fourth tone nàn for <i>disaster</i>.",
                "Adjectives take 很 in a plain statement (很难) and 不太 for a mild negative (不太难). A bare 难 without 很 sets up a contrast: 中文难，英文不难."
              ],
              cognates: [
                "难看 nánkàn (ugly, <i>hard to look at</i>), 难吃 nánchī (bad-tasting), 难过 nánguò (sad), 困难 kùnnan (difficulty), 难受 nánshòu (uncomfortable).",
                "Note the productive pattern 难 + verb = <i>hard to V / unpleasant to V</i>, mirrored by 好 + verb = <i>pleasant to V</i>: 好看, 好吃, 好听 versus 难看, 难吃, 难听."
              ]
            }
          },
          {
            term: "容易",
            roman: "róngyì",
            gloss: "easy",
            pos: "adjective",
            example: { text: "这个语法很容易。", roman: "Zhège yǔfǎ hěn róngyì.", gloss: "This grammar point is easy." },
            linguistics: {
              origin: "compound of two classical words",
              etymology: [
                "容 means <i>to contain, to allow, to permit</i>; 易 means <i>easy</i> in its own right, but also <i>to change, to exchange</i>. The compound reads roughly <i>allowing of ease</i>, and it has been a fixed word since at least the Han period.",
                "易 has two competing ancient explanations and it is honest to give both. The Shuowen says the graph depicts a lizard or chameleon — the animal that changes colour — which would explain the meaning <i>to change</i> (as in 周易 Zhōuyì, the <i>Book of Changes</i>). Modern paleographers more often read the oracle-bone form as liquid being poured from one vessel into another, giving <i>to transfer, to exchange</i> (交易 jiāoyì, trade). Neither reading is settled; the sense <i>easy</i> is a further extension from <i>smooth exchange</i>."
              ],
              script: [
                "容 = 宀 (roof) over 谷 — usually read as a valley, i.e. a large space that holds things, though the Shuowen offers a different analysis. It also means <i>appearance, countenance</i> (容貌 róngmào).",
                "Neither character was simplified."
              ],
              phonology: [
                "róngyì: second tone then fourth tone. The -ong in róng is [ʊŋ], not a pure [o].",
                "The opposite is 难 nán, and the pair patterns like adjectives: 很容易 / 不容易 / 太容易了."
              ],
              cognates: [
                "不容易 bù róngyì (not easy — a common compliment meaning <i>that took real effort</i>), 容易 vs 简单 jiǎndān (simple), 内容 nèiróng (content), 交易 jiāoyì (transaction), 贸易 màoyì (trade).",
                "Sino-Korean 용이 yong-i (容易, literary <i>easy</i>); Sino-Japanese 容易 yōi. Both are bookish in those languages where Chinese uses it every day."
              ]
            }
          },
          {
            term: "快",
            roman: "kuài",
            gloss: "fast, quick; soon",
            pos: "adjective / adverb",
            example: { text: "他说话说得太快了。", roman: "Tā shuōhuà shuō de tài kuài le.", gloss: "He talks much too fast." },
            linguistics: {
              origin: "phono-semantic compound",
              etymology: [
                "忄 (heart) + 夬 guài as phonetic. The original meaning was not <i>fast</i> at all but <i>pleased, gratified</i> — the sense preserved in 快乐 kuàilè (happy) and 愉快 yúkuài (cheerful).",
                "The path to <i>fast</i> runs through <i>sharp, keen</i>: a blade that cuts satisfyingly is 快 (刀很快 — the knife is sharp, still current), and from a keen edge came a keen pace. English shows a similar cluster in <i>swift/sharp/quick</i>, where <i>quick</i> itself originally meant <i>alive</i>."
              ],
              script: [
                "夬 guài is a hand with a jade thumb-ring, used in archery; it also lends sound to 决 jué, 缺 quē and 块 kuài (piece, and the colloquial unit of money you meet in the next unit).",
                "No traditional/simplified difference."
              ],
              phonology: [
                "Fourth tone, kuài. Homophonous with 块 kuài (piece / yuan) and 筷 kuài (chopsticks) — the last two are related, since 筷子 was named for speed by boatmen avoiding the unlucky homophone 住 zhù.",
                "Before a verb, 快 means <i>hurry up and</i>: 快进来! (come in quickly!), 快走吧 (let's get going)."
              ],
              cognates: [
                "快乐 kuàilè (happy), 愉快 yúkuài (pleasant), 很快 hěn kuài (very fast/soon), 快车 kuàichē (express train), 快餐 kuàicān (fast food).",
                "Sino-Korean 쾌 (쾌활 kwaehwal = 快活, cheerful); Sino-Japanese カイ kai (愉快 yukai, 快速 kaisoku)."
              ]
            }
          },
          {
            term: "慢",
            roman: "màn",
            gloss: "slow",
            pos: "adjective",
            example: { text: "请您说得慢一点儿。", roman: "Qǐng nín shuō de màn yìdiǎnr.", gloss: "Please speak a little more slowly." },
            linguistics: {
              origin: "phono-semantic compound",
              etymology: [
                "忄 (heart) + 曼 màn as phonetic. 曼 on its own means <i>long, drawn out, graceful</i>, so the phonetic arguably helps the meaning here as well.",
                "The earliest attested senses are <i>indolent, negligent, disrespectful</i> — still visible in 傲慢 àomàn (arrogant) and 怠慢 dàimàn (to slight a guest). The plain meaning <i>slow</i> is the later, now dominant one."
              ],
              script: [
                "曼 also gives sound to 漫 màn (overflow), 蔓 màn (vine) and 馒 mán (steamed bun).",
                "Traditional and simplified are the same."
              ],
              phonology: [
                "Fourth tone, màn. Contrast 忙 máng (busy, second tone with a nasal ending) — the two are a classic minimal pair for practising -n versus -ng.",
                "慢慢 mànmàn (slowly) reduplicates, and in speech the second syllable often shifts to a high first tone with an 儿 suffix: 慢慢儿 mànmānr — a genuine Beijing pattern."
              ],
              cognates: [
                "慢慢来 mànmàn lái (take your time), 慢车 mànchē (slow train), 傲慢 àomàn (arrogant), 慢性 mànxìng (chronic).",
                "慢走 mànzǒu (literally <i>walk slowly</i>) is what a host says to a departing guest — the equivalent of <i>mind how you go</i>, not an instruction about speed."
              ]
            }
          },
          {
            term: "复习",
            trad: "復習",
            roman: "fùxí",
            gloss: "to review, to revise",
            pos: "verb",
            example: { text: "考试以前我要复习生词。", roman: "Kǎoshì yǐqián wǒ yào fùxí shēngcí.", gloss: "Before the exam I need to review the vocabulary." },
            linguistics: {
              origin: "compound (adverbial verb + verb)",
              etymology: [
                "復 is <i>to return, to do again</i>; 習 is <i>to practise repeatedly</i>. Together: to go over again.",
                "習 has one of the most charming and securely attested origins in the script. The oracle-bone graph is 羽 (a pair of wings) above 日 (the sun, later distorted to 白): a fledgling flapping its wings again and again in the daylight, learning to fly. The Analects' opening line 学而时习之 — <i>to learn and to practise it in season</i> — uses exactly this image, and the modern words 学习 xuéxí and 练习 liànxí still carry it."
              ],
              script: [
                "Simplified 复 absorbs three traditional characters into one shape: 復 (return), 複 (double, complex) and, in some uses, 覆 (to cover). So 复习 (review) and 复杂 fùzá (complex) now share a graph that was historically two.",
                "習 → 习 keeps just one wing of the 羽 pair — a rare case where the simplified form preserves half a picture."
              ],
              phonology: [
                "fùxí: fourth tone then second tone.",
                "Its partner 预习 yùxí (to preview) has the same second syllable, and the pair 预习/复习 — before class and after class — is a fixture of Chinese study culture."
              ],
              cognates: [
                "学习 xuéxí (to study), 练习 liànxí (to practise), 习惯 xíguàn (habit), 自习 zìxí (self-study), 恢复 huīfù (to recover), 重复 chóngfù (to repeat).",
                "Sino-Korean 복습 bokseup (復習) and 예습 yeseup (豫習); Sino-Japanese 復習 fukushū and 予習 yoshū. The whole study-vocabulary set is shared."
              ]
            }
          },
          {
            term: "预习",
            trad: "預習",
            roman: "yùxí",
            gloss: "to preview (study material before class)",
            pos: "verb",
            example: { text: "上课以前我预习语法。", roman: "Shàngkè yǐqián wǒ yùxí yǔfǎ.", gloss: "I preview the grammar before class." },
            linguistics: {
              origin: "compound (adverbial + verb)",
              etymology: [
                "預 means <i>beforehand, in advance</i>; with 習 it means to work through material before it is taught. English has no single word for this, which tells you something about the two education cultures.",
                "預 is a variant of 豫 yù, whose older meanings include <i>a large elephant</i> and <i>at ease, unhurried</i> — the sense <i>in advance</i> developed from being prepared and therefore relaxed. 豫 is also the classical name for Henan province."
              ],
              script: [
                "預 = 予 yǔ as phonetic + 頁 (a head). As noted for 题 in the previous unit, 頁 marks head-related characters; here it is largely conventional.",
                "Simplified 预 reduces 頁 to 页."
              ],
              phonology: [
                "yùxí: fourth then second. The ü in yù is the rounded front vowel, written <i>yu</i> because y- absorbs the umlaut in spelling.",
                "Do not confuse 预 yù with 玉 yù (jade) or 遇 yù (to encounter) — homophones with different graphs."
              ],
              cognates: [
                "预备 yùbèi (to prepare), 预报 yùbào (forecast), 预定 yùdìng (to book in advance), 预防 yùfáng (to prevent).",
                "Sino-Korean 예 (예보 yebo = 豫報); Sino-Japanese ヨ yo (予報 yohō, 予約 yoyaku)."
              ]
            }
          },
          {
            term: "教",
            roman: "jiāo",
            gloss: "to teach",
            pos: "verb",
            example: { text: "王老师教我们中文。", roman: "Wáng lǎoshī jiāo wǒmen Zhōngwén.", gloss: "Teacher Wang teaches us Chinese." },
            linguistics: {
              origin: "compound ideograph",
              etymology: [
                "The oracle-bone graph combines 爻 (crossed counting rods or lattice), 子 (a child) and 攴 (a hand holding a stick) — an adult instructing a child, rod in hand. The same 爻 + 子 core appears in 學/学 (to learn), and the two characters are widely regarded as a matched pair written from the teacher's and the learner's side.",
                "攴, written 攵 in modern characters, is the <i>action with a hand-held implement</i> radical: 放, 收, 改, 政, 敢 all carry it. Its presence in so many words about governance and instruction says something about classical pedagogy."
              ],
              script: [
                "Traditional and simplified are identical.",
                "Two readings: jiāo (first tone) for the plain verb <i>to teach</i>, jiào (fourth tone) in nouns and formal compounds — 教育 jiàoyù (education), 教师 jiàoshī (teacher), 教室 jiàoshì (classroom), 宗教 zōngjiào (religion). 老师 lǎoshī, the everyday word for teacher, avoids the issue entirely."
              ],
              phonology: [
                "jiāo when it takes a person and a subject: 教我中文. This is a double-object verb, like 给.",
                "教书 jiāoshū (to teach for a living) keeps the first tone, even though most two-character compounds with 教 take jiào. Treat the verb/noun split as the rule and 教书 as a memorized case."
              ],
              cognates: [
                "教育 jiàoyù (education), 教室 jiàoshì (classroom), 教授 jiàoshòu (professor), 请教 qǐngjiào (to ask for advice, politely), 教练 jiàoliàn (coach).",
                "Sino-Korean 교 (교육 gyoyuk = 敎育); Sino-Japanese キョウ kyō (教育 kyōiku, 教室 kyōshitsu)."
              ]
            }
          },
          {
            term: "也",
            roman: "yě",
            gloss: "also, too",
            pos: "adverb",
            example: { text: "我学中文，他也学中文。", roman: "Wǒ xué Zhōngwén, tā yě xué Zhōngwén.", gloss: "I study Chinese, and he studies Chinese too." },
            linguistics: {
              origin: "uncertain pictograph, grammaticalized",
              etymology: [
                "In Classical Chinese 也 was not <i>also</i> at all: it was the standard sentence-final particle of assertion and definition — 仁者，人也 (benevolence is what makes a person a person). The modern adverbial meaning <i>also</i> is a separate, much later vernacular development.",
                "The origin of the graph is genuinely disputed. The Shuowen's explanation — that it depicts female genitalia — has been repeated for two thousand years but is widely doubted. A common modern alternative is that it depicts a 匜 yí, a ritual water-pouring vessel, and that the particle use is a phonetic loan. There is no consensus, and any confident story you read about 也 should be treated with suspicion."
              ],
              script: [
                "也 is used as a phonetic component in 他 tā (he), 她 tā (she), 地 dì/de (earth; adverbial particle), 池 chí (pond), 驰 chí — a very productive series.",
                "Traditional and simplified are identical."
              ],
              phonology: [
                "Third tone, yě. Before another third tone it rises: 也很好 is said <i>yé hěn hǎo</i>.",
                "也 is never stressed and never sentence-final in modern Mandarin. English speakers who append <i>too</i> at the end produce 我学中文也, which is ungrammatical."
              ],
              cognates: [
                "也许 yěxǔ (perhaps), 也好 yěhǎo (that's fine too), 再也不 zài yě bù (never again).",
                "Sino-Korean/Sino-Japanese borrow 也 only in the Classical particle sense (Japanese なり nari uses 也 in some old texts) — the <i>also</i> meaning did not travel."
              ]
            }
          },
          {
            term: "都",
            roman: "dōu",
            gloss: "all, both; (with question words) any at all",
            pos: "adverb",
            example: { text: "我们都是学生。", roman: "Wǒmen dōu shì xuésheng.", gloss: "We are all students." },
            linguistics: {
              origin: "phono-semantic compound; two readings",
              etymology: [
                "The graph's original word is <b>dū</b>, <i>a capital city</i> — the seat where people and administration are gathered. That reading survives in 首都 shǒudū (capital), 都市 dūshì (metropolis) and the city name 成都 Chéngdū.",
                "The adverb dōu <i>all</i> is a later vernacular development. The usual explanation links it to the idea of gathering everything into one place, which fits the semantics of the capital, though the derivation is not formally proven. What is certain is that the two readings are old and stable, and that a beginner must learn which is which."
              ],
              script: [
                "者 zhě as phonetic + 阝 on the right, which is the compressed form of 邑 yì (settlement). Beware: the identical-looking 阝 on the <b>left</b> of a character is 阜 fù (mound), a completely different radical — compare 都 (city) with 阴 (shade of a hill).",
                "Traditional and simplified are identical."
              ],
              phonology: [
                "dōu (first tone) for <i>all</i>; dū (first tone, different final) for <i>capital</i>.",
                "都 is unstressed in normal speech but takes stress for emphasis: 我<b>都</b>懂了 (I understood <i>everything</i>)."
              ],
              cognates: [
                "首都 shǒudū (capital), 都市 dūshì (city), 全都 quándōu (entirely), 都是 dōu shì (all are / it's all because of).",
                "都 also forms the important pattern 什么都 / 谁都 / 哪儿都 + verb = <i>anything / anyone / anywhere at all</i>: 我什么都不懂 (I don't understand anything)."
              ]
            }
          },
          {
            term: "太",
            roman: "tài",
            gloss: "too, excessively; extremely",
            pos: "adverb",
            example: { text: "汉字太难了！", roman: "Hànzì tài nán le!", gloss: "Characters are so hard!" },
            linguistics: {
              origin: "derived graph (from 大)",
              etymology: [
                "太 is 大 dà (big) with an added dot, and it began as a graphic variant meaning <i>greatest, supreme, extreme</i>. It is closely tied to 泰 tài, another word for <i>grand, peaceful</i>, and in early texts the three graphs 大, 太 and 泰 were used interchangeably in some words.",
                "The <i>supreme</i> sense is still visible everywhere: 太阳 tàiyáng (the sun, <i>supreme yang</i>), 太太 tàitai (Mrs, <i>the great one of the house</i>), 太极 tàijí (the supreme ultimate), 太平 tàipíng (great peace)."
              ],
              script: [
                "One dot separates 太 from 大 — and both are separated from 犬 quǎn (dog), which puts the dot on the upper right. Three characters, one stroke apart.",
                "No traditional/simplified difference."
              ],
              phonology: [
                "Fourth tone, tài.",
                "太 almost always brings 了 with it: 太好了, 太难了, 太贵了. The 了 is not the perfective aspect marker here but a sentence-final particle of exclamation. Omitting it makes the sentence sound clipped and incomplete."
              ],
              cognates: [
                "太阳 tàiyáng (sun), 太太 tàitai (Mrs, wife), 太极拳 tàijíquán (tai chi), 太平洋 Tàipíngyáng (the Pacific).",
                "Sino-Korean 태 (태양 taeyang = 太陽); Sino-Japanese タイ/タ tai/ta (太陽 taiyō, 太平洋 Taiheiyō)."
              ]
            }
          },
          {
            term: "真",
            roman: "zhēn",
            gloss: "really, truly; true, real",
            pos: "adverb / adjective",
            example: { text: "你真好！", roman: "Nǐ zhēn hǎo!", gloss: "You're really kind!" },
            linguistics: {
              origin: "uncertain compound",
              etymology: [
                "The Shuowen gives a Daoist explanation: a 真人 zhēnrén, a perfected immortal, transforming and ascending to heaven. This is almost certainly a Han-dynasty rationalization of a shape that was already opaque.",
                "Modern paleographers more often analyse the bronze form as 匕 (a spoon or ladle) above 鼎 (a cauldron) — filling a vessel to the brim. On that reading 真 is related to 填 tián (to fill) and 镇 zhèn (to press down, to secure), and the meaning <i>true, genuine, solid</i> comes from fullness. Both accounts are speculative; the honest position is that the origin is unresolved."
              ],
              script: [
                "The modern shape contains 十, 目 (eye) and a base of two strokes; the 目 is a flattened remnant of the vessel, not an eye.",
                "真 lends its sound to 慎 shèn, 镇 zhèn, 填 tián, 颠 diān. Traditional and simplified are the same (the traditional form has an extra internal stroke in some fonts)."
              ],
              phonology: [
                "First tone, zhēn, retroflex initial.",
                "Compare with 太: 真 states a sincere judgement and needs no 了 (你真好), while 太 signals excess or exclamation and normally takes 了 (太好了). Saying 真好了 is wrong; saying 太好 without 了 sounds unfinished."
              ],
              cognates: [
                "真的 zhēn de (really), 真正 zhēnzhèng (genuine), 认真 rènzhēn (conscientious), 天真 tiānzhēn (naive), 写真 xiězhēn (portrait — the source of Japanese 写真 shashin, photograph).",
                "Sino-Korean 진 (진실 jinsil = 眞實); Sino-Japanese シン shin (真実 shinjitsu, 写真 shashin)."
              ]
            }
          }
        ]
      },
      {
        type: "grammar",
        title: "Grammar",
        points: [
          {
            name: "怎么 and 怎么样: asking how",
            pattern: "Subject + 怎么 + Verb？    ·    Topic + 怎么样？",
            explanation: [
              "怎么 placed before a verb asks by what <b>method</b> something is done: 这个字怎么写? (how is this character written?), 你怎么去学校? (how do you get to school?), 中文怎么说? (how do you say it in Chinese?). Like all question words it stays in place and forbids 吗.",
              "怎么样, by contrast, is not a manner adverb but a predicate — it asks <i>what is it like / how is it going</i>, and it also floats a proposal. 你最近怎么样? (how have you been?), 明天下午，怎么样? (how about tomorrow afternoon?). Because it functions as the whole predicate, no verb follows it.",
              "Keep 怎么 apart from 为什么 wèishénme (<i>why</i>). 你怎么学中文? asks about your method; 你为什么学中文? asks about your reason. There is one overlap worth knowing: with a surprised intonation, 怎么 does mean <i>how come</i> — 你怎么不来? (how come you're not coming?). Context and tone of voice separate the two readings."
            ],
            examples: [
              { text: "这个汉字怎么写？", roman: "Zhège Hànzì zěnme xiě?", gloss: "How do you write this character?" },
              { text: "你怎么学生词？", roman: "Nǐ zěnme xué shēngcí?", gloss: "How do you study new words?" },
              { text: "你的中文课怎么样？", roman: "Nǐ de Zhōngwén kè zěnmeyàng?", gloss: "How's your Chinese class going?" },
              { text: "我们六点见面，怎么样？", roman: "Wǒmen liù diǎn jiànmiàn, zěnmeyàng?", gloss: "Let's meet at six — how's that?" }
            ]
          },
          {
            name: "Complement of degree with 得",
            pattern: "Verb + 得 + 很/不/太… + Adjective    ·    with an object: (Verb) + Object + Verb + 得 + Adjective",
            explanation: [
              "To say how well an action is performed, Chinese does not modify the verb from the front. It attaches a comment to the back with 得: 他说得很快 (he speaks fast), 我写得不好 (I write badly), 你唱得真好听 (you sing beautifully). The word after 得 is a full adjectival predicate, which is why it needs 很 in a plain positive statement — 说得好 alone sounds like a comparison or a fragment.",
              "Negation and questions go on the <b>complement</b>, never on the verb. Negative: 他说得不快 (he doesn't speak fast) — not 他不说得快. Question: 他说得快吗? or the affirmative-negative form 他说得快不快? or the open question 他说得怎么样? All three are common and all three put the interrogation after 得.",
              "The complication comes when the verb has an object. 得 must sit immediately after the verb, so the verb has to be repeated: 他<b>说</b>中文<b>说</b>得很好 — literally <i>he speaks Chinese, speaks it well</i>. Alternatively, front the object as a topic and drop the first verb: 他中文说得很好, or 他的中文说得很好. All three versions are natural; what is not possible is 他说中文得很好. The same rule catches every verb-object compound: 他说话说得很快, 她唱歌唱得很好."
            ],
            examples: [
              { text: "他跑得很快。", roman: "Tā pǎo de hěn kuài.", gloss: "He runs fast." },
              { text: "我写汉字写得很慢。", roman: "Wǒ xiě Hànzì xiě de hěn màn.", gloss: "I write characters slowly." },
              { text: "你的中文说得真好。", roman: "Nǐ de Zhōngwén shuō de zhēn hǎo.", gloss: "You really speak Chinese well." },
              { text: "老师说得不太快。", roman: "Lǎoshī shuō de bú tài kuài.", gloss: "The teacher doesn't speak too fast." },
              { text: "他写得怎么样？", roman: "Tā xiě de zěnmeyàng?", gloss: "How is his writing?" }
            ]
          },
          {
            name: "The adverbs 也 and 都: position is everything",
            pattern: "Subject + 也 / 都 + Verb…    ·    combined order: Subject + 也 + 都 + Verb",
            explanation: [
              "也 and 都 belong to a class of words that must stand between the subject and the verb. They cannot begin a sentence, cannot end one, and cannot be separated from the verb by anything except another adverb or an auxiliary. 我也是学生 (I'm a student too). 他们都很忙 (they're all busy). English lets <i>too</i> and <i>all</i> wander; Chinese does not.",
              "都 is the trickier of the two because it always refers <b>backwards</b>, to something already mentioned before it. 我们都学中文 = all of us study Chinese. If you want <i>I study all of them</i>, 都 cannot help you, because the thing quantified follows the verb — you would front it: 这些生词我都会 (I know all these new words). This backward-looking property is the single most important fact about 都.",
              "When both appear, the order is fixed: 也 before 都. 他们也都是学生 (they are all students too). And note the negation contrast, which is a genuine meaning difference rather than a stylistic one: 我们都不去 = none of us is going; 我们不都去 = not all of us are going. 都 before 不 negates everything; 不 before 都 negates the totality."
            ],
            examples: [
              { text: "我也学中文。", roman: "Wǒ yě xué Zhōngwén.", gloss: "I study Chinese too." },
              { text: "他们都是我的朋友。", roman: "Tāmen dōu shì wǒ de péngyou.", gloss: "They're all my friends." },
              { text: "我们也都要考试。", roman: "Wǒmen yě dōu yào kǎoshì.", gloss: "We all have exams too." },
              { text: "这些汉字我都不认识。", roman: "Zhèxiē Hànzì wǒ dōu bú rènshi.", gloss: "I don't know any of these characters." },
              { text: "我们不都去。", roman: "Wǒmen bù dōu qù.", gloss: "Not all of us are going." }
            ]
          },
          {
            name: "Degree adverbs: 很, 太…了, 真, 不太",
            pattern: "很 + Adj (neutral)    ·    太 + Adj + 了 (excess/exclamation)    ·    真 + Adj (sincere)    ·    不太 + Adj (mild negative)",
            explanation: [
              "Chinese adjectives are verbs — 他忙 already means <i>he is busy</i>, with no copula. But a bare adjective implies contrast, so the default neutral statement inserts 很, which in that position is largely bleached and does <b>not</b> mean <i>very</i>. 他很忙 is simply <i>he's busy</i>; to say <i>very</i> with force you need stress, or 非常 fēicháng.",
              "太 marks excess and takes 了: 太难了 (too hard / so hard), 太快了 (much too fast). Depending on intonation it is either a complaint or an enthusiastic exclamation — 太好了! is the standard way to say <i>fantastic!</i> 真 is different in kind: it asserts sincerity, not degree, and takes no 了 — 你真好 (you really are kind).",
              "The negative of 太 is idiomatic and extremely useful. 不太 + adjective means <i>not very</i>, and it is the polite way to say something mildly negative: 不太好 (not so good), 不太难 (not too hard), 不太喜欢 (don't much like it). Chinese conversation leans heavily on this hedge — a flat 不好 is blunt in a way that 不太好 is not.",
              "You will meet 太…了 again in the next unit, where it does duty in shopping complaints (太贵了 — too expensive) alongside comparison with 比."
            ],
            examples: [
              { text: "今天的生词很多。", roman: "Jīntiān de shēngcí hěn duō.", gloss: "There are a lot of new words today." },
              { text: "这个语法太难了！", roman: "Zhège yǔfǎ tài nán le!", gloss: "This grammar point is too hard!" },
              { text: "太好了，谢谢你！", roman: "Tài hǎo le, xièxie nǐ!", gloss: "Wonderful, thank you!" },
              { text: "他写字写得真漂亮。", roman: "Tā xiě zì xiě de zhēn piàoliang.", gloss: "He writes characters really beautifully." },
              { text: "汉字不太容易。", roman: "Hànzì bú tài róngyì.", gloss: "Characters aren't very easy." }
            ]
          }
        ]
      },
      {
        type: "notes",
        title: "Culture note: modesty, compliments, and what learning characters actually involves",
        body: [
          "The first exchange in this unit's dialogue is a script every learner will live through. Praise your Chinese and you are expected to deflect it: 哪里哪里 nǎli nǎli (literally <i>where? where?</i>, i.e. <i>hardly</i>), 还差得远呢 hái chà de yuǎn ne (I've a long way to go), or the wonderfully useful 马马虎虎 mǎmǎhūhū (so-so, <i>horse horse tiger tiger</i>). Accepting a compliment with a simple 谢谢 is increasingly acceptable among young urban Chinese and will not offend anyone, but the deflection still reads as more polished. Note that the compliment 你的中文说得很好 is often given after a single well-pronounced sentence — treat it as encouragement rather than assessment.",
          "The teacher relationship is more formal than in most Western classrooms. You address a teacher as 王老师 (surname + 老师), not by given name and not as 老师王; 老师 is itself a term of respect and is used as a title even for people who are not teachers by profession. Asking a question is 请教 qǐngjiào (literally <i>request instruction</i>) when you want to be polite. Standing when a teacher enters is no longer common at university level but is still routine in secondary schools.",
          "As for the characters themselves: literacy is conventionally reckoned at around 3,000 characters, a well-educated reader knows perhaps 5,000–6,000, and the largest dictionaries list over 50,000, most of them historical. HSK level 1 asks for about 150 characters; HSK 4 for around 1,200. The good news is that characters are not arbitrary pictures — the great majority are 形声字 xíngshēngzì, phono-semantic compounds combining a meaning radical with a sound component, exactly as this course's linguistics notes describe. Once you can decompose a character, learning it becomes recognition rather than memorization.",
          "Simplified characters (简体字 jiǎntǐzì) were introduced in the mainland in 1956 and 1964; traditional characters (繁體字 fántǐzì) remain standard in Taiwan, Hong Kong and Macau, and in overseas communities. Many simplifications were not inventions but the adoption of cursive or vulgar forms already in centuries of use — 来, 学, 写, 门. A few merged distinct characters into one graph (面 for both <i>face</i> and <i>noodles</i>; 后 for both <i>after</i> and <i>empress</i>), which is why traditional text is sometimes easier to disambiguate. Pinyin, adopted in 1958, is a pronunciation aid and not a replacement script; Chinese children learn it first and then leave it behind."
        ]
      },
      {
        type: "practice",
        title: "Practice",
        exercises: [
          {
            type: "mcq",
            prompt: "Which sentence correctly says 'He speaks Chinese very well'?",
            promptAudio: null,
            choices: ["他说中文说得很好。", "他说中文得很好。", "他很好说中文。", "他说得中文很好。"],
            answer: 0,
            explain: "得 must follow the verb directly, so when there is an object the verb is repeated: V + O + V + 得 + complement."
          },
          {
            type: "mcq",
            prompt: "How do you negate 他说得很快?",
            promptAudio: null,
            choices: ["他说得不快。", "他不说得快。", "他没说得快。", "他说不得快。"],
            answer: 0,
            explain: "Negation lands on the complement, never on the verb: V + 得 + 不 + Adj."
          },
          {
            type: "mcq",
            prompt: "我们 ___ 是学生。 — 'We are all students.'",
            promptAudio: "我们都是学生。",
            choices: ["都", "也", "太", "得"],
            answer: 0,
            explain: "都 quantifies something already mentioned — here 我们 — and stands between the subject and the verb."
          },
          {
            type: "mcq",
            prompt: "What is the difference between 我们都不去 and 我们不都去?",
            promptAudio: null,
            choices: [
              "The first means none of us is going; the second means not all of us are going.",
              "They mean the same thing.",
              "The first means not all of us are going; the second means none of us is going.",
              "The second is ungrammatical."
            ],
            answer: 0,
            explain: "都 before 不 negates every member; 不 before 都 negates the totality only."
          },
          {
            type: "typing",
            prompt: "Type 'I write characters very slowly.' in Chinese, using the 得 construction with a repeated verb.",
            answer: ["我写汉字写得很慢", "我写汉字写得很慢。", "我写字写得很慢", "我写字写得很慢。", "wǒ xiě Hànzì xiě de hěn màn", "wo xie hanzi xie de hen man"],
            hint: "Verb + object + verb + 得 + 很 + adjective."
          },
          {
            type: "typing",
            prompt: "Type the Chinese question 'How do you write this character?' (use 怎么).",
            answer: ["这个字怎么写", "这个字怎么写？", "这个汉字怎么写", "这个汉字怎么写？", "zhège zì zěnme xiě", "zhege zi zenme xie"],
            hint: "Topic first, then 怎么, then the verb. No 吗."
          },
          {
            type: "typing",
            prompt: "Type the pinyin for 语法 as it is actually pronounced (apply third-tone sandhi).",
            answer: ["yúfǎ", "yufa", "yúfa", "yǔfǎ"],
            hint: "Two third tones in a row — the first one changes."
          },
          {
            type: "listening",
            prompt: "Listen and choose the correct meaning.",
            audioText: "他说话说得太快了，我听不懂。",
            choices: [
              "He talks much too fast — I can't follow him.",
              "He speaks slowly, so I understand.",
              "He said something too quietly.",
              "I speak too fast for him."
            ],
            answer: 0,
            explain: "太…了 marks excess, and 听不懂 is the potential complement 'unable to understand by listening'."
          },
          {
            type: "listening",
            prompt: "Listen. Which adverb did you hear, and what does the sentence mean?",
            audioText: "我们也都要考试。",
            choices: [
              "We all have exams too.",
              "We don't all have exams.",
              "Do we all have exams?",
              "We had exams too."
            ],
            answer: 0,
            explain: "Both adverbs appear, in the fixed order 也 before 都, and 要 marks obligation."
          },
          {
            type: "match",
            prompt: "Match each word with its meaning.",
            pairs: [
              { a: "生词", b: "new vocabulary word" },
              { a: "语法", b: "grammar" },
              { a: "复习", b: "to review" },
              { a: "预习", b: "to preview before class" },
              { a: "懂", b: "to understand" },
              { a: "容易", b: "easy" }
            ]
          },
          {
            type: "order",
            prompt: "Arrange into a sentence: 'The teacher doesn't speak too fast.'",
            tokens: ["老师", "说", "得", "不太", "快"],
            answer: "老师 说 得 不太 快"
          },
          {
            type: "order",
            prompt: "Arrange into a sentence: 'Every day I preview the new words and also review the grammar.'",
            tokens: ["我", "每天", "预习", "生词", "也", "复习", "语法"],
            answer: "我 每天 预习 生词 也 复习 语法"
          }
        ]
      }
    ]
  });
})();
