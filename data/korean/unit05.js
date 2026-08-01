window.CURRICULUM = window.CURRICULUM || {};
(function () {
  const C = window.CURRICULUM;
  C.korean = C.korean || { units: [] };

  C.korean.units.push({
    id: "ko-05",
    order: 5,
    title: "Daily Activities",
    titleNative: "하루 일과",
    subtitle: "Say what you do every day with the -아/어요 present tense and the object particle 을/를.",
    textbookBasis: [
      "Integrated Korean Beginning 1 (KLEAR), Lesson 4: Daily activities and the polite -아/어요 ending",
      "Sogang Korean 1A, Unit 4: 뭐 해요? and object marking",
      "Yonsei Korean 1, Lesson 5: 하루 일과",
      "Talk To Me In Korean Level 1, Lessons 17-19: present tense, 을/를"
    ],
    overview: [
      "Until now your sentences have been mostly <i>equational</i> — X is Y (이에요/예요) and X exists somewhere (있어요). This unit gives you the engine of ordinary Korean speech: the <b>polite present tense -아/어요</b>, which turns any verb into a usable, everyday sentence. Once you own this ending, every verb in the dictionary becomes speakable.",
      "The second half of the unit is the <b>object particle 을/를</b>, which marks the thing a verb acts on. Korean puts the verb last, so particles — not word order — tell you who is doing what to whom. 밥을 먹어요 and 먹어요, 밥을 are both grammatical; 밥 and 을 travel together as a unit no matter where they sit.",
      "You already know 은/는 (topic), 이/가 (subject), 에 and 에서 (location), and how to tell the time with 시 and 분. All of that is recycled here in a natural morning-to-night narrative. New places that appear in the dialogue — 도서관, 회사, 공원 — came up in Unit 3, so treat them as review."
    ],
    sections: [
      {
        type: "dialogue",
        title: "대화: 아침에 보통 뭐 해요?",
        context: "Jisu, a Korean university student, and Mark, an exchange student who works part-time, compare their daily routines over coffee between classes.",
        lines: [
          { speaker: "지수", text: "마크 씨, 아침에 보통 뭐 해요?", roman: "Mark ssi, achime botong mwo haeyo?", gloss: "Mark, what do you usually do in the morning?" },
          { speaker: "마크", text: "저는 일곱 시에 일어나요. 그리고 아침을 먹어요.", roman: "Jeoneun ilgop sie ireonayo. Geurigo achimeul meogeoyo.", gloss: "I get up at seven. And then I eat breakfast." },
          { speaker: "지수", text: "아침에 뭘 먹어요?", roman: "Achime mwol meogeoyo?", gloss: "What do you eat in the morning?" },
          { speaker: "마크", text: "저는 밥을 먹어요. 그리고 신문을 읽어요.", roman: "Jeoneun babeul meogeoyo. Geurigo sinmuneul ilgeoyo.", gloss: "I eat rice. And I read the newspaper." },
          { speaker: "지수", text: "와, 신문을 읽어요? 저는 아침에 텔레비전을 봐요.", roman: "Wa, sinmuneul ilgeoyo? Jeoneun achime tellebijeoneul bwayo.", gloss: "Wow, you read the newspaper? I watch television in the morning." },
          { speaker: "마크", text: "지수 씨는 오후에 뭐 해요?", roman: "Jisu ssineun ohue mwo haeyo?", gloss: "Jisu, what do you do in the afternoon?" },
          { speaker: "지수", text: "저는 도서관에서 공부해요. 마크 씨도 도서관에 와요?", roman: "Jeoneun doseogwaneseo gongbuhaeyo. Mark ssido doseogwane wayo?", gloss: "I study at the library. Do you come to the library too, Mark?" },
          { speaker: "마크", text: "아니요, 저는 회사에서 일해요. 그리고 저녁에 공원에서 운동해요.", roman: "Aniyo, jeoneun hoesaeseo ilhaeyo. Geurigo jeonyeoge gongwoneseo undonghaeyo.", gloss: "No, I work at a company. And in the evening I exercise at the park." },
          { speaker: "지수", text: "매일 운동해요?", roman: "Maeil undonghaeyo?", gloss: "Do you exercise every day?" },
          { speaker: "마크", text: "네, 매일 해요. 그래서 밤 열한 시에 자요.", roman: "Ne, maeil haeyo. Geuraeseo bam yeolhan sie jayo.", gloss: "Yes, I do it every day. So I sleep at eleven at night." }
        ]
      },
      {
        type: "vocab",
        title: "단어: verbs of the day",
        items: [
          {
            term: "가다",
            roman: "gada",
            gloss: "to go",
            pos: "verb",
            example: { text: "학교에 가요.", roman: "Hakgyoe gayo.", gloss: "I go to school." },
            linguistics: {
              origin: "native Korean",
              etymology: [
                "One of the oldest verbs in the language, attested in the very first Hangul texts of the 1440s as 가다 with the stem 가-. No plausible Sino-Korean or borrowed source exists; it belongs to the core native stratum shared by all Korean dialects including Jeju.",
                "Comparativists have proposed a link to Middle Mongolian and Tungusic motion roots, but no such comparison is accepted as demonstrated. Treat the deeper origin as unknown; the Middle Korean form itself is secure."
              ],
              script: [
                "Written with two syllable blocks. 가 = ㄱ (giyeok) + ㅏ (a); 다 = ㄷ (digeut) + ㅏ. The -다 is not part of the root: it is the dictionary (plain) ending that every Korean verb citation form carries."
              ],
              phonology: [
                "The stem 가- already ends in ㅏ, so the polite ending -아요 is absorbed rather than added: 가 + 아요 gives 가요 [가요], never 가아요. This vowel-swallowing contraction is obligatory in both writing and speech.",
                "Initial ㄱ is an unaspirated, lenis stop [k]; between voiced sounds it voices to [g], which is why 학교에 가요 sounds like [hak-kkyo-e ga-yo]."
              ],
              cognates: [
                "가르치다 (to teach) and 가지다 (to have) are unrelated despite the shared 가 syllable — a warning against reading Korean etymology off the surface spelling.",
                "Real derivatives: 나가다 (to go out, 나- exit + 가다), 들어가다 (to enter), 돌아가다 (to return / to pass away). Korean builds directional verbs by compounding a manner verb with 가다 or 오다."
              ]
            }
          },
          {
            term: "오다",
            roman: "oda",
            gloss: "to come",
            pos: "verb",
            example: { text: "친구가 우리 집에 와요.", roman: "Chinguga uri jibe wayo.", gloss: "My friend is coming to our house." },
            linguistics: {
              origin: "native Korean",
              etymology: [
                "Middle Korean 오다, stem 오-, attested throughout the 15th-century corpus. Together with 가다 it forms the deictic pair that anchors Korean motion: 가다 is movement away from the speaker, 오다 movement toward the speaker."
              ],
              script: [
                "오 = ㅇ (ieung, silent in initial position) + ㅗ (o). The circle ㅇ is a true zero here: it exists only because a Hangul syllable block must begin with a consonant slot, a design decision Sejong made so that blocks would be visually square."
              ],
              phonology: [
                "The stem vowel ㅗ is a bright (양성) vowel, so the ending is -아요; 오 + 아요 contracts to 와요, with ㅗ + ㅏ fusing into the diphthong ㅘ. Careful speakers may still say 오아요 in slow reading, but 와요 is the norm.",
                "Note the same fusion in 보다 → 봐요 and 좋다 → 좋아요 (no fusion, because a batchim blocks it)."
              ],
              cognates: [
                "오르다 (to climb) and 옮기다 (to move something) are separate roots, not derivatives.",
                "Genuine compounds: 나오다 (to come out), 들어오다 (to come in), 돌아오다 (to come back), 가져오다 (to bring). Korean expresses English bring/take as 가져오다 vs 가져가다 — the same object verb plus the come/go contrast."
              ]
            }
          },
          {
            term: "먹다",
            roman: "meokda",
            gloss: "to eat",
            pos: "verb",
            example: { text: "저녁을 많이 먹어요.", roman: "Jeonyeogeul mani meogeoyo.", gloss: "I eat a lot of dinner." },
            linguistics: {
              origin: "native Korean",
              etymology: [
                "Middle Korean 먹다, stem 먹-, abundantly attested from the 15th century onward with the same meaning. The causative 먹이다 (to feed) and the noun 먹이 (animal feed) are formed from it with the productive causative suffix -이-.",
                "Korean has a three-level politeness ladder for this single concept: plain 먹다, humble 먹다 with honorific subject replaced by 드시다/잡수시다, and the noun 진지 for an honoured person's meal. The verb itself never becomes polite; a different lexeme is substituted."
              ],
              script: [
                "먹 = ㅁ (mieum) + ㅓ (eo) + ㄱ batchim. ㅁ is one of Sejong's basic consonant shapes, drawn from the outline of the mouth."
              ],
              phonology: [
                "The dictionary form 먹다 is pronounced [먹따]: a plain stop batchim (ㄱ) forces the following lenis ㄷ to tense into ㄸ. This is 경음화, obligatory tensification, and it applies to 읽다 [익따] and 있다 [읻따] as well.",
                "Before a vowel-initial ending the batchim resyllabifies: 먹 + 어요 is written 먹어요 but pronounced [머거요], which is why the Revised Romanization comes out meogeoyo."
              ],
              cognates: [
                "Same root: 먹이다 (to feed), 먹이 (feed, prey), 잘 먹다 (to eat well), 마음먹다 (to make up one's mind, literally to eat the heart).",
                "No Chinese or Japanese cognate — this is native vocabulary. The Sino-Korean equivalent 식사하다 (食事) coexists as a formal register word."
              ]
            }
          },
          {
            term: "마시다",
            roman: "masida",
            gloss: "to drink",
            pos: "verb",
            example: { text: "아침에 물을 마셔요.", roman: "Achime mureul masyeoyo.", gloss: "I drink water in the morning." },
            linguistics: {
              origin: "native Korean",
              etymology: [
                "Middle Korean 마시다, stem 마시-, attested in 15th-century texts. Some etymologists connect it to a root meaning mouth or to 맛 (taste), but neither link is demonstrated; treat the deeper origin as uncertain.",
                "Korean strictly separates eating and drinking: liquids take 마시다, solids take 먹다. Colloquially 먹다 can swallow up drinks (커피 먹어요), but the reverse never happens."
              ],
              script: [
                "Three blocks: 마 (ㅁ + ㅏ), 시 (ㅅ + ㅣ), 다. The stem is 마시-, two syllables, which matters for conjugation."
              ],
              phonology: [
                "ㅅ before ㅣ is palatalised to [ɕ], so 시 sounds closer to English shi than see. Revised Romanization still writes si.",
                "Stem-final ㅣ plus -어요 contracts to 여요: 마시 + 어요 becomes 마셔요 [마셔요]. The same contraction gives 기다리다 → 기다려요 and 가르치다 → 가르쳐요 (pronounced [가르처요], since ㅕ after ㅊ loses its glide)."
              ],
              cognates: [
                "Related native forms: 마시게 하다 (to make someone drink), 목마르다 (to be thirsty, literally throat-dry).",
                "The Sino-Korean formal counterpart is 음용 (飮用, drinking use) and 음료 (飮料, beverage), whose 음 is 飮 — Mandarin yǐn, Japanese in/nomu. Those are borrowings, not cognates of 마시다."
              ]
            }
          },
          {
            term: "읽다",
            roman: "ikda",
            gloss: "to read",
            pos: "verb",
            example: { text: "매일 신문을 읽어요.", roman: "Maeil sinmuneul ilgeoyo.", gloss: "I read the newspaper every day." },
            linguistics: {
              origin: "native Korean",
              etymology: [
                "Middle Korean had 닑다 (nilk-ta) with an initial ㄴ. Korean later lost ㄴ before the vowel ㅣ and before y-glides, a regular change that also turned 니 (tooth) into 이 and 님금 into 임금 (king). 닑다 accordingly became 읽다.",
                "This is one of the best-documented sound changes in the history of Korean and is the reason North Korean orthography, which did not apply the rule to Sino-Korean initials, writes 녀자 where the South writes 여자."
              ],
              script: [
                "읽 carries the double batchim ㄺ (rieul + giyeok). Korean permits eleven such cluster codas in spelling, all of them relics of Middle Korean pronunciations where both consonants were actually articulated."
              ],
              phonology: [
                "Only one member of a cluster coda surfaces before a consonant or a pause. For ㄺ it is normally ㄱ, so 읽다 is [익따] and 읽고 is [일꼬] — the ㄱ/ㄹ choice famously flips before the ending -고. Learners should memorise 읽다 [익따] and 읽고 [일꼬] as a pair.",
                "Before a vowel the whole cluster resyllabifies and both consonants are heard: 읽어요 is [일거요], romanised ilgeoyo."
              ],
              cognates: [
                "Same root: 읽기 (reading, the skill), 읽히다 (to be read / to have someone read), 소리내어 읽다 (to read aloud).",
                "The Sino-Korean parallel is 독서하다 (讀書, to read books), where 독 is 讀 — Mandarin dú, Japanese doku/yomu. That root is a borrowing and shares nothing historically with 읽다."
              ]
            }
          },
          {
            term: "쓰다",
            roman: "sseuda",
            gloss: "to write; to use",
            pos: "verb",
            example: { text: "편지를 써요.", roman: "Pyeonjireul sseoyo.", gloss: "I am writing a letter." },
            linguistics: {
              origin: "native Korean",
              etymology: [
                "Modern Korean has four homophonous verbs 쓰다: to write, to use, to wear on the head, and to be bitter. Middle Korean kept at least some of them apart — the use verb is generally cited with the initial cluster ㅄ as ᄡᅳ다, and the write verb with a plain ㅅ as 스다 — but sources disagree on the details and on the tone classes involved, so the split should be reported as probable rather than settled.",
                "What is certain is that Middle Korean genuinely pronounced initial clusters such as ㅄ, ㅳ and ㅴ as consonant sequences. When those clusters simplified in the 17th century, they left behind the tense consonants ㅆ, ㄸ, ㄲ — which is why so many modern words begin with a tense sound and why the four 쓰다 verbs collapsed together."
              ],
              script: [
                "쓰 = ㅆ (ssang-siot, a doubled ㅅ) + ㅡ (eu). The doubled letter is a Hangul design feature: tenseness is written by literally writing the letter twice, so the orthography encodes a phonological feature transparently."
              ],
              phonology: [
                "쓰다 is the model ㅡ-dropping verb. A stem whose final vowel is ㅡ deletes that vowel before -아/어요: 쓰 + 어요 becomes 써요. There is no batchim to protect it.",
                "When the stem has more than one syllable, the vowel of the preceding syllable decides the harmony: 바쁘다 → 바빠요 (ㅏ before, so 아요) but 예쁘다 → 예뻐요 (ㅖ, not bright, so 어요). This is the single most useful irregular pattern in beginner Korean."
              ],
              cognates: [
                "From the write sense: 글쓰기 (writing as a skill), 받아쓰기 (dictation), 쓰기 (writing).",
                "From the use sense: 쓸모 (usefulness), 쓰임 (usage). The Sino-Korean counterparts are 작문 (作文, composition) and 사용하다 (使用, to use)."
              ]
            }
          },
          {
            term: "보다",
            roman: "boda",
            gloss: "to see, to watch, to look at",
            pos: "verb",
            example: { text: "저녁에 텔레비전을 봐요.", roman: "Jeonyeoge tellebijeoneul bwayo.", gloss: "I watch television in the evening." },
            linguistics: {
              origin: "native Korean",
              etymology: [
                "Middle Korean 보다, stem 보-, one of the highest-frequency verbs in every period of the language. It covers English see, watch, look at and read (신문을 보다 is as normal as 신문을 읽다).",
                "보다 has grammaticalised into several auxiliaries: -아/어 보다 (to try doing), -(으)ㄴ가 보다 (it seems that), and the comparative particle 보다 (than). This last one is a genuine offshoot of the verb, from an older converb meaning seen against."
              ],
              script: [
                "보 = ㅂ (bieup) + ㅗ (o). ㅂ derives from ㅁ, the mouth shape, with strokes added — Sejong built the consonant series by adding strokes to five basic articulator pictures."
              ],
              phonology: [
                "Bright stem vowel ㅗ takes -아요, and ㅗ + ㅏ fuses to ㅘ: 보아요 becomes 봐요. Both forms are grammatical, but 봐요 is what people say.",
                "Initial ㅂ voices to [b] between voiced sounds, so 텔레비전을 봐요 is [텔레비저늘 봐요]."
              ],
              cognates: [
                "Derivatives: 보이다 (to be visible / to show), 바라보다 (to gaze at), 돌보다 (to look after), 알아보다 (to find out, to recognise).",
                "The Sino-Korean equivalents 시청하다 (視聽, to view and listen) and 관람하다 (觀覽, to view an event) are borrowings used in formal registers; 보다 handles everything in daily speech."
              ]
            }
          },
          {
            term: "자다",
            roman: "jada",
            gloss: "to sleep",
            pos: "verb",
            example: { text: "밤 열한 시에 자요.", roman: "Bam yeolhan sie jayo.", gloss: "I sleep at eleven at night." },
            linguistics: {
              origin: "native Korean",
              etymology: [
                "Middle Korean 자다, stem 자-. The related noun 잠 (sleep) is formed with the deverbal suffix -ㅁ, the same nominaliser seen in 걸음 (a step, from 걷다) and 웃음 (laughter, from 웃다).",
                "The idiom 잠을 자다 — literally to sleep a sleep — is a cognate-object construction that Korean uses freely: 춤을 추다 (to dance a dance), 꿈을 꾸다 (to dream a dream)."
              ],
              script: [
                "자 = ㅈ (jieut) + ㅏ. ㅈ is built by adding a stroke to ㅅ, whose shape represents the tooth."
              ],
              phonology: [
                "The stem already ends in ㅏ, so the ending is absorbed exactly as in 가다: 자 + 아요 gives 자요.",
                "Initial ㅈ is an alveolo-palatal affricate [tɕ], voiced to [dʑ] between voiced sounds. 시에 자요 therefore sounds like [시에 자요] with a soft j."
              ],
              cognates: [
                "Same root: 잠 (sleep), 잠자리 (sleeping place), 낮잠 (nap, literally day-sleep), 자장가 (lullaby).",
                "The honorific replacement is 주무시다, a suppletive form — like 먹다 → 드시다, Korean swaps the whole word rather than adding politeness marking. The Sino-Korean 취침 (就寢) appears only in institutional language such as dormitory schedules."
              ]
            }
          },
          {
            term: "일어나다",
            roman: "ireonada",
            gloss: "to get up, to stand up, to happen",
            pos: "verb",
            example: { text: "아침에 일곱 시에 일어나요.", roman: "Achime ilgop sie ireonayo.", gloss: "I get up at seven in the morning." },
            linguistics: {
              origin: "native Korean (compound)",
              etymology: [
                "A transparent compound of 일다 (to rise, to arise — still alive in 물결이 일다, waves rise) plus the connective -어 plus 나다 (to come out, to emerge). Literally rise-and-emerge.",
                "The compound carries both a physical sense (get out of bed, stand up) and an eventive one (사고가 일어나다, an accident occurs). English happens to split these across get up and happen, but the Korean logic — something rises into existence — covers both."
              ],
              script: [
                "Four blocks, 일 + 어 + 나 + 다. The spelling keeps the morpheme boundary visible (일-어-나-) even though nobody hears it, which is the guiding principle of modern Korean orthography: write morphemes, not sounds."
              ],
              phonology: [
                "The ㄹ batchim of 일 resyllabifies into the following empty onset, so 일어나요 is pronounced [이러나요] and romanised ireonayo. Learners who read it as [일-어-나-요] will sound stilted.",
                "The stem 일어나- ends in ㅏ, so the polite ending is absorbed: 일어나 + 아요 gives 일어나요."
              ],
              cognates: [
                "Built from the same pieces: 일으키다 (to raise, to cause), 나다 (to come out), 태어나다 (to be born, 태 womb + 어나다).",
                "Sino-Korean parallels used in formal writing: 기상하다 (起床, to rise from bed) and 발생하다 (發生, to occur) — one for each sense of the native compound."
              ]
            }
          },
          {
            term: "공부하다",
            roman: "gongbuhada",
            gloss: "to study",
            pos: "verb",
            example: { text: "도서관에서 한국어를 공부해요.", roman: "Doseogwaneseo hangugeoreul gongbuhaeyo.", gloss: "I study Korean at the library." },
            linguistics: {
              origin: "Sino-Korean + native 하다",
              etymology: [
                "The noun 공부 is the hanja 工夫. 工 means work, craft, artisan — the character is a pictograph of a carpenter's square or plumb line (Middle Chinese *kuwng). 夫 means grown man, husband, and pictures a standing man with a hairpin marking adulthood (Middle Chinese *pju).",
                "The compound 工夫 originally meant labour, time and effort expended. Each language then specialised it differently: Korean 공부 narrowed to study, Mandarin 功夫/工夫 gōngfu became skill acquired through effort (hence English kung fu) and also simply time, and Japanese 工夫 kufū drifted to ingenuity, contrivance. Same two characters, three different modern meanings — a textbook case of parallel semantic drift in the Sinosphere.",
                "하다 (to do) is the native verbaliser; Middle Korean ᄒᆞ다 with the now-extinct vowel arae-a."
              ],
              script: [
                "工: three strokes, an upper and lower horizontal joined by a vertical. It is itself a radical (Kangxi radical 48) and appears in 空 (empty), 左 (left), 功 (merit).",
                "夫: four strokes, 大 (a person with arms outstretched) plus a horizontal for the hairpin. Compare 天 (sky), which places the stroke above the head instead."
              ],
              phonology: [
                "공부하다 conjugates as 공부해요 because 하다 is irregular: 하 + 여요 historically, contracted through 하여 to 해. Middle Korean actually wrote ᄒᆞ야, and the modern 해 is the fused descendant of that.",
                "The 부 of 공부 keeps its plain ㅂ, unaffected by the preceding ㅇ batchim; 공부 is simply [공부]."
              ],
              cognates: [
                "Korean words sharing 工: 공장 (工場, factory), 공업 (工業, industry), 인공 (人工, artificial), 공사 (工事, construction work).",
                "Korean words sharing 夫: 부부 (夫婦, married couple), 농부 (農夫, farmer), 어부 (漁夫, fisherman).",
                "Direct cross-language cognates of 工夫: Mandarin gōngfu 功夫/工夫, Japanese kufū 工夫. Note that Mandarin for study is 学习 xuéxí, matching Korean 학습 (學習) rather than 공부."
              ]
            }
          },
          {
            term: "일하다",
            roman: "ilhada",
            gloss: "to work",
            pos: "verb",
            example: { text: "회사에서 일해요.", roman: "Hoesaeseo ilhaeyo.", gloss: "I work at a company." },
            linguistics: {
              origin: "native Korean + 하다",
              etymology: [
                "일 is a native noun meaning work, task, matter, event, attested as 일 in Middle Korean. It is not the Sino-Korean 일 (日, day) nor the 일 (一, one) you met in Unit 4 — three unrelated morphemes that happen to be homophones in modern Korean.",
                "Because 일 covers both work and matter/affair, expressions like 무슨 일이에요? mean both what is the matter? and what work is it?, and 일이 있어요 can mean either I have work or something has come up."
              ],
              script: [
                "일 = ㅇ + ㅣ + ㄹ batchim. The three homophonous 일 morphemes are spelled identically; only Sino-Korean dictionaries separate them by hanja."
              ],
              phonology: [
                "일하다 is pronounced [이라다] in casual speech: the ㄹ batchim resyllabifies and the ㅎ of 하 weakens or drops entirely between voiced sounds. This ㅎ-weakening is extremely common — 좋아요 is [조아요], 많이 is [마니].",
                "Conjugated: 일하 + 여요 gives 일해요, the same 하다 irregularity as in 공부해요."
              ],
              cognates: [
                "Same native root: 일꾼 (worker, labourer), 일자리 (job, position), 집안일 (housework), 큰일 (a big deal, a crisis).",
                "Sino-Korean synonyms in the formal register: 근무하다 (勤務), 노동 (勞動, labour), 작업 (作業, an operation or task). None is etymologically related to native 일."
              ]
            }
          },
          {
            term: "운동하다",
            roman: "undonghada",
            gloss: "to exercise, to work out",
            pos: "verb",
            example: { text: "매일 공원에서 운동해요.", roman: "Maeil gongwoneseo undonghaeyo.", gloss: "I exercise at the park every day." },
            linguistics: {
              origin: "Sino-Korean + 하다",
              etymology: [
                "運動 = 運 (to transport, to revolve, fate; Middle Chinese *hjunH) + 動 (to move; Middle Chinese *duwngX). The literal sense is moving and being moved, and the compound served as the East Asian translation of Western physics vocabulary in the 19th century — motion in the mechanical sense.",
                "From that scientific coinage the word spread in two directions: bodily exercise (Korean 운동, Japanese 運動 undō) and a political movement or campaign (Korean 운동 as in 민주화 운동, Mandarin 运动 yùndòng as in 文化大革命运动). Modern Korean keeps all three senses alive."
              ],
              script: [
                "運: the walking radical 辵/辶 (to advance) plus the phonetic 軍 (army) — a phono-semantic compound meaning to move along a road, hence to transport.",
                "動: 重 (heavy) as phonetic plus 力 (strength) as semantic — to apply force to something heavy, hence to move it."
              ],
              phonology: [
                "운동 shows no assimilation: the ㄴ batchim of 운 stays ㄴ before ㄷ, giving [운동]. Contrast 신라 [실라], where ㄴ before ㄹ does assimilate.",
                "운동하다 → 운동해요, again the 하다 irregular. In fast speech the ㅎ can weaken to give something near [운동애요], but the written and careful form is 운동해요."
              ],
              cognates: [
                "Korean words with 運: 운전하다 (運轉, to drive), 운명 (運命, destiny), 행운 (幸運, good luck), 운송 (運送, transport).",
                "Korean words with 動: 동물 (動物, animal, literally moving thing), 활동 (活動, activity), 감동 (感動, to be moved emotionally), 자동 (自動, automatic).",
                "Cross-language: Mandarin yùndòng 运动, Japanese undō 運動 — all three languages inherit the same 19th-century coinage."
              ]
            }
          },
          {
            term: "아침",
            roman: "achim",
            gloss: "morning; breakfast",
            pos: "noun",
            example: { text: "아침에 아침을 먹어요.", roman: "Achime achimeul meogeoyo.", gloss: "I eat breakfast in the morning." },
            linguistics: {
              origin: "native Korean",
              etymology: [
                "Middle Korean 아ᄎᆞᆷ (achʌm), with the vowel arae-a in the second syllable. When arae-a was lost from the language (non-initial syllables merged with ㅡ in the 16th century, initial syllables with ㅏ in the 18th), the word settled as 아침.",
                "Like English morning coffee versus a morning, Korean lets the time word double as the meal eaten at that time. 아침 = morning and breakfast; 점심 = midday and lunch; 저녁 = evening and dinner. The full forms 아침밥, 점심밥, 저녁밥 exist but are usually shortened."
              ],
              script: [
                "아 (ㅇ + ㅏ) + 침 (ㅊ + ㅣ + ㅁ). ㅊ is ㅈ with an added stroke marking aspiration — the Hangul consonant system encodes aspiration by stroke addition, so the alphabet itself is a phonological feature chart."
              ],
              phonology: [
                "With the particle 에 the ㅁ batchim resyllabifies: 아침에 is [아치메], romanised achime. With 을 it becomes 아침을 [아치믈], achimeul.",
                "Note that 점심 (lunch) is Sino-Korean (點心, the same characters as dim sum) while 아침 and 저녁 are native — the middle meal of the day is the one Korean borrowed a word for."
              ],
              cognates: [
                "Same root: 아침밥 (breakfast), 아침저녁 (morning and evening, i.e. constantly), 이른 아침 (early morning).",
                "The Sino-Korean register word for morning is 조 (朝), as in 조식 (朝食, breakfast, seen on hotel signage) and 조간신문 (朝刊新聞, morning paper) — Mandarin zhāo, Japanese chō/asa."
              ]
            }
          },
          {
            term: "저녁",
            roman: "jeonyeok",
            gloss: "evening; dinner",
            pos: "noun",
            example: { text: "저녁에 친구를 만나요.", roman: "Jeonyeoge chingureul mannayo.", gloss: "I meet a friend in the evening." },
            linguistics: {
              origin: "native Korean",
              etymology: [
                "The 15th-century word for evening was 나조ㅎ / 나죄, not 저녁. The form 져녁 appears in Early Modern Korean texts and gradually displaced 나조ㅎ; its ultimate etymology is not established, and honest sources mark it uncertain. Some link the first syllable to 저 (that, distal) but this is speculation.",
                "The initial 져 lost its glide in the 20th century through the general depalatalisation of 져/쳐/졔 sequences, giving modern 저녁 [저녁]."
              ],
              script: [
                "저 (ㅈ + ㅓ) + 녁 (ㄴ + ㅕ + ㄱ). Note that 녁 keeps the ㅕ that 저 lost — evidence that the depalatalisation applied only after ㅈ, ㅉ, ㅊ, which is exactly what the rule predicts."
              ],
              phonology: [
                "The ㄱ batchim resyllabifies and voices before a vowel-initial particle: 저녁에 is [저녀게], jeonyeoge; 저녁을 is [저녀글], jeonyeogeul.",
                "Before a consonant it is unreleased: 저녁 시간 is [저녁 씨간] with tensification of the following ㅅ."
              ],
              cognates: [
                "Same root: 저녁밥 (dinner), 저녁때 (evening time), 저녁노을 (sunset glow).",
                "The Sino-Korean register word is 석 (夕), as in 석식 (夕食, dinner, institutional) and 추석 (秋夕, the autumn-evening harvest festival) — Mandarin xī, Japanese seki/yū."
              ]
            }
          },
          {
            term: "밥",
            roman: "bap",
            gloss: "cooked rice; a meal",
            pos: "noun",
            example: { text: "밥을 먹어요.", roman: "Babeul meogeoyo.", gloss: "I eat rice / I have a meal." },
            linguistics: {
              origin: "native Korean",
              etymology: [
                "Middle Korean 밥, unchanged for six centuries. Korean distinguishes the plant and grain 벼 (rice plant), 쌀 (uncooked hulled rice) and 밥 (cooked rice) with three unrelated native words — a lexical richness typical of staple crops.",
                "By metonymy 밥 became the general word for a meal, and then for livelihood itself: 밥벌이 means earning a living, and 밥값 하다 (to earn your rice) means to pull your weight."
              ],
              script: [
                "One block: ㅂ + ㅏ + ㅂ. Both the onset and the coda are ㅂ, but they are pronounced differently — [p] released at the start, unreleased [p̚] at the end."
              ],
              phonology: [
                "Final ㅂ is unreleased in isolation, so 밥 is [pap̚] with no audible puff. With 을 it resyllabifies and voices: 밥을 is [바블], romanised babeul.",
                "밥하고 becomes [바파고] by aspiration (ㅂ + ㅎ fuse into ㅍ) — the same fusion you will meet in Unit 7 with the particle 하고."
              ],
              cognates: [
                "Native family: 밥그릇 (rice bowl), 밥상 (dining table), 비빔밥 (mixed rice), 볶음밥 (fried rice), 찬밥 (cold rice, also a nobody).",
                "The honorific noun is 진지 (an elder's meal) and the Sino-Korean formal word is 식사 (食事, Japanese shokuji 食事). Neither is related to 밥."
              ]
            }
          },
          {
            term: "물",
            roman: "mul",
            gloss: "water",
            pos: "noun",
            example: { text: "물을 많이 마셔요.", roman: "Mureul mani masyeoyo.", gloss: "I drink a lot of water." },
            linguistics: {
              origin: "native Korean",
              etymology: [
                "Middle Korean 믈 (mɯl), with the vowel ㅡ. In the 17th and 18th centuries Korean underwent 원순모음화, labial rounding: the vowel ㅡ became ㅜ after a labial consonant (ㅁ, ㅂ, ㅍ). 믈 therefore became 물.",
                "The same change produced 블 → 불 (fire), 플 → 풀 (grass), and 므지개 → 무지개 (rainbow). It is one of the cleanest regular sound laws in Korean historical phonology, and knowing it lets you read 15th-century spellings on sight."
              ],
              script: [
                "ㅁ + ㅜ + ㄹ. Sejong assigned ㅁ to the labial series precisely because he modelled it on the shape of the closed mouth — the very articulation that later caused the rounding change."
              ],
              phonology: [
                "Korean ㄹ is a flap [ɾ] between vowels and a lateral [l] in coda position, so 물 ends in a clear [l] while 물이 is [무리] with a flap.",
                "With the object particle: 물을 is [무를], mureul."
              ],
              cognates: [
                "Native compounds: 물고기 (fish, literally water-flesh), 눈물 (tears, eye-water), 콧물 (nasal mucus), 바닷물 (seawater), 물놀이 (water play).",
                "The Sino-Korean counterpart is 수 (水), as in 수영 (水泳, swimming), 홍수 (洪水, flood), 생수 (生水, bottled spring water) — Mandarin shuǐ, Japanese sui/mizu. 물 and 수 coexist in every register pair."
              ]
            }
          },
          {
            term: "책",
            roman: "chaek",
            gloss: "book",
            pos: "noun",
            example: { text: "저는 책을 읽어요.", roman: "Jeoneun chaegeul ilgeoyo.", gloss: "I read a book." },
            linguistics: {
              origin: "Sino-Korean",
              etymology: [
                "The hanja is 冊, Middle Chinese *tsrhɛk, entering tone with a final -k. The character is a pictograph of bamboo or wooden writing slips bound together with two horizontal cords — the physical form of a Chinese book before paper. You can still see the vertical strips and the binding line in the modern shape.",
                "Because the Middle Chinese coda was -k, the Sino-Korean reading preserves a ㄱ batchim: 책. Korean is unusually conservative here — it kept all three entering-tone codas -p, -t, -k, though -t was systematically reflected as ㄹ (see 매일 below)."
              ],
              script: [
                "冊 has five strokes and is Kangxi radical 13 in its variant form 冂 grouping. Simplified Chinese writes 册. Japanese uses the same character for the counter 冊 satsu (volumes of books)."
              ],
              phonology: [
                "Initial ㅊ is aspirated [tɕʰ]; keep the puff of air or it will be heard as 잭.",
                "The ㄱ batchim voices and resyllabifies before a vowel: 책을 is [채글], chaegeul; 책이 is [채기]. Before a lenis consonant it triggers tensification: 책상 (desk) is [책쌍]."
              ],
              cognates: [
                "Korean words with 冊: 책상 (冊床, desk — literally book-table), 책방 (冊房, bookshop), 공책 (空冊, notebook, literally empty book), 책장 (冊欌, bookcase).",
                "Cross-language: Mandarin cè 册 (a volume, a counter for books), Japanese satsu/saku 冊. Note that modern Mandarin normally says 书 shū (Korean 서, as in 도서관 圖書館) for book; 책 preserves the older 冊 as the everyday word, which is a nice illustration of how borrowed vocabulary can outlive its source usage."
              ]
            }
          },
          {
            term: "신문",
            roman: "sinmun",
            gloss: "newspaper",
            pos: "noun",
            example: { text: "아버지는 아침에 신문을 봐요.", roman: "Abeojineun achime sinmuneul bwayo.", gloss: "My father reads the newspaper in the morning." },
            linguistics: {
              origin: "Sino-Korean",
              etymology: [
                "新聞 = 新 (new; Middle Chinese *sin) + 聞 (to hear, to be heard of, news; Middle Chinese *mjun). Literally new things heard.",
                "The modern sense newspaper is a Japanese coinage of the 1870s (新聞紙 shinbunshi, later clipped to 新聞 shinbun) which Korea borrowed wholesale during the late Joseon and colonial periods. This is one of hundreds of 和製漢語 — Japanese-made Sino-compounds — that entered Korean at that time alongside 사회 (社會 society), 경제 (經濟 economy) and 철학 (哲學 philosophy).",
                "Mandarin borrowed the same compound but kept it as 新闻 xīnwén meaning news, not newspaper (which is 报纸 bàozhǐ). Korean and Japanese share the newspaper meaning; Chinese does not. This is a useful diagnostic for spotting Japanese-mediated vocabulary."
              ],
              script: [
                "新: 斤 (axe) as semantic plus 亲/木 elements — originally to cut fresh wood, hence new.",
                "聞: 耳 (ear) inside 門 (gate) as phonetic — an ear at a gate, listening. The ear component makes the meaning unmistakable."
              ],
              phonology: [
                "신문 is [신문] with no assimilation: ㄴ before ㅁ stays ㄴ (both are nasals already).",
                "신 + 을 does not arise, but 신문을 resyllabifies to [신무늘], sinmuneul."
              ],
              cognates: [
                "Korean words with 新: 신년 (新年, new year), 신선하다 (新鮮, fresh), 최신 (最新, newest), 신인 (新人, newcomer).",
                "Korean words with 聞: 견문 (見聞, knowledge from experience), 소문 (所聞, rumour), 청문회 (聽聞會, a hearing).",
                "Cross-language: Japanese shinbun 新聞 (newspaper — same meaning), Mandarin xīnwén 新闻 (news — different meaning)."
              ]
            }
          },
          {
            term: "텔레비전",
            roman: "tellebijeon",
            gloss: "television",
            pos: "noun",
            example: { text: "저녁에 텔레비전을 봐요.", roman: "Jeonyeoge tellebijeoneul bwayo.", gloss: "I watch television in the evening." },
            linguistics: {
              origin: "loanword (English television)",
              etymology: [
                "A direct 20th-century borrowing from English television, itself Greek tele- (far) plus Latin visio (sight). Korean borrowed it in the 1950s-60s as broadcasting began, and the National Institute of Korean Language standardised the spelling 텔레비전 (not 텔레비젼, since 져 and 전 merged in pronunciation).",
                "The colloquial clipping is 티브이 (TV), and the older generation may say 테레비, which came through Japanese テレビ terebi rather than directly from English. The three forms are a small map of how the word entered Korea."
              ],
              script: [
                "Five blocks: 텔·레·비·전. Korean must give every English consonant a vowel to sit with, so the English three-syllable [ˈtɛlɪvɪʒən] becomes a four-syllable Korean word."
              ],
              phonology: [
                "English /v/ does not exist in Korean and is uniformly mapped to ㅂ, so vision becomes 비전. Likewise /f/ maps to ㅍ and /z/ to ㅈ.",
                "The doubled ㄹ in 텔레 is required: a single 테레 would be pronounced with a flap, while the English word has a clear lateral [l]. Writing ㄹ as both a coda and the next onset is the standard Korean device for representing [l] in loanwords, as in 컬러 (colour) and 헬로 (hello).",
                "The final ㄴ of 전 corresponds to English schwa + n; Korean drops the schwa entirely."
              ],
              cognates: [
                "Other Korean loanwords with 텔레-: 텔레폰 (telephone, though 전화 is normal), 텔레파시 (telepathy).",
                "The everyday clipping 티브이 competes with the full form, and the surrounding vocabulary is Sino-Korean: 방송 (放送, broadcasting), 영상 (映像, video image), 화면 (畫面, screen). Mandarin and Japanese calqued rather than borrowed the sound: Mandarin 电视 diànshì (electric vision), Japanese uses both テレビ and 電視 in Taiwan-influenced contexts."
              ]
            }
          },
          {
            term: "매일",
            roman: "maeil",
            gloss: "every day, daily",
            pos: "adverb / noun",
            example: { text: "매일 한국어를 공부해요.", roman: "Maeil hangugeoreul gongbuhaeyo.", gloss: "I study Korean every day." },
            linguistics: {
              origin: "Sino-Korean",
              etymology: [
                "每日 = 每 (each, every; Middle Chinese *mwojX) + 日 (sun, day; Middle Chinese *nyit). The character 日 is a pictograph of the sun — an oracle-bone circle with a dot inside, later squared off by the brush.",
                "每 depicts a woman with an elaborate hairpin, originally meaning a mother or a lush growth, and was borrowed phonetically for the meaning each. This kind of phonetic loan (假借) accounts for many high-frequency grammatical characters."
              ],
              script: [
                "每 has seven strokes and contains 母 (mother) as its lower component. 日 has four strokes and is Kangxi radical 72, appearing in 時 (time), 明 (bright), 春 (spring), 早 (early)."
              ],
              phonology: [
                "The 일 of 매일 illustrates the single most important rule of Sino-Korean phonology: Middle Chinese syllables ending in -t are reflected in Korean with ㄹ, not ㄷ. 日 *nyit gives 일, 一 *ʔjit gives 일, 八 *pɛt gives 팔, 發 *pjot gives 발. The change is traditionally called 이영보래 and is thought to reflect a northeastern Chinese pronunciation, or an internal Korean adaptation, that Korea received during the Tang period.",
                "매일 is pronounced [매일] with the ㄹ as a clear lateral coda; before a vowel-initial word it does not link because 매일 is a free word."
              ],
              cognates: [
                "Korean words with 每: 매년 (每年, every year), 매주 (每週, every week), 매달 (每-달, every month, a hybrid of hanja and native), 매번 (每番, every time).",
                "Korean words with 日: 일요일 (日曜日, Sunday), 생일 (生日, birthday), 내일 (來日, tomorrow), 일본 (日本, Japan).",
                "Cross-language: Mandarin měirì 每日, Japanese mainichi 毎日 — identical characters and meaning in all three languages."
              ]
            }
          }
        ]
      },
      {
        type: "grammar",
        title: "문법: making verbs speakable",
        points: [
          {
            name: "The polite present tense -아요 / -어요 / -해요",
            pattern: "Verb stem + 아요 (bright vowel) / 어요 (all other vowels) / 하다 → 해요",
            explanation: [
              "Every Korean verb is listed in the dictionary as stem + 다: 가다, 먹다, 마시다. Strip the 다 and you have the <b>stem</b> (가-, 먹-, 마시-). The polite everyday ending 해요체 attaches to that stem and gives you a complete, usable sentence — no subject required, no agreement for person or number. 먹어요 alone can mean I eat, you eat, she eats, they are eating, or we will eat shortly; context supplies the rest.",
              "Which of the two vowels you attach depends on <b>vowel harmony</b>, a system inherited from Middle Korean. If the last vowel of the stem is ㅏ or ㅗ — the two surviving bright (양성) vowels — the ending is <b>-아요</b>. Every other stem vowel takes <b>-어요</b>. So 살다 → 살아요, 좋다 → 좋아요, 보다 → 보아요/봐요 on the bright side; 먹다 → 먹어요, 읽다 → 읽어요, 마시다 → 마셔요, 웃다 → 웃어요 on the other. Stems ending in 하 are a class of their own: 하다 → 해요, and so 공부하다 → 공부해요, 일하다 → 일해요, 운동하다 → 운동해요.",
              "When the stem ends in a <b>vowel</b> rather than a consonant, the two vowels collide and must merge. Learn these six outcomes and you have covered almost every verb you will meet this year: ㅏ + 아요 is absorbed (가다 → 가요, 자다 → 자요, 만나다 → 만나요); ㅓ + 어요 is absorbed (서다 → 서요); ㅗ + 아요 fuses to ㅘ (오다 → 와요, 보다 → 봐요); ㅜ + 어요 fuses to ㅝ (배우다 → 배워요, 주다 → 줘요); ㅣ + 어요 fuses to ㅕ (마시다 → 마셔요, 기다리다 → 기다려요); ㅚ + 어요 fuses to ㅙ (되다 → 돼요). Separately, a stem whose final vowel is <b>ㅡ</b> simply drops it: 쓰다 → 써요, 크다 → 커요, 바쁘다 → 바빠요 (the harmony is then decided by the syllable before). Consonant-final stems never contract — just bolt the ending on: 먹어요, 읽어요, 앉아요.",
              "The same form serves as a question with rising intonation — 뭐 해요? — and as a gentle command or suggestion in context. That four-way ambiguity is why 해요체 is the workhorse of daily Korean: it is polite without being stiff, and it costs you only one ending."
            ],
            examples: [
              { text: "저는 아침에 신문을 읽어요.", roman: "Jeoneun achime sinmuneul ilgeoyo.", gloss: "I read the newspaper in the morning. (consonant stem 읽- + 어요)" },
              { text: "친구가 우리 집에 와요.", roman: "Chinguga uri jibe wayo.", gloss: "My friend is coming to our house. (오- + 아요 fuses to 와요)" },
              { text: "물을 마셔요.", roman: "Mureul masyeoyo.", gloss: "I drink water. (마시- + 어요 fuses to 마셔요)" },
              { text: "지금 편지를 써요.", roman: "Jigeum pyeonjireul sseoyo.", gloss: "I am writing a letter right now. (ㅡ drops: 쓰- + 어요 gives 써요)" },
              { text: "매일 운동해요?", roman: "Maeil undonghaeyo?", gloss: "Do you exercise every day? (하다 verb, rising intonation makes it a question)" }
            ]
          },
          {
            name: "Object particle 을 / 를",
            pattern: "Noun ending in a consonant + 을 · Noun ending in a vowel + 를",
            explanation: [
              "The object particle marks the thing that a transitive verb acts upon. Choose <b>을</b> after a consonant (밥을, 신문을, 책을, 물을) and <b>를</b> after a vowel (커피를, 친구를, 텔레비전 takes 을 because it ends in ㄴ). This is the same consonant-vowel alternation logic you already know from 은/는 and 이/가 — Korean particles routinely come in pairs so that the syllable structure stays comfortable.",
              "Because Korean is verb-final and particle-marked, word order is far freer than in English. 저는 밥을 먹어요, 밥을 저는 먹어요 and 저는 먹어요, 밥을 are all interpretable, because 을 travels with 밥 and keeps announcing that rice is the thing being eaten. English cannot do this: <i>rice I eat</i> changes emphasis at best and breaks at worst.",
              "Two practical notes. First, in casual speech the object particle is very often <b>dropped</b>: 밥 먹어요? is far more natural among friends than 밥을 먹어요?. Keep it in writing and in careful speech; let it go in conversation. Second, watch the contrast with the topic particle: 밥을 먹어요 simply reports eating, while 밥은 먹어요 implies a contrast — <i>rice</i> I do eat (whatever else I might skip). Choosing 은/는 over 을/를 for an object is a deliberate rhetorical move, not a mistake.",
              "Frequent contractions in speech: 무엇을 → 뭘, 저를 → 절, 너를 → 널, 이것을 → 이걸. You met 무엇/뭐 in Unit 2; 뭘 먹어요? is the everyday form of what do you eat?"
            ],
            examples: [
              { text: "저는 책을 읽어요.", roman: "Jeoneun chaegeul ilgeoyo.", gloss: "I read a book. (consonant-final 책 + 을)" },
              { text: "동생이 친구를 만나요.", roman: "Dongsaengi chingureul mannayo.", gloss: "My younger sibling meets a friend. (vowel-final 친구 + 를)" },
              { text: "뭘 마셔요?", roman: "Mwol masyeoyo?", gloss: "What are you drinking? (무엇을 contracted to 뭘)" },
              { text: "밥은 먹어요. 물은 안 마셔요.", roman: "Babeun meogeoyo. Mureun an masyeoyo.", gloss: "I do eat the rice. I do not drink the water. (topic 은 used contrastively on objects)" }
            ]
          },
          {
            name: "N + 하다: the productive verb factory",
            pattern: "Sino-Korean or native noun + 하다 → verb; the noun can also stand alone with 을/를 + 해요",
            explanation: [
              "하다 (to do) is the most productive word-formation device in Korean. Attach it to a noun and you get a verb: 공부 (study) + 하다 = 공부하다, 일 (work) + 하다 = 일하다, 운동 (exercise) + 하다 = 운동하다. Hundreds of Sino-Korean nouns behave this way — 전화하다 (to phone), 숙제하다 (to do homework), 요리하다 (to cook), 청소하다 (to clean), 사랑하다 (to love) — and every English loanword that enters Korean as a noun can be verbalised the same way (쇼핑하다, 클릭하다).",
              "These compounds are <b>separable</b>. 운동해요 and 운동을 해요 mean the same thing; splitting the noun off and marking it with 을/를 adds a shade of emphasis or allows a modifier to slip in: 열심히 공부해요 versus 공부를 열심히 해요. What you cannot do is mark two objects at once. If the verb already has its own object, keep the compound fused: 한국어를 공부해요 is correct, but 한국어를 공부를 해요 is not.",
              "하다 is the language's one genuinely irregular verb in the present tense. Historically the ending was -여요, giving 하여요, which contracted to 해요; Middle Korean wrote ᄒᆞ야. Every 하다 compound inherits this, so once you know 해요 you know 공부해요, 일해요, 운동해요, 전화해요 and a thousand more without further thought."
            ],
            examples: [
              { text: "도서관에서 공부해요.", roman: "Doseogwaneseo gongbuhaeyo.", gloss: "I study at the library." },
              { text: "공부를 열심히 해요.", roman: "Gongbureul yeolsimhi haeyo.", gloss: "I study hard. (separated form, with the adverb between)" },
              { text: "한국어를 공부해요.", roman: "Hangugeoreul gongbuhaeyo.", gloss: "I study Korean. (fused, because 한국어 is already the object)" },
              { text: "지금 뭐 해요?", roman: "Jigeum mwo haeyo?", gloss: "What are you doing right now? (bare 하다 with 뭐, particle dropped)" }
            ]
          },
          {
            name: "Word order and frequency adverbs",
            pattern: "(Topic) + Time + Place에서 + Object을/를 + Adverb + Verb요",
            explanation: [
              "Korean sentences build up in a fixed rhythm and end with the verb. The default order is topic or subject first, then <b>time</b>, then <b>place</b>, then the <b>object</b>, then manner or frequency adverbs, then the verb: 저는 저녁에 공원에서 운동해요. Reversing time and place (공원에서 저녁에) is not ungrammatical, but it sounds marked; keep time before place until the rhythm is automatic.",
              "Frequency adverbs sit before the verb, or right after the topic for emphasis: 매일 (every day), 보통 (usually), 자주 (often), 가끔 (sometimes), 항상 (always), 잘 (well, often), 많이 (a lot), 일찍 (early), 늦게 (late). 저는 보통 일곱 시에 일어나요 and 보통 저는 일곱 시에 일어나요 are both fine, with the second front-loading the usually.",
              "One trap for learners: the time particle <b>에</b> attaches to clock times, days and named periods (일곱 시에, 아침에, 월요일에, 주말에) but is <b>never</b> used with 오늘, 내일, 어제, 지금, 매일, 언제. Say 매일 운동해요, not 매일에 운동해요; 지금 공부해요, not 지금에 공부해요. The rule of thumb is that deictic time words — ones that point from the moment of speaking — refuse the particle."
            ],
            examples: [
              { text: "저는 저녁에 공원에서 운동해요.", roman: "Jeoneun jeonyeoge gongwoneseo undonghaeyo.", gloss: "I exercise at the park in the evening. (topic - time - place - verb)" },
              { text: "마크 씨는 보통 아침에 신문을 읽어요.", roman: "Mark ssineun botong achime sinmuneul ilgeoyo.", gloss: "Mark usually reads the newspaper in the morning." },
              { text: "매일 물을 많이 마셔요.", roman: "Maeil mureul mani masyeoyo.", gloss: "I drink a lot of water every day. (no 에 on 매일)" },
              { text: "저는 밤에 늦게 자요.", roman: "Jeoneun bame neutge jayo.", gloss: "I go to sleep late at night." }
            ]
          }
        ]
      },
      {
        type: "notes",
        title: "Culture note: 밥 and the shape of the Korean day",
        body: [
          "밥 is the most loaded three-letter word in Korean. Literally it is cooked rice; practically it means a meal, and figuratively it means livelihood. 밥벌이 is earning a living, 밥값 하다 (to be worth your rice) means to pull your weight, and 밥줄 (rice line) is your job. When Koreans ask 밥 먹었어요? they are usually not enquiring about food at all — it is a greeting on the order of how are you, and the expected answer is a simple 네, 먹었어요, whether or not you have eaten.",
          "The day is built around three 밥 events, and the names of the meals are simply the names of the times of day: 아침 (morning / breakfast), 점심 (midday / lunch), 저녁 (evening / dinner). Note the mixed etymology — 아침 and 저녁 are native Korean, while 점심 is Sino-Korean 點心, the same two characters as Cantonese dim sum, originally meaning a small something to touch the heart. The lunch break in Korean workplaces is protected and communal; leaving your desk to eat with colleagues at 열두 시 is closer to obligatory than optional.",
          "The single most common invitation in Korean social life is 밥 한번 먹어요 — let us eat once — the equivalent of let us grab coffee sometime. Like its English counterpart it is often phatic rather than a firm plan. If someone means it, they will follow up with a day. And when the bill comes, expect one person to pay for everyone; splitting (더치페이, from Dutch pay) is spreading among younger people but is still not the default in mixed-age company. The person who pays is typically the eldest, the one who invited, or whoever got a promotion that month.",
          "One table manner worth knowing before you use this unit is vocabulary in the wild: unlike in China and Japan, Koreans do not lift the rice bowl off the table. It stays down, and you eat rice with a spoon (숟가락) and side dishes with chopsticks (젓가락). Holding the bowl up is the mark of a foreigner or, historically, of a beggar."
        ]
      },
      {
        type: "practice",
        title: "연습: daily activities",
        exercises: [
          {
            type: "mcq",
            prompt: "Which polite present form of 먹다 is correct?",
            promptAudio: "먹어요",
            choices: ["먹아요", "먹어요", "먹해요", "머거요"],
            answer: 1,
            explain: "The stem is 먹-. Its vowel ㅓ is not ㅏ or ㅗ, so the ending is -어요, giving 먹어요. It is pronounced [머거요] but must be spelled 먹어요, because Korean orthography writes morphemes rather than sounds."
          },
          {
            type: "mcq",
            prompt: "오다 becomes 와요 in the polite present. Why is it not 오아요?",
            promptAudio: "와요",
            choices: [
              "오다 is an irregular verb with no rule",
              "The bright vowel ㅗ plus the ending vowel ㅏ fuse into the diphthong ㅘ",
              "All verbs with two letters drop their ending",
              "ㅗ is a dark vowel so it takes -어요, then contracts"
            ],
            answer: 1,
            explain: "ㅗ is a bright vowel, so it takes -아요; when a vowel-final stem meets the ending vowel they must merge, and ㅗ + ㅏ regularly fuses to ㅘ. The same fusion gives 보다 → 봐요."
          },
          {
            type: "mcq",
            prompt: "Choose the correct particle: 저는 신문___ 읽어요.",
            promptAudio: "저는 신문을 읽어요",
            choices: ["를", "을", "이", "에"],
            answer: 1,
            explain: "신문 ends in the consonant ㄴ, so the object particle is 을. 를 goes after vowels, 이 is a subject particle, and 에 marks time or destination."
          },
          {
            type: "mcq",
            prompt: "Which sentence is wrong?",
            promptAudio: "매일 운동해요",
            choices: ["매일 운동해요.", "아침에 운동해요.", "매일에 운동해요.", "주말에 운동해요."],
            answer: 2,
            explain: "Deictic time words such as 매일, 오늘, 내일, 어제 and 지금 never take the particle 에. 아침 and 주말 are ordinary time nouns, so they do take it."
          },
          {
            type: "typing",
            prompt: "Type the polite present tense of 마시다 (to drink).",
            answer: ["마셔요", "마셔요."],
            hint: "Stem 마시- ends in ㅣ; ㅣ + 어요 fuses into 여요."
          },
          {
            type: "typing",
            prompt: "Write in Korean: 'I read a book.' (use 저는, 책, 읽다)",
            answer: ["저는 책을 읽어요", "저는 책을 읽어요.", "책을 읽어요", "책을 읽어요."],
            hint: "Topic, then object with 을, then the verb last."
          },
          {
            type: "typing",
            prompt: "Type the polite present tense of 쓰다 (to write).",
            answer: ["써요", "써요."],
            hint: "The stem vowel ㅡ disappears before the ending."
          },
          {
            type: "listening",
            prompt: "What did you hear?",
            audioText: "아침에 밥을 먹어요",
            choices: [
              "I eat rice in the morning.",
              "I drink water in the evening.",
              "I read the newspaper in the morning.",
              "I get up at seven."
            ],
            answer: 0,
            explain: "아침에 (in the morning) + 밥을 (rice, object) + 먹어요 (eat). Listen for the resyllabified [바블 머거요]."
          },
          {
            type: "listening",
            prompt: "Which verb did you hear?",
            audioText: "일어나요",
            choices: ["일해요", "일어나요", "읽어요", "이래요"],
            answer: 1,
            explain: "일어나요 is pronounced [이러나요] — four syllables, with the ㄹ carrying over into the second. 일해요 [이래요] is only three syllables and means I work."
          },
          {
            type: "match",
            prompt: "Match each verb with its polite present form.",
            pairs: [
              { a: "가다", b: "가요" },
              { a: "보다", b: "봐요" },
              { a: "읽다", b: "읽어요" },
              { a: "공부하다", b: "공부해요" },
              { a: "쓰다", b: "써요" },
              { a: "마시다", b: "마셔요" }
            ]
          },
          {
            type: "order",
            prompt: "Arrange into a sentence: 'I study Korean at the library.'",
            tokens: ["저는", "도서관에서", "한국어를", "공부해요"],
            answer: "저는 도서관에서 한국어를 공부해요"
          },
          {
            type: "order",
            prompt: "Arrange into a sentence: 'I exercise at the park every day.'",
            tokens: ["매일", "공원에서", "운동해요"],
            answer: "매일 공원에서 운동해요"
          }
        ]
      }
    ]
  });
})();
