window.CURRICULUM = window.CURRICULUM || {};
(function () {
  const C = window.CURRICULUM;
  C.korean = C.korean || { units: [] };

  C.korean.units.push({
    id: "ko-01",
    order: 1,
    title: "Greetings & Introductions",
    titleNative: "인사와 소개",
    subtitle: "Say hello, give your name and nationality, and ask someone else for theirs — with 이에요/예요, the topic particle 은/는, and the humble pronoun 저.",
    textbookBasis: [
      "Integrated Korean: Beginning 1 (KLEAR), 3rd ed., Lesson 1 — 인사 (Greetings)",
      "Sogang Korean 1A, Unit 1 — 안녕하세요? / 저는 …이에요",
      "Yonsei Korean 1, Lesson 1 — 인사 및 자기소개",
      "Talk To Me In Korean Level 1, Lessons 1, 3, 5 (안녕하세요, 네/아니요, 이에요/예요)"
    ],
    overview: [
      "Almost every Korean textbook opens the same way, and for a good reason: <b>안녕하세요?</b> plus a name plus <b>이에요/예요</b> is a complete, socially correct introduction, and it uses the polite 해요체 speech style you will keep using for the rest of this course. In this unit you learn to introduce yourself, ask where someone is from, state your job or student status, and close a conversation properly.",
      "Two grammatical things carry the whole unit. The first is the <b>copula</b> 이다, which in polite speech surfaces as 이에요 after a consonant and 예요 after a vowel — the Korean equivalent of <i>am / is / are</i>, and unusually for a verb it attaches directly to the noun with no space. The second is the <b>topic particle</b> 은/는, which marks what the sentence is about and quietly does a great deal of contrastive work that English handles with stress and word order.",
      "You also meet the social machinery of Korean address: the humble first-person pronoun <b>저</b>, the polite name suffix <b>씨</b>, why Koreans use each other's names where English would use <i>you</i>, and why the pronoun 당신 that dictionaries offer for <i>you</i> is one you should almost never say. Getting these right matters more than getting the grammar right — a perfectly formed sentence with the wrong address term still lands badly."
    ],
    sections: [
      {
        type: "dialogue",
        title: "Dialogue: 처음 뵙겠습니다 — First day of Korean class",
        context: "Sarah Miller, an American exchange student, arrives early for her first Korean class at a university in Seoul and starts talking to the person sitting next to her, Kim Minsu.",
        lines: [
          { speaker: "민수", text: "안녕하세요? 저는 김민수예요.", roman: "annyeonghaseyo? jeoneun gimminsuyeyo.", gloss: "Hello. I am Kim Minsu." },
          { speaker: "사라", text: "안녕하세요? 저는 사라예요. 만나서 반갑습니다.", roman: "annyeonghaseyo? jeoneun sarayeyo. mannaseo bangapseumnida.", gloss: "Hello. I am Sarah. Pleased to meet you." },
          { speaker: "민수", text: "반갑습니다. 사라 씨는 어느 나라 사람이에요?", roman: "bangapseumnida. sara ssineun eoneu nara saramieyo?", gloss: "Pleased to meet you too. Sarah, what country are you from?" },
          { speaker: "사라", text: "저는 미국 사람이에요. 민수 씨는 한국 사람이에요?", roman: "jeoneun miguk saramieyo. minsu ssineun hanguk saramieyo?", gloss: "I am American. Minsu, are you Korean?" },
          { speaker: "민수", text: "네, 저는 한국 사람이에요. 사라 씨는 학생이에요?", roman: "ne, jeoneun hanguk saramieyo. sara ssineun haksaengieyo?", gloss: "Yes, I am Korean. Sarah, are you a student?" },
          { speaker: "사라", text: "네, 학생이에요. 민수 씨도 학생이에요?", roman: "ne, haksaengieyo. minsu ssido haksaengieyo?", gloss: "Yes, I am a student. Minsu, are you a student too?" },
          { speaker: "민수", text: "아니요, 저는 학생이 아니에요. 회사원이에요.", roman: "aniyo, jeoneun haksaengi anieyo. hoesawonieyo.", gloss: "No, I am not a student. I am an office worker." },
          { speaker: "사라", text: "아, 그래요? 그럼 민수 씨는 제 친구예요.", roman: "a, geuraeyo? geureom minsu ssineun je chinguyeyo.", gloss: "Oh, really? Then you are my friend, Minsu." },
          { speaker: "민수", text: "네, 좋아요. 그럼 또 봐요. 안녕히 가세요.", roman: "ne, joayo. geureom tto bwayo. annyeonghi gaseyo.", gloss: "Yes, sounds good. See you again, then. Goodbye." },
          { speaker: "사라", text: "안녕히 가세요. 감사합니다!", roman: "annyeonghi gaseyo. gamsahamnida!", gloss: "Goodbye. Thank you!" }
        ]
      },
      {
        type: "vocab",
        title: "Vocabulary: greetings, people and countries",
        items: [
          {
            term: "안녕하세요",
            roman: "annyeonghaseyo",
            gloss: "hello; good morning/afternoon/evening",
            pos: "greeting",
            example: { text: "안녕하세요? 저는 사라예요.", roman: "annyeonghaseyo? jeoneun sarayeyo.", gloss: "Hello. I am Sarah." },
            linguistics: {
              origin: "Sino-Korean root + native verb and honorific endings",
              etymology: [
                "A whole sentence compressed into a greeting: 안녕 + 하- + -시- + -어요, literally <i>are you at peace?</i> The root <b>안녕</b> is Sino-Korean <b>安寧</b>: 安 <i>an</i> (peace, safety — a roof 宀 over a woman 女) and 寧 <i>nyeong</i> (tranquillity, repose). The compound 安寧 is attested in Classical Chinese for the settled peace of a state or a household.",
                "The greeting is therefore not <i>hello</i> but an inquiry after someone's wellbeing, of the same family as 문안 인사 (問安, the formal morning greeting a child owed a parent). Its literal force explains why the more formal variant 안녕하십니까? is standard in broadcasting and the military, and why the plain form 안녕 works as a casual <i>hi</i> or <i>bye</i> between friends."
              ],
              script: [
                "Written 안녕하세요 with an optional question mark; Koreans very often write 안녕하세요? even though it functions as a statement, because the underlying grammar really is a question."
              ],
              phonology: [
                "Pronounced [안녕하세요] with liaison across 안-녕; there is no nasalisation to worry about here, but the more formal 안녕하십니까 becomes [안녕하심니까] by 비음화. Fast casual speech reduces the whole thing to [안녕하세요] → [안녕세요] or even [녕하세요] on the phone."
              ],
              cognates: [
                "Same 安: 안전 安全 (safety), 안심 安心 (peace of mind), 편안 便安 (comfort). Same 寧: 정녕 (certainly). Mandarin cognate ānníng 安宁; Japanese annei 安寧. Japanese uses a different phrase for hello, but the Chinese-character compound is shared vocabulary across the region."
              ]
            }
          },
          {
            term: "저",
            roman: "jeo",
            gloss: "I, me (humble)",
            pos: "pronoun",
            example: { text: "저는 학생이에요.", roman: "jeoneun haksaengieyo.", gloss: "I am a student." },
            linguistics: {
              origin: "native Korean",
              etymology: [
                "Korean has two words for <i>I</i>: plain <b>나</b> and humble <b>저</b>. 저 is the one you use with strangers, elders, teachers, customers and anyone you address in 해요체 or 합쇼체; 나 is for close friends, younger people and inner speech.",
                "Historically 저 is the same word as the reflexive/third-person 저 (<i>oneself, that person</i>), which is still visible in 저희 (<i>we</i>, humble) and in older texts where 저 refers to a third party. The self-lowering use is generally understood to have developed out of that reflexive by the standard East Asian strategy of referring to oneself obliquely rather than directly. The plain 나, by contrast, goes back to Old Korean and is cognate with the 나 of 내가."
              ],
              script: [
                "One block: ㅈ + ㅓ. Do not confuse it with the demonstrative 저 (<i>that over there</i>) taught in unit 2 — they are homographs with quite different jobs, distinguished by what follows."
              ],
              phonology: [
                "[tɕʌ]. With the subject particle 가 it contracts to <b>제가</b>, not 저가; with the possessive 의 it contracts to <b>제</b> (제 이름 = my name, heard as [제 이름]). The parallel plain forms are 내가 and 내."
              ],
              cognates: [
                "저희 (humble <i>we</i>, with the plural suffix -희 also seen in 너희), 제 (my), 제가 (I, as subject). Plain-style counterparts: 나, 내, 내가, 우리."
              ]
            }
          },
          {
            term: "이름",
            roman: "ireum",
            gloss: "name",
            pos: "noun",
            example: { text: "이름이 뭐예요?", roman: "ireumi mwoyeyo?", gloss: "What is your name?" },
            linguistics: {
              origin: "native Korean",
              etymology: [
                "Middle Korean 일훔 / 일홈, appearing in fifteenth-century texts such as the 석보상절. The standard analysis derives it from the verb root of 이르다 <i>to say, to call</i> (Middle Korean 니르다) plus a nominalising suffix — so a name is <i>what one is called</i>. The intermediate ㅎ dropped out and the vowel simplified to give modern 이름.",
                "The Sino-Korean equivalent 성함 (姓銜) is the honorific word used when asking an older person or a customer: 성함이 어떻게 되세요? is far more polite than 이름이 뭐예요?"
              ],
              script: [
                "Two blocks; the first is the empty-onset ㅇ + ㅣ, so beginners sometimes mis-hear the word as starting with a consonant. It does not."
              ],
              phonology: [
                "[이름]. With the subject particle: 이름이 → [이르미] by liaison. This is one of the first liaison examples every textbook uses."
              ],
              cognates: [
                "이르다 (to say), 일컫다 (to call, to term). Sino-Korean alternatives: 성함 姓銜 (honorific name), 성명 姓名 (full name, on forms), 별명 別名 (nickname)."
              ]
            }
          },
          {
            term: "뭐",
            roman: "mwo",
            gloss: "what",
            pos: "interrogative pronoun",
            example: { text: "이게 뭐예요?", roman: "ige mwoyeyo?", gloss: "What is this?" },
            linguistics: {
              origin: "native Korean (contraction)",
              etymology: [
                "A contraction of <b>무엇</b>, which itself goes back to Middle Korean 므섯 / 므슥. The chain is 무엇 → 무어 → 뭐: the final ㅅ weakened and dropped between vowels, then the two syllables fused. 무엇 survives in writing and formal speech; 뭐 dominates conversation.",
                "The initial 무- belongs to a family of native interrogatives built on m- and eo-: 무슨 (what kind of), 무엇 (what), 몇 (how many), alongside 어디 (where), 언제 (when), 어떻게 (how), 어느 (which)."
              ],
              script: [
                "One block, ㅁ + ㅝ. In casual typing you will also see 머, which reflects a very common colloquial pronunciation."
              ],
              phonology: [
                "[mwʌ], often flattened to [mʌ] in speech, which is why the spelling 머 appears online. With the copula it fuses: 뭐예요 [뭐에요]. Korean question words do not require a rising intonation — 뭐예요? is usually said with a falling contour."
              ],
              cognates: [
                "무엇, 무슨, 뭘 (뭐 + 를), 뭐가 (뭐 + 가), 몇. Compare the parallel Japanese <i>nani</i> series — unrelated in form, but Korean and Japanese both keep the question word in situ rather than fronting it, unlike English."
              ]
            }
          },
          {
            term: "씨",
            roman: "-ssi",
            gloss: "Mr./Ms./Mx. — polite suffix attached to a person's name",
            pos: "suffix",
            example: { text: "민수 씨는 학생이에요?", roman: "minsu ssineun haksaengieyo?", gloss: "Minsu, are you a student?" },
            linguistics: {
              origin: "Sino-Korean",
              etymology: [
                "From <b>氏</b> (<i>si</i>), a Chinese character meaning <i>clan, lineage, family name</i>; in Classical Chinese it followed a surname to mean <i>of the X clan</i>. Korean grammaticalised it into a general polite address suffix.",
                "Usage rules matter more than the etymology. 씨 attaches to the given name (민수 씨) or the full name (김민수 씨), and it is polite but <i>horizontal</i> — you use it with peers, colleagues and strangers of roughly equal standing. Attaching it to a bare surname (김 씨) sounds cold or even dismissive, and using it to a clear superior is a mistake: for a teacher you say 선생님, for a department head 부장님, for a customer 고객님."
              ],
              script: [
                "Written as a separate word after a space in standard orthography: 민수 씨, not 민수씨 — though the space is frequently dropped in casual typing."
              ],
              phonology: [
                "[ɕ͈i], with the tense ㅆ and palatalisation before ㅣ. The tenseness is audible and distinguishes it from 시 (hour)."
              ],
              cognates: [
                "Same character 氏 in 성씨 姓氏 (surname). Compare Japanese -shi 氏 (formal written address) and Mandarin shì. The native Korean honorific suffix <b>-님</b> (선생님, 사장님) is a separate and higher-ranking device."
              ]
            }
          },
          {
            term: "사람",
            roman: "saram",
            gloss: "person; people",
            pos: "noun",
            example: { text: "저는 미국 사람이에요.", roman: "jeoneun miguk saramieyo.", gloss: "I am American." },
            linguistics: {
              origin: "native Korean",
              etymology: [
                "Transparently derived from the verb <b>살다</b> <i>to live</i> plus the nominalising suffix -암/-음: a person is <i>a living one</i>. Middle Korean 사ᄅᆞᆷ shows the older vowel ㆍ in the second syllable, which later became ㅏ.",
                "The same derivation gives <b>삶</b> (<i>life</i>) from 살- + -ㅁ, so 사람 and 삶 are morphological siblings. This kind of verb-to-noun derivation is one of the most productive native word-building patterns in Korean."
              ],
              script: [
                "Two blocks, the second ending in the batchim ㅁ."
              ],
              phonology: [
                "[사람]. Attached to a country name it forms nationality phrases with no particle: 한국 사람, 미국 사람, 프랑스 사람. In fast speech the phrase 한국 사람 is often heard as [한국싸람] with tensification across the boundary."
              ],
              cognates: [
                "살다 (to live), 삶 (life), 사랑 (love — a folk etymology links it to 사람, but scholars generally derive 사랑 from Sino-Korean 思量 <i>to think of</i>, so treat the connection as unproven). The Sino-Korean counterpart is 인 人, as in 한국인, 미국인, 외국인."
              ]
            }
          },
          {
            term: "나라",
            roman: "nara",
            gloss: "country",
            pos: "noun",
            example: { text: "어느 나라 사람이에요?", roman: "eoneu nara saramieyo?", gloss: "What country are you from?" },
            linguistics: {
              origin: "native Korean",
              etymology: [
                "Middle Korean 나라ㅎ, a member of the ㅎ-final noun class: a hidden ㅎ surfaced before particles. The most famous sentence in Korean literature preserves it — the 훈민정음 preface begins 나랏말ᄊᆞ미 듕귁에 달아 (<i>the language of our country differs from that of China</i>), where 나랏 shows the possessive linking ㅅ.",
                "The ㅎ has since been lost, but the word is otherwise unchanged after six centuries. Its Sino-Korean rival 국 (國) never displaced it; instead the two divide labour, with 나라 as the everyday word and 국 as the bound compound element."
              ],
              script: [
                "Two open syllables, no batchim — one of the easiest Korean words to read aloud."
              ],
              phonology: [
                "[나라], with the intervocalic ㄹ as a tap [ɾ]. The old ㅎ is still visible in the compound 나라님 and in the fossil 나랏일 [나란닐]."
              ],
              cognates: [
                "Sino-Korean 국 國: 한국, 미국, 외국 (foreign country), 국민 (citizen), 국어 (national language). The native word survives in 우리나라 (<i>our country</i>, written as one word and used by Koreans to mean Korea specifically)."
              ]
            }
          },
          {
            term: "한국",
            roman: "Hanguk",
            gloss: "Korea (South Korea)",
            pos: "proper noun",
            example: { text: "저는 한국 사람이에요.", roman: "jeoneun hanguk saramieyo.", gloss: "I am Korean." },
            linguistics: {
              origin: "Sino-Korean",
              etymology: [
                "<b>韓國</b>: 韓 <i>han</i> plus 國 <i>guk</i> (country). 韓 is an ancient ethnonym, not a descriptive word — it names the <b>삼한</b> (三韓), the three Han confederacies of Mahan, Jinhan and Byeonhan that occupied the southern Korean peninsula in the first centuries CE.",
                "The modern name comes from 1897, when King Gojong proclaimed the 대한제국 (大韓帝國, Great Han Empire); the Republic of Korea inherited it as 대한민국 (大韓民國, <i>Great Han People's Country</i>). North Korea instead uses 조선 (朝鮮), the name of the earlier dynasty, so the peninsula is 한반도 in Seoul and 조선반도 in Pyongyang, and the language is 한국어 in the South but 조선어 in the North. The English name <i>Korea</i> comes from a third dynasty entirely, 고려 (高麗, Goryeo), by way of Arab and European traders."
              ],
              script: [
                "The 한 of 한국 (韓) is a different morpheme from the 한 of 한글, which is native Korean meaning <i>great/one</i> and is not written with any hanja."
              ],
              phonology: [
                "[한국]. Before a nasal the final ㄱ nasalises: 한국말 → [한궁말]. Before a vowel it liaises: 한국어 → [한구거]."
              ],
              cognates: [
                "한국어, 한국말, 한복 (韓服, Korean dress), 한식 (韓食, Korean food), 대한민국. Mandarin Hánguó 韩国; Japanese Kankoku 韓国."
              ]
            }
          },
          {
            term: "미국",
            roman: "Miguk",
            gloss: "the United States",
            pos: "proper noun",
            example: { text: "사라 씨는 미국 사람이에요.", roman: "sara ssineun miguk saramieyo.", gloss: "Sarah is American." },
            linguistics: {
              origin: "Sino-Korean",
              etymology: [
                "<b>美國</b>, literally <i>beautiful country</i> — but the flattery is accidental. The name is a clipping of the nineteenth-century Chinese transcription of <i>America</i>, 亞美利加 (<i>a-mi-ri-ga</i>), from which the second syllable 美 was taken as the abbreviation, then combined with 國.",
                "Different countries clipped different syllables of the same transcription. Chinese and Korean took 美 (Měiguó / 미국); Japan took 米 from its own transcription 亜米利加, giving 米国 (<i>beikoku</i>, literally <i>rice country</i>). So the same word yields <i>beautiful country</i> in Korean and <i>rice country</i> in Japanese, with neither meaning intended."
              ],
              script: [
                "Country names of this Sino-Korean type all end in 국: 중국 (中國, China), 영국 (英國, England — again a clipping, of 英吉利), 태국 (泰國, Thailand). Countries named later are transcribed phonetically instead: 프랑스, 캐나다, 브라질."
              ],
              phonology: [
                "[미국]. 미국 사람 is often heard as [미국싸람]; 미국에 liaises to [미구게]."
              ],
              cognates: [
                "Same 美: 미인 美人 (a beauty), 미술 美術 (fine art), 미용실 (hair salon). Mandarin Měiguó 美国; Japanese Beikoku 米国 / Amerika アメリカ."
              ]
            }
          },
          {
            term: "학생",
            roman: "haksaeng",
            gloss: "student",
            pos: "noun",
            example: { text: "저는 학생이에요.", roman: "jeoneun haksaengieyo.", gloss: "I am a student." },
            linguistics: {
              origin: "Sino-Korean",
              etymology: [
                "<b>學生</b>: 學 <i>hak</i> (to learn, to study; the graph shows two hands and a child under a roof, an image of instruction) plus 生 <i>saeng</i> (to be born, to live; by extension <i>one who does something</i>). Middle Chinese 學 was roughly *haewk and 生 *sraeng, which is why the Korean readings have a ㄱ coda and an -aeng rhyme.",
                "The compound 學生 is old and pan-East-Asian, though the modern school senses were largely re-fixed in the nineteenth century as Japan built its Western-style education vocabulary and Korea and China adopted the results wholesale."
              ],
              script: [
                "Both syllables have a batchim, which makes this a good tensification example."
              ],
              phonology: [
                "Pronounced [학쌩], not [학생]: 경음화 tenses the ㅅ after the stop coda ㄱ. Writing it as heard would be wrong — Korean spelling keeps morphemes constant."
              ],
              cognates: [
                "Same 學: 학교 (school), 학년 (school year), 대학 (university), 유학 (study abroad), 수학 (mathematics). Same 生: 선생 (teacher), 생일 (birthday), 인생 (life). Mandarin xuésheng 学生; Japanese gakusei 学生."
              ]
            }
          },
          {
            term: "선생님",
            roman: "seonsaengnim",
            gloss: "teacher (also used as a respectful term of address)",
            pos: "noun",
            example: { text: "김 선생님은 한국 사람이에요.", roman: "gim seonsaengnimeun hanguk saramieyo.", gloss: "Teacher Kim is Korean." },
            linguistics: {
              origin: "Sino-Korean root + native honorific suffix",
              etymology: [
                "<b>先生</b> (先 <i>before, earlier</i> + 生 <i>born</i>) — literally <i>one born before you</i>, a Confucian way of naming the person who has gone ahead of you in learning. To it Korean adds the native honorific suffix <b>-님</b>, from Middle Korean 님 <i>lord, master</i>, still usable as a standalone poetic word for a beloved.",
                "The same characters mean different things across the region: Japanese <i>sensei</i> is a teacher or doctor, but Mandarin <i>xiānsheng</i> has drifted to mean simply <i>Mr.</i> Korean keeps the teaching sense and treats 선생님 as the default respectful address for any educated adult whose title you do not know."
              ],
              script: [
                "Three blocks. Dropping the -님 (plain 선생) is possible but sounds blunt; in address it is effectively obligatory."
              ],
              phonology: [
                "[선생님]. Note that the ㅇ of 생 is [ŋ] and does not move into 님. The subject form uses the honorific particle 께서 in formal speech: 선생님께서."
              ],
              cognates: [
                "-님 also in 어머님, 아버님, 사장님, 고객님, and grammaticalised in 님 as an online form of address. Same 先: 선배 (senior colleague), 우선 (first of all). Mandarin xiānsheng 先生; Japanese sensei 先生."
              ]
            }
          },
          {
            term: "회사원",
            roman: "hoesawon",
            gloss: "office worker; company employee",
            pos: "noun",
            example: { text: "민수 씨는 회사원이에요.", roman: "minsu ssineun hoesawonieyo.", gloss: "Minsu is an office worker." },
            linguistics: {
              origin: "Sino-Korean",
              etymology: [
                "<b>會社員</b>: 會 <i>hoe</i> (to gather, meet) + 社 <i>sa</i> (a group; originally an altar to the god of the soil, hence a community) + 員 <i>won</i> (a member of a body). 會社 <i>company</i> is a Japanese coinage of the Meiji era (<i>kaisha</i>) built to translate the Western business corporation, and Korea borrowed it along with much of its modern commercial vocabulary.",
                "Note the direction of borrowing: modern Chinese reversed the same two characters to make 公司 for company, so 회사 is shared with Japanese rather than with Mandarin — a useful diagnostic for spotting nineteenth- and twentieth-century Japanese-mediated vocabulary in Korean."
              ],
              script: [
                "회 contains the mixed vowel ㅚ, so the block is built consonant-above-left with the ㅣ stroke to the right."
              ],
              phonology: [
                "[회사원], commonly [훼사원] since most speakers realise ㅚ as [we]. 회사원이에요 liaises to [회사워니에요]."
              ],
              cognates: [
                "회사 (company), 사원 (staff member), 직원 (employee), 공무원 (civil servant), 은행원 (bank clerk). Same 員: 회원 (member), 점원 (shop assistant). Japanese kaishain 会社員."
              ]
            }
          },
          {
            term: "친구",
            roman: "chingu",
            gloss: "friend",
            pos: "noun",
            example: { text: "민수 씨는 제 친구예요.", roman: "minsu ssineun je chinguyeyo.", gloss: "Minsu is my friend." },
            linguistics: {
              origin: "Sino-Korean",
              etymology: [
                "<b>親舊</b>: 親 <i>chin</i> (close, intimate; also <i>parent, relative</i>) + 舊 <i>gu</i> (old, of long standing). Literally <i>an old intimate</i>. The compound exists in Classical Chinese meaning <i>old friends and relatives</i>, but only Korean turned it into the ordinary, everyday word for <i>friend</i> — modern Mandarin uses 朋友 péngyou and Japanese uses 友達 tomodachi.",
                "Culturally 친구 is narrower than English <i>friend</i>: it strongly implies someone of the same age, because Korean social relations are calibrated by year of birth. Someone a year older is a 선배 or 오빠/형/언니/누나, not a 친구, and calling an older person 친구 can sound presumptuous."
              ],
              script: [
                "친 has the batchim ㄴ; 구 is open."
              ],
              phonology: [
                "[친구], with the ㄱ voiced to [ɡ] between voiced sounds. 친구예요 (not 친구이에요) because 구 ends in a vowel."
              ],
              cognates: [
                "Same 親: 친하다 (to be close), 친절 (kindness), 친척 (relatives), 친밀 (intimacy). Same 舊: 구식 (old-fashioned), 복구 (restoration). Mandarin qīnjiù 亲旧 exists but is literary; the everyday Mandarin word is péngyou 朋友."
              ]
            }
          },
          {
            term: "어느",
            roman: "eoneu",
            gloss: "which (of several)",
            pos: "determiner",
            example: { text: "어느 나라 사람이에요?", roman: "eoneu nara saramieyo?", gloss: "Which country are you from?" },
            linguistics: {
              origin: "native Korean",
              etymology: [
                "Middle Korean 어느, part of the native <b>어-</b> interrogative family: 어디 (where), 언제 (when), 어떻게 (how), 어떤 (what kind of), 얼마 (how much). All of them share an initial 어- that historians of the language reconstruct as an old interrogative root.",
                "어느 is a determiner and must be followed by a noun — 어느 나라, 어느 것, 어느 분. It cannot stand alone, which is the main difference between it and 무엇/뭐."
              ],
              script: [
                "Two open blocks."
              ],
              phonology: [
                "[어느]. In casual speech the phrase 어느 것 contracts to 어느 거 and then to 어느 게 with the subject particle."
              ],
              cognates: [
                "어디, 언제, 어떻게, 어떤, 얼마. Contrast the 무-/므- series: 무엇, 무슨, 몇."
              ]
            }
          },
          {
            term: "네",
            roman: "ne",
            gloss: "yes; that is right; also a general acknowledgement",
            pos: "interjection",
            example: { text: "네, 저는 한국 사람이에요.", roman: "ne, jeoneun hanguk saramieyo.", gloss: "Yes, I am Korean." },
            linguistics: {
              origin: "native Korean",
              etymology: [
                "From earlier <b>녜</b>, which is what fifteenth- and sixteenth-century texts write; the y-glide was lost, giving modern 네. The variant <b>예</b> is the same word on a different path and remains in use as a slightly more deferential yes, common in service speech and among older speakers.",
                "The plain-style equivalent is 응 or 어, used only with close friends and juniors."
              ],
              script: [
                "One block, ㄴ + ㅔ. Because of the ㅐ/ㅔ merger, learners sometimes write 내 (my) by mistake — a small typo with a confusing result."
              ],
              phonology: [
                "[ne]. Korean 네 does far more work than English <i>yes</i>: repeated as 네네 it means <i>I am listening</i>; on the phone it answers the call; with rising intonation 네? it means <i>pardon?</i> or <i>excuse me?</i>. It also answers a negative question in the Japanese-style logic — asked 학생이 아니에요? (<i>aren't you a student?</i>), a Korean says 네 to confirm the negative, i.e. <i>right, I am not</i>."
              ],
              cognates: [
                "예 (formal yes), 응/어 (casual yes), 그럼요 (of course). The negative counterpart is 아니요."
              ]
            }
          },
          {
            term: "아니요",
            roman: "aniyo",
            gloss: "no",
            pos: "interjection",
            example: { text: "아니요, 저는 학생이 아니에요.", roman: "aniyo, jeoneun haksaengi anieyo.", gloss: "No, I am not a student." },
            linguistics: {
              origin: "native Korean",
              etymology: [
                "Built on the native negative root <b>아니</b>, attested in Middle Korean and unchanged since, plus the polite particle 요. The same root gives the negative adjective 아니다 (<i>to not be</i>) and, by contraction, the short negative adverb <b>안</b> used before verbs (안 가요 = I am not going).",
                "Both spellings 아니요 and 아뇨 are standard, the second being the contracted colloquial form. The spelling 아니오 is a different thing entirely — the 하오체 form of 아니다 — and is a common native-speaker misspelling."
              ],
              script: [
                "Three blocks, all with the silent onset ㅇ except the middle one."
              ],
              phonology: [
                "[아니요], often reduced to [아뇨]. Like 네, it answers the <i>proposition</i> rather than the fact, so to the question 미국 사람이 아니에요? a Korean who is not American answers 네."
              ],
              cognates: [
                "아니다 (to not be), 안 (negative adverb), 아직 (not yet), 아무 (any/no). Casual equivalents: 아니, 아냐."
              ]
            }
          },
          {
            term: "반갑습니다",
            roman: "bangapseumnida",
            gloss: "(I am) pleased to meet you",
            pos: "adjective (formal polite form)",
            example: { text: "만나서 반갑습니다.", roman: "mannaseo bangapseumnida.", gloss: "I am glad to meet you." },
            linguistics: {
              origin: "native Korean",
              etymology: [
                "The dictionary form is <b>반갑다</b>, a ㅂ-irregular descriptive verb meaning <i>to be glad (to see someone)</i>. It is transparently related to <b>반기다</b> (<i>to greet warmly, to welcome</i>), and both are usually traced to a shared native root 반- with the adjective-forming suffix -갑다, the same suffix seen in 차갑다 (cold) and 아름답다 (beautiful). Beyond that the deeper origin of the root is not securely established, and honest dictionaries leave it open.",
                "It is used only for gladness at meeting or seeing someone — you cannot use 반갑다 for being glad about the weather. For that Korean uses 기쁘다 or 좋다."
              ],
              script: [
                "The formal ending -습니다 is written 습니다 but never pronounced that way."
              ],
              phonology: [
                "[반갑씀니다]: 경음화 tenses the ㅅ after the ㅂ coda, then 비음화 turns that ㅂ into [ㅁ] before ㄴ. Two rules in one word. The 해요체 form is 반가워요 [반가워요], where the ㅂ-irregular stem turns its ㅂ into 우 — a fossil of the lost Middle Korean sound ㅸ [β]."
              ],
              cognates: [
                "반기다 (to welcome), 반가움 (gladness). Other ㅂ-irregulars behaving the same way: 춥다 → 추워요, 덥다 → 더워요, 어렵다 → 어려워요."
              ]
            }
          },
          {
            term: "감사합니다",
            roman: "gamsahamnida",
            gloss: "thank you",
            pos: "expression",
            example: { text: "정말 감사합니다.", roman: "jeongmal gamsahamnida.", gloss: "Thank you very much." },
            linguistics: {
              origin: "Sino-Korean root + native verb",
              etymology: [
                "<b>感謝</b> + 하다: 感 <i>gam</i> (to feel; the heart 心 under a phonetic 咸) + 謝 <i>sa</i> (to thank; also <i>to apologise, to decline</i> — the same character behind Mandarin xièxie 谢谢).",
                "Korean has a native rival, <b>고맙습니다</b>, from the adjective 고맙다. Its root is generally connected to Middle Korean 고마, meaning <i>reverence</i> or, in some readings, a divine being — so 고맙다 originally meant something like <i>to be worthy of reverence</i>. The two expressions are interchangeable today, though 고맙습니다 feels slightly warmer and more native, and language purists prefer it."
              ],
              script: [
                "Four blocks. The formal -습니다 ending marks this as 합쇼체; the 해요체 equivalent is 감사해요, which is oddly less common than the formal form in everyday speech."
              ],
              phonology: [
                "[감사함니다] — the ㅂ of 합 becomes [ㅁ] before ㄴ. This is the single most-heard example of 비음화 in Korean."
              ],
              cognates: [
                "Same 感: 감동 (being moved), 감정 (emotion), 감기 (a cold — 感氣, a Korean-only compound). Same 謝: 사죄 (apology), 사례 (token of thanks). Mandarin gǎnxiè 感谢; Japanese kansha 感謝."
              ]
            }
          },
          {
            term: "안녕히 가세요",
            roman: "annyeonghi gaseyo",
            gloss: "goodbye (said to the person who is leaving)",
            pos: "expression",
            example: { text: "안녕히 가세요. 또 봐요.", roman: "annyeonghi gaseyo. tto bwayo.", gloss: "Goodbye. See you again." },
            linguistics: {
              origin: "Sino-Korean root + native adverbial and honorific endings",
              etymology: [
                "안녕 (安寧, peace) + the adverb-forming suffix <b>-히</b> + 가다 (to go) + the honorific polite ending -(으)세요: literally <i>go peacefully</i>. Its partner <b>안녕히 계세요</b> uses 계시다, the honorific form of 있다 (<i>to be, to stay</i>), and means <i>stay peacefully</i>.",
                "Which one you say depends on who is moving. The person staying says 안녕히 가세요 to the person leaving; the person leaving says 안녕히 계세요 to the person staying. If you are both leaving, you both say 안녕히 가세요. Getting this backwards is the classic foreigner error, and Koreans find it endearing rather than rude."
              ],
              script: [
                "Written as three words. The casual equivalents are 잘 가 and 잘 있어; the telephone-only 들어가세요 is another common sign-off."
              ],
              phonology: [
                "[안녕히 가세요], with the ㅎ of 히 often weakening or disappearing between voiced sounds so it sounds like [안녕이 가세요]."
              ],
              cognates: [
                "안녕히 계세요, 안녕하세요 (same 安寧 root), 가다 (to go), 계시다 (honorific of 있다). The suffix -히 also forms 조용히 (quietly), 천천히 (slowly), 열심히 (diligently)."
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
            name: "The copula 이에요 / 예요 — 'to be'",
            pattern: "Noun + 이에요 (after a consonant) · Noun + 예요 (after a vowel)",
            explanation: [
              "Korean's equivalent of <i>am/is/are</i> is the copula <b>이다</b>, and in the polite 해요체 style it appears as <b>이에요</b> or <b>예요</b>. The choice is purely phonological: after a noun ending in a consonant use 이에요 (학생이에요, 사람이에요, 회사원이에요); after a noun ending in a vowel use 예요 (친구예요, 사라예요, 의사예요). Historically 예요 is simply 이에요 with the 이 absorbed into the preceding vowel.",
              "Two things surprise English speakers. First, the copula is written <b>attached</b> to the noun with no space, because it is an ending rather than an independent verb. Second, it comes at the <i>end</i> of the sentence, since Korean is a subject-object-verb language and the copula counts as the verb. 저는 학생이에요 is literally <i>I-topic student-am</i>.",
              "To ask a question, change nothing but the intonation and the punctuation: 학생이에요? means <i>are you a student?</i> Korean does not invert word order or add a helper verb. The negative is a separate construction — 이/가 아니에요 — covered in the fourth grammar point below. The plain-style equivalent for friends is -이야/야, and the formal equivalent is -입니다, which you will hear constantly in announcements and self-introductions."
            ],
            examples: [
              { text: "저는 사라예요.", roman: "jeoneun sarayeyo.", gloss: "I am Sarah. (사라 ends in a vowel → 예요)" },
              { text: "저는 학생이에요.", roman: "jeoneun haksaengieyo.", gloss: "I am a student. (학생 ends in ㅇ → 이에요)" },
              { text: "민수 씨는 회사원이에요.", roman: "minsu ssineun hoesawonieyo.", gloss: "Minsu is an office worker." },
              { text: "이름이 뭐예요?", roman: "ireumi mwoyeyo?", gloss: "What is your name?" },
              { text: "한국 사람이에요?", roman: "hanguk saramieyo?", gloss: "Are you Korean? (same words, question intonation)" }
            ]
          },
          {
            name: "The topic particle 은 / 는",
            pattern: "Noun + 은 (after a consonant) · Noun + 는 (after a vowel)",
            explanation: [
              "<b>은/는</b> marks the <i>topic</i> — what the sentence is about, the frame within which the rest of the sentence is true. Again the choice is phonological: 은 after a consonant (선생님은), 는 after a vowel (저는). English has no direct equivalent; the closest translations are <i>as for X</i>, <i>speaking of X</i>, or simply putting X first and stressing it.",
              "Its second job is <b>contrast</b>, and this is what makes the dialogue in this unit work. When 민수 씨는 학생이에요? follows 저는 학생이에요, the 는 signals a switch of subject: <i>I am a student — and you?</i> That contrastive shading is why 은/는 is used so heavily when two people are comparing themselves in an introduction, and why using it in the wrong place can sound unintentionally pointed.",
              "Korean also has a subject particle 이/가, taught in unit 2, and the difference between the two is one of the genuinely hard problems of Korean grammar. A serviceable first approximation: 은/는 introduces or re-activates something already in the conversational frame and often contrasts it, while 이/가 identifies a new or newsworthy subject and answers the question <i>who/what</i>. In casual speech, particles are also frequently dropped altogether: 이름이 뭐예요? can be just 이름 뭐예요?"
            ],
            examples: [
              { text: "저는 미국 사람이에요.", roman: "jeoneun miguk saramieyo.", gloss: "I am American. (저 ends in a vowel → 는)" },
              { text: "선생님은 한국 사람이에요.", roman: "seonsaengnimeun hanguk saramieyo.", gloss: "The teacher is Korean. (님 ends in ㅁ → 은)" },
              { text: "사라 씨는 학생이에요. 민수 씨는 회사원이에요.", roman: "sara ssineun haksaengieyo. minsu ssineun hoesawonieyo.", gloss: "Sarah is a student. Minsu, on the other hand, is an office worker. (contrast)" },
              { text: "이름은 뭐예요?", roman: "ireumeun mwoyeyo?", gloss: "And your name? (as for your name — implying we have already covered something else)" },
              { text: "저도 학생이에요.", roman: "jeodo haksaengieyo.", gloss: "I am a student too. (도 replaces 는 entirely — never say 저는도)" }
            ]
          },
          {
            name: "저, 제, and how Koreans avoid saying 'you'",
            pattern: "저 + 는/가 → 저는 / 제가 · 저 + 의 → 제 · address others by name + 씨 or by title",
            explanation: [
              "<b>저</b> is the humble <i>I</i> you use with anyone you are not close to; <b>나</b> is the plain form for friends and juniors. Mixing levels — 나는 with polite endings, or 저 with a friend — is one of the quickest ways to sound off. With the subject particle 저 contracts to <b>제가</b>, and the possessive 저의 contracts to <b>제</b>: 제 이름은 사라예요.",
              "For the second person, Korean's honest answer is that it mostly does not use pronouns at all. The dictionary word 당신 exists, but in real life it is used between spouses, in song lyrics and prayers, in written advertising, and — dangerously — as a hostile <i>you</i> in an argument. Say it to a stranger and you may start a fight. 너 is fine, but only downward or between close friends.",
              "Instead Koreans use the person's <b>name plus 씨</b> (사라 씨는 학생이에요?), or their <b>title</b> (선생님은…, 사장님은…), or their <b>kinship/role term</b>, or nothing at all, letting context carry it. Notice how the dialogue in this unit never once uses a word for <i>you</i>. Note also that Korean names put the family name first: in 김민수, 김 is the surname and 민수 the given name, so friends call him 민수 씨 or 민수야, never 김 씨."
            ],
            examples: [
              { text: "저는 사라예요.", roman: "jeoneun sarayeyo.", gloss: "I am Sarah." },
              { text: "제 이름은 김민수예요.", roman: "je ireumeun gimminsuyeyo.", gloss: "My name is Kim Minsu." },
              { text: "제가 학생이에요.", roman: "jega haksaengieyo.", gloss: "I am the student. (제가 identifies which of us)" },
              { text: "사라 씨는 어느 나라 사람이에요?", roman: "sara ssineun eoneu nara saramieyo?", gloss: "Which country are you from, Sarah? (name instead of 'you')" },
              { text: "선생님은 미국 사람이에요?", roman: "seonsaengnimeun miguk saramieyo?", gloss: "Are you American, teacher? (title instead of 'you')" }
            ]
          },
          {
            name: "Yes-no questions, 네/아니요, and the negative 이/가 아니에요",
            pattern: "Statement + rising intonation = question · Noun + 이/가 아니에요 = is not",
            explanation: [
              "A yes-no question in Korean is just a statement said with a question intonation, or written with a question mark. 한국 사람이에요. is <i>you are Korean</i>; 한국 사람이에요? is <i>are you Korean?</i> No auxiliary, no inversion. In the formal style the ending itself changes (-입니다 → -입니까?), but 해요체 leaves it to intonation.",
              "To say something is <i>not</i> a noun, you cannot negate 이에요 directly. You use the separate negative copula <b>아니다</b>, in the polite form <b>아니에요</b>, and — importantly — the noun before it takes the subject particle <b>이/가</b>, not 은/는: 저는 학생<b>이</b> 아니에요, 저는 의사<b>가</b> 아니에요. The topic 저는 can stay in front, but the negated noun itself takes 이/가.",
              "Answering: 네 confirms the proposition as stated and 아니요 denies it. Because Korean agrees with the <i>question</i> rather than with the <i>fact</i>, a negative question flips the English pattern. Asked 학생이 아니에요? (<i>you are not a student?</i>), a non-student answers 네 (<i>right, I am not</i>) and a student answers 아니요 (<i>no — I am</i>). This trips up English speakers constantly, so listen for the verb, not just the 네."
            ],
            examples: [
              { text: "학생이에요?", roman: "haksaengieyo?", gloss: "Are you a student?" },
              { text: "네, 학생이에요.", roman: "ne, haksaengieyo.", gloss: "Yes, I am a student." },
              { text: "아니요, 학생이 아니에요.", roman: "aniyo, haksaengi anieyo.", gloss: "No, I am not a student." },
              { text: "저는 회사원이 아니에요.", roman: "jeoneun hoesawoni anieyo.", gloss: "I am not an office worker." },
              { text: "사라 씨는 한국 사람이 아니에요. 미국 사람이에요.", roman: "sara ssineun hanguk sarami anieyo. miguk saramieyo.", gloss: "Sarah is not Korean. She is American." }
            ]
          }
        ]
      },
      {
        type: "notes",
        title: "Culture note: names, bowing, and the age question",
        body: [
          "A Korean name is written and said <b>family name first</b>: in 김민수, 김 is the surname and 민수 the two-syllable given name. Surnames are overwhelmingly one syllable and drawn from a very small pool — roughly one Korean in five is a 김, and 김, 이 and 박 together account for close to half the population. That scarcity is exactly why Koreans do not address one another by surname the way English speakers say <i>Mr. Smith</i>: calling out <i>Mr. Kim</i> in an office turns five heads. Address by given name plus 씨, or better, by job title plus 님.",
          "Bowing is not a single gesture but a scale. A quick nod of the head accompanies 안녕하세요 between colleagues; a fifteen-to-thirty-degree bow goes to someone clearly senior, to a customer, or on a first meeting; deeper bows are reserved for ceremony and apology. Handshakes are common in business and are done with the right hand while the left hand lightly supports the right forearm — a gesture of respect you will also see when someone pours a drink or hands over a business card. Business cards are given and received with two hands, read attentively, and never stuffed straight into a pocket.",
          "Early in a first conversation a Korean may ask your age, or ask what year you were born (몇 년생이에요?). This is not nosiness; it is a request for the information needed to speak to you correctly. Korean encodes relative seniority in its verb endings and address terms, so until age is settled the speakers do not know whether to use 형/오빠, 누나/언니, 선배, or plain names. Foreigners are often given a pass, but understanding <i>why</i> the question is asked makes it far less jarring. Note also that in June 2023 South Korea officially switched to international age reckoning for legal and administrative purposes, retiring the traditional system in which a newborn was one year old and everyone gained a year at New Year — though the old counting still surfaces in casual conversation.",
          "Finally, greetings are situational rather than time-based. 안녕하세요 covers morning, afternoon and evening alike; Korean has no everyday equivalent of <i>good morning</i> outside of 좋은 아침, a translation borrowed for office use. Among people who know each other, the real greeting is often <b>밥 먹었어요?</b> (<i>have you eaten?</i>) — a question that is not an invitation to a meal but a way of asking whether you are all right, a habit whose roots are usually traced to the hungry decades of the mid-twentieth century. The polite non-answer is 네, 먹었어요."
        ]
      },
      {
        type: "practice",
        title: "Practice: introducing yourself",
        exercises: [
          {
            type: "mcq",
            prompt: "Choose the correct copula: 저는 사라___.",
            promptAudio: null,
            choices: ["예요", "이에요", "이예요", "에요"],
            answer: 0,
            explain: "사라 ends in a vowel, so it takes 예요. Nouns ending in a consonant take 이에요 (학생이에요). The spellings 이예요 and 에요 are not standard here."
          },
          {
            type: "mcq",
            prompt: "Choose the correct topic particle: 선생님___ 한국 사람이에요.",
            promptAudio: null,
            choices: ["은", "는", "이", "가"],
            answer: 0,
            explain: "선생님 ends in the consonant ㅁ, so the topic particle is 은. 는 goes after vowels (저는). 이/가 is the subject particle, taught in unit 2."
          },
          {
            type: "mcq",
            prompt: "Which sentence correctly says 'I am not a student'?",
            promptAudio: null,
            choices: [
              "저는 학생이 아니에요.",
              "저는 학생은 아니에요.",
              "저는 학생 안 이에요.",
              "저는 학생이에요 아니요."
            ],
            answer: 0,
            explain: "The negative copula 아니에요 requires the subject particle 이/가 on the negated noun: 학생이 아니에요. (학생은 아니에요 is possible but adds a strong contrastive nuance.)"
          },
          {
            type: "mcq",
            prompt: "You are leaving your teacher's office. What do you say to the teacher, who stays behind?",
            promptAudio: "안녕히 계세요",
            choices: ["안녕히 계세요.", "안녕히 가세요.", "안녕하세요.", "반갑습니다."],
            answer: 0,
            explain: "The person leaving says 안녕히 계세요 (stay well) to the person staying. The person staying says 안녕히 가세요 (go well) to the one leaving."
          },
          {
            type: "typing",
            prompt: "Write 'Hello' in Korean (the standard polite greeting).",
            answer: ["안녕하세요", "안녕하세요?", "안녕하세요."],
            hint: "Four blocks, from 安寧 + 하세요."
          },
          {
            type: "typing",
            prompt: "Ask someone their name (informal-polite, using 뭐).",
            answer: ["이름이 뭐예요", "이름이 뭐예요?", "이름이 뭐에요", "이름이 뭐에요?"],
            hint: "이름 + 이 … 뭐 + 예요?"
          },
          {
            type: "listening",
            prompt: "Listen and choose the correct meaning.",
            audioText: "저는 회사원이에요.",
            choices: ["I am an office worker.", "I am a student.", "I am a teacher.", "I am a friend."],
            answer: 0,
            explain: "회사원 (會社員) is an office worker. 학생 is a student, 선생님 a teacher, 친구 a friend."
          },
          {
            type: "listening",
            prompt: "Listen. Which country is being named?",
            audioText: "미국 사람이에요.",
            choices: ["the United States", "Korea", "China", "England"],
            answer: 0,
            explain: "미국 (美國) is the United States — a clipping of the old transcription 亞美利加. 한국 is Korea, 중국 China, 영국 England."
          },
          {
            type: "match",
            prompt: "Match the Korean expression with its English meaning.",
            pairs: [
              { a: "안녕하세요", b: "hello" },
              { a: "감사합니다", b: "thank you" },
              { a: "반갑습니다", b: "pleased to meet you" },
              { a: "안녕히 가세요", b: "goodbye (to the one leaving)" },
              { a: "아니요", b: "no" },
              { a: "네", b: "yes" }
            ]
          },
          {
            type: "match",
            prompt: "Match each noun with the correct copula form.",
            pairs: [
              { a: "학생", b: "학생이에요" },
              { a: "친구", b: "친구예요" },
              { a: "선생님", b: "선생님이에요" },
              { a: "사라", b: "사라예요" },
              { a: "회사원", b: "회사원이에요" }
            ]
          },
          {
            type: "order",
            prompt: "Arrange into a sentence: 'I am a student.'",
            tokens: ["저는", "학생이에요"],
            answer: "저는 학생이에요"
          },
          {
            type: "order",
            prompt: "Arrange into a question: 'Which country are you from, Sarah?'",
            tokens: ["사라 씨는", "어느", "나라", "사람이에요?"],
            answer: "사라 씨는 어느 나라 사람이에요?"
          }
        ]
      }
    ]
  });
})();
