```json
{
  "tracks": [
    {
      "id": "solar",
      "name_zh": "太阳系漫游",
      "name_en": "Solar System Tour",
      "tagline_zh": "从太阳出发，走到太阳系边缘",
      "tagline_en": "From the Sun to the system's edge",
      "icon": "🪐",
      "nodes": [
        {
          "chapter_zh": "第 2 章 · 太阳与它的家族",
          "chapter_en": "Chapter 2 · The Sun & Its Family",
          "left": 0,
          "lesson": {
            "id": "sol-b1-01-sun-structure",
            "title_zh": "太阳的结构",
            "title_en": "Inside the Sun",
            "subtitle_zh": "一层一层剥开我们的恒星",
            "subtitle_en": "Peeling apart our star",
            "icon": "☀️",
            "xp": 15,
            "teach": [
              {
                "visual": "☀️",
                "title_zh": "从核心到表面",
                "title_en": "Core to surface",
                "body_zh": "太阳分三层：核心产生能量，辐射区和对流区把能量一层层搬运到表面，光球就是我们看到的“日面”。",
                "body_en": "Energy is born in the core, carried outward through two inner layers, and released at the photosphere."
              },
              {
                "visual": "🌡️",
                "title_zh": "核心有多极端",
                "title_en": "The extreme core",
                "body_zh": "核心温度约1500万度，每秒把约6亿吨氢聚变成氦，损失的质量按E=mc²变成光和热。",
                "body_en": "At 15 million degrees, the core fuses ~600 million tons of hydrogen every second."
              }
            ],
            "questions": [
              {
                "id": "sol-b1-01-q1",
                "prompt_zh": "太阳的能量产生于？",
                "prompt_en": "Where does the Sun's energy come from?",
                "choices": [
                  {"label_zh": "核心的核聚变", "label_en": "Fusion in the core"},
                  {"label_zh": "表面的燃烧", "label_en": "Burning at the surface"},
                  {"label_zh": "与行星摩擦", "label_en": "Friction with planets"}
                ],
                "correct_idx": 0,
                "explain_zh": "氢聚变为氦，质量亏损转化为能量。",
                "explain_en": "Hydrogen fuses to helium; lost mass becomes energy."
              },
              {
                "id": "sol-b1-01-q2",
                "prompt_zh": "我们平时看到的“太阳表面”是？",
                "prompt_en": "The visible 'surface' of the Sun is the…",
                "choices": [
                  {"label_zh": "光球", "label_en": "Photosphere"},
                  {"label_zh": "核心", "label_en": "Core"},
                  {"label_zh": "日冕", "label_en": "Corona"}
                ],
                "correct_idx": 0,
                "explain_zh": "光球是肉眼可见的明亮球面，厚约500公里。",
                "explain_en": "The photosphere is the bright shell we actually see."
              },
              {
                "id": "sol-b1-01-q3",
                "prompt_zh": "太阳光从核心跑到表面大约要？",
                "prompt_en": "Light from the core takes about… to reach the surface.",
                "choices": [
                  {"label_zh": "几万年", "label_en": "Tens of thousands of years", "glyph": "⏳"},
                  {"label_zh": "8分钟", "label_en": "8 minutes", "glyph": "⏱️"},
                  {"label_zh": "一瞬间", "label_en": "No time at all", "glyph": "⚡"}
                ],
                "correct_idx": 0,
                "explain_zh": "光子被反复吸收再发射，走几万年才挣脱到表面。",
                "explain_en": "Photons are absorbed and re-emitted for millennia before escaping."
              }
            ]
          }
        },
        {
          "left": 26,
          "lesson": {
            "id": "sol-b1-02-sunspots",
            "title_zh": "黑子与太阳活动",
            "title_en": "Sunspots & Solar Activity",
            "subtitle_zh": "太阳脸上的斑点会呼吸",
            "subtitle_en": "The Sun's breathing spots",
            "icon": "🫧",
            "xp": 20,
            "teach": [
              {
                "visual": "🫧",
                "title_zh": "黑子并不黑",
                "title_en": "Spots aren't really dark",
                "body_zh": "黑子只是温度比周围低约1500度的区域，对比之下显得暗。强磁场挡住了内部热流，把那里“压凉”了。",
                "body_en": "Sunspots are ~1500° cooler than their surroundings — strong magnetic fields choke off heat."
              },
              {
                "visual": "🔄",
                "title_zh": "11年的心跳",
                "title_en": "An 11-year heartbeat",
                "body_zh": "黑子数量约11年一次盛衰循环：极小年几乎无黑子，极大年满脸都是，同时耀斑和日冕物质抛射也更频繁。",
                "body_en": "Spot counts peak and fade on an 11-year cycle, along with flares and eruptions."
              }
            ],
            "questions": [
              {
                "id": "sol-b1-02-q1",
                "prompt_zh": "太阳黑子看起来暗，是因为？",
                "prompt_en": "Sunspots look dark because…",
                "choices": [
                  {"label_zh": "温度比周围低", "label_en": "They're cooler than their surroundings"},
                  {"label_zh": "那是表面的洞", "label_en": "They're holes in the surface"},
                  {"label_zh": "被地球阴影遮住", "label_en": "Earth's shadow covers them"}
                ],
                "correct_idx": 0,
                "explain_zh": "黑子约4000度，周围约5500度，对比显得黑。",
                "explain_en": "Roughly 4000° against a 5500° backdrop."
              },
              {
                "id": "sol-b1-02-q2",
                "prompt_zh": "太阳活动周期大约是？",
                "prompt_en": "The solar cycle lasts about…",
                "choices": [
                  {"label_zh": "11年", "label_en": "11 years", "glyph": "1️⃣1️⃣"},
                  {"label_zh": "1年", "label_en": "1 year", "glyph": "1️⃣"},
                  {"label_zh": "76年", "label_en": "76 years", "glyph": "7️⃣6️⃣"}
                ],
                "correct_idx": 0,
                "explain_zh": "黑子从极小到极大再回来约11年。",
                "explain_en": "Minimum to maximum and back takes ~11 years."
              },
              {
                "id": "sol-b1-02-q3",
                "prompt_zh": "太阳活动剧烈时，地球上可能出现？",
                "prompt_en": "Violent solar activity can trigger… on Earth.",
                "choices": [
                  {"label_zh": "强烈极光和电网扰动", "label_en": "Bright auroras and power-grid trouble"},
                  {"label_zh": "全球气温骤升", "label_en": "Instant global warming"},
                  {"label_zh": "地震增多", "label_en": "More earthquakes"}
                ],
                "correct_idx": 0,
                "explain_zh": "带电粒子轰击地球磁场，点亮极光，严重时干扰电网。",
                "explain_en": "Charged particles light auroras and can rattle power grids."
              }
            ]
          }
        },
        {
          "left": 34,
          "lesson": {
            "id": "sol-b2-01-spin-orbit",
            "title_zh": "自转与公转",
            "title_en": "Spin & Orbit",
            "subtitle_zh": "地球的两种基本运动",
            "subtitle_en": "Earth's two basic motions",
            "icon": "🌍",
            "xp": 15,
            "teach": [
              {
                "visual": "🔄",
                "title_zh": "自转带来昼夜",
                "title_en": "Spin brings day and night",
                "body_zh": "地球约24小时自转一周，朝向太阳的半球是白天，背向的半球是夜晚，自转轴大致指向北极星方向。",
                "body_en": "Earth spins once a day: the sunlit half is day, the far half is night."
              },
              {
                "visual": "🌀",
                "title_zh": "公转带来星空年",
                "title_en": "Orbit brings the star year",
                "body_zh": "地球约365.25天绕太阳一圈，公转轨道是接近圆的椭圆，这个“一年”正是季节和四季星空的节拍器。",
                "body_en": "Earth circles the Sun in 365.25 days — the metronome behind seasons."
              }
            ],
            "questions": [
              {
                "id": "sol-b2-01-q1",
                "prompt_zh": "昼夜交替的直接原因是？",
                "prompt_en": "Day and night come directly from…",
                "choices": [
                  {"label_zh": "地球自转", "label_en": "Earth's rotation"},
                  {"label_zh": "地球公转", "label_en": "Earth's orbit"},
                  {"label_zh": "月球绕地球", "label_en": "The Moon's orbit"}
                ],
                "correct_idx": 0,
                "explain_zh": "自转让各地轮流面向太阳。",
                "explain_en": "Spinning lets every place take turns facing the Sun."
              },
              {
                "id": "sol-b2-01-q2",
                "prompt_zh": "地球公转一圈大约需要？",
                "prompt_en": "One orbit of Earth takes about…",
                "choices": [
                  {"label_zh": "365天多", "label_en": "365 days and a bit", "glyph": "📅"},
                  {"label_zh": "30天", "label_en": "30 days", "glyph": "🗓️"},
                  {"label_zh": "24小时", "label_en": "24 hours", "glyph": "⏰"}
                ],
                "correct_idx": 0,
                "explain_zh": "回归年约365.2422天，闰年就是为它设的。",
                "explain_en": "365.2422 days — the reason leap years exist."
              }
            ]
          }
        },
        {
          "left": 26,
          "lesson": {
            "id": "sol-b2-02-seasons",
            "title_zh": "四季的成因",
            "title_en": "Why Seasons Happen",
            "subtitle_zh": "关键不是远近，而是角度",
            "subtitle_en": "Not distance — angle",
            "icon": "🍂",
            "xp": 20,
            "teach": [
              {
                "visual": "📐",
                "title_zh": "地轴是歪的",
                "title_en": "The tilted axis",
                "body_zh": "地球自转轴倾斜约23.5度且方向不变。北半球夏至时倾向太阳，阳光更直射，白昼更长，于是炎热。",
                "body_en": "Earth's axis tilts 23.5° and keeps pointing the same way — summer sunlight strikes more directly."
              },
              {
                "visual": "🔍",
                "title_zh": "反直觉的真相",
                "title_en": "The counterintuitive truth",
                "body_zh": "地球1月其实比7月离太阳更近！季节冷暖取决于阳光的直射程度和昼夜长短，而不是日地距离。",
                "body_en": "Earth is actually closest to the Sun in January — seasons come from sun angle, not distance."
              }
            ],
            "questions": [
              {
                "id": "sol-b2-02-q1",
                "prompt_zh": "四季变化的主因是？",
                "prompt_en": "The main cause of seasons is…",
                "choices": [
                  {"label_zh": "地轴倾斜导致的阳光角度变化", "label_en": "Axis tilt changing sunlight's angle"},
                  {"label_zh": "地球离太阳的远近", "label_en": "Distance from the Sun"},
                  {"label_zh": "太阳亮度变化", "label_en": "The Sun changing brightness"}
                ],
                "correct_idx": 0,
                "explain_zh": "远近日差仅约3%，不足以造成四季；倾角才是关键。",
                "explain_en": "Distance varies only ~3% — tilt does the real work."
              },
              {
                "id": "sol-b2-02-q2",
                "prompt_zh": "北半球夏天时，地球在轨道上的位置？",
                "prompt_en": "Northern summer means Earth is…",
                "choices": [
                  {"label_zh": "任何位置都可能，关键是北半球朝向太阳", "label_en": "Anywhere — what matters is the north leaning sunward"},
                  {"label_zh": "一定离太阳最近", "label_en": "Always nearest the Sun"},
                  {"label_zh": "一定离太阳最远", "label_en": "Always farthest"}
                ],
                "correct_idx": 0,
                "explain_zh": "近日点在1月初，恰是北半球的冬天。",
                "explain_en": "Perihelion falls in early January — northern winter."
              },
              {
                "id": "sol-b2-02-q3",
                "prompt_zh": "地轴倾角大约是？",
                "prompt_en": "Earth's axial tilt is about…",
                "choices": [
                  {"label_zh": "23.5度", "label_en": "23.5°", "glyph": "📐"},
                  {"label_zh": "66.5度", "label_en": "66.5°", "glyph": "📏"},
                  {"label_zh": "5度", "label_en": "5°", "glyph": "〰️"}
                ],
                "correct_idx": 0,
                "explain_zh": "23.5度的倾角也是南北回归线纬度的来源。",
                "explain_en": "That tilt is why the tropics sit at 23.5° latitude."
              }
            ]
          }
        },
        {
          "left": 0,
          "lesson": {
            "id": "sol-b3-01-mercury",
            "title_zh": "水星：离太阳最近",
            "title_en": "Mercury: Closest to the Sun",
            "subtitle_zh": "跑得最快，温差最狠",
            "subtitle_en": "Fastest and most extreme",
            "icon": "🏃",
            "xp": 20,
            "teach": [
              {
                "visual": "🏃",
                "title_zh": "一年只有88天",
                "title_en": "An 88-day year",
                "body_zh": "水星离太阳最近，公转最快，约88天绕一圈。它没有大气保温，白天可达430度，夜晚骤降到零下180度。",
                "body_en": "Nearest the Sun, Mercury laps it in 88 days — and swings from 430° days to −180° nights."
              },
              {
                "visual": "⏳",
                "title_zh": "大望远镜也难看清",
                "title_en": "Hard to see, even with big scopes",
                "body_zh": "水星总贴着太阳出没，只在大ets前后短暂可见，所以观测资料长期稀少。",
                "body_en": "Hugging the Sun's glare, Mercury shows itself only briefly near sunrise or sunset."
              }
            ],
            "questions": [
              {
                "id": "sol-b3-01-q1",
                "prompt_zh": "水星昼夜温差巨大的主要原因是？",
                "prompt_en": "Why are Mercury's days and nights so extreme?",
                "choices": [
                  {"label_zh": "几乎没有大气保温", "label_en": "Almost no atmosphere to hold heat"},
                  {"label_zh": "离太阳太远", "label_en": "It's too far from the Sun"},
                  {"label_zh": "自转太快", "label_en": "It spins too fast"}
                ],
                "correct_idx": 0,
                "explain_zh": "没有大气层，白天热量留不到夜里。",
                "explain_en": "With no air, daytime heat escapes every night."
              },
              {
                "id": "sol-b3-01-q2",
                "prompt_zh": "水星公转一周大约？",
                "prompt_en": "Mercury's year lasts about…",
                "choices": [
                  {"label_zh": "88天", "label_en": "88 days", "glyph": "8️⃣8️⃣"},
                  {"label_zh": "365天", "label_en": "365 days", "glyph": "📅"},
                  {"label_zh": "12年", "label_en": "12 years", "glyph": "1️⃣2️⃣"}
                ],
                "correct_idx": 0,
                "explain_zh": "离太阳最近，轨道最小，跑得最快。",
                "explain_en": "Smallest orbit, fastest lap."
              },
              {
                "id": "sol-b3-01-q3",
                "prompt_zh": "为什么水星很难被观测到？",
                "prompt_en": "Why is Mercury hard to spot?",
                "choices": [
                  {"label_zh": "总在太阳附近，被阳光淹没", "label_en": "It lurks in the Sun's glare"},
                  {"label_zh": "它太暗了", "label_en": "It's too dim"},
                  {"label_zh": "它总在南天极附近", "label_en": "It hides near the south pole"}
                ],
                "correct_idx": 0,
                "explain_zh": "最大角距离也不大，只能在晨昏低空找。",
                "explain_en": "It never strays far from the Sun in our sky."
              }
            ]
          }
        },
        {
          "left": -26,
          "lesson": {
            "id": "sol-b3-02-venus",
            "title_zh": "金星：失控的温室",
            "title_en": "Venus: The Runaway Greenhouse",
            "subtitle_zh": "最热的行星不是水星",
            "subtitle_en": "The hottest planet isn't Mercury",
            "icon": "🌫️",
            "xp": 20,
            "teach": [
              {
                "visual": "🌫️",
                "title_zh": "厚厚的二氧化碳毛毯",
                "title_en": "A thick CO₂ blanket",
                "body_zh": "金星大气几乎全是二氧化碳，密度是地球大气的约90倍，温室效应把表面加热到约460度，比水星还热。",
                "body_en": "A crushing CO₂ atmosphere traps heat, pushing the surface to ~460°C — hotter than Mercury."
              },
              {
                "visual": "⏮️",
                "title_zh": "倒着转的慢行星",
                "title_en": "Spins backwards, slowly",
                "body_zh": "金星自转方向与其他行星相反，且转得极慢：金星上的一天比一年还长。",
                "body_en": "Venus rotates backwards, so slowly that its day outlasts its year."
              }
            ],
            "questions": [
              {
                "id": "sol-b3-02-q1",
                "prompt_zh": "太阳系中最热的行星是？",
                "prompt_en": "The hottest planet in the solar system is…",
                "choices": [
                  {"label_zh": "金星", "label_en": "Venus", "glyph": "🟡"},
                  {"label_zh": "水星", "label_en": "Mercury", "glyph": "⚪"},
                  {"label_zh": "木星", "label_en": "Jupiter", "glyph": "🟠"}
                ],
                "correct_idx": 0,
                "explain_zh": "温室效应使金星表面约460度，超过水星的白天温度。",
                "explain_en": "Greenhouse heat wins over mere proximity to the Sun."
              },
              {
                "id": "sol-b3-02-q2",
                "prompt_zh": "金星表面高温的主因是？",
                "prompt_en": "What makes Venus so hot?",
                "choices": [
                  {"label_zh": "浓厚的二氧化碳温室效应", "label_en": "A massive CO₂ greenhouse"},
                  {"label_zh": "内部核反应", "label_en": "Nuclear reactions inside"},
                  {"label_zh": "离太阳极近", "label_en": "It's much closer to the Sun"}
                ],
                "correct_idx": 0,
                "explain_zh": "它比水星离太阳远，热全靠大气留存。",
                "explain_en": "It sits farther out than Mercury — the air does the heating."
              },
              {
                "id": "sol-b3-02-q3",
                "prompt_zh": "金星自转的一个奇特之处是？",
                "prompt_en": "What's odd about Venus's spin?",
                "choices": [
                  {"label_zh": "方向相反且很慢", "label_en": "Backwards and very slow"},
                  {"label_zh": "比地球快得多", "label_en": "Much faster than Earth's"},
                  {"label_zh": "没有自转", "label_en": "It doesn't spin"}
                ],
                "correct_idx": 0,
                "explain_zh": "金星上一个“日”约243个地球日，比它的一年还长。",
                "explain_en": "One Venus day (~243 Earth days) beats its year."
              }
            ]
          }
        },
        {
          "left": -34,
          "lesson": {
            "id": "sol-b4-01-jupiter",
            "title_zh": "木星：行星之王",
            "title_en": "Jupiter: King of Planets",
            "subtitle_zh": "大红斑与四颗伽利略卫星",
            "subtitle_en": "The Great Red Spot & the Galileans",
            "icon": "🔴",
            "xp": 25,
            "teach": [
              {
                "visual": "🔴",
                "title_zh": "吹了几百年的风暴",
                "title_en": "A storm centuries old",
                "body_zh": "木星大红斑是一个能装下整个地球的反气旋风暴，至少已被观测了约190年，可能已存在数百年。",
                "body_en": "The Great Red Spot is a storm bigger than Earth, raging for centuries."
              },
              {
                "visual": "🔭",
                "title_zh": "迷你太阳系",
                "title_en": "A mini solar system",
                "body_zh": "木星带着90多颗卫星，最大的四颗（木卫一至木卫四）是伽利略1610年发现的，证明并非一切都绕地球转。",
                "body_en": "Dozens of moons orbit it — Galileo's four big ones proved not everything circles Earth."
              }
            ],
            "questions": [
              {
                "id": "sol-b4-01-q1",
                "prompt_zh": "木星大红斑是？",
                "prompt_en": "Jupiter's Great Red Spot is…",
                "choices": [
                  {"label_zh": "巨大的风暴", "label_en": "A giant storm"},
                  {"label_zh": "火山喷发", "label_en": "A volcano"},
                  {"label_zh": "卫星的影子", "label_en": "A moon's shadow"}
                ],
                "correct_idx": 0,
                "explain_zh": "它比地球还宽，是持续数百年的反气旋。",
                "explain_en": "Wider than Earth, a centuries-long anticyclone."
              },
              {
                "id": "sol-b4-01-q2",
                "prompt_zh": "伽利略发现木星四颗大卫星的意义是？",
                "prompt_en": "Galileo's four moons mattered because…",
                "choices": [
                  {"label_zh": "证明有天体不绕地球转", "label_en": "They showed not everything orbits Earth"},
                  {"label_zh": "证明木星比太阳大", "label_en": "They proved Jupiter outsize the Sun"},
                  {"label_zh": "证明月球有大气", "label_en": "They proved the Moon has air"}
                ],
                "correct_idx": 0,
                "explain_zh": "卫星绕木星转，直接冲击了地心说。",
                "explain_en": "Moons circling Jupiter broke the Earth-centered model."
              },
              {
                "id": "sol-b4-01-q3",
                "prompt_zh": "木星在行星中的地位是？",
                "prompt_en": "Jupiter's standing among planets is…",
                "choices": [
                  {"label_zh": "质量和体积都最大", "label_en": "Biggest in mass and size"},
                  {"label_zh": "离太阳最近", "label_en": "Closest to the Sun"},
                  {"label_zh": "自转最慢", "label_en": "Slowest spinner"}
                ],
                "correct_idx": 0,
                "explain_zh": "它质量约为其他行星总和的2.5倍，自转还最快。",
                "explain_en": "It outweighs all other planets combined — and spins fastest."
              }
            ]
          }
        },
        {
          "left": -26,
          "lesson": {
            "id": "sol-b4-02-ice-giants",
            "title_zh": "冰巨星：天王星与海王星",
            "title_en": "Ice Giants: Uranus & Neptune",
            "subtitle_zh": "躺着转的行星与笔尖上算出的行星",
            "subtitle_en": "One tipped over, one found on paper",
            "icon": "🔷",
            "xp": 25,
            "teach": [
              {
                "visual": "🛌",
                "title_zh": "躺着自转的天王星",
                "title_en": "Uranus rolls on its side",
                "body_zh": "天王星自转轴倾角约98度，几乎是“躺着”绕太阳打滚，可能源于早期一次大撞击。",
                "body_en": "Tilted ~98°, Uranus practically rolls around the Sun — likely from an ancient collision."
              },
              {
                "visual": "✍️",
                "title_zh": "算出来的海王星",
                "title_en": "Neptune, found by math",
                "body_zh": "天王星轨道总有点“跑偏”，天文学家根据引力计算预测了未知行星的位置，1846年望远镜果然在那里找到海王星。",
                "body_en": "Uranus drifted oddly; mathematicians pointed where to look, and Neptune appeared in 1846."
              }
            ],
            "questions": [
              {
                "id": "sol-b4-02-q1",
                "prompt_zh": "海王星是怎么被发现的？",
                "prompt_en": "How was Neptune discovered?",
                "choices": [
                  {"label_zh": "先计算预测位置，再观测确认", "label_en": "Predicted by math, then observed"},
                  {"label_zh": "肉眼偶然看到", "label_en": "Spotted by chance"},
                  {"label_zh": "探测器路过时发现", "label_en": "Found by a passing probe"}
                ],
                "correct_idx": 0,
                "explain_zh": "它是“笔尖上发现的行星”，引力理论的胜利。",
                "explain_en": "The planet found on paper — gravity's triumph."
              },
              {
                "id": "sol-b4-02-q2",
                "prompt_zh": "天王星最特别的地方是？",
                "prompt_en": "Uranus is famous for…",
                "choices": [
                  {"label_zh": "几乎躺着自转", "label_en": "Rolling on its side"},
                  {"label_zh": "拥有最大光环", "label_en": "The biggest rings"},
                  {"label_zh": "离太阳最近", "label_en": "Being nearest the Sun"}
                ],
                "correct_idx": 0,
                "explain_zh": "约98度的倾角在行星中独一无二。",
                "explain_en": "A ~98° tilt found nowhere else."
              },
              {
                "id": "sol-b4-02-q3",
                "prompt_zh": "天王星和海王星被统称为？",
                "prompt_en": "Uranus and Neptune are together called…",
                "choices": [
                  {"label_zh": "冰巨星", "label_en": "Ice giants", "glyph": "🧊"},
                  {"label_zh": "类地行星", "label_en": "Terrestrial planets", "glyph": "🪨"},
                  {"label_zh": "小行星", "label_en": "Asteroids", "glyph": "☄️"}
                ],
                "correct_idx": 0,
                "explain_zh": "氢氦之外还有大量水、氨、甲烷等“冰”成分。",
                "explain_en": "Hydrogen and helium wrapped around icy water, ammonia and methane."
              }
            ]
          }
        },
        {
          "left": 0,
          "lesson": {
            "id": "sol-b5-01-asteroid-belt",
            "title_zh": "小行星带",
            "title_en": "The Asteroid Belt",
            "subtitle_zh": "火星与木星之间的碎石环",
            "subtitle_en": "Rubble between Mars and Jupiter",
            "icon": "🪨",
            "xp": 20,
            "teach": [
              {
                "visual": "🪨",
                "title_zh": "没成为行星的原料",
                "title_en": "Planet material that never made it",
                "body_zh": "小行星带位于火星和木星轨道之间，是太阳系形成时剩下的碎屑，被木星引力搅得无法聚成行星。",
                "body_en": "Leftover building rubble between Mars and Jupiter, kept from forming a planet by Jupiter's pull."
              },
              {
                "visual": "🚀",
                "title_zh": "并不拥挤",
                "title_en": "Not crowded at all",
                "body_zh": "科幻电影里的小行星带密不透风，实际上小行星彼此相距遥远，探测器可以放心穿过。",
                "body_en": "Movie asteroid fields are fiction — the real belt is mostly empty space."
              }
            ],
            "questions": [
              {
                "id": "sol-b5-01-q1",
                "prompt_zh": "小行星带位于哪两颗行星之间？",
                "prompt_en": "The asteroid belt lies between…",
                "choices": [
                  {"label_zh": "火星和木星", "label_en": "Mars and Jupiter"},
                  {"label_zh": "地球和火星", "label_en": "Earth and Mars"},
                  {"label_zh": "木星和土星", "label_en": "Jupiter and Saturn"}
                ],
                "correct_idx": 0,
                "explain_zh": "约在2.2到3.2天文单位之间。",
                "explain_en": "Roughly 2.2 to 3.2 AU from the Sun."
              },
              {
                "id": "sol-b5-01-q2",
                "prompt_zh": "小行星带没能形成行星，主要因为？",
                "prompt_en": "Why didn't the belt form a planet?",
                "choices": [
                  {"label_zh": "木星引力扰动", "label_en": "Jupiter's gravitational stirring"},
                  {"label_zh": "太阳风把物质吹散", "label_en": "Solar wind blew it away"},
                  {"label_zh": "物质太多反而无法聚合", "label_en": "Too much material to merge"}
                ],
                "correct_idx": 0,
                "explain_zh": "木星的引力不断搅动，碰撞以破碎为主而非粘合。",
                "explain_en": "Jupiter keeps the region stirred, so collisions shatter rather than stick."
              },
              {
                "id": "sol-b5-01-q3",
                "prompt_zh": "关于小行星带的密度，正确的是？",
                "prompt_en": "The real asteroid belt is…",
                "choices": [
                  {"label_zh": "相当空旷", "label_en": "Quite empty"},
                  {"label_zh": "飞船要不断闪避", "label_en": "A dodging gauntlet"},
                  {"label_zh": "互相挤在一起", "label_en": "Packed solid"}
                ],
                "correct_idx": 0,
                "explain_zh": "总质量只有月球约4%，散布在巨大空间里。",
                "explain_en": "Its whole mass is ~4% of the Moon's, spread across vast space."
              }
            ]
          }
        },
        {
          "left": 26,
          "lesson": {
            "id": "sol-b5-03-kuiper-belt",
            "title_zh": "柯伊伯带与奥尔特云",
            "title_en": "Kuiper Belt & Oort Cloud",
            "subtitle_zh": "太阳系寒冷的后院",
            "subtitle_en": "The solar system's cold backyard",
            "icon": "❄️",
            "xp": 25,
            "teach": [
              {
                "visual": "❄️",
                "title_zh": "海王星外的冰环",
                "title_en": "The icy ring beyond Neptune",
                "body_zh": "柯伊伯带在海王星轨道之外，由无数冰冷小天体组成，冥王星就是其中最著名的成员。",
                "body_en": "Beyond Neptune lies a ring of icy worlds — Pluto is its most famous resident."
              },
              {
                "visual": "🕳️",
                "title_zh": "彗星的老家",
                "title_en": "Home of comets",
                "body_zh": "周期彗星大多来自柯伊伯带和更遥远的奥尔特云，太阳系边缘储存着太阳系诞生时的原始冰物质。",
                "body_en": "Comets are deliveries from this frozen frontier — pristine leftovers of the early solar system."
              }
            ],
            "questions": [
              {
                "id": "sol-b5-03-q1",
                "prompt_zh": "冥王星现在被归类为？",
                "prompt_en": "Pluto is now classified as…",
                "choices": [
                  {"label_zh": "柯伊伯带天体/矮行星", "label_en": "A Kuiper Belt dwarf planet"},
                  {"label_zh": "大行星", "label_en": "A major planet"},
                  {"label_zh": "彗星", "label_en": "A comet"}
                ],
                "correct_idx": 0,
                "explain_zh": "2006年起它被划为矮行星，同类还有阋神星等。",
                "explain_en": "Reclassified as a dwarf planet in 2006."
              },
              {
                "id": "sol-b5-03-q2",
                "prompt_zh": "柯伊伯带位于？",
                "prompt_en": "The Kuiper Belt lies…",
                "choices": [
                  {"label_zh": "海王星轨道之外", "label_en": "Beyond Neptune's orbit"},
                  {"label_zh": "火星和木星之间", "label_en": "Between Mars and Jupiter"},
                  {"label_zh": "水星轨道内侧", "label_en": "Inside Mercury's orbit"}
                ],
                "correct_idx": 0,
                "explain_zh": "约从30天文单位向外延伸。",
                "explain_en": "It stretches outward from about 30 AU."
              },
              {
                "id": "sol-b5-03-q3",
                "prompt_zh": "许多短周期彗星来自？",
                "prompt_en": "Many short-period comets come from…",
                "choices": [
                  {"label_zh": "柯伊伯带", "label_en": "The Kuiper Belt", "glyph": "❄️"},
                  {"label_zh": "小行星带", "label_en": "The asteroid belt", "glyph": "🪨"},
                  {"label_zh": "太阳内部", "label_en": "Inside the Sun", "glyph": "🔥"}
                ],
                "correct_idx": 0,
                "explain_zh": "海王星引力把这些冰块踢向内太阳系。",
                "explain_en": "Neptune's gravity flings these icy chunks inward."
              }
            ]
          }
        }
      ]
    }
  ]
}
```