window.CURRICULUM = window.CURRICULUM || {};
(function () {
  const C = window.CURRICULUM;
  C.chinese = C.chinese || { units: [] };
  C.chinese.units.push({
    id: "zh-03",
    order: 3,
    title: "Dates & Time",
    titleNative: "日期和时间",
    subtitle: "Give the date, name the day, tell the clock, and put time words in the right place.",
    textbookBasis: [
      "Integrated Chinese Level 1 Part 1 (4th ed.), Lesson 3: Dates and Time",
      "HSK Standard Course 1, Lessons 7–9",
      "New Practical Chinese Reader 1, Lessons 7–8"
    ],
    overview: [
      "Chinese time expressions are built on one organising principle: <b>largest unit first</b>. A date runs year, then month, then day; an address runs country, city, street, number; a clock time runs hour, then minute. English does the reverse in most of these cases, so the habit takes a little rewiring, but once you have it there are almost no irregularities to memorise.",
      "The second principle is about <b>where time words go in a sentence</b>. A time-when expression stands <b>before the verb</b> — either at the very front of the sentence or right after the subject — and never after it. English <i>I eat at seven</i> becomes 我七点吃饭, literally <i>I seven-o'clock eat</i>. Getting this wrong is the single most common word-order error at this level.",
      "You will also meet a construction that surprises many learners: with dates, days of the week and clock times, <b>是 can be dropped</b>. 今天是星期四 and 今天星期四 are both correct, and the shorter form is more natural in speech. This is one of the few places where Chinese permits a sentence with no verb at all."
    ],
    sections: [
      {
        type: "dialogue",
        title: "明天是我的生日 — Tomorrow is my birthday",
        context: "Wang Peng and Li You are leaving class. Wang Peng mentions his birthday, and Li You seizes the chance to invite him to dinner.",
        lines: [
          { speaker: "王朋", text: "李友，今天是几月几号？", roman: "Lǐ Yǒu, jīntiān shì jǐ yuè jǐ hào?", gloss: "Li You, what is the date today?" },
          { speaker: "李友", text: "今天是九月十二号，星期四。", roman: "Jīntiān shì jiǔ yuè shí'èr hào, xīngqīsì.", gloss: "Today is the twelfth of September, Thursday." },
          { speaker: "王朋", text: "那明天是我的生日。", roman: "Nà míngtiān shì wǒ de shēngrì.", gloss: "Then tomorrow is my birthday." },
          { speaker: "李友", text: "是吗？你今年多少岁？", roman: "Shì ma? Nǐ jīnnián duōshao suì?", gloss: "Really? How old are you this year?" },
          { speaker: "王朋", text: "我今年十九岁。", roman: "Wǒ jīnnián shíjiǔ suì.", gloss: "I'm nineteen this year." },
          { speaker: "李友", text: "明天晚上你忙吗？我请你吃饭。", roman: "Míngtiān wǎnshang nǐ máng ma? Wǒ qǐng nǐ chīfàn.", gloss: "Are you busy tomorrow evening? Let me treat you to dinner." },
          { speaker: "王朋", text: "我不忙。几点？", roman: "Wǒ bù máng. Jǐ diǎn?", gloss: "I'm not busy. What time?" },
          { speaker: "李友", text: "晚上七点半，怎么样？", roman: "Wǎnshang qī diǎn bàn, zěnmeyàng?", gloss: "Seven thirty in the evening — how does that sound?" },
          { speaker: "王朋", text: "好！明天晚上七点半见。谢谢你！", roman: "Hǎo! Míngtiān wǎnshang qī diǎn bàn jiàn. Xièxie nǐ!", gloss: "Great! See you tomorrow at seven thirty. Thank you!" }
        ]
      },
      {
        type: "vocab",
        title: "New words — 生词",
        items: [
          {
            term: "今天",
            roman: "jīntiān",
            gloss: "today",
            pos: "time noun",
            example: { text: "今天是星期四。", roman: "Jīntiān shì xīngqīsì.", gloss: "Today is Thursday." },
            linguistics: {
              origin: "compound: 今 now + 天 day",
              etymology: [
                "<b>今</b> means <i>now, the present</i>. Its origin is not securely settled: the oracle-bone graph is a covering or bell-like shape, and proposals include an inverted 曰 <i>to speak</i> and a mouth-covering gesture. It is safest to treat 今 as a graph whose original picture is unrecovered.",
                "<b>天</b> is far clearer. It is 大, a person standing with arms outstretched, with an emphatic line or block drawn across the top of the head: <i>what is above the person</i>, hence <i>sky, heaven</i>. From <i>sky</i> came <i>day</i>, and from <i>heaven</i> came the whole political vocabulary of 天子 <i>Son of Heaven</i> and 天命 <i>the Mandate of Heaven</i>."
              ],
              script: [
                "今 is 4 strokes, 天 is 4; both identical in simplified and traditional.",
                "Distinguish 天 from 夫 fū <i>husband</i>, which has the vertical stroke breaking through the top line, and from 大 dà <i>big</i>, which has no top line at all."
              ],
              phonology: [
                "jīn first tone, tiān first tone. Two level tones in a row — keep both high and flat rather than letting the second sag.",
                "The formal written equivalent is 今日 jīnrì, which is also the everyday word in Japanese (今日 kyō) and appears in Cantonese as 今日 gam1 jat6."
              ],
              cognates: [
                "Sino-Korean 금 (今) as in 금일 <i>today</i> (formal) and 지금 <i>now</i>; Sino-Japanese こん kon / きん kin with native いま ima. Sino-Korean 천 (天) as in 천국 <i>heaven</i>; Sino-Japanese てん ten (天気 tenki <i>weather</i>).",
                "The 今/明/昨 series is fully systematic: 今天 today, 明天 tomorrow, 昨天 yesterday; 今年 this year, 明年 next year, 去年 last year; 今天早上 this morning. Note the irregularity — last year is 去年, not 昨年 (though 昨年 is the normal Japanese word)."
              ]
            }
          },
          {
            term: "明天",
            roman: "míngtiān",
            gloss: "tomorrow",
            pos: "time noun",
            example: { text: "明天是我的生日。", roman: "Míngtiān shì wǒ de shēngrì.", gloss: "Tomorrow is my birthday." },
            linguistics: {
              origin: "compound: 明 bright, next + 天 day",
              etymology: [
                "<b>明</b> is the standard example of a compound ideograph: 日 <i>sun</i> beside 月 <i>moon</i>, the two brightest things, giving <i>bright</i>. But the oracle-bone record is more interesting than the textbook version. Many early forms write it not with 日 but with <b>囧</b>, a graph depicting a latticed window, plus 月 — moonlight coming through a window. The two variants coexisted for centuries before the sun-and-moon form won out.",
                "The meaning <i>next, following</i> as in 明天 and 明年 is an extension from <i>bright</i> by way of <i>dawn</i>: the next brightening is the next day."
              ],
              script: [
                "明 is 8 strokes, identical in simplified and traditional. 日 on the left is written narrow and tall.",
                "明 gave its name to the Ming dynasty (1368–1644) and appears in 明白 míngbai <i>to understand</i>, literally <i>bright-white</i>, and 说明 shuōmíng <i>to explain</i>."
              ],
              phonology: [
                "míng second tone, tiān first tone.",
                "Middle Chinese *mjaeng. The -ng ending is intact; be careful not to pronounce it as -n, which would suggest 民 mín <i>people</i>."
              ],
              cognates: [
                "Sino-Korean 명 (明) as in 명확 <i>clear</i> and 설명 <i>explanation</i>; Sino-Japanese めい mei / みょう myō with native あか-るい akarui <i>bright</i> — 説明 setsumei, 明日 ashita/myōnichi <i>tomorrow</i>, the very same compound as Chinese 明日.",
                "In Chinese, 明天 is the spoken form and 明日 the written or formal one. The reverse holds in Japanese, where 明日 is the ordinary word."
              ]
            }
          },
          {
            term: "昨天",
            roman: "zuótiān",
            gloss: "yesterday",
            pos: "time noun",
            example: { text: "昨天是星期三。", roman: "Zuótiān shì xīngqīsān.", gloss: "Yesterday was Wednesday." },
            linguistics: {
              origin: "phono-semantic 昨 + 天",
              etymology: [
                "<b>昨</b> is 日 <i>sun, day</i> plus the phonetic <b>乍</b> zhà. 乍 is the same element found in 作 zuò <i>to make</i> and 怎 zěn <i>how</i>, and it is generally taken to depict a cutting or sudden action, though its original picture is debated.",
                "The 日 component here is genuinely semantic — the word is about a day — which is not always true of phonetic compounds, where the semantic element is sometimes a loose gesture at a category."
              ],
              script: [
                "昨 is 9 strokes, identical in simplified and traditional.",
                "The 乍 phonetic series: 作 zuò, 昨 zuó, 怎 zěn, 诈 zhà <i>to swindle</i>, 炸 zhá/zhà <i>to fry, to explode</i>. Note how far the modern readings have drifted apart — a good illustration of why phonetic components are hints, not rules."
              ],
              phonology: [
                "zuó second tone, tiān first tone.",
                "Middle Chinese *dzak, an entering-tone syllable ending in -k. Cantonese preserves it as zok6 and Korean as 작."
              ],
              cognates: [
                "Sino-Korean 작 (昨) as in 작년 <i>last year</i> — note that Korean uses 昨年 for last year where Mandarin uses 去年. Sino-Japanese さく saku, likewise 昨年 sakunen.",
                "The Chinese set: 昨天 yesterday, 前天 qiántiān the day before yesterday, 后天 hòutiān the day after tomorrow, 大前天 and 大后天 for three days either side. This five-day window has single words in Chinese and requires phrases in English."
              ]
            }
          },
          {
            term: "号",
            trad: "號",
            roman: "hào",
            gloss: "day of the month; number",
            pos: "measure word / noun",
            example: { text: "今天是九月十二号。", roman: "Jīntiān shì jiǔ yuè shí'èr hào.", gloss: "Today is the twelfth of September." },
            linguistics: {
              origin: "phono-semantic compound (形声)",
              etymology: [
                "The traditional character <b>號</b> is 号 on the left — itself 口 <i>mouth</i> over 丂, depicting a drawn-out cry — plus <b>虎</b> <i>tiger</i> on the right. The original meaning is <b>to roar, to cry out</b>, still alive in the reading <b>háo</b>: 号叫 háojiào <i>to howl</i>, 北风怒号 <i>the north wind howls</i>.",
                "From <i>calling out</i> came <i>to be called, a designation</i>, then <i>a number or mark</i>, which is the everyday modern sense. The simplification dropped the tiger entirely, promoting the left component to the whole character."
              ],
              script: [
                "Simplified <b>号</b> is 5 strokes; traditional <b>號</b> is 13.",
                "In dates, 号 is the spoken form and <b>日</b> rì is the written one. A calendar or a formal document prints 九月十二日; a person speaking says 九月十二号."
              ],
              phonology: [
                "Fourth tone in the date and number senses, hào. Second tone, háo, in the howling sense.",
                "The final is ao, a smooth glide, not two syllables."
              ],
              cognates: [
                "Sino-Korean 호 (號) as in 번호 <i>number</i> and 신호 <i>signal</i>; Sino-Japanese ごう gō — 番号 bangō <i>number</i>, 信号 shingō <i>signal</i>, and the 号 used for train names (のぞみ号).",
                "Other Chinese uses: 房间号 room number, 学号 student number, 五号 <i>number five</i> or <i>size five</i>, 几号 <i>which number / which day of the month</i>."
              ]
            }
          },
          {
            term: "星期",
            roman: "xīngqī",
            gloss: "week",
            pos: "noun",
            example: { text: "今天星期几？", roman: "Jīntiān xīngqī jǐ?", gloss: "What day of the week is it today?" },
            linguistics: {
              origin: "modern compound: 星 star + 期 period",
              etymology: [
                "<b>星</b> is a phono-semantic compound whose earliest forms have <b>晶</b> — three suns, representing sparkling points of light — as the semantic element, with <b>生</b> shēng as the phonetic. Later writing reduced the three suns to one 日. <b>期</b> is 月 <i>moon, month</i> plus the phonetic 其 qí, meaning <i>a fixed period, a term</i>.",
                "The word 星期 is <b>modern</b>. China had no seven-day week traditionally; the calendar ran on ten-day 旬 xún periods and on the sexagenary cycle. A seven-day planetary week did reach Tang China from India via Buddhist astronomical texts, under the name <b>七曜</b> <i>the seven luminaries</i>, but it never took hold in daily life. The week as a working institution arrived with nineteenth-century Western contact and Christian missionary practice, and 星期 was coined then to name it."
              ],
              script: [
                "星 is 9 strokes, 期 is 12; both identical in simplified and traditional.",
                "Alternatives you will hear: <b>礼拜</b> lǐbài, literally <i>worship</i>, which betrays the missionary origin directly, and <b>周</b> zhōu, common in writing and in 周末 zhōumò <i>weekend</i>."
              ],
              phonology: [
                "xīng first tone, qī first tone. In Taiwan the second syllable is often pronounced <b>qí</b>, second tone — a standard regional difference.",
                "星 has the -ng ending, 期 the palatal q-."
              ],
              cognates: [
                "Here the borrowing history is visible. <b>Japanese and Korean kept the older 七曜 system</b>: Japanese 月曜日 getsuyōbi <i>Monday</i> (moon-day), 火曜日 kayōbi <i>Tuesday</i> (fire/Mars-day), 水曜日 suiyōbi (water/Mercury), and Korean 월요일, 화요일, 수요일 identically. Those names track the classical planetary week that Europe also uses (<i>Monday</i>, <i>mardi</i> from Mars, <i>mercredi</i> from Mercury).",
                "Mandarin alone abandoned the planetary names and numbers its days instead: 星期一, 星期二, 星期三. This makes Chinese weekday names by far the easiest of the three languages to learn — and it is a direct result of the week having been re-imported in the modern era rather than inherited."
              ]
            }
          },
          {
            term: "天",
            roman: "tiān",
            gloss: "day; sky, heaven",
            pos: "noun / measure word",
            example: { text: "一个星期有七天。", roman: "Yí gè xīngqī yǒu qī tiān.", gloss: "There are seven days in a week." },
            linguistics: {
              origin: "indicative (指事) built on a pictograph",
              etymology: [
                "天 is 大 — a front-facing human figure with arms and legs spread — with the head enlarged into a block or a line. The mark points to <i>what is above</i>: the crown of the head, and beyond it the sky. Some early forms show a genuinely oversized head, which is why the character is sometimes classified as depicting the top of the person rather than the sky directly.",
                "The move from <i>sky</i> to <i>heaven</i> as a moral and political authority is one of the oldest ideas in Chinese thought. 天命 <i>the Mandate of Heaven</i>, formulated in the early Zhou, held that a ruler governs by Heaven's warrant and forfeits it through misrule — a doctrine that legitimised every dynastic change for three thousand years."
              ],
              script: [
                "Four strokes: two horizontals (the upper one shorter), then the left-falling and right-falling strokes. Identical in simplified and traditional.",
                "Careful: 天 (line on top), 夫 fū <i>husband</i> (vertical breaks through), 大 dà <i>big</i> (no top line), 太 tài <i>too</i> (大 plus a dot)."
              ],
              phonology: [
                "First tone. Middle Chinese *then.",
                "As a measure word 天 counts days directly with <b>no additional classifier</b>: 三天 <i>three days</i>, not 三个天. The same is true of 年 (三年) but not of 星期 or 月, which do take 个: 三个星期, 三个月."
              ],
              cognates: [
                "Sino-Korean 천 (天) as in 천국 <i>heaven</i> and 천재 <i>genius</i>; Sino-Japanese てん ten — 天気 tenki <i>weather</i>, 天才 tensai <i>genius</i>, 天ぷら tempura (though that word is actually of Portuguese origin, with the characters applied afterwards).",
                "Common Chinese compounds: 天气 tiānqì <i>weather</i>, 春天 chūntiān <i>spring</i>, 每天 měitiān <i>every day</i>, 白天 báitiān <i>daytime</i>, 天天 tiāntiān <i>every single day</i>."
              ]
            }
          },
          {
            term: "年",
            roman: "nián",
            gloss: "year",
            pos: "noun / measure word",
            example: { text: "我今年十九岁。", roman: "Wǒ jīnnián shíjiǔ suì.", gloss: "I am nineteen this year." },
            linguistics: {
              origin: "compound ideograph (会意)",
              etymology: [
                "The oracle-bone graph shows <b>禾</b>, a stalk of grain with its head bent over, above <b>人</b>, a person — someone carrying the harvest home. The original meaning was therefore <i>the harvest</i>, and since the grain harvest comes once a year, the word came to mean <i>year</i>. The <i>Shuowen</i> glosses it explicitly as 穀熟也, <i>the ripening of grain</i>.",
                "The agricultural origin is still visible in 年成 niánchéng <i>the year's harvest</i> and in the fact that the New Year festival is fundamentally an agricultural new year, tied to the end of winter rather than to any astronomical event."
              ],
              script: [
                "Six strokes, identical in simplified and traditional. The clerical reform obscured both original components, so the modern shape shows neither the grain nor the person.",
                "The 禾 grain radical is still transparent elsewhere: 和 harmony, 秋 autumn, 科 subject, 租 to rent, 香 fragrant."
              ],
              phonology: [
                "Second tone. Middle Chinese *nen.",
                "As a measure word 年 needs no additional classifier: 三年 <i>three years</i>, 一年 <i>one year</i>. Years as dates are read digit by digit: 二零二五年, <i>two-zero-two-five year</i>, never 两千零二十五年."
              ],
              cognates: [
                "Sino-Korean 년/연 (年) as in 작년 <i>last year</i> and 연말 <i>year end</i>; Sino-Japanese ねん nen with native とし toshi — 今年 kotoshi, 来年 rainen.",
                "The Chinese series: 今年 this year, 明年 next year, 去年 last year, 前年 the year before last, 后年 the year after next. Note the asymmetry with days: it is 去年 for last year but 昨天 for yesterday."
              ]
            }
          },
          {
            term: "点",
            trad: "點",
            roman: "diǎn",
            gloss: "o'clock; dot, point; a little",
            pos: "measure word / noun / verb",
            example: { text: "现在七点。", roman: "Xiànzài qī diǎn.", gloss: "It's seven o'clock now." },
            linguistics: {
              origin: "phono-semantic compound (形声)",
              etymology: [
                "The traditional character <b>點</b> is <b>黑</b> <i>black</i> as the semantic element plus the phonetic <b>占</b> zhān. Its original meaning is <i>a black spot or dot</i> — a mark of ink.",
                "From <i>dot</i> the word radiated widely: <i>a point</i> in an argument, <i>a little bit</i> (一点儿), <i>to mark or select</i> (点菜 <i>to order dishes</i>, 点名 <i>to call the roll</i>), <i>to light</i> a lamp (点灯), and <i>o'clock</i>. The clock sense connects to the marked points on a dial and to the older 更点 system of night watches struck on a drum."
              ],
              script: [
                "Simplified <b>点</b> (9 strokes) versus traditional <b>點</b> (17). The 黑 component is reduced to the four-dot 灬 at the bottom — which, confusingly, is normally the fire radical. Here it is the residue of 黑, whose own bottom is 灬 representing soot from a flame.",
                "占 as a phonetic also appears in 站 zhàn <i>to stand, station</i>, 战 zhàn <i>war</i> and 沾 zhān."
              ],
              phonology: [
                "Third tone. Sandhi applies before another third tone: 五点 wǔ diǎn → <i>wú diǎn</i>.",
                "Very frequently takes erhua in the <i>a little</i> sense: 一点儿 yìdiǎnr, which is nearly obligatory in Beijing speech."
              ],
              cognates: [
                "Sino-Korean 점 (點) as in 점수 <i>score</i>, 시점 <i>point in time</i>, 장점 <i>strong point</i>; Sino-Japanese てん ten — 点数 tensū, 弱点 jakuten <i>weak point</i>.",
                "Time uses: 两点 <i>two o'clock</i> (两, not 二), 十二点 <i>twelve o'clock</i>, 几点 <i>what time</i>, 点半 <i>half past</i>. Other uses: 一点儿 <i>a little</i>, 点菜 <i>to order food</i>, 有一点儿贵 <i>a bit expensive</i>."
              ]
            }
          },
          {
            term: "分",
            roman: "fēn",
            gloss: "minute; to divide; cent",
            pos: "measure word / verb",
            example: { text: "现在七点十分。", roman: "Xiànzài qī diǎn shí fēn.", gloss: "It's ten past seven now." },
            linguistics: {
              origin: "compound ideograph (会意)",
              etymology: [
                "分 is <b>八</b> over <b>刀</b>. The 八 here is not the number eight: it is the older graph for <i>to separate</i>, two strokes turning away from each other. Beneath it is a knife. The whole is <i>to cut apart, to divide</i>, and the <i>Shuowen</i> analysis 从八从刀 says exactly that.",
                "Everything else follows from division. A minute is a division of an hour; a cent is a division of a currency unit; a mark on a test is a division of a total; 分 as a verb is <i>to divide, to distribute</i>."
              ],
              script: [
                "Four strokes, identical in simplified and traditional.",
                "The 八 <i>separate</i> element also appears in 半 <i>half</i>, 公 <i>public</i>, 兮 and 曾, always with the sense of parting or opening out."
              ],
              phonology: [
                "First tone as <i>minute, to divide, cent</i>: fēn. Fourth tone <b>fèn</b> as a noun meaning <i>share, portion, component</i>: 部分 bùfen <i>part</i>, 身份 shēnfèn <i>identity</i>, 成分 chéngfèn <i>ingredient</i>.",
                "Middle Chinese *pjun. Note the -n ending, not -ng."
              ],
              cognates: [
                "Sino-Korean 분 (分) — 십분 <i>ten minutes</i>, 분류 <i>classification</i>, 자신 and 신분 <i>social status</i>; Sino-Japanese ふん fun / ぶん bun / ぶ bu — 五分 gofun <i>five minutes</i>, 分かる wakaru <i>to understand</i> (from <i>to divide</i>, hence to distinguish), 自分 jibun <i>oneself</i>.",
                "Chinese uses: 十分 shífēn also means <i>very</i> (ten parts out of ten); 分钟 fēnzhōng is <i>a minute of duration</i> as opposed to a minute on the clock — 五分钟 <i>for five minutes</i> versus 五分 <i>five past</i>."
              ]
            }
          },
          {
            term: "半",
            roman: "bàn",
            gloss: "half",
            pos: "number",
            example: { text: "晚上七点半。", roman: "Wǎnshang qī diǎn bàn.", gloss: "Half past seven in the evening." },
            linguistics: {
              origin: "compound ideograph (会意)",
              etymology: [
                "半 is <b>八</b> <i>to separate</i> over <b>牛</b> <i>ox</i>. The <i>Shuowen</i> defines it as 物中分也，从八从牛 — <i>to divide a thing down the middle; from 八 and 牛</i> — and explains the ox as the archetypal large animal that would be divided and shared out. Whatever the exact motivation, the 八 element carries the core sense of splitting, as it does in 分.",
                "The graphic shape has been stable since the bronze inscriptions."
              ],
              script: [
                "Five strokes, identical in simplified and traditional. The two upper dots slant outward — that is the 八 element.",
                "Compare 判 pàn <i>to judge</i>, which is 半 plus a knife: to divide a case."
              ],
              phonology: [
                "Fourth tone. Middle Chinese *panH.",
                "In time expressions 半 follows 点 directly: 七点半 <i>half past seven</i>. It is never 半七点, and there is no Chinese equivalent of English <i>half to</i>."
              ],
              cognates: [
                "Sino-Korean 반 (半) — 반년 <i>half a year</i>, 절반 <i>half</i>; Sino-Japanese はん han — 半分 hanbun <i>half</i>, 三時半 sanjihan <i>half past three</i>, exactly the Chinese construction.",
                "Chinese uses: 一半 yíbàn <i>a half</i> (as a noun), 半个小时 bàn gè xiǎoshí <i>half an hour</i>, 半天 bàntiān <i>half a day</i> and colloquially <i>ages</i>, 一个半小时 <i>an hour and a half</i> — note the 半 comes after the measure word in that pattern."
              ]
            }
          },
          {
            term: "刻",
            roman: "kè",
            gloss: "quarter of an hour; to carve",
            pos: "measure word / verb",
            example: { text: "三点一刻。", roman: "Sān diǎn yí kè.", gloss: "A quarter past three." },
            linguistics: {
              origin: "phono-semantic compound (形声)",
              etymology: [
                "刂 <i>knife</i> as the semantic element plus <b>亥</b> hài as the phonetic. The base meaning is <b>to carve, to engrave</b> — 刻字 <i>to carve characters</i>, 雕刻 <i>sculpture</i>.",
                "The time sense comes from a specific piece of technology. The traditional Chinese water clock, 刻漏 kèlòu, measured time by a graduated rod floating in a draining vessel; the graduations were <b>notches cut into the rod</b>. A 刻 was originally one hundredth of a day, about 14.4 minutes. When Western clocks arrived, the unit was conveniently redefined as one ninety-sixth of a day — exactly fifteen minutes — and it survives today only in telling the time."
              ],
              script: [
                "Eight strokes, identical in simplified and traditional. 亥 on the left, 刂 (the compressed form of 刀) on the right.",
                "The 刂 radical marks cutting: 刻 to carve, 到 to arrive, 别 don't, 前 front, 分 (with full 刀), 剪 to cut."
              ],
              phonology: [
                "Fourth tone. Middle Chinese *khok, an entering-tone syllable with final -k.",
                "In time expressions the number one before 刻 undergoes 一 sandhi: 一刻 is <b>yí kè</b>, since 刻 is fourth tone."
              ],
              cognates: [
                "Sino-Korean 각 (刻) as in 시각 <i>point in time</i>, 조각 <i>sculpture</i>, 즉각 <i>immediately</i>; Sino-Japanese こく koku — 時刻 jikoku <i>time, hour</i>, 彫刻 chōkoku <i>sculpture</i>, 深刻 shinkoku <i>serious</i>.",
                "Usage: 一刻 and 三刻 are common (三点一刻 <i>quarter past three</i>, 三点三刻 <i>quarter to four</i>), but 二刻 is not used — for half past, say 半. 刻 is somewhat more formal or old-fashioned than saying 十五分."
              ]
            }
          },
          {
            term: "现在",
            trad: "現在",
            roman: "xiànzài",
            gloss: "now, at present",
            pos: "time noun",
            example: { text: "现在几点？", roman: "Xiànzài jǐ diǎn?", gloss: "What time is it now?" },
            linguistics: {
              origin: "compound: 现 to appear + 在 to exist",
              etymology: [
                "<b>现</b> (traditional 現) is 王 — which here is the compressed form of <b>玉</b> <i>jade</i>, not 王 <i>king</i> — plus 见 jiàn <i>to see</i>, which serves as both phonetic and semantic. The original meaning is <i>for jade to show its lustre</i>, hence <i>to appear, to become visible</i>. <b>在</b> is 才 as phonetic over 土 <i>earth</i>, meaning <i>to be present, to exist, at</i>.",
                "The compound 现在 is <i>appearing-existing</i>, that is, the moment presently manifest. It is a Buddhist-influenced term: Buddhist texts translated from Sanskrit needed vocabulary for the three times — 过去 <i>past</i>, 现在 <i>present</i>, 未来 <i>future</i> — and that triad, still the standard Chinese terminology, entered the language through those translations."
              ],
              script: [
                "Simplified 现在 (8 + 6 strokes) versus traditional 現在 (11 + 6). 見 → 见 again.",
                "The jade radical 玉/王 on the left is worth learning: 玩 to play, 现 to appear, 珠 pearl, 理 reason, 球 ball. When it means king it stands alone; on the left of a character it is almost always jade."
              ],
              phonology: [
                "Two fourth tones, xiànzài — brisk, with the first fall shortened.",
                "Note the -n on 现 and the -i on 在; neither has a nasal -ng."
              ],
              cognates: [
                "Sino-Korean 현재 <i>hyeonjae</i> (現在) meaning <i>the present</i> — the identical compound; Sino-Japanese 現在 <i>genzai</i>, also identical. The Buddhist triad travelled with the rest: Korean 과거/현재/미래, Japanese 過去/現在/未来.",
                "Chinese alternatives: 目前 mùqián <i>at present</i> (more formal), 这会儿 zhèhuìr (colloquial northern), 此刻 cǐkè <i>at this moment</i> (literary)."
              ]
            }
          },
          {
            term: "时间",
            trad: "時間",
            roman: "shíjiān",
            gloss: "time (as a quantity or resource)",
            pos: "noun",
            example: { text: "明天晚上你有时间吗？", roman: "Míngtiān wǎnshang nǐ yǒu shíjiān ma?", gloss: "Do you have time tomorrow evening?" },
            linguistics: {
              origin: "compound: 时 time + 间 interval",
              etymology: [
                "<b>时</b> (traditional 時) is 日 <i>sun</i> plus the phonetic 寺 sì — a character that originally denoted a government office and only later came to mean <i>Buddhist temple</i>. The sun element is genuinely semantic: time was told by the sun.",
                "<b>间</b> (traditional 間) is even better. Its older written form is <b>閒</b>: a <b>door</b> 門 with the <b>moon</b> 月 showing through the gap between its leaves. The image is precisely an <i>interval</i> — a space between two things. Later writing substituted 日 for 月, giving 間, but the moon version is the original.",
                "Together, 时间 is <i>the interval of time</i>. Like many modern abstract nouns in Chinese, it was standardised in the late nineteenth and early twentieth centuries, partly under Japanese influence."
              ],
              script: [
                "Simplified 时间 (7 + 7 strokes) versus traditional 時間 (10 + 12). Two systematic changes: 寺 → 寸 in 时, and 門 → 门 in every character with a door.",
                "The 门 family: 间 interval, 问 to ask, 闻 to hear, 闭 to close, 开 to open (though 开 lost its door in simplification), 闹 noisy."
              ],
              phonology: [
                "shí second tone, jiān first tone. 间 also has a fourth-tone reading <b>jiàn</b> meaning <i>gap, to separate</i>: 间隔 jiàngé.",
                "时 has the retroflex sh- with the buzzing vowel, identical in sound to 十 shí <i>ten</i> and 石 shí <i>stone</i>."
              ],
              cognates: [
                "Sino-Korean 시간 <i>sigan</i> (時間) and Sino-Japanese 時間 <i>jikan</i> — the identical compound with the identical meaning in all three languages, and one of the most useful words to notice if you know any of the others.",
                "Related: 时候 shíhou <i>moment, when</i> (什么时候 <i>when?</i>), 小时 xiǎoshí <i>an hour of duration</i>, 时代 shídài <i>era</i>, 房间 fángjiān <i>room</i>, 中间 zhōngjiān <i>in between</i>. Distinguish 时间 (time as a resource) from 时候 (a point in time): 你有时间吗？ but 你什么时候来？"
              ]
            }
          },
          {
            term: "生日",
            roman: "shēngrì",
            gloss: "birthday",
            pos: "noun",
            example: { text: "明天是我的生日。", roman: "Míngtiān shì wǒ de shēngrì.", gloss: "Tomorrow is my birthday." },
            linguistics: {
              origin: "compound: 生 to be born + 日 day",
              etymology: [
                "A transparent compound, <i>birth-day</i>, built from the sprouting-plant pictograph 生 and the sun pictograph 日, both treated in earlier units. What is worth noting is that the transparency is not universal: Japanese uses 誕生日 <i>tanjōbi</i>, adding 誕 <i>to be born</i>, and Korean uses 생일 <i>saengil</i>, which is exactly 生日.",
                "In this compound 生 keeps its <b>full first tone</b>, unlike 学生 xuésheng and 先生 xiānsheng where it reduces. There is no rule; it must be learnt word by word."
              ],
              script: [
                "生 is 5 strokes, 日 is 4; both identical in simplified and traditional.",
                "生 is written 丿 一 一 丨 一 — the long base horizontal comes last."
              ],
              phonology: [
                "shēng first tone, rì fourth tone. Both full.",
                "The retroflex r- of 日 is a difficult initial: it is the voiced counterpart of sh-, not an English r, and the following vowel is the buzzing placeholder."
              ],
              cognates: [
                "Korean 생일 <i>saengil</i> is the identical compound; the honorific equivalent is 생신. Japanese 誕生日 <i>tanjōbi</i> and Vietnamese <i>sinh nhật</i> — the Vietnamese is again 生日 exactly.",
                "The birthday song in Chinese is sung to the familiar tune with the words 祝你生日快乐 <i>zhù nǐ shēngrì kuàilè</i>. Related: 出生 chūshēng <i>to be born</i>, 生活 shēnghuó <i>life</i>, 生气 shēngqì <i>to get angry</i>."
              ]
            }
          },
          {
            term: "岁",
            trad: "歲",
            roman: "suì",
            gloss: "years of age",
            pos: "measure word",
            example: { text: "我今年十九岁。", roman: "Wǒ jīnnián shíjiǔ suì.", gloss: "I am nineteen years old this year." },
            linguistics: {
              origin: "phono-semantic compound (形声) with an astronomical history",
              etymology: [
                "The traditional character <b>歲</b> contains a blade element (related to 戉, an axe) together with <b>步</b> <i>to step, to pace</i>. The <i>Shuowen</i> analyses it as 从步戌聲, from 步 with 戌 as the phonetic.",
                "The word's history is astronomical. 歲 was the Chinese name for the planet <b>Jupiter</b>, 岁星 <i>the year star</i>, whose orbital period of just under twelve years underpinned an ancient calendrical cycle: Jupiter advanced roughly one twelfth of the sky per year, dividing the ecliptic into twelve stations. From that came the sense <i>year</i>, and from <i>year</i> came <i>years of age</i>. The twelve-year Jupiter cycle is also part of the background to the twelve-animal zodiac."
              ],
              script: [
                "Simplified <b>岁</b> is 6 strokes; traditional <b>歲</b> is 13. The simplified form was created by taking the 止 top and the bottom of the traditional graph and discarding the rest.",
                "Do not confuse 岁 with 崇 or 祟."
              ],
              phonology: [
                "Fourth tone. The spelling <b>ui</b> is a contraction of uei; the tone mark sits on the second vowel.",
                "The word for age needs no verb: 我十九岁 <i>I am nineteen</i>, with no 是. Adding 是 (我是十九岁) is an error."
              ],
              cognates: [
                "Sino-Korean 세 (歲) as in 세월 <i>the passage of time</i> and the counter 세 for age in formal contexts (스무 살 versus 20세); Sino-Japanese さい sai — 二十歳 hatachi / nijussai, and 歳 is the standard counter for age.",
                "Asking age varies by the age of the person: <b>你几岁？</b> to a small child (几 expects a small number), <b>你多大？</b> to a peer, and <b>您多大年纪？</b> or 您高寿？ to an elderly person. Using 几岁 with an adult sounds like you are talking to a toddler."
              ]
            }
          },
          {
            term: "晚上",
            roman: "wǎnshang",
            gloss: "evening, night",
            pos: "time noun",
            example: { text: "明天晚上我很忙。", roman: "Míngtiān wǎnshang wǒ hěn máng.", gloss: "I'm very busy tomorrow evening." },
            linguistics: {
              origin: "compound: 晚 late + 上 (locative suffix)",
              etymology: [
                "<b>晚</b> is 日 <i>sun</i> plus the phonetic <b>免</b> miǎn <i>to avoid, to exempt</i>, meaning <i>late (in the day)</i>. <b>上</b> is an indicative character: a mark placed above a reference line, meaning <i>above, up, on</i>. Its mirror image 下 marks below.",
                "The 上 in 晚上 is not really <i>on top</i>; it is a bleached locative suffix that attaches to time and place words, exactly as in 早上 <i>morning</i> and 街上 <i>on the street</i>. Compare 上午 and 下午, where 上 and 下 do carry their literal meanings of before and after the midpoint of the day."
              ],
              script: [
                "晚 is 11 strokes, 上 is 3; both identical in simplified and traditional.",
                "上 is written 丨 then 一 then 一 — vertical first, which surprises many learners."
              ],
              phonology: [
                "wǎn third tone, <b>shang</b> neutral. In careful speech you will also hear wǎnshàng with a full fourth tone.",
                "The 晚 is a half third tone here, low and flat."
              ],
              cognates: [
                "Sino-Korean 만 (晚) as in 만찬 <i>dinner banquet</i>; Sino-Japanese ばん ban — 晩ご飯 bangohan <i>dinner</i>, 今晩 konban <i>tonight</i>. Note Japanese 晩 uses a slightly different character shape.",
                "The day divides as: 早上 zǎoshang <i>early morning</i>, 上午 shàngwǔ <i>morning</i>, 中午 zhōngwǔ <i>noon</i>, 下午 xiàwǔ <i>afternoon</i>, 晚上 wǎnshang <i>evening</i>, 夜里 yèli <i>at night</i>. The greeting 晚上好 exists but is formal and broadcast-flavoured; ordinary speakers just say 你好."
              ]
            }
          },
          {
            term: "下午",
            roman: "xiàwǔ",
            gloss: "afternoon",
            pos: "time noun",
            example: { text: "下午三点我有课。", roman: "Xiàwǔ sān diǎn wǒ yǒu kè.", gloss: "I have class at three in the afternoon." },
            linguistics: {
              origin: "compound: 下 below/after + 午 noon",
              etymology: [
                "<b>午</b> has a surprising origin: it is a pictograph of a <b>pestle</b>, the tool used with a mortar, and it is the original graph behind 杵 chǔ <i>pestle</i>. It was borrowed as the seventh of the twelve <b>Earthly Branches</b> 地支, the ancient duodecimal cycle used for years, months, days and hours.",
                "In the branch system each branch names a two-hour period, and 午 covers roughly 11 a.m. to 1 p.m. — hence 中午 <i>noon</i>, 上午 <i>the part of the day before 午</i>, 下午 <i>the part after</i>. The word for noon in Chinese is thus a fossil of a calendrical system that also gives us 午马, the Horse in the zodiac, and 端午节 the Dragon Boat Festival, held on the fifth day of the fifth month."
              ],
              script: [
                "下 is 3 strokes, 午 is 4; both identical in simplified and traditional.",
                "Distinguish 午 wǔ from 牛 niú <i>ox</i>: the ox has a short stroke rising at the top left, the pestle does not."
              ],
              phonology: [
                "xià fourth tone, wǔ third tone. Both full.",
                "午 is homophonous with 五 wǔ <i>five</i> and 舞 wǔ <i>dance</i>."
              ],
              cognates: [
                "Sino-Korean 오 (午) as in 오전 <i>a.m.</i> and 오후 <i>p.m.</i> — literally <i>before 午</i> and <i>after 午</i>, the same construction as Chinese with 前/後 instead of 上/下. Sino-Japanese ご go — 午前 gozen, 午後 gogo.",
                "So all three languages divide the day by reference to a pestle-shaped Earthly Branch. Related Chinese words: 上午 shàngwǔ, 中午 zhōngwǔ, 午饭 wǔfàn <i>lunch</i>, 午休 wǔxiū <i>midday rest</i>."
              ]
            }
          },
          {
            term: "忙",
            roman: "máng",
            gloss: "busy",
            pos: "adjective",
            example: { text: "我今天很忙。", roman: "Wǒ jīntiān hěn máng.", gloss: "I'm very busy today." },
            linguistics: {
              origin: "phono-semantic compound (形声)",
              etymology: [
                "忄 <i>heart</i> plus the phonetic <b>亡</b> wáng <i>to lose, to perish</i>. The phonetic match was close in Middle Chinese (亡 *mjang, 忙 *mang), both with an initial m-; the modern w- of 亡 is the result of the same m- to w- change described under 问 in Unit 1.",
                "Traditional commentary also reads a semantic hint into 亡 — the heart lost or scattered by too much to do. That reading is appealing and often repeated, but the primary function of 亡 in this character is to supply the sound, and the semantic gloss should be treated as a later interpretation rather than the coining logic."
              ],
              script: [
                "Six strokes, identical in simplified and traditional. 忄 is written with the two side dots first, then the vertical.",
                "The 忄 heart radical marks mental and emotional states: 忙 busy, 快 fast/happy, 慢 slow, 怕 afraid, 情 feeling, 懂 to understand. The same radical appears as 心 at the bottom in 想, 意, 感, 念."
              ],
              phonology: [
                "Second tone with the -ng ending. Contrast 忙 máng with 慢 màn <i>slow</i>: different tone, different final, opposite meaning.",
                "As an adjective it takes 很 in plain statements: 我很忙. Without 很 (我忙) it sounds contrastive."
              ],
              cognates: [
                "Sino-Korean 망 (忙) is rare; Korean uses native 바쁘다. Sino-Japanese ぼう bō / native いそが-しい isogashii — 多忙 tabō <i>very busy</i>.",
                "The 亡 phonetic family: 忘 wàng <i>to forget</i> (heart below rather than beside), 盲 máng <i>blind</i> (eye below), 芒 máng, 망 in Korean 사망 <i>death</i>. Note the pair 忙 and 忘 — same components, different arrangement, different words: busy versus forget."
              ]
            }
          },
          {
            term: "吃饭",
            trad: "吃飯",
            roman: "chīfàn",
            gloss: "to eat, to have a meal",
            pos: "verb-object compound",
            example: { text: "我请你吃饭。", roman: "Wǒ qǐng nǐ chīfàn.", gloss: "Let me treat you to a meal." },
            linguistics: {
              origin: "verb-object compound of two phono-semantic characters",
              etymology: [
                "<b>吃</b> is 口 <i>mouth</i> plus the phonetic 乞 qǐ <i>to beg</i>. Its original meaning was <b>to stammer</b>, not to eat — the eating word was written <b>喫</b>, with 契 as phonetic. The two graphs merged in vernacular writing and 吃 took over both jobs; the mainland standard uses 吃 exclusively, while 喫 survives in Japanese 喫茶店 <i>kissaten</i>, a tea house.",
                "<b>饭</b> (traditional 飯) is 饣 (食 <i>food</i>) plus the phonetic 反 fǎn. Its literal meaning is <b>cooked rice</b>, and by extension <i>a meal</i>. The rice-equals-food equation runs deep: 米饭 is cooked rice specifically, and 饭 alone covers any meal, so 吃饭 is <i>to eat</i> in general even if no rice is involved."
              ],
              script: [
                "Simplified 吃饭 (6 + 7 strokes) versus traditional 吃飯 (6 + 12). 食 → 饣 is systematic across the food family: 饭, 饿 hungry, 馆 restaurant/hall, 饺 dumpling, 饼 flatbread.",
                "Recognising 饣 on the left tells you a character concerns food."
              ],
              phonology: [
                "chī first tone, fàn fourth tone. 吃 has the retroflex ch- with the buzzing vowel — never <i>chee</i>.",
                "吃 is one of the few characters whose Mandarin reading looks irregular against its phonetic 乞 qǐ; the merger with 喫 (Middle Chinese *khet) explains why."
              ],
              cognates: [
                "Sino-Korean 반 (飯) as in 반찬 <i>side dishes</i> and 백반 <i>a set meal</i>; Sino-Japanese はん han with native めし meshi — ご飯 gohan <i>cooked rice, a meal</i>, 朝ご飯 asagohan <i>breakfast</i>. Once again the rice-equals-meal equation is shared across the region.",
                "吃饭 is a <b>verb-object compound</b>: 吃 is the verb and 饭 its built-in object. This matters grammatically, because such compounds can be split: 吃了饭 <i>have eaten</i>, 吃什么饭 <i>eat what meal</i>, 吃过三次饭. You will meet more of these in Unit 4 (唱歌, 跳舞, 看书)."
              ]
            }
          },
          {
            term: "怎么样",
            trad: "怎麼樣",
            roman: "zěnmeyàng",
            gloss: "how about it? how is it?",
            pos: "question phrase",
            example: { text: "晚上七点半，怎么样？", roman: "Wǎnshang qī diǎn bàn, zěnmeyàng?", gloss: "Seven thirty in the evening — how does that sound?" },
            linguistics: {
              origin: "vernacular compound: 怎 how + 么 (suffix) + 样 manner",
              etymology: [
                "<b>怎</b> is 心 <i>heart</i> with the phonetic 乍 zhà — the same element seen in 昨 and 作. It is a late, vernacular character, appearing in Song-dynasty colloquial writing, and it means simply <i>how</i>. <b>样</b> (traditional 樣) is 木 <i>wood</i> plus a phonetic, meaning <i>shape, pattern, manner</i>; the wood radical points to a carved model or template.",
                "The middle 么 is the same weak suffix found in 什么 and 那么, discussed in Unit 1. The whole phrase is thus <i>how-manner</i>."
              ],
              script: [
                "Simplified 怎么样 (9 + 3 + 10 strokes) versus traditional 怎麼樣 (9 + 14 + 15).",
                "The 心 at the bottom of 怎 is the full heart form, not the compressed 忄."
              ],
              phonology: [
                "zěn third tone, <b>me</b> neutral, yàng fourth tone. In rapid speech the whole phrase compresses toward <i>zěmyàng</i>.",
                "Because 怎 is third tone and 么 is neutral, no sandhi is triggered."
              ],
              cognates: [
                "No Sino-Korean or Sino-Japanese reflex — 怎 is a Chinese vernacular creation. Korean uses 어떻게 and Japanese どう, both native.",
                "The question-word family: 怎么 zěnme <i>how</i> (怎么走 <i>how do I get there</i>), 怎么样 <i>how is it / how about it</i>, 为什么 wèishénme <i>why</i>. As a tag, 怎么样 is the standard way to propose something and invite agreement, and it is also a general enquiry: 你最近怎么样？ <i>How have you been lately?</i>"
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
            name: "Dates: year, month, day — largest unit first",
            pattern: "…年 + …月 + …号/日 · question: 几月几号？",
            explanation: [
              "A Chinese date runs from the largest unit to the smallest, the exact reverse of British usage and of American month-day-year: <b>二零二五年九月十二号</b> is <i>12 September 2025</i>. Once you accept the ordering there is nothing else to learn — no ordinal endings, no irregular month names.",
              "<b>Months</b> are just numbers plus 月: 一月 January, 二月 February, 六月 June, 十二月 December. Note that 二月 uses 二, not 两 — month names are not counted quantities. <b>Days of the month</b> are numbers plus <b>号</b> hào in speech and <b>日</b> rì in writing: 一号, 十五号, 三十一号. <b>Years</b> are read digit by digit: 二零二五年, pronounced <i>èr líng èr wǔ nián</i>, never as the number two thousand and twenty-five.",
              "To ask, put the question word exactly where the answer goes: 今天<b>几月几号</b>？ <i>What month and what day is it today?</i> For the year, 哪一年？ For a full date, 你的生日是几月几号？",
              "Beware one false friend: 两个月 means <i>two months' duration</i>, while 二月 means <i>February</i>. Duration and calendar labels are different constructions and use different words for two."
            ],
            examples: [
              { text: "今天是九月十二号。", roman: "Jīntiān shì jiǔ yuè shí'èr hào.", gloss: "Today is the twelfth of September." },
              { text: "我的生日是三月八号。", roman: "Wǒ de shēngrì shì sān yuè bā hào.", gloss: "My birthday is the eighth of March." },
              { text: "二零二五年十月一号", roman: "èr líng èr wǔ nián shí yuè yī hào", gloss: "1 October 2025" },
              { text: "明天几月几号？", roman: "Míngtiān jǐ yuè jǐ hào?", gloss: "What is the date tomorrow?" }
            ]
          },
          {
            name: "Days of the week: 星期 + number",
            pattern: "星期一 … 星期六 · 星期天 / 星期日 · question: 星期几？",
            explanation: [
              "Chinese weekday names are simply <b>星期</b> plus a number, counting from Monday: 星期一 Monday, 星期二 Tuesday, 星期三 Wednesday, 星期四 Thursday, 星期五 Friday, 星期六 Saturday. There are no names to memorise, which makes this the easiest weekday system of any major language.",
              "Sunday breaks the pattern, because it would be day seven and the week is counted as six numbered days plus the rest day. It is <b>星期天</b> xīngqītiān in speech or <b>星期日</b> xīngqīrì in writing — never 星期七.",
              "Two synonyms are in wide use. <b>礼拜</b> lǐbài, literally <i>worship</i>, works identically (礼拜一, 礼拜天) and is common in southern speech and among older speakers; its meaning is a direct trace of the Christian missionary origin of the seven-day week in China. <b>周</b> zhōu is the formal and written option: 周一, 周二, 周日, and 周末 zhōumò <i>weekend</i>.",
              "The question is <b>星期几？</b> — literally <i>week-which-number?</i> The reply repeats the frame: 今天星期四. Note that 几 here is not asking for a measure-word phrase; this is a fixed idiom."
            ],
            examples: [
              { text: "今天星期几？— 今天星期四。", roman: "Jīntiān xīngqī jǐ? — Jīntiān xīngqīsì.", gloss: "What day is it today? — Today is Thursday." },
              { text: "星期六和星期天我不忙。", roman: "Xīngqīliù hé xīngqītiān wǒ bù máng.", gloss: "I'm not busy on Saturday and Sunday." },
              { text: "我星期一到星期五有课。", roman: "Wǒ xīngqīyī dào xīngqīwǔ yǒu kè.", gloss: "I have classes from Monday to Friday." },
              { text: "周末你做什么？", roman: "Zhōumò nǐ zuò shénme?", gloss: "What do you do at the weekend?" }
            ]
          },
          {
            name: "Clock time: 点, 分, 半, 刻, 差",
            pattern: "N点 · N点M分 · N点半 · N点一刻 · 差M分N点",
            explanation: [
              "The hour is <b>点</b>: 一点 one o'clock, 三点 three o'clock, 十二点 twelve o'clock. As always with a measure word, two o'clock is <b>两点</b>, never 二点. Minutes past use <b>分</b>: 七点十分 <i>ten past seven</i>, 九点二十五分 <i>nine twenty-five</i>. In casual speech the 分 is often dropped after a round number: 七点十.",
              "Minutes under ten take a spoken <b>零</b> líng: 两点零五分 <i>five past two</i>. Half past is <b>半</b>, placed after 点: 七点半. Quarters use <b>刻</b>: 三点一刻 <i>quarter past three</i>, 三点三刻 <i>quarter to four</i> — note that Chinese counts quarters forward from the hour rather than backward from the next one. 二刻 is not used; say 半.",
              "To count backwards, use <b>差</b> chà <i>to lack</i>, placed at the <b>front</b>: 差五分三点 is literally <i>lacking five minutes, three o'clock</i>, that is, five to three. This is the one time construction that does not run largest to smallest, and it is worth drilling separately.",
              "Times of day are specified by placing 早上, 上午, 中午, 下午 or 晚上 <b>before</b> the clock time: 晚上七点半, 下午三点. Chinese has no a.m./p.m. suffix; the time-of-day word does that job, and it comes first because it is the larger unit. The question is 几点？ or, more fully, 现在几点？"
            ],
            examples: [
              { text: "现在两点。", roman: "Xiànzài liǎng diǎn.", gloss: "It's two o'clock now. (两, not 二)" },
              { text: "晚上七点半。", roman: "Wǎnshang qī diǎn bàn.", gloss: "Half past seven in the evening." },
              { text: "上午十点一刻。", roman: "Shàngwǔ shí diǎn yí kè.", gloss: "A quarter past ten in the morning." },
              { text: "差五分三点。", roman: "Chà wǔ fēn sān diǎn.", gloss: "Five to three." },
              { text: "现在几点？— 十二点零五分。", roman: "Xiànzài jǐ diǎn? — Shí'èr diǎn líng wǔ fēn.", gloss: "What time is it? — Five past twelve." }
            ]
          },
          {
            name: "Where time words go — and dropping 是",
            pattern: "(Time) + Subject + (Time) + Verb + Object · never Verb + Time",
            explanation: [
              "A <b>time-when</b> expression — the point at which something happens — stands <b>before the verb</b>. It has two possible slots: at the very front of the sentence, or immediately after the subject. 明天晚上我很忙 and 我明天晚上很忙 are both correct and mean the same thing, with the fronted version slightly emphasising the time. What is <b>never</b> possible is the English order: 我很忙明天晚上 is not Chinese.",
              "When several time expressions stack, they run from largest to smallest, matching the general principle: 明天晚上七点半 <i>tomorrow evening at seven thirty</i> — day, then part of day, then clock time. The whole block then sits before the verb: 我明天晚上七点半吃饭.",
              "Do not confuse time-when with <b>duration</b>. Duration goes <b>after</b> the verb: 我学了三年 <i>I studied for three years</i>, 我等了十分钟 <i>I waited ten minutes</i>. So Chinese splits into two positions what English handles with prepositions in one. Compare 我三点学中文 <i>I study Chinese at three</i> with 我学中文学了三个小时 <i>I studied Chinese for three hours</i>.",
              "Finally, the <b>omission of 是</b>. With dates, weekdays, clock times and ages, the copula may simply be left out: 今天星期四, 现在七点半, 我十九岁 are all complete, natural sentences with no verb. Including 是 is also correct and slightly more formal for dates (今天是星期四), but with clock times and ages it is unusual — 现在是七点半 sounds like a broadcast time signal, and 我是十九岁 is simply wrong. Note too that when the sentence is <b>negated</b>, 是 comes back and is obligatory: 今天不是星期四."
            ],
            examples: [
              { text: "我明天晚上很忙。", roman: "Wǒ míngtiān wǎnshang hěn máng.", gloss: "I'm very busy tomorrow evening." },
              { text: "明天晚上我请你吃饭。", roman: "Míngtiān wǎnshang wǒ qǐng nǐ chīfàn.", gloss: "Tomorrow evening I'll treat you to dinner. (time fronted)" },
              { text: "今天星期四。", roman: "Jīntiān xīngqīsì.", gloss: "Today is Thursday. (no 是 needed)" },
              { text: "今天不是星期四。", roman: "Jīntiān bú shì xīngqīsì.", gloss: "Today is not Thursday. (是 returns under negation)" },
              { text: "我七点半吃饭。", roman: "Wǒ qī diǎn bàn chīfàn.", gloss: "I eat at half past seven. (time before the verb)" }
            ]
          }
        ]
      },
      {
        type: "notes",
        title: "Culture note: two calendars, and the years that have animals",
        body: [
          "China runs on two calendars at once. Official and everyday life uses the <b>Gregorian solar calendar</b>, adopted by the Republic in 1912 and confirmed in 1949, which is what 九月十二号 refers to. Alongside it the <b>traditional lunisolar calendar</b>, 农历 nónglì <i>the agricultural calendar</i>, governs festivals, many birthdays for older people, and a great deal of ritual life. It counts months from new moon to new moon, roughly 29.5 days, and inserts a whole leap month every two or three years to keep the seasons from drifting — which is why Chinese New Year lands anywhere from 21 January to 20 February.",
          "The major traditional festivals all sit on lunar dates. <b>春节</b> Chūnjié, Spring Festival or Chinese New Year, falls on the first day of the first lunar month and triggers what is routinely described as the largest annual human migration on earth. <b>中秋节</b> Zhōngqiūjié, the Mid-Autumn Festival, is the fifteenth of the eighth month, at full moon, and is marked with mooncakes. <b>端午节</b> Duānwǔjié, the Dragon Boat Festival, is the fifth of the fifth — and its name contains the 午 you met in 下午, the Earthly Branch. <b>清明节</b> Qīngmíngjié, tomb-sweeping day, is the exception: it is fixed to a solar term, around 4–5 April.",
          "Years carry animals. The <b>十二生肖</b> shí'èr shēngxiào, or 属相 shǔxiang, cycle through rat, ox, tiger, rabbit, dragon, snake, horse, goat, monkey, rooster, dog and pig. The twelve-year cycle derives ultimately from the twelve Earthly Branches and, behind them, from the orbital period of Jupiter — the 岁星 discussed in the entry for 岁. Asking 你属什么？ <i>What is your zodiac animal?</i> is an extremely common and socially safe way to work out someone's age without asking directly, since the animal narrows it to a twelve-year window.",
          "Age itself is counted in more than one way. The traditional 虚岁 xūsuì <i>nominal age</i> counts a baby as one year old at birth and adds a year at each New Year, so a child born in late January could be 虚岁 two within weeks. The international reckoning, 周岁 zhōusuì, is now standard in official contexts and among younger people, but 虚岁 is still very much alive in conversation with older relatives — and it explains why someone may give you two different ages in the same conversation without contradicting themselves.",
          "One practical scheduling note: China observes a small number of long public holidays, chiefly Spring Festival and the National Day 黄金周 <i>golden week</i> around 1 October, during which travel and accommodation become extremely difficult. Working days are sometimes shuffled around these blocks by government notice, so a Sunday can officially become a working day — something to check rather than assume."
        ]
      },
      {
        type: "practice",
        title: "Practice",
        exercises: [
          {
            type: "mcq",
            prompt: "How do you say '12 September' in Chinese?",
            promptAudio: "九月十二号",
            choices: ["十二九月", "十二号九月", "九月十二号", "号十二月九"],
            answer: 2,
            explain: "Chinese dates run from the largest unit to the smallest: month, then day. 号 is the spoken word for the day of the month; 日 is used in writing."
          },
          {
            type: "mcq",
            prompt: "Which is the correct word order for 'I'm very busy tomorrow evening'?",
            promptAudio: "我明天晚上很忙。",
            choices: [
              "我很忙明天晚上。",
              "我明天晚上很忙。",
              "很忙我明天晚上。",
              "明天我很忙晚上。"
            ],
            answer: 1,
            explain: "A time-when expression goes before the verb — either at the front of the sentence or right after the subject. It can never follow the verb as in English."
          },
          {
            type: "mcq",
            prompt: "Which sentence is WRONG?",
            promptAudio: null,
            choices: ["现在两点。", "我十九岁。", "我是十九岁。", "今天星期四。"],
            answer: 2,
            explain: "Age never takes 是. 我十九岁 is complete on its own. With dates and weekdays 是 is optional; with age it is simply an error."
          },
          {
            type: "typing",
            prompt: "Type the pinyin (tone marks optional) for 'two o'clock'. Careful with the number.",
            answer: ["liǎng diǎn", "liǎngdiǎn", "liang dian", "liangdian", "两点"],
            hint: "Before a measure word, 'two' is not 二."
          },
          {
            type: "typing",
            prompt: "Complete: 晚上七点 ___ (half past seven in the evening).",
            answer: ["半", "bàn", "ban"],
            hint: "One character, fourth tone, placed after 点."
          },
          {
            type: "typing",
            prompt: "Type 'What day of the week is it today?' in Chinese characters.",
            answer: ["今天星期几", "今天星期几？", "今天是星期几", "今天是星期几？"],
            hint: "The question word goes exactly where the answer will go."
          },
          {
            type: "listening",
            prompt: "Listen. What time is mentioned?",
            audioText: "晚上七点半。",
            choices: ["7:15 p.m.", "7:30 p.m.", "7:45 p.m.", "8:30 p.m."],
            answer: 1,
            explain: "七点半 is half past seven, and 晚上 places it in the evening. Chinese has no a.m./p.m. — the time-of-day word does that job and comes first."
          },
          {
            type: "listening",
            prompt: "Listen. What is the date?",
            audioText: "今天是九月十二号。",
            choices: ["9 December", "12 September", "12 November", "9 February"],
            answer: 1,
            explain: "九月 is the ninth month, September, and 十二号 is the twelfth day. Largest unit first: month before day."
          },
          {
            type: "match",
            prompt: "Match each time expression with its English meaning.",
            pairs: [
              { a: "现在", b: "now" },
              { a: "今天", b: "today" },
              { a: "明天", b: "tomorrow" },
              { a: "昨天", b: "yesterday" },
              { a: "晚上", b: "evening" },
              { a: "下午", b: "afternoon" }
            ]
          },
          {
            type: "match",
            prompt: "Match each clock expression with the time it names.",
            pairs: [
              { a: "两点", b: "2:00" },
              { a: "三点一刻", b: "3:15" },
              { a: "七点半", b: "7:30" },
              { a: "差五分三点", b: "2:55" },
              { a: "十二点零五分", b: "12:05" }
            ]
          },
          {
            type: "order",
            prompt: "Arrange into a sentence: 'Today is the twelfth of September.'",
            tokens: ["十二号", "是", "今天", "九月"],
            answer: "今天 是 九月 十二号"
          },
          {
            type: "order",
            prompt: "Arrange into a sentence: 'I'll treat you to dinner tomorrow evening.'",
            tokens: ["请你吃饭", "我", "明天晚上"],
            answer: "明天晚上 我 请你吃饭"
          }
        ]
      }
    ]
  });
})();
