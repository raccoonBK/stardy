```json
{
  "tracks": [
    {
      "id": "cosmos",
      "name_zh": "星系与宇宙",
      "name_en": "Galaxies & the Cosmos",
      "tagline_zh": "从银河到宇宙的尽头",
      "tagline_en": "From the Milky Way to the edge of everything",
      "icon": "🌌",
      "nodes": [
        {
          "chapter_zh": "第 7 章 · 银河、星系与暗宇宙",
          "chapter_en": "Chapter 7 · The Galaxy, Galaxies & the Dark Universe",
          "left": 0,
          "lesson": {
            "id": "cos-d1-01-galaxy-rotation",
            "title_zh": "银河系的旋臂与自转",
            "title_en": "Milky Way: Spiral Arms & Rotation",
            "subtitle_zh": "我们住在哪条旋臂上",
            "subtitle_en": "Which arm do we live in",
            "icon": "🌀",
            "xp": 20,
            "teach": [
              {
                "visual": "🌀",
                "title_zh": "带旋涡的圆盘",
                "title_en": "A disk with arms",
                "body_zh": "银河系是一个棒旋星系：中间是恒星密集的核球和棒，外围圆盘上甩出几条旋臂。太阳就住在猎户臂上，距银心约2.6万光年。",
                "body_en": "The Milky Way is a barred spiral — a crowded core, a long bar, and sweeping arms. The Sun rides the Orion Arm, ~26,000 light-years out."
              },
              {
                "visual": "🚗",
                "title_zh": "绕一圈要2.3亿年",
                "title_en": "A 230-million-year lap",
                "body_zh": "太阳带着行星以约每秒220公里绕银心公转，转一圈约2.3亿年。恐龙崛起到现在，太阳才刚跑完一圈多一点。",
                "body_en": "The Sun laps the galactic center at ~220 km/s — one lap takes about 230 million years."
              }
            ],
            "questions": [
              {
                "id": "cos-d1-01-q1",
                "prompt_zh": "银河系的形状是？",
                "prompt_en": "The Milky Way is shaped like…",
                "choices": [
                  {"label_zh": "棒旋星系", "label_en": "A barred spiral", "glyph": "🌀"},
                  {"label_zh": "椭圆星系", "label_en": "An ellipse", "glyph": "🥚"},
                  {"label_zh": "不规则星系", "label_en": "An irregular blob", "glyph": "☁️"}
                ],
                "correct_idx": 0,
                "explain_zh": "有中心棒和数条旋臂，属于棒旋星系。",
                "explain_en": "A central bar plus arms — a barred spiral."
              },
              {
                "id": "cos-d1-01-q2",
                "prompt_zh": "太阳绕银河系中心转一圈大约需要？",
                "prompt_en": "The Sun takes about… to orbit the galaxy once.",
                "choices": [
                  {"label_zh": "2.3亿年", "label_en": "230 million years", "glyph": "⏳"},
                  {"label_zh": "1年", "label_en": "1 year", "glyph": "📅"},
                  {"label_zh": "1万年", "label_en": "10,000 years", "glyph": "🗓️"}
                ],
                "correct_idx": 0,
                "explain_zh": "这个“银河年”比地球生命史还长得多。",
                "explain_en": "One 'galactic year' outlasts most of life's history on Earth."
              },
              {
                "id": "cos-d1-01-q3",
                "prompt_zh": "旋臂并不是固定的“绳子”，它是？",
                "prompt_en": "Spiral arms are not fixed ropes — they are…",
                "choices": [
                  {"label_zh": "恒星穿行的密度波", "label_en": "Density waves stars drift through"},
                  {"label_zh": "同一批恒星在转圈", "label_en": "The same stars circling"},
                  {"label_zh": "发光的气体喷流", "label_en": "Jets of glowing gas"}
                ],
                "correct_idx": 0,
                "explain_zh": "像高速公路上的拥堵段，车在换，堵在原地。",
                "explain_en": "Like a traffic jam: cars change, the jam stays put."
              }
            ]
          }
        },
        {
          "left": 26,
          "lesson": {
            "id": "cos-d1-02-sgr-a-star",
            "title_zh": "银心：人马座A*",
            "title_en": "The Galactic Center: Sgr A*",
            "subtitle_zh": "银河系中心的巨兽",
            "subtitle_en": "The beast at the heart of the galaxy",
            "icon": "🕳️",
            "xp": 25,
            "teach": [
              {
                "visual": "🕳️",
                "title_zh": "四百万个太阳",
                "title_en": "Four million suns",
                "body_zh": "银河系中心藏着一个超大质量黑洞人马座A*，质量约400万倍太阳。恒星S2绕它高速转圈，轨道完美符合广义相对论。",
                "body_en": "At our galaxy's heart sits Sagittarius A*, a black hole of ~4 million solar masses. Star S2 whips around it on relativistic orbits."
              },
              {
                "visual": "📸",
                "title_zh": "给它拍了张照片",
                "title_en": "It's been photographed",
                "body_zh": "2022年事件视界望远镜发布了人马座A*的照片：一团被引力弯曲的发光光环，中央是影子。",
                "body_en": "In 2022 the Event Horizon Telescope imaged Sgr A*: a glowing ring of bent light around a dark shadow."
              }
            ],
            "questions": [
              {
                "id": "cos-d1-02-q1",
                "prompt_zh": "人马座A*是？",
                "prompt_en": "Sagittarius A* is…",
                "choices": [
                  {"label_zh": "银河系中心的超大质量黑洞", "label_en": "The Milky Way's central black hole"},
                  {"label_zh": "一颗超亮恒星", "label_en": "A brilliant star"},
                  {"label_zh": "一个球状星团", "label_en": "A globular cluster"}
                ],
                "correct_idx": 0,
                "explain_zh": "质量约400万倍太阳，是我们最近的超大质量黑洞。",
                "explain_en": "Four million suns' worth of mass — our nearest supermassive black hole."
              },
              {
                "id": "cos-d1-02-q2",
                "prompt_zh": "天文学家如何“称出”银心黑洞的质量？",
                "prompt_en": "How was the central black hole weighed?",
                "choices": [
                  {"label_zh": "追踪附近恒星的轨道", "label_en": "By tracking stars orbiting it"},
                  {"label_zh": "直接拍特写照片", "label_en": "From a close-up photo"},
                  {"label_zh": "测量它的亮度", "label_en": "From its brightness"}
                ],
                "correct_idx": 0,
                "explain_zh": "S2等恒星的轨道速度和周期给出中心质量。",
                "explain_en": "Orbits of stars like S2 reveal the central mass."
              }
            ]
          }
        },
        {
          "left": 34,
          "lesson": {
            "id": "cos-d2-01-cosmic-distance",
            "title_zh": "宇宙距离阶梯",
            "title_en": "The Cosmic Distance Ladder",
            "subtitle_zh": "一级一级量到星系",
            "subtitle_en": "Stepping out to the galaxies",
            "icon": "🪜",
            "xp": 25,
            "teach": [
              {
                "visual": "🪜",
                "title_zh": "层层接力",
                "title_en": "A relay of methods",
                "body_zh": "近星用视差定标；造父变星周光关系接力量到星系；更远用超新星和星系红移。每一级都靠上一级校准。",
                "body_en": "Parallax calibrates nearby stars; Cepheids reach galaxies; supernovae and redshift go further. Each rung builds on the last."
              },
              {
                "visual": "🕯️",
                "title_zh": "标准烛光",
                "title_en": "Standard candles",
                "body_zh": "造父变星越亮，光变周期越长，量出周期就知道真实光度，再对比看到的亮度就算出距离——勒维特发现的这条定律打开了星系的大门。",
                "body_en": "Cepheids pulse slower when brighter — measure the period, know the power, compare with apparent brightness. Henrietta Leavitt's law opened the galaxies."
              }
            ],
            "questions": [
              {
                "id": "cos-d2-01-q1",
                "prompt_zh": "造父变星被用来测量？",
                "prompt_en": "Cepheid variables are used to measure…",
                "choices": [
                  {"label_zh": "星系级距离", "label_en": "Galaxy-scale distances"},
                  {"label_zh": "恒星温度", "label_en": "Stellar temperatures"},
                  {"label_zh": "行星质量", "label_en": "Planetary masses"}
                ],
                "correct_idx": 0,
                "explain_zh": "周光关系让它成为量天尺。",
                "explain_en": "Their period-luminosity law makes them cosmic yardsticks."
              },
              {
                "id": "cos-d2-01-q2",
                "prompt_zh": "“标准烛光”指的是？",
                "prompt_en": "A 'standard candle' is…",
                "choices": [
                  {"label_zh": "已知真实光度的天体", "label_en": "An object of known true brightness"},
                  {"label_zh": "一支太空蜡烛", "label_en": "A candle in space"},
                  {"label_zh": "恒定的灯光信号", "label_en": "A steady light signal"}
                ],
                "correct_idx": 0,
                "explain_zh": "知道它多亮，看它多暗，就算出多远。",
                "explain_en": "Know how bright it is, see how faint it looks, solve for distance."
              },
              {
                "id": "cos-d2-01-q3",
                "prompt_zh": "宇宙距离阶梯为什么要“接力”？",
                "prompt_en": "Why does the distance ladder need rungs?",
                "choices": [
                  {"label_zh": "每种方法只适用一段距离范围", "label_en": "Each method covers a limited range"},
                  {"label_zh": "为了节约望远镜时间", "label_en": "To save telescope time"},
                  {"label_zh": "历史习惯", "label_en": "Pure tradition"}
                ],
                "correct_idx": 0,
                "explain_zh": "视差够不着远星，红移又不适于近星，只能梯级延伸。",
                "explain_en": "Parallax can't reach far; redshift fails nearby — so rungs connect them."
              }
            ]
          }
        },
        {
          "left": 26,
          "lesson": {
            "id": "cos-d3-01-rotation-curve",
            "title_zh": "自转曲线之谜",
            "title_en": "The Rotation Curve Mystery",
            "subtitle_zh": "星系转得太快了",
            "subtitle_en": "Galaxies spin too fast",
            "icon": "📈",
            "xp": 25,
            "teach": [
              {
                "visual": "📈",
                "title_zh": "该慢的地方没慢",
                "title_en": "Where it should slow, it doesn't",
                "body_zh": "按可见物质计算，星系外围恒星离中心越远应该转得越慢，像太阳系外围行星那样。但实测自转曲线在远处依然平直——外围恒星转得出乎意料地快。",
                "body_en": "With only visible matter, outer stars should slow down like outer planets. Instead, rotation curves stay flat — the edges spin far too fast."
              },
              {
                "visual": "🌫️",
                "title_zh": "看不见的质量",
                "title_en": "Unseen mass",
                "body_zh": "鲁宾等人的观测说明星系里藏着大量不发光的物质，把外围恒星拽住。这就是暗物质存在的第一个铁证。",
                "body_en": "Vera Rubin's measurements implied vast unseen mass holding stars in place — the first hard evidence for dark matter."
              }
            ],
            "questions": [
              {
                "id": "cos-d3-01-q1",
                "prompt_zh": "星系自转曲线平坦意味着？",
                "prompt_en": "Flat rotation curves mean…",
                "choices": [
                  {"label_zh": "存在大量看不见的物质", "label_en": "Lots of invisible mass is present"},
                  {"label_zh": "万有引力定律错了", "label_en": "Gravity itself is wrong"},
                  {"label_zh": "测量仪器有系统误差", "label_en": "Instruments are biased"}
                ],
                "correct_idx": 0,
                "explain_zh": "主流解释是暗物质：只参与引力，不发光。",
                "explain_en": "The leading answer: dark matter — gravitational but invisible."
              },
              {
                "id": "cos-d3-01-q2",
                "prompt_zh": "如果星系只有可见物质，外围恒星应该？",
                "prompt_en": "With visible matter alone, outer stars should…",
                "choices": [
                  {"label_zh": "转得更慢", "label_en": "Spin slower"},
                  {"label_zh": "转得更快", "label_en": "Spin faster"},
                  {"label_zh": "保持不变", "label_en": "Stay the same"}
                ],
                "correct_idx": 0,
                "explain_zh": "类似太阳系：越远越慢（开普勒式下降）。",
                "explain_en": "Kepler-style: farther out, slower spin."
              }
            ]
          }
        },
        {
          "left": 0,
          "lesson": {
            "id": "cos-d3-02-dark-matter",
            "title_zh": "暗物质是什么",
            "title_en": "What Is Dark Matter",
            "subtitle_zh": "宇宙的隐形骨架",
            "subtitle_en": "The invisible skeleton",
            "icon": "🕸️",
            "xp": 25,
            "teach": [
              {
                "visual": "🕸️",
                "title_zh": "占宇宙的27%",
                "title_en": "27% of the universe",
                "body_zh": "宇宙约27%是暗物质，约68%是暗能量，我们熟悉的普通物质只占约5%。星系团和宇宙网都架在暗物质的骨架上。",
                "body_en": "~27% dark matter, ~68% dark energy — ordinary matter is a mere ~5%. Galaxies and cosmic webs hang on dark scaffolds."
              },
              {
                "visual": "🔬",
                "title_zh": "只闻其引力",
                "title_en": "Known only by gravity",
                "body_zh": "暗物质不发光、不挡光、不碰任何东西，只通过引力显形。子弹星系团里碰撞的气体和引力中心错位，就是它存在的独立证据。",
                "body_en": "It neither glows nor blocks nor collides — only gravity betrays it. The Bullet Cluster's offset gravity is independent proof."
              }
            ],
            "questions": [
              {
                "id": "cos-d3-02-q1",
                "prompt_zh": "暗物质在宇宙物质中大约占多少？",
                "prompt_en": "Dark matter makes up about… of the universe.",
                "choices": [
                  {"label_zh": "27%", "label_en": "27%", "glyph": "2️⃣7️⃣"},
                  {"label_zh": "90%", "label_en": "90%", "glyph": "9️⃣"},
                  {"label_zh": "1%", "label_en": "1%", "glyph": "1️⃣"}
                ],
                "correct_idx": 0,
                "explain_zh": "加上68%的暗能量，普通物质仅约5%。",
                "explain_en": "With 68% dark energy, ordinary matter is just ~5%."
              },
              {
                "id": "cos-d3-02-q2",
                "prompt_zh": "暗物质“暗”在哪里？",
                "prompt_en": "Why is dark matter 'dark'?",
                "choices": [
                  {"label_zh": "不发光也不吸收光", "label_en": "It neither emits nor absorbs light"},
                  {"label_zh": "颜色是黑色的", "label_en": "It's colored black"},
                  {"label_zh": "躲在黑洞里", "label_en": "It hides in black holes"}
                ],
                "correct_idx": 0,
                "explain_zh": "除引力外几乎不与任何东西相互作用。",
                "explain_en": "Apart from gravity, it barely interacts with anything."
              },
              {
                "id": "cos-d3-02-q3",
                "prompt_zh": "除了自转曲线，暗物质的另一证据是？",
                "prompt_en": "Besides rotation curves, dark matter is evidenced by…",
                "choices": [
                  {"label_zh": "引力透镜和星系团观测", "label_en": "Gravitational lensing and clusters"},
                  {"label_zh": "月球的轨道", "label_en": "The Moon's orbit"},
                  {"label_zh": "太阳黑子周期", "label_en": "The sunspot cycle"}
                ],
                "correct_idx": 0,
                "explain_zh": "引力透镜测出的质量远超发光物质。",
                "explain_en": "Lensing reveals far more mass than the light shows."
              }
            ]
          }
        },
        {
          "left": -26,
          "lesson": {
            "id": "cos-d4-01-expansion",
            "title_zh": "宇宙膨胀与红移",
            "title_en": "Expansion & Redshift",
            "subtitle_zh": "星系都在离我们远去",
            "subtitle_en": "Galaxies are racing away",
            "icon": "🎈",
            "xp": 25,
            "teach": [
              {
                "visual": "🎈",
                "title_zh": "不是在跑，是路在拉长",
                "title_en": "Not racing — the road stretches",
                "body_zh": "星系光谱普遍向红端偏移，说明它们在远离。但不是星系在空间中飞奔，而是空间本身在膨胀，把星系彼此拉开。",
                "body_en": "Galaxy light is redshifted — they recede. Not through space: space itself stretches between them."
              },
              {
                "visual": "🧁",
                "title_zh": "葡萄干面包模型",
                "title_en": "The raisin bread",
                "body_zh": "想象烤面包里的葡萄干：面团膨胀时，每粒葡萄干看别的葡萄干都在远离，而且越远的退行越快。没有哪粒是“中心”。",
                "body_en": "In rising dough, every raisin sees others recede — the farther, the faster. No raisin is the center."
              }
            ],
            "questions": [
              {
                "id": "cos-d4-01-q1",
                "prompt_zh": "星系红移表明？",
                "prompt_en": "Galactic redshift tells us…",
                "choices": [
                  {"label_zh": "宇宙在膨胀", "label_en": "The universe is expanding"},
                  {"label_zh": "星系在变冷", "label_en": "Galaxies are cooling"},
                  {"label_zh": "光在疲劳变红", "label_en": "Light tires and reddens"}
                ],
                "correct_idx": 0,
                "explain_zh": "波长被膨胀的空间拉长，就是宇宙学红移。",
                "explain_en": "Stretching space lengthens light waves — cosmological redshift."
              },
              {
                "id": "cos-d4-01-q2",
                "prompt_zh": "按葡萄干面包模型，宇宙膨胀有没有中心？",
                "prompt_en": "Does expansion have a center?",
                "choices": [
                  {"label_zh": "没有，每个观察者都看到别人退行", "label_en": "No — everyone sees others recede"},
                  {"label_zh": "中心在银河系", "label_en": "The Milky Way is the center"},
                  {"label_zh": "中心在大爆炸地点", "label_en": "The Big Bang site"}
                ],
                "correct_idx": 0,
                "explain_zh": "膨胀发生在每处，而不是从某点向外炸开。",
                "explain_en": "Expansion happens everywhere — no blast site exists."
              }
            ]
          }
        },
        {
          "left": -34,
          "lesson": {
            "id": "cos-d4-02-hubble-law",
            "title_zh": "哈勃定律与宇宙年龄",
            "title_en": "Hubble's Law & the Age of the Universe",
            "subtitle_zh": "越远跑得越快",
            "subtitle_en": "Farther away, faster away",
            "icon": "📏",
            "xp": 25,
            "teach": [
              {
                "visual": "📐",
                "title_zh": "速度正比于距离",
                "title_en": "Speed proportional to distance",
                "body_zh": "哈勃发现星系退行速度与距离成正比：v=H₀×d。倒推膨胀速率，得出宇宙年龄约138亿年。",
                "body_en": "Hubble found recession speed ∝ distance: v = H₀ × d. Rewinding gives a universe ~13.8 billion years old."
              },
              {
                "visual": "🕰️",
                "title_zh": "一场世纪大辩论的终结",
                "title_en": "Ending a great debate",
                "body_zh": "1920年代前，人们争论“星云是不是银河系内的天体”。哈勃用造父变星量出仙女座远在银河系之外，星系从此是独立的宇宙岛。",
                "body_en": "Before the 1920s, 'nebulae' might have been inside our galaxy. Hubble's Cepheids proved Andromeda lay far beyond — galaxies became islands."
              }
            ],
            "questions": [
              {
                "id": "cos-d4-02-q1",
                "prompt_zh": "哈勃定律说的是？",
                "prompt_en": "Hubble's law states that…",
                "choices": [
                  {"label_zh": "退行速度与距离成正比", "label_en": "Recession speed ∝ distance"},
                  {"label_zh": "星系越远越亮", "label_en": "Farther galaxies are brighter"},
                  {"label_zh": "宇宙大小恒定", "label_en": "The universe is static"}
                ],
                "correct_idx": 0,
                "explain_zh": "比例常数就是哈勃常数。",
                "explain_en": "The constant of proportion is the Hubble constant."
              },
              {
                "id": "cos-d4-02-q2",
                "prompt_zh": "宇宙的年龄大约是？",
                "prompt_en": "The universe is about… old.",
                "choices": [
                  {"label_zh": "138亿年", "label_en": "13.8 billion years", "glyph": "1️⃣3️⃣"},
                  {"label_zh": "460万年", "label_en": "4.6 million years", "glyph": "4️⃣"},
                  {"label_zh": "无限古老", "label_en": "Infinitely old", "glyph": "♾️"}
                ],
                "correct_idx": 0,
                "explain_zh": "由哈勃常数和宇宙学观测共同得出。",
                "explain_en": "Derived from Hubble's constant plus cosmological data."
              }
            ]
          }
        },
        {
          "left": -26,
          "lesson": {
            "id": "cos-d4-03-cmb",
            "title_zh": "宇宙微波背景",
            "title_en": "The Cosmic Microwave Background",
            "subtitle_zh": "大爆炸的余晖",
            "subtitle_en": "The afterglow of the Big Bang",
            "icon": "📺",
            "xp": 30,
            "teach": [
              {
                "visual": "📺",
                "title_zh": "无处不在的微弱噪声",
                "title_en": "A faint hum everywhere",
                "body_zh": "宇宙诞生约38万年后，光子第一次自由穿行，这些“最古老的光”经过138亿年膨胀，冷却成微波，今天仍从天空每个方向照来。",
                "body_en": "380,000 years after the Big Bang, light first traveled free; stretched over 13.8 billion years, it now arrives as microwaves from every direction."
              },
              {
                "visual": "🗺️",
                "title_zh": "宇宙的婴儿照",
                "title_en": "The universe's baby photo",
                "body_zh": "彭齐亚斯和威尔逊1965年偶然发现这种噪声。它温度涨落只有十万分之一，却是日后所有星系长大的种子。",
                "body_en": "Penzias and Wilson stumbled on it in 1965. Its parts-per-100,000 ripples were the seeds of every galaxy."
              }
            ],
            "questions": [
              {
                "id": "cos-d4-03-q1",
                "prompt_zh": "宇宙微波背景是什么？",
                "prompt_en": "The CMB is…",
                "choices": [
                  {"label_zh": "大爆炸留下的古老光", "label_en": "Ancient light from the Big Bang"},
                  {"label_zh": "银河系的射电噪声", "label_en": "Radio noise from our galaxy"},
                  {"label_zh": "第一批恒星的星光", "label_en": "Light from the first stars"}
                ],
                "correct_idx": 0,
                "explain_zh": "它是宇宙约38万年时的“照片”。",
                "explain_en": "A snapshot from when the universe was 380,000 years old."
              },
              {
                "id": "cos-d4-03-q2",
                "prompt_zh": "CMB中的微小温度涨落重要在哪？",
                "prompt_en": "Why do CMB ripples matter?",
                "choices": [
                  {"label_zh": "它们是星系形成的种子", "label_en": "They seeded galaxy formation"},
                  {"label_zh": "证明宇宙在降温", "label_en": "They show the universe cooling"},
                  {"label_zh": "只是仪器噪声", "label_en": "They're just instrument noise"}
                ],
                "correct_idx": 0,
                "explain_zh": "密度微差的地点后来长出恒星和星系。",
                "explain_en": "Slight density spots later grew into stars and galaxies."
              },
              {
                "id": "cos-d4-03-q3",
                "prompt_zh": "宇宙微波背景是偶然发现的，发现者是？",
                "prompt_en": "The CMB was found accidentally by…",
                "choices": [
                  {"label_zh": "彭齐亚斯和威尔逊", "label_en": "Penzias and Wilson"},
                  {"label_zh": "哈勃", "label_en": "Hubble"},
                  {"label_zh": "伽利略", "label_en": "Galileo"}
                ],
                "correct_idx": 0,
                "explain_zh": "他们本来在调试天线，起初以为噪声来自鸽子粪。",
                "explain_en": "They were tuning an antenna — and first blamed pigeon droppings."
              }
            ]
          }
        },
        {
          "left": 0,
          "lesson": {
            "id": "cos-d4-04-dark-energy",
            "title_zh": "暗能量：加速膨胀",
            "title_en": "Dark Energy: The Accelerating Universe",
            "subtitle_zh": "宇宙不仅在膨胀，还在加速",
            "subtitle_en": "Not just expanding — speeding up",
            "icon": "🚀",
            "xp": 30,
            "teach": [
              {
                "visual": "🚀",
                "title_zh": "1998年的意外",
                "title_en": "The 1998 surprise",
                "body_zh": "两个团队用Ia型超新星测遥远宇宙的距离，本想看膨胀在减速，结果发现它在加速——这背后是神秘的暗能量。",
                "body_en": "Two teams using Type Ia supernovae expected deceleration — instead they found acceleration, powered by dark energy."
              },
              {
                "visual": "🏁",
                "title_zh": "引力的反方",
                "title_en": "Gravity's opponent",
                "body_zh": "物质靠引力拉住宇宙，暗能量却像内压力推着空间加速伸展。大约50亿年前，暗能量开始占上风，宇宙从此越胀越快。",
                "body_en": "Matter pulls the universe together; dark energy pushes it apart — and took the lead about 5 billion years ago."
              }
            ],
            "questions": [
              {
                "id": "cos-d4-04-q1",
                "prompt_zh": "发现宇宙加速膨胀的关键观测是？",
                "prompt_en": "Accelerating expansion was revealed by…",
                "choices": [
                  {"label_zh": "遥远Ia型超新星的亮度", "label_en": "Distant Type Ia supernovae"},
                  {"label_zh": "月球的轨道", "label_en": "The Moon's orbit"},
                  {"label_zh": "彗星的回归", "label_en": "Returning comets"}
                ],
                "correct_idx": 0,
                "explain_zh": "超新星比预期更暗更远，说明膨胀在加速。",
                "explain_en": "Supernovae looked too faint and too far — expansion was speeding up."
              },
              {
                "id": "cos-d4-04-q2",
                "prompt_zh": "当前宇宙的主导成分是？",
                "prompt_en": "The universe today is dominated by…",
                "choices": [
                  {"label_zh": "暗能量", "label_en": "Dark energy", "glyph": "🚀"},
                  {"label_zh": "暗物质", "label_en": "Dark matter", "glyph": "🕸️"},
                  {"label_zh": "普通物质", "label_en": "Ordinary matter", "glyph": "🪨"}
                ],
                "correct_idx": 0,
                "explain_zh": "暗能量约68%，是当前宇宙最大份额。",
                "explain_en": "~68% — the largest share today."
              }
            ]
          }
        }
      ]
    }
  ]
}
```