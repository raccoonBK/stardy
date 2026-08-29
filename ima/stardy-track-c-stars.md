```json
{
  "tracks": [
    {
      "id": "stars",
      "name_zh": "恒星的一生",
      "name_en": "Lives of Stars",
      "tagline_zh": "从星云尘埃到终极残骸",
      "tagline_en": "From dust clouds to final remnants",
      "icon": "⭐",
      "nodes": [
        {
          "chapter_zh": "第 5 章 · 恒星的诞生与死亡",
          "chapter_en": "Chapter 5 · Stars: Birth to Death",
          "left": 0,
          "lesson": {
            "id": "str-c1-01-parallax",
            "title_zh": "视差与恒星的距离",
            "title_en": "Parallax & Stellar Distances",
            "subtitle_zh": "量出星星有多远",
            "subtitle_en": "Measuring how far the stars are",
            "icon": "📏",
            "xp": 20,
            "teach": [
              {
                "visual": "👉",
                "title_zh": "伸手指的把戏",
                "title_en": "The finger trick",
                "body_zh": "闭上一只眼再换另一只，手指相对背景会跳动——这就是视差。天文学家利用地球公转，以半年时间差观测同一颗星，测它相对遥远背景的偏移。",
                "body_en": "Swap eyes and your finger jumps — that's parallax. Astronomers use Earth's orbit to make stars 'jump' against the background."
              },
              {
                "visual": "📐",
                "title_zh": "视差越小，距离越远",
                "title_en": "Smaller shift, farther star",
                "body_zh": "偏移角的一半叫周年视差，1角秒的视差对应1秒差距（约3.26光年）。恒星越远，视差越小，越难测。",
                "body_en": "Half the shift is the parallax angle; 1 arcsecond means 1 parsec (~3.26 light-years)."
              }
            ],
            "questions": [
              {
                "id": "str-c1-01-q1",
                "prompt_zh": "恒星视差现象的存在证明了？",
                "prompt_en": "Stellar parallax proves that…",
                "choices": [
                  {"label_zh": "地球确实在绕太阳运动", "label_en": "Earth really orbits the Sun"},
                  {"label_zh": "恒星在原地晃动", "label_en": "Stars wobble in place"},
                  {"label_zh": "地球是宇宙中心", "label_en": "Earth is the center"}
                ],
                "correct_idx": 0,
                "explain_zh": "视差正是地球公转的直接证据，哥白尼学说的胜负手。",
                "explain_en": "Parallax was the long-awaited proof of heliocentrism."
              },
              {
                "id": "str-c1-01-q2",
                "prompt_zh": "1秒差距大约等于多少光年？",
                "prompt_en": "One parsec is about how many light-years?",
                "choices": [
                  {"label_zh": "3.26光年", "label_en": "3.26 light-years", "glyph": "3️⃣"},
                  {"label_zh": "1光年", "label_en": "1 light-year", "glyph": "1️⃣"},
                  {"label_zh": "10光年", "label_en": "10 light-years", "glyph": "🔟"}
                ],
                "correct_idx": 0,
                "explain_zh": "视差1角秒对应约3.26光年。",
                "explain_en": "A 1-arcsecond parallax equals ~3.26 light-years."
              },
              {
                "id": "str-c1-01-q3",
                "prompt_zh": "一颗恒星的视差角越大，说明它？",
                "prompt_en": "A bigger parallax angle means the star is…",
                "choices": [
                  {"label_zh": "离我们越近", "label_en": "Closer to us"},
                  {"label_zh": "离我们越远", "label_en": "Farther away"},
                  {"label_zh": "质量越大", "label_en": "More massive"}
                ],
                "correct_idx": 0,
                "explain_zh": "视差与距离成反比，近星偏移大。",
                "explain_en": "Parallax shrinks with distance — near stars jump the most."
              }
            ]
          }
        },
        {
          "left": 26,
          "lesson": {
            "id": "str-c1-02-proper-motion",
            "title_zh": "自行：星星真的在动",
            "title_en": "Proper Motion",
            "subtitle_zh": "恒星不是钉在天上的图钉",
            "subtitle_en": "Stars aren't pinned to the sky",
            "icon": "➡️",
            "xp": 20,
            "teach": [
              {
                "visual": "🏃",
                "title_zh": "每年挪一点",
                "title_en": "A tiny yearly drift",
                "body_zh": "剔除地球运动造成的视差后，恒星自身相对太阳的缓慢位移叫自行，通常每年不到1角秒，肉眼完全察觉不到。",
                "body_en": "After removing parallax, stars still drift slowly — proper motion, usually under 1 arcsecond per year."
              },
              {
                "visual": "⏩",
                "title_zh": "飞星巴纳德",
                "title_en": "Barnard's Star",
                "body_zh": "自行最快的是巴纳德星，每年移动约10.4角秒，要约180年才走满月直径，但已是全天冠军。",
                "body_en": "Barnard's Star zips 10.4 arcseconds a year — fast enough to cross a full moon in ~180 years."
              }
            ],
            "questions": [
              {
                "id": "str-c1-02-q1",
                "prompt_zh": "天文学里的“自行”指的是？",
                "prompt_en": "'Proper motion' refers to…",
                "choices": [
                  {"label_zh": "恒星自身相对太阳的真实位移", "label_en": "A star's own drift relative to the Sun"},
                  {"label_zh": "地球自转造成的星空转动", "label_en": "The sky's daily turning"},
                  {"label_zh": "行星在天球上移动", "label_en": "Planets wandering"}
                ],
                "correct_idx": 0,
                "explain_zh": "自转公转和视差都要先扣除，剩下才是自行。",
                "explain_en": "It's what's left after rotation, orbit and parallax are removed."
              },
              {
                "id": "str-c1-02-q2",
                "prompt_zh": "自行很快的恒星，通常是？",
                "prompt_en": "Stars with large proper motion tend to be…",
                "choices": [
                  {"label_zh": "离我们较近的星", "label_en": "Nearby stars"},
                  {"label_zh": "特别明亮的星", "label_en": "Especially bright stars"},
                  {"label_zh": "特别遥远的星", "label_en": "Very distant stars"}
                ],
                "correct_idx": 0,
                "explain_zh": "近处同样速度显得移动更快，巴纳德星就是个近邻。",
                "explain_en": "Nearby stars show their speed — Barnard's Star is a next-door neighbor."
              }
            ]
          }
        },
        {
          "left": 34,
          "lesson": {
            "id": "str-c1-04-spectral-types",
            "title_zh": "光谱型：恒星的条形码",
            "title_en": "Spectral Types",
            "subtitle_zh": "O B A F G K M",
            "subtitle_en": "O B A F G K M",
            "icon": "🌈",
            "xp": 25,
            "teach": [
              {
                "visual": "🌈",
                "title_zh": "颜色出卖温度",
                "title_en": "Color betrays temperature",
                "body_zh": "把星光分成光谱，吸收线的图案只取决于表面温度。天文学家据此给恒星分类：O型最热最蓝，M型最冷最红，太阳是普通的G型。",
                "body_en": "Split starlight and its lines reveal surface temperature: O stars are hottest, M the coolest, and the Sun is a middling G."
              },
              {
                "visual": "🔤",
                "title_zh": "一句顺口溜",
                "title_en": "A mnemonic",
                "body_zh": "记谱序可以用“ Oh Be A Fine Girl/Guy, Kiss Me ”，从热到冷依次 O、B、A、F、G、K、M。",
                "body_en": "Remember the order with 'Oh Be A Fine Girl/Guy, Kiss Me' — O through M, hot to cool."
              }
            ],
            "questions": [
              {
                "id": "str-c1-04-q1",
                "prompt_zh": "表面温度最高的恒星光谱型是？",
                "prompt_en": "The hottest spectral type is…",
                "choices": [
                  {"label_zh": "O型", "label_en": "Type O", "glyph": "🔵"},
                  {"label_zh": "M型", "label_en": "Type M", "glyph": "🔴"},
                  {"label_zh": "G型", "label_en": "Type G", "glyph": "🟡"}
                ],
                "correct_idx": 0,
                "explain_zh": "O型星表面超过3万度，发蓝光。",
                "explain_en": "O stars blaze above 30,000 K in blue."
              },
              {
                "id": "str-c1-04-q2",
                "prompt_zh": "太阳属于哪个光谱型？",
                "prompt_en": "The Sun's spectral type is…",
                "choices": [
                  {"label_zh": "G型", "label_en": "Type G", "glyph": "🟡"},
                  {"label_zh": "O型", "label_en": "Type O", "glyph": "🔵"},
                  {"label_zh": "M型", "label_en": "Type M", "glyph": "🔴"}
                ],
                "correct_idx": 0,
                "explain_zh": "太阳表面约5500度，是典型的G型黄矮星。",
                "explain_en": "At ~5500 K, the Sun is a classic G-type yellow dwarf."
              },
              {
                "id": "str-c1-04-q3",
                "prompt_zh": "光谱型从O到M，表面温度如何变化？",
                "prompt_en": "From O to M, surface temperature…",
                "choices": [
                  {"label_zh": "逐渐降低", "label_en": "Falls steadily"},
                  {"label_zh": "逐渐升高", "label_en": "Rises steadily"},
                  {"label_zh": "先升后降", "label_en": "Rises then falls"}
                ],
                "correct_idx": 0,
                "explain_zh": "序列本质上是温度序列：蓝热红冷。",
                "explain_en": "The sequence is really a temperature scale: blue-hot to red-cool."
              }
            ]
          }
        },
        {
          "left": 26,
          "lesson": {
            "id": "str-c1-05-mass-luminosity",
            "title_zh": "质光关系",
            "title_en": "Mass & Luminosity",
            "subtitle_zh": "质量是恒星的命根子",
            "subtitle_en": "Mass is a star's destiny",
            "icon": "⚖️",
            "xp": 25,
            "teach": [
              {
                "visual": "⚖️",
                "title_zh": "重一点，亮很多",
                "title_en": "A bit heavier, a lot brighter",
                "body_zh": "主序星的光度大致随质量的3到4次方增长：质量翻倍，亮度可暴涨十几倍。质量是决定恒星一切属性的根源。",
                "body_en": "Main-sequence brightness scales with mass to the 3rd–4th power — double the mass, glow far brighter."
              },
              {
                "visual": "🕯️",
                "title_zh": "亮得快，活得短",
                "title_en": "Bright but brief",
                "body_zh": "质量大意味着燃料烧得更凶，反而死得早：太阳能烧约100亿年，几十倍太阳质量的巨星几百万年就燃尽。",
                "body_en": "Massive stars burn fuel furiously and die young — millions of years versus the Sun's 10 billion."
              }
            ],
            "questions": [
              {
                "id": "str-c1-05-q1",
                "prompt_zh": "两颗主序星，质量大的那颗通常？",
                "prompt_en": "Between two main-sequence stars, the heavier one is…",
                "choices": [
                  {"label_zh": "更亮但寿命更短", "label_en": "Brighter but shorter-lived"},
                  {"label_zh": "更暗但寿命更长", "label_en": "Dimmer but longer-lived"},
                  {"label_zh": "亮度和寿命都一样", "label_en": "Same in both"}
                ],
                "correct_idx": 0,
                "explain_zh": "质光关系让大质量星又亮又短命。",
                "explain_en": "Mass-luminosity law: big stars blaze and fade fast."
              },
              {
                "id": "str-c1-05-q2",
                "prompt_zh": "决定恒星一生演化路径的最关键因素是？",
                "prompt_en": "The single factor that decides a star's fate is…",
                "choices": [
                  {"label_zh": "诞生时的质量", "label_en": "Its birth mass"},
                  {"label_zh": "自转速度", "label_en": "Its spin rate"},
                  {"label_zh": "距离我们远近", "label_en": "Its distance from us"}
                ],
                "correct_idx": 0,
                "explain_zh": "质量决定了光度、寿命和最终结局。",
                "explain_en": "Mass sets brightness, lifetime and final fate."
              }
            ]
          }
        },
        {
          "left": 0,
          "lesson": {
            "id": "str-c2-01-hr-diagram",
            "title_zh": "赫罗图",
            "title_en": "The H-R Diagram",
            "subtitle_zh": "恒星的人事档案",
            "subtitle_en": "Stars, filed and sorted",
            "icon": "📊",
            "xp": 25,
            "teach": [
              {
                "visual": "📊",
                "title_zh": "两个轴看懂一切",
                "title_en": "Two axes tell all",
                "body_zh": "赫罗图把每颗恒星按表面温度（横轴，向左更热）和光度（纵轴，向上更亮）画成一点，一张图装下恒星的“户口本”。",
                "body_en": "Plot each star by temperature (leftward is hotter) and luminosity (upward is brighter) — a census of the stars."
              },
              {
                "visual": "📈",
                "title_zh": "大多数星排成一条带",
                "title_en": "Most stars line up",
                "body_zh": "90%左右的恒星落在从左上到右下的主序带上，其余聚在右上方的红巨星区和左下方的白矮星区。",
                "body_en": "~90% of stars sit on the main sequence; red giants crowd the upper right, white dwarfs the lower left."
              }
            ],
            "questions": [
              {
                "id": "str-c2-01-q1",
                "prompt_zh": "赫罗图的横轴和纵轴分别是？",
                "prompt_en": "The H-R diagram plots…",
                "choices": [
                  {"label_zh": "温度和光度", "label_en": "Temperature vs. luminosity"},
                  {"label_zh": "距离和亮度", "label_en": "Distance vs. brightness"},
                  {"label_zh": "质量和年龄", "label_en": "Mass vs. age"}
                ],
                "correct_idx": 0,
                "explain_zh": "表面温度与光度是恒星最基本的两个可观测量。",
                "explain_en": "Temperature and luminosity are a star's two fundamental observables."
              },
              {
                "id": "str-c2-01-q2",
                "prompt_zh": "赫罗图右上方聚集的是？",
                "prompt_en": "The upper-right of the H-R diagram holds…",
                "choices": [
                  {"label_zh": "又大又冷的红巨星", "label_en": "Big, cool red giants", "glyph": "🔴"},
                  {"label_zh": "又小又热的白矮星", "label_en": "Small, hot white dwarfs", "glyph": "⚪"},
                  {"label_zh": "刚诞生的原恒星", "label_en": "Newborn protostars", "glyph": "🐣"}
                ],
                "correct_idx": 0,
                "explain_zh": "温度低却光度高，只能靠巨大身板，那是红巨星。",
                "explain_en": "Cool yet bright demands enormous size — red giants."
              }
            ]
          }
        },
        {
          "left": -26,
          "lesson": {
            "id": "str-c2-02-main-sequence",
            "title_zh": "主序星",
            "title_en": "Main Sequence",
            "subtitle_zh": "恒星的黄金年代",
            "subtitle_en": "A star's prime",
            "icon": "🌟",
            "xp": 20,
            "teach": [
              {
                "visual": "🌟",
                "title_zh": "燃烧氢的漫长岁月",
                "title_en": "Long decades of hydrogen burning",
                "body_zh": "主序星就是核心稳定地把氢聚变成氦的恒星，这是恒星一生中最稳定、最漫长的阶段，太阳正处其中。",
                "body_en": "Main-sequence stars steadily fuse hydrogen in their cores — the long, stable prime of a star's life."
              },
              {
                "visual": "⚖️",
                "title_zh": "引力与压力的平衡",
                "title_en": "Gravity vs. pressure",
                "body_zh": "主序星靠核心聚变产生的向外压力，与向内的引力精确平衡，像一场持续百亿年的拔河。",
                "body_en": "Fusion pressure tugs against gravity in a tug-of-war lasting billions of years."
              }
            ],
            "questions": [
              {
                "id": "str-c2-02-q1",
                "prompt_zh": "主序星的能量来源是？",
                "prompt_en": "Main-sequence stars are powered by…",
                "choices": [
                  {"label_zh": "核心氢聚变", "label_en": "Core hydrogen fusion"},
                  {"label_zh": "引力收缩", "label_en": "Gravitational contraction"},
                  {"label_zh": "放射性衰变", "label_en": "Radioactive decay"}
                ],
                "correct_idx": 0,
                "explain_zh": "氢变氦是主序阶段唯一的稳定能量来源。",
                "explain_en": "Hydrogen-to-helium fusion is the sole engine of the main sequence."
              },
              {
                "id": "str-c2-02-q2",
                "prompt_zh": "主序星的稳定来自？",
                "prompt_en": "A main-sequence star stays stable because…",
                "choices": [
                  {"label_zh": "引力与向外的压力互相平衡", "label_en": "Gravity balances outward pressure"},
                  {"label_zh": "它停止了引力作用", "label_en": "Gravity switches off"},
                  {"label_zh": "外部没有物质", "label_en": "Nothing surrounds it"}
                ],
                "correct_idx": 0,
                "explain_zh": "失去平衡恒星就会膨胀或坍缩，进入下一演化阶段。",
                "explain_en": "Lose the balance and the star swells or collapses into its next phase."
              }
            ]
          }
        },
        {
          "left": -34,
          "lesson": {
            "id": "str-c2-03-giants-dwarfs",
            "title_zh": "巨星与矮星",
            "title_en": "Giants & Dwarfs",
            "subtitle_zh": "同样温度，天壤之别",
            "subtitle_en": "Same temperature, wildly different size",
            "icon": "大象",
            "xp": 20,
            "teach": [
              {
                "visual": "🐘",
                "title_zh": "冷却却更亮",
                "title_en": "Cooler yet brighter",
                "body_zh": "红巨星表面温度比太阳低，却比太阳亮几百倍——温度不够，体积来凑，它们的半径可达太阳几十到几百倍。",
                "body_en": "Red giants are cooler than the Sun yet hundreds of times brighter — sheer size makes up the difference."
              },
              {
                "visual": "🫘",
                "title_zh": "白矮星：地球大的密度怪物",
                "title_en": "White dwarfs: Earth-sized, ultra-dense",
                "body_zh": "白矮星是恒星燃尽后的残骸，只有地球大小，一茶匙物质可重达几吨，靠电子压力对抗引力。",
                "body_en": "Burnt-out star cores the size of Earth — a teaspoon would weigh tons."
              }
            ],
            "questions": [
              {
                "id": "str-c2-03-q1",
                "prompt_zh": "红巨星比太阳亮，主要因为它？",
                "prompt_en": "Red giants outshine the Sun mainly because they…",
                "choices": [
                  {"label_zh": "表面积巨大", "label_en": "Have enormous surface area"},
                  {"label_zh": "表面温度更高", "label_en": "Are hotter at the surface"},
                  {"label_zh": "离我们更近", "label_en": "Lie closer to us"}
                ],
                "correct_idx": 0,
                "explain_zh": "温度低但发光面积大得多，总光度反超。",
                "explain_en": "Cooler, but the vast surface more than compensates."
              },
              {
                "id": "str-c2-03-q2",
                "prompt_zh": "白矮星的大小大约相当于？",
                "prompt_en": "A white dwarf is about the size of…",
                "choices": [
                  {"label_zh": "地球", "label_en": "Earth", "glyph": "🌍"},
                  {"label_zh": "太阳", "label_en": "The Sun", "glyph": "☀️"},
                  {"label_zh": "木星", "label_en": "Jupiter", "glyph": "🪐"}
                ],
                "correct_idx": 0,
                "explain_zh": "却有接近太阳的质量，密度惊人。",
                "explain_en": "Yet it packs nearly a Sun's worth of mass — astonishingly dense."
              }
            ]
          }
        },
        {
          "left": -26,
          "lesson": {
            "id": "str-c3-01-nebulae",
            "title_zh": "星云：恒星的育婴房",
            "title_en": "Nebulae: Stellar Nurseries",
            "subtitle_zh": "气体和尘埃的云",
            "subtitle_en": "Clouds of gas and dust",
            "icon": "☁️",
            "xp": 20,
            "teach": [
              {
                "visual": "☁️",
                "title_zh": "三种颜色的星云",
                "title_en": "Three colors of nebula",
                "body_zh": "发射星云被附近热星照亮而自己发光，反射星云靠散射星光呈蓝色，暗星云则遮挡背后星光，剪影般漆黑。",
                "body_en": "Emission nebulae glow on their own, reflection nebulae scatter blue starlight, dark nebulae blot out stars behind them."
              },
              {
                "visual": "🥚",
                "title_zh": "恒星的原料库",
                "title_en": "Star-stuff warehouses",
                "body_zh": "星云是恒星的育婴房：猎户座大星云里此刻就有成千上万颗新星正在诞生。",
                "body_en": "Nebulae are stellar nurseries — the Orion Nebula is birthing thousands of new stars right now."
              }
            ],
            "questions": [
              {
                "id": "str-c3-01-q1",
                "prompt_zh": "发射星云发光的机制是？",
                "prompt_en": "Emission nebulae glow because…",
                "choices": [
                  {"label_zh": "被附近热星的辐射激发", "label_en": "Nearby hot stars excite their gas"},
                  {"label_zh": "自己发生核聚变", "label_en": "They fuse hydrogen"},
                  {"label_zh": "反射月光", "label_en": "They reflect moonlight"}
                ],
                "correct_idx": 0,
                "explain_zh": "气体原子被激发后再跃迁，发出特征颜色。",
                "explain_en": "Excited atoms re-emit light at their signature colors."
              },
              {
                "id": "str-c3-01-q2",
                "prompt_zh": "著名的恒星育婴房是？",
                "prompt_en": "A famous stellar nursery is…",
                "choices": [
                  {"label_zh": "猎户座大星云", "label_en": "The Orion Nebula", "glyph": "🦂"},
                  {"label_zh": "仙女星系", "label_en": "The Andromeda Galaxy", "glyph": "🌌"},
                  {"label_zh": "冥王星", "label_en": "Pluto", "glyph": "❄️"}
                ],
                "correct_idx": 0,
                "explain_zh": "它离我们仅约1300多光年，肉眼隐约可见。",
                "explain_en": "Only ~1,300 light-years away and faintly visible to the eye."
              }
            ]
          }
        },
        {
          "left": 0,
          "lesson": {
            "id": "str-c3-02-protostar",
            "title_zh": "原恒星：恒星的胚胎",
            "title_en": "Protostars",
            "subtitle_zh": "从云团到点火",
            "subtitle_en": "From cloud to ignition",
            "icon": "🐣",
            "xp": 20,
            "teach": [
              {
                "visual": "🌪️",
                "title_zh": "坍缩点火",
                "title_en": "Collapse and ignite",
                "body_zh": "星云中密度较高的团块在自身引力下坍缩，中心升温升压，当核心温度突破约1000万度，氢聚变点燃，一颗恒星正式上岗。",
                "body_en": "Dense clumps collapse under their own gravity; at ~10 million degrees, fusion ignites."
              },
              {
                "visual": "💿",
                "title_zh": "副产品：行星的原料",
                "title_en": "Byproduct: planet material",
                "body_zh": "坍缩中旋转加快，残余物质摊成围绕原恒星的吸积盘——行星正是从盘中尘埃粘合长出来的。",
                "body_en": "Spinning faster as it shrinks, leftover material flattens into a disk — where planets are built."
              }
            ],
            "questions": [
              {
                "id": "str-c3-02-q1",
                "prompt_zh": "原恒星点燃核聚变的关键条件是？",
                "prompt_en": "What triggers fusion in a protostar?",
                "choices": [
                  {"label_zh": "核心温度达到约千万度", "label_en": "A core of ~10 million degrees"},
                  {"label_zh": "体积膨胀到足够大", "label_en": "Growing large enough"},
                  {"label_zh": "有陨石撞击", "label_en": "An asteroid impact"}
                ],
                "correct_idx": 0,
                "explain_zh": "引力坍缩积蓄的压力和温度达到点火阈值。",
                "explain_en": "Gravitational collapse builds the heat and pressure to ignite."
              },
              {
                "id": "str-c3-02-q2",
                "prompt_zh": "原恒星周围的吸积盘将来可能形成？",
                "prompt_en": "The disk around a protostar may one day become…",
                "choices": [
                  {"label_zh": "行星系统", "label_en": "A planetary system", "glyph": "🪐"},
                  {"label_zh": "黑洞", "label_en": "A black hole", "glyph": "🕳️"},
                  {"label_zh": "另一个星系", "label_en": "Another galaxy", "glyph": "🌌"}
                ],
                "correct_idx": 0,
                "explain_zh": "太阳系就诞生于46亿年前这样一张盘。",
                "explain_en": "Our solar system grew from just such a disk 4.6 billion years ago."
              }
            ]
          }
        },
        {
          "left": 26,
          "lesson": {
            "id": "str-c4-01-red-giant",
            "title_zh": "红巨星：太阳的晚年",
            "title_en": "Red Giant: The Sun's Old Age",
            "subtitle_zh": "氢烧完了怎么办",
            "subtitle_en": "When the hydrogen runs out",
            "icon": "🔴",
            "xp": 25,
            "teach": [
              {
                "visual": "🎈",
                "title_zh": "核心熄火，外壳狂燃",
                "title_en": "Core out, shell on",
                "body_zh": "太阳核心的氢耗尽后，核心收缩升温，外壳中的氢开始聚变，外层剧烈膨胀，太阳将膨胀成半径约200倍的红巨星。",
                "body_en": "When the Sun's core hydrogen is spent, the shell ignites and the Sun swells ~200-fold."
              },
              {
                "visual": "🍽️",
                "title_zh": "膨胀反而变冷",
                "title_en": "Bigger but cooler",
                "body_zh": "膨胀让表面温度下降、颜色变红，虽然单位面积更暗，但巨大的表面积让总光度反而上升。",
                "body_en": "The swollen surface cools and reddens, but total brightness still climbs."
              }
            ],
            "questions": [
              {
                "id": "str-c4-01-q1",
                "prompt_zh": "恒星进入红巨星阶段，是因为？",
                "prompt_en": "A star becomes a red giant when…",
                "choices": [
                  {"label_zh": "核心氢耗尽，燃烧转移到壳层", "label_en": "Core hydrogen runs out; fusion moves to a shell"},
                  {"label_zh": "氢变成了铁", "label_en": "Hydrogen turns to iron"},
                  {"label_zh": "失去所有行星", "label_en": "It loses its planets"}
                ],
                "correct_idx": 0,
                "explain_zh": "核心聚变停止后失去支撑，一系列调整导致外层膨胀。",
                "explain_en": "Fusion stalls in the core and the star's outer layers balloon."
              },
              {
                "id": "str-c4-01-q2",
                "prompt_zh": "太阳未来将膨胀为红巨星，届时？",
                "prompt_en": "When the Sun becomes a red giant…",
                "choices": [
                  {"label_zh": "半径可达现在的约200倍", "label_en": "It may grow ~200 times wider"},
                  {"label_zh": "表面温度大幅升高", "label_en": "Its surface will get much hotter"},
                  {"label_zh": "质量大量增加", "label_en": "It will gain mass"}
                ],
                "correct_idx": 0,
                "explain_zh": "水星、金星乃至地球都可能被吞没或烤焦。",
                "explain_en": "Mercury, Venus — possibly Earth — could be swallowed or scorched."
              }
            ]
          }
        },
        {
          "left": 34,
          "lesson": {
            "id": "str-c5-01-supernova",
            "title_zh": "超新星爆发",
            "title_en": "Supernova",
            "subtitle_zh": "宇宙中最壮丽的谢幕",
            "subtitle_en": "The grandest farewell",
            "icon": "💥",
            "xp": 30,
            "teach": [
              {
                "visual": "💥",
                "title_zh": "大质量星的终点",
                "title_en": "The end of a giant",
                "body_zh": "大质量恒星聚变到铁就无路可走：铁聚变不释放能量，核心瞬间坍缩，外层猛烈反弹，引发超新星爆发，短短几天亮度可匹敌整个星系。",
                "body_en": "Fusion ends at iron; the core collapses and the star detonates — briefly outshining its whole galaxy."
              },
              {
                "visual": "🧬",
                "title_zh": "我们都是星尘",
                "title_en": "We are stardust",
                "body_zh": "爆发把恒星内部合成的碳、氧、铁等重元素抛向太空，成为下一代恒星和行星的原料——你身体里的重元素正是这样来的。",
                "body_en": "The blast scatters carbon, oxygen and iron — the raw stuff of new stars, planets and you."
              }
            ],
            "questions": [
              {
                "id": "str-c5-01-q1",
                "prompt_zh": "大质量恒星核聚变到哪种元素就必然走向坍缩？",
                "prompt_en": "Fusion stops paying off at which element?",
                "choices": [
                  {"label_zh": "铁", "label_en": "Iron", "glyph": "🧱"},
                  {"label_zh": "氦", "label_en": "Helium", "glyph": "🎈"},
                  {"label_zh": "碳", "label_en": "Carbon", "glyph": "💎"}
                ],
                "correct_idx": 0,
                "explain_zh": "铁聚变吸收能量而非释放，核心失去支撑。",
                "explain_en": "Fusing iron costs energy — the core's support vanishes."
              },
              {
                "id": "str-c5-01-q2",
                "prompt_zh": "超新星爆发的重要意义是？",
                "prompt_en": "Supernovae matter because they…",
                "choices": [
                  {"label_zh": "把重元素散播到宇宙中", "label_en": "Seed the cosmos with heavy elements"},
                  {"label_zh": "消灭附近所有生命", "label_en": "Destroy all nearby life"},
                  {"label_zh": "让宇宙温度升高", "label_en": "Heat up the universe"}
                ],
                "correct_idx": 0,
                "explain_zh": "没有超新星就没有行星和生命所需的元素。",
                "explain_en": "No supernovae, no planets or life as we know it."
              },
              {
                "id": "str-c5-01-q3",
                "prompt_zh": "超新星爆发时的亮度可以媲美？",
                "prompt_en": "At peak, a supernova rivals…",
                "choices": [
                  {"label_zh": "整个星系", "label_en": "An entire galaxy", "glyph": "🌌"},
                  {"label_zh": "满月", "label_en": "The full moon", "glyph": "🌕"},
                  {"label_zh": "一颗普通恒星", "label_en": "An ordinary star", "glyph": "⭐"}
                ],
                "correct_idx": 0,
                "explain_zh": "单星爆发短暂超过数千亿颗恒星的总和。",
                "explain_en": "One dying star briefly outshines a hundred billion suns."
              }
            ]
          }
        },
        {
          "left": 26,
          "lesson": {
            "id": "str-c5-02-remnants",
            "title_zh": "白矮星、中子星与黑洞",
            "title_en": "White Dwarfs, Neutron Stars & Black Holes",
            "subtitle_zh": "死后留下什么",
            "subtitle_en": "What's left behind",
            "icon": "⚰️",
            "xp": 25,
            "teach": [
              {
                "visual": "⚖️",
                "title_zh": "质量决定遗骸",
                "title_en": "Mass picks the relic",
                "body_zh": "核心残骸在1.4倍太阳质量以下，电子压力撑得住，成为白矮星；再重就坍缩成中子星；更重则连中子也撑不住，成为黑洞。",
                "body_en": "Under 1.4 solar masses: white dwarf; heavier: neutron star; heavier still: black hole."
              },
              {
                "visual": "⏱️",
                "title_zh": "宇宙最精确的钟",
                "title_en": "The universe's best clocks",
                "body_zh": "中子星把一个太阳的质量压进直径约20公里的球里，高速自转并发射射电脉冲，就是脉冲星，有的自转比厨房搅拌机还快。",
                "body_en": "A neutron star packs a Sun's mass into ~20 km, spinning and pulsing — some faster than a blender."
              }
            ],
            "questions": [
              {
                "id": "str-c5-02-q1",
                "prompt_zh": "太阳最终会变成？",
                "prompt_en": "The Sun will end as…",
                "choices": [
                  {"label_zh": "白矮星", "label_en": "A white dwarf", "glyph": "⚪"},
                  {"label_zh": "中子星", "label_en": "A neutron star", "glyph": "⏱️"},
                  {"label_zh": "黑洞", "label_en": "A black hole", "glyph": "🕳️"}
                ],
                "correct_idx": 0,
                "explain_zh": "太阳质量不够大，核心残骸将平静地成为碳氧白矮星。",
                "explain_en": "Too light for fireworks, the Sun will settle into a carbon-oxygen white dwarf."
              },
              {
                "id": "str-c5-02-q2",
                "prompt_zh": "脉冲星其实是什么？",
                "prompt_en": "A pulsar is really…",
                "choices": [
                  {"label_zh": "快速自转的中子星", "label_en": "A fast-spinning neutron star"},
                  {"label_zh": "闪烁的普通恒星", "label_en": "A twinkling normal star"},
                  {"label_zh": "一种特殊行星", "label_en": "An odd kind of planet"}
                ],
                "correct_idx": 0,
                "explain_zh": "它的射电波束像灯塔一样周期性扫过地球。",
                "explain_en": "Its radio beam sweeps past us like a lighthouse."
              },
              {
                "id": "str-c5-02-q3",
                "prompt_zh": "中子星的直径大约？",
                "prompt_en": "A neutron star is roughly…",
                "choices": [
                  {"label_zh": "20公里", "label_en": "20 km across", "glyph": "🏙️"},
                  {"label_zh": "地球大小", "label_en": "Earth-sized", "glyph": "🌍"},
                  {"label_zh": "太阳大小", "label_en": "Sun-sized", "glyph": "☀️"}
                ],
                "correct_idx": 0,
                "explain_zh": "一座城市大小却含一个太阳的质量。",
                "explain_en": "City-sized, yet as massive as the Sun."
              }
            ]
          }
        }
      ]
    }
  ]
}
```