window.CURRICULUM = window.CURRICULUM || {};
(function () {
  const C = window.CURRICULUM;
  C.korean = C.korean || { units: [] };

  C.korean.units.push({
    id: "ko-06",
    order: 6,
    title: "Food & Shopping",
    titleNative: "음식과 쇼핑",
    subtitle: "Order, ask prices, count things with the right counter, and say no with 안.",
    textbookBasis: [
      "Integrated Korean Beginning 1 (KLEAR), Lesson 5: At the market, 주세요 and prices",
      "Sogang Korean 1A, Unit 5: 얼마예요? and counting units",
      "Yonsei Korean 1, Lesson 6: 음식과 쇼핑",
      "Talk To Me In Korean Level 1, Lessons 13, 21, 24: 주세요, negation with 안, counters"
    ],
    overview: [
      "This unit takes you into a Korean market and a Korean restaurant with four tools: <b>주세요</b> (please give me), <b>얼마예요?</b> (how much is it?), the <b>counter system</b>, and the negative adverb <b>안</b>. Together they cover almost every transaction you will make in your first months in Korea.",
      "Counters are the one genuinely unfamiliar idea here. Korean, like Chinese and Japanese, cannot simply count nouns: you must say the equivalent of <i>three head of cattle</i> or <i>two sheets of paper</i> for everything. Worse, the choice of counter also decides which of the two Korean number systems you use. Unit 4 gave you both sets; this unit puts them to work.",
      "Vocabulary is built around real menu items and real market language, and the dialogue recycles 있어요, 이/가, 은/는, the -아/어요 present of Unit 5, and the Sino-Korean numbers you learned for telling time — this time counting money instead of minutes."
    ],
    sections: [
      {
        type: "dialogue",
        title: "대화: 냉면 두 개 주세요",
        context: "Yujin stops at a small noodle restaurant near the market for lunch with a friend and talks to the owner, whom she addresses as 아저씨.",
        lines: [
          { speaker: "유진", text: "아저씨, 이 가게는 냉면이 맛있어요?", roman: "Ajeossi, i gageneun naengmyeoni masisseoyo?", gloss: "Sir, is the cold noodle good at this shop?" },
          { speaker: "아저씨", text: "네, 아주 맛있어요. 불고기도 맛있어요.", roman: "Ne, aju masisseoyo. Bulgogido masisseoyo.", gloss: "Yes, it is very good. The bulgogi is good too." },
          { speaker: "유진", text: "냉면은 얼마예요?", roman: "Naengmyeoneun eolmayeyo?", gloss: "How much is the cold noodle?" },
          { speaker: "아저씨", text: "팔천 원이에요. 불고기는 만 이천 원이에요.", roman: "Palcheon wonieyo. Bulgogineun man icheon wonieyo.", gloss: "It is 8,000 won. The bulgogi is 12,000 won." },
          { speaker: "유진", text: "불고기는 조금 비싸요. 그럼 냉면 두 개 주세요.", roman: "Bulgogineun jogeum bissayo. Geureom naengmyeon du gae juseyo.", gloss: "The bulgogi is a little expensive. Then please give us two cold noodles." },
          { speaker: "아저씨", text: "네. 커피도 있어요. 커피 마셔요?", roman: "Ne. Keopido isseoyo. Keopi masyeoyo?", gloss: "All right. We have coffee too. Do you drink coffee?" },
          { speaker: "유진", text: "아니요, 저는 커피를 안 마셔요. 물 두 잔 주세요.", roman: "Aniyo, jeoneun keopireul an masyeoyo. Mul du jan juseyo.", gloss: "No, I do not drink coffee. Please give us two glasses of water." },
          { speaker: "아저씨", text: "네. 김치도 드세요. 김치는 서비스예요.", roman: "Ne. Gimchido deuseyo. Gimchineun seobiseuyeyo.", gloss: "All right. Have some kimchi too. The kimchi is on the house." },
          { speaker: "유진", text: "감사합니다. 모두 얼마예요?", roman: "Gamsahamnida. Modu eolmayeyo?", gloss: "Thank you. How much is it altogether?" },
          { speaker: "아저씨", text: "모두 만 육천 원이에요. 또 오세요.", roman: "Modu man yukcheon wonieyo. Tto oseyo.", gloss: "16,000 won in total. Please come again." }
        ]
      },
      {
        type: "vocab",
        title: "단어: at the market and the table",
        items: [
          {
            term: "음식",
            roman: "eumsik",
            gloss: "food, a dish",
            pos: "noun",
            example: { text: "한국 음식이 맛있어요.", roman: "Hanguk eumsigi masisseoyo.", gloss: "Korean food is delicious." },
            linguistics: {
              origin: "Sino-Korean",
              etymology: [
                "飮食 = 飮 (to drink; Middle Chinese *ʔimX) + 食 (to eat, food; Middle Chinese *zyik). Literally drink-and-eat, a coordinate compound of the kind Classical Chinese favours for abstract categories — compare 남녀 (男女, men and women) and 대소 (大小, size).",
                "Because the compound covers both halves of consumption, 음식 is the general word for food as a category. A single prepared dish is 요리 (料理) or 음식; ingredients are 식료품 (食料品) or 재료 (材料)."
              ],
              script: [
                "飮: the 食 (eat) radical plus 欠 (to open the mouth, yawn) — a person leaning over food with mouth open, hence drinking.",
                "食: a pictograph of a covered food vessel, one of the most productive radicals in the script (Kangxi radical 184). It appears in 飯 (rice/meal), 飽 (full), 餓 (hungry), 館 (hall, originally an eating house)."
              ],
              phonology: [
                "음식 is [음식]. The ㅁ batchim of 음 and the ㅅ onset of 식 do not interact.",
                "Note that 食 has two Sino-Korean readings, 식 and 사. The reading 사 survives in a handful of words such as 단사 (簞食). This kind of reading doublet usually reflects two separate borrowing waves from different Chinese periods or dialects."
              ],
              cognates: [
                "Korean words with 食: 식사 (食事, a meal), 식당 (食堂, restaurant), 식탁 (食卓, dining table), 간식 (間食, snack), 과식 (過食, overeating).",
                "Korean words with 飮: 음료 (飮料, beverage), 음주 (飮酒, drinking alcohol).",
                "Cross-language: Mandarin yǐnshí 饮食, Japanese inshoku 飲食 — identical compound and meaning in all three."
              ]
            }
          },
          {
            term: "김치",
            roman: "gimchi",
            gloss: "kimchi (fermented seasoned vegetables)",
            pos: "noun",
            example: { text: "김치는 조금 매워요.", roman: "Gimchineun jogeum maewoyo.", gloss: "Kimchi is a little spicy." },
            linguistics: {
              origin: "Sino-Korean (Korean-made compound), heavily nativised",
              etymology: [
                "Despite looking entirely native, 김치 descends from the hanja compound 沈菜 (침채), literally soaked vegetable — a Korean-made coinage, not a Chinese word. The earliest Hangul spelling is 딤ᄎᆡ (dimchʌi) in 16th-century texts.",
                "The development runs 딤ᄎᆡ → 짐ᄎᆡ → 김치. The first step is regular palatalisation: ㄷ becomes ㅈ before ㅣ, the same change that turned 뎔 into 절 (temple) and 됴타 into 좋다. The second step is a <b>hypercorrection</b>: because speakers knew that many 기-words had become 지-words, they wrongly restored 짐 to 김. Korean etymology rarely offers such a clean example of a sound change running backwards through speaker awareness.",
                "The older 침채 reading also survives in the dialect word 짐치 and in the compound 침채류 in food-science writing."
              ],
              script: [
                "沈: the water radical 氵 plus 冘 — to sink into water, hence to soak or steep.",
                "菜: the grass radical 艹 over 采 (to pick) — plants that are picked, hence vegetables. Modern Korean uses 채소 (菜蔬) for vegetables."
              ],
              phonology: [
                "김치 is [김치] with an aspirated ㅊ. Learners often produce an unaspirated [dʑ], which Korean ears hear as 김지.",
                "The word resists further change because it is now felt as a native word; the ㅁ batchim links smoothly into a following vowel: 김치가 [김치가], 김치를 [김치를]."
              ],
              cognates: [
                "Korean compounds: 김치찌개 (kimchi stew), 물김치 (water kimchi), 김장 (the annual kimchi-making, from 沈藏 or 김치-장), 배추김치, 총각김치.",
                "Not a cognate but worth knowing: Mandarin calls kimchi 泡菜 pàocài (soaked vegetable) — the same semantic idea built from different characters. Japanese simply borrows the Korean sound as キムチ kimuchi."
              ]
            }
          },
          {
            term: "불고기",
            roman: "bulgogi",
            gloss: "bulgogi (marinated grilled beef)",
            pos: "noun",
            example: { text: "불고기를 자주 먹어요.", roman: "Bulgogireul jaju meogeoyo.", gloss: "I eat bulgogi often." },
            linguistics: {
              origin: "native Korean (compound)",
              etymology: [
                "A transparent native compound: 불 (fire) + 고기 (meat). Fire-meat.",
                "불 comes from Middle Korean 블 (pɯl), which became 불 through the 17th-18th century labial rounding that also turned 믈 into 물 (water) and 플 into 풀 (grass). 고기 is Middle Korean 고기, meaning both meat and fish — the sense survives in 물고기 (fish, literally water-meat).",
                "The dish name itself is recent. 불고기 is attested in print only from the 1920s-30s, apparently first in the Pyongyang region, and spread nationally after the Korean War. The older written name for grilled meat was the Sino-Korean 너비아니 for a court dish or simply 산적 (散炙)."
              ],
              script: [
                "Two blocks plus two: 불 (ㅂ + ㅜ + ㄹ) 고 (ㄱ + ㅗ) 기 (ㄱ + ㅣ). Written purely in Hangul; there is no hanja spelling because both morphemes are native."
              ],
              phonology: [
                "불고기 is pronounced [불고기] with a plain ㄱ, not [불꼬기]. Many native compounds do tensify at the seam (물고기 is [물꼬기]), so the absence of tensification in 불고기 is worth memorising — it shows that compound tensification in Korean is lexically unpredictable.",
                "The ㄹ of 불 is a clear lateral before the following consonant."
              ],
              cognates: [
                "Words with 불: 불꽃 (flame, fire-flower), 모닥불 (bonfire), 촛불 (candlelight), 불타다 (to burn).",
                "Words with 고기: 물고기 (fish), 쇠고기/소고기 (beef), 돼지고기 (pork), 닭고기 (chicken).",
                "The Sino-Korean register word for meat is 육 (肉), as in 육류 (肉類, meats), 육회 (肉膾, beef tartare) — Mandarin ròu, Japanese niku."
              ]
            }
          },
          {
            term: "비빔밥",
            roman: "bibimbap",
            gloss: "bibimbap (rice mixed with vegetables and sauce)",
            pos: "noun",
            example: { text: "비빔밥 하나 주세요.", roman: "Bibimbap hana juseyo.", gloss: "One bibimbap, please." },
            linguistics: {
              origin: "native Korean (compound)",
              etymology: [
                "비비다 (to rub, to mix) + the deverbal nominaliser -ㅁ + 밥 (cooked rice) = mixing-rice. The middle -ㅁ is the same suffix that makes 웃음 from 웃다 and 걸음 from 걷다.",
                "The dish appears in 19th-century cookbooks under the Sino-Korean name 골동반 (骨董飯, literally antique-curio rice, i.e. a jumble), while the vernacular spelling 부븸밥 shows up in the 1800s recipe collection 시의전서. The modern spelling 비빔밥 was standardised in the 20th century."
              ],
              script: [
                "비 (ㅂ + ㅣ) 빔 (ㅂ + ㅣ + ㅁ) 밥 (ㅂ + ㅏ + ㅂ). Five ㅂ letters in three syllables — a useful drill for the lenis/voiced alternation, since the first is [p], the later ones [b]."
              ],
              phonology: [
                "Pronounced [비빔빱]: the ㅁ batchim triggers tensification of the following ㅂ. The official Revised Romanization spelling is nevertheless bibimbap, because RR romanises the standard morphological form for proper nouns and food names.",
                "This is why English menus write bibimbap while your ear hears bibimppap."
              ],
              cognates: [
                "From 비비다: 비빔국수 (mixed noodles), 비빔냉면 (spicy mixed cold noodles).",
                "From 밥: 볶음밥 (fried rice), 김밥 (seaweed rice roll), 덮밥 (rice with topping) — Korean builds dish names by stacking a cooking-method nominalisation onto 밥, exactly as here."
              ]
            }
          },
          {
            term: "냉면",
            roman: "naengmyeon",
            gloss: "cold buckwheat noodles",
            pos: "noun",
            example: { text: "여름에 냉면을 먹어요.", roman: "Yeoreume naengmyeoneul meogeoyo.", gloss: "I eat cold noodles in the summer." },
            linguistics: {
              origin: "Sino-Korean",
              etymology: [
                "冷麵 = 冷 (cold; Middle Chinese *lengX) + 麵 (wheat flour, noodles; Middle Chinese *mjienH). The dish is associated with Pyongyang and Hamhung and is documented in Joseon-period writing as a winter food, eaten cold from an icy 동치미 broth — the summer association is modern.",
                "The word is a perfect illustration of the Korean initial-law 두음법칙. Sino-Korean 冷 is underlyingly 랭; because Korean forbids initial ㄹ, it surfaces as 냉 in the South. North Korean orthography does not apply the rule, so Pyongyang spells the dish 랭면 — the same word, two spellings, one political border."
              ],
              script: [
                "冷: the ice radical 冫 (two strokes, a reduced 冰) plus 令 as phonetic. The ice radical also appears in 凍 (frozen) and 凉 (cool).",
                "麵: 麥 (wheat) as semantic plus 面 as phonetic. Simplified Chinese merges it into 面, which also means face — a homograph that Korean and Japanese never developed because they kept the full form."
              ],
              phonology: [
                "냉면 is [냉면]. The ㅇ batchim is the velar nasal [ŋ]; do not let it become an English -ng plus a separate [g].",
                "Beyond 두음법칙, note that Sino-Korean 面/麵 gives 면 with a y-glide preserved from Middle Chinese — Korean is generally conservative about medial glides that Mandarin has restructured."
              ],
              cognates: [
                "Korean words with 冷: 냉수 (冷水, cold water), 냉장고 (冷藏庫, refrigerator), 냉정하다 (冷靜, cool-headed).",
                "Korean words with 麵/面: 라면 (拉麵, ramyeon), 당면 (唐麵, glass noodles), 국수 is native by contrast.",
                "Cross-language: Mandarin lěngmiàn 冷面, Japanese reimen 冷麺 (which in Japan usually means the Korean dish, borrowed twice over)."
              ]
            }
          },
          {
            term: "커피",
            roman: "keopi",
            gloss: "coffee",
            pos: "noun",
            example: { text: "저는 커피를 안 마셔요.", roman: "Jeoneun keopireul an masyeoyo.", gloss: "I do not drink coffee." },
            linguistics: {
              origin: "loanword (English coffee)",
              etymology: [
                "The modern form 커피 is a direct borrowing from English coffee, standardised in the 20th century. But coffee reached Korea earlier and under other names: the late-Joseon court knew it as 가배 (珈琲), a hanja phonetic transcription that came through Japanese 珈琲 kōhī, and colloquially as 양탕국 — literally Western soup broth — because of its dark colour and bitterness.",
                "King Gojong is famously recorded as a coffee drinker in the 1890s, making Korea one of the earliest East Asian coffee cultures despite the modern boom looking like an import of the 2000s."
              ],
              script: [
                "커 (ㅋ + ㅓ) 피 (ㅍ + ㅣ). Both letters are aspirated: ㅋ is ㄱ with an added stroke, ㅍ is ㅂ with added strokes. Hangul writes aspiration by literally adding a line to the plain letter, so 커피 is visibly a word of puffed consonants."
              ],
              phonology: [
                "English /f/ has no Korean counterpart and is regularly mapped to ㅍ [pʰ]: coffee → 커피, file → 파일, coffee shop → 커피숍. Older borrowings via Japanese sometimes show ㅎ instead.",
                "The English stressed vowel [ɒ]/[ɔː] maps to ㅓ, and the final [i] is a full vowel in Korean, so a one-and-a-half-syllable English word becomes a crisp two-syllable Korean one."
              ],
              cognates: [
                "Korean coffee vocabulary is almost entirely borrowed: 아메리카노, 카페라테, 에스프레소, 카페 (from French café), 아이스커피, 믹스커피 (instant coffee sticks, a Korean coinage from English pieces).",
                "The old hanja form 珈琲 survives in Japan as the standard written form; in Korea 가배 is now purely historical."
              ]
            }
          },
          {
            term: "시장",
            roman: "sijang",
            gloss: "market",
            pos: "noun",
            example: { text: "시장에서 과일을 사요.", roman: "Sijangeseo gwaireul sayo.", gloss: "I buy fruit at the market." },
            linguistics: {
              origin: "Sino-Korean",
              etymology: [
                "市場 = 市 (market, city; Middle Chinese *dzyiX) + 場 (open ground, field, arena; Middle Chinese *drjang). Literally market-ground.",
                "The native Korean word for a market was 저자, still found in older literature and in the phrase 저잣거리 (marketplace street). 시장 displaced it as Sino-Korean vocabulary spread through administration and commerce.",
                "Modern Korean also uses 시장 for the abstract economic sense (노동 시장, the labour market) — a 19th-century extension shared across the Sinosphere as Western economics was translated."
              ],
              script: [
                "市: originally a pictograph of a marker or banner over a trading place. It also means city, as in 서울시 (Seoul City), 시내 (市內, downtown).",
                "場: the earth radical 土 plus 昜 (sun rising, bright) as phonetic — a cleared open ground. Appears in 공장 (工場, factory), 광장 (廣場, plaza), 운동장 (運動場, sports field)."
              ],
              phonology: [
                "시 has palatalised ㅅ, so it sounds like shi. 시장 is [시장] with the final velar nasal.",
                "Careful with the near-homophone pair: 시장 (市場, market) and 시장하다 (to be hungry, a polite verb of uncertain hanja) are unrelated despite sounding identical."
              ],
              cognates: [
                "Korean words with 市: 도시 (都市, city), 시민 (市民, citizen), 시장 (市長, mayor — same sound, different hanja 長), 시청 (市廳, city hall).",
                "Korean words with 場: 공장, 광장, 주차장 (駐車場, car park), 입장 (入場, entering a venue).",
                "Cross-language: Mandarin shìchǎng 市场, Japanese shijō / ichiba 市場 — the Japanese reading ichiba uses native kun readings for the same characters."
              ]
            }
          },
          {
            term: "가게",
            roman: "gage",
            gloss: "shop, store",
            pos: "noun",
            example: { text: "이 가게는 커피가 맛있어요.", roman: "I gageneun keopiga masisseoyo.", gloss: "The coffee at this shop is good." },
            linguistics: {
              origin: "Sino-Korean, fully nativised",
              etymology: [
                "가게 comes from 假家 (가가), literally temporary house — the makeshift stalls put up beside a market or a road in the Joseon period. The two identical syllables 가가 dissimilated to 가게, and the word lost all sense of temporariness, ending up as the ordinary term for a shop.",
                "Because nobody now perceives the hanja, 가게 is written only in Hangul and is treated as native vocabulary. It is a good example of how thoroughly a borrowing can be absorbed: compare 김치 above, which travelled the same road from 沈菜."
              ],
              script: [
                "가 (ㄱ + ㅏ) 게 (ㄱ + ㅔ). Note ㅔ versus ㅐ — a distinction most younger speakers no longer make in speech but which spelling still enforces."
              ],
              phonology: [
                "The vowel change 가가 → 가게 is dissimilation: identical adjacent syllables are unstable and one shifts. The same pressure produced 잔치 from 잔ᄎᆡ-type forms and lies behind many irregular Korean word histories.",
                "가게 is [가게], with the second ㄱ voiced to [g] between vowels."
              ],
              cognates: [
                "Korean shop words: 가게, 상점 (商店), 매장 (賣場), 편의점 (便宜店, convenience store), 슈퍼 (from English supermarket), 마트 (from English mart).",
                "Words with 假: 가정 (假定, assumption), 가면 (假面, mask), 가짜 (fake, from 假 + native suffix)."
              ]
            }
          },
          {
            term: "돈",
            roman: "don",
            gloss: "money",
            pos: "noun",
            example: { text: "돈이 없어요.", roman: "Doni eopseoyo.", gloss: "I have no money." },
            linguistics: {
              origin: "native Korean (etymology uncertain)",
              etymology: [
                "돈 is attested as 돈 in Middle Korean. Its ultimate origin is genuinely disputed and should not be presented as settled. Three proposals circulate: that it derives from 돌다 (to circulate, money being what goes around), that it comes from the traditional weight unit 돈 (about 3.75 g, still used for gold), or that it reflects a borrowing connected with 刀 (knife), from the knife-shaped bronze coinage of ancient Northeast Asia.",
                "The weight-unit hypothesis has the fewest problems, since pre-modern Korean coin values were reckoned by silver weight, but no proposal is proven. Mark this one uncertain."
              ],
              script: [
                "One block: ㄷ + ㅗ + ㄴ. Written only in Hangul; the weight unit 돈 also has no standard hanja, which is itself an argument for native origin."
              ],
              phonology: [
                "Final ㄴ links to a following vowel-initial particle: 돈이 is [도니], 돈을 is [도늘].",
                "Before ㅁ or ㅂ the ㄴ may assimilate in fast speech: 돈 많이 is often [돈 마니] with the ㅎ of 많 lost."
              ],
              cognates: [
                "Native compounds: 돈가스 is <i>not</i> one (that is Japanese 豚カツ tonkatsu, pork cutlet — a false friend). Real ones: 용돈 (pocket money, 用 + 돈), 잔돈 (change, small money), 돈벌이 (earning money), 목돈 (a lump sum).",
                "The Sino-Korean counterparts are 금전 (金錢), 화폐 (貨幣) and 대금 (代金), all formal."
              ]
            }
          },
          {
            term: "원",
            roman: "won",
            gloss: "won (Korean currency unit)",
            pos: "counter / noun",
            example: { text: "이거 얼마예요? 오천 원이에요.", roman: "Igeo eolmayeyo? Ocheon wonieyo.", gloss: "How much is this? It is 5,000 won." },
            linguistics: {
              origin: "Sino-Korean",
              etymology: [
                "원 is the hanja 圓, meaning round — a reference to the round silver coins of the late 19th century. Since 1962 the currency has been written in Hangul only, with no official hanja, but the etymology is not in doubt.",
                "The same character underlies all three modern East Asian currencies: Japanese 円 en, Chinese 元/圓 yuán, Korean 원 won. Japan simplified 圓 to 円, mainland China uses 元 as the everyday writing with 圓/圆 as the formal form, and Korea dropped the character altogether. One Middle Chinese word, *hjwen, three national currencies.",
                "Korea also briefly used the 환 (圜) between 1953 and 1962; 圜 is a related character meaning to encircle."
              ],
              script: [
                "圓: the enclosure radical 囗 around 員 (member, originally a round vessel mouth). The outer box is itself a picture of an enclosure — appropriate for a coin."
              ],
              phonology: [
                "원 is [원], a single syllable with the ㅝ diphthong. English speakers often produce two syllables (wo-n); keep it as one.",
                "In prices, 원 attaches to Sino-Korean numbers with no space in speech and a space in writing: 오천 원 [오처눤], with the ㄴ of 천 resyllabifying into 원."
              ],
              cognates: [
                "Korean words with 圓: 원형 (圓形, circular shape), 원주율 (圓周率, pi), 타원 (楕圓, ellipse).",
                "Currency cognates: Japanese 円 en, Mandarin 元 yuán, and the North Korean won, which is also 원 and also from 圓."
              ]
            }
          },
          {
            term: "개",
            roman: "gae",
            gloss: "counter for general objects (pieces, items)",
            pos: "counter",
            example: { text: "사과 세 개 주세요.", roman: "Sagwa se gae juseyo.", gloss: "Three apples, please." },
            linguistics: {
              origin: "Sino-Korean",
              etymology: [
                "The hanja is 個 (also written 箇 and, in simplified Chinese, 个), Middle Chinese *kaH. The original 箇 depicts bamboo (竹) with 固 as phonetic, and referred to individual bamboo stalks — the archetypal countable object in early Chinese material culture.",
                "From bamboo stalks the character generalised to a universal counter, exactly as it did in Chinese. 개 is the default Korean counter: when you do not know the right one, 개 will be understood, though it sounds crude for people (명), animals (마리) and flat things (장)."
              ],
              script: [
                "個: the person radical 亻 plus 固 (firm) as phonetic. 箇: the bamboo radical 竹 over the same phonetic. The two are variants of one word.",
                "Note the homophone trap for learners: the counter 개 (個) and the native noun 개 (dog) are written identically in Hangul. Only context distinguishes 세 개 (three items) from 개 세 마리 (three dogs)."
              ],
              phonology: [
                "개 takes <b>native</b> numbers in their pre-noun forms: 한 개, 두 개, 세 개, 네 개, 다섯 개. The mismatch — a Sino-Korean counter demanding native numerals — is normal in Korean and must simply be memorised.",
                "세 개 is [세개]; some speakers tensify to [세깨] in fast counting, but the standard is plain."
              ],
              cognates: [
                "Korean words with 個: 개인 (個人, individual), 개성 (個性, individuality), 개별 (個別, separate), 몇 개 (how many items).",
                "Cross-language: Mandarin gè 个 (the universal measure word), Japanese ko 個. All three languages use the same character as their default counter."
              ]
            }
          },
          {
            term: "병",
            roman: "byeong",
            gloss: "bottle; counter for bottles",
            pos: "noun / counter",
            example: { text: "물 두 병 주세요.", roman: "Mul du byeong juseyo.", gloss: "Two bottles of water, please." },
            linguistics: {
              origin: "Sino-Korean",
              etymology: [
                "甁 (also 瓶), Middle Chinese *beng, a vessel with a narrow neck. The word functions as both a noun (a bottle) and a counter (two bottles), a dual role common to Korean container words — 잔, 그릇, 봉지 all behave the same way.",
                "Do not confuse it with the homophone 병 (病, illness), a separate Sino-Korean morpheme with a completely different character. 병원 (病院, hospital) contains that one, not this one."
              ],
              script: [
                "甁: 幷 (to combine) as phonetic plus 瓦 (roof tile, fired clay) as semantic — a fired-clay vessel. The 瓦 radical marks ceramics throughout the script."
              ],
              phonology: [
                "병 is [병] with the velar nasal coda. The initial ㅂ is unaspirated.",
                "As a counter it takes native numbers: 한 병, 두 병, 세 병, 네 병. Beyond ten, speakers often switch to Sino-Korean numbers for large counts of bottles in commercial contexts."
              ],
              cognates: [
                "Korean words with 甁/瓶: 병맥주 (bottled beer), 꽃병 (flower vase), 물병 (water bottle), 보온병 (thermos).",
                "Cross-language: Mandarin píng 瓶, Japanese bin 瓶 — the same character, the same container sense, the same counter function."
              ]
            }
          },
          {
            term: "잔",
            roman: "jan",
            gloss: "cup, glass; counter for cupfuls",
            pos: "noun / counter",
            example: { text: "커피 한 잔 주세요.", roman: "Keopi han jan juseyo.", gloss: "One cup of coffee, please." },
            linguistics: {
              origin: "Sino-Korean",
              etymology: [
                "盞, Middle Chinese *tsrɛnX, a small shallow cup, especially for wine. In Korean it has become the everyday counter for any drink served in a cup or glass: 커피 한 잔, 물 두 잔, 소주 세 잔.",
                "The drinking-culture idiom 한잔하다 (written as one word) means to go for a drink, and 한잔 in that use no longer implies exactly one cup."
              ],
              script: [
                "盞: the dish radical 皿 at the bottom, with 戔 (small, slight) above as phonetic and partly semantic — a small dish. 皿 is a pictograph of a footed bowl seen from the side."
              ],
              phonology: [
                "잔 is [잔]. In 한 잔 the ㄴ of 한 and the ㅈ of 잔 are simply sequential: [한잔].",
                "Written as two words when counting (커피 한 잔) but as one word in the idiom (한잔하다). Korean spacing rules for counters are a common source of error even for natives."
              ],
              cognates: [
                "Korean words with 盞: 술잔 (wine cup), 찻잔 (teacup), 잔술 (drinks sold by the glass).",
                "Other Korean cup words: 컵 (from English cup), 사발 (沙鉢, a large bowl), 공기 (a small rice bowl).",
                "Cross-language: Mandarin zhǎn 盏 (still used for lamps and cups), Japanese san 盞, rare in modern use."
              ]
            }
          },
          {
            term: "마리",
            roman: "mari",
            gloss: "counter for animals",
            pos: "counter",
            example: { text: "우리 집에 고양이 두 마리가 있어요.", roman: "Uri jibe goyangi du mariga isseoyo.", gloss: "There are two cats at our house." },
            linguistics: {
              origin: "native Korean",
              etymology: [
                "In Middle Korean, 마리 meant <b>head</b> — the body part. Modern Korean split the word in two: the body part shifted its vowel and became 머리, while the older form 마리 survives frozen as the counter for animals. Counting livestock by heads is the same metaphor English uses in <i>fifty head of cattle</i>.",
                "This is a well-documented case of a single Middle Korean lexeme splitting into a full noun and a grammaticalised classifier — the sort of divergence that gives Korean its layers of native counters."
              ],
              script: [
                "마 (ㅁ + ㅏ) 리 (ㄹ + ㅣ). Purely native, so no hanja. Compare the Sino-Korean animal counter 두 (頭, head) used in livestock statistics — the same metaphor borrowed a second time from Chinese."
              ],
              phonology: [
                "The ㄹ between vowels is a flap [ɾ], so 마리 sounds like [ma-ɾi], close to the American English tapped t in <i>city</i>.",
                "마리 takes native numbers: 한 마리, 두 마리, 세 마리, 네 마리, 다섯 마리."
              ],
              cognates: [
                "Same historical root: 머리 (head), 머리카락 (a hair), 우두머리 (leader, boss).",
                "Other native counters worth learning together: 명 is Sino-Korean (名, people), but 사람 (person) and 분 (honorific person) do this job natively; 켤레 (pairs of shoes), 자루 (long-handled things) and 그루 (trees) are all native like 마리."
              ]
            }
          },
          {
            term: "사다",
            roman: "sada",
            gloss: "to buy",
            pos: "verb",
            example: { text: "시장에서 김치를 사요.", roman: "Sijangeseo gimchireul sayo.", gloss: "I buy kimchi at the market." },
            linguistics: {
              origin: "native Korean",
              etymology: [
                "Middle Korean 사다, stem 사-, unchanged in form and meaning since the 15th century. It forms a native pair with 팔다 (to sell), a pairing that is one of the surest signs of core inherited vocabulary — languages rarely borrow both halves of such a pair."
              ],
              script: [
                "사 (ㅅ + ㅏ) 다. The homophone 사 (四, four) from Unit 4 is a completely different Sino-Korean morpheme."
              ],
              phonology: [
                "The stem ends in ㅏ, a bright vowel, so the polite ending is absorbed: 사 + 아요 gives 사요.",
                "Korean ㅅ before ㅏ is a plain alveolar fricative [s], slightly weaker than English s and without the strong friction; before ㅣ it palatalises to [ɕ]."
              ],
              cognates: [
                "Same root: 사들이다 (to buy up), 되사다 (to buy back), 장을 보다 is the idiom for doing the grocery shopping (literally to see the market).",
                "The Sino-Korean counterparts are 구매하다 (購買) and 구입하다 (購入), used on receipts and in business Korean."
              ]
            }
          },
          {
            term: "팔다",
            roman: "palda",
            gloss: "to sell",
            pos: "verb",
            example: { text: "저 가게는 냉면을 팔아요.", roman: "Jeo gageneun naengmyeoneul parayo.", gloss: "That shop sells cold noodles." },
            linguistics: {
              origin: "native Korean",
              etymology: [
                "Middle Korean ᄑᆞᆯ다 (pʌlda), with the vowel arae-a. When arae-a merged with ㅏ in initial syllables during the 18th century, the word became 팔다. The Middle Korean spelling is visible in early Hangul texts and is one of the easiest arae-a words to recognise.",
                "The idiom 눈을 팔다 (to sell one's eyes) means to let one's attention wander, and 이름을 팔다 means to trade on one's reputation — the verb has the same figurative reach as English sell."
              ],
              script: [
                "팔 (ㅍ + ㅏ + ㄹ) 다. The homophone 팔 (八, eight) and 팔 (arm) are unrelated — three distinct morphemes sharing one spelling."
              ],
              phonology: [
                "팔다 belongs to the <b>ㄹ-dropping</b> class: the stem ㄹ disappears before endings starting with ㄴ, ㅂ, ㅅ or the ending -(으)ㅂ니다. So 팝니다 (formal present), 파세요 (polite request), 파는 (modifier form) — but 팔아요 keeps it, because the ending begins with a vowel.",
                "팔아요 is pronounced [파라요] with resyllabification, romanised parayo."
              ],
              cognates: [
                "Same root: 팔리다 (to be sold), 판매 is Sino-Korean by contrast, 헐값에 팔다 (to sell cheap), 바가지를 쓰다 is the idiom for being overcharged.",
                "Sino-Korean counterparts: 판매하다 (販賣), 매도 (賣渡). The character 賣 (to sell) pairs with 買 (to buy) — Mandarin mài and mǎi, distinguished only by tone, a famous pitfall for Chinese learners that Korean avoids entirely by using native verbs."
              ]
            }
          },
          {
            term: "주다",
            roman: "juda",
            gloss: "to give",
            pos: "verb",
            example: { text: "친구가 저에게 책을 줘요.", roman: "Chinguga jeoege chaegeul jwoyo.", gloss: "My friend gives me a book." },
            linguistics: {
              origin: "native Korean",
              etymology: [
                "Middle Korean 주다, stem 주-. Beyond its literal sense, 주다 is one of Korean's most important auxiliary verbs: attached to another verb as -아/어 주다 it means to do something for someone's benefit, which is the machinery behind every polite request in the language.",
                "Korean grammaticalises the direction of giving with three verbs: 주다 (give, neutral or downward), 드리다 (give humbly, to a superior), and 주시다 (give honorifically, when the giver is a superior). You will meet the full system in Unit 8."
              ],
              script: [
                "주 (ㅈ + ㅜ) 다. The stem vowel ㅜ matters for conjugation."
              ],
              phonology: [
                "Stem-final ㅜ plus -어요 fuses to ㅝ: 주 + 어요 gives 줘요. The uncontracted 주어요 is grammatical and appears in careful writing, but 줘요 is what people say.",
                "주세요, the request form, is 주- + the honorific -시- + -어요, contracted through 주시어요 to 주셔요 and then to the now-standard 주세요."
              ],
              cognates: [
                "Same root: 주고받다 (to exchange, give-and-take), 나눠주다 (to hand out), 빌려주다 (to lend, literally to borrow-give).",
                "The Sino-Korean formal equivalents are 제공하다 (提供, to provide) and 지급하다 (支給, to disburse)."
              ]
            }
          },
          {
            term: "맛있다",
            roman: "masitda",
            gloss: "to be delicious, to taste good",
            pos: "adjective (descriptive verb)",
            example: { text: "이 비빔밥은 정말 맛있어요.", roman: "I bibimbabeun jeongmal masisseoyo.", gloss: "This bibimbap is really delicious." },
            linguistics: {
              origin: "native Korean (compound)",
              etymology: [
                "맛 (taste) + 있다 (to exist) — literally taste exists. Its opposite is built the same way: 맛없다 (taste does not exist) = to taste bad. Korean forms a whole family of adjectives on this template: 재미있다/재미없다 (interesting/boring), 멋있다/멋없다 (stylish/drab), 관심 있다 (interested).",
                "맛 is Middle Korean 맛, a native noun. The verb 맛보다 (to taste, literally to see the taste) and the adjective 맛나다 (to taste good, literally taste comes out) share it."
              ],
              script: [
                "맛 (ㅁ + ㅏ + ㅅ batchim) + 있 (ㅇ + ㅣ + ㅆ batchim) + 다. The compound is written as one word with no space, which distinguishes 맛있다 (delicious) from 맛 있다 as a phrase — Korean spacing carries real meaning."
              ],
              phonology: [
                "맛있다 has <b>two standard pronunciations</b>: [마딛따] and [마싣따]. The first follows the general rule that a ㅅ batchim neutralises to [t] before a following word; the second treats the compound as a single word and lets the ㅅ resyllabify. The National Institute of Korean Language accepts both, an unusually explicit admission of variation in the standard.",
                "In the polite form, 맛있어요 is [마시써요] for nearly all speakers, romanised masisseoyo."
              ],
              cognates: [
                "Same family: 맛없다 [마덥따] (to taste bad), 맛보다 (to taste), 입맛 (appetite), 뒷맛 (aftertaste).",
                "The Sino-Korean register word is 미 (味), as in 미각 (味覺, sense of taste), 조미료 (調味料, seasoning), 흥미 (興味, interest) — Mandarin wèi, Japanese mi/aji."
              ]
            }
          },
          {
            term: "비싸다",
            roman: "bissada",
            gloss: "to be expensive",
            pos: "adjective (descriptive verb)",
            example: { text: "불고기는 조금 비싸요.", roman: "Bulgogineun jogeum bissayo.", gloss: "The bulgogi is a little expensive." },
            linguistics: {
              origin: "native Korean (compound)",
              etymology: [
                "Middle Korean 빋ᄊᆞ다: 빋 (price, debt) + ᄊᆞ다 (to be worth). The original meaning was <b>to be worth its price</b>, i.e. good value — which is why the simplex 싸다 originally meant worthy of the price rather than cheap.",
                "Over the Early Modern period the semantics flipped: 비싸다 came to mean costly and the bare 싸다 came to mean cheap. The two words now mean the opposite of what their parts suggest, and 싸다 means almost the reverse of its own etymology. This is one of the most cited semantic reversals in Korean historical lexicography.",
                "The old noun 빋 survives as modern 빚 (debt)."
              ],
              script: [
                "비 (ㅂ + ㅣ) 싸 (ㅆ + ㅏ) 다. The tense ㅆ is the modern reflex of the Middle Korean cluster in 빋ᄊᆞ다, where the ㄷ of 빋 and the ㅅ of ᄊᆞ다 collapsed together."
              ],
              phonology: [
                "The stem 비싸- ends in ㅏ, so the ending is absorbed: 비싸 + 아요 gives 비싸요.",
                "Korean tense ㅆ is articulated with a tightened glottis and no aspiration; English speakers who substitute a plain [s] will be heard as saying 비사요, which is not a word."
              ],
              cognates: [
                "Antonym and relative: 싸다 (to be cheap), 값싸다 (cheap, with the noun 값 price made explicit), 비싸게 굴다 (to play hard to get, literally to behave expensively).",
                "Related nouns: 값 (price, native), 가격 (價格, price, Sino-Korean), 빚 (debt, from the same Middle Korean 빋)."
              ]
            }
          },
          {
            term: "얼마",
            roman: "eolma",
            gloss: "how much, how many",
            pos: "interrogative pronoun",
            example: { text: "이거 얼마예요?", roman: "Igeo eolmayeyo?", gloss: "How much is this?" },
            linguistics: {
              origin: "native Korean",
              etymology: [
                "Attested in Middle Korean as 언마 / 엇마. The first element belongs to the native interrogative stem seen in 어느 (which), 어디 (where), 어떻게 (how) and 언제 (when) — all beginning with 어-. The second element appears to be a quantity morpheme, but its precise identity is not established, so the internal analysis should be treated as probable rather than certain.",
                "The modern 얼마 covers both amount of money and quantity generally: 얼마예요? (how much does it cost?), 얼마나 걸려요? (how long does it take?), 얼마 안 됐어요 (it has not been long)."
              ],
              script: [
                "얼 (ㅇ + ㅓ + ㄹ) 마 (ㅁ + ㅏ). The ㄹ batchim of the Middle Korean form 언마 was originally ㄴ; the shift to ㄹ before ㅁ is not fully explained."
              ],
              phonology: [
                "얼마 is [얼마] with the ㄹ as a lateral before ㅁ.",
                "얼마예요 is [얼마예요]; the copula 예요 attaches directly because 얼마 ends in a vowel. Had it ended in a consonant the form would be 이에요, as in 얼마입니까 in the formal style."
              ],
              cognates: [
                "The 어- interrogative family: 어디 (where), 어느 (which), 어떻게 (how), 언제 (when), 어때요 (how is it), 얼마나 (how much/many, intensified).",
                "Compare the Sino-Korean interrogative 하 (何) in 하여간 (何如間, anyway) — Korean borrowed a parallel interrogative set that survives only in fossilised expressions."
              ]
            }
          }
        ]
      },
      {
        type: "grammar",
        title: "문법: buying, counting, refusing",
        points: [
          {
            name: "Requests with 주세요",
            pattern: "Noun (+ number + counter) + 주세요 · Verb stem + -아/어 + 주세요",
            explanation: [
              "주세요 means please give me and is the single most useful phrase for a shopper or diner in Korea. Put the thing you want in front of it, with no particle needed: 냉면 주세요, 물 주세요, 김치 주세요. If you are specifying a quantity, the number and counter go between: 냉면 두 개 주세요, 커피 한 잔 주세요, 물 세 병 주세요.",
              "Historically 주세요 is 주다 (to give) plus the honorific infix -시- plus the polite ending -어요, contracting through 주시어요 and 주셔요 to today's 주세요. You are not just saying give me — you are elevating the person doing the giving. That is why 주세요 is polite enough for a stranger and a shopkeeper, yet not stiff. The full honorific system behind it comes in Unit 8.",
              "The second, more powerful use is <b>-아/어 주세요</b>, attached to a verb rather than a noun: please do X for me. Take the -아/어요 form you learned in Unit 5, drop the 요, and add 주세요. 보여 주세요 (please show me), 가르쳐 주세요 (please teach me), 기다려 주세요 (please wait), 다시 말해 주세요 (please say it again). This construction encodes benefit — the action is performed for the speaker — which is why leaving 주다 out (보여요) sounds like a statement rather than a request.",
              "A blunter alternative you will hear in restaurants is 여기요! or 저기요! to call the server, followed by the order. Shouting 아저씨 or 아주머니 is also normal and not rude, though younger speakers increasingly prefer 사장님 or a simple 여기요."
            ],
            examples: [
              { text: "비빔밥 하나 주세요.", roman: "Bibimbap hana juseyo.", gloss: "One bibimbap, please. (하나 can stand alone before 주세요 without a counter)" },
              { text: "물 두 병 주세요.", roman: "Mul du byeong juseyo.", gloss: "Two bottles of water, please. (number + counter between noun and 주세요)" },
              { text: "다시 말해 주세요.", roman: "Dasi malhae juseyo.", gloss: "Please say that again. (verb + -아/어 주세요)" },
              { text: "조금 기다려 주세요.", roman: "Jogeum gidaryeo juseyo.", gloss: "Please wait a moment." }
            ]
          },
          {
            name: "Prices: 얼마예요? and Sino-Korean money numbers",
            pattern: "Noun + 이/가 or 은/는 + 얼마예요? · Answer: Sino-number + 원 + 이에요",
            explanation: [
              "To ask a price, point and say 이거 얼마예요? (how much is this?) or name the item: 냉면은 얼마예요?. The answer takes the copula: 팔천 원이에요. Since 원 ends in a consonant, the copula is 이에요, not 예요 — the same alternation you learned in Unit 1.",
              "Money always uses <b>Sino-Korean numbers</b> (일, 이, 삼, 사, 오, 육, 칠, 팔, 구, 십), never native ones. The place-value words are 십 (10), 백 (100), 천 (1,000) and — this is the one that trips up English speakers — <b>만 (10,000)</b>. East Asian numbering groups by ten thousands, not thousands, so 10,000 is 만, 100,000 is 십만, 1,000,000 is 백만 and 10,000,000 is 천만. A Korean reading 1,500,000 sees 백오십만, not one-point-five million.",
              "Two conventions to memorise. First, you do not say 일 before 만, 천, 백 or 십 when it stands at the front: 10,000 won is 만 원, not 일만 원; 1,200 is 천이백, not 일천이백. Second, prices are read as running numbers with no word for and: 만 육천 원 is 16,000 won, 이만 삼천오백 원 is 23,500 won.",
              "Related shopping questions worth banking now: 이거 뭐예요? (what is this?), 좀 깎아 주세요 (please knock the price down — normal at a traditional market, never at a shop with price tags), 카드 돼요? (do you take cards?), and 봉투 주세요 (please give me a bag, now usually charged for)."
            ],
            examples: [
              { text: "이거 얼마예요?", roman: "Igeo eolmayeyo?", gloss: "How much is this?" },
              { text: "삼천오백 원이에요.", roman: "Samcheonobaek wonieyo.", gloss: "It is 3,500 won." },
              { text: "만 원이에요.", roman: "Man wonieyo.", gloss: "It is 10,000 won. (never 일만 원)" },
              { text: "모두 이만 사천 원이에요.", roman: "Modu iman sacheon wonieyo.", gloss: "It is 24,000 won altogether." },
              { text: "커피는 얼마예요? 사천 원이에요.", roman: "Keopineun eolmayeyo? Sacheon wonieyo.", gloss: "How much is the coffee? It is 4,000 won." }
            ]
          },
          {
            name: "Counters: number + measure word",
            pattern: "Noun + Native-number + Counter (사과 세 개) · counters requiring Sino-numbers take those instead",
            explanation: [
              "Korean cannot count a noun directly. You cannot say 사과 셋; you must say 사과 세 개, apple three pieces. The standard order is <b>noun, then number, then counter</b>, with the noun keeping any particle it needs at the front of the phrase: 사과를 세 개 샀어요, or the tighter 사과 세 개를 샀어요. Both are heard; the first is more colloquial.",
              "Most everyday counters take <b>native</b> numbers, and the first four numbers plus twenty take special short pre-noun forms: 하나 → <b>한</b>, 둘 → <b>두</b>, 셋 → <b>세</b>, 넷 → <b>네</b>, 스물 → <b>스무</b>. So it is 한 개, 두 병, 세 잔, 네 마리, 스무 살 — never 하나 개 or 스물 살. From 다섯 onward the number is unchanged: 다섯 개, 여섯 병, 열 잔.",
              "The counters you need first: <b>개</b> (things), <b>명</b> (people, plain), <b>분</b> (people, honorific), <b>마리</b> (animals), <b>병</b> (bottles), <b>잔</b> (cups), <b>그릇</b> (bowls of food), <b>권</b> (books), <b>장</b> (flat sheets — paper, tickets), <b>대</b> (vehicles and machines), <b>켤레</b> (pairs of footwear), <b>살</b> (years of age). A second group demands <b>Sino-Korean</b> numbers instead: 원 (won), 분 (minutes), 년 (years), 월 (months of the calendar), 일 (days of the month), 층 (floors), 번 (numbered items). This is exactly the split you met in Unit 4 with 시 (native: 세 시) versus 분 (Sino: 삼십 분).",
              "To ask how many, use 몇 plus the counter: 몇 개예요? (how many pieces?), 몇 명이에요? (how many people?), 몇 병이에요? (how many bottles?) Note that 몇 시 (what time) and 몇 살 (how old) follow the same template. When you truly do not know the correct counter, 개 is the safe default for objects and 명 for people."
            ],
            examples: [
              { text: "사과 세 개 주세요.", roman: "Sagwa se gae juseyo.", gloss: "Three apples, please. (셋 becomes 세 before a counter)" },
              { text: "우리 집에 고양이 두 마리가 있어요.", roman: "Uri jibe goyangi du mariga isseoyo.", gloss: "We have two cats at home." },
              { text: "물 한 병 주세요. 커피도 두 잔 주세요.", roman: "Mul han byeong juseyo. Keopido du jan juseyo.", gloss: "One bottle of water, please. Two cups of coffee as well, please." },
              { text: "책을 다섯 권 샀어요.", roman: "Chaegeul daseot gwon sasseoyo.", gloss: "I bought five books. (다섯 does not shorten)" },
              { text: "모두 몇 명이에요?", roman: "Modu myeot myeongieyo?", gloss: "How many people are there in total?" }
            ]
          },
          {
            name: "Negation with 안 (and -지 않다)",
            pattern: "안 + Verb · Noun + 안 + 해요 for 하다 compounds · Verb stem + -지 않아요",
            explanation: [
              "The everyday negator is the adverb <b>안</b>, placed immediately before the verb: 안 먹어요 (I do not eat), 안 비싸요 (it is not expensive), 커피를 안 마셔요 (I do not drink coffee). It is written with a space, and it negates the verb, not the whole sentence, so anything before it stays as it was.",
              "One rule catches every learner. For <b>하다 compounds</b>, 안 does not go in front of the whole word — it splits the compound and sits before 하다: 공부해요 becomes 공부 안 해요, 운동해요 becomes 운동 안 해요, 일해요 becomes 일 안 해요. Saying 안 공부해요 is a classic foreign-accent mistake. The split applies only when the part before 하다 is a genuine noun. Verbs and adjectives whose 하다 is not attached to a noun never split: 좋아하다 gives 안 좋아해요 (not 좋아 안 해요), and adjectives such as 유명하다 and 조용하다 give 안 유명해요 and 안 조용해요.",
              "The longer negation <b>-지 않다</b> attaches to the stem and conjugates normally: 먹지 않아요, 비싸지 않아요, 공부하지 않아요 (no splitting here). It means the same thing but sounds more measured and is preferred in writing and in careful or formal speech. In conversation 안 dominates.",
              "Three verbs refuse 안 and use a separate negative word instead: 있다 → <b>없다</b> (not 안 있다), 알다 → <b>모르다</b> (not 안 알다), and 맛있다 → <b>맛없다</b>. Finally, keep 안 distinct from <b>못</b> (cannot, lacking ability or permission): 안 가요 means I choose not to go, 못 가요 means I am unable to go. 못 is pronounced [몯] before a consonant and links as [모ㄷ] before a vowel — 못 가요 is [몯까요]."
            ],
            examples: [
              { text: "저는 커피를 안 마셔요.", roman: "Jeoneun keopireul an masyeoyo.", gloss: "I do not drink coffee." },
              { text: "이 가게는 안 비싸요.", roman: "I gageneun an bissayo.", gloss: "This shop is not expensive." },
              { text: "오늘은 공부 안 해요.", roman: "Oneureun gongbu an haeyo.", gloss: "I am not studying today. (하다 compound splits)" },
              { text: "저는 김치를 먹지 않아요.", roman: "Jeoneun gimchireul meokji anayo.", gloss: "I do not eat kimchi. (the longer, more formal negation)" },
              { text: "돈이 없어요. 그래서 안 사요.", roman: "Doni eopseoyo. Geuraeseo an sayo.", gloss: "I have no money. So I am not buying it. (없다, not 안 있다)" }
            ]
          }
        ]
      },
      {
        type: "notes",
        title: "Culture note: 시장, 반찬 and how money moves",
        body: [
          "Korea runs two parallel retail worlds. The 전통시장 (traditional market) — Gwangjang, Namdaemun, Tongin and the covered market in every provincial town — is a place of loose produce, cash, banter and negotiable prices; the 마트 and 편의점 are fixed-price, card-only, and open at all hours. Haggling (깎아 주세요) is expected at a market stall with no price tag and faintly rude anywhere with one. Market vendors will also throw in a 덤 — a handful extra — for a friendly customer, which is a courtesy, not a discount you can demand.",
          "Restaurants operate on a logic that surprises most visitors: the 반찬 (side dishes) that arrive unordered are free, and refills are free too. Ask with 반찬 좀 더 주세요 and they will come. Water is free and usually self-service from a dispenser by the door, along with your own cutlery from a drawer in the table. What the owner in this unit's dialogue calls 서비스 — an English word used in a wholly Korean way — means something given on the house, and offering it is a form of hospitality rather than a promotion.",
          "Tipping does not exist. Leaving money on the table will get you chased down the street. Prices on the menu are what you pay, tax included, and in most older restaurants you pay at the counter by the door on the way out rather than at the table. Card acceptance is close to universal even at street stalls, though the smallest market vendors still prefer cash.",
          "Address terms matter more than they do in English. A middle-aged male shopkeeper is 아저씨, a middle-aged woman 아주머니 or the warmer 이모 (literally maternal aunt, common in casual eateries), and an owner of either sex can be 사장님. Younger Koreans increasingly avoid all of these in favour of a neutral 저기요 or 여기요, since guessing someone's age category out loud carries risk. When in doubt, 여기요 is always safe."
        ]
      },
      {
        type: "practice",
        title: "연습: ordering and counting",
        exercises: [
          {
            type: "mcq",
            prompt: "How do you ask the price of something?",
            promptAudio: "이거 얼마예요?",
            choices: ["이거 뭐예요?", "이거 얼마예요?", "이거 어디예요?", "이거 몇 개예요?"],
            answer: 1,
            explain: "얼마 means how much. 뭐예요 asks what it is, 어디예요 asks where it is, and 몇 개예요 asks how many pieces there are."
          },
          {
            type: "mcq",
            prompt: "Choose the correct counting phrase for 'two bottles of water'.",
            promptAudio: "물 두 병",
            choices: ["물 둘 병", "물 두 병", "물 이 병", "물 두 개 병"],
            answer: 1,
            explain: "병 takes native numbers, and 둘 shortens to 두 before a counter. 이 is a Sino-Korean number, which 병 does not accept."
          },
          {
            type: "mcq",
            prompt: "Which is the correct negative of 공부해요?",
            promptAudio: "공부 안 해요",
            choices: ["안 공부해요", "공부 안 해요", "공부해 안 요", "공부안해요"],
            answer: 1,
            explain: "하다 compounds split around 안: the noun stays in front and 안 goes immediately before 해요. 안 공부해요 is the single most common learner error in this unit."
          },
          {
            type: "mcq",
            prompt: "How do you read the price 16,000원?",
            promptAudio: "만 육천 원",
            choices: ["십육천 원", "만 육천 원", "일만 육천 원", "십육 원"],
            answer: 1,
            explain: "East Asian numbers group by 만 (10,000), so 16,000 is 만 + 육천. The leading 일 is dropped, which rules out 일만 육천 원 in normal speech."
          },
          {
            type: "typing",
            prompt: "Order one cup of coffee. (커피 · 한 잔 · 주세요)",
            answer: ["커피 한 잔 주세요", "커피 한 잔 주세요.", "커피 한잔 주세요"],
            hint: "Item, then number, then counter, then 주세요."
          },
          {
            type: "typing",
            prompt: "Write in Korean: 'I do not eat kimchi.' (use 저는, 김치, 안)",
            answer: ["저는 김치를 안 먹어요", "저는 김치를 안 먹어요.", "김치를 안 먹어요", "김치 안 먹어요"],
            hint: "안 sits immediately before the verb."
          },
          {
            type: "typing",
            prompt: "Type the Korean for 'It is 8,000 won.'",
            answer: ["팔천 원이에요", "팔천 원이에요.", "팔천원이에요"],
            hint: "원 ends in a consonant, so the copula is 이에요."
          },
          {
            type: "listening",
            prompt: "What was ordered?",
            audioText: "냉면 두 개 주세요",
            choices: [
              "Two cold noodles, please.",
              "Two cups of coffee, please.",
              "One bibimbap, please.",
              "How much is the cold noodle?"
            ],
            answer: 0,
            explain: "냉면 (cold noodles) + 두 개 (two items) + 주세요 (please give me)."
          },
          {
            type: "listening",
            prompt: "What price did you hear?",
            audioText: "이만 삼천 원이에요",
            choices: ["2,300 won", "23,000 won", "230,000 won", "2,030 won"],
            answer: 1,
            explain: "이만 is 2 x 10,000 = 20,000 and 삼천 is 3,000, giving 23,000. Remember that 만 is the 10,000 unit, not 1,000."
          },
          {
            type: "match",
            prompt: "Match each noun with the counter it takes.",
            pairs: [
              { a: "고양이", b: "마리" },
              { a: "커피", b: "잔" },
              { a: "물", b: "병" },
              { a: "책", b: "권" },
              { a: "사과", b: "개" },
              { a: "친구", b: "명" }
            ]
          },
          {
            type: "order",
            prompt: "Arrange into a sentence: 'Please give me three apples.'",
            tokens: ["사과", "세", "개", "주세요"],
            answer: "사과 세 개 주세요"
          },
          {
            type: "order",
            prompt: "Arrange into a sentence: 'This shop is not expensive.'",
            tokens: ["이", "가게는", "안", "비싸요"],
            answer: "이 가게는 안 비싸요"
          }
        ]
      }
    ]
  });
})();
