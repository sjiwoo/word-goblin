window.CURRICULUM = window.CURRICULUM || {};
(function () {
  const C = window.CURRICULUM;
  C.chinese = C.chinese || { units: [] };

  C.chinese.units.push({
    id: "zh-06",
    order: 6,
    title: "Making Appointments",
    titleNative: "约时间",
    subtitle: "Phone calls, favours and plans: 给 someone a call, say what you 要 do, ask whether you 可以, and put the time before the verb.",
    textbookBasis: [
      "Integrated Chinese Level 1 Part 1, Lesson 6 (Making Appointments)",
      "HSK Standard Course 2, Lessons 3–6",
      "New Practical Chinese Reader 1, Lesson 9 (他今年二十岁) and Lesson 11"
    ],
    overview: [
      "This unit is the first one in which you make something happen. Everything so far has described states and preferences; here you telephone a classmate, ask a favour, and settle on a time and a place. Four structures carry the whole conversation.",
      "<b>给</b> gěi is the pivot. As a main verb it means <i>to give</i>; as a coverb it marks the person an action is done <i>to</i> or <i>for</i> — 给我打电话 (call me), 给你介绍 (introduce someone to you). Like 在 in the last unit, 给 goes before the verb, which is the general shape of Chinese: set up the circumstances first, land the verb last.",
      "<b>要</b> yào and <b>可以</b> kěyǐ are your first two auxiliary verbs. 要 covers <i>want to</i>, <i>have to</i> and <i>be going to</i>, and is stronger than the 想 xiǎng you already know. 可以 asks and grants permission. Both sit directly in front of the main verb and are negated with 不 in front of themselves.",
      "Finally, word order. Chinese has no tense endings, so <b>when</b> something happens is carried entirely by time words — and those time words come <b>before</b> the verb, not after it. 我明天下午两点在图书馆等你 lines up subject, time, place, verb, object in a fixed sequence. Learn that spine now and the rest of the beginner course fits into it."
    ],
    sections: [
      {
        type: "dialogue",
        title: "Dialogue: 马克给小雨打电话",
        context: "Mark has a Chinese exam coming up. He phones Xiaoyu to ask whether she can help him prepare.",
        lines: [
          { speaker: "小雨", text: "喂？", roman: "Wéi?", gloss: "Hello?" },
          { speaker: "马克", text: "喂，请问，小雨在吗？", roman: "Wéi, qǐngwèn, Xiǎoyǔ zài ma?", gloss: "Hello, excuse me — is Xiaoyu there?" },
          { speaker: "小雨", text: "我是小雨。你是哪位？", roman: "Wǒ shì Xiǎoyǔ. Nǐ shì nǎ wèi?", gloss: "This is Xiaoyu. Who's calling?" },
          { speaker: "马克", text: "我是马克。我想问你一个问题：你明天有空儿吗？", roman: "Wǒ shì Mǎkè. Wǒ xiǎng wèn nǐ yí ge wèntí: nǐ míngtiān yǒu kòngr ma?", gloss: "It's Mark. I want to ask you something — are you free tomorrow?" },
          { speaker: "小雨", text: "明天上午我要开会，下午有时间。什么事儿？", roman: "Míngtiān shàngwǔ wǒ yào kāihuì, xiàwǔ yǒu shíjiān. Shénme shìr?", gloss: "Tomorrow morning I have a meeting; in the afternoon I'm free. What's up?" },
          { speaker: "马克", text: "我要准备中文考试。你可以帮我吗？", roman: "Wǒ yào zhǔnbèi Zhōngwén kǎoshì. Nǐ kěyǐ bāng wǒ ma?", gloss: "I have to prepare for the Chinese exam. Can you help me?" },
          { speaker: "小雨", text: "可以。我们几点见面？", roman: "Kěyǐ. Wǒmen jǐ diǎn jiànmiàn?", gloss: "Sure. What time shall we meet?" },
          { speaker: "马克", text: "明天下午两点，在图书馆，好吗？", roman: "Míngtiān xiàwǔ liǎng diǎn, zài túshūguǎn, hǎo ma?", gloss: "Two o'clock tomorrow afternoon, at the library — all right?" },
          { speaker: "小雨", text: "好。我两点在图书馆等你。别忘了带书。", roman: "Hǎo. Wǒ liǎng diǎn zài túshūguǎn děng nǐ. Bié wàng le dài shū.", gloss: "Fine. I'll wait for you at the library at two. Don't forget to bring your book." },
          { speaker: "马克", text: "好，谢谢你！明天见。", roman: "Hǎo, xièxie nǐ! Míngtiān jiàn.", gloss: "Great, thank you! See you tomorrow." }
        ]
      },
      {
        type: "vocab",
        title: "Vocabulary (20 items)",
        items: [
          {
            term: "给",
            trad: "給",
            roman: "gěi",
            gloss: "to give; to / for (marking the recipient of an action)",
            pos: "verb / coverb",
            example: { text: "请你给我打电话。", roman: "Qǐng nǐ gěi wǒ dǎ diànhuà.", gloss: "Please give me a call." },
            linguistics: {
              origin: "phono-semantic compound",
              etymology: [
                "The older, literary word behind this graph is read <b>jǐ</b> and means <i>to supply, to provide in sufficient quantity</i> — the sense preserved in 供给 gōngjǐ (to supply), 给予 jǐyǔ (to grant) and the idiom 自给自足 zìjǐzìzú (self-sufficient). The Shuowen gloss is essentially <i>abundance of thread</i>.",
                "The everyday vernacular reading <b>gěi</b>, meaning plainly <i>to give</i>, is a later northern development, and it is this reading that grammaticalized into the coverb marking a recipient. The path <i>give</i> → <i>to/for</i> is one of the best-attested grammaticalization routes in the world's languages (compare English <i>give</i> in <i>give him a call</i>)."
              ],
              script: [
                "糸 (silk thread) + 合 hé as phonetic. The thread radical fits the original <i>supply of thread/cloth</i> sense.",
                "Simplified 给 replaces 糸 with the cursive-derived 纟, the same reduction seen in 红, 经, 线, 绍."
              ],
              phonology: [
                "Two readings, and they are not interchangeable: gěi (third tone) in all colloquial uses, jǐ (third tone, different initial and final) only in literary compounds like 供给 and 给予.",
                "As a third tone, 给 shifts to a rising tone before another third tone: 给我 is said <i>géi wǒ</i>."
              ],
              cognates: [
                "给钱 gěi qián (pay), 送给 sònggěi (give as a present), 交给 jiāogěi (hand over), 供给 gōngjǐ (supply).",
                "Sino-Korean 급 (공급 gonggeup = 供給); Sino-Japanese キュウ kyū (供給 kyōkyū, 給料 kyūryō, salary)."
              ]
            }
          },
          {
            term: "打",
            roman: "dǎ",
            gloss: "to hit, strike; (bleached verb) to do, make, play",
            pos: "verb",
            example: { text: "我每天打电话给妈妈。", roman: "Wǒ měitiān dǎ diànhuà gěi māma.", gloss: "I call my mother every day." },
            linguistics: {
              origin: "phono-semantic compound (with an irregular modern reading)",
              etymology: [
                "扌 (hand) + 丁 dīng as phonetic; the core meaning is <i>to strike</i>. 丁 itself is a pictograph of a nail seen from above, so hand + nail = to hammer.",
                "The pronunciation is a genuine puzzle. Middle Chinese for this graph is reconstructed roughly as <i>tsraengX</i> / <i>tengX</i>, which should have yielded something like <i>zhēng</i> or <i>dǐng</i> in Mandarin, not dǎ. Chinese philologists have discussed the irregularity since at least the Song dynasty without settling it; treat dǎ as a well-known exception rather than a derivable form.",
                "打 is also the most semantically bleached verb in Mandarin. In 打电话 (make a call), 打车 (hail a cab), 打工 (work a part-time job), 打篮球 (play basketball) and 打水 (fetch water), the idea of <i>hitting</i> has vanished entirely — it has become a general 'do' verb, much as English <i>take</i> works in <i>take a photo, take a bus, take a break</i>."
              ],
              script: [
                "扌 is the compressed left-hand form of 手 shǒu (hand), the radical of 找, 拿, 推, 抱 and hundreds more action verbs.",
                "Traditional and simplified are identical."
              ],
              phonology: [
                "Third tone, dǎ. Before another third tone it rises: 打水 is said <i>dá shuǐ</i>.",
                "In 打电话 the third tone is followed by a fourth tone, so 打 keeps its full dipping contour."
              ],
              cognates: [
                "打电话 dǎ diànhuà (phone), 打工 dǎgōng (work part-time), 打车 dǎchē (take a taxi), 打开 dǎkāi (open), 打算 dǎsuàn (to plan).",
                "The bleached-verb pattern recurs with 做 zuò (do/make) and 搞 gǎo (get/do, informal); knowing which verb collocates with which noun is a large part of sounding natural."
              ]
            }
          },
          {
            term: "电话",
            trad: "電話",
            roman: "diànhuà",
            gloss: "telephone; a phone call",
            pos: "noun",
            example: { text: "你的电话号码是多少？", roman: "Nǐ de diànhuà hàomǎ shì duōshao?", gloss: "What's your phone number?" },
            linguistics: {
              origin: "modern compound (Japanese coinage from Chinese morphemes)",
              etymology: [
                "Literally <i>electric speech</i>. The word was coined in Meiji Japan as 電話 denwa and travelled back into Chinese in the late nineteenth century, displacing the earlier transliteration 德律风 délǜfēng (from English <i>telephone</i>). This return-loan pattern — Japanese building new terms out of classical Chinese morphemes, Chinese then adopting them — produced a large slice of the modern vocabulary: 科学, 经济, 社会, 电话.",
                "電 originally meant lightning. Its extension to <i>electricity</i> is a nineteenth-century semantic stretch that every East Asian language made at once."
              ],
              script: [
                "電 = 雨 (rain) over 申. 申 is the older graph and is itself a pictograph of forked lightning; when 申 was borrowed to write the ninth earthly branch, the rain radical was added on top to keep the lightning meaning distinct. Simplified 电 throws away the rain and keeps just the bent lightning stroke — so the simplified form is closer to the original picture than the traditional one.",
                "話 = 言 (speech) with a phonetic element; in the modern shape that element has converged with 舌 shé (tongue), which is a happy accident rather than the original logic. Simplified 话 keeps 舌 and reduces 言 to 讠."
              ],
              phonology: [
                "diànhuà: two fourth tones. Both syllables fall; do not let the first flatten out.",
                "The measure word for a call is 个 or 通: 打一个电话 / 打一通电话."
              ],
              cognates: [
                "电 is enormously productive in modern words: 电脑 diànnǎo (computer, <i>electric brain</i>), 电视 diànshì (television), 电影 diànyǐng (film, <i>electric shadows</i>), 电子邮件 diànzǐ yóujiàn (email), 电车 diànchē (tram).",
                "话 gives 说话 shuōhuà (to speak), 中国话 Zhōngguóhuà (spoken Chinese), 普通话 pǔtōnghuà (Mandarin, <i>common speech</i>), 笑话 xiàohua (joke)."
              ]
            }
          },
          {
            term: "喂",
            roman: "wéi",
            gloss: "hello (on the telephone); hey",
            pos: "interjection",
            example: { text: "喂，请问王老师在吗？", roman: "Wéi, qǐngwèn Wáng lǎoshī zài ma?", gloss: "Hello, is Teacher Wang there please?" },
            linguistics: {
              origin: "phono-semantic compound; interjectional use",
              etymology: [
                "The character's ordinary lexical meaning is <b>wèi</b>, <i>to feed</i> (喂狗 wèi gǒu, feed the dog; 喂奶 wèi nǎi, to nurse a baby). The telephone greeting is a separate, purely interjectional use of the same graph.",
                "Chinese did not have a telephone greeting before telephones; 喂 was recruited from the general hailing interjection <i>hey!</i> in the early twentieth century, in the same way English recruited <i>hello</i> (previously a shout used to attract attention or hail a boat)."
              ],
              script: [
                "口 (mouth) + 畏 wèi as phonetic — again the mouth radical marking a spoken item. 畏 alone means <i>to fear</i>.",
                "No traditional/simplified difference."
              ],
              phonology: [
                "Tone matters socially here. On the phone the conventional pronunciation is second tone <b>wéi</b>, which sounds tentative and polite. Said in the fourth tone, <b>wèi</b>, it is an abrupt <i>Oi!</i> — used to stop a stranger who dropped something, or by an irritated parent. Learners who say wèi into a phone sound rude without knowing why.",
                "Repeated 喂喂 wéiwéi is what you say when the line has gone quiet."
              ],
              cognates: [
                "Other 口-radical interjections in daily use: 啊 a, 哦 ó, 哎 āi, 嗯 ǹg, 唉 ài.",
                "Unrelated in origin but parallel in function: Japanese もしもし moshimoshi, Korean 여보세요 yeoboseyo — every language invented a dedicated telephone word."
              ]
            }
          },
          {
            term: "要",
            roman: "yào",
            gloss: "to want; to need to, must; to be going to",
            pos: "verb / auxiliary",
            example: { text: "我明天要开会。", roman: "Wǒ míngtiān yào kāihuì.", gloss: "I have a meeting tomorrow / I have to attend a meeting tomorrow." },
            linguistics: {
              origin: "pictograph, later extended",
              etymology: [
                "The oldest graph shows a person with both hands at the waist — the original word meant <i>waist</i>. When 要 was taken over by the abstract senses <i>essential, to want</i>, a new character 腰 yāo was made for <i>waist</i> by adding the flesh radical 月 (肉).",
                "The semantic bridge is <i>the essential middle</i>: the waist is the crux of the body, hence 要 = crucial, important (重要 zhòngyào), hence <i>what is required</i>, hence <i>to want / must</i>. Two readings survive: yāo in 要求 yāoqiú (to demand) and yào everywhere else."
              ],
              script: [
                "The modern shape 覀 over 女 is a flattened remnant of the original hands-on-hips figure and is no longer transparent; do not try to read it as <i>west + woman</i>.",
                "Traditional and simplified are identical."
              ],
              phonology: [
                "Fourth tone, yào, in all the meanings taught here. The 要 in 要求 is first tone, yāo.",
                "Negation splits by meaning, and this trips up every beginner: <i>don't want to</i> is 不想 bù xiǎng; <i>need not</i> is 不用 búyòng; <i>don't!</i> as a prohibition is 别 bié. 不要 exists but is a command — 不要说话! (Be quiet!)."
              ],
              cognates: [
                "重要 zhòngyào (important), 需要 xūyào (to need), 主要 zhǔyào (main), 要是 yàoshi (if), 只要 zhǐyào (as long as).",
                "Sino-Korean 요 (중요 jung-yo = 重要); Sino-Japanese ヨウ yō (重要 jūyō, 必要 hitsuyō)."
              ]
            }
          },
          {
            term: "可以",
            roman: "kěyǐ",
            gloss: "may, can, be permitted to; be acceptable",
            pos: "auxiliary verb",
            example: { text: "我可以问你一个问题吗？", roman: "Wǒ kěyǐ wèn nǐ yí ge wèntí ma?", gloss: "May I ask you a question?" },
            linguistics: {
              origin: "compound of two classical function words",
              etymology: [
                "可 in Classical Chinese means <i>to approve, to be permissible</i>; 以 means <i>to use, by means of</i>. The Classical string 可以 meant <i>can be used to / it is permissible thereby</i>, and it fused into a single modern auxiliary. You can still see the seam in fossilized phrases like 可以说 kěyǐ shuō (one may say).",
                "以 is one of the oldest grammatical words in Chinese, written 㠯 in bronze inscriptions — probably a picture of an implement, perhaps a plough or a carrying basket — with the original verbal sense <i>to take, to use</i>. Nearly every Classical connective built on it (以为, 所以, 以后) descends from that verb."
              ],
              script: [
                "可 is analysed by the Shuowen as 口 (mouth) plus 丂, a graph for obstructed breath, i.e. an utterance of assent. It is one of the most productive phonetics in the script: 何 hé, 河 hé, 歌 gē, 哥 gē, 苛 kē all take their sound from it.",
                "Neither character was simplified."
              ],
              phonology: [
                "kěyǐ is two third tones in a row, so the first becomes a rising tone: it is pronounced <b>kéyǐ</b>. Pinyin never writes sandhi — you must apply it yourself.",
                "In 我可以 you get three third tones (wǒ kě yǐ); the usual realization raises the first two: <i>wó ké yǐ</i>."
              ],
              cognates: [
                "可能 kěnéng (possible/maybe), 可是 kěshì (but), 可爱 kě'ài (lovable, cute), 认可 rènkě (to approve), 所以 suǒyǐ (therefore), 以前 yǐqián (before).",
                "Sino-Korean 가 (가능 ganeung = 可能); Sino-Japanese カ ka (可能 kanō, 許可 kyoka)."
              ]
            }
          },
          {
            term: "时间",
            trad: "時間",
            roman: "shíjiān",
            gloss: "time (a period of it)",
            pos: "noun",
            example: { text: "明天下午我有时间。", roman: "Míngtiān xiàwǔ wǒ yǒu shíjiān.", gloss: "I have time tomorrow afternoon." },
            linguistics: {
              origin: "compound (modern term from classical morphemes)",
              etymology: [
                "時 is <i>time, season, hour</i>; 間 is <i>an interval, the space between</i>. The compound means a <i>stretch</i> of time and, like 电话, is part of the shared modern Sino-Japanese vocabulary (Japanese 時間 jikan).",
                "間 has a lovely transparent origin: the older form 閒 shows the moon 月 seen through the crack of a gate 門 — the gap. The modern shape substitutes 日 (sun) for the moon, and the meaning <i>gap, interval, between</i> is unchanged."
              ],
              script: [
                "時 = 日 (sun) + 寺 sì as phonetic; the oldest form used 之 zhī as the phonetic instead. Simplified 时 replaces the phonetic with 寸, a cursive shorthand rather than a sound hint.",
                "間 → 间 follows the general rule that 門 becomes 门, which also gives 问/問, 们/們, 闻/聞, 开/開."
              ],
              phonology: [
                "shíjiān: second tone then first tone. 间 has a second reading, jiàn, but not in this word — it appears in 间接 jiànjiē (indirect) and 离间 líjiàn (to sow discord).",
                "Distinguish 时间 shíjiān (time as a resource) from 时候 shíhou (the moment when): 什么时候 = when?, 有时间 = have time."
              ],
              cognates: [
                "小时 xiǎoshí (an hour), 时候 shíhou (time, moment), 有时候 yǒu shíhou (sometimes), 房间 fángjiān (room), 中间 zhōngjiān (the middle), 时代 shídài (era).",
                "Sino-Korean 시간 sigan — the ordinary Korean word for time/hour; Sino-Japanese 時間 jikan. All three languages share this compound exactly."
              ]
            }
          },
          {
            term: "事儿",
            trad: "事兒",
            roman: "shìr",
            gloss: "matter, business, something to do",
            pos: "noun",
            example: { text: "你明天有事儿吗？", roman: "Nǐ míngtiān yǒu shìr ma?", gloss: "Do you have anything on tomorrow?" },
            linguistics: {
              origin: "pictograph / graph shared with a word family",
              etymology: [
                "事 belongs to a remarkable family. The graphs 事 (affair), 史 shǐ (scribe, history), 吏 lì (petty official) and 使 shǐ (to send, envoy) all descend from a single oracle-bone graph showing a hand holding an implement — usually read as a hunting pole, a banner, or a scribe's recording device. The four words were split apart graphically only later, as the language needed to distinguish the officer, his office, his record and his task.",
                "The oldest sense is therefore something like <i>the business one is charged with</i>, which is exactly the modern meaning: affairs, matters, things to attend to."
              ],
              script: [
                "The modern 事 preserves the vertical implement stroke with the hand element at the bottom. Traditional and simplified are the same.",
                "The 儿 suffix here is grammatical, not part of the word's meaning; in southern speech and in writing you will simply see 事."
              ],
              phonology: [
                "Erhua fuses the suffix into the syllable: 事 shì + 儿 = <b>shìr</b>, one syllable, pronounced with the tongue tip curled while the -i vowel of shi is held. Beijing speech uses 事儿 constantly; Taiwan says 事情 shìqing instead.",
                "没事儿 méishìr is one of the most useful phrases in the language: <i>no problem / never mind / you're welcome / I'm fine</i>, depending on context."
              ],
              cognates: [
                "事情 shìqing (matter), 故事 gùshi (story), 工作的事 (work matters), 有事 yǒu shì (to be busy / have something on), 没事儿 méishìr.",
                "Sino-Korean 사 (사건 sageon = 事件, an incident); Sino-Japanese ジ ji (仕事 shigoto, work; 事件 jiken) beside native こと koto."
              ]
            }
          },
          {
            term: "空儿",
            trad: "空兒",
            roman: "kòngr",
            gloss: "free time, spare moment",
            pos: "noun",
            example: { text: "你今天晚上有空儿吗？", roman: "Nǐ jīntiān wǎnshang yǒu kòngr ma?", gloss: "Do you have any free time this evening?" },
            linguistics: {
              origin: "phono-semantic compound; tone-derived noun",
              etymology: [
                "The base word is 空 kōng, <i>empty, hollow, sky</i>. The reading kòng in the departing (fourth) tone is a derived noun meaning <i>an empty slot</i> — a vacancy in a wall, in a schedule, in a form.",
                "This is the same Old Chinese derivation by departing tone that produced 兴 xīng/xìng in the last unit: a *-s suffix converting a verb or adjective into a related noun. 空 is one of the cleanest surviving examples, because the two readings stayed close in meaning: empty (kōng) → an emptiness (kòng)."
              ],
              script: [
                "穴 (cave, hole) as the semantic radical over 工 gōng as the phonetic. The cave radical also appears in 窗 chuāng (window), 穿 chuān (to pass through), 究 jiū.",
                "No traditional/simplified difference; the 儿 suffix is written 兒 in traditional text."
              ],
              phonology: [
                "kòngr: the erhua fuses 空 and 儿 into one rhotic syllable. Tone is critical — 有空儿 yǒu kòngr means <i>have free time</i>, while 空 kōng in first tone means <i>empty</i> (空房间 kōng fángjiān, an empty room).",
                "Taiwan and much of the south prefer 有空 yǒu kòng without erhua, and 有時間 yǒu shíjiān is universally understood."
              ],
              cognates: [
                "有空儿 yǒu kòngr / 没空儿 méi kòngr (be free / be busy), 空气 kōngqì (air), 天空 tiānkōng (sky), 空调 kōngtiáo (air conditioning), 抽空 chōukòng (find time).",
                "Sino-Korean 공 (공기 gonggi = 空氣, air); Sino-Japanese クウ kū (空気 kūki) beside native そら sora (sky)."
              ]
            }
          },
          {
            term: "问题",
            trad: "問題",
            roman: "wèntí",
            gloss: "question; problem",
            pos: "noun",
            example: { text: "我想问你一个问题。", roman: "Wǒ xiǎng wèn nǐ yí ge wèntí.", gloss: "I'd like to ask you a question." },
            linguistics: {
              origin: "compound (verb + noun)",
              etymology: [
                "問 is <i>to ask</i>; 題 is <i>a topic, a heading</i>. Together: the topic asked about. Chinese uses one word where English splits <i>question</i> and <i>problem</i>, so 没问题 méi wèntí covers both <i>no question</i> and <i>no problem</i>.",
                "題 originally meant <b>forehead</b>. The path forehead → the top of a thing → the heading of a text → the topic → the exam question is fully documented and is one of the more satisfying semantic chains in the language."
              ],
              script: [
                "問 = 門 mén as phonetic + 口 (mouth) as meaning. Note that the mouth sits <i>inside</i> the gate; the gate is only there for sound. Simplified 问 reduces 門 to 门.",
                "題 = 是 shì as phonetic + 頁 as meaning. 頁 is not <i>page</i> in origin: it is a pictograph of a human head with hair, and it marks head-related characters — 頭/头 tóu (head), 顏/颜 yán (face), 顧/顾 gù (to look back), 願/愿 yuàn (wish). Simplified 页 keeps the outline only."
              ],
              phonology: [
                "wèntí: fourth tone then second tone.",
                "Do not confuse 问 wèn (ask) with 闻 wén (to hear/smell) — same 门 shape, different inner element and different tone."
              ],
              cognates: [
                "没问题 méi wèntí (no problem), 请问 qǐngwèn (may I ask), 访问 fǎngwèn (to visit/interview), 题目 tímù (title, exam question), 主题 zhǔtí (theme).",
                "Sino-Korean 문제 munje — the everyday Korean word for problem; Sino-Japanese 問題 mondai. Another compound shared unchanged across the three languages."
              ]
            }
          },
          {
            term: "找",
            roman: "zhǎo",
            gloss: "to look for, to seek; to give change",
            pos: "verb",
            example: { text: "有人找你。", roman: "Yǒu rén zhǎo nǐ.", gloss: "Someone's looking for you." },
            linguistics: {
              origin: "late graph, origin uncertain",
              etymology: [
                "找 is a young character with a genuinely murky history, and it is worth being honest about that. It is not in the Shuowen and appears only in late imperial vernacular writing. The most commonly repeated proposal is that it arose as a graphic variant of 划 huá (to paddle) or of an older 撦/扯 type graph, and that the earliest recorded sense was <i>to make up a shortfall</i> — which survives in 找钱 zhǎo qián, <i>to give change</i>.",
                "From <i>make up what is missing</i> to <i>look for what is missing</i> is a plausible bridge, but no reconstruction is secure. Anyone who tells you 找 depicts a hand searching with a weapon is retrofitting the modern shape."
              ],
              script: [
                "扌 (hand) + 戈 gē, a dagger-axe. The two components make a neat mnemonic — hand plus weapon, hunting for something — but the 戈 is almost certainly a shape accident, not the original element.",
                "Traditional and simplified are identical. Compare 我 wǒ, which also contains 戈."
              ],
              phonology: [
                "Third tone, zhǎo, with a retroflex initial. 找 zhǎo and 照 zhào differ in tone; 找 and 早 zǎo differ in retroflexion.",
                "Before another third tone it rises: 找我 is said <i>zháo wǒ</i>."
              ],
              cognates: [
                "找到 zhǎodào (to find), 找钱 zhǎo qián (give change), 找工作 zhǎo gōngzuò (look for a job), 找人 zhǎo rén (look for someone / ask someone for help).",
                "The literary equivalent is 寻找 xúnzhǎo; classical Chinese used 求 qiú or 尋 xún, which is why Korean and Japanese have no borrowing of 找."
              ]
            }
          },
          {
            term: "见面",
            trad: "見面",
            roman: "jiànmiàn",
            gloss: "to meet, to see one another",
            pos: "verb (separable)",
            example: { text: "我们明天下午见面。", roman: "Wǒmen míngtiān xiàwǔ jiànmiàn.", gloss: "We'll meet tomorrow afternoon." },
            linguistics: {
              origin: "verb-object compound",
              etymology: [
                "Literally <i>to see (a) face</i>. Because it is built as verb + object, 见面 cannot take another object: <i>I met him</i> is 我跟他见面 or 我见到他, never 我见面他. This is the defining property of Chinese separable verbs (离合词 líhécí) and it is the main grammatical point of the word.",
                "見 is one of the oldest graphs in the language: an eye 目 drawn on top of a kneeling or standing human figure 儿, an unusually vivid way of writing <i>to see</i>."
              ],
              script: [
                "面 is a pictograph of a face: an outline of the head with an eye inside it. In simplified writing 面 also absorbed 麵/麪 miàn (wheat noodles), so one graph now writes two unrelated words — 面条 miàntiáo (noodles) and 见面 (meet) share a character purely by simplification policy.",
                "見 → 见 is a cursive simplification; the eye collapses to a two-stroke box."
              ],
              phonology: [
                "jiànmiàn: two fourth tones.",
                "Splitting the word inserts material between the halves: 见过一次面 jiàn guo yí cì miàn (have met once), 见你的面 (rare, literary). Learning to hear the seam is what tells you a word is separable."
              ],
              cognates: [
                "见 in 再见 zàijiàn (goodbye, <i>see again</i>), 看见 kànjiàn (to see), 意见 yìjiàn (opinion), 见到 jiàndào (to meet, transitive).",
                "面 in 面前 miànqián (in front of), 方面 fāngmiàn (aspect), 面子 miànzi (face, prestige — the culturally loaded one)."
              ]
            }
          },
          {
            term: "开会",
            trad: "開會",
            roman: "kāihuì",
            gloss: "to have/attend a meeting",
            pos: "verb (separable)",
            example: { text: "我们上午九点开会。", roman: "Wǒmen shàngwǔ jiǔ diǎn kāihuì.", gloss: "We have a meeting at nine in the morning." },
            linguistics: {
              origin: "verb-object compound",
              etymology: [
                "Literally <i>to open a gathering</i>. Like 见面 it is separable: 开了一个会 (held a meeting), 开三个小时的会 (be in meetings for three hours).",
                "會 in bronze inscriptions is drawn as a lidded vessel with contents gathered inside — the sense is <i>to bring together, to converge</i>. From <i>gather</i> come both 会议 huìyì (a meeting) and, by a separate development, the auxiliary 会 huì (to know how to, to be able), which is the meaning you will meet in the next unit."
              ],
              script: [
                "開 shows 門 (a gate) with 一 (the crossbar) and 廾 (two hands) lifting the bar out — an unambiguous picture of opening a door. Simplified 开 discards the gate and keeps the bar and hands.",
                "會 → 会 keeps the lid (人 shape) and abbreviates the contents to 云."
              ],
              phonology: [
                "kāihuì: first tone then fourth tone.",
                "开 is another highly bleached verb: 开门 (open a door), 开车 (drive), 开灯 (turn on a light), 开始 (begin), 开玩笑 (make a joke)."
              ],
              cognates: [
                "会议 huìyì (conference), 开始 kāishǐ (to begin), 开车 kāichē (to drive), 会话 huìhuà (conversation), 社会 shèhuì (society).",
                "Sino-Korean 회 (회의 hoeui = 會議); Sino-Japanese カイ kai (会議 kaigi, 社会 shakai)."
              ]
            }
          },
          {
            term: "忙",
            roman: "máng",
            gloss: "busy",
            pos: "adjective",
            example: { text: "他今天很忙，没有时间。", roman: "Tā jīntiān hěn máng, méiyǒu shíjiān.", gloss: "He's very busy today and has no time." },
            linguistics: {
              origin: "phono-semantic compound (with semantic phonetic)",
              etymology: [
                "忄 (heart) + 亡 wáng as phonetic. Unusually, the phonetic also contributes meaning: 亡 means <i>to flee, to be lost, to perish</i>, so 忙 can be read as <i>the heart being gone</i> — flustered, harried, with no attention to spare. Such double-duty components are called 亦聲 yìshēng, 'also the sound', by traditional philologists.",
                "The Old Chinese root behind 亡 *maŋ also underlies 無/无 wú (not have) and 忘 wàng (to forget) — a whole family around absence."
              ],
              script: [
                "忄 is the left-hand compressed form of 心 xīn (heart), the radical of emotion verbs: 怕 pà (fear), 快 kuài, 慢 màn, 情 qíng.",
                "Compare the same phonetic in 忘 wàng (forget: heart + lost, but with 心 written underneath), 盲 máng (blind: eye + lost), 茫 máng (vast, boundless). Traditional and simplified are identical."
              ],
              phonology: [
                "Second tone, máng. Note the near-pair 忙 máng (busy) and 忘 wàng (forget) — same phonetic, different initial.",
                "As an adjective it needs 很 in a plain statement: 我很忙. A bare 我忙 implies a contrast (…but someone else isn't)."
              ],
              cognates: [
                "帮忙 bāngmáng (to help out — literally <i>to help with the busyness</i>), 忙着 mángzhe (be busy doing), 急忙 jímáng (hurriedly), 连忙 liánmáng (at once).",
                "Sino-Korean 망 in 망각 manggak (忘却) is from 忘, the sibling character, rather than 忙 itself."
              ]
            }
          },
          {
            term: "帮",
            trad: "幫",
            roman: "bāng",
            gloss: "to help",
            pos: "verb",
            example: { text: "你可以帮我吗？", roman: "Nǐ kěyǐ bāng wǒ ma?", gloss: "Can you help me?" },
            linguistics: {
              origin: "phono-semantic compound; the 'help' sense is of uncertain origin",
              etymology: [
                "The graph 幫 is documented with a concrete and surprising original meaning: the <b>upper part of a shoe</b>, the section stitched onto the sole — still current in 鞋帮 xiébāng. From that it extended to <i>the side of a thing</i> (船帮, the side of a boat).",
                "Whether the verb <i>to help</i> is the same etymon or a different vernacular word that was simply written with this available graph is not settled. Some scholars link it to 幫 as <i>a band, a group</i> (帮 in 帮派 bāngpài, a gang) — people banded together assist one another. Treat the connection as plausible rather than proven."
              ],
              script: [
                "Traditional 幫 = 封 fēng as phonetic over 帛 bó (silk cloth). Simplified 帮 restructures it as 邦 bāng (state, nation — a cleaner phonetic) over 巾 (cloth), so the simplification actually improved the sound hint.",
                "巾 is the <i>cloth</i> radical, also in 布 bù, 帽 mào (hat), 席 xí (mat)."
              ],
              phonology: [
                "First tone, bāng. In 帮忙 bāngmáng the second syllable keeps its full second tone.",
                "帮 is also the name of the first initial in traditional Chinese phonology (幫母, the *p- initial class) — a piece of trivia that will follow you if you study historical phonology."
              ],
              cognates: [
                "帮忙 bāngmáng (help out — separable: 帮了我一个忙), 帮助 bāngzhù (to assist, more formal), 帮手 bāngshǒu (a helper), 帮派 bāngpài (faction).",
                "Note the syntax difference: 帮 takes a person directly (帮我), while 帮忙 cannot (帮我的忙, not 帮忙我)."
              ]
            }
          },
          {
            term: "准备",
            trad: "準備",
            roman: "zhǔnbèi",
            gloss: "to prepare; to plan to",
            pos: "verb",
            example: { text: "我要准备中文考试。", roman: "Wǒ yào zhǔnbèi Zhōngwén kǎoshì.", gloss: "I need to prepare for the Chinese exam." },
            linguistics: {
              origin: "compound of two verbs",
              etymology: [
                "準 originally meant a <b>water level</b> — the carpenter's instrument — hence <i>level, accurate, standard</i> (标准 biāozhǔn, 准确 zhǔnquè). 備 means <i>to be equipped, provided for</i>. Together: to get things level and equipped = to prepare.",
                "備 has a concrete origin too: the bronze graph shows a person beside a <b>quiver of arrows</b>, i.e. a soldier already equipped. 设备 shèbèi (equipment) and 准备 both keep that sense of readiness."
              ],
              script: [
                "準 = 氵 (water) + 隼 zhǔn as phonetic. Simplified 准 adopts an older variant that drops the water radical and keeps 冫 + 隹.",
                "備 → 备 is a heavy cursive reduction; the arrow-quiver element is no longer visible in the simplified form."
              ],
              phonology: [
                "zhǔnbèi: third tone then fourth tone. Because the second syllable is fourth tone, 准 keeps its full dipping contour.",
                "准 with retroflex zh- contrasts with 尊 zūn; keep the tongue curled."
              ],
              cognates: [
                "标准 biāozhǔn (standard), 准时 zhǔnshí (punctual), 准确 zhǔnquè (accurate), 设备 shèbèi (equipment), 具备 jùbèi (to possess, to be equipped with).",
                "Sino-Korean 준비 junbi — the everyday Korean word for preparation; Sino-Japanese 準備 junbi. All three languages use this compound identically."
              ]
            }
          },
          {
            term: "考试",
            trad: "考試",
            roman: "kǎoshì",
            gloss: "exam; to take an exam",
            pos: "noun / verb (separable)",
            example: { text: "我们明天有中文考试。", roman: "Wǒmen míngtiān yǒu Zhōngwén kǎoshì.", gloss: "We have a Chinese exam tomorrow." },
            linguistics: {
              origin: "compound of two verbs",
              etymology: [
                "考 and 老 lǎo were originally the same graph — an old person with long hair leaning on a stick. 考 kept the sense <i>aged</i> and, in classical usage, <i>deceased father</i> (先考 xiānkǎo). The meaning <i>to examine, to investigate</i> (考察 kǎochá, 思考 sīkǎo) is a separate development of the same syllable.",
                "試 is 言 (speech) + 式 shì as phonetic, meaning <i>to try, to test</i>. The compound 考试 carries the entire weight of the imperial examination tradition (科举 kējǔ), which shaped Chinese education for thirteen centuries and still colours attitudes to the 高考 gāokǎo today."
              ],
              script: [
                "考 shares its top element with 老; 丂 at the bottom is the phonetic.",
                "試 → 试 is another 言 → 讠 simplification, with the phonetic 式 untouched."
              ],
              phonology: [
                "kǎoshì: third tone then fourth tone.",
                "As a separable verb the halves come apart: 考了两次试 kǎo le liǎng cì shì (took the exam twice). The noun use (有考试) is more common for beginners."
              ],
              cognates: [
                "高考 gāokǎo (the university entrance exam), 考生 kǎoshēng (exam candidate), 参考 cānkǎo (to consult, reference), 试试 shìshi (give it a try), 考虑 kǎolǜ (to consider).",
                "Sino-Korean 고시 gosi (考試, a state examination); Sino-Japanese 考試 is rare, but 試験 shiken (試驗) covers the same ground."
              ]
            }
          },
          {
            term: "别",
            trad: "別",
            roman: "bié",
            gloss: "don't (prohibition); other, another",
            pos: "adverb / adjective",
            example: { text: "别忘了给我打电话。", roman: "Bié wàng le gěi wǒ dǎ diànhuà.", gloss: "Don't forget to call me." },
            linguistics: {
              origin: "compound ideograph",
              etymology: [
                "別 is 另 plus 刂 (the knife radical). The left element in the oldest forms depicts bone, and the character means <i>to cut flesh from bone</i> — to separate. From <i>separate</i> came <i>distinguish</i> (区别 qūbié), <i>other</i> (别人 biérén), and <i>to part</i> (告别 gàobié).",
                "The prohibitive 别 (<i>don't!</i>) is generally analysed as a fusion of 不要 búyào — the two syllables contracted in northern vernacular speech. This is the standard account and it fits the sound and the meaning well, though as with most contractions the earliest stages are hard to document."
              ],
              script: [
                "刂 is the compressed right-hand form of 刀 dāo (knife), found in 到, 刻, 剑, 前.",
                "Traditional 別 and simplified 别 differ only in a minor stroke shape on the left element."
              ],
              phonology: [
                "Second tone, bié, in every use taught here.",
                "别 as a prohibition is often reinforced with 了 at the end of the clause: 别客气了, 别忘了. The 了 marks the change 'stop doing / don't let it come about'."
              ],
              cognates: [
                "别人 biérén (other people), 特别 tèbié (special/especially), 区别 qūbié (difference), 分别 fēnbié (to part; respectively), 告别 gàobié (bid farewell).",
                "Sino-Korean 별 (특별 teukbyeol = 特別); Sino-Japanese ベツ betsu (特別 tokubetsu, 別々 betsubetsu)."
              ]
            }
          },
          {
            term: "位",
            roman: "wèi",
            gloss: "(polite measure word for people); position, seat",
            pos: "measure word / noun",
            example: { text: "你是哪位？", roman: "Nǐ shì nǎ wèi?", gloss: "Who is calling, please? (lit. which person are you?)" },
            linguistics: {
              origin: "compound ideograph",
              etymology: [
                "亻 (person) + 立 (to stand). The original meaning is the <b>place where a person stands</b> — specifically the assigned position of an official at court, from which come 地位 dìwèi (status), 座位 zuòwèi (seat) and 位子 wèizi (a spot).",
                "The measure-word use grows directly out of that: counting people by the standing-places they occupy is inherently deferential, which is why 位 is the polite classifier."
              ],
              script: [
                "立 is itself a pictograph: a person standing with arms out on the ground line (一).",
                "No traditional/simplified difference."
              ],
              phonology: [
                "Fourth tone, wèi. Homophonous with 喂 wèi (to feed) and 为 wèi (for), which is worth noting because 为 will appear as a coverb later.",
                "Register rule: 位 elevates the person counted, so you use it for guests, teachers and customers (三位老师) but not for yourself (say 我是一个学生, never 我是一位学生) and not for children or unnamed strangers in a crowd."
              ],
              cognates: [
                "座位 zuòwèi (seat), 地位 dìwèi (status), 单位 dānwèi (work unit), 位置 wèizhi (position), 几位? jǐ wèi? (how many people? — as a waiter asks).",
                "Sino-Korean 위 (지위 jiwi = 地位); Sino-Japanese イ i (地位 chii, 位置 ichi)."
              ]
            }
          },
          {
            term: "回来",
            trad: "回來",
            roman: "huílai",
            gloss: "to come back, to return",
            pos: "verb + directional complement",
            example: { text: "他下午三点回来。", roman: "Tā xiàwǔ sān diǎn huílai.", gloss: "He'll be back at three in the afternoon." },
            linguistics: {
              origin: "compound (verb + directional complement)",
              etymology: [
                "回 is a pictograph of a spiral or whirlpool — concentric turning lines, written in the oldest forms as a single coiling stroke and later regularized into the square-within-a-square shape. The original meaning is <i>to revolve, to turn back</i>.",
                "来 (see the previous unit) supplies direction relative to the speaker. 回来 = return toward me; 回去 huíqu = return away from me. Chinese marks this deictic direction obligatorily where English often leaves it to context."
              ],
              script: [
                "回 is written 囗 (an enclosure) containing 口 — but historically both squares are just the flattened coil, not a mouth inside a box.",
                "No simplification for either character in the compound beyond 來 → 来."
              ],
              phonology: [
                "huílai: second tone with a <b>neutral</b> second syllable. The same neutralization applies to 进来 jìnlai, 出来 chūlai, 过来 guòlai, 起来 qǐlai.",
                "When an object intervenes the complement splits: 回家来 huí jiā lai (come back home)."
              ],
              cognates: [
                "回家 huí jiā (go home), 回答 huídá (to answer), 回去 huíqu (go back), 一回 yì huí (once — 回 also serves as a measure word for occasions).",
                "Sino-Korean 회 (회전 hoejeon = 回轉, rotation); Sino-Japanese カイ kai (回転 kaiten, 今回 konkai)."
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
            name: "给: giving, and the coverb for a recipient",
            pattern: "Subject + 给 + Person + Thing    ·    Subject + 给 + Person + Verb (+ Object)",
            explanation: [
              "As a main verb 给 takes two objects in the order recipient-then-thing, exactly like English <i>give me the book</i>: 请给我一杯水 (please give me a glass of water), 我给你这本书 (I'll give you this book). No preposition is needed.",
              "As a coverb 给 introduces the person on whose behalf or toward whom an action is done, and — this is the part to drill — it comes <b>before</b> the main verb. 给我打电话 (call me), 我给你介绍一下 (let me introduce you), 他给我们做饭 (he cooks for us). English puts the beneficiary after the verb; Chinese puts it before. Do not say 打电话我.",
              "You will also hear 打电话给我, with 给 after the verb, and it is perfectly good Mandarin — it is more common in southern speech and in Taiwan, and it is standard with a small set of verbs of transfer (寄给, 送给, 卖给). For production, the safe beginner pattern is 给 + person + verb. Negate by putting 不 or 没 in front of 给: 他没给我打电话 (he didn't call me)."
            ],
            examples: [
              { text: "请给我一杯茶。", roman: "Qǐng gěi wǒ yì bēi chá.", gloss: "Please give me a cup of tea." },
              { text: "晚上我给你打电话。", roman: "Wǎnshang wǒ gěi nǐ dǎ diànhuà.", gloss: "I'll call you in the evening." },
              { text: "我给你介绍一下我的朋友。", roman: "Wǒ gěi nǐ jièshào yíxià wǒ de péngyou.", gloss: "Let me introduce my friend to you." },
              { text: "他没给我回电话。", roman: "Tā méi gěi wǒ huí diànhuà.", gloss: "He didn't call me back." }
            ]
          },
          {
            name: "打电话 and separable verb-object compounds",
            pattern: "给 + Person + 打电话    ·    打 + (number + measure) + 电话",
            explanation: [
              "打电话 is not a single verb; it is the verb 打 plus its object 电话. Chinese has hundreds of these verb-object compounds (离合词), and they behave as two words whenever anything needs to be inserted: 打一个电话 (make a call), 打了两个电话 (made two calls), 打过电话 (have called). You will meet the same behaviour in 开会 (开了一个会), 见面 (见过一次面), 考试 (考了三次试), 帮忙 (帮了我一个忙), 睡觉, 吃饭, 说话.",
              "The practical consequence is that a verb-object compound cannot take a second object. You cannot say 打电话他 for <i>call him</i>. The person has to be marked, either with 给 in front (给他打电话) or with 给 after the compound (打电话给他).",
              "Related vocabulary uses the same frame: 接电话 jiē diànhuà (answer the phone), 回电话 huí diànhuà (call back), 挂电话 guà diànhuà (hang up). And to ask for someone's number: 你的电话号码是多少? — note 多少 rather than 几, because phone numbers are long strings."
            ],
            examples: [
              { text: "我给老师打了一个电话。", roman: "Wǒ gěi lǎoshī dǎ le yí ge diànhuà.", gloss: "I made a call to the teacher." },
              { text: "昨天他打了三个电话。", roman: "Zuótiān tā dǎ le sān ge diànhuà.", gloss: "He made three calls yesterday." },
              { text: "我们下午开会，开两个小时。", roman: "Wǒmen xiàwǔ kāihuì, kāi liǎng ge xiǎoshí.", gloss: "We have a meeting this afternoon; it runs two hours." },
              { text: "你能帮我一个忙吗？", roman: "Nǐ néng bāng wǒ yí ge máng ma?", gloss: "Could you do me a favour?" }
            ]
          },
          {
            name: "Auxiliaries 要 and 可以 (and how they differ from 想)",
            pattern: "Subject + 要 / 可以 / 想 + Verb (+ Object)    ·    negative: 不想 / 不用 / 别 / 不可以",
            explanation: [
              "Auxiliary verbs sit directly in front of the main verb and take no object of their own. 我要开会 (I have to attend a meeting), 你可以帮我吗? (can you help me?), 我想喝茶 (I'd like some tea).",
              "The three-way contrast is worth getting right early. <b>想</b> xiǎng is a soft <i>would like to</i>. <b>要</b> yào is stronger: it covers a firm intention (我要买 — I'm going to buy it), an obligation (明天我要开会 — I have to be at a meeting), and a request in a shop (我要一杯咖啡 — I'll have a coffee). <b>可以</b> kěyǐ is about permission and acceptability, not desire.",
              "Negation is the trap, because 不要 does not negate 要 in the <i>want</i> sense. To say <i>I don't want to go</i>, use 我不想去. To say <i>you needn't</i>, use 不用 búyòng. To say <i>don't!</i>, use 别 or 不要 as a command. And to refuse permission, 不可以 or the softer 不行 bùxíng. Finally, note that 可以 answers its own question: 你可以帮我吗? — 可以. Chinese has no all-purpose <i>yes</i>; you echo the verb."
            ],
            examples: [
              { text: "我明天要考试。", roman: "Wǒ míngtiān yào kǎoshì.", gloss: "I have an exam tomorrow." },
              { text: "我想喝一点儿茶。", roman: "Wǒ xiǎng hē yìdiǎnr chá.", gloss: "I'd like a bit of tea." },
              { text: "你可以给我打电话。", roman: "Nǐ kěyǐ gěi wǒ dǎ diànhuà.", gloss: "You may call me." },
              { text: "我不想开会，可是我要去。", roman: "Wǒ bù xiǎng kāihuì, kěshì wǒ yào qù.", gloss: "I don't want to go to the meeting, but I have to." },
              { text: "你别忘了。", roman: "Nǐ bié wàng le.", gloss: "Don't forget." }
            ]
          },
          {
            name: "Word order: time before the verb",
            pattern: "Subject + Time + Place + Verb + Object    ·    or: Time + Subject + Place + Verb + Object",
            explanation: [
              "Chinese verbs never change shape for tense. All the temporal information rides on time words, and those words must come <b>before</b> the verb. English says <i>I'll call you tomorrow evening</i>; Chinese says 我明天晚上给你打电话 — I, tomorrow evening, to you, make a call. Putting the time at the end (我打电话明天) is the most audible beginner error in this chapter.",
              "The time word can also move to the very front, before the subject, and this is common when the time is the topic under discussion: 明天我很忙 (as for tomorrow, I'm busy). Both positions are correct; the difference is emphasis, not grammar.",
              "When a sentence has both a time and a place, the order is fixed: <b>time before place, place before verb</b>. 我明天下午在图书馆等你 — I, tomorrow afternoon, at the library, wait for you. Within the time phrase, Chinese always goes from the largest unit to the smallest, the reverse of English: 明天下午两点 = tomorrow, afternoon, two o'clock. The same big-to-small principle governs dates (2026年7月31日) and addresses (country, city, street, number), and it is one of the deepest habits of the language."
            ],
            examples: [
              { text: "我明天上午开会。", roman: "Wǒ míngtiān shàngwǔ kāihuì.", gloss: "I have a meeting tomorrow morning." },
              { text: "明天下午我有时间。", roman: "Míngtiān xiàwǔ wǒ yǒu shíjiān.", gloss: "Tomorrow afternoon I'm free." },
              { text: "我们两点在图书馆见面。", roman: "Wǒmen liǎng diǎn zài túshūguǎn jiànmiàn.", gloss: "We're meeting at the library at two." },
              { text: "他今天晚上七点给我打电话。", roman: "Tā jīntiān wǎnshang qī diǎn gěi wǒ dǎ diànhuà.", gloss: "He's calling me at seven this evening." }
            ]
          }
        ]
      },
      {
        type: "notes",
        title: "Culture note: phones, favours and saying no",
        body: [
          "Answering the phone, Chinese speakers say 喂 in a light rising second tone, often twice. The caller then identifies himself before asking anything — 我是马克 — and it is normal, not rude, for the person answering to ask 你是哪位? A caller who launches into business without naming himself sounds evasive. When you reach someone's office, 请问，王老师在吗? is the standard opener, and the answer 他不在 needs no apology attached.",
          "Asking for help is governed by 客气 kèqi and by the long-running logic of 关系 guānxi — the web of mutual obligation between people who know each other. Asking a friend for a favour is not an imposition; it is a small deposit in a relationship that both sides expect to run in both directions. That is why 帮我一个忙 is asked casually and granted casually, and why the reply to 谢谢 is 不客气 or 没事儿 rather than anything more elaborate.",
          "Refusing is where foreigners get into trouble. A flat 不 is jarring. The polite refusal is an unavailability: 我明天没空儿 (I'm not free tomorrow), 我要开会 (I have a meeting), 恐怕不行 kǒngpà bùxíng (I'm afraid that won't work). Conversely, when a Chinese friend says 我看看 (let me see) or 再说吧 zài shuō ba (let's talk about it later), that is frequently a soft no, and pressing for a firm commitment reads as tone-deaf.",
          "One practical note about modern life: young people in China rarely make voice calls. Appointments are arranged on WeChat (微信 Wēixìn) in voice messages and text, and the vocabulary of this unit transfers directly — 你明天有空儿吗？ 我们几点见面？ is exactly what appears in the chat window. Punctuality, however, is taken seriously for business and for meals: arriving on time or a few minutes early is expected, and being late without a message is a genuine discourtesy."
        ]
      },
      {
        type: "practice",
        title: "Practice",
        exercises: [
          {
            type: "mcq",
            prompt: "Which sentence correctly says 'I'll call you tomorrow evening'?",
            promptAudio: null,
            choices: ["我明天晚上给你打电话。", "我打电话给你明天晚上。", "我给你打电话明天晚上。", "明天晚上打电话我给你。"],
            answer: 0,
            explain: "Time comes before the verb, and the coverb 给 + person comes before 打电话. Subject, time, 给-phrase, verb."
          },
          {
            type: "mcq",
            prompt: "你 ___ 帮我吗？ — the speaker is asking permission/ability politely.",
            promptAudio: "你可以帮我吗？",
            choices: ["可以", "想", "很", "是"],
            answer: 0,
            explain: "可以 asks whether something is permitted or feasible. 想 would ask whether the person feels like helping, which is not what you want."
          },
          {
            type: "mcq",
            prompt: "Which is the correct way to say 'I don't want to go to the meeting'?",
            promptAudio: null,
            choices: ["我不想开会。", "我不要开会。", "我别开会。", "我没要开会。"],
            answer: 0,
            explain: "不要 is a command ('don't!'), not a statement of preference. The negative of 想/要 in the 'want' sense is 不想."
          },
          {
            type: "mcq",
            prompt: "Which sentence is WRONG?",
            promptAudio: null,
            choices: ["我打电话他。", "我给他打电话。", "我打电话给他。", "我给他打了一个电话。"],
            answer: 0,
            explain: "打电话 is a verb-object compound and cannot take a second object. Mark the person with 给, before or after the compound."
          },
          {
            type: "typing",
            prompt: "Type the Chinese for 'to make a phone call' (3 characters) — characters or pinyin.",
            answer: ["打电话", "打電話", "dǎ diànhuà", "da dianhua", "dǎdiànhuà", "dadianhua"],
            hint: "The bleached verb 打 plus 'electric speech'."
          },
          {
            type: "typing",
            prompt: "Type 'Are you free tomorrow?' in Chinese (use 有空儿).",
            answer: ["你明天有空儿吗", "你明天有空儿吗？", "你明天有空吗", "你明天有空吗？", "明天你有空儿吗", "明天你有空儿吗？", "nǐ míngtiān yǒu kòngr ma", "ni mingtian you kongr ma"],
            hint: "Subject, time word, 有空儿, 吗."
          },
          {
            type: "typing",
            prompt: "Type the pinyin for 可以 as it is actually pronounced, applying third-tone sandhi.",
            answer: ["kéyǐ", "keyi", "kéyi", "kě yǐ", "kěyǐ"],
            hint: "Third tone before third tone becomes second tone."
          },
          {
            type: "listening",
            prompt: "Listen and choose the correct meaning.",
            audioText: "明天上午我要开会，下午有时间。",
            choices: [
              "Tomorrow morning I have a meeting; I'm free in the afternoon.",
              "I had a meeting this morning and I'm busy this afternoon.",
              "Tomorrow afternoon I have a meeting.",
              "I want to meet tomorrow morning."
            ],
            answer: 0,
            explain: "要 here is obligation ('have to attend'), and the two time words 上午 / 下午 split the day."
          },
          {
            type: "listening",
            prompt: "Listen. What is the speaker doing?",
            audioText: "喂，请问，小雨在吗？",
            choices: [
              "Asking on the phone whether Xiaoyu is there",
              "Introducing Xiaoyu to someone",
              "Saying goodbye to Xiaoyu",
              "Asking where Xiaoyu's home is"
            ],
            answer: 0,
            explain: "喂 opens a phone call, 请问 softens the question, and X 在吗? asks whether the person is in."
          },
          {
            type: "match",
            prompt: "Match each word with its meaning.",
            pairs: [
              { a: "空儿", b: "free time" },
              { a: "准备", b: "to prepare" },
              { a: "见面", b: "to meet" },
              { a: "问题", b: "question, problem" },
              { a: "别", b: "don't" },
              { a: "位", b: "polite measure word for people" }
            ]
          },
          {
            type: "order",
            prompt: "Arrange into a sentence: 'I'm meeting a friend at the library at two tomorrow afternoon.'",
            tokens: ["我", "明天下午两点", "在图书馆", "见", "朋友"],
            answer: "我 明天下午两点 在图书馆 见 朋友"
          },
          {
            type: "order",
            prompt: "Arrange into a sentence: 'Please give me a call this evening.'",
            tokens: ["请", "你", "晚上", "给我", "打电话"],
            answer: "请 你 晚上 给我 打电话"
          }
        ]
      }
    ]
  });
})();
