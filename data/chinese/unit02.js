window.CURRICULUM = window.CURRICULUM || {};
(function () {
  const C = window.CURRICULUM;
  C.chinese = C.chinese || { units: [] };
  C.chinese.units.push({
    id: "zh-02",
    order: 2,
    title: "Family & Numbers",
    titleNative: "家人和数字",
    subtitle: "Talk about your family, count to 99, and use measure words correctly.",
    textbookBasis: [
      "Integrated Chinese Level 1 Part 1 (4th ed.), Lesson 2: Family",
      "HSK Standard Course 1, Lessons 4–6",
      "New Practical Chinese Reader 1, Lesson 6"
    ],
    overview: [
      "Family is the first topic in almost every Chinese textbook, and not only for sentimental reasons: it is the natural way to introduce the verb <b>有</b> yǒu <i>to have</i>, the number system, and the single most distinctive feature of Chinese noun phrases — the <b>measure word</b>. In Chinese you cannot count a noun directly. <i>Three students</i> is not 三学生 but 三<b>个</b>学生: a number must be followed by a classifier before the noun can appear.",
      "You will also meet the one irregular negation in the language. Every verb in Chinese is negated with 不 — except 有, which is negated with <b>没</b>. There is no such thing as 不有. Learn 有 and 没有 as a matched pair now and you will avoid an error that follows some learners for years.",
      "Finally, two ways to ask <i>how many</i>. <b>几</b> jǐ expects a small answer and demands a measure word; <b>多少</b> duōshao is open-ended and does not. Choosing between them is a small decision that sounds immediately native when you get it right."
    ],
    sections: [
      {
        type: "dialogue",
        title: "你家有几口人？— How many people are in your family?",
        context: "Wang Peng and Li You, now classmates, are chatting in the canteen. Asking about someone's family is ordinary small talk in Chinese and is not considered intrusive.",
        lines: [
          { speaker: "王朋", text: "李友，你家有几口人？", roman: "Lǐ Yǒu, nǐ jiā yǒu jǐ kǒu rén?", gloss: "Li You, how many people are there in your family?" },
          { speaker: "李友", text: "我家有五口人：爸爸、妈妈、一个哥哥、一个妹妹和我。", roman: "Wǒ jiā yǒu wǔ kǒu rén: bàba, māma, yí gè gēge, yí gè mèimei hé wǒ.", gloss: "There are five people in my family: dad, mum, an older brother, a younger sister and me." },
          { speaker: "王朋", text: "你有姐姐吗？", roman: "Nǐ yǒu jiějie ma?", gloss: "Do you have an older sister?" },
          { speaker: "李友", text: "我没有姐姐。你家呢？", roman: "Wǒ méiyǒu jiějie. Nǐ jiā ne?", gloss: "I don't have an older sister. What about your family?" },
          { speaker: "王朋", text: "我家有四口人：爸爸、妈妈、一个弟弟和我。", roman: "Wǒ jiā yǒu sì kǒu rén: bàba, māma, yí gè dìdi hé wǒ.", gloss: "There are four people in my family: dad, mum, a younger brother and me." },
          { speaker: "李友", text: "你爸爸做什么工作？", roman: "Nǐ bàba zuò shénme gōngzuò?", gloss: "What does your father do for work?" },
          { speaker: "王朋", text: "他是老师，我妈妈是医生。", roman: "Tā shì lǎoshī, wǒ māma shì yīshēng.", gloss: "He's a teacher, and my mother is a doctor." },
          { speaker: "李友", text: "你和你弟弟都是学生吗？", roman: "Nǐ hé nǐ dìdi dōu shì xuésheng ma?", gloss: "Are you and your younger brother both students?" },
          { speaker: "王朋", text: "对，我们两个都是学生。", roman: "Duì, wǒmen liǎng gè dōu shì xuésheng.", gloss: "That's right — the two of us are both students." }
        ]
      },
      {
        type: "vocab",
        title: "New words — 生词",
        items: [
          {
            term: "家",
            roman: "jiā",
            gloss: "family; home; house",
            pos: "noun",
            example: { text: "我家有五口人。", roman: "Wǒ jiā yǒu wǔ kǒu rén.", gloss: "There are five people in my family." },
            linguistics: {
              origin: "compound ideograph (会意)",
              etymology: [
                "家 is <b>宀</b>, a roof, over <b>豕</b> shǐ, a pig. The oracle-bone forms are unambiguous about the components; what they were meant to convey is less settled. The standard reading is that a domestic pig under the roof stands for a settled household, since pig-keeping marks a permanent dwelling rather than a camp. A competing account ties the pig to ancestral sacrifice performed in the family shrine.",
                "A phonetic explanation has also been proposed but does not survive scrutiny: Old Chinese 家 is reconstructed around *kˤra and 豕 around *l̥ajʔ, far too distant for 豕 to have been the sound component. Compound ideograph is the sounder analysis, with the exact motivation left open."
              ],
              script: [
                "Ten strokes, identical in simplified and traditional. The roof radical 宀 (called 宝盖头) is written first.",
                "The 宀 radical marks buildings and what happens inside them: 室 room, 家 home, 安 peace, 客 guest, 宿 to stay overnight, 字 character."
              ],
              phonology: [
                "First tone. Middle Chinese *kae. The Mandarin j- is a palatalisation of an older k-, the same change that turned 京 king into jīng.",
                "Takes erhua in some northern expressions: 家儿. In 大家 dàjiā <i>everyone</i> both syllables keep full tones."
              ],
              cognates: [
                "Sino-Korean 가 (家) as in 국가 <i>state</i> and 가족 <i>family</i>; Sino-Japanese か ka / け ke (家族 kazoku, 作家 sakka <i>author</i>) with native reading いえ ie; Sino-Vietnamese gia.",
                "As a suffix 家 means <i>specialist, -ist</i>: 作家 zuòjiā <i>writer</i>, 科学家 kēxuéjiā <i>scientist</i>, 音乐家 yīnyuèjiā <i>musician</i>. Note the syntax of 我家: no 的 is needed with close relations and one's home, so 我家, 我爸爸, 我朋友 are all normal."
              ]
            }
          },
          {
            term: "有",
            roman: "yǒu",
            gloss: "to have; there is/are",
            pos: "verb",
            example: { text: "我有一个弟弟。", roman: "Wǒ yǒu yí gè dìdi.", gloss: "I have one younger brother." },
            linguistics: {
              origin: "compound ideograph (会意)",
              etymology: [
                "有 is a <b>hand</b> (又, the ancient graph for a right hand) holding a piece of <b>meat</b>. The lower component looks like 月 <i>moon</i> in the modern printed form, but it is in fact 肉 <i>flesh</i>, flattened into a moon-shaped element during the clerical reform — exactly the merger described in the Foundation module. A hand grasping meat is possession made visible.",
                "Once you know this, a whole set of characters becomes readable: 有, 肉-based body words like 肝 liver and 脸 face, and the 又 hand in 友 <i>friend</i> (two hands), 取 <i>to take</i> (hand and ear) and 受 <i>to receive</i>."
              ],
              script: [
                "Six strokes, identical in simplified and traditional. Written with the two upper strokes first, then the enclosed flesh component.",
                "Do not confuse with 右 yòu <i>right</i>, which has 口 <i>mouth</i> underneath rather than the flesh element, or with 友 yǒu <i>friend</i>."
              ],
              phonology: [
                "Third tone. Half third tone before other tones (有一个 is low and flat on 有); full sandhi rise before another third tone: 有五个 → <i>yóu wǔ gè</i>.",
                "Middle Chinese *hjuwX. In the negative 没有 the 有 is frequently dropped entirely in speech: 没有姐姐 often becomes simply 没姐姐."
              ],
              cognates: [
                "Sino-Korean 유 (有) as in 유명 <i>famous</i>, literally <i>having a name</i>, and 소유 <i>possession</i>; Sino-Japanese ゆう yū / う u (有名 yūmei, again <i>famous</i>). The Korean and Japanese words for <i>famous</i> are the identical compound to Chinese 有名 yǒumíng.",
                "有 does double duty as an existential verb: 我家有五口人 is literally <i>my family has five people</i> but functions as <i>there are five people in my family</i>. Place-word plus 有 is the standard way to say <i>there is</i>: 这儿有一个学生."
              ]
            }
          },
          {
            term: "没有",
            trad: "沒有",
            roman: "méiyǒu",
            gloss: "to not have; there is not",
            pos: "verb phrase",
            example: { text: "我没有姐姐。", roman: "Wǒ méiyǒu jiějie.", gloss: "I don't have an older sister." },
            linguistics: {
              origin: "negator 没 + verb 有",
              etymology: [
                "<b>没</b> (traditional 沒) is 氵 <i>water</i> plus a component depicting a hand in a whirlpool. Its original and still-current meaning is <i>to sink, to submerge, to disappear</i> — 沉没 chénmò <i>to sink</i>, 淹没 yānmò <i>to be flooded over</i>, both with the reading <b>mò</b>.",
                "The negative use is a semantic extension: what has sunk out of sight is no longer there. By the late medieval vernacular 没 was the regular negator of 有, and it developed a second job as the negator of completed events (我没去 <i>I didn't go</i>). The two readings, mò for the literal sense and méi for the negator, are now fully separate words sharing a graph."
              ],
              script: [
                "Simplified 没 (7 strokes) versus traditional 沒 (7) — the difference is a minor component shape rather than a systematic simplification, and the two are easily mistaken for each other in print.",
                "The 氵 radical is misleading here for the negator sense; it belongs to the original <i>sink</i> meaning."
              ],
              phonology: [
                "méi is second tone; 有 keeps its third tone. In fast speech 有 is often dropped before a noun: 我没钱 rather than 我没有钱.",
                "As the negator 没 is always méi; as <i>to sink</i> it is always mò. Reading the wrong one is a common learner slip."
              ],
              cognates: [
                "Sino-Korean 몰 (沒) as in 몰락 <i>downfall</i> and 침몰 <i>sinking</i> — Korean borrowed only the literal meaning, since the negator is a Mandarin vernacular development. Sino-Japanese ぼつ botsu (沈没 chinbotsu <i>sinking</i>).",
                "The rule to memorise: <b>有 is negated with 没, never with 不</b>. 不有 does not exist. Every other verb takes 不 for general negation: 不是, 不去, 不喜欢. 没 with other verbs means specifically <i>did not</i> (past): 我不去 <i>I'm not going</i> versus 我没去 <i>I didn't go</i>."
              ]
            }
          },
          {
            term: "几",
            trad: "幾",
            roman: "jǐ",
            gloss: "how many (expecting a small number); several",
            pos: "question word / number",
            example: { text: "你家有几口人？", roman: "Nǐ jiā yǒu jǐ kǒu rén?", gloss: "How many people are in your family?" },
            linguistics: {
              origin: "merger simplification of two distinct characters",
              etymology: [
                "This is one of the clearest cases of a <b>merger</b> in the simplification programme, and it is worth understanding precisely. Two separate characters existed. <b>几</b> jī was a pictograph of a low table or stool, still seen in 茶几 chájī <i>tea table</i>. <b>幾</b> jǐ, an entirely different character built from doubled 幺 <i>silk threads</i> plus 戍 <i>guard</i>, meant <i>minute, subtle, nearly</i> and, by extension, <i>how many</i>.",
                "The 1956 reform assigned the simple graph 几 to do both jobs, on the grounds that the two words rarely collide in context. About a hundred simplifications work this way, and they are the main reason simplified-to-traditional conversion cannot be done mechanically: 几 maps to 几 or 幾 depending on meaning."
              ],
              script: [
                "Simplified <b>几</b> is 2 strokes; traditional <b>幾</b> is 12. The saving in writing effort is dramatic, which was the point.",
                "Other well-known mergers of the same kind: 后 (後 <i>after</i> and 后 <i>queen</i>), 发 (發 <i>to send</i> and 髮 <i>hair</i>), 面 (面 <i>face</i> and 麵 <i>noodles</i>), 干 (乾 <i>dry</i>, 幹 <i>to do</i> and 干 <i>to offend</i>)."
              ],
              phonology: [
                "Third tone as the question word, jǐ. The table word is first tone, jī.",
                "几 undergoes normal third-tone sandhi: 几口 jǐ kǒu → <i>jí kǒu</i>."
              ],
              cognates: [
                "Sino-Korean 기 (幾) as in 기하학 <i>geometry</i>; Sino-Japanese き ki (幾何学 kikagaku, the same word for geometry — a nineteenth-century coinage that travelled from Chinese to Japanese and back).",
                "几 is not only a question word. In statements it means <i>several, a few</i>: 几个人 <i>several people</i>, 十几个 <i>ten-something, a dozen or so</i>, 几十个 <i>dozens</i>."
              ]
            }
          },
          {
            term: "多少",
            roman: "duōshao",
            gloss: "how many, how much",
            pos: "question word",
            example: { text: "你们班有多少学生？", roman: "Nǐmen bān yǒu duōshao xuésheng?", gloss: "How many students are in your class?" },
            linguistics: {
              origin: "compound of two antonyms (多 many + 少 few)",
              etymology: [
                "<b>多</b> is written as two 夕 <i>evening</i> elements stacked, and the <i>Shuowen Jiezi</i> explains it as evenings piling up, hence <i>many</i>. Modern palaeographers frequently argue instead that the doubled element is 肉 <i>meat</i> — two slabs of meat being a more concrete image of abundance, and the moon/flesh confusion being pervasive. Both readings are in circulation; the meat analysis has the better graphic evidence.",
                "<b>少</b> is 小 <i>small</i> with an added stroke, an indicative modification meaning <i>few</i>. The pairing of opposites to form an abstract noun is a common Chinese pattern: 大小 <i>size</i>, 长短 <i>length</i>, 高低 <i>height</i>, 远近 <i>distance</i>, 多少 <i>quantity</i>."
              ],
              script: [
                "多 is 6 strokes, 少 is 4; both identical in simplified and traditional.",
                "少 has a second reading <b>shào</b> meaning <i>young</i>: 少年 shàonián <i>youth</i>, 少爷 shàoye <i>young master</i>."
              ],
              phonology: [
                "duō first tone; <b>shao</b> is <b>neutral</b> in this word, giving duōshao. Said with a full third tone (duōshǎo) it becomes a different expression meaning <i>more or less, somewhat</i>: 多少有点儿累 <i>somewhat tired</i>.",
                "That neutral-versus-full distinction is a genuine minimal pair and a good demonstration that the neutral tone carries meaning."
              ],
              cognates: [
                "Sino-Korean 다 (多) and 소 (少) — 다소 <i>dasso</i> means <i>more or less</i>, matching the full-tone Chinese reading rather than the question word. Sino-Japanese た ta and しょう shō (多少 tashō, again <i>more or less</i>).",
                "The choice against 几: <b>多少</b> is open-ended and needs no measure word (多少学生), while <b>几</b> expects a small number and requires one (几个学生). Prices always take 多少: 多少钱 duōshao qián <i>how much money</i>."
              ]
            }
          },
          {
            term: "个",
            trad: "個",
            roman: "gè",
            gloss: "general measure word (item, piece)",
            pos: "measure word",
            example: { text: "我有两个哥哥。", roman: "Wǒ yǒu liǎng gè gēge.", gloss: "I have two older brothers." },
            linguistics: {
              origin: "phono-semantic compound, from a bamboo counter",
              etymology: [
                "The full traditional character is <b>個</b>, and behind it stands <b>箇</b>: 竹 <i>bamboo</i> over the phonetic 固 gù. Its original job was to count <b>bamboo stalks</b>. From that concrete beginning it generalised into the all-purpose classifier for discrete items — the same path by which English <i>piece</i> generalised.",
                "The simplified graph 个 is not an invention. It is an old vulgar variant, generally explained as half of the 竹 radical (竹 being two 个 shapes side by side, each drawing a single bamboo leaf-cluster). So the modern simplified form is arguably closer to the origin than the traditional one."
              ],
              script: [
                "Simplified <b>个</b> is 3 strokes; traditional <b>個</b> is 10 and 箇 is 14. All three write the same word, and Taiwan uses 個.",
                "个 is written 丿, ㇏, then the vertical."
              ],
              phonology: [
                "Fourth tone in citation, gè, but in ordinary speech after a number it is usually <b>neutral</b>: 一个 yí ge, 两个 liǎng ge, 三个 sān ge.",
                "Crucially, the sandhi on 一 responds to the <b>underlying</b> fourth tone of 个, not to the surface neutral: 一个 is yí gè, with 一 rising. This is direct evidence that the neutral tone here is a reduction of a fourth tone rather than the absence of a tone."
              ],
              cognates: [
                "Sino-Korean 개 (個) is the ordinary Korean counter for objects — 사과 세 개 <i>three apples</i>, exactly the Chinese construction. Sino-Japanese こ ko, also the general counter — りんご三個 <i>three apples</i>. All three languages share the classifier and the pattern.",
                "个 is the default when you do not know the right measure word, and it is gradually replacing more specific ones in casual speech. But precise classifiers still matter: 一本书 a book, 一张纸 a sheet of paper, 一条鱼 a fish, 一只猫 a cat, 一件衣服 an item of clothing."
              ]
            }
          },
          {
            term: "口",
            roman: "kǒu",
            gloss: "mouth; measure word for family members",
            pos: "noun / measure word",
            example: { text: "我家有四口人。", roman: "Wǒ jiā yǒu sì kǒu rén.", gloss: "There are four people in my family." },
            linguistics: {
              origin: "pictograph (象形)",
              etymology: [
                "A drawing of an open mouth. The oracle-bone form is a rounded shape with a wavy lower line, and it squared off through the seal and clerical stages into today's three-stroke box.",
                "As a measure word for household members it counts <b>mouths to feed</b> — the same metaphor English uses in <i>mouths to feed</i> and that appears in census terminology worldwide. 人口 rénkǒu is the ordinary word for <i>population</i>."
              ],
              script: [
                "Three strokes, not four: the top and right side are a single turning stroke 横折. Left vertical, then the turn, then the closing bottom horizontal.",
                "Radical 30 and enormously productive. Two roles: genuinely oral actions (吃 eat, 喝 drink, 叫 call, 唱 sing, 说 speak) and, as noted in the Foundation module, marking a character as writing a bare sound (吗, 呢, 吧, 啊, 咖啡)."
              ],
              phonology: [
                "Third tone. Sandhi applies before another third tone: 口语 kǒuyǔ → <i>kóu yǔ</i>.",
                "Middle Chinese *khuwX. Note the aspiration — kǒu, not gǒu (which is 狗 <i>dog</i>)."
              ],
              cognates: [
                "Sino-Korean 구 (口) as in 인구 <i>population</i> and 출구 <i>exit</i>; Sino-Japanese こう kō / く ku with native reading くち kuchi — 人口 jinkō <i>population</i>, 出口 deguchi <i>exit</i>.",
                "Usage: 口 as a classifier is restricted to counting family members, and even there it is somewhat formal and rural in flavour. Many urban speakers simply say 我家有四个人. 口 is also the classifier for wells and for swords in older texts."
              ]
            }
          },
          {
            term: "爸爸",
            roman: "bàba",
            gloss: "dad, father",
            pos: "noun",
            example: { text: "我爸爸是老师。", roman: "Wǒ bàba shì lǎoshī.", gloss: "My father is a teacher." },
            linguistics: {
              origin: "phono-semantic compound (形声), reduplicated",
              etymology: [
                "<b>父</b> <i>father</i> supplies the meaning and <b>巴</b> bā supplies the sound. 父 itself is a pictograph of a <b>hand holding a stick or stone axe</b> — the tool-wielder, and by extension the authority of the household. It is radical 88.",
                "As with 妈, the word being written is one of the near-universal nursery forms. Labial stops (p, b) and the open vowel a are the earliest sounds infants control, so <i>papa</i>-type words for the father and <i>mama</i>-type words for the mother recur in unrelated language families across the world. This convergence is well documented and is emphatically not evidence of a shared origin between Chinese and European languages."
              ],
              script: [
                "Eight strokes, identical in simplified and traditional. 父 sits on top; 巴 underneath.",
                "The formal written word is 父亲 fùqīn, used on documents and in respectful reference, exactly parallel to 母亲 mǔqīn."
              ],
              phonology: [
                "First syllable a full fourth tone; second syllable <b>neutral</b>: bàba. The same reduplication-with-neutral pattern governs 妈妈, 哥哥, 姐姐, 弟弟 and 妹妹.",
                "Regional alternatives are common: 爹 diē in northern rural speech, 老爸 lǎobà casually, 老爷子 for one's elderly father."
              ],
              cognates: [
                "Sino-Korean 부 (父) as in 부모 <i>parents</i>; Sino-Japanese ふ fu with native ちち chichi and the familiar お父さん otōsan. Korean 아빠 <i>appa</i> and Japanese パパ papa are separately-arising nursery words, not Chinese loans.",
                "Kinship compounds built on 父: 父母 fùmǔ <i>parents</i>, 祖父 zǔfù <i>paternal grandfather</i>, 父亲节 Fùqīnjié <i>Father's Day</i>."
              ]
            }
          },
          {
            term: "哥哥",
            roman: "gēge",
            gloss: "older brother",
            pos: "noun",
            example: { text: "我有一个哥哥。", roman: "Wǒ yǒu yí gè gēge.", gloss: "I have one older brother." },
            linguistics: {
              origin: "loan / borrowed graph, of debated word origin",
              etymology: [
                "The character 哥 is two 可 kě elements stacked, and it was originally the character for <b>to sing</b> — the ancestor of modern 歌 gē <i>song</i>, which is 哥 with 欠 <i>to exhale</i> added. When 哥 was taken over for the kinship word, the singing sense was rewritten as 歌.",
                "The word itself is a puzzle. Classical Chinese used 兄 xiōng for elder brother; 哥 appears in this meaning only from the Tang dynasty, and many scholars link its rise to contact with the northern steppe peoples — Xianbei and Turkic <i>aqa</i>-type words for elder brother — during a period when the Tang ruling house had substantial northern ancestry. Curiously, Tang-era usage also has 哥哥 meaning <i>father</i> in imperial family correspondence. The steppe-contact account is plausible and widely repeated but not conclusively proven."
              ],
              script: [
                "Ten strokes, identical in simplified and traditional.",
                "兄 xiōng survives in formal and compound usage: 兄弟 xiōngdì <i>brothers</i>, 师兄 shīxiōng <i>senior fellow student</i>, 兄长 xiōngzhǎng."
              ],
              phonology: [
                "First tone plus neutral: gēge. Never gēgē.",
                "Beijing speech adds erhua to some related forms: 哥儿们 gērmen <i>buddies</i>."
              ],
              cognates: [
                "There is no useful Sino-Korean or Sino-Japanese reflex, because the word is a post-classical Chinese innovation. Korean uses 형 (兄, for a male's older brother) and 오빠 (native, for a female's older brother); Japanese uses 兄 ani / お兄さん onīsan.",
                "Note that Chinese, Korean and Japanese all require the speaker to specify <b>relative age</b> for siblings: there is simply no word meaning <i>brother</i> without an age specification. Chinese distinguishes 哥哥 from 弟弟; Korean additionally distinguishes by the speaker's own gender."
              ]
            }
          },
          {
            term: "姐姐",
            roman: "jiějie",
            gloss: "older sister",
            pos: "noun",
            example: { text: "我没有姐姐。", roman: "Wǒ méiyǒu jiějie.", gloss: "I don't have an older sister." },
            linguistics: {
              origin: "phono-semantic compound (形声)",
              etymology: [
                "女 <i>woman</i> plus the phonetic <b>且</b> qiě. The phonetic component is itself interesting: 且 is generally identified as a pictograph of an <b>ancestral tablet</b> set on a stand, and it is the original graph behind 祖 zǔ <i>ancestor</i>, which added the 礻 altar radical. An older and cruder identification of 且 as a phallic symbol also circulates in the literature; the ancestral-tablet reading is the mainstream one.",
                "Like 哥哥, 姐姐 is a post-classical word. Classical Chinese used 姊 zǐ for elder sister, which survives in the formal compound 姊妹 zǐmèi <i>sisters</i>."
              ],
              script: [
                "Eight strokes, identical in simplified and traditional. 女 compressed on the left with its base stroke flicked up, then 且.",
                "The same phonetic 且 appears in 组 zǔ <i>group</i>, 租 zū <i>to rent</i>, 助 zhù <i>to help</i> and 查 chá."
              ],
              phonology: [
                "jiě third tone plus neutral: jiějie. In careful citation the first syllable has the full dipping contour.",
                "The palatal j- again comes from an older ts- or k-: Middle Chinese 姐 *tsjaeX."
              ],
              cognates: [
                "Sino-Korean 저 (姐) is rare; Korean uses 언니 and 누나, chosen by the speaker's gender. Sino-Japanese し shi / native あね ane, お姉さん onēsan.",
                "Socially useful extension: 姐姐 and 小姐 are also used to address unrelated women. 小姐 xiǎojiě means <i>Miss</i> but on the mainland has acquired an unwanted connotation and is best avoided with strangers; 女士 nǚshì or 美女 měinǚ (casual) are safer. 大姐 dàjiě is a friendly way to address an older woman."
              ]
            }
          },
          {
            term: "弟弟",
            roman: "dìdi",
            gloss: "younger brother",
            pos: "noun",
            example: { text: "我弟弟也是学生。", roman: "Wǒ dìdi yě shì xuésheng.", gloss: "My younger brother is a student too." },
            linguistics: {
              origin: "pictograph / indicative (象形-指事), from 'sequence'",
              etymology: [
                "The early graph shows a <b>cord wound in regular turns around a stake or post</b>. The image is one of orderly succession, and the character's original meaning was <i>order, sequence</i>. A younger brother is the next one in the sequence, which is how the kinship sense arose.",
                "That original meaning survives in <b>第</b> dì, the ordinal prefix, which is simply 弟 with the bamboo radical added: 第一 dì-yī <i>first</i>, 第二 dì-èr <i>second</i>. Recognising that 弟 and 第 are the same root makes both easier to remember."
              ],
              script: [
                "Seven strokes, identical in simplified and traditional.",
                "Compare 兄弟 xiōngdì <i>brothers</i>, where 弟 keeps a full fourth tone, with 弟弟 dìdi, where the second syllable is neutral."
              ],
              phonology: [
                "Fourth tone plus neutral: dìdi. Two fourth tones (dìdì) would be a learner's over-pronunciation.",
                "Middle Chinese *dejX / *dejH."
              ],
              cognates: [
                "Sino-Korean 제 (弟) as in 형제 <i>brothers</i> and 제자 <i>disciple</i>; Sino-Japanese てい tei / だい dai with native おとうと otōto — 兄弟 kyōdai <i>siblings</i>, 弟子 deshi <i>disciple</i>.",
                "The 弟/第 link also shows up in Korean 제 (第) as the ordinal prefix — 제1과 <i>Lesson 1</i> — a construction borrowed wholesale from Chinese."
              ]
            }
          },
          {
            term: "妹妹",
            roman: "mèimei",
            gloss: "younger sister",
            pos: "noun",
            example: { text: "我有一个妹妹。", roman: "Wǒ yǒu yí gè mèimei.", gloss: "I have one younger sister." },
            linguistics: {
              origin: "phono-semantic compound (形声)",
              etymology: [
                "女 <i>woman</i> plus the phonetic <b>未</b> wèi. 未 is itself a pictograph of a tree whose upper branches are still growing — dense foliage not yet mature — and it came to mean <i>not yet</i>. Some traditional commentators read a semantic hint into the choice, the not-yet-grown sister, but the primary function of 未 here is phonetic (Middle Chinese 未 *mjɨjH, 妹 *mwojH — same labial nasal initial, same departing tone).",
                "妹 is attested in the oracle bones, making it considerably older than 姐."
              ],
              script: [
                "Eight strokes, identical in simplified and traditional.",
                "Distinguish 未 wèi <i>not yet</i> from 末 mò <i>end</i>: in 未 the upper horizontal is shorter, in 末 it is longer. This one-stroke-length difference is a real orthographic distinction, not a font artefact."
              ],
              phonology: [
                "Fourth tone plus neutral: mèimei.",
                "The full compound 姐妹 jiěmèi <i>sisters</i> keeps both tones full."
              ],
              cognates: [
                "Sino-Korean 매 (妹) as in 자매 <i>sisters</i>; Sino-Japanese まい mai with native いもうと imōto — 姉妹 shimai <i>sisters</i>.",
                "The four sibling terms form a neat two-by-two grid — 哥哥 / 弟弟 / 姐姐 / 妹妹 — crossing gender with relative age. There is no cover term for <i>sibling</i> in ordinary speech; the compounds 兄弟姐妹 or 兄弟姊妹 are used when you need one."
              ]
            }
          },
          {
            term: "两",
            trad: "兩",
            roman: "liǎng",
            gloss: "two (before a measure word); a pair",
            pos: "number",
            example: { text: "我们两个都是学生。", roman: "Wǒmen liǎng gè dōu shì xuésheng.", gloss: "The two of us are both students." },
            linguistics: {
              origin: "pictograph of a paired object (象形)",
              etymology: [
                "The traditional form 兩 is usually explained as depicting a <b>pair of matched objects under a common yoke or beam</b> — two horses harnessed to one chariot, or the two pans of a balance. The core idea is not the abstract number two but <i>a matched pair</i>, and that is precisely why 两 rather than 二 is used when counting things.",
                "兩 was also a unit of weight, the <b>tael</b>, historically about 37 grams and standardised in the modern metric system at 50 grams. Chinese recipes and market stalls still use it: 二两 èr liǎng of noodles is a standard portion. Note that in this unit-of-measure use the number before it is 二, not 两."
              ],
              script: [
                "Simplified <b>两</b> (7 strokes) versus traditional <b>兩</b> (8) — a modest structural tidying rather than a radical change.",
                "The related character 辆 (輛) liàng, the measure word for vehicles, is 车 <i>cart</i> plus 两 as phonetic — a memory of the two-horse team."
              ],
              phonology: [
                "Third tone. Undergoes sandhi before another third tone: 两点 liǎng diǎn → <i>liáng diǎn</i>.",
                "Half third tone in the common 两个 liǎng gè, since 个 is not a third tone."
              ],
              cognates: [
                "Sino-Korean 량/양 (兩) as in 양쪽 <i>both sides</i> and the old Korean currency unit 냥 <i>nyang</i>, which is the same tael; Sino-Japanese りょう ryō (両親 ryōshin <i>parents</i>, 両方 ryōhō <i>both</i>) — and the pre-war Japanese gold 両 is again the same word.",
                "The division of labour with 二: use <b>两</b> before a measure word (两个人, 两本书, 两点), and <b>二</b> for counting, digits, ordinals and the tens place (一二三, 十二, 第二, 二十, 二百 — though 两百 is also heard). In the hundreds and above both occur, with 两 more common in speech."
              ]
            }
          },
          {
            term: "十",
            roman: "shí",
            gloss: "ten",
            pos: "number",
            example: { text: "我们班有十个学生。", roman: "Wǒmen bān yǒu shí gè xuésheng.", gloss: "There are ten students in our class." },
            linguistics: {
              origin: "indicative (指事)",
              etymology: [
                "In the oracle-bone script, ten is written as a single <b>vertical stroke</b>. In the bronze inscriptions a swelling or dot appears at the midpoint of that stroke — plausibly the mark of a knot in a counting cord — and by the seal stage the dot had stretched sideways into a full horizontal, giving the cross shape we write today.",
                "This is a nice illustration of how a graph can change beyond recognition while the word behind it stays fixed. Nothing about a cross suggests <i>ten</i>; the history does."
              ],
              script: [
                "Two strokes: horizontal first, then vertical. Identical in simplified and traditional. The anti-fraud financial form is 拾.",
                "As a component 十 appears in 什 (as in 什么), 计 <i>to count</i>, 针 <i>needle</i>, 支, and in 早 and 章 where it is a residue of a different original element."
              ],
              phonology: [
                "Second tone, with retroflex sh- and the buzzing placeholder vowel: shí, not <i>shee</i>. Middle Chinese *dzyip, an entering-tone syllable ending in <b>-p</b>.",
                "The lost -p is preserved right across the region: Cantonese sap6, Korean 십 <i>sip</i>, Japanese じゅう jū from earlier <i>zip</i>, Vietnamese thập. Mandarin's open syllable is the innovation.",
                "Practise 十 shí against 四 sì and 是 shì — the retroflex-versus-dental and tone contrasts here are the most useful drill in the language."
              ],
              cognates: [
                "Sino-Korean 십 (十) — 십분 <i>ten minutes</i>, 십자가 <i>cross</i>; Sino-Japanese じゅう jū (十分 jūbun) with native とお tō; Sino-Vietnamese thập.",
                "Numerals combine transparently: 十一 eleven, 十二 twelve, 二十 twenty, 二十一 twenty-one, 九十九 ninety-nine. 十分 shífēn also means <i>very, extremely</i>, literally <i>ten parts out of ten</i>."
              ]
            }
          },
          {
            term: "和",
            roman: "hé",
            gloss: "and (joining nouns); with; harmony",
            pos: "conjunction / preposition",
            example: { text: "我和我弟弟都是学生。", roman: "Wǒ hé wǒ dìdi dōu shì xuésheng.", gloss: "My younger brother and I are both students." },
            linguistics: {
              origin: "phono-semantic compound (形声)",
              etymology: [
                "口 <i>mouth</i> plus the phonetic <b>禾</b> hé <i>standing grain</i>. The older and fuller way of writing the word was <b>龢</b>, with 龠 <i>panpipes</i> as the semantic element — the original meaning being <b>musical harmony</b>, several pipes sounding well together. 和 began as a simpler variant and eventually replaced it.",
                "From <i>harmony</i> came <i>to be in accord with</i>, then <i>together with</i>, and finally the plain conjunction <i>and</i>. The conjunction use is a comparatively late, colloquial development."
              ],
              script: [
                "Eight strokes, identical in simplified and traditional. 禾 on the left, 口 on the right.",
                "和 has an unusual number of readings: <b>hé</b> and/harmony; <b>hè</b> to join in a song or a poem (唱和); <b>huó</b> to knead (和面 to knead dough); <b>huò</b> to mix (和药); <b>hú</b> to win a hand at mahjong. Five readings for one graph is near the record."
              ],
              phonology: [
                "Second tone in the conjunction use. Northern colloquial speech very often pronounces the conjunction <b>hàn</b>, and this pronunciation is standard in Taiwan — a genuine and audible mainland/Taiwan difference.",
                "Middle Chinese *hwa."
              ],
              cognates: [
                "Sino-Korean 화 (和) as in 평화 <i>peace</i> and 조화 <i>harmony</i>; Sino-Japanese わ wa — and 和 is the classical name for <b>Japan itself</b>, hence 和食 washoku <i>Japanese food</i>, 和服 wafuku <i>kimono</i>, 大和 Yamato.",
                "Grammatical restriction that matters: <b>和 joins nouns, not clauses</b>. You cannot say <i>I ate and then I left</i> with 和. To link clauses, use 然后 ránhòu <i>then</i>, 而且 érqiě <i>moreover</i>, or simply place the clauses side by side. Also 跟 gēn and 与 yǔ serve as alternatives to 和, 跟 being more colloquial and northern, 与 more formal and written."
              ]
            }
          },
          {
            term: "都",
            roman: "dōu",
            gloss: "all, both; (dū) capital city",
            pos: "adverb",
            example: { text: "我们都是学生。", roman: "Wǒmen dōu shì xuésheng.", gloss: "We are all students." },
            linguistics: {
              origin: "phono-semantic compound (形声)",
              etymology: [
                "The phonetic is <b>者</b> zhě and the semantic component is <b>阝</b> on the right, which is the compressed form of 邑 <i>city, settlement</i>. The original word is <b>dū</b>, <i>a capital city</i>, still current in 首都 shǒudū <i>capital</i> and in the city name 成都 Chéngdū.",
                "The adverb dōu <i>all</i> grew out of the sense of a place where everything gathers together — a totality. The two readings have long since separated into distinct words, though the graph remembers the link.",
                "Note that the right-hand 阝 (city) and the left-hand 阝 (from 阜, <i>mound, hill</i>) are different components that look identical. Right: 都, 部, 那, 郑 — all about settlements. Left: 队, 阳, 院, 陈 — all about hills, walls and terrain."
              ],
              script: [
                "Ten strokes, identical in simplified and traditional in the mainland standard, though the printed shape of 者 differs slightly between mainland and Taiwanese fonts (an extra dot).",
                "者 as a phonetic also gives 猪 zhū <i>pig</i>, 著 zhù, 暑 shǔ <i>heat</i> and 署 shǔ."
              ],
              phonology: [
                "First tone as the adverb, dōu. First tone with a different vowel as the noun, dū.",
                "As an adverb it is often lightly stressed, but it must be pronounced — dropping it changes the meaning."
              ],
              cognates: [
                "Sino-Korean 도 (都) as in 수도 <i>capital</i> and 도시 <i>city</i>; Sino-Japanese と to / つ tsu — 東京都 Tōkyō-to, 都市 toshi <i>city</i>. Only the capital-city sense was borrowed; the adverb is Mandarin-internal.",
                "Word-order rule, and it is strict: <b>都 goes after the thing it quantifies and before the verb</b>. 我们都是学生 is correct; 都我们是学生 is not. Because 都 looks backward, the noun it covers must already have been mentioned — which is why 都 cannot begin a sentence. With negation, position changes meaning: 我们都不去 <i>none of us is going</i> versus 我们不都去 <i>not all of us are going</i>."
              ]
            }
          },
          {
            term: "做",
            roman: "zuò",
            gloss: "to do, to make",
            pos: "verb",
            example: { text: "你爸爸做什么工作？", roman: "Nǐ bàba zuò shénme gōngzuò?", gloss: "What work does your father do?" },
            linguistics: {
              origin: "phono-semantic compound (形声); a late split from 作",
              etymology: [
                "做 is 亻 <i>person</i> plus 故 gù, and it is a comparatively recent character, appearing in the vernacular literature of the Song and Yuan periods. It was created as a written variant of <b>作</b> zuò, which is far older: 作 is 亻 plus 乍, and 乍 is generally taken to depict a cutting or making action.",
                "So 做 and 作 write what was originally one word, later split by convention. The division is not fully consistent even now, which is why native speakers themselves sometimes hesitate over 做 or 作 in writing."
              ],
              script: [
                "Eleven strokes, identical in simplified and traditional.",
                "A workable rule of thumb: <b>做</b> takes concrete objects and everyday activities (做饭 cook, 做作业 do homework, 做生意 do business, 做朋友 be friends); <b>作</b> appears in fixed disyllabic compounds and abstract or literary uses (工作 work, 作业 homework, 作家 writer, 合作 cooperate)."
              ],
              phonology: [
                "Fourth tone, with the dental affricate z- (a ts sound, not English z). Homophonous with 坐 zuò <i>to sit</i> and 座 zuò <i>seat</i>, and near-homophonous with 左 zuǒ <i>left</i>.",
                "Middle Chinese *tsak, an entering-tone syllable with final -k."
              ],
              cognates: [
                "作 gives Sino-Korean 작 (作) — 작가 <i>writer</i>, 작품 <i>work of art</i> — and Sino-Japanese さく saku / さ sa — 作品 sakuhin, 作家 sakka. 做 itself, being a late vernacular graph, has no Korean or Japanese currency.",
                "The question 你做什么工作？ is the standard way to ask someone's occupation. Alternatives: 你是做什么的？ (casual) and 您在哪儿工作？ <i>Where do you work?</i>"
              ]
            }
          },
          {
            term: "工作",
            roman: "gōngzuò",
            gloss: "work, job; to work",
            pos: "noun / verb",
            example: { text: "我妈妈的工作很忙。", roman: "Wǒ māma de gōngzuò hěn máng.", gloss: "My mother's job is very busy." },
            linguistics: {
              origin: "compound: 工 labour, craft + 作 to make",
              etymology: [
                "<b>工</b> is a pictograph of a <b>tool</b> — most often identified as a carpenter's square or a plumb-line, an instrument of measured, skilled work. From that it means <i>craft, labour, worker</i>. <b>作</b> is 亻 plus 乍, <i>to make</i>.",
                "工 also serves as a phonetic in a coherent family: 江 jiāng <i>river</i>, 红 hóng <i>red</i>, 空 kōng <i>empty</i>, 功 gōng <i>merit</i>, 攻 gōng <i>to attack</i>. The sound links are clearer in older stages of the language than today."
              ],
              script: [
                "工 is 3 strokes, 作 is 7; both identical in simplified and traditional.",
                "工 is radical 48. Do not confuse it with 土 <i>earth</i> (three strokes but with the vertical crossing) or with 士 <i>scholar</i>."
              ],
              phonology: [
                "gōng first tone, zuò fourth. Both syllables keep full tones.",
                "工 is one of the few characters whose modern pronunciation is close to its Middle Chinese *kuwng."
              ],
              cognates: [
                "Sino-Korean 공작 (工作) exists but means <i>manoeuvring, operations</i>, not <i>a job</i>; Korean uses 일 (native) or 직업 <i>occupation</i>. Sino-Japanese 工作 <i>kōsaku</i> similarly means <i>handicraft</i> or <i>political manoeuvring</i>, and Japanese uses 仕事 <i>shigoto</i> for work.",
                "This divergence is instructive: the same two characters, borrowed into three languages, have drifted to three different meanings. Never assume a shared compound means the same thing across East Asian languages — the phenomenon is common enough to have its own name in Japanese-Chinese pedagogy, 同形異義語, <i>same-form different-meaning words</i>."
              ]
            }
          },
          {
            term: "医生",
            trad: "醫生",
            roman: "yīshēng",
            gloss: "doctor, physician",
            pos: "noun",
            example: { text: "我妈妈是医生。", roman: "Wǒ māma shì yīshēng.", gloss: "My mother is a doctor." },
            linguistics: {
              origin: "compound: 医 to heal + 生 one who",
              etymology: [
                "The traditional character <b>醫</b> is unusually revealing. Its upper left is 医, itself a picture of an <b>arrow in a quiver or case</b> — arrow wounds being an ancient physician's staple; its upper right is 殳, a hand wielding a weapon; and the base is <b>酉</b>, a <b>wine jar</b>, standing for medicinal alcohol used as a solvent and antiseptic. The whole is a compressed history of early Chinese medicine.",
                "The simplification kept only the upper-left component, 医, which was already an independent character. The saving in strokes is large — 18 down to 7 — but the etymology is completely erased, one of the sharper illustrations of what the reform cost."
              ],
              script: [
                "Simplified 医生 (7 + 5 strokes) versus traditional 醫生 (18 + 5).",
                "The 酉 component in the traditional form is worth knowing on its own: it is the wine-jar radical, present in 酒 <i>alcohol</i>, 酸 <i>sour</i>, 醋 <i>vinegar</i> and 醒 <i>to sober up</i>."
              ],
              phonology: [
                "yī first tone, shēng first tone. Note that 生 keeps its <b>full first tone</b> here, unlike in 学生 xuésheng and 先生 xiānsheng where it goes neutral. There is no rule predicting this; it is lexical and must be learnt word by word.",
                "The syllable yī is written with y as an orthographic device: the final is simply i standing alone."
              ],
              cognates: [
                "Sino-Korean 의 (醫) as in 의사 <i>doctor</i> (醫師) and 의학 <i>medicine</i>; Sino-Japanese い i — 医者 isha <i>doctor</i>, 医学 igaku <i>medicine</i>. All three languages build the profession word from 醫 plus a different second element: Chinese 生, Korean 師, Japanese 者.",
                "Related: 医院 yīyuàn <i>hospital</i>, 中医 zhōngyī <i>traditional Chinese medicine</i>, 看医生 kàn yīshēng <i>to see a doctor</i> — note that Chinese says <i>look at a doctor</i>, and the same verb 看 is used from the doctor's side too."
              ]
            }
          },
          {
            term: "对",
            trad: "對",
            roman: "duì",
            gloss: "correct, right; to face, toward",
            pos: "adjective / preposition",
            example: { text: "对，我们都是学生。", roman: "Duì, wǒmen dōu shì xuésheng.", gloss: "That's right, we are both students." },
            linguistics: {
              origin: "compound ideograph (会意), original components disputed",
              etymology: [
                "The traditional form <b>對</b> has 寸 — a hand with a mark at the wrist, indicating measured or careful action — on the right, and a taller component on the left whose identification is not agreed. Proposals include a lamp stand, a musical chime frame, and a tool held up for inspection. The shared thread in the readings is <b>facing and responding</b>: to hold something up before someone, hence <i>to face</i>, <i>to answer</i>, and finally <i>correct</i>.",
                "Given the disagreement, the honest position is that the semantic outcome is clear but the pictorial origin is not."
              ],
              script: [
                "Simplified <b>对</b> (5 strokes) versus traditional <b>對</b> (14). The left component is replaced wholesale by 又, a hand — a common simplification device also used in 汉 (漢), 难 (難), 鸡 (鷄) and 观 (觀).",
                "Note that 又 in these characters is a stroke-saving placeholder, not a meaningful component."
              ],
              phonology: [
                "Fourth tone. The spelling <b>ui</b> is a contraction of uei, and the tone mark sits on the second vowel by rule.",
                "As a one-word reply, 对 is said crisply with a full falling contour. The emphatic form 对对对 is extremely common in conversation."
              ],
              cognates: [
                "Sino-Korean 대 (對) as in 대화 <i>conversation</i> (facing-speech), 반대 <i>opposition</i>, 대답 <i>answer</i>; Sino-Japanese たい tai / つい tsui — 対話 taiwa, 反対 hantai, 一対 ittsui <i>a pair</i>.",
                "Two roles to keep apart. As an adjective: 对 <i>correct</i>, 不对 <i>wrong</i>, 你说得对 <i>you're right</i>. As a preposition: 对 <i>toward, with respect to</i> — 他对我很好 <i>he is very good to me</i>, 对不起 duìbuqǐ <i>sorry</i>, literally <i>unable to face (you)</i>."
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
            name: "有 yǒu — possession and existence, and its unique negation",
            pattern: "Subject + 有 + Object · negative: Subject + 没有 + Object",
            explanation: [
              "有 covers two English verbs. With a person as subject it means <b>to have</b>: 我有一个哥哥 <i>I have an older brother</i>. With a place or a group as subject it means <b>there is / there are</b>: 我家有五口人 <i>There are five people in my family</i>, 这儿有一个学生 <i>There is a student here</i>. Chinese sees these as one relationship, and there is no separate existential construction to learn.",
              "The negation is the one true irregularity in the Chinese verb system. Every other verb takes 不; 有 takes <b>没</b>. 我没有姐姐 <i>I don't have an older sister</i>. <b>不有 does not exist</b> in any register of the language. In speech the 有 is often dropped after 没, giving 我没姐姐, 我没钱 — but 没 itself can never be dropped.",
              "In questions, either strategy works: 你有姐姐吗？ with the particle, or the A-not-A form 你有没有姐姐？ The A-not-A version of 有 is 有没有, not 有不有. Answers echo the verb: 有 or 没有.",
              "One more use to note in passing: 有 also marks comparison of degree in patterns like 他有我这么高 <i>he is as tall as me</i>, and it appears in the fixed 有意思 yǒu yìsi <i>interesting</i>, literally <i>has meaning</i>."
            ],
            examples: [
              { text: "我有两个妹妹。", roman: "Wǒ yǒu liǎng gè mèimei.", gloss: "I have two younger sisters." },
              { text: "他没有哥哥。", roman: "Tā méiyǒu gēge.", gloss: "He doesn't have an older brother." },
              { text: "你家有几口人？", roman: "Nǐ jiā yǒu jǐ kǒu rén?", gloss: "How many people are in your family?" },
              { text: "你有没有弟弟？", roman: "Nǐ yǒu méiyǒu dìdi?", gloss: "Do you have a younger brother? (A-not-A)" },
              { text: "我们班有二十个学生。", roman: "Wǒmen bān yǒu èrshí gè xuésheng.", gloss: "There are twenty students in our class." }
            ]
          },
          {
            name: "Measure words — 量词: Number + MW + Noun",
            pattern: "Number/这/那/几 + Measure Word + Noun · 一个人 · 四口人 · 两本书",
            explanation: [
              "Chinese nouns cannot be counted directly. Between a number and a noun there must be a <b>measure word</b> (classifier): 三<b>个</b>学生, not 三学生. English does this only with mass nouns — <i>three sheets of paper</i>, <i>two loaves of bread</i> — but Chinese extends it to everything countable. The same requirement applies after the demonstratives 这 <i>this</i> and 那 <i>that</i> (这个人 <i>this person</i>) and after 几 (几个人).",
              "<b>个</b> gè is the general-purpose classifier and is the safe default: 一个人, 一个学生, 一个问题. Beyond it, classifiers are chosen by the shape or nature of the thing: <b>本</b> běn for bound volumes (一本书), <b>张</b> zhāng for flat sheeted things (一张纸, 一张桌子), <b>条</b> tiáo for long flexible things (一条鱼, 一条路), <b>只</b> zhī for many animals (一只猫), <b>件</b> jiàn for garments and matters (一件衣服, 一件事), <b>杯</b> bēi for cups of liquid (一杯水).",
              "For family members the specialist classifier is <b>口</b> kǒu, literally <i>mouths</i>: 我家有四口人. It is used when counting the household as a unit and is not used for individuals — you say 一个哥哥, never 一口哥哥. Many urban speakers now simply use 个 throughout.",
              "Finally the number two. Before a measure word, <i>two</i> is <b>两</b> liǎng, not 二: 两个人, 两本书, 两口人. 二 is used in counting sequences, in digits, in ordinals and in the tens position: 一二三, 十二, 第二, 二十. Getting 两个 right instead of 二个 is one of the fastest ways to sound less like a beginner."
            ],
            examples: [
              { text: "我有一个妹妹。", roman: "Wǒ yǒu yí gè mèimei.", gloss: "I have one younger sister." },
              { text: "我家有六口人。", roman: "Wǒ jiā yǒu liù kǒu rén.", gloss: "There are six people in my family." },
              { text: "他有两个哥哥。", roman: "Tā yǒu liǎng gè gēge.", gloss: "He has two older brothers. (两, not 二)" },
              { text: "这个学生是我弟弟。", roman: "Zhège xuésheng shì wǒ dìdi.", gloss: "This student is my younger brother." },
              { text: "我有三本书。", roman: "Wǒ yǒu sān běn shū.", gloss: "I have three books. (本 for volumes)" }
            ]
          },
          {
            name: "Numbers 1–99",
            pattern: "零一二三四五六七八九十 · 十X = 10+X · X十 = X×10 · X十Y",
            explanation: [
              "The base numerals are 零 líng 0, 一 yī 1, 二 èr 2, 三 sān 3, 四 sì 4, 五 wǔ 5, 六 liù 6, 七 qī 7, 八 bā 8, 九 jiǔ 9, 十 shí 10. Learn these ten and the rest of the system to 99 follows with no exceptions whatsoever — no <i>eleven</i>, no <i>twelve</i>, no <i>twenty</i> to memorise separately.",
              "Eleven to nineteen are 十 plus the digit: 十一 11, 十二 12, 十五 15, 十九 19. The multiples of ten are the digit plus 十: 二十 20, 三十 30, 九十 90. Anything else is digit-ten-digit: 二十一 21, 三十五 35, 六十八 68, 九十九 99. This perfectly regular structure is a well-documented advantage in early arithmetic learning for children raised on Chinese, Japanese or Korean numerals.",
              "A few pronunciation notes. 一 changes tone constantly by the sandhi rules from the Foundation module (一个 yí gè, 一天 yì tiān, but 十一 shíyī with first tone). 二 is èr, with a retroflex-coloured vowel and no consonant. 七 qī and 八 bā are sometimes heard with tone changes before a fourth tone in older speech (qí, bá), but standard modern Mandarin keeps them level.",
              "Numbers are read digit by digit for phone numbers, room numbers and years, where 一 is often pronounced <b>yāo</b> to avoid confusion with 七: 幺三八 for 138. Years are read as strings of digits too: 二零二五年, not 两千零二十五年."
            ],
            examples: [
              { text: "十一、十五、十九", roman: "shíyī, shíwǔ, shíjiǔ", gloss: "11, 15, 19" },
              { text: "二十、三十、九十", roman: "èrshí, sānshí, jiǔshí", gloss: "20, 30, 90" },
              { text: "四十六、七十八、九十九", roman: "sìshíliù, qīshíbā, jiǔshíjiǔ", gloss: "46, 78, 99" },
              { text: "我家有三口人。", roman: "Wǒ jiā yǒu sān kǒu rén.", gloss: "There are three people in my family." },
              { text: "我们班有二十五个学生。", roman: "Wǒmen bān yǒu èrshíwǔ gè xuésheng.", gloss: "Our class has twenty-five students." }
            ]
          },
          {
            name: "几 jǐ versus 多少 duōshao, and the adverb 都 dōu",
            pattern: "几 + MW + N (small number expected) · 多少 (+ MW) + N (any number) · Subject + 都 + Verb",
            explanation: [
              "Both ask <i>how many</i>, but they are not interchangeable. <b>几</b> presupposes a small answer, roughly under ten, and it <b>requires a measure word</b>: 几口人, 几个学生, 几本书. It is the right choice for family members, siblings, days of the week and hours. <b>多少</b> is neutral about size, is used for large or unknown quantities, and the measure word is <b>optional and usually dropped</b>: 多少学生, 多少钱, 多少人.",
              "As a practical guide: ask 你家有几口人？ (a family is small) but 你们学校有多少学生？ (a school is not). Money always takes 多少: 多少钱？ is the universal <i>how much?</i> Using 几 for a price would imply you expect the answer to be under ten yuan, which is occasionally a joke and rarely intended.",
              "Word order for question words is a general and very useful point: Chinese does <b>not</b> move them to the front. The question word simply occupies the slot where the answer will go. 你有几个哥哥？ has 几个 exactly where 两个 would appear in the answer 我有两个哥哥. Nothing inverts, nothing is added — which is why Chinese questions are structurally simpler than English ones.",
              "<b>都</b> means <i>all, both</i> and behaves like 也: it is an adverb, so it stands after the subject and immediately before the verb. 我们都是学生 <i>We are all students</i>. Because 都 refers backward to something already named, it can never begin a sentence. When both 也 and 都 appear, the order is 也都: 他们也都是学生. With negation, position is meaning: 我们都不去 <i>none of us is going</i>; 我们不都去 <i>not all of us are going</i>."
            ],
            examples: [
              { text: "你有几个姐姐？", roman: "Nǐ yǒu jǐ gè jiějie?", gloss: "How many older sisters do you have? (small number expected)" },
              { text: "你们学校有多少学生？", roman: "Nǐmen xuéxiào yǒu duōshao xuésheng?", gloss: "How many students are at your school? (no measure word)" },
              { text: "这个多少钱？", roman: "Zhège duōshao qián?", gloss: "How much is this?" },
              { text: "我们都是学生。", roman: "Wǒmen dōu shì xuésheng.", gloss: "We are all students." },
              { text: "他们也都有工作。", roman: "Tāmen yě dōu yǒu gōngzuò.", gloss: "They all have jobs too. (也 before 都)" }
            ]
          }
        ]
      },
      {
        type: "notes",
        title: "Culture note: the Chinese family and its vocabulary of precision",
        body: [
          "Chinese kinship terminology is among the most finely differentiated in the world, and it is not optional politeness — it is simply how the words work. There is no general word for <i>brother</i>, <i>sister</i>, <i>uncle</i>, <i>aunt</i>, <i>cousin</i> or <i>grandparent</i> that leaves the details unspecified. Every term encodes <b>relative age</b>, and above the sibling level, <b>which side of the family</b> the person is on.",
          "Grandparents divide by line: your father's parents are 爷爷 yéye and 奶奶 nǎinai, while your mother's parents are 外公 wàigōng and 外婆 wàipó (or 姥爷 lǎoye and 姥姥 lǎolao in the north). The 外 in those words means <i>outside</i>, a straightforward reflection of the patrilineal assumption that a married daughter joins another family. Cousins divide the same way, with 堂 táng for paternal cousins bearing the same surname and 表 biǎo for maternal ones, then subdivide again by gender and relative age: 堂哥, 堂弟, 表姐, 表妹 and so on give eight distinct words where English has one.",
          "This precision reflects a lineage system in which one's exact position determined obligations, inheritance and forms of address. The organising value behind it is 孝 xiào, usually translated <i>filial piety</i> — the duty of care and deference owed to parents and ancestors, central to Confucian ethics for two and a half millennia and still a live social expectation. It is codified in modern law: China's Elderly Rights Law, amended in 2013, formally requires adult children to visit their parents.",
          "Family size changed dramatically within living memory. The <b>one-child policy</b> ran from 1979 to 2015, and it means that a great many Chinese people now in their twenties, thirties and forties have no siblings at all, and that whole branches of the kinship vocabulary — 堂弟, 表姐 — have no referents for them. The policy was replaced by a two-child policy in 2016 and a three-child policy in 2021. If you ask a Chinese person of that generation 你有兄弟姐妹吗？ the answer is often 没有，我是独生子女 <i>No, I'm an only child</i>.",
          "One last practical point: asking about family, age, marital status and sometimes salary is ordinary, friendly small talk in Chinese, not intrusion. A question like 你结婚了吗？ <i>Are you married?</i> from someone you have just met is an expression of interest, not a probe. Reciprocating with your own information is the expected response."
        ]
      },
      {
        type: "practice",
        title: "Practice",
        exercises: [
          {
            type: "mcq",
            prompt: "How do you negate 我有一个哥哥?",
            promptAudio: "我没有哥哥。",
            choices: ["我不有哥哥。", "我没有哥哥。", "我有不哥哥。", "我不是有哥哥。"],
            answer: 1,
            explain: "有 is the one verb in Chinese that is never negated with 不. It takes 没 instead. 不有 does not exist in any register."
          },
          {
            type: "mcq",
            prompt: "Choose the correct way to say 'two older brothers'.",
            promptAudio: "两个哥哥",
            choices: ["二哥哥", "二个哥哥", "两个哥哥", "两哥哥"],
            answer: 2,
            explain: "Before a measure word, 'two' is 两, not 二 — and the measure word 个 cannot be omitted."
          },
          {
            type: "mcq",
            prompt: "Which question would you use to ask how many students are at a large university?",
            promptAudio: null,
            choices: [
              "你们学校有几学生？",
              "你们学校有几个学生？",
              "你们学校有多少学生？",
              "你们学校有多少个几学生？"
            ],
            answer: 2,
            explain: "几 expects a small answer and requires a measure word; 多少 is open-ended and needs no measure word. A university has many students, so 多少 is right."
          },
          {
            type: "typing",
            prompt: "Type the pinyin (tone marks optional) for the number 99.",
            answer: ["jiǔshíjiǔ", "jiushijiu", "jiǔ shí jiǔ", "jiu shi jiu", "九十九"],
            hint: "digit + ten + digit, with no irregularities."
          },
          {
            type: "typing",
            prompt: "Complete the sentence: 我家有五 ___ 人。 (the measure word for family members)",
            answer: ["口", "kǒu", "kou"],
            hint: "Literally 'mouths' — the same metaphor as English 'mouths to feed'."
          },
          {
            type: "typing",
            prompt: "Type 'I have one younger sister' in Chinese characters.",
            answer: ["我有一个妹妹", "我有一个妹妹。", "我有一個妹妹", "我有一個妹妹。"],
            hint: "Subject + 有 + number + measure word + noun."
          },
          {
            type: "listening",
            prompt: "Listen. How many people are in the speaker's family?",
            audioText: "我家有五口人。",
            choices: ["Four", "Five", "Six", "Nine"],
            answer: 1,
            explain: "五 wǔ is five. Listen for the third tone, said low and flat before the third-tone 口 — which itself rises by sandhi."
          },
          {
            type: "listening",
            prompt: "Listen. Which relative is being talked about?",
            audioText: "我有一个弟弟。",
            choices: ["Older brother", "Younger brother", "Older sister", "Younger sister"],
            answer: 1,
            explain: "弟弟 dìdi is a younger brother — fourth tone plus a neutral syllable. Compare 哥哥 gēge, first tone plus neutral, for an older brother."
          },
          {
            type: "match",
            prompt: "Match each family term with its English meaning.",
            pairs: [
              { a: "哥哥", b: "older brother" },
              { a: "弟弟", b: "younger brother" },
              { a: "姐姐", b: "older sister" },
              { a: "妹妹", b: "younger sister" },
              { a: "爸爸", b: "father" },
              { a: "医生", b: "doctor" }
            ]
          },
          {
            type: "match",
            prompt: "Match each measure word with what it counts.",
            pairs: [
              { a: "个", b: "general items and people" },
              { a: "口", b: "members of a household" },
              { a: "本", b: "books and bound volumes" },
              { a: "张", b: "flat things: paper, tables" },
              { a: "条", b: "long flexible things: fish, roads" }
            ]
          },
          {
            type: "order",
            prompt: "Arrange into a sentence: 'My younger brother and I are both students.'",
            tokens: ["学生", "都是", "我和我弟弟"],
            answer: "我和我弟弟 都是 学生"
          },
          {
            type: "order",
            prompt: "Arrange into a question: 'How many older sisters do you have?'",
            tokens: ["几个", "你", "姐姐", "有"],
            answer: "你 有 几个 姐姐"
          }
        ]
      }
    ]
  });
})();
