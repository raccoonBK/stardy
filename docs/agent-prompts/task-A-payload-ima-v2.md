# Stardy · Task A · 50 关内容扩充 · ima payload **v2**

> 用途：把这整个文件作为 **单一输入** 喂给 ima。
> **v2 替代 v1**。核心改动：teach 4 张 / 题 6 道 / 全部识别+理解 / 加 `based_on` 字段。
> ima 不需要联网 / 读文件，全部上下文都在下面。

---

## §1 · 任务

把 Stardy · 星旅（一个 Eazo 平台上的天文 Duolingo 风格 App）从 16 关扩到 **50 关 / 5 阶段**。

- 5 个 track：`stargazing` / `solar` / `stars` / `cosmos` / `frontier`
- 每 track 10-12 关，总产出 **52 关**（按你材料的内容厚度自然分配）
- **每关的格式**：4 张 teach 卡 + 6 道题（**全是识别/理解，无计算**）

**重要：你的输出必须是 §3 的 JSON 格式**。我会自己写脚本把你的 JSON 转成 TS 代码塞进项目里，所以你**不要**输出 TS、不要输出 markdown 解释、不要输出任何非 JSON 内容。

---

## §2 · 质量硬约束（**v2 改了 3 项**）

### 2.1 teach 卡（**每关 3-4 张，** v2 从 2 张改了）
- 每张 `title_zh` ≤ 14 字
- 每张 `body_zh` ≤ **100 字**（v1 是 100，仍是上限；但内容要写到接近上限，每张都要有信息量）
- 每张 `body_en` ≤ **100 字**
- **teach 内容必须能"在手机上看 2 分钟"**——这意味着 4 张卡合计约 400-450 字（中文），覆盖一个完整概念闭环
- 4 张卡之间要**有逻辑顺序**（铺垫 → 核心 → 例外 → 总结），不要 4 张并列说同一件事

### 2.2 题目（**每关 6 道，全部识别+理解，** v2 从 3 题改了）
- 题数：**5-7 道**（建议 6 道）
- **题型：只允许"识别 / 理解"两类**——判断、单选（看图选、看文字选）、配对（拖拽归类）、辨析（哪个对哪个错）
- **不允许任何需要纸笔的题**——禁止：
  - 任何数学计算（"地球到太阳多少 km""某星等差几等"）
  - 任何单位换算（"小时转秒""光年转 km"）
  - 任何步骤推导（"先做 X 再做 Y"）
  - 任何图表读数（"图上 XX 点对应多少"）
- 答案必须**看一眼 teach 卡 + 看完题干**就能选
- 每题 `correct_idx` 是 0-based
- 每题必须有 `based_on` 字段（"teach[1]" / "teach[2]" / "teach[3]" / "teach[4]"），标该题对应 teach 卡的序号
- **计算题挪到"挑战殿堂"**（详见 §11）——主线 lesson 一律不出

### 2.3 中英双语
- 每条中文必须配英文，英文不能是机翻味（要短、自然、像 native speaker 写的）

### 2.4 explain 文案（`explain_zh`）
- ≤ 60 字，要回答"为什么"，不要重复题干
- 直接引用 teach 卡里的某句话作为解释（让用户能跳回去对照）

### 2.5 emoji 风格
- 每个 teach card 都有 visual emoji
- 选项尽量配 glyph
- 不要重复用同一个 emoji

### 2.6 调性
- 门外汉友好
- 出现"赫罗图""视差"等术语时**必须在 teach 卡里先用一句话铺垫**

---

## §3 · JSON 输出 schema（v2 加了 `based_on` 字段）

```json
{
  "tracks": [
    {
      "id": "stargazing",
      "name_zh": "...",
      "name_en": "...",
      "tagline_zh": "...",
      "tagline_en": "...",
      "icon": "🌌",
      "nodes": [
        {
          "chapter_zh": "第 4 章 · 时间、天球与四季",
          "chapter_en": "Chapter 4 · Time, Spheres & Seasons",
          "left": 50,
          "lesson": {
            "id": "stg-a1-01-solar-day",
            "title_zh": "太阳日与恒星日",
            "title_en": "Solar Day vs Sidereal Day",
            "subtitle_zh": "一天到底有多长",
            "subtitle_en": "How long is a day, really?",
            "icon": "🌞",
            "xp": 20,
            "teach": [
              {"visual": "🌞", "title_zh": "...", "title_en": "...", "body_zh": "...", "body_en": "..."},
              {"visual": "⏱️", "title_zh": "...", "title_en": "...", "body_zh": "...", "body_en": "..."},
              {"visual": "🔄", "title_zh": "...", "title_en": "...", "body_zh": "...", "body_en": "..."},
              {"visual": "💡", "title_zh": "...", "title_en": "...", "body_zh": "...", "body_en": "..."}
            ],
            "questions": [
              {
                "id": "stg-a1-01-q1",
                "based_on": "teach[1]",
                "prompt_zh": "...",
                "prompt_en": "...",
                "figure": "🌞",
                "choices": [
                  {"label_zh": "...", "label_en": "...", "glyph": "1️⃣"}
                ],
                "correct_idx": 0,
                "explain_zh": "...",
                "explain_en": "..."
              }
            ]
          }
        }
      ]
    }
  ]
}
```

### v2 新增字段
- 每个 question 必须有 `based_on`：`"teach[1]"` / `"teach[2]"` / `"teach[3]"` / `"teach[4]"` 之一
- `based_on` 决定题目逻辑上锚定哪张 teach 卡（用户答错时可定位回 teach 卡复习）

### 其他字段规则（同 v1）
- `tracks` 长度 = 5
- 每 track 8-12 个 lesson
- 每个 track 的**第一个 node**带 `chapter_zh` / `chapter_en`，其余不写
- `lesson.id` 全小写、kebab-case、全局唯一（建议 `stg-a1-01-solar-day` / `sol-b1-01-sun-core` 这种命名）
- `question.id` 全局唯一（建议 `<lesson-id>-q<n>`）
- `left` 0-100，不写会用 S 曲线默认值
- `figure` 可选（只在整图题时写，不要写 null）
- `glyph` 可选（选项旁的 emoji）
- 任何字段值不能是 null / 空字符串 / 空数组

---

## §4 · 5 阶段 × 微节表（按这张表填每关的 title / subtitle）

### A · stargazing（抬头看夜空）— 共 14 微节
- A1 时间与历法：① 太阳日 vs 恒星日 ② 闰年 ③ 时区
- A2 天球与坐标：① 天球概念 ② 赤经赤纬 ③ 北天极
- A3 四季星空：① 春 ② 夏 ③ 秋 ④ 冬
- A4 星座与亮星：① 北斗 ✅已写 ② 猎户 ✅已写 ③ 天蝎 ④ 仙后 ⑤ 北极星
- A5 月相与行星：① 月相成因 ✅已写 ② 月相变化 ✅已写 ③ 金星相位 ④ 行星视运动 ✅已写

### B · solar（太阳系与身边天象）— 共 13 微节
- B1 太阳：① 太阳结构 ② 日核聚变 ✅部分 ③ 太阳活动/黑子
- B2 地球：① 自转公转 ② 四季成因 ③ 潮汐 ✅已写
- B3 类地行星：① 水星 ② 金星 ③ 火星与水 ✅已写
- B4 巨行星：① 木星 ② 土星 ✅已写 ③ 天王星/海王星
- B5 小天体：① 小行星带 ② 彗星 ✅已写 ③ 柯伊伯带/奥尔特云 ④ 流星 ✅已写
- B6 系外行星：① 凌星法 ② 径向速度法 ③ 宜居带

### C · stars（恒星——宇宙的灯塔）— 共 18 微节
- C1 恒星参数：① 视差测距 ② 标准烛光 ③ 亮度 ✅已写 ④ 颜色与温度 ⑤ 质量
- C2 赫罗图：① 坐标轴 ② 主序 ③ 巨星与矮星
- C3 恒星形成：① 分子云 ② 引力坍缩 ③ 原恒星
- C4 演化：① 主序阶段 ② 红巨星 ③ 低质量 vs 大质量路径
- C5 恒星死亡：① 行星状星云/白矮星 ② 超新星 ③ 中子星/脉冲星 ④ 黑洞 ✅已写
- C6 变星与双星：① 造父变星 ② 食双星

### D · cosmos（星系与宇宙）— 共 9 微节
- D1 银河系：① 结构 ✅已写 ② 旋转曲线 ③ 银心黑洞
- D2 河外星系：① 哈勃分类 ✅已写 ② 哈勃定律与红移
- D3 暗物质：① 旋转曲线异常 ② 星系团证据 ③ 候选粒子
- D4 宇宙学：① 大爆炸 ✅已写 ② 宇宙微波背景 ③ 宇宙组成 ④ 宇宙的命运

### E · frontier（前沿与交叉）— 共 8 微节
- E1 黑洞与引力波：① 黑洞证据 ✅已写 ② 并合事件 ③ 引力波探测
- E2 高能与活动星系：① 伽马暴 ② 活动星系核与类星体
- E3 天体生物学：① 生命存在条件 ② SETI 与德雷克公式
- E4 早期宇宙：① 暴胀 ② 暗能量与加速膨胀

### 现有 16 关（**绝对不要重写这些 id**）
`moon-phases`, `constellations`, `orion-hunter`, `planets-sky`, `magnitude`,
`solar-system`, `mars-basics`, `saturn-rings`, `tides`, `eclipse`,
`meteor-shower`, `comets`, `aurora`, `galaxies`, `black-hole`, `big-bang`

> **新写的关卡从第 4 章开始**（现有 16 关占了第 1-3 章）。
> **不要再纠结"该写多少关"**——按这个微节表，每微节 1 关，自然产出 50-60 关。

---

## §5 · 完整 lesson 样例（**v2 改了**：4 teach + 6 questions）

```json
{
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
      "choices": [
        {"label_zh": "恒星日更短", "label_en": "The sidereal day"},
        {"label_zh": "太阳日更短", "label_en": "The solar day"},
        {"label_zh": "一样长", "label_en": "They're the same"}
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
        {"label_zh": "地球在公转", "label_en": "Earth orbits the Sun"},
        {"label_zh": "太阳在自转", "label_en": "The Sun rotates"},
        {"label_zh": "月亮有引力", "label_en": "The Moon's gravity"}
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
        {"label_zh": "提前约 4 分钟", "label_en": "~4 min earlier"},
        {"label_zh": "推迟约 4 分钟", "label_en": "~4 min later"},
        {"label_zh": "同一时间", "label_en": "At the same time"}
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
        {"label_zh": "一整天", "label_en": "A whole day"},
        {"label_zh": "一小时", "label_en": "An hour"},
        {"label_zh": "一秒钟", "label_en": "A second"}
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
        {"label_zh": "地球绕日一圈不是整数天", "label_en": "Earth's orbit isn't an integer number of days"},
        {"label_zh": "月亮有周期变化", "label_en": "The Moon's cycle varies"},
        {"label_zh": "太阳会变化", "label_en": "The Sun changes"}
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
        {"label_zh": "太阳日", "label_en": "The solar day"},
        {"label_zh": "恒星日", "label_en": "The sidereal day"},
        {"label_zh": "两个都用", "label_en": "We use both equally"}
      ],
      "correct_idx": 0,
      "explain_zh": "钟表、上下班、日历都以太阳日为准（24 小时）。",
      "explain_en": "Clocks, work schedules, and calendars all follow the 24-hour solar day."
    }
  ]
}
```

注意：
- 4 张 teach 卡之间**有逻辑顺序**：概念铺垫（teach[1]）→ 原理细节（teach[2]）→ 自然现象（teach[3]）→ 实际应用（teach[4]）
- 6 道题严格映射到 4 张 teach 卡：teach[1] 出 1 题、teach[2] 出 1 题、teach[3] 出 2 题、teach[4] 出 2 题
- **没有任何计算题**——所有答案都在 teach 卡里写明 + 题干里直接给出来
- 英文版简短自然，**不是机翻**

---

## §6 · 题型配比建议

每关 6 题，建议这样分：
- 2 题识别（看图/看概念选名字）— 比如"哪个是北极星？"
- 2 题理解（看现象选原因 / 因果辨析）— 比如"为什么春天比秋天白昼长？"
- 1 题辨析（哪个说法对 / 错）— 比如"以下哪个说法正确？"
- 1 题应用（已知 teach 内容，套到新场景）— 比如"如果你在北极，极昼持续多久？"

**禁止的题型**：
- ❌ 算术题
- ❌ 单位换算
- ❌ 公式代入
- ❌ 步骤排序
- ❌ 图表精确读数

---

## §7 · 命名规范（**v2 加了**）

- `lesson.id`: `<track-prefix>-<unit>-<seq>-<slug>`
  - track-prefix: `stg` / `sol` / `str` / `cos` / `frn`
  - unit: `a1` / `b3` / `c5` 等（直接对应 §4 的单元编号）
  - seq: 01 / 02 / 03 等（同一单元内多关时编号）
  - slug: 短英文描述（如 `solar-day`、`mercury`、`parallax`）
  - 例：`stg-a1-01-solar-day`、`sol-b1-01-sun-core`、`str-c1-01-parallax`、`cos-d1-02-rotation-curve`、`frn-e1-02-merger-event`

- `question.id`: `<lesson-id>-q<n>`（n 从 1 开始）

- `based_on`: `"teach[1]"` / `"teach[2]"` / `"teach[3]"` / `"teach[4]"` 之一（**必须对应到具体某张 teach 卡**）

---

## §8 · 5 个 track 的命名 / icon（**v2 改了一处**）

```json
[
  {"id": "stargazing", "icon": "🌌", "name_zh": "抬头看夜空", "name_en": "Look Up Tonight"},
  {"id": "solar",      "icon": "🪐", "name_zh": "太阳系与身边天象", "name_en": "Solar System & Sky"},
  {"id": "stars",      "icon": "⭐", "name_zh": "恒星——宇宙的灯塔", "name_en": "Stars: Beacons of the Universe"},
  {"id": "cosmos",     "icon": "🌌", "name_zh": "星系与宇宙", "name_en": "Galaxies & the Cosmos"},
  {"id": "frontier",   "icon": "🚀", "name_zh": "前沿与交叉", "name_en": "Frontiers & Crossings"}
]
```

---

## §9 · 完成后的输出要求

1. **只输出一个 JSON 块**，前后不要有任何 markdown 解释 / 注释 / 备注
2. JSON 必须是合法的（能被 `JSON.parse` 解析）
3. 总 lesson 数 ≥ 50（**不要再纠结具体数字**，按 §4 微节表填多少就是多少）
4. **每关 4 张 teach + 6 题**（不是 2 张 / 3 题）
5. 5 个 track 都要写
6. 用户不会来问你问题——遇到不确定就自己选合理的写法

---

## §10 · 验收（我的脚本会自动跑这些检查，**v2 加了几项**）

- ✅ `tracks` 长度 = 5
- ✅ 每个 track 的 lesson 数 ≥ 8
- ✅ 总 lesson 数 ≥ 50
- ✅ **每个 lesson 有 3-4 张 teach 卡**（v2 新）
- ✅ **每个 lesson 有 5-7 道题**（v2 新）
- ✅ 每个 teach card 的 `body_zh` ≤ 100 字 / `body_en` ≤ 100 字
- ✅ **没有计算题**（v2 新：脚本会扫所有题目检查）
- ✅ 每个 question 有 `based_on` 字段且指向合法 teach 卡序号（v2 新）
- ✅ 所有 `lesson.id` 全局唯一
- ✅ 所有 `question.id` 全局唯一
- ✅ `correct_idx` 在选项数量范围内
- ✅ 没有 null / 空字符串 / 空数组

---

## §11 · 计算题去挑战殿堂（**v2 新**）

**主线 lesson 一律不出计算题**——你的 6 题里不能出现需要纸笔的题。

**计算题 / 难题 / 跨单元综合题**属于**挑战殿堂**（另一个独立页面 `/challenges` 或 `/dungeon`），由用户主动进入挑战。挑战殿堂的关卡结构、UI、奖励机制**以后再设计**——本次任务只关注主线 lesson 内容。

挑战殿堂可能包含的题型（**不在本次范围内**）：
- 视差秒差距换算
- 光年 / 秒差距 / AU 换算
- 多普勒频移计算
- 黑洞史瓦西半径估算
- 哈勃常数 + 距离 = 速度 综合题
- 天文摄影参数计算（曝光 / 焦比）

你只管写主线 lesson 内容就行。

---

## §12 · 项目参考

### 12.1 `src/lib/astro/types.ts` 节选

```typescript
export interface Localized { en: string; zh: string; }
export interface Choice { id: string; label: Localized; glyph?: string; }
export interface Question {
  id: string;
  kind: "choice" | "image" | "truefalse";
  prompt: Localized;
  figure?: string;
  choices: Choice[];
  correctId: string;
  explain: Localized;
}
export interface TeachCard { visual: string; title: Localized; body: Localized; }
export interface Lesson {
  id: string;
  trackId: string;
  title: Localized;
  subtitle: Localized;
  icon: string;
  xp: number;
  teach: TeachCard[];
  questions: Question[];
}
```

### 12.2 项目风格参考（现有 lesson 节选）

```typescript
const constellations: Lesson = {
  id: "constellations",
  trackId: "stargazing",
  title: L("北斗七星", "The Big Dipper"),
  subtitle: L("认识指路星", "Find your way by the stars"),
  icon: "🌌",
  xp: 20,
  teach: [
    T("🌌", ["北斗七星是天空中最好认的图案之一", "..."], ["它由七颗亮星组成一个大勺子形状，几乎全年可见。", "..."]),
    T("🧭", ["顺着勺口两星，能找到北极星", "..."], ["把勺口两颗星连线延长约 5 倍，就会指向几乎不动的北极星。", "..."]),
  ],
  questions: [
    q("con-1", ["北斗七星属于哪个星座的一部分？", "..."], [
      { zh: "大熊座", en: "Ursa Major", glyph: "🐻" },
      { zh: "猎户座", en: "Orion", glyph: "🏹" },
      { zh: "天蝎座", en: "Scorpius", glyph: "🦂" },
    ], 0, ["北斗七星是大熊座的显著部分，古人靠它辨方向。", "..."]),
  ],
};
```

### 12.3 教材背景

用户给了 4 本教材的章节结构作为内容骨架：
- 《基础天文学》（刘学富，第二版）：5 篇结构对应 5 阶段
- 《天文学新概论》（苏宜，第五版）：苏宜式门外汉语言
- 《Fundamental Astronomy》（Karttunen，第六版）：深度参考（**不要照搬公式**）
- 《诺顿星图手册》：观测指引

**写作风格要求**：门外汉友好 → 苏宜式；入门级用比喻和人文；进阶节点可以多用术语但**必须先在 teach 卡里解释**。

---

## §13 · 用户拿到 JSON 后会做什么（你不需要管）

1. 把你的 JSON 保存到 `astro-quest/expansion.json`
2. 跑 importer
3. 跑 lint / build
4. 看 dev server 上 50+ 个节点是否能正常显示
5. 我会人工 review 第一关质量

你只管输出 JSON。其他都不用管。

---

**开始输出 JSON 吧。记住：**
- **只输出一个合法 JSON 块**
- **前后不要任何 markdown / 注释 / 解释**
- **5 个 track / 总共 ≥ 50 关 / 每关 4 teach + 6 题**
- **每题带 `based_on` 字段**
- **没有计算题**
- **不要再纠结数字**
