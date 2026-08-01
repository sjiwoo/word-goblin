window.CURRICULUM = window.CURRICULUM || {};
(function () {
  const C = window.CURRICULUM;
  C.chinese = C.chinese || { units: [] };

  C.chinese.units.push({
    id: "zh-08",
    order: 8,
    title: "Shopping & Money",
    titleNative: "买东西",
    subtitle: "Prices, sizes and colours: asking 多少钱, counting in 块 毛 分, complaining 太贵了, and comparing with 比.",
    textbookBasis: [
      "Integrated Chinese Level 1 Part 1, Lesson 9 (Shopping)",
      "HSK Standard Course 2, Lessons 13–15 (购物, 比较)",
      "New Practical Chinese Reader 1, Lessons 8 and 13 — measure words, prices and comparison"
    ],
    overview: [
      "Shopping is the classic beginner unit because it forces four skills together: numbers, measure words, adjectives and negotiation. You already have numbers from unit 2 and measure words from 个 and 口; here you add the ones a shop actually needs.",
      "<b>多少钱?</b> duōshao qián is the question. The answer comes in the spoken currency units <b>块 毛 分</b> kuài / máo / fēn — which are not the units printed on the banknotes. Written and formal Chinese uses 元 yuán, 角 jiǎo, 分 fēn; nobody says those out loud in a shop. Learning both sets, and the rule for dropping the final unit (五块二), is the practical core of this lesson.",
      "<b>太…了</b> tài…le, which you met as an intensifier in the last unit, now does its most characteristic job: complaining about a price. 太贵了! is the single most useful thing a foreign shopper can say in China.",
      "And <b>比</b> bǐ gives you comparison: A 比 B + adjective, with no <i>than</i>, no <i>more</i>, and — this is the trap — no 很. 这件比那件便宜 is correct; 这件比那件很便宜 is not. Comparison also brings its own negative (没有) and its own equative (跟…一样), both covered below."
    ],
    sections: [
      {
        type: "dialogue",
        title: "Dialogue: 在商店买衣服",
        context: "Mark is buying clothes at a shop near campus. Xiao Chen, the sales assistant, helps him.",
        lines: [
          { speaker: "小陈", text: "你好，你要买什么？", roman: "Nǐ hǎo, nǐ yào mǎi shénme?", gloss: "Hello, what would you like to buy?" },
          { speaker: "马克", text: "我想买一件衬衫。你们有红的吗？", roman: "Wǒ xiǎng mǎi yí jiàn chènshān. Nǐmen yǒu hóng de ma?", gloss: "I'd like to buy a shirt. Do you have red ones?" },
          { speaker: "小陈", text: "有。这件颜色很好看，您穿多大号？", roman: "Yǒu. Zhè jiàn yánsè hěn hǎokàn, nín chuān duō dà hào?", gloss: "Yes. This one's a lovely colour — what size do you wear?" },
          { speaker: "马克", text: "我穿中号。这件多少钱？", roman: "Wǒ chuān zhōng hào. Zhè jiàn duōshao qián?", gloss: "I wear medium. How much is this one?" },
          { speaker: "小陈", text: "一百二十块。", roman: "Yìbǎi èrshí kuài.", gloss: "A hundred and twenty yuan." },
          { speaker: "马克", text: "太贵了！有便宜一点儿的吗？", roman: "Tài guì le! Yǒu piányi yìdiǎnr de ma?", gloss: "That's too expensive! Do you have a cheaper one?" },
          { speaker: "小陈", text: "这件比那件便宜三十块，八十九块九毛。", roman: "Zhè jiàn bǐ nà jiàn piányi sānshí kuài, bāshíjiǔ kuài jiǔ máo.", gloss: "This one is thirty yuan cheaper than that one — eighty-nine ninety." },
          { speaker: "马克", text: "好，我买这件。这条裤子呢？", roman: "Hǎo, wǒ mǎi zhè jiàn. Zhè tiáo kùzi ne?", gloss: "Good, I'll take this one. And these trousers?" },
          { speaker: "小陈", text: "裤子跟衬衫一样，也是八十九块九。", roman: "Kùzi gēn chènshān yíyàng, yě shì bāshíjiǔ kuài jiǔ.", gloss: "The trousers are the same as the shirt — also eighty-nine ninety." },
          { speaker: "马克", text: "那我都买。一共多少钱？", roman: "Nà wǒ dōu mǎi. Yígòng duōshao qián?", gloss: "Then I'll take both. How much altogether?" }
        ]
      },
      {
        type: "vocab",
        title: "Vocabulary (20 items)",
        items: [
          {
            term: "买",
            trad: "買",
            roman: "mǎi",
            gloss: "to buy",
            pos: "verb",
            example: { text: "我想买一件衣服。", roman: "Wǒ xiǎng mǎi yí jiàn yīfu.", gloss: "I'd like to buy a piece of clothing." },
            linguistics: {
              origin: "compound ideograph",
              etymology: [
                "買 is 网 (a net) over 貝 (a cowrie shell): netting goods with shell money. Cowries were the currency of the Shang and early Zhou, which is why 貝 is the semantic radical of nearly every word about wealth and exchange — 財 cái (wealth), 貨 huò (goods), 貴 guì (expensive), 賤 jiàn (cheap), 費 fèi (fee), 賺 zhuàn (earn), 貸 dài (lend), 購 gòu (purchase).",
                "Old Chinese is reconstructed around *mˤrajʔ. The word is a genuine ancient root, not a later coinage."
              ],
              script: [
                "Simplified 买 comes from the cursive form: the net becomes a horizontal stroke and dot, and the cowrie collapses into a 头-like shape. The connection to money is invisible in simplified writing — one of the real costs of the reform.",
                "Traditional 買 keeps both parts clearly."
              ],
              phonology: [
                "Third tone, mǎi. Before another third tone it rises: 买米 is said <i>mái mǐ</i>.",
                "买 mǎi and 卖 mài are a minimal pair distinguished only by tone, and this is one of the very few places where a tone mistake produces a real-world commercial misunderstanding. Drill them together."
              ],
              cognates: [
                "买东西 mǎi dōngxi (go shopping), 买卖 mǎimai (business, trade — with a neutral second syllable), 购买 gòumǎi (to purchase, formal), 买单 mǎidān (pay the bill).",
                "Sino-Korean 매 (매매 maemae = 賣買); Sino-Japanese バイ bai (売買 baibai) beside native かう kau."
              ]
            }
          },
          {
            term: "卖",
            trad: "賣",
            roman: "mài",
            gloss: "to sell",
            pos: "verb",
            example: { text: "这个商店卖衣服。", roman: "Zhège shāngdiàn mài yīfu.", gloss: "This shop sells clothes." },
            linguistics: {
              origin: "compound (derived from 買)",
              etymology: [
                "賣 is built on 買: the older form adds 出 (to put out) above it, giving <i>to put out for buying</i>. Character and word are both derived from the word for <i>buy</i>.",
                "The tone difference is not an accident either. 買 mǎi (rising tone in Middle Chinese) and 賣 mài (departing tone) form a classic Old Chinese derivational pair: a suffix reconstructed as *-s converted the base verb into a causative or outward-directed counterpart — <i>to buy</i> versus <i>to cause to be bought, to sell</i>. The same *-s derivation lies behind 兴 xīng/xìng and 空 kōng/kòng in earlier units. Chinese morphology hides in the tones."
              ],
              script: [
                "Simplified 卖 = 十 over 买, an abbreviation of the 出 element.",
                "Beware the lookalike 读/讀 dú (read) and 续/續 xù (continue): their traditional forms contain the same 賣-shaped element, which there is a different component (𧶠 yù) entirely — a shape coincidence, not a meaning link."
              ],
              phonology: [
                "Fourth tone, mài. Against 买 mǎi, third tone.",
                "In 买卖 mǎimai (a business) the second syllable is neutral; in 买卖东西 it keeps its tone."
              ],
              cognates: [
                "卖东西 mài dōngxi (sell things), 出卖 chūmài (to betray), 卖完了 màiwán le (sold out), 小卖部 xiǎomàibù (a kiosk).",
                "Sino-Korean 매 (판매 panmae = 販賣); Sino-Japanese バイ bai (販売 hanbai) beside native うる uru."
              ]
            }
          },
          {
            term: "东西",
            trad: "東西",
            roman: "dōngxi",
            gloss: "thing, stuff",
            pos: "noun",
            example: { text: "我下午去买东西。", roman: "Wǒ xiàwǔ qù mǎi dōngxi.", gloss: "I'm going shopping this afternoon." },
            linguistics: {
              origin: "compound of two direction words; semantic origin uncertain",
              etymology: [
                "Literally <i>east-west</i>. How two compass directions came to mean <i>thing</i> is a real puzzle and the popular explanations should be labelled as folklore. One story says shoppers in Tang Chang'an went to the East Market and the West Market, so goods were <i>east-west</i>. Another invokes the Five Phases: east is wood and west is metal, both of which can be carried in a basket, while south is fire and north is water, which cannot. Neither story is attested near the time the word appears.",
                "What is documented is that the meaning <i>thing</i> shows up in Ming vernacular texts and spreads from there. The honest answer is that the origin is unknown."
              ],
              script: [
                "東 is often taught as 日 (sun) behind 木 (a tree) — sunrise through branches. That is the Shuowen's explanation and modern paleographers largely reject it: the oracle-bone form looks like a bundle or sack tied at both ends, and the direction sense is a phonetic loan. Simplified 东 comes from cursive.",
                "西 is a pictograph of a nest or a woven basket. The Shuowen connects it to birds roosting at sunset, hence <i>west</i>; the original word for <i>roost</i> is now written 栖/棲 qī. The direction sense is again very likely a loan."
              ],
              phonology: [
                "The tones are meaningful. <b>dōngxi</b> with a neutral second syllable means <i>thing</i>; <b>dōngxī</b> with a full first tone means <i>east and west</i>, the directions. 东西 dōngxī 方向 versus 买东西 dōngxi.",
                "Applied to a person, 东西 is an insult: 他不是个东西 means roughly <i>he's a worthless creature</i>. Never use it about people."
              ],
              cognates: [
                "买东西 mǎi dōngxi (shop), 好东西 hǎo dōngxi (a good thing), 东方 dōngfāng (the East), 西方 xīfāng (the West), 东南西北 (the four directions).",
                "Contrast 事情 shìqing, which is an abstract matter or affair, with 东西, which is a physical object."
              ]
            }
          },
          {
            term: "钱",
            trad: "錢",
            roman: "qián",
            gloss: "money",
            pos: "noun",
            example: { text: "这件衬衫多少钱？", roman: "Zhè jiàn chènshān duōshao qián?", gloss: "How much is this shirt?" },
            linguistics: {
              origin: "phono-semantic compound",
              etymology: [
                "錢 is 金 (metal) + 戔 jiān as phonetic. Its original meaning is not money but a <b>spade-shaped farming tool</b> — a hoe or shovel blade.",
                "The semantic shift is concrete and well documented. Warring States bronze currency was cast in the shape of that very tool: the 布币 bùbì or spade money of the Zhou states. The coins were named after the implement they imitated, and the name outlived both. Chinese money is called <i>hoes</i>."
              ],
              script: [
                "Simplified 钱 uses 钅 (the reduced metal radical, also in 银 yín, 铁 tiě, 锅 guō) and the reduced phonetic 戋.",
                "戔 also gives sound to 浅 qiǎn (shallow), 线 xiàn (thread) and 贱 jiàn (cheap, base)."
              ],
              phonology: [
                "Second tone, qián. The initial q- is the aspirated alveolo-palatal affricate; contrast 前 qián (front), a perfect homophone.",
                "钱 is also a common surname (钱 Qián, second in the traditional Hundred Family Surnames)."
              ],
              cognates: [
                "多少钱 duōshao qián (how much?), 零钱 língqián (small change), 找钱 zhǎo qián (give change), 有钱 yǒuqián (rich), 花钱 huā qián (spend money), 价钱 jiàqian (price).",
                "Sino-Korean 전 (금전 geumjeon = 金錢); Sino-Japanese セン sen (金銭 kinsen) beside native ぜに zeni. The Japanese coin unit 銭 sen is this character."
              ]
            }
          },
          {
            term: "块",
            trad: "塊",
            roman: "kuài",
            gloss: "yuan (colloquial unit of currency); a piece, a lump",
            pos: "measure word",
            example: { text: "这件衬衫八十九块。", roman: "Zhè jiàn chènshān bāshíjiǔ kuài.", gloss: "This shirt is eighty-nine yuan." },
            linguistics: {
              origin: "phono-semantic compound",
              etymology: [
                "塊 is 土 (earth) + 鬼 guǐ as phonetic, and originally means a <b>clod of earth</b> — a lump. From there it became the general measure word for lumpy or chunk-like objects: 一块蛋糕 (a piece of cake), 一块肉, 一块石头.",
                "Its use for money comes from lumps of silver. Before modern coinage, silver circulated as weighed ingots and cut fragments, counted as 块. When the silver dollar arrived the word stuck, and 块 has been the spoken unit ever since, while the written and formal unit is 元 yuán."
              ],
              script: [
                "Simplified 块 replaces the phonetic 鬼 with 夬 guài, the same element in 快 kuài and 决 jué — an improvement in sound-hinting.",
                "The formal counterpart 元 yuán is a picture of a person with an emphasized head, meaning <i>the first, the primary</i>; it names the Yuan dynasty and, by way of <i>primary unit</i>, the currency."
              ],
              phonology: [
                "Fourth tone, kuài — homophonous with 快 (fast) and 筷 (chopsticks).",
                "Say 块 in shops, write 元 on receipts. The banknote itself is printed 壹圆/一元, never 一块. In Taiwan the spoken unit is also 塊 and the currency is 新台幣."
              ],
              cognates: [
                "一块钱 yí kuài qián (one yuan), 五十块 wǔshí kuài, 一块儿 yíkuàir (together — the same character, adverbial), 块头 kuàitóu (build, physique).",
                "The formal set 元/角/分 appears on price tags, in banking and in written Chinese; 块/毛/分 is what you hear."
              ]
            }
          },
          {
            term: "毛",
            roman: "máo",
            gloss: "ten cents (one tenth of a yuan); hair, fur",
            pos: "measure word / noun",
            example: { text: "八十九块九毛。", roman: "Bāshíjiǔ kuài jiǔ máo.", gloss: "Eighty-nine yuan and ninety cents." },
            linguistics: {
              origin: "pictograph, extended to a currency unit",
              etymology: [
                "毛 is a pictograph of hair, fur or a feather — the strands are still visible in the modern shape. It is the radical in 毯 tǎn (blanket) and 毫 háo (a fine hair, hence a tiny amount).",
                "How a hair became a dime is not firmly settled. The most credible account links 毛 to 毫 háo, <i>a fine hair</i> and hence <i>a very small amount</i>, used in late Qing and Republican-era coinage for small silver pieces — Cantonese still says 毫子 hòuh-jí for the same unit. Whatever the route, 毛 is purely colloquial: the formal unit is 角 jiǎo, a <i>horn</i> or corner, likewise from a shape metaphor."
              ],
              script: [
                "Traditional and simplified are identical.",
                "Do not confuse 毛 with 手 shǒu (hand) or 无 wú; the hooked final stroke is diagnostic."
              ],
              phonology: [
                "Second tone, máo.",
                "毛 is also the surname 毛 (Máo Zédōng), which is why Chinese banknotes are sometimes nicknamed 毛爷爷 — an unrelated pun on the portrait."
              ],
              cognates: [
                "毛衣 máoyī (woollen sweater), 羊毛 yángmáo (wool), 毛巾 máojīn (towel), 毛病 máobìng (a defect), 一毛钱 yì máo qián.",
                "The formal counterpart is 角 jiǎo: a price tag reading ¥5.60 is 五元六角, spoken 五块六."
              ]
            }
          },
          {
            term: "分",
            roman: "fēn",
            gloss: "cent (one hundredth of a yuan); minute; to divide",
            pos: "measure word / verb",
            example: { text: "这个只要五毛八分。", roman: "Zhège zhǐ yào wǔ máo bā fēn.", gloss: "This one is only fifty-eight cents." },
            linguistics: {
              origin: "compound ideograph",
              etymology: [
                "分 is 八 over 刀 (knife). 八 here is not the number eight but its original meaning, <i>to separate, to split apart</i> — two strokes turning away from each other. Knife plus separation = to divide. This is one of the cleanest ideographic compounds in the script.",
                "From <i>divide</i> flow all the modern senses: a divided part (部分 bùfen), a division of an hour (分 = minute), a division of a degree or a score (十分 shífēn, 满分 mǎnfēn), and the smallest division of the currency."
              ],
              script: [
                "Traditional and simplified are identical.",
                "分 with the person radical gives 份 fèn (a portion, a copy), which took over some of the fèn-tone uses."
              ],
              phonology: [
                "Two readings from one graph: fēn (first tone) for the verb <i>divide</i> and the units; fèn (fourth tone) for the derived noun <i>share, portion, duty</i> (身份 shēnfèn, identity; 缘分 yuánfèn). Yet another departing-tone derivation.",
                "In practice you will rarely hear 分 as money any more. Inflation and mobile payment have made one-cent amounts obsolete, and prices are usually given to the 毛."
              ],
              cognates: [
                "十分 shífēn (very, <i>ten parts</i>), 分钟 fēnzhōng (minute), 部分 bùfen (part), 分开 fēnkāi (separate), 分手 fēnshǒu (break up).",
                "Sino-Korean 분 (부분 bubun = 部分); Sino-Japanese ブン/フン bun/fun (部分 bubun, 五分 gofun)."
              ]
            }
          },
          {
            term: "贵",
            trad: "貴",
            roman: "guì",
            gloss: "expensive; (polite) your, honourable",
            pos: "adjective",
            example: { text: "这件衬衫太贵了。", roman: "Zhè jiàn chènshān tài guì le.", gloss: "This shirt is too expensive." },
            linguistics: {
              origin: "phono-semantic compound",
              etymology: [
                "貴 has 貝 (cowrie, money) at the bottom with a phonetic element above; the meaning is <i>of high value</i> and, applied to people, <i>of high rank, honourable</i>. Its opposite 賤 jiàn means both <i>cheap</i> and <i>lowly</i> — the language treats price and status as one scale.",
                "The honorific use you already met in unit 1 comes straight from this: 贵姓? guìxìng? asks <i>your honourable surname?</i> and 贵国 guìguó means <i>your esteemed country</i>. When you say 太贵了 in a shop you are using the same word that flatters a stranger."
              ],
              script: [
                "The 貝 radical again marks the money domain. Simplified 贝 is a cursive reduction that keeps the cowrie's outline and its two legs.",
                "Simplified 贵 also simplifies the upper element slightly."
              ],
              phonology: [
                "Fourth tone, guì. Compare 桂 guì (cassia) and 跪 guì (to kneel).",
                "The everyday antonym for price is 便宜 piányi; the antonym for status is 贱 jiàn, which is offensive when applied to people and should be avoided."
              ],
              cognates: [
                "贵姓 guìxìng (your surname, polite), 太贵了 tài guì le, 宝贵 bǎoguì (precious), 贵重 guìzhòng (valuable), 贵族 guìzú (aristocracy).",
                "Sino-Korean 귀 (귀중 gwijung = 貴重); Sino-Japanese キ ki (貴重 kichō, 高貴 kōki)."
              ]
            }
          },
          {
            term: "便宜",
            roman: "piányi",
            gloss: "cheap, inexpensive",
            pos: "adjective",
            example: { text: "有便宜一点儿的吗？", roman: "Yǒu piányi yìdiǎnr de ma?", gloss: "Do you have a slightly cheaper one?" },
            linguistics: {
              origin: "compound; specialized reading of 便",
              etymology: [
                "便 has two readings with two distinct meanings. As <b>biàn</b> it means <i>convenient</i> (方便 fāngbiàn, 便利 biànlì). As <b>pián</b> it appears in almost nothing except 便宜.",
                "The compound started life as biànyí, <i>what is expedient or advantageous</i> — the sense still alive in the set phrase 便宜行事 biànyí xíngshì, <i>act as circumstances allow</i>. The commercial sense <i>advantageous in price</i> split off, took the pián reading, and became a separate word. So <i>cheap</i> and <i>convenient</i> are historically the same word.",
                "宜 means <i>fitting, appropriate</i> (合宜, 适宜). Its graph is 宀 over 且, and 且 in the oldest forms depicts a stand or an ancestral tablet with offerings — <i>what is properly set out</i>."
              ],
              script: [
                "便 = 亻 (person) + 更 gēng. Neither character was simplified.",
                "The 宀 roof radical here is the same one in 家, 安, 宿, 客."
              ],
              phonology: [
                "piányi: second tone plus a <b>neutral</b> syllable. Learners who say piányí or, worse, biànyí will not be understood in a shop.",
                "Note the useful idiom 占便宜 zhàn piányi, <i>to take unfair advantage</i>, where the same word carries a negative moral charge."
              ],
              cognates: [
                "便宜货 piányihuò (a bargain), 方便 fāngbiàn (convenient), 便利店 biànlìdiàn (convenience store), 随便 suíbiàn (as you like, casual), 合适 héshì (suitable).",
                "Sino-Korean 편 (편리 pyeolli = 便利); Sino-Japanese ベン/ビン ben/bin (便利 benri, 郵便 yūbin)."
              ]
            }
          },
          {
            term: "商店",
            roman: "shāngdiàn",
            gloss: "shop, store",
            pos: "noun",
            example: { text: "学校旁边有一个商店。", roman: "Xuéxiào pángbiān yǒu yí ge shāngdiàn.", gloss: "There's a shop next to the school." },
            linguistics: {
              origin: "compound (noun + noun)",
              etymology: [
                "商 means <i>commerce, a merchant</i>; 店 is <i>a shop, an inn</i>. The compound is straightforward, but the first half has a famous backstory.",
                "商 is also the name of the Shang dynasty (c. 1600–1046 BCE). The traditional explanation is that after the Zhou conquest, displaced Shang people, barred from landholding, took up trade — so 商人 came to mean <i>merchant</i>, literally <i>a Shang person</i>. This account is repeated everywhere and is culturally important, but it is a traditional etymology rather than a demonstrated one; treat it as a story that Chinese culture tells about itself.",
                "店 is the more transparent half: 广 (a building open on one side, a shelter) plus 占 zhàn as phonetic."
              ],
              script: [
                "广 as a radical means a roofed structure built against a wall or cliff: 店, 库 kù (storehouse), 座 zuò (seat), 康, 庭.",
                "Neither character was simplified in the mainland reform (广 as an independent character was, from 廣)."
              ],
              phonology: [
                "shāngdiàn: first tone then fourth tone.",
                "Modern usage increasingly prefers 店 alone with a modifier: 书店 shūdiàn (bookshop), 饭店 fàndiàn (restaurant/hotel), 便利店 biànlìdiàn (convenience store), 网店 wǎngdiàn (online shop)."
              ],
              cognates: [
                "商人 shāngrén (merchant), 商业 shāngyè (commerce), 商量 shāngliang (to discuss, to negotiate), 超市 chāoshì (supermarket), 百货商店 bǎihuò shāngdiàn (department store).",
                "Sino-Korean 상 (상점 sangjeom = 商店); Sino-Japanese ショウ shō (商店 shōten, 商業 shōgyō)."
              ]
            }
          },
          {
            term: "衣服",
            roman: "yīfu",
            gloss: "clothes, clothing",
            pos: "noun",
            example: { text: "我要买几件衣服。", roman: "Wǒ yào mǎi jǐ jiàn yīfu.", gloss: "I want to buy a few items of clothing." },
            linguistics: {
              origin: "compound (noun + noun)",
              etymology: [
                "衣 is a pictograph of a garment seen from the front: the collar at the top with two overlapping lapels or sleeves below. In Classical Chinese 衣 alone meant upper garments, with 裳 cháng for the lower ones.",
                "服 originally meant <i>to submit, to serve</i> — its bronze form shows a kneeling figure 卩 and a hand 又 beside a vessel or boat element. The clothing sense comes from <i>to put on, to bear</i> (as in 服从 fúcóng, to obey, and 一服药 yí fù yào, a dose of medicine — you 'take on' both)."
              ],
              script: [
                "As a left-hand radical 衣 is written 衤 (with an extra dot), which distinguishes it from 礻, the altar/ritual radical. 衬, 衫, 裤, 袜, 被 all carry 衤; 神, 礼, 福, 祝 carry 礻. Confusing the two is one of the commonest handwriting slips.",
                "Neither character was simplified."
              ],
              phonology: [
                "yīfu: first tone plus a <b>neutral</b> syllable.",
                "衣 also has a rare fourth-tone verbal reading yì (<i>to clothe</i>) in Classical texts. The measure word for clothing is 件 jiàn: 一件衣服."
              ],
              cognates: [
                "毛衣 máoyī (sweater), 大衣 dàyī (overcoat), 睡衣 shuìyī (pyjamas), 衣柜 yīguì (wardrobe), 舒服 shūfu (comfortable — the same 服).",
                "Sino-Korean 의 (의복 uibok = 衣服); Sino-Japanese イ/フク i/fuku (衣服 ifuku, 洋服 yōfuku)."
              ]
            }
          },
          {
            term: "衬衫",
            trad: "襯衫",
            roman: "chènshān",
            gloss: "shirt, blouse",
            pos: "noun",
            example: { text: "这件衬衫是红的。", roman: "Zhè jiàn chènshān shì hóng de.", gloss: "This shirt is red." },
            linguistics: {
              origin: "compound (two clothing nouns)",
              etymology: [
                "襯 means <i>to line, an inner garment</i> — what is worn next to the body under an outer robe. 衫 is an unlined single-layer garment. Together they name the Western-style shirt, which is worn under a jacket and is single-layered: a precise description built from two old words.",
                "The compound is modern, dating from the period when Western dress entered Chinese life, but both morphemes are ancient."
              ],
              script: [
                "襯 = 衤 + 親 qīn as phonetic; simplified 衬 uses the simplified 亲.",
                "衫 = 衤 + 彡, three slanting strokes that serve as the phonetic (shān) and, decoratively, suggest hanging fabric. 彡 appears in 影 yǐng, 形 xíng, 须 xū."
              ],
              phonology: [
                "chènshān: fourth tone then first tone. Both initials are retroflex (ch-, sh-).",
                "The measure word is 件: 一件衬衫, 两件衬衫."
              ],
              cognates: [
                "衬衣 chènyī (undershirt/shirt), 衬托 chèntuō (to set off, to serve as a foil), 汗衫 hànshān (T-shirt, <i>sweat shirt</i>), T恤 T-xù (T-shirt, from English via Cantonese).",
                "Measure-word family for clothes: 件 for tops and items generally, 条 for trousers and skirts, 双 shuāng for shoes and socks, 顶 dǐng for hats."
              ]
            }
          },
          {
            term: "裤子",
            trad: "褲子",
            roman: "kùzi",
            gloss: "trousers, pants",
            pos: "noun",
            example: { text: "这条裤子多少钱？", roman: "Zhè tiáo kùzi duōshao qián?", gloss: "How much are these trousers?" },
            linguistics: {
              origin: "phono-semantic compound + noun suffix",
              etymology: [
                "褲 is 衤 (clothing) + 庫 kù as phonetic; an older and still-seen variant is 袴, with 夸 kuā as the phonetic. Trousers entered Chinese dress from the northern steppe cultures — the famous <i>hu clothing and mounted archery</i> reform of King Wuling of Zhao in the fourth century BCE adopted nomadic trousers for cavalry, against considerable resistance from robe-wearing traditionalists.",
                "The suffix 子 is the grammaticalized form of 子 zǐ, <i>child</i>. It attaches to many concrete nouns as a mere formal marker: 桌子 table, 椅子 chair, 儿子 son, 帽子 hat, 房子 house. It carries no diminutive meaning in modern Mandarin."
              ],
              script: [
                "庫/库 is 广 (building) + 車 (chariot) = a shed for chariots, i.e. a storehouse. It contributes only sound to 裤.",
                "Simplified 裤 pairs 衤 with the simplified 库."
              ],
              phonology: [
                "kùzi: fourth tone plus <b>neutral</b> 子. The 子 suffix is always neutral.",
                "The measure word is 条 tiáo, used for long flexible things — trousers, skirts, fish, roads, rivers, dogs, and news items."
              ],
              cognates: [
                "牛仔裤 niúzǎikù (jeans, <i>cowboy trousers</i>), 短裤 duǎnkù (shorts), 裙子 qúnzi (skirt), 袜子 wàzi (socks), 帽子 màozi (hat).",
                "Sino-Korean 고 (바지 baji is the native Korean word; 袴 go survives only in compounds); Sino-Japanese コ ko, with native はかま hakama for the traditional garment."
              ]
            }
          },
          {
            term: "件",
            roman: "jiàn",
            gloss: "(measure word for clothing items, matters, luggage)",
            pos: "measure word",
            example: { text: "我买了三件衣服。", roman: "Wǒ mǎi le sān jiàn yīfu.", gloss: "I bought three items of clothing." },
            linguistics: {
              origin: "compound ideograph",
              etymology: [
                "件 is 亻 (person) + 牛 (ox). The Shuowen glosses it as <i>to divide</i>, and the usual reading of the graph is a person separating an ox into portions — hence discrete items, pieces, cases. Some scholars are unconvinced by the analysis; what is clear is that the word has meant <i>an individual item</i> since early times.",
                "Its modern range is items of clothing, pieces of luggage, and abstract <i>matters</i>: 一件事 yí jiàn shì, one matter."
              ],
              script: [
                "Traditional and simplified are identical.",
                "牛 as a component also appears in 物 wù (thing), 特 tè (special), 牧 mù (herd) — the ox was the reference animal for value and measure in early agrarian China."
              ],
              phonology: [
                "Fourth tone, jiàn.",
                "Measure words are obligatory between a number or demonstrative and a noun: 一件衬衫, 这件衣服, 那三件行李. Saying 一衬衫 is impossible in Chinese in the way that <i>a slice bread</i> is impossible in English."
              ],
              cognates: [
                "一件事 yí jiàn shì (a matter), 文件 wénjiàn (document), 条件 tiáojiàn (condition), 事件 shìjiàn (incident), 软件 ruǎnjiàn (software).",
                "The default measure word 个 ge can replace many specific ones in casual speech, but not 件 for clothes — 一个衬衫 sounds clearly wrong."
              ]
            }
          },
          {
            term: "条",
            trad: "條",
            roman: "tiáo",
            gloss: "(measure word for long, narrow, flexible things)",
            pos: "measure word",
            example: { text: "我想买一条裤子。", roman: "Wǒ xiǎng mǎi yì tiáo kùzi.", gloss: "I'd like to buy a pair of trousers." },
            linguistics: {
              origin: "phono-semantic compound",
              etymology: [
                "條 is 木 (wood) with 攸 yōu as phonetic, and originally means <i>a small branch, a twig</i>. From the shape of a twig came the general classifier for anything long and flexible.",
                "This is the normal way Chinese measure words are born: a concrete noun generalizes to a class of shapes. 张 zhāng (to stretch) covers flat things; 支 zhī (a branch) covers sticks; 粒 lì (a grain) covers tiny round things; 头 tóu (head) covers livestock."
              ],
              script: [
                "Simplified 条 replaces the 攸 phonetic with 夂 above 木, a cursive shortening.",
                "攸 also gives 修 xiū (to repair) and 悠 yōu (leisurely)."
              ],
              phonology: [
                "Second tone, tiáo. After 一 the numeral takes fourth tone by sandhi: 一条 yì tiáo.",
                "The 条 class is worth memorizing as a set: 裤子, 裙子, 鱼, 狗, 蛇, 河, 路, 街, 线, 腿, 新闻, 短信. The unifying idea is length and flexibility, though 新闻 (a news item) and 消息 show the class has abstract extensions."
              ],
              cognates: [
                "条件 tiáojiàn (condition), 面条 miàntiáo (noodles), 条约 tiáoyuē (treaty), 苗条 miáotiao (slender), 有条理 yǒu tiáolǐ (well organized).",
                "Sino-Korean 조 (조건 jogeon = 條件); Sino-Japanese ジョウ jō (条件 jōken, 条約 jōyaku)."
              ]
            }
          },
          {
            term: "颜色",
            trad: "顏色",
            roman: "yánsè",
            gloss: "colour",
            pos: "noun",
            example: { text: "你喜欢什么颜色？", roman: "Nǐ xǐhuan shénme yánsè?", gloss: "What colour do you like?" },
            linguistics: {
              origin: "compound (noun + noun)",
              etymology: [
                "Both halves originally refer to the <b>face</b>. 顏 means the space between the brows and hence the countenance; 色 in its earliest uses is the expression on a face, the look someone gives. 颜色 therefore began as <i>complexion, facial expression</i> — the meaning it still has in the idiom 给他点儿颜色看看 (teach him a lesson, literally <i>show him some colour</i>).",
                "The generalization from facial hue to colour in general is straightforward and was complete well before the modern period. 色 alone also developed the meaning <i>sensuality, lust</i> (好色 hàosè), a semantic branch that also traces back to <i>the look on a face</i>."
              ],
              script: [
                "顏 = 彦 yàn as phonetic + 頁 (a head). The 頁 radical, as noted in earlier units, is a pictograph of a head, not a page.",
                "色 is analysed by the Shuowen as 人 over 卩 (a kneeling person) and read as one face above another; the analysis is old but not securely established."
              ],
              phonology: [
                "yánsè: second tone then fourth tone. In Beijing speech you will also hear 颜色 as yánshǎi in the sense of dyestuff.",
                "Colour words as predicates behave like adjectives: 这件是红的 (this one is red), 这件很红 (this one is very red)."
              ],
              cognates: [
                "红色 hóngsè (red), 蓝色 lánsè (blue), 白色 báisè (white), 颜料 yánliào (pigment), 脸色 liǎnsè (facial expression / complexion).",
                "Sino-Korean 안색 ansaek (顏色) still means <i>complexion</i>, not <i>colour</i> — the Korean word preserves the older meaning while Chinese generalized it. A neat illustration of how a shared compound can drift apart."
              ]
            }
          },
          {
            term: "红",
            trad: "紅",
            roman: "hóng",
            gloss: "red",
            pos: "adjective",
            example: { text: "我喜欢红的那件。", roman: "Wǒ xǐhuan hóng de nà jiàn.", gloss: "I like the red one." },
            linguistics: {
              origin: "phono-semantic compound",
              etymology: [
                "紅 is 糸 (silk) + 工 gōng as phonetic. Its earliest meaning is narrower than the modern one: a light red or pink <b>silk fabric</b>. The general colour term in Classical Chinese was 赤 chì or 朱 zhū; 紅 broadened later and displaced them.",
                "Nearly all Chinese colour words carry the silk radical — 紅, 綠 lǜ, 紫 zǐ, 綠, 緋 fēi, 縹 piǎo — because colour was a property of dyed cloth before it was an abstract category. The vocabulary of colour is a vocabulary of textiles."
              ],
              script: [
                "Simplified 红 uses 纟.",
                "工 as a phonetic also gives 空 kōng, 江 jiāng, 功 gōng, 攻 gōng — a series whose modern readings have scattered widely."
              ],
              phonology: [
                "Second tone, hóng.",
                "红 is used attributively with 的 (红的衣服, 红色的衣服) or predicatively with 很 (这件很红). For a plain identification, 是…的 is idiomatic: 这件是红的."
              ],
              cognates: [
                "红色 hóngsè (red), 红茶 hóngchá (black tea, literally <i>red tea</i>), 红包 hóngbāo (red envelope of money), 红绿灯 hónglǜdēng (traffic light), 走红 zǒuhóng (to become popular).",
                "Culturally red is the colour of luck, celebration and weddings; white, not black, is the traditional colour of mourning. A gift of money is always in a red envelope, and the amount should ideally avoid the number 4."
              ]
            }
          },
          {
            term: "穿",
            roman: "chuān",
            gloss: "to wear, to put on (clothes, shoes)",
            pos: "verb",
            example: { text: "你穿多大号？", roman: "Nǐ chuān duō dà hào?", gloss: "What size do you wear?" },
            linguistics: {
              origin: "compound ideograph",
              etymology: [
                "穿 is 穴 (a cave, a hole) over 牙 (a tooth). The original meaning is <i>to bore through, to pierce</i> — a tooth making a hole. That sense is fully alive: 穿孔 chuānkǒng (to perforate), 穿过 chuānguò (to pass through), 水滴石穿 (dripping water bores through stone).",
                "<i>To wear</i> is a specialization of <i>to pass through</i>: you thread your body through the garment. The logic is the same as English <i>slip into</i> a coat, and it explains why 穿 is used only for things you put limbs through — clothes, trousers, shoes, socks — while accessories that merely hang or attach take 戴 dài: 戴帽子 (hat), 戴眼镜 (glasses), 戴表 (watch)."
              ],
              script: [
                "穴 is the cave/hollow radical, also in 空 kōng, 窗 chuāng, 究 jiū, 突 tū.",
                "Traditional and simplified are identical."
              ],
              phonology: [
                "First tone, chuān, retroflex initial. Compare 川 chuān (river) and 船 chuán (boat, second tone).",
                "穿 versus 戴 is a genuine vocabulary test: 穿衣服, 穿鞋, 穿袜子 but 戴帽子, 戴手表, 戴戒指."
              ],
              cognates: [
                "穿衣服 chuān yīfu (get dressed), 穿过 chuānguò (cross through), 穿着 chuānzhuó (attire), 看穿 kànchuān (see through someone).",
                "穿 is rare in Sino-Korean and Sino-Japanese vocabulary, but the semantic split it shows up in is shared: Japanese also divides its wearing verbs by body region — きる kiru for the torso, はく haku for legs and feet, かぶる kaburu for the head — where English uses <i>wear</i> throughout."
              ]
            }
          },
          {
            term: "比",
            roman: "bǐ",
            gloss: "compared to, than; to compare",
            pos: "coverb / verb",
            example: { text: "这件比那件便宜。", roman: "Zhè jiàn bǐ nà jiàn piányi.", gloss: "This one is cheaper than that one." },
            linguistics: {
              origin: "compound ideograph (pictographic)",
              etymology: [
                "比 draws two people standing side by side, facing the same way — hence <i>to be side by side, to compare</i>. It belongs to a beautiful set of graphs built from the same human figure in different arrangements: 从 cóng, one person following another (<i>to follow</i>); 北 běi, two people back to back (<i>to turn away</i>, hence <i>north</i>, and the original word survives in 背 bèi, the back); 化 huà, one figure upright and one inverted (<i>to transform</i>); 比, two side by side.",
                "The comparative construction A 比 B grew out of the verb <i>to compare</i> and was fully grammaticalized as a coverb by the late imperial period."
              ],
              script: [
                "Traditional and simplified are identical.",
                "比 serves as the phonetic in 批 pī, 庇 bì and 毙 bì, and it is a component of 皆 jiē (all) and 昆 kūn."
              ],
              phonology: [
                "Third tone, bǐ. In 比较 bǐjiào (comparatively) the second syllable is fourth tone.",
                "Sandhi applies before another third tone: 比你好 is <i>bí nǐ hǎo</i>."
              ],
              cognates: [
                "比较 bǐjiào (to compare; comparatively), 比赛 bǐsài (a match, competition), 比如 bǐrú (for example), 对比 duìbǐ (contrast), 无比 wúbǐ (incomparable).",
                "Sino-Korean 비 (비교 bigyo = 比較); Sino-Japanese ヒ hi (比較 hikaku, 比例 hirei)."
              ]
            }
          },
          {
            term: "号",
            trad: "號",
            roman: "hào",
            gloss: "size; number; day of the month",
            pos: "noun / measure word",
            example: { text: "我穿中号，他穿大号。", roman: "Wǒ chuān zhōng hào, tā chuān dà hào.", gloss: "I wear medium; he wears large." },
            linguistics: {
              origin: "phono-semantic compound",
              etymology: [
                "The traditional 號 is 号 plus 虍 (tiger), and its original meaning is <i>to cry out, to roar</i> — a tiger's call. That sense survives in 呼号 hūháo (to wail) and in the second reading háo (号叫 háojiào, to howl).",
                "From <i>to call out</i> came <i>to call something by a name</i>, hence <i>a title, a designation, a mark</i>, and from there the wholly modern uses: a serial number, a size, and a date. You already met the date use in unit 3 (五月十号); it is exactly the same word."
              ],
              script: [
                "Simplified 号 drops the tiger entirely, keeping only the 号 element — which was itself the original phonetic-semantic core meaning <i>to call out</i>.",
                "虍 is the tiger radical, also in 虎 hǔ, 虚 xū, 虑 lǜ."
              ],
              phonology: [
                "Fourth tone hào for number/size/date; second tone háo for the howling sense.",
                "Clothing sizes are 大号 dà hào, 中号 zhōng hào, 小号 xiǎo hào, and the question is 你穿多大号? Shoe sizes use a number: 我穿四十号."
              ],
              cognates: [
                "号码 hàomǎ (number), 电话号码 diànhuà hàomǎ (phone number), 几号 jǐ hào (what date), 房间号 fángjiān hào (room number), 口号 kǒuhào (slogan), 信号 xìnhào (signal).",
                "Sino-Korean 호 (번호 beonho = 番號); Sino-Japanese ゴウ gō (番号 bangō, 信号 shingō)."
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
            name: "多少钱 and the money system: 块, 毛, 分",
            pattern: "(Measure + Noun) + 多少钱？    ·    N 块 N 毛 N 分（钱）",
            explanation: [
              "The question is 多少钱? — literally <i>how much money</i>. It attaches to whatever you are pricing: 这件衬衫多少钱? or, with the item already established, just 多少钱? Recall from unit 2 that 多少 asks about quantities of any size and takes no measure word, while 几 expects a small number and does take one. Prices always use 多少.",
              "The spoken units are 块 (yuan), 毛 (one tenth), 分 (one hundredth), and they run largest to smallest: 八十九块九毛五分. Three conventions make real speech shorter. First, the final unit is normally dropped: 五块二 = 5.20, 八十九块九 = 89.90. Second, the word 钱 may be added at the very end for clarity: 五块钱. Third, if there is no 毛 amount, insert 零 líng: 五块零五分 = 5.05.",
              "Two is the usual irregularity. Before 块 and 毛 you say 两, not 二: 两块钱, 两毛. In the tens and hundreds you go back to 二: 二十块, 一百二十块. And note that the written currency, on price tags and receipts, uses 元 yuán, 角 jiǎo, 分 — so ¥89.90 is written 八十九元九角 and spoken 八十九块九. Learn both; use the right one in the right place.",
              "Answering: Chinese does not need a verb. 一百二十块 is a complete answer, though 是 may appear for emphasis (这件是一百二十块)."
            ],
            examples: [
              { text: "这条裤子多少钱？", roman: "Zhè tiáo kùzi duōshao qián?", gloss: "How much are these trousers?" },
              { text: "八十九块九毛五。", roman: "Bāshíjiǔ kuài jiǔ máo wǔ.", gloss: "Eighty-nine ninety-five." },
              { text: "两块钱一个。", roman: "Liǎng kuài qián yí ge.", gloss: "Two yuan each." },
              { text: "一共多少钱？", roman: "Yígòng duōshao qián?", gloss: "How much altogether?" }
            ]
          },
          {
            name: "Measure words 件 and 条, and the 的 that replaces a noun",
            pattern: "Number/这/那 + Measure + Noun    ·    Adjective + 的 (= the … one)",
            explanation: [
              "Chinese nouns cannot be counted directly. Between a number or a demonstrative and the noun you must insert a measure word, and clothing takes specific ones: <b>件</b> jiàn for shirts, jackets and clothing items in general; <b>条</b> tiáo for anything long and flexible, which covers trousers, skirts, scarves and ties; <b>双</b> shuāng for pairs (shoes, socks, chopsticks); <b>顶</b> dǐng for hats. 一件衬衫, 两条裤子, 三双鞋.",
              "The second half of this pattern is how you avoid repeating the noun. Adding 的 to a modifier turns the phrase into a noun by itself: 红的 = the red one, 便宜的 = the cheap one, 我的 = mine, 大的 = the big one. This is exactly what a shopper needs: 有便宜一点儿的吗? (do you have a slightly cheaper one?), 我要红的 (I'll take the red one).",
              "Note the difference between 一点儿 and 有点儿, because shopping is where it bites. <b>Adjective + 一点儿</b> means <i>a bit more —</i> and is neutral: 便宜一点儿 (a bit cheaper), 大一点儿 (a bit bigger). <b>有(一)点儿 + adjective</b> comes before the adjective and always carries a complaint: 有点儿贵 (a bit too expensive), 有点儿小 (a bit too small). 有点儿好 is impossible, because you cannot complain that something is good."
            ],
            examples: [
              { text: "我买了两件衬衫。", roman: "Wǒ mǎi le liǎng jiàn chènshān.", gloss: "I bought two shirts." },
              { text: "这条裤子有点儿贵。", roman: "Zhè tiáo kùzi yǒudiǎnr guì.", gloss: "These trousers are a bit expensive." },
              { text: "有大一点儿的吗？", roman: "Yǒu dà yìdiǎnr de ma?", gloss: "Do you have a slightly bigger one?" },
              { text: "我要红的，不要黑的。", roman: "Wǒ yào hóng de, bú yào hēi de.", gloss: "I want the red one, not the black one." }
            ]
          },
          {
            name: "太…了 for excess and exclamation",
            pattern: "太 + Adjective + 了    ·    negative: 不太 + Adjective",
            explanation: [
              "太…了 is the frame for anything excessive or striking. In a shop it is a price complaint: 太贵了! (too expensive!). Elsewhere it is enthusiasm: 太好了! (fantastic!), 太漂亮了! (gorgeous!). Intonation, not grammar, tells the two apart.",
              "The 了 is not the perfective aspect marker you will meet later; it is the sentence-final particle of exclamation and change of state. It is close to obligatory here — 太贵 without 了 sounds truncated to a native ear. The only common exception is when 太 is negated: 不太贵 (not too expensive) never takes 了.",
              "That negative deserves its own note, because it is one of the most useful hedges in the language. 不太 + adjective means <i>not very</i>, and it is the polite way to deliver a mild negative judgement: 不太好 (not great), 不太便宜 (not exactly cheap), 不太喜欢 (not that keen). Compare the three degrees you now control: 很贵 (expensive, neutral statement), 太贵了 (far too expensive, exclamation), 有点儿贵 (a bit expensive, mild complaint), 不太贵 (not very expensive, hedged positive)."
            ],
            examples: [
              { text: "太贵了，我不买。", roman: "Tài guì le, wǒ bù mǎi.", gloss: "Too expensive — I won't buy it." },
              { text: "这个颜色太好看了！", roman: "Zhège yánsè tài hǎokàn le!", gloss: "This colour is gorgeous!" },
              { text: "这件衣服不太便宜。", roman: "Zhè jiàn yīfu bú tài piányi.", gloss: "This piece of clothing isn't very cheap." },
              { text: "这条裤子有点儿小，有大号的吗？", roman: "Zhè tiáo kùzi yǒudiǎnr xiǎo, yǒu dà hào de ma?", gloss: "These trousers are a bit small — do you have a large?" }
            ]
          },
          {
            name: "Comparison with 比 (and 跟…一样, 没有)",
            pattern: "A + 比 + B + Adjective (+ amount)    ·    A + 跟 + B + 一样 (+ Adj)    ·    A + 没有 + B + (那么) + Adj",
            explanation: [
              "The comparative is simply A 比 B + adjective. There is no word for <i>than</i>, no comparative ending, and no extra word for <i>more</i>: 这件比那件便宜 = this one is cheaper than that one. 我比他高 = I'm taller than him.",
              "The trap is degree adverbs. You cannot put 很, 太 or 非常 in front of the adjective in a 比 sentence — 我比他很高 is wrong. To express degree, put it <b>after</b> the adjective: 便宜一点儿 (a little cheaper), 便宜得多 piányi de duō (much cheaper), 便宜多了 (much cheaper), or a concrete amount, 便宜三十块 (thirty yuan cheaper), 大两号 (two sizes bigger), 大三岁 (three years older). Chinese puts the measurement of the gap at the end, which is the reverse of English.",
              "Equality uses a different frame: A 跟 B 一样 = A is the same as B, optionally with an adjective — 这条裤子跟那条一样贵 (these trousers cost the same as those). Negate it as 跟…不一样.",
              "For the negative comparison, 没有 is preferred to 不比. A 没有 B (那么) + adjective means <i>A is not as … as B</i>: 这件没有那件贵 (this one isn't as expensive as that one). 不比 also exists but means something narrower — <i>not more … than</i>, often rebutting a claim: 我不比他高 (I'm not taller than him — we may be equal). Beginners should default to 没有."
            ],
            examples: [
              { text: "这件比那件便宜。", roman: "Zhè jiàn bǐ nà jiàn piányi.", gloss: "This one is cheaper than that one." },
              { text: "这件比那件便宜三十块。", roman: "Zhè jiàn bǐ nà jiàn piányi sānshí kuài.", gloss: "This one is thirty yuan cheaper than that one." },
              { text: "红的比蓝的好看得多。", roman: "Hóng de bǐ lán de hǎokàn de duō.", gloss: "The red one is much better looking than the blue one." },
              { text: "裤子跟衬衫一样贵。", roman: "Kùzi gēn chènshān yíyàng guì.", gloss: "The trousers cost the same as the shirt." },
              { text: "这个商店没有那个商店便宜。", roman: "Zhège shāngdiàn méiyǒu nàge shāngdiàn piányi.", gloss: "This shop isn't as cheap as that one." }
            ]
          }
        ]
      },
      {
        type: "notes",
        title: "Culture note: prices, bargaining and paying with a phone",
        body: [
          "Where you can bargain is a matter of venue, not of nerve. In department stores, chain shops, supermarkets and anywhere with a printed barcode, prices are fixed and haggling is simply awkward. In street markets, tourist markets, small clothing stalls and antique fairs, bargaining is expected and a shopper who pays the first price is considered to have volunteered a donation. The opening move is 能便宜一点儿吗? (can you make it a bit cheaper?) or 太贵了，便宜点儿吧. Walking away slowly is the strongest and most polite tool you have.",
          "Discounts are counted the opposite way round from English, and this catches out every visitor. 打折 dǎzhé means <i>to discount</i>, and the number states the fraction you <b>pay</b>, not the fraction you save. 打八折 dǎ bā zhé is 80% of the price — that is, 20% off. 打五折 is half price. 打七五折 is 25% off. When you see 全场三折 on a shop window, everything is at 30% of list price, which is a very good sale indeed.",
          "Cash has largely disappeared from Chinese urban life. Payment is by QR code through 支付宝 Zhīfùbǎo (Alipay) or 微信支付 Wēixìn Zhīfù (WeChat Pay), including at street stalls and from buskers. Small shops may genuinely be unable to make change for a 100-yuan note. The vocabulary still matters — you will hear 多少钱, 一共, 找您钱 (here's your change) — but the physical 毛 and 分 coins are now nearly extinct, and prices are usually quoted to the 块 or to the 毛.",
          "A word on sizes and colours. Chinese clothing sizes run smaller than European or American ones, and 大号 in a local shop may correspond to a Western medium; asking 有大一点儿的吗? is routine, not rude. Colour carries meaning: red is celebratory and lucky, gold is prosperity, white is associated with funerals and is avoided for gifts, and a green hat (绿帽子 lǜmàozi) is a byword for a man whose wife is unfaithful — never buy one as a present. Numbers matter too: 8 (八 bā) sounds like 发 fā, to prosper, and prices ending in 8 are considered auspicious, while 4 (四 sì) sounds like 死 sǐ, to die, and is avoided in prices, floor numbers and gift amounts."
        ]
      },
      {
        type: "practice",
        title: "Practice",
        exercises: [
          {
            type: "mcq",
            prompt: "The price is ¥5.20. How would a shopkeeper normally say it out loud?",
            promptAudio: "五块二",
            choices: ["五块二", "五元二角", "五块二分", "五毛二块"],
            answer: 0,
            explain: "Spoken Chinese uses 块/毛/分 and drops the final unit: 五块二 = 5 yuan 20. 五元二角 is the written/formal form."
          },
          {
            type: "mcq",
            prompt: "Which sentence is WRONG?",
            promptAudio: null,
            choices: ["这件比那件很便宜。", "这件比那件便宜。", "这件比那件便宜一点儿。", "这件比那件便宜三十块。"],
            answer: 0,
            explain: "Degree adverbs like 很, 太 and 非常 cannot appear before the adjective in a 比 sentence. Degree goes after the adjective instead."
          },
          {
            type: "mcq",
            prompt: "A shop sign says 打八折. What does it mean?",
            promptAudio: null,
            choices: ["You pay 80% of the price (20% off).", "You get 80% off.", "Eight items for the price of one.", "The price is eight yuan."],
            answer: 0,
            explain: "The number in 打X折 states the fraction you pay. 打八折 = pay 80%; 打五折 = half price."
          },
          {
            type: "mcq",
            prompt: "这条裤子 ___ 贵。 — you want to say it's 'a bit too expensive' (a mild complaint).",
            promptAudio: "这条裤子有点儿贵。",
            choices: ["有点儿", "一点儿", "太", "比"],
            answer: 0,
            explain: "有点儿 goes before the adjective and carries a complaint. 一点儿 goes after an adjective and is neutral: 便宜一点儿."
          },
          {
            type: "typing",
            prompt: "Type 'Too expensive!' in Chinese, using the 太…了 frame.",
            answer: ["太贵了", "太贵了！", "太贵了!", "tài guì le", "tai gui le"],
            hint: "Three characters. Don't forget the final particle."
          },
          {
            type: "typing",
            prompt: "Type the Chinese for 'to buy things / to go shopping' (3 characters).",
            answer: ["买东西", "買東西", "mǎi dōngxi", "mai dongxi", "mǎidōngxi", "maidongxi"],
            hint: "Verb plus 'east-west'."
          },
          {
            type: "typing",
            prompt: "Type 'This one is cheaper than that one.' in Chinese, using 比 and the measure word 件.",
            answer: ["这件比那件便宜", "这件比那件便宜。", "zhè jiàn bǐ nà jiàn piányi", "zhe jian bi na jian pianyi"],
            hint: "A 比 B + adjective. No 很."
          },
          {
            type: "listening",
            prompt: "Listen and choose the price you heard.",
            audioText: "八十九块九毛。",
            choices: ["¥89.90", "¥89.09", "¥8.99", "¥99.80"],
            answer: 0,
            explain: "八十九块 = 89 yuan, 九毛 = 90 cents (nine tenths of a yuan)."
          },
          {
            type: "listening",
            prompt: "Listen. What is the customer asking for?",
            audioText: "有便宜一点儿的吗？",
            choices: [
              "Something a bit cheaper",
              "Something a bit bigger",
              "The cheapest one in the shop",
              "A discount of ten percent"
            ],
            answer: 0,
            explain: "Adjective + 一点儿 = a bit more so; 的 turns the phrase into 'one'. Literally: do you have a slightly cheaper one?"
          },
          {
            type: "match",
            prompt: "Match each noun with its correct measure word.",
            pairs: [
              { a: "衬衫", b: "件" },
              { a: "裤子", b: "条" },
              { a: "鞋", b: "双" },
              { a: "帽子", b: "顶" },
              { a: "水", b: "杯" }
            ]
          },
          {
            type: "order",
            prompt: "Arrange into a sentence: 'I'd like to buy a red shirt.'",
            tokens: ["我", "想", "买", "一件", "红的", "衬衫"],
            answer: "我 想 买 一件 红的 衬衫"
          },
          {
            type: "order",
            prompt: "Arrange into a sentence: 'These trousers are thirty yuan cheaper than that shirt.'",
            tokens: ["这条裤子", "比", "那件衬衫", "便宜", "三十块"],
            answer: "这条裤子 比 那件衬衫 便宜 三十块"
          }
        ]
      }
    ]
  });
})();
