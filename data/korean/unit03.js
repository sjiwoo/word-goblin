window.CURRICULUM = window.CURRICULUM || {};
(function () {
  const C = window.CURRICULUM;
  C.korean = C.korean || { units: [] };

  C.korean.units.push({
    id: "ko-03",
    order: 3,
    title: "Places & Location",
    titleNative: "장소와 위치",
    subtitle: "Ask 어디, say where things are with 에 and position words, and mark where an activity happens with 에서.",
    textbookBasis: [
      "Integrated Korean: Beginning 1 (KLEAR), 3rd ed., Lesson 2 — 캠퍼스 (Campus) and Lesson 4 location expressions",
      "Sogang Korean 1A, Unit 3 — 어디에 있어요? / 에, 에서",
      "Yonsei Korean 1, Lesson 3 — 위치와 장소 명사",
      "Talk To Me In Korean Level 1, Lessons 12, 20 (장소 + 에/에서, 어디)"
    ],
    overview: [
      "This unit gives you the two most important place particles in Korean and the difference between them. <b>에</b> marks a static location (where something <i>is</i>) and a destination (where you are <i>going</i>). <b>에서</b> marks the place where an activity <i>happens</i>, and also the point you have come <i>from</i>. Confusing the two is the most common location error learners make, and the distinction is genuinely learnable: if the verb is 있다/없다 or a verb of motion toward, use 에; if something is being <i>done</i>, use 에서.",
      "You also learn Korean's position words — 위, 밑, 앞, 뒤, 옆, 안, 밖 — which are not prepositions but ordinary nouns. Korean says 책상 위에 (<i>desk's top-at</i>) rather than <i>on the desk</i>, so the structure is always [reference noun] + [position noun] + 에. Once you see them as nouns, the word order stops feeling backwards.",
      "The vocabulary is the map of a Korean neighbourhood: 학교, 도서관, 식당, 은행, 병원, 편의점, 화장실. Several of them carry instructive histories — 은행 is a <i>silver row</i>, 화장실 is a polite fiction meaning <i>make-up room</i>, and 공부하다 uses a character pair that means something completely different in Chinese and in Japanese."
    ],
    sections: [
      {
        type: "dialogue",
        title: "Dialogue: 어디에 가요? — Crossing campus",
        context: "Sarah and Jihyeon run into each other outside the lecture building at lunchtime. Jihyeon is new to this campus and cannot find anything.",
        lines: [
          { speaker: "지현", text: "사라 씨! 지금 어디에 가요?", roman: "sara ssi! jigeum eodie gayo?", gloss: "Sarah! Where are you going now?" },
          { speaker: "사라", text: "도서관에 가요. 지현 씨는요?", roman: "doseogwane gayo. jihyeon ssineunyo?", gloss: "I am going to the library. How about you, Jihyeon?" },
          { speaker: "지현", text: "저는 식당에 가요. 그런데 은행이 어디에 있어요?", roman: "jeoneun sikdange gayo. geureonde eunhaengi eodie isseoyo?", gloss: "I am going to the cafeteria. By the way, where is the bank?" },
          { speaker: "사라", text: "은행은 도서관 옆에 있어요. 도서관 앞에 큰 나무가 있어요.", roman: "eunhaengeun doseogwan yeope isseoyo. doseogwan ape keun namuga isseoyo.", gloss: "The bank is next to the library. There is a big tree in front of the library." },
          { speaker: "지현", text: "고마워요. 그럼 편의점은요?", roman: "gomawoyo. geureom pyeonuijeomeunyo?", gloss: "Thank you. And the convenience store?" },
          { speaker: "사라", text: "편의점은 학교 안에 있어요. 도서관 뒤에 있어요.", roman: "pyeonuijeomeun hakgyo ane isseoyo. doseogwan dwie isseoyo.", gloss: "The convenience store is inside the campus. It is behind the library." },
          { speaker: "지현", text: "아, 알겠어요. 사라 씨는 보통 어디에서 공부해요?", roman: "a, algesseoyo. sara ssineun botong eodieseo gongbuhaeyo?", gloss: "Ah, I see. Sarah, where do you usually study?" },
          { speaker: "사라", text: "저는 보통 카페에서 공부해요. 집에서 공부해요?", roman: "jeoneun botong kapeeseo gongbuhaeyo. jibeseo gongbuhaeyo?", gloss: "I usually study at a cafe. Do you study at home?" },
          { speaker: "지현", text: "네, 집에서 공부해요. 그런데 오늘은 카페에 가요.", roman: "ne, jibeseo gongbuhaeyo. geureonde oneureun kapee gayo.", gloss: "Yes, I study at home. But today I am going to a cafe." },
          { speaker: "사라", text: "좋아요! 카페가 병원 앞에 있어요. 거기에서 봐요.", roman: "joayo! kapega byeongwon ape isseoyo. geogieseo bwayo.", gloss: "Great! The cafe is in front of the hospital. See you there." }
        ]
      },
      {
        type: "vocab",
        title: "Vocabulary: places around town",
        items: [
          {
            term: "어디",
            roman: "eodi",
            gloss: "where",
            pos: "interrogative pronoun",
            example: { text: "은행이 어디에 있어요?", roman: "eunhaengi eodie isseoyo?", gloss: "Where is the bank?" },
            linguistics: {
              origin: "native Korean",
              etymology: [
                "Middle Korean 어듸. It is analysable as the native interrogative element <b>어-</b> (also in 어느, 언제, 어떻게) plus the old place noun <b>듸</b>, which survives in the modern bound noun <b>데</b> (<i>place</i>, as in 갈 데가 없어요, <i>I have nowhere to go</i>). So 어디 is literally <i>which place</i>.",
                "Like all Korean question words, 어디 stays in the position the answer would occupy rather than moving to the front of the sentence: 어디에 가요? has 어디 exactly where 도서관 would go."
              ],
              script: [
                "Two open blocks. Common forms: 어디에 (to/at where), 어디에서 or 어디서 (from/at where), 어디예요? (where is it?)."
              ],
              phonology: [
                "[어디], with the ㄷ voiced to [d] between vowels. 어디에서 contracts in speech to 어디서, and 어디에 가요 is often heard as [어디 가요] with the particle dropped."
              ],
              cognates: [
                "데 (place), 어느, 언제, 어떻게, 얼마. Place answers: 여기, 거기, 저기."
              ]
            }
          },
          {
            term: "여기",
            roman: "yeogi",
            gloss: "here (also 거기 there, 저기 over there)",
            pos: "pronoun",
            example: { text: "화장실이 여기에 있어요.", roman: "hwajangsiri yeogie isseoyo.", gloss: "The toilet is here." },
            linguistics: {
              origin: "native Korean",
              etymology: [
                "The place member of the demonstrative set from unit 2: 여기 / 거기 / 저기 correspond to 이 / 그 / 저. Middle Korean wrote them 이어긔, 그어긔, 뎌어긔 — visibly the demonstrative plus a place element 어긔 — which later fused into the modern one-word forms.",
                "The same three-way split applies: 여기 is where the speaker is, 거기 where the listener is or a place already mentioned, 저기 a visible place away from both."
              ],
              script: [
                "With particles: 여기에 (often shortened to just 여기), 여기서 (from 여기에서), 여기가, 여기는."
              ],
              phonology: [
                "[여기]. 저기 doubles as an attention-getter — 저기요! is the standard way to hail a server or a stranger, and is far safer than any word for <i>you</i>."
              ],
              cognates: [
                "거기, 저기, 어디, 이곳/그곳/저곳 (the more formal written equivalents), 이쪽/그쪽/저쪽 (this way / that way)."
              ]
            }
          },
          {
            term: "집",
            roman: "jip",
            gloss: "house; home",
            pos: "noun",
            example: { text: "저는 집에서 공부해요.", roman: "jeoneun jibeseo gongbuhaeyo.", gloss: "I study at home." },
            linguistics: {
              origin: "native Korean",
              etymology: [
                "Middle Korean 집, unchanged for six hundred years and one of the core native words of the language. It covers both the building and the abstract <i>home</i>, and by extension the household: 집안 means <i>family, lineage</i>.",
                "It is also a productive suffix for small businesses, where it means roughly <i>shop, joint</i>: 술집 (a drinking place), 빵집 (a bakery), 고깃집 (a barbecue restaurant), 커피집. The honorific replacement is the Sino-Korean 댁 (宅), used when speaking of someone else's home: 선생님 댁."
              ],
              script: [
                "One block with the batchim ㅂ."
              ],
              phonology: [
                "[집] with an unreleased final; 집에 → [지베], 집이 → [지비] by liaison. The noun 지붕 (<i>roof</i>) is generally derived from 집 plus an old word for <i>top</i>, which is why the ㅂ resurfaces there."
              ],
              cognates: [
                "집안 (household), 집사람 (an older man's word for his wife), 빵집, 술집, 이웃집 (the house next door), 지붕 (roof). Honorific 댁 宅; Sino-Korean 가정 (家庭, household) and 주택 (住宅, housing)."
              ]
            }
          },
          {
            term: "학교",
            roman: "hakgyo",
            gloss: "school",
            pos: "noun",
            example: { text: "학교에 가요.", roman: "hakgyoe gayo.", gloss: "I go to school." },
            linguistics: {
              origin: "Sino-Korean",
              etymology: [
                "<b>學校</b>: 學 <i>hak</i> (to learn; a graph showing hands and a child under a roof) + 校 <i>gyo</i> (school; 木 <i>wood</i> with the phonetic 交, originally a wooden frame or enclosure, later a place of instruction). Middle Chinese *haewk *kaewH — the *-k of 學 is why Korean has the ㄱ batchim, and the velar of 校 is why the second syllable begins with ㄱ.",
                "The compound is ancient in Chinese but was re-fixed in its modern institutional sense in nineteenth-century Japan and spread from there across East Asia. Korea's Confucian academies had other names — 서당 (village school), 향교 (county school), 성균관 (the national academy) — and 학교 in the current sense belongs to the modern era."
              ],
              script: [
                "Two blocks; the first ends in the batchim ㄱ, which drives the pronunciation."
              ],
              phonology: [
                "Pronounced [학꾜]: 경음화 tenses the ㄱ of 교 after the stop coda. Before a nasal the coda nasalises instead: 학년 → [항년]. Before a vowel it liaises: 학교에 → [학꾜에]."
              ],
              cognates: [
                "Same 學: 학생 (student), 학년 (year at school), 대학교 (university), 유학 (study abroad), 학원 (private academy), 과학 (science). Same 校: 교장 (principal), 등교 (going to school), 모교 (alma mater). Mandarin xuéxiào 学校; Japanese gakkō 学校 — the three readings are all descendants of the same Middle Chinese source, which is why they rhyme so audibly."
              ]
            }
          },
          {
            term: "도서관",
            roman: "doseogwan",
            gloss: "library",
            pos: "noun",
            example: { text: "도서관에서 공부해요.", roman: "doseogwaneseo gongbuhaeyo.", gloss: "I study at the library." },
            linguistics: {
              origin: "Sino-Korean",
              etymology: [
                "<b>圖書館</b>: 圖 <i>do</i> (picture, map, plan) + 書 <i>seo</i> (writing, book) + 館 <i>gwan</i> (a hall, a public building; 食 <i>food</i> plus 官 <i>official</i>, originally a guest house where officials were fed). 圖書 together means <i>books and documents</i>, so the whole is a <i>hall of books and maps</i>.",
                "The compound was coined in Meiji Japan (<i>toshokan</i>) to translate the Western public library and adopted by both Korea and China. 館 is one of the most useful characters in Korean place vocabulary: any large public building of a particular function tends to end in it."
              ],
              script: [
                "Three blocks; only the last carries a batchim."
              ],
              phonology: [
                "[도서관]; 도서관에 → [도서과네] with liaison. The ㄱ of 관 is voiced to [ɡ] between vowels, which is why the Revised Romanization writes <i>doseogwan</i> with a g."
              ],
              cognates: [
                "Same 館: 대사관 (embassy), 미술관 (art museum), 박물관 (museum), 체육관 (gymnasium), 영화관 (cinema), 회관 (assembly hall). Same 書: 서점 (bookshop), 사전 (dictionary, 辭典 — different 사), 문서 (document). Mandarin túshūguǎn 图书馆; Japanese toshokan 図書館."
              ]
            }
          },
          {
            term: "식당",
            roman: "sikdang",
            gloss: "restaurant; cafeteria",
            pos: "noun",
            example: { text: "식당이 학교 안에 있어요.", roman: "sikdangi hakgyo ane isseoyo.", gloss: "The cafeteria is inside the school." },
            linguistics: {
              origin: "Sino-Korean",
              etymology: [
                "<b>食堂</b>: 食 <i>sik</i> (to eat, food) + 堂 <i>dang</i> (hall, a raised main room of a house). A <i>dining hall</i>.",
                "In Korean 식당 covers everything from a university canteen to an ordinary neighbourhood restaurant, and it is the default unmarked word. Fancier or foreign-style establishments use 레스토랑 (from French via English); a place selling one specific dish often uses 집 instead (국밥집, 냉면집)."
              ],
              script: [
                "Two blocks, both with a batchim."
              ],
              phonology: [
                "[식땅] — 경음화 after the ㄱ coda tenses the ㄷ. The same rule you saw in 학교 [학꾜] and 책상 [책쌍]."
              ],
              cognates: [
                "Same 食: 음식 (food), 식사 (a meal), 한식 (Korean food), 분식 (flour-based snack food), 간식 (a snack). Same 堂: 성당 (Catholic church), 강당 (auditorium), 서당 (traditional village school). Mandarin shítáng 食堂 (a canteen specifically); Japanese shokudō 食堂."
              ]
            }
          },
          {
            term: "카페",
            roman: "kape",
            gloss: "cafe; coffee shop",
            pos: "noun",
            example: { text: "카페에서 공부해요.", roman: "kapeeseo gongbuhaeyo.", gloss: "I study at a cafe." },
            linguistics: {
              origin: "loanword (French, via English)",
              etymology: [
                "From French <i>café</i>, which itself comes through Italian and Turkish from Arabic <b>قهوة</b> (<i>qahwa</i>), a word that originally denoted a kind of wine before it was transferred to the coffee drink. Korean 커피 (<i>coffee</i>) is the same Arabic root borrowed by a different route, through English — so 카페 and 커피 are ultimately the same word arriving twice.",
                "Korea's earlier word for a coffee house was <b>다방</b> (茶房, <i>tea room</i>), which flourished from the colonial period through the 1980s as a place for meetings and matchmaking. 다방 now sounds dated and slightly seedy; 카페 replaced it entirely as the modern espresso-bar culture arrived in the late 1990s."
              ],
              script: [
                "Two blocks. Note ㅍ for the f-like French sound and ㅋ for the initial k."
              ],
              phonology: [
                "[카페]. With the particle 에 the two identical-quality vowels merge in speech: 카페에서 is usually heard as [카페서]."
              ],
              cognates: [
                "커피 (coffee), 다방 (old-style tea room), 커피숍, 카페인 (caffeine). Korea also produced the Konglish 카공족 — literally <i>cafe study tribe</i>, people who work all day in cafes."
              ]
            }
          },
          {
            term: "은행",
            roman: "eunhaeng",
            gloss: "bank",
            pos: "noun",
            example: { text: "은행은 도서관 옆에 있어요.", roman: "eunhaengeun doseogwan yeope isseoyo.", gloss: "The bank is next to the library." },
            linguistics: {
              origin: "Sino-Korean",
              etymology: [
                "<b>銀行</b>: 銀 <i>eun</i> (silver — 金 <i>metal</i> plus the phonetic 艮) + 行, here read <b>행</b> in the sense of a <i>trading house</i> or <i>row of shops</i>. Literally a <i>silver house</i>, because silver was the standard medium of large-scale trade in Qing China and Joseon Korea.",
                "The character 行 is a well-known two-reading case in Sino-Korean: 행 for the senses <i>to go, to act, a line</i> (여행 travel, 행동 action) and 항 for <i>a row, a trade guild</i> (항렬 generational rank). The banking word conventionally takes 행 in Korean, while Mandarin uses the háng reading — yínháng — reflecting the <i>guild/row</i> sense."
              ],
              script: [
                "Two blocks; 행 ends in ㅇ [ŋ]."
              ],
              phonology: [
                "Written [은행], but the ㅎ between two voiced sounds is regularly weakened or dropped, so most speakers say [으냉]. This is a textbook instance of ㅎ 약화, the same process behind 전화 → [저놔] and 결혼 → [겨론]."
              ],
              cognates: [
                "Same 銀: 은 (silver), 은메달 (silver medal), 은하수 (the Milky Way, 銀河水). Same 行: 여행 (travel), 은행원 (bank clerk), 유행 (a fashion, <i>flowing trend</i>). Mandarin yínháng 银行; Japanese ginkō 銀行."
              ]
            }
          },
          {
            term: "병원",
            roman: "byeongwon",
            gloss: "hospital; clinic; doctor's office",
            pos: "noun",
            example: { text: "카페가 병원 앞에 있어요.", roman: "kapega byeongwon ape isseoyo.", gloss: "The cafe is in front of the hospital." },
            linguistics: {
              origin: "Sino-Korean",
              etymology: [
                "<b>病院</b>: 病 <i>byeong</i> (illness — the sickness radical 疒, a person on a bed, plus the phonetic 丙) + 院 <i>won</i> (an institution, originally a walled courtyard; 阜 <i>mound/wall</i> plus 完 <i>complete</i>).",
                "This is a Japanese-formed compound (<i>byōin</i>) shared with Korean but not with Chinese, which says 医院 yīyuàn. Note also that Korean 병원 covers any medical practice, from a tertiary hospital to a single dentist's room upstairs above a shop — so 병원에 가요 usually means <i>I am going to the doctor</i>, not that anyone is being admitted."
              ],
              script: [
                "Two blocks; 병 has the iotated vowel ㅕ and the coda ㅇ."
              ],
              phonology: [
                "[병원]. The coda ㅇ does not liaise, so 병원에 is [병워네] with only the ㄴ of 원 moving."
              ],
              cognates: [
                "Same 病: 병 (illness), 병문안 (visiting the sick), 지병 (chronic illness), 간병 (nursing). Same 院: 학원 (private academy), 대학원 (graduate school), 법원 (court), 미용원 (beauty parlour). Japanese byōin 病院; Mandarin uses yīyuàn 医院 instead."
              ]
            }
          },
          {
            term: "화장실",
            roman: "hwajangsil",
            gloss: "toilet; restroom; bathroom",
            pos: "noun",
            example: { text: "화장실이 어디에 있어요?", roman: "hwajangsiri eodie isseoyo?", gloss: "Where is the toilet?" },
            linguistics: {
              origin: "Sino-Korean",
              etymology: [
                "<b>化粧室</b>: 化 <i>hwa</i> (to change, transform) + 粧 <i>jang</i> (to adorn, to make up) + 室 <i>sil</i> (room). Literally a <i>make-up room</i> — a euphemism of exactly the same kind as English <i>powder room</i> or <i>restroom</i>.",
                "Korean has cycled through euphemisms for this room, and each in turn became too direct: 뒷간 (<i>the place out back</i>, native), 측간 (廁間), 변소 (便所, <i>convenience place</i> — still the word in North Korea and in older signage), and now 화장실. The English loan 토일렛 never took hold, though 파우더룸 has appeared in shopping malls, continuing the cycle."
              ],
              script: [
                "Three blocks; 화 uses the mixed vowel ㅘ."
              ],
              phonology: [
                "[화장실]; 화장실이 → [화장시리]. In practice the question 화장실이 어디예요? is delivered as one rushed phrase and is among the first sentences worth being able to say without thinking."
              ],
              cognates: [
                "화장 (make-up), 화장품 (cosmetics), 변화 (change), 문화 (culture). Same 室: 교실, 사무실, 침실, 연구실. Note the homophone 화장 (火葬, cremation) — same sound, entirely different characters."
              ]
            }
          },
          {
            term: "편의점",
            roman: "pyeonuijeom",
            gloss: "convenience store",
            pos: "noun",
            example: { text: "편의점은 학교 안에 있어요.", roman: "pyeonuijeomeun hakgyo ane isseoyo.", gloss: "The convenience store is inside the campus." },
            linguistics: {
              origin: "Sino-Korean",
              etymology: [
                "<b>便宜店</b>: 便 (convenient — read <b>편</b> in this sense) + 宜 <i>ui</i> (suitable, fitting) + 店 <i>jeom</i> (shop). 편의 means <i>convenience</i>, so the whole is a calque of the English term.",
                "The character 便 is another two-reading case: <b>편</b> for <i>convenience, ease</i> (편리, 편안, 우편) and <b>변</b> for the bodily sense (변소, 대변). Same character, two Sino-Korean readings, inherited from two distinct Middle Chinese readings. Note also that Mandarin's word for the shop uses 便利店 and Japanese abbreviates the English instead — コンビニ, <i>konbini</i> — so all three languages solved the same naming problem differently."
              ],
              script: [
                "Three blocks; 의 here is in non-initial position, which affects its pronunciation."
              ],
              phonology: [
                "[펴늬점] or, by the standard rule that non-initial ㅢ may be read [이], [펴니점]. Both are correct; the second is far more common in speech."
              ],
              cognates: [
                "편리 (convenience), 편안 (comfort), 간편 (simplicity), 우편 (post). Same 店: 서점 (bookshop), 상점 (shop), 백화점 (department store, 百貨店), 음식점 (eatery)."
              ]
            }
          },
          {
            term: "위",
            roman: "wi",
            gloss: "top; above; on",
            pos: "position noun",
            example: { text: "책상 위에 책이 있어요.", roman: "chaeksang wie chaegi isseoyo.", gloss: "There is a book on the desk." },
            linguistics: {
              origin: "native Korean",
              etymology: [
                "Middle Korean <b>우ㅎ</b>, a member of the ㅎ-final noun class — nouns that carried a hidden ㅎ which surfaced before particles. The ㅎ has since disappeared from the base word, but it left fossils: the compound linking form is 윗- or 위- with a doubled consonant, as in 윗사람 (<i>a senior</i>) and 위층 (<i>upper floor</i>).",
                "Like all Korean position words, 위 is a full noun, not a preposition. 책상 위 is a noun phrase meaning <i>the top of the desk</i>, and the particle 에 then locates something at it."
              ],
              script: [
                "One block with the mixed vowel ㅟ."
              ],
              phonology: [
                "[wi] for most speakers, [y] for conservative ones. 위에 is often reduced to [위에] or simply [웨] in fast speech."
              ],
              cognates: [
                "윗사람 (a senior), 위층 (upstairs), 위쪽 (the upper side). Opposites: 밑, 아래. Sino-Korean 상 (上) covers the same idea in compounds: 상층, 지상."
              ]
            }
          },
          {
            term: "밑",
            roman: "mit",
            gloss: "bottom; under; below (also 아래)",
            pos: "position noun",
            example: { text: "가방이 책상 밑에 있어요.", roman: "gabangi chaeksang mite isseoyo.", gloss: "The bag is under the desk." },
            linguistics: {
              origin: "native Korean",
              etymology: [
                "Middle Korean 밑, the underside or base of something. Korean has two words in this space: <b>밑</b> emphasises direct contact with or immediate proximity to the underside (책상 밑, <i>under the desk</i>), while <b>아래</b> (also native, Middle Korean 아래) is the more general <i>below</i> and is preferred for abstract or non-contact relations (아래층, <i>the floor below</i>).",
                "아래 also gave its name to the obsolete vowel letter ㆍ, called 아래아 (<i>the lower a</i>) because it was written as a dot below the line of the other vowels."
              ],
              script: [
                "One block with the batchim ㅌ, which neutralises to [ㄷ] but reappears before a vowel."
              ],
              phonology: [
                "[믿] alone; 밑에 → [미테] by liaison, restoring the ㅌ. Before ㅣ it would palatalise: 밑이 → [미치]."
              ],
              cognates: [
                "아래 (below), 밑줄 (an underline), 밑바닥 (the very bottom), 아래층 (downstairs). Sino-Korean 하 (下): 지하 (underground), 이하 (below, in lists)."
              ]
            }
          },
          {
            term: "앞",
            roman: "ap",
            gloss: "front; in front of",
            pos: "position noun",
            example: { text: "카페가 병원 앞에 있어요.", roman: "kapega byeongwon ape isseoyo.", gloss: "The cafe is in front of the hospital." },
            linguistics: {
              origin: "native Korean",
              etymology: [
                "Middle Korean 앒, later simplifying to 앞. As in many languages, the spatial <i>front</i> extends to the temporal <i>future</i>: 앞으로 means <i>from now on</i>, and 앞날 means <i>the days ahead</i>. Korean thus places the future in front of the speaker, the same metaphor English uses.",
                "Its opposite 뒤 correspondingly covers both <i>behind</i> and <i>afterwards</i> (뒤에 = later)."
              ],
              script: [
                "One block with the batchim ㅍ."
              ],
              phonology: [
                "[압] alone, with the ㅍ neutralised to an unreleased [p̚]; 앞에 → [아페] restores it. Learners often write 아페 phonetically — resist it, because Korean spelling keeps the morpheme constant."
              ],
              cognates: [
                "앞으로 (from now on), 앞날 (the future), 앞문 (front door), 눈앞 (right before one's eyes). Opposite: 뒤. Sino-Korean 전 (前): 전방, 이전, 오전."
              ]
            }
          },
          {
            term: "뒤",
            roman: "dwi",
            gloss: "back; behind",
            pos: "position noun",
            example: { text: "편의점이 도서관 뒤에 있어요.", roman: "pyeonuijeomi doseogwan dwie isseoyo.", gloss: "The convenience store is behind the library." },
            linguistics: {
              origin: "native Korean",
              etymology: [
                "Middle Korean <b>뒤ㅎ</b>, another ㅎ-final noun. The lost ㅎ is why compounds insert an extra consonant: 뒷문 (back door, pronounced [뒨문]), 뒷산 (the hill behind), 뒷일 (what comes after). The 사이시옷 written in those spellings is the modern orthographic descendant of that old ㅎ-and-linking behaviour.",
                "Like 앞, it works temporally as well as spatially: 뒤에 봐요 means <i>see you later</i>."
              ],
              script: [
                "One block with the mixed vowel ㅟ."
              ],
              phonology: [
                "[뒤]; 뒤에 → [뒤에]. In the compound 뒷문 the inserted ㅅ assimilates to the following nasal, giving [뒨문] — a good example of how the written 사이시옷 is almost never pronounced as [s]."
              ],
              cognates: [
                "뒷문, 뒷산, 뒤쪽, 뒤로 (backwards). Opposite: 앞. Sino-Korean 후 (後): 오후, 이후, 후배."
              ]
            }
          },
          {
            term: "옆",
            roman: "yeop",
            gloss: "side; next to; beside",
            pos: "position noun",
            example: { text: "은행이 학교 옆에 있어요.", roman: "eunhaengi hakgyo yeope isseoyo.", gloss: "The bank is next to the school." },
            linguistics: {
              origin: "native Korean",
              etymology: [
                "Middle Korean <b>녑</b> — with an initial ㄴ that later dropped before the y-glide, exactly the change that turns 녀자 into 여자. So 옆 and the body-part word 옆구리 (<i>the flank</i>) preserve, in their modern shapes, the results of one of Korean's most systematic sound laws.",
                "The word means the lateral side of something, and in describing rooms it is the ordinary way to say <i>next door</i>: 옆방, 옆집."
              ],
              script: [
                "One block, ㅇ + ㅕ + ㅍ."
              ],
              phonology: [
                "[엽] alone; 옆에 → [여페] with liaison restoring the ㅍ. 옆집 is [엽찝] with neutralisation plus tensification — two rules in one short word."
              ],
              cognates: [
                "옆집 (the house next door), 옆방 (the next room), 옆구리 (flank), 양옆 (both sides). Sino-Korean 측 (側): 측면 (a side aspect), 좌측/우측 (left/right side)."
              ]
            }
          },
          {
            term: "안",
            roman: "an",
            gloss: "inside; in",
            pos: "position noun",
            example: { text: "지우개가 가방 안에 있어요.", roman: "jiugaega gabang ane isseoyo.", gloss: "The eraser is in the bag." },
            linguistics: {
              origin: "native Korean",
              etymology: [
                "Middle Korean <b>안ㅎ</b>, ㅎ-final again — and this time the ㅎ is still audible in one everyday word. The compound 안 + 밖 gives <b>안팎</b> (<i>inside and out</i>), where the old ㅎ fused with the ㅂ of 밖 to produce an aspirated ㅍ. That single word is a live fossil of fifteenth-century Korean phonology.",
                "안 also means the domestic interior and, in older usage, the women's quarters, which is the source of 안사람 and 안방 (the main inner room of a house)."
              ],
              script: [
                "One block with the batchim ㄴ. Do not confuse it with the negative adverb 안 (as in 안 가요), which is a separate word."
              ],
              phonology: [
                "[안]; 안에 → [아네] by liaison."
              ],
              cognates: [
                "안팎 (inside and out), 안방 (main room), 실내 (indoors, 室內), 안쪽 (the inner side). Opposite: 밖. Sino-Korean 내 (內): 내부, 국내, 시내 (downtown, <i>inside the city</i>)."
              ]
            }
          },
          {
            term: "밖",
            roman: "bak",
            gloss: "outside",
            pos: "position noun",
            example: { text: "친구가 밖에 있어요.", roman: "chinguga bakke isseoyo.", gloss: "My friend is outside." },
            linguistics: {
              origin: "native Korean",
              etymology: [
                "Middle Korean 밧ㄱ, whose consonant cluster is the ancestor of the modern ㄲ batchim. The related and more concrete word <b>바깥</b> (<i>the outdoors, the outside surface</i>) preserves an older, longer form of the same root.",
                "밖에 has a second life as a grammatical item: attached to a noun and followed by a negative, it means <i>only, nothing but</i> — 물밖에 없어요, <i>there is nothing but water</i>. That construction is literally <i>outside of X, there is not</i>."
              ],
              script: [
                "One block ending in the tense batchim ㄲ, one of only two doubled letters permitted in a final slot."
              ],
              phonology: [
                "[박] alone; 밖에 → [바께], where the ㄲ moves into the following syllable intact. 밖으로 → [바끄로]."
              ],
              cognates: [
                "바깥 (outdoors), 바깥쪽, 안팎, 창밖 (outside the window). Sino-Korean 외 (外): 외국 (foreign country), 야외 (outdoors), 외부 (the exterior)."
              ]
            }
          },
          {
            term: "가다",
            roman: "gada",
            gloss: "to go",
            pos: "verb",
            audio: "가요",
            example: { text: "도서관에 가요.", roman: "doseogwane gayo.", gloss: "I go to the library." },
            linguistics: {
              origin: "native Korean",
              etymology: [
                "One of the oldest and most basic verbs in the language, Middle Korean 가다, unchanged. It is also one of the most productive: it forms the compound verbs 나가다 (to go out), 들어가다 (to go in), 올라가다 (to go up), 내려가다 (to go down), 돌아가다 (to go back — and, euphemistically, to pass away).",
                "Its counterpart 오다 (<i>to come</i>) works the same way, and Korean is strict about the deictic centre: you 가다 away from the speaker and 오다 toward them, so answering a call of <i>dinner is ready</i> uses 가요, not 와요, unlike English <i>I am coming</i>."
              ],
              script: [
                "The dictionary form is 가다; the polite 해요체 form is 가요, where the stem vowel ㅏ and the ending vowel 아 fuse into a single 아 rather than doubling."
              ],
              phonology: [
                "[가다] / [가요]. Because the stem already ends in ㅏ, the -아요 ending contracts completely: 가 + 아요 → 가요. Compare 오다 → 와요, where ㅗ + 아 gives the diphthong ㅘ."
              ],
              cognates: [
                "오다 (to come), 나가다, 들어가다, 돌아가다, 다니다 (to attend, to go regularly). Honorific: 가시다 / 가세요. The parting phrase 안녕히 가세요 from unit 1 contains it."
              ]
            }
          },
          {
            term: "공부하다",
            roman: "gongbuhada",
            gloss: "to study",
            pos: "verb",
            audio: "공부해요",
            example: { text: "카페에서 공부해요.", roman: "kapeeseo gongbuhaeyo.", gloss: "I study at a cafe." },
            linguistics: {
              origin: "Sino-Korean noun + native 하다",
              etymology: [
                "<b>工夫</b> + 하다: 工 <i>gong</i> (work, craft; the graph is a carpenter's square) + 夫 <i>bu</i> (a man, a labourer). The pattern <i>Sino-Korean noun + 하다</i> is the main engine of Korean verb creation — 공부하다, 사랑하다, 일하다, 전화하다 — and lets the language turn any borrowed noun into a verb instantly.",
                "The interesting part is what the same two characters mean elsewhere. In Mandarin, 工夫 / 功夫 <i>gōngfu</i> means <i>time spent, skill acquired by effort</i> — the source of English <i>kung fu</i>. In Japanese, 工夫 <i>kufū</i> means <i>a device, an ingenious contrivance</i>. Only Korean narrowed it to <i>studying</i>. All three senses grow from the same core idea of effort applied over time, but the three languages walked off in different directions with it — a good caution against assuming shared characters mean shared meanings."
              ],
              script: [
                "Three blocks plus 하다. The noun alone, 공부, is used with 하다 or with the object particle: 공부를 해요."
              ],
              phonology: [
                "[공부하다] / [공부해요]. 하다 verbs form their 해요체 irregularly: 하 + 여요 → 해요, one of the two genuinely irregular conjugations in Korean (the other being 이다)."
              ],
              cognates: [
                "Same 工: 공사 (construction), 공장 (factory), 인공 (artificial), 공학 (engineering). Other 하다 verbs: 일하다 (to work), 사랑하다 (to love), 말하다 (to speak), 전화하다 (to phone). Compare Mandarin gōngfu 工夫/功夫 and Japanese kufū 工夫."
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
            name: "에 — the location and destination particle",
            pattern: "Place + 에 + 있어요/없어요 · Place + 에 + 가요/와요",
            explanation: [
              "<b>에</b> attaches to a place noun and does two jobs. With the existential verbs 있다 and 없다 it marks <i>where something is</i>: 은행이 학교 옆에 있어요. With verbs of motion — 가다, 오다, 다니다 — it marks <i>where you are heading</i>: 도서관에 가요.",
              "Unlike 이/가 and 은/는, 에 has no vowel-versus-consonant alternation; it is always 에, whatever the noun ends in. It also does not replace the subject particle on a different noun in the same sentence: in 은행이 학교 옆에 있어요, 은행 keeps 이 as the subject and 옆 takes 에 as the location.",
              "The same particle later marks points in time (세 시에, 월요일에 — unit 4), which is not a coincidence: many languages use one marker for location in space and location in time. Note also that in casual speech 에 is often dropped after a place word when the meaning is obvious: 어디 가요? for 어디에 가요?"
            ],
            examples: [
              { text: "화장실이 어디에 있어요?", roman: "hwajangsiri eodie isseoyo?", gloss: "Where is the toilet?" },
              { text: "학교에 가요.", roman: "hakgyoe gayo.", gloss: "I am going to school." },
              { text: "친구가 카페에 있어요.", roman: "chinguga kapee isseoyo.", gloss: "My friend is at the cafe." },
              { text: "편의점이 여기에 없어요.", roman: "pyeonuijeomi yeogie eopseoyo.", gloss: "There is no convenience store here." },
              { text: "집에 가요.", roman: "jibe gayo.", gloss: "I am going home." }
            ]
          },
          {
            name: "에서 — where an action happens, and where you are from",
            pattern: "Place + 에서 + action verb · Place + 에서 + 왔어요",
            explanation: [
              "<b>에서</b> marks the place where an activity is carried out: 카페에서 공부해요, 식당에서 먹어요, 도서관에서 책을 읽어요. If a real action is taking place, the location takes 에서, not 에.",
              "The contrast with 에 is sharp and worth drilling. 집에 있어요 = <i>I am at home</i> (state, so 에). 집에서 공부해요 = <i>I study at home</i> (activity, so 에서). Learners tend to over-use 에 because it is taught first; a reliable test is to look at the verb. 있다/없다 and 가다/오다 take 에. Everything you actively <i>do</i> takes 에서.",
              "에서 has a second meaning: the <b>starting point</b>, <i>from</i>. 미국에서 왔어요 (<i>I came from the US</i>) is the standard way to state where you are from, and 여기에서 학교까지 (<i>from here to the school</i>) pairs it with 까지. Historically 에서 is 에 plus an old form of 있어 — <i>being at</i> — which explains why one particle covers both <i>at (doing)</i> and <i>out of</i>. In speech it frequently shortens to 서: 여기서, 어디서, 집에서 → 집서 in very casual style."
            ],
            examples: [
              { text: "카페에서 공부해요.", roman: "kapeeseo gongbuhaeyo.", gloss: "I study at a cafe." },
              { text: "식당에서 친구를 만나요.", roman: "sikdangeseo chingureul mannayo.", gloss: "I meet a friend at the restaurant." },
              { text: "저는 미국에서 왔어요.", roman: "jeoneun migugeseo wasseoyo.", gloss: "I am from the United States." },
              { text: "집에 있어요. 집에서 공부해요.", roman: "jibe isseoyo. jibeseo gongbuhaeyo.", gloss: "I am at home. I study at home. (state vs activity)" },
              { text: "어디에서 공부해요?", roman: "eodieseo gongbuhaeyo?", gloss: "Where do you study? (often shortened to 어디서)" }
            ]
          },
          {
            name: "Position words: 위, 밑, 앞, 뒤, 옆, 안, 밖",
            pattern: "Reference noun + position noun + 에",
            explanation: [
              "Korean has no prepositions. The words for <i>on, under, in front of, behind, beside, inside, outside</i> are <b>nouns</b>, and they follow the thing they are positioned relative to. 책상 위 is literally <i>the desk's top</i>; add 에 and you get 책상 위에, <i>at the desk's top</i> — that is, <i>on the desk</i>.",
              "The full pattern is [A] + [position noun] + 에 + [B] + 이/가 있어요, meaning <i>B is [position] A</i>. So 도서관 옆에 은행이 있어요 = <i>there is a bank next to the library</i>. The possessive 의 could in principle appear between the two nouns (책상의 위) but is essentially never used here.",
              "A few usage notes. 밑 and 아래 both mean <i>below</i>, with 밑 preferred for direct physical underside and 아래 for the general lower region. 안 is <i>inside</i> a container or boundary, while 속 is <i>inside</i> a mass or a body (가방 안 but 마음속). 사이 (<i>between</i>) and 근처 (<i>near</i>) join the same pattern: 학교와 병원 사이에, 학교 근처에."
            ],
            examples: [
              { text: "책상 위에 컴퓨터가 있어요.", roman: "chaeksang wie keompyuteoga isseoyo.", gloss: "There is a computer on the desk." },
              { text: "가방이 의자 밑에 있어요.", roman: "gabangi uija mite isseoyo.", gloss: "The bag is under the chair." },
              { text: "은행은 도서관 옆에 있어요.", roman: "eunhaengeun doseogwan yeope isseoyo.", gloss: "The bank is next to the library." },
              { text: "편의점이 학교 안에 있어요.", roman: "pyeonuijeomi hakgyo ane isseoyo.", gloss: "The convenience store is inside the campus." },
              { text: "카페가 병원 앞에 있어요.", roman: "kapega byeongwon ape isseoyo.", gloss: "The cafe is in front of the hospital." }
            ]
          },
          {
            name: "어디 questions and the 은/는요? follow-up",
            pattern: "N이/가 어디에 있어요? · 어디에 가요? · 어디에서 …? · N은/는요?",
            explanation: [
              "To ask where something is, put 어디 in the slot the answer would occupy and add the right particle. <b>어디에 있어요?</b> asks for a static location, <b>어디에 가요?</b> for a destination, <b>어디에서 …?</b> for the place of an activity. There is also the bare copula question <b>어디예요?</b> — 화장실이 어디예요? — which is slightly more casual and extremely common.",
              "The answers use 여기 / 거기 / 저기 or a place name, with the same particles: 여기에 있어요, 도서관에 가요, 카페에서 공부해요. Note that 어디에서 regularly contracts to 어디서, and that in relaxed speech the particle may vanish altogether: 어디 가요?",
              "One very useful conversational shortcut appears in this unit's dialogue: <b>N은/는요?</b>, meaning <i>and how about N?</i> It lets you bounce a question back without repeating it. 지현 씨는요? = <i>and you, Jihyeon?</i> 편의점은요? = <i>and the convenience store?</i> This is 은/는 plus the polite particle 요, and it is one of the highest-value two-syllable constructions in the language."
            ],
            examples: [
              { text: "은행이 어디에 있어요?", roman: "eunhaengi eodie isseoyo?", gloss: "Where is the bank?" },
              { text: "화장실이 어디예요?", roman: "hwajangsiri eodiyeyo?", gloss: "Where is the toilet? (casual copula form)" },
              { text: "지금 어디에 가요?", roman: "jigeum eodie gayo?", gloss: "Where are you going now?" },
              { text: "어디에서 공부해요?", roman: "eodieseo gongbuhaeyo?", gloss: "Where do you study?" },
              { text: "저는 도서관에 가요. 지현 씨는요?", roman: "jeoneun doseogwane gayo. jihyeon ssineunyo?", gloss: "I am going to the library. How about you, Jihyeon?" }
            ]
          }
        ]
      },
      {
        type: "notes",
        title: "Culture note: finding your way in a Korean city",
        body: [
          "Korean addresses used to be organised by land parcel rather than by street. The old 지번 system numbered plots in the order they were registered, which meant that number 15 could sit between number 3 and number 210, and finding a building genuinely required a phone call. In 2014 South Korea completed a switch to the 도로명주소 (road-name address) system, giving every street a name and numbering buildings sequentially along it. Both systems are still visible on older signs and documents, and Koreans of a certain age still navigate by 동 (neighbourhood) plus landmark rather than by street.",
          "Which is why the vocabulary of this unit is the vocabulary of real Korean directions. People locate things relative to landmarks — 편의점 앞, 은행 뒤, 지하철역 2번 출구 옆 (next to subway exit 2) — and subway exit numbers in particular function as the coordinate system of urban Korea. Arranging to meet at 강남역 11번 출구 is more precise, and far more usual, than giving an address.",
          "The 편의점 deserves its own note. South Korea has one of the highest densities of convenience stores in the world, and they do far more than sell snacks: you can pay bills, collect parcels, top up a transport card, use an ATM, print documents, and eat a hot meal at the window counter. Around universities and offices they function as an extension of the street. Their names — CU, GS25, 세븐일레븐, 이마트24 — are themselves a small case study in Korean loanword handling.",
          "Finally, notice how many Korean place words end in <b>-방</b> (房, room) or <b>-집</b> (house). 노래방 is a <i>song room</i> (karaoke), 찜질방 a <i>steam room</i> (24-hour bathhouse), PC방 an internet cafe, 만화방 a comic-book room, 스터디방 a rented study room. The pattern reflects a real feature of Korean urban life: privacy is rented by the hour in small rooms rather than found at home, since homes are small and often shared with family well into adulthood. Learning the -방 suffix unlocks a whole layer of the city."
        ]
      },
      {
        type: "practice",
        title: "Practice: where is it?",
        exercises: [
          {
            type: "mcq",
            prompt: "Choose the correct particle: 카페___ 공부해요.",
            promptAudio: null,
            choices: ["에서", "에", "이", "은"],
            answer: 0,
            explain: "공부하다 is an activity, so the place takes 에서. 에 would be used with 있어요/없어요 or with a verb of motion (카페에 가요)."
          },
          {
            type: "mcq",
            prompt: "Choose the correct particle: 친구가 도서관___ 있어요.",
            promptAudio: null,
            choices: ["에", "에서", "을", "도"],
            answer: 0,
            explain: "있어요 marks a static location, which takes 에. 에서 would require an action verb."
          },
          {
            type: "mcq",
            prompt: "Which sentence means 'The bag is under the desk'?",
            promptAudio: null,
            choices: [
              "가방이 책상 밑에 있어요.",
              "가방이 밑 책상에 있어요.",
              "책상이 가방 밑에 있어요.",
              "가방이 책상 위에 있어요."
            ],
            answer: 0,
            explain: "The pattern is [reference noun] + [position noun] + 에. 책상 밑에 = at the desk's underside. Option 3 reverses the two nouns, and option 4 says 'on top'."
          },
          {
            type: "mcq",
            prompt: "How do most Korean speakers actually pronounce 은행?",
            promptAudio: "은행",
            choices: ["[으냉]", "[은행]", "[은핵]", "[읃행]"],
            answer: 0,
            explain: "ㅎ between two voiced sounds is regularly weakened or dropped, giving [으냉]. The same process gives 전화 → [저놔] and 결혼 → [겨론]."
          },
          {
            type: "typing",
            prompt: "Ask 'Where is the toilet?'",
            answer: ["화장실이 어디에 있어요", "화장실이 어디에 있어요?", "화장실이 어디예요", "화장실이 어디예요?", "화장실이 어디에요", "화장실이 어디에요?"],
            hint: "화장실 + 이 … 어디에 있어요? or the shorter 어디예요?"
          },
          {
            type: "typing",
            prompt: "Write 'I study at home.'",
            answer: ["집에서 공부해요", "집에서 공부해요.", "저는 집에서 공부해요", "저는 집에서 공부해요."],
            hint: "An activity, so the place takes 에서."
          },
          {
            type: "listening",
            prompt: "Listen and choose the correct English.",
            audioText: "은행이 학교 옆에 있어요.",
            choices: [
              "The bank is next to the school.",
              "The bank is behind the school.",
              "The school is next to the bank.",
              "There is no bank next to the school."
            ],
            answer: 0,
            explain: "옆 is 'beside'. 뒤 would be 'behind'. The subject marked with 이 is 은행, so the bank is the thing being located."
          },
          {
            type: "listening",
            prompt: "Listen. Where is the speaker going?",
            audioText: "편의점에 가요.",
            choices: ["to the convenience store", "to the hospital", "to the library", "to the bank"],
            answer: 0,
            explain: "편의점 (便宜店) is a convenience store, usually pronounced [펴니점]. 병원 is a hospital, 도서관 a library, 은행 a bank."
          },
          {
            type: "match",
            prompt: "Match each place with its English meaning.",
            pairs: [
              { a: "도서관", b: "library" },
              { a: "식당", b: "restaurant" },
              { a: "은행", b: "bank" },
              { a: "병원", b: "hospital" },
              { a: "화장실", b: "toilet" },
              { a: "편의점", b: "convenience store" }
            ]
          },
          {
            type: "match",
            prompt: "Match each position word with its meaning.",
            pairs: [
              { a: "위", b: "on top of" },
              { a: "밑", b: "under" },
              { a: "앞", b: "in front of" },
              { a: "뒤", b: "behind" },
              { a: "옆", b: "next to" },
              { a: "안", b: "inside" }
            ]
          },
          {
            type: "order",
            prompt: "Arrange into a sentence: 'There is a book on the desk.'",
            tokens: ["책상", "위에", "책이", "있어요"],
            answer: "책상 위에 책이 있어요"
          },
          {
            type: "order",
            prompt: "Arrange into a question: 'Where do you study?'",
            tokens: ["어디에서", "공부해요?"],
            answer: "어디에서 공부해요?"
          }
        ]
      }
    ]
  });
})();
