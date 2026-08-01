window.CURRICULUM = window.CURRICULUM || {};
(function () {
  const C = window.CURRICULUM;
  C.chinese = C.chinese || { units: [] };
  C.chinese.units.push({
    id: "zh-04",
    order: 4,
    title: "Hobbies & Preferences",
    titleNative: "爱好和兴趣",
    subtitle: "Say what you like, what you would like to do, and why.",
    textbookBasis: [
      "Integrated Chinese Level 1 Part 1 (4th ed.), Lesson 4: Hobbies",
      "HSK Standard Course 1, Lessons 10–12; HSK Standard Course 2, Lesson 1",
      "New Practical Chinese Reader 1, Lessons 9–10"
    ],
    overview: [
      "This unit moves you from stating facts to expressing preference and intention. <b>喜欢</b> xǐhuan <i>to like</i> takes either a noun or a whole verb phrase, so one word gives you <i>I like music</i> and <i>I like listening to music</i>. <b>想</b> xiǎng adds intention: <i>I would like to go</i>. Together they carry most of what you need to make and accept an invitation.",
      "You will also meet a structural feature with no English counterpart: the <b>verb-object compound</b>, 离合词 líhécí. Words like 唱歌 <i>sing songs</i>, 跳舞 <i>dance dances</i>, 看书 <i>read books</i> and 打球 <i>hit balls</i> already contain their own object. That is why you cannot say 唱歌一个歌 or 跳舞很好 — anything you want to add has to go <b>inside</b> the word, between the verb and its built-in object. Recognising these compounds early prevents a whole class of errors.",
      "Finally, causation. <b>为什么</b> asks <i>why</i> and, like every Chinese question word, stays exactly where the answer will go. <b>因为…所以…</b> gives the answer — and unlike English, Chinese is perfectly happy to use both halves of the pair in one sentence, which is a construction English grammar forbids."
    ],
    sections: [
      {
        type: "dialogue",
        title: "周末做什么？— What do you do at the weekend?",
        context: "Friday afternoon. Li You and Wang Peng are packing up after class and comparing how they spend their weekends.",
        lines: [
          { speaker: "李友", text: "王朋，你周末常常做什么？", roman: "Wáng Péng, nǐ zhōumò chángcháng zuò shénme?", gloss: "Wang Peng, what do you usually do at the weekend?" },
          { speaker: "王朋", text: "我喜欢打球，也喜欢听音乐。你呢？", roman: "Wǒ xǐhuan dǎqiú, yě xǐhuan tīng yīnyuè. Nǐ ne?", gloss: "I like playing ball, and I also like listening to music. And you?" },
          { speaker: "李友", text: "我不喜欢运动。我喜欢看书和看电影。", roman: "Wǒ bù xǐhuan yùndòng. Wǒ xǐhuan kàn shū hé kàn diànyǐng.", gloss: "I don't like sport. I like reading and watching films." },
          { speaker: "王朋", text: "你为什么不喜欢运动？", roman: "Nǐ wèishénme bù xǐhuan yùndòng?", gloss: "Why don't you like sport?" },
          { speaker: "李友", text: "因为我觉得运动没有意思，所以我常常在家看书。", roman: "Yīnwèi wǒ juéde yùndòng méiyǒu yìsi, suǒyǐ wǒ chángcháng zài jiā kàn shū.", gloss: "Because I find sport boring, so I often read at home." },
          { speaker: "王朋", text: "这个周末我们一起去看电影，怎么样？", roman: "Zhège zhōumò wǒmen yìqǐ qù kàn diànyǐng, zěnmeyàng?", gloss: "How about we go and see a film together this weekend?" },
          { speaker: "李友", text: "好，我很想去！你也喜欢看电影吗？", roman: "Hǎo, wǒ hěn xiǎng qù! Nǐ yě xǐhuan kàn diànyǐng ma?", gloss: "Great, I'd love to go! Do you like films too?" },
          { speaker: "王朋", text: "喜欢。我觉得看电影很有意思。", roman: "Xǐhuan. Wǒ juéde kàn diànyǐng hěn yǒu yìsi.", gloss: "Yes. I think watching films is very interesting." },
          { speaker: "李友", text: "那我们星期六晚上去，好吗？", roman: "Nà wǒmen xīngqīliù wǎnshang qù, hǎo ma?", gloss: "Then let's go on Saturday evening — all right?" },
          { speaker: "王朋", text: "好！我请两个朋友一起去。", roman: "Hǎo! Wǒ qǐng liǎng gè péngyou yìqǐ qù.", gloss: "All right! I'll invite two friends to come along." }
        ]
      },
      {
        type: "vocab",
        title: "New words — 生词",
        items: [
          {
            term: "喜欢",
            trad: "喜歡",
            roman: "xǐhuan",
            gloss: "to like, to be fond of",
            pos: "verb",
            example: { text: "我喜欢听音乐。", roman: "Wǒ xǐhuan tīng yīnyuè.", gloss: "I like listening to music." },
            linguistics: {
              origin: "compound of two near-synonyms",
              etymology: [
                "<b>喜</b> is a compound ideograph: <b>壴</b>, a pictograph of a drum standing on a base, above <b>口</b>, a mouth. Drumming and singing together give <i>joy, delight</i> — the <i>Shuowen</i> analysis 从壴从口 says exactly this. The drum element 壴 also stands inside 鼓 gǔ <i>drum</i> and 彭.",
                "<b>欢</b> (traditional 歡) is 欠 with the phonetic 雚 guàn. The radical <b>欠</b> is a pictograph of a person with the mouth wide open, exhaling or yawning, and it marks characters about breath issuing from the mouth: 歌 to sing, 吹 to blow, 饮 to drink, 欢 to be joyous, 欠 itself meaning to lack or to yawn.",
                "Pairing two near-synonyms into a disyllabic word is the standard modern pattern, as with 认识 in Unit 1."
              ],
              script: [
                "Simplified 喜欢 (12 + 6 strokes) versus traditional 喜歡 (12 + 22). 歡 → 欢 replaces the elaborate 雚 phonetic with 又, the hand placeholder — the same device used in 对/對, 汉/漢 and 难/難.",
                "喜 is unchanged; it is a common component in 嬉, 熹 and in the double-happiness character 囍 used at weddings."
              ],
              phonology: [
                "xǐ third tone, <b>huan</b> neutral: xǐhuan. Taiwan standard prescribes xǐhuān with a full first tone on the second syllable.",
                "Because 喜 is third tone and the second syllable is neutral, there is no sandhi within the word — but 我喜欢 has 我 and 喜 adjacent third tones, so 我 rises: <i>wó xǐhuan</i>."
              ],
              cognates: [
                "Sino-Korean 희 (喜) as in 희극 <i>comedy</i> and 환 (歡) as in 환영 <i>welcome</i>; Sino-Japanese き ki (喜劇 kigeki <i>comedy</i>) and かん kan (歓迎 kangei <i>welcome</i>). Korean 환영 and Japanese 歓迎 are the same word as Chinese 欢迎 huānyíng.",
                "Related Chinese words: 欢迎 huānyíng <i>welcome</i>, 高兴 gāoxìng <i>happy</i>, 喜欢 <i>to like</i>, 爱 ài <i>to love</i>, 爱好 àihào <i>a hobby</i>. Note that 爱 is used far more freely for objects and activities in Chinese than <i>love</i> is in English: 我爱吃辣的 is unremarkable."
              ]
            }
          },
          {
            term: "想",
            roman: "xiǎng",
            gloss: "to want to, would like to; to think; to miss",
            pos: "verb / modal verb",
            example: { text: "我很想去看电影。", roman: "Wǒ hěn xiǎng qù kàn diànyǐng.", gloss: "I'd really like to go and see a film." },
            linguistics: {
              origin: "phono-semantic compound (形声)",
              etymology: [
                "<b>心</b> <i>heart</i> at the bottom as the semantic element, with <b>相</b> xiāng as the phonetic on top. The heart in Chinese, as in most premodern traditions, is the seat of thought as well as feeling, so 心 marks cognition and emotion alike.",
                "The phonetic 相 is itself a compound ideograph worth knowing: 木 <i>tree</i> beside 目 <i>eye</i>, an eye examining a tree, hence <i>to inspect, appearance</i>, and in its other reading xiāng, <i>mutually</i> (相信 to trust, 互相 mutually)."
              ],
              script: [
                "Thirteen strokes, identical in simplified and traditional. 相 on top, 心 in its full form beneath.",
                "The full 心 at the bottom of a character (想, 意, 感, 念, 忘, 急) versus the compressed 忄 on the left (忙, 快, 慢, 怕) is purely a matter of position, not meaning."
              ],
              phonology: [
                "Third tone. Sandhi before another third tone: 想买 xiǎng mǎi → <i>xiáng mǎi</i>.",
                "Middle Chinese *sjangX, with a plain s- that later palatalised to x- before the high front glide."
              ],
              cognates: [
                "Sino-Korean 상 (想) as in 상상 <i>imagination</i> and 사상 <i>thought, ideology</i>; Sino-Japanese そう sō — 想像 sōzō <i>imagination</i>, 感想 kansō <i>impressions</i>.",
                "Three distinct uses to keep apart. As a <b>modal</b>: 我想去 <i>I'd like to go</i>. As a full <b>verb of cognition</b>: 我想他是老师 <i>I think he's a teacher</i>, 让我想想 <i>let me think</i>. As <b>to miss</b>: 我很想你 <i>I miss you very much</i> — one of the most useful sentences in the language and completely opaque from the modal use."
              ]
            }
          },
          {
            term: "为什么",
            trad: "為什麼",
            roman: "wèishénme",
            gloss: "why",
            pos: "question phrase",
            example: { text: "你为什么不喜欢运动？", roman: "Nǐ wèishénme bù xǐhuan yùndòng?", gloss: "Why don't you like sport?" },
            linguistics: {
              origin: "compound: 为 for + 什么 what",
              etymology: [
                "Literally <i>for what</i>. The 什么 half was treated in Unit 1; the interesting character here is <b>为</b> (traditional 為 or 爲).",
                "The oracle-bone form of 為 shows a <b>hand above an elephant</b> — 又 over 象 — and the standard interpretation, first argued by the palaeographer Luo Zhenyu in the early twentieth century, is that it depicts leading a working elephant, hence <i>to do, to make, to act</i>. This is not a fanciful reading: elephants lived in the Yellow River basin in the Shang period, and the province of Henan is still abbreviated <b>豫</b>, a character containing 象.",
                "From <i>to do</i> the word developed the reading wèi meaning <i>for the sake of</i>, which is the one in 为什么."
              ],
              script: [
                "Simplified <b>为</b> is 4 strokes; traditional <b>為</b> is 9 and the older variant 爲 is 12. The simplified graph derives from the cursive form.",
                "The full phrase simplified 为什么 (4 + 4 + 3) versus traditional 為什麼 (9 + 4 + 14)."
              ],
              phonology: [
                "wèi fourth tone, shén second tone, <b>me</b> neutral. In fast speech the whole thing reduces toward <i>wèishéme</i>.",
                "为 has two readings: <b>wéi</b> second tone meaning <i>to be, to act as, to do</i> (成为 chéngwéi <i>to become</i>, 认为 rènwéi <i>to consider</i>) and <b>wèi</b> fourth tone meaning <i>for, because of</i> (为什么, 为了 wèile <i>in order to</i>, 因为 yīnwèi <i>because</i>). The tone carries the difference."
              ],
              cognates: [
                "Sino-Korean 위 (爲) as in 위하다 <i>to be for the sake of</i> and 행위 <i>action</i>; Sino-Japanese い i — 行為 kōi <i>act</i>, 為替 kawase.",
                "Word order matters and is easy: like all Chinese question words, 为什么 stays in the slot where the answer will go, normally right after the subject and before the verb. 你为什么不去？ Nothing inverts. Compare the more formal 何必 hébì and the colloquial 干吗 gànmá, both meaning roughly <i>why on earth</i>."
              ]
            }
          },
          {
            term: "因为",
            trad: "因為",
            roman: "yīnwèi",
            gloss: "because",
            pos: "conjunction",
            example: { text: "因为我很忙，所以不能去。", roman: "Yīnwèi wǒ hěn máng, suǒyǐ bù néng qù.", gloss: "Because I'm busy, I can't go." },
            linguistics: {
              origin: "compound: 因 cause + 为 for",
              etymology: [
                "<b>因</b> is 囗, an enclosure, with 大, a person with arms outstretched, inside it. The standard reading is that it depicts a <b>person lying on a mat</b>, and that 因 is the original character for 茵 yīn <i>mat, cushion</i>, later borrowed for the abstract sense <i>to rely on, cause, reason</i>. The <i>Shuowen</i> gives 从囗大.",
                "Combined with 为 <i>for the sake of</i>, the compound means <i>by reason of, because</i>. It is one of a family of two-syllable connectives that Chinese built up in the modern period to make written argument more explicit: 因为, 所以, 但是, 虽然, 如果."
              ],
              script: [
                "Simplified 因为 (6 + 4 strokes) versus traditional 因為 (6 + 9).",
                "因 is one of a set of characters built on the 囗 enclosure radical: 国 country, 图 picture, 园 garden, 团 group, 回 to return, 四 four. Do not confuse 囗 (wéi, enclosure, radical 31) with 口 (kǒu, mouth, radical 30) — the enclosure is larger and fully surrounds."
              ],
              phonology: [
                "yīn first tone, wèi fourth tone. Colloquially the second syllable is often reduced to a neutral <i>yīnwei</i>.",
                "因 is homophonous with 音 yīn <i>sound</i> and 阴 yīn <i>shade, yin</i>."
              ],
              cognates: [
                "Sino-Korean 인 (因) as in 원인 <i>cause</i> and 인과 <i>cause and effect</i>; Sino-Japanese いん in — 原因 gen'in <i>cause</i>, 因果 inga <i>karma, causality</i>. The Buddhist term 因果 travelled to all three languages together.",
                "Related: 原因 yuányīn <i>a cause</i> (noun), 因此 yīncǐ <i>therefore</i> (formal), 由于 yóuyú <i>due to</i> (formal). Note that 因为 introduces the <b>reason</b> and 所以 the <b>result</b>; getting them the wrong way round is a common slip."
              ]
            }
          },
          {
            term: "所以",
            roman: "suǒyǐ",
            gloss: "so, therefore",
            pos: "conjunction",
            example: { text: "我觉得没有意思，所以不想去。", roman: "Wǒ juéde méiyǒu yìsi, suǒyǐ bù xiǎng qù.", gloss: "I find it boring, so I don't want to go." },
            linguistics: {
              origin: "classical phrase: 所 that which + 以 by means of",
              etymology: [
                "This is a fossilised piece of Classical Chinese grammar. <b>所</b> was a nominalising particle meaning <i>that which</i>, and <b>以</b> meant <i>by means of, using</i>. 所以 therefore meant <i>that by which</i> — the means or the cause. In classical texts it often introduces a reason (所以者何 <i>what is the reason?</i>), and in modern Chinese it has settled into <i>therefore</i>.",
                "The graphs individually: 所 is 户 <i>door-leaf</i> plus 斤 <i>axe</i>. The <i>Shuowen</i> glosses it as the sound of chopping wood, which modern scholars generally doubt; the everyday concrete sense is <i>place</i> (场所 <i>venue</i>, 厕所 <i>toilet</i>). 以 is usually explained as a pictograph of a farming implement or of a person carrying something, and its origin is not firmly settled."
              ],
              script: [
                "所 is 8 strokes, 以 is 4; both identical in simplified and traditional.",
                "以 appears in many fixed expressions: 可以 kěyǐ <i>may, can</i>, 以后 yǐhòu <i>afterwards</i>, 以前 yǐqián <i>before</i>, 所以."
              ],
              phonology: [
                "suǒ third tone, yǐ third tone — two third tones in a row, so sandhi applies and it is pronounced <i>suóyǐ</i>. This is a good everyday word for practising the rule.",
                "In casual speech 所以 is frequently drawn out as a filler while the speaker plans the rest of the sentence, much like English <i>so...</i>"
              ],
              cognates: [
                "Sino-Korean 소 (所) as in 장소 <i>place</i> and 주소 <i>address</i>; Sino-Japanese しょ sho / じょ jo with native ところ tokoro — 場所 basho <i>place</i>, 住所 jūsho <i>address</i>. Korean and Japanese borrowed the concrete <i>place</i> sense, not the connective.",
                "The Chinese connective inventory: 所以 <i>so</i>, 因此 <i>therefore</i> (formal), 于是 <i>thereupon</i> (narrative), 那么 <i>then, in that case</i> (conversational)."
              ]
            }
          },
          {
            term: "打球",
            roman: "dǎqiú",
            gloss: "to play ball (basketball, tennis, etc.)",
            pos: "verb-object compound",
            example: { text: "我周末喜欢打球。", roman: "Wǒ zhōumò xǐhuan dǎqiú.", gloss: "I like playing ball at the weekend." },
            linguistics: {
              origin: "verb-object compound: 打 to hit + 球 ball",
              etymology: [
                "<b>打</b> is 扌 <i>hand</i> plus the phonetic <b>丁</b> dīng. The phonetic fit is poor in modern Mandarin — dīng versus dǎ — and this mismatch is a well-known puzzle in Chinese historical phonology; the Middle Chinese reading was closer, and the modern dǎ appears to reflect a colloquial northern development.",
                "<b>球</b> is 王, here the compressed form of <b>玉</b> <i>jade</i>, plus the phonetic 求 qiú. Its original meaning was a jade sphere or a jade chime-stone; it generalised to <i>ball, sphere</i>, and then to <i>globe</i> — 地球 dìqiú <i>the Earth</i>, 全球 quánqiú <i>global</i>."
              ],
              script: [
                "打 is 5 strokes, 球 is 11; both identical in simplified and traditional.",
                "The 扌 hand radical marks manual actions: 打 hit, 拿 take, 找 look for, 推 push, 拉 pull, 抱 hug, 提 lift."
              ],
              phonology: [
                "dǎ third tone, qiú second tone. 打 is a half third tone here, low and flat.",
                "Sandhi note: in 打篮球 dǎ lánqiú, 打 stays a half third tone because 篮 is second tone."
              ],
              cognates: [
                "Sino-Korean 구 (球) as in 지구 <i>the Earth</i> and 야구 <i>baseball</i>; Sino-Japanese きゅう kyū — 地球 chikyū, 野球 yakyū. Note that Korean and Japanese both name baseball with 球 while Chinese uses 棒球 bàngqiú <i>stick-ball</i>.",
                "打 is the most semantically stretched verb in Mandarin, and its idioms must be learnt individually: 打电话 <i>make a phone call</i>, 打车 <i>take a taxi</i>, 打工 <i>do casual work</i>, 打字 <i>type</i>, 打开 <i>open</i>, 打算 <i>to plan</i>, 打扫 <i>to sweep</i>. Ball games split between 打 for hand games (打篮球, 打网球, 打乒乓球) and 踢 tī <i>kick</i> for football (踢足球)."
              ]
            }
          },
          {
            term: "看",
            roman: "kàn",
            gloss: "to look at, to watch, to read",
            pos: "verb",
            example: { text: "我喜欢看书。", roman: "Wǒ xǐhuan kàn shū.", gloss: "I like reading." },
            linguistics: {
              origin: "compound ideograph (会意)",
              etymology: [
                "看 is <b>手</b> <i>hand</i> — in its flattened combining form at the top — over <b>目</b> <i>eye</i>. The image is a hand raised to shade the eyes while peering into the distance, and it is one of the most legible compound ideographs in the script once you know to look for it.",
                "The word covers a wide semantic range in modern Chinese: to look, to watch, to read, to visit, to consider, to see a doctor, and, with a following verb, to try something out."
              ],
              script: [
                "Nine strokes, identical in simplified and traditional. The top three strokes are the reduced 手.",
                "The 目 eye radical also gives 眼 eye, 睛 eyeball, 睡 to sleep, 眉 eyebrow, 相 appearance, 直 straight."
              ],
              phonology: [
                "Fourth tone in the ordinary sense, kàn. There is a first-tone reading kān meaning <i>to guard, to look after</i>: 看门 kān mén <i>to watch the door</i>, 看孩子 kān háizi <i>to mind children</i>.",
                "Middle Chinese *khanH."
              ],
              cognates: [
                "Sino-Korean 간 (看) as in 간호사 <i>nurse</i> (看護師, literally one who watches over); Sino-Japanese かん kan with native み-る miru — 看護 kango <i>nursing</i>, 看板 kanban <i>signboard</i>.",
                "Uses worth memorising as a set: 看书 <i>read</i>, 看电影 <i>watch a film</i>, 看电视 <i>watch TV</i>, 看朋友 <i>visit a friend</i>, 看医生 <i>see a doctor</i>, 我看… <i>in my view…</i>, and the reduplicated 看看 <i>have a quick look</i>. Compare 见 jiàn, which is <i>to see</i> in the sense of perceiving or meeting, not of directing one's gaze."
              ]
            }
          },
          {
            term: "电影",
            trad: "電影",
            roman: "diànyǐng",
            gloss: "film, movie",
            pos: "noun",
            example: { text: "我们一起去看电影。", roman: "Wǒmen yìqǐ qù kàn diànyǐng.", gloss: "Let's go and see a film together." },
            linguistics: {
              origin: "modern compound: 电 electric + 影 shadow",
              etymology: [
                "<b>电</b> (traditional 電) is 雨 <i>rain</i> over <b>申</b>, and 申 is the original pictograph of a <b>lightning bolt</b>, a zigzag streak in the sky. So 電 means <i>lightning</i>, and its use for <i>electricity</i> is a nineteenth-century semantic extension made when the new science needed a word.",
                "<b>影</b> is 景 jǐng <i>scene, light</i> plus 彡, a set of three streaks used across the script to indicate patterning, hair or rays. It means <i>shadow, image, reflection</i>.",
                "The compound 电影 is therefore <b>electric shadow</b>, a twentieth-century coinage of real charm and precision — a moving picture is exactly a shadow thrown by electricity. The earlier term was 影戏 yǐngxì <i>shadow play</i>, borrowing the name of the traditional shadow-puppet theatre."
              ],
              script: [
                "Simplified 电影 (5 + 15 strokes) versus traditional 電影 (13 + 15). 電 → 电 drops the rain radical and keeps the lightning.",
                "The 电 family of modern coinages is worth collecting: 电话 telephone (electric speech), 电视 television (electric vision), 电脑 computer (electric brain), 电子邮件 email, 电梯 lift (electric ladder), 电池 battery (electric pool)."
              ],
              phonology: [
                "diàn fourth tone, yǐng third tone. The third tone at the end of a phrase gets its full dipping contour.",
                "Note that 电 has -n and 影 has -ng."
              ],
              cognates: [
                "Sino-Korean 전 (電) and 영 (影) — 전화 <i>telephone</i>, 전기 <i>electricity</i>, 영화 <i>film</i> (影畫, <i>shadow picture</i>); Sino-Japanese でん den and えい ei — 電話 denwa, 映画 eiga <i>film</i> (映畫, <i>projected picture</i>).",
                "Notice that all three languages coined a word for cinema from native character stock in the same decades, and all three chose differently: Chinese <i>electric shadow</i>, Korean <i>shadow picture</i>, Japanese <i>projected picture</i>. None borrowed the sound of <i>cinema</i>."
              ]
            }
          },
          {
            term: "唱歌",
            roman: "chànggē",
            gloss: "to sing",
            pos: "verb-object compound",
            example: { text: "我妹妹很喜欢唱歌。", roman: "Wǒ mèimei hěn xǐhuan chànggē.", gloss: "My younger sister loves singing." },
            linguistics: {
              origin: "verb-object compound: 唱 to sing + 歌 song",
              etymology: [
                "<b>唱</b> is 口 <i>mouth</i> plus the phonetic <b>昌</b> chāng, itself made of 日 over 曰 and meaning <i>prosperous, flourishing</i>. <b>歌</b> is 欠, the open-mouthed breathing radical met under 喜欢, plus the phonetic <b>哥</b> gē — and 哥, as Unit 2 explained, was originally the character for <i>to sing</i> before it was taken over for <i>elder brother</i>. 歌 was created to carry the abandoned meaning.",
                "So 唱歌 is a small piece of script history in two characters: the newer singing character plus the older one, now written with a breath radical to keep it distinct."
              ],
              script: [
                "唱 is 11 strokes, 歌 is 14; both identical in simplified and traditional.",
                "The 欠 radical on the right of 歌 also appears in 欢 (歡), 吹, 次 and 软."
              ],
              phonology: [
                "chàng fourth tone, gē first tone. 唱 has the retroflex ch-, aspirated.",
                "Distinguish 唱 chàng from 常 cháng <i>often</i> and 长 cháng <i>long</i>: same final, different initial and tone."
              ],
              cognates: [
                "Sino-Korean 창 (唱) as in 합창 <i>chorus</i> and 가 (歌) as in 가수 <i>singer</i>, 국가 <i>national anthem</i>; Sino-Japanese しょう shō and か ka — 合唱 gasshō <i>chorus</i>, 歌手 kashu <i>singer</i>, 歌 uta.",
                "Grammatically this is a <b>verb-object compound</b>. Because 歌 is already the object, additions go inside: 唱中文歌 <i>sing Chinese songs</i>, 唱了一个歌 <i>sang a song</i>, 唱得很好 <i>sings very well</i>. You cannot say 唱歌一个歌 or 唱歌中文."
              ]
            }
          },
          {
            term: "跳舞",
            roman: "tiàowǔ",
            gloss: "to dance",
            pos: "verb-object compound",
            example: { text: "他不会跳舞。", roman: "Tā bú huì tiàowǔ.", gloss: "He can't dance." },
            linguistics: {
              origin: "verb-object compound: 跳 to jump + 舞 dance",
              etymology: [
                "<b>跳</b> is 足 <i>foot</i> (in its compressed left-hand form 𧾷) plus the phonetic <b>兆</b> zhào, meaning <i>to jump, to leap</i>.",
                "<b>舞</b> has a remarkable history. The oracle-bone graph shows a <b>person holding plumes or ox-tails in both hands</b> — a ritual dancer. That same graph was then borrowed as a rebus for the homophonous word meaning <i>not, without</i>, which is why the character <b>無</b> (simplified 无) means <i>none</i>. To recover the dance meaning, writers added 舛, a pair of feet pointing in opposite directions, at the bottom, producing 舞.",
                "So 无 and 舞 are the same original graph, split by a borrowing — one of the clearest examples of the 假借 mechanism at work."
              ],
              script: [
                "跳 is 13 strokes, 舞 is 14; both identical in simplified and traditional.",
                "The two feet at the bottom of 舞 are the 舛 chuǎn component; it also appears in 舜."
              ],
              phonology: [
                "tiào fourth tone, wǔ third tone.",
                "Middle Chinese 舞 *mjuX, with the initial m- that Mandarin turned into w- — the same change seen in 问, 文 and 忙, and preserved in Korean 무 (as in 무용 <i>dance</i>) and Japanese ぶ bu (舞踊 buyō)."
              ],
              cognates: [
                "Sino-Korean 무 (舞) — 무대 <i>stage</i>, 무용 <i>dance</i>; Sino-Japanese ぶ bu with native ま-う mau — 舞台 butai <i>stage</i>.",
                "Another verb-object compound: 跳了一个舞 <i>danced a dance</i>, 跳中国舞 <i>dance Chinese dance</i>. The same class includes 唱歌, 看书, 吃饭, 睡觉, 游泳, 上课, 说话, 帮忙 — Chinese has hundreds, and they are collectively known as 离合词 <i>separable words</i>."
              ]
            }
          },
          {
            term: "听音乐",
            trad: "聽音樂",
            roman: "tīng yīnyuè",
            gloss: "to listen to music",
            pos: "verb phrase",
            example: { text: "我喜欢听音乐。", roman: "Wǒ xǐhuan tīng yīnyuè.", gloss: "I like listening to music." },
            linguistics: {
              origin: "verb 听 + noun 音乐",
              etymology: [
                "<b>听</b> is a striking case of simplification by reassignment. The traditional character is <b>聽</b>, built from 耳 <i>ear</i>, 王 (a stand), 十目 and 心 <i>heart</i> — hearing with the ear and attending with the heart, a genuinely complex 22-stroke graph. The simplified 听 is <b>not</b> an abbreviation of it: 听 was an existing rare character, 口 plus 斤, formerly read yǐn and meaning <i>to laugh</i>, which was simply reassigned to the common word.",
                "<b>音</b> is 言 <i>speech</i> with an extra horizontal stroke inside the mouth, marking sound as distinct from words. <b>乐</b> (traditional 樂) is a pictograph of a wooden instrument stand strung with silk — 木 at the base with 幺幺 (silk threads) and a central 白 (usually taken as a thumb-plucked element or a drum) above it."
              ],
              script: [
                "Simplified 听音乐 (7 + 9 + 5 strokes) versus traditional 聽音樂 (22 + 9 + 15).",
                "乐 as a component appears in 药 (藥) yào <i>medicine</i> — grass over 乐, since the earliest medicines were thought to bring the body into harmony."
              ],
              phonology: [
                "tīng first tone, yīn first tone, yuè fourth tone.",
                "The character 乐 has two important readings: <b>yuè</b> <i>music</i> (音乐, 乐器 <i>instrument</i>) and <b>lè</b> <i>happy</i> (快乐 kuàilè <i>happy</i>, 可乐 kělè <i>cola</i>). Both go back to the same word family — music and joy — but they are now distinct words, and reading 音乐 as yīnlè is a common learner error."
              ],
              cognates: [
                "Sino-Korean 음악 <i>eumak</i> (音樂) and Sino-Japanese 音楽 <i>ongaku</i> — the identical compound in all three languages. Korean also has 낙/락 for the <i>joy</i> reading, as in 오락 <i>entertainment</i>; Japanese has らく raku, as in 楽しい tanoshii <i>enjoyable</i>.",
                "Related: 听说 tīngshuō <i>to hear it said, reportedly</i>, 好听 hǎotīng <i>nice to listen to</i>, 听不懂 tīng bu dǒng <i>unable to understand by ear</i>. Note that 听 needs no preposition — Chinese says 听音乐, never 听到音乐 for ordinary listening."
              ]
            }
          },
          {
            term: "书",
            trad: "書",
            roman: "shū",
            gloss: "book",
            pos: "noun",
            example: { text: "我常常在家看书。", roman: "Wǒ chángcháng zài jiā kàn shū.", gloss: "I often read at home." },
            linguistics: {
              origin: "phono-semantic compound (形声)",
              etymology: [
                "The traditional <b>書</b> is <b>聿</b> yù — a pictograph of a <b>hand holding a writing brush</b> — over a phonetic element (usually identified as 者). Its original meaning is <i>to write</i>, and only later <i>writing</i> and then <i>a book</i>. Both senses survive: 书法 shūfǎ <i>calligraphy</i>, literally <i>the method of writing</i>, and 书 <i>book</i>.",
                "The brush component 聿 is one of the oldest technology words in the script, and it is the origin of 笔 (traditional 筆) bǐ <i>pen, brush</i> — bamboo over a brush-holding hand."
              ],
              script: [
                "Simplified <b>书</b> is 4 strokes; traditional <b>書</b> is 10. The simplified form comes directly from the cursive 草书 hand, where the whole character was written in a single flowing gesture.",
                "Compare the closely related traditional graphs 書 <i>book</i>, 晝 <i>daytime</i> and 畫 <i>picture</i>, which differ only slightly and simplify to the visibly distinct 书, 昼 and 画."
              ],
              phonology: [
                "First tone, with retroflex sh- and the u vowel. Middle Chinese *syo.",
                "Homophones to be aware of: 输 shū <i>to lose</i>, 叔 shū <i>uncle</i>, 舒 shū <i>comfortable</i>."
              ],
              cognates: [
                "Sino-Korean 서 (書) — 도서관 <i>library</i>, 서점 <i>bookshop</i>, 서예 <i>calligraphy</i>; Sino-Japanese しょ sho with native か-く kaku — 図書館 toshokan <i>library</i>, 書道 shodō <i>calligraphy</i>. Korean 도서관 and Japanese 図書館 are the same compound as Chinese 图书馆 túshūguǎn.",
                "Note the measure word: books take <b>本</b> běn, not 个 — 一本书, 两本书. 本 itself depicts the root of a tree and by extension the base or spine of a bound volume."
              ]
            }
          },
          {
            term: "觉得",
            trad: "覺得",
            roman: "juéde",
            gloss: "to feel, to think (that)",
            pos: "verb",
            example: { text: "我觉得看电影很有意思。", roman: "Wǒ juéde kàn diànyǐng hěn yǒu yìsi.", gloss: "I think watching films is very interesting." },
            linguistics: {
              origin: "compound: 觉 to perceive + 得 resultative",
              etymology: [
                "<b>觉</b> (traditional 覺) is built exactly like 學/学 but with <b>見</b> <i>to see</i> in place of 子 <i>child</i>: the hands-and-counting-rods assembly on top, then <i>see</i>. It means <i>to perceive, to become aware, to wake up</i> — 学 and 觉 are a matched pair about learning and realising.",
                "<b>得</b> is 彳 <i>to step</i> plus 貝 <i>cowrie shell</i> plus 寸 <i>hand</i>: picking up money on the road, hence <i>to obtain</i>. Attached to a verb of perception it forms a compound meaning <i>to come to feel</i>."
              ],
              script: [
                "Simplified 觉得 (9 + 11 strokes) versus traditional 覺得 (20 + 11). 覺 → 觉 uses the same 𭕄 abbreviation as 學 → 学, plus 見 → 见.",
                "得 has three readings and they matter: <b>dé</b> <i>to obtain</i> (得到 dédào), <b>de</b> neutral, the structural particle before a complement (说得很好 <i>speaks very well</i>), and <b>děi</b> <i>must</i> (我得走了 <i>I have to go</i>)."
              ],
              phonology: [
                "jué second tone, <b>de</b> neutral. The 觉 syllable hides a ü: jué is jüé, since the umlaut is not written after j.",
                "觉 also reads <b>jiào</b> as a noun meaning <i>a sleep</i>: 睡觉 shuìjiào <i>to sleep</i>, 午觉 wǔjiào <i>afternoon nap</i>. Same character, two readings, quite different words."
              ],
              cognates: [
                "Sino-Korean 각 (覺) as in 감각 <i>sensation</i> and 착각 <i>misperception</i>; Sino-Japanese かく kaku with native おぼ-える oboeru <i>to remember</i> and さ-める sameru <i>to wake</i> — 感覚 kankaku, 錯覚 sakkaku.",
                "Usage: 觉得 introduces an opinion and is followed by a whole clause — 我觉得他很忙 <i>I think he is busy</i>. To disagree politely, Chinese negates the embedded clause rather than 觉得 itself: 我觉得不对 rather than 我不觉得对. Compare 认为 rènwéi, a more considered <i>to hold the view that</i>, used in writing and argument."
              ]
            }
          },
          {
            term: "有意思",
            roman: "yǒu yìsi",
            gloss: "interesting; fun",
            pos: "adjectival phrase",
            example: { text: "这本书很有意思。", roman: "Zhè běn shū hěn yǒu yìsi.", gloss: "This book is very interesting." },
            linguistics: {
              origin: "phrase: 有 to have + 意思 meaning",
              etymology: [
                "<b>意</b> is <b>音</b> <i>sound</i> over <b>心</b> <i>heart</i>: what the heart sounds out, hence <i>intention, meaning, idea</i>. <b>思</b> is often described as 田 <i>field</i> over 心, but this is wrong and worth correcting — the top element is <b>囟</b> xìn, the <b>fontanel</b> or top of the skull, which the clerical reform flattened into a shape identical to 田. So 思 is <i>head plus heart</i>, an anatomically explicit character for thinking.",
                "The compound 意思 is <i>meaning</i>; 有意思 is literally <i>to have meaning</i>, and it is the ordinary way to say something is interesting or fun. Its opposite, 没有意思 or 没意思, means <i>boring</i>."
              ],
              script: [
                "意 is 13 strokes, 思 is 9; both identical in simplified and traditional.",
                "The 心 heart appears at the bottom in both — a good pair for remembering that 心 in the base position keeps its full four-stroke shape."
              ],
              phonology: [
                "yǒu third tone, yì fourth tone, <b>si</b> neutral. The 思 in this compound is always neutral; on its own, as a verb <i>to think</i>, it is first tone sī.",
                "With the intensifier: 很有意思. Without 很 the phrase sounds contrastive, as with any adjective."
              ],
              cognates: [
                "Sino-Korean 의사 (意思) means <i>intention</i> and 의미 (意味) means <i>meaning</i>; Sino-Japanese 意思 <i>ishi</i> is <i>intention</i> and 意味 <i>imi</i> is <i>meaning</i>. The Chinese sense <i>interesting</i> is unique to Chinese, and 有意思 would be opaque to a Japanese or Korean reader.",
                "Idiomatic extensions worth knowing: 不好意思 bù hǎoyìsi <i>embarrassed; excuse me</i>, one of the most-used phrases in daily life; 小意思 xiǎo yìsi <i>a small token, it's nothing</i>; 什么意思？ <i>what does that mean?</i>"
              ]
            }
          },
          {
            term: "常常",
            roman: "chángcháng",
            gloss: "often, frequently",
            pos: "adverb",
            example: { text: "我常常看电影。", roman: "Wǒ chángcháng kàn diànyǐng.", gloss: "I often watch films." },
            linguistics: {
              origin: "reduplicated phono-semantic character",
              etymology: [
                "<b>常</b> is 巾 <i>cloth</i> at the bottom with the phonetic <b>尚</b> shàng above. Its original meaning was a long lower garment or a banner — a piece of cloth — and from the idea of something always hanging there it developed the sense <i>constant, ordinary, usual</i>.",
                "That range is still visible: 常 <i>constant</i> (经常, 平常), 正常 <i>normal</i>, 常识 <i>common sense</i>, and in the philosophical 无常 wúcháng <i>impermanence</i>, the Chinese rendering of the Buddhist <i>anitya</i>."
              ],
              script: [
                "Eleven strokes, identical in simplified and traditional.",
                "The phonetic 尚 also gives 堂 táng <i>hall</i>, 掌 zhǎng <i>palm</i>, 赏 shǎng <i>to reward</i> and 党 dǎng <i>party</i>."
              ],
              phonology: [
                "Both syllables second tone: chángcháng. Reduplication of an adverb intensifies and softens at once, a common pattern (慢慢 slowly, 好好 properly, 天天 every day).",
                "Distinguish 常 cháng from 唱 chàng <i>to sing</i> and 长 cháng <i>long</i> (which also reads zhǎng <i>to grow</i>)."
              ],
              cognates: [
                "Sino-Korean 상 (常) as in 정상 <i>normal</i>, 일상 <i>daily life</i>, 상식 <i>common sense</i>; Sino-Japanese じょう jō with native つね tsune — 日常 nichijō <i>everyday</i>, 正常 seijō <i>normal</i>.",
                "Adverb placement, as always: <b>before the verb</b> — 我常常看电影, never 我看电影常常. The negative is irregular: <i>not often</i> is 不常 bù cháng, dropping the reduplication (我不常看电影). Related frequency adverbs: 经常 jīngcháng <i>frequently</i>, 有时候 yǒu shíhou <i>sometimes</i>, 很少 hěn shǎo <i>rarely</i>, 从来不 cónglái bù <i>never</i>."
              ]
            }
          },
          {
            term: "周末",
            trad: "週末",
            roman: "zhōumò",
            gloss: "weekend",
            pos: "time noun",
            example: { text: "这个周末你做什么？", roman: "Zhège zhōumò nǐ zuò shénme?", gloss: "What are you doing this weekend?" },
            linguistics: {
              origin: "compound: 周 week, cycle + 末 end",
              etymology: [
                "<b>周</b> originally depicted a field densely planted, or a carved and decorated surface, with the general sense <i>dense, complete all round</i>. From <i>all round</i> came <i>circuit, cycle, week</i>. It is also the name of the <b>Zhou dynasty</b> (c. 1046–256 BCE), the longest in Chinese history.",
                "<b>末</b> is a beautiful indicative character: it is 木 <i>tree</i> with an extra horizontal stroke added at the <b>top</b>, marking the tips of the branches, hence <i>the end, the tip</i>. Its mirror image is <b>本</b> běn, the same tree with a mark at the <b>bottom</b>, marking the roots, hence <i>origin, root, basis</i>. The pair 本末 means <i>the fundamental and the trivial</i>, and 本末倒置 <i>to put the cart before the horse</i>."
              ],
              script: [
                "周 is 8 strokes, 末 is 5. Mainland simplified writing uses 周 for both the cycle sense and the dynasty; Taiwan distinguishes 週 <i>week</i> from 周 <i>circumference, surname</i>.",
                "Watch the stroke lengths: in 末 the top horizontal is <b>longer</b>; in 未 wèi <i>not yet</i> it is shorter. This single difference distinguishes two common characters."
              ],
              phonology: [
                "zhōu first tone, mò fourth tone.",
                "末 was an entering-tone syllable in Middle Chinese, *mat, and the lost -t survives in Korean 말 and Japanese まつ matsu."
              ],
              cognates: [
                "Sino-Korean 주말 <i>jumal</i> (週末) and Sino-Japanese 週末 <i>shūmatsu</i> — the identical compound in all three languages, all modern coinages that arrived with the seven-day week.",
                "Related: 周 as a weekday prefix (周一, 周二, 周日), 上周 <i>last week</i>, 下周 <i>next week</i>, 一周 <i>one week</i>. Also 末 in 期末 <i>end of term</i>, 月末 <i>end of the month</i>, 世纪末 <i>end of the century</i>."
              ]
            }
          },
          {
            term: "运动",
            trad: "運動",
            roman: "yùndòng",
            gloss: "sport, exercise; to exercise; a (political) movement",
            pos: "noun / verb",
            example: { text: "我不喜欢运动。", roman: "Wǒ bù xǐhuan yùndòng.", gloss: "I don't like sport." },
            linguistics: {
              origin: "compound: 运 to move, transport + 动 to move",
              etymology: [
                "<b>运</b> (traditional 運) is 辶 <i>movement along a road</i> plus the phonetic 軍 jūn <i>army</i>, meaning <i>to transport, to revolve, fortune</i>. <b>动</b> (traditional 動) is 力 <i>strength</i> plus the phonetic 重 zhòng <i>heavy</i>, meaning <i>to move</i>.",
                "The compound literally means <i>motion</i>, and the modern senses — physical exercise, organised sport, and a political or social movement — are all nineteenth- and twentieth-century developments, part of the huge wave of new abstract vocabulary that Chinese and Japanese built and exchanged in that period."
              ],
              script: [
                "Simplified 运动 (7 + 6 strokes) versus traditional 運動 (12 + 11). Two systematic changes: 軍 → 云 in 运, and 重 → 云 in 动.",
                "The 辶 radical (走之底) marks motion: 运 transport, 送 to send, 进 to enter, 过 to pass, 还 to return, 这 this, 道 road. It is always written <b>last</b>, after the component it wraps."
              ],
              phonology: [
                "Two fourth tones, yùndòng. The 运 syllable is ün — the umlaut is not written after y.",
                "动 also appears as the second element of many verbs of movement and change: 活动 huódòng <i>activity</i>, 感动 gǎndòng <i>to be moved</i>, 激动 jīdòng <i>excited</i>."
              ],
              cognates: [
                "Sino-Korean 운동 <i>undong</i> (運動) and Sino-Japanese 運動 <i>undō</i> — and in all three languages the word covers both <i>physical exercise</i> and <i>political movement</i>. Korean 민주화 운동 <i>democratisation movement</i> and Chinese 五四运动 <i>the May Fourth Movement</i> use it identically.",
                "Chinese sports vocabulary: 做运动 or 运动 <i>to exercise</i>, 运动员 yùndòngyuán <i>athlete</i>, 运动会 yùndònghuì <i>sports meet</i>, 奥运会 Àoyùnhuì <i>the Olympics</i>."
              ]
            }
          },
          {
            term: "一起",
            roman: "yìqǐ",
            gloss: "together",
            pos: "adverb",
            example: { text: "我们一起去看电影。", roman: "Wǒmen yìqǐ qù kàn diànyǐng.", gloss: "Let's go and see a film together." },
            linguistics: {
              origin: "compound: 一 one + 起 to rise, to start",
              etymology: [
                "<b>起</b> is 走 <i>to run, to go</i> (itself a pictograph of a person swinging their arms above a foot) plus the phonetic <b>己</b> jǐ. It means <i>to rise, to get up, to begin</i>.",
                "The compound is literally <i>as one, rising as one</i>, hence <i>together</i>. The construction with 一 meaning <i>as a single unit</i> also appears in 一样 <i>the same</i>, 一块儿 <i>together</i> (colloquial northern) and 一致 <i>unanimous</i>."
              ],
              script: [
                "一 is 1 stroke, 起 is 10; both identical in simplified and traditional.",
                "走 as a left-hand component appears in 起, 越 and 超, always about motion or exceeding."
              ],
              phonology: [
                "This word is a standard test of the <b>一 sandhi rule</b>. 起 is third tone, so 一 takes the <b>yì</b> form: <i>yìqǐ</i>, not yīqǐ and not yíqǐ. Compare 一定 yídìng (before a fourth tone) and 一天 yì tiān (before a first tone).",
                "In fast speech the whole word is often lightly compressed."
              ],
              cognates: [
                "Sino-Korean 기 (起) as in 기상 <i>to get up</i> and 제기 <i>to raise (an issue)</i>; Sino-Japanese き ki with native お-きる okiru <i>to get up</i> — 起床 kishō, 起源 kigen <i>origin</i>.",
                "Adverb placement again: 一起 goes <b>before the verb</b> — 我们一起去, never 我们去一起. Colloquial alternatives: 一块儿 yíkuàir (Beijing), 一同 yìtóng (formal). The related 一起 can also be a noun-ish 在一起 <i>to be together</i>, as in 他们在一起 <i>they are a couple</i>."
              ]
            }
          },
          {
            term: "朋友",
            roman: "péngyou",
            gloss: "friend",
            pos: "noun",
            example: { text: "我请两个朋友一起去。", roman: "Wǒ qǐng liǎng gè péngyou yìqǐ qù.", gloss: "I'll invite two friends to come along." },
            linguistics: {
              origin: "compound of two ancient graphs, both about pairing",
              etymology: [
                "<b>朋</b> in the oracle-bone script depicts <b>two strings of cowrie shells</b> hanging side by side. It was a unit of currency — a 朋 was a pair of strands, most often reckoned at ten shells — and from the idea of two matched strands came the sense <i>a pair, companions</i>. The modern printed shape looks like two 月 moons, but that is a graphic accident of the clerical reform.",
                "<b>友</b> is two right hands (又) drawn side by side or one above the other, meaning hands joined in cooperation, hence <i>friend</i>. Two characters, two different images of pairing — which is a fair summary of the concept."
              ],
              script: [
                "朋 is 8 strokes, 友 is 4; both identical in simplified and traditional.",
                "The 又 hand also appears in 有, 取 <i>to take</i> (hand and ear, from the practice of taking ears as battle tallies), 受 <i>to receive</i>, 双 <i>pair</i> (two hands) and as a simplification placeholder in 对, 汉, 欢."
              ],
              phonology: [
                "péng second tone, <b>you</b> neutral: péngyou. Saying péngyǒu with a full third tone is a common learner over-pronunciation.",
                "朋 has the -ng ending; do not merge it with 盆 pén."
              ],
              cognates: [
                "Sino-Korean 붕 (朋) is rare and 우 (友) common — 우정 <i>friendship</i>, 친구 <i>friend</i> (親舊, a different compound); Sino-Japanese ほう hō and ゆう yū with native とも tomo — 友情 yūjō <i>friendship</i>, 友達 tomodachi <i>friend</i>.",
                "Chinese usage notes: 男朋友 <i>boyfriend</i> and 女朋友 <i>girlfriend</i> mean romantic partners, so to say <i>a male friend</i> you need 男的朋友 or 男性朋友. 好朋友 <i>close friend</i>, 交朋友 <i>to make friends</i>, 朋友圈 <i>circle of friends</i>, also the name of the WeChat feed."
              ]
            }
          },
          {
            term: "去",
            roman: "qù",
            gloss: "to go, to go to",
            pos: "verb",
            example: { text: "我很想去。", roman: "Wǒ hěn xiǎng qù.", gloss: "I'd really like to go." },
            linguistics: {
              origin: "compound ideograph (会意), details debated",
              etymology: [
                "The oracle-bone graph shows 大, a person, above 凵 or 口, generally read as the entrance of a dwelling or a pit. The usual interpretation is a person stepping away from a doorway, hence <i>to depart, to leave</i>. The <i>Shuowen</i> instead treats the lower element as a phonetic. The components are clear; their interpretation is not fully settled.",
                "The core classical meaning was <i>to leave, to remove</i> — still present in 去年 <i>last year</i> (the year departed), 除去 <i>to remove</i> and 过去 <i>the past</i>. The modern directional sense <i>to go to</i> is the dominant one today."
              ],
              script: [
                "Five strokes, identical in simplified and traditional. 土 on top, then 厶.",
                "去 is the semantic partner of 来 lái <i>to come</i>, which itself is a borrowed pictograph of a wheat plant."
              ],
              phonology: [
                "Fourth tone. The spelling qu hides ü: the syllable is qü, since the umlaut is never written after q.",
                "Middle Chinese *khjoH. Its tone category, 去声 <i>departing tone</i>, is literally named after this character — the four Middle Chinese tone classes were named 平上去入, level, rising, departing and entering."
              ],
              cognates: [
                "Sino-Korean 거 (去) as in 과거 <i>the past</i> and 제거 <i>removal</i>; Sino-Japanese きょ kyo / こ ko with native さ-る saru <i>to leave</i> — 過去 kako <i>the past</i>, 除去 jokyo <i>removal</i>.",
                "Grammatically, 去 chains directly with another verb to express purpose, with no connector: 去看电影 <i>go and see a film</i>, 去吃饭 <i>go and eat</i>, 我们一起去买书 <i>let's go and buy books together</i>. This serial-verb construction is central to Chinese and needs no 和, no <i>to</i> and no comma."
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
            name: "喜欢 xǐhuan — liking things and liking to do things",
            pattern: "Subject + (很/不) 喜欢 + Noun · Subject + 喜欢 + Verb Phrase",
            explanation: [
              "喜欢 takes two kinds of object with no change in form. With a <b>noun</b> it means <i>to like something</i>: 我喜欢音乐 <i>I like music</i>. With a whole <b>verb phrase</b> it means <i>to like doing something</i>: 我喜欢听音乐 <i>I like listening to music</i>. English needs a gerund or an infinitive here; Chinese needs nothing at all — the verb phrase simply follows.",
              "The negative is regular: 不喜欢. 我不喜欢运动 <i>I don't like sport</i>. To intensify, use ordinary adverbs before it: 很喜欢 <i>like very much</i>, 非常喜欢 <i>like enormously</i>, 最喜欢 <i>like best</i>, 有点儿不喜欢 <i>rather dislike</i>. Note that unlike an adjective, 喜欢 does not <b>need</b> 很 in a plain statement — 我喜欢看书 is complete and neutral.",
              "Questions work as expected: 你喜欢看电影吗？ or the A-not-A form 你喜不喜欢看电影？ Notice that A-not-A splits the word itself, giving 喜不喜欢, not 喜欢不喜欢 — though the longer form is also heard.",
              "Two nearby words to keep distinct. <b>爱</b> ài is stronger and is used far more freely than English <i>love</i>: 我爱吃辣的 <i>I love eating spicy food</i> is unremarkable. <b>爱好</b> àihào is the noun <i>a hobby</i>: 我的爱好是看书. And 喜欢 followed by a person means romantic interest, so 我喜欢你 is a declaration, not a statement of general goodwill."
            ],
            examples: [
              { text: "我喜欢音乐。", roman: "Wǒ xǐhuan yīnyuè.", gloss: "I like music. (noun object)" },
              { text: "我喜欢听音乐。", roman: "Wǒ xǐhuan tīng yīnyuè.", gloss: "I like listening to music. (verb-phrase object)" },
              { text: "他不喜欢运动。", roman: "Tā bù xǐhuan yùndòng.", gloss: "He doesn't like sport." },
              { text: "你喜不喜欢看电影？", roman: "Nǐ xǐ bu xǐhuan kàn diànyǐng?", gloss: "Do you like watching films? (A-not-A)" },
              { text: "我最喜欢周末看书。", roman: "Wǒ zuì xǐhuan zhōumò kàn shū.", gloss: "What I like best is reading at the weekend." }
            ]
          },
          {
            name: "Verb-object compounds — 离合词",
            pattern: "唱歌 · 跳舞 · 看书 · 吃饭 · 打球 · 睡觉 · 说话 — additions go INSIDE",
            explanation: [
              "A large class of Chinese words that translate as single English verbs are in fact <b>verb plus object</b>: 唱歌 is <i>sing songs</i>, 跳舞 is <i>dance dances</i>, 看书 is <i>look-at books</i>, 吃饭 is <i>eat rice</i>, 打球 is <i>hit balls</i>, 睡觉 is <i>sleep a sleep</i>, 说话 is <i>speak words</i>. They are called 离合词 <i>separable words</i>, and they behave differently from ordinary verbs.",
              "The key consequence: <b>you cannot add another object</b>. 唱歌一个歌 is impossible, because the object slot is already filled. Anything you want to add must go <b>inside the word</b>, between the verb and its built-in object: 唱<b>中文</b>歌 <i>sing Chinese songs</i>, 跳<b>了一个</b>舞 <i>danced a dance</i>, 看<b>了两本</b>书 <i>read two books</i>, 打<b>了三个小时</b>球 <i>played ball for three hours</i>.",
              "The same applies to aspect markers and complements. <i>He sings very well</i> is 他唱歌唱得很好, with the verb repeated — you cannot say 他唱歌得很好, because 得 must attach directly to the verb, and the object is in the way. This verb-copying construction looks strange at first and is completely standard.",
              "When you want to specify the object, the built-in one is simply replaced: <i>I'm reading a Chinese book</i> is 我看中文书, not 我看书中文书. And when no specification is needed, the compound is used whole: 我喜欢唱歌. Learn each of these as a unit and note the seam in the middle."
            ],
            examples: [
              { text: "我喜欢唱歌。", roman: "Wǒ xǐhuan chànggē.", gloss: "I like singing. (used whole)" },
              { text: "他唱中文歌。", roman: "Tā chàng Zhōngwén gē.", gloss: "He sings Chinese songs. (modifier inside)" },
              { text: "我们跳了一个舞。", roman: "Wǒmen tiào le yí gè wǔ.", gloss: "We danced a dance. (aspect marker inside)" },
              { text: "他唱歌唱得很好。", roman: "Tā chànggē chàng de hěn hǎo.", gloss: "He sings very well. (verb copied)" },
              { text: "我打了两个小时球。", roman: "Wǒ dǎ le liǎng gè xiǎoshí qiú.", gloss: "I played ball for two hours. (duration inside)" }
            ]
          },
          {
            name: "想 xiǎng — wanting, thinking, missing",
            pattern: "Subject + 想 + Verb Phrase (would like to) · Subject + 想 + Clause (think that) · Subject + 想 + Person (miss)",
            explanation: [
              "As a <b>modal verb</b>, 想 sits before another verb and means <i>would like to, feel like</i>: 我想去 <i>I'd like to go</i>, 我想看电影 <i>I feel like watching a film</i>. Negate with 不想: 我不想去. Intensify with 很: 我很想去 <i>I'd really like to go</i>. This is the polite, low-pressure way to express a wish, and it is what you want in most social situations.",
              "Compare the neighbours. <b>要</b> yào is stronger and more definite — <i>want, intend to, be going to</i>: 我要去 <i>I'm going to go</i>. In a shop 我要一杯茶 is a normal order, but 我要去 can sound blunt as a reply to an invitation. <b>喜欢</b> is about general preference, not this occasion: 我喜欢看电影 <i>I like films</i> versus 我想看电影 <i>I want to watch a film (now)</i>. And <b>会</b> huì is ability through learning: 我会跳舞 <i>I know how to dance</i>.",
              "As a <b>full verb of cognition</b>, 想 means <i>to think</i> and takes a clause: 我想他今天很忙 <i>I think he's busy today</i>. Reduplicated, it means <i>to think it over</i>: 让我想想 <i>let me think about it</i>, 我想一想.",
              "And as a plain transitive verb with a person or place as object, 想 means <b>to miss</b>: 我很想你 <i>I miss you very much</i>, 他想家 <i>he's homesick</i>. Context and the type of object tell the three uses apart — a following verb means <i>want to</i>, a following clause means <i>think</i>, a following person means <i>miss</i>."
            ],
            examples: [
              { text: "我想去看电影。", roman: "Wǒ xiǎng qù kàn diànyǐng.", gloss: "I'd like to go and see a film." },
              { text: "我不想吃饭。", roman: "Wǒ bù xiǎng chīfàn.", gloss: "I don't feel like eating." },
              { text: "我很想去！", roman: "Wǒ hěn xiǎng qù!", gloss: "I'd really love to go!" },
              { text: "我想他是老师。", roman: "Wǒ xiǎng tā shì lǎoshī.", gloss: "I think he's a teacher." },
              { text: "我很想你。", roman: "Wǒ hěn xiǎng nǐ.", gloss: "I miss you very much." }
            ]
          },
          {
            name: "为什么 and 因为…所以…",
            pattern: "Subject + 为什么 + Verb? · 因为 + reason，所以 + result",
            explanation: [
              "<b>为什么</b> asks <i>why</i> and, like every Chinese question word, it does <b>not move to the front</b>. It sits in the sentence exactly where the answer will sit — normally after the subject and before the verb: 你为什么不喜欢运动？ Nothing else changes, and no 吗 is added: a sentence already containing a question word never takes 吗.",
              "The answer uses <b>因为</b> <i>because</i>. It can stand alone: 因为我很忙 <i>Because I'm busy</i>. Or the reason and the result can be joined in a single sentence with the paired connective <b>因为…所以…</b>: 因为我很忙，所以我不去 <i>Because I'm busy, (so) I'm not going</i>.",
              "That pairing is the point to notice. English grammar allows <i>because X, Y</i> or <i>X, so Y</i> but forbids <i>because X, so Y</i>. Chinese not only allows both halves, it prefers them — the paired form is the neutral, fully explicit version, and learners who drop 所以 out of English habit sound slightly clipped. The same paired logic runs through other Chinese connectives: 虽然…但是… <i>although…yet…</i>, 如果…就… <i>if…then…</i>, 不但…而且… <i>not only…but also…</i>.",
              "Order can be reversed for emphasis, with the result first and the reason trailing: 我不去，因为我很忙. In that order 所以 is dropped. Also note that 因为 attaches to a <b>clause</b>; to give a reason as a noun phrase, use 因为 plus the noun (因为工作) or the more formal 由于."
            ],
            examples: [
              { text: "你为什么不去？", roman: "Nǐ wèishénme bú qù?", gloss: "Why aren't you going? (no 吗 with a question word)" },
              { text: "因为我很忙。", roman: "Yīnwèi wǒ hěn máng.", gloss: "Because I'm busy." },
              { text: "因为我觉得没有意思，所以我不想去。", roman: "Yīnwèi wǒ juéde méiyǒu yìsi, suǒyǐ wǒ bù xiǎng qù.", gloss: "Because I find it boring, I don't want to go." },
              { text: "我不去，因为我要看书。", roman: "Wǒ bú qù, yīnwèi wǒ yào kàn shū.", gloss: "I'm not going, because I want to read." },
              { text: "他为什么喜欢打球？", roman: "Tā wèishénme xǐhuan dǎqiú?", gloss: "Why does he like playing ball?" }
            ]
          }
        ]
      },
      {
        type: "notes",
        title: "Culture note: how China spends its free time",
        body: [
          "Leisure in China is strikingly <b>collective and public</b>. Parks fill from before dawn: retirees practising 太极拳 tàijíquán, groups doing 广场舞 guǎngchǎngwǔ <i>square dancing</i> to portable speakers, people walking backwards for their knees, choirs singing revolutionary songs, and men playing 象棋 xiàngqí <i>Chinese chess</i> with an audience of commentators. Where Anglophone leisure has drifted indoors and individual, a great deal of Chinese leisure still happens outdoors, in groups, and in public space.",
          "<b>KTV</b> — private-room karaoke — is the default social evening for friends, colleagues and family alike, and singing badly in front of others carries far less embarrassment than it does in Britain or America. Declining to sing at all is more awkward than singing off-key. This is worth knowing before your first work outing: having one song you can get through is a genuinely useful piece of cultural preparation.",
          "<b>麻将</b> májiàng, mahjong, remains the great social game, played in tea houses, homes and dedicated parlours, usually for small stakes. Its clacking is one of the characteristic sounds of a Chinese neighbourhood. Card games, particularly 斗地主 <i>Fight the Landlord</i>, fill the same role among younger players and online.",
          "In sport, the participation picture differs from the spectator picture. <b>乒乓球</b> pīngpāngqiú <i>table tennis</i> and <b>羽毛球</b> yǔmáoqiú <i>badminton</i> are what ordinary people actually play — cheap, space-efficient, and taught in every school. <b>篮球</b> lánqiú <i>basketball</i> is enormously popular among young men, boosted by the NBA and by Yao Ming's career. Football, 足球 zúqiú, is watched with passion and long-suffering patience. Note the verb split covered in the vocabulary: hand sports take 打, football takes 踢.",
          "Two conversational points. First, 有意思 is the standard word of approval for an activity, a book or a film, and it is warmer than the flat English <i>interesting</i> — closer to <i>fun, worth doing</i>. Second, asking about hobbies (你有什么爱好？) is normal small talk, but the honest answer from a Chinese student or young professional is often 没什么时间 <i>I don't have much time</i>. Educational and work pressure is intense, and the recent internet coinage 内卷 nèijuǎn <i>involution</i> — endless competition for diminishing returns — became popular precisely because it named something widely felt."
        ]
      },
      {
        type: "practice",
        title: "Practice",
        exercises: [
          {
            type: "mcq",
            prompt: "Which sentence correctly says 'I like listening to music'?",
            promptAudio: "我喜欢听音乐。",
            choices: [
              "我喜欢是听音乐。",
              "我喜欢听音乐。",
              "我听音乐喜欢。",
              "我很喜欢是音乐听。"
            ],
            answer: 1,
            explain: "喜欢 takes a verb phrase directly, with no linking word and no 是. The verb phrase follows it exactly as a noun would."
          },
          {
            type: "mcq",
            prompt: "'He sings Chinese songs.' Which is correct?",
            promptAudio: "他唱中文歌。",
            choices: ["他唱歌中文。", "他唱歌中文歌。", "他唱中文歌。", "他中文唱歌。"],
            answer: 2,
            explain: "唱歌 is a verb-object compound. A modifier for the object must go inside the word, replacing or qualifying the built-in 歌 — never after the whole compound."
          },
          {
            type: "mcq",
            prompt: "Which sentence is WRONG?",
            promptAudio: null,
            choices: [
              "你为什么不去？",
              "你为什么不去吗？",
              "因为我很忙。",
              "因为我很忙，所以我不去。"
            ],
            answer: 1,
            explain: "A sentence that already contains a question word never takes 吗. The two question markers cannot combine."
          },
          {
            type: "typing",
            prompt: "Type the pinyin (tone marks optional) for 'together'. Watch the tone on 一.",
            answer: ["yìqǐ", "yiqi", "yì qǐ", "yi qi", "一起"],
            hint: "Before a third tone, 一 takes the yì form."
          },
          {
            type: "typing",
            prompt: "Complete the sentence: 我觉得看电影很 ___ 意思。 (interesting)",
            answer: ["有", "yǒu", "you"],
            hint: "Literally 'has meaning'."
          },
          {
            type: "typing",
            prompt: "Type 'Why don't you like sport?' in Chinese characters.",
            answer: ["你为什么不喜欢运动", "你为什么不喜欢运动？", "你為什麼不喜歡運動", "你為什麼不喜歡運動？"],
            hint: "The question word stays where the answer would go — no 吗 at the end."
          },
          {
            type: "listening",
            prompt: "Listen. What does the speaker like doing?",
            audioText: "我喜欢打球，也喜欢听音乐。",
            choices: [
              "Reading and watching films",
              "Playing ball and listening to music",
              "Singing and dancing",
              "Sport but not music"
            ],
            answer: 1,
            explain: "打球 is playing ball and 听音乐 is listening to music. 也 before the second 喜欢 links them: 'and also likes'."
          },
          {
            type: "listening",
            prompt: "Listen. What reason is given?",
            audioText: "因为我觉得运动没有意思。",
            choices: [
              "Because sport is expensive",
              "Because he is busy",
              "Because he finds sport boring",
              "Because he has no friends"
            ],
            answer: 2,
            explain: "没有意思 is literally 'has no meaning' and is the standard way to say something is boring. 觉得 introduces it as the speaker's opinion."
          },
          {
            type: "match",
            prompt: "Match each activity with its English meaning.",
            pairs: [
              { a: "唱歌", b: "to sing" },
              { a: "跳舞", b: "to dance" },
              { a: "打球", b: "to play ball" },
              { a: "看书", b: "to read" },
              { a: "看电影", b: "to watch a film" },
              { a: "听音乐", b: "to listen to music" }
            ]
          },
          {
            type: "match",
            prompt: "Match each word with its function.",
            pairs: [
              { a: "喜欢", b: "to like (preference)" },
              { a: "想", b: "would like to (intention)" },
              { a: "为什么", b: "asks for a reason" },
              { a: "因为", b: "introduces a reason" },
              { a: "所以", b: "introduces a result" }
            ]
          },
          {
            type: "order",
            prompt: "Arrange into a sentence: 'I like watching films at the weekend.'",
            tokens: ["看电影", "我", "喜欢", "周末"],
            answer: "我 周末 喜欢 看电影"
          },
          {
            type: "order",
            prompt: "Arrange into a sentence: 'Because I'm busy, I don't want to go.'",
            tokens: ["我不想去", "因为我很忙", "所以"],
            answer: "因为我很忙 所以 我不想去"
          }
        ]
      }
    ]
  });
})();
