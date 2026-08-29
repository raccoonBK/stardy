# 星旅 · frontier 轨道新增关卡（第 5 批 · 最终批）

本批 11 关，覆盖：黑洞深入（并合事件 / 潮汐瓦解 / 事件视界 / 时间膨胀）、活动星系核与类星体、伽马暴、系外行星探测三连（凌星 / 视向速度 / 宜居带）、天体生物学、早期宇宙与再电离。

去重说明：现有 frt-01（黑洞基础）、frt-02（EHT 成像）、frt-03（引力波基础）、frt-04（千新星）已覆盖入门角度，本批全部换深入视角，不重复入门概念。

## 关卡微节分配

| lesson id | 主题 | 微节 |
|---|---|---|
| frn-e1-02-merger-event | 黑洞并合事件 | E1② |
| frn-e1-03-tidal-disruption | 潮汐瓦解 | E1③ |
| frn-e1-04-event-horizon | 跨过事件视界 | E1④ |
| frn-e1-05-time-dilation | 引力时间膨胀 | E1⑤ |
| frn-e1-06-agn-quasar | 类星体与活动星系核 | E1⑥ |
| frn-e1-07-gamma-ray-burst | 伽马暴 | E1⑦ |
| frn-e2-01-transit | 凌星法 | E2① |
| frn-e2-02-radial-velocity | 视向速度法 | E2② |
| frn-e2-03-habitable-zone | 宜居带 | E2③ |
| frn-e3-01-astrobiology | 寻找地外生命 | E3① |
| frn-e4-01-reionization | 黑暗时代与再电离 | E4① |

## JSON 数据

```json
[
  {
    "chapter_zh": "第 5 章 · 前沿与交叉",
    "chapter_en": "Chapter 5 · Frontiers & crossings",
    "left": 0,
    "lesson": {
      "id": "frn-e1-02-merger-event",
      "title_zh": "黑洞并合事件",
      "title_en": "When Black Holes Merge",
      "subtitle_zh": "十三亿年前的一声轰鸣",
      "subtitle_en": "A rumble from 1.3 billion years ago",
      "icon": "💥",
      "xp": 40,
      "teach": [
        {
          "visual": "💫",
          "title_zh": "宇宙最强对撞机",
          "title_en": "The ultimate cosmic collider",
          "body_zh": "两个黑洞以每秒约250圈的速度互绕，越转越近，最终并合成一个更大的黑洞。",
          "body_en": "Two black holes whirl around each other 250 times per second, spiraling ever closer before merging into one."
        },
        {
          "visual": "📉",
          "title_zh": "三个太阳质量去哪了",
          "title_en": "Where did three Suns go?",
          "body_zh": "36与29倍太阳质量并合后只剩62倍，差额约3个太阳质量化作引力波辐射出去。",
          "body_en": "36 + 29 solar masses merged into 62 — about three Suns' worth of mass left as gravitational waves."
        },
        {
          "visual": "🎧",
          "title_zh": "爱因斯坦的百年回响",
          "title_en": "Einstein's century-old echo",
          "body_zh": "2015年LIGO首次直接探测到这次13亿光年外的并合，验证了百年前的广义相对论预言。",
          "body_en": "In 2015 LIGO caught this merger from 1.3 billion light-years away, confirming a century-old prediction."
        }
      ],
      "questions": [
        {
          "id": "frn-e1-02-q1",
          "prompt_zh": "黑洞并合损失的质量变成了什么？",
          "prompt_en": "What happened to the lost mass in a black hole merger?",
          "choices": [
            { "label_zh": "变成引力波辐射出去", "label_en": "It radiated away as gravitational waves" },
            { "label_zh": "凭空消失", "label_en": "It vanished into nothing" },
            { "label_zh": "变成明亮星光", "label_en": "It turned into bright starlight" }
          ],
          "correct_idx": 0,
          "explain_zh": "约3个太阳质量以引力波形式带走了能量。",
          "explain_en": "Three Suns' worth of energy escaped as ripples in spacetime."
        },
        {
          "id": "frn-e1-02-q2",
          "prompt_zh": "首次探测到的并合引力波传播了多久才到地球？",
          "prompt_en": "How long did the first detected merger waves travel to reach us?",
          "choices": [
            { "label_zh": "13年", "label_en": "13 years" },
            { "label_zh": "13亿年", "label_en": "1.3 billion years" },
            { "label_zh": "13分钟", "label_en": "13 minutes" }
          ],
          "correct_idx": 1,
          "explain_zh": "并合发生在13亿光年外，涟漪走了整整13亿年。",
          "explain_en": "The merger happened 1.3 billion light-years away — its ripples traveled 1.3 billion years."
        },
        {
          "id": "frn-e1-02-q3",
          "prompt_zh": "并合前两个黑洞互绕速度约为？",
          "prompt_en": "How fast did the pair orbit before merging?",
          "choices": [
            { "label_zh": "每秒250圈", "label_en": "250 laps per second" },
            { "label_zh": "每年250圈", "label_en": "250 laps per year" },
            { "label_zh": "每秒1圈", "label_en": "One lap per second" }
          ],
          "correct_idx": 0,
          "explain_zh": "临并合时互绕频率高达每秒约250转。",
          "explain_en": "Just before the plunge, the pair whirled about 250 times each second."
        }
      ]
    }
  },
  {
    "chapter_zh": "第 5 章 · 前沿与交叉",
    "chapter_en": "Chapter 5 · Frontiers & crossings",
    "left": 26,
    "lesson": {
      "id": "frn-e1-03-tidal-disruption",
      "title_zh": "潮汐瓦解",
      "title_en": "Tidal Disruption",
      "subtitle_zh": "被黑洞拉成面条的恒星",
      "subtitle_en": "A star stretched into noodles",
      "icon": "🍜",
      "xp": 35,
      "teach": [
        {
          "visual": "🔗",
          "title_zh": "引力差撕碎恒星",
          "title_en": "Gravity's difference shreds a star",
          "body_zh": "黑洞对恒星近端的引力远大于远端，巨大的潮汐差把恒星拉长、撕开。",
          "body_en": "The near side feels a far stronger pull than the far side, stretching and tearing the star apart."
        },
        {
          "visual": "🍜",
          "title_zh": "宇宙面条化",
          "title_en": "Cosmic spaghetti",
          "body_zh": "恒星被拉成细长物质流：一部分甩回太空，一部分旋入黑洞形成炽热吸积盘。",
          "body_en": "The star becomes a long stream — part flung away, part spiraling into a glowing accretion disk."
        },
        {
          "visual": "🧹",
          "title_zh": "黑洞不是吸尘器",
          "title_en": "Black holes aren't vacuum cleaners",
          "body_zh": "离视界够远时，黑洞引力与同质量普通星体无异；太阳换成黑洞，行星轨道照旧。",
          "body_en": "Far from the horizon a black hole pulls no harder than a star of equal mass — swap the Sun for one and orbits stay put."
        }
      ],
      "questions": [
        {
          "id": "frn-e1-03-q1",
          "prompt_zh": "潮汐瓦解的根源是？",
          "prompt_en": "What drives tidal disruption?",
          "choices": [
            { "label_zh": "近端与远端的引力差", "label_en": "The gravity difference between near and far sides" },
            { "label_zh": "黑洞的强磁场", "label_en": "The black hole's magnetic field" },
            { "label_zh": "恒星核聚变失控", "label_en": "Runaway fusion inside the star" }
          ],
          "correct_idx": 0,
          "explain_zh": "潮汐力就是同一物体两端受到的引力差。",
          "explain_en": "Tidal force is simply the difference in pull across an object."
        },
        {
          "id": "frn-e1-03-q2",
          "prompt_zh": "黑洞吸积盘发出的X射线来自哪里？",
          "prompt_en": "Where do a black hole disk's X-rays come from?",
          "choices": [
            { "label_zh": "视界外的炽热气体", "label_en": "Superhot gas outside the horizon" },
            { "label_zh": "黑洞奇点", "label_en": "The singularity" },
            { "label_zh": "视界内部", "label_en": "Inside the horizon" }
          ],
          "correct_idx": 0,
          "explain_zh": "气体落入前摩擦升温发光，位置在视界之外。",
          "explain_en": "Friction heats the infalling gas — it glows before crossing the horizon."
        },
        {
          "id": "frn-e1-03-q3",
          "prompt_zh": "把太阳换成同质量黑洞，地球会？",
          "prompt_en": "If the Sun became an equal-mass black hole, Earth would…",
          "choices": [
            { "label_zh": "轨道基本不变", "label_en": "Keep orbiting as usual" },
            { "label_zh": "立刻被吸进去", "label_en": "Be sucked right in" },
            { "label_zh": "被甩出太阳系", "label_en": "Be flung out of the solar system" }
          ],
          "correct_idx": 0,
          "explain_zh": "远处引力只看质量，太阳质量不变，轨道就不变。",
          "explain_en": "At a distance gravity depends only on mass — same mass, same orbit."
        }
      ]
    }
  },
  {
    "chapter_zh": "第 5 章 · 前沿与交叉",
    "chapter_en": "Chapter 5 · Frontiers & crossings",
    "left": -26,
    "lesson": {
      "id": "frn-e1-04-event-horizon",
      "title_zh": "跨过事件视界",
      "title_en": "Crossing the Horizon",
      "subtitle_zh": "有去无回的单程票",
      "subtitle_en": "A one-way ticket",
      "icon": "🚪",
      "xp": 40,
      "teach": [
        {
          "visual": "📏",
          "title_zh": "视界大小看质量",
          "title_en": "Horizon size follows mass",
          "body_zh": "史瓦西半径约为3千米乘以太阳质量的倍数：太阳变成黑洞也只有约3千米。",
          "body_en": "The Schwarzschild radius is about 3 km per solar mass — the Sun would squeeze into just 3 km."
        },
        {
          "visual": "🚪",
          "title_zh": "时空的单向门",
          "title_en": "A one-way door in spacetime",
          "body_zh": "视界不是实体表面而是边界：物质和光只进不出，里面的事外面永远看不到。",
          "body_en": "The horizon is a boundary, not a surface — things fall in, nothing signals out."
        },
        {
          "visual": "🎯",
          "title_zh": "尽头是奇点",
          "title_en": "The end is a singularity",
          "body_zh": "跨过视界后所有路径都指向中心的奇点，密度趋于无限，已知物理定律失效。",
          "body_en": "Past the horizon every path leads to the center, where density runs infinite and known physics breaks down."
        }
      ],
      "questions": [
        {
          "id": "frn-e1-04-q1",
          "prompt_zh": "太阳质量黑洞的史瓦西半径约是？",
          "prompt_en": "The Schwarzschild radius of a one-solar-mass black hole is about…",
          "choices": [
            { "label_zh": "3千米", "label_en": "3 km" },
            { "label_zh": "3万千米", "label_en": "30,000 km" },
            { "label_zh": "300万千米", "label_en": "3 million km" }
          ],
          "correct_idx": 0,
          "explain_zh": "史瓦西半径约等于3M千米，M是太阳质量的倍数。",
          "explain_en": "The radius is roughly 3 km times M, the mass in Suns."
        },
        {
          "id": "frn-e1-04-q2",
          "prompt_zh": "事件视界的本质是？",
          "prompt_en": "What is the event horizon, really?",
          "choices": [
            { "label_zh": "时空的单向边界", "label_en": "A one-way boundary of spacetime" },
            { "label_zh": "坚硬的物质外壳", "label_en": "A hard physical shell" },
            { "label_zh": "燃烧的火墙", "label_en": "A wall of fire" }
          ],
          "correct_idx": 0,
          "explain_zh": "它是几何边界而非实体，只许进不许出。",
          "explain_en": "It's pure geometry — things cross in, never out."
        },
        {
          "id": "frn-e1-04-q3",
          "prompt_zh": "掉进黑洞的物体最终会？",
          "prompt_en": "What ultimately happens to anything falling in?",
          "choices": [
            { "label_zh": "落向中心奇点", "label_en": "Fall to the central singularity" },
            { "label_zh": "从另一端喷出", "label_en": "Get shot out the other side" },
            { "label_zh": "永远悬在视界上", "label_en": "Hang on the horizon forever" }
          ],
          "correct_idx": 0,
          "explain_zh": "视界内所有方向都通向奇点，没有回头路。",
          "explain_en": "Inside, every direction points to the singularity — no way back."
        }
      ]
    }
  },
  {
    "chapter_zh": "第 5 章 · 前沿与交叉",
    "chapter_en": "Chapter 5 · Frontiers & crossings",
    "left": 34,
    "lesson": {
      "id": "frn-e1-05-time-dilation",
      "title_zh": "引力时间膨胀",
      "title_en": "Gravitational Time Dilation",
      "subtitle_zh": "靠近黑洞，时钟变慢",
      "subtitle_en": "Clocks crawl near a black hole",
      "icon": "⏳",
      "xp": 40,
      "teach": [
        {
          "visual": "⏳",
          "title_zh": "引力越强钟越慢",
          "title_en": "Stronger gravity, slower clocks",
          "body_zh": "广义相对论说：引力场越强，时间流逝越慢，这是质量弯曲时空的直接后果。",
          "body_en": "General relativity: the stronger the gravity, the slower time ticks — mass curves spacetime itself."
        },
        {
          "visual": "🎬",
          "title_zh": "科幻背后的真物理",
          "title_en": "Real physics behind the sci-fi",
          "body_zh": "《星际穿越》里黑洞附近的几小时等于远方数十年，依据正是引力时间膨胀。",
          "body_en": "In Interstellar, hours near a black hole equal decades far away — pure gravitational time dilation."
        },
        {
          "visual": "🛰️",
          "title_zh": "卫星每天都要校准",
          "title_en": "Satellites fix it daily",
          "body_zh": "GPS卫星所处引力较弱，钟比地面略快；不做相对论校正，定位每天偏差数公里。",
          "body_en": "GPS clocks run faster in weaker gravity; skip the correction and positions drift kilometers a day."
        }
      ],
      "questions": [
        {
          "id": "frn-e1-05-q1",
          "prompt_zh": "在更强的引力场里，时钟会？",
          "prompt_en": "In a stronger gravitational field, a clock will…",
          "choices": [
            { "label_zh": "走得更慢", "label_en": "Run slower" },
            { "label_zh": "走得更快", "label_en": "Run faster" },
            { "label_zh": "完全不受影响", "label_en": "Stay unaffected" }
          ],
          "correct_idx": 0,
          "explain_zh": "引力越强时间越慢，这是时空弯曲的体现。",
          "explain_en": "Stronger gravity slows time — curved spacetime at work."
        },
        {
          "id": "frn-e1-05-q2",
          "prompt_zh": "GPS为什么需要相对论修正？",
          "prompt_en": "Why does GPS need relativistic corrections?",
          "choices": [
            { "label_zh": "卫星钟与地面钟快慢不同", "label_en": "Satellite clocks tick differently from ground clocks" },
            { "label_zh": "卫星飞得不够快", "label_en": "Satellites don't fly fast enough" },
            { "label_zh": "信号害怕雷雨", "label_en": "Signals fear thunderstorms" }
          ],
          "correct_idx": 0,
          "explain_zh": "轨道上引力更弱，卫星钟每天比地面快几十微秒，必须校正。",
          "explain_en": "Weaker gravity in orbit makes satellite clocks run fast; uncorrected, maps would drift."
        },
        {
          "id": "frn-e1-05-q3",
          "prompt_zh": "引力时间膨胀的物理根源是？",
          "prompt_en": "Gravitational time dilation stems from…",
          "choices": [
            { "label_zh": "质量弯曲了时空", "label_en": "Mass curving spacetime" },
            { "label_zh": "大气层的摩擦", "label_en": "Atmospheric friction" },
            { "label_zh": "地球的自转", "label_en": "Earth's rotation" }
          ],
          "correct_idx": 0,
          "explain_zh": "爱因斯坦指出：引力就是时空弯曲的表现。",
          "explain_en": "Einstein showed gravity is the shape of spacetime itself."
        }
      ]
    }
  },
  {
    "chapter_zh": "第 5 章 · 前沿与交叉",
    "chapter_en": "Chapter 5 · Frontiers & crossings",
    "left": -34,
    "lesson": {
      "id": "frn-e1-06-agn-quasar",
      "title_zh": "类星体",
      "title_en": "Quasars",
      "subtitle_zh": "比整个星系还亮的小点",
      "subtitle_en": "Dots outshining whole galaxies",
      "icon": "🔆",
      "xp": 40,
      "teach": [
        {
          "visual": "🕳️",
          "title_zh": "进食中的巨型黑洞",
          "title_en": "A giant black hole at dinner",
          "body_zh": "气体旋入超大质量黑洞，冲撞摩擦被加热到极高温，亮度可达太阳的几十亿倍。",
          "body_en": "Gas spiraling into a supermassive black hole heats up and shines billions of times brighter than the Sun."
        },
        {
          "visual": "📡",
          "title_zh": "被当成恒星的电波源",
          "title_en": "Mistaken for a star",
          "body_zh": "20世纪60年代它们在照片上像恒星，却猛发无线电波，得名「类恒星射电源」。",
          "body_en": "In the 1960s they looked stellar but blasted radio waves — 'quasi-stellar radio sources,' or quasars."
        },
        {
          "visual": "🔭",
          "title_zh": "星系的青春期",
          "title_en": "A galaxy's teenage phase",
          "body_zh": "类星体只有太阳系大小却比星系亮；「食物」吃完便熄灭，黑洞沉睡在星系中心。",
          "body_en": "Solar-system-sized yet outshining galaxies, quasars dim once the black hole's fuel runs out."
        }
      ],
      "questions": [
        {
          "id": "frn-e1-06-q1",
          "prompt_zh": "类星体的巨大能量来自？",
          "prompt_en": "A quasar's enormous power comes from…",
          "choices": [
            { "label_zh": "物质落入超大质量黑洞", "label_en": "Matter falling into a supermassive black hole" },
            { "label_zh": "普通恒星核聚变", "label_en": "Fusion in ordinary stars" },
            { "label_zh": "中子星快速自转", "label_en": "Rapidly spinning neutron stars" }
          ],
          "correct_idx": 0,
          "explain_zh": "坠向黑洞的气体互相摩擦升温，释放海量辐射。",
          "explain_en": "Infalling gas collides, heats and radiates ferociously."
        },
        {
          "id": "frn-e1-06-q2",
          "prompt_zh": "「类星体」这个名字的由来是？",
          "prompt_en": "How did quasars get their name?",
          "choices": [
            { "label_zh": "看似恒星又猛发无线电波", "label_en": "They look like stars but blast radio waves" },
            { "label_zh": "形状长得像星星", "label_en": "They are shaped like stars" },
            { "label_zh": "移动方式像行星", "label_en": "They wander like planets" }
          ],
          "correct_idx": 0,
          "explain_zh": "全称「类恒星射电源」，后来简称类星体。",
          "explain_en": "Short for 'quasi-stellar radio source.'"
        },
        {
          "id": "frn-e1-06-q3",
          "prompt_zh": "类星体最终为什么会熄灭？",
          "prompt_en": "Why do quasars eventually fade?",
          "choices": [
            { "label_zh": "周围的气体燃料被吃光", "label_en": "They run out of surrounding gas to feed on" },
            { "label_zh": "黑洞质量消失了", "label_en": "The black hole loses mass" },
            { "label_zh": "距离越来越远", "label_en": "They drift too far away" }
          ],
          "correct_idx": 0,
          "explain_zh": "黑洞吞完势力范围的气体后，类星体便熄灭沉睡。",
          "explain_en": "Once the fuel is devoured, the quasar goes dark and the black hole sleeps."
        }
      ]
    }
  },
  {
    "chapter_zh": "第 5 章 · 前沿与交叉",
    "chapter_en": "Chapter 5 · Frontiers & crossings",
    "left": 42,
    "lesson": {
      "id": "frn-e1-07-gamma-ray-burst",
      "title_zh": "伽马暴",
      "title_en": "Gamma-Ray Bursts",
      "subtitle_zh": "宇宙最亮的爆炸",
      "subtitle_en": "The brightest blasts in the universe",
      "icon": "⚡",
      "xp": 40,
      "teach": [
        {
          "visual": "⚡",
          "title_zh": "几秒胜过太阳一生",
          "title_en": "A lifetime of sunshine in seconds",
          "body_zh": "伽马暴是宇宙最猛烈的爆炸之一，几秒内释放的能量可超过太阳一生的总和。",
          "body_en": "Gamma-ray bursts are among the universe's most violent blasts, outshining the Sun's whole life in seconds."
        },
        {
          "visual": "💥",
          "title_zh": "巨星坍缩的临终闪光",
          "title_en": "A giant's dying flash",
          "body_zh": "长伽马暴来自超大质量恒星坍缩成黑洞的瞬间，物质以近光速喷出成束。",
          "body_en": "Long bursts mark a massive star collapsing into a black hole, hurling near-light-speed jets."
        },
        {
          "visual": "🌊",
          "title_zh": "与引力波同行",
          "title_en": "Traveling with gravitational waves",
          "body_zh": "短伽马暴常伴随中子星并合出现，与引力波几乎同时到达，见证同一场爆炸。",
          "body_en": "Short bursts often ride along with neutron-star mergers, arriving with the gravitational waves."
        }
      ],
      "questions": [
        {
          "id": "frn-e1-07-q1",
          "prompt_zh": "长伽马暴最可能来自？",
          "prompt_en": "Long gamma-ray bursts most likely come from…",
          "choices": [
            { "label_zh": "大质量恒星坍缩", "label_en": "Collapsing massive stars" },
            { "label_zh": "白矮星慢慢冷却", "label_en": "Cooling white dwarfs" },
            { "label_zh": "行星相互碰撞", "label_en": "Colliding planets" }
          ],
          "correct_idx": 0,
          "explain_zh": "恒星核心坍成黑洞，两极喷出近光速的物质束。",
          "explain_en": "The core collapses and twin near-light-speed jets blast from the poles."
        },
        {
          "id": "frn-e1-07-q2",
          "prompt_zh": "短伽马暴常与什么同时出现？",
          "prompt_en": "Short bursts often coincide with…",
          "choices": [
            { "label_zh": "中子星并合的引力波", "label_en": "Gravitational waves from neutron-star mergers" },
            { "label_zh": "日全食", "label_en": "Solar eclipses" },
            { "label_zh": "极光爆发", "label_en": "Aurora storms" }
          ],
          "correct_idx": 0,
          "explain_zh": "两信使几乎同时到地球，互相印证同一场并合。",
          "explain_en": "The two messengers arrive nearly together, confirming the same merger."
        },
        {
          "id": "frn-e1-07-q3",
          "prompt_zh": "伽马暴的能量有多夸张？",
          "prompt_en": "How extreme is a gamma-ray burst's energy?",
          "choices": [
            { "label_zh": "几秒内可超太阳一生总量", "label_en": "It can exceed the Sun's lifetime output in seconds" },
            { "label_zh": "相当于一颗鞭炮", "label_en": "About one firecracker" },
            { "label_zh": "只够点亮一盏灯", "label_en": "Barely enough for a lamp" }
          ],
          "correct_idx": 0,
          "explain_zh": "它是已知宇宙中最剧烈的爆炸之一。",
          "explain_en": "Among the most violent explosions the universe has to offer."
        }
      ]
    }
  },
  {
    "chapter_zh": "第 5 章 · 前沿与交叉",
    "chapter_en": "Chapter 5 · Frontiers & crossings",
    "left": -42,
    "lesson": {
      "id": "frn-e2-01-transit",
      "title_zh": "凌星法",
      "title_en": "The Transit Method",
      "subtitle_zh": "捕捉星光的小小眨眼",
      "subtitle_en": "Catching a star's tiny blink",
      "icon": "💡",
      "xp": 35,
      "teach": [
        {
          "visual": "🌑",
          "title_zh": "星光眨了一下眼",
          "title_en": "The star blinked",
          "body_zh": "行星从恒星前面经过会挡住一点星光，规律重复的微小变暗暴露行星的存在。",
          "body_en": "A planet crossing its star blocks a sliver of light — a repeating tiny dip betrays its presence."
        },
        {
          "visual": "🔭",
          "title_zh": "开普勒的丰收",
          "title_en": "Kepler's harvest",
          "body_zh": "开普勒太空望远镜紧盯一片天区，用凌星法找到数千颗系外行星和上百个多行星系统。",
          "body_en": "Staring at one patch of sky, Kepler found thousands of exoplanets and hundreds of multi-planet systems."
        },
        {
          "visual": "🌍",
          "title_zh": "外星人也能这样找到地球",
          "title_en": "Aliens could find us this way",
          "body_zh": "地球凌日只遮挡太阳约万分之一的光，视线合适的外星文明同样能发现我们。",
          "body_en": "Earth dims the Sun by a mere 1/10,000 — a well-placed civilization could spot us the same way."
        }
      ],
      "questions": [
        {
          "id": "frn-e2-01-q1",
          "prompt_zh": "凌星法寻找的信号是？",
          "prompt_en": "What signal does the transit method look for?",
          "choices": [
            { "label_zh": "星光规律性变暗", "label_en": "Regular dips in starlight" },
            { "label_zh": "恒星颜色变红", "label_en": "Stars turning red" },
            { "label_zh": "无线电脉冲", "label_en": "Radio pulses" }
          ],
          "correct_idx": 0,
          "explain_zh": "行星挡光是周期性的，亮度曲线会留下规律的凹口。",
          "explain_en": "A blocking planet carves a periodic notch in the light curve."
        },
        {
          "id": "frn-e2-01-q2",
          "prompt_zh": "开普勒望远镜的核心方法是？",
          "prompt_en": "Kepler's core technique was…",
          "choices": [
            { "label_zh": "凌星法", "label_en": "The transit method" },
            { "label_zh": "直接给行星拍照", "label_en": "Direct imaging" },
            { "label_zh": "视向速度法", "label_en": "The wobble method" }
          ],
          "correct_idx": 0,
          "explain_zh": "它监测恒星光度的周期性微降，收获数千颗行星。",
          "explain_en": "It watched for tiny repeating dips — and bagged thousands of planets."
        },
        {
          "id": "frn-e2-01-q3",
          "prompt_zh": "地球经过太阳前面，会遮挡约多少太阳光？",
          "prompt_en": "Earth transiting the Sun blocks about…",
          "choices": [
            { "label_zh": "万分之一", "label_en": "One ten-thousandth" },
            { "label_zh": "百分之一", "label_en": "One percent" },
            { "label_zh": "十分之一", "label_en": "One tenth" }
          ],
          "correct_idx": 0,
          "explain_zh": "地球太小，只挡住太阳总光度的万分之一。",
          "explain_en": "Tiny Earth dims the Sun by just 1/10,000 of its light."
        }
      ]
    }
  },
  {
    "chapter_zh": "第 5 章 · 前沿与交叉",
    "chapter_en": "Chapter 5 · Frontiers & crossings",
    "left": 50,
    "lesson": {
      "id": "frn-e2-02-radial-velocity",
      "title_zh": "视向速度法",
      "title_en": "The Wobble Method",
      "subtitle_zh": "恒星的舞步泄了密",
      "subtitle_en": "A star's dance gives it away",
      "icon": "💃",
      "xp": 35,
      "teach": [
        {
          "visual": "💃",
          "title_zh": "恒星也在跳舞",
          "title_en": "The star dances too",
          "body_zh": "行星并非绕恒星中心转，两者绕共同质心；行星牵引恒星做小幅规律晃动。",
          "body_en": "Planets and stars both orbit their shared center of mass — the planet tugs its star into a tiny wobble."
        },
        {
          "visual": "🌈",
          "title_zh": "多普勒效应泄密",
          "title_en": "Doppler spills the secret",
          "body_zh": "晃动让恒星光谱周期性红移蓝移，精确测量摆动就能推算行星质量与周期。",
          "body_en": "The wobble shifts the star's spectrum red and blue; measure the swing to weigh the planet."
        },
        {
          "visual": "🪐",
          "title_zh": "先抓到的都是热木星",
          "title_en": "Hot Jupiters got caught first",
          "body_zh": "离星近的大行星晃动最明显；1995年发现的首颗系外行星就是几天一圈的热木星。",
          "body_en": "Big close-in planets wobble hardest — the first exoplanet found, in 1995, was a hot Jupiter."
        }
      ],
      "questions": [
        {
          "id": "frn-e2-02-q1",
          "prompt_zh": "视向速度法依据什么发现行星？",
          "prompt_en": "The wobble method finds planets via…",
          "choices": [
            { "label_zh": "恒星光谱周期性红蓝移", "label_en": "Periodic red-blue shifts in the star's spectrum" },
            { "label_zh": "行星自身的颜色", "label_en": "The planet's own color" },
            { "label_zh": "恒星亮度骤变", "label_en": "Sudden changes in brightness" }
          ],
          "correct_idx": 0,
          "explain_zh": "恒星朝向晃动会让谱线来回多普勒偏移。",
          "explain_en": "The star's to-and-fro swings its spectral lines back and forth."
        },
        {
          "id": "frn-e2-02-q2",
          "prompt_zh": "为什么首批发现的都是热木星？",
          "prompt_en": "Why were the first finds all hot Jupiters?",
          "choices": [
            { "label_zh": "近距大行星信号最强", "label_en": "Big close-in planets give the strongest signal" },
            { "label_zh": "它们本身发光最亮", "label_en": "They glow brightest" },
            { "label_zh": "宇宙里只有这种行星", "label_en": "They're the only kind there is" }
          ],
          "correct_idx": 0,
          "explain_zh": "又近又重的行星把恒星晃得最明显，最容易先被看见。",
          "explain_en": "Heavy, close planets yank their stars hardest — easiest to catch."
        },
        {
          "id": "frn-e2-02-q3",
          "prompt_zh": "行星与恒星实际上绕什么转？",
          "prompt_en": "Planets and stars actually both orbit…",
          "choices": [
            { "label_zh": "它们的共同质心", "label_en": "Their shared center of mass" },
            { "label_zh": "恒星的几何中心", "label_en": "The star's exact center" },
            { "label_zh": "第三方天体", "label_en": "A third object" }
          ],
          "correct_idx": 0,
          "explain_zh": "像双人舞，两人都绕共同的平衡点旋转。",
          "explain_en": "Like a dance duo, both circle their common balance point."
        }
      ]
    }
  },
  {
    "chapter_zh": "第 5 章 · 前沿与交叉",
    "chapter_en": "Chapter 5 · Frontiers & crossings",
    "left": -50,
    "lesson": {
      "id": "frn-e2-03-habitable-zone",
      "title_zh": "宜居带",
      "title_en": "The Habitable Zone",
      "subtitle_zh": "不冷不热的金发姑娘区",
      "subtitle_en": "Not too hot, not too cold",
      "icon": "🌡️",
      "xp": 35,
      "teach": [
        {
          "visual": "🌡️",
          "title_zh": "液态水的黄金圈",
          "title_en": "The liquid-water ring",
          "body_zh": "宜居带是恒星周围允许水以液态存在的环带，内外边界分明。",
          "body_en": "The habitable zone is the shell around a star where water can stay liquid, with sharp inner and outer edges."
        },
        {
          "visual": "🌍",
          "title_zh": "地球恰好住对了地方",
          "title_en": "Earth got lucky",
          "body_zh": "地球形成于太阳的「金发姑娘区」：再近一点海洋被蒸发，再远一点全部冰封。",
          "body_en": "Earth formed in the Sun's Goldilocks region — closer and oceans boil, farther and they freeze."
        },
        {
          "visual": "🔢",
          "title_zh": "类地行星或成群",
          "title_en": "Earth cousins by the billions",
          "body_zh": "仅银河系估计就有多达400亿颗类地行星，宜居世界未必稀罕。",
          "body_en": "Our galaxy alone may hold up to 40 billion Earth-like planets — habitable worlds may be common."
        }
      ],
      "questions": [
        {
          "id": "frn-e2-03-q1",
          "prompt_zh": "宜居带的判断标准是？",
          "prompt_en": "The habitable zone is defined by…",
          "choices": [
            { "label_zh": "允许液态水存在", "label_en": "Allowing liquid water" },
            { "label_zh": "完全没有辐射", "label_en": "Zero radiation" },
            { "label_zh": "温度四季如春", "label_en": "Constant spring weather" }
          ],
          "correct_idx": 0,
          "explain_zh": "核心标准是溶剂（通常是水）能否保持液态。",
          "explain_en": "The key test: can a solvent — usually water — stay liquid?"
        },
        {
          "id": "frn-e2-03-q2",
          "prompt_zh": "行星太靠近恒星，海洋会？",
          "prompt_en": "Too close to its star, a planet's oceans would…",
          "choices": [
            { "label_zh": "被蒸发殆尽", "label_en": "Boil away" },
            { "label_zh": "结成厚冰", "label_en": "Freeze solid" },
            { "label_zh": "变成钻石", "label_en": "Turn to diamond" }
          ],
          "correct_idx": 0,
          "explain_zh": "太近过热蒸发，太远则冰封，宜居带刚好在中间。",
          "explain_en": "Too hot boils them, too cold freezes them — the zone sits in between."
        },
        {
          "id": "frn-e2-03-q3",
          "prompt_zh": "银河系中类地行星估计有多少？",
          "prompt_en": "How many Earth-like planets might the Milky Way hold?",
          "choices": [
            { "label_zh": "多达数百亿颗", "label_en": "Up to tens of billions" },
            { "label_zh": "不到十颗", "label_en": "Fewer than ten" },
            { "label_zh": "仅地球一颗", "label_en": "Only Earth" }
          ],
          "correct_idx": 0,
          "explain_zh": "按目前数据推测，仅银河系就可能有约400亿颗类地行星。",
          "explain_en": "Current estimates suggest up to 40 billion in our galaxy alone."
        }
      ]
    }
  },
  {
    "chapter_zh": "第 5 章 · 前沿与交叉",
    "chapter_en": "Chapter 5 · Frontiers & crossings",
    "left": 58,
    "lesson": {
      "id": "frn-e3-01-astrobiology",
      "title_zh": "寻找地外生命",
      "title_en": "The Search for Life",
      "subtitle_zh": "火星、冰卫星与外星大气",
      "subtitle_en": "Mars, icy moons and alien air",
      "icon": "🔬",
      "xp": 40,
      "teach": [
        {
          "visual": "🔬",
          "title_zh": "先搜太阳系后院",
          "title_en": "Search the backyard first",
          "body_zh": "火星、木卫二、土卫六最可能藏有液态水或液态溶剂，是寻找生命的首要目标。",
          "body_en": "Mars, Europa and Titan may hide liquid water or solvents — prime targets in the hunt for life."
        },
        {
          "visual": "🧬",
          "title_zh": "读大气的化学指纹",
          "title_en": "Read the air's chemistry",
          "body_zh": "氧气、甲烷这类气体是生物标记；外星文明分析地球大气也会看到我们的生命签名。",
          "body_en": "Gases like oxygen and methane are biosignatures — alien astronomers would see ours in Earth's air."
        },
        {
          "visual": "📻",
          "title_zh": "文明用电波举手",
          "title_en": "Technology raises its hand",
          "body_zh": "广播、雷达让地球在无线电波段成为「亮星」，是最显眼的技术文明指纹。",
          "body_en": "Broadcasts and radar make Earth shine in radio — the loudest sign of a technological species."
        }
      ],
      "questions": [
        {
          "id": "frn-e3-01-q1",
          "prompt_zh": "太阳系内寻找生命的热点不包括？",
          "prompt_en": "Which is NOT a top life-hunting target in our solar system?",
          "choices": [
            { "label_zh": "金星表面", "label_en": "Venus's surface" },
            { "label_zh": "木卫二", "label_en": "Europa" },
            { "label_zh": "土卫六", "label_en": "Titan" }
          ],
          "correct_idx": 0,
          "explain_zh": "热点是火星、木卫二与土卫六；金星表面过于酷热。",
          "explain_en": "The hot spots are Mars, Europa and Titan — Venus's surface is far too hot."
        },
        {
          "id": "frn-e3-01-q2",
          "prompt_zh": "为什么氧气可作为生物标记？",
          "prompt_en": "Why does oxygen count as a biosignature?",
          "choices": [
            { "label_zh": "地球的氧由生命持续制造", "label_en": "On Earth, life keeps producing it" },
            { "label_zh": "它极易自然积累", "label_en": "It builds up easily on its own" },
            { "label_zh": "所有行星大气都有", "label_en": "Every planet has it" }
          ],
          "correct_idx": 0,
          "explain_zh": "早期厌氧菌排泄出氧，逐渐把大气改造成富氧环境。",
          "explain_en": "Early microbes excreted oxygen, slowly terraforming the air."
        },
        {
          "id": "frn-e3-01-q3",
          "prompt_zh": "想找复杂生命，重点应投向？",
          "prompt_en": "To find complex life, we should mainly look…",
          "choices": [
            { "label_zh": "太阳系外的类地行星", "label_en": "At Earth-like planets beyond the solar system" },
            { "label_zh": "月球背阴处", "label_en": "The Moon's dark side" },
            { "label_zh": "小行星带", "label_en": "The asteroid belt" }
          ],
          "correct_idx": 0,
          "explain_zh": "共识是：复杂生命要到其他恒星的宜居行星上找。",
          "explain_en": "The consensus: complex life needs habitable worlds around other stars."
        }
      ]
    }
  },
  {
    "chapter_zh": "第 5 章 · 前沿与交叉",
    "chapter_en": "Chapter 5 · Frontiers & crossings",
    "left": -58,
    "lesson": {
      "id": "frn-e4-01-reionization",
      "title_zh": "黑暗时代与再电离",
      "title_en": "The Dark Ages & Reionization",
      "subtitle_zh": "第一批星光照亮宇宙",
      "subtitle_en": "When the first lights came on",
      "icon": "🌑",
      "xp": 45,
      "teach": [
        {
          "visual": "🌑",
          "title_zh": "没有星星的纪元",
          "title_en": "The starless era",
          "body_zh": "大爆炸后头几亿年是「黑暗时代」：中性氢弥漫宇宙，几乎不发光，线索稀少。",
          "body_en": "For hundreds of millions of years after the Big Bang, dark neutral hydrogen filled a lightless universe."
        },
        {
          "visual": "⭐",
          "title_zh": "第一缕光与再电离",
          "title_en": "First light and reionization",
          "body_zh": "引力聚拢气体，第一批恒星与星系点燃，强烈辐射把中性氢重新电离，宇宙变透明。",
          "body_en": "Gravity gathered the gas; the first stars and galaxies lit up, their radiation re-ionizing the hydrogen."
        },
        {
          "visual": "🌌",
          "title_zh": "种子早已埋下",
          "title_en": "The seeds were planted early",
          "body_zh": "早期宇宙的量子涨落留下十万分之一量级的密度差，正是今天所有星系的起点。",
          "body_en": "Quantum fluctuations left density ripples of one part in 100,000 — the seeds of every galaxy."
        }
      ],
      "questions": [
        {
          "id": "frn-e4-01-q1",
          "prompt_zh": "「黑暗时代」指的是？",
          "prompt_en": "The cosmic 'dark ages' were…",
          "choices": [
            { "label_zh": "第一批恒星诞生前的时期", "label_en": "The era before the first stars" },
            { "label_zh": "地球上的漫漫长夜", "label_en": "Nighttime on Earth" },
            { "label_zh": "黑洞遍布的时期", "label_en": "The age of black holes" }
          ],
          "correct_idx": 0,
          "explain_zh": "那时只有不发光的中性氢，没有恒星照亮宇宙。",
          "explain_en": "Only dark neutral hydrogen — no stars yet to light the cosmos."
        },
        {
          "id": "frn-e4-01-q2",
          "prompt_zh": "「再电离」是由谁完成的？",
          "prompt_en": "What caused 'reionization'?",
          "choices": [
            { "label_zh": "第一代恒星和星系的辐射", "label_en": "Radiation from the first stars and galaxies" },
            { "label_zh": "暗物质衰变", "label_en": "Decaying dark matter" },
            { "label_zh": "宇宙微波背景本身", "label_en": "The microwave background itself" }
          ],
          "correct_idx": 0,
          "explain_zh": "第一批恒星发出的强光把弥漫的中性氢重新电离。",
          "explain_en": "The first stars' fierce light stripped electrons from the hydrogen fog."
        },
        {
          "id": "frn-e4-01-q3",
          "prompt_zh": "星系结构的「种子」来自？",
          "prompt_en": "The 'seeds' of galaxy structure came from…",
          "choices": [
            { "label_zh": "早期宇宙的量子涨落", "label_en": "Quantum fluctuations in the early universe" },
            { "label_zh": "超新星连环爆炸", "label_en": "Chains of supernovae" },
            { "label_zh": "恒星的随机碰撞", "label_en": "Random stellar collisions" }
          ],
          "correct_idx": 0,
          "explain_zh": "十万分之一量级的密度涨落被引力逐级放大成星系。",
          "explain_en": "Density ripples of one part in 100,000 grew, via gravity, into galaxies."
        }
      ]
    }
  }
]
```

## 附：stars 批次 icon 修正补丁

`str-c2-03-giants-dwarfs` 的 `icon` 字段此前误写为文字「大象」，请替换为 emoji：

```json
{
  "op": "replace",
  "lesson_id": "str-c2-03-giants-dwarfs",
  "field": "icon",
  "old_value": "大象",
  "new_value": "🐘"
}
```
