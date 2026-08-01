window.CURRICULUM = window.CURRICULUM || {};
(function () {
  const C = window.CURRICULUM;
  C.korean = C.korean || { units: [] };

  C.korean.units.push({
    id: "ko-07",
    order: 7,
    title: "Past Tense & Weekends",
    titleNative: "지난 주말",
    subtitle: "Tell what you did with -았/었어요, join nouns with 하고 and 와/과, and place events in time.",
    textbookBasis: [
      "Integrated Korean Beginning 1 (KLEAR), Lesson 6: The past tense -았/었-",
      "Sogang Korean 1A, Unit 6: 주말에 뭐 했어요?",
      "Yonsei Korean 1, Lesson 7: 과거 시제와 시간 표현",
      "Talk To Me In Korean Level 1, Lessons 17, 22, 25: past tense, 와/과/하고, time words"
    ],
    overview: [
      "Korean marks the past with a single infix, <b>-았-/-었-</b>, slotted between the verb stem and the ending. Because it obeys exactly the same vowel-harmony choice you already learned for -아/어요, you get the past tense almost free: whatever vowel the present takes, the past takes too. 먹어요 becomes 먹었어요; 가요 becomes 갔어요; 해요 becomes 했어요.",
      "The second tool is the set of words for <b>and</b> and <b>with</b>. Korean does not have one all-purpose <i>and</i>: 하고, 와/과 and (이)랑 join nouns to each other, while 그리고 and -고 join whole sentences. Confusing the two is one of the most persistent learner errors, so this unit keeps them apart from the start.",
      "Finally you will learn to anchor events in time — 어제, 지난주, 이번 주말, 다음 달 — and to notice which of these take the particle 에 and which refuse it. The dialogue is a Monday-morning conversation about the weekend, the single most common small-talk topic in Korean office and campus life."
    ],
    sections: [
      {
        type: "dialogue",
        title: "대화: 주말에 뭐 했어요?",
        context: "Monday morning on campus. Sumin runs into Daniel, an exchange student, and asks about his weekend.",
        lines: [
          { speaker: "수민", text: "다니엘 씨, 주말에 뭐 했어요?", roman: "Daniel ssi, jumare mwo haesseoyo?", gloss: "Daniel, what did you do on the weekend?" },
          { speaker: "다니엘", text: "저는 친구하고 바다에 갔어요.", roman: "Jeoneun chinguhago badae gasseoyo.", gloss: "I went to the sea with a friend." },
          { speaker: "수민", text: "와! 어디에 갔어요?", roman: "Wa! Eodie gasseoyo?", gloss: "Wow! Where did you go?" },
          { speaker: "다니엘", text: "부산에 갔어요. 지난주에 표를 샀어요.", roman: "Busane gasseoyo. Jinanjue pyoreul sasseoyo.", gloss: "I went to Busan. I bought the tickets last week." },
          { speaker: "수민", text: "날씨는 좋았어요?", roman: "Nalssineun joasseoyo?", gloss: "Was the weather good?" },
          { speaker: "다니엘", text: "네, 아주 좋았어요. 그래서 사진을 많이 찍었어요.", roman: "Ne, aju joasseoyo. Geuraeseo sajineul mani jjigeosseoyo.", gloss: "Yes, it was very good. So I took a lot of photos." },
          { speaker: "수민", text: "정말 재미있었어요?", roman: "Jeongmal jaemiisseosseoyo?", gloss: "Was it really fun?" },
          { speaker: "다니엘", text: "네, 아주 재미있었어요. 수민 씨는 뭐 했어요?", roman: "Ne, aju jaemiisseosseoyo. Sumin ssineun mwo haesseoyo?", gloss: "Yes, it was a lot of fun. What did you do, Sumin?" },
          { speaker: "수민", text: "저는 집에서 쉬었어요. 그리고 저녁에 영화를 봤어요. 그렇지만 영화는 별로 재미없었어요.", roman: "Jeoneun jibeseo swieosseoyo. Geurigo jeonyeoge yeonghwareul bwasseoyo. Geureochiman yeonghwaneun byeollo jaemieopseosseoyo.", gloss: "I rested at home. And in the evening I watched a movie. But the movie was not very interesting." },
          { speaker: "다니엘", text: "아, 그래요? 다음 주말에는 같이 여행 가요!", roman: "A, geuraeyo? Daeum jumareneun gachi yeohaeng gayo!", gloss: "Oh, really? Next weekend let us travel together!" }
        ]
      },
      {
        type: "vocab",
        title: "단어: last weekend",
        items: [
          {
            term: "주말",
            roman: "jumal",
            gloss: "weekend",
            pos: "noun",
            example: { text: "주말에 뭐 했어요?", roman: "Jumare mwo haesseoyo?", gloss: "What did you do on the weekend?" },
            linguistics: {
              origin: "Sino-Korean",
              etymology: [
                "週末 = 週 (week, cycle, circuit; Middle Chinese *tsyuw) + 末 (end, tip; Middle Chinese *mat). Literally week-end, a direct calque of the English word made in Japan in the early 20th century (週末 shūmatsu) and borrowed into Korean.",
                "The seven-day week itself is not indigenous to East Asia. It reached Korea through Western missionaries and the Japanese calendar reforms of the late 19th century, which is why the whole vocabulary set — 주 (week), 주말, 주일 — is Sino-Korean or Japanese-mediated rather than native."
              ],
              script: [
                "週: the walking radical 辵/辶 plus 周 (circuit, all around) — going all the way around, hence a cycle.",
                "末: a pictograph of a tree 木 with a stroke marking its top branches — the far end. Its mirror image 本 marks the roots and means origin, root, book."
              ],
              phonology: [
                "The 말 of 주말 is another instance of the Sino-Korean -t to ㄹ rule you met with 매일: Middle Chinese 末 *mat ends in -t, and Korean reflects it as ㄹ. Compare 발 (發), 팔 (八), 일 (一, 日), 절 (節).",
                "주말에 resyllabifies to [주마레], jumare."
              ],
              cognates: [
                "Korean words with 週: 주일 (週日, a week / Sunday in Christian usage), 매주 (每週, every week), 금주 (今週, this week), 주간 (週間, weekly).",
                "Korean words with 末: 연말 (年末, year end), 기말 (期末, end of term), 말기 (末期, final stage), 결말 (結末, conclusion).",
                "Cross-language: Mandarin zhōumò 周末, Japanese shūmatsu 週末."
              ]
            }
          },
          {
            term: "어제",
            roman: "eoje",
            gloss: "yesterday",
            pos: "noun / adverb",
            example: { text: "어제 친구를 만났어요.", roman: "Eoje chingureul mannasseoyo.", gloss: "I met a friend yesterday." },
            linguistics: {
              origin: "native Korean",
              etymology: [
                "Middle Korean 어제, sometimes written 어젓- in compounds. Purely native, and part of a native series that also gives 그제/그저께 (the day before yesterday) and the archaic 아래 (a few days ago) still heard in dialects.",
                "Korean has native words for yesterday and today but borrows Sino-Korean for tomorrow — see 내일 below. That asymmetry is one of the odder facts about the Korean lexicon."
              ],
              script: [
                "어 (ㅇ + ㅓ) 제 (ㅈ + ㅔ). Hangul only; no hanja exists for this word."
              ],
              phonology: [
                "어제 never takes the time particle 에. Say 어제 갔어요, not 어제에 갔어요. Deictic time words — those measured from the moment of speaking — reject 에.",
                "In compounds a linking ㅅ appears: 어젯밤 (last night), pronounced [어제빰] or [어젣빰]. This 사이시옷 is the orthographic sign of a native compound with tensification at the seam."
              ],
              cognates: [
                "Native time series: 그저께 / 그제 (two days ago), 오늘 (today), 어젯밤 (last night), 엊그제 (a couple of days ago, a contraction of 어제 + 그제).",
                "The Sino-Korean equivalent is 작일 (昨日), now purely bureaucratic — Mandarin zuórì 昨日, Japanese sakujitsu 昨日 / kinō 昨日."
              ]
            }
          },
          {
            term: "오늘",
            roman: "oneul",
            gloss: "today",
            pos: "noun / adverb",
            example: { text: "오늘은 시간이 없어요.", roman: "Oneureun sigani eopseoyo.", gloss: "I have no time today." },
            linguistics: {
              origin: "native Korean (compound)",
              etymology: [
                "Middle Korean 오ᄂᆞᆯ (onʌl). The second element is transparently ᄂᆞᆯ, the older form of 날 (day); the first is generally taken to be a proximal demonstrative element meaning this. So 오늘 is literally this-day, exactly parallel to English <i>to-day</i>.",
                "When arae-a merged with ㅡ in non-initial syllables during the 16th century, 오ᄂᆞᆯ became 오늘. The related 날 kept its ㅏ because it stood in an initial syllable, where arae-a went to ㅏ instead — the two halves of one Middle Korean word ended up with different vowels through a regular split."
              ],
              script: [
                "오 (ㅇ + ㅗ) 늘 (ㄴ + ㅡ + ㄹ). The spelling hides the morpheme boundary because 날 has been reduced to 늘; modern Korean orthography restores morphemes only when speakers still perceive them."
              ],
              phonology: [
                "Like 어제 and 내일, 오늘 refuses the particle 에: 오늘 공부해요, never 오늘에.",
                "With 은 it resyllabifies: 오늘은 is [오느른], oneureun."
              ],
              cognates: [
                "Same root 날: 날씨 (weather), 생일 is Sino-Korean by contrast, 며칠 (how many days), 하루 (one day, a separate native word), 요즘 (these days, from 요 + 즈음).",
                "The Sino-Korean equivalent is 금일 (今日), used on official notices — Mandarin jīnrì 今日, Japanese konnichi 今日, the 今日 of konnichiwa."
              ]
            }
          },
          {
            term: "내일",
            roman: "naeil",
            gloss: "tomorrow",
            pos: "noun / adverb",
            example: { text: "내일 학교에 가요.", roman: "Naeil hakgyoe gayo.", gloss: "I am going to school tomorrow." },
            linguistics: {
              origin: "Sino-Korean",
              etymology: [
                "來日 = 來 (to come; Middle Chinese *loj) + 日 (day; Middle Chinese *nyit). The coming day. Korean is unusual in using a Sino-Korean word here while keeping native 어제 and 오늘 — the same pattern would be like English saying yesterday, today, and then <i>the ventured day</i>.",
                "There is evidence that a native word once existed. The Song-dynasty Chinese glossary 鷄林類事 (Gyerim Yusa, 1103) records the Korean for tomorrow with the characters 轄載, usually reconstructed as something like 하제 or 할제. The word did not survive into the Hangul era, and the reconstruction is debated, so this should be reported as a strong hypothesis rather than a fact.",
                "The initial ㄴ of 내 rather than ㄹ (來 would give 래) is the 두음법칙 initial law again: Korean does not allow ㄹ at the start of a native-feeling word."
              ],
              script: [
                "來: originally a pictograph of a wheat plant, borrowed phonetically for the verb to come — one of the classic 假借 phonetic loans. The wheat sense was later respelled 麥.",
                "日: the sun, a circle with a central dot in oracle-bone script, squared by the brush."
              ],
              phonology: [
                "The 일 of 내일 again shows the Sino-Korean -t to ㄹ correspondence (日 *nyit → 일). You have now seen it in 매일, 주말 and 내일.",
                "내일 takes no 에: 내일 만나요, not 내일에 만나요."
              ],
              cognates: [
                "Korean words with 來: 미래 (未來, future), 장래 (將來, prospects), 내년 (來年, next year), 유래 (由來, origin).",
                "Cross-language: Mandarin láirì 来日 (means future days, not tomorrow — Mandarin says 明天 míngtiān), Japanese rainichi 来日 (means a visit to Japan). The same two characters mean three different things in three languages, which makes 내일 a useful warning against assuming Sino-vocabulary transfers cleanly."
              ]
            }
          },
          {
            term: "지난주",
            roman: "jinanju",
            gloss: "last week",
            pos: "noun",
            example: { text: "지난주에 영화를 봤어요.", roman: "Jinanjue yeonghwareul bwasseoyo.", gloss: "I saw a movie last week." },
            linguistics: {
              origin: "hybrid: native modifier + Sino-Korean noun",
              etymology: [
                "지난 is the past-modifier form of the native verb 지나다 (to pass by): 지나- + the adnominal ending -ㄴ, so literally the week that has passed. 주 is Sino-Korean 週 (week).",
                "Hybrid words of this kind — native grammar wrapped around a Sino-Korean root — are extremely common in modern Korean and show that the borrowed layer is fully integrated. Compare 지난달 (last month, with native 달) and 지난해 (last year, with native 해), where both halves are native."
              ],
              script: [
                "지 난 주, three blocks. 주 is 週; 지난 has no hanja because it is a native verb form."
              ],
              phonology: [
                "지난주 is [지난주]; the ㄴ does not assimilate to the following ㅈ in careful speech, though fast speech may palatalise slightly.",
                "지난주 does take 에 (지난주에), unlike 어제 and 오늘. The rule of thumb: if the word contains a countable time unit — 주, 달, 해, 요일 — it takes 에."
              ],
              cognates: [
                "The full paradigm: 지난주 (last week), 이번 주 (this week), 다음 주 (next week); 지난달, 이번 달, 다음 달; 작년 / 지난해, 올해, 내년 / 다음 해.",
                "From 지나다: 지난번 (last time), 지나가다 (to pass by), 지난날 (bygone days), 과거 (過去) is the Sino-Korean abstract noun for the past."
              ]
            }
          },
          {
            term: "영화",
            roman: "yeonghwa",
            gloss: "movie, film",
            pos: "noun",
            example: { text: "어제 영화를 봤어요.", roman: "Eoje yeonghwareul bwasseoyo.", gloss: "I watched a movie yesterday." },
            linguistics: {
              origin: "Sino-Korean (Japanese coinage)",
              etymology: [
                "映畫 = 映 (to reflect, to project light; Middle Chinese *ʔjaengH) + 畫 (picture, drawing; Middle Chinese *hwɛjH). Projected pictures.",
                "This is a Japanese coinage of the early 20th century (映画 eiga), created to name the new medium, and borrowed straight into Korean along with much of the era's technical vocabulary. Chinese went its own way and coined 電影 diànyǐng, electric shadows — one concept, two independent Sinitic compounds. Korean uses 영화; if you say 전영 in Korea nobody will understand you."
              ],
              script: [
                "映: the sun radical 日 plus 央 (centre) as phonetic — sunlight falling on something, hence to reflect or project.",
                "畫: a hand holding a brush 聿 above a field boundary — drawing lines, hence a picture. Simplified Chinese writes 画."
              ],
              phonology: [
                "영화 is [영화], with the velar nasal of 영 followed by the ㅎ of 화. In fast speech the ㅎ weakens and many speakers produce something close to [영와].",
                "영 illustrates 두음법칙 in a subtler way: Sino-Korean initial ㄹ before ㅣ or a y-glide is dropped entirely rather than becoming ㄴ, which is why 龍 gives 용 and not 룡 in the South."
              ],
              cognates: [
                "Korean words with 映: 상영 (上映, screening), 반영 (反映, reflection), 영상 (映像, video image).",
                "Korean words with 畫: 만화 (漫畫, comics — Japanese manga), 그림 is the native word, 화가 (畫家, painter), 계획 (計劃/計畫, plan).",
                "Cross-language: Japanese eiga 映画 (same meaning), Mandarin 电影 diànyǐng (different compound entirely)."
              ]
            }
          },
          {
            term: "친구",
            roman: "chingu",
            gloss: "friend",
            pos: "noun",
            example: { text: "친구하고 같이 갔어요.", roman: "Chinguhago gachi gasseoyo.", gloss: "I went together with a friend." },
            linguistics: {
              origin: "Sino-Korean",
              etymology: [
                "親舊 = 親 (close, intimate; also parent; Middle Chinese *tshin) + 舊 (old, long-standing; Middle Chinese *gjuwH). In Classical Chinese the compound meant relatives and old acquaintances collectively. Korean narrowed it to a single person: a friend.",
                "Because 舊 means long-standing, 친구 in careful usage implies someone of your own age whom you have known for a while. Korean strongly ties friendship to age cohort: someone two years older is not your 친구 but your 선배 or 형/오빠, and calling them 친구 can be presumptuous. The word 동갑 (同甲, same age) exists precisely to name the qualification."
              ],
              script: [
                "親: 見 (to see) plus 亲 as phonetic — those you see often, hence intimate. Used alone it means parent (부모님, 양친).",
                "舊: the grass radical over 隹 (short-tailed bird) over 臼 (mortar) — an old owl, borrowed for the abstract meaning old. Simplified Chinese replaced it with 旧."
              ],
              phonology: [
                "친구 is [친구]; the ㄴ batchim and the following ㄱ do not assimilate in standard Korean, though in casual fast speech you may hear [칭구]. That pronunciation is common but non-standard, and it is a nice example of place assimilation (ㄴ → ㅇ before a velar) that Korean orthography refuses to recognise."
              ],
              cognates: [
                "Korean words with 親: 친절하다 (親切, kind), 부모님 uses 父母 instead, 친척 (親戚, relatives), 친하다 (to be close with someone).",
                "Korean words with 舊: 복구 (復舊, restoration), 구식 (舊式, old-fashioned), 구정 (舊正, the lunar new year).",
                "Cross-language: Mandarin says 朋友 péngyou and Japanese 友達 tomodachi for friend; neither uses 親舊 in this sense. 친구 is a Korean-specific narrowing."
              ]
            }
          },
          {
            term: "만나다",
            roman: "mannada",
            gloss: "to meet",
            pos: "verb",
            example: { text: "주말에 친구를 만났어요.", roman: "Jumare chingureul mannasseoyo.", gloss: "I met a friend on the weekend." },
            linguistics: {
              origin: "native Korean (compound)",
              etymology: [
                "Attested in Middle Korean as 맛나다. The usual analysis takes it as 맞- (to face, to receive — the root of 맞다, 맞이하다) plus 나다 (to come out, to occur): the two parties come out facing each other. The analysis is widely accepted but not beyond dispute, so treat it as probable.",
                "The ㅅ of 맛나다 assimilated to the following ㄴ, giving the double ㄴ of the modern spelling 만나다 — a straightforward case of nasal assimilation frozen into the orthography."
              ],
              script: [
                "만 (ㅁ + ㅏ + ㄴ) 나 (ㄴ + ㅏ) 다. The two ㄴ letters spanning the syllable boundary are the visible result of the assimilation."
              ],
              phonology: [
                "Crucially, 만나다 takes the <b>object particle 을/를</b>, not a with-phrase: 친구를 만나요, never 친구와 만나요 in standard usage (although 친구와 만나다 is heard and is accepted by some speakers). English speakers reliably get this wrong.",
                "Stem 만나- ends in ㅏ, so both present and past absorb the ending: 만나요, 만났어요."
              ],
              cognates: [
                "Same root: 마주치다 (to run into), 맞이하다 (to greet, to welcome), 마중 (going out to meet someone).",
                "Sino-Korean equivalents: 만남 is the native nominalisation, while 면회 (面會, a visit to an inmate or patient) and 회의 (會議, a meeting) use 會."
              ]
            }
          },
          {
            term: "놀다",
            roman: "nolda",
            gloss: "to play, to hang out, to have fun",
            pos: "verb",
            example: { text: "친구하고 공원에서 놀았어요.", roman: "Chinguhago gongwoneseo norasseoyo.", gloss: "I hung out with a friend at the park." },
            linguistics: {
              origin: "native Korean",
              etymology: [
                "Middle Korean 놀다, stem 놀-. Unlike English play, Korean 놀다 is entirely normal for adults: 친구하고 놀아요 means to spend leisure time with a friend, not to play a game. It also covers being idle or out of work (노는 사람).",
                "The noun 노래 (song) is generally derived from this root: 놀- plus the nominalising suffix -애. If correct, singing in Korean is etymologically a kind of playing — and 노래방 (karaoke room, literally song-room) preserves it."
              ],
              script: [
                "놀 (ㄴ + ㅗ + ㄹ) 다. Native, no hanja."
              ],
              phonology: [
                "놀다 is a <b>ㄹ-dropping</b> verb: the stem ㄹ vanishes before endings beginning with ㄴ, ㅂ, ㅅ or -(으). So 노는 (modifier), 놉니다 (formal), 노세요 (polite request), 논 (past modifier). But it survives before vowels: 놀아요, 놀았어요 [노라써요].",
                "Every Korean verb whose stem ends in ㄹ behaves this way — 살다, 알다, 팔다, 만들다, 멀다. Learn the class, not the individual verbs."
              ],
              cognates: [
                "Same root: 놀이 (play, a game), 놀이터 (playground), 노래 (song), 소꿉놀이 (playing house), 놀이공원 (amusement park).",
                "Sino-Korean equivalents: 유희 (遊戲, play, formal), 오락 (娛樂, entertainment), 여가 (餘暇, leisure)."
              ]
            }
          },
          {
            term: "쉬다",
            roman: "swida",
            gloss: "to rest, to take time off",
            pos: "verb",
            example: { text: "어제 집에서 쉬었어요.", roman: "Eoje jibeseo swieosseoyo.", gloss: "I rested at home yesterday." },
            linguistics: {
              origin: "native Korean",
              etymology: [
                "Middle Korean 쉬다, stem 쉬-. Modern Korean has a set of homophonous 쉬다 verbs — to rest, to breathe (숨을 쉬다), and to go off or spoil (음식이 쉬다). Whether the first two share an origin, with breathing understood as the pause between exertions, is plausible but unproven; the third is generally taken as unrelated.",
                "쉬다 also means to have a day off work or school: 오늘 쉬어요 means the place is closed or I am off today, not merely that I am relaxing."
              ],
              script: [
                "쉬 = ㅅ + ㅟ (the compound vowel ㅜ + ㅣ). ㅟ was a genuine diphthong in Middle Korean and is now pronounced either as the front rounded monophthong [y] or as the glide sequence [wi], depending on speaker and region — both are standard."
              ],
              phonology: [
                "The past is 쉬었어요, pronounced [쉬어써요]. Unlike stems in ㅜ or ㅣ, a ㅟ stem does <b>not</b> contract in standard Korean: 쉬어요 stays 쉬어요, and the written form 쉈어요 is non-standard even though many speakers say something close to it.",
                "Romanised swieosseoyo by Revised Romanization, which writes ㅟ as wi."
              ],
              cognates: [
                "Same root: 쉼 (a rest), 쉼표 (comma, literally rest-mark), 한숨 쉬다 (to sigh), 쉬는 시간 (break time).",
                "Sino-Korean equivalents: 휴식 (休息, rest), 휴가 (休暇, holiday leave), 휴일 (休日, a day off). The character 休 is a person 亻 beside a tree 木 — resting in the shade."
              ]
            }
          },
          {
            term: "여행",
            roman: "yeohaeng",
            gloss: "travel, a trip",
            pos: "noun (with 하다: to travel)",
            example: { text: "지난달에 여행을 했어요.", roman: "Jinandare yeohaengeul haesseoyo.", gloss: "I took a trip last month." },
            linguistics: {
              origin: "Sino-Korean",
              etymology: [
                "旅行 = 旅 (to travel, a company of troops; Middle Chinese *ljoX) + 行 (to go, to walk; Middle Chinese *hæng). The original Classical Chinese sense was a body of men on the march; the leisure sense is modern and shared across the Sinosphere.",
                "旅 pictures a banner with people gathered beneath it, which is why it also names a military unit — Korean 여단 (旅團) is a brigade."
              ],
              script: [
                "旅: the banner radical 方/㫃 with 从 (people following) beneath.",
                "行: a pictograph of a crossroads seen from above. Its two Korean readings split by meaning: 행 for the go sense (여행, 행동, 유행) and 항 for the row/rank sense (은행 銀行 bank is 행 by convention, but 항렬 行列 generational rank is 항). Two readings from two Middle Chinese pronunciations, *hæng and *hangH."
              ],
              phonology: [
                "여행 is [여행]. The ㅎ between vowels is often weakened almost to nothing, giving [여앵] in relaxed speech.",
                "여행하다 conjugates as 여행해요 / 여행했어요, and splits under negation as 여행 안 해요 like every noun + 하다 verb."
              ],
              cognates: [
                "Korean words with 旅: 여관 (旅館, inn), 여권 (旅券, passport), 여객 (旅客, passenger).",
                "Korean words with 行: 행동 (行動, action), 유행 (流行, fashion), 은행 (銀行, bank), 실행 (實行, execution).",
                "Cross-language: Mandarin lǚxíng 旅行, Japanese ryokō 旅行 — the same compound with the same modern meaning in all three."
              ]
            }
          },
          {
            term: "재미있다",
            roman: "jaemiitda",
            gloss: "to be fun, to be interesting",
            pos: "adjective (descriptive verb)",
            example: { text: "그 영화가 재미있었어요.", roman: "Geu yeonghwaga jaemiisseosseoyo.", gloss: "That movie was interesting." },
            linguistics: {
              origin: "Sino-Korean root + native 있다",
              etymology: [
                "재미 is generally traced to the Sino-Korean 자미 (滋味), literally nourishing flavour — 滋 (to nourish, to increase) plus 味 (taste). The vowel shifted from 자미 to 재미, and the meaning moved from taste to enjoyment, a metaphor English shares in <i>a taste for something</i> and <i>zest</i>.",
                "The word then joined the productive 있다/없다 template: 재미있다 (fun exists) versus 재미없다 (fun does not exist), exactly parallel to 맛있다/맛없다 from Unit 6."
              ],
              script: [
                "재미 is written in Hangul only, its hanja origin forgotten by ordinary speakers. 있다 is native. The whole is written without a space, one word."
              ],
              phonology: [
                "재미있다 is [재미읻따]; 재미있어요 is [재미이써요]. The past is 재미있었어요 [재미이써써요], with two 있-syllables in a row — the first the adjective stem, the second the past infix. Learners routinely drop one; say all four syllables.",
                "The negative 재미없다 is [재미업따] and its past 재미없었어요 [재미업써써요]."
              ],
              cognates: [
                "Same template: 맛있다/맛없다, 멋있다/멋없다 (stylish/drab), 관심 있다 (to be interested).",
                "Korean words with 味: 미각 (味覺, taste), 취미 (趣味, hobby), 흥미 (興味, interest) — note that 취미 and 흥미 are the formal registers of exactly the idea 재미 expresses casually."
              ]
            }
          },
          {
            term: "날씨",
            roman: "nalssi",
            gloss: "weather",
            pos: "noun",
            example: { text: "날씨가 아주 좋았어요.", roman: "Nalssiga aju joasseoyo.", gloss: "The weather was very good." },
            linguistics: {
              origin: "native Korean (compound)",
              etymology: [
                "날 (day) plus the bound suffix -씨. The suffix appears in a small but revealing family: 솜씨 (manual skill), 마음씨 (disposition, temperament), 글씨 (handwriting), 맵시 (a shapely look). Its meaning is something like the manner or quality in which something presents itself, but its ultimate origin is not established — proposals connect it to 씨 (seed) or to a verb root, and neither is proven.",
                "So 날씨 is roughly the manner of the day. Given how much Korean small talk begins with 날씨가 좋네요, it is a well-earned word."
              ],
              script: [
                "날 (ㄴ + ㅏ + ㄹ) 씨 (ㅆ + ㅣ). Native, so no hanja."
              ],
              phonology: [
                "The tense ㅆ is written, not merely pronounced, which tells you the tensification was lexicalised long ago rather than being a live compound-seam effect.",
                "날씨가 is [날씨가]; the ㄹ is a clear lateral before ㅆ."
              ],
              cognates: [
                "The -씨 family: 솜씨, 마음씨, 글씨, 말씨 (way of speaking).",
                "Weather vocabulary: 비 (rain), 눈 (snow), 바람 (wind), 구름 (cloud) — all native; while 기온 (氣溫, temperature), 일기예보 (日氣豫報, weather forecast) and 태풍 (颱風, typhoon) are Sino-Korean."
              ]
            }
          },
          {
            term: "좋다",
            roman: "jota",
            gloss: "to be good, to be nice",
            pos: "adjective (descriptive verb)",
            example: { text: "날씨가 좋아요.", roman: "Nalssiga joayo.", gloss: "The weather is good." },
            linguistics: {
              origin: "native Korean",
              etymology: [
                "Middle Korean 둏다 (dyoh-ta). The change to 좋다 runs through two regular steps: palatalisation of ㄷ before a y-glide (됴 → 죠), then loss of the glide after the new palatal consonant (죠 → 조). The same pair of changes turned 뎔 into 절 (temple) and 텬디 into 천지 (heaven and earth).",
                "Middle Korean carefully distinguished 둏다 (to be good) from 죻다, and also had the transitive 됴히 너기다 (to consider good). The modern language has flattened these into 좋다 and 좋아하다.",
                "Note the crucial pair: 좋다 is an adjective (X is good) while 좋아하다 is a verb (someone likes X). 저는 커피가 좋아요 and 저는 커피를 좋아해요 are both correct but built differently."
              ],
              script: [
                "좋 = ㅈ + ㅗ + ㅎ batchim. The ㅎ batchim is rare and behaves unusually, which is precisely why it deserves attention."
              ],
              phonology: [
                "The ㅎ batchim does three different things. Before ㄷ, ㄱ, ㅈ it fuses with the following consonant into an aspirate: 좋다 is [조타], 좋고 is [조코], 좋지 is [조치]. Before a vowel it disappears entirely: 좋아요 is [조아요], 좋으면 is [조으면]. Before ㄴ it becomes [ㄴ]: 좋네요 is [존네요].",
                "This is why the Revised Romanization of the dictionary form is jota, not joh-da — RR transcribes pronunciation."
              ],
              cognates: [
                "Same root: 좋아하다 (to like), 좋아지다 (to get better), 좋은 (good, modifier form), 사이좋다 (to be on good terms).",
                "Antonyms and relatives: 나쁘다 (bad), 싫다 (to be disliked), 괜찮다 (to be fine, from 관계하지 아니하다, literally it does not matter — a contraction visible in the spelling)."
              ]
            }
          },
          {
            term: "시간",
            roman: "sigan",
            gloss: "time; an hour",
            pos: "noun",
            example: { text: "오늘은 시간이 없어요.", roman: "Oneureun sigani eopseoyo.", gloss: "I have no time today." },
            linguistics: {
              origin: "Sino-Korean",
              etymology: [
                "時間 = 時 (time, season; Middle Chinese *dzyi) + 間 (interval, space between; Middle Chinese *kɛn). Literally the interval of time. The abstract sense of time as a dimension is a modern one, coined in Japan (時間 jikan) to translate Western scientific vocabulary and adopted across the Sinosphere.",
                "In Korean 시간 does double duty: abstract time (시간이 없어요) and the duration counter hour (세 시간, three hours). Keep it apart from 시 (時) alone, which marks the clock hour (세 시, three o'clock). 세 시간 and 세 시 differ by one syllable and by a whole concept."
              ],
              script: [
                "時: the sun radical 日 plus 寺 as phonetic — sun-reckoning, hence time.",
                "間: 門 (gate) with 日 (sun) inside. The older form had 月 (moon) inside the gate — moonlight visible through a gap, hence an interval or space between."
              ],
              phonology: [
                "시 is palatalised [ɕi]. 시간이 resyllabifies to [시가니], sigani.",
                "The counter 시간 takes <b>native</b> numbers (한 시간, 두 시간, 세 시간) even though it is a Sino-Korean word — proof that the native-versus-Sino number choice follows the counter's function, not its etymology."
              ],
              cognates: [
                "Korean words with 時: 시계 (時計, clock), 당시 (當時, at that time), 동시 (同時, simultaneous), 시대 (時代, era).",
                "Korean words with 間: 인간 (人間, human being), 공간 (空間, space), 기간 (期間, period), 사이 is the native equivalent.",
                "Cross-language: Mandarin shíjiān 时间, Japanese jikan 時間."
              ]
            }
          },
          {
            term: "바다",
            roman: "bada",
            gloss: "sea, ocean",
            pos: "noun",
            example: { text: "여름에 바다에 갔어요.", roman: "Yeoreume badae gasseoyo.", gloss: "I went to the sea in the summer." },
            linguistics: {
              origin: "native Korean",
              etymology: [
                "Middle Korean had two forms: 바ᄅᆞᆯ (barʌl) and 바다ㅎ (badah). The second won out and lost its final ㅎ, giving modern 바다. The first survives fossilised in the poetic 바랄 and in place names.",
                "바다ㅎ belonged to the ㅎ-final noun class (ㅎ종성체언), a group of Middle Korean nouns that carried a hidden ㅎ surfacing before certain particles. Most lost it, but the ㅎ is still visible in frozen compounds elsewhere: 안ㅎ + 밖 gave 안팎 (inside and out), 암ㅎ + 닭 gave 암탉 (hen), 수ㅎ + 개 gave 수캐 (male dog). Those aspirated consonants are the ghosts of a lost ㅎ."
              ],
              script: [
                "바 (ㅂ + ㅏ) 다 (ㄷ + ㅏ). Two open syllables; the second ㄷ voices to [d] between vowels, which is why Revised Romanization writes bada rather than bata."
              ],
              phonology: [
                "바다에 is [바다에]; no resyllabification is needed since 바다 ends in a vowel.",
                "The compound 바닷가 (seashore) inserts 사이시옷: pronounced [바다까] or [바닫까], with tensification at the seam. The written ㅅ is the orthographic marker of that tensification in native compounds."
              ],
              cognates: [
                "Native compounds: 바닷물 (seawater), 바닷가 (seaside), 바다낚시 (sea fishing).",
                "The Sino-Korean equivalent is 해 (海), as in 해변 (海邊, beach), 동해 (東海, the East Sea), 해양 (海洋, marine), 해산물 (海産物, seafood) — Mandarin hǎi, Japanese kai/umi."
              ]
            }
          },
          {
            term: "사진",
            roman: "sajin",
            gloss: "photograph",
            pos: "noun",
            example: { text: "사진을 많이 찍었어요.", roman: "Sajineul mani jjigeosseoyo.", gloss: "I took a lot of photos." },
            linguistics: {
              origin: "Sino-Korean (Japanese coinage)",
              etymology: [
                "寫眞 = 寫 (to copy, to transcribe, to depict; Middle Chinese *sjaeX) + 眞 (true, real; Middle Chinese *tsyin). Literally to copy the truth.",
                "The compound existed in Classical Chinese meaning a true-to-life portrait. When photography arrived, Japan reused it for the new technology (写真 shashin) and Korea borrowed that usage. Chinese did not: Mandarin says 照片 zhàopiàn (an illuminated slip) or 相片 xiàngpiàn. So 사진 is a third clear case in this unit — alongside 영화 and 신문 from Unit 5 — of Korean taking the Japanese answer to a 19th-century naming problem."
              ],
              script: [
                "寫: the roof radical 宀 over 舄 — originally to move things under a roof, hence to transfer, hence to copy. Simplified Chinese writes 写.",
                "眞: variously analysed; one traditional account reads it as 匕 (a spoon) over 鼎 (a cauldron), a transformation ritual. Japanese simplified it to 真."
              ],
              phonology: [
                "사진 is [사진]. Before the object particle it resyllabifies: 사진을 is [사지늘], sajineul.",
                "The collocation is 사진을 찍다 (to take a photograph), literally to stamp a photograph — see 찍다 below. Koreans do not say 사진을 잡다 or 사진을 만들다."
              ],
              cognates: [
                "Korean words with 寫: 묘사 (描寫, depiction), 복사 (複寫, photocopy), 필사 (筆寫, transcription).",
                "Korean words with 眞: 진짜 (real, genuine — a hybrid of 眞 plus a native suffix), 진실 (眞實, truth), 사실 (事實, fact) uses a different character.",
                "Cross-language: Japanese shashin 写真 (photo, same meaning), Mandarin xiězhēn 写真 (a photo-book or glamour shoot — a re-borrowing back from Japanese with a narrower sense)."
              ]
            }
          },
          {
            term: "찍다",
            roman: "jjikda",
            gloss: "to take (a photo); to stamp, to dip",
            pos: "verb",
            example: { text: "여기에서 사진을 찍어요.", roman: "Yeogieseo sajineul jjigeoyo.", gloss: "I take photos here." },
            linguistics: {
              origin: "native Korean",
              etymology: [
                "The core meaning is to press something down so that it leaves a mark: 도장을 찍다 (to stamp a seal), 점을 찍다 (to put a dot), 발자국을 찍다 (to leave footprints). Photography joined the family because a camera, in the East Asian conception, stamps an image onto film.",
                "A separate sense is to dip food into sauce: 간장에 찍어 먹어요. Whether this is the same root — pressing something into a substance — or a homophone is not settled; report it as uncertain.",
                "The tense initial ㅉ most likely developed from an earlier consonant cluster, as tense consonants generally did in Korean, but the specific Middle Korean antecedent of this verb is not securely attested."
              ],
              script: [
                "찍 = ㅉ (ssang-jieut) + ㅣ + ㄱ batchim. The doubled ㅈ writes tenseness directly."
              ],
              phonology: [
                "찍다 is pronounced [찍따]: the ㄱ batchim tensifies the following ㄷ, exactly as in 먹다 [먹따] and 읽다 [익따].",
                "Before a vowel the batchim voices and resyllabifies: 찍어요 is [찌거요], and the past 찍었어요 is [찌거써요], romanised jjigeosseoyo."
              ],
              cognates: [
                "Same root: 도장 찍다 (to seal), 낙인찍다 (to brand, literally and figuratively), 점찍다 (to mark out, to have your eye on something).",
                "The Sino-Korean equivalents are 촬영하다 (撮影, to film or photograph, used in professional contexts) and 날인하다 (捺印, to affix a seal)."
              ]
            }
          },
          {
            term: "같이",
            roman: "gachi",
            gloss: "together; like, as",
            pos: "adverb",
            example: { text: "친구하고 같이 영화를 봤어요.", roman: "Chinguhago gachi yeonghwareul bwasseoyo.", gloss: "I watched a movie together with a friend." },
            linguistics: {
              origin: "native Korean",
              etymology: [
                "The adjective 같다 (to be the same, to be like) plus the adverbial suffix -이. Literally samely, hence together or in the same manner. Middle Korean had ᄀᆞᆮᄒᆞ다 / ᄀᆞᆮ다, showing that the stem originally ended in ㄷ — which is exactly what the modern spelling 같- with its ㅌ batchim preserves in altered form.",
                "Both senses stay alive: 같이 가요 (let us go together) and 눈같이 하얘요 (white as snow). The second sense also survives as the particle 처럼."
              ],
              script: [
                "같 (ㄱ + ㅏ + ㅌ batchim) + 이 (ㅇ + ㅣ). The ㅌ batchim is what makes this word phonologically interesting."
              ],
              phonology: [
                "같이 is pronounced <b>[가치]</b>, not [가티]. This is 구개음화, palatalisation: a ㄷ or ㅌ batchim followed by the vowel ㅣ (or a y-glide) in a suffix becomes ㅈ or ㅊ. It is one of the very few sound rules of Middle Korean that still applies productively in the modern language, and it operates only across a morpheme boundary.",
                "Other live examples: 굳이 [구지] (stubbornly), 해돋이 [해도지] (sunrise), 밭이 [바치] (the field, subject), 미닫이 [미다지] (sliding door), 붙이다 [부치다] (to attach). Note that it does <b>not</b> apply inside a single morpheme: 잔디 stays [잔디] and 느티나무 stays [느티나무].",
                "This is also why the Revised Romanization is gachi rather than gati — RR follows pronunciation."
              ],
              cognates: [
                "Same root: 같다 (to be the same), 똑같다 (to be identical), 같은 (the same, modifier), 마찬가지 (the same thing, all the same).",
                "Near-synonym for the together sense: 함께, which is slightly more formal and written. 같이 하고 and 와/과 함께 are the standard pairings: 친구하고 같이, 친구와 함께.",
                "The Sino-Korean parallel is 동 (同), as in 동시 (同時, at the same time), 동일 (同一, identical), 공동 (共同, joint)."
              ]
            }
          }
        ]
      },
      {
        type: "grammar",
        title: "문법: talking about what happened",
        points: [
          {
            name: "Past tense -았어요 / -었어요 / 했어요",
            pattern: "Verb stem + 았/었 + 어요 · 하다 → 했어요",
            explanation: [
              "The Korean past is an infix, <b>-았-</b> or <b>-었-</b>, inserted between the stem and the ending. The choice between them follows exactly the same vowel harmony as the present -아/어요: bright stem vowels ㅏ and ㅗ take <b>-았-</b>, everything else takes <b>-었-</b>, and 하다 becomes <b>했-</b>. So if you can build 먹어요 you can build 먹었어요, and if you can build 좋아요 you can build 좋았어요. Nothing new has to be memorised except the shape of the infix itself.",
              "The contractions carry over unchanged from the present. Stems ending in ㅏ or ㅓ absorb the infix vowel: 가다 → 갔어요, 만나다 → 만났어요, 서다 → 섰어요. ㅗ fuses to ㅘ: 오다 → 왔어요, 보다 → 봤어요. ㅜ fuses to ㅝ: 주다 → 줬어요, 배우다 → 배웠어요. ㅣ fuses to ㅕ: 마시다 → 마셨어요, 기다리다 → 기다렸어요. ㅚ fuses to ㅙ: 되다 → 됐어요. A stem-final ㅡ drops: 쓰다 → 썼어요, 바쁘다 → 바빴어요, 예쁘다 → 예뻤어요. Consonant-final stems simply take the full infix: 먹었어요, 읽었어요, 찍었어요, 앉았어요.",
              "Two special cases complete the picture. The existential 있다/없다 take the infix regularly — 있었어요, 없었어요 — which produces the long but correct 재미있었어요. And the copula 이다 gives <b>-이었어요</b> after a consonant and the contracted <b>-였어요</b> after a vowel: 학생이었어요 (I was a student), 친구였어요 (he was a friend). This mirrors the 이에요/예요 alternation you learned in Unit 1.",
              "Historically the infix is not arbitrary. Middle Korean expressed a completed state with the converb -아/어 plus the existential verb 잇다 (to exist): 가아 잇다, roughly having gone and being there. That phrase fused to -앗- and then to -았-, which is why the past infix contains the same ㅆ that 있다 does. Korean's past tense is, etymologically, a resultative — and traces of that survive in sentences like 앉았어요, which can mean both <i>sat down</i> and <i>is seated</i>."
            ],
            examples: [
              { text: "어제 친구를 만났어요.", roman: "Eoje chingureul mannasseoyo.", gloss: "I met a friend yesterday. (만나- absorbs the infix)" },
              { text: "주말에 영화를 봤어요.", roman: "Jumare yeonghwareul bwasseoyo.", gloss: "I watched a movie on the weekend. (보- + 았 fuses to 봤)" },
              { text: "날씨가 아주 좋았어요.", roman: "Nalssiga aju joasseoyo.", gloss: "The weather was very good. (bright vowel ㅗ takes -았-)" },
              { text: "도서관에서 공부했어요.", roman: "Doseogwaneseo gongbuhaesseoyo.", gloss: "I studied at the library. (하다 → 했-)" },
              { text: "그때 저는 학생이었어요.", roman: "Geuttae jeoneun haksaengieosseoyo.", gloss: "At that time I was a student. (copula past after a consonant)" }
            ]
          },
          {
            name: "Joining nouns: 하고, 와/과, (이)랑",
            pattern: "N1 + 하고 + N2 · N1 + 와 (after vowel) / 과 (after consonant) + N2 · N + 하고 (같이) = with N",
            explanation: [
              "Korean has three ways to say <b>and</b> between nouns, differing only in register. <b>하고</b> is the everyday spoken choice and never changes shape: 밥하고 김치, 친구하고 동생. <b>와/과</b> is the written and formal choice: 와 after a vowel (친구와), 과 after a consonant (밥과). <b>(이)랑</b> is casual and warm: 이랑 after a consonant (밥이랑), 랑 after a vowel (친구랑).",
              "Note the shape of the 와/과 alternation, because it runs <i>opposite</i> to every other particle pair you know. With 이/가, 은/는 and 을/를, the vowel-initial form goes after a consonant (밥이, 밥은, 밥을). With 와/과 it is the reverse: the consonant-initial 과 goes after a consonant (밥과) and the vowel-initial 와 goes after a vowel (친구와). Memorise it as an exception rather than trying to derive it.",
              "The same three words also mean <b>with</b>. 친구하고 갔어요 means I went with a friend; adding 같이 or 함께 makes it explicit — 친구하고 같이 갔어요, 친구와 함께 갔어요. In practice 하고 같이 is the standard spoken combination and 와/과 함께 the standard written one. Do not add a separate word for with; the particle is doing that job.",
              "Crucially, none of these can join two <b>sentences</b>. English <i>and</i> covers both jobs; Korean does not. To link clauses, either use the connective adverb 그리고 between two full sentences (영화를 봤어요. 그리고 밥을 먹었어요) or attach the verb ending -고 (영화를 보고 밥을 먹었어요). Writing 영화를 봤어요 하고 밥을 먹었어요 is a pure translation error and will not be understood as intended.",
              "One verb to watch: 만나다 takes 을/를, not 와/과. Say 친구를 만났어요. And when listing three or more items, Korean repeats the particle or uses the comma-like 그리고 at the end: 밥하고 김치하고 국을 먹었어요."
            ],
            examples: [
              { text: "밥하고 김치를 먹었어요.", roman: "Baphago gimchireul meogeosseoyo.", gloss: "I ate rice and kimchi. (하고 joining two nouns)" },
              { text: "저는 친구와 바다에 갔어요.", roman: "Jeoneun chinguwa badae gasseoyo.", gloss: "I went to the sea with a friend. (와 after a vowel, formal register)" },
              { text: "동생하고 같이 영화를 봤어요.", roman: "Dongsaenghago gachi yeonghwareul bwasseoyo.", gloss: "I saw a movie together with my younger sibling." },
              { text: "빵이랑 커피 주세요.", roman: "Ppangirang keopi juseyo.", gloss: "Bread and coffee, please. (casual 이랑 after a consonant)" },
              { text: "선생님과 학생들이 왔어요.", roman: "Seonsaengnimgwa haksaengdeuri wasseoyo.", gloss: "The teacher and the students came. (과 after a consonant, written register)" }
            ]
          },
          {
            name: "Time expressions and the particle 에",
            pattern: "지난 / 이번 / 다음 + 주 · 달 · 주말 — with 에 · 어제 · 오늘 · 내일 · 지금 — without 에",
            explanation: [
              "Korean builds relative time words on a simple three-way frame: <b>지난</b> (last), <b>이번</b> (this), <b>다음</b> (next), applied to 주 (week), 달 (month), 주말 (weekend) and 번 (time, occasion). So 지난주, 이번 주, 다음 주; 지난달, 이번 달, 다음 달; 지난 주말, 이번 주말, 다음 주말. Years are irregular: 작년 (last year), 올해 (this year), 내년 (next year), all with different roots. Note the spacing convention — 지난주 and 지난달 are written solid because they are lexicalised, while 이번 주 and 다음 주 keep the space.",
              "The particle <b>에</b> marks a point in time and attaches to most of these: 주말에, 지난주에, 토요일에, 아침에, 세 시에, 1월에, 여름에. But it is <b>forbidden</b> with the deictic time words that point directly from the moment of speaking: 어제, 오늘, 내일, 모레, 지금, 언제, 매일, 요즘. Say 어제 갔어요 and 내일 가요, never 어제에 or 내일에. If a phrase combines both types, the 에 attaches only to the non-deictic part: 오늘 아침에, 내일 저녁에.",
              "To bracket a span, use <b>부터</b> (from) and <b>까지</b> (until): 아홉 시부터 여섯 시까지 일해요 (I work from nine to six), 월요일부터 금요일까지 (Monday to Friday). For places, the pair is 에서 ... 까지 (서울에서 부산까지). Keep 부터 for time and 에서 for place as your default.",
              "Finally, frequency and sequence adverbs sit before the verb and need no particle at all: 어제, 그때 (at that time), 먼저 (first), 그다음에 (after that), 나중에 (later), 벌써 (already), 아직 (still, not yet). Stringing a weekend narrative together with 먼저, 그리고, 그다음에 and 나중에 is the fastest way to sound fluent well beyond your actual grammar."
            ],
            examples: [
              { text: "지난주에 부산에 갔어요.", roman: "Jinanjue Busane gasseoyo.", gloss: "I went to Busan last week. (지난주 takes 에)" },
              { text: "어제 사진을 많이 찍었어요.", roman: "Eoje sajineul mani jjigeosseoyo.", gloss: "I took a lot of photos yesterday. (어제 takes no 에)" },
              { text: "다음 주말에 여행 가요.", roman: "Daeum jumare yeohaeng gayo.", gloss: "I am going travelling next weekend." },
              { text: "아홉 시부터 여섯 시까지 일했어요.", roman: "Ahop sibuteo yeoseot sikkaji ilhaesseoyo.", gloss: "I worked from nine until six." },
              { text: "오늘 아침에 신문을 읽었어요.", roman: "Oneul achime sinmuneul ilgeosseoyo.", gloss: "I read the newspaper this morning. (에 goes on 아침, not on 오늘)" }
            ]
          },
          {
            name: "Linking sentences: 그리고, 그래서, 그렇지만",
            pattern: "Sentence 1. + 그리고 / 그래서 / 그렇지만 / 그런데 + Sentence 2.",
            explanation: [
              "Since 하고 and 와/과 cannot join clauses, Korean narrates with a small set of sentence-initial connectives, all built on the demonstrative stem 그- (that): <b>그리고</b> (and, and then), <b>그래서</b> (so, therefore), <b>그렇지만</b> and <b>하지만</b> (but, however), <b>그런데</b> (but, by the way — softer, often just changing the subject), <b>그러면 / 그럼</b> (then, in that case).",
              "They are transparent compounds of 그렇다 (to be so) plus an ending, which is why their meanings are so easy to predict: 그래서 is 그렇- plus the causal -아서 (being so, therefore); 그렇지만 is 그렇- plus the concessive -지만 (though it is so); 그러면 is 그렇- plus the conditional -(으)면 (if it is so). Learning the endings gives you the connectives for free — and later, when you attach -아서, -지만 and -(으)면 directly to verbs, you will already know what they mean.",
              "A caution about 그래서: it cannot be followed by a command or a suggestion. 비가 왔어요. 그래서 집에 있었어요 is fine, but for so let us stay home you need 그러니까 instead. Beginners can safely use 그래서 for statements of fact and leave 그러니까 for later.",
              "In natural speech Koreans compress these — 그리고 becomes 그리구 or just 그, 그런데 becomes 근데, 그러면 becomes 그럼. 근데 in particular is everywhere in conversation and worth recognising even though you should write 그런데."
            ],
            examples: [
              { text: "집에서 쉬었어요. 그리고 영화를 봤어요.", roman: "Jibeseo swieosseoyo. Geurigo yeonghwareul bwasseoyo.", gloss: "I rested at home. And then I watched a movie." },
              { text: "날씨가 좋았어요. 그래서 바다에 갔어요.", roman: "Nalssiga joasseoyo. Geuraeseo badae gasseoyo.", gloss: "The weather was good. So I went to the sea." },
              { text: "영화를 봤어요. 그렇지만 재미없었어요.", roman: "Yeonghwareul bwasseoyo. Geureochiman jaemieopseosseoyo.", gloss: "I watched a movie. But it was not interesting." },
              { text: "시간이 없어요. 그럼 다음에 만나요.", roman: "Sigani eopseoyo. Geureom daeume mannayo.", gloss: "I have no time. Then let us meet next time." }
            ]
          }
        ]
      },
      {
        type: "notes",
        title: "Culture note: what a Korean weekend actually looks like",
        body: [
          "주말에 뭐 했어요? is the Monday equivalent of the British conversation about the weather — a ritual opener rather than a real enquiry. A short, cheerful answer is what is wanted: 그냥 쉬었어요 (I just rested) is a perfectly acceptable complete reply, and a long itinerary is more information than the question was asking for. The mirror-image question 주말에 뭐 해요? gets asked on Fridays.",
          "등산 (hiking) is the national weekend activity, and it is more organised than the English word suggests. Korea is about seventy percent mountains, every city has a peak within reach by subway, and the trails on a Saturday morning are crowded with well-equipped hikers in bright technical gear. The ritual ends at the bottom with 막걸리 and 파전. Older Koreans in particular treat 등산 as a social institution — company hiking clubs are common, and declining an invitation from your team is not entirely free of consequence.",
          "The other pillars of leisure are indoor and largely nocturnal. 노래방 (song rooms — private karaoke booths rented by the hour) are on nearly every commercial block; 찜질방 (24-hour bathhouse-and-sauna complexes where you can also sleep) serve as cheap accommodation and family outings alike; PC방 are the gaming halls that made Korean e-sports possible. All three use the suffix 방 (房, room), a productive piece of Korean urban vocabulary — you will meet 만화방, 스터디방, 비디오방 too.",
          "For a bigger weekend, the KTX high-speed train makes almost the whole country a day trip: Seoul to Busan in under three hours, which is why the dialogue's trip to the sea is entirely plausible as a weekend plan. Domestic destinations cluster around 부산 and 강릉 for the sea, 제주 for the flight-away holiday, and 전주 or 경주 for food and history. Booking on the KTX app is standard, and the phrase you will need is the one Daniel used: 표를 샀어요."
        ]
      },
      {
        type: "practice",
        title: "연습: the past and the weekend",
        exercises: [
          {
            type: "mcq",
            prompt: "What is the past tense of 보다?",
            promptAudio: "봤어요",
            choices: ["보았어요 only", "봤어요 (from 보 + 았어요)", "보었어요", "봐았어요"],
            answer: 1,
            explain: "The bright vowel ㅗ takes -았-, and ㅗ + ㅏ fuses to ㅘ, giving 봤어요. The uncontracted 보았어요 is grammatical in careful writing, but 봤어요 is the normal form."
          },
          {
            type: "mcq",
            prompt: "Choose the correct past tense of 공부하다.",
            promptAudio: "공부했어요",
            choices: ["공부았어요", "공부하았어요", "공부했어요", "공부었어요"],
            answer: 2,
            explain: "하다 is irregular: 하 + 였 contracts to 했. Every noun + 하다 verb inherits this, so 일했어요, 운동했어요, 여행했어요."
          },
          {
            type: "mcq",
            prompt: "Which sentence is correct?",
            promptAudio: "어제 친구를 만났어요",
            choices: [
              "어제에 친구를 만났어요.",
              "어제 친구를 만났어요.",
              "어제 친구와 만났어요를.",
              "어제에 친구하고 만났어요."
            ],
            answer: 1,
            explain: "어제 never takes 에, and 만나다 takes the object particle 을/를 rather than a with-phrase. 친구를 만났어요 is the standard pattern."
          },
          {
            type: "mcq",
            prompt: "Which particle joins two nouns after a consonant in formal writing?",
            promptAudio: "밥과 김치",
            choices: ["와", "과", "하고만", "이랑요"],
            answer: 1,
            explain: "과 follows a consonant (밥과) and 와 follows a vowel (친구와) — the reverse of the 이/가, 은/는, 을/를 pattern, which is exactly why it is worth drilling."
          },
          {
            type: "typing",
            prompt: "Put 먹다 into the polite past tense.",
            answer: ["먹었어요", "먹었어요."],
            hint: "The stem vowel ㅓ is not bright, so the infix is -었-."
          },
          {
            type: "typing",
            prompt: "Write in Korean: 'I went to the sea with a friend.' (use 친구하고, 바다에, 가다)",
            answer: ["친구하고 바다에 갔어요", "친구하고 바다에 갔어요.", "저는 친구하고 바다에 갔어요", "저는 친구하고 바다에 갔어요."],
            hint: "하고 attaches straight to 친구 with no space, and 가 + 았어요 contracts."
          },
          {
            type: "typing",
            prompt: "Write in Korean: 'The weather was good.' (use 날씨, 좋다)",
            answer: ["날씨가 좋았어요", "날씨가 좋았어요.", "날씨는 좋았어요", "날씨는 좋았어요."],
            hint: "좋- has a bright vowel ㅗ, so the infix is -았-."
          },
          {
            type: "listening",
            prompt: "What did you hear?",
            audioText: "지난주에 영화를 봤어요",
            choices: [
              "I watched a movie last week.",
              "I will watch a movie next week.",
              "I read a book last week.",
              "I met a friend last weekend."
            ],
            answer: 0,
            explain: "지난주에 (last week) + 영화를 (movie, object) + 봤어요 (watched). The contracted 봤 is the past of 보다."
          },
          {
            type: "listening",
            prompt: "Which word did you hear?",
            audioText: "같이",
            choices: ["가치", "같이", "가티", "가지"],
            answer: 1,
            explain: "같이 is spelled with a ㅌ batchim but pronounced [가치] through palatalisation — ㅌ plus the suffix ㅣ becomes ㅊ. The spelling and the sound genuinely differ."
          },
          {
            type: "match",
            prompt: "Match each dictionary form with its polite past tense.",
            pairs: [
              { a: "가다", b: "갔어요" },
              { a: "먹다", b: "먹었어요" },
              { a: "하다", b: "했어요" },
              { a: "마시다", b: "마셨어요" },
              { a: "좋다", b: "좋았어요" },
              { a: "쉬다", b: "쉬었어요" }
            ]
          },
          {
            type: "order",
            prompt: "Arrange into a sentence: 'I rested at home yesterday.'",
            tokens: ["어제", "집에서", "쉬었어요"],
            answer: "어제 집에서 쉬었어요"
          },
          {
            type: "order",
            prompt: "Arrange into a sentence: 'The weather was good, so I took a lot of photos.'",
            tokens: ["날씨가", "좋았어요.", "그래서", "사진을", "많이", "찍었어요"],
            answer: "날씨가 좋았어요. 그래서 사진을 많이 찍었어요"
          }
        ]
      }
    ]
  });
})();
