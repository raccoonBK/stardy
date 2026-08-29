```json
{
  "tracks": [
    {
      "id": "stargazing",
      "name_zh": "抬头看夜空",
      "name_en": "Look Up Tonight",
      "tagline_zh": "从今晚头顶的星空开始",
      "tagline_en": "Start with tonight's sky",
      "icon": "🌌",
      "nodes": [
        {
          "chapter_zh": "第 4 章 · 时间、天球与四季",
          "chapter_en": "Chapter 4 · Time, the Sphere & Seasons",
          "left": 0,
          "lesson": {
            "id": "stg-a1-01-solar-day",
            "title_zh": "太阳日与恒星日",
            "title_en": "Solar Day vs Sidereal Day",
            "subtitle_zh": "一天到底有多长",
            "subtitle_en": "How long is a day, really?",
            "icon": "🌞",
            "xp": 20,
            "teach": [
              {
                "visual": "🌞",
                "title_zh": "两种「一天」不一样长",
                "title_en": "Two different days",
                "body_zh": "地球相对远处恒星转一圈约 23 小时 56 分，叫恒星日。但我们生活跟着太阳算，太阳日约 24 小时——因为地球同时在公转。",
                "body_en": "Earth spins once every 23h 56m — that's a sidereal day. But our day follows the Sun, and Earth's orbit adds about 4 minutes, so a solar day is 24 hours."
              },
              {
                "visual": "🔄",
                "title_zh": "公转多出来的那一点点",
                "title_en": "The little extra from orbit",
                "body_zh": "地球自转一圈的同时还沿轨道前进了一段，太阳在天上挪了约 1°。要让太阳回到头顶，地球得多转约 4 分钟。",
                "body_en": "While Earth spins, it also moves along its orbit. The Sun shifts ~1° in the sky, so Earth must spin a bit more — about 4 extra minutes — to put the Sun overhead again."
              },
              {
                "visual": "🌟",
                "title_zh": "星星每天提前 4 分钟升起",
                "title_en": "Stars rise 4 min earlier each night",
                "body_zh": "星空是按恒星日算的，比太阳日短。所以同一颗星每晚会比前一晚提前约 4 分钟升起——一年下来整整提前一整天。",
                "body_en": "The stars follow the shorter sidereal day. So the same star rises ~4 minutes earlier each night, adding up to a whole day over a year."
              },
              {
                "visual": "💡",
                "title_zh": "闰年其实跟这个有关",
                "title_en": "Why we have leap years",
                "body_zh": "我们用阳历（太阳日）过日子，但地球绕太阳一圈其实有 365.24 个太阳日。差出来的 0.24 天每 4 年攒出一天，这就是闰年的由来。",
                "body_en": "We live by solar days, but Earth orbits the Sun in 365.24 solar days. The leftover 0.24 day adds up every 4 years — that's why we have a leap year."
              }
            ],
            "questions": [
              {
                "id": "stg-a1-01-q1",
                "based_on": "teach[1]",
                "prompt_zh": "恒星日和太阳日哪个更短？",
                "prompt_en": "Which is shorter — a solar day or a sidereal day?",
                "figure": "🌞",
                "choices": [
                  {"label_zh": "恒星日更短", "label_en": "The sidereal day", "glyph": "1️⃣"},
                  {"label_zh": "太阳日更短", "label_en": "The solar day", "glyph": "2️⃣"},
                  {"label_zh": "一样长", "label_en": "They're the same", "glyph": "3️⃣"}
                ],
                "correct_idx": 0,
                "explain_zh": "恒星日约 23 小时 56 分，比 24 小时的太阳日短约 4 分钟。",
                "explain_en": "Sidereal day = 23h 56m; solar day = 24h. The star day is about 4 minutes shorter."
              },
              {
                "id": "stg-a1-01-q2",
                "based_on": "teach[2]",
                "prompt_zh": "太阳日比恒星日长 4 分钟，主要是因为？",
                "prompt_en": "Why is the solar day ~4 minutes longer than the sidereal day?",
                "choices": [
                  {"label_zh": "地球在公转", "label_en": "Earth orbits the Sun", "glyph": "🌍"},
                  {"label_zh": "太阳在自转", "label_en": "The Sun rotates", "glyph": "☀️"},
                  {"label_zh": "月亮有引力", "label_en": "The Moon's gravity", "glyph": "🌙"}
                ],
                "correct_idx": 0,
                "explain_zh": "地球一边自转一边公转，所以需要多转一点才能让太阳回到头顶。",
                "explain_en": "Earth's orbit means it must spin a little extra to bring the Sun overhead again."
              },
              {
                "id": "stg-a1-01-q3",
                "based_on": "teach[3]",
                "prompt_zh": "同一颗星星，每晚会比前一晚？",
                "prompt_en": "A given star rises each night:",
                "choices": [
                  {"label_zh": "提前约 4 分钟", "label_en": "~4 min earlier", "glyph": "⏩"},
                  {"label_zh": "推迟约 4 分钟", "label_en": "~4 min later", "glyph": "⏪"},
                  {"label_zh": "同一时间", "label_en": "At the same time", "glyph": "⏸️"}
                ],
                "correct_idx": 0,
                "explain_zh": "星空按恒星日运转，每天比太阳日提前约 4 分钟。",
                "explain_en": "The sky follows the shorter sidereal day, so it rises ~4 minutes earlier each night."
              },
              {
                "id": "stg-a1-01-q4",
                "based_on": "teach[3]",
                "prompt_zh": "一年下来，星空整体大约会提前？",
                "prompt_en": "Over a year, the night sky shifts earlier by about:",
                "choices": [
                  {"label_zh": "一整天", "label_en": "A whole day", "glyph": "📅"},
                  {"label_zh": "一小时", "label_en": "An hour", "glyph": "🕐"},
                  {"label_zh": "一秒钟", "label_en": "A second", "glyph": "⚡"}
                ],
                "correct_idx": 0,
                "explain_zh": "每天提前 4 分钟 × 365 天 ≈ 一整天。",
                "explain_en": "4 min × 365 = about one full day over a year."
              },
              {
                "id": "stg-a1-01-q5",
                "based_on": "teach[4]",
                "prompt_zh": "为什么会有闰年？",
                "prompt_en": "Why do we have a leap year?",
                "choices": [
                  {"label_zh": "地球绕日一圈不是整数天", "label_en": "Earth's orbit isn't an integer number of days", "glyph": "✅"},
                  {"label_zh": "月亮有周期变化", "label_en": "The Moon's cycle varies", "glyph": "❌"},
                  {"label_zh": "太阳会变化", "label_en": "The Sun changes", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "地球公转一圈约 365.24 天，每年差 0.24 天，每 4 年凑成 1 天。",
                "explain_en": "Earth orbits in ~365.24 days; the 0.24 day adds up to a leap day every 4 years."
              },
              {
                "id": "stg-a1-01-q6",
                "based_on": "teach[4]",
                "prompt_zh": "我们日常生活用的是什么「日」？",
                "prompt_en": "Which kind of day do we use in daily life?",
                "choices": [
                  {"label_zh": "太阳日", "label_en": "The solar day", "glyph": "🌞"},
                  {"label_zh": "恒星日", "label_en": "The sidereal day", "glyph": "🌠"},
                  {"label_zh": "两个都用", "label_en": "Both, equally", "glyph": "🔀"}
                ],
                "correct_idx": 0,
                "explain_zh": "钟表、上下班、日历都以太阳日为准（24 小时）。",
                "explain_en": "Clocks, calendars and commutes all run on the 24-hour solar day."
              }
            ]
          }
        },
        {
          "left": 26,
          "lesson": {
            "id": "stg-a1-02-timezones",
            "title_zh": "时区与地方时",
            "title_en": "Time Zones & Local Time",
            "subtitle_zh": "谁先看到日出",
            "subtitle_en": "Who sees the sunrise first?",
            "icon": "🕐",
            "xp": 20,
            "teach": [
              {
                "visual": "🌅",
                "title_zh": "地方时：各自的正午",
                "title_en": "Local time, local noon",
                "body_zh": "太阳升到一天中最高点的时刻，就是当地的「正午」。地球自西向东自转，东边的人总是先迎来日出——每个经度都有自己的地方时。",
                "body_en": "Local noon is when the Sun peaks in your sky. Earth spins west to east, so eastern spots always see sunrise first — every longitude has its own local time."
              },
              {
                "visual": "🌍",
                "title_zh": "全球划成 24 个时区",
                "title_en": "Twenty-four slices",
                "body_zh": "地方时太乱：相邻两城能差几分钟，火车时刻表没法排。于是全球按经度每 15° 划一个时区，全区共用一个区时。北京在东八区，比伦敦快 8 小时。",
                "body_en": "Local times would wreck train schedules. So Earth is sliced into 24 zones, one every 15° of longitude, each sharing one clock. Beijing sits in UTC+8 — eight hours ahead of London."
              },
              {
                "visual": "✈️",
                "title_zh": "国际日期变更线",
                "title_en": "The Date Line",
                "body_zh": "太平洋上 180° 经线附近有一条国际日期变更线。向西跨过要加一天，向东跨过要减一天。环球旅行绕出的日期账，全靠这条线结清。",
                "body_en": "Near the 180° meridian in the Pacific runs the International Date Line. Cross it westward and you gain a day; cross eastward and you lose one."
              },
              {
                "visual": "🛰️",
                "title_zh": "天文学家都爱 UTC",
                "title_en": "Astronomers love UTC",
                "body_zh": "天文台遍布全球，若各用各的时间，观测记录会乱套。所以天文事件统一用世界时 UTC 记录：流星雨极大、彗星过近日点，都按 UTC 发布。",
                "body_en": "Observatories worldwide log events on one shared clock, UTC. Meteor-shower maxima and comet passages are all published that way."
              }
            ],
            "questions": [
              {
                "id": "stg-a1-02-q1",
                "based_on": "teach[1]",
                "prompt_zh": "地方时的「正午」指的是？",
                "prompt_en": "Local noon is the moment when:",
                "figure": "🌅",
                "choices": [
                  {"label_zh": "太阳升到一天中最高的时刻", "label_en": "The Sun peaks in the sky", "glyph": "1️⃣"},
                  {"label_zh": "太阳从地平线升起的一刻", "label_en": "The Sun rises", "glyph": "2️⃣"},
                  {"label_zh": "时钟恰好指到 12 点", "label_en": "The clock strikes 12", "glyph": "3️⃣"}
                ],
                "correct_idx": 0,
                "explain_zh": "地方时按太阳位置定，正午即太阳中天时刻。",
                "explain_en": "Local time follows the Sun; noon is its daily peak."
              },
              {
                "id": "stg-a1-02-q2",
                "based_on": "teach[1]",
                "prompt_zh": "东边和西边的两座城市，谁先看到日出？",
                "prompt_en": "Which city sees sunrise first — the eastern one or the western one?",
                "choices": [
                  {"label_zh": "东边的城市", "label_en": "The eastern city", "glyph": "➡️"},
                  {"label_zh": "西边的城市", "label_en": "The western city", "glyph": "⬅️"},
                  {"label_zh": "同时看到", "label_en": "Both at once", "glyph": "🤝"}
                ],
                "correct_idx": 0,
                "explain_zh": "地球自西向东自转，东边总先迎来日出。",
                "explain_en": "Earth spins west to east, so the east is lit first."
              },
              {
                "id": "stg-a1-02-q3",
                "based_on": "teach[2]",
                "prompt_zh": "全球划分时区的依据是？",
                "prompt_en": "Time zones are divided by:",
                "choices": [
                  {"label_zh": "经度每 15° 一个区", "label_en": "15° of longitude each", "glyph": "✅"},
                  {"label_zh": "纬度每 15° 一个区", "label_en": "15° of latitude each", "glyph": "❌"},
                  {"label_zh": "按国家边界划分", "label_en": "National borders", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "每个时区约跨 15° 经度，全球共 24 个区。",
                "explain_en": "One zone per 15° of longitude, 24 zones in all."
              },
              {
                "id": "stg-a1-02-q4",
                "based_on": "teach[2]",
                "prompt_zh": "北京（东八区）比伦敦快几个小时？",
                "prompt_en": "How many hours ahead of London is Beijing (UTC+8)?",
                "choices": [
                  {"label_zh": "8 小时", "label_en": "8 hours", "glyph": "🕗"},
                  {"label_zh": "1 小时", "label_en": "1 hour", "glyph": "1️⃣"},
                  {"label_zh": "24 小时", "label_en": "24 hours", "glyph": "2️⃣"}
                ],
                "correct_idx": 0,
                "explain_zh": "东八区区时比 0 时区的伦敦快 8 小时。",
                "explain_en": "UTC+8 runs eight hours ahead of London's UTC+0."
              },
              {
                "id": "stg-a1-02-q5",
                "based_on": "teach[3]",
                "prompt_zh": "向东跨越国际日期变更线，日期要？",
                "prompt_en": "Crossing the Date Line eastward, you must:",
                "choices": [
                  {"label_zh": "减一天", "label_en": "Lose a day", "glyph": "⬅️"},
                  {"label_zh": "加一天", "label_en": "Gain a day", "glyph": "➡️"},
                  {"label_zh": "保持不变", "label_en": "Keep the same date", "glyph": "🔄"}
                ],
                "correct_idx": 0,
                "explain_zh": "向东跨线减一天，向西跨线加一天。",
                "explain_en": "East across the line, minus a day; west across, plus one."
              },
              {
                "id": "stg-a1-02-q6",
                "based_on": "teach[4]",
                "prompt_zh": "天文事件（如流星雨极大）的时刻通常用什么时间发布？",
                "prompt_en": "Astronomical event times are usually published in:",
                "choices": [
                  {"label_zh": "UTC 世界时", "label_en": "UTC", "glyph": "🛰️"},
                  {"label_zh": "北京时间", "label_en": "Beijing time only", "glyph": "🇨🇳"},
                  {"label_zh": "当地日出时刻", "label_en": "Local sunrise time", "glyph": "🌅"}
                ],
                "correct_idx": 0,
                "explain_zh": "全球天文台统一用 UTC 记录和发布事件。",
                "explain_en": "Observatories worldwide share the UTC clock."
              }
            ]
          }
        },
        {
          "left": -26,
          "lesson": {
            "id": "stg-a2-01-celestial-sphere",
            "title_zh": "天球：天空的大外壳",
            "title_en": "The Celestial Sphere",
            "subtitle_zh": "天空其实是个球",
            "subtitle_en": "The sky is a sphere — sort of",
            "icon": "🏀",
            "xp": 20,
            "teach": [
              {
                "visual": "🏐",
                "title_zh": "把天空想成一个球壳",
                "title_en": "Picture a giant shell",
                "body_zh": "想象一个包住整个地球的巨大透明球面，把所有星星都「贴」在内表面上——这个假想的球就叫天球，是给天空定位的舞台。",
                "body_en": "Picture a huge transparent shell wrapping Earth, with every star glued to its inner surface. That imaginary shell is the celestial sphere."
              },
              {
                "visual": "📌",
                "title_zh": "星星并不真的贴在上面",
                "title_en": "It's only a projection",
                "body_zh": "天球只是投影：星星远近相差极大，有的几光年、有的几千光年，但都远到看不出深浅，看起来像钉在同一层天花板上。",
                "body_en": "Stars range from a few to thousands of light-years away, yet all lie so far that we can't sense their depth — they seem pinned to one ceiling."
              },
              {
                "visual": "🔄",
                "title_zh": "天球每天转一圈",
                "title_en": "The sphere wheels daily",
                "body_zh": "我们感觉不到地球自转，看到的是整个天球绕着一根轴缓缓旋转，星星东升西落。这根轴指向哪里，决定了各地能看到的星空。",
                "body_en": "We never feel Earth spin; instead the whole sphere seems to wheel overhead, stars rising in the east. The axis's tilt decides your local sky."
              },
              {
                "visual": "💡",
                "title_zh": "老模型依然在服役",
                "title_en": "An old model still on duty",
                "body_zh": "几千年前人们就靠天球模型绘制星图、预报天象。今天的星图软件和望远镜控制系统，底层用的仍然是这套天球坐标。",
                "body_en": "Ancients used this model to chart stars and predict eclipses. Today's planetarium apps and telescopes still run on celestial-sphere coordinates."
              }
            ],
            "questions": [
              {
                "id": "stg-a2-01-q1",
                "based_on": "teach[1]",
                "prompt_zh": "天球指的是？",
                "prompt_en": "The celestial sphere is:",
                "choices": [
                  {"label_zh": "包住地球的假想球面", "label_en": "An imaginary shell around Earth", "glyph": "🏐"},
                  {"label_zh": "地球的大气层", "label_en": "Earth's atmosphere", "glyph": "☁️"},
                  {"label_zh": "银河系的银盘", "label_en": "The Milky Way's disk", "glyph": "🌌"}
                ],
                "correct_idx": 0,
                "explain_zh": "天球是把所有天体投影上去的假想球壳。",
                "explain_en": "It's the imaginary shell every object is projected onto."
              },
              {
                "id": "stg-a2-01-q2",
                "based_on": "teach[2]",
                "prompt_zh": "星星看起来都钉在同一层球面上，是因为？",
                "prompt_en": "Why do stars seem pinned to one surface?",
                "choices": [
                  {"label_zh": "它们都远到看不出远近", "label_en": "They're all too far to show depth", "glyph": "✅"},
                  {"label_zh": "它们距离真的相同", "label_en": "They really are equidistant", "glyph": "❌"},
                  {"label_zh": "它们排成了一个球壳", "label_en": "They physically form a shell", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "实际远近悬殊，只是远到分不出深浅。",
                "explain_en": "Distances vary wildly; they're just all too far to tell apart."
              },
              {
                "id": "stg-a2-01-q3",
                "based_on": "teach[3]",
                "prompt_zh": "我们看到星星东升西落，实际原因是？",
                "prompt_en": "Stars rise in the east and set in the west because:",
                "choices": [
                  {"label_zh": "地球在自转", "label_en": "Earth rotates", "glyph": "🌍"},
                  {"label_zh": "天球真的在转动", "label_en": "The sphere really spins", "glyph": "🌀"},
                  {"label_zh": "星星自己在移动", "label_en": "Stars drift on their own", "glyph": "💫"}
                ],
                "correct_idx": 0,
                "explain_zh": "天球的转动是地球自转的视觉投影。",
                "explain_en": "The sphere's spin is Earth's rotation, projected."
              },
              {
                "id": "stg-a2-01-q4",
                "based_on": "teach[3]",
                "prompt_zh": "旋转轴指向不同，会导致？",
                "prompt_en": "A differently pointed rotation axis would change:",
                "choices": [
                  {"label_zh": "各地看到的星空", "label_en": "Which sky each place sees", "glyph": "🗺️"},
                  {"label_zh": "星星的颜色", "label_en": "Star colors", "glyph": "🎨"},
                  {"label_zh": "星星的总数", "label_en": "The number of stars", "glyph": "🔢"}
                ],
                "correct_idx": 0,
                "explain_zh": "轴的指向决定你能看到哪些天区。",
                "explain_en": "The axis decides which slice of sky is yours."
              },
              {
                "id": "stg-a2-01-q5",
                "based_on": "teach[4]",
                "prompt_zh": "现代星图软件的底层坐标用的是？",
                "prompt_en": "Modern sky apps are built on:",
                "choices": [
                  {"label_zh": "天球坐标系", "label_en": "Celestial-sphere coordinates", "glyph": "📱"},
                  {"label_zh": "地球经纬度", "label_en": "Earth's latitude and longitude", "glyph": "🌐"},
                  {"label_zh": "邮政编码", "label_en": "Postal codes", "glyph": "📮"}
                ],
                "correct_idx": 0,
                "explain_zh": "天球模型至今仍是天文软件的底层逻辑。",
                "explain_en": "The ancient sphere still powers modern software."
              },
              {
                "id": "stg-a2-01-q6",
                "based_on": "teach[2]",
                "prompt_zh": "下列哪个说法正确？",
                "prompt_en": "Which statement is correct?",
                "choices": [
                  {"label_zh": "天球坐标只标方向，不标真实距离", "label_en": "Sky coordinates give direction, not distance", "glyph": "✅"},
                  {"label_zh": "天球上的星星可以互相碰撞", "label_en": "Stars on the sphere can collide", "glyph": "❌"},
                  {"label_zh": "天球是一层实体玻璃壳", "label_en": "It's a physical glass shell", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "天球是投影，坐标只回答「在哪个方向」。",
                "explain_en": "Projection only answers 'which way,' never 'how far.'"
              }
            ]
          }
        },
        {
          "left": 34,
          "lesson": {
            "id": "stg-a2-02-ra-dec",
            "title_zh": "赤经与赤纬",
            "title_en": "RA & Dec",
            "subtitle_zh": "每颗恒星的地址",
            "subtitle_en": "Every star has an address",
            "icon": "🗺️",
            "xp": 25,
            "teach": [
              {
                "visual": "🏠",
                "title_zh": "给星星编门牌号",
                "title_en": "A house number for stars",
                "body_zh": "地球上的位置用经纬度表示，天球上的位置也一样：赤纬相当于纬度，赤经相当于经度。两个数一报，就能锁定一颗星。",
                "body_en": "We locate places on Earth with latitude and longitude. The sky works the same way: declination is the latitude, right ascension the longitude."
              },
              {
                "visual": "📐",
                "title_zh": "赤纬：离天赤道多远",
                "title_en": "Declination: distance from the equator",
                "body_zh": "天赤道是地球赤道向天球的延伸，赤纬以它为 0°：向北到北天极为 +90°，向南到南天极为 -90°。北极星的赤纬就非常接近 +90°。",
                "body_en": "The celestial equator is Earth's equator projected skyward. Declination counts from it: +90° at the north celestial pole, -90° at the south."
              },
              {
                "visual": "⏳",
                "title_zh": "赤经：用时间计数",
                "title_en": "Right ascension: told in time",
                "body_zh": "赤经不用「度」，而用小时、分、秒：整个天球转一圈算 24 小时。所以一颗星的赤经读起来像时刻，比如织女星约在 18 时 39 分。",
                "body_en": "Right ascension is measured in hours, minutes and seconds — a full sky circle equals 24 hours. Vega sits near 18h 39m, reading like clock time."
              },
              {
                "visual": "💡",
                "title_zh": "望远镜靠地址找人",
                "title_en": "Telescopes follow addresses",
                "body_zh": "报出「赤经+赤纬」，世界上任何一台望远镜都能转向同一片天区。就像发一个定位坐标，导航立刻把所有人带到同一个路口。",
                "body_en": "Give any telescope an RA and Dec, and it swings to that exact patch of sky — like sharing a pin that guides everyone to the same spot."
              }
            ],
            "questions": [
              {
                "id": "stg-a2-02-q1",
                "based_on": "teach[1]",
                "prompt_zh": "赤纬相当于地球坐标里的？",
                "prompt_en": "Declination is the sky's version of:",
                "choices": [
                  {"label_zh": "纬度", "label_en": "Latitude", "glyph": "↕️"},
                  {"label_zh": "经度", "label_en": "Longitude", "glyph": "↔️"},
                  {"label_zh": "海拔", "label_en": "Altitude", "glyph": "⛰️"}
                ],
                "correct_idx": 0,
                "explain_zh": "赤纬对应纬度，赤经对应经度。",
                "explain_en": "Dec is latitude; RA is longitude."
              },
              {
                "id": "stg-a2-02-q2",
                "based_on": "teach[2]",
                "prompt_zh": "天赤道指的是？",
                "prompt_en": "The celestial equator is:",
                "choices": [
                  {"label_zh": "地球赤道向天球的延伸", "label_en": "Earth's equator projected on the sky", "glyph": "✅"},
                  {"label_zh": "太阳走的黄道", "label_en": "The Sun's path, the ecliptic", "glyph": "❌"},
                  {"label_zh": "银河的中线", "label_en": "The Milky Way's midline", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "天赤道就是地球赤道投影到天球上。",
                "explain_en": "It's Earth's equator, thrown onto the sphere."
              },
              {
                "id": "stg-a2-02-q3",
                "based_on": "teach[2]",
                "prompt_zh": "北极星的赤纬大约是？",
                "prompt_en": "Polaris's declination is roughly:",
                "choices": [
                  {"label_zh": "+90°", "label_en": "+90°", "glyph": "🧭"},
                  {"label_zh": "0°", "label_en": "0°", "glyph": "➖"},
                  {"label_zh": "-90°", "label_en": "-90°", "glyph": "🧭"}
                ],
                "correct_idx": 0,
                "explain_zh": "北极星几乎就在北天极，赤纬接近 +90°。",
                "explain_en": "It sits beside the north celestial pole, so nearly +90°."
              },
              {
                "id": "stg-a2-02-q4",
                "based_on": "teach[3]",
                "prompt_zh": "赤经用什么单位？",
                "prompt_en": "Right ascension is measured in:",
                "choices": [
                  {"label_zh": "小时、分、秒", "label_en": "Hours, minutes, seconds", "glyph": "⏳"},
                  {"label_zh": "米和千米", "label_en": "Meters and kilometers", "glyph": "📏"},
                  {"label_zh": "摄氏度", "label_en": "Degrees Celsius", "glyph": "🌡️"}
                ],
                "correct_idx": 0,
                "explain_zh": "赤经按时间计，全天一圈为 24 小时。",
                "explain_en": "RA runs on clock time: one lap, 24 hours."
              },
              {
                "id": "stg-a2-02-q5",
                "based_on": "teach[3]",
                "prompt_zh": "织女星的赤经约在？",
                "prompt_en": "Vega's right ascension is near:",
                "choices": [
                  {"label_zh": "18 时 39 分", "label_en": "18h 39m", "glyph": "✅"},
                  {"label_zh": "0 时 0 分", "label_en": "0h 0m", "glyph": "❌"},
                  {"label_zh": "23 时 59 分", "label_en": "23h 59m", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "教卡示例：织女星赤经约 18 时 39 分。",
                "explain_en": "As the card says: about 18h 39m."
              },
              {
                "id": "stg-a2-02-q6",
                "based_on": "teach[4]",
                "prompt_zh": "报出赤经和赤纬的作用是？",
                "prompt_en": "Sharing an RA and Dec lets you:",
                "choices": [
                  {"label_zh": "让任何望远镜对准同一片天区", "label_en": "Point any telescope to the same spot", "glyph": "🔭"},
                  {"label_zh": "算出星星的距离", "label_en": "Compute the star's distance", "glyph": "❌"},
                  {"label_zh": "改变星星的位置", "label_en": "Move the star", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "坐标是共享的地址，望远镜按它定位。",
                "explain_en": "It's a shared address; telescopes navigate by it."
              }
            ]
          }
        },
        {
          "left": -34,
          "lesson": {
            "id": "stg-a2-03-pole-polaris",
            "title_zh": "北天极与北极星",
            "title_en": "The Pole & Polaris",
            "subtitle_zh": "星空的旋转轴心",
            "subtitle_en": "The hub of the sky",
            "icon": "🧭",
            "xp": 25,
            "teach": [
              {
                "visual": "🎡",
                "title_zh": "星空绕着一个点转",
                "title_en": "The sky spins on a point",
                "body_zh": "把地轴向两端无限延伸，与天球相交的两点就是北天极和南天极。北半球的星星每夜都绕着北天极画同心圆，像一座旋转木马。",
                "body_en": "Extend Earth's axis into the sky and it pierces the sphere at two celestial poles. Northern stars circle the north pole nightly, like a carousel."
              },
              {
                "visual": "⭐",
                "title_zh": "北极星几乎不动",
                "title_en": "Polaris barely moves",
                "body_zh": "北极星恰好待在北天极旁边，整夜几乎不动。长曝光星轨照片里，别的星拉成一圈圈光弧，圆心正是它——认方向的天然路标。",
                "body_en": "Polaris happens to sit right by the pole and hardly stirs all night. In star-trail photos every other star smears into rings — around it."
              },
              {
                "visual": "🥣",
                "title_zh": "顺北斗勺口找它",
                "title_en": "Find it via the Dipper",
                "body_zh": "找北极星最经典的路：把北斗七星斗口外侧两颗星连线，向斗口方向延长约 5 倍距离，碰到的那颗亮星就是北极星。",
                "body_en": "The classic trick: connect the two stars on the bowl's outer edge, extend that line about five times its length — and you land on Polaris."
              },
              {
                "visual": "📏",
                "title_zh": "纬度＝北极星高度",
                "title_en": "Latitude = Polaris's height",
                "body_zh": "在北半球，北极星离地平线的高度角约等于当地纬度。北京约 40°，北极星就悬在地平线上约 40°；到赤道附近，它几乎贴着地平线。",
                "body_en": "In the Northern Hemisphere, Polaris's altitude above the horizon roughly equals your latitude — about 40° from Beijing, near zero at the equator."
              }
            ],
            "questions": [
              {
                "id": "stg-a2-03-q1",
                "based_on": "teach[1]",
                "prompt_zh": "北天极是怎么定义的？",
                "prompt_en": "The north celestial pole is defined as:",
                "choices": [
                  {"label_zh": "地轴延长线与天球的交点", "label_en": "Where Earth's axis meets the sky", "glyph": "🎡"},
                  {"label_zh": "全天最亮恒星所在处", "label_en": "Where the brightest star sits", "glyph": "💫"},
                  {"label_zh": "黄道与天赤道的交点", "label_en": "Where ecliptic meets equator", "glyph": "✖️"}
                ],
                "correct_idx": 0,
                "explain_zh": "地轴向外延伸，在天球上戳出的点就是天极。",
                "explain_en": "The axis, extended, pierces the sphere at the poles."
              },
              {
                "id": "stg-a2-03-q2",
                "based_on": "teach[2]",
                "prompt_zh": "星轨照片的圆心是哪颗星？",
                "prompt_en": "Which star sits at the center of star-trail photos?",
                "figure": "🌠",
                "choices": [
                  {"label_zh": "北极星", "label_en": "Polaris", "glyph": "⭐"},
                  {"label_zh": "天狼星", "label_en": "Sirius", "glyph": "🐺"},
                  {"label_zh": "织女星", "label_en": "Vega", "glyph": "🧶"}
                ],
                "correct_idx": 0,
                "explain_zh": "众星绕北天极转圈，北极星在圆心附近。",
                "explain_en": "All stars wheel around the pole; Polaris marks the hub."
              },
              {
                "id": "stg-a2-03-q3",
                "based_on": "teach[2]",
                "prompt_zh": "北极星整夜的位置变化是？",
                "prompt_en": "Over one night, Polaris:",
                "choices": [
                  {"label_zh": "几乎不动", "label_en": "Barely moves", "glyph": "🧷"},
                  {"label_zh": "匀速东升西落", "label_en": "Rises and sets like the Sun", "glyph": "🌅"},
                  {"label_zh": "随机漂移", "label_en": "Wanders randomly", "glyph": "🌀"}
                ],
                "correct_idx": 0,
                "explain_zh": "它就在北天极旁，是星空旋转的中心。",
                "explain_en": "It stands beside the pole — the pivot of the sky."
              },
              {
                "id": "stg-a2-03-q4",
                "based_on": "teach[3]",
                "prompt_zh": "用北斗找北极星的方法是？",
                "prompt_en": "To find Polaris with the Big Dipper, you:",
                "choices": [
                  {"label_zh": "斗口两星连线，延长约 5 倍", "label_en": "Extend the bowl's outer stars ~5×", "glyph": "🥣"},
                  {"label_zh": "沿斗柄弧线向外滑", "label_en": "Follow the handle's arc outward", "glyph": "🍦"},
                  {"label_zh": "直接找北斗最亮的一颗", "label_en": "Just take the Dipper's brightest star", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "经典口诀：勺口两星连线，延长五倍即到。",
                "explain_en": "Bowl-edge stars, five-fold extension, done."
              },
              {
                "id": "stg-a2-03-q5",
                "based_on": "teach[4]",
                "prompt_zh": "某地纬度 40°，北极星的高度约是？",
                "prompt_en": "At latitude 40° north, Polaris hangs about:",
                "choices": [
                  {"label_zh": "地平线上 40°", "label_en": "40° above the horizon", "glyph": "📐"},
                  {"label_zh": "天顶 90°", "label_en": "90°, at the zenith", "glyph": "🔝"},
                  {"label_zh": "地平线上 10°", "label_en": "10° above the horizon", "glyph": "⬇️"}
                ],
                "correct_idx": 0,
                "explain_zh": "北极星高度角约等于当地纬度。",
                "explain_en": "Polaris's altitude matches your latitude."
              },
              {
                "id": "stg-a2-03-q6",
                "based_on": "teach[4]",
                "prompt_zh": "在南半球能看到北极星吗？",
                "prompt_en": "Can you see Polaris from the Southern Hemisphere?",
                "choices": [
                  {"label_zh": "不能", "label_en": "No", "glyph": "🚫"},
                  {"label_zh": "能，而且更亮", "label_en": "Yes, and brighter", "glyph": "✨"},
                  {"label_zh": "只在夏夜能", "label_en": "Only on summer nights", "glyph": "🌙"}
                ],
                "correct_idx": 0,
                "explain_zh": "北极星在北天极附近，南半球看不到。",
                "explain_en": "It hugs the north pole, invisible from the south."
              }
            ]
          }
        },
        {
          "left": 42,
          "lesson": {
            "id": "stg-a3-01-spring-sky",
            "title_zh": "春季星空",
            "title_en": "The Spring Sky",
            "subtitle_zh": "狮子与大弹簧",
            "subtitle_en": "Lions and the great arc",
            "icon": "🌸",
            "xp": 25,
            "teach": [
              {
                "visual": "🌱",
                "title_zh": "春夜星空的模样",
                "title_en": "What spring nights look like",
                "body_zh": "3 到 5 月的夜晚，银河退到地平线边，星空显得清爽稀疏。主角换成高挂的狮子座，以及两颗亮星：橙色的大角和蓝白的角宿一。",
                "body_en": "From March to May the Milky Way hugs the horizon and the sky feels crisp. The main cast: Leo climbing high, orange Arcturus and blue-white Spica."
              },
              {
                "visual": "🦁",
                "title_zh": "狮子座：一把镰刀",
                "title_en": "Leo: the Sickle",
                "body_zh": "狮子座头部的几颗星连成反写的问号，像一把镰刀；尾巴末端是亮星轩辕十四。它恰好趴在黄道上，月亮和行星常来串门。",
                "body_en": "Leo's head forms a backwards question mark, the Sickle; bright Regulus marks the tail-tip. Leo lies on the ecliptic, so Moon and planets drop by."
              },
              {
                "visual": "🍦",
                "title_zh": "沿斗柄滑出大弧线",
                "title_en": "Arc off the Dipper's handle",
                "body_zh": "顺着北斗斗柄的弧线向外滑，先撞见橙色的大角星，继续延伸就到角宿一——这条引路弧线是春季认星的主干道。",
                "body_en": "Follow the arc of the Dipper's handle: first orange Arcturus, then on to Spica. Stargazers say 'arc to Arcturus, spike to Spica.'"
              },
              {
                "visual": "💡",
                "title_zh": "春季大三角",
                "title_en": "The Spring Triangle",
                "body_zh": "大角、角宿一再加上狮子座的五帝座一，组成春季大三角。春夜里先找到这个大三角，再往四周扩散，春天的星空就能串起来。",
                "body_en": "Arcturus, Spica and Denebola of Leo form the Spring Triangle. Find it first, and the rest of the spring sky unfolds around it."
              }
            ],
            "questions": [
              {
                "id": "stg-a3-01-q1",
                "based_on": "teach[1]",
                "prompt_zh": "春季夜晚银河的状态是？",
                "prompt_en": "In spring, the Milky Way is:",
                "choices": [
                  {"label_zh": "退到地平线附近", "label_en": "Hugging the horizon", "glyph": "🌾"},
                  {"label_zh": "横贯天顶最亮", "label_en": "Blazing overhead", "glyph": "❌"},
                  {"label_zh": "完全看不到任何星星", "label_en": "No stars at all", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "春夜银河贴近地平线，主角是亮星与星座。",
                "explain_en": "The river sinks low; bright stars take the stage."
              },
              {
                "id": "stg-a3-01-q2",
                "based_on": "teach[2]",
                "prompt_zh": "狮子座头部的形状像？",
                "prompt_en": "Leo's head looks like:",
                "choices": [
                  {"label_zh": "反写的问号（镰刀）", "label_en": "A backwards question mark", "glyph": "❓"},
                  {"label_zh": "一个大 W", "label_en": "A big W", "glyph": "❌"},
                  {"label_zh": "一个十字", "label_en": "A cross", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "镰刀形狮头是狮子座的标志。",
                "explain_en": "The Sickle outlines the lion's head."
              },
              {
                "id": "stg-a3-01-q3",
                "based_on": "teach[2]",
                "prompt_zh": "轩辕十四的特殊之处是？",
                "prompt_en": "What's special about Regulus?",
                "choices": [
                  {"label_zh": "正好位于黄道上", "label_en": "It sits on the ecliptic", "glyph": "✅"},
                  {"label_zh": "是全天最亮恒星", "label_en": "It's the brightest star", "glyph": "❌"},
                  {"label_zh": "是一颗行星", "label_en": "It's a planet", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "它在黄道上，月亮行星常从附近经过。",
                "explain_en": "On the ecliptic, it gets regular lunar visitors."
              },
              {
                "id": "stg-a3-01-q4",
                "based_on": "teach[3]",
                "prompt_zh": "沿北斗斗柄的弧线先遇到的是？",
                "prompt_en": "Following the Dipper's handle-arc, you first meet:",
                "choices": [
                  {"label_zh": "大角星", "label_en": "Arcturus", "glyph": "🟠"},
                  {"label_zh": "北极星", "label_en": "Polaris", "glyph": "❌"},
                  {"label_zh": "天狼星", "label_en": "Sirius", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "口诀：沿弧线先到大角，再延伸到角宿一。",
                "explain_en": "Arc to Arcturus first, then on to Spica."
              },
              {
                "id": "stg-a3-01-q5",
                "based_on": "teach[3]",
                "prompt_zh": "大角星的颜色是？",
                "prompt_en": "Arcturus glows:",
                "choices": [
                  {"label_zh": "橙色", "label_en": "Orange", "glyph": "🟠"},
                  {"label_zh": "蓝色", "label_en": "Blue", "glyph": "🔵"},
                  {"label_zh": "绿色", "label_en": "Green", "glyph": "🟢"}
                ],
                "correct_idx": 0,
                "explain_zh": "大角是春夜醒目的橙色亮星。",
                "explain_en": "A beacon of warm orange in spring."
              },
              {
                "id": "stg-a3-01-q6",
                "based_on": "teach[4]",
                "prompt_zh": "春季大三角不包括？",
                "prompt_en": "Which star is NOT in the Spring Triangle?",
                "choices": [
                  {"label_zh": "天狼星", "label_en": "Sirius", "glyph": "🐺"},
                  {"label_zh": "大角星", "label_en": "Arcturus", "glyph": "❌"},
                  {"label_zh": "角宿一", "label_en": "Spica", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "三角由大角、角宿一、五帝座一组成。",
                "explain_en": "The trio is Arcturus, Spica and Denebola."
              }
            ]
          }
        },
        {
          "left": -42,
          "lesson": {
            "id": "stg-a3-02-summer-sky",
            "title_zh": "夏季星空",
            "title_en": "The Summer Sky",
            "subtitle_zh": "银河最亮的季节",
            "subtitle_en": "The Milky Way's best show",
            "icon": "🌠",
            "xp": 25,
            "teach": [
              {
                "visual": "🌉",
                "title_zh": "夏夜银河最壮丽",
                "title_en": "The river runs brightest",
                "body_zh": "6 到 8 月的夜晚，银河最宽最亮的一段横贯天空。因为此时地球的夜面朝向银河系中心——人马座方向，那里恒星最密集。",
                "body_en": "On summer nights the brightest, widest stretch of the Milky Way arches overhead, because we face the galaxy's crowded center in Sagittarius."
              },
              {
                "visual": "🔺",
                "title_zh": "夏季大三角",
                "title_en": "The Summer Triangle",
                "body_zh": "织女星、牛郎星、天津四组成夏季大三角，是夏夜最先认出的三颗亮星。织女和牛郎分居银河两岸，天津四就泡在银河里。",
                "body_en": "Vega, Altair and Deneb form the Summer Triangle — the first three stars to spot. Vega and Altair flank the river; Deneb swims in it."
              },
              {
                "visual": "❤️",
                "title_zh": "天蝎的心脏",
                "title_en": "The scorpion's heart",
                "body_zh": "银河最亮处盘着天蝎座，胸口的心宿二泛着红光。它是一颗红超巨星，个头大到能吞下火星轨道，中国古人称它「大火」。",
                "body_en": "Scorpius curls through the brightest part of the river, its red heart Antares glowing — a supergiant vast enough to swallow Mars's orbit."
              },
              {
                "visual": "💭",
                "title_zh": "鹊桥其实很遥远",
                "title_en": "A very long bridge",
                "body_zh": "织女星和牛郎星隔着银河相望，只是视线上的巧合——它们实际相距约 16 光年，即使打个电话，回音也要三十多年才到。",
                "body_en": "Vega and Altair only appear to flank the river; they're really about 16 light-years apart. A phone call would take decades to echo back."
              }
            ],
            "questions": [
              {
                "id": "stg-a3-02-q1",
                "based_on": "teach[1]",
                "prompt_zh": "夏夜银河最亮的原因是？",
                "prompt_en": "Why is the Milky Way brightest on summer nights?",
                "choices": [
                  {"label_zh": "夜面朝向银河系中心", "label_en": "We face the galactic center", "glyph": "🌌"},
                  {"label_zh": "夏天气温高", "label_en": "Summer is warm", "glyph": "❌"},
                  {"label_zh": "月亮照亮了银河", "label_en": "The Moon lights it up", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "夏季夜面对准银心方向，恒星最密集。",
                "explain_en": "Summer nights aim at the star-crowded center."
              },
              {
                "id": "stg-a3-02-q2",
                "based_on": "teach[2]",
                "prompt_zh": "夏季大三角不包括？",
                "prompt_en": "Which star is NOT in the Summer Triangle?",
                "choices": [
                  {"label_zh": "心宿二", "label_en": "Antares", "glyph": "❤️"},
                  {"label_zh": "织女星", "label_en": "Vega", "glyph": "❌"},
                  {"label_zh": "天津四", "label_en": "Deneb", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "三角由织女、牛郎、天津四组成。",
                "explain_en": "The trio: Vega, Altair and Deneb."
              },
              {
                "id": "stg-a3-02-q3",
                "based_on": "teach[2]",
                "prompt_zh": "位于银河「里面」的三角成员是？",
                "prompt_en": "Which triangle member swims in the Milky Way?",
                "choices": [
                  {"label_zh": "天津四", "label_en": "Deneb", "glyph": "🦢"},
                  {"label_zh": "织女星", "label_en": "Vega", "glyph": "❌"},
                  {"label_zh": "牛郎星", "label_en": "Altair", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "织女、牛郎在两岸，天津四泡在河里。",
                "explain_en": "Vega and Altair flank it; Deneb sits in it."
              },
              {
                "id": "stg-a3-02-q4",
                "based_on": "teach[3]",
                "prompt_zh": "心宿二的颜色和身份是？",
                "prompt_en": "Antares is:",
                "choices": [
                  {"label_zh": "红色的红超巨星", "label_en": "A red supergiant", "glyph": "🔴"},
                  {"label_zh": "蓝色的年轻恒星", "label_en": "A blue young star", "glyph": "❌"},
                  {"label_zh": "白色的白矮星", "label_en": "A white dwarf", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "红超巨星，天蝎座的红色心脏。",
                "explain_en": "A red supergiant — the scorpion's heart."
              },
              {
                "id": "stg-a3-02-q5",
                "based_on": "teach[3]",
                "prompt_zh": "心宿二的中国古名是？",
                "prompt_en": "Antares's ancient Chinese name is:",
                "choices": [
                  {"label_zh": "大火", "label_en": "Dahuo, the Great Fire", "glyph": "🔥"},
                  {"label_zh": "大角", "label_en": "Arcturus", "glyph": "❌"},
                  {"label_zh": "天狼", "label_en": "Sirius", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "古人称心宿二为「大火」。",
                "explain_en": "The ancients called it the Great Fire."
              },
              {
                "id": "stg-a3-02-q6",
                "based_on": "teach[4]",
                "prompt_zh": "织女星和牛郎星实际相距约？",
                "prompt_en": "Vega and Altair are actually about:",
                "choices": [
                  {"label_zh": "16 光年", "label_en": "16 light-years", "glyph": "💫"},
                  {"label_zh": "16 千米", "label_en": "16 kilometers", "glyph": "❌"},
                  {"label_zh": "就在河两岸，非常近", "label_en": "Just across the river", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "隔河相望只是投影，实际约 16 光年。",
                "explain_en": "The river is a projection; the gap is 16 light-years."
              }
            ]
          }
        },
        {
          "left": 50,
          "lesson": {
            "id": "stg-a3-03-autumn-sky",
            "title_zh": "秋季星空",
            "title_en": "The Autumn Sky",
            "subtitle_zh": "星空的淡季",
            "subtitle_en": "The sky's quiet season",
            "icon": "🍂",
            "xp": 25,
            "teach": [
              {
                "visual": "🍁",
                "title_zh": "秋夜亮星最稀少",
                "title_en": "The off-season for stars",
                "body_zh": "9 到 11 月的夜晚被称作星空「淡季」：天顶附近亮星稀疏，银河也斜躺到西边。但认星反而简单——标志物少而醒目。",
                "body_en": "Autumn nights are the sky's off-season: few bright stars near the zenith, the Milky Way tipping away westward. Yet that makes landmarks easy."
              },
              {
                "visual": "⬜",
                "title_zh": "飞马座大四边形",
                "title_en": "The Great Square of Pegasus",
                "body_zh": "秋季的定位锚点是飞马座大四边形：四颗星围成一个近乎正方的方框，秋夜里挂在天顶附近。找到了它，就找到了秋天的钥匙。",
                "body_en": "Autumn's anchor is the Great Square of Pegasus — four modest stars framing a near-perfect square overhead. Spot it, and autumn unlocks."
              },
              {
                "visual": "👑",
                "title_zh": "仙后与秋夜孤星",
                "title_en": "A queen and a lone star",
                "body_zh": "北天的 W 形仙后座此时爬到高处；南天低空则闪着孤零零的北落师门，四下一片空旷，人送外号「秋夜孤星」。",
                "body_en": "The W of Cassiopeia climbs high in the north, while lone Fomalhaut blazes low in the south — nicknamed the solitary star of autumn."
              },
              {
                "visual": "💡",
                "title_zh": "顺着仙女座找星系",
                "title_en": "Follow Andromeda to a galaxy",
                "body_zh": "从四边形一角向外延伸是仙女座三星，再往前就是仙女座大星系——肉眼可见的最远天体，它的光走了 250 万年才到你眼里。",
                "body_en": "One corner of the Square points along Andromeda's three stars to the Andromeda Galaxy — the farthest thing your naked eye can see."
              }
            ],
            "questions": [
              {
                "id": "stg-a3-03-q1",
                "based_on": "teach[1]",
                "prompt_zh": "秋季星空的总体特点是？",
                "prompt_en": "Autumn skies are known for:",
                "choices": [
                  {"label_zh": "亮星稀少，是「淡季」", "label_en": "Few bright stars — the off-season", "glyph": "🍁"},
                  {"label_zh": "一等亮星最多", "label_en": "The most first-magnitude stars", "glyph": "❌"},
                  {"label_zh": "银河横贯天顶", "label_en": "The Milky Way overhead", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "秋夜天顶亮星稀疏，标志物少而醒目。",
                "explain_en": "Sparse but easy — few, bold landmarks."
              },
              {
                "id": "stg-a3-03-q2",
                "based_on": "teach[2]",
                "prompt_zh": "秋夜的定位锚点是？",
                "prompt_en": "Autumn's anchor landmark is:",
                "choices": [
                  {"label_zh": "飞马座大四边形", "label_en": "The Great Square of Pegasus", "glyph": "⬜"},
                  {"label_zh": "夏季大三角", "label_en": "The Summer Triangle", "glyph": "❌"},
                  {"label_zh": "北斗七星", "label_en": "The Big Dipper", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "四边形近乎正方，挂在天顶附近。",
                "explain_en": "A near-perfect square, hanging overhead."
              },
              {
                "id": "stg-a3-03-q3",
                "based_on": "teach[2]",
                "prompt_zh": "大四边形属于哪个星座？",
                "prompt_en": "The Great Square belongs to:",
                "choices": [
                  {"label_zh": "飞马座", "label_en": "Pegasus", "glyph": "🐴"},
                  {"label_zh": "仙女座", "label_en": "Andromeda", "glyph": "❌"},
                  {"label_zh": "仙后座", "label_en": "Cassiopeia", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "名字就叫飞马座大四边形。",
                "explain_en": "It's the Great Square of Pegasus, literally."
              },
              {
                "id": "stg-a3-03-q4",
                "based_on": "teach[3]",
                "prompt_zh": "「秋夜孤星」指的是？",
                "prompt_en": "The 'solitary star of autumn' is:",
                "choices": [
                  {"label_zh": "北落师门", "label_en": "Fomalhaut", "glyph": "✨"},
                  {"label_zh": "大角星", "label_en": "Arcturus", "glyph": "❌"},
                  {"label_zh": "心宿二", "label_en": "Antares", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "北落师门孤悬南天低空，四周空旷。",
                "explain_en": "Fomalhaut blazes alone in the empty south."
              },
              {
                "id": "stg-a3-03-q5",
                "based_on": "teach[3]",
                "prompt_zh": "秋夜北天高处的 W 形星座是？",
                "prompt_en": "The W-shaped constellation high in the autumn north is:",
                "choices": [
                  {"label_zh": "仙后座", "label_en": "Cassiopeia", "glyph": "👑"},
                  {"label_zh": "天鹅座", "label_en": "Cygnus", "glyph": "❌"},
                  {"label_zh": "仙王座", "label_en": "Cepheus", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "仙后座在秋季爬上北天高处。",
                "explain_en": "Cassiopeia rides high in autumn."
              },
              {
                "id": "stg-a3-03-q6",
                "based_on": "teach[4]",
                "prompt_zh": "肉眼可见的最远天体是？",
                "prompt_en": "The farthest object visible to the naked eye is:",
                "choices": [
                  {"label_zh": "仙女座大星系", "label_en": "The Andromeda Galaxy", "glyph": "🌌"},
                  {"label_zh": "天狼星", "label_en": "Sirius", "glyph": "❌"},
                  {"label_zh": "仙女座里最亮的恒星", "label_en": "Andromeda's brightest star", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "星系的光走 250 万年才到地球，恒星远不及它。",
                "explain_en": "Its light travels 2.5 million years — no naked-eye star compares."
              }
            ]
          }
        },
        {
          "left": -50,
          "lesson": {
            "id": "stg-a3-04-winter-sky",
            "title_zh": "冬季星空",
            "title_en": "The Winter Sky",
            "subtitle_zh": "亮星的豪华盛典",
            "subtitle_en": "A festival of bright stars",
            "icon": "❄️",
            "xp": 25,
            "teach": [
              {
                "visual": "🎆",
                "title_zh": "冬夜最豪华",
                "title_en": "The deluxe season",
                "body_zh": "12 月到 2 月的夜晚，天狼、参宿七、南河三、五车二……全天一半的一等亮星都挤在冬夜。空气冷冽通透，星星也闪得格外精神。",
                "body_en": "Winter nights host half the sky's first-magnitude stars — Sirius, Rigel, Procyon, Capella and more. Cold, clear air makes them sparkle extra hard."
              },
              {
                "visual": "🐺",
                "title_zh": "天狼星：全天最亮",
                "title_en": "Sirius, the brightest",
                "body_zh": "猎户腰带三星连一线，向东南延伸就指向天狼星——夜空中最亮的恒星。它其实不算特别能发光，主要赢在近：只有 8.6 光年。",
                "body_en": "Line up Orion's Belt and slide southeast to Sirius, the night's brightest star. It wins mostly by proximity — a mere 8.6 light-years away."
              },
              {
                "visual": "🔷",
                "title_zh": "冬季大三角与六边形",
                "title_en": "Triangle and Hexagon",
                "body_zh": "参宿四、天狼星、南河三组成冬季大三角；再圈进五车二、北河三、毕宿五和参宿七，就撑起更大的冬季六边形。",
                "body_en": "Betelgeuse, Sirius and Procyon make the Winter Triangle; add Capella, Pollux, Aldebaran and Rigel and you trace the grand Winter Hexagon."
              },
              {
                "visual": "💡",
                "title_zh": "亮，各有各的道理",
                "title_en": "Bright for different reasons",
                "body_zh": "天狼星亮，一半靠离得近；参宿七亮，则全凭本身的巨大光度——抵得上成千上万个太阳。亮不亮，要算「本身」和「距离」两笔账。",
                "body_en": "Sirius shines by being close; Rigel shines by sheer power, outglowing thousands of Suns. Brightness is always a tale of wattage and distance."
              }
            ],
            "questions": [
              {
                "id": "stg-a3-04-q1",
                "based_on": "teach[1]",
                "prompt_zh": "冬季星空的特点是？",
                "prompt_en": "Winter skies feature:",
                "choices": [
                  {"label_zh": "一等亮星最多", "label_en": "The most first-magnitude stars", "glyph": "🎆"},
                  {"label_zh": "一颗亮星都没有", "label_en": "No bright stars at all", "glyph": "❌"},
                  {"label_zh": "只能看到行星", "label_en": "Only planets", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "全天一半的一等亮星在冬夜。",
                "explain_en": "Half the sky's brightest stars crowd winter."
              },
              {
                "id": "stg-a3-04-q2",
                "based_on": "teach[2]",
                "prompt_zh": "找天狼星的经典方法是？",
                "prompt_en": "The classic way to find Sirius is:",
                "choices": [
                  {"label_zh": "猎户腰带三星连线向东南延伸", "label_en": "Extend Orion's Belt southeast", "glyph": "⭐"},
                  {"label_zh": "顺着北斗斗柄滑出去", "label_en": "Arc off the Dipper's handle", "glyph": "❌"},
                  {"label_zh": "找天空中最红的那颗星", "label_en": "Find the reddest star", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "腰带三星指向天狼，是经典路标。",
                "explain_en": "The Belt points straight to Sirius."
              },
              {
                "id": "stg-a3-04-q3",
                "based_on": "teach[2]",
                "prompt_zh": "天狼星这么亮，主要因为？",
                "prompt_en": "Sirius is so bright mainly because it's:",
                "choices": [
                  {"label_zh": "离我们很近", "label_en": "So close to us", "glyph": "🏠"},
                  {"label_zh": "本身光度宇宙第一", "label_en": "The most luminous star ever", "glyph": "❌"},
                  {"label_zh": "反射了月光", "label_en": "Reflecting moonlight", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "它只有 8.6 光年，近是主因。",
                "explain_en": "At 8.6 light-years, proximity is the trick."
              },
              {
                "id": "stg-a3-04-q4",
                "based_on": "teach[3]",
                "prompt_zh": "冬季大三角不包括？",
                "prompt_en": "Which star is NOT in the Winter Triangle?",
                "choices": [
                  {"label_zh": "参宿七", "label_en": "Rigel", "glyph": "🔷"},
                  {"label_zh": "参宿四", "label_en": "Betelgeuse", "glyph": "❌"},
                  {"label_zh": "南河三", "label_en": "Procyon", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "三角是参宿四、天狼星、南河三。",
                "explain_en": "The trio: Betelgeuse, Sirius, Procyon."
              },
              {
                "id": "stg-a3-04-q5",
                "based_on": "teach[4]",
                "prompt_zh": "参宿七的亮主要靠？",
                "prompt_en": "Rigel shines mainly by:",
                "choices": [
                  {"label_zh": "本身光度极高", "label_en": "Its own immense luminosity", "glyph": "🔆"},
                  {"label_zh": "离地球特别近", "label_en": "Being very close", "glyph": "❌"},
                  {"label_zh": "大气折射放大", "label_en": "Atmospheric magnification", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "参宿七光度抵得上成千上万个太阳。",
                "explain_en": "It outshines thousands of Suns on its own."
              },
              {
                "id": "stg-a3-04-q6",
                "based_on": "teach[4]",
                "prompt_zh": "决定星星看起来多亮的两个因素是？",
                "prompt_en": "A star's apparent brightness depends on:",
                "choices": [
                  {"label_zh": "本身光度和距离", "label_en": "Its wattage and its distance", "glyph": "✅"},
                  {"label_zh": "颜色和温度", "label_en": "Its color and temperature", "glyph": "❌"},
                  {"label_zh": "名字和大小", "label_en": "Its name and size", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "「有多亮」加「有多远」，两笔账一起算。",
                "explain_en": "How bright it is, times how far away — both count."
              }
            ]
          }
        },
        {
          "left": 58,
          "lesson": {
            "id": "stg-a4-01-scorpius",
            "title_zh": "天蝎座",
            "title_en": "Scorpius",
            "subtitle_zh": "名副其实的大蝎子",
            "subtitle_en": "A scorpion that earns its name",
            "icon": "🦂",
            "xp": 30,
            "teach": [
              {
                "visual": "🦂",
                "title_zh": "形状最「写实」的星座",
                "title_en": "The most literal constellation",
                "body_zh": "多数星座都得靠想象力，天蝎座却几乎不用：三颗星排成爪，一串星弯成身，尾巴高高翘起毒针——活脱脱一只趴在银河上的蝎子。",
                "body_en": "Most constellations demand imagination; Scorpius barely does. Claw stars, a curved body, a curled tail with a stinger — a scorpion sprawled on the river of stars."
              },
              {
                "visual": "❤️",
                "title_zh": "红色的心脏",
                "title_en": "The red heart",
                "body_zh": "天蝎胸口的红亮星心宿二，是颗著名的红超巨星：体积大到能吞下火星轨道，表面温度却比太阳低——红色正是低温恒星的标志。",
                "body_en": "Antares, the scorpion's heart, is a famed red supergiant — big enough to swallow Mars's orbit, yet cooler than the Sun. Red means relatively cool."
              },
              {
                "visual": "🔥",
                "title_zh": "大火与荧惑守心",
                "title_en": "Great Fire and a red duet",
                "body_zh": "中国古人叫心宿二「大火」，靠它安排农时。火星（古名荧惑）运行到它旁边时，两颗红星同框，称「荧惑守心」，古人视为罕见天象。",
                "body_en": "Ancient Chinese called Antares the Great Fire and timed farming by it. When Mars drifted alongside, two red stars glowed together — a rare omen."
              },
              {
                "visual": "🧭",
                "title_zh": "越往南看得越全",
                "title_en": "South shows the whole scorpion",
                "body_zh": "天蝎座整体偏南。在北纬 40° 以北，蝎尾会沉到地平线以下；越往南走，蝎子越完整——南半球能看到它的全部身姿。",
                "body_en": "Scorpius leans south. Above 40° north the tail dips below the horizon; travel south and the scorpion rises complete."
              }
            ],
            "questions": [
              {
                "id": "stg-a4-01-q1",
                "based_on": "teach[1]",
                "prompt_zh": "天蝎座的形状特点是？",
                "prompt_en": "Scorpius is famous for:",
                "choices": [
                  {"label_zh": "真的像一只蝎子", "label_en": "Actually looking like a scorpion", "glyph": "🦂"},
                  {"label_zh": "像一个 W", "label_en": "Looking like a W", "glyph": "❌"},
                  {"label_zh": "像一把镰刀", "label_en": "Looking like a sickle", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "爪、弯身、翘尾毒针一应俱全。",
                "explain_en": "Claws, curved body, stinger — all present."
              },
              {
                "id": "stg-a4-01-q2",
                "based_on": "teach[2]",
                "prompt_zh": "心宿二属于哪类恒星？",
                "prompt_en": "Antares is what kind of star?",
                "choices": [
                  {"label_zh": "红超巨星", "label_en": "A red supergiant", "glyph": "🔴"},
                  {"label_zh": "白矮星", "label_en": "A white dwarf", "glyph": "⚪"},
                  {"label_zh": "蓝矮星", "label_en": "A blue dwarf", "glyph": "🔵"}
                ],
                "correct_idx": 0,
                "explain_zh": "红超巨星，个头巨大、温度偏低。",
                "explain_en": "A red supergiant — huge, and fairly cool."
              },
              {
                "id": "stg-a4-01-q3",
                "based_on": "teach[2]",
                "prompt_zh": "心宿二看起来是红色，说明它？",
                "prompt_en": "Antares looks red, which tells you it is:",
                "choices": [
                  {"label_zh": "温度相对较低", "label_en": "Relatively cool", "glyph": "🌡️"},
                  {"label_zh": "马上要爆炸", "label_en": "About to explode", "glyph": "❌"},
                  {"label_zh": "离我们最近", "label_en": "The closest star", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "红色是低温恒星的标志。",
                "explain_en": "Red is the color of cooler stars."
              },
              {
                "id": "stg-a4-01-q4",
                "based_on": "teach[3]",
                "prompt_zh": "心宿二的中国古名是？",
                "prompt_en": "Antares's ancient Chinese name is:",
                "choices": [
                  {"label_zh": "大火", "label_en": "The Great Fire", "glyph": "🔥"},
                  {"label_zh": "荧惑", "label_en": "Yinghuo (Mars)", "glyph": "❌"},
                  {"label_zh": "天狼", "label_en": "The sky wolf", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "古人依「大火」定农时。",
                "explain_en": "Farmers set their calendar by the Great Fire."
              },
              {
                "id": "stg-a4-01-q5",
                "based_on": "teach[3]",
                "prompt_zh": "「荧惑守心」指的是？",
                "prompt_en": "'Yinghuo guards the Heart' refers to:",
                "choices": [
                  {"label_zh": "火星运行到心宿二附近", "label_en": "Mars drifting near Antares", "glyph": "🟥"},
                  {"label_zh": "月亮遮挡心宿二", "label_en": "The Moon eclipsing Antares", "glyph": "❌"},
                  {"label_zh": "彗星扫过天蝎座", "label_en": "A comet crossing Scorpius", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "荧惑即火星，与心宿二同框为罕见天象。",
                "explain_en": "Mars and Antares, two red stars, side by side."
              },
              {
                "id": "stg-a4-01-q6",
                "based_on": "teach[4]",
                "prompt_zh": "在高纬度北方看天蝎座？",
                "prompt_en": "From far northern latitudes, Scorpius appears:",
                "choices": [
                  {"label_zh": "尾巴沉入地平线，看不全", "label_en": "Tailless — the tail sets below the horizon", "glyph": "📉"},
                  {"label_zh": "看得更完整清楚", "label_en": "More complete", "glyph": "❌"},
                  {"label_zh": "整夜挂在天顶", "label_en": "Overhead all night", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "天蝎偏南，越往南越完整。",
                "explain_en": "A southern creature: go south for the full view."
              }
            ]
          }
        },
        {
          "left": -58,
          "lesson": {
            "id": "stg-a4-02-cassiopeia",
            "title_zh": "仙后座",
            "title_en": "Cassiopeia",
            "subtitle_zh": "永不落的 W",
            "subtitle_en": "The queen who never sets",
            "icon": "👑",
            "xp": 30,
            "teach": [
              {
                "visual": "✨",
                "title_zh": "醒目的 W",
                "title_en": "A striking W",
                "body_zh": "五颗亮星连成一个 W（侧看又是 M），就是仙后座。它紧挨北天极，在中国北方全年不落，和北斗隔着北极星遥遥相对。",
                "body_en": "Five bright stars trace a W — flip it, an M. That's Cassiopeia. It hugs the pole, never sets from northern China, and faces the Dipper across Polaris."
              },
              {
                "visual": "🧭",
                "title_zh": "北斗不在时的备胎",
                "title_en": "Backup pointer",
                "body_zh": "秋季夜晚北斗沉到低空，找北极星就改用仙后：把 W 两侧的边延长相交，再向交点方向延伸约 5 倍，同样能找到北极星。",
                "body_en": "When autumn sinks the Dipper low, switch pointers: extend the W's two side-strokes till they cross, then push on about five times to reach Polaris."
              },
              {
                "visual": "📡",
                "title_zh": "藏着仙后座 A",
                "title_en": "Hiding Cas A",
                "body_zh": "仙后座里藏着「仙后座 A」——望远镜时代著名超新星的遗迹，如今是全天最亮的射电源之一。肉眼看不见，射电望远镜天天盯着它。",
                "body_en": "Cassiopeia hides Cas A, remnant of a famous telescopic-era supernova and one of the sky's brightest radio sources. Your eyes can't see it; radio dishes love it."
              },
              {
                "visual": "💃",
                "title_zh": "被罚转圈的王后",
                "title_en": "The queen in exile",
                "body_zh": "神话里她是爱炫耀的王后卡西俄佩亚，因夸口激怒海神，被绑上王座绕北天极永远旋转——时而成 W，时而成 M，坐得头晕目眩。",
                "body_en": "Myth makes her a boastful queen who angered the sea god: lashed to her throne, she wheels around the pole forever, flipping from W to M and back."
              }
            ],
            "questions": [
              {
                "id": "stg-a4-02-q1",
                "based_on": "teach[1]",
                "prompt_zh": "仙后座的标志形状是？",
                "prompt_en": "Cassiopeia's signature shape is:",
                "choices": [
                  {"label_zh": "W 或 M", "label_en": "A W (or M)", "glyph": "✨"},
                  {"label_zh": "三角形", "label_en": "A triangle", "glyph": "❌"},
                  {"label_zh": "正方形", "label_en": "A square", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "五颗亮星连成醒目的 W。",
                "explain_en": "Five bright stars, one bold W."
              },
              {
                "id": "stg-a4-02-q2",
                "based_on": "teach[1]",
                "prompt_zh": "在中国北方，仙后座？",
                "prompt_en": "From northern China, Cassiopeia:",
                "choices": [
                  {"label_zh": "全年不落", "label_en": "Never sets", "glyph": "🔄"},
                  {"label_zh": "只在秋天出现", "label_en": "Appears only in autumn", "glyph": "❌"},
                  {"label_zh": "只在冬天出现", "label_en": "Appears only in winter", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "它是北天拱极星座，绕极不落。",
                "explain_en": "It's circumpolar there — always above the horizon."
              },
              {
                "id": "stg-a4-02-q3",
                "based_on": "teach[2]",
                "prompt_zh": "北斗沉到低空时，找北极星可以改用？",
                "prompt_en": "When the Dipper sinks low, you can find Polaris with:",
                "choices": [
                  {"label_zh": "仙后座 W 的延长线", "label_en": "Cassiopeia's W", "glyph": "👑"},
                  {"label_zh": "猎户腰带三星", "label_en": "Orion's Belt", "glyph": "❌"},
                  {"label_zh": "夏季大三角", "label_en": "The Summer Triangle", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "W 两侧边延长相交，再延伸约 5 倍。",
                "explain_en": "Extend the W's sides, cross, then carry on five-fold."
              },
              {
                "id": "stg-a4-02-q4",
                "based_on": "teach[3]",
                "prompt_zh": "仙后座 A 是什么？",
                "prompt_en": "Cas A is:",
                "choices": [
                  {"label_zh": "超新星遗迹", "label_en": "A supernova remnant", "glyph": "💥"},
                  {"label_zh": "一颗行星", "label_en": "A planet", "glyph": "❌"},
                  {"label_zh": "一个星座", "label_en": "A constellation", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "它是著名超新星的遗迹、明亮射电源。",
                "explain_en": "A supernova's leftover — a radio beacon."
              },
              {
                "id": "stg-a4-02-q5",
                "based_on": "teach[3]",
                "prompt_zh": "仙后座 A 肉眼能看到吗？",
                "prompt_en": "Can you see Cas A with the naked eye?",
                "choices": [
                  {"label_zh": "不能，要用射电望远镜", "label_en": "No — you need radio telescopes", "glyph": "📡"},
                  {"label_zh": "能，它是全天最亮", "label_en": "Yes, it's the brightest thing", "glyph": "❌"},
                  {"label_zh": "只在满月夜可见", "label_en": "Only on full-moon nights", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "它是射电源，肉眼不可见。",
                "explain_en": "It shines in radio waves, invisible to eyes."
              },
              {
                "id": "stg-a4-02-q6",
                "based_on": "teach[4]",
                "prompt_zh": "神话中仙后座被罚？",
                "prompt_en": "In myth, the queen is punished by:",
                "choices": [
                  {"label_zh": "绕北天极永远旋转", "label_en": "Wheeling around the pole forever", "glyph": "💃"},
                  {"label_zh": "变成流星陨落", "label_en": "Falling as a meteor", "glyph": "❌"},
                  {"label_zh": "沉入大海", "label_en": "Sinking into the sea", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "王后被绑在王座上绕极旋转。",
                "explain_en": "Lashed to her throne, circling the pole."
              }
            ]
          }
        },
        {
          "left": 66,
          "lesson": {
            "id": "stg-a5-01-venus-phases",
            "title_zh": "金星相位",
            "title_en": "The Phases of Venus",
            "subtitle_zh": "金星也学月亮变脸",
            "subtitle_en": "Venus plays the Moon",
            "icon": "🌗",
            "xp": 30,
            "teach": [
              {
                "visual": "🔭",
                "title_zh": "望远镜里的新世界",
                "title_en": "A new world in the eyepiece",
                "body_zh": "用小望远镜看金星，你会发现它像月亮一样有阴晴圆缺：有时是纤细的月牙，有时是半圆，有时又近乎全圆，随日期缓缓变化。",
                "body_en": "Point a small telescope at Venus and it mimics the Moon: a slim crescent, a half disc, or nearly full — shifting slowly from month to month."
              },
              {
                "visual": "🔄",
                "title_zh": "内行星的特权",
                "title_en": "An inner-planet privilege",
                "body_zh": "只有轨道在地球内侧的行星才会被我们看出相位——金星和水星可以，火星木星就不行。这是「内行星」专属的舞台效果。",
                "body_en": "Only planets orbiting inside Earth's orbit show us phases — Venus and Mercury can, Mars and Jupiter can't. An inner-planet privilege."
              },
              {
                "visual": "📜",
                "title_zh": "伽利略的杀手锏",
                "title_en": "Galileo's trump card",
                "body_zh": "1610 年伽利略观察到金星相位：如果金星绕地球转，它永远只能是月牙；能变圆变缺，说明它绕的是太阳。地心说被撬开裂缝。",
                "body_en": "In 1610 Galileo saw Venus's phases. If Venus circled Earth it would stay crescent; cycling through phases means it orbits the Sun — cracking geocentrism."
              },
              {
                "visual": "💡",
                "title_zh": "最亮时不是最圆",
                "title_en": "Brightest isn't fullest",
                "body_zh": "金星最圆时恰好在太阳背后，离我们最远、看起来最小；细月牙时反而最近、个头最大。所以它最亮的样子，是半圆上下的「弯月」。",
                "body_en": "Full Venus hides beyond the Sun, far and small; a thin crescent is close and big. So Venus shines brightest as a fat crescent, not when full."
              }
            ],
            "questions": [
              {
                "id": "stg-a5-01-q1",
                "based_on": "teach[1]",
                "prompt_zh": "想看到金星的相位变化，需要？",
                "prompt_en": "To see Venus's phases, you need:",
                "choices": [
                  {"label_zh": "一台小望远镜", "label_en": "A small telescope", "glyph": "🔭"},
                  {"label_zh": "只用肉眼", "label_en": "Just your eyes", "glyph": "❌"},
                  {"label_zh": "什么都看不到，不可能", "label_en": "Nothing — it's impossible", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "相位细节需望远镜才能分辨。",
                "explain_en": "The phases only resolve through a telescope."
              },
              {
                "id": "stg-a5-01-q2",
                "based_on": "teach[2]",
                "prompt_zh": "哪些行星能被地球看出相位？",
                "prompt_en": "Which planets show phases from Earth?",
                "choices": [
                  {"label_zh": "水星和金星", "label_en": "Mercury and Venus", "glyph": "✅"},
                  {"label_zh": "火星和木星", "label_en": "Mars and Jupiter", "glyph": "❌"},
                  {"label_zh": "所有行星都一样明显", "label_en": "All equally", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "相位是轨道在地球内侧的行星的特权。",
                "explain_en": "Phases belong to planets inside our orbit."
              },
              {
                "id": "stg-a5-01-q3",
                "based_on": "teach[3]",
                "prompt_zh": "金星相位证明了什么？",
                "prompt_en": "Venus's phases proved that:",
                "choices": [
                  {"label_zh": "金星绕太阳转", "label_en": "Venus orbits the Sun", "glyph": "☀️"},
                  {"label_zh": "金星绕地球转", "label_en": "Venus orbits Earth", "glyph": "❌"},
                  {"label_zh": "金星会自己发光", "label_en": "Venus shines on its own", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "能变圆变缺，只有绕日轨道解释得通。",
                "explain_en": "Only a sun-centered orbit can explain the cycle."
              },
              {
                "id": "stg-a5-01-q4",
                "based_on": "teach[3]",
                "prompt_zh": "伽利略观察金星相位是在？",
                "prompt_en": "Galileo observed Venus's phases in:",
                "choices": [
                  {"label_zh": "1610 年", "label_en": "1610", "glyph": "📜"},
                  {"label_zh": "1990 年", "label_en": "1990", "glyph": "❌"},
                  {"label_zh": "公元前", "label_en": "BC times", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "1610 年，望远镜刚问世之时。",
                "explain_en": "1610 — the telescope's first years."
              },
              {
                "id": "stg-a5-01-q5",
                "based_on": "teach[4]",
                "prompt_zh": "金星看起来最亮时，相位是？",
                "prompt_en": "Venus looks brightest when its phase is:",
                "choices": [
                  {"label_zh": "半圆上下的弯月", "label_en": "A fat crescent", "glyph": "🌗"},
                  {"label_zh": "正圆", "label_en": "Full", "glyph": "❌"},
                  {"label_zh": "完全看不见", "label_en": "Invisible", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "弯月时近且大，最圆时远且小。",
                "explain_en": "Crescent = close and big; full = far and small."
              },
              {
                "id": "stg-a5-01-q6",
                "based_on": "teach[4]",
                "prompt_zh": "金星「满相」时为什么反而不最亮？",
                "prompt_en": "Why isn't Venus brightest when full?",
                "choices": [
                  {"label_zh": "它在太阳背后，又远又小", "label_en": "It's behind the Sun — far and small", "glyph": "✅"},
                  {"label_zh": "满相时它不反光", "label_en": "It stops reflecting light", "glyph": "❌"},
                  {"label_zh": "被月亮挡住了", "label_en": "The Moon blocks it", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "最圆＝在太阳背后，距离最远。",
                "explain_en": "Fullest means farthest, hiding beyond the Sun."
              }
            ]
          }
        }
      ]
    }
  ]
}
```
