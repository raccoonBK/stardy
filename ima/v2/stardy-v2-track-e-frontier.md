```json
{
  "tracks": [
    {
      "id": "frontier",
      "name_zh": "前沿视界",
      "name_en": "Frontiers of Astronomy",
      "tagline_zh": "引力波、类星体与外星邻居",
      "tagline_en": "Gravitational waves, quasars & alien neighbors",
      "icon": "🚀",
      "nodes": [
        {
          "chapter_zh": "第 8 章 · 黑洞并合、高能天体与生命搜索",
          "chapter_en": "Chapter 8 · Mergers, High-Energy Cosmos & the Search for Life",
          "left": 0,
          "lesson": {
            "id": "frn-e1-01-black-hole-mergers",
            "title_zh": "黑洞并合",
            "title_en": "When Black Holes Collide",
            "subtitle_zh": "两个黑洞的一场世纪之舞",
            "subtitle_en": "A dance a billion years in the making",
            "icon": "💥",
            "xp": 35,
            "teach": [
              {
                "visual": "📜",
                "title_zh": "先有理论，后有证据",
                "title_en": "Theory first, evidence later",
                "body_zh": "1916 年，爱因斯坦发表广义相对论，描述万物在引力下如何运动。这套理论预言：严重的引力扰动会以引力波的形式、以光速在时空结构中传播——比如两个黑洞的碰撞。",
                "body_en": "In 1916 Einstein published general relativity, the math of gravity. It predicted that violent gravitational disturbances — say, two colliding black holes — ripple through spacetime as gravitational waves, at light speed."
              },
              {
                "visual": "💫",
                "title_zh": "两个黑洞，每秒 250 圈",
                "title_en": "Two holes, 250 laps a second",
                "body_zh": "2015 年 10 月，LIGO 首次探测到引力波：13 亿光年外，两个黑洞——36 和 29 个太阳质量——以每秒约 250 转的速度绕共同重心旋转，越转越近。",
                "body_en": "In October 2015, LIGO caught its first gravitational wave: 1.3 billion light-years away, black holes of 36 and 29 solar masses whirled around each other about 250 times per second, spiraling ever closer."
              },
              {
                "visual": "⚖️",
                "title_zh": "三倍太阳质量去哪了",
                "title_en": "Where three Suns went",
                "body_zh": "它们最终并合成一个 62 个太阳质量的黑洞。36+29 却只得到 62？差额约 3 倍太阳质量，在并合一瞬间以引力波的形式被辐射出去——质能方程的宇宙级演出。",
                "body_en": "They merged into one black hole of 62 solar masses. But 36 + 29 ≠ 62: roughly three Suns' worth of mass vanished — radiated away as gravitational waves. E=mc² on a cosmic stage."
              },
              {
                "visual": "🕰️",
                "title_zh": "一场 13 亿年的旅行",
                "title_en": "A 1.3-billion-year journey",
                "body_zh": "并合发生时，地球上还是单细胞生物的天下。引力波的涟漪荡了 13 亿年才抵达地球——此时地球已演化出花朵、恐龙、智人和 LIGO。百年前的预言终于被证实。",
                "body_en": "When the merger happened, Earth held only single-celled life. The ripple traveled 1.3 billion years — arriving to find flowers, dinosaurs' fossils, humans, and LIGO. A century-old prediction, confirmed."
              }
            ],
            "questions": [
              {
                "id": "frn-e1-01-q1",
                "based_on": "teach[1]",
                "prompt_zh": "广义相对论发表于哪一年？",
                "prompt_en": "General relativity was published in:",
                "figure": "💥",
                "choices": [
                  {"label_zh": "1916 年", "label_en": "1916", "glyph": "📜"},
                  {"label_zh": "2015 年", "label_en": "2015", "glyph": "❌"},
                  {"label_zh": "1969 年", "label_en": "1969", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "爱因斯坦 1916 年发表广义相对论，预言了引力波。",
                "explain_en": "Einstein's 1916 theory predicted gravitational waves."
              },
              {
                "id": "frn-e1-01-q2",
                "based_on": "teach[2]",
                "prompt_zh": "LIGO 首次探测到的并合发生在？",
                "prompt_en": "LIGO's first detected merger happened:",
                "choices": [
                  {"label_zh": "13 亿光年外", "label_en": "1.3 billion light-years away", "glyph": "🌌"},
                  {"label_zh": "银河系内", "label_en": "Inside the Milky Way", "glyph": "❌"},
                  {"label_zh": "月球轨道上", "label_en": "In lunar orbit", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "2015 年 10 月首次探测，来自 13 亿光年外。",
                "explain_en": "October 2015, from 1.3 billion light-years out."
              },
              {
                "id": "frn-e1-01-q3",
                "based_on": "teach[2]",
                "prompt_zh": "并合前两黑洞绕转的速度约是？",
                "prompt_en": "Before merging, the two holes spun at about:",
                "choices": [
                  {"label_zh": "每秒 250 转", "label_en": "250 laps per second", "glyph": "💫"},
                  {"label_zh": "每天一圈", "label_en": "One lap a day", "glyph": "❌"},
                  {"label_zh": "每年一圈", "label_en": "One lap a year", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "36 和 29 太阳质量的黑洞每秒约 250 转互相绕行。",
                "explain_en": "The 36- and 29-solar-mass pair whirled ~250 times per second."
              },
              {
                "id": "frn-e1-01-q4",
                "based_on": "teach[3]",
                "prompt_zh": "并合前后质量差了约 3 个太阳质量，这部分质量？",
                "prompt_en": "The missing ~3 solar masses:",
                "choices": [
                  {"label_zh": "以引力波形式辐射出去", "label_en": "Were radiated as gravitational waves", "glyph": "⚖️"},
                  {"label_zh": "变成行星", "label_en": "Became planets", "glyph": "❌"},
                  {"label_zh": "凭空消失", "label_en": "Vanished into nothing", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "质能等价：质量转化为引力波能量带走。",
                "explain_en": "Mass-energy equivalence: carried off as waves."
              },
              {
                "id": "frn-e1-01-q5",
                "based_on": "teach[3]",
                "prompt_zh": "「36 + 29 = 62」这件事最能说明？",
                "prompt_en": "'36 + 29 = 62' best demonstrates:",
                "choices": [
                  {"label_zh": "质能方程在极端事件中成立", "label_en": "E=mc² at work in extreme events", "glyph": "✅"},
                  {"label_zh": "黑洞不守规矩", "label_en": "Black holes break math", "glyph": "❌"},
                  {"label_zh": "测量误差很大", "label_en": "Bad measurements", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "差额质量按 E=mc² 转化为引力波能量。",
                "explain_en": "The deficit became wave energy, exactly as E=mc² says."
              },
              {
                "id": "frn-e1-01-q6",
                "based_on": "teach[4]",
                "prompt_zh": "并合发生时，地球上的生命处于什么阶段？",
                "prompt_en": "When the merger occurred, life on Earth was:",
                "choices": [
                  {"label_zh": "单细胞生物的天下", "label_en": "All single-celled", "glyph": "🕰️"},
                  {"label_zh": "恐龙时代", "label_en": "The age of dinosaurs", "glyph": "❌"},
                  {"label_zh": "已经出现智人", "label_en": "Already human", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "涟漪荡了 13 亿年，地球才演化出复杂生命。",
                "explain_en": "The ripple took 1.3 billion years; complex life came later."
              }
            ]
          }
        },
        {
          "left": 26,
          "lesson": {
            "id": "frn-e1-02-gravitational-waves",
            "title_zh": "引力波探测",
            "title_en": "Catching Gravitational Waves",
            "subtitle_zh": "抖动的不是棋子，是棋盘",
            "subtitle_en": "The chessboard itself is shaking",
            "icon": "〰️",
            "xp": 35,
            "teach": [
              {
                "visual": "〰️",
                "title_zh": "第三种波",
                "title_en": "A third kind of wave",
                "body_zh": "机械波抖动的是物质，电磁波抖动的是电磁场，而引力波抖动的是空间本身。爱因斯坦先说引力能扭曲空间，又说这种扭曲能以波传播——当时有人觉得是痴人说梦。",
                "body_en": "Mechanical waves shake matter; electromagnetic waves shake fields; gravitational waves shake space itself. Einstein claimed gravity bends space — and that the bending travels as waves. Critics called it a fantasy."
              },
              {
                "visual": "♟️",
                "title_zh": "为什么你感觉不到",
                "title_en": "Why you never feel it",
                "body_zh": "把空间想成棋盘、物质想成钉在格子上的棋子。引力波来了，棋盘在抖、棋子和尺子跟着一起伸缩——你拿尺子量，永远量不出变化，这个距离叫共动距离。",
                "body_en": "Picture space as a chessboard, matter as pieces glued to it. A gravitational wave shakes the board — and everything on it, rulers included. Measure all you like: nothing seems to change."
              },
              {
                "visual": "🔦",
                "title_zh": "光能感觉到",
                "title_en": "But light can tell",
                "body_zh": "棋子感觉不到，光却能！光走的是固有距离，从「上帝视角」看棋盘格子确实在伸缩。所以 LIGO 干脆不用尺子，改用比较两束激光走过距离的长短来捕捉引力波。",
                "body_en": "Pieces can't feel it, but light can. Light traverses true distance, riding the stretching board. So LIGO skips rulers and compares two laser beams' path lengths instead."
              },
              {
                "visual": "📡",
                "title_zh": "相隔三千千米的耳朵",
                "title_en": "Ears 3,000 km apart",
                "body_zh": "LIGO 由两台相同的探测仪组成，分别位于华盛顿州汉福德和路易斯安那州利文斯顿，相距 3000 千米。2016 年引力波被直接探测到，爱因斯坦百年前的预言终于被证实。",
                "body_en": "LIGO is a pair of identical detectors in Hanford, Washington, and Livingston, Louisiana — 3,000 km apart. In 2016 the direct detection landed, capping Einstein's century-old prediction."
              }
            ],
            "questions": [
              {
                "id": "frn-e1-02-q1",
                "based_on": "teach[1]",
                "prompt_zh": "引力波抖动的是什么？",
                "prompt_en": "Gravitational waves shake:",
                "figure": "〰️",
                "choices": [
                  {"label_zh": "空间本身", "label_en": "Space itself", "glyph": "♟️"},
                  {"label_zh": "空气分子", "label_en": "Air molecules", "glyph": "❌"},
                  {"label_zh": "电磁场", "label_en": "Electromagnetic fields", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "机械波抖物质，电磁波抖场，引力波抖空间。",
                "explain_en": "Matter, fields, space — each wave its own medium."
              },
              {
                "id": "frn-e1-02-q2",
                "based_on": "teach[2]",
                "prompt_zh": "棋盘比喻里，「棋子感受不到抖动」对应什么概念？",
                "prompt_en": "In the chessboard analogy, the unmoved pieces illustrate:",
                "choices": [
                  {"label_zh": "共动距离", "label_en": "Comoving distance", "glyph": "📐"},
                  {"label_zh": "光速不变", "label_en": "Constant light speed", "glyph": "❌"},
                  {"label_zh": "多普勒效应", "label_en": "The Doppler effect", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "尺子和棋子一起伸缩，共动距离量不出变化。",
                "explain_en": "Rulers stretch too — comoving distance hides the change."
              },
              {
                "id": "frn-e1-02-q3",
                "based_on": "teach[3]",
                "prompt_zh": "为什么用光来探测引力波？",
                "prompt_en": "Why use light to detect gravitational waves?",
                "choices": [
                  {"label_zh": "光走固有距离，能感知空间伸缩", "label_en": "Light traverses true distance and feels the stretch", "glyph": "🔦"},
                  {"label_zh": "光跑得最便宜", "label_en": "Light is cheap", "glyph": "❌"},
                  {"label_zh": "光也会被抖晕", "label_en": "Light gets dizzy", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "LIGO 比较两束激光走过的距离长短来代替尺子。",
                "explain_en": "LIGO swaps rulers for racing laser beams."
              },
              {
                "id": "frn-e1-02-q4",
                "based_on": "teach[4]",
                "prompt_zh": "LIGO 的两台探测仪相距多远？",
                "prompt_en": "LIGO's two detectors sit ___ apart:",
                "choices": [
                  {"label_zh": "3000 千米", "label_en": "3,000 km", "glyph": "📡"},
                  {"label_zh": "3 千米", "label_en": "3 km", "glyph": "❌"},
                  {"label_zh": "300 米", "label_en": "300 m", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "分别位于华盛顿州汉福德和路易斯安那州利文斯顿。",
                "explain_en": "Hanford, WA, and Livingston, LA."
              },
              {
                "id": "frn-e1-02-q5",
                "based_on": "teach[1]",
                "prompt_zh": "引力波以什么速度传播？",
                "prompt_en": "Gravitational waves travel at:",
                "choices": [
                  {"label_zh": "光速", "label_en": "Light speed", "glyph": "⚡"},
                  {"label_zh": "声速", "label_en": "Sound speed", "glyph": "❌"},
                  {"label_zh": "瞬间到达", "label_en": "Instantly", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "理论预言引力波以光速在时空结构中传播。",
                "explain_en": "They ripple through spacetime at light speed."
              },
              {
                "id": "frn-e1-02-q6",
                "based_on": "teach[4]",
                "prompt_zh": "引力波被直接探测到，距爱因斯坦的预言约？",
                "prompt_en": "Direct detection came about ___ after Einstein's prediction:",
                "choices": [
                  {"label_zh": "100 年", "label_en": "100 years", "glyph": "💯"},
                  {"label_zh": "10 年", "label_en": "10 years", "glyph": "❌"},
                  {"label_zh": "1 年", "label_en": "1 year", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "预言百年之后，人类终于捕获了引力波。",
                "explain_en": "A century on, humanity finally caught one."
              }
            ]
          }
        },
        {
          "left": -26,
          "lesson": {
            "id": "frn-e2-01-gamma-ray-bursts",
            "title_zh": "伽马射线暴",
            "title_en": "Gamma-Ray Bursts",
            "subtitle_zh": "为防核战而发现的宇宙烟花",
            "subtitle_en": "Cosmic fireworks found by accident",
            "icon": "⚡",
            "xp": 35,
            "teach": [
              {
                "visual": "🛰️",
                "title_zh": "冷战疑云中的发现",
                "title_en": "A Cold War mystery",
                "body_zh": "1963 年，美苏英签署《部分禁止核试验条约》。为「信任但要查证」，美国部署了维拉卫星，监控苏联核试验的伽马射线。卫星确实天天发现伽马射线爆发——但完全怪不到苏联头上。",
                "body_en": "In 1963, the Partial Test Ban Treaty was signed. To 'trust but verify,' the US launched Vela satellites to watch for Soviet nuclear gamma rays. They did find bursts — daily — but none of them was Soviet."
              },
              {
                "visual": "🌠",
                "title_zh": "来自宇宙深处的爆炸",
                "title_en": "Blasts from deep space",
                "body_zh": "这些爆发来自宇宙深空——后来被证明是遥远而规模巨大的恒星爆炸。冷战的副产品，就此标志着伽马射线天体物理学的诞生。",
                "body_en": "The bursts came from deep space — later shown to be vast, distant stellar explosions. A Cold War by-product thus gave birth to gamma-ray astrophysics."
              },
              {
                "visual": "🔬",
                "title_zh": "看不见的光怎么抓",
                "title_en": "Catching invisible light",
                "body_zh": "伽马射线 1900 年被发现，但直到 1961 年「探险者 11 号」卫星搭载新望远镜才在太空探测到它。伽马射线能穿透普通透镜和反射镜，得靠闪烁器发射带电粒子来响应、再反推光的能量。",
                "body_en": "Discovered in 1900, gamma rays weren't detected from space until 1961's Explorer 11. They pierce ordinary lenses and mirrors, so scintillators fire charged particles in response — from which we deduce the light."
              },
              {
                "visual": "⛈️",
                "title_zh": "头顶也有伽马闪光",
                "title_en": "Gamma flashes overhead",
                "body_zh": "1994 年康普顿伽马射线天文台发现：地球表面附近每天有频繁的伽马射线闪光，出现在雷雨云顶部、闪电发生前的一瞬间——目前最好的解释是电子被加速到近光速撞击大气原子核。",
                "body_en": "In 1994, the Compton Observatory found frequent gamma flashes near Earth's surface — atop thunderclouds just before lightning. Best guess: electrons accelerated near light speed, slamming into air nuclei."
              }
            ],
            "questions": [
              {
                "id": "frn-e2-01-q1",
                "based_on": "teach[1]",
                "prompt_zh": "维拉卫星最初的任务是？",
                "prompt_en": "The Vela satellites were originally built to:",
                "figure": "⚡",
                "choices": [
                  {"label_zh": "监控苏联的核试验", "label_en": "Monitor Soviet nuclear tests", "glyph": "🛰️"},
                  {"label_zh": "观测木星", "label_en": "Watch Jupiter", "glyph": "❌"},
                  {"label_zh": "给地球拍照", "label_en": "Photograph Earth", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "为查证核试验，美国部署维拉卫星监控伽马射线。",
                "explain_en": "Trust but verify — Vela watched for nuclear gamma rays."
              },
              {
                "id": "frn-e2-01-q2",
                "based_on": "teach[2]",
                "prompt_zh": "维拉卫星发现的伽马暴来自？",
                "prompt_en": "The bursts Vela found came from:",
                "choices": [
                  {"label_zh": "宇宙深空的恒星爆炸", "label_en": "Deep-space stellar explosions", "glyph": "🌠"},
                  {"label_zh": "苏联的核试验", "label_en": "Soviet tests", "glyph": "❌"},
                  {"label_zh": "地球上的雷达", "label_en": "Earthly radar", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "后被证明来自遥远而规模巨大的恒星爆炸。",
                "explain_en": "Eventually pinned on distant, enormous star blasts."
              },
              {
                "id": "frn-e2-01-q3",
                "based_on": "teach[2]",
                "prompt_zh": "这一发现的意义是？",
                "prompt_en": "The discovery marked the birth of:",
                "choices": [
                  {"label_zh": "伽马射线天体物理学", "label_en": "Gamma-ray astrophysics", "glyph": "✅"},
                  {"label_zh": "射电天文学", "label_en": "Radio astronomy", "glyph": "❌"},
                  {"label_zh": "气象学", "label_en": "Meteorology", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "冷战的副产品，催生了新的天文学分支。",
                "explain_en": "A Cold War by-product opened a new field."
              },
              {
                "id": "frn-e2-01-q4",
                "based_on": "teach[3]",
                "prompt_zh": "伽马射线为什么难被望远镜捕获？",
                "prompt_en": "Why are gamma rays hard to catch?",
                "choices": [
                  {"label_zh": "能穿透普通透镜和反射镜", "label_en": "They pierce ordinary lenses and mirrors", "glyph": "🔬"},
                  {"label_zh": "它们太懒不爱动", "label_en": "They're lazy", "glyph": "❌"},
                  {"label_zh": "被云挡住了", "label_en": "Clouds block them", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "要用闪烁器响应带电粒子，再反推伽马光子的能量。",
                "explain_en": "Scintillators convert them to particles we can read."
              },
              {
                "id": "frn-e2-01-q5",
                "based_on": "teach[3]",
                "prompt_zh": "首次在太空探测到伽马射线的卫星是？",
                "prompt_en": "The first satellite to detect gamma rays in space was:",
                "choices": [
                  {"label_zh": "探险者 11 号（1961）", "label_en": "Explorer 11 (1961)", "glyph": "🚀"},
                  {"label_zh": "哈勃望远镜", "label_en": "Hubble", "glyph": "❌"},
                  {"label_zh": "维拉卫星", "label_en": "Vela", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "探险者 11 号 1961 年搭载新望远镜实现首次太空探测。",
                "explain_en": "Explorer 11 got there first, in 1961."
              },
              {
                "id": "frn-e2-01-q6",
                "based_on": "teach[4]",
                "prompt_zh": "「地面伽马射线闪光」出现在？",
                "prompt_en": "'Terrestrial gamma flashes' occur:",
                "choices": [
                  {"label_zh": "雷雨云顶、闪电前的一瞬间", "label_en": "Atop thunderclouds, just before lightning", "glyph": "⛈️"},
                  {"label_zh": "晴朗的中午", "label_en": "On clear noons", "glyph": "❌"},
                  {"label_zh": "月球背面", "label_en": "Behind the Moon", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "每天至少 50 次，成因可能与近光速电子有关。",
                "explain_en": "At least 50 a day — near-light-speed electrons suspected."
              }
            ]
          }
        },
        {
          "left": 34,
          "lesson": {
            "id": "frn-e2-02-quasars-agn",
            "title_zh": "类星体与活动星系核",
            "title_en": "Quasars & AGN",
            "subtitle_zh": "比星系更亮的小不点",
            "subtitle_en": "Tiny dots brighter than galaxies",
            "icon": "💎",
            "xp": 35,
            "teach": [
              {
                "visual": "💎",
                "title_zh": "看着像恒星，其实不是",
                "title_en": "Looks like a star, isn't",
                "body_zh": "20 世纪 60 年代初，望远镜装上了对无线电波和 X 射线敏感的传感器。照片上有些「恒星」释放大量无线电波——「类恒星无线电波源」很快被简称类星体，它们是已知最遥远的天体。",
                "body_en": "In the early 1960s, telescopes gained sensors for radio and X-rays. Some star-like dots in the photos poured out radio waves — 'quasi-stellar radio sources,' soon shortened to quasars: the farthest objects known."
              },
              {
                "visual": "🍽️",
                "title_zh": "黑洞的疯狂进食",
                "title_en": "A black hole's feeding frenzy",
                "body_zh": "坠向超大质量黑洞的气体相互冲撞摩擦，形成巨型旋涡，在太阳系大小的空间里释放相当于几十亿倍太阳亮度的能量——就连最暗的类星体也比普通星系更亮。",
                "body_en": "Gas plunging toward a supermassive black hole collides and grinds into a colossal vortex, radiating billions of Suns' brightness within a solar-system-sized region. Even the dimmest quasar outshines a galaxy."
              },
              {
                "visual": "🌊",
                "title_zh": "几十万光年的喷流",
                "title_en": "Jets hundreds of thousands of light-years long",
                "body_zh": "物质和辐射还从旋涡上下方喷射而出，形成绵延几十万光年的喷射流。系统亮度忽明忽暗，间隔几小时到几周；若喷射流正好对准你，你会觉得它格外亮且变化多端。",
                "body_en": "Matter and radiation jet above and below the vortex, spanning hundreds of thousands of light-years. The glow flickers over hours to weeks — and if a jet points your way, you see it far brighter and wilder."
              },
              {
                "visual": "😴",
                "title_zh": "吃饱了就会熄灭",
                "title_en": "Full? Then lights out",
                "body_zh": "等黑洞吞光势力范围内的食物，类星体就熄灭，只留一个温驯星系和沉睡的黑洞。温和进食的星系核（赛弗特星系、耀变体等）统称活动星系核——差别只在黑洞质量、进食速度和观测角度。",
                "body_en": "Once the black hole sweeps its larder clean, the quasar dies — leaving a tame galaxy and a sleeping hole. Gentler feeders (Seyferts, blazars…) are collectively AGN; the differences boil down to mass, feeding rate, viewing angle."
              }
            ],
            "questions": [
              {
                "id": "frn-e2-02-q1",
                "based_on": "teach[1]",
                "prompt_zh": "「类星体」这个名字的由来是？",
                "prompt_en": "The name 'quasar' comes from:",
                "figure": "💎",
                "choices": [
                  {"label_zh": "类恒星无线电波源", "label_en": "Quasi-stellar radio source", "glyph": "✅"},
                  {"label_zh": "类人猿星体", "label_en": "Ape-like star", "glyph": "❌"},
                  {"label_zh": "奇怪的星星", "label_en": "Odd star", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "看起来像恒星却狂发无线电波，故得此名。",
                "explain_en": "Star-like, but screaming in radio — hence the name."
              },
              {
                "id": "frn-e2-02-q2",
                "based_on": "teach[1]",
                "prompt_zh": "在距离上，类星体的身份是？",
                "prompt_en": "Distance-wise, quasars are:",
                "choices": [
                  {"label_zh": "已知最遥远的天体之一", "label_en": "Among the farthest known", "glyph": "🌌"},
                  {"label_zh": "都在太阳系附近", "label_en": "All near the solar system", "glyph": "❌"},
                  {"label_zh": "银河系内的恒星", "label_en": "Stars in the Milky Way", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "整体而言类星体是已知距离最远的天体。",
                "explain_en": "By and large, the most distant things we know."
              },
              {
                "id": "frn-e2-02-q3",
                "based_on": "teach[2]",
                "prompt_zh": "类星体的能量来自？",
                "prompt_en": "A quasar's power comes from:",
                "choices": [
                  {"label_zh": "超大质量黑洞吞噬气体", "label_en": "A supermassive black hole devouring gas", "glyph": "🍽️"},
                  {"label_zh": "普通恒星的聚变", "label_en": "Ordinary stellar fusion", "glyph": "❌"},
                  {"label_zh": "行星碰撞", "label_en": "Colliding planets", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "气体冲撞摩擦形成旋涡，释放几十亿倍太阳亮度。",
                "explain_en": "Grinding gas around a giant hole, billions of Suns bright."
              },
              {
                "id": "frn-e2-02-q4",
                "based_on": "teach[2]",
                "prompt_zh": "类星体发光区域的尺寸？",
                "prompt_en": "A quasar's glowing region is about:",
                "choices": [
                  {"label_zh": "不比太阳系更大", "label_en": "No bigger than the solar system", "glyph": "🔬"},
                  {"label_zh": "和银河系一样大", "label_en": "Milky Way-sized", "glyph": "❌"},
                  {"label_zh": "横跨整个星系团", "label_en": "Cluster-sized", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "太阳系大小的空间，却比整个星系还亮。",
                "explain_en": "Solar-system-sized, galaxy-outshining."
              },
              {
                "id": "frn-e2-02-q5",
                "based_on": "teach[4]",
                "prompt_zh": "类星体的晚年是？",
                "prompt_en": "In old age, a quasar:",
                "choices": [
                  {"label_zh": "熄灭，留下温驯星系和沉睡黑洞", "label_en": "Dies out, leaving a tame galaxy and sleeping hole", "glyph": "😴"},
                  {"label_zh": "变成一颗行星", "label_en": "Becomes a planet", "glyph": "❌"},
                  {"label_zh": "永远越来越亮", "label_en": "Brightens forever", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "吞光势力范围内的食物后，类星体就熄灭。",
                "explain_en": "Empty the larder, and the lights go out."
              },
              {
                "id": "frn-e2-02-q6",
                "based_on": "teach[4]",
                "prompt_zh": "给活动星系核分类，关键看哪几个参数？",
                "prompt_en": "Classifying AGN hinges on:",
                "choices": [
                  {"label_zh": "黑洞质量、进食速度、观测角度", "label_en": "Mass, feeding rate, viewing angle", "glyph": "🌊"},
                  {"label_zh": "颜色、名字、运气", "label_en": "Color, name, luck", "glyph": "❌"},
                  {"label_zh": "距离、年龄、性别", "label_en": "Distance, age, gender", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "三个参数几乎解释所有星系核形态差异。",
                "explain_en": "Three numbers explain nearly every AGN's look."
              }
            ]
          }
        },
        {
          "left": -34,
          "lesson": {
            "id": "frn-e3-01-life-conditions",
            "title_zh": "太阳系哪里有生命",
            "title_en": "Where Life Might Hide",
            "subtitle_zh": "金发姑娘带不是唯一的答案",
            "subtitle_en": "Beyond the Goldilocks zone",
            "icon": "🧬",
            "xp": 35,
            "teach": [
              {
                "visual": "🥣",
                "title_zh": "宜居带的思路",
                "title_en": "The Goldilocks idea",
                "body_zh": "找生命先找液态水：金星离太阳太近，水被蒸发；火星太远，水冻成冰；地球不远不近刚刚好。太阳周围允许液态水存在的区域，就叫宜居带——但这个简单模型其实很有局限。",
                "body_en": "Life-hunting starts with liquid water: Venus, too close, lost its seas; Mars, too far, froze them. Earth is just right. That habitable ring is the Goldilocks zone — though the simple model has real limits."
              },
              {
                "visual": "🧊",
                "title_zh": "木卫二：不用太阳的海洋",
                "title_en": "Europa: an ocean sans sunshine",
                "body_zh": "木卫二在宜居带外，冰盖下却有全球性海洋——木星的潮汐力反复揉搓卫星内部生热，像回力球越拍越烫。冰盖像高压锅盖，让海洋在冰点附近保持了 45 亿年。",
                "body_en": "Europa sits outside the zone, yet hides a global ocean under ice — Jupiter's tides knead its insides warm, like a squash ball heating up. The icy lid kept that near-freezing ocean liquid for 4.5 billion years."
              },
              {
                "visual": "🌫️",
                "title_zh": "土卫六：乙烷湖的世界",
                "title_en": "Titan: lakes of ethane",
                "body_zh": "土卫六有厚厚的氮大气，与地球相似；但地表约零下 179 度，容不下液态水，却容得下液态乙烷湖。生命也许不必用水——氨、乙烷、甲醇都可能当溶剂，只是液态温度范围都比水窄。",
                "body_en": "Titan wears a thick nitrogen atmosphere like Earth's, but at -179°C water can't flow — ethane lakes can. Life may not need water: ammonia, ethane, methanol could serve, though each stays liquid over a narrower range."
              },
              {
                "visual": "⛏️",
                "title_zh": "火星：去地底下找",
                "title_en": "Mars: look underground",
                "body_zh": "火星表面气压不到地球 1%，液态水会像干冰一样直接升华，所以地表不可能有液态水——但地下永冻层里可能藏冰。火星、木卫二、土卫六，是太阳系寻找生命的三大目标。",
                "body_en": "Mars's surface pressure is under 1% of Earth's; liquid water would sublimate like dry ice — so look below ground, where permafrost ice may hide. Mars, Europa and Titan: the big three for the search."
              }
            ],
            "questions": [
              {
                "id": "frn-e3-01-q1",
                "based_on": "teach[1]",
                "prompt_zh": "「宜居带」的定义标准是？",
                "prompt_en": "The habitable zone is defined by:",
                "figure": "🧬",
                "choices": [
                  {"label_zh": "允许液态水存在", "label_en": "Allowing liquid water", "glyph": "🥣"},
                  {"label_zh": "适合人类呼吸", "label_en": "Breathable air", "glyph": "❌"},
                  {"label_zh": "没有陨石坑", "label_en": "No craters", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "离恒星不近不远、温度容许液态水存在的环带。",
                "explain_en": "Not too hot, not too cold — water stays liquid."
              },
              {
                "id": "frn-e3-01-q2",
                "based_on": "teach[2]",
                "prompt_zh": "木卫二在宜居带外，冰下海洋却保持液态，靠的是？",
                "prompt_en": "Europa's buried ocean stays liquid thanks to:",
                "choices": [
                  {"label_zh": "木星潮汐力反复揉搓生热", "label_en": "Jupiter's tidal kneading", "glyph": "🧊"},
                  {"label_zh": "阳光直射", "label_en": "Direct sunlight", "glyph": "❌"},
                  {"label_zh": "海底火山足够多", "label_en": "Abundant volcanoes", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "潮汐弯折让卫星内部升温，像回力球越拍越烫。",
                "explain_en": "Tidal flexing warms the interior — squash-ball physics."
              },
              {
                "id": "frn-e3-01-q3",
                "based_on": "teach[2]",
                "prompt_zh": "木卫二冰盖常被比作什么？",
                "prompt_en": "Europa's ice shell is compared to:",
                "choices": [
                  {"label_zh": "高压锅盖", "label_en": "A pressure-cooker lid", "glyph": "🍳"},
                  {"label_zh": "棉被", "label_en": "A quilt", "glyph": "❌"},
                  {"label_zh": "雨伞", "label_en": "An umbrella", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "冰盖锁住海水不蒸发，保住海洋 45 亿年不冻。",
                "explain_en": "The lid kept the ocean sealed and liquid for eons."
              },
              {
                "id": "frn-e3-01-q4",
                "based_on": "teach[3]",
                "prompt_zh": "土卫六上可能存在的液态湖泊由什么构成？",
                "prompt_en": "Titan's possible lakes are made of:",
                "choices": [
                  {"label_zh": "液态乙烷", "label_en": "Liquid ethane", "glyph": "🌫️"},
                  {"label_zh": "水", "label_en": "Water", "glyph": "❌"},
                  {"label_zh": "水银", "label_en": "Mercury", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "零下 179 度容不下液态水，却容得下乙烷。",
                "explain_en": "At -179°C, ethane flows while water freezes."
              },
              {
                "id": "frn-e3-01-q5",
                "based_on": "teach[4]",
                "prompt_zh": "火星表面不可能有液态水，因为？",
                "prompt_en": "Liquid water can't exist on Mars's surface because:",
                "choices": [
                  {"label_zh": "气压太低，水会直接升华", "label_en": "The thin air lets water sublimate", "glyph": "⛏️"},
                  {"label_zh": "太阳太晒", "label_en": "It's too sunny", "glyph": "❌"},
                  {"label_zh": "火星人喝光了", "label_en": "Martians drank it", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "气压不到地球 1%，暴露的液态水会像干冰升华。",
                "explain_en": "Under 1% Earth pressure, water skips liquid entirely."
              },
              {
                "id": "frn-e3-01-q6",
                "based_on": "teach[4]",
                "prompt_zh": "太阳系寻找生命的三大目标是？",
                "prompt_en": "The big three for life-hunting in the solar system:",
                "choices": [
                  {"label_zh": "火星、木卫二、土卫六", "label_en": "Mars, Europa, Titan", "glyph": "✅"},
                  {"label_zh": "金星、水星、月球", "label_en": "Venus, Mercury, the Moon", "glyph": "❌"},
                  {"label_zh": "木星、土星、海王星", "label_en": "Jupiter, Saturn, Neptune", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "三者最可能拥有水或其他液态溶剂。",
                "explain_en": "The three likeliest to hold liquid solvents."
              }
            ]
          }
        },
        {
          "left": 42,
          "lesson": {
            "id": "frn-e3-02-seti-drake",
            "title_zh": "SETI 与德雷克方程",
            "title_en": "SETI & the Drake Equation",
            "subtitle_zh": "倾听宇宙的广播",
            "subtitle_en": "Eavesdropping on the cosmos",
            "icon": "📻",
            "xp": 35,
            "teach": [
              {
                "visual": "🧮",
                "title_zh": "德雷克方程：一道拆开的题",
                "title_en": "Drake's equation: a problem, disassembled",
                "body_zh": "「银河系有多少文明？」太大没法直接回答。美国天文学家弗兰克·德雷克把它拆成一系列小因子的乘积——这个方程综合描述了银河系中拥有恒星际通信能力的文明数量。",
                "body_en": "'How many civilizations are out there?' is too big to answer at once. Frank Drake split it into a chain of smaller factors — an equation tallying galactic civilizations capable of interstellar communication."
              },
              {
                "visual": "📡",
                "title_zh": "SETI：巡天找信号",
                "title_en": "SETI: sweeping the sky",
                "body_zh": "搜寻地外文明计划（SETI）的重点是寻找无线电信号：巡天天线记录探测到的信息，强大的计算机分析信号，寻找非自然的痕迹。光波信号——比如激光——也是不容忽视的替代手段。",
                "body_en": "SETI centers on radio: survey antennas record everything, and mighty computers scour the data for unnatural signatures. Optical signals — laser beams — are a serious alternative too."
              },
              {
                "visual": "🎯",
                "title_zh": "两种可能收到的信号",
                "title_en": "Two kinds of signals",
                "body_zh": "我们可能收到专门发送的信号束——定向、集中、还附带引导解码的信息；也可能收到其他文明无意泄漏的信号，就像人类的广播电视。前者好认，后者在各个方向平均散开，传播不远就弱得可怜。",
                "body_en": "We might catch a deliberate beam — aimed, concentrated, with decoding instructions attached — or an accidental leak, like our own TV broadcasts. Beams stand out; leaks spread thin in all directions and fade fast."
              },
              {
                "visual": "👂",
                "title_zh": "「监听」策略",
                "title_en": "The listening strategy",
                "body_zh": "捕捉地外文明无意泄漏的无线电信号来证明其存在，这叫「监听」。如果宇宙中的文明十分罕见，我们更该重点监听泄漏信号，而不是指望正好撞上一段目标明确的信号束。",
                "body_en": "Proving aliens exist by catching their leaked radio chatter is called 'listening.' If civilizations are rare, leaked signals deserve the spotlight — we can't count on stumbling into a aimed beam."
              }
            ],
            "questions": [
              {
                "id": "frn-e3-02-q1",
                "based_on": "teach[1]",
                "prompt_zh": "德雷克方程综合描述的是什么数量？",
                "prompt_en": "The Drake equation tallies:",
                "figure": "📻",
                "choices": [
                  {"label_zh": "银河系中能恒星际通信的文明", "label_en": "Communicating galactic civilizations", "glyph": "🧮"},
                  {"label_zh": "银河系的恒星总数", "label_en": "Total stars in the galaxy", "glyph": "❌"},
                  {"label_zh": "地球上的收音机", "label_en": "Radios on Earth", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "把大问题拆成小因子乘积，是它的精髓。",
                "explain_en": "A big question, factored into smaller ones."
              },
              {
                "id": "frn-e3-02-q2",
                "based_on": "teach[1]",
                "prompt_zh": "德雷克方程的提出者是？",
                "prompt_en": "The Drake equation was first proposed by:",
                "choices": [
                  {"label_zh": "弗兰克·德雷克", "label_en": "Frank Drake", "glyph": "✅"},
                  {"label_zh": "爱因斯坦", "label_en": "Einstein", "glyph": "❌"},
                  {"label_zh": "哈勃", "label_en": "Hubble", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "美国天文学家弗兰克·德雷克首次提出该方程。",
                "explain_en": "American astronomer Frank Drake, its namesake."
              },
              {
                "id": "frn-e3-02-q3",
                "based_on": "teach[2]",
                "prompt_zh": "SETI 的重点搜寻对象是？",
                "prompt_en": "SETI primarily searches for:",
                "choices": [
                  {"label_zh": "无线电信号", "label_en": "Radio signals", "glyph": "📡"},
                  {"label_zh": "流星雨", "label_en": "Meteor showers", "glyph": "❌"},
                  {"label_zh": "不明飞行物照片", "label_en": "UFO photos", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "巡天天线加计算机分析，寻找非自然痕迹。",
                "explain_en": "Antennas plus computers, hunting the unnatural."
              },
              {
                "id": "frn-e3-02-q4",
                "based_on": "teach[2]",
                "prompt_zh": "除无线电外，SETI 还重视哪种替代通信手段？",
                "prompt_en": "Besides radio, SETI also considers:",
                "choices": [
                  {"label_zh": "光波信号（如激光）", "label_en": "Optical signals (e.g., lasers)", "glyph": "🎯"},
                  {"label_zh": "信鸽", "label_en": "Carrier pigeons", "glyph": "❌"},
                  {"label_zh": "瓶中信", "label_en": "Messages in bottles", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "激光能将光波凝聚成单频率电磁波，便于区分。",
                "explain_en": "Lasers concentrate light into distinct frequencies."
              },
              {
                "id": "frn-e3-02-q5",
                "based_on": "teach[3]",
                "prompt_zh": "哪种信号更容易被远处的文明探测到？",
                "prompt_en": "Which signal is easier to detect from afar?",
                "choices": [
                  {"label_zh": "专门发送的定向信号束", "label_en": "A deliberate, aimed beam", "glyph": "🔦"},
                  {"label_zh": "无意泄漏的广播电视信号", "label_en": "Leaked TV broadcasts", "glyph": "❌"},
                  {"label_zh": "两者一样容易", "label_en": "Equally easy", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "信号束能量集中；泄漏信号各向散开、衰减很快。",
                "explain_en": "Beams concentrate; leaks fade fast."
              },
              {
                "id": "frn-e3-02-q6",
                "based_on": "teach[4]",
                "prompt_zh": "「监听」指的是？",
                "prompt_en": "'Listening' refers to:",
                "choices": [
                  {"label_zh": "捕捉地外文明无意泄漏的无线电信号", "label_en": "Catching leaked alien radio chatter", "glyph": "👂"},
                  {"label_zh": "用耳朵贴着望远镜", "label_en": "Pressing your ear to a telescope", "glyph": "❌"},
                  {"label_zh": "给外星人打电话", "label_en": "Phoning aliens", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "以捕获泄漏信号的方式证明地外文明存在。",
                "explain_en": "Proving aliens by catching their leaks."
              }
            ]
          }
        },
        {
          "left": -42,
          "lesson": {
            "id": "frn-e4-01-inflation",
            "title_zh": "宇宙暴胀",
            "title_en": "Cosmic Inflation",
            "subtitle_zh": "诞生一瞬间的疯狂膨胀",
            "subtitle_en": "The frenzied first instant",
            "icon": "🎈",
            "xp": 40,
            "teach": [
              {
                "visual": "🎈",
                "title_zh": "1979 年的大胆猜想",
                "title_en": "The 1979 breakthrough",
                "body_zh": "1979 年，物理学家阿兰·古斯提出暴胀模型：宇宙诞生极早期经历过急速膨胀的阶段。在大爆炸后 10⁻³⁷ 到 10⁻³⁴ 秒的「暴胀时期」，整个宇宙膨胀了约 10⁵⁰ 倍。",
                "body_en": "In 1979, Alan Guth proposed inflation: in its earliest instant, the universe blew up ferociously. Between 10⁻³⁷ and 10⁻³⁴ seconds after the Big Bang, it swelled roughly 10⁵⁰-fold."
              },
              {
                "visual": "🚄",
                "title_zh": "超光速却不违规",
                "title_en": "Faster than light, still legal",
                "body_zh": "膨胀速度甚至远超光速，不违反相对论吗？爱因斯坦的光速上限只适用于物体在空间中的运动，却无法限制空间本身的膨胀——空间想胀多快就胀多快。",
                "body_en": "Inflation outran light — legally. Einstein's speed limit applies to things moving through space, not to space itself. Space may stretch as fast as it pleases."
              },
              {
                "visual": "🧊",
                "title_zh": "像水结冰的「相变」",
                "title_en": "A phase change, like freezing",
                "body_zh": "是什么造成暴胀？古斯提出，所有空间经历了一次「相变」，类似液态水在短时间内冻结成冰。苏联、英国和美国的同行随后做出关键修正，暴胀模型从此成为主流的极早期宇宙理论。",
                "body_en": "What drove it? Guth suggested a 'phase transition' of space itself — like water flash-freezing into ice. Colleagues worldwide refined the idea, and inflation became the leading theory of the early universe."
              },
              {
                "visual": "🥞",
                "title_zh": "为什么宇宙这么平",
                "title_en": "Why the universe is flat",
                "body_zh": "暴胀的妙处：我们能见的一切源自一小块空间，其特性成为全宇宙共性（解释各向同性）；就像气球吹大无数倍后，表面局部平滑如煎饼——它还预言空间曲率恰好为零，与观测吻合。",
                "body_en": "Inflation's genius: everything we see grew from one small patch, whose traits became universal — explaining the cosmos's uniformity. Like a balloon inflated beyond counting, any patch looks flat; the theory also predicts exactly zero curvature — as observed."
              }
            ],
            "questions": [
              {
                "id": "frn-e4-01-q1",
                "based_on": "teach[1]",
                "prompt_zh": "暴胀模型是谁在 1979 年提出的？",
                "prompt_en": "Inflation was proposed in 1979 by:",
                "figure": "🎈",
                "choices": [
                  {"label_zh": "阿兰·古斯", "label_en": "Alan Guth", "glyph": "✅"},
                  {"label_zh": "爱因斯坦", "label_en": "Einstein", "glyph": "❌"},
                  {"label_zh": "哈勃", "label_en": "Hubble", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "物理学家阿兰·古斯提出暴胀模型。",
                "explain_en": "Alan Guth, inflation's founding father."
              },
              {
                "id": "frn-e4-01-q2",
                "based_on": "teach[1]",
                "prompt_zh": "「暴胀时期」发生在？",
                "prompt_en": "The inflationary epoch happened:",
                "choices": [
                  {"label_zh": "大爆炸后 10⁻³⁷ 到 10⁻³⁴ 秒", "label_en": "10⁻³⁷ to 10⁻³⁴ seconds after the Bang", "glyph": "⏱️"},
                  {"label_zh": "宇宙诞生 1 年后", "label_en": "One year after the Bang", "glyph": "❌"},
                  {"label_zh": "恐龙灭绝之后", "label_en": "After the dinosaurs", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "极早期一瞬，宇宙膨胀了约 10⁵⁰ 倍。",
                "explain_en": "One fleeting instant, a 10⁵⁰-fold swell."
              },
              {
                "id": "frn-e4-01-q3",
                "based_on": "teach[2]",
                "prompt_zh": "暴胀「超光速」为何不违反相对论？",
                "prompt_en": "Why doesn't faster-than-light inflation break relativity?",
                "choices": [
                  {"label_zh": "光速上限不管空间本身的膨胀", "label_en": "The limit applies to motion in space, not to space", "glyph": "🚄"},
                  {"label_zh": "相对论早就错了", "label_en": "Relativity is wrong", "glyph": "❌"},
                  {"label_zh": "光其实没那么快", "label_en": "Light isn't that fast", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "上限只约束物体在空间中的运动。",
                "explain_en": "The rule polices objects in space, not space itself."
              },
              {
                "id": "frn-e4-01-q4",
                "based_on": "teach[3]",
                "prompt_zh": "古斯把驱动暴胀的过程比作？",
                "prompt_en": "Guth compared the driving process to:",
                "choices": [
                  {"label_zh": "液态水冻结成冰的相变", "label_en": "Water freezing into ice", "glyph": "🧊"},
                  {"label_zh": "烧开一壶水", "label_en": "Boiling a kettle", "glyph": "❌"},
                  {"label_zh": "吹灭蜡烛", "label_en": "Blowing out a candle", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "空间经历某种「相变」，类似短时间内的结冰。",
                "explain_en": "A phase transition of space — flash-freezing writ large."
              },
              {
                "id": "frn-e4-01-q5",
                "based_on": "teach[4]",
                "prompt_zh": "暴胀模型对宇宙形状的预言是？",
                "prompt_en": "Inflation predicts the universe's shape is:",
                "choices": [
                  {"label_zh": "平坦，曲率为零", "label_en": "Flat — zero curvature", "glyph": "🥞"},
                  {"label_zh": "球形，会坍缩", "label_en": "Spherical, doomed to collapse", "glyph": "❌"},
                  {"label_zh": "马鞍形", "label_en": "Saddle-shaped", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "曲率既非正也非负，恰好为零，与观测吻合。",
                "explain_en": "Neither positive nor negative — exactly zero, as measured."
              },
              {
                "id": "frn-e4-01-q6",
                "based_on": "teach[4]",
                "prompt_zh": "气球比喻想说明什么？",
                "prompt_en": "The balloon analogy shows that:",
                "choices": [
                  {"label_zh": "吹大无数倍后，局部表面显得平坦", "label_en": "Hyper-inflation makes any patch look flat", "glyph": "✅"},
                  {"label_zh": "宇宙是蓝色的", "label_en": "The universe is blue", "glyph": "❌"},
                  {"label_zh": "气球能飞到太空", "label_en": "Balloons reach space", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "急速膨胀把任何弯曲都拉平了。",
                "explain_en": "Frenzied stretching flattens any curve."
              }
            ]
          }
        },
        {
          "left": 50,
          "lesson": {
            "id": "frn-e4-02-dark-energy-mystery",
            "title_zh": "暗能量之谜",
            "title_en": "The Dark Energy Mystery",
            "subtitle_zh": "科学史上最尴尬的误差",
            "subtitle_en": "Science's most embarrassing gap",
            "icon": "🌀",
            "xp": 40,
            "teach": [
              {
                "visual": "💨",
                "title_zh": "头号嫌疑人：真空",
                "title_en": "Prime suspect: the vacuum",
                "body_zh": "暗能量最靠谱的猜测来自真空：所谓「真空」里其实翻腾着虚粒子，它们成对出现又消失，这种「真空的量子涨落」赋予了真空能量——每对粒子都施加一点点向外的推力。",
                "body_en": "The best guess: dark energy lives in the vacuum, which seethes with virtual particles flickering in and out. These 'quantum fluctuations' charge empty space with energy — each pair nudging the universe outward."
              },
              {
                "visual": "📈",
                "title_zh": "越膨胀越多的怪东西",
                "title_en": "The stranger that multiplies",
                "body_zh": "暗能量密度恒定、压力为负，和普通物质完全相反：宇宙膨胀时物质被稀释，它却不减反增——空间越大暗能量越多，斥力更强，宇宙因此滑入无休止的指数加速膨胀。",
                "body_en": "Dark energy has constant density and negative pressure — the opposite of matter. Expansion dilutes matter but not dark energy: more space means more of it, more repulsion, and an endless exponential speed-up."
              },
              {
                "visual": "😬",
                "title_zh": "差了 120 个数量级",
                "title_en": "Off by 120 orders of magnitude",
                "body_zh": "尴尬来了：量子力学算出的真空能量比实际观测的暗能量大约 120 个数量级——科学史上理论与观测之间最大的不匹配。若真空真有那么多能量，宇宙早就被稀释到不知哪里去了。",
                "body_en": "Here's the embarrassment: quantum theory's vacuum energy exceeds the observed dark energy by ~120 orders of magnitude — the worst theory-vs-observation mismatch ever. With that much energy, the universe would have blown apart long ago."
              },
              {
                "visual": "🏆",
                "title_zh": "爱因斯坦的「最大错误」逆袭",
                "title_en": "Einstein's 'blunder' gets the last laugh",
                "body_zh": "宇宙常数 Λ 是爱因斯坦为静态宇宙引入、又被他亲手抛弃的项。如今它满血复活：可以说，爱因斯坦最大的错误，就是宣称 Λ 是他最大的错误。对暗能量的搜寻，才刚刚开始。",
                "body_en": "Einstein added Λ for a static universe, then disowned it. Now it's back with a vengeance: his biggest mistake was calling Λ his biggest mistake. The hunt for dark energy has only begun."
              }
            ],
            "questions": [
              {
                "id": "frn-e4-02-q1",
                "based_on": "teach[1]",
                "prompt_zh": "暗能量的头号嫌疑来源是？",
                "prompt_en": "Dark energy's prime suspect is:",
                "figure": "🌀",
                "choices": [
                  {"label_zh": "真空的量子涨落", "label_en": "Quantum fluctuations of the vacuum", "glyph": "💨"},
                  {"label_zh": "黑洞喷流", "label_en": "Black hole jets", "glyph": "❌"},
                  {"label_zh": "太阳风", "label_en": "The solar wind", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "虚粒子时隐时现，赋予真空能量和向外的推力。",
                "explain_en": "Flickering virtual particles charge empty space."
              },
              {
                "id": "frn-e4-02-q2",
                "based_on": "teach[1]",
                "prompt_zh": "「虚粒子」的特点是？",
                "prompt_en": "Virtual particles are:",
                "choices": [
                  {"label_zh": "成对出现又消失，无法直接锁定", "label_en": "Paired blips, impossible to pin down", "glyph": "✅"},
                  {"label_zh": "永远存在的普通粒子", "label_en": "Ordinary permanent particles", "glyph": "❌"},
                  {"label_zh": "假想的独角兽", "label_en": "Imaginary unicorns", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "存在与不存在之间频繁切换，只能看到效果。",
                "explain_en": "They flicker between being and not-being."
              },
              {
                "id": "frn-e4-02-q3",
                "based_on": "teach[2]",
                "prompt_zh": "宇宙膨胀时，暗能量的密度？",
                "prompt_en": "As the universe expands, dark energy's density:",
                "choices": [
                  {"label_zh": "保持恒定", "label_en": "Stays constant", "glyph": "📈"},
                  {"label_zh": "越来越稀", "label_en": "Thins out", "glyph": "❌"},
                  {"label_zh": "随机乱变", "label_en": "Fluctuates wildly", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "密度不变，空间越大总量越多，斥力越强。",
                "explain_en": "Constant density means more total push as space grows."
              },
              {
                "id": "frn-e4-02-q4",
                "based_on": "teach[2]",
                "prompt_zh": "暗能量压力的特点是？",
                "prompt_en": "Dark energy's pressure is:",
                "choices": [
                  {"label_zh": "负的，促使空间扩张", "label_en": "Negative — it drives expansion", "glyph": "➖"},
                  {"label_zh": "正的，压碎一切", "label_en": "Positive, crushing all", "glyph": "❌"},
                  {"label_zh": "没有压力", "label_en": "Zero", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "负压与引力相反，加快而非拖慢膨胀。",
                "explain_en": "Negative pressure pushes against gravity's pull."
              },
              {
                "id": "frn-e4-02-q5",
                "based_on": "teach[3]",
                "prompt_zh": "理论与观测之间那个著名的差距是多少？",
                "prompt_en": "The famous theory-vs-observation gap is:",
                "choices": [
                  {"label_zh": "120 个数量级", "label_en": "120 orders of magnitude", "glyph": "😬"},
                  {"label_zh": "2 倍", "label_en": "A factor of 2", "glyph": "❌"},
                  {"label_zh": "没有差距", "label_en": "None", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "科学史上理论与观测最大的不匹配。",
                "explain_en": "The worst mismatch in the history of science."
              },
              {
                "id": "frn-e4-02-q6",
                "based_on": "teach[4]",
                "prompt_zh": "关于爱因斯坦和宇宙常数 Λ，正确的说法是？",
                "prompt_en": "About Einstein and Λ, which is right?",
                "choices": [
                  {"label_zh": "他抛弃的 Λ 如今满血复活", "label_en": "The Λ he discarded is back in force", "glyph": "🏆"},
                  {"label_zh": "他从未提出过 Λ", "label_en": "He never proposed Λ", "glyph": "❌"},
                  {"label_zh": "Λ 已被彻底证伪", "label_en": "Λ is fully disproven", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "宇宙加速膨胀需要非零的宇宙常数，Λ 重返方程。",
                "explain_en": "Accelerating expansion reinstated his discarded term."
              }
            ]
          }
        }
      ]
    }
  ]
}
```
