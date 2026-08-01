window.CURRICULUM = window.CURRICULUM || {};
(function () {
  const C = window.CURRICULUM;
  C.korean = C.korean || { units: [] };

  C.korean.units.push({
    id: "ko-04",
    order: 4,
    title: "Numbers, Time & Dates",
    titleNative: "숫자와 시간, 날짜",
    subtitle: "Two complete number systems, the counters that go with them, telling the time with 시 and 분, and naming the days and dates.",
    textbookBasis: [
      "Integrated Korean: Beginning 1 (KLEAR), 3rd ed., Lessons 3–4 — numbers, counters, time and dates",
      "Sogang Korean 1A, Unit 4 — 몇 시예요? / 숫자와 단위 명사",
      "Yonsei Korean 1, Lesson 4 — 수와 시간 표현",
      "Talk To Me In Korean Level 1, Lessons 14–16, 21–22 (Sino-Korean and native numbers, dates, telling time)"
    ],
    overview: [
      "Korean counts in two completely separate systems, and you need both. The <b>native Korean</b> numbers (하나, 둘, 셋…) count things, people, ages and hours. The <b>Sino-Korean</b> numbers (일, 이, 삼…) handle minutes, months, dates, money, phone numbers, addresses and anything above ninety-nine. Learners often hope one system will do; it will not, and the good news is that the division of labour is largely predictable once you know which counter you are using.",
      "You will also meet <b>counters</b> — the small words that must stand between a number and a noun, like 개 for objects, 명 for people and 살 for years of age. English does this only for uncountables (<i>two sheets of paper</i>); Korean does it for everything. And you will learn the one construction that mixes both number systems in a single breath: telling the time, where the hour is native (세 시) and the minute is Sino-Korean (삼십 분).",
      "The linguistics here is unusually rewarding. 만 is a scorpion that was drafted into service as a number, 요일 preserves the Babylonian planetary week that reached Korea through Buddhist astrology, 지금 is the same compound as the Japanese <i>tadaima</i>, and the missing native word for <i>tomorrow</i> is a small genuine mystery of Korean historical linguistics."
    ],
    sections: [
      {
        type: "dialogue",
        title: "Dialogue: 지금 몇 시예요? — Making a plan",
        context: "Minsu bumps into Sarah in the corridor between buildings and wants to arrange a time to meet.",
        lines: [
          { speaker: "민수", text: "사라 씨, 지금 몇 시예요?", roman: "sara ssi, jigeum myeot siyeyo?", gloss: "Sarah, what time is it now?" },
          { speaker: "사라", text: "지금 두 시 반이에요.", roman: "jigeum du si banieyo.", gloss: "It is half past two." },
          { speaker: "민수", text: "오늘 한국어 수업이 몇 시에 있어요?", roman: "oneul hangugeo sueobi myeot sie isseoyo?", gloss: "What time is your Korean class today?" },
          { speaker: "사라", text: "오후 세 시에 있어요. 두 시간 수업이에요.", roman: "ohu se sie isseoyo. du sigan sueobieyo.", gloss: "It is at three in the afternoon. It is a two-hour class." },
          { speaker: "민수", text: "그럼 다섯 시에 시간이 있어요?", roman: "geureom daseot sie sigani isseoyo?", gloss: "Then are you free at five?" },
          { speaker: "사라", text: "네, 있어요. 그런데 내일은 시간이 없어요.", roman: "ne, isseoyo. geureonde naeireun sigani eopseoyo.", gloss: "Yes, I am. But tomorrow I am not free." },
          { speaker: "민수", text: "내일이 무슨 요일이에요?", roman: "naeiri museun yoirieyo?", gloss: "What day is tomorrow?" },
          { speaker: "사라", text: "내일은 금요일이에요. 금요일에 수업이 네 개 있어요.", roman: "naeireun geumyoirieyo. geumyoire sueobi ne gae isseoyo.", gloss: "Tomorrow is Friday. On Friday I have four classes." },
          { speaker: "민수", text: "아, 그래요? 그럼 오늘 다섯 시에 만나요.", roman: "a, geuraeyo? geureom oneul daseot sie mannayo.", gloss: "Oh really? Then let us meet at five today." },
          { speaker: "사라", text: "네, 좋아요! 그럼 이따가 봐요.", roman: "ne, joayo! geureom ittaga bwayo.", gloss: "Yes, sounds good. See you later, then." }
        ]
      },
      {
        type: "vocab",
        title: "Vocabulary: numbers, counters and time",
        items: [
          {
            term: "하나",
            roman: "hana",
            gloss: "one (native Korean number); 한 before a counter",
            pos: "numeral",
            example: { text: "사과 한 개 있어요.", roman: "sagwa han gae isseoyo.", gloss: "There is one apple." },
            linguistics: {
              origin: "native Korean",
              etymology: [
                "Middle Korean ᄒᆞ나ㅎ, one of the ㅎ-final nouns. The bound root is <b>ᄒᆞᆫ-</b>, which survives everywhere in the modern language as 한: 한 개, 한 번 (once), 한때 (at one time), 한참 (a good while), 함께 (together, from ᄒᆞᆫ + ᄢᅴ <i>one time</i>), and 하루 (one day, from ᄒᆞᄅᆞ).",
                "Note that this 한 is a different morpheme from the 한 of 한국 (韓) and from the 한 of 한글, which means <i>great, one, whole</i> and was chosen by Ju Si-gyeong in the 1910s precisely because it evoked both <i>one</i> and <i>great</i>."
              ],
              script: [
                "Before a counter, 하나 truncates to <b>한</b>: 한 개, 한 명, 한 시. The full form 하나 is used for counting aloud and for the standalone numeral."
              ],
              phonology: [
                "[하나]. Counting aloud, Koreans say 하나 둘 셋 넷; but a countdown or a rhythm often uses 하나 as [한] in compressed speech."
              ],
              cognates: [
                "한, 하루 (one day), 함께 (together), 혼자 (alone, from ᄒᆞᆫ + 자), 한번, 첫째 (first). Sino-Korean counterpart: 일 (一)."
              ]
            }
          },
          {
            term: "둘",
            roman: "dul",
            gloss: "two (native Korean number); 두 before a counter",
            pos: "numeral",
            example: { text: "커피 두 잔 주세요.", roman: "keopi du jan juseyo.", gloss: "Two coffees, please." },
            linguistics: {
              origin: "native Korean",
              etymology: [
                "Middle Korean 둟, again a ㅎ-final noun. The bound form is <b>두</b>, and the ㄹ of 둘 reappears in derivatives: 둘째 (second), 둘다 → 둘 다 (both).",
                "The old ㅎ is still visible in a small set of day-counting words. Korean has native names for the first few days of a month — 하루, 이틀, 사흘, 나흘, 닷새, 엿새, 이레, 여드레, 아흐레, 열흘 — and the ㅎ of the numerals is exactly what surfaces in 사흘, 나흘, 열흘. These forms are still used for durations: 사흘 동안 (<i>for three days</i>)."
              ],
              script: [
                "Truncated form 두: 두 개, 두 명, 두 시, 두 시간."
              ],
              phonology: [
                "[dul]. The counting sequence 하나 둘 셋 넷 다섯 여섯 일곱 여덟 아홉 열 should be memorised as a chant; 여덟 is pronounced [여덜], with the ㅂ of the double batchim silent."
              ],
              cognates: [
                "두, 둘째, 이틀 (two days), 두 번. Sino-Korean counterpart: 이 (二)."
              ]
            }
          },
          {
            term: "열",
            roman: "yeol",
            gloss: "ten (native Korean number)",
            pos: "numeral",
            example: { text: "학생이 열 명 있어요.", roman: "haksaengi yeol myeong isseoyo.", gloss: "There are ten students." },
            linguistics: {
              origin: "native Korean",
              etymology: [
                "Middle Korean 열ㅎ. Above ten, the native system builds transparently — 열하나, 열둘, 열셋 — and has dedicated words for the tens: 스물 (20), 서른 (30), 마흔 (40), 쉰 (50), 예순 (60), 일흔 (70), 여든 (80), 아흔 (90). Several of these are visibly derived from the units: 여든 from 여덟, 아흔 from 아홉.",
                "The native system stops at 아흔아홉, ninety-nine. From one hundred upward Korean uses only Sino-Korean numbers, so a hundred is 백 and there is no native word for it. Whether a native word for 100 ever existed is uncertain; Middle Korean texts already use 백."
              ],
              script: [
                "열 keeps its shape before counters (열 개, 열 명), unlike 하나/둘/셋/넷 which truncate. 스물, however, becomes <b>스무</b>: 스무 살, 스무 개."
              ],
              phonology: [
                "[열]; 열 개 → [열 깨] with tensification after ㄹ in this counting construction. 열흘 shows the fossilised ㅎ."
              ],
              cognates: [
                "열흘 (ten days), 열째 (tenth), 스물, 여든, 아흔. Homophone alert: 열 also means <i>fever</i> (熱) and <i>to open</i> (열다) — three unrelated words with the same shape."
              ]
            }
          },
          {
            term: "십",
            roman: "sip",
            gloss: "ten (Sino-Korean number)",
            pos: "numeral",
            example: { text: "삼십 분 후에 만나요.", roman: "samsip bun hue mannayo.", gloss: "Let us meet in thirty minutes." },
            linguistics: {
              origin: "Sino-Korean",
              etymology: [
                "<b>十</b>, Middle Chinese *dzyip. The character is one of the simplest in the set — a vertical stroke crossed by a horizontal one, originally a knotted cord or a needle used as a tally mark.",
                "The Sino-Korean series 일 이 삼 사 오 육 칠 팔 구 십 (一二三四五六七八九十) builds decimally and completely regularly: 이십 (20), 삼십오 (35), 백 (100), 천 (1,000), 만 (10,000). The Korean readings preserve Middle Chinese final consonants that Mandarin has lost — the ㅂ of 십 reflects *-p, the ㄹ of 칠 and 팔 reflects *-t, and the ㄱ of 육 reflects *-k. Korean, Cantonese and Vietnamese all preserve these codas, which makes Sino-Korean readings a useful tool for reconstructing Middle Chinese."
              ],
              script: [
                "Used for money, dates, minutes, phone numbers, addresses, bus numbers and all arithmetic. Numbers above 99 are always Sino-Korean regardless of what is being counted."
              ],
              phonology: [
                "[십]; 십 분 → [십뿐] with tensification. Note the reading changes in compounds: 육십 [육씹], and 십육 is pronounced [심뉵] with ㄴ-insertion plus nasalisation — a notoriously tricky number."
              ],
              cognates: [
                "이십, 삼십, 십자 (a cross shape), 십분 (fully, in the sense of amply). Mandarin shí 十; Japanese jū / jitsu 十."
              ]
            }
          },
          {
            term: "만",
            roman: "man",
            gloss: "ten thousand (Sino-Korean)",
            pos: "numeral",
            example: { text: "이 책은 만 원이에요.", roman: "i chaegeun man wonieyo.", gloss: "This book is 10,000 won." },
            linguistics: {
              origin: "Sino-Korean",
              etymology: [
                "<b>萬</b>. The character was originally a pictograph of a <b>scorpion</b> — the pincers and segmented tail are still discernible in the oracle-bone forms — and was borrowed purely for its sound to write the number, a process called 가차 (假借, phonetic loan). The scorpion sense was later re-written with a different character, leaving 萬 as a pure numeral.",
                "More important for everyday use: East Asian numbers group in <b>myriads</b> (10,000) rather than thousands. Where English steps 1,000 → 1,000,000 → 1,000,000,000, Korean steps 만 (10^4) → 억 (10^8) → 조 (10^12). So 30,000 is 삼만 and 150,000 is 십오만, and a million is 백만 (<i>a hundred myriad</i>). Converting between the two groupings in real time is one of the genuinely hard skills of Korean numeracy, and it matters constantly because prices are in won: a modest lunch is 만 원 and a monthly salary might be 삼백만 원."
              ],
              script: [
                "Note that 만 원 is written with a space and means 10,000 won; 일만 is only used on cheques and formal documents."
              ],
              phonology: [
                "[만]. Homophones abound: 만 (only, the particle), 만 (滿, full, as in 만족), 만 (灣, bay). Context disambiguates."
              ],
              cognates: [
                "만세 (萬歲, <i>ten thousand years</i>, the shout of acclamation — Mandarin wànsuì, Japanese banzai), 만년필 (fountain pen), 억 (億, 100 million), 조 (兆, a trillion). Mandarin wàn 万; Japanese man 万."
              ]
            }
          },
          {
            term: "몇",
            roman: "myeot",
            gloss: "how many; what (number)",
            pos: "interrogative determiner",
            example: { text: "지금 몇 시예요?", roman: "jigeum myeot siyeyo?", gloss: "What time is it now?" },
            linguistics: {
              origin: "native Korean",
              etymology: [
                "Middle Korean 몃, part of the native interrogative stock. It must be followed by a counter or a counted noun: 몇 개, 몇 명, 몇 시, 몇 살, 몇 층. On its own it cannot stand — for a bare <i>how much</i> Korean uses 얼마.",
                "One spelling deserves special attention. <i>What date?</i> is <b>며칠</b>, not 몇일. The standard orthography follows the pronunciation [며칠]: if it were really 몇 + 일 it would be pronounced [며딜] by the normal rules, and it is not. This is one of the most frequently misspelled words in Korean, by native speakers as much as by learners."
              ],
              script: [
                "The batchim is ㅊ, which neutralises to [ㄷ] and then assimilates to whatever follows."
              ],
              phonology: [
                "[면] before a nasal (몇 명 → [면 명]), [멷] before a pause, and tensing the following consonant elsewhere (몇 개 → [멷 깨], 몇 시 → [멷 씨]). The written ㅊ almost never surfaces as [ch]."
              ],
              cognates: [
                "며칠 (what date / how many days), 얼마 (how much), 몇몇 (several). Related interrogatives: 무엇, 어디, 언제, 누구, 어느."
              ]
            }
          },
          {
            term: "언제",
            roman: "eonje",
            gloss: "when",
            pos: "interrogative",
            example: { text: "생일이 언제예요?", roman: "saengiri eonjeyeyo?", gloss: "When is your birthday?" },
            linguistics: {
              origin: "native Korean",
              etymology: [
                "Middle Korean 언제. It is generally analysed as the 어- interrogative element plus an old time noun <b>제</b> (<i>time, occasion</i>), which still survives in 이제 (<i>now</i>, literally <i>this time</i>), 그제 / 그저께 (<i>the day before yesterday</i>) and 접때 (<i>the other day</i>).",
                "So the interrogative set is nicely parallel: 어디 = <i>which place</i>, 언제 = <i>which time</i>, both built on 어- plus a noun."
              ],
              script: [
                "Common forms: 언제예요? (when is it?), 언제 가요? (when are you going?), 언제나 (always, literally <i>whenever</i>), 언젠가 (someday)."
              ],
              phonology: [
                "[언제]. Unlike 몇, it takes no counter and can stand alone as an adverb."
              ],
              cognates: [
                "이제, 그제, 언제나, 언젠가, 제 (the old time noun). Compare 어디 (where) and 어느 (which)."
              ]
            }
          },
          {
            term: "개",
            roman: "gae",
            gloss: "counter for objects, pieces, items",
            pos: "counter",
            example: { text: "수업이 네 개 있어요.", roman: "sueobi ne gae isseoyo.", gloss: "There are four classes." },
            linguistics: {
              origin: "Sino-Korean",
              etymology: [
                "<b>個</b> (also written 箇). The older graph 箇 has the bamboo radical 竹 over the phonetic 固, and it originally counted stalks of bamboo — a natural unit for tallying, since bamboo splits into equal lengths. From there it generalised into the all-purpose counter of East Asian languages.",
                "In Korean 개 is the default counter for inanimate things with no more specific counter, exactly as 个 is in Mandarin and 個 in Japanese. If you cannot remember the right counter, 개 will usually be understood — though using it for people is a real error, and using it for a person is actively rude."
              ],
              script: [
                "Always preceded by a <b>native</b> number in its truncated form: 한 개, 두 개, 세 개, 네 개, 다섯 개. Above about twenty, Sino-Korean numbers creep in: 삼십 개 is normal."
              ],
              phonology: [
                "[개], regularly tensed after a stop or ㄹ: 몇 개 → [멷 깨], 열 개 → [열 깨]."
              ],
              cognates: [
                "Other counters: 명 (people), 분 (people, honorific), 마리 (animals), 권 (books), 잔 (cups), 병 (bottles), 장 (sheets), 대 (machines and vehicles), 벌 (sets of clothing), 켤레 (pairs of shoes), 번 (times). Mandarin gè 个; Japanese ko 個."
              ]
            }
          },
          {
            term: "명",
            roman: "myeong",
            gloss: "counter for people",
            pos: "counter",
            example: { text: "친구가 세 명 있어요.", roman: "chinguga se myeong isseoyo.", gloss: "I have three friends." },
            linguistics: {
              origin: "Sino-Korean",
              etymology: [
                "<b>名</b> (<i>name</i>), used as a counter for people — the same metonymy as English <i>a party of six names on the list</i>, or the bureaucratic <i>head count</i>. The character itself is a lovely compound: 夕 (<i>evening</i>) over 口 (<i>mouth</i>), depicting someone calling out their name in the dark because they cannot be seen.",
                "Korean grades its people-counters by respect: <b>명</b> is neutral, <b>분</b> (native bound noun) is honorific and used for guests, elders and customers, and <b>사람</b> is plain and slightly informal. A restaurant host asks 몇 분이세요?, never 몇 명이에요?"
              ],
              script: [
                "Takes native numbers: 한 명, 두 명, 세 명, 네 명, 열 명."
              ],
              phonology: [
                "[명]; 몇 명 → [면 명] by nasalisation of the ㅊ coda before ㅁ."
              ],
              cognates: [
                "Same 名: 유명 (famous), 성명 (full name), 명함 (business card), 명단 (name list). Honorific counter 분; plain 사람. Japanese mei 名 as a counter; Mandarin míng 名 likewise in formal registers."
              ]
            }
          },
          {
            term: "살",
            roman: "sal",
            gloss: "counter for years of age",
            pos: "counter",
            example: { text: "저는 스무 살이에요.", roman: "jeoneun seumu sarieyo.", gloss: "I am twenty years old." },
            linguistics: {
              origin: "native Korean",
              etymology: [
                "A native counter used with native numbers: 한 살, 두 살, 스무 살, 서른 살. Its Sino-Korean counterpart is <b>세</b> (歲), used with Sino-Korean numbers in formal and written contexts: 이십 세, 만 20세.",
                "A widely repeated etymology connects 살 with <b>설</b> (New Year), on the grounds that under the traditional reckoning everyone gained a year at New Year rather than on their birthday, so a <i>year of age</i> and a <i>New Year</i> were the same unit. The vowel correspondence is plausible and the semantic link is attractive, but the derivation is not conclusively demonstrated and careful dictionaries present it as a proposal rather than a fact."
              ],
              script: [
                "Note the irregular 스무 살 (not 스물 살) — 스물 truncates before a counter."
              ],
              phonology: [
                "[살]; 살이에요 → [사리에요] by liaison. 몇 살이에요? is [멷 싸리에요]."
              ],
              cognates: [
                "나이 (age, native noun), 연세 (年歲, honorific age — 연세가 어떻게 되세요?), 세 (歲), 설 (New Year), 설날."
              ]
            }
          },
          {
            term: "시",
            roman: "si",
            gloss: "o'clock; hour (in clock time)",
            pos: "counter",
            example: { text: "세 시에 수업이 있어요.", roman: "se sie sueobi isseoyo.", gloss: "I have class at three o'clock." },
            linguistics: {
              origin: "Sino-Korean",
              etymology: [
                "<b>時</b>: 日 (<i>sun</i>) plus 寺 as phonetic. The character means <i>time, season, hour</i>, and in traditional East Asia it named one of the twelve double-hours of the day, each associated with an animal of the zodiac — 자시 (rat, around midnight), 오시 (horse, around noon), and so on.",
                "Despite being a Sino-Korean word, 시 takes <b>native</b> numbers: 한 시, 두 시, 세 시, 네 시, 다섯 시. This is the single most important exception in the number system and the reason time-telling has to be learned as a pattern rather than derived from a rule."
              ],
              script: [
                "Written 시 after the hour number, with a space: 세 시. In digital contexts the numeral is used: 3시."
              ],
              phonology: [
                "[시], palatalised to [ɕi]. 몇 시 → [멷 씨] with tensification; 여섯 시 → [여섣 씨]."
              ],
              cognates: [
                "시간 (hour, duration; also <i>time</i> in general), 시계 (clock), 시각 (a point in time), 정시 (on the hour), 당시 (at that time), 임시 (temporary). Mandarin shí 时; Japanese ji 時."
              ]
            }
          },
          {
            term: "분",
            roman: "bun",
            gloss: "minute",
            pos: "counter",
            example: { text: "지금 두 시 삼십 분이에요.", roman: "jigeum du si samsip bunieyo.", gloss: "It is 2:30 now." },
            linguistics: {
              origin: "Sino-Korean",
              etymology: [
                "<b>分</b>: 八 (<i>to divide</i>) over 刀 (<i>knife</i>) — literally <i>to cut apart</i>. The character means <i>to divide, a part, a fraction</i>, and by extension the sixtieth part of an hour.",
                "Unlike 시, 분 takes <b>Sino-Korean</b> numbers: 십 분, 이십오 분, 사십 분. So a single clock time uses both systems: 세 시 사십 분 — native for the hour, Sino-Korean for the minute. Do not let the mixture bother you; it is entirely regular."
              ],
              script: [
                "Do not confuse this 분 with the honorific counter 분 (<i>person</i>), which is a native bound noun, or with 분 (粉, powder). Three different words, one spelling."
              ],
              phonology: [
                "[분], tensed after a stop coda: 십 분 → [십뿐], 육 분 → [육뿐]."
              ],
              cognates: [
                "Same 分: 부분 (a part), 분리 (separation), 분야 (a field), 기분 (mood, 氣分), 신분 (social status). Mandarin fēn 分; Japanese fun/pun 分."
              ]
            }
          },
          {
            term: "시간",
            roman: "sigan",
            gloss: "time; an hour (duration)",
            pos: "noun / counter",
            example: { text: "두 시간 수업이에요.", roman: "du sigan sueobieyo.", gloss: "It is a two-hour class." },
            linguistics: {
              origin: "Sino-Korean",
              etymology: [
                "<b>時間</b>: 時 (time) + 間 (interval, space between — the character shows the sun 日 seen through a gate 門, light in the gap). So 시간 is literally an <i>interval of time</i>, which is exactly its two uses in Korean: the abstract noun <i>time</i> (시간이 없어요, <i>I have no time</i>) and the counter for <i>hours of duration</i> (세 시간, <i>three hours</i>).",
                "The contrast with 시 is worth drilling: <b>세 시</b> is <i>three o'clock</i>, a point; <b>세 시간</b> is <i>three hours</i>, a length. Both take native numbers."
              ],
              script: [
                "Two blocks. In compounds it names scheduled periods: 수업 시간, 점심시간, 시간표 (timetable)."
              ],
              phonology: [
                "[시간]; 시간이 → [시가니]."
              ],
              cognates: [
                "Same 間: 인간 (human being), 공간 (space), 기간 (a period), 중간 (the middle), 순간 (a moment). Mandarin shíjiān 时间; Japanese jikan 時間."
              ]
            }
          },
          {
            term: "지금",
            roman: "jigeum",
            gloss: "now",
            pos: "adverb / noun",
            example: { text: "지금 몇 시예요?", roman: "jigeum myeot siyeyo?", gloss: "What time is it now?" },
            linguistics: {
              origin: "Sino-Korean",
              etymology: [
                "<b>只今</b>: 只 <i>ji</i> (only, just) + 今 <i>geum</i> (now). The compound is shared with Japanese, where 只今 is read <i>tadaima</i> — the phrase called out on arriving home, literally <i>just now</i>, i.e. <i>I have this moment returned</i>. Modern Mandarin does not use it, preferring 现在 xiànzài.",
                "Korean also has the native 이제, from 이 (<i>this</i>) + 제 (<i>time</i>). The two are not quite synonyms: 지금 is the neutral <i>now, at this moment</i>, while 이제 carries a sense of <i>now (as opposed to before)</i> — 이제 알겠어요 means <i>now I understand</i>, implying that previously one did not."
              ],
              script: [
                "Two blocks. Frequently combined: 지금은, 지금부터 (from now on), 지금까지 (until now)."
              ],
              phonology: [
                "[지금], with the ㄱ voiced between voiced sounds."
              ],
              cognates: [
                "Same 今: 금년 (this year), 금방 (in a moment), 금세 (in an instant, a contraction of 금시에), 고금 (past and present). Native alternative: 이제. Japanese tadaima 只今."
              ]
            }
          },
          {
            term: "오전",
            roman: "ojeon",
            gloss: "morning; a.m.",
            pos: "noun",
            example: { text: "오전 아홉 시에 수업이 있어요.", roman: "ojeon ahop sie sueobi isseoyo.", gloss: "I have class at nine in the morning." },
            linguistics: {
              origin: "Sino-Korean",
              etymology: [
                "<b>午前</b>: 午 <i>o</i> + 前 <i>jeon</i> (before) — <i>before noon</i>. The key character 午 is the seventh of the twelve <b>earthly branches</b> (십이지, 十二支), the ancient cycle used for years, months, days and hours and paired with the zodiac animals. 午 is the horse branch and named the double-hour from about 11 a.m. to 1 p.m., which is why it came to mean <i>noon</i>. The graph itself is thought to depict a pestle.",
                "The same branch system gives 정오 (正午, exactly noon), 자정 (子正, exactly midnight, from the rat branch 子), and the names of the zodiac years. Korean thus expresses a.m. and p.m. with a piece of Han-dynasty astronomy."
              ],
              script: [
                "Placed <i>before</i> the time, unlike English: 오전 아홉 시 = 9 a.m."
              ],
              phonology: [
                "[오전]. Note the near-homophone 오전 vs 오후 differ only in the second syllable — a common listening slip."
              ],
              cognates: [
                "오후 (afternoon), 정오 (noon), 자정 (midnight), 오찬 (a luncheon). Same 前: 전에 (before), 이전 (previously), 전방 (the area ahead). Mandarin shàngwǔ 上午 uses a different first character; Japanese gozen 午前 matches Korean exactly."
              ]
            }
          },
          {
            term: "오후",
            roman: "ohu",
            gloss: "afternoon; p.m.",
            pos: "noun",
            example: { text: "오후 세 시에 만나요.", roman: "ohu se sie mannayo.", gloss: "Let us meet at three in the afternoon." },
            linguistics: {
              origin: "Sino-Korean",
              etymology: [
                "<b>午後</b>: 午 (the noon branch) + 後 <i>hu</i> (after). The mirror image of 오전.",
                "Korean daily-schedule vocabulary divides the day into 아침 (morning), 점심 (midday/lunch), 저녁 (evening) and 밤 (night) for informal use, and 오전 / 오후 for clock times and appointments. Note that 점심 (點心) literally means <i>to dot the heart</i> — a Buddhist term for a light refreshment, the same compound behind Cantonese <i>dim sum</i>."
              ],
              script: [
                "오후 세 시 = 3 p.m. Written schedules often use the 24-hour clock instead: 15시."
              ],
              phonology: [
                "[오후]. The ㅎ between vowels is often weakened, giving something close to [오우] in fast speech."
              ],
              cognates: [
                "오전, 정오, 이후 (after, from then on), 후배 (junior), 최후 (the last). Japanese gogo 午後; Mandarin xiàwǔ 下午."
              ]
            }
          },
          {
            term: "요일",
            roman: "yoil",
            gloss: "day of the week",
            pos: "noun",
            example: { text: "오늘이 무슨 요일이에요?", roman: "oneuri museun yoirieyo?", gloss: "What day of the week is it today?" },
            linguistics: {
              origin: "Sino-Korean",
              etymology: [
                "<b>曜日</b>: 曜 <i>yo</i> (to shine; a heavenly body) + 日 <i>il</i> (day, sun). A <i>day of a shining body</i> — that is, a planet.",
                "The seven-day planetary week is not originally East Asian. It was devised in the Hellenistic world on Babylonian foundations, naming each day for one of the seven visible celestial bodies, and travelled east along the Silk Road; it reached China in Tang-dynasty Buddhist astrological texts such as the 宿曜經 (Xiuyao jing), where the days appear with the same planetary names. It never took hold in Chinese daily life — modern Mandarin numbers the days instead, 星期一 <i>week-day-one</i>. Japan revived the old planetary names during the Meiji reforms, and Korea adopted the system in the same period.",
                "So Korean 월요일 (Moon-day) and English <i>Monday</i>, or 화요일 (Mars/fire-day) and French <i>mardi</i>, are not coincidences and not borrowings from Europe: they are two branches of the same Hellenistic astrological week, one travelling west into Latin and Germanic, the other east into Buddhist Asia."
              ],
              script: [
                "The seven days: 월요일 (Mon, moon), 화요일 (Tue, fire/Mars), 수요일 (Wed, water/Mercury), 목요일 (Thu, wood/Jupiter), 금요일 (Fri, metal/Venus), 토요일 (Sat, earth/Saturn), 일요일 (Sun, sun). The five middle ones use the 오행, the five phases, which East Asian astronomy mapped onto the five visible planets."
              ],
              phonology: [
                "[요일]; 요일이 → [요이리]. In casual speech the 요일 is often clipped: 월, 화, 수 for Monday, Tuesday, Wednesday, as on timetables."
              ],
              cognates: [
                "월요일 … 일요일, 주말 (weekend), 평일 (weekday), 주중. Japanese yōbi 曜日 is the direct parallel; Mandarin uses 星期 or 周 instead."
              ]
            }
          },
          {
            term: "월요일",
            roman: "woryoil",
            gloss: "Monday",
            pos: "noun",
            example: { text: "월요일에 학교에 가요.", roman: "woryoire hakgyoe gayo.", gloss: "I go to school on Monday." },
            linguistics: {
              origin: "Sino-Korean",
              etymology: [
                "<b>月曜日</b>: 月 (moon) + 曜 (shining body) + 日 (day) — the day of the Moon, exactly as English <i>Monday</i>, German <i>Montag</i> and French <i>lundi</i> all name the Moon. Both traditions inherit the naming from the same Hellenistic planetary week.",
                "月 is a pictograph of a crescent moon and is also the ordinary Korean word for <i>month</i>: 일월 (January), 이월 (February), 몇 월 (what month). Month-names in Korean are simply Sino-Korean number + 월, with two irregularities that must be memorised — June is <b>유월</b> (not 육월) and October is <b>시월</b> (not 십월), the final consonants having dropped for ease of pronunciation and the spelling having been standardised to match."
              ],
              script: [
                "Three blocks. The 에 particle marks the day on which something happens: 월요일에."
              ],
              phonology: [
                "[워료일] — liaison moves the ㄹ of 월 into the following syllable, which is why the Revised Romanization writes <i>woryoil</i>. The same happens in 일요일 → [이료일] and 금요일 → [그묘일]."
              ],
              cognates: [
                "Same 月: 월급 (monthly salary), 개월 (a counter for months), 세월 (the passage of time), 월말 (month-end). Days: 화요일, 수요일, 목요일, 금요일, 토요일, 일요일."
              ]
            }
          },
          {
            term: "오늘",
            roman: "oneul",
            gloss: "today",
            pos: "noun / adverb",
            example: { text: "오늘 다섯 시에 만나요.", roman: "oneul daseot sie mannayo.", gloss: "Let us meet at five today." },
            linguistics: {
              origin: "native Korean",
              etymology: [
                "Middle Korean 오ᄂᆞᆯ. A native word, like its neighbour 어제 (<i>yesterday</i>, Middle Korean 어제) and 그제 (<i>the day before yesterday</i>). The vowel ㆍ of the second syllable shifted to ㅡ, giving the modern shape.",
                "Time adverbs like 오늘, 어제, 내일 and 지금 do <b>not</b> take the particle 에 — you say 오늘 만나요, never 오늘에 만나요. Days of the week and clock times do take it (월요일에, 세 시에). This split has to be learned as a fact about the individual words."
              ],
              script: [
                "Two blocks. 오늘날 means <i>nowadays, in the present era</i>."
              ],
              phonology: [
                "[오늘]; 오늘은 → [오느른]."
              ],
              cognates: [
                "어제 (yesterday), 그제 (day before yesterday), 오늘날 (nowadays), 이제 (now). Sino-Korean equivalents: 금일 (今日, formal <i>today</i>), 작일 (昨日, formal <i>yesterday</i>) — used in official documents and notices."
              ]
            }
          },
          {
            term: "내일",
            roman: "naeil",
            gloss: "tomorrow",
            pos: "noun / adverb",
            example: { text: "내일은 시간이 없어요.", roman: "naeireun sigani eopseoyo.", gloss: "I am not free tomorrow." },
            linguistics: {
              origin: "Sino-Korean",
              etymology: [
                "<b>來日</b>: 來 <i>nae</i> (to come) + 日 (day) — the <i>coming day</i>. And here is a genuine puzzle of Korean historical linguistics: 오늘 and 어제 are native words, but <i>tomorrow</i> is Sino-Korean. A language does not normally borrow so basic a word.",
                "There is a tantalising trace of the lost native form. The <b>계림유사</b> (雞林類事), a Chinese record of Korean vocabulary compiled by Sun Mu in 1103, transcribes the Korean word for <i>tomorrow</i> with the characters 轄載 — usually read as something like <i>hajae</i> or <i>hoji</i>. Scholars have proposed various reconstructions and various connections, but no reading is agreed and the word had vanished from Korean by the time of the Hangul texts three centuries later. It is one of the small honest gaps in the record: we know a native word existed, and we cannot say with confidence what it was.",
                "North Korean and some dialect usage has 래일, keeping the initial ㄹ that the South Korean 두음법칙 deletes."
              ],
              script: [
                "Two blocks. Like 오늘, it takes no 에: 내일 만나요."
              ],
              phonology: [
                "[내일]; 내일은 → [내이른]. Do not confuse it with 내 일 (<i>my work</i>), written with a space and identical in sound."
              ],
              cognates: [
                "모레 (the day after tomorrow — native, and still in use), 어제, 오늘. Same 來: 미래 (the future), 내년 (next year), 내주 (next week), 왕래 (coming and going). Japanese rainichi 来日 means something else entirely (<i>coming to Japan</i>), a good warning that shared characters do not guarantee shared meanings."
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
            name: "Two number systems: native Korean vs Sino-Korean",
            pattern: "native: 하나 둘 셋 넷 다섯 여섯 일곱 여덟 아홉 열 · Sino: 일 이 삼 사 오 육 칠 팔 구 십",
            explanation: [
              "Korean has two full sets of numbers and uses both every day. The <b>native</b> set runs 하나, 둘, 셋, 넷, 다섯, 여섯, 일곱, 여덟, 아홉, 열, then 스물, 서른, 마흔, 쉰, 예순, 일흔, 여든, 아흔 — and stops at 아흔아홉 (99). The <b>Sino-Korean</b> set, borrowed from Chinese, runs 일, 이, 삼, 사, 오, 육, 칠, 팔, 구, 십 and continues indefinitely: 백 (100), 천 (1,000), 만 (10,000), 억 (100,000,000).",
              "Which one you use depends on what follows. <b>Native</b> numbers count things, people, animals, ages and the hour of the clock: 세 개, 두 명, 스무 살, 네 시. <b>Sino-Korean</b> numbers are used for minutes, seconds, months, dates, years, money, phone numbers, addresses, floors, bus and room numbers, and all arithmetic: 삼십 분, 오월 오일, 이천 원, 삼 층.",
              "Above ninety-nine, everything is Sino-Korean whatever it is counting. And remember the myriad grouping: Korean steps in units of 만 (10^4), so 100,000 is 십만 and a million is 백만. Converting quickly between English thousands and Korean myriads is a skill that takes real practice; it is worth doing drills specifically on prices, since Korean banknotes come in 1,000, 5,000, 10,000 and 50,000 won."
            ],
            examples: [
              { text: "사과 세 개 주세요.", roman: "sagwa se gae juseyo.", gloss: "Three apples, please. (native + 개)" },
              { text: "학생이 스무 명 있어요.", roman: "haksaengi seumu myeong isseoyo.", gloss: "There are twenty students. (native + 명)" },
              { text: "삼십 분 후에 만나요.", roman: "samsip bun hue mannayo.", gloss: "Let us meet in thirty minutes. (Sino + 분)" },
              { text: "이 책은 만 오천 원이에요.", roman: "i chaegeun man ocheon wonieyo.", gloss: "This book is 15,000 won. (Sino, myriad grouping)" },
              { text: "제 방은 삼 층이에요.", roman: "je bangeun sam cheungieyo.", gloss: "My room is on the third floor. (Sino + 층)" }
            ]
          },
          {
            name: "Counters and the truncated numerals",
            pattern: "Noun + Number + Counter · 하나→한, 둘→두, 셋→세, 넷→네, 스물→스무",
            explanation: [
              "A Korean number almost never touches a noun directly. Between them sits a <b>counter</b> chosen for the kind of thing being counted: 개 for objects, 명 or 분 for people, 마리 for animals, 권 for books, 잔 for cups, 병 for bottles, 장 for flat sheets, 대 for machines and vehicles, 살 for years of age, 번 for occurrences.",
              "The usual word order is <b>noun first</b>, then number, then counter: 사과 세 개 (<i>apple three items</i>), 학생 두 명, 커피 한 잔. The alternative order 세 개의 사과 exists but sounds translated and stiff. When the noun is understood from context it can be dropped entirely: 세 개 주세요.",
              "Five native numerals change shape before a counter, and these must be memorised: 하나 → <b>한</b>, 둘 → <b>두</b>, 셋 → <b>세</b>, 넷 → <b>네</b>, 스물 → <b>스무</b>. So it is 한 개 (never 하나 개) and 스무 살 (never 스물 살). The rest — 다섯, 여섯, 일곱, 여덟, 아홉, 열 — keep their full form."
            ],
            examples: [
              { text: "커피 한 잔 주세요.", roman: "keopi han jan juseyo.", gloss: "One cup of coffee, please. (하나 → 한)" },
              { text: "책이 네 권 있어요.", roman: "chaegi ne gwon isseoyo.", gloss: "There are four books. (넷 → 네, counter 권)" },
              { text: "저는 스무 살이에요.", roman: "jeoneun seumu sarieyo.", gloss: "I am twenty years old. (스물 → 스무)" },
              { text: "고양이 두 마리가 있어요.", roman: "goyangi du mariga isseoyo.", gloss: "There are two cats. (animals take 마리)" },
              { text: "몇 명이에요?", roman: "myeot myeongieyo?", gloss: "How many people? (heard as [면 명이에요])" }
            ]
          },
          {
            name: "Telling the time: native hours, Sino-Korean minutes",
            pattern: "native number + 시 + Sino-Korean number + 분 · 반 = half past · 시간 = duration",
            explanation: [
              "Clock time is the one construction that uses both number systems in a single phrase. The <b>hour</b> takes a native number plus 시: 한 시, 두 시, 세 시, 네 시, 다섯 시… 열두 시. The <b>minute</b> takes a Sino-Korean number plus 분: 오 분, 십오 분, 삼십 분, 사십오 분. So 3:45 is 세 시 사십오 분.",
              "<b>반</b> (半, half) replaces 삼십 분 in casual speech: 두 시 반 = half past two. For a.m. and p.m. put 오전 or 오후 <i>before</i> the whole expression: 오후 세 시. Korean also uses the 24-hour clock in writing and on transport timetables, in which case the hour switches to Sino-Korean: 15시 30분.",
              "To place an event at a time, add <b>에</b>: 세 시에 만나요. To ask, use 몇 시: 지금 몇 시예요? (<i>what time is it now?</i>) or 몇 시에 가요? (<i>what time are you going?</i>). Do not confuse <b>시</b> (a point on the clock) with <b>시간</b> (a duration): 두 시 = two o'clock, 두 시간 = two hours. Both take native numbers, and both are extremely common, so drill the pair together."
            ],
            examples: [
              { text: "지금 몇 시예요?", roman: "jigeum myeot siyeyo?", gloss: "What time is it now?" },
              { text: "지금 두 시 삼십 분이에요.", roman: "jigeum du si samsip bunieyo.", gloss: "It is 2:30 now." },
              { text: "두 시 반이에요.", roman: "du si banieyo.", gloss: "It is half past two." },
              { text: "오후 다섯 시에 만나요.", roman: "ohu daseot sie mannayo.", gloss: "Let us meet at 5 p.m." },
              { text: "수업이 두 시간이에요.", roman: "sueobi du siganieyo.", gloss: "The class is two hours long." }
            ]
          },
          {
            name: "Days, months and dates",
            pattern: "무슨 요일이에요? · Sino number + 월 + Sino number + 일 · 며칠이에요?",
            explanation: [
              "Days of the week are 월요일, 화요일, 수요일, 목요일, 금요일, 토요일, 일요일 — Moon, Fire, Water, Wood, Metal, Earth, Sun. To ask which day it is, use <b>무슨 요일</b>: 오늘이 무슨 요일이에요? To place an event on a day, add 에: 금요일에 수업이 있어요.",
              "Dates use Sino-Korean numbers throughout, in the order year–month–day, biggest unit first: 2026년 7월 31일. Month names are simply the number plus 월, with two irregular forms you must memorise — <b>유월</b> for June (not 육월) and <b>시월</b> for October (not 십월). Days of the month are the number plus 일: 일일, 이일, 삼십일일.",
              "To ask the date, use <b>며칠</b>: 오늘이 며칠이에요? Note the spelling — 며칠, never 몇일, because the word is pronounced [며칠] and Korean orthography follows that here. Finally, the time words 오늘, 내일, 어제, 지금, 매일 take no particle, while 요일, 시, 월, 일 all take 에. 오늘 만나요 but 금요일에 만나요."
            ],
            examples: [
              { text: "오늘이 무슨 요일이에요?", roman: "oneuri museun yoirieyo?", gloss: "What day of the week is it today?" },
              { text: "오늘은 수요일이에요.", roman: "oneureun suyoirieyo.", gloss: "Today is Wednesday." },
              { text: "오늘이 며칠이에요?", roman: "oneuri myeochirieyo?", gloss: "What is the date today?" },
              { text: "제 생일은 유월 십오일이에요.", roman: "je saengireun yuwol sibirieyo.", gloss: "My birthday is June 15th. (유월, not 육월)" },
              { text: "토요일에 친구를 만나요.", roman: "toyoire chingureul mannayo.", gloss: "I meet a friend on Saturday." }
            ]
          }
        ]
      },
      {
        type: "notes",
        title: "Culture note: two calendars, and how old you are",
        body: [
          "Korea runs on the solar calendar for everyday life but keeps the lunar one for its two biggest holidays. <b>설날</b>, lunar New Year, and <b>추석</b>, the harvest festival on the fifteenth day of the eighth lunar month, move around the solar calendar from year to year, and both trigger the largest internal migration of the year as families return to hometowns. Birthdays, too, are often celebrated on the lunar date by older generations, which is why a Korean may cheerfully tell you their birthday changes each year. Calendars printed in Korea show both dates in each square.",
          "Age has been genuinely complicated. Under the traditional <b>세는나이</b> system, a baby was one year old at birth and everyone gained a year together on New Year's Day — so a child born in late December turned two a week later. Alongside it Korea also used a <i>calendar-year age</i> for military service and school entry, and international age for legal documents: three systems at once. In June 2023 South Korea legislated the international reckoning as standard for all official purposes, and the traditional count is now receding, though people still use it casually and it still shapes the social importance of birth year. The polite way to ask remains 나이가 어떻게 되세요? or, for someone clearly older, 연세가 어떻게 되세요? — never the blunt 몇 살이에요? to a senior.",
          "Two ages get their own celebrations. <b>백일</b> (the hundredth day after birth) and <b>돌</b> (the first birthday) are both marked with a party, the latter featuring the 돌잡이, where the child grabs one of several objects laid out before them — a thread for long life, money for wealth, a pencil or book for scholarship, and nowadays sometimes a stethoscope or a microphone. The custom is old; the object list keeps being updated. At the other end, <b>환갑</b> (the sixtieth birthday) marks the completion of a full cycle of the sexagenary calendar, the sixty-year combination of ten heavenly stems and twelve earthly branches — the same branch system that gives 오전 and 오후 their 午.",
          "One practical note on numbers: Korean phone numbers, prices and addresses are read digit by digit in Sino-Korean, with 0 read as 공 (空, <i>empty</i>) rather than 영 in phone numbers. And because 4 (사, 四) is homophonous with the character for <i>death</i> (死), many Korean hospitals and older apartment buildings label the fourth floor F rather than 4 — the same tetraphobia found in Chinese and Japanese buildings, and the reason lift panels are worth a second look."
        ]
      },
      {
        type: "practice",
        title: "Practice: counting and telling the time",
        exercises: [
          {
            type: "mcq",
            prompt: "How do you say 'three o'clock'?",
            promptAudio: "세 시",
            choices: ["세 시", "삼 시", "셋 시", "삼 시간"],
            answer: 0,
            explain: "Hours take native numbers in their truncated form: 셋 → 세, giving 세 시. 삼 시 uses the Sino-Korean number, which is wrong for hours, and 삼 시간 would be 'three hours' of duration."
          },
          {
            type: "mcq",
            prompt: "How do you say '30 minutes'?",
            promptAudio: "삼십 분",
            choices: ["삼십 분", "서른 분", "세십 분", "셋 분"],
            answer: 0,
            explain: "Minutes take Sino-Korean numbers: 삼십 분. 서른 is the native thirty and is not used with 분."
          },
          {
            type: "mcq",
            prompt: "Choose the correct counter: 학생이 네 ___ 있어요.",
            promptAudio: null,
            choices: ["명", "개", "권", "마리"],
            answer: 0,
            explain: "명 counts people. 개 is for objects, 권 for books, 마리 for animals. Using 개 or 마리 for a person is a genuine error."
          },
          {
            type: "mcq",
            prompt: "Which is the correct word for June?",
            promptAudio: "유월",
            choices: ["유월", "육월", "여섯월", "유일"],
            answer: 0,
            explain: "June is irregular: 유월, not 육월. October is likewise 시월, not 십월. All other months are simply the Sino-Korean number plus 월."
          },
          {
            type: "typing",
            prompt: "Ask 'What time is it now?'",
            answer: ["지금 몇 시예요", "지금 몇 시예요?", "지금 몇 시에요", "지금 몇 시에요?", "몇 시예요", "몇 시예요?"],
            hint: "지금 + 몇 시 + copula."
          },
          {
            type: "typing",
            prompt: "Write 'It is half past two.' using 반.",
            answer: ["두 시 반이에요", "두 시 반이에요.", "지금 두 시 반이에요", "지금 두 시 반이에요."],
            hint: "Native number for the hour, then 시, then 반."
          },
          {
            type: "listening",
            prompt: "Listen. What time is mentioned?",
            audioText: "오후 세 시 삼십 분이에요.",
            choices: ["3:30 p.m.", "3:13 p.m.", "4:30 p.m.", "3:30 a.m."],
            answer: 0,
            explain: "오후 = p.m., 세 시 = three o'clock (native number), 삼십 분 = thirty minutes (Sino-Korean number)."
          },
          {
            type: "listening",
            prompt: "Listen. Which day of the week is it?",
            audioText: "내일은 금요일이에요.",
            choices: ["Friday", "Monday", "Wednesday", "Sunday"],
            answer: 0,
            explain: "금요일 is Friday — the day of 金, metal, i.e. Venus. 월요일 is Monday, 수요일 Wednesday, 일요일 Sunday."
          },
          {
            type: "match",
            prompt: "Match the native number with the Sino-Korean number of the same value.",
            pairs: [
              { a: "하나", b: "일" },
              { a: "둘", b: "이" },
              { a: "셋", b: "삼" },
              { a: "넷", b: "사" },
              { a: "열", b: "십" },
              { a: "스물", b: "이십" }
            ]
          },
          {
            type: "match",
            prompt: "Match each counter with what it counts.",
            pairs: [
              { a: "개", b: "objects" },
              { a: "명", b: "people" },
              { a: "살", b: "years of age" },
              { a: "권", b: "books" },
              { a: "마리", b: "animals" },
              { a: "잔", b: "cups of a drink" }
            ]
          },
          {
            type: "order",
            prompt: "Arrange into a sentence: 'I have class at three in the afternoon.'",
            tokens: ["오후", "세 시에", "수업이", "있어요"],
            answer: "오후 세 시에 수업이 있어요"
          },
          {
            type: "order",
            prompt: "Arrange into a question: 'What day of the week is today?'",
            tokens: ["오늘이", "무슨", "요일이에요?"],
            answer: "오늘이 무슨 요일이에요?"
          }
        ]
      }
    ]
  });
})();
