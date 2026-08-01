window.CURRICULUM = window.CURRICULUM || {};
(function () {
  const C = window.CURRICULUM;
  C.korean = C.korean || { units: [] };

  C.korean.units.push({
    id: "ko-02",
    order: 2,
    title: "The Classroom & Everyday Objects",
    titleNative: "교실과 물건",
    subtitle: "Point at things and name them with 이것/그것/저것, mark subjects with 이/가, and say what exists or does not with 있어요/없어요.",
    textbookBasis: [
      "Integrated Korean: Beginning 1 (KLEAR), 3rd ed., Lesson 2 — 학교 (Campus) and Lesson 3 vocabulary of objects",
      "Sogang Korean 1A, Unit 2 — 이거 뭐예요? / 있어요, 없어요",
      "Yonsei Korean 1, Lesson 2 — 교실 물건과 지시대명사",
      "Talk To Me In Korean Level 1, Lessons 6, 9, 10 (이거/그거/저거, 있어요/없어요, 주격 조사)"
    ],
    overview: [
      "Once you can say <i>X is Y</i>, the next thing any language learner needs is a way to point. Korean's pointing system is a neat three-way one: <b>이것</b> for something near the speaker, <b>그것</b> for something near the listener or already mentioned, and <b>저것</b> for something away from both. English collapses this into <i>this</i> and <i>that</i>, so the middle term 그 is the one worth extra attention.",
      "You also meet the <b>subject particle 이/가</b> and set it against the topic particle 은/는 from unit 1. And you learn the pair of existential verbs <b>있어요</b> and <b>없어요</b>, which Korean uses for both <i>there is / there is not</i> and <i>I have / I do not have</i> — a single construction covering two English ones.",
      "The vocabulary is classroom equipment, chosen so that the linguistics is unusually rich: 책 is a picture of bamboo slips tied with a cord, 지우개 is built from a verb plus a native tool-making suffix, 가방 is a loan whose own origin is genuinely disputed, and 핸드폰 is a word that sounds English but was assembled in Korea."
    ],
    sections: [
      {
        type: "dialogue",
        title: "Dialogue: 이거 뭐예요? — Before class starts",
        context: "Sarah has arrived in the classroom a few minutes early. Park Jihyeon, another student in the class, sits down beside her and notices something on the desk.",
        lines: [
          { speaker: "지현", text: "사라 씨, 안녕하세요? 이거 뭐예요?", roman: "sara ssi, annyeonghaseyo? igeo mwoyeyo?", gloss: "Hello, Sarah. What is this?" },
          { speaker: "사라", text: "그건 제 지우개예요.", roman: "geugeon je jiugaeyeyo.", gloss: "That (near you) is my eraser." },
          { speaker: "지현", text: "아, 지우개예요? 저는 지우개가 없어요.", roman: "a, jiugaeyeyo? jeoneun jiugaega eopseoyo.", gloss: "Oh, an eraser? I do not have an eraser." },
          { speaker: "사라", text: "제 지우개가 여기 있어요. 그리고 연필도 있어요.", roman: "je jiugaega yeogi isseoyo. geurigo yeonpildo isseoyo.", gloss: "My eraser is right here. And I have a pencil too." },
          { speaker: "지현", text: "감사합니다. 그런데 저 가방은 누구 거예요?", roman: "gamsahamnida. geureonde jeo gabangeun nugu geoyeyo?", gloss: "Thank you. By the way, whose is that bag over there?" },
          { speaker: "사라", text: "저 가방은 민수 씨 거예요.", roman: "jeo gabangeun minsu ssi geoyeyo.", gloss: "That bag over there is Minsu's." },
          { speaker: "지현", text: "민수 씨는 컴퓨터가 있어요?", roman: "minsu ssineun keompyuteoga isseoyo?", gloss: "Does Minsu have a computer?" },
          { speaker: "사라", text: "네, 있어요. 그런데 저는 컴퓨터가 없어요. 핸드폰만 있어요.", roman: "ne, isseoyo. geureonde jeoneun keompyuteoga eopseoyo. haendeuponman isseoyo.", gloss: "Yes, he does. But I do not have a computer. I only have a phone." },
          { speaker: "지현", text: "아, 저기 시계가 있어요. 지금 수업이에요!", roman: "a, jeogi sigyega isseoyo. jigeum sueobieyo!", gloss: "Oh, there is a clock over there. It is class time now!" },
          { speaker: "사라", text: "네, 맞아요. 선생님이 저기 계세요.", roman: "ne, majayo. seonsaengnimi jeogi gyeseyo.", gloss: "Yes, that is right. The teacher is over there." }
        ]
      },
      {
        type: "vocab",
        title: "Vocabulary: pointing words and classroom objects",
        items: [
          {
            term: "이것",
            roman: "igeot",
            gloss: "this thing (near the speaker); colloquially 이거",
            pos: "pronoun",
            example: { text: "이것은 책이에요.", roman: "igeoseun chaegieyo.", gloss: "This is a book." },
            linguistics: {
              origin: "native Korean compound (이 + 것)",
              etymology: [
                "A compound of the proximal demonstrative <b>이</b> (<i>this</i>) and the bound noun <b>것</b> (<i>thing</i>). Korean demonstratives come in a three-term set — 이 (near me), 그 (near you / already mentioned), 저 (away from both) — that goes back at least to Middle Korean and has stayed remarkably stable.",
                "The same three-way pattern shapes a whole family of words: 여기/거기/저기 (here/there/over there), 이런/그런/저런 (this kind/that kind), 이렇게/그렇게/저렇게 (like this/like that). Japanese has a strikingly parallel ko-/so-/a- system, which is a typological similarity between the two languages rather than proof of common descent — the actual word forms are unrelated."
              ],
              script: [
                "것 carries the batchim ㅅ, which neutralises to [ㄷ] but returns before a vowel. The colloquial form drops it: 이거. Contracted particle forms are extremely common — 이것이 → <b>이게</b>, 이것은 → <b>이건</b>, 이것을 → <b>이걸</b>."
              ],
              phonology: [
                "[이걷] alone; [이거시] in 이것이; [이거슨] in 이것은. In speech almost nobody says 이것이 — they say 이게."
              ],
              cognates: [
                "그것, 저것, 여기, 이런, 이렇게, 이쪽 (this way). The bound noun 것 also builds 먹을 것 (something to eat) and the nominaliser -는 것."
              ]
            }
          },
          {
            term: "그것",
            roman: "geugeot",
            gloss: "that thing (near the listener, or already mentioned); colloquially 그거",
            pos: "pronoun",
            example: { text: "그건 제 지우개예요.", roman: "geugeon je jiugaeyeyo.", gloss: "That is my eraser." },
            linguistics: {
              origin: "native Korean compound (그 + 것)",
              etymology: [
                "The medial term of the demonstrative set, and the one with no clean English equivalent. 그것 covers two distinct situations: an object physically close to the <i>listener</i> rather than the speaker, and — more importantly — anything already established in the conversation, whether visible or not.",
                "That second, anaphoric use makes 그 the workhorse of Korean discourse: 그 사람 (<i>that person we were talking about</i>), 그때 (<i>then</i>), 그래서 (<i>so, therefore</i>), 그런데 (<i>by the way / however</i>), 그리고 (<i>and</i>). A surprising share of Korean connectives are frozen phrases built on this one demonstrative."
              ],
              script: [
                "Contractions: 그것이 → 그게, 그것은 → 그건, 그것을 → 그걸."
              ],
              phonology: [
                "[그걷]. The 그 is often reduced almost to a schwa in fast speech, so 그거 can sound close to [ㄱ거]."
              ],
              cognates: [
                "그, 거기, 그런, 그렇게, 그래서, 그런데, 그리고, 그때."
              ]
            }
          },
          {
            term: "저것",
            roman: "jeogeot",
            gloss: "that thing over there (away from both speakers); colloquially 저거",
            pos: "pronoun",
            example: { text: "저것은 창문이에요.", roman: "jeogeoseun changmunieyo.", gloss: "That over there is a window." },
            linguistics: {
              origin: "native Korean compound (저 + 것)",
              etymology: [
                "The distal term. Note that 저 here is a homograph of the humble pronoun 저 (<i>I</i>) from unit 1; the two are historically related in that both trace back to a demonstrative root, but in the modern language they are simply distinguished by position — 저 before a noun is <i>that over there</i>, 저 followed by 는/가 is <i>I</i>.",
                "Unlike 그것, 저것 requires the thing to be <b>visible</b> to both speakers. You cannot use it for something merely under discussion; for that you must use 그것. This is the single most common demonstrative error learners make."
              ],
              script: [
                "Contractions: 저것이 → 저게, 저것은 → 저건, 저것을 → 저걸."
              ],
              phonology: [
                "[저걷]. 저기 (<i>over there</i>) is the corresponding place word and also serves as a polite attention-getter — 저기요! is how you call a waiter."
              ],
              cognates: [
                "저, 저기, 저런, 저렇게, 저쪽."
              ]
            }
          },
          {
            term: "것",
            roman: "geot",
            gloss: "thing; one (bound noun); colloquially 거",
            pos: "bound noun",
            example: { text: "이 가방은 누구 거예요?", roman: "i gabangeun nugu geoyeyo?", gloss: "Whose bag is this?" },
            linguistics: {
              origin: "native Korean",
              etymology: [
                "A bound noun — it cannot stand alone and must be preceded by a modifier. Attested in Middle Korean as 것, and one of the most heavily used words in the language, because Korean uses it not only for physical things but as a general nominaliser: 먹는 것 (<i>the eating / what one eats</i>), 좋은 것 (<i>a good one</i>), -는 것이다 for explanatory sentences.",
                "In the possessive construction it means <i>the one belonging to</i>: 민수 씨 거예요 = <i>it is Minsu's</i>. Here the possessive particle 의 is normally omitted, which is standard in speech."
              ],
              script: [
                "Written 것 in careful prose, 거 in dialogue and messaging. Both are standard; 거 is simply the spoken form written down."
              ],
              phonology: [
                "[걷] in isolation. After the possessive it is tensed: 누구 거예요 is heard as [누구 꺼예요], and 제 거 as [제 꺼]. The tensing is regular in this construction but is not written."
              ],
              cognates: [
                "이것, 그것, 저것, 아무것 (anything), 별것 (anything special). Other bound nouns of the same class: 분 (person, honorific), 데 (place), 수 (way, possibility)."
              ]
            }
          },
          {
            term: "누구",
            roman: "nugu",
            gloss: "who",
            pos: "interrogative pronoun",
            example: { text: "저분은 누구예요?", roman: "jeobuneun nuguyeyo?", gloss: "Who is that person over there?" },
            linguistics: {
              origin: "native Korean",
              etymology: [
                "Middle Korean 누, extended to 누구 by a suffix whose identity is not fully settled. The bare 누 survives inside the irregular subject form: <b>누가</b>, not 누구가. That contraction is the one real irregularity in the word and it is worth memorising as a unit.",
                "누구 belongs to the native interrogative stock alongside 무엇, 어디, 언제, 어느, 몇, 왜 — all of them native Korean rather than Sino-Korean, which is typical: languages borrow nouns freely but rarely borrow their question words."
              ],
              script: [
                "Two open blocks. Common combinations: 누구예요? (who is it?), 누구 거예요? (whose is it?), 누구를 / 누굴 (whom)."
              ],
              phonology: [
                "[누구], with the ㄱ voiced between vowels. The subject form 누가 [누가] must not be replaced with 누구가, which is a learner error, though it is occasionally heard in casual speech."
              ],
              cognates: [
                "누가, 아무 (anyone), 아무도 (no one). The honorific counterpart is 어느 분 or 누구시죠?"
              ]
            }
          },
          {
            term: "책",
            roman: "chaek",
            gloss: "book",
            pos: "noun",
            example: { text: "이것은 한국어 책이에요.", roman: "igeoseun hangugeo chaegieyo.", gloss: "This is a Korean textbook." },
            linguistics: {
              origin: "Sino-Korean",
              etymology: [
                "From <b>冊</b>, Middle Chinese *tsrhɛk. The character is a pictograph of the earliest Chinese books: strips of bamboo, each carrying a column of writing, bound together with a cord threaded across them. The vertical strokes are the slips and the horizontal stroke is the binding — which also explains why Chinese was traditionally written in vertical columns.",
                "Korean took the character as a free-standing noun meaning <i>book</i>, which is not what it does in Chinese: modern Mandarin uses 书 shū for a book and keeps 册 cè as a counter for volumes. Korean too keeps a counting use (책 두 권) but has promoted 冊 to the ordinary everyday word."
              ],
              script: [
                "One block, ㅊ + ㅐ + ㄱ. The Sino-Korean reading has a ㄱ coda from the Middle Chinese entering tone (入聲) ending in *-k, which is a reliable signature: Korean readings ending in ㄱ, ㄹ or ㅂ almost always come from Middle Chinese *-k, *-t and *-p."
              ],
              phonology: [
                "[책] in isolation; 책이 → [채기] with liaison; 책상 → [책쌍] with tensification."
              ],
              cognates: [
                "책상 (desk), 책방 (bookshop), 공책 (notebook), 수첩 (pocket notebook, 手帖). Mandarin cè 册; Japanese satsu/saku 冊 (still only a counter, as in 三冊)."
              ]
            }
          },
          {
            term: "책상",
            roman: "chaeksang",
            gloss: "desk",
            pos: "noun",
            example: { text: "책상 위에 책이 있어요.", roman: "chaeksang wie chaegi isseoyo.", gloss: "There is a book on the desk." },
            linguistics: {
              origin: "Sino-Korean compound",
              etymology: [
                "<b>冊床</b>: 冊 (book) + 床 (a low table or platform; the character shows a wooden frame). Literally a <i>book table</i>. This compound is a Korean formation — neither Mandarin (书桌 shūzhuō) nor Japanese (机 tsukue) uses it, and it is a good example of Korean building new words out of borrowed characters rather than borrowing whole compounds.",
                "床 has a specifically Korean life: it names the low individual tables of traditional Korean dining, giving 밥상 (a meal table), 상다리 (its legs), and 겸상 (sharing a table). Korea historically ate at portable low tables rather than at fixed high ones, so 床 words are everywhere in the domestic vocabulary."
              ],
              script: [
                "Two blocks, both with a batchim."
              ],
              phonology: [
                "[책쌍]: 경음화 tenses the ㅅ after the ㄱ coda. Compare 학생 [학쌩] — the same rule."
              ],
              cognates: [
                "책 (book), 밥상 (dinner table), 침상 (bed, 寢床), 상 (table). Same 床 in Mandarin chuáng 床 (bed) and Japanese shō."
              ]
            }
          },
          {
            term: "의자",
            roman: "uija",
            gloss: "chair",
            pos: "noun",
            example: { text: "의자가 있어요?", roman: "uijaga isseoyo?", gloss: "Is there a chair?" },
            linguistics: {
              origin: "Sino-Korean",
              etymology: [
                "<b>椅子</b>: 椅 (chair) + 子, here the semantically empty noun-forming suffix that Chinese attaches to many concrete objects (桌子 table, 帽子 hat). 椅 originally named a species of tree — the wood used for the furniture — and the graph is 木 <i>wood</i> plus the phonetic 奇.",
                "The chair itself was a Central Asian import into China around the Tang dynasty, displacing floor-sitting; Korea imported the word along with the object but kept floor-sitting on the 온돌 heated floor far longer, which is why traditional Korean interiors have almost no chairs and why the word feels less domestic than 방석 (floor cushion)."
              ],
              script: [
                "의 uses the diphthong ㅢ, which is why the pronunciation and the spelling diverge here."
              ],
              phonology: [
                "Officially [의자], but by the standard rule for non-initial and consonant-attached ㅢ, and increasingly even word-initially, many speakers say [이자]. Both are heard; the dictionary form keeps ㅢ."
              ],
              cognates: [
                "Same 子 suffix in 모자 (hat, 帽子), 탁자 (table, 卓子), 상자 (box, 箱子). Mandarin yǐzi 椅子; Japanese isu 椅子."
              ]
            }
          },
          {
            term: "가방",
            roman: "gabang",
            gloss: "bag; backpack; briefcase",
            pos: "noun",
            example: { text: "저 가방은 누구 거예요?", roman: "jeo gabangeun nugu geoyeyo?", gloss: "Whose is that bag over there?" },
            linguistics: {
              origin: "loanword (via Japanese)",
              etymology: [
                "Borrowed from Japanese <b>かばん</b> (<i>kaban</i>, written 鞄), one of the many everyday loans that entered Korean during the late nineteenth and early twentieth centuries. The word is not Sino-Korean despite sounding as though it could be, and it has no hanja spelling in Korean.",
                "The origin of the Japanese word itself is genuinely disputed. Proposals include a borrowing from a Chinese term such as 夾板 (a board-stiffened case), a borrowing from Dutch <i>kabas</i> (a basket-bag) during the Dutch trading period, and a native Japanese formation. No account is settled, and reputable dictionaries mark it 語源未詳 (origin unknown). It is worth saying so plainly rather than repeating one of the popular stories as fact."
              ],
              script: [
                "Written purely phonetically; there is no character spelling. The alternative Sino-Korean word 鞄 is not used in Korean."
              ],
              phonology: [
                "[가방], with the ㄱ voiced intervocalically. Note the coda ㅇ = [ŋ]: 가방이 is [가방이], never [가바니] — coda ㅇ does not liaise."
              ],
              cognates: [
                "Other Japanese-mediated everyday loans in Korean: 구두 (shoes, from くつ), 냄비 (pot, from なべ), 다마 (ball, colloquial), 우동, 짬뽕. Native Korean has 주머니 (pocket, pouch) and Sino-Korean 배낭 (背囊, backpack) as partial alternatives."
              ]
            }
          },
          {
            term: "연필",
            roman: "yeonpil",
            gloss: "pencil",
            pos: "noun",
            example: { text: "연필이 없어요.", roman: "yeonpiri eopseoyo.", gloss: "I do not have a pencil." },
            linguistics: {
              origin: "Sino-Korean",
              etymology: [
                "<b>鉛筆</b>: 鉛 <i>yeon</i> (lead, the metal) + 筆 <i>pil</i> (writing brush) — a <i>lead brush</i>. The compound was coined in East Asia in the nineteenth century to name the imported Western pencil, and it is shared by Korean 연필, Mandarin qiānbǐ and Japanese enpitsu.",
                "The second character has a much older Korean history. The native-looking word <b>붓</b> (<i>writing brush</i>) is in fact an ancient borrowing of the same character 筆, taken in via a pre-Sino-Korean layer before the systematic Middle Chinese readings were fixed — Middle Korean 붇, from an early Chinese form close to *put. So 붓 and the 필 of 연필 are the same Chinese word borrowed twice, centuries apart, by different routes."
              ],
              script: [
                "연 has the batchim ㄴ and 필 the batchim ㄹ."
              ],
              phonology: [
                "[연필]. With the subject particle: 연필이 → [연피리]. The ㄴ+ㅍ sequence stays as written; no assimilation applies."
              ],
              cognates: [
                "붓 (brush, the early loan of the same 筆), 필기 (note-taking, 筆記), 필통 (pencil case, 筆筒), 만년필 (fountain pen, 萬年筆 — literally <i>ten-thousand-year brush</i>). Mandarin qiānbǐ 铅笔; Japanese enpitsu 鉛筆."
              ]
            }
          },
          {
            term: "지우개",
            roman: "jiugae",
            gloss: "eraser; rubber",
            pos: "noun",
            example: { text: "이건 제 지우개예요.", roman: "igeon je jiugaeyeyo.", gloss: "This is my eraser." },
            linguistics: {
              origin: "native Korean (derived)",
              etymology: [
                "A textbook example of native Korean word-formation: the verb stem <b>지우-</b> (<i>to erase, to wipe out</i>, from 지우다, itself the causative of 지다 <i>to fade, to disappear</i>) plus the suffix <b>-개</b>, which turns a verb into the instrument that performs it.",
                "-개 is highly productive and gives some of the most transparent words in the language: 덮개 (a cover, from 덮다 <i>to cover</i>), 베개 (a pillow, from 베다 <i>to rest one's head</i>), 날개 (a wing, from 날다 <i>to fly</i>), 마개 (a stopper, from 막다 <i>to block</i>), 이쑤시개 (a toothpick, from 쑤시다 <i>to poke</i>). Once you notice the suffix, a whole class of nouns becomes self-explaining."
              ],
              script: [
                "Three blocks, no batchim anywhere — an easy word to read but a hard one to spell, because [지우개] and [지웨] can sound similar in fast speech."
              ],
              phonology: [
                "[지우개]. The final ㅐ is one of the vowels involved in the ㅐ/ㅔ merger, so many speakers pronounce it identically to a hypothetical 지우게."
              ],
              cognates: [
                "지우다 (to erase), 지워요, and the -개 family listed above. The Sino-Korean equivalent 소거 (消去) exists only in technical registers."
              ]
            }
          },
          {
            term: "시계",
            roman: "sigye",
            gloss: "clock; watch",
            pos: "noun",
            example: { text: "저기 시계가 있어요.", roman: "jeogi sigyega isseoyo.", gloss: "There is a clock over there." },
            linguistics: {
              origin: "Sino-Korean (compound formed in Japan)",
              etymology: [
                "<b>時計</b>: 時 <i>si</i> (time; the graph is 日 <i>sun</i> with a phonetic element) + 計 <i>gye</i> (to count, to measure; 言 <i>speech</i> plus 十 <i>ten</i>). Literally a <i>time-measurer</i>.",
                "The compound was assembled in Japan (<i>tokei</i>) during the Edo and Meiji periods as clocks became common, and Korea borrowed the characters and read them with Korean readings. Mandarin did not adopt it — Chinese says 钟 zhōng for a clock and 表 biǎo for a watch. So 시계 is another marker of the Japanese-mediated modern vocabulary layer, alongside 회사 and 수업."
              ],
              script: [
                "계 contains ㅖ, one of the rarer vowel letters."
              ],
              phonology: [
                "Standard [시계], but the ㅖ after a consonant is regularly simplified, so [시게] is equally standard and far more common in speech. The same simplification affects 계란 [게란] and 시계탑 [시게탑]."
              ],
              cognates: [
                "Same 時: 시간 (time), 시각 (a point in time), 당시 (at that time), and the counter 시 (o'clock) taught in unit 4. Same 計: 계산 (calculation), 통계 (statistics), 설계 (design). Japanese tokei 時計."
              ]
            }
          },
          {
            term: "교실",
            roman: "gyosil",
            gloss: "classroom",
            pos: "noun",
            example: { text: "교실이 여기예요.", roman: "gyosiri yeogiyeyo.", gloss: "The classroom is here." },
            linguistics: {
              origin: "Sino-Korean",
              etymology: [
                "<b>敎室</b>: 敎 <i>gyo</i> (to teach — the graph combines a hand holding a rod with a child) + 室 <i>sil</i> (room; 宀 <i>roof</i> over 至 <i>arrive</i>, a place one arrives at and stays). A <i>teaching room</i>.",
                "Like most of the modern school vocabulary, the compound belongs to the wave of Meiji-era terminology that standardised education across East Asia; Korean, Japanese (<i>kyōshitsu</i>) and Mandarin (<i>jiàoshì</i>) all use the same two characters, one of the rare cases where all three languages agree."
              ],
              script: [
                "교 uses the iotated horizontal vowel ㅛ, so the consonant sits on top."
              ],
              phonology: [
                "[교실]; 교실이 → [교시리] with liaison."
              ],
              cognates: [
                "Same 敎: 교사 (teacher), 교육 (education), 종교 (religion), 교회 (church). Same 室: 사무실 (office), 화장실 (toilet), 침실 (bedroom), 연구실 (research office). Mandarin jiàoshì 教室; Japanese kyōshitsu 教室."
              ]
            }
          },
          {
            term: "창문",
            roman: "changmun",
            gloss: "window",
            pos: "noun",
            example: { text: "창문이 있어요.", roman: "changmuni isseoyo.", gloss: "There is a window." },
            linguistics: {
              origin: "Sino-Korean compound",
              etymology: [
                "<b>窓門</b>: 窓 <i>chang</i> (window) + 門 <i>mun</i> (door, gate). The compound is pleonastic — a <i>window-door</i> — and is a Korean formation; Mandarin uses 窗户 chuānghu and Japanese simply 窓 mado.",
                "Its shape reflects traditional Korean architecture, where the distinction between a window and a door was genuinely blurry: a hanok's paper-panelled 문 could be a doorway, a window, or a whole wall lifted out of its frame in summer. Korean therefore builds many opening-words on 문: 대문, 정문, 방문, 창문."
              ],
              script: [
                "Two blocks, the first ending in ㅇ [ŋ]."
              ],
              phonology: [
                "[창문]. Because the coda ㅇ never liaises, 창문이 stays [창무니] with only the second syllable's ㄴ moving."
              ],
              cognates: [
                "문 (door), 대문 (main gate), 정문 (front gate), 창가 (window seat/side), 창구 (a service window). Same 窓 in Mandarin chuāng 窗 and Japanese sō 窓."
              ]
            }
          },
          {
            term: "문",
            roman: "mun",
            gloss: "door; gate",
            pos: "noun",
            example: { text: "문이 저기 있어요.", roman: "muni jeogi isseoyo.", gloss: "The door is over there." },
            linguistics: {
              origin: "Sino-Korean",
              etymology: [
                "<b>門</b>, Middle Chinese *mwon. One of the clearest pictographs in the character set: two swinging leaves of a gate, drawn as mirror images. It is also a radical, appearing in 開 (open), 閉 (close), 間 (interval, between) and 聞 (to hear — an ear at the gate).",
                "Seoul's historic city gates keep the character visible in daily life: 광화문 (光化門), 동대문 (東大門, Great East Gate), 남대문 (南大門, Great South Gate), all still in use as place and station names."
              ],
              script: [
                "A single short block. Do not confuse the Sino-Korean 문 門 with the unrelated 문 文 (writing) of 문화 (culture) and 문학 (literature) — same Korean sound, different characters."
              ],
              phonology: [
                "[문]; 문이 → [무니]; 문을 → [무늘]."
              ],
              cognates: [
                "창문, 대문, 정문, 출입문 (entrance), 전문 (專門, specialty — same 門, in the sense of a school or gate of learning). Mandarin mén 门; Japanese mon 門."
              ]
            }
          },
          {
            term: "컴퓨터",
            roman: "keompyuteo",
            gloss: "computer",
            pos: "noun",
            example: { text: "저는 컴퓨터가 없어요.", roman: "jeoneun keompyuteoga eopseoyo.", gloss: "I do not have a computer." },
            linguistics: {
              origin: "loanword (English)",
              etymology: [
                "A direct borrowing of English <i>computer</i>, and a good demonstration of how English words are reshaped by Korean phonology. English has consonant clusters and syllable-final consonants that Korean syllables cannot host, so Korean inserts the vowel <b>ㅡ</b> to break them up and rebuilds the word as a sequence of legal syllables.",
                "The three adjustments visible here are: English /k/ becomes aspirated ㅋ (Korean has no plain voiceless-unaspirated match for English initial k); the unstressed final /ər/ becomes 터 with the vowel ㅓ, since Korean has no schwa and no syllable-final r; and /pj/ is written 퓨 as a single glide-bearing syllable. North Korean usage prefers 콤퓨터, reflecting a different transcription tradition."
              ],
              script: [
                "Four blocks for three English syllables. Loanword transcription in South Korea is governed by the 외래어 표기법, which for instance forbids using tense consonants in most loans — hence 버스 rather than 뻐스, even though the latter is closer to how people actually say it."
              ],
              phonology: [
                "[컴퓨터]. Casual speech clips it to 컴 in compounds (컴맹, <i>computer illiterate</i>). The ㅁ coda nasalises nothing here, but note 컴퓨터가 [컴퓨터가] keeps every syllable full — Korean does not reduce unstressed vowels."
              ],
              cognates: [
                "Other computing loans built the same way: 인터넷, 이메일, 프린터, 마우스, 노트북 (which in Korean means a laptop, not a paper notebook — a Konglish shift). Sino-Korean 전산 (電算) covers the technical sense of computing."
              ]
            }
          },
          {
            term: "핸드폰",
            roman: "haendeupon",
            gloss: "mobile phone; cell phone",
            pos: "noun",
            example: { text: "핸드폰이 가방에 있어요.", roman: "haendeuponi gabange isseoyo.", gloss: "The phone is in the bag." },
            linguistics: {
              origin: "Konglish (pseudo-anglicism built from English parts)",
              etymology: [
                "<i>Hand</i> + <i>phone</i> — a compound that does not exist in English. Korean assembled it from English material to name the mobile phone, exactly as it assembled 원룸 (<i>one room</i>, a studio flat), 셀카 (<i>self camera</i>, a selfie), 아이쇼핑 (<i>eye shopping</i>, window shopping) and 파이팅 (an encouragement shout). Linguists call these pseudo-anglicisms, and Korean produces them prolifically.",
                "The official and more formal word is <b>휴대폰</b> or <b>휴대 전화</b>, from Sino-Korean 携帶 (<i>to carry with one</i>) plus either the English <i>phone</i> or Sino-Korean 電話. Government style guides and broadcasters prefer 휴대 전화; everyday speech uses 핸드폰 and, increasingly, just 폰."
              ],
              script: [
                "Three blocks. The 드 exists only to carry the English <i>d</i>, since Korean cannot end a syllable in [d] before another consonant — the same epenthetic ㅡ seen in 컴퓨터."
              ],
              phonology: [
                "[핸드폰], often reduced to [핸폰] or [핸드뽄]. English <i>f</i> is regularly rendered ㅍ, since Korean has no labiodental fricative: 폰, 커피, 프랑스."
              ],
              cognates: [
                "휴대폰, 휴대 전화, 전화 (電話, telephone), 스마트폰. Same 携帶 in 휴대 (carrying) and 휴대품 (carried items)."
              ]
            }
          },
          {
            term: "수업",
            roman: "sueop",
            gloss: "class; lesson",
            pos: "noun",
            example: { text: "지금 수업이에요.", roman: "jigeum sueobieyo.", gloss: "It is class time now." },
            linguistics: {
              origin: "Sino-Korean",
              etymology: [
                "<b>授業</b>: 授 <i>su</i> (to give, to hand over — 手 <i>hand</i> plus a phonetic) + 業 <i>eop</i> (work, occupation, karma). Literally <i>the handing over of work</i>, i.e. instruction given by a teacher.",
                "Another Japanese-formed compound (<i>jugyō</i>) adopted into Korean; Mandarin uses 上课 shàngkè for attending class. 業 is worth knowing on its own: it originally referred to the wooden board on which bells were hung, then to work generally, and it is also the character used to translate the Sanskrit <i>karma</i> in Buddhist texts, which is why 업 has both a mundane and a religious life in Korean."
              ],
              script: [
                "Two blocks; 업 carries the batchim ㅂ."
              ],
              phonology: [
                "[수업]; 수업이에요 → [수어비에요] with liaison. Compare the near-homophone 수영 (swimming), which differs only in the final consonant."
              ],
              cognates: [
                "Same 業: 직업 (occupation), 졸업 (graduation), 사업 (business), 산업 (industry), 취업 (getting a job). Same 授: 교수 (professor), 전수 (transmission). Japanese jugyō 授業."
              ]
            }
          },
          {
            term: "있어요",
            roman: "isseoyo",
            gloss: "there is; to exist; to have",
            pos: "verb (existential)",
            example: { text: "저는 지우개가 있어요.", roman: "jeoneun jiugaega isseoyo.", gloss: "I have an eraser." },
            linguistics: {
              origin: "native Korean",
              etymology: [
                "Dictionary form <b>있다</b>. Middle Korean had two related shapes, 잇다 and 이시다, whose distribution depended on the following ending; they later merged into the single modern stem 있-, with the double ㅅ spelling fixed by twentieth-century orthographic reform.",
                "The verb carries an enormous functional load. It is the existential <i>there is</i>, the possessive <i>have</i>, part of the progressive -고 있다 (<i>be doing</i>), part of the resultative -어 있다, and the base of 재미있다 (<i>interesting</i>), 맛있다 (<i>tasty</i>) and 멋있다 (<i>cool</i>)."
              ],
              script: [
                "The stem ends in the tense batchim ㅆ, one of only two doubled letters allowed in a final slot."
              ],
              phonology: [
                "[이써요] — liaison moves one ㅅ into the next syllable and it surfaces tense. The dictionary form 있다 is [읻따]: the coda neutralises to [ㄷ] and then tenses the following ㄷ. The honorific form is the suppletive <b>계시다</b> (계세요), used when the subject is a person deserving respect: 선생님이 계세요, never 선생님이 있으세요 in careful speech."
              ],
              cognates: [
                "없다 (the negative counterpart), 계시다 (honorific), 있다가 / 이따가 (in a little while), 재미있다, 맛있다."
              ]
            }
          },
          {
            term: "없어요",
            roman: "eopseoyo",
            gloss: "there is not; to not exist; to not have",
            pos: "verb (existential negative)",
            example: { text: "연필이 없어요.", roman: "yeonpiri eopseoyo.", gloss: "There is no pencil. / I do not have a pencil." },
            linguistics: {
              origin: "native Korean",
              etymology: [
                "Dictionary form <b>없다</b>, attested in Middle Korean as 없다 with the same 겹받침 ㅄ. It is a separate lexical item, not a negated form of 있다 — Korean has a suppletive negative here, in the same way English has <i>good</i>/<i>bad</i> rather than <i>ungood</i>.",
                "Because 없다 is a single word, you cannot say 안 있어요 for <i>there is not</i>. This is one of a small set of verbs with dedicated negatives: 있다/없다, 알다/모르다 (to know / not know)."
              ],
              script: [
                "The double batchim ㅄ is the visual signature of this word and of 값 (price)."
              ],
              phonology: [
                "[업써요]: the ㅂ stays as coda, the ㅅ slides into the next syllable and tenses. The dictionary form 없다 is [업따]. Learners often say [업서요] with a plain ㅅ, which is audibly wrong — the tensing is obligatory."
              ],
              cognates: [
                "있다, 없이 (without), 재미없다 (boring), 맛없다 (tasteless), 어쩔 수 없다 (there is nothing to be done). The honorific is 안 계시다."
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
            name: "이/그/저 — the three-way pointing system",
            pattern: "이 + noun (near me) · 그 + noun (near you / already mentioned) · 저 + noun (over there)",
            explanation: [
              "Korean divides space three ways where English divides it two ways. <b>이</b> marks what is close to the speaker, <b>저</b> what is far from both people, and <b>그</b> — the term with no English equivalent — what is close to the <i>listener</i> or what has already come up in the conversation. As modifiers they go straight before a noun: 이 책, 그 가방, 저 창문.",
              "Combined with the bound noun 것 they become pronouns: 이것 / 그것 / 저것, which in speech are almost always 이거 / 그거 / 저거. With particles they contract, and you should learn the contractions as the primary forms because nobody says the long ones: 이것이 → <b>이게</b>, 이것은 → <b>이건</b>, 이것을 → <b>이걸</b>, and likewise 그게/그건/그걸, 저게/저건/저걸.",
              "The same three-way logic runs through the place words <b>여기 / 거기 / 저기</b> (here / there / over there) and the manner words 이렇게 / 그렇게 / 저렇게. The most important practical point: use 그것 for anything you cannot both see, even if it is far away. 저것 demands a visible referent. When your friend mentions a film you watched last week, it is 그 영화, never 저 영화."
            ],
            examples: [
              { text: "이것은 책이에요.", roman: "igeoseun chaegieyo.", gloss: "This is a book. (I am holding it)" },
              { text: "그건 뭐예요?", roman: "geugeon mwoyeyo?", gloss: "What is that? (the thing near you)" },
              { text: "저 가방은 민수 씨 거예요.", roman: "jeo gabangeun minsu ssi geoyeyo.", gloss: "That bag over there is Minsu's." },
              { text: "이 의자가 좋아요.", roman: "i uijaga joayo.", gloss: "This chair is nice. (이 as a modifier, not 이것)" },
              { text: "그 사람은 제 친구예요.", roman: "geu sarameun je chinguyeyo.", gloss: "That person (we were talking about) is my friend." }
            ]
          },
          {
            name: "The subject particle 이 / 가",
            pattern: "Noun + 이 (after a consonant) · Noun + 가 (after a vowel)",
            explanation: [
              "<b>이/가</b> marks the grammatical subject: 이 after a consonant (연필이), 가 after a vowel (의자가). It identifies who or what performs the action or holds the state, and it is the particle you must use with 있어요/없어요 and with the negative copula 아니에요.",
              "The hard part is choosing between 이/가 and the topic particle 은/는. A workable rule of thumb: <b>이/가 presents new or identifying information</b> — it answers <i>which one?</i> or <i>who?</i> — while <b>은/는 sets up what the sentence is about</b> and often contrasts. Asked 누가 학생이에요?, you answer 제<b>가</b> 학생이에요 (<i>I am the one who is the student</i>). Asked 사라 씨는 학생이에요?, you answer 네, 저<b>는</b> 학생이에요 (<i>as for me, yes</i>).",
              "Two further habits to build. First, in a sentence with both, the topic comes first and the subject second: 저<b>는</b> 지우개<b>가</b> 있어요 — literally <i>as for me, an eraser exists</i>, which is how Korean says <i>I have an eraser</i>. Second, the pronoun contractions are irregular and must be memorised: 저 + 가 → <b>제가</b>, 나 + 가 → <b>내가</b>, 누구 + 가 → <b>누가</b>. In relaxed speech particles are often dropped entirely — 이거 뭐예요? has no particle at all — but drop them only once you know which one you are dropping."
            ],
            examples: [
              { text: "책상이 있어요.", roman: "chaeksangi isseoyo.", gloss: "There is a desk. (책상 ends in ㅇ → 이)" },
              { text: "의자가 없어요.", roman: "uijaga eopseoyo.", gloss: "There is no chair. (의자 ends in a vowel → 가)" },
              { text: "누가 선생님이에요?", roman: "nuga seonsaengnimieyo?", gloss: "Who is the teacher? (누구 + 가 → 누가)" },
              { text: "제가 사라예요.", roman: "jega sarayeyo.", gloss: "I am Sarah. (identifying — answering 'which of you?')" },
              { text: "저는 컴퓨터가 없어요.", roman: "jeoneun keompyuteoga eopseoyo.", gloss: "I do not have a computer. (topic + subject in one sentence)" }
            ]
          },
          {
            name: "있어요 / 없어요 — existence and possession",
            pattern: "N + 이/가 있어요 (there is / I have) · N + 이/가 없어요 (there is not / I do not have)",
            explanation: [
              "One construction covers two English ones. <b>있어요</b> means <i>exists</i> and <i>is located</i> and <i>has</i>; <b>없어요</b> is its dedicated negative. 시계가 있어요 can mean <i>there is a clock</i> or <i>I have a watch</i>, and only context decides. To make possession explicit, add a topic: 저는 시계가 있어요.",
              "Note that Korean treats the possessed thing as the <b>subject</b>, not the object — it takes 이/가, never 을/를. Literally the sentence says <i>as for me, a watch exists</i>. This pattern is shared with Japanese and is one of the structural habits that makes Korean feel different from English at a level deeper than word order.",
              "There is no 안 있어요. The negative is the separate word 없어요, which behaves as a full verb of its own and even forms compounds: 재미있다 / 재미없다 (interesting / boring), 맛있다 / 맛없다 (tasty / tasteless). When the subject is a person you respect, the honorific 계시다 replaces 있다: 선생님이 계세요. The negative honorific is 안 계세요."
            ],
            examples: [
              { text: "교실에 시계가 있어요.", roman: "gyosire sigyega isseoyo.", gloss: "There is a clock in the classroom." },
              { text: "저는 지우개가 있어요.", roman: "jeoneun jiugaega isseoyo.", gloss: "I have an eraser." },
              { text: "연필이 없어요.", roman: "yeonpiri eopseoyo.", gloss: "There is no pencil. / I do not have a pencil." },
              { text: "선생님이 저기 계세요.", roman: "seonsaengnimi jeogi gyeseyo.", gloss: "The teacher is over there. (honorific 계시다)" },
              { text: "이 수업은 재미있어요.", roman: "i sueobeun jaemiisseoyo.", gloss: "This class is interesting. (재미 + 있다)" }
            ]
          },
          {
            name: "Whose is it? — 누구 거예요 and the possessive 의",
            pattern: "Person + 의 + N · Person + N (의 omitted) · 누구 거예요? / N + 씨 거예요",
            explanation: [
              "The possessive particle is <b>의</b>, pronounced [에]: 사라의 책 (<i>Sarah's book</i>). In practice, though, spoken Korean drops it constantly, simply juxtaposing the two nouns: 사라 책, 민수 씨 가방, 선생님 컴퓨터. Keep 의 in writing and formal speech; let it go in conversation.",
              "With the pronouns it contracts and the contraction is obligatory: 저의 → <b>제</b>, 나의 → <b>내</b>, 너의 → <b>네</b>. So <i>my name</i> is 제 이름, never 저의 이름 in ordinary speech. Because 네 (your) and 내 (my) now sound alike thanks to the ㅐ/ㅔ merger, Koreans often say 니 for 네 to keep them apart.",
              "To ask <i>whose?</i>, combine 누구 with the bound noun 것: <b>누구 거예요?</b> — heard as [누구 꺼예요] with automatic tensing. The answer replaces 누구 with the owner: 민수 씨 거예요, 제 거예요, 선생님 거예요. Note that 거 is the colloquial form of 것 and that 것이에요 would be over-formal for speech."
            ],
            examples: [
              { text: "이 가방은 누구 거예요?", roman: "i gabangeun nugu geoyeyo?", gloss: "Whose bag is this? (heard as [누구 꺼예요])" },
              { text: "제 거예요.", roman: "je geoyeyo.", gloss: "It is mine." },
              { text: "그 책은 선생님 거예요.", roman: "geu chaegeun seonsaengnim geoyeyo.", gloss: "That book is the teacher's." },
              { text: "사라 씨의 지우개예요.", roman: "sara ssiui jiugaeyeyo.", gloss: "It is Sarah's eraser. (의 kept — formal or written)" },
              { text: "제 이름은 김민수예요.", roman: "je ireumeun gimminsuyeyo.", gloss: "My name is Kim Minsu. (저의 → 제)" }
            ]
          }
        ]
      },
      {
        type: "notes",
        title: "Culture note: inside a Korean classroom",
        body: [
          "Korean students spend a great deal of time with the same people. In secondary school a 반 (class) of thirty-odd students stays together all day in one room while <i>teachers</i> rotate between rooms — the reverse of the American model — so the classroom becomes a shared territory that the students themselves clean at the end of the day during 청소 시간. The bonds formed in a 반 are strong enough that 동창 (classmates from the same year) remains a meaningful social category decades later.",
          "Seniority organises everything. A student one year ahead is a 선배 and one year behind a 후배, and the relationship carries real obligations in both directions — the 선배 pays for meals and gives advice, the 후배 shows deference. Teachers are addressed as 선생님, professors as 교수님, and it is normal to use the title in place of a name for an entire semester. Students bow slightly on entering a professor's office, and in many classrooms the whole class still greets the teacher in unison at the start of the lesson.",
          "The formal school day is only part of the story. 학원 (hagwon, private cram academies) occupy the evenings of a large majority of Korean schoolchildren, with the busiest districts — Daechi-dong in Seoul above all — running classes until a legally mandated 10 p.m. curfew. The system is built around 수능, the national university entrance exam held on one November day, on which flights are grounded during the listening section and latecomers get police escorts. Understanding this pressure explains a lot about how Korean students talk about study, and why 수고하셨습니다 (<i>you have worked hard</i>) is such a common farewell.",
          "One small vocabulary note with a cultural edge: Korean stationery shops are 문방구 (文房具), from the classical <i>four treasures of the study</i> — brush, ink, paper and inkstone. The word predates pencils by centuries and now covers plastic erasers and mechanical pencils, a nice small example of an old Sino-Korean compound quietly absorbing new objects. And unlike in many countries, Korean students routinely write in pencil well into university, so 지우개 is not a childish word."
        ]
      },
      {
        type: "practice",
        title: "Practice: naming and locating things",
        exercises: [
          {
            type: "mcq",
            prompt: "Your friend is holding something. You want to ask what it is. Which do you use?",
            promptAudio: "그거 뭐예요?",
            choices: ["그거 뭐예요?", "이거 뭐예요?", "저거 뭐예요?", "어느 거 뭐예요?"],
            answer: 0,
            explain: "그 is for what is near the listener. 이 is near the speaker, 저 is away from both, and 어느 means 'which' and needs a following noun."
          },
          {
            type: "mcq",
            prompt: "Choose the correct particle: 의자___ 없어요.",
            promptAudio: null,
            choices: ["가", "이", "는", "을"],
            answer: 0,
            explain: "의자 ends in a vowel, so the subject particle is 가. 있어요/없어요 always take 이/가, never the object particle 을/를."
          },
          {
            type: "mcq",
            prompt: "Which sentence means 'I have a computer'?",
            promptAudio: null,
            choices: [
              "저는 컴퓨터가 있어요.",
              "저는 컴퓨터를 있어요.",
              "저를 컴퓨터가 있어요.",
              "저는 컴퓨터가 안 있어요."
            ],
            answer: 0,
            explain: "Korean makes the possessed thing the subject: topic 저는 + subject 컴퓨터가 + 있어요. There is no 안 있어요 — the negative is 없어요."
          },
          {
            type: "mcq",
            prompt: "How is 책상 actually pronounced?",
            promptAudio: "책상",
            choices: ["[책쌍]", "[책상]", "[챙상]", "[채상]"],
            answer: 0,
            explain: "경음화: after the stop batchim ㄱ, the following ㅅ is tensed. Same rule as 학생 [학쌩] and 학교 [학꾜]."
          },
          {
            type: "typing",
            prompt: "Ask 'What is this?' (using the colloquial form of 이것).",
            answer: ["이거 뭐예요", "이거 뭐예요?", "이게 뭐예요", "이게 뭐예요?", "이거 뭐에요", "이거 뭐에요?"],
            hint: "이거 or 이게, then 뭐 + 예요?"
          },
          {
            type: "typing",
            prompt: "Ask whose the bag is: 'Whose bag is this?'",
            answer: ["이 가방은 누구 거예요", "이 가방은 누구 거예요?", "이 가방 누구 거예요", "이 가방 누구 거예요?", "이거 누구 가방이에요", "이거 누구 가방이에요?"],
            hint: "이 가방 … 누구 + 거예요?"
          },
          {
            type: "listening",
            prompt: "Listen and choose what was said.",
            audioText: "지우개가 있어요.",
            choices: ["There is an eraser.", "There is no eraser.", "There is a pencil.", "Is there a desk?"],
            answer: 0,
            explain: "있어요 [이써요] is the positive existential; 없어요 [업써요] is the negative. Listen for the ㅂ at the start of 없-."
          },
          {
            type: "listening",
            prompt: "Listen. Which object is mentioned?",
            audioText: "저기 시계가 있어요.",
            choices: ["a clock", "a book", "a window", "a bag"],
            answer: 0,
            explain: "시계 (時計) is a clock or watch, usually pronounced [시게]. 책 is a book, 창문 a window, 가방 a bag."
          },
          {
            type: "match",
            prompt: "Match each object with its English meaning.",
            pairs: [
              { a: "책상", b: "desk" },
              { a: "의자", b: "chair" },
              { a: "연필", b: "pencil" },
              { a: "지우개", b: "eraser" },
              { a: "창문", b: "window" },
              { a: "가방", b: "bag" }
            ]
          },
          {
            type: "match",
            prompt: "Match each long form with its everyday contraction.",
            pairs: [
              { a: "이것이", b: "이게" },
              { a: "그것은", b: "그건" },
              { a: "저것을", b: "저걸" },
              { a: "저의", b: "제" },
              { a: "누구 + 가", b: "누가" }
            ]
          },
          {
            type: "order",
            prompt: "Arrange into a sentence: 'I do not have a computer.'",
            tokens: ["저는", "컴퓨터가", "없어요"],
            answer: "저는 컴퓨터가 없어요"
          },
          {
            type: "order",
            prompt: "Arrange into a question: 'Whose is that bag over there?'",
            tokens: ["저", "가방은", "누구", "거예요?"],
            answer: "저 가방은 누구 거예요?"
          }
        ]
      }
    ]
  });
})();
