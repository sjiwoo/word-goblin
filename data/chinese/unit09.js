window.CURRICULUM = window.CURRICULUM || {};
(function () {
  const C = window.CURRICULUM;
  C.chinese = C.chinese || { units: [] };

  C.chinese.units.push({
    id: "zh-09",
    order: 9,
    title: "Slang & Internet Chinese",
    titleNative: "网络用语",
    subtitle: "How your friends actually type: 躺平, 内卷, yyds, 666 — with honest notes on which words are still alive in 2026 and where each one is safe to use.",
    textbookBasis: [
      "《咬文嚼字》 annual top-ten buzzword lists (十大流行语), 2010–2025",
      "教育部/国家语委《中国语言生活状况报告》, annual 网络用语 sections",
      "ChinesePod and Mandarin Corner colloquial / street-Chinese lesson series"
    ],
    overview: [
      "Everything in units 1–8 is the Chinese of textbooks, classrooms and polite strangers, and you need all of it. This unit is the other half: the Chinese your friends actually type into WeChat. It is not a replacement for the standard language, it is a <b>register</b> layered on top of it, and the main skill being taught here is knowing which one to reach for.",
      "Three things make internet Chinese hard for a learner who is otherwise doing fine. First, much of it is written-only — pinyin-initial abbreviations like yyds and xswl have no natural spoken form. Second, a lot of it is number rebus inherited from 1990s pagers, where 520 means <i>I love you</i> for reasons that are only half phonetic. Third, it decays fast: a term that was everywhere in 2021 can mark you as out of date by 2026, so every vocabulary item below carries an honest currency label — <b>current</b>, <b>fading</b> or <b>dated</b> — as best it can be judged.",
      "There is also a politeness dimension that no wordlist can capture, so it is built into every entry as a <b>register</b> note. Slang is for peers, group chats and people your own age. With a teacher, a boss, a client, an older relative or an official, it ranges from odd to offensive. And a handful of these words are polite clippings of genuinely vulgar originals — 牛 is the clean, universally used short form of a crude phrase. This unit teaches the clipped forms and tells you plainly where they come from, so you can recognize the full versions without producing them."
    ],
    sections: [
      {
        type: "dialogue",
        title: "Dialogue: 微信群聊 (WeChat group chat)",
        context: "A group chat the morning after a Chinese exam. Xiaoyu, Mark and Chen Dong are messaging, not speaking — the abbreviations and numbers below are typed, not said aloud.",
        lines: [
          { speaker: "小雨", text: "马克，昨天的考试怎么样啊？", roman: "Mǎkè, zuótiān de kǎoshì zěnmeyàng a?", gloss: "Mark, how was yesterday's exam?" },
          { speaker: "马克", text: "别提了，太难了，我直接躺平。", roman: "Bié tí le, tài nán le, wǒ zhíjiē tǎngpíng.", gloss: "Don't even ask. Way too hard — I've just given up." },
          { speaker: "陈东", text: "哈哈哈，xswl。我也没考好。", roman: "Hāhāhā, xiào sǐ wǒ le. Wǒ yě méi kǎo hǎo.", gloss: "Hahaha, I'm dying. I didn't do well either." },
          { speaker: "小雨", text: "你们别摆烂呀，我复习了三天呢。", roman: "Nǐmen bié bǎilàn ya, wǒ fùxí le sān tiān ne.", gloss: "Don't just let it rot, you two — I revised for three days." },
          { speaker: "马克", text: "666！小雨 yyds，真是学霸。", roman: "Liù liù liù! Xiǎoyǔ yǒngyuǎn de shén, zhēn shì xuébà.", gloss: "Nice! Xiaoyu is a legend — a real top student." },
          { speaker: "小雨", text: "哪有，我们班太卷了，都是被内卷逼的。", roman: "Nǎ yǒu, wǒmen bān tài juǎn le, dōu shì bèi nèijuǎn bī de.", gloss: "Hardly. Our class is so competitive — it's the rat race that does it." },
          { speaker: "马克", text: "你们太牛了。我这种佛系的就算了吧。", roman: "Nǐmen tài niú le. Wǒ zhè zhǒng fóxì de jiù suàn le ba.", gloss: "You lot are amazing. Someone as laid-back as me should just forget it." },
          { speaker: "陈东", text: "周末我们一起去图书馆打卡吧，我帮你复习。", roman: "Zhōumò wǒmen yìqǐ qù túshūguǎn dǎkǎ ba, wǒ bāng nǐ fùxí.", gloss: "Let's go put in some hours at the library at the weekend — I'll help you revise." },
          { speaker: "马克", text: "靠谱！那我请你们喝奶茶。", roman: "Kàopǔ! Nà wǒ qǐng nǐmen hē nǎichá.", gloss: "Solid plan! I'll buy you both bubble tea then." },
          { speaker: "小雨", text: "加油！先这样，88。", roman: "Jiāyóu! Xiān zhèyàng, bā bā.", gloss: "Go for it! That's all for now — bye." }
        ]
      },
      {
        type: "vocab",
        title: "Vocabulary (20 items, each with currency and register)",
        items: [
          {
            term: "牛",
            roman: "niú",
            gloss: "awesome, badass, seriously impressive",
            pos: "adjective (slang)",
            example: { text: "你太牛了！", roman: "Nǐ tài niú le!", gloss: "You're amazing!" },
            linguistics: {
              origin: "metaphor from 'ox'; clipped form of a vulgar phrase · current",
              etymology: [
                "<b>Currency &amp; register (2026):</b> current and thoroughly mainstream. The clipped forms 牛, 太牛了 and 牛啊 are safe with friends, classmates and colleagues of your own age, and appear in advertising. Avoid them with a teacher, a boss or an elder, where 厉害 lìhai or 优秀 yōuxiù is the right word.",
                "The honest etymology: 牛 is a clipping of <b>牛逼 niúbī</b>, a northern vulgarism in which the second syllable is a crude word for female genitalia (written with the substitute graph 逼, chosen only for its sound). Chinese speakers defused it exactly as English defused <i>bloody</i> — by amputating the offensive half. 牛 alone, and the semi-euphemism 牛掰 niúbāi, are what you should produce; the full form is common in male peer speech but is genuinely coarse and has no upside for a learner.",
                "The underlying metaphor is simple bovine strength. Compare 吹牛 chuīniú, <i>to brag</i>, from 吹牛皮 — inflating a cowhide into a raft, a documented northwestern expression for puffing something up."
              ],
              script: [
                "牛 is a pictograph: the oracle-bone form is a bull's head seen from the front, horns curving up, with the muzzle below. Only the horns survive in the modern shape.",
                "As a radical it marks cattle and, by extension, value and sacrifice: 物 wù (thing, originally a coloured ox), 特 tè (special, originally a bull), 牧 mù (to herd), 件 jiàn (item — see unit 8)."
              ],
              phonology: [
                "Second tone, niú. Written online as <b>nb</b> or 牛B, both of which stand for the unclipped form — recognize them, don't type them.",
                "The exclamation frame is 太…了 from unit 8: 太牛了. A bare 牛 as a one-word reply (牛。) is also idiomatic in chat and reads as impressed, or drily sarcastic, depending on context."
              ],
              cognates: [
                "牛人 niúrén (a hotshot), 牛气 niúqi (cocky), 吹牛 chuīniú (to brag), 牛市 niúshì (a bull market — a modern calque from English).",
                "Equivalent clean intensifiers: 厉害 lìhai, 棒 bàng, 绝了 jué le, 强 qiáng. All are safe in every register."
              ]
            }
          },
          {
            term: "加油",
            roman: "jiāyóu",
            gloss: "go for it! keep it up! (literally: add oil)",
            pos: "interjection / verb",
            example: { text: "明天考试，加油！", roman: "Míngtiān kǎoshì, jiāyóu!", gloss: "Exam tomorrow — you've got this!" },
            linguistics: {
              origin: "compound; metaphor from refuelling · evergreen",
              etymology: [
                "<b>Currency &amp; register (2026):</b> evergreen and completely safe. It is colloquial rather than slang, works in every register from a text message to a national broadcast, and can be said to anyone of any age. If you learn one item in this unit, learn this one.",
                "The literal sense is <i>add fuel</i>, and the sporting use is generally traced to motor racing and to cheering at mid-twentieth-century sports events — you shout at the driver to step on the gas. A charming alternative story circulates about a Qing-dynasty official in Guizhou, 张锳, who sent servants to top up the lamp oil of students studying late; it is repeated widely but is not documented as the source, so treat it as folklore.",
                "The phrase is now loaned into English: the Oxford English Dictionary added <i>add oil</i> in 2018, citing Hong Kong English usage."
              ],
              script: [
                "加 is 力 (strength) + 口 (mouth) — traditionally read as adding force to words, i.e. exaggerating, from which the plain sense <i>to add</i> generalized.",
                "油 is 氵 (water) + 由 yóu as phonetic. Neither character was simplified."
              ],
              phonology: [
                "jiāyóu: first tone then second tone. As a cheer it is often shouted with a lengthened second syllable and doubled: 加油加油！",
                "It is a verb-object compound, so it separates: 给他加油 (cheer him on), 加了油 (filled up with petrol — the literal sense is alive at every filling station)."
              ],
              cognates: [
                "加油站 jiāyóuzhàn (petrol station), 加班 jiābān (work overtime), 加上 jiāshang (add), 油 yóu (oil, grease).",
                "Register neighbours: 努力 nǔlì (work hard), 保重 bǎozhòng (take care), 挺住 tǐngzhù (hang in there), 冲 chōng (go! — younger and more slangy)."
              ]
            }
          },
          {
            term: "吃货",
            trad: "吃貨",
            roman: "chīhuò",
            gloss: "foodie, someone who lives to eat",
            pos: "noun (slang)",
            example: { text: "我是个吃货，什么都想尝尝。", roman: "Wǒ shì ge chīhuò, shénme dōu xiǎng chángchang.", gloss: "I'm a total foodie — I want to try everything." },
            linguistics: {
              origin: "compound with the -货 person suffix · current",
              etymology: [
                "<b>Currency &amp; register (2026):</b> current, everyday, affectionate. It is overwhelmingly used about oneself or about close friends; applied to a stranger it can sound like a comment on their appetite, so keep it self-directed until you know someone well.",
                "The interesting part is the suffix. 货 huò means <i>goods, merchandise</i>, and as a person-suffix it is inherently belittling — 蠢货 chǔnhuò (idiot), 笨货 bènhuò (dolt), 二货 èrhuò (fool, affectionate). 吃货 originally belonged to that insulting series, meaning a useless mouth to feed, and was rehabilitated in the 2000s into a badge of pride as food photography and food travel became a national pastime. That amelioration — an insult adopted by its targets — is the same process behind English <i>geek</i> and <i>nerd</i>."
              ],
              script: [
                "吃 is 口 (mouth) + 乞 qǐ as phonetic; 乞 alone means <i>to beg</i>. In older texts the word <i>eat</i> was written 喫, and 吃 originally meant <i>to stutter</i> — the two graphs merged.",
                "貨 is 貝 (cowrie money, see unit 8) + 化 huà as phonetic. Simplified 货 reduces the cowrie to 贝."
              ],
              phonology: [
                "chīhuò: first tone then fourth tone, both syllables full.",
                "The related 干饭人 gànfànrén (<i>rice-demolishing person</i>, a 2020–21 coinage) covers similar ground with more comic energy and is itself now fading."
              ],
              cognates: [
                "好吃 hǎochī (tasty), 吃饭 chī fàn (eat), 小吃 xiǎochī (snacks, street food), 零食 língshí (snacks), 美食 měishí (fine food).",
                "The -货 suffix family: 二货, 蠢货, 硬货 yìnghuò (the real stuff). The -族 and -人 suffixes do related work: 月光族 yuèguāngzú (people who spend their whole salary), 打工人 dǎgōngrén (wage slave)."
              ]
            }
          },
          {
            term: "学霸",
            trad: "學霸",
            roman: "xuébà",
            gloss: "academic star, top student",
            pos: "noun (slang)",
            example: { text: "她每次都考第一，真是学霸。", roman: "Tā měi cì dōu kǎo dì-yī, zhēn shì xuébà.", gloss: "She comes first every time — a total academic star." },
            linguistics: {
              origin: "compound with 霸 'hegemon' · current",
              etymology: [
                "<b>Currency &amp; register (2026):</b> current and stable campus vocabulary, used from primary school to graduate school. 学霸 is a compliment and is safe to say to someone's face. Its opposite <b>学渣</b> xuézhā (academic dud) is <i>self-deprecating only</i> — call yourself 学渣, never someone else.",
                "霸 bà means <i>hegemon, overlord</i>, and is a serious historical term: the 春秋五霸, the Five Hegemons who dominated the Spring and Autumn period, and 霸王 Bàwáng, the title of Xiang Yu. Attaching it to 学 produces <i>the one who dominates studying</i>, and the pattern spread to 麦霸 màibà (a microphone hog at karaoke) and 路霸 lùbà (a road hog).",
                "渣 zhā means <i>dregs, residue</i> — what is left in the pan. The same morpheme gives the much harsher 渣男 zhānán, a man who treats partners badly, which is an insult and not a joke."
              ],
              script: [
                "霸 is 雨 (rain) over 革 and 月; the ancient form related to the moon's phases, and the <i>hegemon</i> sense is generally taken to be a phonetic loan. The graph's transparency was already lost by the Han period.",
                "學/学 was analysed in unit 5: hands, counting rods and a child under a roof."
              ],
              phonology: [
                "xuébà: second tone then fourth tone. Remember that <i>xue</i> is spelled without the umlaut but pronounced with the rounded front vowel.",
                "xuézhā: second then first tone."
              ],
              cognates: [
                "学习 xuéxí (study), 同学 tóngxué (classmate), 霸道 bàdào (domineering), 卷王 juǎnwáng (the class over-achiever, see 内卷 below).",
                "Register-neutral alternatives: 优等生 yōuděngshēng (top student), 成绩很好 chéngjì hěn hǎo (does well academically) — use these in writing or to a teacher."
              ]
            }
          },
          {
            term: "靠谱",
            trad: "靠譜",
            roman: "kàopǔ",
            gloss: "reliable, trustworthy, sensible; (of a plan) solid",
            pos: "adjective (colloquial)",
            example: { text: "这个人很靠谱，你放心。", roman: "Zhège rén hěn kàopǔ, nǐ fàngxīn.", gloss: "He's reliable — don't worry." },
            linguistics: {
              origin: "northern colloquialism · current",
              etymology: [
                "<b>Currency &amp; register (2026):</b> current, extremely common, and by now close to register-neutral in speech — you can say it in an office. It remains colloquial in writing; a formal report would use 可靠 kěkào or 可信 kěxìn. The negative 不靠谱 (flaky, half-baked) is if anything more frequent than the positive.",
                "谱 pǔ is a written score, chart or register — a musical score (乐谱 yuèpǔ), a genealogy (家谱 jiāpǔ), a recipe (菜谱 càipǔ). From the idea of a score comes the colloquial 有谱 yǒu pǔ, <i>to have a plan, to know the score</i>, and 靠谱 is <i>close to the score</i>, i.e. keeping to what was agreed. The expression is a Beijing-and-northeast colloquialism that went national through television and the internet in the 2000s.",
                "It applies to people, plans, information and products alike, which makes it unusually useful: 这个消息不太靠谱 (that news doesn't seem trustworthy)."
              ],
              script: [
                "靠 is 非 over 告 gào as phonetic; the base meaning is <i>to lean on, to depend on</i> (依靠 yīkào).",
                "譜 is 言 (speech) + 普 pǔ as phonetic. Simplified 谱 uses 讠."
              ],
              phonology: [
                "kàopǔ: fourth tone then third tone. In Beijing speech you will hear it with erhua on the noun form: 有谱儿 yǒu pǔr.",
                "Do not confuse it with the standalone exclamation 靠! kào!, which is a mild expletive (a euphemistic clipping of a vulgar phrase) — same character, entirely different pragmatics. Avoid that one."
              ],
              cognates: [
                "可靠 kěkào (reliable, formal), 靠近 kàojìn (approach), 家谱 jiāpǔ (family tree), 离谱 lípǔ (outrageous, way off — literally <i>off the score</i>), 谱曲 pǔqǔ (compose).",
                "离谱 is worth learning alongside it: 这个价格太离谱了 (this price is absurd)."
              ]
            }
          },
          {
            term: "打卡",
            roman: "dǎkǎ",
            gloss: "to clock in; to check in at a hot spot; to log a daily streak",
            pos: "verb (colloquial)",
            example: { text: "这家咖啡馆很火，很多人来打卡。", roman: "Zhè jiā kāfēiguǎn hěn huǒ, hěn duō rén lái dǎkǎ.", gloss: "This cafe is trending — lots of people come to get their photo here." },
            linguistics: {
              origin: "compound with the loan morpheme 卡 'card' · current",
              etymology: [
                "<b>Currency &amp; register (2026):</b> current and expanding. All three senses are live: the original workplace one (上班打卡, clock in), the social-media one (visiting a photogenic location so you can post it), and the habit-tracking one (每天打卡背单词 — log your daily vocabulary streak). Safe in every casual register and normal in workplace speech.",
                "卡 kǎ is a twentieth-century phonetic loan of English <i>card</i>, and it is the same 卡 in 信用卡 xìnyòngkǎ (credit card), 卡片 kǎpiàn and 卡通 kǎtōng (cartoon). The character had a prior life with a different reading, qiǎ, meaning <i>to wedge, to get stuck</i> (卡住 qiǎzhù) — that is its native word.",
                "打 is the all-purpose bleached verb from unit 6 (打电话). 打卡 literally is <i>to hit the card</i>, from punching a time card, and the metaphorical extensions all preserve the idea of registering your presence."
              ],
              script: [
                "卡 is a rare and elegant character: it is 上 (up) over 下 (down) fused into one graph, meaning caught between the two — hence <i>stuck</i>. Its use for <i>card</i> is pure sound.",
                "Traditional and simplified are identical for both characters."
              ],
              phonology: [
                "dǎkǎ: two third tones, so sandhi applies — it is pronounced <b>dákǎ</b>.",
                "The two readings of 卡 are lexically fixed: kǎ in all card senses, qiǎ in 卡住 (stuck), 关卡 guānqiǎ (checkpoint), 发卡 fàqiǎ (hairclip)."
              ],
              cognates: [
                "打卡上班 dǎkǎ shàngbān (clock in), 打卡地 dǎkǎdì (an Instagrammable spot), 信用卡 xìnyòngkǎ, 卡通 kǎtōng, 网红 wǎnghóng (internet-famous, said of places and people).",
                "Related habit vocabulary: 坚持 jiānchí (keep at it), 断更 duàngēng (break a posting streak), 日更 rìgēng (post daily)."
              ]
            }
          },
          {
            term: "躺平",
            roman: "tǎngpíng",
            gloss: "to lie flat: to opt out of the rat race, stop striving",
            pos: "verb (slang)",
            example: { text: "工作太累了，我想躺平。", roman: "Gōngzuò tài lèi le, wǒ xiǎng tǎngpíng.", gloss: "Work is exhausting — I just want to check out." },
            linguistics: {
              origin: "2021 coinage, documented · current but past peak",
              etymology: [
                "<b>Currency &amp; register (2026):</b> current and universally understood, though its shock value has worn off and 摆烂 has taken over some of its territory. Fine among friends and in social media; be careful using it about yourself in a job interview or to a manager, where it reads as an announcement that you have stopped trying. State media ran editorials against it, which gives the word a faint political charge.",
                "The coinage is unusually well documented. In April 2021 a user posting as 好心的旅行家 published a Baidu Tieba essay titled 《躺平即是正义》 (<i>Lying flat is justice</i>), describing a deliberately minimal life with no job, no property and no ambition. It went viral within weeks and became the year's defining word.",
                "It is best understood as the antonym of 内卷 below: if 内卷 is competing harder for no gain, 躺平 is declining to compete. The social backdrop is the 996 working schedule (9am to 9pm, six days), property prices and graduate-job saturation."
              ],
              script: [
                "躺 is 身 (a body — the graph is a pictograph of a pregnant human figure) + 尚 shàng as phonetic.",
                "平 is an indicative graph representing something level, related to 评 píng (to judge, to level out) and 苹."
              ],
              phonology: [
                "tǎngpíng: third tone then second tone.",
                "It is used verbally (我躺平了), attributively (躺平青年, lying-flat youth) and as a noun (躺平主义, lying-flat-ism)."
              ],
              cognates: [
                "摆烂 bǎilàn (let it rot — see below), 内卷 nèijuǎn (involution), 佛系 fóxì (Buddha-like detachment), 996, 打工人 dǎgōngrén (wage worker), 上岸 shàng'àn (to 'reach shore' — pass the civil-service or postgraduate exam).",
                "The nearest English is <i>quiet quitting</i> or <i>checking out</i>, both of which arrived a year later and independently."
              ]
            }
          },
          {
            term: "内卷",
            trad: "內捲",
            roman: "nèijuǎn",
            gloss: "involution: pointless intensified competition; a rat race with no prize",
            pos: "noun / verb (slang from academia)",
            example: { text: "我们公司太内卷了，大家都加班。", roman: "Wǒmen gōngsī tài nèijuǎn le, dàjiā dōu jiābān.", gloss: "Our company is such a rat race — everyone works overtime." },
            linguistics: {
              origin: "academic loan translation, popularized 2020 · current",
              etymology: [
                "<b>Currency &amp; register (2026):</b> current and fully mainstream — it appears in newspapers, in HR discussions and in casual chat, which is unusual for a slang term. Safe in almost any context except the most formal writing. The verbal use 卷 juǎn (我不想卷了 — I don't want to keep grinding) is the more slangy half.",
                "This is a genuine academic import. The English term <i>involution</i> was used by the anthropologist Clifford Geertz in <i>Agricultural Involution</i> (1963) to describe Javanese rice farming absorbing ever more labour without raising per-capita output; the historian Philip C. C. Huang (黄宗智) applied it to Chinese peasant economies, and the Chinese rendering 内卷化 nèijuǎnhuà circulated in sociology for decades.",
                "It escaped the seminar room around 2020, boosted by viral photographs of Tsinghua University students coding on laptops while riding bicycles. The everyday meaning narrowed to: everybody works harder, nobody ends up better off. 咬文嚼字 named it a top-ten buzzword of 2020."
              ],
              script: [
                "内 is a pictograph of entering an enclosure — <i>inside</i>. 卷 juǎn is <i>to roll up</i>, with a scroll image behind it; the traditional form for the verb is 捲, with a hand radical, while 卷 juàn in the fourth tone is a bound volume or an exam paper (试卷 shìjuàn).",
                "In simplified writing 卷 covers both, so 内卷 is written the same either way in the mainland; Taiwan writes 內捲 for the verb sense."
              ],
              phonology: [
                "nèijuǎn: fourth tone then third tone. The 卷 here is the third-tone <i>roll</i> reading, not the fourth-tone <i>volume</i> reading.",
                "Highly productive: 卷王 juǎnwáng (the person who out-grinds everyone), 卷不动了 juǎn bu dòng le (I can't keep grinding), 反卷 fǎnjuǎn (anti-grind)."
              ],
              cognates: [
                "躺平 tǎngpíng (its antonym), 鸡娃 jīwá (to push one's child relentlessly), 996, 加班 jiābān (overtime), 竞争 jìngzhēng (competition, neutral).",
                "Sino-Korean and Sino-Japanese have not borrowed 内卷; Japanese discussions of the same phenomenon use インボリューション or native phrasing."
              ]
            }
          },
          {
            term: "佛系",
            roman: "fóxì",
            gloss: "Buddha-like: easygoing to the point of indifference, whatever-happens-happens",
            pos: "adjective (slang)",
            example: { text: "他很佛系，从来不跟人争。", roman: "Tā hěn fóxì, cónglái bù gēn rén zhēng.", gloss: "He's very zen about everything — he never competes with anyone." },
            linguistics: {
              origin: "Japanese loan via a 2017 viral article · fading",
              etymology: [
                "<b>Currency &amp; register (2026):</b> <b>fading</b>. Everyone still understands it, but it peaked in 2017–2018 and now carries a faint whiff of that moment; 躺平 and 摆烂 cover much of the same ground with more edge. Perfectly safe and inoffensive — it is the mildest word in this unit.",
                "The term is a Japanese import. Japanese women's magazines around 2014 described 仏男子 <i>butsu danshi</i>, 'Buddha-like young men' with no interest in dating or striving. Chinese media picked it up, and a December 2017 WeChat article titled 《第一批90后已经出家了》 (<i>The first batch of nineties kids have already become monks</i>) made it explode.",
                "Note that it has almost nothing to do with actual Buddhism. 佛 here is a shorthand for serene detachment, and practising Buddhists sometimes object to the usage — worth knowing before you use it in front of one."
              ],
              script: [
                "佛 is 亻 (person) + 弗 fú as phonetic, and is itself an ancient transliteration: 佛陀 fótuó renders Sanskrit <i>buddha</i>. The Middle Chinese reading was closer to <i>but</i>, which is why the character was chosen and why Japanese has ブツ butsu.",
                "系 xì means <i>system, lineage, type</i>. As a suffix, X系 is modelled directly on the Japanese 〜系 <i>-kei</i> productive suffix (草食系 herbivore-type, 体育会系 sporty-type)."
              ],
              phonology: [
                "fóxì: second tone then fourth tone.",
                "The suffix spawned a short-lived family: 佛系青年, 佛系恋爱, 佛系员工, 咸鱼系 xiányúxì (salted-fish type, i.e. inert). Most of those have already died; the bare 佛系 survives."
              ],
              cognates: [
                "佛教 Fójiào (Buddhism), 随缘 suíyuán (let fate decide — the sincere religious version of the same idea), 无所谓 wúsuǒwèi (couldn't care less), 躺平, 咸鱼 xiányú (a salted fish, i.e. a slacker).",
                "The Japanese-suffix layer of Chinese slang also includes 达人 dárén (expert, from 達人 tatsujin), 人气 rénqì (popularity, from 人気 ninki), 王道 wángdào (the orthodox best choice, from 王道 ōdō) and 宅 below."
              ]
            }
          },
          {
            term: "吐槽",
            roman: "tùcáo",
            gloss: "to roast, to snark at, to call out something ridiculous",
            pos: "verb (slang)",
            example: { text: "大家都在吐槽这部电影的结局。", roman: "Dàjiā dōu zài tùcáo zhè bù diànyǐng de jiéjú.", gloss: "Everyone's roasting the ending of this film." },
            linguistics: {
              origin: "Japanese loan via Taiwanese Mandarin and Hokkien · current",
              etymology: [
                "<b>Currency &amp; register (2026):</b> current and fully naturalized; it appears in TV show titles and press headlines. Safe with peers and in informal writing. It implies witty criticism rather than anger — if you are actually complaining, that is 抱怨 bàoyuàn.",
                "The word has a three-step history. In Japanese <i>manzai</i> comedy, ツッコミ <i>tsukkomi</i> is the straight man who cuts in to point out the fool's nonsense. Taiwanese media rendered the concept with the characters 吐槽, borrowing a Taiwanese Hokkien expression <b>thuh-tshàu</b> (written 黜臭), literally <i>to poke out someone's stink</i>, i.e. to expose their flaws. Mainland fandom picked 吐槽 up through anime and subtitling communities around 2010, and it spread from there.",
                "So the characters are a Hokkien-based phonetic rendering, not a semantic composition: reading 吐槽 as <i>vomit into a trough</i> is a folk analysis, however memorable."
              ],
              script: [
                "吐 is 口 (mouth) + 土 tǔ as phonetic; it means <i>to spit out</i> (tǔ) or <i>to vomit</i> (tù).",
                "槽 is 木 (wood) + 曹 cáo as phonetic: a trough or a groove (水槽 shuǐcáo, sink). Its presence here is phonetic accident, not meaning."
              ],
              phonology: [
                "The standard reading is tùcáo (fourth tone on 吐), though tǔcáo is widely heard and dictionaries disagree — a live variation.",
                "Grammatically it is a verb-object compound and separates: 吐了他一顿槽 (gave him a proper roasting), 无力吐槽 (too tired even to snark)."
              ],
              cognates: [
                "吐槽大会 Tùcáo Dàhuì (the Chinese <i>Roast</i> TV format), 槽点 cáodiǎn (a roastable flaw), 神吐槽 shéntùcáo (a brilliant takedown), 抱怨 bàoyuàn (to complain, neutral).",
                "Fellow Japanese loans in the fandom layer: 宅 zhái, 萌 méng (cute, from 萌え moe), 声优 shēngyōu (voice actor, 声優), 违和感 wéihégǎn (a sense of something being off, 違和感)."
              ]
            }
          },
          {
            term: "宅",
            roman: "zhái",
            gloss: "to be a homebody; indoorsy, shut-in",
            pos: "adjective / verb (slang)",
            example: { text: "周末我就宅在家里看剧。", roman: "Zhōumò wǒ jiù zhái zài jiā li kàn jù.", gloss: "At weekends I just hole up at home watching shows." },
            linguistics: {
              origin: "Japanese loan (otaku), semantically shifted · current",
              etymology: [
                "<b>Currency &amp; register (2026):</b> current and mild. Mostly self-applied and affectionate; 宅男 zháinán and 宅女 zháinǚ are usually neutral-to-jokey but can be dismissive when said about someone else, so keep it first-person.",
                "The source is Japanese オタク <i>otaku</i>, written 御宅 — originally an over-formal second-person pronoun (literally <i>your honourable house</i>) used between obsessive hobbyists, which the essayist 中森明夫 turned into a label for the subculture in 1983. Taiwan borrowed it as 御宅族 and clipped it to 宅.",
                "The meaning shifted in transit, and this is the linguistically interesting part: in Japanese <i>otaku</i> is about obsessive fandom, whereas Chinese 宅 is about <b>staying indoors</b> — the character's own meaning, <i>residence</i>, reasserted itself and pulled the loan's semantics with it. A Chinese 宅男 may simply be someone who never goes out. For the fandom sense Chinese uses 迷 mí or 粉 fěn."
              ],
              script: [
                "宅 is 宀 (roof) + 乇 tuō as phonetic, meaning a dwelling or residence — 住宅 zhùzhái (housing), 宅子 zháizi (a house).",
                "Neither traditional nor simplified differ."
              ],
              phonology: [
                "Second tone, zhái, retroflex initial. The verbal use (宅在家) is a Chinese innovation — Japanese cannot use オタク that way.",
                "宅 also survives in the formal reading of property vocabulary: 住宅区 zhùzháiqū (residential district), where nothing slangy is intended."
              ],
              cognates: [
                "宅男 zháinán, 宅女 zháinǚ, 宅在家 zhái zài jiā, 死宅 sǐzhái (a hardcore shut-in, self-deprecating), 出门 chūmén (go out).",
                "Neutral alternatives for writing: 喜欢待在家里 xǐhuan dāi zài jiā li, 深居简出 shēnjū-jiǎnchū (literary)."
              ]
            }
          },
          {
            term: "摆烂",
            trad: "擺爛",
            roman: "bǎilàn",
            gloss: "to let it rot: to stop even pretending to try, to tank deliberately",
            pos: "verb (slang)",
            example: { text: "作业太多了，我决定摆烂。", roman: "Zuòyè tài duō le, wǒ juédìng bǎilàn.", gloss: "There's too much homework — I've decided to just let it all fall apart." },
            linguistics: {
              origin: "sports commentary term, generalized 2021–22 · current",
              etymology: [
                "<b>Currency &amp; register (2026):</b> current, and the liveliest of the give-up words. Casual and self-deprecating; do not use it about someone else's work, where it is an accusation of deliberate sabotage.",
                "The term comes from Chinese basketball commentary, where 摆烂 translated the NBA practice of <i>tanking</i> — losing games on purpose to secure a better draft pick. Around 2021–2022 it jumped to general use among students and office workers.",
                "It is usefully distinct from 躺平. 躺平 is a considered withdrawal from competition, almost a philosophy; 摆烂 is more active and more comic — you are still nominally in the game, but you have stopped maintaining appearances. Where 躺平 says <i>I opt out</i>, 摆烂 says <i>let it burn</i>."
              ],
              script: [
                "摆/擺 is 扌 (hand) + 罷 bà as phonetic: to place, to arrange, to display, to sway. Simplified 摆 uses the abbreviated 罢.",
                "烂/爛 is 火 (fire) + 闌 lán as phonetic: overcooked, rotten, mushy. Simplified 烂 uses 兰."
              ],
              phonology: [
                "bǎilàn: third tone then fourth tone, so 摆 keeps its full dipping contour.",
                "Common frames: 直接摆烂 (just let it rot), 摆烂了 (I've given up), 摆烂式 X (X done in give-up mode)."
              ],
              cognates: [
                "躺平 tǎngpíng, 佛系 fóxì, 破罐子破摔 pò guànzi pò shuāi (a mature idiom with the same meaning: if the pot is cracked, smash it), 划水 huáshuǐ (to coast, to slack off at work).",
                "烂 also gives 烂尾 lànwěi (an abandoned unfinished project, especially a building) and 烂片 lànpiàn (a terrible film)."
              ]
            }
          },
          {
            term: "破防",
            roman: "pòfáng",
            gloss: "to have one's defences broken: to be emotionally got to, to lose composure",
            pos: "verb (slang)",
            example: { text: "看到那个视频，我直接破防了。", roman: "Kàndào nàge shìpín, wǒ zhíjiē pòfáng le.", gloss: "That video completely got to me." },
            linguistics: {
              origin: "gaming term, generalized 2020–21 · current",
              etymology: [
                "<b>Currency &amp; register (2026):</b> current; named a top-ten buzzword by 咬文嚼字 for 2021 and still in wide use. Casual and safe — it describes being moved, wounded or overwhelmed, and works for both tears at a documentary and a jab that landed.",
                "The origin is video-game mechanics: 破防 is <i>breaking through armour or a defensive stance</i>, damage that gets past a shield. Fighting games and MMOs used it literally; players began using it for the moment when a comment or a scene got past their emotional guard, and it spread to Weibo and Bilibili around 2020.",
                "The metaphor — psychological composure as armour — is transparent enough that Chinese speakers with no gaming background adopted it immediately, which is the usual condition for a gaming term escaping into general use."
              ],
              script: [
                "破 is 石 (stone) + 皮 pí as phonetic: to break, to split.",
                "防 is 阝 on the left (the 阜 mound radical, not the 邑 settlement radical — see 都 in unit 7) + 方 fāng as phonetic: originally a dyke or earthwork, hence <i>to defend against</i>."
              ],
              phonology: [
                "pòfáng: fourth tone then second tone.",
                "Almost always used with 了: 破防了, 我破防了, 直接破防. Without 了 it sounds like the literal gaming sense."
              ],
              cognates: [
                "防守 fángshǒu (defend), 国防 guófáng (national defence), 破 pò in 破产 pòchǎn (go bankrupt) and 突破 tūpò (break through).",
                "Neighbouring emotion slang: 泪目 lèimù (misty-eyed), emo (used as a verb: 我emo了, I'm in a funk — itself fading), 心态崩了 xīntài bēng le (my composure collapsed)."
              ]
            }
          },
          {
            term: "社死",
            roman: "shèsǐ",
            gloss: "social death: excruciating public embarrassment",
            pos: "noun / verb (slang)",
            example: { text: "我叫错了老师的名字，当场社死。", roman: "Wǒ jiào cuò le lǎoshī de míngzi, dāngchǎng shèsǐ.", gloss: "I got the teacher's name wrong — I wanted the floor to swallow me." },
            linguistics: {
              origin: "clipping of an academic calque, repurposed 2020 · current",
              etymology: [
                "<b>Currency &amp; register (2026):</b> current, hyperbolic, comic. Used about yourself or, sympathetically, about a friend's mishap. Note that the full phrase can also be used seriously about someone whose reputation has been destroyed online, which is a much heavier matter — read the context before joining in.",
                "社死 is a clipping of 社会性死亡 shèhuìxìng sǐwáng, a literal calque of the sociological term <i>social death</i> (used in the study of slavery and of the dying). Around 2020 Chinese internet users repurposed the phrase for the specific sensation of wanting to disappear after an embarrassing moment in public, and the four-syllable original was quickly clipped to two.",
                "Clipping long compounds to two syllables is the dominant word-shortening strategy in Chinese: 内卷 from 内卷化, 高铁 from 高速铁路, 空调 from 空气调节, 网红 from 网络红人. Two syllables is the natural size of a Chinese word, and everything drifts toward it."
              ],
              script: [
                "社 is 礻 (the altar/ritual radical — note the single dot, versus 衤 for clothing) + 土 (earth): originally the god of the soil and the community altar, hence <i>community, society</i>.",
                "死 shows 歹 (fragmentary bones) beside a kneeling human figure: mourning the dead. Both characters are unsimplified."
              ],
              phonology: [
                "shèsǐ: fourth tone then third tone.",
                "The hyperbolic 死 here connects to the productive V+死 pattern in the grammar section: 笑死 (die laughing), 累死 (dead tired), 饿死 (starving)."
              ],
              cognates: [
                "社会 shèhuì (society), 尴尬 gāngà (awkward — the neutral word), 丢脸 diūliǎn / 丢人 diūrén (lose face), 脚趾抠地 jiǎozhǐ kōu dì (curling your toes into the floor with embarrassment — a vivid 2020s companion phrase).",
                "For formal writing use 非常尴尬 or 十分难堪 nánkān."
              ]
            }
          },
          {
            term: "666",
            roman: "liù liù liù",
            gloss: "nice! / that was skilful (typed praise)",
            pos: "number slang",
            audio: "六六六",
            example: { text: "你这波操作666！", roman: "Nǐ zhè bō cāozuò liù liù liù!", gloss: "That move of yours was slick!" },
            linguistics: {
              origin: "number rebus on 溜 'slick' · current",
              etymology: [
                "<b>Currency &amp; register (2026):</b> current, very common, typed far more often than said. Chat, livestream comments and game voice-chat only — never in an email, a report or a message to a superior.",
                "The rebus is on 溜 liù, a northern colloquial adjective meaning <i>smooth, slick, deft</i> (手很溜, very handy). Written as the digit 6, and repeated for emphasis, it spread through livestreaming platforms and MOBA game chat around 2015 — typing 666 is faster than typing praise, which is the whole point in a scrolling comment feed.",
                "It is now also used adjectivally with the digit standing in for the word: 你好6 (you're so good), 太6了."
              ],
              script: [
                "The digit is the whole point — there is no character. Written out it would be 溜溜溜, which almost nobody types.",
                "The Chinese numeral 六 appears in the formal banking form 陆; neither is used here."
              ],
              phonology: [
                "Read aloud as liù liù liù, all fourth tone. The rebus works because 6 liù and 溜 liù are exact homophones including tone — one of the few number-slang mappings that is phonologically clean.",
                "A cross-cultural warning worth having: 666 has strongly negative connotations in the Christian West. Sending it to a Western colleague to mean <i>well done</i> can land very oddly."
              ],
              cognates: [
                "牛 niú, 厉害 lìhai, 绝了 jué le, 秀 xiù (from English <i>show</i>: 真秀, that was a flex), 操作 cāozuò (a play, a manoeuvre — gaming usage).",
                "Sibling number slang: 233 (laughing, from emoticon no. 233 on the old Mop forum), 555 (crying, for 呜呜呜 wūwūwū), 995 (救救我, help me)."
              ]
            }
          },
          {
            term: "88",
            roman: "bā bā",
            gloss: "bye-bye (sign-off)",
            pos: "number slang",
            audio: "八八",
            example: { text: "我先走了，88！", roman: "Wǒ xiān zǒu le, bā bā!", gloss: "I'm off — bye!" },
            linguistics: {
              origin: "number rebus on the English loan 拜拜 · dated",
              etymology: [
                "<b>Currency &amp; register (2026):</b> <b>dated</b>. Universally understood, but it belongs to the QQ era of the 2000s and now reads as either nostalgic or as the mark of an older user. Younger speakers type 拜拜, 走了, 撤了 chè le or simply stop replying. Included here precisely because recognizing dated slang matters as much as producing current slang.",
                "The chain is two steps: English <i>bye-bye</i> was borrowed into Mandarin as 拜拜 bàibài (using 拜, <i>to salute</i>, purely for sound), and the digit 8 bā then stood in for 拜 bài. Note that the tones do not match — 8 is first tone, 拜 is fourth — which is normal for this system.",
                "The variant 886 adds 6 for 了 le, giving 拜拜了. 88 was also convenient because 8 is the lucky digit, homophonous with 发 fā (to prosper)."
              ],
              script: [
                "No characters involved. The written-out form is 拜拜.",
                "拜 depicts two hands raised in salute; it is the character in 拜年 bàinián (pay a New Year call) and 崇拜 chóngbài (to worship)."
              ],
              phonology: [
                "Read as bā bā, both first tone, even though the word it encodes is bàibài. This tone-looseness is characteristic: number rebus matches consonants and vowels approximately and ignores tone almost entirely.",
                "Contrast 666, where the tones do happen to match. The system tolerates both."
              ],
              cognates: [
                "拜拜 bàibài (bye), 再见 zàijiàn (goodbye, neutral and always safe), 回头见 huítóu jiàn (see you later), 下次聊 xiàcì liáo (talk next time).",
                "Other dated digit slang from the same era: 3Q (thank you), 7456 (气死我了, I'm furious), 748 (去死吧 — rude, do not use)."
              ]
            }
          },
          {
            term: "520",
            roman: "wǔ èr líng",
            gloss: "I love you; May 20th, an informal Valentine's Day",
            pos: "number slang",
            audio: "五二零",
            example: { text: "今天520，他给女朋友发了个红包。", roman: "Jīntiān wǔ èr líng, tā gěi nǚpéngyou fā le ge hóngbāo.", gloss: "It's the 20th of May, so he sent his girlfriend a red envelope." },
            linguistics: {
              origin: "number rebus on 我爱你 · current, mainly as a date",
              etymology: [
                "<b>Currency &amp; register (2026):</b> current, but its centre of gravity has moved. As a typed substitute for <i>I love you</i> it is a little sweet and a little dated; as the name of the 5/20 commercial romance holiday it is entirely current and appears in advertising everywhere. Use with a partner, not with friends.",
                "The mapping to 我爱你 wǒ ài nǐ is <b>loose</b>, and it is worth being honest about that: 5 wǔ for 我 wǒ is a stretch, 2 èr for 爱 ài is weaker still, and 0 líng for 你 nǐ is essentially conventional. This code was not derived, it was learned — it comes from 1990s pager (BP机) culture, when the only thing a numeric pager could display was digits, so couples and friends developed an agreed numeric shorthand and passed it on.",
                "Once fixed, the convention outlived the technology. 5/20 became an unofficial lovers' day in the 2010s, boosted by e-commerce, and gift amounts of ¥520 or ¥5.20 in a WeChat red envelope are now a standard gesture. Its sibling 1314 stands for 一生一世 yìshēng yíshì, <i>for a whole lifetime</i>, giving the combined 520 1314."
              ],
              script: [
                "Digits only. Written out: 我爱你.",
                "爱/愛 lost its 心 (heart) in simplification — 愛 contained a heart in the middle, 爱 replaces it with 友. Critics of the reform like to point out that simplified love is heartless; supporters point out that the simplified form comes from centuries-old cursive."
              ],
              phonology: [
                "Read as wǔ èr líng. Speakers occasionally say wǔ èr líng aloud as a playful way of not saying 我爱你 outright, which is itself telling: direct declarations of love are less common in Chinese than in English, and the number provides distance.",
                "Related digit values: 1 yī can stand for 一 or 要 yào; 4 sì for 世 shì or 是 shì; 9 jiǔ for 久 jiǔ (lasting) or 救 jiù (save); 7 qī for 亲 qīn (kiss) or 去 qù."
              ],
              cognates: [
                "1314 (一生一世), 521 (我愿意, I'm willing), 995 (救救我), 情人节 Qíngrénjié (Valentine's Day), 七夕 Qīxī (the traditional Chinese romantic festival), 红包 hóngbāo (red envelope).",
                "Note that 250 èrbǎiwǔ is a number to avoid entirely when talking about people: it is an old, still-current insult meaning <i>idiot</i>, and prices and quantities are often adjusted to dodge it."
              ]
            }
          },
          {
            term: "yyds",
            roman: "yǒngyuǎn de shén",
            gloss: "the GOAT, absolute legend (literally: eternal god)",
            pos: "pinyin-initial abbreviation",
            audio: "永远的神",
            example: { text: "这家店的牛肉面yyds！", roman: "Zhè jiā diàn de niúròumiàn yǒngyuǎn de shén!", gloss: "The beef noodles at this place are unbeatable!" },
            linguistics: {
              origin: "pinyin-initial abbreviation of 永远的神 · current but past peak",
              etymology: [
                "<b>Currency &amp; register (2026):</b> current and universally understood, but well past its 2021 peak, and heavy use by brands and by state media accounts has dulled it. Among younger users it is now often slightly ironic. Typed, not spoken — though it is occasionally said aloud as the four English letters. Chat and social media only.",
                "The phrase is 永远的神 yǒngyuǎn de shén, <i>forever a god</i>. It is generally traced to the League of Legends streamer 山泥若, who used it around 2019 in praise of the retired professional player Uzi; Bilibili comment culture reduced it to initials and generalized it from players to food, songs, films and anything else worth idolizing.",
                "咬文嚼字 listed it among the top buzzwords of 2021, which — as with most words on that list — is roughly the point at which a term begins its decline."
              ],
              script: [
                "No characters are typed; the point of the form is that four keystrokes replace three characters on a phone keyboard.",
                "神 shén is 礻 (altar) + 申 (the lightning graph seen in 电 in unit 6): the powers of the sky. It means god, spirit, and colloquially <i>uncanny, brilliant</i> — 神了! (amazing!)."
              ],
              phonology: [
                "The abbreviation takes the first letter of each syllable's pinyin: <b>y</b>ǒng<b>y</b>uǎn <b>d</b>e <b>sh</b>én → yyds. Note that the digraph sh contributes only s — the system uses single letters.",
                "This makes abbreviations ambiguous in principle (yyds could decode many ways) and they are disambiguated entirely by convention and context. Set the TTS to read the full phrase, since the letters have no natural Mandarin pronunciation."
              ],
              cognates: [
                "Same family: xswl (笑死我了), dbq (对不起, sorry), nsdd (你说得对, you're right), yysy (有一说一, to be fair), awsl (啊我死了, I'm dead — of cuteness), bhys (不好意思, excuse me), u1s1 (有一说一 with the digit 1 for 一).",
                "Full-word equivalents that never date: 太厉害了, 最棒的, 无敌 wúdí (unbeatable)."
              ]
            }
          },
          {
            term: "xswl",
            roman: "xiào sǐ wǒ le",
            gloss: "LMAO, dying of laughter",
            pos: "pinyin-initial abbreviation",
            audio: "笑死我了",
            example: { text: "他发的那个视频，xswl。", roman: "Tā fā de nàge shìpín, xiào sǐ wǒ le.", gloss: "That video he posted — I'm dying." },
            linguistics: {
              origin: "pinyin-initial abbreviation of 笑死我了 · current",
              etymology: [
                "<b>Currency &amp; register (2026):</b> current and stable, with less brand contamination than yyds. Typed only, in chat and comments. It is the direct functional equivalent of English <i>lmao</i>, with the same restriction to informal contexts.",
                "The source phrase 笑死我了 is not slang at all — it is ordinary colloquial Mandarin, <i>laughed me to death</i>. What is new is the abbreviation, which follows the same first-letter rule as yyds: <b>x</b>iào <b>s</b>ǐ <b>w</b>ǒ <b>l</b>e.",
                "Alongside it you will see the older 哈哈哈 (any number of 哈), 2333 (from the Mop forum emoticon) and, in Cantonese-influenced contexts, 笑死."
              ],
              script: [
                "笑 is 竹 (bamboo) over 夭 — a person bending. The Shuowen's account of the graph was already uncertain in the Han dynasty, and the origin is genuinely unresolved; a popular story that it shows bamboo bending in the wind is decoration, not evidence.",
                "死 is the bones-and-mourner graph described under 社死."
              ],
              phonology: [
                "Read the full phrase aloud: xiào sǐ wǒ le. Note the third-tone sandhi in 死我 — sǐ wǒ becomes <i>sí wǒ</i>.",
                "笑死 is a V + 死 construction: 死 functions as an extreme-degree complement, not a literal death. See the grammar section."
              ],
              cognates: [
                "笑死 xiàosǐ, 笑不活了 xiào bu huó le (can't survive the laughing), 好笑 hǎoxiào (funny), 搞笑 gǎoxiào (comedic), 梗 gěng (a joke, a meme).",
                "The V+死 family: 累死了 (exhausted), 饿死了 (starving), 气死我了 (furious), 热死了 (boiling), 吓死我了 (scared to death)."
              ]
            }
          },
          {
            term: "给力",
            trad: "給力",
            roman: "gěilì",
            gloss: "awesome, delivering the goods, up to the job",
            pos: "adjective (slang)",
            example: { text: "这次的活动真给力！", roman: "Zhè cì de huódòng zhēn gěilì!", gloss: "This event really delivered!" },
            linguistics: {
              origin: "2010 fan-dub coinage · dated",
              etymology: [
                "<b>Currency &amp; register (2026):</b> <b>dated</b>. Everybody understands it and nothing about it is rude, but it dates the speaker to around 2010–2012 — roughly the effect of saying <i>epic fail</i> in English today. It survives in advertising copy and in the speech of people who were young when it peaked. Listed here as a calibration point: this is what a dead buzzword looks like while it is still fully intelligible.",
                "Its rise is well documented. The word came from a Chinese fan-dub of a Japanese anime in 2010, where 不给力 was used for something disappointing. It went viral, and on 10 November 2010 the 人民日报 ran a front-page headline using 给力 — a state newspaper adopting net slang was itself the news, and the word peaked immediately afterwards.",
                "The mock-English derivative <i>geilivable</i> circulated as a joke at the time and is now a museum piece."
              ],
              script: [
                "给 is the 給 of unit 6 (silk + 合), here in its gěi reading; 力 is a pictograph, usually read as a plough or a flexed arm, meaning strength.",
                "Compositionally 给力 is <i>to give strength</i>, which reads as a transparent compound even to someone who has never met the slang."
              ],
              phonology: [
                "gěilì: third tone then fourth tone, so 给 keeps its full dipping contour.",
                "The negative 不给力 (underwhelming, not up to it) was and is at least as common as the positive."
              ],
              cognates: [
                "有力 yǒulì (forceful), 力量 lìliàng (strength), 努力 nǔlì (make an effort), 牛 niú and 绝了 jué le (the current-generation replacements).",
                "Other words with the same trajectory, all now dated: 囧 jiǒng (embarrassed, using an ancient character as an emoticon face, c. 2008), 神马 shénmǎ (a homophone respelling of 什么, c. 2010), 亲 qīn (chummy Taobao vocative, c. 2012), 我也是醉了 (c. 2014)."
              ]
            }
          }
        ]
      },
      {
        type: "grammar",
        title: "Grammar & mechanics of casual Chinese",
        points: [
          {
            name: "Colloquial register: particles, 儿化 and chat texture",
            pattern: "Sentence + 啊 / 呀 / 吧 / 呗 / 嘛 / 啦    ·    Noun/Verb + 儿",
            explanation: [
              "Textbook sentences end cleanly; real casual Chinese almost never does. Sentence-final particles carry the speaker's attitude, and leaving them off is the single biggest reason a grammatically perfect learner sounds stiff. <b>啊</b> a softens and warms a question (你怎么样啊?); <b>吧</b> ba proposes or supposes (走吧 — let's go; 你是学生吧? — you're a student, right?); <b>嘛</b> ma marks something as obvious (这很简单嘛); <b>呗</b> bei is resigned or dismissive, roughly <i>well, obviously / fine then</i> (不会就学呗 — if you can't do it, then learn, duh); <b>啦</b> la is 了 and 啊 fused, cheerful and conclusive (好啦好啦).",
              "啊 has a real phonological rule attached, and it is one of the few places where casual speech is more complex than the standard. The particle assimilates to the preceding sound, and the spelling follows: after -a, -o, -e, -i, -ü it becomes 呀 ya (好呀, 是呀); after -u and -ao it becomes 哇 wa (好苦哇); after -n it becomes 哪 na (真难哪); after -ng it stays 啊 but is pronounced with a nasal onset. Native typists apply this automatically.",
              "儿化 rhotacization is the other texture marker, strongest in Beijing and the northeast, near-absent in the south and in Taiwan. You have met it in 哪儿, 事儿, 空儿. In casual speech it spreads to many more nouns — 一会儿 yíhuìr (in a moment), 差点儿 chàdiǎnr (nearly), 玩儿 wánr (to play, to hang out) — and it always signals informality. Chat adds its own conventions on top: repetition scales emotion (哈哈 is a polite acknowledgement, 哈哈哈哈哈 is genuine laughter), and a bare single 嗯 or 哦 reads as cold, which is why people type 嗯嗯 and 好的好的."
            ],
            examples: [
              { text: "你今天怎么样啊？", roman: "Nǐ jīntiān zěnmeyàng a?", gloss: "So how are you doing today?" },
              { text: "走吧，我们去打卡。", roman: "Zǒu ba, wǒmen qù dǎkǎ.", gloss: "Come on, let's go check the place out." },
              { text: "不会就学呗。", roman: "Bú huì jiù xué bei.", gloss: "If you can't do it, then learn it — obviously." },
              { text: "这个我早就知道了嘛。", roman: "Zhège wǒ zǎo jiù zhīdào le ma.", gloss: "Come on, I knew that ages ago." },
              { text: "我们一会儿再聊，好吧？", roman: "Wǒmen yíhuìr zài liáo, hǎo ba?", gloss: "Let's talk in a bit, OK?" }
            ]
          },
          {
            name: "The number-rebus system (666, 520, 88)",
            pattern: "digit(s) → homophonous or near-homophonous syllable(s)",
            explanation: [
              "Chinese number slang is a genuine rebus code, and it comes from a specific technology. In the 1990s numeric pagers (BP机) could display digits and nothing else, so users built an agreed vocabulary of digit strings. When QQ arrived the code migrated to chat, and parts of it are still in daily use thirty years later.",
              "The mappings, in rough order of how well they actually work phonologically: 6 liù = 溜 liù <i>slick</i> (exact, tone included); 9 jiǔ = 久 jiǔ <i>lasting</i> or 救 jiù <i>save</i>; 8 bā = 拜 bài <i>bye</i> or 发 fā <i>prosper</i>; 1 yī = 一 or 要 yào; 4 sì = 世 shì or 是 shì; 2 èr = 爱 ài; 0 líng = 你 nǐ or 零. Notice that the list degrades: the first few are true homophones, the last few are barely similar. <b>Tone is ignored throughout</b>, and so, often, is the initial consonant. This is a learned code, not a derivable one — you memorize the strings, you do not compute them.",
              "The strings in current use: 666 (nice/skilful), 520 (我爱你), 1314 (一生一世, forever), 995 (救救我, help), 555 (呜呜呜, crying), 233 (laughing, from an old forum emoticon number rather than from sound at all), 88/886 (bye), 3Q (thank you, mixing a digit with a letter). Dated but recognizable: 7456 (气死我了).",
              "Two safety notes. <b>250</b> èrbǎiwǔ means <i>idiot</i> and has done for centuries; it is avoided in prices and quantities involving people. <b>748</b> encodes 去死吧 and is genuinely rude. And remember that 666 reads as satanic to many Western readers — the rebus does not travel."
            ],
            examples: [
              { text: "你太厉害了，666！", roman: "Nǐ tài lìhai le, liù liù liù!", gloss: "You're amazing — nice one!" },
              { text: "520 1314", roman: "wǔ èr líng, yī sān yī sì", gloss: "I love you, for a whole lifetime." },
              { text: "作业写不完了，995！", roman: "Zuòyè xiě bu wán le, jiǔ jiǔ wǔ!", gloss: "I'll never finish this homework — help!" },
              { text: "我先下线了，886。", roman: "Wǒ xiān xiàxiàn le, bā bā liù.", gloss: "I'm logging off — byeee." }
            ]
          },
          {
            name: "How internet words are built: initials, V+死, and productive suffixes",
            pattern: "pinyin initials (yyds)    ·    Verb + 死 (+ 我) + 了    ·    X系 / X族 / X王 / X人 / X货",
            explanation: [
              "<b>Pinyin-initial abbreviation</b> is the newest layer and the most alien to a learner. Take a phrase, take the first letter of each syllable's pinyin, type that: 永远的神 → yyds, 笑死我了 → xswl, 对不起 → dbq, 你说得对 → nsdd, 不好意思 → bhys, 有一说一 → yysy. Digraphs contribute one letter only (shén → s). The results are massively ambiguous in principle and completely unambiguous in practice, because only a few dozen are conventional. They are a <b>written</b> phenomenon: most have no spoken form, and when a text-to-speech engine meets one it should read the underlying phrase.",
              "<b>Verb + 死</b> is a degree complement, and it connects directly to the 得 complement you learned in unit 7. Where 说得很快 uses 得 plus an adjective, 笑死我了 uses 死 as a bound extreme: <i>laughed me to death</i>. It is entirely conventional and no one hears a real death in it — 累死了 (shattered), 饿死了 (starving), 气死我了 (livid), 热死了 (boiling), 吓死我了 (terrified). The optional 我 slots between the verb and 了, and the sentence-final 了 is close to obligatory. Related intensifying complements: V + 爆了 (笑爆了), V + 哭了 (好吃哭了 — so good it made me cry), and 绝了 as a standalone verdict.",
              "<b>Suffixes</b> do the rest of the work, and knowing four of them lets you decode words you have never seen. 系 (from Japanese 〜系): a type or style — 佛系, 咸鱼系. 族 zú: a tribe of people defined by a behaviour — 月光族 (people who spend their whole salary each month), 低头族 (phone-hunched heads), 上班族 (office workers). 王 wáng: the champion of something — 卷王 (the over-competer), 麦霸 uses 霸 the same way. 人 rén: a wry occupational identity — 打工人 (wage worker), 干饭人 (rice-shoveller). 货 huò: an affectionately insulting person label — 吃货, 二货.",
              "Finally, <b>clipping</b>: long compounds are cut to two syllables, because two syllables is the natural size of a Chinese word. 社会性死亡 → 社死, 内卷化 → 内卷, 网络红人 → 网红, 高速铁路 → 高铁. If you meet an opaque two-syllable term, try expanding it."
            ],
            examples: [
              { text: "dbq，我来晚了。", roman: "Duìbuqǐ, wǒ lái wǎn le.", gloss: "Sorry, I'm late." },
              { text: "今天太热了，热死我了。", roman: "Jīntiān tài rè le, rè sǐ wǒ le.", gloss: "It's so hot today — I'm dying." },
              { text: "他是我们班的卷王。", roman: "Tā shì wǒmen bān de juǎnwáng.", gloss: "He's the biggest grinder in our class." },
              { text: "我们都是打工人。", roman: "Wǒmen dōu shì dǎgōngrén.", gloss: "We're all just wage slaves." },
              { text: "这家的火锅好吃哭了。", roman: "Zhè jiā de huǒguō hǎochī kū le.", gloss: "This place's hotpot is so good it makes you cry." }
            ]
          },
          {
            name: "Register: when to use this vocabulary and when not to",
            pattern: "peers + chat = yes    ·    elders, teachers, bosses, clients, writing = no",
            explanation: [
              "Chinese draws the formal/informal line more sharply than English, and a learner who mixes registers is noticed immediately. The safe rule: this unit's vocabulary belongs in group chats, comment sections and conversation with friends and classmates of roughly your own age. It does not belong in an email, a 作业, an HSK exam, a job interview, a message to a teacher, or any conversation with someone older than you or senior to you. In those settings, use the neutral equivalents given in each entry — 厉害 for 牛, 可靠 for 靠谱, 尴尬 for 社死, 抱怨 for the complaining sense of 吐槽.",
              "Three specific hazards. <b>Clipped vulgarity</b>: several intensifiers are amputated obscenities. 牛 is safe, its full form is not; the exclamation 靠 and the very common 卧槽 wòcáo are both euphemistic reshapings of crude phrases and should stay in your comprehension vocabulary, not your production vocabulary. <b>Dated slang</b>: using 给力, 88 or 亲 marks you as having learned from old material, which is a stranger impression than using no slang at all. <b>Asymmetry</b>: some words are fine about yourself and insulting about others — 学渣, 摆烂, 宅, 吃货 all follow this rule.",
              "There is also a geography. Almost everything here is mainland internet Chinese. Taiwan has a separate slang ecosystem (超 as an intensifier, 很扯 <i>ridiculous</i>, 傻眼 <i>stunned</i>, 母湯 from Taiwanese), Hong Kong operates largely in Cantonese, and a mainland term like 内卷 may draw a blank in Taipei. Meanwhile some of what feels like internet slang is really regional colloquial speech that predates the internet: 靠谱 is northern, 吐槽 arrived via Taiwan and Hokkien.",
              "Last, a practical timing note. Slang used well is charming and used badly is embarrassing, and the failure mode for learners is usually enthusiasm — deploying three buzzwords in one sentence, or using a meme term about a serious situation. Watch what your friends type, use one term at a time, and treat any word you learned from a textbook printed more than three years ago as a historical artefact until a native speaker confirms otherwise."
            ],
            examples: [
              { text: "王老师，您讲得非常清楚，谢谢您。", roman: "Wáng lǎoshī, nín jiǎng de fēicháng qīngchu, xièxie nín.", gloss: "Teacher Wang, your explanation was very clear — thank you. (formal: no slang)" },
              { text: "老师这节课讲得也太牛了吧！", roman: "Lǎoshī zhè jié kè jiǎng de yě tài niú le ba!", gloss: "That class was amazing! (said to a classmate, not to the teacher)" },
              { text: "这个方案不太靠谱。", roman: "Zhège fāng'àn bú tài kàopǔ.", gloss: "This plan isn't very solid. (fine in a casual work conversation)" },
              { text: "该方案可行性不足。", roman: "Gāi fāng'àn kěxíngxìng bùzú.", gloss: "This proposal lacks feasibility. (the written-report version of the same judgement)" }
            ]
          }
        ]
      },
      {
        type: "notes",
        title: "Culture note: the lifecycle of a buzzword, and how Chinese chat actually reads",
        body: [
          "Chinese internet slang has a measurable lifecycle, and it is short. A term is typically born on one platform, spends a few months as an in-group marker, goes national through short video, gets listed by 《咬文嚼字》 magazine in its December top-ten buzzwords feature, is used by a brand or a government account, and dies of embarrassment within a year of that. The magazine's list — published annually since 2008 and treated as semi-official — is therefore both the best record of what a year sounded like and a reliable death certificate. 给力 (2010), 洪荒之力 (2016), 佛系 (2018), 内卷 and 打工人 (2020), 躺平, 破防 and yyds (2021), 摆烂 (2022) all followed this arc.",
          "The platforms themselves shape the vocabulary. The 2000s belonged to QQ and the 天涯/猫扑 forums, which gave the digit slang and 233. The 2010s belonged to Weibo, then to Bilibili — whose 弹幕 <i>danmu</i> scrolling-comment system rewards very short expressions, which is precisely why 666 and initial abbreviations flourished there. The late 2010s and 2020s belong to 抖音 (Douyin), 快手 and 小红书, which spread terms much faster and burn them out correspondingly quicker, and which have added a commercial layer of their own: 种草 zhòngcǎo (<i>to plant grass</i>, i.e. to make someone want to buy something) and 拔草 bácǎo (to pull it up, i.e. to get it out of your system by buying it or deciding against it).",
          "A related phenomenon worth understanding is 谐音 xiéyīn, homophone substitution, which is not only playful. Because Mandarin has so many homophones, writers can swap in a same-sounding character to dodge automated content filters, and a whole vocabulary of this exists: 河蟹 héxiè (<i>river crab</i>) for 和谐 héxié (<i>harmonize</i>, the euphemism for censoring), or numbers and Latin letters standing in for sensitive words. The same mechanism produces harmless jokes — 蓝瘦香菇 lánshòu xiānggū (<i>blue thin mushroom</i>) for 难受想哭 nánshòu xiǎng kū (<i>miserable, want to cry</i>) in a 2016 viral video of a man with a strong southern accent. Homophone play is the deepest and oldest current in Chinese wordplay, and internet slang is only its latest channel.",
          "Finally, the etiquette of the medium, which trips up learners more often than any word does. Voice messages are extremely common and are considered normal to send to friends, less so to superiors. Length is a status signal: a one-character reply reads as cold, so people double up (嗯嗯, 好的好的, 收到收到). The 微笑 smiling-face emoji in WeChat's default set does <b>not</b> read as friendly to younger users — because of the downcast eyes it reads as passive-aggressive or dismissive, and 呲牙 (the grinning-teeth face) is the warm one. 表情包 biǎoqíngbāo, custom sticker packs, carry most of the emotional load in a Chinese chat and are exchanged competitively. And in a work group, 收到 shōudào (<i>received</i>) is the expected acknowledgement of an instruction — not 好的, and certainly not 666."
        ]
      },
      {
        type: "practice",
        title: "Practice",
        exercises: [
          {
            type: "mcq",
            prompt: "Your professor explains a difficult grammar point beautifully. Which reply is appropriate to say to her?",
            promptAudio: null,
            choices: [
              "老师，您讲得非常清楚，谢谢您。",
              "老师，您太牛了！666",
              "老师 yyds！",
              "老师，您真给力。"
            ],
            answer: 0,
            explain: "Slang belongs to peer conversation. To a teacher, use neutral vocabulary — 厉害/清楚, not 牛, 666 or yyds."
          },
          {
            type: "mcq",
            prompt: "What does 躺平 mean, and where did it come from?",
            promptAudio: "躺平",
            choices: [
              "To opt out of the rat race — from a viral 2021 Baidu Tieba post.",
              "To lie down and rest after exercise — a fitness term.",
              "To compete extremely hard — from anthropology.",
              "To be embarrassed in public — from sociology."
            ],
            answer: 0,
            explain: "《躺平即是正义》 was posted in April 2021 and defined the year. Competing hard for nothing is its antonym, 内卷."
          },
          {
            type: "mcq",
            prompt: "Why does this course teach 牛 rather than its longer form?",
            promptAudio: null,
            choices: [
              "The longer form is a vulgarity; 牛 is the clipped, socially safe version of it.",
              "The longer form is dated.",
              "The longer form is only used in Taiwan.",
              "There is no longer form."
            ],
            answer: 0,
            explain: "牛 is clipped from 牛逼, whose second syllable is crude. The clipping is mainstream and safe; the full form is not worth producing."
          },
          {
            type: "typing",
            prompt: "Type the full phrase that the abbreviation yyds stands for (characters or pinyin).",
            answer: ["永远的神", "永遠的神", "yǒngyuǎn de shén", "yongyuan de shen", "yǒngyuǎndeshén", "yongyuandeshen"],
            hint: "Four syllables: 'eternal' + 的 + 'god'."
          },
          {
            type: "typing",
            prompt: "Type the full phrase behind xswl (characters or pinyin).",
            answer: ["笑死我了", "xiào sǐ wǒ le", "xiao si wo le", "xiàosǐwǒle", "xiaosiwole"],
            hint: "A verb + 死 + 我 + 了 construction meaning 'dying of laughter'."
          },
          {
            type: "typing",
            prompt: "Type the Chinese for 'reliable / dependable' in the colloquial two-character form from this unit.",
            answer: ["靠谱", "靠譜", "kàopǔ", "kaopu"],
            hint: "Literally 'close to the score' — 谱 is a musical score."
          },
          {
            type: "listening",
            prompt: "Listen and choose what the speaker means.",
            audioText: "我们公司太内卷了，大家都加班。",
            choices: [
              "Our company is a pointless rat race — everyone works overtime.",
              "Our company has given up trying.",
              "Our company is very relaxed about hours.",
              "Our company is hiring a lot of people."
            ],
            answer: 0,
            explain: "内卷 is involution: everyone competes harder and no one ends up better off. Giving up would be 躺平 or 摆烂."
          },
          {
            type: "listening",
            prompt: "Listen. Which situation fits what you heard?",
            audioText: "我叫错了老师的名字，当场社死。",
            choices: [
              "The speaker was mortified after an embarrassing public mistake.",
              "The speaker was praised by a teacher.",
              "The speaker skipped class.",
              "The speaker failed an exam."
            ],
            answer: 0,
            explain: "社死 is clipped from 社会性死亡, 'social death' — acute public embarrassment, used hyperbolically."
          },
          {
            type: "match",
            prompt: "Match each slang term with its meaning.",
            pairs: [
              { a: "内卷", b: "pointless intensified competition" },
              { a: "躺平", b: "to opt out of the rat race" },
              { a: "吐槽", b: "to roast, to snark at" },
              { a: "打卡", b: "to clock in / check in at a spot" },
              { a: "破防", b: "to be emotionally got to" },
              { a: "吃货", b: "foodie" }
            ]
          },
          {
            type: "match",
            prompt: "Match each item with its honest currency label as of 2026.",
            pairs: [
              { a: "给力", b: "dated (peaked 2010)" },
              { a: "88", b: "dated (QQ era)" },
              { a: "佛系", b: "fading (peaked 2017)" },
              { a: "摆烂", b: "current" },
              { a: "加油", b: "evergreen, all registers" }
            ]
          },
          {
            type: "order",
            prompt: "Arrange into a sentence: 'Work is too exhausting — I want to lie flat.'",
            tokens: ["工作", "太累了", "我", "想", "躺平"],
            answer: "工作 太累了 我 想 躺平"
          },
          {
            type: "order",
            prompt: "Arrange into a casual sentence: 'Let's go to the library at the weekend, shall we?'",
            tokens: ["周末", "我们", "一起", "去图书馆", "吧"],
            answer: "周末 我们 一起 去图书馆 吧"
          }
        ]
      }
    ]
  });
})();
