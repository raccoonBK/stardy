```json
{
  "tracks": [
    {
      "id": "cosmos",
      "name_zh": "星系与宇宙",
      "name_en": "Galaxies & the Universe",
      "tagline_zh": "从银河深处看到宇宙尽头",
      "tagline_en": "From the Milky Way to the edge",
      "icon": "🌌",
      "nodes": [
        {
          "chapter_zh": "第 7 章 · 银河系、暗物质与宇宙学",
          "chapter_en": "Chapter 7 · The Galaxy, Dark Matter & Cosmology",
          "left": 0,
          "lesson": {
            "id": "cos-d1-01-galaxy-rotation",
            "title_zh": "银河系的旋转",
            "title_en": "The Milky Way's Spin",
            "subtitle_zh": "恒星也要跑圈",
            "subtitle_en": "Even stars run laps",
            "icon": "🌀",
            "xp": 30,
            "teach": [
              {
                "visual": "🥞",
                "title_zh": "一张比煎饼更平的唱片",
                "title_en": "Flatter than a pancake",
                "body_zh": "银河系约有近 2000 亿颗恒星，聚在直径约 10 万光年、厚约 1000 光年的圆盘上——直径与厚度之比 1000:1，比任何煎饼都平。整个盘子还在不停旋转。",
                "body_en": "The Milky Way packs ~200 billion stars into a disk 100,000 light-years wide but only ~1,000 thick — a 1000:1 ratio, flatter than any pancake. And the whole disk spins."
              },
              {
                "visual": "⚖️",
                "title_zh": "离心力和引力的拉锯",
                "title_en": "Spin vs. gravity",
                "body_zh": "这个恒星与气体圆盘靠两股力维持：旋转产生的离心力向外甩，自身引力向里拉，两者制衡，圆盘才不散架也不坍缩。恒星的轨道可分解为盘面旋转加上下振荡。",
                "body_en": "The disk survives on a truce: rotation's outward push versus gravity's inward pull. Each star's orbit combines circling in the plane with a gentle bob above and below it."
              },
              {
                "visual": "☀️",
                "title_zh": "太阳的公转圈",
                "title_en": "The Sun's lap",
                "body_zh": "太阳住在离银心约 3 万光年的近圆轨道上，绕银心一圈约 2.4 亿年——天文学家管这一圈叫一个「宇宙年」。太阳至今大约已经转了 20 圈。",
                "body_en": "The Sun rides a near-circular track ~30,000 light-years from the galactic center, completing a lap every 240 million years — one 'cosmic year.' It has logged about 20 so far."
              },
              {
                "visual": "🧊",
                "title_zh": "为什么会这么扁",
                "title_en": "Why so flat?",
                "body_zh": "银河系可能由一个巨大、缓慢旋转的气体球坍缩而成：像滑冰运动员收拢手臂，越缩越转越快，离心力把两极方向压扁，气体被限制在中间盘面上——后来的恒星都在盘里出生。",
                "body_en": "The Milky Way likely collapsed from a huge, slowly spinning gas ball. Like a skater pulling in her arms, it spun faster as it shrank, squashing into a disk where later stars — including the Sun — were born."
              }
            ],
            "questions": [
              {
                "id": "cos-d1-01-q1",
                "based_on": "teach[1]",
                "prompt_zh": "银河系恒星盘的直径大约是？",
                "prompt_en": "The Milky Way's stellar disk is about:",
                "figure": "🌀",
                "choices": [
                  {"label_zh": "10 万光年", "label_en": "100,000 light-years", "glyph": "🥞"},
                  {"label_zh": "10 光年", "label_en": "10 light-years", "glyph": "❌"},
                  {"label_zh": "10 亿光年", "label_en": "1 billion light-years", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "近 2000 亿颗恒星聚在直径约 10 万光年的圆盘上。",
                "explain_en": "~200 billion stars in a 100,000-light-year disk."
              },
              {
                "id": "cos-d1-01-q2",
                "based_on": "teach[2]",
                "prompt_zh": "银河系圆盘靠什么维持不散架？",
                "prompt_en": "What keeps the galactic disk from flying apart?",
                "choices": [
                  {"label_zh": "旋转离心力与引力的制衡", "label_en": "A balance of rotation and gravity", "glyph": "⚖️"},
                  {"label_zh": "外壳的包裹", "label_en": "An outer shell", "glyph": "❌"},
                  {"label_zh": "银心的黑洞吸住一切", "label_en": "The central black hole sucking it in", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "离心力向外甩、引力向里拉，两者长期制衡。",
                "explain_en": "Outward spin vs. inward pull, holding steady."
              },
              {
                "id": "cos-d1-01-q3",
                "based_on": "teach[3]",
                "prompt_zh": "太阳绕银心一圈所需时间叫作？",
                "prompt_en": "One lap of the Sun around the galactic center is called:",
                "choices": [
                  {"label_zh": "银河年（宇宙年）", "label_en": "A cosmic year", "glyph": "📅"},
                  {"label_zh": "一个回归年", "label_en": "A tropical year", "glyph": "❌"},
                  {"label_zh": "一个恒星日", "label_en": "A sidereal day", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "约 2.4 亿年绕一圈，即一个宇宙年。",
                "explain_en": "240 million years per lap — one cosmic year."
              },
              {
                "id": "cos-d1-01-q4",
                "based_on": "teach[3]",
                "prompt_zh": "太阳至今大约绕银心转了多少圈？",
                "prompt_en": "Roughly how many laps has the Sun completed?",
                "choices": [
                  {"label_zh": "约 20 圈", "label_en": "About 20", "glyph": "2️⃣"},
                  {"label_zh": "约 200 万圈", "label_en": "About 2 million", "glyph": "❌"},
                  {"label_zh": "一圈都没转完", "label_en": "Not even one", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "46 亿年 ÷ 2.4 亿年一圈 ≈ 20 圈。",
                "explain_en": "4.6 billion years ÷ 240 million per lap ≈ 20."
              },
              {
                "id": "cos-d1-01-q5",
                "based_on": "teach[4]",
                "prompt_zh": "银河系为什么这么扁平？",
                "prompt_en": "Why is the Milky Way so flat?",
                "choices": [
                  {"label_zh": "旋转的气体球坍缩时被甩扁", "label_en": "A spinning gas ball flattened as it collapsed", "glyph": "🧊"},
                  {"label_zh": "被别的星系压扁的", "label_en": "Another galaxy squashed it", "glyph": "❌"},
                  {"label_zh": "天生就长这样", "label_en": "It was born that way", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "像滑冰收臂越转越快，离心力把气体压进盘面。",
                "explain_en": "Spin-up during collapse pressed the gas into a disk."
              },
              {
                "id": "cos-d1-01-q6",
                "based_on": "teach[1]",
                "prompt_zh": "银河系圆盘的直径与厚度之比大约是？",
                "prompt_en": "The disk's width-to-thickness ratio is about:",
                "choices": [
                  {"label_zh": "1000:1", "label_en": "1000:1", "glyph": "🥞"},
                  {"label_zh": "1:1", "label_en": "1:1", "glyph": "❌"},
                  {"label_zh": "2:1", "label_en": "2:1", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "直径 10 万光年、厚约 1000 光年，比煎饼还平。",
                "explain_en": "100,000 wide, 1,000 thick — pancake territory."
              }
            ]
          }
        },
        {
          "left": 26,
          "lesson": {
            "id": "cos-d1-02-galactic-center",
            "title_zh": "银河系的心脏",
            "title_en": "The Heart of the Milky Way",
            "subtitle_zh": "银心住着四百万个太阳",
            "subtitle_en": "Four million Suns live there",
            "icon": "🕳️",
            "xp": 35,
            "teach": [
              {
                "visual": "📡",
                "title_zh": "射电波先泄了密",
                "title_en": "Radio waves spilled the secret",
                "body_zh": "1930 年前后，工程师央斯基建成第一台射电天线，追踪无线电噪声时发现：噪声除了雷暴，还来自银河系中心方向——银心第一次向人类「出声」。",
                "body_en": "Around 1930, engineer Karl Jansky built the first radio antenna and traced static beyond thunderstorms: it came from the direction of the galactic center — the heart spoke up first."
              },
              {
                "visual": "🕳️",
                "title_zh": "银心藏着大家伙",
                "title_en": "A monster at the middle",
                "body_zh": "银河系里最大的黑洞——质量约 400 万个太阳——就藏在银心。它不是宇宙怪物：恰恰相反，它有利于银河系的稳定和发展演化。",
                "body_en": "The Milky Way's largest black hole — about 4 million solar masses — hides at the center. Not a monster at all; it actually helps the galaxy stay stable and evolve."
              },
              {
                "visual": "🔭",
                "title_zh": "靠恒星轨道抓到它",
                "title_en": "Caught by star orbits",
                "body_zh": "2002 年，天文学家通过观测银心附近恒星的轨道，证实了黑洞的存在。一圈圈高速绕行的恒星，暴露了那个看不见的巨大质量——就像看不见的舞伴。",
                "body_en": "In 2002, astronomers watched stars orbiting the galactic center and proved the black hole. Stars whipping around nothing visible betrayed the hidden mass — an invisible dance partner."
              },
              {
                "visual": "📸",
                "title_zh": "给银心黑洞拍张照",
                "title_en": "Photographing the beast",
                "body_zh": "2022 年，视界面望远镜（EHT）把分布在全球的射电望远镜联合起来，制作出银心黑洞视界附近的图像——我们终于亲眼「看见」了它。",
                "body_en": "In 2022, the Event Horizon Telescope combined radio dishes across the globe to image the region around our galactic center's black hole — we finally saw it."
              }
            ],
            "questions": [
              {
                "id": "cos-d1-02-q1",
                "based_on": "teach[1]",
                "prompt_zh": "央斯基的射电天线发现噪声来自？",
                "prompt_en": "Jansky's antenna found radio static coming from:",
                "figure": "📡",
                "choices": [
                  {"label_zh": "银河系中心方向", "label_en": "The galactic center", "glyph": "✅"},
                  {"label_zh": "月球背面", "label_en": "The far side of the Moon", "glyph": "❌"},
                  {"label_zh": "附近的电视台", "label_en": "A nearby TV station", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "除雷暴外，噪声每 23 时 56 分扫过一次——正是银心方向。",
                "explain_en": "The static cycled every 23h 56m — pointing at the galactic heart."
              },
              {
                "id": "cos-d1-02-q2",
                "based_on": "teach[2]",
                "prompt_zh": "银心黑洞的质量大约是？",
                "prompt_en": "The central black hole's mass is about:",
                "choices": [
                  {"label_zh": "400 万个太阳", "label_en": "4 million Suns", "glyph": "🕳️"},
                  {"label_zh": "4 个太阳", "label_en": "4 Suns", "glyph": "❌"},
                  {"label_zh": "40 亿个太阳", "label_en": "4 billion Suns", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "它是银河系中最大的黑洞，约 400 万太阳质量。",
                "explain_en": "The galaxy's biggest: ~4 million solar masses."
              },
              {
                "id": "cos-d1-02-q3",
                "based_on": "teach[2]",
                "prompt_zh": "关于银心黑洞，正确的说法是？",
                "prompt_en": "Which statement about the central black hole is right?",
                "choices": [
                  {"label_zh": "它有利于银河系的稳定", "label_en": "It helps stabilize the galaxy", "glyph": "✅"},
                  {"label_zh": "它正在吞掉整个银河系", "label_en": "It's devouring the whole galaxy", "glyph": "❌"},
                  {"label_zh": "它其实是一颗行星", "label_en": "It's actually a planet", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "它并不邪恶，反而有利于银河系的稳定和演化。",
                "explain_en": "Far from evil — it aids the galaxy's stability."
              },
              {
                "id": "cos-d1-02-q4",
                "based_on": "teach[3]",
                "prompt_zh": "2002 年证实银心黑洞用的是？",
                "prompt_en": "The 2002 confirmation relied on:",
                "choices": [
                  {"label_zh": "观测银心附近恒星的轨道", "label_en": "Tracking nearby stars' orbits", "glyph": "🔭"},
                  {"label_zh": "挖开银心直接看", "label_en": "Digging it open", "glyph": "❌"},
                  {"label_zh": "听它的声音", "label_en": "Listening to it", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "高速绕行的恒星暴露了看不见的巨大质量。",
                "explain_en": "Stars whipping around nothing exposed the mass."
              },
              {
                "id": "cos-d1-02-q5",
                "based_on": "teach[4]",
                "prompt_zh": "视界面望远镜拍摄银心黑洞图像是在？",
                "prompt_en": "The EHT imaged our galactic black hole in:",
                "choices": [
                  {"label_zh": "2022 年", "label_en": "2022", "glyph": "📸"},
                  {"label_zh": "1930 年", "label_en": "1930", "glyph": "❌"},
                  {"label_zh": "2200 年", "label_en": "2200", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "2022 年 EHT 联合全球射电望远镜拍下它的图像。",
                "explain_en": "EHT's global network delivered the image in 2022."
              },
              {
                "id": "cos-d1-02-q6",
                "based_on": "teach[4]",
                "prompt_zh": "视界面望远镜（EHT）的原理是？",
                "prompt_en": "The EHT works by:",
                "choices": [
                  {"label_zh": "联合分布全球的射电望远镜", "label_en": "Combining radio telescopes worldwide", "glyph": "🌍"},
                  {"label_zh": "发射一束激光", "label_en": "Firing a laser", "glyph": "❌"},
                  {"label_zh": "乘坐飞船飞过去拍", "label_en": "Flying a camera there", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "把地球表面的射电望远镜数据结合起来成像。",
                "explain_en": "It merges data from dishes across the Earth."
              }
            ]
          }
        },
        {
          "left": -26,
          "lesson": {
            "id": "cos-d2-01-hubble-law",
            "title_zh": "哈勃定律与红移",
            "title_en": "Hubble's Law & Redshift",
            "subtitle_zh": "宇宙正在膨胀",
            "subtitle_en": "The universe is expanding",
            "icon": "📈",
            "xp": 35,
            "teach": [
              {
                "visual": "🏃",
                "title_zh": "星系都在离我们远去",
                "title_en": "Galaxies are fleeing",
                "body_zh": "1929 年哈勃汇总证据发现：遥远星系都在远离银河系，而且越遥远的星系退行速度越快。换句话说——宇宙正在膨胀，不是静止的。",
                "body_en": "By 1929 Hubble had the evidence: distant galaxies all recede from us, and the farther they are, the faster they flee. The universe, in short, is expanding."
              },
              {
                "visual": "📈",
                "title_zh": "一个简单到惊人的公式",
                "title_en": "A surprisingly simple law",
                "body_zh": "哈勃定律：退行速度 = 距离 × 哈勃常数，即 v = H₀×d。距离翻倍的星系，退行速度也翻倍；哈勃图上各点连成一条整齐的直线。",
                "body_en": "Hubble's law: v = H₀×d. A galaxy twice as far recedes twice as fast. Plot distance against speed, and the points line up on a clean straight line."
              },
              {
                "visual": "🔴",
                "title_zh": "红移：被拉长的光",
                "title_en": "Redshift: stretched light",
                "body_zh": "光源远离时频率变低，这是多普勒红移；而宇宙学红移的来源是空间本身在膨胀——光在旅途中被不断拉伸，波长变长、颜色偏红。",
                "body_en": "A source moving away shifts its light to lower frequency — Doppler redshift. Cosmological redshift is different: expanding space itself stretches light mid-flight toward the red."
              },
              {
                "visual": "🔭",
                "title_zh": "看远就是看过去",
                "title_en": "Far away means long ago",
                "body_zh": "宇宙年龄约 130 多亿年，但可观测宇宙却有 970 亿光年宽——因为空间膨胀的速度可以超过光速（不携带信息，不违反相对论），光在路上被越拉越远。",
                "body_en": "The universe is ~13-plus billion years old, yet 97 billion light-years wide — because space can expand faster than light (no information travels, so relativity is safe)."
              }
            ],
            "questions": [
              {
                "id": "cos-d2-01-q1",
                "based_on": "teach[1]",
                "prompt_zh": "哈勃 1929 年的关键发现是？",
                "prompt_en": "Hubble's key 1929 discovery:",
                "figure": "📈",
                "choices": [
                  {"label_zh": "越远的星系退行越快", "label_en": "Farther galaxies recede faster", "glyph": "✅"},
                  {"label_zh": "星系都在向我们冲来", "label_en": "Galaxies are rushing toward us", "glyph": "❌"},
                  {"label_zh": "宇宙静止不动", "label_en": "The universe is static", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "距离与退行速度成正比——宇宙在膨胀。",
                "explain_en": "Distance tracks recession speed — expansion."
              },
              {
                "id": "cos-d2-01-q2",
                "based_on": "teach[2]",
                "prompt_zh": "哈勃定律的公式是？",
                "prompt_en": "Hubble's law reads:",
                "choices": [
                  {"label_zh": "v = H₀ × d", "label_en": "v = H₀ × d", "glyph": "🧮"},
                  {"label_zh": "E = mc²", "label_en": "E = mc²", "glyph": "❌"},
                  {"label_zh": "F = ma", "label_en": "F = ma", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "退行速度等于距离乘以哈勃常数。",
                "explain_en": "Speed equals distance times the Hubble constant."
              },
              {
                "id": "cos-d2-01-q3",
                "based_on": "teach[2]",
                "prompt_zh": "甲星系距离是乙星系的两倍，甲的退行速度？",
                "prompt_en": "If galaxy A is twice as far as galaxy B, A's recession speed is:",
                "choices": [
                  {"label_zh": "乙的两倍", "label_en": "Twice B's", "glyph": "2️⃣"},
                  {"label_zh": "和乙一样", "label_en": "The same as B's", "glyph": "❌"},
                  {"label_zh": "乙的一半", "label_en": "Half of B's", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "距离与速度成正比，距离翻倍速度也翻倍。",
                "explain_en": "Proportional: double the distance, double the speed."
              },
              {
                "id": "cos-d2-01-q4",
                "based_on": "teach[3]",
                "prompt_zh": "宇宙学红移的根本原因是？",
                "prompt_en": "Cosmological redshift is fundamentally caused by:",
                "choices": [
                  {"label_zh": "空间本身膨胀拉伸了光波", "label_en": "Expanding space stretching light", "glyph": "🔴"},
                  {"label_zh": "星系的大气吸收", "label_en": "Galactic atmospheres", "glyph": "❌"},
                  {"label_zh": "光跑累了变红", "label_en": "Light getting tired", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "光在膨胀的空间中被不断拉伸，波长变长。",
                "explain_en": "Light stretches as space expands en route."
              },
              {
                "id": "cos-d2-01-q5",
                "based_on": "teach[4]",
                "prompt_zh": "宇宙年龄约 137 亿年，可观测宇宙却有 970 亿光年，因为？",
                "prompt_en": "The universe is ~13.7 billion years old yet 97 billion light-years across because:",
                "choices": [
                  {"label_zh": "空间膨胀可以超光速", "label_en": "Space can expand faster than light", "glyph": "✅"},
                  {"label_zh": "光速其实在变快", "label_en": "Light speed is increasing", "glyph": "❌"},
                  {"label_zh": "数字算错了", "label_en": "Someone miscounted", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "空间膨胀不携带质量和信息，不违反相对论。",
                "explain_en": "Expansion carries no information — relativity survives."
              },
              {
                "id": "cos-d2-01-q6",
                "based_on": "teach[4]",
                "prompt_zh": "观测几十亿光年外的星系，相当于？",
                "prompt_en": "Observing galaxies billions of light-years away is like:",
                "choices": [
                  {"label_zh": "回望宇宙的过去", "label_en": "Looking back in time", "glyph": "🕰️"},
                  {"label_zh": "看到宇宙的现在", "label_en": "Seeing the present", "glyph": "❌"},
                  {"label_zh": "看到宇宙的未来", "label_en": "Peering into the future", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "光走了几十亿年才到，我们看到的是当年。",
                "explain_en": "Their light is billions of years old — a live replay."
              }
            ]
          }
        },
        {
          "left": 34,
          "lesson": {
            "id": "cos-d3-01-rotation-anomaly",
            "title_zh": "旋转曲线异常",
            "title_en": "The Rotation-Curve Anomaly",
            "subtitle_zh": "星系转得太快了",
            "subtitle_en": "Galaxies spin too fast",
            "icon": "📉",
            "xp": 35,
            "teach": [
              {
                "visual": "📏",
                "title_zh": "怎么给星系测转速",
                "title_en": "Taking a galaxy's pulse",
                "body_zh": "鲁宾第一个用光谱学研究螺旋星系旋转：恒星光的多普勒频移给出盘面各处的转速；用射电波观察中性氢云，还能把测量推到可见边缘之外更远处。",
                "body_en": "Vera Rubin pioneered reading galaxy spin from spectra: Doppler shifts of starlight clock the disk, while radio waves from hydrogen clouds extend the measurement farther out."
              },
              {
                "visual": "📉",
                "title_zh": "本该下降，却纹丝不动",
                "title_en": "Should drop, doesn't",
                "body_zh": "按恒星亮度推算，质量应集中在中心，外侧恒星速度理应迅速下降。但实测曲线先升后几乎保持恒定——对数千个星系的研究表明，这种异常是普遍的。",
                "body_en": "By starlight, mass should concentrate at the center, so outer stars ought to slow. Instead the curve rises, then stays flat. Thousands of galaxies show the same anomaly."
              },
              {
                "visual": "🌑",
                "title_zh": "暗物质晕登场",
                "title_en": "Enter the dark halo",
                "body_zh": "解释：可见盘之外藏着大量不发光的物质——一个球状巨大光环，宽度是恒星盘的 10 到 20 倍。银河系的光晕延伸几十万光年，一直伸向仙女座星系方向。",
                "body_en": "The fix: invisible mass far beyond the glowing disk — a spherical halo 10 to 20 times the disk's width. Our halo stretches hundreds of thousands of light-years toward Andromeda."
              },
              {
                "visual": "🕵️",
                "title_zh": "鲁宾的侦探破案",
                "title_en": "Rubin plays detective",
                "body_zh": "1976 年，鲁宾用星系盘外的孤立气体云和亮星当示踪物：那里几乎没有可见物质，速度本该随距离衰减，它们却仍然飞快——她据此推断暗晕的存在。",
                "body_en": "In 1976, Rubin used stray gas clouds and bright stars beyond the disk as tracers: almost nothing visible there, yet they moved fast when they should have slowed. Her verdict: dark halos."
              }
            ],
            "questions": [
              {
                "id": "cos-d3-01-q1",
                "based_on": "teach[1]",
                "prompt_zh": "测量星系盘转速的主要手段是？",
                "prompt_en": "Galaxy rotation is measured mainly via:",
                "figure": "📉",
                "choices": [
                  {"label_zh": "星光的多普勒频移（加射电波）", "label_en": "Doppler shifts of starlight (plus radio)", "glyph": "📏"},
                  {"label_zh": "用秒表掐时间", "label_en": "A stopwatch", "glyph": "❌"},
                  {"label_zh": "问星系自己", "label_en": "Asking the galaxy", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "光谱多普勒频移给出转速，射电中性氢推得更远。",
                "explain_en": "Spectral shifts clock the spin; radio reaches farther."
              },
              {
                "id": "cos-d3-01-q2",
                "based_on": "teach[2]",
                "prompt_zh": "按可见物质分布，星系外侧恒星的速度应该？",
                "prompt_en": "Based on visible matter, outer stars' speeds should:",
                "choices": [
                  {"label_zh": "迅速下降", "label_en": "Drop quickly", "glyph": "⬇️"},
                  {"label_zh": "保持不变", "label_en": "Stay flat", "glyph": "❌"},
                  {"label_zh": "无限增加", "label_en": "Grow forever", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "质量集中在中心，远处速度理应迅速下降。",
                "explain_en": "Central mass means outer speeds should fall."
              },
              {
                "id": "cos-d3-01-q3",
                "based_on": "teach[2]",
                "prompt_zh": "实测的星系旋转曲线在可见盘外？",
                "prompt_en": "Measured rotation curves beyond the visible disk:",
                "choices": [
                  {"label_zh": "基本保持恒定", "label_en": "Stay roughly flat", "glyph": "➡️"},
                  {"label_zh": "跌到零", "label_en": "Fall to zero", "glyph": "❌"},
                  {"label_zh": "剧烈波动", "label_en": "Oscillate wildly", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "先增长后几乎不变——数千个星系普遍如此。",
                "explain_en": "Rise, then flat — a universal pattern."
              },
              {
                "id": "cos-d3-01-q4",
                "based_on": "teach[3]",
                "prompt_zh": "解释旋转曲线异常，需要假设？",
                "prompt_en": "Explaining the anomaly requires:",
                "choices": [
                  {"label_zh": "可见盘外的暗物质晕", "label_en": "A dark halo beyond the visible disk", "glyph": "🌑"},
                  {"label_zh": "星系转得慢一点", "label_en": "Slower-spinning galaxies", "glyph": "❌"},
                  {"label_zh": "修改恒星的亮度", "label_en": "Brighter stars", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "大量不发光物质包围星系，形成暗晕。",
                "explain_en": "Invisible mass enveloping the galaxy in a halo."
              },
              {
                "id": "cos-d3-01-q5",
                "based_on": "teach[3]",
                "prompt_zh": "暗物质晕的宽度大约是恒星盘的？",
                "prompt_en": "The dark halo's width is roughly the disk's:",
                "choices": [
                  {"label_zh": "10 到 20 倍", "label_en": "10 to 20 times", "glyph": "🌑"},
                  {"label_zh": "完全一样", "label_en": "Exactly the same", "glyph": "❌"},
                  {"label_zh": "一半", "label_en": "Half", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "球状光环比可见盘宽 10-20 倍。",
                "explain_en": "The spherical halo dwarfs the glowing disk."
              },
              {
                "id": "cos-d3-01-q6",
                "based_on": "teach[4]",
                "prompt_zh": "鲁宾用的「示踪物」是？",
                "prompt_en": "Rubin's 'tracers' were:",
                "choices": [
                  {"label_zh": "盘外的孤立气体云和亮星", "label_en": "Stray clouds and stars beyond the disk", "glyph": "🕵️"},
                  {"label_zh": "人造卫星", "label_en": "Artificial satellites", "glyph": "❌"},
                  {"label_zh": "雷达信号", "label_en": "Radar pings", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "它们标出了星系外围引力场的强弱。",
                "explain_en": "They mapped the outer gravitational field."
              }
            ]
          }
        },
        {
          "left": -34,
          "lesson": {
            "id": "cos-d3-02-cluster-evidence",
            "title_zh": "星系团里的暗物质",
            "title_en": "Dark Matter in Clusters",
            "subtitle_zh": "蜂群转得太快了",
            "subtitle_en": "The swarm spins too fast",
            "icon": "🐝",
            "xp": 35,
            "teach": [
              {
                "visual": "🐝",
                "title_zh": "后发座的大蜂群",
                "title_en": "The Coma beehive",
                "body_zh": "后发座星系团距地球约 3 亿光年，上千个星系像蜂群绕蜂巢一样四处运动。1933 年兹威基测出成员星系的平均速度，大得惊人——需要的质量远超可见星系的总和。",
                "body_en": "The Coma cluster, 300 million light-years away, holds over a thousand galaxies swarming like bees. In 1933 Zwicky clocked their speeds — astonishingly fast, demanding far more mass than he could see."
              },
              {
                "visual": "🚪",
                "title_zh": "该散伙却没散",
                "title_en": "Should have scattered",
                "body_zh": "按可见质量算，成员星系的速度超过了星系团的逃逸速度——它早该分崩离析。但后发星系团已存在 100 多亿年，几乎和宇宙一样古老。兹威基估计所需质量约是可见的十倍。",
                "body_en": "By visible mass, member galaxies exceed escape velocity — the cluster should have dissolved long ago. Yet it has hung together 10-plus billion years. Zwicky reckoned ten times the visible mass was needed."
              },
              {
                "visual": "🌡️",
                "title_zh": "X 射线再补一证",
                "title_en": "X-rays add a witness",
                "body_zh": "X 射线卫星观测星系团里 100 万度以上的超热气体：恒星只占总质量的 2%～4%，热气占 12%～16%——剩下 80% 以上的质量去向不明。",
                "body_en": "X-ray satellites weighed the cluster's million-degree hot gas: stars contribute a mere 2–4% of the mass, hot gas 12–16%. Over 80% of the mass is missing from view."
              },
              {
                "visual": "🔍",
                "title_zh": "引力透镜盖棺定论",
                "title_en": "Lens confirms the case",
                "body_zh": "星系团后方星系的光被引力扭曲变形——引力透镜直接描绘出暗物质的分布图。观测显示：普通物质与暗物质松散重叠，星系运动的空间里到处都有暗物质。",
                "body_en": "Cluster gravity warps the light of background galaxies — gravitational lensing maps the dark matter directly. It's everywhere galaxies move, loosely overlapping the visible stuff."
              }
            ],
            "questions": [
              {
                "id": "cos-d3-02-q1",
                "based_on": "teach[1]",
                "prompt_zh": "后发座星系团中星系的运动像？",
                "prompt_en": "Galaxies in the Coma cluster move like:",
                "figure": "🐝",
                "choices": [
                  {"label_zh": "绕着蜂巢飞的蜂群", "label_en": "Bees around a hive", "glyph": "✅"},
                  {"label_zh": "排队的士兵", "label_en": "Soldiers in formation", "glyph": "❌"},
                  {"label_zh": "静止的雕像", "label_en": "Statues", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "上千个星系四处乱转，但被引力凝聚在一起。",
                "explain_en": "A thousand galaxies swarming, bound by gravity."
              },
              {
                "id": "cos-d3-02-q2",
                "based_on": "teach[1]",
                "prompt_zh": "兹威基发现星系团需要的质量约是可见物质的？",
                "prompt_en": "Zwicky found the cluster needed about ___ the visible mass:",
                "choices": [
                  {"label_zh": "十倍", "label_en": "10 times", "glyph": "🔟"},
                  {"label_zh": "一样多", "label_en": "The same", "glyph": "❌"},
                  {"label_zh": "百分之一", "label_en": "1%", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "速度大得惊人，所需质量约是可见的十倍。",
                "explain_en": "The speeds demanded ten times the visible mass."
              },
              {
                "id": "cos-d3-02-q3",
                "based_on": "teach[2]",
                "prompt_zh": "按可见质量计算，后发星系团本应？",
                "prompt_en": "By visible mass alone, Coma should have:",
                "choices": [
                  {"label_zh": "早已分崩离析", "label_en": "Flown apart long ago", "glyph": "💥"},
                  {"label_zh": "缩成一个点", "label_en": "Collapsed to a point", "glyph": "❌"},
                  {"label_zh": "毫无变化", "label_en": "Stayed exactly the same", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "星系速度超逃逸速度，但它已存在 100 多亿年。",
                "explain_en": "Speeds exceed escape velocity — yet it's 10 billion years old."
              },
              {
                "id": "cos-d3-02-q4",
                "based_on": "teach[3]",
                "prompt_zh": "X 射线观测显示，恒星约占星系团总质量的？",
                "prompt_en": "X-ray studies show stars make up about ___ of a cluster's mass:",
                "choices": [
                  {"label_zh": "2%～4%", "label_en": "2–4%", "glyph": "🌡️"},
                  {"label_zh": "50%", "label_en": "50%", "glyph": "❌"},
                  {"label_zh": "99%", "label_en": "99%", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "恒星 2-4%、热气 12-16%，其余 80% 以上不明。",
                "explain_en": "Stars 2–4%, gas 12–16%; 80%-plus unaccounted."
              },
              {
                "id": "cos-d3-02-q5",
                "based_on": "teach[4]",
                "prompt_zh": "引力透镜能做什么？",
                "prompt_en": "Gravitational lensing can:",
                "choices": [
                  {"label_zh": "直接描绘暗物质分布", "label_en": "Map dark matter directly", "glyph": "🔍"},
                  {"label_zh": "把暗物质变亮", "label_en": "Brighten dark matter", "glyph": "❌"},
                  {"label_zh": "消灭暗物质", "label_en": "Eliminate it", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "背景星系的光被扭曲，重力分布一目了然。",
                "explain_en": "Warped background light reveals the gravity map."
              },
              {
                "id": "cos-d3-02-q6",
                "based_on": "teach[2]",
                "prompt_zh": "「缺失质量」之谜从兹威基算起已有约？",
                "prompt_en": "The 'missing mass' puzzle has puzzled us since about:",
                "choices": [
                  {"label_zh": "90 年（1933 年）", "label_en": "90 years (1933)", "glyph": "⏳"},
                  {"label_zh": "9 年", "label_en": "9 years", "glyph": "❌"},
                  {"label_zh": "900 年", "label_en": "900 years", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "1933 年兹威基提出，至今仍是未解之谜。",
                "explain_en": "Raised in 1933, still open today."
              }
            ]
          }
        },
        {
          "left": 42,
          "lesson": {
            "id": "cos-d3-03-dark-matter-candidates",
            "title_zh": "暗物质是什么",
            "title_en": "What Is Dark Matter?",
            "subtitle_zh": "排嫌疑犯式搜索",
            "subtitle_en": "Rounding up the suspects",
            "icon": "🔎",
            "xp": 35,
            "teach": [
              {
                "visual": "🚫",
                "title_zh": "像警察排查嫌疑犯",
                "title_en": "A police lineup",
                "body_zh": "藏进黑洞？黑洞太多早就会扰动周围恒星。黑色云团？会吸收背后的星光。流浪行星？那需要每颗恒星配 6000 颗木星——已知的候选者几乎全被排除。",
                "body_en": "Hidden in black holes? Too many would disturb nearby stars. Dark clouds? They'd absorb starlight. Rogue planets? You'd need 6,000 Jupiters per star. Nearly every familiar suspect is cleared."
              },
              {
                "visual": "🧪",
                "title_zh": "氢氦比例的判决",
                "title_en": "The hydrogen-helium verdict",
                "body_zh": "大爆炸最初几分钟的核合成定下了氢氦比例。如果大部分暗物质参与核反应，今天的氦应该多得多——所以暗物质大多不参与核合成，不是普通物质。",
                "body_en": "The first minutes of nucleosynthesis fixed the cosmic hydrogen-to-helium ratio. If most dark matter joined in, helium would be far more abundant — so dark matter isn't ordinary matter."
              },
              {
                "visual": "🎭",
                "title_zh": "MACHO 们的失宠",
                "title_en": "The fall of the MACHOs",
                "body_zh": "褐矮星、白矮星、中子星、黑洞这类不发光的致密天体，合称 MACHO（晕族大质量致密天体），一度是热门候选——但数量与观测都对不上，当不成主角。",
                "body_en": "Dim compact objects — brown dwarfs, white dwarfs, neutron stars, black holes — were once hot candidates, dubbed MACHOs. But headcounts and observations don't add up; they can't carry the role."
              },
              {
                "visual": "💭",
                "title_zh": "也许根本不是「物质」",
                "title_en": "Maybe it isn't 'matter' at all",
                "body_zh": "我们测到的引力约 85% 来自探测不到的东西。也有人另辟蹊径：也许暗物质不存在，是我们对引力的理解出了错——比如 MOND 修正引力理论。",
                "body_en": "About 85% of the gravity we measure comes from something undetectable. Some argue differently: perhaps there's no dark matter at all — our theory of gravity is wrong (e.g., MOND)."
              }
            ],
            "questions": [
              {
                "id": "cos-d3-03-q1",
                "based_on": "teach[1]",
                "prompt_zh": "黑洞被排除是暗物质主要成分，因为？",
                "prompt_en": "Black holes were ruled out mainly because:",
                "figure": "🔎",
                "choices": [
                  {"label_zh": "太多黑洞早会扰动周围恒星", "label_en": "So many would disturb nearby stars", "glyph": "🚫"},
                  {"label_zh": "黑洞太亮了", "label_en": "Black holes are too bright", "glyph": "❌"},
                  {"label_zh": "黑洞不存在", "label_en": "They don't exist", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "真有那么多黑洞，引力扰动早就露馅了。",
                "explain_en": "That many holes would betray themselves."
              },
              {
                "id": "cos-d3-03-q2",
                "based_on": "teach[1]",
                "prompt_zh": "黑色云团被排除，是因为？",
                "prompt_en": "Dark clouds were ruled out because they would:",
                "choices": [
                  {"label_zh": "吸收或散射背后的星光", "label_en": "Absorb or scatter starlight", "glyph": "☁️"},
                  {"label_zh": "颜色太黑", "label_en": "Be too black", "glyph": "❌"},
                  {"label_zh": "太重了", "label_en": "Weigh too much", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "云会与光互动，真正的暗物质不会。",
                "explain_en": "Clouds interact with light; dark matter doesn't."
              },
              {
                "id": "cos-d3-03-q3",
                "based_on": "teach[2]",
                "prompt_zh": "氢氦比例证明暗物质大多？",
                "prompt_en": "The hydrogen-helium ratio proves dark matter mostly:",
                "choices": [
                  {"label_zh": "不参与核合成，非普通物质", "label_en": "Skips nucleosynthesis — not ordinary matter", "glyph": "🧪"},
                  {"label_zh": "就是普通的岩石", "label_en": "Is just ordinary rock", "glyph": "❌"},
                  {"label_zh": "由氢构成", "label_en": "Is made of hydrogen", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "若参与核合成，宇宙中的氦会多得多。",
                "explain_en": "Join in, and the universe would be helium-rich."
              },
              {
                "id": "cos-d3-03-q4",
                "based_on": "teach[3]",
                "prompt_zh": "MACHO 指的是？",
                "prompt_en": "MACHOs are:",
                "choices": [
                  {"label_zh": "晕族大质量致密天体", "label_en": "Massive Compact Halo Objects", "glyph": "🎭"},
                  {"label_zh": "一种粒子加速器", "label_en": "A particle accelerator", "glyph": "❌"},
                  {"label_zh": "健壮的运动员", "label_en": "Muscular athletes", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "褐矮星、白矮星、中子星、黑洞等致密天体。",
                "explain_en": "Brown dwarfs, white dwarfs, neutron stars, black holes."
              },
              {
                "id": "cos-d3-03-q5",
                "based_on": "teach[4]",
                "prompt_zh": "我们测到的引力约有多少来自探测不到的东西？",
                "prompt_en": "Roughly what fraction of measured gravity comes from the undetectable?",
                "choices": [
                  {"label_zh": "约 85%", "label_en": "About 85%", "glyph": "💭"},
                  {"label_zh": "约 1%", "label_en": "About 1%", "glyph": "❌"},
                  {"label_zh": "0%", "label_en": "0%", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "近一个世纪了，85% 的引力仍来自未知的源。",
                "explain_en": "85% of gravity still comes from the unknown."
              },
              {
                "id": "cos-d3-03-q6",
                "based_on": "teach[4]",
                "prompt_zh": "MOND 理论的主张是？",
                "prompt_en": "The MOND theory proposes:",
                "choices": [
                  {"label_zh": "修正引力定律，无需暗物质", "label_en": "Modify gravity — no dark matter needed", "glyph": "✅"},
                  {"label_zh": "暗物质是巧克力做的", "label_en": "Dark matter is chocolate", "glyph": "❌"},
                  {"label_zh": "宇宙没有引力", "label_en": "Gravity doesn't exist", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "它在星系尺度解释得通，但在星系团尺度仍需额外物质。",
                "explain_en": "Works in galaxies, but clusters still need extra mass."
              }
            ]
          }
        },
        {
          "left": -42,
          "lesson": {
            "id": "cos-d4-01-cmb",
            "title_zh": "宇宙微波背景",
            "title_en": "The Cosmic Microwave Background",
            "subtitle_zh": "大爆炸的余晖",
            "subtitle_en": "The Big Bang's afterglow",
            "icon": "📻",
            "xp": 35,
            "teach": [
              {
                "visual": "📻",
                "title_zh": "一段消不掉的噪声",
                "title_en": "The noise that wouldn't die",
                "body_zh": "1960 年代，彭齐亚斯和威尔逊在接收机里发现怎么也消不掉的微波噪声——它来自天空的所有方向。这不是故障，而是大爆炸留下的余辉：宇宙微波背景。",
                "body_en": "In the 1960s, Penzias and Wilson found microwave static they just couldn't kill — coming from every direction. Not a glitch: the Big Bang's afterglow, the cosmic microwave background."
              },
              {
                "visual": "🧣",
                "title_zh": "满天均匀的余温",
                "title_en": "A uniform warm blanket",
                "body_zh": "这是宇宙诞生之初留下的辐射，如今主要处于微波频段。它从每个方向几乎完全一样地均匀——整个天空就像盖了一床温度一致的薄被。",
                "body_en": "Radiation from the universe's infancy, now shifted into microwaves. It arrives from every direction almost perfectly uniform — the sky wrapped in one evenly warmed blanket."
              },
              {
                "visual": "🔬",
                "title_zh": "千分之一里见涟漪",
                "title_en": "Ripples at one part in a thousand",
                "body_zh": "把测量精度提到千分之一，才能看出微小的强度涨落：最大的不平滑区域约占 1 度。这些涟漪是后来星系和星系团成长的种子——不均匀才有一切结构。",
                "body_en": "Only at one-part-in-a-thousand precision do tiny ripples appear: the largest span about one degree. Those seeds of lumpiness grew into galaxies and clusters — structure needs unevenness."
              },
              {
                "visual": "🛰️",
                "title_zh": "WMAP 量出平坦宇宙",
                "title_en": "WMAP finds a flat universe",
                "body_zh": "2002 年起，WMAP 卫星绘出微波背景的全天地图，精确测定其性质。数据显示两个密度参数之和约为 1——意味着空间的曲率为零，宇宙是平坦的。",
                "body_en": "From 2002, the WMAP satellite mapped the whole sky in microwaves with unprecedented precision. Its numbers sum to one — meaning zero curvature: we live in a flat universe."
              }
            ],
            "questions": [
              {
                "id": "cos-d4-01-q1",
                "based_on": "teach[1]",
                "prompt_zh": "宇宙微波背景是怎么被发现的？",
                "prompt_en": "The CMB was discovered as:",
                "figure": "📻",
                "choices": [
                  {"label_zh": "接收机里消不掉的噪声", "label_en": "Unremovable static in a receiver", "glyph": "✅"},
                  {"label_zh": "肉眼看到的亮光", "label_en": "A flash seen by eye", "glyph": "❌"},
                  {"label_zh": "陨石上的铭文", "label_en": "Writing on a meteorite", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "彭齐亚斯和威尔逊发现来自所有方向的微波噪声。",
                "explain_en": "Penzias and Wilson's stubborn static, from all directions."
              },
              {
                "id": "cos-d4-01-q2",
                "based_on": "teach[1]",
                "prompt_zh": "宇宙微波背景的本质是？",
                "prompt_en": "The CMB is essentially:",
                "choices": [
                  {"label_zh": "大爆炸的余辉", "label_en": "The Big Bang's afterglow", "glyph": "🧣"},
                  {"label_zh": "银河系的尘埃", "label_en": "Milky Way dust", "glyph": "❌"},
                  {"label_zh": "一批遥远的恒星", "label_en": "Distant stars", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "宇宙诞生之初的辐射，如今红移到微波频段。",
                "explain_en": "Primordial radiation, now stretched to microwaves."
              },
              {
                "id": "cos-d4-01-q3",
                "based_on": "teach[2]",
                "prompt_zh": "微波背景在各方向的均匀程度？",
                "prompt_en": "Across the sky, the CMB is:",
                "choices": [
                  {"label_zh": "几乎完全一样", "label_en": "Almost perfectly uniform", "glyph": "🧣"},
                  {"label_zh": "一半热一半冷", "label_en": "Half hot, half cold", "glyph": "❌"},
                  {"label_zh": "随机斑驳", "label_en": "Randomly blotchy", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "只有到千分之一精度才看得出微小差异。",
                "explain_en": "Differences emerge only at 1-in-1000 precision."
              },
              {
                "id": "cos-d4-01-q4",
                "based_on": "teach[3]",
                "prompt_zh": "要看清微波背景的涨落，测量精度需要？",
                "prompt_en": "Seeing the CMB's ripples requires precision of:",
                "choices": [
                  {"label_zh": "千分之一", "label_en": "One part in a thousand", "glyph": "🔬"},
                  {"label_zh": "十分之一", "label_en": "One part in ten", "glyph": "❌"},
                  {"label_zh": "一半", "label_en": "50%", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "涟漪极其微弱，精度到千分之一才能分辨。",
                "explain_en": "The ripples are whisper-faint."
              },
              {
                "id": "cos-d4-01-q5",
                "based_on": "teach[3]",
                "prompt_zh": "微波背景里的涟漪意味着？",
                "prompt_en": "The CMB's ripples are meaningful because:",
                "choices": [
                  {"label_zh": "它们是星系成长的种子", "label_en": "They seeded galaxy growth", "glyph": "🌱"},
                  {"label_zh": "证明宇宙会坍缩", "label_en": "They prove collapse", "glyph": "❌"},
                  {"label_zh": "只是仪器误差", "label_en": "They're instrument error", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "早期的微小不均匀，长成了今天的结构。",
                "explain_en": "Tiny early lumps grew into cosmic structure."
              },
              {
                "id": "cos-d4-01-q6",
                "based_on": "teach[4]",
                "prompt_zh": "WMAP 卫星的重要贡献是？",
                "prompt_en": "WMAP's major contribution was:",
                "choices": [
                  {"label_zh": "绘制全天地图并证明宇宙平坦", "label_en": "All-sky mapping, proving flatness", "glyph": "🛰️"},
                  {"label_zh": "飞出太阳系", "label_en": "Leaving the solar system", "glyph": "❌"},
                  {"label_zh": "在月球上着陆", "label_en": "Landing on the Moon", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "密度参数之和约等于 1——空间曲率为零。",
                "explain_en": "Density parameters summing to one — zero curvature."
              }
            ]
          }
        },
        {
          "left": 50,
          "lesson": {
            "id": "cos-d4-02-universe-contents",
            "title_zh": "宇宙的组成",
            "title_en": "What the Universe Is Made Of",
            "subtitle_zh": "一杯热可可的比例",
            "subtitle_en": "The hot-cocoa recipe",
            "icon": "🥤",
            "xp": 35,
            "teach": [
              {
                "visual": "🥤",
                "title_zh": "宇宙是一杯热可可",
                "title_en": "The universe as hot cocoa",
                "body_zh": "把宇宙所有物质和能量加起来：暗能量占 68%，暗物质占 27%，普通物质只占 5%。就像一杯热可可——我们能看见摸到的一切，只是顶上那一点点肉桂粉。",
                "body_en": "Add up everything: dark energy 68%, dark matter 27%, ordinary matter a mere 5%. Like hot cocoa — everything we see and touch is just the sprinkle of cinnamon on top."
              },
              {
                "visual": "📊",
                "title_zh": "95% 都是未知",
                "title_en": "95% unknown",
                "body_zh": "普通物质只占 5%，意味着宇宙 95% 的组成是当前物理理论未知的成分。标准宇宙学模型能很好地描述观测，但物理学家对这些「成分」本身仍存有疑问。",
                "body_en": "With ordinary matter at 5%, a full 95% of the cosmos consists of ingredients unknown to physics. The standard model fits observations well, yet what those ingredients are remains open."
              },
              {
                "visual": "🕯️",
                "title_zh": "稀薄到惊人的暗能量",
                "title_en": "Startlingly thin dark energy",
                "body_zh": "暗能量的密度极小：给一只 100 瓦灯泡供电 10 秒，需要收集 10 立方千米真空里包含的能量。但它均匀遍布整个宇宙，积少成多便统治了总量。",
                "body_en": "Dark energy is absurdly dilute: powering a 100-watt bulb for 10 seconds would take the energy in 10 cubic kilometers of vacuum. Yet it fills all space — and so wins the totals."
              },
              {
                "visual": "⚖️",
                "title_zh": "暗物质的重力账本",
                "title_en": "The gravity ledger",
                "body_zh": "在引力的账本上，暗物质的质量约是可见物质的 6 倍——普通物质在宇宙里只是配角。星系为什么转得快、星系团为什么不散，都是暗物质在默默出力。",
                "body_en": "On gravity's ledger, dark matter outweighs the visible six to one — ordinary matter is a supporting act. Fast-spinning galaxies and intact clusters all lean on dark matter."
              }
            ],
            "questions": [
              {
                "id": "cos-d4-02-q1",
                "based_on": "teach[1]",
                "prompt_zh": "普通物质占宇宙总能量的比例约是？",
                "prompt_en": "Ordinary matter makes up about:",
                "figure": "🥤",
                "choices": [
                  {"label_zh": "5%", "label_en": "5%", "glyph": "✅"},
                  {"label_zh": "68%", "label_en": "68%", "glyph": "❌"},
                  {"label_zh": "95%", "label_en": "95%", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "暗能量 68%、暗物质 27%、普通物质只有 5%。",
                "explain_en": "68% dark energy, 27% dark matter, 5% us."
              },
              {
                "id": "cos-d4-02-q2",
                "based_on": "teach[1]",
                "prompt_zh": "宇宙中占比最大的成分是？",
                "prompt_en": "The universe's largest ingredient is:",
                "choices": [
                  {"label_zh": "暗能量", "label_en": "Dark energy", "glyph": "🥤"},
                  {"label_zh": "暗物质", "label_en": "Dark matter", "glyph": "❌"},
                  {"label_zh": "恒星和行星", "label_en": "Stars and planets", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "暗能量独占 68%，是绝对大头。",
                "explain_en": "Dark energy takes 68% — the clear majority."
              },
              {
                "id": "cos-d4-02-q3",
                "based_on": "teach[2]",
                "prompt_zh": "宇宙中当前物理未知的成分占？",
                "prompt_en": "Unknown-to-physics ingredients account for:",
                "choices": [
                  {"label_zh": "约 95%", "label_en": "About 95%", "glyph": "📊"},
                  {"label_zh": "约 5%", "label_en": "About 5%", "glyph": "❌"},
                  {"label_zh": "0%", "label_en": "0%", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "暗能量加暗物质，共占宇宙的 95%。",
                "explain_en": "Dark energy plus dark matter = 95% unknown."
              },
              {
                "id": "cos-d4-02-q4",
                "based_on": "teach[3]",
                "prompt_zh": "暗能量密度的特点是？",
                "prompt_en": "Dark energy's density is:",
                "choices": [
                  {"label_zh": "极小，但遍布整个宇宙", "label_en": "Extremely dilute, yet everywhere", "glyph": "🕯️"},
                  {"label_zh": "浓得像糖浆", "label_en": "Thick as syrup", "glyph": "❌"},
                  {"label_zh": "只存在于黑洞里", "label_en": "Only in black holes", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "10 立方千米真空才够一只灯泡亮 10 秒。",
                "explain_en": "10 km³ of vacuum powers a bulb for 10 seconds."
              },
              {
                "id": "cos-d4-02-q5",
                "based_on": "teach[4]",
                "prompt_zh": "暗物质的质量约是可见物质的？",
                "prompt_en": "Dark matter outweighs visible matter by about:",
                "choices": [
                  {"label_zh": "6 倍", "label_en": "6 times", "glyph": "⚖️"},
                  {"label_zh": "6%", "label_en": "6%", "glyph": "❌"},
                  {"label_zh": "相等", "label_en": "Equally", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "宇宙里暗物质引力约是可见物质的 6 倍。",
                "explain_en": "Six times the visible pull, universe-wide."
              },
              {
                "id": "cos-d4-02-q6",
                "based_on": "teach[1]",
                "prompt_zh": "热可可类比里，「肉桂粉」代表？",
                "prompt_en": "In the cocoa analogy, the 'cinnamon' is:",
                "choices": [
                  {"label_zh": "普通物质（5%）", "label_en": "Ordinary matter (5%)", "glyph": "✅"},
                  {"label_zh": "暗能量（68%）", "label_en": "Dark energy (68%)", "glyph": "❌"},
                  {"label_zh": "热可可本体", "label_en": "The cocoa itself", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "能看见摸到的一切只占 5%，像撒在最上面的粉。",
                "explain_en": "All we see and touch — the top sprinkle."
              }
            ]
          }
        },
        {
          "left": -50,
          "lesson": {
            "id": "cos-d4-03-universe-fate",
            "title_zh": "宇宙的命运",
            "title_en": "The Fate of the Universe",
            "subtitle_zh": "膨胀永不回头",
            "subtitle_en": "Expansion, no U-turns",
            "icon": "🔮",
            "xp": 40,
            "teach": [
              {
                "visual": "💥",
                "title_zh": "1998 年的惊雷",
                "title_en": "The 1998 bombshell",
                "body_zh": "两个相互竞争的团队观测遥远 Ia 型超新星，发现它们比预期更暗、更远——某种力量让宇宙膨胀加速了。被爱因斯坦扔掉的宇宙常数 Λ，又被恭恭敬敬请回方程。",
                "body_en": "Two rival teams found distant Type Ia supernovae dimmer — and farther — than expected: something was speeding the universe up. Einstein's discarded Λ was respectfully reinstated."
              },
              {
                "visual": "🪢",
                "title_zh": "引力与暗能量的拔河",
                "title_en": "Tug-of-war",
                "body_zh": "物质的引力总想把一切拉拢，拖慢膨胀；暗能量却促使空间扩张，加快膨胀。真空越多暗能量越多，像终极免费午餐——这场拔河的结果，就是宇宙的形状和命运。",
                "body_en": "Gravity pulls everything together, slowing expansion; dark energy pushes space apart, speeding it up. More vacuum means more dark energy — the ultimate free lunch, and the deciding tug."
              },
              {
                "visual": "🔮",
                "title_zh": "不会坍缩的宇宙",
                "title_en": "No collapse, no cycles",
                "body_zh": "观测敲定：宇宙永远不会坍缩，也不会循环。等待我们的是冷酷而荒芜的未来——千亿年后大多数恒星燃尽，除了最近的星系，一切都将消失在视野尽头。",
                "body_en": "Observation settles it: no collapse, no cycles. The future is cold and lonely — in a hundred billion years most stars fade, and all but the nearest galaxies slip past our horizon."
              },
              {
                "visual": "🚀",
                "title_zh": "万亿年的孤独",
                "title_en": "A trillion years alone",
                "body_zh": "约一万亿年后，银河系里的居民可能根本不知道其他星系存在——远方的星系退行快过光速，永远不可见。未来的天文学家会误以为宇宙是静态的，像爱因斯坦当年一样。",
                "body_en": "A trillion years on, Milky Way residents may not know other galaxies exist — they'll have receded beyond light-speed forever. Future astronomers will mistake the universe for static, just as Einstein did."
              }
            ],
            "questions": [
              {
                "id": "cos-d4-03-q1",
                "based_on": "teach[1]",
                "prompt_zh": "1998 年超新星观测揭示宇宙膨胀在？",
                "prompt_en": "The 1998 supernova results revealed expansion is:",
                "figure": "🔮",
                "choices": [
                  {"label_zh": "加速", "label_en": "Accelerating", "glyph": "💥"},
                  {"label_zh": "减速", "label_en": "Slowing", "glyph": "❌"},
                  {"label_zh": "停止了", "label_en": "Stopped", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "遥远超新星比预期更暗更远——有力量在加速膨胀。",
                "explain_en": "Too dim, too far — something was speeding it up."
              },
              {
                "id": "cos-d4-03-q2",
                "based_on": "teach[1]",
                "prompt_zh": "这一发现让哪个「老概念」复活了？",
                "prompt_en": "The discovery revived which old idea?",
                "choices": [
                  {"label_zh": "爱因斯坦的宇宙常数 Λ", "label_en": "Einstein's cosmological constant Λ", "glyph": "✅"},
                  {"label_zh": "地心说", "label_en": "Geocentrism", "glyph": "❌"},
                  {"label_zh": "以太", "label_en": "The aether", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "被爱因斯坦称为「最大错误」的 Λ 被请回方程。",
                "explain_en": "Einstein's 'biggest blunder' returned to duty."
              },
              {
                "id": "cos-d4-03-q3",
                "based_on": "teach[2]",
                "prompt_zh": "谁在拖慢宇宙膨胀？",
                "prompt_en": "What slows the expansion?",
                "choices": [
                  {"label_zh": "物质的引力", "label_en": "The gravity of matter", "glyph": "🪢"},
                  {"label_zh": "暗能量", "label_en": "Dark energy", "glyph": "❌"},
                  {"label_zh": "星光", "label_en": "Starlight", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "引力拉拢一切拖慢膨胀，暗能量则推动加速。",
                "explain_en": "Gravity drags; dark energy pushes."
              },
              {
                "id": "cos-d4-03-q4",
                "based_on": "teach[2]",
                "prompt_zh": "暗能量的「免费午餐」属性指？",
                "prompt_en": "Dark energy's 'free lunch' means:",
                "choices": [
                  {"label_zh": "空间越大暗能量越多", "label_en": "More space creates more dark energy", "glyph": "🍽️"},
                  {"label_zh": "它是免费的电", "label_en": "Free electricity", "glyph": "❌"},
                  {"label_zh": "可以吃掉星系", "label_en": "It eats galaxies", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "真空膨胀产生更多暗能量，进一步加速膨胀。",
                "explain_en": "Expanding vacuum breeds more dark energy — self-feeding."
              },
              {
                "id": "cos-d4-03-q5",
                "based_on": "teach[3]",
                "prompt_zh": "观测表明宇宙的未来是？",
                "prompt_en": "Observations show the universe will:",
                "choices": [
                  {"label_zh": "永远膨胀，不坍缩不循环", "label_en": "Expand forever — no collapse, no cycles", "glyph": "🔮"},
                  {"label_zh": "很快缩回一点", "label_en": "Re-collapse soon", "glyph": "❌"},
                  {"label_zh": "永远循环重生", "label_en": "Cycle forever", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "既不坍缩也不循环，只会一直膨胀下去。",
                "explain_en": "No collapse, no cycles — just endless expansion."
              },
              {
                "id": "cos-d4-03-q6",
                "based_on": "teach[4]",
                "prompt_zh": "约一万亿年后，银河系居民将？",
                "prompt_en": "A trillion years from now, Milky Way residents will:",
                "choices": [
                  {"label_zh": "看不到其他星系，误以为宇宙静态", "label_en": "See no other galaxies, think space is static", "glyph": "🚀"},
                  {"label_zh": "看到更多新星系", "label_en": "See more galaxies", "glyph": "❌"},
                  {"label_zh": "搬去别的宇宙", "label_en": "Move to another universe", "glyph": "❌"}
                ],
                "correct_idx": 0,
                "explain_zh": "远星系退行快过光速，永远退出了视野。",
                "explain_en": "Far galaxies outrun light, gone beyond the horizon."
              }
            ]
          }
        }
      ]
    }
  ]
}
```
