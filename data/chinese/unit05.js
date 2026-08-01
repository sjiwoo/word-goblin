window.CURRICULUM = window.CURRICULUM || {};
(function () {
  const C = window.CURRICULUM;
  C.chinese = C.chinese || { units: [] };

  C.chinese.units.push({
    id: "zh-05",
    order: 5,
    title: "Visiting Friends",
    titleNative: "看朋友",
    subtitle: "Dropping by a friend's dorm: saying where things are, asking 哪儿, and softening requests with 一下.",
    textbookBasis: [
      "Integrated Chinese Level 1 Part 1, Lesson 5 (Visiting Friends)",
      "HSK Standard Course 1, Lessons 9–11",
      "New Practical Chinese Reader 1, Lesson 6 (我们去游泳吧) and Lesson 7"
    ],
    overview: [
      "Units 1–4 gave you people (你/我/他, 是, 姓, 叫), possessions and family (有, 个), the calendar and the clock, and likes and wishes (喜欢, 想). This unit puts those people somewhere. The single most useful word here is <b>在</b> zài, which does double duty: as a full verb it means <i>to be located at</i> (我在宿舍 — I'm in the dorm), and as a coverb it marks the place where an action happens (我在图书馆看书 — I read at the library).",
      "Along with 在 comes its question partner <b>哪儿</b> nǎr, <i>where</i>. Chinese question words do not move to the front of the sentence the way English <i>where</i> does. You put 哪儿 exactly where the answer would go, and you drop 吗. Learning to keep statement word order under a question is one of the biggest structural wins of the beginner course.",
      "The other two items are politeness tools. The particle <b>呢</b> ne bounces a question back (你呢? — and you?) and asks a bare <i>where is X?</i> (张丽呢?). The verbal measure <b>一下</b> yíxià turns a blunt command into a small, casual request: 介绍一下 (let me do a quick introduction), 等一下 (hang on a second). Chinese politeness is built far more from these softeners than from words meaning <i>please</i>."
    ],
    sections: [
      {
        type: "dialogue",
        title: "Dialogue: 马克去小雨的宿舍",
        context: "Mark, an exchange student, visits his classmate Xiaoyu at her dormitory for the first time. Her friend Chen Dong is already there; her roommate Zhang Li is out.",
        lines: [
          { speaker: "马克", text: "小雨，你在吗？我是马克。", roman: "Xiǎoyǔ, nǐ zài ma? Wǒ shì Mǎkè.", gloss: "Xiaoyu, are you in? It's Mark." },
          { speaker: "小雨", text: "马克！快进来，请坐。", roman: "Mǎkè! Kuài jìnlai, qǐng zuò.", gloss: "Mark! Come on in, have a seat." },
          { speaker: "马克", text: "你的宿舍很好。张丽呢？", roman: "Nǐ de sùshè hěn hǎo. Zhāng Lì ne?", gloss: "Your dorm room is really nice. Where's Zhang Li?" },
          { speaker: "小雨", text: "她不在，她在图书馆看书。", roman: "Tā bú zài, tā zài túshūguǎn kàn shū.", gloss: "She's not in — she's reading at the library." },
          { speaker: "小雨", text: "你想喝茶吗？", roman: "Nǐ xiǎng hē chá ma?", gloss: "Would you like some tea?" },
          { speaker: "马克", text: "谢谢，我想喝水。", roman: "Xièxie, wǒ xiǎng hē shuǐ.", gloss: "Thanks — I'd like water." },
          { speaker: "小雨", text: "好，你等一下。我介绍一下：这是我的朋友陈东。", roman: "Hǎo, nǐ děng yíxià. Wǒ jièshào yíxià: zhè shì wǒ de péngyou Chén Dōng.", gloss: "Sure, hold on a second. Let me introduce you: this is my friend Chen Dong." },
          { speaker: "陈东", text: "你好！认识你很高兴。", roman: "Nǐ hǎo! Rènshi nǐ hěn gāoxìng.", gloss: "Hello! Pleased to meet you." },
          { speaker: "马克", text: "我很高兴认识你。陈东，你家在哪儿？", roman: "Wǒ hěn gāoxìng rènshi nǐ. Chén Dōng, nǐ jiā zài nǎr?", gloss: "Pleased to meet you too. Chen Dong, where is your home?" },
          { speaker: "陈东", text: "我家在上海。你呢？", roman: "Wǒ jiā zài Shànghǎi. Nǐ ne?", gloss: "My home is in Shanghai. And you?" }
        ]
      },
      {
        type: "vocab",
        title: "Vocabulary (19 items)",
        items: [
          {
            term: "在",
            roman: "zài",
            gloss: "to be at / in; at (marking where an action happens)",
            pos: "verb / coverb",
            example: { text: "我在宿舍。", roman: "Wǒ zài sùshè.", gloss: "I'm in the dorm." },
            linguistics: {
              origin: "phono-semantic compound",
              etymology: [
                "The word behind 在 means, at its oldest layer, simply <i>to exist</i> or <i>to be present</i> — the sense preserved in modern 存在 cúnzài (to exist) and 健在 jiànzài (still living). From <i>to exist</i> it narrowed to <i>to exist at a place</i>, and from there to the locative use you learn in this lesson.",
                "Middle Chinese is reconstructed as roughly <i>dzojX</i> (rising tone, later shifted to the departing tone in the modern reading zài); Old Chinese is usually given as something like *dzˤəʔ. The word is likely related to 存 cún (to survive, to be present), a common alternation of near-synonyms in the Old Chinese lexicon, though the derivation is not securely proven."
              ],
              script: [
                "在 is written 土 (earth) plus 才 cái. 才 supplies the sound and 土 the meaning: existence anchored to the ground. In the oracle-bone period the word was written with 才 alone — a graph showing a sprout pushing through a horizontal line, or on another reading a marker post driven into the earth. The 土 was added in bronze script to keep 在 (be at) apart from 才 (talent, only just).",
                "Traditional and simplified forms are identical; 在 has never been simplified."
              ],
              phonology: [
                "Fourth (falling) tone, zài. Do not confuse it with 再 zài (again), a perfect homophone that beginners routinely swap in writing.",
                "In fast speech 在 is often reduced almost to a neutral-toned particle inside the progressive construction 在看书 (in the middle of reading)."
              ],
              cognates: [
                "Shares the morpheme with 存在 cúnzài (exist), 现在 xiànzài (now, literally <i>present-existing</i>), 正在 zhèngzài (in the middle of), 所在 suǒzài (location).",
                "Sino-Korean reflex 재 (재학 jaehak = 在学, enrolled in school); Sino-Japanese ザイ zai (在日 zainichi, resident in Japan)."
              ]
            }
          },
          {
            term: "哪儿",
            trad: "哪兒",
            roman: "nǎr",
            gloss: "where",
            pos: "question word",
            example: { text: "你的学校在哪儿？", roman: "Nǐ de xuéxiào zài nǎr?", gloss: "Where is your school?" },
            linguistics: {
              origin: "compound (question word + retroflex suffix)",
              etymology: [
                "哪 is the interrogative determiner <i>which</i>; adding a place-word suffix makes it <i>which place</i> = where. Northern Mandarin uses the rhotic suffix 儿 (哪儿 nǎr); southern Mandarin and Taiwan prefer 哪里 nǎlǐ, literally <i>which inside</i>. Both are fully standard; textbooks from Beijing teach 哪儿 first.",
                "哪 itself is a late graph. It was carved out of 那 nà (that) once the vernacular needed to distinguish the interrogative <i>which</i> from the demonstrative <i>that</i>; 那 in turn began life as a proper noun (a place / people name in the west) and was borrowed for the demonstrative."
              ],
              script: [
                "哪 = 口 (mouth, marking a spoken/grammatical word) + 那 nà as phonetic. The 口 radical is the standard way Chinese writing flags particles and interjections — compare 呢, 吗, 吧, 啊.",
                "儿 is the simplification of 兒, an oracle-bone pictograph of a child drawn with an open, unfused skull (the fontanelle) above 儿, a walking human body. Simplified 儿 keeps only the legs."
              ],
              phonology: [
                "Erhua: the suffix is not a separate syllable. 哪 + 儿 fuses into one syllable nǎr, in which the final -a is pronounced with the tongue curled back. Third tone is preserved on the fused syllable.",
                "In a sentence, third tone before another third tone becomes second: 哪儿好? is said <i>nár hǎo</i>."
              ],
              cognates: [
                "The 哪/那 pair anchors the whole demonstrative set: 这儿 zhèr (here), 那儿 nàr (there), 哪儿 nǎr (where).",
                "哪 also appears in 哪个 nǎge (which one), 哪些 nǎxiē (which ones), 哪天 nǎ tiān (which day)."
              ]
            }
          },
          {
            term: "呢",
            roman: "ne",
            gloss: "sentence particle: and (what about)…? ; softens a question",
            pos: "particle",
            example: { text: "我很好，你呢？", roman: "Wǒ hěn hǎo, nǐ ne?", gloss: "I'm fine — and you?" },
            linguistics: {
              origin: "phono-semantic compound (graph); grammaticalized particle",
              etymology: [
                "呢 as a grammatical particle is a vernacular development that becomes common in Song and Yuan texts and is standard in Ming vernacular fiction. It probably continues an earlier final particle written 尼 or 聻/那, but the exact ancestor is genuinely disputed and you should treat any single-origin story with caution.",
                "Functionally it has two well-separated modern jobs: forming a follow-up or truncated question (你呢?), and marking an ongoing state or action, often with 在 (他在睡觉呢 — he's sleeping)."
              ],
              script: [
                "口 (mouth) + 尼 ní as phonetic — the usual recipe for a particle graph. The same 尼 phonetic gives 泥 ní (mud) and 妮 nī (girl).",
                "No traditional/simplified difference."
              ],
              phonology: [
                "Neutral tone (ne) as a particle: short, low, unstressed, and never stressed for emphasis.",
                "The same character read ní with full second tone is a separate noun, 呢子 nízi (woollen cloth) — an unrelated use of the graph."
              ],
              cognates: [
                "Belongs with the other final particles beginners meet: 吗 ma (yes/no question), 吧 ba (suggestion / supposition), 啊 a (softening), 了 le (change of state).",
                "Note the contrast in one pair: 你好吗? asks a genuine yes/no question; 你呢? merely hands the previous question back."
              ]
            }
          },
          {
            term: "一下",
            roman: "yíxià",
            gloss: "(verbal measure) once, a bit, for a moment",
            pos: "measure phrase",
            example: { text: "请你等一下。", roman: "Qǐng nǐ děng yíxià.", gloss: "Please wait a moment." },
            linguistics: {
              origin: "compound (numeral + measure)",
              etymology: [
                "Literally <i>one stroke / one downward motion</i>. 下 as a noun counts blows or strokes — 打了三下 (hit three times) — and from counting literal strokes the phrase generalized to counting any brief instance of an action. Modern 一下 usually no longer means <i>once</i> at all; it means <i>briefly, casually, just a bit</i>.",
                "This softening use is well established by late imperial vernacular and is one of the most frequent politeness devices in spoken Mandarin today."
              ],
              script: [
                "一 is the simplest indicative graph in the script: a single horizontal stroke for the number one.",
                "下 is also indicative (指事 zhǐshì), not pictographic: an early form put a short mark <i>below</i> a horizontal reference line to mean <i>below</i>. Its mirror image 上 shàng puts the mark above. Neither traditional nor simplified writing differs."
              ],
              phonology: [
                "Tone sandhi on 一: the citation tone is yī (first tone), but before a fourth-tone syllable it changes to second tone, so 一下 is <b>yíxià</b>, never <i>yīxià</i>. Before first, second or third tones it becomes fourth: 一天 yìtiān, 一年 yìnián, 一起 yìqǐ.",
                "In fast speech 一下 is often reduced further to a single light syllable, and speakers frequently add 儿: 一下儿 yíxiàr."
              ],
              cognates: [
                "Same softening family: 一点儿 yìdiǎnr (a little, with nouns and adjectives), verb reduplication 看看 kànkan / 等等 děngdeng (same effect as 一下).",
                "下 itself appears in 下午 xiàwǔ (afternoon), 下课 xiàkè (get out of class), 下面 xiàmiàn (below)."
              ]
            }
          },
          {
            term: "家",
            roman: "jiā",
            gloss: "home, family; (measure word for businesses)",
            pos: "noun",
            example: { text: "我家在上海。", roman: "Wǒ jiā zài Shànghǎi.", gloss: "My home is in Shanghai." },
            linguistics: {
              origin: "compound of uncertain analysis",
              etymology: [
                "家 is one of the famous problem characters. The graph is 宀 (roof) over 豕 shǐ (pig), and the folk explanation — a house is where the pig lives, i.e. a settled farming household — is memorable but probably not the real story.",
                "The phonetic objection is decisive for many scholars: Old Chinese 家 is reconstructed around *kˤra, while 豕 is around *l̥ajʔ, so 豕 cannot straightforwardly be the sound component. A widely cited proposal is that the lower element was originally 豭 jiā (boar), whose sound fits, and that it was later simplified in writing to plain 豕. Others keep the semantic reading (pigsty > dwelling). Honest summary: the roof is certain, the pig is contested."
              ],
              script: [
                "宀 is the <i>roof</i> radical, found in 安 ān (peace: a woman under a roof), 室 shì (room), 宿 sù (to lodge), 客 kè (guest).",
                "No simplification: 家 is written identically in traditional and simplified text."
              ],
              phonology: [
                "First tone, jiā. Note that 我家 needs no 的: kinship and home nouns drop the possessive particle after a pronoun (我家, 我妈妈), while other nouns keep it (我的书).",
                "As a suffix meaning <i>-ist, specialist</i> it keeps full first tone: 作家 zuòjiā (writer), 科学家 kēxuéjiā (scientist)."
              ],
              cognates: [
                "国家 guójiā (country), 大家 dàjiā (everybody), 家人 jiārén (family members), 回家 huí jiā (go home).",
                "Sino-Korean 가 (국가 gukga = 国家); Sino-Japanese カ/ケ ka/ke (家族 kazoku, 作家 sakka) alongside the native reading いえ ie."
              ]
            }
          },
          {
            term: "朋友",
            roman: "péngyou",
            gloss: "friend",
            pos: "noun",
            example: { text: "这是我的朋友陈东。", roman: "Zhè shì wǒ de péngyou Chén Dōng.", gloss: "This is my friend Chen Dong." },
            linguistics: {
              origin: "compound of two near-synonyms",
              etymology: [
                "Classical Chinese distinguished the two halves: 朋 were people of the same teacher or the same group (peers), 友 were people bound by mutual affection and aid. Modern Mandarin fused them into one everyday word, a very common pattern in the shift from monosyllabic Classical to disyllabic modern vocabulary.",
                "朋 originally denoted a string of cowrie shells used as a unit of value (two strands tied together) — hence <i>a matched pair, a set, associates</i>. The Shuowen instead treats 朋 as an ancient form of 鳳 fèng (phoenix), on the image of birds flocking. Both accounts are old; the cowrie account is favoured by most modern paleographers, but neither is certain. What is certain is that the two 月-looking elements are <b>not</b> moons — that is a later shape convergence."
              ],
              script: [
                "友 is transparent and secure: two right hands (又 over 又) drawn side by side, hands joined in mutual help. The oracle-bone form is two 又 graphs pointing the same way.",
                "Neither character was simplified; 朋友 is written identically in Taiwan and the mainland."
              ],
              phonology: [
                "péngyou — the second syllable is <b>neutral tone</b> in normal speech, not the full third tone yǒu you would predict from 友 in isolation. Textbook pinyin sometimes writes péngyǒu; the spoken norm is péngyou.",
                "小朋友 xiǎopéngyou (child, little friend) keeps the same neutral second syllable."
              ],
              cognates: [
                "友 recurs in 友好 yǒuhǎo (friendly), 朋友们 péngyoumen (friends), 男朋友 nánpéngyou (boyfriend), 女朋友 nǚpéngyou (girlfriend).",
                "Sino-Korean 붕우 bung-u (literary <i>friends</i>) and 우정 ujeong (友情, friendship); Sino-Japanese ユウ yū (友人 yūjin) beside native とも tomo."
              ]
            }
          },
          {
            term: "进",
            trad: "進",
            roman: "jìn",
            gloss: "to enter, to come/go in",
            pos: "verb",
            example: { text: "快进来！", roman: "Kuài jìnlai!", gloss: "Come on in!" },
            linguistics: {
              origin: "compound ideograph (traditional) / re-phoneticized simplification",
              etymology: [
                "The traditional graph 進 is 辵 (walking, written 辶) plus 隹 zhuī, a short-tailed bird. The classical reading of the compound is that birds hop forward and cannot walk backwards, so bird + motion = <i>advance</i>. 隹 may also carry a partial phonetic value (Old Chinese 隹 *tur beside 進 *tsi[n]-s), so the graph sits on the boundary between ideographic and phono-semantic.",
                "The core meaning is <i>to advance</i>; <i>to enter</i> is a specialization that dominates in the modern spoken language."
              ],
              script: [
                "The simplified 进 replaces 隹 with 井 jǐng (a well; the graph is a picture of a well-head frame). 井 works as an approximate phonetic in Mandarin and this variant is attested in pre-modern handwriting, so the 1956 simplification adopted an existing vulgar form rather than inventing one.",
                "辶 (the <i>walk</i> radical) is written last even though it appears on the left — one of the standard stroke-order exceptions."
              ],
              phonology: [
                "Fourth tone, jìn. In the directional compounds 进来 jìnlai (come in, toward speaker) and 进去 jìnqu (go in, away from speaker), the second syllable becomes neutral.",
                "Distinguish 进 jìn (enter) from 近 jìn (near) — same sound, different graph and meaning."
              ],
              cognates: [
                "进来 jìnlai, 进去 jìnqu, 进步 jìnbù (progress), 前进 qiánjìn (advance), 进口 jìnkǒu (import).",
                "Sino-Korean 진 (진보 jinbo = 進步); Sino-Japanese シン shin (進歩 shinpo, 進学 shingaku)."
              ]
            }
          },
          {
            term: "来",
            trad: "來",
            roman: "lái",
            gloss: "to come",
            pos: "verb",
            example: { text: "你什么时候来我家？", roman: "Nǐ shénme shíhou lái wǒ jiā?", gloss: "When are you coming to my place?" },
            linguistics: {
              origin: "pictograph, later a phonetic loan (假借)",
              etymology: [
                "來 is a textbook example of 假借 jiǎjiè, phonetic borrowing. The oracle-bone graph is a picture of a wheat plant: an upright stalk with drooping leaves and an ear at the top. Its original word meant <i>wheat</i>.",
                "Because the verb <i>to come</i> sounded nearly the same, scribes borrowed the wheat graph to write it — and the borrowed sense took over so completely that a new character, 麥 (simplified 麦), had to be pressed into service for <i>wheat</i>. Old Chinese reconstructions such as 來 *mə.rˤək and 麥 *mˤrək show how close the two were."
              ],
              script: [
                "The simplified 来 is a cursive-derived abbreviation of 來, dropping the two 人-shaped leaf strokes into simple crossing strokes. It is not a new invention; it appears in running-script calligraphy for centuries.",
                "As a component 来 supplies sound in 莱 lái and 睐 lài."
              ],
              phonology: [
                "Second tone, lái. In directional compounds it goes neutral: 进来 jìnlai, 出来 chūlai, 起来 qǐlai.",
                "来 and 去 encode direction relative to the <b>speaker</b>, not to any fixed goal: standing outside, you say 我去你家; standing inside your friend's flat, the same trip is 我来了."
              ],
              cognates: [
                "来 in 来自 láizì (come from), 未来 wèilái (future), 后来 hòulái (later), 原来 yuánlái (originally, it turns out).",
                "Sino-Korean 래/내 (미래 mirae = 未來); Sino-Japanese ライ rai (未来 mirai, 来年 rainen)."
              ]
            }
          },
          {
            term: "坐",
            roman: "zuò",
            gloss: "to sit; to travel by (a vehicle)",
            pos: "verb",
            example: { text: "请坐，喝点儿茶。", roman: "Qǐng zuò, hē diǎnr chá.", gloss: "Please sit down and have some tea." },
            linguistics: {
              origin: "compound ideograph",
              etymology: [
                "The seal-script graph shows two 人 (people) facing each other on 土 (the ground) — two people seated on a mat on the earth floor, which is exactly how people sat before chairs reached China. The character is one of the clearer ideographic compounds in the standard set.",
                "The extended modern sense <i>to travel by</i> (坐飞机 zuò fēijī, take a plane) comes from the plain fact that a passenger sits: you sit <i>in</i> the vehicle."
              ],
              script: [
                "Written identically in traditional and simplified script. Adding the 广 (building) radical derives 座 zuò, <i>a seat</i> — a noun made from a verb, one of the tidiest derivational pairs in the writing system.",
                "Note the stroke count trap: 坐 has seven strokes and the two 人 elements are written before 土."
              ],
              phonology: [
                "Fourth tone, zuò. Homophonous with 做 zuò (to do/make) and 作 zuò (to work, produce) — a triplet worth drilling separately.",
                "In 请坐 there is no tone sandhi: third-tone sandhi only applies before another third tone, and 坐 is fourth tone, so 请 keeps its full dipping contour. Compare 请你 qǐng nǐ, where 请 does shift to a rising tone."
              ],
              cognates: [
                "座位 zuòwèi (seat), 坐下 zuòxia (sit down), 坐飞机 zuò fēijī (fly), 请坐 qǐng zuò (please be seated).",
                "Sino-Korean 좌 (좌석 jwaseok = 座席); Sino-Japanese ザ za (座席 zaseki) beside native すわる suwaru."
              ]
            }
          },
          {
            term: "介绍",
            trad: "介紹",
            roman: "jièshào",
            gloss: "to introduce; an introduction",
            pos: "verb / noun",
            example: { text: "我给你们介绍一下。", roman: "Wǒ gěi nǐmen jièshào yíxià.", gloss: "Let me introduce you two." },
            linguistics: {
              origin: "compound of two verbs",
              etymology: [
                "介 in Classical Chinese means <i>to be between, to act as intermediary</i> — a 介 was the go-between at a formal meeting. 紹 means <i>to join, to continue a line</i>, originally of threads or of a family succession. Put together, 介紹 is <i>to stand between and connect</i>, an accurate description of what an introducer does.",
                "The word is old but its modern high frequency is partly a product of the late-Qing and Republican vocabulary expansion, when Chinese and Japanese writers standardized many two-character terms for social and academic life."
              ],
              script: [
                "介 is a pictograph of a person 人 with dots on either side, usually read as a man wearing armour plates — hence the old meaning <i>armour, shell</i> (甲介) alongside <i>between</i>.",
                "紹 is 糸 (silk thread) + 召 zhào as phonetic. The simplified 绍 replaces 糸 with the running-script form 纟, the single most productive simplification in the whole reform (纟 appears in 红, 给, 经, 线, and hundreds more)."
              ],
              phonology: [
                "jièshào — two full fourth tones in a row, which English speakers tend to flatten. Give each syllable its own falling contour.",
                "介 is also the first syllable of 介意 jièyì (to mind); 绍 is otherwise rare outside 绍兴 Shàoxīng, the city and its wine."
              ],
              cognates: [
                "自我介绍 zìwǒ jièshào (introduce oneself), 介绍人 jièshàorén (the person who introduces / a referee), 媒介 méijiè (medium).",
                "Sino-Korean 소개 sogae — note the <b>reversed</b> morpheme order (紹介) which Korean and Japanese both use; Sino-Japanese 紹介 shōkai. Chinese alone puts 介 first."
              ]
            }
          },
          {
            term: "高兴",
            trad: "高興",
            roman: "gāoxìng",
            gloss: "happy, pleased, glad",
            pos: "adjective",
            example: { text: "认识你我很高兴。", roman: "Rènshi nǐ wǒ hěn gāoxìng.", gloss: "I'm very glad to meet you." },
            linguistics: {
              origin: "compound (adjective + noun)",
              etymology: [
                "Literally <i>high spirits</i>. 高 is <i>tall, high</i>; 興 in the departing-tone reading xìng means <i>mood, interest, zest</i>. The pairing is transparent and parallels English <i>in high spirits</i>.",
                "興 illustrates a productive Old Chinese derivation known as 四聲別義 (meaning distinguished by tone): the level-tone reading xīng is the verb <i>to rise, to flourish, to start up</i> (兴起 xīngqǐ, 高兴 is not this reading), while the departing-tone reading xìng is the derived noun <i>the state of being roused</i> = interest, mood. A departing-tone suffix *-s in Old Chinese is the standard explanation for such noun-from-verb pairs."
              ],
              script: [
                "高 is a pictograph of a tall building — a raised platform with a roof and a gate below; it is also the phonetic in 稿, 搞, 膏.",
                "興 in oracle bone script shows four hands (two above, two below) lifting a vessel together — a communal raising. The simplified 兴 keeps only a schematic top and the two lower hands, discarding the vessel."
              ],
              phonology: [
                "gāoxìng: first tone then fourth. Learners often mispronounce the second syllable as xīng; in 高兴 it is strictly <b>xìng</b>.",
                "As with all adjectives, a bare 高兴 sounds like a comparison, so the default positive statement takes 很: 我很高兴 (not <i>我高兴</i>)."
              ],
              cognates: [
                "兴趣 xìngqù (interest), 高兴 gāoxìng (glad) vs 兴奋 xīngfèn (excited), 兴旺 xīngwàng (thriving).",
                "Sino-Korean 흥 (흥미 heungmi = 興味, interest); Sino-Japanese コウ/キョウ kō/kyō (興味 kyōmi, 復興 fukkō)."
              ]
            }
          },
          {
            term: "认识",
            trad: "認識",
            roman: "rènshi",
            gloss: "to know (a person or place), to be acquainted with; to recognize",
            pos: "verb",
            example: { text: "我不认识她的朋友。", roman: "Wǒ bú rènshi tā de péngyou.", gloss: "I don't know her friend." },
            linguistics: {
              origin: "compound of two verbs",
              etymology: [
                "認 is <i>to acknowledge, to identify as</i>; 識 is <i>to know, to distinguish, to record</i>. Together they mean knowledge by acquaintance — recognizing a face, a character, a street — as opposed to 知道 zhīdào, which is knowing a fact.",
                "The distinction matters: 我认识他 = I know him (we have met); 我知道他 = I know of him. Textbooks introduce the pair together for exactly this reason."
              ],
              script: [
                "認 = 言 (speech) + 忍 rěn phonetic. 識 = 言 + 戠 zhí phonetic; the 言 radical in both marks knowledge expressed in words.",
                "Simplification hit both: 言 becomes 讠 (a cursive abbreviation), 忍 is replaced by the simple phonetic 人 rén, and 戠 by 只 zhǐ. So 認識 → 认识 — an unusually aggressive re-phoneticization, and a good example of the reform prioritizing stroke count over etymological transparency."
              ],
              phonology: [
                "rènshi: fourth tone plus a <b>neutral</b> second syllable. Pronouncing it rènshí sounds bookish or wrong in conversation.",
                "The same 识 read shí with second tone is full-toned in 知识 zhīshi (knowledge — also commonly neutral) and 识字 shízì (to be literate)."
              ],
              cognates: [
                "知识 zhīshi (knowledge), 常识 chángshí (common sense), 认为 rènwéi (to consider that), 认真 rènzhēn (conscientious).",
                "Sino-Korean 인식 insik (認識, cognition) — the same compound, still fully literary in Korean; Sino-Japanese 認識 ninshiki (recognition, cognition)."
              ]
            }
          },
          {
            term: "喝",
            roman: "hē",
            gloss: "to drink",
            pos: "verb",
            example: { text: "你想喝什么？", roman: "Nǐ xiǎng hē shénme?", gloss: "What would you like to drink?" },
            linguistics: {
              origin: "phono-semantic compound",
              etymology: [
                "The graph is 口 (mouth) + 曷 as phonetic. In Classical texts 喝 more often writes hè, <i>to shout, to bellow</i> (喝彩 hècǎi, to cheer); the reading hē <i>to drink</i> becomes the dominant vernacular word later, displacing Classical 飲 yǐn, which survives in modern Chinese only in bookish compounds like 饮料 yǐnliào (a beverage) and 饮食 yǐnshí (diet).",
                "So the everyday verb you learn here is the vernacular layer; 饮 is the literary layer of the same concept — a very common two-layer situation in Mandarin."
              ],
              script: [
                "曷 hé is a productive phonetic: 渴 kě (thirsty), 揭 jiē (to lift), 葛 gě (kudzu), 谒 yè (to call on). Notice how far the modern readings have drifted apart — proof that phonetic components record an <i>older</i> sound system, not today's.",
                "Traditional and simplified forms are identical."
              ],
              phonology: [
                "First tone, hē, when it means <i>drink</i>. Fourth tone, hè, when it means <i>to shout</i>. Same character, two words.",
                "Pleasingly, 喝 hē (drink) and 渴 kě (thirsty) are near-minimal partners that share the 曷 phonetic — a useful memory hook that is also historically real."
              ],
              cognates: [
                "喝水 hē shuǐ (drink water), 喝茶 hē chá (drink tea), 喝酒 hē jiǔ (drink alcohol), 好喝 hǎohē (tasty, of drinks — parallel to 好吃 hǎochī for food).",
                "The literary counterpart 饮 yǐn gives Sino-Korean 음 (음료 eumnyo = 飲料) and Sino-Japanese イン in (飲料 inryō)."
              ]
            }
          },
          {
            term: "茶",
            roman: "chá",
            gloss: "tea",
            pos: "noun",
            example: { text: "我请你喝中国茶。", roman: "Wǒ qǐng nǐ hē Zhōngguó chá.", gloss: "Let me treat you to some Chinese tea." },
            linguistics: {
              origin: "phono-semantic compound (derived by stroke reduction from 荼)",
              etymology: [
                "Before the Tang dynasty the plant was written 荼 tú, a general word for bitter herbs. During the Tang — the period of Lu Yu's 茶经 <i>Classic of Tea</i> — one horizontal stroke was dropped to create 茶 chá, giving the drink its own graph. This is a rare, historically documented case of a character being coined by deliberate stroke reduction.",
                "Middle Chinese is roughly <i>dra</i>, which is exactly what the world's tea words preserve."
              ],
              script: [
                "艹 (grass/plant radical) over a body that supplies the sound. The plant radical is semantically perfect: tea is a leaf.",
                "No traditional/simplified difference."
              ],
              phonology: [
                "Second tone, chá, with a retroflex initial ch-. Learners from languages without retroflexion often produce a palatal [tɕʰ], which makes 茶 chá sound like 掐 qiā.",
                "The world's two families of tea words track two Chinese pronunciations exactly: the Mandarin/Cantonese cha type travelled overland (Korean 차, Japanese ちゃ, Persian چای chāy, Turkish çay, Russian чай), while the Min Nan reading <i>te</i> travelled by sea with Dutch traders (Dutch thee, English tea, French thé, German Tee). Every tea word on earth is one of these two."
              ],
              cognates: [
                "喝茶 hē chá (drink tea), 茶馆 cháguǎn (teahouse), 红茶 hóngchá (black tea, literally <i>red tea</i>), 绿茶 lǜchá (green tea), 茶杯 chábēi (teacup)."
              ]
            }
          },
          {
            term: "水",
            roman: "shuǐ",
            gloss: "water",
            pos: "noun",
            example: { text: "请给我一杯水。", roman: "Qǐng gěi wǒ yì bēi shuǐ.", gloss: "Please give me a glass of water." },
            linguistics: {
              origin: "pictograph",
              etymology: [
                "One of the oldest and clearest pictographs: the oracle-bone form draws a central watercourse with droplets or eddies on either side. The word is reconstructed as Old Chinese *s.turʔ, Middle Chinese <i>sywijX</i>.",
                "水 is also one of the Five Phases (五行 wǔxíng: 金木水火土), so the character carries heavy cosmological and medical freight in classical texts."
              ],
              script: [
                "As a left-hand radical 水 is written 氵 (three drops) — the single most common semantic radical in the script, appearing in 河 hé (river), 海 hǎi (sea), 汤 tāng (soup), 酒 jiǔ (alcohol), 洗 xǐ (wash), 汉 hàn.",
                "Standing alone it keeps the full four-stroke form. Traditional and simplified are identical."
              ],
              phonology: [
                "Third tone, shuǐ, with retroflex sh- and the medial -u-. The full third tone (dipping) only appears in isolation or sentence-finally; before another third tone it rises (水果 shuǐguǒ is said <i>shuíguǒ</i>).",
                "The measure word is 杯 bēi (a cup/glass of) or 瓶 píng (a bottle of): 一杯水, 两瓶水."
              ],
              cognates: [
                "水果 shuǐguǒ (fruit), 开水 kāishuǐ (boiled water), 矿泉水 kuàngquánshuǐ (mineral water), 水平 shuǐpíng (level, standard).",
                "Sino-Korean 수 (수영 suyeong = 水泳, swimming); Sino-Japanese スイ sui (水曜日 suiyōbi, Wednesday) beside native みず mizu."
              ]
            }
          },
          {
            term: "学校",
            trad: "學校",
            roman: "xuéxiào",
            gloss: "school",
            pos: "noun",
            example: { text: "我们的学校在北京。", roman: "Wǒmen de xuéxiào zài Běijīng.", gloss: "Our school is in Beijing." },
            linguistics: {
              origin: "compound (verb/noun + noun)",
              etymology: [
                "學 is <i>to learn</i>; 校 in the reading xiào is <i>a school</i>. The compound is attested in Classical texts and is one of the Sinitic words that spread across the whole East Asian cultural sphere with the classical curriculum.",
                "校 originally meant <i>wooden fetters, a fenced enclosure</i>, from which the sense <i>drill ground, place of instruction</i> developed; the other reading, jiào, means <i>to collate, to proofread</i> (校对 jiàoduì) — the same graph, two words."
              ],
              script: [
                "學 in oracle bone script shows two hands (臼) manipulating 爻, crossing counting-rods or lattice-work, above a building element, with 子 (child) added underneath: adults teaching a child. The simplified 学 collapses hands and rods into three dots plus a cover, keeping only 子 intact.",
                "校 = 木 (wood) + 交 jiāo as phonetic — the wood radical remembers the original fetters/fence meaning."
              ],
              phonology: [
                "xuéxiào: second tone, fourth tone. The pinyin <i>xue</i> is spelled without the umlaut but pronounced with the rounded front vowel ü — after j, q, x, y the umlaut is always dropped in spelling.",
                "校 has two readings and the sense decides which one you use: xiào in school words (学校 xuéxiào, 校长 xiàozhǎng the principal) but jiào in editing words (校对 jiàoduì, to proofread)."
              ],
              cognates: [
                "学生 xuésheng (student), 学习 xuéxí (to study), 大学 dàxué (university), 同学 tóngxué (classmate), 学校 xuéxiào.",
                "Sino-Korean 학교 hakgyo — the same compound, still the ordinary word for school; Sino-Japanese 学校 gakkō. Chinese, Korean and Japanese all use this word unchanged."
              ]
            }
          },
          {
            term: "图书馆",
            trad: "圖書館",
            roman: "túshūguǎn",
            gloss: "library",
            pos: "noun",
            example: { text: "她在图书馆看书。", roman: "Tā zài túshūguǎn kàn shū.", gloss: "She is reading at the library." },
            linguistics: {
              origin: "compound (modern coinage from classical morphemes)",
              etymology: [
                "Literally <i>maps-and-books hall</i>. 圖書 in classical usage meant charts and writings — the contents of a scholar's collection — and 館 is a public hall or lodging. The three-morpheme compound is a modern institutional term, part of the late-19th/early-20th-century wave of vocabulary that Chinese and Japanese built together for Western institutions; Japanese 図書館 tosyokan and Chinese 图书馆 are the same coinage.",
                "館 originally meant a guesthouse — a place where travellers were fed and lodged — which is why the character has the <i>food</i> radical."
              ],
              script: [
                "圖 = 囗 (enclosure) around 啚, giving <i>a bounded area drawn out</i> = map, plan. Simplified 图 keeps the enclosure and abbreviates the inside to 冬.",
                "書 is 聿 (a hand gripping a writing brush) plus a phonetic element; simplified 书 is a cursive shorthand of the whole graph. 館 = 食 (food) + 官 guān phonetic; simplified 馆 uses the abbreviated food radical 饣."
              ],
              phonology: [
                "túshūguǎn: second, first, third. The 馆 syllable carries the only third tone, so it dips clearly at the end of the word.",
                "The -uan in guǎn is pronounced [wan] with a low central vowel — unlike juan/quan/xuan, where -uan is [ɥɛn]."
              ],
              cognates: [
                "The 馆 suffix names many public buildings: 大使馆 dàshǐguǎn (embassy), 博物馆 bówùguǎn (museum), 饭馆 fànguǎn (restaurant), 茶馆 cháguǎn (teahouse), 体育馆 tǐyùguǎn (gymnasium).",
                "书 recurs in 看书 kàn shū (read), 书店 shūdiàn (bookshop), 教科书 jiàokēshū (textbook)."
              ]
            }
          },
          {
            term: "宿舍",
            roman: "sùshè",
            gloss: "dormitory",
            pos: "noun",
            example: { text: "我的宿舍在学校里。", roman: "Wǒ de sùshè zài xuéxiào li.", gloss: "My dorm is inside the school." },
            linguistics: {
              origin: "compound (verb + noun)",
              etymology: [
                "宿 is <i>to stay overnight, to lodge</i>; 舍 in the reading shè is <i>a lodging, a hut</i>. The compound therefore means <i>overnight-lodging quarters</i> and is used for dormitories of all kinds — student, factory, military.",
                "宿 has a second reading, xiù, in the astronomical term 星宿 xīngxiù, the twenty-eight lunar lodges — the mansions where the moon <i>stays the night</i> as it crosses the sky. Same metaphor, older domain."
              ],
              script: [
                "宿 = 宀 (roof) over a person 亻 beside 百, which paleographers read as a mat or bedding: a person lying on a mat under a roof. The oracle-bone form makes the mat unmistakable.",
                "舍 is a pictograph of a simple building — roof, supports and a base. In simplified writing 舍 also absorbed 捨 shě (to give up, to part with), so the one graph now writes two words distinguished only by tone."
              ],
              phonology: [
                "sùshè: two fourth tones. Keep them both falling; flattening the first makes it sound like 苏 sū.",
                "Tone alone separates 舍 shè (lodging) from 舍 shě (to give up, as in 舍不得 shěbude, to be reluctant to part with)."
              ],
              cognates: [
                "宿 recurs in 住宿 zhùsù (accommodation), 宿舍 sùshè and 星宿 xīngxiù; 舍 recurs in 校舍 xiàoshè (school buildings) and 旅舍 lǚshè (an inn).",
                "Sino-Korean 숙사 suksa / 기숙사 gisuksa (寄宿舍) is the ordinary Korean word for dormitory; Sino-Japanese 宿舎 shukusha."
              ]
            }
          },
          {
            term: "等",
            roman: "děng",
            gloss: "to wait; class, rank; etc.",
            pos: "verb / noun",
            example: { text: "你等一下，我马上来。", roman: "Nǐ děng yíxià, wǒ mǎshàng lái.", gloss: "Wait a second, I'm coming right away." },
            linguistics: {
              origin: "phono-semantic compound",
              etymology: [
                "The Shuowen glosses 等 as bamboo slips arranged in order — hence the oldest attested meanings are <i>of equal length, ranked, a grade</i> (等级 děngjí, 平等 píngděng). The everyday meaning <i>to wait</i> is a later vernacular extension, and the semantic path is not fully agreed; the most common suggestion is <i>to be held level / to stay put</i>.",
                "The <i>etcetera</i> use (北京、上海等城市) also grows out of <i>and others of the same rank</i>."
              ],
              script: [
                "竹 (bamboo, written 𥫗 on top) + 寺 sì as phonetic. The bamboo radical points at the writing slips; 寺 is the same phonetic found in 时/時 shí, 持 chí, 特 tè, 诗/詩 shī.",
                "Traditional and simplified forms are the same."
              ],
              phonology: [
                "Third tone, děng. In 等一下 the following yí is second tone, so 等 keeps its full dipping contour.",
                "Two third tones in 等等 děngděng are realized as second + third: <i>déngděng</i>."
              ],
              cognates: [
                "等一下 děng yíxià (wait a moment), 等等 děngděng (and so on / wait a sec), 平等 píngděng (equality), 等于 děngyú (be equal to), 一等 yīděng (first class).",
                "Sino-Korean 등 (평등 pyeongdeung = 平等); Sino-Japanese トウ tō (平等 byōdō, 等級 tōkyū)."
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
            name: "在 as a verb of location",
            pattern: "Subject + 在 + Place    ·    negative: Subject + 不在 (+ Place)",
            explanation: [
              "In its first job, 在 is a complete verb meaning <i>to be located at</i>. It needs no other verb and, crucially, no 是. English says <i>my home <b>is</b> in Shanghai</i> with the verb <i>be</i>; Chinese uses 在 and nothing else. 我家在上海 is correct; 我家是在上海 is not what a beginner should be producing.",
              "The negative is simply 不在: 她不在 (she's not in / she's not here). Because 在 is a verb, the yes/no question is formed with 吗 (你在家吗?) or with the affirmative-negative pattern (你在不在家?). Notice also that a bare 不在 with no place is perfectly natural and means <i>not here / not around</i>, which is how you answer the phone or the door about an absent housemate.",
              "One structural warning that pays off later: the place must come <b>after</b> 在, and 在 phrases attach to the subject, not to the object. If you want to say where something exists rather than where a known thing is, Chinese switches to 有 or to a place-first sentence (宿舍里有一张床), which you will meet later. For now: known thing + 在 + place."
            ],
            examples: [
              { text: "我在宿舍。", roman: "Wǒ zài sùshè.", gloss: "I'm in the dorm." },
              { text: "老师不在学校。", roman: "Lǎoshī bú zài xuéxiào.", gloss: "The teacher isn't at school." },
              { text: "你的书在这儿。", roman: "Nǐ de shū zài zhèr.", gloss: "Your book is here." },
              { text: "他在不在家？", roman: "Tā zài bu zài jiā?", gloss: "Is he home or not?" }
            ]
          },
          {
            name: "在 as a coverb: where an action happens",
            pattern: "Subject + 在 + Place + Verb (+ Object)",
            explanation: [
              "In its second job, 在 introduces the place where an action is carried out — and here the word order is the opposite of English. Chinese states the location <b>before</b> the verb, because Chinese is consistently a language in which circumstances (when, where, with whom, how) are set up first and the action lands last.",
              "她在图书馆看书 = she, at the library, reads books. Producing 她看书在图书馆 is the single most common English-interference error in this chapter. Say the place, then the action.",
              "Negation and adverbs go before the whole 在-phrase: 我不在家吃饭 (I don't eat at home), 我今天在学校吃饭 (today I'm eating at school). This mirrors the time-word rule you will formalize in the next unit: <b>time before place before verb</b>. 我明天在图书馆等你 — tomorrow, at the library, wait for you."
            ],
            examples: [
              { text: "我在家看书。", roman: "Wǒ zài jiā kàn shū.", gloss: "I read at home." },
              { text: "他们在学校吃饭。", roman: "Tāmen zài xuéxiào chī fàn.", gloss: "They eat at school." },
              { text: "我不在宿舍学中文。", roman: "Wǒ bú zài sùshè xué Zhōngwén.", gloss: "I don't study Chinese in the dorm." },
              { text: "我明天在图书馆等你。", roman: "Wǒ míngtiān zài túshūguǎn děng nǐ.", gloss: "I'll wait for you at the library tomorrow." }
            ]
          },
          {
            name: "Asking where: 哪儿",
            pattern: "Subject + 在 + 哪儿？    ·    Subject + 在 + 哪儿 + Verb？",
            explanation: [
              "Chinese question words stay in place. To ask a question you do not move anything and you do not add 吗 — you simply substitute the question word for the piece of information you want. If the answer is 我家在上海, the question is 你家在哪儿? The word 哪儿 sits exactly where 上海 will sit.",
              "This is the general rule for 什么, 谁, 几, 多少, 哪儿, 怎么 and the rest, and it is why 吗 must be dropped: a sentence cannot carry two question markers. 你家在哪儿吗? is ungrammatical.",
              "哪儿 is the northern form; 哪里 nǎlǐ is equally correct and more common in the south and in Taiwan. Its answers are the matching place words 这儿 zhèr (here) and 那儿 nàr (there). Watch the tones carefully — 哪儿 nǎr (where, third tone) versus 那儿 nàr (there, fourth tone) differ only in tone, and getting this wrong turns a question into a statement."
            ],
            examples: [
              { text: "你在哪儿？", roman: "Nǐ zài nǎr?", gloss: "Where are you?" },
              { text: "图书馆在哪儿？", roman: "Túshūguǎn zài nǎr?", gloss: "Where is the library?" },
              { text: "你在哪儿学中文？", roman: "Nǐ zài nǎr xué Zhōngwén?", gloss: "Where do you study Chinese?" },
              { text: "他的朋友住在哪儿？", roman: "Tā de péngyou zhù zài nǎr?", gloss: "Where does his friend live?" }
            ]
          },
          {
            name: "The particle 呢 and the softener 一下",
            pattern: "N + 呢？ (what about N? / where is N?)    ·    Verb + 一下 (do briefly)",
            explanation: [
              "呢 attached to a bare noun produces an elliptical question whose meaning is filled in from context. After a full question has been asked, N + 呢? means <i>and what about N?</i> — 我很好，你呢? With no prior question, N + 呢? asks where the thing is — 张丽呢? means <i>where's Zhang Li?</i> This second use is extremely common at home and in the office, and it is a genuine shortcut for 张丽在哪儿?",
              "一下 goes after the verb and makes the action small and casual: 看一下 (take a quick look), 等一下 (hang on), 介绍一下 (do a quick introduction), 说一下 (say a word about it). Chinese requests are softened structurally like this far more often than by adding 请. A bare imperative 等! is barked; 等一下 is normal and polite.",
              "Two close relatives to keep separate. Verb reduplication does the same job — 看看 kànkan, 等等 děngdeng, 试试 shìshi — and is interchangeable with 一下 for most single-syllable verbs. 一点儿 yìdiǎnr, on the other hand, quantifies a <b>noun</b> or an adjective (喝一点儿茶, 好一点儿), not the action itself. Say 等一下, not 等一点儿."
            ],
            examples: [
              { text: "我是学生，你呢？", roman: "Wǒ shì xuésheng, nǐ ne?", gloss: "I'm a student — and you?" },
              { text: "我的书呢？", roman: "Wǒ de shū ne?", gloss: "Where's my book?" },
              { text: "请你等一下。", roman: "Qǐng nǐ děng yíxià.", gloss: "Please wait a moment." },
              { text: "我介绍一下，这是我朋友。", roman: "Wǒ jièshào yíxià, zhè shì wǒ péngyou.", gloss: "Let me introduce — this is my friend." },
              { text: "你看一下这本书。", roman: "Nǐ kàn yíxià zhè běn shū.", gloss: "Have a quick look at this book." }
            ]
          }
        ]
      },
      {
        type: "notes",
        title: "Culture note: being a guest in a Chinese home",
        body: [
          "The visit in this lesson follows a script that is worth knowing before you live it. The host will say 快进来 (come in quickly) and 请坐 almost in one breath, and will immediately offer something to drink. Tea is the default; in a student dorm it may be hot water from a thermos, which is entirely normal — 白开水 báikāishuǐ, plain boiled water, is a real beverage in China, and asking for ice water often produces a puzzled look.",
          "Guests are expected to decline the first offer at least once, and hosts are expected to ignore the refusal and pour anyway. This ritual of 客气 kèqi (politeness, standing on ceremony) is why you will hear 别客气 bié kèqi (don't stand on ceremony) so often. Refusing food or drink twice does not end the offer; it merely signals that you are well brought up. If you genuinely do not want something, 我真的不喝，谢谢 works better than a bare 不.",
          "If you are visiting a family rather than a dorm room, bring something: fruit, tea, pastries, or something from your home country. Avoid clocks (送钟 sòng zhōng is homophonous with 送终 sòng zhōng, attending a funeral), sharp objects, and — in most regions — umbrellas (伞 sǎn echoes 散 sàn, to part). The gift is usually set aside unopened rather than unwrapped in front of you; that is politeness, not indifference.",
          "Finally, the introduction. 我介绍一下 is the standard formula, and the person of higher status or the older person is introduced <b>to</b> first. The response 认识你很高兴 is slightly formal and perfect for a first meeting; among young people a simple 你好 with a smile does the same work. Shaking hands is common in cities and mildly formal; bowing is not a Chinese custom."
        ]
      },
      {
        type: "practice",
        title: "Practice",
        exercises: [
          {
            type: "mcq",
            prompt: "Choose the correct sentence for 'My home is in Shanghai.'",
            promptAudio: null,
            choices: ["我家在上海。", "我家是上海。", "我家上海在。", "我在家上海。"],
            answer: 0,
            explain: "在 is itself the verb 'to be located at', so no 是 is needed, and the place follows 在."
          },
          {
            type: "mcq",
            prompt: "她 ___ 图书馆看书。 — which word fills the blank?",
            promptAudio: "她在图书馆看书。",
            choices: ["在", "是", "有", "呢"],
            answer: 0,
            explain: "As a coverb, 在 + place comes before the verb: 她在图书馆看书 = she reads at the library."
          },
          {
            type: "mcq",
            prompt: "Your friend asks 你好吗? and you answer 我很好. How do you bounce the question back?",
            promptAudio: "你呢？",
            choices: ["你呢？", "你吗？", "你哪儿？", "你也吗？"],
            answer: 0,
            explain: "N + 呢 is the standard elliptical follow-up: 你呢? = and you? 吗 cannot attach to a bare pronoun this way."
          },
          {
            type: "mcq",
            prompt: "Which sentence is WRONG?",
            promptAudio: null,
            choices: ["你家在哪儿吗？", "你家在哪儿？", "你在哪儿学中文？", "图书馆在哪儿？"],
            answer: 0,
            explain: "A question word already makes the sentence a question, so 吗 must be dropped. 你家在哪儿吗? is ungrammatical."
          },
          {
            type: "typing",
            prompt: "Type the Chinese for 'where' (northern/Beijing form) — characters or pinyin.",
            answer: ["哪儿", "哪兒", "nǎr", "nar", "nǎ'ér", "naer"],
            hint: "Question word 哪 plus the retroflex suffix; one fused syllable."
          },
          {
            type: "typing",
            prompt: "Type 'Please wait a moment.' in Chinese (3 characters after 请, using the softener from this unit).",
            answer: ["请等一下", "请等一下。", "请你等一下", "请你等一下。", "qǐng děng yíxià", "qing deng yixia"],
            hint: "请 + 等 + the verbal measure meaning 'a bit'."
          },
          {
            type: "typing",
            prompt: "Type the pinyin (tone marks welcome, not required) for 图书馆.",
            answer: ["túshūguǎn", "tushuguan", "tú shū guǎn", "tu shu guan"],
            hint: "second - first - third tone; 'maps-books-hall'."
          },
          {
            type: "listening",
            prompt: "Listen and choose the meaning.",
            audioText: "她不在，她在图书馆。",
            choices: ["She's not in; she's at the library.", "She isn't at the library.", "She lives near the library.", "Is she at the library?"],
            answer: 0,
            explain: "不在 with no place = 'not here'. The second clause then supplies where she actually is."
          },
          {
            type: "listening",
            prompt: "Listen carefully to the tone and choose what you heard.",
            audioText: "你在哪儿？",
            choices: ["Where are you?", "You are there.", "Are you at home?", "Who are you?"],
            answer: 0,
            explain: "哪儿 nǎr (third tone) = where; 那儿 nàr (fourth tone) = there. Tone alone separates the question from the statement."
          },
          {
            type: "match",
            prompt: "Match each word with its meaning.",
            pairs: [
              { a: "宿舍", b: "dormitory" },
              { a: "认识", b: "to know (a person)" },
              { a: "高兴", b: "happy, pleased" },
              { a: "介绍", b: "to introduce" },
              { a: "进来", b: "to come in" },
              { a: "等", b: "to wait" }
            ]
          },
          {
            type: "order",
            prompt: "Arrange into a sentence: 'I read books at home.'",
            tokens: ["我", "在", "家", "看书"],
            answer: "我 在 家 看书"
          },
          {
            type: "order",
            prompt: "Arrange into a question: 'Where do you study Chinese?'",
            tokens: ["你", "在", "哪儿", "学", "中文"],
            answer: "你 在 哪儿 学 中文"
          }
        ]
      }
    ]
  });
})();
