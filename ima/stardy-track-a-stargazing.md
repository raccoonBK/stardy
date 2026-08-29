```json
{
  "tracks": [
    {
      "id": "stargazing",
      "name_zh": "抬头看夜空",
      "name_en": "Look Up Tonight",
      "tagline_zh": "认识你头顶的星空",
      "tagline_en": "Meet the sky above you",
      "icon": "🌌",
      "nodes": [
        {
          "chapter_zh": "第 4 章 · 时间、天球与四季",
          "chapter_en": "Chapter 4 · Time, Spheres & Seasons",
          "left": 0,
          "lesson": {
            "id": "stg-a1-01-solar-day",
            "title_zh": "太阳日与恒星日",
            "title_en": "Solar Day vs Sidereal Day",
            "subtitle_zh": "一天到底有多长",
            "subtitle_en": "How long is a day, really?",
            "icon": "🌞",
            "xp": 15,
            "teach": [
              {
                "visual": "🌞",
                "title_zh": "两种“一天”",
                "title_en": "Two kinds of day",
                "body_zh": "地球相对远处恒星转一圈约23时56分，这是恒星日；太阳日约24小时，因为还要多转一点，太阳才回到原地。",
                "body_en": "One spin takes 23h 56m. The solar day is ~24h — the orbit adds extra spin."
              },
              {
                "visual": "⏱️",
                "title_zh": "差出的4分钟",
                "title_en": "The 4-minute gap",
                "body_zh": "恒星日每天比太阳日短约4分钟，一年下来正好多出一天：365个太阳日对应366个恒星日。",
                "body_en": "Star days run 4 min short; over a year this adds up to exactly one extra day."
              }
            ],
            "questions": [
              {
                "id": "stg-a1-01-q1",
                "prompt_zh": "恒星日和太阳日哪个更短？",
                "prompt_en": "Which is shorter: a solar day or a sidereal day?",
                "choices": [
                  {"label_zh": "恒星日更短", "label_en": "The sidereal day"},
                  {"label_zh": "太阳日更短", "label_en": "The solar day"},
                  {"label_zh": "一样长", "label_en": "They're the same"}
                ],
                "correct_idx": 0,
                "explain_zh": "公转让地球每天要多转约1度，太阳日因此更长。",
                "explain_en": "Orbiting the Sun means Earth needs a little extra spin each day."
              },
              {
                "id": "stg-a1-01-q2",
                "prompt_zh": "星星为什么每晚比前一晚早约4分钟升起？",
                "prompt_en": "Why do stars rise ~4 minutes earlier each night?",
                "choices": [
                  {"label_zh": "地球公转使星空整体偏移", "label_en": "Earth's orbit shifts the sky"},
                  {"label_zh": "恒星自身在快速移动", "label_en": "The stars themselves race along"},
                  {"label_zh": "大气折射随季节变化", "label_en": "Seasonal refraction"}
                ],
                "correct_idx": 0,
                "explain_zh": "星空按恒星日运转，每天提前约4分钟。",
                "explain_en": "The sky follows the shorter star day, rising earlier every night."
              },
              {
                "id": "stg-a1-01-q3",
                "prompt_zh": "一年之内，恒星日比太阳日大约多出？",
                "prompt_en": "In one year, how many more sidereal days fit than solar days?",
                "choices": [
                  {"label_zh": "1个", "label_en": "One", "glyph": "1️⃣"},
                  {"label_zh": "366个", "label_en": "366", "glyph": "💯"},
                  {"label_zh": "4个", "label_en": "Four", "glyph": "4️⃣"}
                ],
                "correct_idx": 0,
                "explain_zh": "每天差4分钟，一年累积正好一整天。",
                "explain_en": "Four minutes a day adds up to one full day per year."
              }
            ]
          }
        },
        {
          "left": 26,
          "lesson": {
            "id": "stg-a1-02-leap-year",
            "title_zh": "闰年与历法",
            "title_en": "Leap Years",
            "subtitle_zh": "2月29日从哪来",
            "subtitle_en": "Where Feb 29 comes from",
            "icon": "📅",
            "xp": 15,
            "teach": [
              {
                "visual": "📅",
                "title_zh": "回归年不是整数",
                "title_en": "A year isn't a whole number",
                "body_zh": "地球绕太阳一圈约365.2422天，比365天多出近6小时，四年攒出约一天，于是有了2月29日。",
                "body_en": "One year = 365.2422 days, so spare hours add up to a whole day every 4 years."
              },
              {
                "visual": "🎂",
                "title_zh": "整百年的例外",
                "title_en": "The century catch",
                "body_zh": "四年一闰还是多算了一点，所以能被100整除的年份不闰，能被400整除才闰：1900年不是闰年，2000年是。",
                "body_en": "Leaping every 4 years overshoots — century years skip it unless divisible by 400."
              }
            ],
            "questions": [
              {
                "id": "stg-a1-02-q1",
                "prompt_zh": "为什么需要闰年？",
                "prompt_en": "Why do leap years exist?",
                "choices": [
                  {"label_zh": "地球公转不是整数天", "label_en": "A year isn't a whole number of days"},
                  {"label_zh": "月球引力扰动", "label_en": "The Moon's pull"},
                  {"label_zh": "地轴在缓慢摆动", "label_en": "Earth's axis wobbles"}
                ],
                "correct_idx": 0,
                "explain_zh": "回归年约365.24天，历法用闰年补齐差额。",
                "explain_en": "The true year is ~365.24 days; leap days keep the calendar honest."
              },
              {
                "id": "stg-a1-02-q2",
                "prompt_zh": "2100年是闰年吗？",
                "prompt_en": "Is 2100 a leap year?",
                "choices": [
                  {"label_zh": "不是", "label_en": "No", "glyph": "🚫"},
                  {"label_zh": "是", "label_en": "Yes", "glyph": "✅"},
                  {"label_zh": "每8年才闰一次", "label_en": "Only every 8 years", "glyph": "8️⃣"}
                ],
                "correct_idx": 0,
                "explain_zh": "2100能被100整除但不能被400整除，所以不闰。",
                "explain_en": "2100 divides by 100 but not 400, so it stays a common year."
              },
              {
                "id": "stg-a1-02-q3",
                "prompt_zh": "只按“四年一闰”，长期看会怎样？",
                "prompt_en": "Leap every 4 years only — what happens long-term?",
                "choices": [
                  {"label_zh": "多算了一点", "label_en": "Runs slightly long"},
                  {"label_zh": "少算了一点", "label_en": "Runs slightly short"},
                  {"label_zh": "完全精确", "label_en": "Perfectly exact"}
                ],
                "correct_idx": 0,
                "explain_zh": "所以才有整百年不闰的修正规则。",
                "explain_en": "That overshoot is why century years get skipped."
              }
            ]
          }
        },
        {
          "left": 34,
          "lesson": {
            "id": "stg-a1-03-timezones",
            "title_zh": "时区",
            "title_en": "Time Zones",
            "subtitle_zh": "为什么全世界不共用一个时刻",
            "subtitle_en": "Why the world doesn't share one clock",
            "icon": "🕐",
            "xp": 15,
            "teach": [
              {
                "visual": "🌍",
                "title_zh": "正午跟着太阳走",
                "title_en": "Noon follows the Sun",
                "body_zh": "太阳升到最高点是当地正午，但各地经度不同，正午时刻也不同，这就是各地的地方时。",
                "body_en": "Local noon follows the Sun — different longitudes peak at different moments."
              },
              {
                "visual": "🕰️",
                "title_zh": "15度一小时",
                "title_en": "15 degrees, 1 hour",
                "body_zh": "地球24小时转360度，经度每差15度时间约差1小时；全球划成24个时区，相邻时区通常差1小时。",
                "body_en": "Earth turns 360° in 24h, so each 15° of longitude shifts the clock one hour."
              }
            ],
            "questions": [
              {
                "id": "stg-a1-03-q1",
                "prompt_zh": "相邻两个时区通常相差？",
                "prompt_en": "How far apart are neighboring time zones?",
                "choices": [
                  {"label_zh": "1小时", "label_en": "1 hour", "glyph": "🕐"},
                  {"label_zh": "30分钟", "label_en": "30 minutes", "glyph": "⏱️"},
                  {"label_zh": "2小时", "label_en": "2 hours", "glyph": "🕑"}
                ],
                "correct_idx": 0,
                "explain_zh": "360度除以24小时，每15度差1小时。",
                "explain_en": "360° over 24 hours: every 15° of longitude costs one hour."
              },
              {
                "id": "stg-a1-03-q2",
                "prompt_zh": "北京时间正午12点时，伦敦（0时区）是？",
                "prompt_en": "Beijing is at noon — what time is it in London?",
                "choices": [
                  {"label_zh": "凌晨4点", "label_en": "4 a.m.", "glyph": "🌅"},
                  {"label_zh": "晚上8点", "label_en": "8 p.m.", "glyph": "🌆"},
                  {"label_zh": "中午12点", "label_en": "Noon", "glyph": "☀️"}
                ],
                "correct_idx": 0,
                "explain_zh": "北京在东八区，比伦敦早8小时。",
                "explain_en": "Beijing sits in UTC+8, eight hours ahead of London."
              },
              {
                "id": "stg-a1-03-q3",
                "prompt_zh": "地方时的依据是？",
                "prompt_en": "What is local time based on?",
                "choices": [
                  {"label_zh": "当地太阳的位置", "label_en": "Where the Sun is locally"},
                  {"label_zh": "国际协议约定", "label_en": "An international treaty"},
                  {"label_zh": "当地的纬度", "label_en": "The local latitude"}
                ],
                "correct_idx": 0,
                "explain_zh": "太阳过当地最高点即当地正午12点。",
                "explain_en": "Local noon is when the Sun crosses its highest point."
              }
            ]
          }
        },
        {
          "left": 26,
          "lesson": {
            "id": "stg-a2-01-celestial-sphere",
            "title_zh": "天球",
            "title_en": "The Celestial Sphere",
            "subtitle_zh": "把星空装进一个球",
            "subtitle_en": "The sky on a sphere",
            "icon": "🎡",
            "xp": 15,
            "teach": [
              {
                "visual": "🎡",
                "title_zh": "假想的天空球壳",
                "title_en": "An imaginary shell",
                "body_zh": "天球是以你为中心的假想球面，所有天体都投影在上面。它不是真实存在，而是标记天空位置的坐标系。",
                "body_en": "An imaginary dome the stars are projected onto — a sky map, not a real shell."
              },
              {
                "visual": "🔄",
                "title_zh": "转的是我们",
                "title_en": "We're the ones turning",
                "body_zh": "星星的东升西落不是天球真的在转，而是地球自转反映在天球上的效果。",
                "body_en": "Stars rise and set because we spin — the turning sky mirrors Earth's rotation."
              }
            ],
            "questions": [
              {
                "id": "stg-a2-01-q1",
                "prompt_zh": "天球是什么？",
                "prompt_en": "What is the celestial sphere?",
                "choices": [
                  {"label_zh": "标记天空位置的假想球面", "label_en": "An imaginary mapping sphere"},
                  {"label_zh": "包裹地球的透明壳层", "label_en": "A crystal shell around Earth"},
                  {"label_zh": "地球的大气层", "label_en": "Earth's atmosphere"}
                ],
                "correct_idx": 0,
                "explain_zh": "古代水晶球说是错误模型，天球只是坐标系。",
                "explain_en": "The crystal-shell idea was wrong — it's just a coordinate map."
              },
              {
                "id": "stg-a2-01-q2",
                "prompt_zh": "星星东升西落的真正原因是？",
                "prompt_en": "What really makes stars rise and set?",
                "choices": [
                  {"label_zh": "地球自转", "label_en": "Earth's rotation"},
                  {"label_zh": "恒星绕着地球转", "label_en": "Stars orbiting Earth"},
                  {"label_zh": "高层大气流动", "label_en": "Winds in the upper air"}
                ],
                "correct_idx": 0,
                "explain_zh": "整个星空一起转动，说明是观察者在转。",
                "explain_en": "The whole sky turns together — so the observer must be the one spinning."
              }
            ]
          }
        },
        {
          "left": 0,
          "lesson": {
            "id": "stg-a2-02-ra-dec",
            "title_zh": "赤经与赤纬",
            "title_en": "RA & Dec",
            "subtitle_zh": "天体的门牌号",
            "subtitle_en": "Celestial addresses",
            "icon": "📐",
            "xp": 20,
            "teach": [
              {
                "visual": "📐",
                "title_zh": "天空的经纬网",
                "title_en": "A grid for the sky",
                "body_zh": "赤纬像纬度：天赤道为0度，向南北天极各伸展90度。赤纬为正表示在天赤道以北。",
                "body_en": "Declination is sky latitude: 0° at the celestial equator, ±90° at the poles."
              },
              {
                "visual": "🗺️",
                "title_zh": "用小时计量的经度",
                "title_en": "Longitude in hours",
                "body_zh": "赤经像经度，但从0到24小时：地球24小时自转一周，天球上绕一圈正好对应24小时。",
                "body_en": "Right ascension is sky longitude, measured 0–24h — one full sky circle per day."
              }
            ],
            "questions": [
              {
                "id": "stg-a2-02-q1",
                "prompt_zh": "赤纬0度对应天球上的？",
                "prompt_en": "Where is declination 0° on the sky?",
                "choices": [
                  {"label_zh": "天赤道", "label_en": "The celestial equator"},
                  {"label_zh": "北天极", "label_en": "The north celestial pole"},
                  {"label_zh": "黄道", "label_en": "The ecliptic"}
                ],
                "correct_idx": 0,
                "explain_zh": "赤纬以天赤道为零点，向两极增加。",
                "explain_en": "Dec counts up from the celestial equator toward either pole."
              },
              {
                "id": "stg-a2-02-q2",
                "prompt_zh": "赤经为什么用小时做单位？",
                "prompt_en": "Why is right ascension measured in hours?",
                "choices": [
                  {"label_zh": "天空一天转一圈", "label_en": "The sky turns once a day"},
                  {"label_zh": "恒星光度用时间计", "label_en": "Brightness uses time units"},
                  {"label_zh": "历史遗留，没有道理", "label_en": "Historical accident"}
                ],
                "correct_idx": 0,
                "explain_zh": "地球24小时自转，天空每小时转过1小时赤经。",
                "explain_en": "The sky sweeps through one hour of RA for each hour of spin."
              },
              {
                "id": "stg-a2-02-q3",
                "prompt_zh": "知道恒星的赤经赤纬，能用来做什么？",
                "prompt_en": "Knowing a star's RA and Dec lets you…",
                "choices": [
                  {"label_zh": "任何时候定位这颗星", "label_en": "Locate it at any time"},
                  {"label_zh": "算出它的距离", "label_en": "Get its distance"},
                  {"label_zh": "判断它的颜色", "label_en": "Judge its color"}
                ],
                "correct_idx": 0,
                "explain_zh": "坐标是定位信息，不含距离和颜色。",
                "explain_en": "It's an address — nothing about distance or color."
              }
            ]
          }
        },
        {
          "left": -26,
          "lesson": {
            "id": "stg-a2-03-pole-star",
            "title_zh": "北极星与北天极",
            "title_en": "Polaris & the Pole",
            "subtitle_zh": "天空旋转轴上的星",
            "subtitle_en": "The star on the axis",
            "icon": "🧭",
            "xp": 20,
            "teach": [
              {
                "visual": "🧭",
                "title_zh": "整夜不动的那颗星",
                "title_en": "The star that stands still",
                "body_zh": "天空像在绕一根轴旋转，轴指向北天极。北极星恰好在极点附近，所以看起来几乎不动，众星绕它转圈。",
                "body_en": "The sky spins around the north celestial pole — Polaris sits almost on it."
              },
              {
                "visual": "✨",
                "title_zh": "特殊在位置而非亮度",
                "title_en": "Special by position, not power",
                "body_zh": "北极星只是一颗普通二等星，并不算特别亮；它的特殊完全来自位置——正好在旋转轴旁。",
                "body_en": "Polaris is a modest star — famous for its spot on the axis, not its brightness."
              },
              {
                "visual": "🐻",
                "title_zh": "顺着北斗找过去",
                "title_en": "Find it via the Big Dipper",
                "body_zh": "沿北斗勺口两颗星连线向外延长约五倍，就会撞上北极星；仙后座的W形也是北天极的路标。",
                "body_en": "Extend the Big Dipper's pointer stars about five gaps outward to land on Polaris."
              }
            ],
            "questions": [
              {
                "id": "stg-a2-03-q1",
                "prompt_zh": "北极星看起来不动，是因为？",
                "prompt_en": "Why does Polaris seem to stand still?",
                "choices": [
                  {"label_zh": "它就在北天极附近", "label_en": "It sits near the pole"},
                  {"label_zh": "它离地球最近", "label_en": "It's the closest star"},
                  {"label_zh": "它自身不运动", "label_en": "It doesn't move at all"}
                ],
                "correct_idx": 0,
                "explain_zh": "旋转轴穿过北天极，附近的星划很小的圈。",
                "explain_en": "Stars near the pole just trace tiny circles around it."
              },
              {
                "id": "stg-a2-03-q2",
                "prompt_zh": "北极星是全天最亮的星吗？",
                "prompt_en": "Is Polaris the brightest star in the sky?",
                "choices": [
                  {"label_zh": "不是，只是位置特别", "label_en": "No — just well placed"},
                  {"label_zh": "是，亮度第一", "label_en": "Yes, brightest of all"},
                  {"label_zh": "只比天狼星暗一点", "label_en": "Only Sirius beats it"}
                ],
                "correct_idx": 0,
                "explain_zh": "它只是二等星，亮度远不如天狼、织女。",
                "explain_en": "It's a 2nd-magnitude star, far dimmer than Sirius or Vega."
              },
              {
                "id": "stg-a2-03-q3",
                "prompt_zh": "北天极附近的其他星星整夜在？",
                "prompt_en": "Other stars near the pole spend the night…",
                "choices": [
                  {"label_zh": "绕着极点转圈", "label_en": "Circling the pole"},
                  {"label_zh": "直线飞过天空", "label_en": "Moving in straight lines"},
                  {"label_zh": "随机漂移", "label_en": "Drifting at random"}
                ],
                "correct_idx": 0,
                "explain_zh": "长曝光照片能拍出同心圆星轨。",
                "explain_en": "Long exposures show them as concentric star trails."
              }
            ]
          }
        },
        {
          "left": -34,
          "lesson": {
            "id": "stg-a3-01-seasonal-sky",
            "title_zh": "四季星空轮转",
            "title_en": "The Sky Through the Year",
            "subtitle_zh": "为什么冬天看不到天蝎",
            "subtitle_en": "Why winter lacks Scorpius",
            "icon": "🎠",
            "xp": 20,
            "teach": [
              {
                "visual": "🎠",
                "title_zh": "星空每年换幕",
                "title_en": "A new sky each season",
                "body_zh": "地球绕太阳公转，夜晚背对太阳的一侧不断改变，于是每个季节面对的是不同的星空区域。",
                "body_en": "As Earth orbits, our night side faces a new slice of sky each season."
              },
              {
                "visual": "🗓️",
                "title_zh": "星座一年一见",
                "title_en": "Once a year, at night",
                "body_zh": "猎户座冬天挂在夜空，夏天则与太阳同升同落，淹没在阳光里，所以整整一个季节看不到。",
                "body_en": "Orion rules winter nights; in summer it rises with the Sun, lost in the glare."
              }
            ],
            "questions": [
              {
                "id": "stg-a3-01-q1",
                "prompt_zh": "四季星空更替的根本原因是？",
                "prompt_en": "What drives the changing sky through the year?",
                "choices": [
                  {"label_zh": "地球绕太阳公转", "label_en": "Earth's orbit around the Sun"},
                  {"label_zh": "恒星季节性移动", "label_en": "Stars migrate seasonally"},
                  {"label_zh": "月球引力牵引", "label_en": "The Moon's pull"}
                ],
                "correct_idx": 0,
                "explain_zh": "公转改变夜晚朝向的星空方向。",
                "explain_en": "The orbit keeps aiming our night side at new stars."
              },
              {
                "id": "stg-a3-01-q2",
                "prompt_zh": "夏夜看不到猎户座，因为它？",
                "prompt_en": "Why can't we see Orion on summer nights?",
                "choices": [
                  {"label_zh": "与太阳同在白天天空", "label_en": "It shares the daytime sky with the Sun"},
                  {"label_zh": "暂时熄灭了", "label_en": "It has switched off"},
                  {"label_zh": "跑到南半球去了", "label_en": "It moved to the southern sky"}
                ],
                "correct_idx": 0,
                "explain_zh": "它仍在天上，只是被阳光淹没。",
                "explain_en": "It's still up there — just drowned in sunlight."
              }
            ]
          }
        },
        {
          "left": -26,
          "lesson": {
            "id": "stg-a3-02-summer-sky",
            "title_zh": "夏夜星空",
            "title_en": "The Summer Sky",
            "subtitle_zh": "天蝎、银河与大三角",
            "subtitle_en": "Scorpius, the Milky Way & the Triangle",
            "icon": "🦂",
            "xp": 25,
            "teach": [
              {
                "visual": "🦂",
                "title_zh": "南天的蝎子",
                "title_en": "The southern scorpion",
                "body_zh": "天蝎座是夏夜南天的大星座：三颗星排成蝎头，弯钩是尾巴，红色亮星心宿二是它的心脏。",
                "body_en": "Scorpius rules the summer south — a curving tail and red Antares at its heart."
              },
              {
                "visual": "🌌",
                "title_zh": "夏夜银河最亮",
                "title_en": "The Milky Way at its best",
                "body_zh": "夏夜我们朝银河系中心方向望去，银河最宽最亮；冬夜朝外侧看，银河就黯淡许多。",
                "body_en": "In summer we face the Milky Way's center, so it glows wide and bright."
              },
              {
                "visual": "🔺",
                "title_zh": "夏季大三角",
                "title_en": "The Summer Triangle",
                "body_zh": "织女星、牛郎星和天津四连成的大三角横跨银河，是夏夜认星最可靠的路标。",
                "body_en": "Vega, Altair and Deneb span the Milky Way — summer's most reliable signposts."
              }
            ],
            "questions": [
              {
                "id": "stg-a3-02-q1",
                "prompt_zh": "心宿二是什么颜色的亮星？",
                "prompt_en": "What color is Antares?",
                "choices": [
                  {"label_zh": "红色", "label_en": "Red", "glyph": "🔴"},
                  {"label_zh": "蓝白色", "label_en": "Blue-white", "glyph": "🔵"},
                  {"label_zh": "金黄色", "label_en": "Golden", "glyph": "🟡"}
                ],
                "correct_idx": 0,
                "explain_zh": "它是红超巨星，表面温度低所以偏红。",
                "explain_en": "It's a red supergiant — a cool surface makes it glow red."
              },
              {
                "id": "stg-a3-02-q2",
                "prompt_zh": "夏季银河格外明亮，因为夏夜朝向？",
                "prompt_en": "Summer's Milky Way is brightest because we face…",
                "choices": [
                  {"label_zh": "银河系中心", "label_en": "The galactic center"},
                  {"label_zh": "太阳的方向", "label_en": "The Sun"},
                  {"label_zh": "最近的恒星", "label_en": "The nearest stars"}
                ],
                "correct_idx": 0,
                "explain_zh": "中心方向恒星更密集，亮带更醒目。",
                "explain_en": "More stars crowd the center, so the band stands out."
              },
              {
                "id": "stg-a3-02-q3",
                "prompt_zh": "下列哪颗星不在夏季大三角里？",
                "prompt_en": "Which star is NOT in the Summer Triangle?",
                "choices": [
                  {"label_zh": "天狼星", "label_en": "Sirius"},
                  {"label_zh": "织女星", "label_en": "Vega"},
                  {"label_zh": "牛郎星", "label_en": "Altair"}
                ],
                "correct_idx": 0,
                "explain_zh": "天狼星是冬季亮星，不在大三角里。",
                "explain_en": "Sirius belongs to winter skies, not the Triangle."
              }
            ]
          }
        },
        {
          "left": 0,
          "lesson": {
            "id": "stg-a3-04-winter-sky",
            "title_zh": "冬夜星空",
            "title_en": "The Winter Sky",
            "subtitle_zh": "天狼星与冬季六边形",
            "subtitle_en": "Sirius & the Winter Hexagon",
            "icon": "❄️",
            "xp": 25,
            "teach": [
              {
                "visual": "🐺",
                "title_zh": "全天最亮的恒星",
                "title_en": "The brightest star of all",
                "body_zh": "天狼星是夜空最亮的恒星，闪着蓝白光。它其实只是颗普通亮度的星，胜在离我们近：约8.6光年。",
                "body_en": "Sirius rules the night sky — not by power but by proximity: only 8.6 light-years."
              },
              {
                "visual": "🔷",
                "title_zh": "冬季六边形",
                "title_en": "The Winter Hexagon",
                "body_zh": "天狼、南河三、北河三等六颗亮星围成一个巨大的六边形，横跨冬夜大半个天空，是认星的好路标。",
                "body_en": "Sirius, Procyon, Pollux and friends loop a giant hexagon across winter skies."
              },
              {
                "visual": "🌟",
                "title_zh": "天狼星有个隐身伙伴",
                "title_en": "Sirius has a hidden partner",
                "body_zh": "天狼星旁有一颗白矮星伴星“天狼B”，又小又暗，是恒星演化末期残骸的第一个例证。",
                "body_en": "A tiny white dwarf, Sirius B, hides beside it — the first dead star ever found."
              }
            ],
            "questions": [
              {
                "id": "stg-a3-04-q1",
                "prompt_zh": "天狼星成为全天最亮恒星，主要因为？",
                "prompt_en": "Why is Sirius the brightest star in our sky?",
                "choices": [
                  {"label_zh": "距离近", "label_en": "It's nearby"},
                  {"label_zh": "光度最高", "label_en": "It's the most powerful"},
                  {"label_zh": "体积最大", "label_en": "It's the biggest"}
                ],
                "correct_idx": 0,
                "explain_zh": "它光度只约太阳25倍，近才是主因。",
                "explain_en": "It's only ~25 Suns bright — being close does the rest."
              },
              {
                "id": "stg-a3-04-q2",
                "prompt_zh": "冬季六边形是哪个季节夜空的路标？",
                "prompt_en": "The Winter Hexagon guides you in…",
                "choices": [
                  {"label_zh": "冬季", "label_en": "Winter", "glyph": "🌨️"},
                  {"label_zh": "夏季", "label_en": "Summer", "glyph": "☀️"},
                  {"label_zh": "秋季", "label_en": "Autumn", "glyph": "🍂"}
                ],
                "correct_idx": 0,
                "explain_zh": "这六颗亮星都是冬季星空的成员。",
                "explain_en": "All six beacons belong to winter's sky."
              },
              {
                "id": "stg-a3-04-q3",
                "prompt_zh": "天狼B是什么天体？",
                "prompt_en": "What is Sirius B?",
                "choices": [
                  {"label_zh": "白矮星", "label_en": "A white dwarf"},
                  {"label_zh": "行星", "label_en": "A planet"},
                  {"label_zh": "星云", "label_en": "A nebula"}
                ],
                "correct_idx": 0,
                "explain_zh": "它是恒星燃尽后的致密残骸。",
                "explain_en": "It's the dense leftover of a burnt-out star."
              }
            ]
          }
        },
        {
          "left": 26,
          "lesson": {
            "id": "stg-a5-03-venus-phases",
            "title_zh": "金星的相位",
            "title_en": "Phases of Venus",
            "subtitle_zh": "伽利略看到的关键证据",
            "subtitle_en": "The evidence Galileo saw",
            "icon": "🌗",
            "xp": 25,
            "teach": [
              {
                "visual": "🌗",
                "title_zh": "金星也会圆缺",
                "title_en": "Venus waxes and wanes",
                "body_zh": "用小望远镜看金星，能看到像月亮一样的相位：从细细的月牙渐渐变圆，周而复始。",
                "body_en": "In a small telescope, Venus shows moon-like phases, crescent to nearly full."
              },
              {
                "visual": "🔭",
                "title_zh": "动摇地心说的观测",
                "title_en": "The observation that shook the old order",
                "body_zh": "伽利略看到金星有完整相位变化，说明金星绕太阳转而不是绕地球转，为日心说提供了关键证据。",
                "body_en": "Galileo saw full phases, proving Venus orbits the Sun, not Earth."
              }
            ],
            "questions": [
              {
                "id": "stg-a5-03-q1",
                "prompt_zh": "金星相位变化说明什么？",
                "prompt_en": "What do Venus's phases reveal?",
                "choices": [
                  {"label_zh": "金星绕太阳运行", "label_en": "Venus orbits the Sun"},
                  {"label_zh": "金星被地球遮挡", "label_en": "Earth blocks Venus"},
                  {"label_zh": "金星在快速自转", "label_en": "Venus spins fast"}
                ],
                "correct_idx": 0,
                "explain_zh": "若金星绕地球转，就不会出现满相位。",
                "explain_en": "Full phases are impossible if Venus circles Earth."
              },
              {
                "id": "stg-a5-03-q2",
                "prompt_zh": "肉眼能看到金星的相位吗？",
                "prompt_en": "Can you see Venus's phases with the naked eye?",
                "choices": [
                  {"label_zh": "不行，需要望远镜", "label_en": "No — you need a telescope"},
                  {"label_zh": "可以，像月亮一样明显", "label_en": "Yes, plainly"},
                  {"label_zh": "满月之夜可以", "label_en": "Only at full moon"}
                ],
                "correct_idx": 0,
                "explain_zh": "金星角直径太小，肉眼无法分辨。",
                "explain_en": "Venus looks tiny — too small for the eye to resolve."
              },
              {
                "id": "stg-a5-03-q3",
                "prompt_zh": "谁最早用金星相位支持日心说？",
                "prompt_en": "Who first used Venus's phases to back heliocentrism?",
                "choices": [
                  {"label_zh": "伽利略", "label_en": "Galileo"},
                  {"label_zh": "托勒密", "label_en": "Ptolemy"},
                  {"label_zh": "牛顿", "label_en": "Newton"}
                ],
                "correct_idx": 0,
                "explain_zh": "1609年后他用自制望远镜完成观测。",
                "explain_en": "He watched through his own telescope after 1609."
              }
            ]
          }
        }
      ]
    }
  ]
}
```