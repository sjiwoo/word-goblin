window.CURRICULUM = window.CURRICULUM || {};
(function () {
  const C = window.CURRICULUM;
  C.chinese = C.chinese || { units: [] };
  C.chinese.units.push({
    id: "zh-01",
    order: 1,
    title: "Greetings & Introductions",
    titleNative: "问好和介绍",
    subtitle: "Say hello, give your name, state who you are, and ask a yes/no question.",
    textbookBasis: [
      "Integrated Chinese Level 1 Part 1 (4th ed.), Lesson 1: Greetings",
      "HSK Standard Course 1, Lessons 1–3",
      "New Practical Chinese Reader 1, Lessons 1–3"
    ],
    overview: [
      "This unit gives you the four sentence machines that carry an entire first conversation in Chinese. The verb <b>是</b> shì equates two nouns (<i>I am a student</i>). The pair <b>姓</b> xìng and <b>叫</b> jiào handle names, with a division of labour English does not have: 姓 takes only a surname, 叫 takes a full name or a given name. The particle <b>吗</b> ma turns any statement into a yes/no question without changing word order or intonation. And the particle <b>呢</b> ne bounces a question back — <i>and you?</i>",
      "Two features of Chinese grammar make this easier than it looks. There is <b>no verb conjugation</b>: 是 is 是 for I, you, he, we and they alike. And there is <b>no indefinite article</b>: 我是学生 is simply <i>I am student</i>. What you must get right instead is <b>word order</b>, which does a great deal of the work that English does with endings and function words.",
      "One thing to unlearn immediately: <b>你好吗？</b> is not the everyday Chinese greeting, despite what phrasebooks suggest. It is a genuine enquiry after someone's wellbeing, appropriate when you have not seen a person in a while. The ordinary greeting is a plain 你好, or, among people who know each other, a situational remark such as 吃了吗？ <i>Have you eaten?</i>"
    ],
    sections: [
      {
        type: "dialogue",
        title: "第一次见面 — Meeting for the first time",
        context: "Li You and Wang Peng meet outside a university classroom on the first day of term. Neither has met the other before, so both use polite forms.",
        lines: [
          { speaker: "李友", text: "你好！", roman: "Nǐ hǎo!", gloss: "Hello!" },
          { speaker: "王朋", text: "你好！请问，你贵姓？", roman: "Nǐ hǎo! Qǐngwèn, nǐ guìxìng?", gloss: "Hello! May I ask, what is your surname?" },
          { speaker: "李友", text: "我姓李，叫李友。你呢？", roman: "Wǒ xìng Lǐ, jiào Lǐ Yǒu. Nǐ ne?", gloss: "My surname is Li; I'm called Li You. And you?" },
          { speaker: "王朋", text: "我姓王，我叫王朋。", roman: "Wǒ xìng Wáng, wǒ jiào Wáng Péng.", gloss: "My surname is Wang; I'm called Wang Peng." },
          { speaker: "李友", text: "王先生，你是老师吗？", roman: "Wáng xiānsheng, nǐ shì lǎoshī ma?", gloss: "Mr Wang, are you a teacher?" },
          { speaker: "王朋", text: "不是，我不是老师，我是学生。你也是学生吗？", roman: "Bú shì, wǒ bú shì lǎoshī, wǒ shì xuésheng. Nǐ yě shì xuésheng ma?", gloss: "No — I'm not a teacher, I'm a student. Are you a student too?" },
          { speaker: "李友", text: "我也是学生。认识你很高兴。", roman: "Wǒ yě shì xuésheng. Rènshi nǐ hěn gāoxìng.", gloss: "I'm a student too. Pleased to meet you." },
          { speaker: "王朋", text: "认识你我也很高兴。谢谢你！", roman: "Rènshi nǐ wǒ yě hěn gāoxìng. Xièxie nǐ!", gloss: "Pleased to meet you too. Thank you!" },
          { speaker: "李友", text: "再见！", roman: "Zàijiàn!", gloss: "Goodbye!" },
          { speaker: "王朋", text: "再见！", roman: "Zàijiàn!", gloss: "Goodbye!" }
        ]
      },
      {
        type: "vocab",
        title: "New words — 生词",
        items: [
          {
            term: "你",
            roman: "nǐ",
            gloss: "you (singular)",
            pos: "pronoun",
            example: { text: "你是学生吗？", roman: "Nǐ shì xuésheng ma?", gloss: "Are you a student?" },
            linguistics: {
              origin: "phono-semantic compound (形声)",
              etymology: [
                "你 is built from the person radical <b>亻</b> and <b>尔</b>, and it is a comparatively young character. The classical second-person pronouns were 汝 rǔ, 爾 ěr, 若 ruò and 而 ér; 你 appears as a vernacular variant of 爾 in Tang-dynasty texts (seventh to ninth centuries) and only becomes the standard written form as the colloquial language gained literary respectability.",
                "The 亻 component is a semantic clarifier added to mark the graph as referring to a person, a common way of creating a distinct character for a word that already had a shared spelling."
              ],
              script: [
                "Seven strokes. Identical in simplified and traditional writing — 你 was never simplified, because the component 尔 was already the ordinary shape used inside it, while the free-standing character 爾 simplified separately to 尔.",
                "Taiwanese usage sometimes writes <b>妳</b> with the 女 radical for a female addressee, on the model of 她. This is a twentieth-century innovation and is not used in the mainland standard."
              ],
              phonology: [
                "Third tone. Before another third tone it undergoes sandhi and is said as a second tone: 你好 is pronounced <i>ní hǎo</i>, 你有 as <i>ní yǒu</i>.",
                "Middle Chinese *nejX / *nyiX. Plural is formed regularly with 们: 你们 nǐmen, with 们 in the neutral tone."
              ],
              cognates: [
                "The polite form <b>您</b> nín is derived from it (see its own entry). The plural 你们 nǐmen and the possessive 你的 nǐ de use it unchanged — Chinese pronouns do not inflect for case.",
                "Because 你 is a late vernacular form, it has no Sino-Korean or Sino-Japanese reading in everyday use; those languages borrowed classical vocabulary, and their pronoun systems are entirely native."
              ]
            }
          },
          {
            term: "您",
            roman: "nín",
            gloss: "you (polite / respectful)",
            pos: "pronoun",
            example: { text: "您好，老师！", roman: "Nín hǎo, lǎoshī!", gloss: "Hello, teacher (respectfully)." },
            linguistics: {
              origin: "compound (你 + 心), historically a contracted plural",
              etymology: [
                "您 is 你 written above <b>心</b> <i>heart</i>. The charming explanation often repeated — that you keep the person in your heart, hence the respect — is a <b>folk etymology</b>. It is memorable and harmless as a mnemonic, but it is not the historical account.",
                "The documented history is grammatical rather than sentimental. In Yuan- and Ming-era northern texts the plural 你们 nǐmen contracts to a single syllable, written 恁 or 您. That contracted plural then followed a very common cross-linguistic path — the plural of a pronoun becoming a singular honorific, exactly as French <i>vous</i> and German <i>Sie</i> did — and settled in Beijing Mandarin as the respectful singular."
              ],
              script: [
                "Eleven strokes, identical in simplified and traditional. The 心 component sits underneath in its full form, not as the compressed 忄.",
                "Because 您 already contains a fossilised plural, standard Mandarin has <b>no</b> form 您们. To address a group politely, say 你们 or 各位 gèwèi, or 您二位 for two people."
              ],
              phonology: [
                "Second tone, nín, with the -n ending (not -ng). It never undergoes sandhi, since it is not a third tone.",
                "您好 is therefore easier to pronounce than 你好 — no tone change is involved."
              ],
              cognates: [
                "Functionally parallel to Korean's honorific address system and Japanese's avoidance of pronouns altogether, though the mechanisms differ: Chinese has just this one pronoun distinction, where Korean and Japanese encode respect in verb endings.",
                "Note that 您 is markedly northern. Speakers in the south, in Taiwan and in Hong Kong use it much less, preferring to show respect with a title (王老师, 陈经理) instead of a pronoun."
              ]
            }
          },
          {
            term: "请问",
            trad: "請問",
            roman: "qǐngwèn",
            gloss: "excuse me, may I ask",
            pos: "polite expression",
            example: { text: "请问，你是王老师吗？", roman: "Qǐngwèn, nǐ shì Wáng lǎoshī ma?", gloss: "Excuse me, are you Teacher Wang?" },
            linguistics: {
              origin: "compound of two phono-semantic characters",
              etymology: [
                "<b>请</b> (traditional 請) is 言 <i>speech</i> plus the phonetic 青 qīng — one member of a very clean phonetic family that also gives 清 qīng <i>clear</i>, 情 qíng <i>feeling</i>, 晴 qíng <i>fine weather</i> and 睛 jīng <i>eyeball</i>. Its base meaning is <i>to request</i>. <b>问</b> (traditional 問) is 口 <i>mouth</i> inside the phonetic 门 mén <i>door</i>, meaning <i>to ask</i>.",
                "The two together are literally <i>request-ask</i>, that is, <i>may I ask</i>. It is a fixed polite formula and is not decomposed in use: you cannot say 请问你 with 你 as the object of 请."
              ],
              script: [
                "Simplified 请问 (10 + 6 strokes); traditional 請問 (15 + 11). Both simplifications are systematic: 言 → 讠 across the whole speech family, and 門 → 门 across every character containing a door.",
                "The 门 in 问 is <b>phonetic</b>, not semantic — the character has nothing to do with doors."
              ],
              phonology: [
                "qǐng is third tone, wèn is fourth. Since only the first syllable is third tone and the second is not, there is no sandhi; 请 is pronounced as a half third tone, low and flat.",
                "问 wèn illustrates a major Chinese sound change. Middle Chinese *mjunH began with m-, and in a specific phonological environment Mandarin turned that m- into w-. The same change gave 文 wén, 闻 wén, 万 wàn and 忘 wàng, all of which had m- in Middle Chinese."
              ],
              cognates: [
                "Korean preserves the older m-: 문 (問) as in 질문 <i>question</i>, 문 (門) as in 대문 <i>gate</i>, 문 (文) as in 문화 <i>culture</i>. Japanese likewise has もん mon (問題 mondai <i>problem</i>) and ぶん bun (文化 bunka). The Mandarin w- is the innovation, not the original.",
                "Within Chinese: 问题 wèntí <i>question, problem</i>, 请客 qǐngkè <i>to treat someone</i>, 请进 qǐng jìn <i>please come in</i>, 申请 shēnqǐng <i>to apply</i>."
              ]
            }
          },
          {
            term: "贵",
            trad: "貴",
            roman: "guì",
            gloss: "expensive; honourable (in polite formulas)",
            pos: "adjective",
            example: { text: "您贵姓？", roman: "Nín guìxìng?", gloss: "What is your (honourable) surname?" },
            linguistics: {
              origin: "phono-semantic compound (形声)",
              etymology: [
                "The semantic component is <b>贝</b> (traditional 貝), a cowrie shell — the earliest Chinese medium of exchange, and therefore the money radical. Any character containing it is likely to concern wealth or transactions: 财 wealth, 买 buy, 卖 sell, 费 fee, 贵 expensive, 便宜 cheap (the 宜 part aside).",
                "The upper component is analysed in the <i>Shuowen Jiezi</i> as 臾 serving as the phonetic. Its modern printed shape resembles 中, but that is a later graphic convergence rather than the original element, and the identification of the phonetic is not entirely secure."
              ],
              script: [
                "Simplified <b>贵</b> (9 strokes) versus traditional <b>貴</b> (12). The difference is the radical: 貝 → 贝, a cursive-derived simplification applied to every character in the money family at once.",
                "Recognising 贝 at the bottom or left of a character is a reliable signal that money, value or trade is involved."
              ],
              phonology: [
                "Fourth tone. Note the spelling: <b>gui</b> is a contraction of guei, and the tone mark goes on the second vowel by the iu/ui rule.",
                "Middle Chinese *kjw+jH, a departing-tone syllable, which is the regular source of modern fourth tone."
              ],
              cognates: [
                "Sino-Korean 귀 (貴) as in 귀중하다 <i>precious</i> and the honorific prefix 귀사 <i>your esteemed company</i> — the same honorific use as Chinese 贵. Sino-Japanese き ki (貴重 kichō) and native たっと-い tattoi. Sino-Vietnamese quý.",
                "The honorific 贵 appears in a small set of set phrases: 贵姓 <i>your surname</i>, 贵国 <i>your country</i>, 贵公司 <i>your company</i>. It is never used with 我, and asking 我贵姓 would be a joke."
              ]
            }
          },
          {
            term: "姓",
            roman: "xìng",
            gloss: "to be surnamed; surname",
            pos: "verb / noun",
            example: { text: "我姓王。", roman: "Wǒ xìng Wáng.", gloss: "My surname is Wang." },
            linguistics: {
              origin: "compound ideograph and phono-semantic (会意兼形声)",
              etymology: [
                "姓 joins <b>女</b> <i>woman</i> and <b>生</b> <i>to give birth, to be born</i>. 生 works simultaneously as the semantic contributor (the clan you are <i>born into</i>) and as the phonetic (shēng ~ xìng, a much closer match in Old Chinese, both reconstructed with an s- initial).",
                "The 女 element is not decorative. In the Zhou period a distinction was drawn between 姓 xìng, the ancient clan name, and 氏 shì, the lineage or branch name, and the oldest 姓 are conspicuously written with the woman radical: 姜 Jiāng, 姬 Jī, 姚 Yáo, 嬴 Yíng, 妫 Guī. This is widely taken as evidence that the earliest clan names were traced through the mother's line, though how literally to read that remains debated among historians."
              ],
              script: [
                "Eight strokes, identical in simplified and traditional. Written 女 first with its base stroke flicked upward, then 生.",
                "Contrast with 性 xìng <i>nature, gender, sex</i>, which replaces 女 with 忄 <i>heart</i> and keeps the same phonetic 生. Same sound, same tone, different radical, different word — a good illustration of how radicals disambiguate homophones."
              ],
              phonology: [
                "Fourth tone, xìng, with the palatal x-. The palatal initial is a recent development: Middle Chinese *sjengH had a plain s-, which palatalised before the high front vowel in the seventeenth and eighteenth centuries.",
                "The compound 贵姓 guìxìng has two fourth tones in sequence, with the first slightly shortened — normal for any 4+4 sequence."
              ],
              cognates: [
                "Sino-Korean 성 (姓) as in 성씨 <i>surname</i> (성 + 씨, exactly the ancient Chinese pair 姓 + 氏). Sino-Japanese せい sei (姓名 seimei <i>full name</i>). Sino-Vietnamese tính.",
                "Grammatically important: 姓 is a <b>verb</b>, not a noun, in the sentence 我姓王. There is no copula: saying 我是姓王 is wrong."
              ]
            }
          },
          {
            term: "叫",
            roman: "jiào",
            gloss: "to be called; to call, to shout",
            pos: "verb",
            example: { text: "我叫李友。", roman: "Wǒ jiào Lǐ Yǒu.", gloss: "I'm called Li You." },
            linguistics: {
              origin: "phono-semantic compound (形声)",
              etymology: [
                "The mouth radical <b>口</b> supplies the meaning — this is fundamentally a verb of vocalising — and <b>丩</b> jiū, an old character depicting two entwined strands, supplies the sound. The same phonetic appears in 纠 jiū <i>to entangle</i> and 收 shōu.",
                "The core sense is <i>to cry out, to call</i>; the sense <i>to be named</i> is an extension, as though the name is what one is called out as. 叫 also serves as a causative verb meaning <i>to tell someone to do something</i>: 他叫我来 <i>He told me to come</i>."
              ],
              script: [
                "Five strokes, identical in simplified and traditional. 口 on the left is written small and high in its square.",
                "The right-hand component 丩 is rare on its own but worth recognising as a phonetic."
              ],
              phonology: [
                "Fourth tone, jiào. Middle Chinese *kewH — note the k-, which palatalised to j- along with all other velars before high front vowels. This is the same change that produced Beijing from Peking.",
                "In 你叫什么名字 the sequence jiào shénme is often compressed in fast speech, with 什么 reducing almost to a single syllable, shéme."
              ],
              cognates: [
                "Sino-Korean 규 (叫) is rare; Korean uses native 부르다 for <i>to call</i>. Sino-Japanese きょう kyō, also rare — Japanese uses 呼ぶ yobu.",
                "The grammatical contrast to master is 姓 versus 叫. 姓 takes only a surname (我姓王); 叫 takes a given name or a full name (我叫王朋 or 我叫朋). Saying 我姓王朋 is a mistake, and so is 我叫王 unless Wang really is your whole name."
              ]
            }
          },
          {
            term: "什么",
            trad: "什麼",
            roman: "shénme",
            gloss: "what",
            pos: "question word",
            example: { text: "你叫什么名字？", roman: "Nǐ jiào shénme míngzi?", gloss: "What is your name?" },
            linguistics: {
              origin: "phonetic writing of a colloquial word",
              etymology: [
                "This is a case where the characters are borrowed for sound and carry no meaning of their own. The historically correct writing is <b>甚麼</b>, from 甚 shèn <i>what, how</i>, a genuine interrogative that appears in Tang and Song vernacular texts. 什 is a phonetic substitute — its own meaning is <i>a squad of ten</i> or <i>assorted</i>, from 十 <i>ten</i> plus 亻.",
                "The second syllable 麼/么 is a weakened suffix of no independent meaning, the same element found in 这么 zhème <i>so, this way</i>, 那么 nàme and 怎么 zěnme <i>how</i>. Recognising that 么 is a common question-word ending makes the whole family easier."
              ],
              script: [
                "Simplified <b>什么</b> (4 + 3 strokes); traditional writings vary between 什麼, 甚麼 and 甚麽 — Taiwan standard is 什麼.",
                "么 is the simplified form of 麼, whose core is the phonetic 麻 má."
              ],
              phonology: [
                "shén is second tone; <b>me</b> is always neutral. Native speakers routinely reduce the pair to <i>shéme</i> or even <i>shé-m</i> in rapid speech.",
                "Colloquial Beijing pronunciation often has <i>shémme</i> with assimilation of the -n to the following m."
              ],
              cognates: [
                "The 么 family: 什么 what, 怎么 how, 这么 like this, 那么 like that, 多么 how (exclamatory). Learn them as a set.",
                "Being a vernacular formation, 什么 has no Sino-Korean or Sino-Japanese reflex. Korean 뭐/무엇 and Japanese 何 nani are entirely native words."
              ]
            }
          },
          {
            term: "名字",
            roman: "míngzi",
            gloss: "name (given name, or full name)",
            pos: "noun",
            example: { text: "他的名字很好听。", roman: "Tā de míngzi hěn hǎotīng.", gloss: "His name sounds lovely." },
            linguistics: {
              origin: "compound of two characters, one ideographic, one phono-semantic",
              etymology: [
                "<b>名</b> is composed of 夕 <i>evening</i> over 口 <i>mouth</i>. Xu Shen's <i>Shuowen Jiezi</i> explains it as speaking one's own name in the dark, when one cannot be recognised by sight. This is the traditional account and it is charming, but like much of the <i>Shuowen</i> it is a Han-dynasty rationalisation and should not be presented as established fact.",
                "<b>字</b> is 宀 <i>roof</i> over 子 <i>child</i>, and originally meant <i>to bear or raise a child</i>. It came to mean the <i>style name</i> given to a man at his coming of age, and then, by a striking extension recorded in the preface to the <i>Shuowen</i> itself, <i>written character</i>: simple graphs were called 文 wén and the compounds born from them were called 字 zì, because they <i>reproduce</i>."
              ],
              script: [
                "名 is 6 strokes, 字 is 6 strokes; both are identical in simplified and traditional writing.",
                "字 is also the everyday word for a written character: 汉字 hànzì, 写字 xiě zì <i>to write characters</i>."
              ],
              phonology: [
                "míng is second tone; <b>zi</b> here is <b>neutral</b>, not zì. This neutral -zi is the same nominal suffix found in 桌子 zhuōzi <i>table</i>, 孩子 háizi <i>child</i> and 儿子 érzi <i>son</i>.",
                "Do not confuse 名字 míngzi <i>name</i> with 名子, which is not a word, or with 汉字 hànzì, where 字 keeps its full fourth tone."
              ],
              cognates: [
                "Sino-Korean 명 (名) as in 유명 <i>famous</i> and 자 (字) as in 한자 <i>Chinese characters</i>; Sino-Japanese めい mei / みょう myō and じ ji (漢字 kanji, 名前 namae uses native 名). Sino-Vietnamese danh and tự.",
                "Usage note: 名字 usually means the given name, but when someone asks 你叫什么名字 they normally expect the full name. For an unambiguous request for the surname alone, use 您贵姓."
              ]
            }
          },
          {
            term: "我",
            roman: "wǒ",
            gloss: "I, me",
            pos: "pronoun",
            example: { text: "我是学生。", roman: "Wǒ shì xuésheng.", gloss: "I am a student." },
            linguistics: {
              origin: "loan / rebus (假借) — originally a weapon pictograph",
              etymology: [
                "One of the great surprises of Chinese palaeography: 我 has nothing to do with the self. The oracle-bone graph depicts a <b>long-handled weapon with a serrated or toothed blade</b>, related to the 戈 <i>dagger-axe</i> that still forms its right-hand side. The character was then borrowed as a rebus for the first-person pronoun, which happened to sound the same, and the weapon sense was abandoned.",
                "This is the same borrowing mechanism that gave 不 its negative meaning and 来 its sense of <i>coming</i>. Pronouns, negatives and other grammatical words are frequently written with hijacked graphs, because abstract function words are exceptionally hard to draw."
              ],
              script: [
                "Seven strokes, identical in simplified and traditional. Stroke order trips up learners: the top-left flick, then the horizontal-hook, then the long left-falling stroke, then 戈 with its slanting stroke, hook, and the final dot at the very top right.",
                "The 戈 radical (62) on the right also appears in 找 <i>to look for</i>, 战 <i>war</i>, 成 <i>to become</i> and 或 <i>or</i>."
              ],
              phonology: [
                "Third tone. Half third tone before other tones (我是 wǒ shì is low and flat on the first syllable), and it triggers sandhi before another third tone: 我很好 is said <i>wó hén hǎo</i>.",
                "Middle Chinese *ngaX, with an initial ŋ- that Mandarin has dropped entirely — hence a modern syllable that begins with a bare vowel."
              ],
              cognates: [
                "Sino-Japanese が ga (自我 jiga <i>the self</i>) and native われ ware; Sino-Korean 아 (我) as in 자아 <i>the self</i>; Sino-Vietnamese ngã, preserving the old ŋ-.",
                "Plural 我们 wǒmen. Mandarin also has an inclusive plural 咱们 zánmen, which explicitly includes the listener — a distinction English lacks but Mandarin shares with many languages worldwide."
              ]
            }
          },
          {
            term: "是",
            roman: "shì",
            gloss: "to be (am / is / are)",
            pos: "verb",
            example: { text: "他是老师。", roman: "Tā shì lǎoshī.", gloss: "He is a teacher." },
            linguistics: {
              origin: "compound ideograph (会意), later grammaticalised",
              etymology: [
                "In bronze inscriptions 是 is analysed as 日 <i>sun</i> over 正 <i>straight, correct</i>, with the sense <i>right, correct</i> — a meaning it retains today in 是非 shìfēi <i>right and wrong</i> and in the affirmative reply 是 <i>that's right</i>.",
                "In Classical Chinese 是 was chiefly a <b>demonstrative pronoun</b> meaning <i>this</i>. Classical Chinese had no copula at all: 我，学生也 said <i>I, a student</i> and let the particle 也 close the equation. Around the Han dynasty, sentences of the shape <i>X, this Y</i> were reanalysed so that 是 was heard as the linking verb rather than as a resumptive pronoun. By the medieval period it was a full copula. This is a textbook case of grammaticalisation, and it parallels the development of copulas from demonstratives in Hebrew, Turkish and many other languages."
              ],
              script: [
                "Nine strokes, identical in simplified and traditional. 日 on top, then 一, then the lower assembly.",
                "Compare 时 (時) shí <i>time</i>, 早 zǎo <i>early</i> and 星 xīng <i>star</i>, which also carry the 日 component."
              ],
              phonology: [
                "Fourth tone, shì, with the retroflex sh- and the buzzing placeholder vowel — not <i>shee</i>.",
                "It is very often reduced and unstressed in connected speech, since it carries little information: 我是学生 sounds close to <i>wǒ sh xuésheng</i>. When 是 <b>is</b> stressed, it means something specific — emphasis or contradiction: 我是学生 with heavy 是 means <i>I really AM a student</i>."
              ],
              cognates: [
                "Sino-Korean 시 (是) as in 시정 <i>to correct</i>; Sino-Japanese ぜ ze / し shi (是非 zehi <i>by all means</i>, literally right-and-wrong). Neither language borrowed the copular use, which is a Mandarin-era development.",
                "Crucial restriction: 是 links two <b>nouns</b>. It is not used before adjectives. <i>I am busy</i> is 我很忙, never 我是忙. The adverb 很 fills the slot instead, and in that position it is nearly bleached of its <i>very</i> meaning."
              ]
            }
          },
          {
            term: "老师",
            trad: "老師",
            roman: "lǎoshī",
            gloss: "teacher",
            pos: "noun",
            example: { text: "王老师是中国人。", roman: "Wáng lǎoshī shì Zhōngguórén.", gloss: "Teacher Wang is Chinese." },
            linguistics: {
              origin: "compound of a pictograph and a phono-semantic character",
              etymology: [
                "<b>老</b> is a pictograph: the oracle-bone form shows a stooped figure with long, unbound hair leaning on a stick. It is radical 125 and appears in 考 <i>deceased father, to examine</i> and 者 <i>one who</i>. <b>师</b> (traditional 師) originally denoted a <b>military unit</b> — in the Zhou system a division of some 2,500 men — and by extension a multitude, then a leader of a multitude, then a master or teacher.",
                "The 老 here does not mean <i>old</i> in any literal sense. It is a prefix of familiarity and respect, the same one found in 老板 lǎobǎn <i>boss</i>, 老虎 lǎohǔ <i>tiger</i> and 老外 lǎowài <i>foreigner</i>. A twenty-two-year-old teaching assistant is 老师 just as much as a professor emeritus."
              ],
              script: [
                "Simplified 老师 (6 + 6 strokes) versus traditional 老師 (6 + 10). 師 → 师 shortens the left-hand component from 𠂤 to a two-stroke abbreviation.",
                "师 also appears in 律师 lǜshī <i>lawyer</i>, 工程师 gōngchéngshī <i>engineer</i> and 医师 yīshī <i>physician</i> — a productive suffix for skilled professions."
              ],
              phonology: [
                "lǎo is third tone, shī is first, so 老 is realised as a half third tone: low and flat with no rise.",
                "Both syllables keep full tones — this is not one of the neutral-tone compounds. Compare 学生 xuésheng, where the second syllable does go neutral."
              ],
              cognates: [
                "Sino-Korean 노 (老) and 사 (師) — 교사 <i>gyosa</i> teacher uses 教師, the same 師. Sino-Japanese ろう rō and し shi — 教師 kyōshi, 医師 ishi. Sino-Vietnamese lão and sư.",
                "Culturally essential: 老师 is used as a <b>title and a form of address</b>, placed after the surname (王老师) and used instead of a name when speaking to a teacher. Addressing a teacher by bare given name would be startling in a Chinese classroom."
              ]
            }
          },
          {
            term: "学生",
            trad: "學生",
            roman: "xuésheng",
            gloss: "student",
            pos: "noun",
            example: { text: "我们都是学生。", roman: "Wǒmen dōu shì xuésheng.", gloss: "We are all students." },
            linguistics: {
              origin: "compound: 学 to study + 生 one who / living being",
              etymology: [
                "<b>生</b> is a pictograph of a plant sprouting: the early graph is 屮, a shoot, over 一, the ground line. Its meanings radiate from that image — <i>to be born</i>, <i>to grow</i>, <i>raw</i>, <i>life</i>, <i>unfamiliar</i> (生词 <i>new word</i>, literally <i>raw word</i>).",
                "As the second element of a person-noun, 生 means roughly <i>one who is</i>: 学生 <i>one who studies</i>, 先生 <i>one born before</i>, 医生 <i>one who heals</i>. The 学 component is treated in full in the Foundation module."
              ],
              script: [
                "Simplified 学生 (8 + 5 strokes) versus traditional 學生 (16 + 5). Only 学 changes.",
                "生 is radical 100 and is written with the horizontal strokes and a final long base line: 丿一一丨一, five strokes."
              ],
              phonology: [
                "xué is second tone; <b>sheng</b> is normally <b>neutral</b> in this word, giving xuésheng. Dictionaries in Taiwan often mark it as full first tone, xuéshēng, and both are acceptable — but neutral is the mainland norm and what you will hear in Beijing.",
                "Contrast 生 with full tone in 生日 shēngrì <i>birthday</i> and 医生 yīshēng <i>doctor</i>."
              ],
              cognates: [
                "Sino-Korean 학생 <i>haksaeng</i> — the very same two characters, and a word so close that it is essentially transparent to a Chinese speaker. Sino-Japanese 学生 gakusei. Sino-Vietnamese học sinh. This is a shared East Asian vocabulary stratum, not a coincidence.",
                "Related: 大学生 dàxuéshēng <i>university student</i>, 小学生 xiǎoxuéshēng <i>primary pupil</i>, 留学生 liúxuéshēng <i>international student</i>, 生活 shēnghuó <i>life</i>."
              ]
            }
          },
          {
            term: "先生",
            roman: "xiānsheng",
            gloss: "Mr; sir; husband",
            pos: "noun / title",
            example: { text: "王先生，您好！", roman: "Wáng xiānsheng, nín hǎo!", gloss: "Hello, Mr Wang!" },
            linguistics: {
              origin: "compound ideograph, literally 'born before'",
              etymology: [
                "<b>先</b> shows a foot (止, in its flattened upper form) above a person (儿), depicting someone who goes ahead — hence <i>first, earlier, in advance</i>. With 生 the compound reads literally <i>born before</i>, that is, one's senior.",
                "In Classical and imperial usage 先生 meant a learned man or a teacher, and that older sense is exactly what Japanese borrowed as 先生 <b>sensei</b>. Modern Mandarin has demoted the term to the general courtesy title <i>Mr</i>, though a trace of the older respect survives when it is used of eminent scholars, including women: 杨绛先生."
              ],
              script: [
                "先 is 6 strokes, 生 is 5; both identical in simplified and traditional.",
                "Note the top of 先: it is 土-like in print but is historically 之/止, a foot."
              ],
              phonology: [
                "xiān first tone, <b>sheng</b> neutral. Some speakers give it a full first tone in formal address.",
                "As a title it follows the surname, exactly as 老师 does: 王先生, not 先生王."
              ],
              cognates: [
                "Japanese 先生 <b>sensei</b> and Korean 선생 <b>seonsaeng</b> (as in 선생님) both retain the original meaning <i>teacher</i>. Mandarin is the outlier here: the language that coined the word has moved on, while its neighbours preserve the older sense — a useful reminder that borrowings freeze the meaning at the moment of borrowing.",
                "Parallel titles: 女士 nǚshì <i>Ms</i>, 小姐 xiǎojiě <i>Miss</i> (use with care on the mainland, where it can carry an unwanted implication), 太太 tàitai <i>Mrs</i>."
              ]
            }
          },
          {
            term: "呢",
            roman: "ne",
            gloss: "and what about ...? (follow-up question particle)",
            pos: "particle",
            example: { text: "我很好，你呢？", roman: "Wǒ hěn hǎo, nǐ ne?", gloss: "I'm fine — and you?" },
            linguistics: {
              origin: "phono-semantic compound (形声)",
              etymology: [
                "口 <i>mouth</i> plus the phonetic 尼 ní. As with 吗, 吧 and 啊, the mouth radical here marks the character as writing a <b>sound</b> rather than a concept — the standard convention for particles and interjections.",
                "The particle is a vernacular development of the late medieval period and has no classical pedigree. Its precise origin is disputed; proposals connect it to the classical particles 尔 or 那, but none is decisive."
              ],
              script: [
                "Eight strokes, identical in simplified and traditional. 口 on the left, 尼 on the right.",
                "尼 by itself is ní, as in 尼姑 nígū <i>Buddhist nun</i> and in the transcription 印度尼西亚 Yìndùníxīyà <i>Indonesia</i>."
              ],
              phonology: [
                "Always <b>neutral tone</b> in this use. There is a separate literary reading ní, but you will not meet it as a beginner.",
                "呢 questions carry a slight lengthening on the particle, which is the closest Mandarin gets to question intonation — but the tones of the preceding words stay intact."
              ],
              cognates: [
                "Particle relatives: 吗 ma (yes/no question), 吧 ba (suggestion or guess), 啊 a (softener), 了 le (change of state).",
                "呢 has a second, quite different function you will meet later: it marks an ongoing situation, as in 他在看书呢 <i>He's reading (right now)</i>. Both uses share a sense of drawing attention to a current state of affairs."
              ]
            }
          },
          {
            term: "也",
            roman: "yě",
            gloss: "also, too",
            pos: "adverb",
            example: { text: "我也是学生。", roman: "Wǒ yě shì xuésheng.", gloss: "I am a student too." },
            linguistics: {
              origin: "uncertain; a classical particle repurposed as an adverb",
              etymology: [
                "The original meaning of 也 is genuinely unknown, and the proposals are unusually varied. The <i>Shuowen Jiezi</i> offers an anatomical explanation that modern scholars almost universally reject. Others have identified the graph with a snake (linking it to 它/蛇) or with 匜 yí, a ritual pouring vessel. Honest verdict: the origin is <b>unresolved</b>, and any confident story you read about it should be treated with suspicion.",
                "Its function, however, is well documented. In Classical Chinese 也 was a sentence-final particle marking judgement or equation — 我，学生也 <i>I am a student</i>. The modern adverbial use meaning <i>also</i> is a separate, later development, and the two are unrelated in function even though they share a graph."
              ],
              script: [
                "Three strokes, identical in simplified and traditional. It is written 𠃌-like: the horizontal-turn, then the vertical-turn-hook, then the long final stroke.",
                "As a component it is phonetic in 他 tā, 她 tā, 地 dì/de, 池 chí and 驰 chí."
              ],
              phonology: [
                "Third tone. Half third tone before other tones (也是 yě shì), and it triggers sandhi before another third tone: 我也很好 → <i>wó yé hén hǎo</i>.",
                "Middle Chinese *yaeX."
              ],
              cognates: [
                "Sino-Korean 야 (也) and Sino-Japanese や ya both exist but are rare, since neither language borrowed the adverb.",
                "Word-order rule, and it is strict: <b>也 goes before the verb, never at the end</b>. 我也是学生 is correct; 我是学生也 is not Chinese. Where a sentence has both 也 and 不, the order is 也不: 我也不是老师."
              ]
            }
          },
          {
            term: "认识",
            trad: "認識",
            roman: "rènshi",
            gloss: "to know (a person), to be acquainted with",
            pos: "verb",
            example: { text: "我认识王老师。", roman: "Wǒ rènshi Wáng lǎoshī.", gloss: "I know Teacher Wang." },
            linguistics: {
              origin: "compound of two phono-semantic characters",
              etymology: [
                "<b>认</b> (traditional 認) is 言 <i>speech</i> plus the phonetic 忍 rěn <i>to endure</i>; its base sense is <i>to recognise, to acknowledge</i>. <b>识</b> (traditional 識) is 言 plus the phonetic 戠 zhí, meaning <i>to know, to discern</i>.",
                "The compound therefore stacks two near-synonyms, which is one of the most common word-formation strategies in modern Chinese. Classical Chinese was largely monosyllabic; as sound changes collapsed distinct syllables into homophones, the language compensated by pairing synonyms into two-syllable words. 认识, 学习, 朋友 and 高兴 are all products of this drift."
              ],
              script: [
                "Simplified 认识 (4 + 7 strokes) versus traditional 認識 (14 + 19). Two systematic simplifications combine: 言 → 讠, and the phonetic 戠 → 只 in 识.",
                "识 has a second reading <b>zhì</b> meaning <i>to record, a mark</i>, as in 标识 biāozhì <i>sign, logo</i>."
              ],
              phonology: [
                "rèn is fourth tone; <b>shi</b> is <b>neutral</b> here, giving rènshi. Taiwan standard prescribes rènshì with a full fourth tone.",
                "Both syllables need care: 认 has the retroflex r-, and 识 has the retroflex sh- with the buzzing placeholder vowel."
              ],
              cognates: [
                "Sino-Korean 인식 <i>insik</i> (認識) meaning <i>cognition, awareness</i>; Sino-Japanese 認識 <i>ninshiki</i>, with the same meaning. All three languages share the compound, but Mandarin alone uses it for the everyday <i>to be acquainted with someone</i>.",
                "Distinguish 认识 from 知道 zhīdào. 认识 takes people and things you are personally familiar with (认识他, 认识这个字); 知道 takes facts (我知道他是老师 <i>I know that he is a teacher</i>)."
              ]
            }
          },
          {
            term: "高兴",
            trad: "高興",
            roman: "gāoxìng",
            gloss: "happy, glad, pleased",
            pos: "adjective",
            example: { text: "认识你很高兴。", roman: "Rènshi nǐ hěn gāoxìng.", gloss: "I'm pleased to meet you." },
            linguistics: {
              origin: "compound: 高 tall + 兴 to rise, spirits",
              etymology: [
                "<b>高</b> is a pictograph of a tall building — the early graph clearly shows a multi-storey gate-tower or watchtower with a roof, an upper chamber and a base. <b>兴</b> (traditional 興) shows <b>four hands</b> (two above, two below, in the components 舁) jointly lifting the object 同, giving the sense <i>to raise, to rise, to flourish</i>.",
                "Together they express spirits that are lifted high. The compound is transparent once you can see the four hands in 興, which the simplified 兴 unfortunately hides."
              ],
              script: [
                "Simplified 高兴 (10 + 6 strokes) versus traditional 高興 (10 + 16). 興 → 兴 is a drastic abbreviation that keeps only the outline of the original.",
                "高 is radical 189 and appears in 稿 <i>draft</i> and 搞 <i>to do</i> as a phonetic."
              ],
              phonology: [
                "gāo first tone, xìng fourth. 兴 also has a first-tone reading <b>xīng</b> meaning <i>to rise, to prosper</i> — 兴奋 xīngfèn <i>excited</i>, 高兴 gāoxìng <i>happy</i>. The tone distinguishes the two senses, so it matters.",
                "As an adjective, 高兴 does not take 是: say 我很高兴, not 我是高兴."
              ],
              cognates: [
                "Sino-Korean 고 (高) and 흥 (興) — 흥미 <i>heungmi</i> interest, 부흥 <i>revival</i>. Sino-Japanese こう kō and きょう kyō / こう kō — 興味 kyōmi <i>interest</i>, 復興 fukkō <i>reconstruction</i>.",
                "The formula 认识你很高兴 is the standard <i>pleased to meet you</i>. A more formal variant is 很高兴认识你, with the same words reordered."
              ]
            }
          },
          {
            term: "谢谢",
            trad: "謝謝",
            roman: "xièxie",
            gloss: "thank you",
            pos: "expression",
            example: { text: "谢谢老师！", roman: "Xièxie lǎoshī!", gloss: "Thank you, teacher!" },
            linguistics: {
              origin: "reduplicated phono-semantic character",
              etymology: [
                "<b>谢</b> (traditional 謝) is 言 <i>speech</i> plus the phonetic 射 shè <i>to shoot</i>, itself originally a drawing of a bow with an arrow plus a hand. The character's <b>original meaning was 'to decline, to take leave, to withdraw'</b>, and that older sense survives in 谢绝 xièjué <i>to decline politely</i> and in 凋谢 diāoxiè <i>(of flowers) to wither and fall</i>.",
                "The sense <i>to thank</i> developed from the polite formulas of declining a gift or taking one's leave — a semantic path with parallels elsewhere, and a good reminder that words for gratitude are usually recycled from other social rituals rather than being primitive."
              ],
              script: [
                "Simplified 谢 (12 strokes) versus traditional 謝 (17): 言 → 讠 again.",
                "The reduplication 谢谢 is a lexical fact, not a grammatical one — you cannot say a single 谢 to thank someone in modern Mandarin."
              ],
              phonology: [
                "The first syllable is a full fourth tone, xiè; the second is <b>neutral</b>. Saying xièxiè with two fourth tones is a recognisable learner accent.",
                "Common intensified forms: 谢谢你 xièxie nǐ, 谢谢您 xièxie nín, 多谢 duōxiè, and the formal 非常感谢 fēicháng gǎnxiè."
              ],
              cognates: [
                "Sino-Korean 사 (謝) appears in <b>감사</b> <i>gamsa</i> (感謝) — the standard Korean word for thanks is literally the same characters as Chinese 感谢 gǎnxiè. Sino-Japanese しゃ sha appears in 感謝 <i>kansha</i>. Three languages, one etymon.",
                "The idiomatic reply is 不客气 bú kèqi <i>don't be polite</i> or 不用谢 búyòng xiè <i>no need to thank</i>. Note that among close family and friends, Chinese speakers thank each other much less often than English speakers do; excessive 谢谢 can create distance."
              ]
            }
          },
          {
            term: "再见",
            trad: "再見",
            roman: "zàijiàn",
            gloss: "goodbye",
            pos: "expression",
            example: { text: "老师，再见！", roman: "Lǎoshī, zàijiàn!", gloss: "Goodbye, teacher!" },
            linguistics: {
              origin: "compound: 再 again + 见 to see",
              etymology: [
                "<b>再</b> is an indicative character meaning <i>a second time, again</i>; its early forms are usually explained as a mark added to 冓 or to a doubled element to indicate repetition. <b>见</b> (traditional 見) is a compound ideograph: 目 <i>eye</i> drawn on top of 儿, a person — a person with an emphasised eye, hence <i>to see</i>.",
                "The whole is literally <i>see again</i>, an optative farewell. The construction is shared across East Asia: Japanese また会いましょう <i>let's meet again</i>, Korean 또 봐요, French <i>au revoir</i>, German <i>auf Wiedersehen</i>, Italian <i>arrivederci</i> — all express the same idea, which suggests convergent politeness rather than borrowing."
              ],
              script: [
                "Simplified 再见 (6 + 4 strokes) versus traditional 再見 (6 + 7). 見 → 见 abbreviates the 目 on top into two strokes, a change applied consistently to 现/現, 视/視, 观/觀 and 觉/覺.",
                "见 is radical 147 in traditional dictionaries."
              ],
              phonology: [
                "Two fourth tones in a row, zàijiàn. In a 4+4 sequence the first fall is shortened and does not reach the bottom of the range — say it briskly.",
                "Both syllables keep full tones; neither goes neutral."
              ],
              cognates: [
                "Sino-Korean 재 (再) as in 재발 <i>recurrence</i>, and 견 (見) as in 의견 <i>opinion</i>. Sino-Japanese さい sai (再会 saikai <i>reunion</i>) and けん ken (意見 iken <i>opinion</i>).",
                "Register alternatives: 拜拜 bàibài, borrowed from English <i>bye-bye</i> and very common among young speakers; 回头见 huítóu jiàn <i>see you later</i>; 明天见 míngtiān jiàn <i>see you tomorrow</i>, which is fully productive with any time word."
              ]
            }
          },
          {
            term: "他",
            roman: "tā",
            gloss: "he, him",
            pos: "pronoun",
            example: { text: "他不是老师。", roman: "Tā bú shì lǎoshī.", gloss: "He is not a teacher." },
            linguistics: {
              origin: "phono-semantic compound (形声)",
              etymology: [
                "亻 <i>person</i> plus the phonetic 也. The character originally wrote the word meaning <i>other, another</i> — a sense preserved in 其他 qítā <i>the others</i> and 他人 tārén <i>other people</i>. Its use as a third-person pronoun grew out of that, and it was gender-neutral for most of its history.",
                "The modern three-way split 他 / 她 / 它 is a <b>twentieth-century invention</b>. Under pressure to translate European texts that distinguish <i>he</i> from <i>she</i>, the poet and linguist <b>Liu Bannong</b> (刘半农) proposed 她 for the feminine around 1918–1920. It was controversial at the time, including among women writers who saw no need for it, but it stuck. 它 for inanimate things and 牠 for animals followed."
              ],
              script: [
                "Five strokes, identical in simplified and traditional. 她 and 它 are the same five- and six-stroke shapes with different radicals: 女 and 宀.",
                "There is also 祂 with the 礻 radical, used by some Chinese Christian writers for a divine referent — a modern calque of capitalised English <i>He</i>."
              ],
              phonology: [
                "First tone. 他, 她 and 它 are <b>all pronounced tā</b>: the distinction exists only in writing and disappears completely in speech. This is the mirror image of English, where <i>he</i> and <i>she</i> differ in sound but not in any written marking.",
                "Plural 他们 tāmen, 她们 tāmen, 它们 tāmen — again homophonous. A mixed-gender group takes 他们."
              ],
              cognates: [
                "Sino-Korean 타 (他) as in 타인 <i>other people</i>; Sino-Japanese た ta as in 他人 tanin. Both preserve the original <i>other</i> meaning rather than the pronoun use.",
                "Related: 其他 qítā <i>other</i>, 他们 tāmen <i>they</i>, 吉他 jítā <i>guitar</i> (a phonetic transcription, where 他 is used purely for its sound)."
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
            name: "The verb 是 shì — equating two nouns",
            pattern: "Subject + 是 + Noun · negative: Subject + 不是 + Noun",
            explanation: [
              "是 links two noun phrases and asserts that they refer to the same thing or that one belongs to the category of the other: 我是学生 <i>I am a student</i>, 他是老师 <i>He is a teacher</i>, 这是我的名字 <i>This is my name</i>. There is no conjugation — 是 has one form for every subject — and no article, so 学生 covers <i>a student</i>, <i>the student</i> and <i>students</i> alike.",
              "The negative is <b>不是</b>, with 不 placed directly before the verb. Because 是 is a fourth tone, 不 undergoes sandhi and is pronounced <b>bú</b>: bú shì. This is the single most frequently heard instance of the 不 tone change, so drill it until it is automatic.",
              "The critical restriction: <b>是 is not used with adjectives</b>. English uses <i>be</i> for both <i>I am a student</i> and <i>I am busy</i>, but Chinese treats adjectives as verb-like predicates that need no copula. <i>I am busy</i> is 我很忙, <i>I am happy</i> is 我很高兴. In these sentences 很 is not really translating as <i>very</i>; it is a neutral filler occupying the predicate slot. An adjective with no 很 at all (我忙) sounds contrastive, implying <i>I'm busy, but someone else isn't</i>."
            ],
            examples: [
              { text: "我是学生。", roman: "Wǒ shì xuésheng.", gloss: "I am a student." },
              { text: "他不是老师。", roman: "Tā bú shì lǎoshī.", gloss: "He is not a teacher." },
              { text: "李友是我的朋友。", roman: "Lǐ Yǒu shì wǒ de péngyou.", gloss: "Li You is my friend." },
              { text: "我很高兴。", roman: "Wǒ hěn gāoxìng.", gloss: "I am happy. (no 是 with an adjective)" },
              { text: "这不是我的名字。", roman: "Zhè bú shì wǒ de míngzi.", gloss: "This is not my name." }
            ]
          },
          {
            name: "Names: 姓 xìng, 叫 jiào and 贵姓 guìxìng",
            pattern: "我姓 + surname · 我叫 + full name or given name · 您贵姓？ · 你叫什么名字？",
            explanation: [
              "Chinese splits the job of naming across two verbs, and the split is about <b>what follows</b>, not about formality. <b>姓</b> is a verb meaning <i>to have as a surname</i>, and only a surname may follow it: 我姓王 <i>My surname is Wang</i>. <b>叫</b> means <i>to be called</i> and takes a given name or a full name: 我叫王朋, or, among friends, 我叫朋. Saying 我姓王朋 or 我是姓王 are both errors.",
              "To ask, you have two registers. <b>您贵姓？</b> is the polite enquiry after a surname — literally <i>your honourable surname?</i> Note that it has no verb 是 and takes no 吗; the honorific 贵 already frames it as a question. The expected answer uses 姓, and idiomatically drops the 贵: 我姓李. Never reply 我贵姓李.",
              "<b>你叫什么名字？</b> is the neutral, everyday question for a name, appropriate with peers, children and in casual settings. A useful third option is 怎么称呼您？ <i>How should I address you?</i>, which invites a title as well as a name. In Chinese the surname comes <b>first</b>: in 王朋, 王 is the family name and 朋 the given name."
            ],
            examples: [
              { text: "您贵姓？— 我姓李。", roman: "Nín guìxìng? — Wǒ xìng Lǐ.", gloss: "What is your surname? — My surname is Li." },
              { text: "你叫什么名字？— 我叫李友。", roman: "Nǐ jiào shénme míngzi? — Wǒ jiào Lǐ Yǒu.", gloss: "What is your name? — I'm called Li You." },
              { text: "他姓王，叫王朋。", roman: "Tā xìng Wáng, jiào Wáng Péng.", gloss: "His surname is Wang; he's called Wang Peng." },
              { text: "我不姓张，我姓李。", roman: "Wǒ bú xìng Zhāng, wǒ xìng Lǐ.", gloss: "My surname isn't Zhang, it's Li." }
            ]
          },
          {
            name: "Yes/no questions with 吗 ma",
            pattern: "[complete statement] + 吗？",
            explanation: [
              "This is the easiest question formation in any major language. Take a finished statement, add 吗 at the end, and you have a yes/no question. <b>Nothing else changes</b>: no word order inversion, no auxiliary verb, no rising intonation. 你是学生 <i>You are a student</i> becomes 你是学生吗？ <i>Are you a student?</i>",
              "Because Mandarin uses pitch to distinguish words, it cannot spend pitch on marking questions the way English does. Sentence-final particles do that work instead. Adding an English-style final rise to a 吗 question is one of the clearest foreign-accent markers, and in the worst case it distorts the tone of the last syllable into a different word.",
              "There is no single word for <i>yes</i> or <i>no</i>. You answer by <b>echoing the verb</b>: 你是学生吗？ → 是 or 不是. 你姓王吗？ → 姓 or 不姓. 你认识他吗？ → 认识 or 不认识. Learners who reach for a generic yes-word will sound off; learn to reuse the verb.",
              "A near-synonymous alternative is the <b>A-not-A question</b>: 你是不是学生？ It means the same thing and cannot be combined with 吗 — 你是不是学生吗？ is ungrammatical. A-not-A tends to feel slightly more direct and is common in northern speech."
            ],
            examples: [
              { text: "你是老师吗？", roman: "Nǐ shì lǎoshī ma?", gloss: "Are you a teacher?" },
              { text: "他姓王吗？— 不姓，他姓李。", roman: "Tā xìng Wáng ma? — Bú xìng, tā xìng Lǐ.", gloss: "Is his surname Wang? — No, it's Li." },
              { text: "你认识她吗？— 认识。", roman: "Nǐ rènshi tā ma? — Rènshi.", gloss: "Do you know her? — Yes." },
              { text: "你是不是学生？", roman: "Nǐ shì bu shì xuésheng?", gloss: "Are you a student? (A-not-A; 不 goes neutral here)" }
            ]
          },
          {
            name: "呢 ne for follow-up questions, and adverb 也 yě",
            pattern: "Noun + 呢？ = 'and what about N?' · Subject + 也 + verb",
            explanation: [
              "<b>呢</b> attached to a bare noun phrase means <i>and what about ...?</i> It inherits its question from the immediately preceding context, which makes it wonderfully economical: 我是学生，你呢？ <i>I'm a student — and you?</i> 我很好，你呢？ <i>I'm fine — and you?</i> Without a prior context 你呢 is uninterpretable, so it can never open a conversation.",
              "呢 also attaches to a question word to soften it: 你的名字呢？ <i>And your name?</i> It is gentler than repeating the whole question, and using it makes your Chinese sound markedly more natural early on.",
              "<b>也</b> means <i>also, too</i>, and its placement is rigid: it is an adverb, so it stands <b>immediately before the verb</b>, after the subject. 我也是学生 <i>I am also a student</i>. It can never go at the end of the sentence, and it can never precede the subject. English speakers habitually produce 我是学生也 by transferring the position of <i>too</i>; this is simply not Chinese.",
              "When negation is present, 也 comes first: 我也不是老师 <i>I'm not a teacher either</i>. And note that 也 must have something to be <i>also</i> to — it needs an antecedent in the discourse, exactly as English <i>too</i> does."
            ],
            examples: [
              { text: "我是学生，你呢？", roman: "Wǒ shì xuésheng, nǐ ne?", gloss: "I'm a student — and you?" },
              { text: "我很好，你呢？", roman: "Wǒ hěn hǎo, nǐ ne?", gloss: "I'm fine — how about you?" },
              { text: "他也是学生。", roman: "Tā yě shì xuésheng.", gloss: "He is a student too." },
              { text: "我也不认识他。", roman: "Wǒ yě bú rènshi tā.", gloss: "I don't know him either." },
              { text: "王老师也很高兴。", roman: "Wáng lǎoshī yě hěn gāoxìng.", gloss: "Teacher Wang is happy too." }
            ]
          }
        ]
      },
      {
        type: "notes",
        title: "Culture note: names, titles and the shape of a Chinese introduction",
        body: [
          "A Chinese name puts the <b>family name first</b>: in 王朋, 王 is the surname and 朋 the given name. Surnames are overwhelmingly one syllable and drawn from a small pool — the so-called 百家姓 <i>Hundred Family Surnames</i> — with 王, 李, 张, 刘 and 陈 alone accounting for well over a fifth of the population of China. Given names are usually one or two syllables and are freely composed rather than chosen from a fixed stock of first names, so a given name is often unique within a school and carries a deliberate meaning: 明 <i>bright</i>, 伟 <i>great</i>, 欣 <i>joyful</i>.",
          "Titles matter more than in English, and they are used far more often. A title follows the surname — <b>王老师</b> Teacher Wang, <b>李医生</b> Doctor Li, <b>张经理</b> Manager Zhang — and often replaces the name altogether when speaking to the person. Occupational titles like 老师 are ordinary forms of address, not stiff formalities: a student says 老师，你好 the way an English speaker might say <i>Sir</i>, but with much less distance. Calling a teacher by their bare given name would be genuinely startling.",
          "Full names are used more freely than English speakers expect. Colleagues and classmates routinely address each other with the whole two- or three-syllable name (王朋！) where English would use a first name alone. Among close friends and family you will hear the affectionate prefixes 小 xiǎo for someone younger (小王) and 老 lǎo for someone older or long-known (老王) — a system based on relative age and familiarity, not on rank.",
          "Finally, the greeting itself. 你好 is correct and safe but slightly formal — it is what you say to someone you have just met. Between people who know each other, Chinese greetings are typically <b>situational</b>: 吃了吗？ <i>Have you eaten?</i>, 你去哪儿？ <i>Where are you off to?</i>, 下班了？ <i>Finished work?</i> These are not real questions and do not require informative answers; they function exactly as English <i>How's it going?</i> does. Answer briefly and move on."
        ]
      },
      {
        type: "practice",
        title: "Practice",
        exercises: [
          {
            type: "mcq",
            prompt: "Where does 也 go? Choose the correct sentence for 'I am a student too.'",
            promptAudio: "我也是学生。",
            choices: ["也我是学生。", "我是学生也。", "我也是学生。", "我是也学生。"],
            answer: 2,
            explain: "也 is an adverb and stands immediately before the verb, after the subject. It can never be placed at the end of the sentence the way English 'too' can."
          },
          {
            type: "mcq",
            prompt: "How do you answer 你是老师吗？ if you are NOT a teacher?",
            promptAudio: "你是老师吗？",
            choices: ["不。", "不是。", "没有。", "不吗。"],
            answer: 1,
            explain: "Mandarin has no all-purpose word for 'no'. You echo the verb with 不 in front: 不是. Note the sandhi — it is pronounced bú shì."
          },
          {
            type: "mcq",
            prompt: "Which sentence is WRONG?",
            promptAudio: null,
            choices: ["我很高兴。", "他是学生。", "我是高兴。", "我不是老师。"],
            answer: 2,
            explain: "是 links two nouns and is never used before an adjective. 高兴 is an adjective, so it takes 很 instead: 我很高兴."
          },
          {
            type: "typing",
            prompt: "Type the pinyin for 'What is your (honourable) surname?' — the polite form.",
            answer: ["nín guìxìng", "nínguìxìng", "nin guixing", "ninguixing", "您贵姓", "您贵姓？"],
            hint: "Three characters, and no 是 and no 吗 are needed."
          },
          {
            type: "typing",
            prompt: "Complete the reply: 我是学生，你 ___？ (ask 'and you?')",
            answer: ["呢", "ne", "呢？"],
            hint: "A single neutral-tone particle."
          },
          {
            type: "typing",
            prompt: "Type 'He is not a teacher' in Chinese characters.",
            answer: ["他不是老师", "他不是老师。", "他不是老師", "他不是老師。"],
            hint: "Four elements: 他 + negator + verb + noun."
          },
          {
            type: "listening",
            prompt: "Listen. What is being asked?",
            audioText: "你叫什么名字？",
            choices: [
              "What is your surname?",
              "What is your name?",
              "Are you a student?",
              "How are you?"
            ],
            answer: 1,
            explain: "你叫什么名字？ is the everyday neutral way to ask someone's name. The polite surname-only question would be 您贵姓？"
          },
          {
            type: "listening",
            prompt: "Listen carefully to the tone on 不. What did you hear?",
            audioText: "我不是学生。",
            choices: [
              "wǒ bù shì xuésheng",
              "wǒ bú shì xuésheng",
              "wǒ bǔ shì xuésheng",
              "wǒ bu shi xuésheng"
            ],
            answer: 1,
            explain: "不 is underlyingly fourth tone but rises to second tone before another fourth tone. 是 is fourth tone, so 不是 is bú shì."
          },
          {
            type: "match",
            prompt: "Match each Chinese expression with its English equivalent.",
            pairs: [
              { a: "请问", b: "excuse me, may I ask" },
              { a: "认识你很高兴", b: "pleased to meet you" },
              { a: "再见", b: "goodbye" },
              { a: "谢谢", b: "thank you" },
              { a: "您贵姓", b: "what is your surname?" },
              { a: "你呢", b: "and you?" }
            ]
          },
          {
            type: "match",
            prompt: "Match each word with its part of speech or function.",
            pairs: [
              { a: "是", b: "verb linking two nouns" },
              { a: "吗", b: "yes/no question particle" },
              { a: "呢", b: "follow-up question particle" },
              { a: "也", b: "adverb meaning 'also'" },
              { a: "姓", b: "verb taking only a surname" }
            ]
          },
          {
            type: "order",
            prompt: "Arrange into a sentence: 'I am not a student either.'",
            tokens: ["学生", "不是", "我", "也"],
            answer: "我 也 不是 学生"
          },
          {
            type: "order",
            prompt: "Arrange into a sentence: 'My surname is Li; I'm called Li You.'",
            tokens: ["李友", "我", "姓李", "叫"],
            answer: "我 姓李 叫 李友"
          }
        ]
      }
    ]
  });
})();
