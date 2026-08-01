window.CURRICULUM = window.CURRICULUM || {};
(function () {
  const C = window.CURRICULUM;
  C.korean = C.korean || { units: [] };

  C.korean.units.push({
    id: "ko-08",
    order: 8,
    title: "Plans & Honorifics",
    titleNative: "계획과 높임말",
    subtitle: "Say what you will do with -(으)ㄹ 거예요, and learn how Korean grammar encodes respect.",
    textbookBasis: [
      "Integrated Korean Beginning 1 (KLEAR), Lessons 7-8: the future -(으)ㄹ 거예요 and subject honorification",
      "Sogang Korean 1A, Unit 7: 방학에 뭐 할 거예요?",
      "Yonsei Korean 1, Lesson 8: 높임말과 계획",
      "Talk To Me In Korean Level 1, Lesson 20 and Level 2, Lessons 8-9: future tense, honorifics, speech levels"
    ],
    overview: [
      "Two big systems close out the beginner arc. The first is the <b>future and intention</b> ending -(으)ㄹ 거예요, which lets you talk about plans, and which turns out to be built from pieces you already know: an adnominal ending, the noun 것 (thing), and the copula.",
      "The second is <b>honorifics</b> — the reason Korean has a reputation for difficulty, and the thing that makes it genuinely interesting to a linguist. Korean does not merely have polite words; it grammaticalises social relationships in three independent dimensions at once. You mark respect toward the person you are speaking <i>to</i> (speech levels), toward the <i>subject</i> of your sentence (the infix -(으)시-), and toward the person the action is aimed <i>at</i> (humble verbs like 드리다). A single sentence can encode all three.",
      "You have been using honorific forms since Unit 1 without analysing them: 안녕하세요, 감사합니다, 주세요, 오세요 are all honorific. This unit takes them apart, shows you the machinery, and gives you the suppletive vocabulary — 계시다, 드시다, 주무시다, 연세, 성함, 댁 — that Korean substitutes wholesale when the subject deserves respect."
    ],
    sections: [
      {
        type: "dialogue",
        title: "대화: 방학에 뭐 할 거예요?",
        context: "The last week of term. Minji meets her teacher in the corridor and they talk about vacation plans.",
        lines: [
          { speaker: "민지", text: "선생님, 안녕하세요. 어디 가세요?", roman: "Seonsaengnim, annyeonghaseyo. Eodi gaseyo?", gloss: "Hello, teacher. Where are you going?" },
          { speaker: "선생님", text: "아, 민지 씨. 방학에 뭐 할 거예요?", roman: "A, Minji ssi. Banghage mwo hal geoyeyo?", gloss: "Ah, Minji. What are you going to do during the vacation?" },
          { speaker: "민지", text: "저는 할머니 댁에 갈 거예요. 할머니께서 부산에 계세요.", roman: "Jeoneun halmeoni daege gal geoyeyo. Halmeonikkeseo Busane gyeseyo.", gloss: "I am going to my grandmother's house. My grandmother lives in Busan." },
          { speaker: "선생님", text: "좋네요. 할머니께서는 연세가 어떻게 되세요?", roman: "Jonneyo. Halmeonikkeseoneun yeonsega eotteoke doeseyo?", gloss: "That is nice. How old is your grandmother?" },
          { speaker: "민지", text: "여든다섯이세요. 그렇지만 아주 건강하세요.", roman: "Yeodeundaseosiseyo. Geureochiman aju geonganghaseyo.", gloss: "She is eighty-five. But she is very healthy." },
          { speaker: "선생님", text: "그럼 할머니께 선물을 드리세요.", roman: "Geureom halmeonikke seonmureul deuriseyo.", gloss: "Then give your grandmother a present." },
          { speaker: "민지", text: "네, 꼭 드릴 거예요. 선생님은 방학에 뭐 하세요?", roman: "Ne, kkok deuril geoyeyo. Seonsaengnimeun banghage mwo haseyo?", gloss: "Yes, I will definitely give her one. What are you doing during the vacation, teacher?" },
          { speaker: "선생님", text: "저는 가족하고 여행을 갈 거예요. 그리고 책도 좀 읽을 거예요.", roman: "Jeoneun gajokhago yeohaengeul gal geoyeyo. Geurigo chaekdo jom ilgeul geoyeyo.", gloss: "I am going to travel with my family. And I will read some books too." },
          { speaker: "민지", text: "정말 좋은 계획이에요. 방학 잘 보내세요, 선생님.", roman: "Jeongmal joeun gyehoegieyo. Banghak jal bonaeseyo, seonsaengnim.", gloss: "That is a really good plan. Have a good vacation, teacher." },
          { speaker: "선생님", text: "고마워요. 민지 씨도 잘 지내세요.", roman: "Gomawoyo. Minji ssido jal jinaeseyo.", gloss: "Thank you. You take care too, Minji." }
        ]
      },
      {
        type: "vocab",
        title: "단어: plans and respect",
        items: [
          {
            term: "계획",
            roman: "gyehoek",
            gloss: "plan",
            pos: "noun (with 하다: to plan)",
            example: { text: "주말 계획이 있어요?", roman: "Jumal gyehoegi isseoyo?", gloss: "Do you have weekend plans?" },
            linguistics: {
              origin: "Sino-Korean",
              etymology: [
                "計劃 (also written 計畫) = 計 (to count, to reckon; Middle Chinese *kejH) + 劃 (to demarcate, to draw a line; Middle Chinese *hwɛk). Literally to reckon and mark out — the mental act of drawing boundaries around a future.",
                "The modern abstract sense of a plan is a 19th-century usage that spread across the Sinosphere with Western administrative and economic vocabulary; classical usage was closer to a stratagem."
              ],
              script: [
                "計: the speech radical 言 plus 十 (ten) — counting aloud.",
                "劃: 畫 (to draw) plus the knife radical 刂 — cutting a boundary. Korean spells the word with 劃 (획), giving the ㄱ batchim."
              ],
              phonology: [
                "The Middle Chinese entering-tone coda -k gives Korean ㄱ: 劃 *hwɛk → 획. Compare 책 (冊) in Unit 5.",
                "계획 is officially [계획] but is very widely pronounced [게훽] or [게훡]: the diphthong ㅖ after a consonant regularly reduces to ㅔ in modern speech, and the National Institute of Korean Language accepts [게훽] as a permitted variant. 계획이 resyllabifies to [계회기], gyehoegi."
              ],
              cognates: [
                "Korean words with 計: 시계 (時計, clock), 통계 (統計, statistics), 회계 (會計, accounting), 설계 (設計, design).",
                "Korean words with 劃/畫: 구획 (區劃, a zone), 획기적 (劃期的, epoch-making), 영화 (映畫, film — Unit 7).",
                "Cross-language: Mandarin jìhuà 计划, Japanese keikaku 計画."
              ]
            }
          },
          {
            term: "약속",
            roman: "yaksok",
            gloss: "promise; appointment, plans to meet",
            pos: "noun (with 하다: to promise, to make plans)",
            example: { text: "내일 친구하고 약속이 있어요.", roman: "Naeil chinguhago yaksogi isseoyo.", gloss: "I have plans with a friend tomorrow." },
            linguistics: {
              origin: "Sino-Korean",
              etymology: [
                "約束 = 約 (to bind, to agree, to restrict; Middle Chinese *ʔjak) + 束 (to bundle, to tie up; Middle Chinese *syuwk). Literally to bind and tie — the metaphor of a promise as a knot is shared with English <i>binding agreement</i>.",
                "The three languages took this compound in different directions. Korean 약속 and Japanese 約束 yakusoku both mean a promise or an arrangement to meet. Mandarin 约束 yuēshù kept the literal sense and means to restrain or constrain; for an appointment Mandarin says 约会 yuēhuì or 预约 yùyuē. This is a good reminder that shared hanja compounds are not automatically shared meanings."
              ],
              script: [
                "約: the silk radical 糸 plus 勺 (ladle) as phonetic — binding with a cord.",
                "束: a pictograph of firewood bound in the middle with a cord. The two characters reinforce the same image."
              ],
              phonology: [
                "Both syllables end in a -k reflex of a Middle Chinese entering tone. 약속 is [약쏙]: the ㄱ batchim tensifies the following ㅅ, a completely regular tensification that the spelling does not show.",
                "약속이 is [약쏘기], yaksogi."
              ],
              cognates: [
                "Korean words with 約: 예약 (豫約, reservation), 계약 (契約, contract), 절약 (節約, thrift), 요약 (要約, summary).",
                "Korean words with 束: 단속 (團束, crackdown, enforcement), 구속 (拘束, detention), 결속 (結束, solidarity).",
                "Cross-language: Japanese yakusoku 約束 (same meaning as Korean), Mandarin yuēshù 约束 (to restrain — a false friend)."
              ]
            }
          },
          {
            term: "방학",
            roman: "banghak",
            gloss: "school vacation",
            pos: "noun",
            example: { text: "방학에 여행을 갈 거예요.", roman: "Banghage yeohaengeul gal geoyeyo.", gloss: "I am going to travel during the vacation." },
            linguistics: {
              origin: "Sino-Korean",
              etymology: [
                "放學 = 放 (to release, to let go; Middle Chinese *pjangH) + 學 (study, school; Middle Chinese *hɛwk). Literally to release from study.",
                "Korean uses it for the long institutional breaks — 여름 방학 and 겨울 방학. Mandarin 放学 fàngxué means something quite different: school letting out for the day, going-home time. Mandarin says 放假 fàngjià for a vacation. Japanese does not use the compound at all, preferring 休み yasumi.",
                "The opposite is 개학 (開學, the start of term), and adults use 휴가 (休暇, leave) rather than 방학, which belongs specifically to schools."
              ],
              script: [
                "放: 方 (direction) as phonetic plus 攴/攵 (a hand with a stick, the action radical) — to let go with force.",
                "學: the older form shows two hands over a roof with 子 (child) beneath — a child being taught under a roof. Simplified Chinese writes 学, Japanese 学."
              ],
              phonology: [
                "방학 is [방학]. The ㅇ batchim is the velar nasal and the ㅎ is a light glottal fricative; in rapid speech many speakers weaken it to something close to [방악].",
                "The 학 of 방학 is the same 學 you already know from 학교 (學校) and 학생 (學生) — a good moment to notice that hanja knowledge compounds."
              ],
              cognates: [
                "Korean words with 學: 학교, 학생, 대학 (大學, university), 수학 (數學, mathematics), 학기 (學期, semester).",
                "Korean words with 放: 방송 (放送, broadcasting), 해방 (解放, liberation), 방출 (放出, release), 개방 (開放, opening up).",
                "Cross-language: Mandarin fàngxué 放学 (school finishing for the day — different meaning), Japanese hōgaku 放学 (rare)."
              ]
            }
          },
          {
            term: "선생님",
            roman: "seonsaengnim",
            gloss: "teacher (also a respectful term of address for adults)",
            pos: "noun",
            example: { text: "선생님께서 교실에 계세요.", roman: "Seonsaengnimkkeseo gyosire gyeseyo.", gloss: "The teacher is in the classroom." },
            linguistics: {
              origin: "Sino-Korean + native honorific suffix",
              etymology: [
                "先生 = 先 (before, prior; Middle Chinese *sen) + 生 (to be born, to live; Middle Chinese *sraeng). Literally one born before — the elder, and by extension the one who teaches.",
                "The suffix <b>-님</b> is native. Middle Korean 님 meant master or lord as an independent noun, and it survives that way in 임금 (king) and 임자 (owner). As a suffix it attaches to titles and roles to elevate the person: 선생님, 사장님, 어머님, 아버님, 손님, 하나님. Attaching -님 to 선생 is effectively obligatory in Korean; 선생 alone sounds curt or even dismissive.",
                "The three East Asian languages diverge again: Korean 선생님 means teacher, Japanese 先生 sensei covers teachers, doctors and politicians, and Mandarin 先生 xiānsheng is simply Mr or sir (and, in older usage, husband)."
              ],
              script: [
                "先: a foot 止 above a person 儿 — someone walking ahead.",
                "生: a pictograph of a sprout pushing up through the ground, hence to grow, to be born, life.",
                "님 is written in Hangul only, being native."
              ],
              phonology: [
                "선생님 is [선생님]. The three nasals — ㄴ, ㅇ, ㅁ — give the word its characteristic soft profile.",
                "Its honorific subject form is 선생님께서, and the honorific dative is 선생님께. Note that -님 does not itself trigger 께서; the two are independent devices that usually appear together."
              ],
              cognates: [
                "The -님 family: 사장님 (company president), 손님 (guest, customer), 부모님 (parents), 형님, 누님, 여러분 uses a different suffix.",
                "Korean words with 先: 우선 (于先, first of all), 선배 (先輩, senior colleague), 선진국 (先進國, developed country).",
                "Korean words with 生: 학생, 생일 (生日, birthday), 인생 (人生, human life), 생선 (生鮮, fresh fish)."
              ]
            }
          },
          {
            term: "할머니",
            roman: "halmeoni",
            gloss: "grandmother",
            pos: "noun",
            example: { text: "할머니께서 부산에 계세요.", roman: "Halmeonikkeseo Busane gyeseyo.", gloss: "My grandmother lives in Busan." },
            linguistics: {
              origin: "native Korean (compound)",
              etymology: [
                "한 (great, big) + 어머니 (mother), contracted to 할머니. The parallel 할아버지 (grandfather) is 한 + 아버지. The prefix is the adnominal form of the Middle Korean verb <b>하다 meaning to be many or great</b> — a completely different verb from 하다 to do, which was ᄒᆞ다 with arae-a in Middle Korean. Modern Korean has merged the two spellings but the old sense survives in 하고많다 (to be plentiful) and in 한길, 한숨, 한여름.",
                "So a grandmother is etymologically a great-mother, exactly like German <i>Großmutter</i> and French <i>grand-mère</i> — an independent parallel, not a borrowing."
              ],
              script: [
                "할 (ㅎ + ㅏ + ㄹ) 머 니. Native, no hanja. The ㄹ of 할 is the residue of the ㄴ of 한 assimilating to the following ㅁ — a change frozen in the spelling."
              ],
              phonology: [
                "할머니 is [할머니], with the ㄹ pronounced as a lateral before ㅁ.",
                "The honorific set for grandmother is fully suppletive: 할머니께서 계세요 (she is present), 진지를 드세요 (she eats), 주무세요 (she sleeps), 연세 (her age), 말씀 (her words). Korean grammar reserves an entire vocabulary for grandparents."
              ],
              cognates: [
                "Family terms with 한/할: 할아버지 (grandfather), 할머님 (more formal), 외할머니 (maternal grandmother, with 外), 증조할머니 (great-grandmother, with 曾祖).",
                "The Sino-Korean equivalents are 조모 (祖母) and 조부 (祖父), used only in formal registers and documents."
              ]
            }
          },
          {
            term: "부모님",
            roman: "bumonim",
            gloss: "parents",
            pos: "noun",
            example: { text: "부모님께 전화를 드렸어요.", roman: "Bumonimkke jeonhwareul deuryeosseoyo.", gloss: "I phoned my parents." },
            linguistics: {
              origin: "Sino-Korean + native honorific suffix",
              etymology: [
                "父母 = 父 (father) + 母 (mother), plus the native honorific -님. The -님 is not optional in ordinary Korean: talking about your 부모 without it sounds cold, and this is one of the clearest signs that Korean honorification is grammatical rather than merely stylistic.",
                "父 is a pictograph of a hand holding an axe or staff — authority. 母 is a pictograph of a kneeling woman with two dots marking the breasts, a variant of 女."
              ],
              script: [
                "父 has four strokes and is Kangxi radical 88. 母 has five and is radical 80. Both are among the oldest characters, attested on Shang oracle bones."
              ],
              phonology: [
                "부모님 is [부모님]. Before the honorific dative it becomes 부모님께 [부모님께].",
                "Note that Korean uses the honorific for one's own parents when speaking to outsiders — the opposite of the Japanese convention, where you humble your own family. Korean honorification is <b>absolute</b> (based on the referent's status) rather than <b>relative</b> (based on in-group versus out-group) as Japanese largely is. This is a genuine typological difference between two otherwise similar systems."
              ],
              cognates: [
                "Korean words with 父: 조부 (祖父), 부친 (父親), 신부 (神父, Catholic priest).",
                "Korean words with 母: 모국어 (母國語, mother tongue), 이모 (姨母, maternal aunt), 유모차 (乳母車, pram).",
                "Native equivalents: 어머니 / 엄마, 아버지 / 아빠. Every Korean family term exists in a native everyday form and a Sino-Korean formal one."
              ]
            }
          },
          {
            term: "댁",
            roman: "daek",
            gloss: "someone's house (honorific)",
            pos: "noun",
            example: { text: "할머니 댁에 갈 거예요.", roman: "Halmeoni daege gal geoyeyo.", gloss: "I am going to my grandmother's house." },
            linguistics: {
              origin: "Sino-Korean",
              etymology: [
                "宅, Middle Chinese *draek, meaning a residence. Korean uses it as the honorific replacement for the native 집 (house) when the house belongs to someone deserving respect: 선생님 댁, 할머니 댁, 부모님 댁.",
                "By extension 댁 also functions as a second-person pronoun — 댁이 누구세요? (who are you?) — using the addressee's household to avoid naming them directly. Referring to someone by their residence rather than their person is a politeness strategy found across languages; compare English <i>the White House said</i>."
              ],
              script: [
                "宅: the roof radical 宀 over 乇 as phonetic. The roof radical marks dozens of building and household words: 家 (house), 室 (room), 安 (peace, a woman under a roof), 客 (guest)."
              ],
              phonology: [
                "The entering-tone -k of Middle Chinese *draek gives the ㄱ batchim of 댁. Compare 책 (冊) and 획 (劃).",
                "댁에 resyllabifies and voices to [대게], daege. Note the parallel with 집에 [지베]."
              ],
              cognates: [
                "Korean words with 宅: 주택 (住宅, housing), 자택 (自宅, one's own home), 택배 (宅配, home delivery — a Japanese coinage 宅配 takuhai now ubiquitous in Korea).",
                "The honorific noun set this belongs to: 집 → 댁, 밥 → 진지, 이름 → 성함, 나이 → 연세, 말 → 말씀, 사람 → 분, 생일 → 생신."
              ]
            }
          },
          {
            term: "말씀",
            roman: "malsseum",
            gloss: "words, speech (honorific and humble)",
            pos: "noun",
            example: { text: "선생님 말씀을 들었어요.", roman: "Seonsaengnim malsseumeul deureosseoyo.", gloss: "I listened to the teacher's words." },
            linguistics: {
              origin: "native Korean",
              etymology: [
                "말 (speech, words) plus the bound suffix -씀, which belongs to the same small family as the -씨 of 날씨 (Unit 7), 솜씨 and 글씨. Its precise original meaning is not established.",
                "What makes 말씀 remarkable is that it is <b>both honorific and humble</b> — a rarity in any language. When the words belong to a superior it elevates them (선생님의 말씀, the teacher's words); when the words are your own addressed to a superior it lowers them (제가 말씀드리겠습니다, allow me to speak). Direction of respect is supplied entirely by context, not by the word."
              ],
              script: [
                "말 (ㅁ + ㅏ + ㄹ) 씀 (ㅆ + ㅡ + ㅁ). Native, no hanja."
              ],
              phonology: [
                "말씀 is [말씀]. The tense ㅆ is written into the spelling, as in 날씨, showing the tensification is lexicalised rather than a live compound effect.",
                "The verb 말씀하시다 is the honorific of 말하다, and 말씀드리다 is its humble counterpart — one noun generating both halves of the system."
              ],
              cognates: [
                "The -씨/-씀 family: 날씨 (weather), 솜씨 (skill), 글씨 (handwriting), 마음씨 (disposition).",
                "From 말: 말하다 (to speak), 말투 (way of speaking), 반말 (informal speech, literally half-speech), 존댓말 (respectful speech, from 尊待 + 말).",
                "The Sino-Korean parallel is 언 (言) and 어 (語): 언어 (言語, language), 발언 (發言, a remark), 국어 (國語, national language)."
              ]
            }
          },
          {
            term: "연세",
            roman: "yeonse",
            gloss: "age (honorific)",
            pos: "noun",
            example: { text: "할머니께서는 연세가 어떻게 되세요?", roman: "Halmeonikkeseoneun yeonsega eotteoke doeseyo?", gloss: "How old is your grandmother?" },
            linguistics: {
              origin: "Sino-Korean",
              etymology: [
                "年歲 = 年 (year; Middle Chinese *nen) + 歲 (year, age; Middle Chinese *sjwejH). A coordinate compound of two words for year, used in Korean as the honorific replacement for the native 나이 (age).",
                "年 originally depicted 禾 (grain) over 人 (person) — a person carrying the harvest, hence one annual cycle. 歲 was originally a battle-axe, later borrowed for the Jupiter cycle used in ancient Chinese year-reckoning, and from there for years generally.",
                "The native word 나이 comes from Middle Korean 나ㅎ (age) plus the nominal suffix -이, and belongs to the ㅎ-final noun class discussed under 바다 in Unit 7."
              ],
              script: [
                "年: six strokes. 歲: thirteen strokes, containing 止 (foot) and 戌 — its complexity is why simplified Chinese reduced it to 岁."
              ],
              phonology: [
                "연세 is [연세]. The initial ㄴ rather than ㄹ reflects 두음법칙 again — 年 would otherwise give 년, and indeed it does in non-initial position: 작년 (昨年), 내년 (來年), 학년 (學年).",
                "That alternation is worth pausing over: the same character surfaces as 연 word-initially (연세, 연도) and 년 elsewhere (내년, 학년). One morpheme, two shapes, decided purely by position."
              ],
              cognates: [
                "Korean words with 年: 내년, 작년, 학년 (school year), 연도 (年度, fiscal or academic year), 청년 (靑年, youth).",
                "Korean words with 歲: 세배 (歲拜, the New Year bow), 만세 (萬歲, ten thousand years — the cheer).",
                "The honorific set: 나이 → 연세, 생일 → 생신, 이름 → 성함, 집 → 댁."
              ]
            }
          },
          {
            term: "성함",
            roman: "seongham",
            gloss: "name (honorific)",
            pos: "noun",
            example: { text: "성함이 어떻게 되세요?", roman: "Seonghami eotteoke doeseyo?", gloss: "May I ask your name?" },
            linguistics: {
              origin: "Sino-Korean",
              etymology: [
                "姓銜 = 姓 (surname, clan name; Middle Chinese *sjengH) + 銜 (a title, an official rank; Middle Chinese *hɛm). Literally surname and title — asking for someone's full designation rather than merely their name.",
                "姓 is written 女 (woman) plus 生 (born): the clan one is born of, through the mother. The character is often cited as evidence of matrilineal clan naming in archaic Chinese society, though the inference is debated.",
                "銜 originally meant a horse's bit — metal 金 in the mouth 行 — and came to mean the badge or title one bears. It survives in Korean 직함 (職銜, job title)."
              ],
              script: [
                "姓: eight strokes, 女 + 生. 銜: fourteen strokes, 金 inside 行."
              ],
              phonology: [
                "성함 is [성함]. Before a vowel-initial particle it resyllabifies: 성함이 is [성하미], seonghami.",
                "The standard polite way to ask a name is 성함이 어떻게 되세요? — literally how does your name come to be? Korean avoids the blunt 이름이 뭐예요? with anyone senior. The verb 되다 in this idiom is a politeness hedge, softening the question by making it about how things stand rather than about the person."
              ],
              cognates: [
                "Korean words with 姓: 성씨 (姓氏, surname), 백성 (百姓, the common people, literally the hundred surnames), 동성 (同姓, same surname).",
                "Korean words with 銜: 직함 (職銜, job title), 함자 (銜字, an elder's given name).",
                "The plain counterparts: 이름 (native, name), 성 (surname), 별명 (別名, nickname)."
              ]
            }
          },
          {
            term: "계시다",
            roman: "gyesida",
            gloss: "to be, to be present (honorific of 있다)",
            pos: "verb",
            example: { text: "선생님께서 교실에 계세요.", roman: "Seonsaengnimkkeseo gyosire gyeseyo.", gloss: "The teacher is in the classroom." },
            linguistics: {
              origin: "native Korean",
              etymology: [
                "Middle Korean 겨시다, from the older verb 겨- (to be present, to stay) plus the honorific infix -시-. The base verb 겨다 has otherwise vanished from the language, leaving 계시다 as a frozen honorific with no plain counterpart of its own.",
                "It replaces 있다 only in the <b>existence and location</b> sense applied to a person: 선생님이 계세요. It does <b>not</b> replace the possessive 있다: for a respected person's possessions you say 선생님은 시간이 있으세요, using the regular -(으)시- on 있다, because it is the time that exists, not the teacher. Getting this split right is the mark of genuinely good honorific control."
              ],
              script: [
                "계 (ㄱ + ㅖ) 시 다. The diphthong ㅖ after ㄱ is commonly reduced in speech."
              ],
              phonology: [
                "계시다 is officially [계시다] but standardly permitted as [게시다]; the polite 계세요 is normally heard as [게세요].",
                "Its negative counterpart is 안 계세요, and the past is 계셨어요. The formal-style form is 계십니다."
              ],
              cognates: [
                "Related honorific-only verbs with the same frozen -시-: 주무시다 (to sleep), 잡수시다 (to eat), 돌아가시다 (to pass away), 편찮으시다 (to be ill).",
                "The humble counterpart of 있다 for oneself is simply 있다 — Korean has no humble existential, so you say 저는 집에 있어요 and 선생님은 댁에 계세요."
              ]
            }
          },
          {
            term: "드시다",
            roman: "deusida",
            gloss: "to eat, to drink (honorific of 먹다 and 마시다)",
            pos: "verb",
            example: { text: "할머니께서 진지를 드세요.", roman: "Halmeonikkeseo jinjireul deuseyo.", gloss: "My grandmother is eating her meal." },
            linguistics: {
              origin: "native Korean",
              etymology: [
                "From 들다 (to lift, to take up, to hold) plus the honorific -시-. Elevating an honoured person's eating to a lifting or taking is the same euphemistic move English makes with <i>to take refreshment</i>.",
                "The ㄹ of 들- drops before -시-, as it does for every ㄹ-stem verb, giving 드시다 rather than 들시다. An even higher form, 잡수시다 (from 잡수다), exists for the most respected referents — grandparents, the very elderly. In practice 드시다 covers almost everything."
              ],
              script: [
                "드 (ㄷ + ㅡ) 시 다. Native, no hanja."
              ],
              phonology: [
                "드시다 replaces both 먹다 and 마시다: 커피를 드세요 (please have some coffee) covers drinking as well as eating.",
                "The imperative 드세요 is one of the most-heard phrases in Korea, said whenever food is placed in front of anyone — the near-equivalent of <i>bon appétit</i>. The plainer 먹어 and the very polite 잡수세요 flank it."
              ],
              cognates: [
                "From the same 들다: 들어가다 (to enter, literally to lift-and-go), 들어오다, 마음에 들다 (to be to one's liking).",
                "The honorific verb set: 먹다 → 드시다 / 잡수시다, 자다 → 주무시다, 있다 → 계시다, 말하다 → 말씀하시다, 죽다 → 돌아가시다, 주다 → 주시다, 아프다 → 편찮으시다."
              ]
            }
          },
          {
            term: "주무시다",
            roman: "jumusida",
            gloss: "to sleep (honorific of 자다)",
            pos: "verb",
            example: { text: "할아버지께서 주무세요.", roman: "Harabeojikkeseo jumuseyo.", gloss: "My grandfather is sleeping." },
            linguistics: {
              origin: "native Korean (etymology uncertain)",
              etymology: [
                "Attested in Middle Korean as 주무시다. Its internal make-up is genuinely unclear: the final -시- is obviously the honorific infix, but the base 주무- has no surviving independent verb and no agreed source. Proposals connect it to a root meaning to close the eyes or to an old causative of 자다, but none is demonstrated. This one should be labelled uncertain.",
                "What is certain is its function: it is a fully suppletive honorific, meaning that Korean does not derive it from 자다 by adding -시- (which would give 자시다, a form that exists but means something else entirely — an old honorific of 먹다)."
              ],
              script: [
                "주 무 시 다, four blocks, all native."
              ],
              phonology: [
                "The polite form is 주무세요, the past 주무셨어요, the formal 주무십니다.",
                "The bedtime greeting to an elder is 안녕히 주무세요 (sleep peacefully), answered with 잘 자 to a junior or 안녕히 주무세요 back to an equal-or-senior. There is no honorific version of 잘 자 — the whole phrase is replaced."
              ],
              cognates: [
                "The plain verb 자다 (Unit 5) with its noun 잠, plus 낮잠 (nap) and 자장가 (lullaby).",
                "Other frozen honorifics with no living base: 계시다, 잡수시다, 여쭈다 (to ask, humble)."
              ]
            }
          },
          {
            term: "드리다",
            roman: "deurida",
            gloss: "to give (humble, to a superior)",
            pos: "verb",
            example: { text: "할머니께 선물을 드릴 거예요.", roman: "Halmeonikke seonmureul deuril geoyeyo.", gloss: "I will give my grandmother a present." },
            linguistics: {
              origin: "native Korean",
              etymology: [
                "Attested in Middle Korean as 드리다 with the sense to offer up, to present. It is generally connected to 들다 (to lift, to raise) — offering is raising something toward a superior. The connection is widely accepted but not formally proven.",
                "드리다 is <b>humble</b>, not honorific: it lowers the speaker rather than elevating the recipient, and the two mechanisms are formally distinct. Compare 주시다, which is 주다 plus the honorific -시- and is used when the <i>giver</i> is the respected party. So 선생님께 드려요 (I give to the teacher) but 선생님께서 주세요 (the teacher gives)."
              ],
              script: [
                "드 리 다. Native. The ㄹ of the presumed base 들- has been reanalysed into the second syllable."
              ],
              phonology: [
                "드리다 is a regular ㅣ-stem: 드려요, 드렸어요, 드릴 거예요. The polite request form 드리세요 stacks the honorific -시- onto the humble verb, which is not a contradiction — it means please give (to that third party), respecting both the addressee and the recipient.",
                "As an auxiliary, -아/어 드리다 is the humble counterpart of -아/어 주다 from Unit 6: 도와 드릴까요? (may I help you?), 말씀드리다 (to tell, humbly)."
              ],
              cognates: [
                "Humble verb set: 드리다 (give), 뵙다 / 뵈다 (to see someone senior), 여쭙다 (to ask someone senior), 말씀드리다 (to say), 모시다 (to accompany or serve a senior).",
                "Sino-Korean formal equivalents: 증정하다 (贈呈), 제공하다 (提供)."
              ]
            }
          },
          {
            term: "결혼하다",
            roman: "gyeolhonhada",
            gloss: "to get married",
            pos: "verb",
            example: { text: "누나가 내년에 결혼할 거예요.", roman: "Nunaga naenyeone gyeolhonhal geoyeyo.", gloss: "My older sister is going to get married next year." },
            linguistics: {
              origin: "Sino-Korean + 하다",
              etymology: [
                "結婚 = 結 (to tie, to knot; Middle Chinese *ket) + 婚 (marriage; Middle Chinese *xwon). Literally to tie a marriage.",
                "婚 is 女 (woman) plus 昏 (dusk), and the dusk element is not merely phonetic: ancient Chinese wedding ceremonies were held at nightfall, and the character preserves that custom. The same 昏 appears in 황혼 (黃昏, twilight).",
                "Note the grammar: 결혼하다 takes 와/과 or 하고, not an object. 저는 민수 씨와 결혼해요, never 민수 씨를 결혼해요."
              ],
              script: [
                "結: the silk radical 糸 plus 吉 (auspicious) as phonetic — tying, and auspiciously so.",
                "婚: 女 plus 昏, with 昏 itself being 氏 over 日, the sun sinking below."
              ],
              phonology: [
                "The 결 of 결혼 shows the Sino-Korean -t to ㄹ rule once more: 結 *ket → 결. You have now met it in 매일, 내일, 주말 and here.",
                "결혼하다 is [겨론하다] in relaxed speech, with the ㄹ carrying over and the ㅎ weakening. The future is 결혼할 거예요 [겨로날 꺼예요]."
              ],
              cognates: [
                "Korean words with 結: 결과 (結果, result), 결론 (結論, conclusion), 연결 (連結, connection), 결속 (結束).",
                "Korean words with 婚: 이혼 (離婚, divorce), 약혼 (約婚, engagement), 신혼 (新婚, newlywed), 청혼 (請婚, proposal).",
                "Cross-language: Mandarin jiéhūn 结婚, Japanese kekkon 結婚 — identical in all three."
              ]
            }
          },
          {
            term: "배우다",
            roman: "baeuda",
            gloss: "to learn",
            pos: "verb",
            example: { text: "한국어를 배울 거예요.", roman: "Hangugeoreul baeul geoyeyo.", gloss: "I am going to learn Korean." },
            linguistics: {
              origin: "native Korean",
              etymology: [
                "Middle Korean ᄇᆡ호다 (baihoda), which became 배우다 through the loss of the intervocalic ㅎ and the monophthongisation of the diphthong ㆍㅣ to ㅐ. Both changes are regular and datable, making this a clean example of a Middle Korean form you can still recognise.",
                "Korean keeps 배우다 (to learn) sharply distinct from 공부하다 (to study, Unit 5) and 가르치다 (to teach). 배우다 implies acquisition from a source — a teacher, a book, experience — while 공부하다 is the activity itself."
              ],
              script: [
                "배 (ㅂ + ㅐ) 우 (ㅇ + ㅜ) 다. The stem is 배우-, ending in ㅜ."
              ],
              phonology: [
                "Stem-final ㅜ fuses with -어요 to give ㅝ: 배워요, and the past 배웠어요. This is the same contraction as 주다 → 줘요.",
                "The future is 배울 거예요 [배울 꺼예요], with the obligatory tensification after the -(으)ㄹ ending that you will meet in the grammar section."
              ],
              cognates: [
                "Same root: 배움 (learning), 배우자 is <i>not</i> related (that is 配偶者, spouse — a false friend worth flagging).",
                "Related native verbs: 가르치다 (to teach), 익히다 (to master, from 익다 to ripen), 알다 (to know).",
                "Sino-Korean equivalents: 학습하다 (學習), 습득하다 (習得) — 習 is a pictograph of wings 羽 over 白, a fledgling practising flight."
              ]
            }
          },
          {
            term: "살다",
            roman: "salda",
            gloss: "to live, to reside",
            pos: "verb",
            example: { text: "할머니께서는 부산에 사세요.", roman: "Halmeonikkeseoneun Busane saseyo.", gloss: "My grandmother lives in Busan." },
            linguistics: {
              origin: "native Korean",
              etymology: [
                "Middle Korean 살다, stem 살-, one of the core inherited verbs. It is also, on the standard account, the source of the word for a human being: <b>사람</b> is 살- plus the nominalising suffix -암, so a person is literally a living-one. The related 삶 (life) uses the other nominaliser -ㅁ.",
                "If that etymology is right — and it is the mainstream view — Korean names humanity by the fact of being alive, in the same spirit as Latin <i>animal</i> from <i>anima</i>."
              ],
              script: [
                "살 (ㅅ + ㅏ + ㄹ) 다. The ㄹ batchim makes this a ㄹ-stem verb."
              ],
              phonology: [
                "살다 is a ㄹ-dropping verb like 놀다 and 팔다: the stem ㄹ vanishes before ㄴ, ㅂ, ㅅ and the honorific -시-. So 삽니다, 사는, and crucially <b>사세요</b> — not 살세요. The honorific of 살다 catches learners every time.",
                "The future is 살 거예요, where the ㄹ of the stem and the ㄹ of the ending merge into one."
              ],
              cognates: [
                "Same root: 사람 (person), 삶 (life), 살림 (housekeeping, household), 살리다 (to save, to bring to life), 먹고살다 (to make a living).",
                "Sino-Korean equivalents: 생활하다 (生活, to live day to day), 거주하다 (居住, to reside), 생존 (生存, survival)."
              ]
            }
          },
          {
            term: "아마",
            roman: "ama",
            gloss: "probably, perhaps",
            pos: "adverb",
            example: { text: "아마 내일 비가 올 거예요.", roman: "Ama naeil biga ol geoyeyo.", gloss: "It will probably rain tomorrow." },
            linguistics: {
              origin: "native Korean (etymology uncertain)",
              etymology: [
                "A native adverb of long standing whose internal origin is not established. The intensified form 아마도 adds the particle 도 and means much the same thing with a shade more hedging.",
                "Do not confuse it with the Japanese loanword 아마추어 (amateur) or with 어머 (an interjection of surprise)."
              ],
              script: [
                "아 마, two open syllables. Native, no hanja."
              ],
              phonology: [
                "아마 is [아마], with no sound changes to worry about.",
                "It is grammatically bound to conjecture endings: 아마 pairs naturally with -(으)ㄹ 거예요 and later with -(으)ㄹ 것 같아요 and -겠-. Saying 아마 비가 와요 sounds incomplete to a Korean ear, because 아마 sets up an expectation that the verb ending must fulfil. Adverbs that require a particular ending are common in Korean: 별로 needs a negative, 전혀 needs a negative, 아마 needs a conjecture."
              ],
              cognates: [
                "Related hedging adverbs: 아마도 (probably), 혹시 (by any chance, 或是), 어쩌면 (possibly), 아무래도 (in any case, it seems).",
                "The Sino-Korean near-parallel is 대개 (大槪, generally); 아마 itself has no hanja counterpart, as native adverbs rarely do."
              ]
            }
          },
          {
            term: "꼭",
            roman: "kkok",
            gloss: "definitely, without fail; tightly",
            pos: "adverb",
            example: { text: "내일 꼭 전화할 거예요.", roman: "Naeil kkok jeonhwahal geoyeyo.", gloss: "I will definitely call tomorrow." },
            linguistics: {
              origin: "native Korean (ideophonic)",
              etymology: [
                "꼭 belongs to Korean's enormous class of ideophones — sound-symbolic words that describe manner directly. Its physical sense is tightly or snugly (꼭 잡다, to hold tight; 꼭 맞다, to fit exactly), and the modal sense definitely, without fail is a metaphorical extension of that tightness.",
                "The tense initial ㄲ carries meaning of its own. Korean ideophones form graded sets in which the plain, aspirated and tense series encode intensity: 감감 / 캄캄 / 깜깜 (dark), 동글 / 통글 / 똥글 (round), 곡 / 꼭. The sound system is doing semantic work, which is one of the most distinctive features of Korean vocabulary and has no European parallel."
              ],
              script: [
                "One block: ㄲ (ssang-giyeok) + ㅗ + ㄱ. Written entirely in Hangul; ideophones are native by definition."
              ],
              phonology: [
                "꼭 is [꼭] with an unreleased final ㄱ. The initial ㄲ is tense — produced with a constricted glottis and no aspiration — which English speakers must consciously distinguish from ㄱ [k] and ㅋ [kʰ].",
                "Before a lenis consonant the ㄱ batchim tensifies it: 꼭 가세요 is [꼭까세요]."
              ],
              cognates: [
                "The ideophone family: 꽉 (tightly, firmly), 꼭꼭 (repeatedly and tightly), 똑 (exactly), 딱 (exactly, snugly).",
                "Near-synonyms in the modal sense: 반드시 (without fail, more formal), 절대로 (absolutely, with negatives), 정말 (really)."
              ]
            }
          }
        ]
      },
      {
        type: "grammar",
        title: "문법: the future and the architecture of respect",
        points: [
          {
            name: "Future and intention: -(으)ㄹ 거예요",
            pattern: "Vowel or ㄹ stem + ㄹ 거예요 · Consonant stem + 을 거예요",
            explanation: [
              "To say what you will do or intend to do, attach <b>-ㄹ 거예요</b> to a stem ending in a vowel (가다 → 갈 거예요, 배우다 → 배울 거예요) and <b>-을 거예요</b> to a stem ending in a consonant (먹다 → 먹을 거예요, 읽다 → 읽을 거예요). Stems already ending in ㄹ simply keep the one ㄹ: 살다 → 살 거예요, 놀다 → 놀 거예요. 하다 verbs give 할 거예요, 공부할 거예요, 여행할 거예요.",
              "The construction is not a single ending but a small sentence in disguise. -(으)ㄹ is the <b>prospective adnominal</b> ending — the modifier form meaning that is to be — 것 is the noun thing, and 이에요 is the copula. So 갈 거예요 is literally <i>it is a thing-that-is-to-be-gone</i>. 것이에요 contracts to 거예요 in speech, and you will also see the fuller 것입니다 in formal writing. Recognising the parts explains the spelling and prepares you for the whole family of -(으)ㄹ 것 patterns that comes later.",
              "There is an obligatory pronunciation rule here that the spelling never shows: the consonant after -(으)ㄹ is always <b>tensified</b>. 갈 거예요 is [갈 꺼예요], 먹을 거예요 is [머글 꺼예요], 할 거예요 is [할 꺼예요]. This tensification applies after the prospective -(으)ㄹ generally — 갈 수 있어요 is [갈 쑤 이써요], 할 데 is [할 떼] — and getting it right does more for your accent than almost anything else at this level.",
              "With a first- or second-person subject the meaning is intention: 저는 부산에 갈 거예요 (I intend to go to Busan), 뭐 할 거예요? (what are you going to do?). With a third-person subject it shifts to conjecture: 아마 비가 올 거예요 (it will probably rain), 선생님은 댁에 계실 거예요 (the teacher is probably at home). The hedging adverb 아마 pairs with this second use. Note also the contrast with the simple present, which Korean uses freely for scheduled future events: 내일 학교에 가요 is a perfectly normal way to say I am going to school tomorrow."
            ],
            examples: [
              { text: "저는 할머니 댁에 갈 거예요.", roman: "Jeoneun halmeoni daege gal geoyeyo.", gloss: "I am going to go to my grandmother's house. (vowel stem 가- takes ㄹ 거예요)" },
              { text: "방학에 책을 많이 읽을 거예요.", roman: "Banghage chaegeul mani ilgeul geoyeyo.", gloss: "I will read a lot of books during the vacation. (consonant stem 읽- takes 을 거예요)" },
              { text: "누나가 내년에 결혼할 거예요.", roman: "Nunaga naenyeone gyeolhonhal geoyeyo.", gloss: "My older sister is going to get married next year." },
              { text: "아마 내일 비가 올 거예요.", roman: "Ama naeil biga ol geoyeyo.", gloss: "It will probably rain tomorrow. (third person, conjecture)" },
              { text: "부산에서 이 년 동안 살 거예요.", roman: "Busaneseo i nyeon dongan sal geoyeyo.", gloss: "I will live in Busan for two years. (ㄹ stem 살- keeps just one ㄹ)" }
            ]
          },
          {
            name: "Subject honorification: -(으)시- and -(으)세요",
            pattern: "Vowel stem + 세요 · Consonant stem + 으세요 · past: -(으)셨어요 · formal: -(으)십니다",
            explanation: [
              "Korean marks respect for the <b>subject of the sentence</b> with the infix <b>-(으)시-</b>, inserted between the stem and the ending. In the polite 해요체 it surfaces as -(으)세요: 가다 → 가세요, 읽다 → 읽으세요, 하다 → 하세요, 좋다 → 좋으세요. The past is -(으)셨어요 (가셨어요), the future -(으)실 거예요 (가실 거예요), and the formal style -(으)십니다 (가십니다).",
              "Two mechanical points. First, ㄹ-stem verbs drop their ㄹ before -시-: 살다 → <b>사세요</b>, 놀다 → 노세요, 만들다 → 만드세요, 팔다 → 파세요. Second, -(으)세요 is ambiguous between a <b>statement</b> and a <b>request</b>, resolved by intonation and context: 선생님이 신문을 읽으세요 means the teacher reads the newspaper, while 신문을 읽으세요 said to someone means please read the newspaper. That is why 오세요, 주세요, 앉으세요 and 안녕히 가세요 all felt like fixed phrases earlier in the course — they were honorific imperatives all along.",
              "A set of high-frequency verbs is <b>suppletive</b>: instead of adding -시-, Korean swaps the whole word. 있다 → 계시다 (of a person's presence), 먹다/마시다 → 드시다 or 잡수시다, 자다 → 주무시다, 말하다 → 말씀하시다, 죽다 → 돌아가시다 (literally to return, a euphemism), 아프다 → 편찮으시다, 데리고 가다 → 모시고 가다. Learn these as vocabulary, not as rules.",
              "Nouns get honorific replacements too: 집 → 댁, 밥 → 진지, 나이 → 연세, 이름 → 성함, 말 → 말씀, 생일 → 생신, 사람 → 분. And the suffix <b>-님</b> elevates titles: 선생님, 사장님, 부모님, 손님. A fully honorific sentence stacks these: 할머니께서 진지를 드세요 uses an honorific particle, an honorific noun and a suppletive honorific verb at once.",
              "One subtlety worth knowing now. Korean also has <b>indirect honorification</b>, applied when the subject is something belonging to a respected person: 선생님은 시간이 있으세요 (the teacher has time) puts -시- on 있다 even though the grammatical subject is 시간. But you must not use 계시다 here — that is reserved for a person's own presence. 선생님이 계세요 and 선생님은 시간이 있으세요 are both correct and use different verbs for a reason."
            ],
            examples: [
              { text: "선생님께서 교실에 계세요.", roman: "Seonsaengnimkkeseo gyosire gyeseyo.", gloss: "The teacher is in the classroom. (suppletive 계시다)" },
              { text: "할머니께서는 부산에 사세요.", roman: "Halmeonikkeseoneun Busane saseyo.", gloss: "My grandmother lives in Busan. (ㄹ-stem 살다 drops its ㄹ)" },
              { text: "여기 앉으세요.", roman: "Yeogi anjeuseyo.", gloss: "Please sit here. (consonant stem, request reading)" },
              { text: "아버지께서 신문을 읽으셨어요.", roman: "Abeojikkeseo sinmuneul ilgeusyeosseoyo.", gloss: "My father read the newspaper. (honorific past)" },
              { text: "할머니께서 진지를 드세요.", roman: "Halmeonikkeseo jinjireul deuseyo.", gloss: "My grandmother is eating. (honorific particle + honorific noun + suppletive verb)" }
            ]
          },
          {
            name: "Honorific particles 께서 and 께, and humble forms",
            pattern: "Respected subject + 께서 (replaces 이/가) · Respected recipient + 께 (replaces 에게/한테) · humble verbs for one's own actions",
            explanation: [
              "When the subject deserves respect, the subject particle 이/가 is replaced by <b>께서</b>: 선생님께서 오세요, 할머니께서 계세요. To add a topic reading, 께서 combines with 는 to give 께서는: 할머니께서는 부산에 사세요. In everyday conversation 께서 is often dropped in favour of plain 이/가 with the verb still carrying -시-, but you should recognise 께서 immediately and use it when writing or speaking to or about anyone genuinely senior.",
              "The dative particle 에게 / 한테 (to a person) becomes <b>께</b>: 선생님께 드렸어요, 부모님께 전화했어요. Note that the noun 께 is what makes 감사합니다 into the fuller 선생님께 감사합니다, and it is also the source of the greeting-card formula 어머님께.",
              "The third dimension of the system is <b>humbling yourself</b>. This is not the same as honouring the other person; it is a separate mechanism with its own vocabulary. The humble words are 저 (I, versus plain 나), 제 (my, versus 내), 저희 (we, our — used even for one's own company or country), 드리다 (to give), 뵙다 / 뵈다 (to see, to meet someone senior), 여쭙다 (to ask), 말씀드리다 (to tell), 모시다 (to accompany a senior).",
              "Putting all three dimensions together in one sentence: 제가 선생님께 말씀드릴 거예요 (I will tell the teacher). 제 humbles the speaker, 께 honours the recipient, 말씀드리다 is a humble verb, and the -요 ending shows politeness toward whoever is listening. Four separate pieces of social information, encoded grammatically, in six words. No European language does this.",
              "A caution: never apply honorifics to yourself. 저는 집에 계세요 and 제가 드세요 are errors that Korean ears find jarring, in the way that <i>I graciously granted myself permission</i> would be in English. Honorifics point outward only."
            ],
            examples: [
              { text: "할머니께서 부산에 계세요.", roman: "Halmeonikkeseo Busane gyeseyo.", gloss: "My grandmother is in Busan. (께서 replaces 이/가)" },
              { text: "부모님께 전화를 드렸어요.", roman: "Bumonimkke jeonhwareul deuryeosseoyo.", gloss: "I phoned my parents. (께 replaces 에게, 드리다 humbles the speaker)" },
              { text: "제가 선생님께 말씀드릴 거예요.", roman: "Jega seonsaengnimkke malsseumdeuril geoyeyo.", gloss: "I will tell the teacher. (humble subject, honorific recipient, humble verb)" },
              { text: "내일 선생님을 뵐 거예요.", roman: "Naeil seonsaengnimeul boel geoyeyo.", gloss: "I will see the teacher tomorrow. (humble 뵈다 instead of 보다)" },
              { text: "할머니를 모시고 병원에 갔어요.", roman: "Halmeonireul mosigo byeongwone gasseoyo.", gloss: "I took my grandmother to the hospital. (humble 모시다 instead of 데리고 가다)" }
            ]
          },
          {
            name: "Speech levels: 합니다체, 해요체, 반말",
            pattern: "-(스)ㅂ니다 formal · -아/어요 polite · -아/어 plain (반말)",
            explanation: [
              "Everything above concerns respect for the people in your sentence. <b>Speech levels</b> are a separate axis: respect for the person you are talking <i>to</i>, encoded in the sentence-final ending. Korean traditionally counts six levels; three matter for a beginner.",
              "<b>합니다체</b> (the formal polite style) uses -ㅂ니다 after a vowel and -습니다 after a consonant: 갑니다, 먹습니다, 합니다. Questions are -ㅂ니까 / -습니까: 가십니까?. This is the register of news broadcasts, the military, presentations, customer service and first meetings. You already know 감사합니다, 안녕하십니까 and 죄송합니다 from it. Its imperative is -(으)십시오 (안녕히 가십시오) and its suggestion form is -(으)ㅂ시다 (같이 갑시다).",
              "<b>해요체</b> (the polite informal style) is the -아/어요 you have used throughout this course. It is polite but warm, and it dominates ordinary adult conversation, including with strangers, shopkeepers and teachers. Most speakers mix 해요체 and 합니다체 within a single conversation, sliding toward 합니다체 for formality and back for warmth.",
              "<b>반말</b> (plain style, 해체) is simply the 해요체 with the 요 removed: 가, 먹어, 뭐 해?. It is used with close friends of the same age, by adults to children, and within families downward. Using it upward, or with someone you have just met, is a real breach — the Korean phrase for negotiating this is 말 놓으세요 (please drop the formality), and the offer conventionally comes from the senior person. As a learner, stay in 해요체 with everyone until someone explicitly invites you to switch. Nobody will ever be offended that you were too polite.",
              "A fourth level worth recognising in writing is <b>한다체</b> (the plain declarative -ㄴ다 / -는다), used for newspapers, academic prose, diaries and novels — it addresses no one in particular. 학생이 학교에 간다 is not rude; it is simply written Korean."
            ],
            examples: [
              { text: "저는 한국어를 배웁니다.", roman: "Jeoneun hangugeoreul baeumnida.", gloss: "I am learning Korean. (합니다체, formal)" },
              { text: "저는 한국어를 배워요.", roman: "Jeoneun hangugeoreul baewoyo.", gloss: "I am learning Korean. (해요체, polite)" },
              { text: "나는 한국어를 배워.", roman: "Naneun hangugeoreul baewo.", gloss: "I am learning Korean. (반말, to a close friend — note 나 replaces 저)" },
              { text: "안녕히 가십시오.", roman: "Annyeonghi gasipsio.", gloss: "Goodbye. (formal imperative, said to a departing customer)" },
              { text: "같이 점심 먹읍시다.", roman: "Gachi jeomsim meogeupsida.", gloss: "Let us have lunch together. (합니다체 suggestion form)" }
            ]
          }
        ]
      },
      {
        type: "notes",
        title: "Culture note: age, hierarchy and the grammar of respect",
        body: [
          "Korean honorifics are not politeness in the English sense of choosing a nicer word. They are grammatical agreement with social structure, and the structure is real: relative age, institutional rank and family position determine which forms you must use, and there is no neutral option. Every finite Korean sentence commits you to a stance toward your listener. This is why Koreans meeting for the first time so often establish age within the first minutes — 몇 년생이세요? (what year were you born?) is not nosiness but grammar-gathering. Until age is settled, neither party can speak comfortably.",
          "Korean age itself used to complicate this. Under the traditional 세는 나이 system, everyone was one at birth and gained a year at each lunar or solar New Year, so a December baby was two years old in January. In June 2023 Korea legally standardised on international age for all official purposes, and the traditional count is fading fast — but you will still hear people ask 한국 나이로 몇 살이에요? and older speakers still reckon by the old system in daily life.",
          "Address terms follow the same logic. Koreans rarely use the second-person pronoun 당신 — it is confrontational in argument and intimate between spouses, and almost never a neutral you. Instead you address people by role: 선생님, 사장님, 과장님 for rank; 형, 오빠, 누나, 언니 for a slightly older friend or sibling (chosen by the speaker's own gender); 이름 + 씨 for a peer. Simply repeating a person's title where English would say <i>you</i> is normal and correct: 선생님은 뭐 하세요?",
          "Two things soften the picture. First, the register is negotiable — 말 놓으세요 or 편하게 하세요 invites both sides to relax, and once offered it is normally accepted. Second, Korean politeness runs on warmth as much as deference: over-formal speech with people who have signalled closeness reads as cold or distancing. The learner's mistake to fear is not excessive formality but inconsistency — switching mid-conversation for no reason. Pick 해요체, hold it, and let your Korean friends tell you when to change.",
          "Finally, note how honorifics reach past life. 돌아가시다 (to have returned) is the only acceptable verb for the death of someone respected; 죽다 said of a person's grandparent is shocking. And the honorific inflation of Korean service work has gone further than the grammar strictly allows — 커피 나오셨습니다 (the coffee has honourably come out) is a real and much-mocked feature of café Korean, honouring the beverage instead of the customer. The National Institute of Korean Language has formally discouraged it, and it continues undiminished."
        ]
      },
      {
        type: "practice",
        title: "연습: plans and honorifics",
        exercises: [
          {
            type: "mcq",
            prompt: "Which is the correct future form of 먹다?",
            promptAudio: "먹을 거예요",
            choices: ["먹ㄹ 거예요", "먹을 거예요", "먹 거예요", "먹으 거예요"],
            answer: 1,
            explain: "먹- ends in a consonant, so the ending is -을 거예요; vowel stems take -ㄹ 거예요 instead (가다 → 갈 거예요). Note the obligatory tensification that the spelling never shows: 먹을 거예요 is [머글 꺼예요] and 갈 거예요 is [갈 꺼예요]."
          },
          {
            type: "mcq",
            prompt: "Choose the honorific of 살다 (to live).",
            promptAudio: "사세요",
            choices: ["살세요", "사세요", "살으세요", "살시요"],
            answer: 1,
            explain: "살다 is a ㄹ-stem verb, and ㄹ drops before the honorific -시-. The same happens with 놀다 → 노세요, 만들다 → 만드세요, 팔다 → 파세요."
          },
          {
            type: "mcq",
            prompt: "Which sentence is correct?",
            promptAudio: "할머니께서 진지를 드세요",
            choices: [
              "할머니가 밥을 먹으세요.",
              "할머니께서 진지를 드세요.",
              "할머니께서 진지를 먹으세요.",
              "저는 진지를 드세요."
            ],
            answer: 1,
            explain: "A fully honorific sentence uses the honorific particle 께서, the honorific noun 진지, and the suppletive verb 드시다. The last option is wrong for a different reason: you must never apply honorifics to yourself."
          },
          {
            type: "mcq",
            prompt: "Which particle replaces 에게 when the recipient deserves respect?",
            promptAudio: "선생님께",
            choices: ["께서", "께", "한테서", "에서"],
            answer: 1,
            explain: "께 is the honorific dative (선생님께 드렸어요). 께서 is the honorific subject particle, which does a different job."
          },
          {
            type: "typing",
            prompt: "Say 'I am going to study.' using 공부하다 and the future ending.",
            answer: ["공부할 거예요", "공부할 거예요.", "저는 공부할 거예요", "저는 공부할 거예요."],
            hint: "하다 verbs give 할 거예요."
          },
          {
            type: "typing",
            prompt: "Put 오다 into the honorific polite form (a teacher is the subject).",
            answer: ["오세요", "오세요."],
            hint: "Vowel stem, so no 으 is inserted."
          },
          {
            type: "typing",
            prompt: "Write in Korean: 'My grandmother is in Busan.' Use the honorific particle and the honorific verb.",
            answer: ["할머니께서 부산에 계세요", "할머니께서 부산에 계세요.", "할머니께서는 부산에 계세요", "할머니께서는 부산에 계세요."],
            hint: "께서 for the subject; 있다 becomes 계시다 for a person."
          },
          {
            type: "listening",
            prompt: "What did you hear?",
            audioText: "방학에 뭐 할 거예요?",
            choices: [
              "What are you going to do during the vacation?",
              "What did you do during the vacation?",
              "Where are you going during the vacation?",
              "Do you have plans this weekend?"
            ],
            answer: 0,
            explain: "방학에 (during the vacation) + 뭐 (what) + 할 거예요 (are going to do). The past would be 뭐 했어요?."
          },
          {
            type: "listening",
            prompt: "Which verb form did you hear?",
            audioText: "주무세요",
            choices: ["자세요", "주무세요", "주세요", "쉬세요"],
            answer: 1,
            explain: "주무시다 is the suppletive honorific of 자다. Korean replaces the whole verb rather than adding -시- to 자다."
          },
          {
            type: "match",
            prompt: "Match each plain word with its honorific equivalent.",
            pairs: [
              { a: "있다", b: "계시다" },
              { a: "먹다", b: "드시다" },
              { a: "자다", b: "주무시다" },
              { a: "집", b: "댁" },
              { a: "나이", b: "연세" },
              { a: "이름", b: "성함" }
            ]
          },
          {
            type: "order",
            prompt: "Arrange into a sentence: 'I am going to go to my grandmother's house.'",
            tokens: ["저는", "할머니", "댁에", "갈", "거예요"],
            answer: "저는 할머니 댁에 갈 거예요"
          },
          {
            type: "order",
            prompt: "Arrange into a sentence: 'I will give my parents a present.'",
            tokens: ["부모님께", "선물을", "드릴", "거예요"],
            answer: "부모님께 선물을 드릴 거예요"
          }
        ]
      }
    ]
  });
})();
