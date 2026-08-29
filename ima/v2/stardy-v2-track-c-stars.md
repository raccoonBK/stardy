```json
{
  "tracks": [
    {
      "id": "stars",
      "name_zh": "恒星的一生",
      "name_en": "Lives of the Stars",
      "tagline_zh": "从一团冷气到一场壮烈爆发",
      "tagline_en": "From cold gas to glorious blast",
      "icon": "⭐",
      "nodes": [
        {
          "chapter_zh": "第 6 章 · 恒星的一生",
          "chapter_en": "Chapter 6 · Lives of the Stars",
          "left": 0,
          "lesson": {
            "id": "str-c1-01-distance-ladder",
            "title_zh": "宇宙距离阶梯",
            "title_en": "The Cosmic Distance Ladder",
            "subtitle_zh": "一步步量到宇宙尽头",
            "subtitle_en": "Measuring our way to the edge",
            "icon": "📏",
            "xp": 30,
            "teach": [
              {
                "visual": "🪜",
                "title_zh": "量天要靠接力",
                "title_en": "A relay race of rulers",
                "body_zh": "天体太远，没法拿尺子量。天文学家用一串方法接力：近处用视差，远处用标准烛光，更远用红移——每级阶梯踩着上一级的成果往上走。",
                "body_en": "No ruler reaches the stars. Astronomers chain methods instead: parallax nearby, standard candles farther out, redshift beyond — each rung built on the last."
              },
              {
                "visual": "👀",
                "title_zh": "视差：两只眼睛量星星",
                "title_en": "Parallax: the two-eyes trick",
                "body_zh": "地球绕太阳公转，冬天和夏天看同一颗星，方向会略有不同。离得越远，角度变化越小。量出这个角度，就能用几何算出距离——这是最可靠的底级阶梯。",
                "body_en": "As Earth orbits, a star's direction shifts slightly between winter and summer. The farther the star, the tinier the shift. Measure the angle, and geometry hands you the distance."
              },
              {
                "visual": "🕯️",
                "title_zh": "标准烛光：已知瓦数的灯泡",
                "title_en": "Standard candles: known-watt bulbs",
                "body_zh": "有些天体爆发时的能量总是一样多，达到的最高亮度也相同——比如 Ia 型超新星。亮度我们看得到，本来有多亮又知道，两者一比，距离就出来了。",
                "body_en": "Some objects always erupt with the same energy and peak brightness — Type Ia supernovae, for example. Compare how bright they look with how bright they are, and distance falls out."
              },
              {
                "visual": "📉",
                "title_zh": "亮度随距离衰减",
                "title_en": "Brightness fades with distance",
                "body_zh": "看到的亮度与距离的平方成反比：距离翻倍，亮度只有四分之一。一个暗淡的光点，可能是远处的大灯泡，也可能是近处的小灯泡——所以必须先知道它「本来的瓦数」。",
                "body_en": "Apparent brightness falls with the square of distance: double the distance, quarter the glow. A dim dot might be a far bright bulb or a near dim one — hence the known wattage."
              }
            ],
            "questions": [
              {
                "id": "str-c1-01-q1",
                "based_on": "teach[1]",
                "prompt_zh": "视差法测距利用的是什么现象？",
                "prompt_en": "Parallax measures distance using:",
                "figure": "👀",
                "choices": [
                  {"label_zh": "地球公转导致星的方向微变", "label_en": "The star's direction shifting as Earth orbits", "glyph": "🌍"},
                  {"label_zh": "星星自己眨眼", "label_en": "Stars twinkling", "glyph": "❌"},
                  {"label_zh": "月亮的遮挡", "label_en": "The Moon blocking stars", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "冬夏看同一颗星方向略变，越远变化越小。",
                "explain_en": "Winter and summer views differ slightly; farther stars shift less."
              },
              {
                "id": "str-c1-01-q2",
                "based_on": "teach[1]",
                "prompt_zh": "同一颗星，离我们越远，视差角度变化？",
                "prompt_en": "The farther a star, its parallax shift is:",
                "choices": [
                  {"label_zh": "越小", "label_en": "Smaller", "glyph": "📉"},
                  {"label_zh": "越大", "label_en": "Larger", "glyph": "❌"},
                  {"label_zh": "不变", "label_en": "Unchanged", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "距离越远，角度变化越小，越难测。",
                "explain_en": "Farther means a tinier, trickier angle."
              },
              {
                "id": "str-c1-01-q3",
                "based_on": "teach[2]",
                "prompt_zh": "能当「标准烛光」使用的天体应该？",
                "prompt_en": "A good standard candle must:",
                "choices": [
                  {"label_zh": "爆发时释放的能量总是一样多", "label_en": "Always erupt with the same energy", "glyph": "🕯️"},
                  {"label_zh": "长得足够好看", "label_en": "Look pretty", "glyph": "❌"},
                  {"label_zh": "离我们最近", "label_en": "Be nearest to us", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "Ia 型超新星爆发质量一定、能量相同、最高亮度相同。",
                "explain_en": "Type Ia supernovae peak at the same brightness every time."
              },
              {
                "id": "str-c1-01-q4",
                "based_on": "teach[2]",
                "prompt_zh": "标准烛光测距需要比较哪两个量？",
                "prompt_en": "Standard-candle distances compare:",
                "choices": [
                  {"label_zh": "看到的亮度和本来的亮度", "label_en": "Apparent vs. true brightness", "glyph": "✅"},
                  {"label_zh": "颜色和温度", "label_en": "Color and temperature", "glyph": "❌"},
                  {"label_zh": "大小和质量", "label_en": "Size and mass", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "已知瓦数的灯泡，看它多暗就知道多远。",
                "explain_en": "A known-watt bulb: the dimmer it looks, the farther it is."
              },
              {
                "id": "str-c1-01-q5",
                "based_on": "teach[3]",
                "prompt_zh": "距离变为原来的两倍，看到的亮度变为？",
                "prompt_en": "Double the distance, and apparent brightness becomes:",
                "choices": [
                  {"label_zh": "四分之一", "label_en": "One quarter", "glyph": "📉"},
                  {"label_zh": "一半", "label_en": "Half", "glyph": "❌"},
                  {"label_zh": "不变", "label_en": "Unchanged", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "亮度与距离平方成反比。",
                "explain_en": "Brightness falls with distance squared."
              },
              {
                "id": "str-c1-01-q6",
                "based_on": "teach[1]",
                "prompt_zh": "为什么不能只用一种方法量所有距离？",
                "prompt_en": "Why can't one method measure everything?",
                "choices": [
                  {"label_zh": "每种方法有适用范围，需接力", "label_en": "Each works in a range — they must chain", "glyph": "🪜"},
                  {"label_zh": "天文学家喜欢换着玩", "label_en": "Astronomers get bored", "glyph": "❌"},
                  {"label_zh": "所有方法都一样", "label_en": "They're all identical", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "近处用视差，远处用标准烛光，一梯一梯往外量。",
                "explain_en": "Parallax near, candles far — rung upon rung."
              }
            ]
          }
        },
        {
          "left": 26,
          "lesson": {
            "id": "str-c1-02-color-mass",
            "title_zh": "颜色、温度与质量",
            "title_en": "Color, Temperature & Mass",
            "subtitle_zh": "星光自带体检报告",
            "subtitle_en": "Starlight carries its own chart",
            "icon": "🌈",
            "xp": 30,
            "teach": [
              {
                "visual": "🔥",
                "title_zh": "颜色暴露温度",
                "title_en": "Color betrays temperature",
                "body_zh": "把铁块加热，它会从暗红变亮红、再变白——恒星同理：颜色由表面温度决定。发红光的星相对较「冷」，泛蓝白光的星才是真正的炽热。",
                "body_en": "Heat iron and it glows dull red, bright red, then white — stars work the same way. Red stars are the 'cool' ones; blue-white stars blaze the hottest."
              },
              {
                "visual": "🟡",
                "title_zh": "太阳：黄白色的中等生",
                "title_en": "The Sun: a yellow-white middling",
                "body_zh": "太阳表面约 5500 摄氏度，在恒星里不算热也不算冷，颜色呈黄白。天文学家用开氏温标描述恒星温度，太阳的有效温度约为 5770 开。",
                "body_en": "The Sun's surface, near 5,500°C, is middling among stars — hence its yellow-white hue. Astronomers prefer kelvin: the Sun rates about 5,770 K."
              },
              {
                "visual": "🔍",
                "title_zh": "光谱：恒星的指纹",
                "title_en": "Spectra: stellar fingerprints",
                "body_zh": "把星光分解成光谱，比对实验室里各元素的特征谱线，就能读出恒星外层的温度、压力和成分——星光是天体的指纹，会讲自己的故事。",
                "body_en": "Split starlight into a spectrum, match the elemental fingerprints, and the star's outer layers give themselves away — temperature, pressure, composition and all."
              },
              {
                "visual": "⚖️",
                "title_zh": "温度连着质量",
                "title_en": "Temperature ties to mass",
                "body_zh": "恒星质量悬殊，从太阳的十分之一到近百倍不等。温度与质量关系紧密：测出光谱和视星等、推得温度，就能按相应关系求出质量——不用碰它一根毫毛。",
                "body_en": "Stars range from a tenth to nearly a hundred Suns in mass. Temperature tracks mass tightly: read the spectrum, get the temperature, and mass follows — untouched, at a distance."
              }
            ],
            "questions": [
              {
                "id": "str-c1-02-q1",
                "based_on": "teach[1]",
                "prompt_zh": "泛蓝白光的恒星，表面温度？",
                "prompt_en": "A blue-white star's surface is:",
                "figure": "🌈",
                "choices": [
                  {"label_zh": "非常炽热", "label_en": "Very hot", "glyph": "🔥"},
                  {"label_zh": "相对较冷", "label_en": "Relatively cool", "glyph": "❌"},
                  {"label_zh": "和冰箱一样", "label_en": "Fridge-cold", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "发红光的星较冷，泛蓝白光的星最炽热。",
                "explain_en": "Red is the cool end; blue-white burns hottest."
              },
              {
                "id": "str-c1-02-q2",
                "based_on": "teach[2]",
                "prompt_zh": "太阳的颜色和地位是？",
                "prompt_en": "The Sun is:",
                "choices": [
                  {"label_zh": "黄白色、温度中等", "label_en": "Yellow-white and middling", "glyph": "🟡"},
                  {"label_zh": "全天最蓝最热", "label_en": "The bluest, hottest star", "glyph": "❌"},
                  {"label_zh": "红色、最冷", "label_en": "Red and coldest", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "太阳表面约 5500 度，颜色黄白，中等水平。",
                "explain_en": "About 5,500°C, yellow-white — comfortably average."
              },
              {
                "id": "str-c1-02-q3",
                "based_on": "teach[3]",
                "prompt_zh": "「星光是天体的指纹」意思是？",
                "prompt_en": "'Starlight is a fingerprint' means:",
                "choices": [
                  {"label_zh": "光谱能读出温度和成分", "label_en": "Spectra reveal temperature and composition", "glyph": "🔍"},
                  {"label_zh": "每颗星会留下掌印", "label_en": "Stars leave handprints", "glyph": "❌"},
                  {"label_zh": "星星会写字", "label_en": "Stars can write", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "比对特征谱线即可读出恒星外层信息。",
                "explain_en": "Spectral lines spell out a star's outer layers."
              },
              {
                "id": "str-c1-02-q4",
                "based_on": "teach[4]",
                "prompt_zh": "恒星质量的范围大约是？",
                "prompt_en": "Stellar masses range roughly from:",
                "choices": [
                  {"label_zh": "太阳的十分之一到近百倍", "label_en": "A tenth to ~100 Suns", "glyph": "⚖️"},
                  {"label_zh": "全部恰好等于太阳", "label_en": "All exactly one Sun", "glyph": "❌"},
                  {"label_zh": "地球的几倍", "label_en": "A few Earths", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "恒星质量从约 0.1 到近 100 倍太阳质量不等。",
                "explain_en": "From ~0.1 to ~100 solar masses."
              },
              {
                "id": "str-c1-02-q5",
                "based_on": "teach[4]",
                "prompt_zh": "天文学家如何「隔空」测出恒星质量？",
                "prompt_en": "Astronomers weigh stars by:",
                "choices": [
                  {"label_zh": "测光谱得温度，再按温度-质量关系推算", "label_en": "Reading spectra for temperature, then mass", "glyph": "✅"},
                  {"label_zh": "派飞船上去搬", "label_en": "Flying them onto scales", "glyph": "❌"},
                  {"label_zh": "靠星星自报体重", "label_en": "Asking politely", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "温度与质量关系紧密，光谱给出温度即可推质量。",
                "explain_en": "Temperature and mass are tightly linked; spectra read temperature."
              },
              {
                "id": "str-c1-02-q6",
                "based_on": "teach[3]",
                "prompt_zh": "下列哪项能从恒星光谱中读出？",
                "prompt_en": "Which can be read from a star's spectrum?",
                "choices": [
                  {"label_zh": "外层温度、压力和成分", "label_en": "Outer-layer temperature, pressure, composition", "glyph": "🔍"},
                  {"label_zh": "恒星的银行存款", "label_en": "Its bank balance", "glyph": "❌"},
                  {"label_zh": "它的邻居是谁", "label_en": "Its neighbors' names", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "特征谱线对应特定元素，还携带物理条件信息。",
                "explain_en": "Elemental lines encode the physics too."
              }
            ]
          }
        },
        {
          "left": -26,
          "lesson": {
            "id": "str-c2-01-hr-diagram",
            "title_zh": "赫罗图",
            "title_en": "The H-R Diagram",
            "subtitle_zh": "恒星的户口普查表",
            "subtitle_en": "The stars' census chart",
            "icon": "📊",
            "xp": 35,
            "teach": [
              {
                "visual": "📊",
                "title_zh": "先认识这张图",
                "title_en": "Meet the chart",
                "body_zh": "赫罗图是恒星的「户口普查表」：横轴排表面温度（左边热右边冷），纵轴排真实亮度。每颗恒星按这两个属性，都能在图上落一个点。",
                "body_en": "The H-R diagram is a stellar census: surface temperature along the bottom (hot left, cool right), true brightness up the side. Every star lands as one dot."
              },
              {
                "visual": "🛣️",
                "title_zh": "主序：最拥挤的干道",
                "title_en": "The main sequence: rush hour",
                "body_zh": "把成千上万颗恒星画上去，大多数不乱跑，而是排成一条从左上到右下的对角带——主序。太阳就住在这条带上，是一颗 G2V 型主序星。",
                "body_en": "Plot thousands of stars and most line up along one diagonal band, hot-bright to cool-dim — the main sequence. The Sun lives there: a G2V main-sequence star."
              },
              {
                "visual": "⛽",
                "title_zh": "主序星都在烧氢",
                "title_en": "Main-sequence stars burn hydrogen",
                "body_zh": "主序阶段是恒星一生最长、最安稳的时光：核心把氢聚变成氦，产生的辐射压与自引力相持，恒星不胀不缩，稳稳发光。",
                "body_en": "The main sequence is a star's long, stable adulthood: the core fuses hydrogen into helium, and radiation pressure holds gravity at a steady truce."
              },
              {
                "visual": "🗺️",
                "title_zh": "一张图看懂一生",
                "title_en": "A life story on one page",
                "body_zh": "恒星演化就是图上的一趟旅程：出生后先落进主序带，燃料将尽时离开主序、膨胀变亮，走向右上角的巨星区——位置变化讲述整部传记。",
                "body_en": "Stellar evolution is travel on this map: born onto the main sequence, then off it as fuel runs low, swelling toward the giant region upper right — a biography in one chart."
              }
            ],
            "questions": [
              {
                "id": "str-c2-01-q1",
                "based_on": "teach[1]",
                "prompt_zh": "赫罗图的两个坐标轴是？",
                "prompt_en": "The H-R diagram plots:",
                "figure": "📊",
                "choices": [
                  {"label_zh": "表面温度和真实亮度", "label_en": "Surface temperature vs. true brightness", "glyph": "✅"},
                  {"label_zh": "距离和质量", "label_en": "Distance vs. mass", "glyph": "❌"},
                  {"label_zh": "颜色和数量", "label_en": "Color vs. count", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "横轴排温度、纵轴排亮度，每颗星落一个点。",
                "explain_en": "Temperature across, brightness up — one dot per star."
              },
              {
                "id": "str-c2-01-q2",
                "based_on": "teach[1]",
                "prompt_zh": "赫罗图上温度的方向是？",
                "prompt_en": "On the H-R diagram, temperature:",
                "choices": [
                  {"label_zh": "左边热、右边冷", "label_en": "Runs hot-left to cool-right", "glyph": "🌡️"},
                  {"label_zh": "左边冷、右边热", "label_en": "Runs cool-left to hot-right", "glyph": "❌"},
                  {"label_zh": "上下排列", "label_en": "Runs vertically", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "横轴从左热到右冷，是赫罗图的传统画法。",
                "explain_en": "Hot on the left — the chart's classic quirk."
              },
              {
                "id": "str-c2-01-q3",
                "based_on": "teach[2]",
                "prompt_zh": "主序带在图上的形状是？",
                "prompt_en": "The main sequence forms:",
                "choices": [
                  {"label_zh": "左上到右下的对角带", "label_en": "A diagonal band, upper-left to lower-right", "glyph": "🛣️"},
                  {"label_zh": "一个正圆", "label_en": "A circle", "glyph": "❌"},
                  {"label_zh": "随机散点", "label_en": "Random scatter", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "大多数恒星排在一条对角带上，最拥挤。",
                "explain_en": "Most stars crowd one diagonal stripe."
              },
              {
                "id": "str-c2-01-q4",
                "based_on": "teach[2]",
                "prompt_zh": "太阳在赫罗图上的身份是？",
                "prompt_en": "On the H-R diagram, the Sun is:",
                "choices": [
                  {"label_zh": "一颗 G2V 型主序星", "label_en": "A G2V main-sequence star", "glyph": "🟡"},
                  {"label_zh": "红超巨星", "label_en": "A red supergiant", "glyph": "❌"},
                  {"label_zh": "白矮星", "label_en": "A white dwarf", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "太阳是 G2V 型主序星，安稳住在主序带上。",
                "explain_en": "G2V — a card-carrying main-sequence member."
              },
              {
                "id": "str-c2-01-q5",
                "based_on": "teach[3]",
                "prompt_zh": "主序星发光稳定的原理是？",
                "prompt_en": "Main-sequence stars stay steady because:",
                "choices": [
                  {"label_zh": "辐射压与自引力相持", "label_en": "Radiation pressure balances gravity", "glyph": "⚖️"},
                  {"label_zh": "被外壳包住", "label_en": "They're shrink-wrapped", "glyph": "❌"},
                  {"label_zh": "月亮在帮忙托着", "label_en": "The Moon holds them up", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "核聚变的辐射压抵抗自引力，恒星不胀不缩。",
                "explain_en": "Fusion's outward push matches gravity's squeeze."
              },
              {
                "id": "str-c2-01-q6",
                "based_on": "teach[4]",
                "prompt_zh": "恒星燃料将尽时，在赫罗图上会？",
                "prompt_en": "As fuel runs low, a star on the H-R diagram:",
                "choices": [
                  {"label_zh": "离开主序，移向右上巨星区", "label_en": "Leaves the main sequence toward upper right", "glyph": "🗺️"},
                  {"label_zh": "永远原地不动", "label_en": "Stays put forever", "glyph": "❌"},
                  {"label_zh": "消失不见", "label_en": "Vanishes", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "外层膨胀变亮，走向右上角的巨星区。",
                "explain_en": "It swells and brightens, drifting up-right."
              }
            ]
          }
        },
        {
          "left": 34,
          "lesson": {
            "id": "str-c2-02-giants-dwarfs",
            "title_zh": "巨星与矮星",
            "title_en": "Giants & Dwarfs",
            "subtitle_zh": "名字说的是身材",
            "subtitle_en": "Names that tell sizes",
            "icon": "🐘",
            "xp": 30,
            "teach": [
              {
                "visual": "🐘",
                "title_zh": "巨星：胀大的晚年恒星",
                "title_en": "Giants: stars gone bloated",
                "body_zh": "红巨星是度过主序阶段后的恒星：核心收缩、外层膨胀到原来的数百倍。它颜色偏红是因为表面摊薄变「凉」，个头却大得惊人——太阳晚年就会这样。",
                "body_en": "A red giant has left the main sequence: core shrinking, outer layers swelling hundreds of times. Red because its stretched surface cools — yet it looms enormous."
              },
              {
                "visual": " maxSize",
                "title_zh": "矮星：白热的小不点",
                "title_en": "Dwarfs: white-hot runts",
                "body_zh": "白矮星是中小质量恒星的残骸：地球般大小却重得惊人，靠电子的「倔劲」抵抗引力，不再聚变，只靠余温慢慢冷却，最终变成黑矮星。",
                "body_en": "A white dwarf is a dead sun-mass core: Earth-sized but staggeringly dense, propped up by stubborn electrons. No fusion — just slow cooling toward blackness."
              },
              {
                "visual": "🔍",
                "title_zh": "别被亮度骗了",
                "title_en": "Don't be fooled by brightness",
                "body_zh": "红巨星看起来亮，是靠面积大；白矮星也曾炽亮，是靠温度高。在赫罗图上，巨星住右上角，白矮星挤在左下角——亮与暗、大与小，要分开算。",
                "body_en": "Giants shine by sheer size; white dwarfs once shone by raw heat. On the H-R diagram giants fill the upper right, dwarfs crowd the lower left."
              },
              {
                "visual": "🧭",
                "title_zh": "红巨星 ≠ 大质量恒星",
                "title_en": "Red giant ≠ massive star",
                "body_zh": "常见误会：红巨星都很重。其实恰恰相反——大质量恒星不走红巨星路线，它们烧得又快又猛，直接轰烈爆发；变成红巨星的，多是太阳这样的中等质量恒星。",
                "body_en": "A common mix-up: red giants must be heavy. The opposite! Massive stars burn fast and furious, detonating outright — it's middling stars like the Sun that bloat red."
              }
            ],
            "questions": [
              {
                "id": "str-c2-02-q1",
                "based_on": "teach[1]",
                "prompt_zh": "红巨星是怎么来的？",
                "prompt_en": "A red giant is a star that:",
                "figure": "🐘",
                "choices": [
                  {"label_zh": "度过了主序阶段，外层膨胀", "label_en": "Left the main sequence and swelled", "glyph": "✅"},
                  {"label_zh": "刚出生的恒星", "label_en": "A newborn star", "glyph": "❌"},
                  {"label_zh": "一颗行星", "label_en": "A planet", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "核心收缩、外层膨胀到原来的数百倍。",
                "explain_en": "Core shrinks, envelope swells hundreds-fold."
              },
              {
                "id": "str-c2-02-q2",
                "based_on": "teach[1]",
                "prompt_zh": "红巨星偏红的原因是？",
                "prompt_en": "Red giants look red because:",
                "choices": [
                  {"label_zh": "表面膨胀摊薄、温度变低", "label_en": "Their stretched surfaces cool down", "glyph": "🌡️"},
                  {"label_zh": "表面烧起来了", "label_en": "They're literally on fire", "glyph": "❌"},
                  {"label_zh": "被红色滤镜覆盖", "label_en": "Red filters", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "外层胀大后温度下降，红色代表相对低温。",
                "explain_en": "Swell and cool — red is the cooler shade."
              },
              {
                "id": "str-c2-02-q3",
                "based_on": "teach[2]",
                "prompt_zh": "白矮星的特点是？",
                "prompt_en": "White dwarfs are:",
                "choices": [
                  {"label_zh": "地球般大小、密度极高", "label_en": "Earth-sized and ultra-dense", "glyph": "⚪"},
                  {"label_zh": "比太阳大几百倍", "label_en": "Hundreds of times the Sun", "glyph": "❌"},
                  {"label_zh": "仍在剧烈聚变", "label_en": "Still furiously fusing", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "不再聚变，靠余温发光，逐渐冷却。",
                "explain_en": "Fusion over; they just cool off slowly."
              },
              {
                "id": "str-c2-02-q4",
                "based_on": "teach[2]",
                "prompt_zh": "白矮星的最终归宿是？",
                "prompt_en": "A white dwarf's final fate is to:",
                "choices": [
                  {"label_zh": "冷却成黑矮星", "label_en": "Cool into a black dwarf", "glyph": "⚫"},
                  {"label_zh": "重新变回太阳", "label_en": "Reboot as the Sun", "glyph": "❌"},
                  {"label_zh": "马上爆炸", "label_en": "Explode immediately", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "红巨星抛壳后，残核冷却为白矮星、黑矮星。",
                "explain_en": "The exposed core fades from white to black."
              },
              {
                "id": "str-c2-02-q5",
                "based_on": "teach[3]",
                "prompt_zh": "在赫罗图上，白矮星位于？",
                "prompt_en": "On the H-R diagram, white dwarfs sit:",
                "choices": [
                  {"label_zh": "左下角（热而暗）", "label_en": "Lower left — hot but dim", "glyph": "🔍"},
                  {"label_zh": "右上角", "label_en": "Upper right", "glyph": "❌"},
                  {"label_zh": "正中央", "label_en": "Dead center", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "温度高但个头小、亮度低，挤在左下角。",
                "explain_en": "Hot yet tiny and dim — the lower-left corner."
              },
              {
                "id": "str-c2-02-q6",
                "based_on": "teach[4]",
                "prompt_zh": "关于红巨星与大质量恒星，正确的是？",
                "prompt_en": "Red giants vs. massive stars — which is true?",
                "choices": [
                  {"label_zh": "大质量恒星不走红巨星路线", "label_en": "Massive stars skip the red-giant route", "glyph": "🧭"},
                  {"label_zh": "红巨星都是质量最大的星", "label_en": "Red giants are the most massive", "glyph": "❌"},
                  {"label_zh": "两者完全一样", "label_en": "They're identical", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "大质量恒星烧得又快又猛，直接走向爆发。",
                "explain_en": "The heavyweights burn out and blast, skipping the bloat."
              }
            ]
          }
        },
        {
          "left": -34,
          "lesson": {
            "id": "str-c3-01-star-birth",
            "title_zh": "恒星的诞生",
            "title_en": "The Birth of Stars",
            "subtitle_zh": "先冷却，才能燃烧",
            "subtitle_en": "Cool first, then burn",
            "icon": "🍼",
            "xp": 35,
            "teach": [
              {
                "visual": "☁️",
                "title_zh": "一切从分子云开始",
                "title_en": "It starts in molecular clouds",
                "body_zh": "星际介质分布不均：银河系里约一半集中在 2% 的空间，这些致密区域叫星际云。最致密的核心区里分子得以存活，称为分子云——恒星的产房。",
                "body_en": "Interstellar matter clumps: half the Milky Way's gas crowds into 2% of its space — interstellar clouds. In the densest cores molecules survive: molecular clouds, the stellar nursery."
              },
              {
                "visual": "🧊",
                "title_zh": "想点火，先得够冷",
                "title_en": "To ignite, first freeze",
                "body_zh": "听着矛盾：造恒星必须先冷却。只有降到几十 K 的低温，气体抵挡不住自身引力，云核才会坍缩；越冷越容易塌——引力势能随后转化为热，把核心推向千万度。",
                "body_en": "Paradoxically, star-making needs cold. Only below a few tens of kelvin does gas yield to its own gravity and collapse — gravitational energy then converts to heat, driving the core toward millions of degrees."
              },
              {
                "visual": "🥞",
                "title_zh": "吸积盘供养原恒星",
                "title_en": "A disk feeds the protostar",
                "body_zh": "坍缩中角动量守恒，下落物质甩成一张旋转的吸积盘，源源不断供养中心成长的原恒星。数光月尺度的分子云核，就这样变成恒星的种子。",
                "body_en": "Conserving its spin, the infalling gas flattens into a whirling accretion disk, feeding the growing protostar at its heart. From light-month-sized cores, stellar seeds sprout."
              },
              {
                "visual": "⚖️",
                "title_zh": "出生就有门槛",
                "title_en": "Birth has a threshold",
                "body_zh": "质量不足太阳十分之一的冷囊点不燃聚变，只能成为暗弱的棕矮星；超过太阳百倍，星光压强又会把原料推开。真正的恒星，都生在这道门槛之内。",
                "body_en": "A clump under a tenth of a solar mass never lights fusion — a dim brown dwarf instead. Past ~100 Suns, radiation pressure blows the ingredients away. Real stars fit between."
              }
            ],
            "questions": [
              {
                "id": "str-c3-01-q1",
                "based_on": "teach[1]",
                "prompt_zh": "新恒星诞生于？",
                "prompt_en": "New stars are born in:",
                "figure": "🍼",
                "choices": [
                  {"label_zh": "分子云最致密的核心区", "label_en": "The densest cores of molecular clouds", "glyph": "☁️"},
                  {"label_zh": "行星表面", "label_en": "On planetary surfaces", "glyph": "❌"},
                  {"label_zh": "黑洞边缘", "label_en": "At a black hole's edge", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "分子能存活的暗云核心，是恒星的产房。",
                "explain_en": "Dark, molecule-friendly cores are the nurseries."
              },
              {
                "id": "str-c3-01-q2",
                "based_on": "teach[2]",
                "prompt_zh": "云核坍缩的先决条件是？",
                "prompt_en": "A cloud core collapses only if it is:",
                "choices": [
                  {"label_zh": "足够冷，压力足够低", "label_en": "Cold enough, its pressure low enough", "glyph": "🧊"},
                  {"label_zh": "越热越好", "label_en": "As hot as possible", "glyph": "❌"},
                  {"label_zh": "有人推一把", "label_en": "Someone pushes it", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "只有几十 K 的低温下，自引力才能压过压力。",
                "explain_en": "Only near tens of kelvin does gravity win."
              },
              {
                "id": "str-c3-01-q3",
                "based_on": "teach[2]",
                "prompt_zh": "「想点火，先得够冷」的矛盾之处在于？",
                "prompt_en": "The 'cool first to burn' paradox is that:",
                "choices": [
                  {"label_zh": "造千万度的核心，先要极低温坍缩", "label_en": "A 10-million-degree core starts with a deep freeze", "glyph": "✅"},
                  {"label_zh": "冷的地方没有气体", "label_en": "Cold places have no gas", "glyph": "❌"},
                  {"label_zh": "热的地方引力更强", "label_en": "Hot spots pull harder", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "冷才能塌，塌了引力势能才变热。",
                "explain_en": "Cold collapses; collapse heats."
              },
              {
                "id": "str-c3-01-q4",
                "based_on": "teach[3]",
                "prompt_zh": "吸积盘为什么会形成？",
                "prompt_en": "Why does an accretion disk form?",
                "choices": [
                  {"label_zh": "角动量守恒让下落物质旋转摊平", "label_en": "Conserved angular momentum flattens the infall", "glyph": "🥞"},
                  {"label_zh": "风吹出来的", "label_en": "Wind blew it flat", "glyph": "❌"},
                  {"label_zh": "恒星自己画的", "label_en": "The star drew it", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "旋转的物质落向中心时自然摊成盘状。",
                "explain_en": "Spinning infall settles into a disk."
              },
              {
                "id": "str-c3-01-q5",
                "based_on": "teach[3]",
                "prompt_zh": "吸积盘的作用是？",
                "prompt_en": "The accretion disk's job is to:",
                "choices": [
                  {"label_zh": "供养中心成长的原恒星", "label_en": "Feed the growing protostar", "glyph": "🍼"},
                  {"label_zh": "挡住星光", "label_en": "Block starlight", "glyph": "❌"},
                  {"label_zh": "装饰用", "label_en": "Look decorative", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "盘上物质源源不断落向中心原恒星。",
                "explain_en": "Disk material streams onto the protostar."
              },
              {
                "id": "str-c3-01-q6",
                "based_on": "teach[4]",
                "prompt_zh": "质量不足太阳十分之一的天体会变成？",
                "prompt_en": "A clump under a tenth of a solar mass becomes:",
                "choices": [
                  {"label_zh": "棕矮星", "label_en": "A brown dwarf", "glyph": "🟤"},
                  {"label_zh": "黑洞", "label_en": "A black hole", "glyph": "❌"},
                  {"label_zh": "正常恒星", "label_en": "A normal star", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "点不燃氢聚变，只能做暗弱的准恒星。",
                "explain_en": "Too light to ignite — a failed star."
              }
            ]
          }
        },
        {
          "left": 42,
          "lesson": {
            "id": "str-c4-01-main-sequence",
            "title_zh": "主序阶段",
            "title_en": "Life on the Main Sequence",
            "subtitle_zh": "恒星最长的安稳岁月",
            "subtitle_en": "The long, stable years",
            "icon": "☀️",
            "xp": 30,
            "teach": [
              {
                "visual": "⚖️",
                "title_zh": "一场恰到好处的拉锯",
                "title_en": "A perfectly matched tug-of-war",
                "body_zh": "主序星内部进行核聚变，产生的辐射压抵抗自引力，恒星才不会被自己压垮。两股力量长期相持，恒星既不膨胀也不坍缩，安稳发光几十亿年。",
                "body_en": "Inside a main-sequence star, fusion's radiation pressure resists self-gravity — otherwise its own weight would crush it. The stalemate holds: no swelling, no collapse, just steady shining."
              },
              {
                "visual": "⏳",
                "title_zh": "太阳的年龄账本",
                "title_en": "The Sun's age ledger",
                "body_zh": "太阳是一颗 G2V 型主序星，已经燃烧了 46 亿年，预计还能继续燃烧 50 亿年。它的主序岁月将近百亿年——恒星的一生，大部分时间都住在这条带上。",
                "body_en": "The Sun, a G2V main-sequence star, has burned for 4.6 billion years and has about 5 billion to go. Its residency on the band approaches ten billion years."
              },
              {
                "visual": "🔥",
                "title_zh": "大个子反而短命",
                "title_en": "Bigger stars die younger",
                "body_zh": "质量越大的恒星燃烧越快、寿命越短：大质量恒星可能只活几百万年，某些比太阳亮上百万倍。反倒是质量特别小的恒星消耗燃料极慢，近乎永生。",
                "body_en": "Heavier stars burn through fuel faster and die sooner: the massive ones may last mere millions of years, some shining a million times brighter than the Sun. The tiniest stars sip fuel — near-immortal."
              },
              {
                "visual": "🌱",
                "title_zh": "炉子决定一切",
                "title_en": "The furnace decides",
                "body_zh": "为什么大质量短命？核心温度压力更高，聚变进行得更猛，燃料消耗飞快——像豪爽的大炉灶，火旺也费柴。恒星质量不但定寿命，还定最终归宿。",
                "body_en": "Why do heavyweights die young? Hotter, higher-pressure cores fuse ferociously, devouring fuel — a big furnace burns bright and fast. Mass sets both lifespan and final fate."
              }
            ],
            "questions": [
              {
                "id": "str-c4-01-q1",
                "based_on": "teach[1]",
                "prompt_zh": "主序星不被自身引力压垮，靠的是？",
                "prompt_en": "A main-sequence star resists its own gravity thanks to:",
                "figure": "☀️",
                "choices": [
                  {"label_zh": "核聚变产生的辐射压", "label_en": "Radiation pressure from fusion", "glyph": "⚖️"},
                  {"label_zh": "坚硬的外壳", "label_en": "A hard shell", "glyph": "❌"},
                  {"label_zh": "离心力甩出去", "label_en": "Spinning it off", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "辐射压与自引力长期相持，恒星保持稳定。",
                "explain_en": "Fusion's push matches gravity's pull."
              },
              {
                "id": "str-c4-01-q2",
                "based_on": "teach[2]",
                "prompt_zh": "太阳已经燃烧和还能燃烧的时间大约是？",
                "prompt_en": "The Sun has burned, and will burn, about:",
                "choices": [
                  {"label_zh": "46 亿年 / 再 50 亿年", "label_en": "4.6 billion years / 5 billion more", "glyph": "⏳"},
                  {"label_zh": "100 年 / 再 1 年", "label_en": "100 years / 1 more", "glyph": "❌"},
                  {"label_zh": "刚点着 / 马上熄灭", "label_en": "Just lit / about to die", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "太阳是 G2V 主序星，主序生涯将近百亿年。",
                "explain_en": "A G2V star with a ~10-billion-year tenure."
              },
              {
                "id": "str-c4-01-q3",
                "based_on": "teach[3]",
                "prompt_zh": "大质量恒星的寿命？",
                "prompt_en": "Massive stars live:",
                "choices": [
                  {"label_zh": "更短，可能只有几百万年", "label_en": "Shorter — mere millions of years", "glyph": "🔥"},
                  {"label_zh": "比小恒星长得多", "label_en": "Far longer than small stars", "glyph": "❌"},
                  {"label_zh": "永远不灭", "label_en": "Forever", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "质量越大燃烧越快，寿命越短。",
                "explain_en": "More mass, faster burn, shorter life."
              },
              {
                "id": "str-c4-01-q4",
                "based_on": "teach[3]",
                "prompt_zh": "哪类恒星消耗燃料极慢、近乎永生？",
                "prompt_en": "Which stars sip fuel and live nearly forever?",
                "choices": [
                  {"label_zh": "质量特别小的恒星", "label_en": "The tiniest stars", "glyph": "🌱"},
                  {"label_zh": "最大的蓝巨星", "label_en": "The biggest blue giants", "glyph": "❌"},
                  {"label_zh": "白矮星", "label_en": "White dwarfs", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "小质量恒星烧得极慢，寿命长得惊人。",
                "explain_en": "Small stars burn slowly and outlast everything."
              },
              {
                "id": "str-c4-01-q5",
                "based_on": "teach[4]",
                "prompt_zh": "大质量恒星短命的原因是？",
                "prompt_en": "Massive stars die young because:",
                "choices": [
                  {"label_zh": "核心温度高，聚变猛烈耗燃料快", "label_en": "Hot cores fuse furiously, devouring fuel", "glyph": "✅"},
                  {"label_zh": "它们没有燃料", "label_en": "They have no fuel", "glyph": "❌"},
                  {"label_zh": "被别的恒星撞坏了", "label_en": "They get wrecked in crashes", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "大炉灶火旺也费柴，燃烧速率随质量飙升。",
                "explain_en": "A big furnace: brighter flame, faster fuel."
              },
              {
                "id": "str-c4-01-q6",
                "based_on": "teach[4]",
                "prompt_zh": "恒星质量决定的事项不包括？",
                "prompt_en": "A star's mass does NOT determine:",
                "choices": [
                  {"label_zh": "今天晚饭吃什么", "label_en": "What's for dinner", "glyph": "🍽️"},
                  {"label_zh": "寿命长短", "label_en": "Its lifespan", "glyph": "❌"},
                  {"label_zh": "最终归宿", "label_en": "Its final fate", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "质量定寿命，也定归宿（白矮星/中子星/黑洞）。",
                "explain_en": "Mass sets both the clock and the destination."
              }
            ]
          }
        },
        {
          "left": -42,
          "lesson": {
            "id": "str-c4-02-red-giant",
            "title_zh": "红巨星时代",
            "title_en": "The Red Giant Era",
            "subtitle_zh": "太阳的膨胀晚年",
            "subtitle_en": "The Sun's bloated old age",
            "icon": "🔴",
            "xp": 30,
            "teach": [
              {
                "visual": "📉",
                "title_zh": "燃料告急引发连锁反应",
                "title_en": "Fuel shortage triggers a chain",
                "body_zh": "主序末期，核心的氢耗尽、聚变能力下降，辐射压撑不住自引力，恒星从核心开始坍缩。核心收缩反过来加快聚变、提高亮度——一场连锁反应开始了。",
                "body_en": "Late in the main sequence, core hydrogen runs out, fusion weakens, and gravity gains the upper hand. The shrinking core then fuses faster and shines brighter — a chain reaction begins."
              },
              {
                "visual": "🎈",
                "title_zh": "外壳膨胀数百倍",
                "title_en": "The envelope swells hundreds-fold",
                "body_zh": "外层得到更多能量，开始剧烈膨胀——中等质量恒星的外层大气可扩张到原来的数百倍。太阳晚年也会走上这条路，急剧膨胀，吞掉内层行星。",
                "body_en": "Fed with extra energy, the outer layers bloat — hundreds of times over for sun-like stars. The aged Sun will do exactly this, engulfing the inner planets."
              },
              {
                "visual": "🌡️",
                "title_zh": "越胀越「冷」越红",
                "title_en": "Bigger means cooler and redder",
                "body_zh": "膨胀让表面摊薄，温度不升反降，恒星发出红光——「红」巨星因此得名。虽然表面变凉，整体亮度却因体积极大而升高，在图上移向右上角。",
                "body_en": "Stretching thins the surface; temperature drops and the star glows red — hence 'red' giant. Yet its vast area makes it brighter overall, drifting up-right on the chart."
              },
              {
                "visual": "🛠️",
                "title_zh": "核心点起新炉子",
                "title_en": "A new furnace lights",
                "body_zh": "收缩让核心温度压力升高，质量够大的恒星可以把氦点燃聚变成碳，更大的还能碳变氧——一层层新炉子逐级点着，直到铁为止，元素就这样被炼出来。",
                "body_en": "Compression raises core heat enough to fuse helium into carbon — and heavier stars go on: carbon to oxygen, step by step up the periodic ladder, forging elements until iron."
              }
            ],
            "questions": [
              {
                "id": "str-c4-02-q1",
                "based_on": "teach[1]",
                "prompt_zh": "红巨星阶段的起点是？",
                "prompt_en": "The red-giant phase begins when:",
                "figure": "🔴",
                "choices": [
                  {"label_zh": "核心氢耗尽，恒星从核心坍缩", "label_en": "Core hydrogen runs out and the core contracts", "glyph": "📉"},
                  {"label_zh": "恒星刚出生", "label_en": "The star is born", "glyph": "❌"},
                  {"label_zh": "燃料突然变多", "label_en": "Fuel suddenly multiplies", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "聚变减弱、辐射压撑不住，核心开始收缩。",
                "explain_en": "Fusion fades, gravity closes in."
              },
              {
                "id": "str-c4-02-q2",
                "based_on": "teach[2]",
                "prompt_zh": "中等质量恒星变成红巨星时，外层大气会？",
                "prompt_en": "As a sun-like star turns red giant, its envelope:",
                "choices": [
                  {"label_zh": "扩张到原来的数百倍", "label_en": "Expands hundreds of times", "glyph": "🎈"},
                  {"label_zh": "缩成一小团", "label_en": "Shrinks to a speck", "glyph": "❌"},
                  {"label_zh": "保持不变", "label_en": "Stays the same", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "外层得到更多能量，剧烈膨胀。",
                "explain_en": "Extra energy bloats the outer layers."
              },
              {
                "id": "str-c4-02-q3",
                "based_on": "teach[2]",
                "prompt_zh": "太阳晚年膨胀后会？",
                "prompt_en": "In its old age, the swollen Sun will:",
                "choices": [
                  {"label_zh": "吞掉内层行星", "label_en": "Swallow the inner planets", "glyph": "⚠️"},
                  {"label_zh": "变成黑洞", "label_en": "Become a black hole", "glyph": "❌"},
                  {"label_zh": "原地消失", "label_en": "Vanish on the spot", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "太阳将急剧膨胀，吞掉内层行星。",
                "explain_en": "The bloated Sun will engulf the inner worlds."
              },
              {
                "id": "str-c4-02-q4",
                "based_on": "teach[3]",
                "prompt_zh": "红巨星的「红」说明它的表面？",
                "prompt_en": "A red giant's red color means its surface is:",
                "choices": [
                  {"label_zh": "温度较低", "label_en": "Relatively cool", "glyph": "🌡️"},
                  {"label_zh": "极热", "label_en": "Extremely hot", "glyph": "❌"},
                  {"label_zh": "着火了", "label_en": "On fire", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "膨胀摊薄表面，红色对应低温。",
                "explain_en": "A stretched surface runs cool — hence red."
              },
              {
                "id": "str-c4-02-q5",
                "based_on": "teach[3]",
                "prompt_zh": "红巨星表面变凉，整体亮度却？",
                "prompt_en": "Though its surface cools, a red giant's total brightness:",
                "choices": [
                  {"label_zh": "升高，因为体积极大", "label_en": "Rises — sheer size wins", "glyph": "✅"},
                  {"label_zh": "降到零", "label_en": "Drops to zero", "glyph": "❌"},
                  {"label_zh": "完全不变", "label_en": "Stays identical", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "面积大到足以补偿温度下降，整体更亮。",
                "explain_en": "Area overwhelms temperature: net brighter."
              },
              {
                "id": "str-c4-02-q6",
                "based_on": "teach[4]",
                "prompt_zh": "红巨星核心能点燃的新聚变是？",
                "prompt_en": "A red giant's compressed core can newly ignite:",
                "choices": [
                  {"label_zh": "氦聚变成碳", "label_en": "Helium fusing into carbon", "glyph": "🛠️"},
                  {"label_zh": "什么都不点了", "label_en": "Nothing at all", "glyph": "❌"},
                  {"label_zh": "直接炼黄金", "label_en": "Straight to gold", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "收缩升温后，氦被点燃聚变成碳。",
                "explain_en": "Compression lights helium into carbon."
              }
            ]
          }
        },
        {
          "left": 50,
          "lesson": {
            "id": "str-c4-03-life-paths",
            "title_zh": "质量决定命运",
            "title_en": "Mass Decides Fate",
            "subtitle_zh": "三条截然不同的终点",
            "subtitle_en": "Three very different endings",
            "icon": "🛤️",
            "xp": 35,
            "teach": [
              {
                "visual": "🛤️",
                "title_zh": "恒星命运基本由质量决定",
                "title_en": "Mass writes the destiny",
                "body_zh": "恒星的命运基本上由其质量决定：质量越大的恒星燃烧越快、寿命越短，而质量也决定了恒星的最终归宿。同样是晚年，三条路径天差地别。",
                "body_en": "A star's fate is set by its mass: heavier stars burn faster and die sooner, and mass picks the ending too. Old age comes in three wildly different flavors."
              },
              {
                "visual": "⚪",
                "title_zh": "轻量级：白矮星终点",
                "title_en": "Lightweights: white-dwarf endings",
                "body_zh": "太阳这类中小质量恒星，燃料到氦就基本到头。红巨星末期抛掉外壳，核心残留物质量小，变成白矮星，靠电子的倔强支撑，慢慢冷却成黑矮星。",
                "body_en": "Sun-like stars stop at helium. The dying giant sheds its shell; the small leftover core becomes a white dwarf, propped up by stubborn electrons, cooling toward black."
              },
              {
                "visual": "💠",
                "title_zh": "中量级：中子星终点",
                "title_en": "Middleweights: neutron stars",
                "body_zh": "质量再大一点的恒星，自引力的压力可以战胜电子简并压，把物质压到原子核挤在一起的程度——几乎全部由中子构成，成为中子星。",
                "body_en": "Heavier stars push past the electron barrier: gravity crushes atoms until nuclei merge into a ball almost purely of neutrons — a neutron star."
              },
              {
                "visual": "⚫",
                "title_zh": "重量级：黑洞终点",
                "title_en": "Heavyweights: black holes",
                "body_zh": "质量更大的恒星，压力连中子简并压也扛不住，物质被无限压缩，形成黑洞。以太阳的质量，它最终会走白矮星这条路——我们无缘看它爆发。",
                "body_en": "The heaviest stars overwhelm even the neutron barrier, collapsing without limit into black holes. The Sun, though, is headed for the white-dwarf path — no blast for us."
              }
            ],
            "questions": [
              {
                "id": "str-c4-03-q1",
                "based_on": "teach[1]",
                "prompt_zh": "恒星命运主要由什么决定？",
                "prompt_en": "A star's destiny is chiefly decided by:",
                "figure": "🛤️",
                "choices": [
                  {"label_zh": "质量", "label_en": "Its mass", "glyph": "⚖️"},
                  {"label_zh": "颜色", "label_en": "Its color", "glyph": "❌"},
                  {"label_zh": "名字好不好听", "label_en": "How nice its name sounds", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "质量定燃烧速度、寿命和最终归宿。",
                "explain_en": "Mass sets burn rate, lifespan and ending."
              },
              {
                "id": "str-c4-03-q2",
                "based_on": "teach[2]",
                "prompt_zh": "太阳的最终归宿是？",
                "prompt_en": "The Sun will end as:",
                "choices": [
                  {"label_zh": "白矮星", "label_en": "A white dwarf", "glyph": "⚪"},
                  {"label_zh": "黑洞", "label_en": "A black hole", "glyph": "❌"},
                  {"label_zh": "中子星", "label_en": "A neutron star", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "以太阳的质量，最终走白矮星路线。",
                "explain_en": "Its mass points to the white-dwarf road."
              },
              {
                "id": "str-c4-03-q3",
                "based_on": "teach[2]",
                "prompt_zh": "白矮星靠什么抵抗引力？",
                "prompt_en": "A white dwarf resists gravity through:",
                "choices": [
                  {"label_zh": "电子简并压", "label_en": "Electron degeneracy pressure", "glyph": "⚡"},
                  {"label_zh": "核聚变", "label_en": "Fusion", "glyph": "❌"},
                  {"label_zh": "强力胶", "label_en": "Glue", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "核心残留质量小，电子的倔强足以支撑。",
                "explain_en": "Packed electrons hold the small core up."
              },
              {
                "id": "str-c4-03-q4",
                "based_on": "teach[3]",
                "prompt_zh": "中子星的物质状态是？",
                "prompt_en": "A neutron star's matter is:",
                "choices": [
                  {"label_zh": "原子核挤在一起，几乎全是中子", "label_en": "Nuclei crushed together — nearly all neutrons", "glyph": "💠"},
                  {"label_zh": "普通气体", "label_en": "Ordinary gas", "glyph": "❌"},
                  {"label_zh": "液态水", "label_en": "Liquid water", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "引力战胜电子简并压，把物质压成中子团。",
                "explain_en": "Gravity smashes past electrons into pure neutrons."
              },
              {
                "id": "str-c4-03-q5",
                "based_on": "teach[4]",
                "prompt_zh": "形成黑洞需要？",
                "prompt_en": "Forming a black hole requires:",
                "choices": [
                  {"label_zh": "质量大到压垮中子简并压", "label_en": "Enough mass to crush the neutron barrier", "glyph": "⚫"},
                  {"label_zh": "把太阳晒黑", "label_en": "Sunburn", "glyph": "❌"},
                  {"label_zh": "一口大锅", "label_en": "A giant pot", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "更大质量的恒星连中子简并压也扛不住。",
                "explain_en": "Only the heaviest stars break the neutron floor."
              },
              {
                "id": "str-c4-03-q6",
                "based_on": "teach[4]",
                "prompt_zh": "把三条路径按质量从小到大排序，正确的是？",
                "prompt_en": "Smallest to largest mass, the endings go:",
                "choices": [
                  {"label_zh": "白矮星 → 中子星 → 黑洞", "label_en": "White dwarf → neutron star → black hole", "glyph": "✅"},
                  {"label_zh": "黑洞 → 中子星 → 白矮星", "label_en": "Black hole → neutron star → white dwarf", "glyph": "❌"},
                  {"label_zh": "中子星 → 白矮星 → 黑洞", "label_en": "Neutron star → white dwarf → black hole", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "质量越大，终点越致密：白矮星、中子星、黑洞。",
                "explain_en": "More mass, denser grave: dwarf, neutron, hole."
              }
            ]
          }
        },
        {
          "left": -50,
          "lesson": {
            "id": "str-c5-01-planetary-nebula",
            "title_zh": "行星状星云",
            "title_en": "Planetary Nebulae",
            "subtitle_zh": "太阳式的温柔谢幕",
            "subtitle_en": "A gentle curtain call",
            "icon": "🎆",
            "xp": 30,
            "teach": [
              {
                "visual": "🎭",
                "title_zh": "名字纯属误会",
                "title_en": "A naming accident",
                "body_zh": "行星状星云和行星毫无关系：早期望远镜里它们圆乎乎的像行星圆面，才得了这个误名。真相是——恒星临终抛出的外壳，一场华丽的告别演出。",
                "body_en": "Planetary nebulae have nothing to do with planets: in old telescopes they looked round like planetary disks, hence the misnomer. They're a dying star's shed envelope — a farewell show."
              },
              {
                "visual": "💨",
                "title_zh": "红巨星的最后一口气",
                "title_en": "The red giant's last breath",
                "body_zh": "红巨星在最后的负隅顽抗之后爆发，把核心外的物质抛掉。被吹散的外壳形成行星状星云——一圈膨胀发光的气体，飘向宇宙空间。",
                "body_en": "After its final struggle, the red giant erupts and casts off everything outside the core. The blown-off shell becomes the nebula — a glowing, expanding bubble of gas."
              },
              {
                "visual": "💎",
                "title_zh": "核心裸露成白矮星",
                "title_en": "The bare core remains",
                "body_zh": "抛壳之后，燃尽的核心暴露出来——此前上百亿年为恒星供能的炉膛，如今成了白矮星。星云终将飘散殆尽，白矮星则靠余温冷却，慢慢暗下去。",
                "body_en": "Stripped of its shell, the burnt-out core stands exposed — the furnace of ten billion years, now a white dwarf. The nebula disperses; the dwarf slowly fades."
              },
              {
                "visual": "♻️",
                "title_zh": "飘走的气体会被再用",
                "title_en": "The gas gets recycled",
                "body_zh": "从太阳系附近掠过的云团会带走这些散出的气体，它们又会投入下一轮恒星形成。恒星的告别不是结束——材料被回收，新的恒星接力诞生。",
                "body_en": "Passing clouds sweep up the cast-off gas and fold it into the next round of star formation. A star's farewell is really a handoff — materials recycled into newborn stars."
              }
            ],
            "questions": [
              {
                "id": "str-c5-01-q1",
                "based_on": "teach[1]",
                "prompt_zh": "行星状星云与行星的关系是？",
                "prompt_en": "Planetary nebulae and planets:",
                "figure": "🎆",
                "choices": [
                  {"label_zh": "毫无关系，是历史误名", "label_en": "Unrelated — a historical misnomer", "glyph": "🎭"},
                  {"label_zh": "就是行星本身", "label_en": "They are planets", "glyph": "❌"},
                  {"label_zh": "行星的卫星", "label_en": "Planetary moons", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "早期望远镜里圆得像行星，才被误称。",
                "explain_en": "They merely looked round in old telescopes."
              },
              {
                "id": "str-c5-01-q2",
                "based_on": "teach[2]",
                "prompt_zh": "行星状星云的本质是？",
                "prompt_en": "A planetary nebula actually is:",
                "choices": [
                  {"label_zh": "红巨星抛出的外壳", "label_en": "A red giant's cast-off envelope", "glyph": "💨"},
                  {"label_zh": "一团即将形成行星的盘", "label_en": "A planet-forming disk", "glyph": "❌"},
                  {"label_zh": "彗星群", "label_en": "A swarm of comets", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "末期爆发把核心外物质抛掉，外壳形成星云。",
                "explain_en": "The dying giant sheds its outer layers."
              },
              {
                "id": "str-c5-01-q3",
                "based_on": "teach[3]",
                "prompt_zh": "抛壳之后，留下的核心变成？",
                "prompt_en": "After the shell is shed, the remaining core becomes:",
                "choices": [
                  {"label_zh": "白矮星", "label_en": "A white dwarf", "glyph": "💎"},
                  {"label_zh": "黑洞", "label_en": "A black hole", "glyph": "❌"},
                  {"label_zh": "一颗新行星", "label_en": "A new planet", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "燃尽的核心暴露，以白矮星的身份冷却。",
                "explain_en": "The exposed core cools as a white dwarf."
              },
              {
                "id": "str-c5-01-q4",
                "based_on": "teach[3]",
                "prompt_zh": "白矮星之后的演化是？",
                "prompt_en": "After the white-dwarf stage comes:",
                "choices": [
                  {"label_zh": "继续冷却，最终成黑矮星", "label_en": "Continued cooling toward a black dwarf", "glyph": "⚫"},
                  {"label_zh": "重新点燃变回恒星", "label_en": "Relighting as a star", "glyph": "❌"},
                  {"label_zh": "马上变成彗星", "label_en": "Turning into comets", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "不再聚变，靠余温发光并逐渐冷却。",
                "explain_en": "No fusion — just fading residual heat."
              },
              {
                "id": "str-c5-01-q5",
                "based_on": "teach[4]",
                "prompt_zh": "行星状星云的气体最终去向是？",
                "prompt_en": "The nebula's gas ultimately:",
                "choices": [
                  {"label_zh": "被回收，投入下一轮恒星形成", "label_en": "Gets recycled into new stars", "glyph": "♻️"},
                  {"label_zh": "永远消失", "label_en": "Vanishes forever", "glyph": "❌"},
                  {"label_zh": "落到地球上", "label_en": "Falls onto Earth", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "掠过的云团带走这些气体，孕育新恒星。",
                "explain_en": "Passing clouds harvest it for future stars."
              },
              {
                "id": "str-c5-01-q6",
                "based_on": "teach[2]",
                "prompt_zh": "哪类恒星会以行星状星云谢幕？",
                "prompt_en": "Which stars bow out as planetary nebulae?",
                "choices": [
                  {"label_zh": "太阳这类中小质量恒星", "label_en": "Sun-like, low-to-medium mass stars", "glyph": "✅"},
                  {"label_zh": "最大的恒星", "label_en": "The most massive stars", "glyph": "❌"},
                  {"label_zh": "所有黑洞前身", "label_en": "Every black-hole progenitor", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "红巨星抛壳成星云，是大质量之外的常规结局。",
                "explain_en": "Shedding a nebula is the sun-like ending."
              }
            ]
          }
        },
        {
          "left": 58,
          "lesson": {
            "id": "str-c5-02-supernova",
            "title_zh": "超新星爆发",
            "title_en": "Supernova!",
            "subtitle_zh": "炼金炉的总清算",
            "subtitle_en": "The great forge settles up",
            "icon": "💥",
            "xp": 35,
            "teach": [
              {
                "visual": "🔗",
                "title_zh": "一层层炼到铁为止",
                "title_en": "Forging layer by layer, to iron",
                "body_zh": "大质量恒星的核心持续聚变，依次制造出越来越重的元素：氢到氦、碳、氮、氧……直到铁为止。每个环节都需要更高温度，炉膛一层套一层，像洋葱。",
                "body_en": "A massive star's core fuses onward, crafting ever-heavier elements: hydrogen to helium, carbon, nitrogen, oxygen… stopping at iron. Each layer needs more heat — a nested onion of furnaces."
              },
              {
                "visual": "🧱",
                "title_zh": "铁：聚变的终点站",
                "title_en": "Iron: the last stop",
                "body_zh": "铁是聚变的死胡同：铁原子核无论聚变还是裂变都要吸收能量，无法再向外释放。燃料「回本」的路走到头，恒星再也没法从核心掏出能量对抗引力。",
                "body_en": "Iron is fusion's dead end: iron nuclei absorb energy whether fused or split, never releasing any. The energy well runs dry — the star can no longer fight gravity from its core."
              },
              {
                "visual": "💥",
                "title_zh": "坍缩、反弹、爆炸",
                "title_en": "Collapse, rebound, detonate",
                "body_zh": "失去聚变支撑，恒星核在自引力下突然坍缩，温度急升，接踵而来的爆炸把整颗恒星炸得粉碎——比 10 亿颗太阳还亮的光芒，能照耀一周以上。",
                "body_en": "With fusion gone, the core suddenly implodes under its own gravity, then rebounds — blasting the star apart with a light show brighter than a billion Suns, glowing for over a week."
              },
              {
                "visual": "🎁",
                "title_zh": "爆炸是给宇宙的礼物",
                "title_en": "An explosion that gives back",
                "body_zh": "爆炸把恒星炼出的元素撒向整个星系，还顺手炼出更重的元素。宇宙中比氢和氦更重的元素，最终都源自恒星与超新星——我们身体里的铁，正是星尘。",
                "body_en": "The blast scatters forged elements across the galaxy and mints heavier ones in the fire. Everything beyond hydrogen and helium comes from stars and supernovae — the iron in your blood is stardust."
              }
            ],
            "questions": [
              {
                "id": "str-c5-02-q1",
                "based_on": "teach[1]",
                "prompt_zh": "大质量恒星核心聚变的终点元素是？",
                "prompt_en": "A massive star's core fusion stops at:",
                "figure": "💥",
                "choices": [
                  {"label_zh": "铁", "label_en": "Iron", "glyph": "🧱"},
                  {"label_zh": "金", "label_en": "Gold", "glyph": "❌"},
                  {"label_zh": "氢", "label_en": "Hydrogen", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "从氢一路炼到铁，聚变链条到此为止。",
                "explain_en": "The chain runs hydrogen up to iron, and stops."
              },
              {
                "id": "str-c5-02-q2",
                "based_on": "teach[2]",
                "prompt_zh": "为什么铁是聚变的终点？",
                "prompt_en": "Why does fusion stop at iron?",
                "choices": [
                  {"label_zh": "铁的聚变和裂变都吸收能量", "label_en": "Iron absorbs energy both ways", "glyph": "✅"},
                  {"label_zh": "铁太重搬不动", "label_en": "Iron is too heavy to move", "glyph": "❌"},
                  {"label_zh": "铁会燃烧", "label_en": "Iron catches fire", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "铁聚变不释放能量，恒星无法靠它对抗引力。",
                "explain_en": "Iron fusion costs energy — no help against gravity."
              },
              {
                "id": "str-c5-02-q3",
                "based_on": "teach[3]",
                "prompt_zh": "超新星爆发的直接诱因是？",
                "prompt_en": "A supernova is directly triggered by:",
                "choices": [
                  {"label_zh": "核心坍缩后的剧烈反弹", "label_en": "Core collapse and violent rebound", "glyph": "💥"},
                  {"label_zh": "被小行星撞击", "label_en": "An asteroid strike", "glyph": "❌"},
                  {"label_zh": "恒星感冒了", "label_en": "The star caught a cold", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "失去支撑的恒星核坍缩、反弹，引发大爆炸。",
                "explain_en": "The unsupported core implodes and rebounds."
              },
              {
                "id": "str-c5-02-q4",
                "based_on": "teach[3]",
                "prompt_zh": "超新星的亮度大约是？",
                "prompt_en": "A supernova shines about as bright as:",
                "choices": [
                  {"label_zh": "10 亿颗太阳，持续一周以上", "label_en": "A billion Suns, for over a week", "glyph": "✨"},
                  {"label_zh": "一只手电筒", "label_en": "A flashlight", "glyph": "❌"},
                  {"label_zh": "一颗流星", "label_en": "A meteor", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "爆发烈焰能短暂照亮整个星系。",
                "explain_en": "Bright enough to outshine its galaxy briefly."
              },
              {
                "id": "str-c5-02-q5",
                "based_on": "teach[4]",
                "prompt_zh": "宇宙中比氢和氦更重的元素，最终源自？",
                "prompt_en": "Elements heavier than hydrogen and helium ultimately come from:",
                "choices": [
                  {"label_zh": "恒星聚变与超新星爆发", "label_en": "Stars and supernovae", "glyph": "🎁"},
                  {"label_zh": "地球上的工厂", "label_en": "Factories on Earth", "glyph": "❌"},
                  {"label_zh": "月球", "label_en": "The Moon", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "恒星炼出元素，超新星把它们撒遍星系。",
                "explain_en": "Stars forge them; supernovae spread them."
              },
              {
                "id": "str-c5-02-q6",
                "based_on": "teach[4]",
                "prompt_zh": "「我们身体里的铁是星尘」的意思是？",
                "prompt_en": "'The iron in your body is stardust' means:",
                "choices": [
                  {"label_zh": "它诞生于古老恒星的核心", "label_en": "It was forged inside ancient stars", "glyph": "✅"},
                  {"label_zh": "铁来自泥土", "label_en": "Iron came from dirt", "glyph": "❌"},
                  {"label_zh": "只是一种修辞，没有依据", "label_en": "Pure poetry, no basis", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "恒星核心炼出铁，爆发撒向宇宙，才有行星和我们。",
                "explain_en": "Star-forged iron, scattered for later worlds like ours."
              }
            ]
          }
        },
        {
          "left": -58,
          "lesson": {
            "id": "str-c5-03-neutron-pulsar",
            "title_zh": "中子星与脉冲星",
            "title_en": "Neutron Stars & Pulsars",
            "subtitle_zh": "宇宙灯塔与厨房秤",
            "subtitle_en": "Lighthouses and kitchen scales",
            "icon": "🗼",
            "xp": 35,
            "teach": [
              {
                "visual": "🌌",
                "title_zh": "城市大小的巨无霸",
                "title_en": "A city-sized monster",
                "body_zh": "大质量恒星爆发后，残骸被引力压成中子星：全部物质挤成一团中子，城市大小却有太阳级质量——一块方糖大小的中子星物质，抵得上一座山。",
                "body_en": "After the blast, the crushed remnant becomes a neutron star: pure neutrons packed city-sized yet sun-massed. A sugar-cube of it would outweigh a mountain."
              },
              {
                "visual": "🌀",
                "title_zh": "自转快得离谱",
                "title_en": "Absurdly fast spins",
                "body_zh": "坍缩时角动量守恒，像花样滑冰收拢手臂一样越转越快——中子星每秒能转几十甚至上百圈。刚诞生的中子星，是宇宙里最疯狂的旋转陀螺。",
                "body_en": "Conserving spin as it shrinks — like a skater pulling in her arms — a neutron star whirls tens to hundreds of times per second: the universe's maddest spinning top."
              },
              {
                "visual": "🗼",
                "title_zh": "脉冲星：宇宙灯塔",
                "title_en": "Pulsars: cosmic lighthouses",
                "body_zh": "快速旋转的中子星周围有超强磁场，带电粒子被加速，沿磁极方向射出光束。磁轴和自转轴不重合，光束随自转扫过天空——像灯塔，扫到地球就是一次脉冲。",
                "body_en": "A spinning neutron star's fierce magnetic field accelerates charged particles into beams from its magnetic poles. Off-axis from the spin, the beams sweep the sky — a lighthouse flashing Earth with each pass."
              },
              {
                "visual": "⏱️",
                "title_zh": "准到像原子钟",
                "title_en": "Precise as an atomic clock",
                "body_zh": "有些脉冲星的射电脉冲周期极其稳定，规律得像精密时钟。天文学家利用这种节拍研究极端物理，还曾用脉冲星信号给探测器校准时间——它们是宇宙的授时台。",
                "body_en": "Some pulsars tick with clockwork steadiness, rivaling atomic clocks. Astronomers use the beat to probe extreme physics and even time spacecraft — the cosmos's own timekeeping service."
              }
            ],
            "questions": [
              {
                "id": "str-c5-03-q1",
                "based_on": "teach[1]",
                "prompt_zh": "中子星的大小和质量大约是？",
                "prompt_en": "A neutron star is roughly:",
                "figure": "🗼",
                "choices": [
                  {"label_zh": "城市大小、太阳级质量", "label_en": "City-sized, sun-massed", "glyph": "🌌"},
                  {"label_zh": "地球大小、月亮质量", "label_en": "Earth-sized, moon-massed", "glyph": "❌"},
                  {"label_zh": "太阳大小、地球质量", "label_en": "Sun-sized, earth-massed", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "全部物质挤成一团中子，密度极端惊人。",
                "explain_en": "Pure neutron matter, insanely compressed."
              },
              {
                "id": "str-c5-03-q2",
                "based_on": "teach[1]",
                "prompt_zh": "一勺中子星物质大约有多重？",
                "prompt_en": "A spoonful of neutron-star matter weighs about:",
                "choices": [
                  {"label_zh": "一座山", "label_en": "A mountain", "glyph": "⛰️"},
                  {"label_zh": "一粒米", "label_en": "A grain of rice", "glyph": "❌"},
                  {"label_zh": "一瓶水", "label_en": "A bottle of water", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "密度极高，方糖大小就抵得上一座山。",
                "explain_en": "A sugar cube outweighs a mountain."
              },
              {
                "id": "str-c5-03-q3",
                "based_on": "teach[2]",
                "prompt_zh": "中子星转得快的原因是？",
                "prompt_en": "Neutron stars spin fast because:",
                "choices": [
                  {"label_zh": "坍缩时角动量守恒", "label_en": "Angular momentum conserved in collapse", "glyph": "🌀"},
                  {"label_zh": "有人在推它", "label_en": "Someone pushes them", "glyph": "❌"},
                  {"label_zh": "风太大了", "label_en": "It's windy", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "像滑冰收臂，收缩越紧转得越快。",
                "explain_en": "Shrink, and spin follows — skater's arms pulled in."
              },
              {
                "id": "str-c5-03-q4",
                "based_on": "teach[3]",
                "prompt_zh": "脉冲星的脉冲信号是怎么来的？",
                "prompt_en": "A pulsar's pulses arise from:",
                "choices": [
                  {"label_zh": "光束随自转扫过地球", "label_en": "Beams sweeping across Earth as it spins", "glyph": "🗼"},
                  {"label_zh": "星星在眨眼", "label_en": "The star blinking", "glyph": "❌"},
                  {"label_zh": "宇宙中的摩斯密码电台", "label_en": "A cosmic Morse station", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "磁极光束随自转扫动，像灯塔闪光。",
                "explain_en": "Polar beams sweep by — a lighthouse flash."
              },
              {
                "id": "str-c5-03-q5",
                "based_on": "teach[3]",
                "prompt_zh": "脉冲星本质上是什么？",
                "prompt_en": "A pulsar is essentially:",
                "choices": [
                  {"label_zh": "快速旋转的中子星", "label_en": "A rapidly spinning neutron star", "glyph": "✅"},
                  {"label_zh": "一种行星", "label_en": "A planet", "glyph": "❌"},
                  {"label_zh": "白矮星", "label_en": "A white dwarf", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "强磁场中子星的射电脉冲现象。",
                "explain_en": "A magnetized neutron star broadcasting pulses."
              },
              {
                "id": "str-c5-03-q6",
                "based_on": "teach[4]",
                "prompt_zh": "脉冲星脉冲周期的特点是？",
                "prompt_en": "Pulsar pulse periods are:",
                "choices": [
                  {"label_zh": "极其稳定，像精密时钟", "label_en": "Rock-steady, like precise clocks", "glyph": "⏱️"},
                  {"label_zh": "完全随机", "label_en": "Totally random", "glyph": "❌"},
                  {"label_zh": "每天快一倍", "label_en": "Doubling daily", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "有些脉冲星稳定得可当宇宙授时台。",
                "explain_en": "Steady enough to serve as cosmic clocks."
              }
            ]
          }
        },
        {
          "left": 66,
          "lesson": {
            "id": "str-c6-01-variable-binary",
            "title_zh": "变星与双星",
            "title_en": "Variable & Binary Stars",
            "subtitle_zh": "会变脸、会跳舞的星",
            "subtitle_en": "Stars that blink and waltz",
            "icon": "🔄",
            "xp": 35,
            "teach": [
              {
                "visual": "🔁",
                "title_zh": "变星：亮度按剧本变",
                "title_en": "Variables: stars with a script",
                "body_zh": "大多数恒星亮度稳定，但有一类恒星的亮度会按可识别的模式循环变化——变星。只要坚持细心观察，天文学家就能认出越来越多的「变脸者」。",
                "body_en": "Most stars shine steadily, but one class dims and brightens in recognizable cycles — variable stars. Patient, careful watching keeps turning up new shape-shifters."
              },
              {
                "visual": "📏",
                "title_zh": "造父变星：量天的尺子",
                "title_en": "Cepheids: rulers of the sky",
                "body_zh": "造父变星是变星中的明星：亮度极高，哪怕距离遥远仍清晰可见，变化周期又与真实亮度挂钩。量出周期就知道它本来的亮度——又一种标准烛光。",
                "body_en": "Cepheids are the VIPs of variables: brilliantly luminous, visible across vast distances, with a period tied to their true brightness. Read the rhythm, know the wattage — a standard candle."
              },
              {
                "visual": "🌌",
                "title_zh": "哈勃靠它改写宇宙",
                "title_en": "Hubble rewrote the sky with one",
                "body_zh": "1923 年，哈勃在仙女座星云里找到一颗造父变星，它比银河里的同类暗得多——说明远得惊人。仙女座「星云」其实是银河系之外的完整星系：宇宙岛首次现身。",
                "body_en": "In 1923 Hubble found a Cepheid in the Andromeda 'nebula,' far dimmer than its Milky Way cousins — meaning it was shockingly distant. Andromeda was a whole galaxy beyond ours: island universes, revealed."
              },
              {
                "visual": "💃",
                "title_zh": "双星：绕着质心共舞",
                "title_en": "Binaries: a dance around center",
                "body_zh": "很多恒星成对出现，互相绕着共同质心旋转，像双人舞。靠得太近时，一颗膨胀的红巨星会把物质「喂」给伴星——双星是天文学家称量恒星质量的天然天平。",
                "body_en": "Many stars pair up, waltzing around a shared center of mass. Dance too close, and a bloated red giant may feed material to its partner — binaries are nature's scales for weighing stars."
              }
            ],
            "questions": [
              {
                "id": "str-c6-01-q1",
                "based_on": "teach[1]",
                "prompt_zh": "变星的定义是？",
                "prompt_en": "Variable stars are stars that:",
                "figure": "🔄",
                "choices": [
                  {"label_zh": "亮度按可识别模式循环变化", "label_en": "Brighten and dim in recognizable cycles", "glyph": "🔁"},
                  {"label_zh": "永远不会发光", "label_en": "Never shine", "glyph": "❌"},
                  {"label_zh": "随机乱闪", "label_en": "Flash randomly", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "亮度变化遵循可识别的模式，不是乱来。",
                "explain_en": "Their changes follow a readable script."
              },
              {
                "id": "str-c6-01-q2",
                "based_on": "teach[2]",
                "prompt_zh": "造父变星为什么适合当「量天尺」？",
                "prompt_en": "Why do Cepheids make good cosmic rulers?",
                "choices": [
                  {"label_zh": "很亮又可由周期推算亮度", "label_en": "Very bright, with period revealing wattage", "glyph": "📏"},
                  {"label_zh": "离得最近", "label_en": "They're the closest stars", "glyph": "❌"},
                  {"label_zh": "颜色最漂亮", "label_en": "Prettiest colors", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "亮度极高远处可见，周期与真实亮度挂钩。",
                "explain_en": "Luminous and rhythmic — a natural candle."
              },
              {
                "id": "str-c6-01-q3",
                "based_on": "teach[3]",
                "prompt_zh": "1923 年哈勃发现仙女座造父变星偏暗，说明了？",
                "prompt_en": "Hubble's dim Andromeda Cepheid (1923) proved:",
                "choices": [
                  {"label_zh": "仙女座是银河系之外的星系", "label_en": "Andromeda lies beyond the Milky Way", "glyph": "🌌"},
                  {"label_zh": "造父变星快要熄灭", "label_en": "The Cepheid was dying", "glyph": "❌"},
                  {"label_zh": "望远镜坏了", "label_en": "The telescope was broken", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "太暗意味着太远，仙女座是独立的「宇宙岛」。",
                "explain_en": "Too dim meant too far — an island universe."
              },
              {
                "id": "str-c6-01-q4",
                "based_on": "teach[3]",
                "prompt_zh": "「宇宙岛」指的是？",
                "prompt_en": "'Island universes' refers to:",
                "choices": [
                  {"label_zh": "银河系之外的独立星系", "label_en": "Galaxies beyond the Milky Way", "glyph": "🏝️"},
                  {"label_zh": "海上的岛屿", "label_en": "Actual islands", "glyph": "❌"},
                  {"label_zh": "太阳系八大行星", "label_en": "The eight planets", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "康德的猜想被哈勃的发现证实。",
                "explain_en": "Kant's guess, confirmed by Hubble's find."
              },
              {
                "id": "str-c6-01-q5",
                "based_on": "teach[4]",
                "prompt_zh": "双星系统中的两颗星绕什么转？",
                "prompt_en": "Binary stars orbit:",
                "choices": [
                  {"label_zh": "它们的共同质心", "label_en": "Their shared center of mass", "glyph": "💃"},
                  {"label_zh": "其中较大的那颗", "label_en": "Whichever is bigger", "glyph": "❌"},
                  {"label_zh": "地球", "label_en": "Earth", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "像双人舞，两人都绕共同的平衡点。",
                "explain_en": "A waltz around a common balance point."
              },
              {
                "id": "str-c6-01-q6",
                "based_on": "teach[4]",
                "prompt_zh": "双星对天文学的特殊价值是？",
                "prompt_en": "Binaries are especially valuable because they:",
                "choices": [
                  {"label_zh": "提供了称量恒星质量的天平", "label_en": "Provide a scale for weighing stars", "glyph": "✅"},
                  {"label_zh": "看起来更浪漫", "label_en": "Look romantic", "glyph": "❌"},
                  {"label_zh": "从不互相影响", "label_en": "Never interact", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "绕转轨道藏着质量信息，是天然天平。",
                "explain_en": "Their orbits encode mass — nature's balance."
              }
            ]
          }
        }
      ]
    }
  ]
}
```
