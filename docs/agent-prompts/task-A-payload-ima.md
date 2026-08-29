# Stardy · Task A · 50 关内容扩充 · ima 输入 payload

> 用途：把这整个文件作为 **单一输入** 喂给 ima（text-only LLM）。
> ima 不需要联网 / 读文件，全部上下文都在下面。
> ima 只需要按 §3 的 JSON schema 输出 50 关 / 5 阶段的内容。

---

## §1 · 任务

把 Stardy · 星旅（一个 Eazo 平台上的天文 Duolingo 风格 App）现有 16 关扩充到 **50 关 / 5 阶段**。

- 现状：16 关，3 章（抬头看夜空 / 太阳系与身边天象 / 更远的宇宙）
- 目标：5 个 track，每个 track 10 关左右，总共 50+ 关
- 5 个 track 的 id：`stargazing` / `solar` / `stars` / `cosmos` / `frontier`

**重要：你（ima）的输出必须是 §3 的 JSON 格式**。我会自己写脚本把你的 JSON 转成 TS 代码塞进项目里，所以你**不要**输出 TS、不要输出 markdown 解释、不要输出任何非 JSON 内容。

---

## §2 · 内容质量硬约束（每关必须满足）

1. **teach card**：1–3 张。每张 `title_zh` ≤ 14 字，`body_zh` ≤ 100 字（**硬上限**，超了会被拒），`body_en` ≤ 80 字（硬上限）
2. **题目**：2–5 道。选项 2–4 个，`correct_idx` 是 0-based
3. **xp**：5–100 之间
4. **中英双语**：每条中文必须配英文，英文不能是机翻味（要短、自然、像 native speaker 写的）
5. **解释文案**（explain_zh）：≤ 60 字，要回答"为什么"，不要重复题干
6. **emoji 风格**：每个 teach card 都有 visual emoji；选项尽量配 glyph；不要重复用同一个 emoji
7. **调性**：门外汉友好，避免未解释的术语（出现"赫罗图"等术语时必须在 teach card 里先用一句话铺垫）
8. **不要**写答案明显 / 选项相似 / "以上都对"

---

## §3 · JSON 输出 schema（严格遵守）

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
          "chapter_zh": "第 1 章 · 抬头看夜空",
          "chapter_en": "Chapter 1 · Look up tonight",
          "left": 50,
          "lesson": {
            "id": "lesson-id-kebab-case",
            "title_zh": "...",
            "title_en": "...",
            "subtitle_zh": "...",
            "subtitle_en": "...",
            "icon": "🌌",
            "xp": 20,
            "teach": [
              {
                "visual": "🌌",
                "title_zh": "...",
                "title_en": "...",
                "body_zh": "...",
                "body_en": "..."
              }
            ],
            "questions": [
              {
                "id": "q-unique-id",
                "prompt_zh": "...",
                "prompt_en": "...",
                "figure": "🌌",
                "choices": [
                  {"label_zh": "...", "label_en": "...", "glyph": "🐻"}
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

### 字段规则

- `tracks` 数组长度 = 5（5 个 track）
- 每个 `nodes` 数组长度 = 10 ± 2（建议每 track 10 关）
- 每个 track 的**第一个 node**带 `chapter_zh` / `chapter_en`，其余不写这俩字段
- `lesson.id` 全小写、kebab-case、不能重复（建议：`stg-01-stars-on-night` / `sol-02-earth-spin` 这种命名）
- `question.id` 在整个 JSON 内唯一，建议 `<lesson-id>-q<n>`（如 `stg-01-q1`）
- `left` 是 0-100 的数字（不写会自动用 S 曲线，建议写 0/26/34/26/0/-26/-34/-26 这种曲线）
- `figure` 可选——只在用整图题时写；其余题不要写这个字段（不要写 null）
- `glyph` 可选——选项旁的 emoji
- 任何字段值都不能是 null / 空字符串 / 空数组（要么写值，要么不写这个字段）

### 5 个 track 的内容骨架（必填）

| track id | 中文名 | 英文名 | 必须涵盖 |
|---|---|---|---|
| stargazing | 抬头看夜空 | Look Up Tonight | 星座 / 月相 / 行星天空 / 四季星空 / 视差 / 时间 |
| solar | 太阳系与身边天象 | Solar System & Sky | 太阳 / 八大行星 / 卫星 / 小天体 / 流星 / 日食月食 |
| stars | 恒星——宇宙的灯塔 | Stars: Beacons | 恒星参数 / 赫罗图 / 演化 / 致密星 / 双星 |
| cosmos | 星系与宇宙 | Galaxies & Cosmos | 银河系 / 河外星系 / 暗物质 / 宇宙学 |
| frontier | 前沿与交叉 | Frontiers & Crossings | 黑洞 / 引力波 / 系外行星 / SETI |

---

## §4 · 5 阶段 × 微节参考表（来自用户的研究材料）

下面是用户预先设计的内容骨架，按这张表填每关的 title / subtitle：

### A · stargazing（抬头看夜空）
- A1 时间与历法：① 太阳日 vs 恒星日 ② 闰年 / 闰秒 ③ 时区
- A2 天球与坐标：① 天球概念 ② 赤经赤纬 ③ 北天极
- A3 四季星空：① 春 ② 夏 ③ 秋 ④ 冬
- A4 星座与亮星：① 北斗 ② 猎户 ③ 天蝎 ④ 仙后 ⑤ 北极星
- A5 月相与行星：① 月相成因 ② 月相变化 ③ 金星相位 ④ 行星视运动

### B · solar（太阳系与身边天象）
- B1 太阳：① 太阳结构 ② 日核聚变 ③ 太阳活动 / 黑子
- B2 地球：① 自转公转 ② 四季成因 ③ 潮汐
- B3 类地行星：① 水星 ② 金星与温室效应 ③ 火星与水
- B4 巨行星：① 木星 ② 土星与光环 ③ 天王星/海王星
- B5 小天体：① 小行星带 ② 彗星 ③ 柯伊伯带与奥尔特云 ④ 流星与陨石
- B6 系外行星：① 凌星法 ② 径向速度法 ③ 宜居带

### C · stars（恒星——宇宙的灯塔）
- C1 恒星参数：① 视差测距 ② 标准烛光 ③ 亮度与光度 ④ 颜色与温度 ⑤ 质量
- C2 赫罗图：① 图的坐标轴 ② 主序 ③ 巨星与矮星区
- C3 恒星形成：① 分子云 ② 引力坍缩 ③ 原恒星
- C4 演化：① 主序阶段 ② 红巨星 ③ 低质量 vs 大质量路径
- C5 恒星死亡：① 行星状星云与白矮星 ② 超新星 ③ 中子星与脉冲星 ④ 黑洞初识
- C6 变星与双星：① 造父变星 ② 食双星

### D · cosmos（星系与宇宙）
- D1 银河系：① 结构：核球/旋臂/银晕 ② 旋转曲线 ③ 银心黑洞
- D2 河外星系：① 哈勃分类 ② 哈勃定律与红移
- D3 暗物质：① 旋转曲线异常 ② 星系团证据 ③ 候选粒子
- D4 宇宙学：① 大爆炸 ② 宇宙微波背景 ③ 宇宙组成 ④ 宇宙的命运

### E · frontier（前沿与交叉）
- E1 黑洞与引力波：① 黑洞观测证据 ② 并合事件 ③ 引力波探测
- E2 高能与活动星系：① 伽马暴 ② 活动星系核与类星体
- E3 天体生物学：① 生命存在条件 ② SETI 与德雷克公式
- E4 早期宇宙：① 暴胀 ② 暗能量与加速膨胀

---

## §5 · 风格参考（必读）

下面是项目现有 16 关中的一关，让你看清字段怎么填、措辞什么风格：

```typescript
const moonPhases: Lesson = {
  id: "moon-phases",
  trackId: "stargazing",
  title: L("月相变化", "Moon Phases"),
  subtitle: L("从新月到满月", "From new moon to full"),
  icon: "🌙",
  xp: 20,
  teach: [
    T("🌗", ["月相由太阳、地球、月亮的位置决定", "Moon phases depend on Sun–Earth–Moon geometry"], ["月亮本身不发光，我们看到的是它被太阳照亮的那一面，比例会随位置变化。", "The Moon doesn't glow on its own — we see the sunlit portion, which changes as it orbits."]),
    T("🌕", ["满月与新月是两个极端", "Full moon and new moon are the two extremes"], ["满月时地球在中间，月面全亮；新月时月亮在太阳一侧，月面几乎全暗。", "At full moon Earth is in the middle so we see it fully lit; at new moon the Moon sits near the Sun and looks almost dark."]),
  ],
  questions: [
    q("moon-1", ["月相变化的根本原因是？", "What causes the Moon's phases?"], [
      { zh: "月亮自己发光强弱", en: "The Moon's own glow varies" },
      { zh: "日地月相对位置变化", en: "Sun–Earth–Moon geometry" },
      { zh: "地球遮挡月光", en: "Earth blocks the moonlight" },
    ], 1, ["月亮反射太阳光，被照亮那部分的比例由日地月位置决定。", "The Moon reflects sunlight — how much of it we see depends on the Sun–Earth–Moon geometry."]),
    // ... more questions
  ],
};
```

注意：
- teach card 的 title 是短句（"月相由太阳、地球、月亮的位置决定"）
- teach card 的 body 是 1 句话，2 行左右
- 题目选项不要把正确答案写得更显眼（不要"正确答案是 X"）
- explain 是知识增量，不是简单反馈

---

## §6 · JSON 输出样例（直接参考此结构）

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
          "chapter_zh": "第 1 章 · 抬头看夜空",
          "chapter_en": "Chapter 1 · Look up tonight",
          "left": 50,
          "lesson": {
            "id": "stg-01-moon-phases",
            "title_zh": "月相变化",
            "title_en": "Moon Phases",
            "subtitle_zh": "从新月到满月",
            "subtitle_en": "From new moon to full",
            "icon": "🌙",
            "xp": 20,
            "teach": [
              {
                "visual": "🌗",
                "title_zh": "月相由日地月相对位置决定",
                "title_en": "Phases come from Sun–Earth–Moon geometry",
                "body_zh": "月亮本身不发光，我们看到的是它被太阳照亮的那一面，比例随位置变化。",
                "body_en": "The Moon doesn't glow on its own — we see the sunlit portion, which changes as it orbits."
              },
              {
                "visual": "🌕",
                "title_zh": "满月与新月是两个极端",
                "title_en": "Full and new moon are the two extremes",
                "body_zh": "满月时地球在中间，月面全亮；新月时月亮在太阳一侧，月面几乎全暗。",
                "body_en": "At full moon Earth is in the middle so we see it fully lit; at new moon the Moon sits near the Sun and looks almost dark."
              }
            ],
            "questions": [
              {
                "id": "stg-01-q1",
                "prompt_zh": "月相变化的根本原因是？",
                "prompt_en": "What causes the Moon's phases?",
                "choices": [
                  {"label_zh": "月亮自己发光强弱变化", "label_en": "The Moon's own glow varies"},
                  {"label_zh": "日地月相对位置变化", "label_en": "Sun–Earth–Moon geometry"},
                  {"label_zh": "地球遮挡月光", "label_en": "Earth blocks the moonlight"}
                ],
                "correct_idx": 1,
                "explain_zh": "月亮反射太阳光，被照亮那部分的比例由日地月位置决定。",
                "explain_en": "The Moon reflects sunlight — how much we see depends on the geometry."
              },
              {
                "id": "stg-01-q2",
                "prompt_zh": "新月时我们能看到月亮吗？",
                "prompt_en": "Can we see the Moon at new moon?",
                "choices": [
                  {"label_zh": "几乎看不到", "label_en": "Almost not", "glyph": "🌑"},
                  {"label_zh": "最圆最亮", "label_en": "Brightest and roundest", "glyph": "🌕"},
                  {"label_zh": "半个亮面", "label_en": "Half-lit", "glyph": "🌗"}
                ],
                "correct_idx": 0,
                "explain_zh": "新月时月亮在太阳一侧，被照亮的一面背向地球。",
                "explain_en": "At new moon the lit side faces away from Earth."
              }
            ]
          }
        }
        // ... 9 more lessons for stargazing track
      ]
    }
    // ... 4 more tracks: solar, stars, cosmos, frontier
  ]
}
```

---

## §7 · 5 个 track 的命名 / icon

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

## §8 · 完成后的输出要求

1. **只输出一个 JSON 块**，前后不要有任何 markdown 解释 / 注释 / 备注
2. JSON 必须是合法的（能被 `JSON.parse` 解析）
3. 总 lesson 数 ≥ 50
4. 每个 lesson 至少 2 道题
5. 5 个 track 都有 ≥ 8 个 lesson
6. 用户不会来问你问题——遇到不确定就自己选合理的写法

---

## §9 · 验收（我的脚本会自动跑这些检查）

- ✅ `tracks` 长度 = 5
- ✅ 每个 track 的 lesson 数 ≥ 8
- ✅ 总 lesson 数 ≥ 50
- ✅ 每个 lesson 有 2-5 道题
- ✅ 每个 teach card 的 `body_zh` ≤ 100 字 / `body_en` ≤ 80 字
- ✅ 所有 `lesson.id` 全局唯一
- ✅ 所有 `question.id` 全局唯一
- ✅ `correct_idx` 在选项数量范围内
- ✅ 没有 null / 空字符串 / 空数组

任何一项不过脚本会立刻报错告诉我具体哪一关 / 哪个字段错了。

---

## §10 · 项目参考（供你理解风格）

### 10.1 `src/lib/astro/types.ts` 节选

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

export interface TeachCard {
  visual: string;
  title: Localized;
  body: Localized;
}

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

### 10.2 `src/lib/astro/content.ts` 现有 16 关（节选前 2 关）

```typescript
const constellations: Lesson = {
  id: "constellations",
  trackId: "stargazing",
  title: L("北斗七星", "The Big Dipper"),
  subtitle: L("认识指路星", "Find your way by the stars"),
  icon: "🌌",
  xp: 20,
  teach: [
    T("🌌", ["北斗七星是天空中最好认的图案之一", "The Big Dipper is one of the easiest shapes to spot"], ["它由七颗亮星组成一个大勺子形状，几乎全年可见。", "Seven bright stars form a big dipper (ladle) shape, visible almost year-round."]),
    T("🧭", ["顺着勺口两星，能找到北极星", "Its two 'pointer' stars lead you to Polaris"], ["把勺口两颗星连线延长约 5 倍，就会指向几乎不动的北极星。", "Extend the line through its two pointer stars about 5× and you land on Polaris, which barely moves."]),
  ],
  questions: [
    q("con-1", ["北斗七星属于哪个星座的一部分？", "The Big Dipper is part of which constellation?"], [
      { zh: "大熊座", en: "Ursa Major", glyph: "🐻" },
      { zh: "猎户座", en: "Orion", glyph: "🏹" },
      { zh: "天蝎座", en: "Scorpius", glyph: "🦂" },
    ], 0, ["北斗七星是大熊座的显著部分，古人靠它辨方向。", "The Big Dipper is a prominent part of Ursa Major, long used to find direction."]),
    q("con-2", ["顺着北斗"勺口"两颗星延长，能找到哪颗星？", "Extending the Dipper's two pointer stars leads to which star?"], [
      { zh: "织女星", en: "Vega" },
      { zh: "北极星", en: "Polaris", glyph: "⭐" },
      { zh: "天狼星", en: "Sirius" },
    ], 1, ["勺口两星连线延长约 5 倍，就指向北极星。", "Extend the pointer stars about 5× and you reach Polaris."]),
  ],
};
```

### 10.3 教材背景（来自用户研究）

用户调研了 4 本教材，写作时按以下定位：

- 《基础天文学》（刘学富，第二版）：知识骨架，5 篇结构对应 5 阶段
- 《天文学新概论》（苏宜，第五版）：大众语言润色，避免公式堆砌
- 《Fundamental Astronomy》（Karttunen，第六版）：深度参考（不要照搬公式）
- 《诺顿星图手册》：观测指引（户外实际看什么）

**写作风格要求**：门外汉友好 → 苏宜式；入门级用比喻和人文；进阶节点可以多用术语但必须先解释。

---

## §11 · 用户拿到 JSON 后会做什么（你不需要管）

1. 把你的 JSON 保存到 `astro-quest/expansion.json`
2. 跑：`cd astro-quest && bun scripts/import-content-from-json.ts expansion.json`
3. 跑：`bun run lint` 和 `pnpm exec next build`
4. 看 dev server 上 50 个节点是否能正常显示
5. 修任何报错或质量问题

你只管输出 JSON。其他都不用管。

---

**开始输出 JSON 吧。记住：**
- **只输出一个合法 JSON 块**
- **前后不要任何 markdown / 注释 / 解释**
- **5 个 track / 总共 ≥ 50 关 / 每关 ≥ 2 题**
