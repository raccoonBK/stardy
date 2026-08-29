```json
{
  "tracks": [
    {
      "id": "solar",
      "name_zh": "太阳系漫游",
      "name_en": "Tour the Solar System",
      "tagline_zh": "从太阳核心到冰冷的彗星老家",
      "tagline_en": "From the Sun's core to the comet freezer",
      "icon": "🪐",
      "nodes": [
        {
          "chapter_zh": "第 5 章 · 太阳、行星与小天体",
          "chapter_en": "Chapter 5 · The Sun, Planets & Small Bodies",
          "left": 0,
          "lesson": {
            "id": "sol-b1-01-sun-structure",
            "title_zh": "太阳的分层结构",
            "title_en": "Inside the Sun",
            "subtitle_zh": "这个火球并不简单",
            "subtitle_en": "Not your ordinary fireball",
            "icon": "☀️",
            "xp": 25,
            "teach": [
              {
                "visual": "🎈",
                "title_zh": "一团氢和氦的气体球",
                "title_en": "A ball of hydrogen and helium",
                "body_zh": "太阳的主要成分是氢和氦，只有少量其他元素。它不是固体也不是液体，而是一个巨大的、分层的气体球，能量来自内部的核聚变。",
                "body_en": "The Sun is mostly hydrogen and helium, with a dash of heavier elements. It's no solid ball but a giant layered sphere of gas, powered by fusion deep inside."
              },
              {
                "visual": "💡",
                "title_zh": "光球：肉眼看到的那层",
                "title_en": "Photosphere: the layer you see",
                "body_zh": "我们看到的太阳光，其实来自靠近外层、厚薄有限的光球层，温度约 5000 摄氏度。它像太阳的「脸面」，日食时那圈亮边就是它。",
                "body_en": "The sunlight you see comes from a thin outer layer called the photosphere, at about 5,000°C — the Sun's visible face, the bright rim seen during an eclipse."
              },
              {
                "visual": "👑",
                "title_zh": "日冕：百万度的外衣",
                "title_en": "Corona: a million-degree coat",
                "body_zh": "光球之外还有日冕，温度高达百万摄氏度，气体极稀薄且几乎完全电离。日全食时看到的银白光环，就是这层神秘的高温大气。",
                "body_en": "Beyond the photosphere lies the corona, heated to a million degrees — ultra-thin, fully ionized gas. It's the silver halo of a total eclipse."
              },
              {
                "visual": "🧩",
                "title_zh": "比火焰复杂得多",
                "title_en": "More than a flame",
                "body_zh": "把太阳比作火球形象直观，但过于简单：等离子体高速运动产生磁场，磁重联还会释放巨大能量——里面的物理远比普通火焰丰富。",
                "body_en": "Calling the Sun a fireball is vivid but too simple: churning plasma creates magnetic fields, and magnetic reconnection releases vast energy. Far richer than any flame."
              }
            ],
            "questions": [
              {
                "id": "sol-b1-01-q1",
                "based_on": "teach[1]",
                "prompt_zh": "太阳的主要成分是？",
                "prompt_en": "The Sun is mostly made of:",
                "figure": "☀️",
                "choices": [
                  {"label_zh": "氢和氦", "label_en": "Hydrogen and helium", "glyph": "🎈"},
                  {"label_zh": "岩石和铁", "label_en": "Rock and iron", "glyph": "🪨"},
                  {"label_zh": "燃烧的煤炭", "label_en": "Burning coal", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "太阳主要成分是氢和氦，只有少量其他元素。",
                "explain_en": "Mostly hydrogen and helium, with just a trace of the rest."
              },
              {
                "id": "sol-b1-01-q2",
                "based_on": "teach[2]",
                "prompt_zh": "我们肉眼看到的太阳光来自哪一层？",
                "prompt_en": "The visible sunlight comes from which layer?",
                "choices": [
                  {"label_zh": "光球层", "label_en": "The photosphere", "glyph": "💡"},
                  {"label_zh": "日冕", "label_en": "The corona", "glyph": "❌"},
                  {"label_zh": "最核心处", "label_en": "The very core", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "可见光主要从靠近外层的光球发出。",
                "explain_en": "Visible light escapes from the photosphere, near the surface."
              },
              {
                "id": "sol-b1-01-q3",
                "based_on": "teach[2]",
                "prompt_zh": "光球层的温度大约是？",
                "prompt_en": "The photosphere's temperature is about:",
                "choices": [
                  {"label_zh": "5000 摄氏度左右", "label_en": "Around 5,000°C", "glyph": "🌡️"},
                  {"label_zh": "室温", "label_en": "Room temperature", "glyph": "❌"},
                  {"label_zh": "零下 200 度", "label_en": "-200°C", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "光球温度约 5000 摄氏度，随位置略有变化。",
                "explain_en": "About 5,000°C, varying slightly across the surface."
              },
              {
                "id": "sol-b1-01-q4",
                "based_on": "teach[3]",
                "prompt_zh": "日全食时那圈银白光环是？",
                "prompt_en": "The silvery halo in a total eclipse is:",
                "choices": [
                  {"label_zh": "日冕", "label_en": "The corona", "glyph": "👑"},
                  {"label_zh": "月球大气", "label_en": "The Moon's atmosphere", "glyph": "❌"},
                  {"label_zh": "云层", "label_en": "Clouds", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "日冕是太阳最外层的高温稀薄大气。",
                "explain_en": "The corona — the Sun's hot, thin outer atmosphere."
              },
              {
                "id": "sol-b1-01-q5",
                "based_on": "teach[3]",
                "prompt_zh": "关于日冕，哪个说法正确？",
                "prompt_en": "Which statement about the corona is correct?",
                "choices": [
                  {"label_zh": "温度高达百万摄氏度", "label_en": "It reaches a million degrees", "glyph": "✅"},
                  {"label_zh": "它是固体的", "label_en": "It's solid", "glyph": "❌"},
                  {"label_zh": "它比光球更冷", "label_en": "It's colder than the photosphere", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "日冕温度极高，达到百万摄氏度量级。",
                "explain_en": "The corona blazes at about a million degrees."
              },
              {
                "id": "sol-b1-01-q6",
                "based_on": "teach[4]",
                "prompt_zh": "为什么说「火球」的比喻太简单？",
                "prompt_en": "Why is 'fireball' too simple a metaphor?",
                "choices": [
                  {"label_zh": "等离子体和磁场的物理远超普通火焰", "label_en": "Plasma and magnetic physics go far beyond flame", "glyph": "🧩"},
                  {"label_zh": "太阳其实很冷", "label_en": "The Sun is actually cold", "glyph": "❌"},
                  {"label_zh": "太阳不发光", "label_en": "The Sun doesn't shine", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "等离子体运动生磁场，磁重联释放巨大能量。",
                "explain_en": "Moving plasma builds magnetic fields; reconnection unleashes energy."
              }
            ]
          }
        },
        {
          "left": 26,
          "lesson": {
            "id": "sol-b1-02-sun-fusion",
            "title_zh": "日核聚变",
            "title_en": "Fusion in the Core",
            "subtitle_zh": "阳光的漫长旅程",
            "subtitle_en": "The long road of sunlight",
            "icon": "🔥",
            "xp": 25,
            "teach": [
              {
                "visual": "⚛️",
                "title_zh": "四个氢变一个氦",
                "title_en": "Four hydrogens make one helium",
                "body_zh": "太阳发光的本质，是内部氢核在高温高压下发生核聚变：四个氢原子聚变成一个氦原子。这是发生在原子核层面上的反应，不是燃烧。",
                "body_en": "The Sun shines because its core fuses hydrogen under fierce heat and pressure: four hydrogen nuclei become one helium. Nuclear physics, not burning."
              },
              {
                "visual": "⚖️",
                "title_zh": "少了的质量变成了光",
                "title_en": "Lost mass becomes light",
                "body_zh": "四个氢原子比一个氦原子稍重。根据爱因斯坦的质能关系，减少的质量转化为能量，以伽马光子的形式辐射出去——太阳就是靠「变瘦」发光。",
                "body_en": "Four hydrogens outweigh one helium. By Einstein's mass-energy rule, the missing mass turns into energy and flies out as gamma rays — the Sun shines by slimming."
              },
              {
                "visual": "🚶",
                "title_zh": "光子的百年迷宫",
                "title_en": "A photon's million-year maze",
                "body_zh": "太阳内部粒子太密集，伽马光子不断与粒子碰撞、被反复改道。一个光子从聚变区跑到太阳表面，平均要走几百万到一千万年。",
                "body_en": "The Sun's interior is so crowded that a gamma photon collides endlessly on its way out — the trip from core to surface takes millions of years."
              },
              {
                "visual": "🌈",
                "title_zh": "到达你眼前已是温柔光",
                "title_en": "Gentle light by the time it reaches you",
                "body_zh": "经过百万年的「挫骨削皮」，光子早已面目全非。太阳近似黑体，表面五千多度，按普朗克定律辐射出我们熟悉的连续光谱——温暖可见的阳光。",
                "body_en": "Battered for millennia, the photons emerge transformed. The ~5,000°C surface radiates a smooth blackbody spectrum — the gentle sunlight we know."
              }
            ],
            "questions": [
              {
                "id": "sol-b1-02-q1",
                "based_on": "teach[1]",
                "prompt_zh": "太阳的能量本质来自？",
                "prompt_en": "The Sun's power fundamentally comes from:",
                "choices": [
                  {"label_zh": "氢核聚变成氦", "label_en": "Hydrogen fusing into helium", "glyph": "⚛️"},
                  {"label_zh": "煤炭燃烧", "label_en": "Burning coal", "glyph": "❌"},
                  {"label_zh": "闪电放电", "label_en": "Giant lightning bolts", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "四个氢原子聚变成一个氦原子，发生在原子核层面。",
                "explain_en": "Four hydrogens fuse into one helium — a nuclear process."
              },
              {
                "id": "sol-b1-02-q2",
                "based_on": "teach[2]",
                "prompt_zh": "聚变中「减少的质量」去哪了？",
                "prompt_en": "Where does the 'lost mass' in fusion go?",
                "choices": [
                  {"label_zh": "转化为能量辐射出去", "label_en": "It becomes radiated energy", "glyph": "⚖️"},
                  {"label_zh": "凭空消失", "label_en": "It vanishes", "glyph": "❌"},
                  {"label_zh": "变成灰尘", "label_en": "It turns to dust", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "质能关系让减少的质量以伽马光子形式释出。",
                "explain_en": "Mass-energy equivalence sends it out as gamma photons."
              },
              {
                "id": "sol-b1-02-q3",
                "based_on": "teach[2]",
                "prompt_zh": "核聚变和普通燃烧的根本区别是？",
                "prompt_en": "Fusion differs from ordinary burning because it happens:",
                "choices": [
                  {"label_zh": "在原子核层面", "label_en": "At the atomic-nucleus level", "glyph": "🔬"},
                  {"label_zh": "在分子层面", "label_en": "At the molecular level", "glyph": "❌"},
                  {"label_zh": "只在表面", "label_en": "Only at the surface", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "聚变是氢核结合成氦核，不是化学燃烧。",
                "explain_en": "Nuclei merge — no chemistry involved."
              },
              {
                "id": "sol-b1-02-q4",
                "based_on": "teach[3]",
                "prompt_zh": "核心的光子跑到太阳表面平均要多久？",
                "prompt_en": "On average, how long does a photon take to reach the surface?",
                "choices": [
                  {"label_zh": "几百万到一千万年", "label_en": "Millions to ten million years", "glyph": "🚶"},
                  {"label_zh": "8 分钟", "label_en": "8 minutes", "glyph": "❌"},
                  {"label_zh": "一秒钟", "label_en": "One second", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "内部粒子太密，光子不断碰撞改道，耗时极长。",
                "explain_en": "The dense interior traps photons in endless collisions."
              },
              {
                "id": "sol-b1-02-q5",
                "based_on": "teach[3]",
                "prompt_zh": "为什么光子走得这么慢？",
                "prompt_en": "Why does the photon's journey take so long?",
                "choices": [
                  {"label_zh": "不断与稠密粒子碰撞", "label_en": "It keeps colliding with dense particles", "glyph": "✅"},
                  {"label_zh": "它喜欢慢慢走", "label_en": "It prefers strolling", "glyph": "❌"},
                  {"label_zh": "太阳引力拖住了它", "label_en": "Gravity drags it back", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "粒子密度太大，光子被反复碰撞、改道。",
                "explain_en": "It ricochets through a particle-packed interior."
              },
              {
                "id": "sol-b1-02-q6",
                "based_on": "teach[4]",
                "prompt_zh": "离开太阳的伽马光子到达表面后？",
                "prompt_en": "After reaching the surface, the gamma photons:",
                "choices": [
                  {"label_zh": "变成连续光谱的阳光", "label_en": "Emerge as smooth-spectrum sunlight", "glyph": "🌈"},
                  {"label_zh": "还是致命伽马射线", "label_en": "Stay deadly gamma rays", "glyph": "❌"},
                  {"label_zh": "被太阳收回", "label_en": "Get reabsorbed forever", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "百万年碰撞后面目全非，以黑体辐射形式发出。",
                "explain_en": "Eons of collisions reshape them into blackbody light."
              }
            ]
          }
        },
        {
          "left": -26,
          "lesson": {
            "id": "sol-b1-03-sun-activity",
            "title_zh": "太阳活动",
            "title_en": "Solar Activity",
            "subtitle_zh": "磁场导演的大戏",
            "subtitle_en": "A show directed by magnetism",
            "icon": "🧲",
            "xp": 30,
            "teach": [
              {
                "visual": "🌀",
                "title_zh": "等离子体运动生磁场",
                "title_en": "Plasma in motion makes magnetism",
                "body_zh": "太阳大气几乎完全电离，等离子体高速运动会带来磁场——而且磁场来源不止一种。反过来，磁场也会影响等离子体的运动，两者互相纠缠。",
                "body_en": "The Sun's atmosphere is ionized plasma; its motion generates magnetic fields — from more than one source. And the fields, in turn, steer the plasma back."
              },
              {
                "visual": "💥",
                "title_zh": "磁重联：能量的爆点",
                "title_en": "Reconnection: the energy trigger",
                "body_zh": "当磁力线断裂又重新接上（磁重联），会瞬间释放巨大能量，带来耀斑、日珥等一系列剧烈现象——这是太阳上最壮观的烟花。",
                "body_en": "When magnetic field lines snap and rejoin — reconnection — vast energy bursts free, firing flares and prominences: the Sun's grandest fireworks."
              },
              {
                "visual": "📶",
                "title_zh": "地球也跟着遭殃",
                "title_en": "Earth feels it too",
                "body_zh": "太阳剧烈活动喷出的物质和辐射到达地球时，会干扰无线电通讯和卫星，严重时甚至影响电网——太阳打个喷嚏，地球要防感冒。",
                "body_en": "When the Sun's outbursts sweep past Earth, they disturb radio, satellites and even power grids — the Sun sneezes, and Earth braces for a cold."
              },
              {
                "visual": "🎆",
                "title_zh": "极光是活动的礼物",
                "title_en": "Auroras: the silver lining",
                "body_zh": "这些喷发的带电粒子沿地球磁场汇聚到两极，撞进高层大气点亮绚烂极光。太阳越活跃，极光越频繁、越靠近低纬度——美丽的副产品。",
                "body_en": "The charged particles funnel along Earth's field to the poles, painting auroras in the upper air. Stormier Sun, brighter and lower-latitude lights."
              }
            ],
            "questions": [
              {
                "id": "sol-b1-03-q1",
                "based_on": "teach[1]",
                "prompt_zh": "太阳磁场的来源与什么有关？",
                "prompt_en": "The Sun's magnetic fields arise from:",
                "choices": [
                  {"label_zh": "等离子体的运动", "label_en": "The motion of plasma", "glyph": "🌀"},
                  {"label_zh": "地下的铁矿石", "label_en": "Iron ore below", "glyph": "❌"},
                  {"label_zh": "月球的牵引", "label_en": "The Moon's pull", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "等离子体高速运动会带来磁场，且来源不止一种。",
                "explain_en": "Moving ionized plasma generates the fields."
              },
              {
                "id": "sol-b1-03-q2",
                "based_on": "teach[2]",
                "prompt_zh": "「磁重联」是什么过程？",
                "prompt_en": "Magnetic reconnection is the process where:",
                "choices": [
                  {"label_zh": "磁力线断裂重接并释放能量", "label_en": "Field lines snap and rejoin, releasing energy", "glyph": "💥"},
                  {"label_zh": "磁场永久消失", "label_en": "Magnetism vanishes forever", "glyph": "❌"},
                  {"label_zh": "两块磁铁吸在一起", "label_en": "Two fridge magnets stick", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "磁重联瞬间释放巨大能量，引发耀斑等现象。",
                "explain_en": "Snapping, rejoining lines unleash flares."
              },
              {
                "id": "sol-b1-03-q3",
                "based_on": "teach[2]",
                "prompt_zh": "耀斑、日珥这些剧烈现象的幕后推手是？",
                "prompt_en": "The force behind flares and prominences is:",
                "choices": [
                  {"label_zh": "磁场", "label_en": "Magnetic fields", "glyph": "🧲"},
                  {"label_zh": "风", "label_en": "Wind", "glyph": "❌"},
                  {"label_zh": "化学反应", "label_en": "Chemistry", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "磁重联释放的能量带来一系列丰富现象。",
                "explain_en": "Reconnection energy powers the whole show."
              },
              {
                "id": "sol-b1-03-q4",
                "based_on": "teach[3]",
                "prompt_zh": "太阳剧烈活动可能影响地球的？",
                "prompt_en": "Intense solar activity can disturb Earth's:",
                "choices": [
                  {"label_zh": "无线电通讯和电网", "label_en": "Radio and power grids", "glyph": "📶"},
                  {"label_zh": "只有天气预报", "label_en": "Only weather forecasts", "glyph": "❌"},
                  {"label_zh": "毫无影响", "label_en": "Nothing at all", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "喷发物质会干扰通讯、卫星，严重时影响电网。",
                "explain_en": "Outbursts rattle radios, satellites and grids."
              },
              {
                "id": "sol-b1-03-q5",
                "based_on": "teach[4]",
                "prompt_zh": "极光的能量源头可以追溯到？",
                "prompt_en": "The energy behind auroras ultimately traces back to:",
                "choices": [
                  {"label_zh": "太阳喷发的带电粒子", "label_en": "Charged particles from the Sun", "glyph": "🎆"},
                  {"label_zh": "闪电", "label_en": "Lightning", "glyph": "❌"},
                  {"label_zh": "月亮反射的阳光", "label_en": "Moonlight", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "带电粒子沿磁场到两极，点亮高层大气。",
                "explain_en": "Solar particles ride field lines to the poles."
              },
              {
                "id": "sol-b1-03-q6",
                "based_on": "teach[4]",
                "prompt_zh": "太阳活动越剧烈，极光往往？",
                "prompt_en": "When the Sun is more active, auroras tend to:",
                "choices": [
                  {"label_zh": "更亮且更靠近低纬度", "label_en": "Shine brighter and farther from the poles", "glyph": "✅"},
                  {"label_zh": "完全消失", "label_en": "Disappear", "glyph": "❌"},
                  {"label_zh": "只出现在赤道", "label_en": "Appear only at the equator", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "太阳越活跃，极光越频繁、越往低纬度扩展。",
                "explain_en": "More storms, brighter lights, lower latitudes."
              }
            ]
          }
        },
        {
          "left": 34,
          "lesson": {
            "id": "sol-b2-01-earth-motions",
            "title_zh": "自转与公转",
            "title_en": "Spin & Orbit",
            "subtitle_zh": "地球的两种基本舞步",
            "subtitle_en": "Earth's two basic dance steps",
            "icon": "🌍",
            "xp": 25,
            "teach": [
              {
                "visual": "🔄",
                "title_zh": "自转带来昼夜",
                "title_en": "Rotation brings day and night",
                "body_zh": "地球绕自转轴不停旋转，朝向太阳的半球是白天，背向太阳的是黑夜。自转一圈约 24 小时，这就是我们最熟悉的一种「一天」。",
                "body_en": "Earth spins on its axis: the sunlit half enjoys day, the far side night. One spin takes about 24 hours — the 'day' we all live by."
              },
              {
                "visual": "🏃",
                "title_zh": "公转跑完一年",
                "title_en": "A lap around the Sun",
                "body_zh": "地球同时还绕太阳公转，跑完一圈就是一年。季节的种种变化——气温、日照、白昼长短——正是地球公转带来的结果。",
                "body_en": "Earth also orbits the Sun; one lap makes a year. The seasonal shifts in warmth, sunlight and day length all flow from this journey."
              },
              {
                "visual": "📐",
                "title_zh": "地轴倾斜且守规矩",
                "title_en": "A tilted axis, well-behaved",
                "body_zh": "地球公转时，地轴的倾斜度极有规律：始终以约 23.4 度的倾角指向同一方向。这个「歪脖子」姿势，是理解四季的钥匙。",
                "body_en": "Through the whole orbit, Earth's axis keeps its tilt — about 23.4 degrees — aimed the same way. That stubborn lean is the key to the seasons."
              },
              {
                "visual": "🚫",
                "title_zh": "假如地轴不倾斜",
                "title_en": "If the axis stood straight",
                "body_zh": "如果地轴与公转面成直角，那么无论何时何地，白天黑夜都会永远各 12 小时，也不会有季节变化——四季将彻底消失。",
                "body_en": "If the axis were upright, day and night would each be exactly 12 hours everywhere, forever — and the seasons would simply never happen."
              }
            ],
            "questions": [
              {
                "id": "sol-b2-01-q1",
                "based_on": "teach[1]",
                "prompt_zh": "昼夜交替的直接原因是？",
                "prompt_en": "Day and night alternate directly because:",
                "figure": "🌍",
                "choices": [
                  {"label_zh": "地球自转", "label_en": "Earth rotates", "glyph": "🔄"},
                  {"label_zh": "地球公转", "label_en": "Earth orbits", "glyph": "❌"},
                  {"label_zh": "太阳开关灯", "label_en": "The Sun switches off", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "自转让朝日半球为昼、背日半球为夜。",
                "explain_en": "Rotation swings each side toward and away from the Sun."
              },
              {
                "id": "sol-b2-01-q2",
                "based_on": "teach[2]",
                "prompt_zh": "地球绕太阳公转一圈的时间是？",
                "prompt_en": "One orbit of the Sun takes:",
                "choices": [
                  {"label_zh": "一年", "label_en": "One year", "glyph": "📅"},
                  {"label_zh": "一天", "label_en": "One day", "glyph": "❌"},
                  {"label_zh": "一个月", "label_en": "One month", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "公转跑完一圈就是一年。",
                "explain_en": "One full lap equals one year."
              },
              {
                "id": "sol-b2-01-q3",
                "based_on": "teach[2]",
                "prompt_zh": "季节变化的根源在于？",
                "prompt_en": "The seasons ultimately come from:",
                "choices": [
                  {"label_zh": "地球的公转", "label_en": "Earth's orbit around the Sun", "glyph": "✅"},
                  {"label_zh": "月亮的圆缺", "label_en": "The Moon's phases", "glyph": "❌"},
                  {"label_zh": "云层厚薄", "label_en": "Cloud cover", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "气温、日照、白昼长短都是公转带来的变化。",
                "explain_en": "Orbiting drives the shifts in warmth and daylight."
              },
              {
                "id": "sol-b2-01-q4",
                "based_on": "teach[3]",
                "prompt_zh": "地球公转时，地轴的倾斜度？",
                "prompt_en": "During its orbit, Earth's axis:",
                "choices": [
                  {"label_zh": "保持固定的倾角和指向", "label_en": "Keeps a fixed tilt and direction", "glyph": "📐"},
                  {"label_zh": "随机乱晃", "label_en": "Wobbles randomly", "glyph": "❌"},
                  {"label_zh": "随着季节来回摆动", "label_en": "Swings back and forth each season", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "地轴倾斜度极有规律，始终约 23.4 度。",
                "explain_en": "The ~23.4° tilt holds steady all year."
              },
              {
                "id": "sol-b2-01-q5",
                "based_on": "teach[4]",
                "prompt_zh": "如果地轴垂直于公转面，会发生什么？",
                "prompt_en": "If Earth's axis stood perpendicular to its orbit:",
                "choices": [
                  {"label_zh": "昼夜永远各 12 小时，没有四季", "label_en": "12-hour days forever, no seasons", "glyph": "🚫"},
                  {"label_zh": "四季变得更明显", "label_en": "Seasons would intensify", "glyph": "❌"},
                  {"label_zh": "没有任何变化", "label_en": "Nothing would change", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "地轴不倾斜，昼夜均等且季节消失。",
                "explain_en": "An upright axis means eternal equinox."
              },
              {
                "id": "sol-b2-01-q6",
                "based_on": "teach[3]",
                "prompt_zh": "地轴倾角大约是？",
                "prompt_en": "Earth's axial tilt is roughly:",
                "choices": [
                  {"label_zh": "23.4 度", "label_en": "23.4 degrees", "glyph": "📐"},
                  {"label_zh": "90 度", "label_en": "90 degrees", "glyph": "❌"},
                  {"label_zh": "0 度", "label_en": "0 degrees", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "地轴以约 23.4 度的倾角公转。",
                "explain_en": "The axis leans about 23.4 degrees."
              }
            ]
          }
        },
        {
          "left": -34,
          "lesson": {
            "id": "sol-b2-02-seasons",
            "title_zh": "四季成因",
            "title_en": "Why We Have Seasons",
            "subtitle_zh": "倾斜才是答案",
            "subtitle_en": "Tilt is the answer",
            "icon": "🍂",
            "xp": 30,
            "teach": [
              {
                "visual": "🔦",
                "title_zh": "太阳高度冬夏不同",
                "title_en": "The Sun rides higher in summer",
                "body_zh": "因为地轴倾斜，太阳在天上的运行路线随季节改变：夏至时太阳中天高度最高，冬至最低，春分秋分恰在中间。阳光越直射，加热越高效。",
                "body_en": "The tilted axis shifts the Sun's path through the year: highest at summer solstice, lowest at winter, midway at the equinoxes. Higher Sun, more direct heat."
              },
              {
                "visual": "⏰",
                "title_zh": "白昼也跟着变长变短",
                "title_en": "Days stretch and shrink",
                "body_zh": "太阳运行轨道越偏北（中天高度越大），白昼就越长。夏至前后北半球白昼最长，冬至前后最短；春分秋分时全球昼夜均等。",
                "body_en": "The farther north the Sun's track, the longer the day. Around the June solstice northern days peak; at the equinoxes, day equals night everywhere."
              },
              {
                "visual": "🌗",
                "title_zh": "两个半球季节相反",
                "title_en": "Opposite seasons, two hemispheres",
                "body_zh": "北半球夏季时，南半球正过冬天。因为地轴朝同一方向倾斜，一侧偏向太阳时，另一侧必然偏离——地球两端永远错季。",
                "body_en": "When the north basks in summer, the south shivers in winter. The axis leans one way: one hemisphere tips toward the Sun, the other tips away."
              },
              {
                "visual": "🧭",
                "title_zh": "距离可不是原因",
                "title_en": "Distance isn't the reason",
                "body_zh": "常见误解：夏天是因为地球离太阳近。其实地球轨道接近圆形，距离变化不大——不然南北半球怎么会同时过冬夏？倾斜才是四季的真正推手。",
                "body_en": "A classic myth: summer means we're closer to the Sun. But Earth's near-circular orbit barely changes distance — how else could hemispheres be opposite? Tilt rules the seasons."
              }
            ],
            "questions": [
              {
                "id": "sol-b2-02-q1",
                "based_on": "teach[1]",
                "prompt_zh": "北半球太阳中天高度最高的日子是？",
                "prompt_en": "In the north, the Sun climbs highest on:",
                "choices": [
                  {"label_zh": "夏至", "label_en": "The summer solstice", "glyph": "🔦"},
                  {"label_zh": "冬至", "label_en": "The winter solstice", "glyph": "❌"},
                  {"label_zh": "每天都一样", "label_en": "It never changes", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "夏至中天最高，冬至最低，二分居中。",
                "explain_en": "Highest at solstice, lowest at winter, midway at equinox."
              },
              {
                "id": "sol-b2-02-q2",
                "based_on": "teach[1]",
                "prompt_zh": "太阳高度越高，地面加热越高效，因为？",
                "prompt_en": "A higher Sun heats the ground better because:",
                "choices": [
                  {"label_zh": "阳光更接近直射", "label_en": "Sunlight strikes more directly", "glyph": "✅"},
                  {"label_zh": "太阳变大变近", "label_en": "The Sun gets bigger and closer", "glyph": "❌"},
                  {"label_zh": "空气变厚", "label_en": "The air thickens", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "越直射，单位面积得到的能量越多。",
                "explain_en": "Direct rays pack more energy per patch of ground."
              },
              {
                "id": "sol-b2-02-q3",
                "based_on": "teach[2]",
                "prompt_zh": "太阳运行轨道越偏北，白昼就？",
                "prompt_en": "The farther north the Sun's track, the:",
                "choices": [
                  {"label_zh": "白昼越长", "label_en": "Longer the day", "glyph": "⏰"},
                  {"label_zh": "白昼越短", "label_en": "Shorter the day", "glyph": "❌"},
                  {"label_zh": "白昼不变", "label_en": "No change", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "轨道越偏北（中天越高），白昼越长。",
                "explain_en": "Higher track, longer daylight."
              },
              {
                "id": "sol-b2-02-q4",
                "based_on": "teach[2]",
                "prompt_zh": "春分和秋分时，昼夜情况是？",
                "prompt_en": "At the equinoxes, day and night are:",
                "choices": [
                  {"label_zh": "全球昼夜均等", "label_en": "Equal everywhere", "glyph": "🌗"},
                  {"label_zh": "北半球白昼更长", "label_en": "Longer days in the north", "glyph": "❌"},
                  {"label_zh": "全球都是极夜", "label_en": "Night everywhere", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "二分日南北半球同时得到均衡日照。",
                "explain_en": "Both hemispheres get equal sunlight."
              },
              {
                "id": "sol-b2-02-q5",
                "based_on": "teach[3]",
                "prompt_zh": "北半球盛夏时，南半球是？",
                "prompt_en": "During the northern summer, the south has:",
                "choices": [
                  {"label_zh": "冬天", "label_en": "Winter", "glyph": "❄️"},
                  {"label_zh": "也是夏天", "label_en": "Summer too", "glyph": "❌"},
                  {"label_zh": "永远是秋天", "label_en": "Always autumn", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "一侧偏向太阳，另一侧必然偏离。",
                "explain_en": "One side tips sunward, the other tips away."
              },
              {
                "id": "sol-b2-02-q6",
                "based_on": "teach[4]",
                "prompt_zh": "「夏天是因为地球离太阳近」这个说法？",
                "prompt_en": "'Summer happens when Earth is closer to the Sun' is:",
                "choices": [
                  {"label_zh": "错的，轨道近圆、距离影响很小", "label_en": "False — the near-circular orbit barely matters", "glyph": "🧭"},
                  {"label_zh": "完全正确", "label_en": "Totally correct", "glyph": "❌"},
                  {"label_zh": "只对南半球成立", "label_en": "True only in the south", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "地轴倾斜才是四季成因，距离不是。",
                "explain_en": "Tilt, not distance, makes the seasons."
              }
            ]
          }
        },
        {
          "left": 42,
          "lesson": {
            "id": "sol-b3-01-mercury",
            "title_zh": "水星",
            "title_en": "Mercury",
            "subtitle_zh": "冰与火的两面派",
            "subtitle_en": "A world of ice and fire",
            "icon": "🌡️",
            "xp": 30,
            "teach": [
              {
                "visual": "🔥",
                "title_zh": "白天烤炉夜晚冰窖",
                "title_en": "Furnace by day, freezer by night",
                "body_zh": "水星是冰与火之地：白天向阳面可升到约 427 摄氏度，日落后骤降到零下 179 度——夜晚甚至比海王星还冷，昼夜温差太阳系罕见。",
                "body_en": "Mercury is a land of ice and fire: daysides bake near 427°C, yet after sunset it plunges to -179°C — nights colder than Neptune. A swing like nowhere else."
              },
              {
                "visual": "🕳️",
                "title_zh": "没有大气就没有缓冲",
                "title_en": "No air, no cushion",
                "body_zh": "极端温差的根源是几乎没有大气：没有空气传递和保存热量，阳光直接烘烤地面，热量也直接散失——温度全看太阳脸色。",
                "body_en": "The wild swings come from its near-total lack of atmosphere: no air to carry or trap heat, so the ground bakes in daylight and radiates it away at night."
              },
              {
                "visual": "📅",
                "title_zh": "一年比一天还短",
                "title_en": "A year shorter than a day",
                "body_zh": "水星公转飞快，一年只有 88 个地球日；自转却很慢。结果它的一天（太阳两次中天）长达 176 个地球日——一天比两个水星年还长。",
                "body_en": "Mercury races through its year in just 88 Earth days but spins slowly, so one solar day stretches 176 Earth days — longer than two of its years."
              },
              {
                "visual": "🧊",
                "title_zh": "极地深坑藏着冰",
                "title_en": "Ice hiding in polar craters",
                "body_zh": "水星自转轴几乎不倾斜，没有四季，极地深坑底部可能几十亿年晒不到阳光。就在这些永久阴影里，冰冻的水躲过了酷热的追杀。",
                "body_en": "With a barely tilted axis and no seasons, crater floors at the poles may have seen no sun for billions of years — shadowed vaults guarding ancient ice."
              }
            ],
            "questions": [
              {
                "id": "sol-b3-01-q1",
                "based_on": "teach[1]",
                "prompt_zh": "水星白天的温度可达约？",
                "prompt_en": "Mercury's daytime temperature reaches about:",
                "figure": "🌡️",
                "choices": [
                  {"label_zh": "427 摄氏度", "label_en": "427°C", "glyph": "🔥"},
                  {"label_zh": "温和的 20 度", "label_en": "A mild 20°C", "glyph": "❌"},
                  {"label_zh": "零下 100 度", "label_en": "-100°C", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "向阳面白天约 427 度，日落后骤降到零下 179 度。",
                "explain_en": "427°C by day, -179°C after sunset."
              },
              {
                "id": "sol-b3-01-q2",
                "based_on": "teach[2]",
                "prompt_zh": "水星昼夜温差极端的原因是？",
                "prompt_en": "Mercury's extreme temperature swing comes from:",
                "choices": [
                  {"label_zh": "几乎没有大气缓冲", "label_en": "Its near-total lack of atmosphere", "glyph": "🕳️"},
                  {"label_zh": "离太阳太近", "label_en": "Being close to the Sun", "glyph": "❌"},
                  {"label_zh": "内部火山", "label_en": "Volcanoes inside", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "没有空气传递和保存热量，温度全看太阳。",
                "explain_en": "No air to carry or keep heat."
              },
              {
                "id": "sol-b3-01-q3",
                "based_on": "teach[3]",
                "prompt_zh": "水星的一年大约是？",
                "prompt_en": "Mercury's year lasts about:",
                "choices": [
                  {"label_zh": "88 个地球日", "label_en": "88 Earth days", "glyph": "📅"},
                  {"label_zh": "365 天", "label_en": "365 days", "glyph": "❌"},
                  {"label_zh": "12 年", "label_en": "12 years", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "水星公转快、轨道短，一年仅 88 个地球日。",
                "explain_en": "A short orbit, a speedy year."
              },
              {
                "id": "sol-b3-01-q4",
                "based_on": "teach[3]",
                "prompt_zh": "水星的「一天」和「一年」相比？",
                "prompt_en": "Compared with its year, Mercury's solar day is:",
                "choices": [
                  {"label_zh": "更长，一天超过两个水星年", "label_en": "Longer — over two Mercurian years", "glyph": "✅"},
                  {"label_zh": "短得多", "label_en": "Much shorter", "glyph": "❌"},
                  {"label_zh": "完全相同", "label_en": "Exactly equal", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "太阳日长达 176 个地球日，比一年还长。",
                "explain_en": "One solar day spans 176 Earth days."
              },
              {
                "id": "sol-b3-01-q5",
                "based_on": "teach[4]",
                "prompt_zh": "水星上的冰可能藏在？",
                "prompt_en": "Mercury's ice likely hides in:",
                "choices": [
                  {"label_zh": "极地深坑的永久阴影里", "label_en": "Permanently shadowed polar craters", "glyph": "🧊"},
                  {"label_zh": "赤道沙漠下", "label_en": "Under equatorial deserts", "glyph": "❌"},
                  {"label_zh": "云层里", "label_en": "In the clouds", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "极地深坑底部几十亿年晒不到阳光。",
                "explain_en": "Polar crater floors never see the Sun."
              },
              {
                "id": "sol-b3-01-q6",
                "based_on": "teach[4]",
                "prompt_zh": "水星没有四季，是因为？",
                "prompt_en": "Mercury has no seasons because:",
                "choices": [
                  {"label_zh": "自转轴几乎不倾斜", "label_en": "Its axis barely tilts", "glyph": "✅"},
                  {"label_zh": "离太阳太远", "label_en": "It's too far from the Sun", "glyph": "❌"},
                  {"label_zh": "被大气包裹", "label_en": "It's wrapped in thick air", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "轴不倾斜，两极从不朝向或远离太阳。",
                "explain_en": "No tilt means the poles never tip sunward."
              }
            ]
          }
        },
        {
          "left": -42,
          "lesson": {
            "id": "sol-b3-02-venus",
            "title_zh": "金星",
            "title_en": "Venus",
            "subtitle_zh": "被温室效应毁掉的姐妹",
            "subtitle_en": "A twin lost to greenhouse gases",
            "icon": "🌫️",
            "xp": 30,
            "teach": [
              {
                "visual": "🔥",
                "title_zh": "最热的行星",
                "title_en": "The hottest planet",
                "body_zh": "虽然水星离太阳更近，但太阳系最热的行星是金星：表面约 465 摄氏度，热得能熔铅。浓重的烟雾锁住了太多热量，万物焦枯。",
                "body_en": "Mercury sits closer to the Sun, yet Venus is the hottest planet of all: about 465°C at the surface — hot enough to melt lead. Its thick haze hoards the heat."
              },
              {
                "visual": "🫧",
                "title_zh": "96% 都是二氧化碳",
                "title_en": "96% carbon dioxide",
                "body_zh": "金星大气 96% 是二氧化碳——正是让地球变暖的那种温室气体。阳光能进来，地面发出的红外线却出不去，像裹了棉被一样越捂越热。",
                "body_en": "Venus's air is 96% carbon dioxide — the very greenhouse gas warming Earth. Sunlight enters, but outgoing infrared is trapped, like a blanket that never comes off."
              },
              {
                "visual": "🔄",
                "title_zh": "失控的恶性循环",
                "title_en": "A runaway spiral",
                "body_zh": "金星曾经历过「失控的温室效应」：温度升高、水蒸发，水汽又加剧温室、温度更高……古代海洋就这样被彻底蒸发，永远离开了这颗星球。",
                "body_en": "Venus suffered a runaway greenhouse: heat evaporated its seas, the steam trapped more heat, and so on — until the oceans left the planet forever."
              },
              {
                "visual": "🔄",
                "title_zh": "还在倒着转",
                "title_en": "And it spins backwards",
                "body_zh": "金星自转慢得出奇：转一圈要 243 个地球日，比它一年还长；而且是逆向自转——若能透过云层看太阳，会看到太阳西升东落。",
                "body_en": "Venus spins sluggishly — 243 Earth days per rotation, longer than its year — and backwards. Through the clouds, you'd watch the Sun rise in the west."
              }
            ],
            "questions": [
              {
                "id": "sol-b3-02-q1",
                "based_on": "teach[1]",
                "prompt_zh": "太阳系最热的行星是？",
                "prompt_en": "The hottest planet in the solar system is:",
                "choices": [
                  {"label_zh": "金星", "label_en": "Venus", "glyph": "🌫️"},
                  {"label_zh": "水星", "label_en": "Mercury", "glyph": "❌"},
                  {"label_zh": "木星", "label_en": "Jupiter", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "金星表面约 465 度，比更靠太阳的水星还热。",
                "explain_en": "Venus out-hotter Mercury despite the longer commute."
              },
              {
                "id": "sol-b3-02-q2",
                "based_on": "teach[2]",
                "prompt_zh": "金星大气的主要成分是？",
                "prompt_en": "Venus's atmosphere is mostly:",
                "choices": [
                  {"label_zh": "二氧化碳", "label_en": "Carbon dioxide", "glyph": "🫧"},
                  {"label_zh": "氧气", "label_en": "Oxygen", "glyph": "❌"},
                  {"label_zh": "纯净氮气", "label_en": "Pure nitrogen", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "96% 是二氧化碳，典型的温室气体。",
                "explain_en": "96% CO₂ — a greenhouse gas heavyweight."
              },
              {
                "id": "sol-b3-02-q3",
                "based_on": "teach[2]",
                "prompt_zh": "温室效应让金星变热的机制是？",
                "prompt_en": "The greenhouse effect heats Venus by:",
                "choices": [
                  {"label_zh": "截留地面向外的红外辐射", "label_en": "Trapping outgoing infrared radiation", "glyph": "✅"},
                  {"label_zh": "让阳光更亮", "label_en": "Brightening the sunlight", "glyph": "❌"},
                  {"label_zh": "内部核反应", "label_en": "Internal nuclear reactions", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "阳光进得来、红外出不去，像裹了棉被。",
                "explain_en": "Light gets in; heat can't get out."
              },
              {
                "id": "sol-b3-02-q4",
                "based_on": "teach[3]",
                "prompt_zh": "「失控的温室效应」指的是？",
                "prompt_en": "'Runaway greenhouse effect' describes:",
                "choices": [
                  {"label_zh": "水蒸发加剧升温的恶性循环", "label_en": "A feedback spiral of evaporation and heating", "glyph": "🔄"},
                  {"label_zh": "火山突然爆发", "label_en": "A sudden volcanic blast", "glyph": "❌"},
                  {"label_zh": "行星偏离轨道", "label_en": "The planet drifting off course", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "升温—蒸发—更升温，海洋最终彻底消失。",
                "explain_en": "Heat, evaporate, repeat — until the seas are gone."
              },
              {
                "id": "sol-b3-02-q5",
                "based_on": "teach[3]",
                "prompt_zh": "金星的古代海洋如今？",
                "prompt_en": "Venus's ancient oceans today are:",
                "choices": [
                  {"label_zh": "已蒸发殆尽、永远失去", "label_en": "Evaporated and gone forever", "glyph": "💨"},
                  {"label_zh": "还在地表流动", "label_en": "Still flowing on the surface", "glyph": "❌"},
                  {"label_zh": "冻在两极", "label_en": "Frozen at the poles", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "水蒸发后进入大气并逐渐逃逸出星球。",
                "explain_en": "The seas boiled off and escaped to space."
              },
              {
                "id": "sol-b3-02-q6",
                "based_on": "teach[4]",
                "prompt_zh": "在金星表面看太阳（假设能穿透云层），它会？",
                "prompt_en": "On Venus's surface (clouds aside), the Sun would:",
                "choices": [
                  {"label_zh": "西升东落", "label_en": "Rise in the west, set in the east", "glyph": "🔄"},
                  {"label_zh": "东升西落", "label_en": "Rise in the east, set in the west", "glyph": "❌"},
                  {"label_zh": "永远不动", "label_en": "Never move", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "金星逆向自转，方向与其他多数行星相反。",
                "explain_en": "Venus spins backwards relative to most planets."
              }
            ]
          }
        },
        {
          "left": 50,
          "lesson": {
            "id": "sol-b4-01-jupiter",
            "title_zh": "木星",
            "title_en": "Jupiter",
            "subtitle_zh": "行星之王的风暴人生",
            "subtitle_en": "King of storms",
            "icon": "🌀",
            "xp": 30,
            "teach": [
              {
                "visual": "👑",
                "title_zh": "无可争议的行星之王",
                "title_en": "Undisputed king",
                "body_zh": "木星以远大于太阳系其余行星总和的质量施展着自然伟力。它的引力像一只巨手，深刻影响着小行星带、彗星，甚至替地球挡了不少「子弹」。",
                "body_en": "Jupiter wields more mass than all the other planets combined. Its gravity — a giant invisible hand — shepherds asteroids and comets, and shields Earth from many impacts."
              },
              {
                "visual": "🌪️",
                "title_zh": "大红斑：能装下地球的风暴",
                "title_en": "The Great Red Spot",
                "body_zh": "木星最著名的景点是大红斑——一场肆虐了数百年、宽约 1.5 万千米的巨型风暴，可以轻轻松松装下整个地球。地球上的飓风撑一个月就了不起了。",
                "body_en": "Its star attraction: the Great Red Spot, a storm hundreds of years old and wide enough to swallow Earth whole. Earth's hurricanes fade in weeks; this one spans centuries."
              },
              {
                "visual": "⚡",
                "title_zh": "自转最快的行星",
                "title_en": "Fastest spinner",
                "body_zh": "木星是自转最快的行星：赤道云顶一天只有约 10 小时。快速自转把大气甩成一条条彩色条纹，也造就了持续数十年的风暴和比地球强千倍的闪电。",
                "body_en": "Jupiter spins fastest of all: a cloud-top day near the equator lasts just 10 hours. The spin whips the air into banded stripes, mega-storms and lightning 1,000× Earth's."
              },
              {
                "visual": "🛡️",
                "title_zh": "超强的磁场护盾",
                "title_en": "A monstrous magnet",
                "body_zh": "木星磁场强度是地球的两万倍，磁层几乎延伸到土星轨道，一路辐射着它的卫星群。到访的飞船必须做好辐射防护，否则电子设备会被「烤糊」。",
                "body_en": "Jupiter's magnetic field is 20,000 times Earth's; its magnetosphere reaches toward Saturn, bathing the moons in radiation. Visiting spacecraft need serious shielding."
              }
            ],
            "questions": [
              {
                "id": "sol-b4-01-q1",
                "based_on": "teach[1]",
                "prompt_zh": "木星在行星中的地位是？",
                "prompt_en": "Jupiter's standing among planets:",
                "figure": "🌀",
                "choices": [
                  {"label_zh": "质量超过其余行星之和", "label_en": "More mass than all other planets combined", "glyph": "👑"},
                  {"label_zh": "最小最轻", "label_en": "Smallest and lightest", "glyph": "❌"},
                  {"label_zh": "和地球差不多", "label_en": "About Earth's size", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "木星质量远大于太阳系其余行星总和。",
                "explain_en": "It outweighs every other planet together."
              },
              {
                "id": "sol-b4-01-q2",
                "based_on": "teach[2]",
                "prompt_zh": "大红斑是什么？",
                "prompt_en": "The Great Red Spot is:",
                "choices": [
                  {"label_zh": "一场持续数百年的巨型风暴", "label_en": "A giant storm, centuries old", "glyph": "🌪️"},
                  {"label_zh": "一座红色火山", "label_en": "A red volcano", "glyph": "❌"},
                  {"label_zh": "一个大陨石坑", "label_en": "A big crater", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "它已肆虐数百年，宽到能装下整个地球。",
                "explain_en": "Centuries old and Earth-swallowingly wide."
              },
              {
                "id": "sol-b4-01-q3",
                "based_on": "teach[2]",
                "prompt_zh": "大红斑的「大」体现在？",
                "prompt_en": "The Great Red Spot's size means it could:",
                "choices": [
                  {"label_zh": "轻松装下整个地球", "label_en": "Swallow Earth whole", "glyph": "✅"},
                  {"label_zh": "装下一座城市", "label_en": "Hold a city", "glyph": "❌"},
                  {"label_zh": "只有一间房子大", "label_en": "Fit in a room", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "宽约 1.5 万千米，地球放进去绰绰有余。",
                "explain_en": "About 15,000 km wide — Earth fits easily."
              },
              {
                "id": "sol-b4-01-q4",
                "based_on": "teach[3]",
                "prompt_zh": "木星赤道云顶的一天约有多长？",
                "prompt_en": "A day on Jupiter's cloud tops lasts about:",
                "choices": [
                  {"label_zh": "10 小时", "label_en": "10 hours", "glyph": "⚡"},
                  {"label_zh": "24 小时", "label_en": "24 hours", "glyph": "❌"},
                  {"label_zh": "243 天", "label_en": "243 days", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "木星是自转最快的行星，一天约 10 小时。",
                "explain_en": "The fastest-spinning planet: ~10-hour days."
              },
              {
                "id": "sol-b4-01-q5",
                "based_on": "teach[3]",
                "prompt_zh": "木星彩色条纹的成因是？",
                "prompt_en": "Jupiter's colorful stripes come from:",
                "choices": [
                  {"label_zh": "快速自转把大气甩成带状", "label_en": "Fast spin stretching the air into bands", "glyph": "✅"},
                  {"label_zh": "有人涂的油漆", "label_en": "Painted on", "glyph": "❌"},
                  {"label_zh": "云层反射地球颜色", "label_en": "Reflections of Earth", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "快速自转把大气甩成一条条强劲急流。",
                "explain_en": "The spin stretches weather into jet streams."
              },
              {
                "id": "sol-b4-01-q6",
                "based_on": "teach[4]",
                "prompt_zh": "木星的磁场与地球相比？",
                "prompt_en": "Compared with Earth's, Jupiter's magnetic field is:",
                "choices": [
                  {"label_zh": "约两万倍强", "label_en": "About 20,000 times stronger", "glyph": "🛡️"},
                  {"label_zh": "几乎为零", "label_en": "Nearly zero", "glyph": "❌"},
                  {"label_zh": "一模一样", "label_en": "Identical", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "磁场两万倍于地球，磁层直达土星轨道方向。",
                "explain_en": "20,000× stronger, reaching toward Saturn."
              }
            ]
          }
        },
        {
          "left": -50,
          "lesson": {
            "id": "sol-b4-02-ice-giants",
            "title_zh": "冰巨星",
            "title_en": "The Ice Giants",
            "subtitle_zh": "躺着转的和狂风呼啸的",
            "subtitle_en": "One lies down, one howls",
            "icon": "💙",
            "xp": 30,
            "teach": [
              {
                "visual": "🛌",
                "title_zh": "躺着自转的天王星",
                "title_en": "Uranus rolls on its side",
                "body_zh": "天王星最出位的地方是自转轴倾角高达 98 度——相比其他行星，它几乎是躺着绕太阳打滚。原因至今成谜，很可能源于早期一次猛烈撞击。",
                "body_en": "Uranus tilts a wild 98 degrees — it essentially rolls around the Sun on its side. Why? A mystery, though likely a monstrous ancient collision."
              },
              {
                "visual": "⏳",
                "title_zh": "一个季节长达 21 年",
                "title_en": "Seasons that last 21 years",
                "body_zh": "因为躺着转，天王星的两极轮流对着太阳：一个极点的白昼可持续长达 15340 个地球日。它一年有 84 个地球年，每个季节 21 年——凛冬真的漫长。",
                "body_en": "With its sideways spin, Uranus's poles take turns facing the Sun — one pole's 'day' can last over 15,000 Earth days. Each of its 84-year seasons: 21 years."
              },
              {
                "visual": "💨",
                "title_zh": "海王星：风暴之王",
                "title_en": "Neptune: storm champion",
                "body_zh": "海王星离太阳 45 亿千米，寒冷多风，却藏着炽热的心。它拥有太阳系最猛的风——风速接近甚至超过超声速，还孕育出与地球差不多大的大暗斑。",
                "body_en": "Neptune, 4.5 billion km out, is frigid and ferociously windy. It hosts the solar system's fiercest winds — near supersonic — and dark spots as big as Earth."
              },
              {
                "visual": "🔵",
                "title_zh": "甲烷调出的蓝色",
                "title_en": "Blue by methane",
                "body_zh": "两颗冰巨星都呈蓝色：大气中的甲烷散射阳光的方式，让海王星深蓝、天王星蓝绿。海王星稍暖一点、更蓝一点，也常被认作「最蓝的行星」。",
                "body_en": "Both giants glow blue thanks to methane in their air scattering sunlight — Neptune deep blue, Uranus blue-green. Neptune runs a touch warmer and bluer."
              }
            ],
            "questions": [
              {
                "id": "sol-b4-02-q1",
                "based_on": "teach[1]",
                "prompt_zh": "天王星最奇特的特征是？",
                "prompt_en": "Uranus's oddest trait is:",
                "figure": "💙",
                "choices": [
                  {"label_zh": "自转轴倾角约 98 度", "label_en": "A ~98° axial tilt", "glyph": "🛌"},
                  {"label_zh": "表面全是火山", "label_en": "Covered in volcanoes", "glyph": "❌"},
                  {"label_zh": "它其实是恒星", "label_en": "It's actually a star", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "它几乎躺着绕太阳滚动，成因可能是古老撞击。",
                "explain_en": "It rolls on its side — likely from an ancient impact."
              },
              {
                "id": "sol-b4-02-q2",
                "based_on": "teach[2]",
                "prompt_zh": "天王星的一个季节大约持续？",
                "prompt_en": "One season on Uranus lasts about:",
                "choices": [
                  {"label_zh": "21 个地球年", "label_en": "21 Earth years", "glyph": "⏳"},
                  {"label_zh": "3 个月", "label_en": "3 months", "glyph": "❌"},
                  {"label_zh": "一个星期", "label_en": "A week", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "一年 84 个地球年，四季各占 21 年。",
                "explain_en": "An 84-year orbit splits into 21-year seasons."
              },
              {
                "id": "sol-b4-02-q3",
                "based_on": "teach[2]",
                "prompt_zh": "天王星「躺着转」带来的后果是？",
                "prompt_en": "Uranus's sideways spin causes:",
                "choices": [
                  {"label_zh": "两极轮流经历超长昼夜", "label_en": "Poles taking turns with day and night", "glyph": "✅"},
                  {"label_zh": "没有任何昼夜", "label_en": "No day or night at all", "glyph": "❌"},
                  {"label_zh": "昼夜永远各 12 小时", "label_en": "Eternal 12-hour days", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "一个极点的白昼可持续一万五千多个地球日。",
                "explain_en": "One pole's daylight can last 15,000+ Earth days."
              },
              {
                "id": "sol-b4-02-q4",
                "based_on": "teach[3]",
                "prompt_zh": "太阳系最猛烈的风在？",
                "prompt_en": "The solar system's fiercest winds blow on:",
                "choices": [
                  {"label_zh": "海王星", "label_en": "Neptune", "glyph": "💨"},
                  {"label_zh": "地球", "label_en": "Earth", "glyph": "❌"},
                  {"label_zh": "水星", "label_en": "Mercury", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "海王星风速接近甚至超过超声速。",
                "explain_en": "Neptune's winds flirt with supersonic speeds."
              },
              {
                "id": "sol-b4-02-q5",
                "based_on": "teach[3]",
                "prompt_zh": "海王星上的「大暗斑」是？",
                "prompt_en": "Neptune's 'Great Dark Spot' is:",
                "choices": [
                  {"label_zh": "与地球差不多大的风暴", "label_en": "An Earth-sized storm", "glyph": "🌀"},
                  {"label_zh": "一个黑洞", "label_en": "A black hole", "glyph": "❌"},
                  {"label_zh": "海面漩涡", "label_en": "An ocean whirlpool", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "它是海王星大气中与地球尺度相当的风暴。",
                "explain_en": "An atmospheric vortex the size of Earth."
              },
              {
                "id": "sol-b4-02-q6",
                "based_on": "teach[4]",
                "prompt_zh": "两颗冰巨星呈现蓝色，主要归功于？",
                "prompt_en": "The ice giants look blue thanks to:",
                "choices": [
                  {"label_zh": "大气中的甲烷", "label_en": "Methane in their atmospheres", "glyph": "🔵"},
                  {"label_zh": "蓝色的海洋", "label_en": "Blue oceans", "glyph": "❌"},
                  {"label_zh": "蓝色灯光秀", "label_en": "Neon lights", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "甲烷散射阳光，调出海王星的深蓝与天王星的蓝绿。",
                "explain_en": "Methane scatters sunlight into their blues."
              }
            ]
          }
        },
        {
          "left": 58,
          "lesson": {
            "id": "sol-b5-01-asteroid-belt",
            "title_zh": "小行星带",
            "title_en": "The Asteroid Belt",
            "subtitle_zh": "名不副实的「乱石阵」",
            "subtitle_en": "Crowded? Not really",
            "icon": "🪨",
            "xp": 30,
            "teach": [
              {
                "visual": "📍",
                "title_zh": "夹在火星和木星之间",
                "title_en": "Between Mars and Jupiter",
                "body_zh": "太阳系大部分小行星聚集成一条大致扁平的带状区域，位于火星和木星轨道之间。电影里飞船躲闪乱石的画面是夸张——真实的小行星带空旷得多。",
                "body_en": "Most asteroids live in a flat belt between Mars and Jupiter. Movie scenes of dodging rocks are pure drama — the real belt is astonishingly empty."
              },
              {
                "visual": "🫥",
                "title_zh": "其实没多少东西",
                "title_en": "Not much stuff after all",
                "body_zh": "小行星彼此相距遥远，闭着眼睛也能穿行其间。全部小行星加起来的质量还不到月球的 5%——而月球本身只有地球质量的 1% 左右。",
                "body_en": "Asteroids sit far apart; you could cross the belt with your eyes shut. All of them together weigh under 5% of the Moon — itself just 1% of Earth."
              },
              {
                "visual": "🌾",
                "title_zh": "谷神星独占三分之一",
                "title_en": "Ceres: one-third of the mass",
                "body_zh": "仅谷神星一颗就占了小行星带总质量的三分之一，是带内唯一的矮行星。它最初还被当成行星，发现者以罗马丰收女神为之命名——早餐麦片的词源。",
                "body_en": "Ceres alone holds a third of the belt's mass — its only dwarf planet. First mistaken for a planet, it's named for the harvest goddess behind 'cereal.'"
              },
              {
                "visual": "🛑",
                "title_zh": "木星：长不大的罪魁",
                "title_en": "Jupiter kept it small",
                "body_zh": "为什么小行星带没攒成一颗行星？因为近旁巨行星木星的引力不断干扰，阻止了小行星的进一步成长——它们是「没能出生的行星」的原料堆。",
                "body_en": "Why didn't the belt build a planet? Jupiter's ceaseless gravitational tugs kept the pieces from assembling — a planet's raw materials, forever unpacked."
              }
            ],
            "questions": [
              {
                "id": "sol-b5-01-q1",
                "based_on": "teach[1]",
                "prompt_zh": "小行星带位于哪两颗行星之间？",
                "prompt_en": "The asteroid belt lies between:",
                "figure": "🪨",
                "choices": [
                  {"label_zh": "火星和木星", "label_en": "Mars and Jupiter", "glyph": "📍"},
                  {"label_zh": "地球和火星", "label_en": "Earth and Mars", "glyph": "❌"},
                  {"label_zh": "木星和土星", "label_en": "Jupiter and Saturn", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "大部分小行星聚集在火星与木星轨道之间。",
                "explain_en": "Most asteroids gather between Mars and Jupiter."
              },
              {
                "id": "sol-b5-01-q2",
                "based_on": "teach[2]",
                "prompt_zh": "真实的小行星带？",
                "prompt_en": "The real asteroid belt is:",
                "choices": [
                  {"label_zh": "非常空旷，天体相距遥远", "label_en": "Very empty, with widely spaced rocks", "glyph": "🫥"},
                  {"label_zh": "密集到飞船要不停躲闪", "label_en": "Packed with rocks to dodge", "glyph": "❌"},
                  {"label_zh": "完全堵住去路", "label_en": "A solid wall", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "小行星彼此相距遥远，闭眼也能穿行。",
                "explain_en": "Sparse enough to cross blindfolded."
              },
              {
                "id": "sol-b5-01-q3",
                "based_on": "teach[2]",
                "prompt_zh": "全部小行星的总质量大约是？",
                "prompt_en": "All asteroids together weigh about:",
                "choices": [
                  {"label_zh": "不到月球的 5%", "label_en": "Under 5% of the Moon", "glyph": "✅"},
                  {"label_zh": "比地球还大", "label_en": "More than Earth", "glyph": "❌"},
                  {"label_zh": "等于木星", "label_en": "Equal to Jupiter", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "总质量不到月球的 5%，实在微不足道。",
                "explain_en": "Under 5% of the Moon — a rounding error."
              },
              {
                "id": "sol-b5-01-q4",
                "based_on": "teach[3]",
                "prompt_zh": "谷神星在小行星带中的地位是？",
                "prompt_en": "Ceres's place in the belt:",
                "choices": [
                  {"label_zh": "独占三分之一质量的唯一矮行星", "label_en": "The sole dwarf planet, a third of the belt's mass", "glyph": "🌾"},
                  {"label_zh": "一颗普通小行星", "label_en": "An ordinary asteroid", "glyph": "❌"},
                  {"label_zh": "木星的卫星", "label_en": "A moon of Jupiter", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "它占带内总质量三分之一，是唯一的矮行星。",
                "explain_en": "One object, one-third of the mass."
              },
              {
                "id": "sol-b5-01-q5",
                "based_on": "teach[4]",
                "prompt_zh": "小行星带没能形成行星，主要因为？",
                "prompt_en": "The belt never formed a planet mainly because:",
                "choices": [
                  {"label_zh": "木星引力持续干扰", "label_en": "Jupiter's gravity kept stirring", "glyph": "🛑"},
                  {"label_zh": "太阳风把它们吹散", "label_en": "Solar wind blew them apart", "glyph": "❌"},
                  {"label_zh": "它们自己不愿意", "label_en": "They chose not to", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "木星引力干扰阻止了小行星进一步成长。",
                "explain_en": "Jupiter's tugs blocked the assembly."
              },
              {
                "id": "sol-b5-01-q6",
                "based_on": "teach[3]",
                "prompt_zh": "谷神星的名字来自？",
                "prompt_en": "Ceres is named after:",
                "choices": [
                  {"label_zh": "罗马丰收女神", "label_en": "The Roman harvest goddess", "glyph": "🌾"},
                  {"label_zh": "一位现代宇航员", "label_en": "A modern astronaut", "glyph": "❌"},
                  {"label_zh": "希腊海神", "label_en": "The Greek sea god", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "英语「麦片 cereal」的词源正是这位女神。",
                "explain_en": "The same goddess behind the word 'cereal.'"
              }
            ]
          }
        },
        {
          "left": -58,
          "lesson": {
            "id": "sol-b5-02-kuiper-oort",
            "title_zh": "柯伊伯带与奥尔特云",
            "title_en": "Kuiper Belt & Oort Cloud",
            "subtitle_zh": "彗星的两大老家",
            "subtitle_en": "Where comets come from",
            "icon": "❄️",
            "xp": 35,
            "teach": [
              {
                "visual": "🧣",
                "title_zh": "海王星外的冰环",
                "title_en": "An icy ring past Neptune",
                "body_zh": "柯伊伯带是海王星轨道外一条布满冰冷小天体的环带，宽度相当于太阳到海王星的距离。冥王星就住在这里——它是带内最大的天体之一。",
                "body_en": "Beyond Neptune, the Kuiper Belt is a vast ring of icy leftovers, as wide as the Sun-to-Neptune gap. Pluto lives here — one of its largest residents."
              },
              {
                "visual": "🧊",
                "title_zh": "太阳系的冷藏库",
                "title_en": "The solar system's freezer",
                "body_zh": "柯伊伯带保存着太阳系形成时期的冰冻残余物。因为没有大行星打扰，多数天体的轨道能安稳地维持几十亿年——但也偶有「离家出走」闯进内太阳系的。",
                "body_en": "The belt stores frozen relics from the solar system's birth. Undisturbed by giant planets, most orbits have held steady for billions of years — though a few escapees head sunward."
              },
              {
                "visual": "🎈",
                "title_zh": "奥尔特云：包裹太阳的球壳",
                "title_en": "The Oort Cloud: a shell around all",
                "body_zh": "更远处还有奥尔特云——一个球状的巨大彗星库，一直延伸到离最近恒星一半路程的位置。它是长周期彗星的老家，那些彗星绕一圈比人的寿命长得多。",
                "body_en": "Far beyond lies the Oort Cloud, a vast spherical comet reservoir stretching halfway to the nearest star — home of long-period comets that orbit slower than lifetimes."
              },
              {
                "visual": "🧭",
                "title_zh": "来路不同的两群彗星",
                "title_en": "Two comet families",
                "body_zh": "柯伊伯带彗星大致沿行星轨道平面进入内太阳系；奥尔特云彗星却可能从任何角度、任何方向杀进来。1990 年代最亮的两颗彗星，都来自奥尔特云。",
                "body_en": "Kuiper Belt comets dive in roughly along the planets' plane; Oort Cloud comets can arrive from any angle or direction. The two brightest of the 1990s both came from the Oort."
              }
            ],
            "questions": [
              {
                "id": "sol-b5-02-q1",
                "based_on": "teach[1]",
                "prompt_zh": "柯伊伯带位于？",
                "prompt_en": "The Kuiper Belt lies:",
                "figure": "❄️",
                "choices": [
                  {"label_zh": "海王星轨道之外", "label_en": "Beyond Neptune's orbit", "glyph": "🧣"},
                  {"label_zh": "火星与木星之间", "label_en": "Between Mars and Jupiter", "glyph": "❌"},
                  {"label_zh": "太阳系正中央", "label_en": "At the Sun's core", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "它从海王星轨道外开始，冥王星也在其中。",
                "explain_en": "It starts past Neptune; Pluto lives there."
              },
              {
                "id": "sol-b5-02-q2",
                "based_on": "teach[1]",
                "prompt_zh": "下列哪颗天体属于柯伊伯带？",
                "prompt_en": "Which of these belongs to the Kuiper Belt?",
                "choices": [
                  {"label_zh": "冥王星", "label_en": "Pluto", "glyph": "❤️"},
                  {"label_zh": "月球", "label_en": "The Moon", "glyph": "❌"},
                  {"label_zh": "木卫三", "label_en": "Ganymede", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "冥王星是柯伊伯带最大的天体之一。",
                "explain_en": "Pluto is among the belt's largest members."
              },
              {
                "id": "sol-b5-02-q3",
                "based_on": "teach[2]",
                "prompt_zh": "柯伊伯带保存的是什么？",
                "prompt_en": "The Kuiper Belt preserves:",
                "choices": [
                  {"label_zh": "太阳系形成时的冰冻残余物", "label_en": "Frozen leftovers from the system's birth", "glyph": "🧊"},
                  {"label_zh": "地球泄漏的垃圾", "label_en": "Earth's leaked trash", "glyph": "❌"},
                  {"label_zh": "外星飞船", "label_en": "Alien spaceships", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "这些冰冻小天体是行星形成时期的残余。",
                "explain_en": "Icy relics from the era of planet-building."
              },
              {
                "id": "sol-b5-02-q4",
                "based_on": "teach[3]",
                "prompt_zh": "奥尔特云的形状是？",
                "prompt_en": "The Oort Cloud is shaped like:",
                "choices": [
                  {"label_zh": "包裹太阳系的球壳", "label_en": "A sphere enveloping the solar system", "glyph": "🎈"},
                  {"label_zh": "扁平的圆盘", "label_en": "A flat disk", "glyph": "❌"},
                  {"label_zh": "一条螺旋臂", "label_en": "A spiral arm", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "它是球状彗星库，延伸到离最近恒星半程。",
                "explain_en": "A spherical shell reaching halfway to the next star."
              },
              {
                "id": "sol-b5-02-q5",
                "based_on": "teach[3]",
                "prompt_zh": "奥尔特云是哪种彗星的来源？",
                "prompt_en": "The Oort Cloud is the source of:",
                "choices": [
                  {"label_zh": "长周期彗星", "label_en": "Long-period comets", "glyph": "☄️"},
                  {"label_zh": "所有行星", "label_en": "All the planets", "glyph": "❌"},
                  {"label_zh": "小行星带", "label_en": "The asteroid belt", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "那里的彗星公转周期远超人类寿命。",
                "explain_en": "Its comets take longer than a lifetime per lap."
              },
              {
                "id": "sol-b5-02-q6",
                "based_on": "teach[4]",
                "prompt_zh": "奥尔特云彗星进入内太阳系的方式是？",
                "prompt_en": "Oort Cloud comets enter the inner solar system:",
                "choices": [
                  {"label_zh": "可能来自任何角度和方向", "label_en": "From any angle, any direction", "glyph": "🧭"},
                  {"label_zh": "只能沿黄道面", "label_en": "Only along the planets' plane", "glyph": "❌"},
                  {"label_zh": "从不进来", "label_en": "They never come in", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "与柯伊伯带彗星不同，它们来路四面八方。",
                "explain_en": "Unlike Kuiper comets, they arrive from everywhere."
              }
            ]
          }
        },
        {
          "left": 66,
          "lesson": {
            "id": "sol-b6-01-exoplanet-hunt",
            "title_zh": "寻找系外行星",
            "title_en": "Hunting Exoplanets",
            "subtitle_zh": "看不见，就让它露马脚",
            "subtitle_en": "Invisible worlds, visible clues",
            "icon": "🔭",
            "xp": 35,
            "teach": [
              {
                "visual": "📉",
                "title_zh": "凌星：星光眨一下眼",
                "title_en": "Transit: a blink of starlight",
                "body_zh": "当行星从恒星面前经过，星光会变暗大约万分之一——开普勒太空望远镜正是靠盯着数十万颗恒星捕捉这种微妙变化，找到了成千上万颗系外行星。",
                "body_en": "A planet crossing its star dims it by about one part in 10,000. Kepler stared at hundreds of thousands of stars to catch those blinks — and bagged thousands of worlds."
              },
              {
                "visual": "💃",
                "title_zh": "恒星舞步泄密",
                "title_en": "The star's dance gives it away",
                "body_zh": "行星引力会拽着恒星小幅摆动。摆动让星光周期性红移蓝移，天文学家「观察恒星的舞步」，就能反推出行星的公转周期、距离和质量下限。",
                "body_en": "A planet's gravity tugs its star into a tiny wobble, shifting its light red and blue. Watching that dance reveals the planet's period, distance and minimum mass."
              },
              {
                "visual": "🥣",
                "title_zh": "宜居带：不冷不热刚刚好",
                "title_en": "The habitable zone: just right",
                "body_zh": "找生命先找液态水。离恒星太近水被蒸发（金星），太远冻成冰（火星），只有「金发姑娘区」温度刚好——恒星周围允许液态水存在的环带就叫宜居带。",
                "body_en": "Life-hunters chase liquid water: too close and it boils away (Venus), too far and it freezes (Mars). The 'Goldilocks' ring where water stays liquid is the habitable zone."
              },
              {
                "visual": "🌊",
                "title_zh": "宜居带之外也有惊喜",
                "title_en": "Life beyond the zone",
                "body_zh": "宜居带不是唯一答案：木卫二就在宜居带外，冰壳下却藏着全球性液态海洋——热量来自木星潮汐的反复揉搓。找生命，别忘了看卫星。",
                "body_en": "The zone isn't the whole story: Europa sits outside it, yet hides a global ocean under ice, warmed by Jupiter's tidal kneading. Moons count too."
              }
            ],
            "questions": [
              {
                "id": "sol-b6-01-q1",
                "based_on": "teach[1]",
                "prompt_zh": "凌星法寻找的信号是？",
                "prompt_en": "The transit method looks for:",
                "figure": "🔭",
                "choices": [
                  {"label_zh": "星光周期性的微弱变暗", "label_en": "Regular tiny dips in starlight", "glyph": "📉"},
                  {"label_zh": "恒星的闪烁", "label_en": "Stars twinkling", "glyph": "❌"},
                  {"label_zh": "行星发出的光", "label_en": "Light from the planet", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "行星挡光约万分之一，开普勒靠此捕捉行星。",
                "explain_en": "A 1-in-10,000 dimming betrays the planet."
              },
              {
                "id": "sol-b6-01-q2",
                "based_on": "teach[1]",
                "prompt_zh": "开普勒望远镜的观测策略是？",
                "prompt_en": "Kepler's strategy was to:",
                "choices": [
                  {"label_zh": "盯住数十万颗恒星找凌星", "label_en": "Stare at hundreds of thousands of stars", "glyph": "✅"},
                  {"label_zh": "只看最亮的一颗星", "label_en": "Watch only the brightest star", "glyph": "❌"},
                  {"label_zh": "拍行星特写照片", "label_en": "Photograph planets up close", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "它靠持续监视海量恒星捕捉微小的亮度变化。",
                "explain_en": "Mass monitoring caught the faint blinks."
              },
              {
                "id": "sol-b6-01-q3",
                "based_on": "teach[2]",
                "prompt_zh": "「恒星舞步」指的是？",
                "prompt_en": "The star's 'dance' refers to:",
                "choices": [
                  {"label_zh": "被行星引力拽出的小幅摆动", "label_en": "Its planet-induced wobble", "glyph": "💃"},
                  {"label_zh": "恒星的自我旋转", "label_en": "Its own rotation", "glyph": "❌"},
                  {"label_zh": "恒星间的相互绕转", "label_en": "Stars orbiting each other", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "行星引力让恒星摆动，谱线随之红移蓝移。",
                "explain_en": "Gravity tugs the star; its light shifts red and blue."
              },
              {
                "id": "sol-b6-01-q4",
                "based_on": "teach[2]",
                "prompt_zh": "通过恒星的舞步，天文学家能推算出？",
                "prompt_en": "From the star's dance, astronomers can deduce:",
                "choices": [
                  {"label_zh": "行星的周期、距离和质量下限", "label_en": "The planet's period, distance and minimum mass", "glyph": "✅"},
                  {"label_zh": "行星的颜色", "label_en": "The planet's color", "glyph": "❌"},
                  {"label_zh": "行星上的天气", "label_en": "Its weather", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "舞步周期对应公转周期，摆动幅度对应质量。",
                "explain_en": "The rhythm and amplitude encode period and mass."
              },
              {
                "id": "sol-b6-01-q5",
                "based_on": "teach[3]",
                "prompt_zh": "宜居带的判断标准是？",
                "prompt_en": "The habitable zone is defined by:",
                "choices": [
                  {"label_zh": "允许液态水存在", "label_en": "Allowing liquid water", "glyph": "🥣"},
                  {"label_zh": "离恒星最近", "label_en": "Being closest to the star", "glyph": "❌"},
                  {"label_zh": "有生命在生活", "label_en": "Already hosting life", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "不冷不热、液态水可存续的范围才是宜居带。",
                "explain_en": "Not too hot, not too cold — water stays liquid."
              },
              {
                "id": "sol-b6-01-q6",
                "based_on": "teach[4]",
                "prompt_zh": "木卫二位于宜居带外，冰下为何还有液态海洋？",
                "prompt_en": "Why does Europa hold liquid water despite being outside the zone?",
                "choices": [
                  {"label_zh": "木星潮汐反复揉搓产生热量", "label_en": "Jupiter's tides knead it warm", "glyph": "🌊"},
                  {"label_zh": "海底有阳光", "label_en": "Sunlight under the ice", "glyph": "❌"},
                  {"label_zh": "其实是空的", "label_en": "It doesn't — it's dry", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "潮汐形变持续加热，维持冰壳下的全球海洋。",
                "explain_en": "Tidal flexing keeps its buried ocean warm."
              }
            ]
          }
        }
      ]
    }
  ]
}
```
