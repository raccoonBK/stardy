# Task A · 50 关内容扩充 · Agent 任务书

> 写于 2026-08-25 · 配套 `tasks.md` 的 **T1.1**
> 用户决策：节奏 10 周 / 天文主线先做好 / 观鸟同时开工
> 这份文档分两部分：**材料清单（你准备什么）+ 完整 prompt（你交给 agent）**

---

## 第 1 部分 · 材料清单

> 你要凑齐下面这些再 spawn agent。**没凑齐前不要发**，否则 agent 会卡壳来回问你。

### ✅ 必须给 agent（你亲自准备 / 转交）

| # | 材料 | 形式 | 备注 |
|---|---|---|---|
| 1 | **本文件第 2 部分"完整 prompt"** | 复制粘贴 | 一次性给 agent |
| 2 | **对话里的 `pasted-text.txt` 全文** | 文件路径或粘贴 | 5 阶段 × 微节表 + 4 本教材简介 + 跳级规则 + 样题示范 |
| 3 | **项目根目录路径** | 文本 | agent 自己读代码：`/Users/raccoonbk/个人小项目/stardy/astro-quest` |
| 4 | **`docs/tasks.md` 的 T1.1 节** | 文件路径 | 任务范围确认 |
| 5 | **`docs/astro-quest-bp.md` 第 5 / 8 节** | 文件路径 | 内容生产策略 + 产品矩阵 |

### ⚪ 可选给（看 agent 是否需要）

| # | 材料 | 何时需要 |
|---|---|---|
| 6 | 你自己写的某 3-5 关作为"风格锚点" | agent 在写新内容时如果拿不准语气，你点出 |
| 7 | 4 本参考教材的 PDF / 章节结构 | agent 写到深度题目（比如 B5 彗星 / C5 中子星）时可能要查 |
| 8 | 调性补充（"我们想做小红书爆款那种短句" / "严肃科普风"） | 默认按现有 16 关的轻松 emoji 风格 |

### ❌ 不需要给（agent 自己读）

- `src/lib/astro/types.ts` 全文（schema）
- `src/lib/astro/content.ts` 全文（helper + 现有数据）
- `src/lib/themes/packs/astronomy.ts`（理解主题抽象层）
- `src/i18n/locales/{zh-CN,en-US}.json`（只读不改）
- `src/app/globals.css`（不动）

---

## 第 2 部分 · 完整 Prompt（直接复制给 agent）

```markdown
# 任务

把 Stardy · 星旅（Eazo 平台上的天文 Duolingo App）现有 16 关内容扩充到 **50 关 / 5 阶段**。
新增的关卡写在 `src/lib/astro/content.ts` 的同文件，按用户给的 A/B/C/D/E 5 阶段 × 微节表填完。

# 项目位置

`/Users/raccoonbk/个人小项目/stardy/astro-quest`

# 你必须先读的 3 个文件（不要跳）

1. `src/lib/astro/content.ts` — 看懂 `q()` / `T()` / `L()` 三个 helper 的用法、现有 16 个 lesson 的命名风格、teach card 的字数节奏（每段 ≤ 80 字）、题目选项的措辞（亲切 / 门外汉友好 / emoji 加持）。
2. `src/lib/astro/types.ts` — 看懂 `Lesson` / `Question` / `Choice` / `TeachCard` / `Track` / `LessonNode` / `Localized` 的 schema。**不要扩展 schema**，只用现有类型。
3. `src/lib/themes/packs/astronomy.ts` — 看懂 `astronomyPack.tracks` 是怎么消费 `TRACKS` 导出的。你扩展完 TRACKS，astronomy pack 会自动收到。

# 内容母本（用户对话里的 `pasted-text.txt`）

> 这是用户预先做好的内容骨架，必须严格按这个填：
> - 阶段 A · 抬头看夜空（5 单元 ≈ 16 微节）：A1 时间与历法 / A2 天球与坐标 / A3 四季星空 / A4 星座与亮星 / A5 月相与行星
> - 阶段 B · 太阳系与身边天象（6 单元 ≈ 22 微节）：B1 太阳 / B2 地球 / B3 类地行星 / B4 巨行星 / B5 小天体 / B6 系外行星
> - 阶段 C · 恒星——宇宙的灯塔（6 单元 ≈ 22 微节）：C1 恒星参数 / C2 赫罗图 / C3 恒星形成 / C4 演化 / C5 恒星死亡 / C6 变星与双星
> - 阶段 D · 星系与宇宙（4 单元 ≈ 16 微节）：D1 银河系 / D2 河外星系 / D3 暗物质 / D4 宇宙学
> - 阶段 E · 前沿与交叉（4 单元 ≈ 12 微节）：E1 黑洞与引力波 / E2 高能与活动星系 / E3 天体生物学 / E4 早期宇宙
>
> 全树约 110–120 微节。**这次只做 50 关**，每阶段挑代表性微节，每关合并 1–2 个微节的内容。每个阶段标题、章节分隔已经写在现有 TRACKS 里，要保持一致。

# 内容质量标准（每关必须满足）

1. **teach card**：每关 2 张 teach card。每张 `title` ≤ 14 字，`body` 中文 ≤ 80 字 / 英文 ≤ 50 字。
2. **题目**：每关 3–4 道题。题型配比参考：
   - 判断 / 是非 30%（用 `kind: "truefalse"` + 2 个 choices）
   - 单选 40%（3–4 个 choices，含 glyph）
   - 配对 / 一步计算 / 图片识别 15–30%（用 emoji glyph 模拟图片）
3. **双语**：每条 `zh` 必须配 `en`，英文版不能是机翻味（要短、自然、像 native speaker 写的）。
4. **解释文案**（`explain`）：中文 ≤ 60 字，要回答"为什么"，不要重复题干。
5. **emoji 风格**：每个 teach card 都有 visual emoji；题目选项尽量配 glyph；不要重复用同一个 emoji。
6. **调性**：门外汉友好，避免未解释的术语（出现"赫罗图"等术语时必须在 teach card 里用一句话先解释）。
7. **不要**：不要写答案明显 / 选项相似到没法区分的题；不要写"以上都是"；不要写超纲的数学公式。

# 5 阶段 × track 的结构要求

- 5 个 track 的 `id`：`stargazing` / `solar` / `stars` / `cosmos` / `frontier`
- 5 个 track 的 `name` 中英双语：
  - stargazing → 抬头看夜空 / Look Up Tonight
  - solar → 太阳系与身边天象 / Solar System & Sky
  - stars → 恒星——宇宙的灯塔 / Stars: Beacons of the Universe
  - cosmos → 星系与宇宙 / Galaxies & the Cosmos
  - frontier → 前沿与交叉 / Frontiers & Crossings
- 每个 track 用 `chapter` 字段在 LessonNode 上加章节分隔，参考现有做法（中文 `第 1 章 · 抬头看夜空`）。
- 现有 track（`id: "journey"`）**保留不要删**——它是 fallback 链，等主题切换 UI 上线后才会被替掉。本次只在 `TRACKS` 数组里**新增** 5 个 track。

# 输出位置

只动 `src/lib/astro/content.ts`。不要新建文件，不要动其他文件。

# 验收（你交付前必须自检）

- [ ] 5 个新 track 都在 `TRACKS` 数组里
- [ ] 总 lesson 数 ≥ 50（不算原来 16 个）
- [ ] `cd astro-quest && pnpm install && pnpm lint` 0 错 0 警告
- [ ] `pnpm exec next build` 通过
- [ ] dev server 起来后访问 `/` 看到的星图至少有 50+ 节点（5 章节），每章都能滚动到
- [ ] 至少抽 3 个关卡人肉跑通：teach card 显示正常 → 答题 → 反馈 → settle → 进度更新
- [ ] 没有出现 schema 字段拼错（如 `choices` 写成 `option`）

# 严禁

- 不要扩展 types.ts
- 不要新建 lib/themes/astronomy/packs/ 子目录
- 不要写超过 4 题的 lesson
- 不要写英文版机翻（机翻感 = 不及格）
- 不要写超纲公式（如赫罗图对数公式、引力波偏振张量）
- 不要碰 i18n 词条
- 不要碰游戏机制（game-store / progress 入库 / 排行榜留给后续任务）

# 完成后

给我返回一份 Markdown 报告，包含：
1. 新增的 track 列表 + 每 track 的 lesson 数
2. 总关卡数（包含原 16 个）
3. lint / build 输出
4. 你觉得最难的 3 关是哪 3 关 / 为什么
5. 任何你无法解决、需要用户决策的问题

# 你可以用的工具

- 读 / 写 / 编辑 `src/lib/astro/content.ts`
- 跑 `pnpm install` / `pnpm lint` / `pnpm exec next build`
- 如果需要可视化验证，跑 `pnpm dev` 看一下（注意：项目路径有中文，Turbopack 偶尔 panic；遇到 build 失败就先跑 lint 和 typecheck 兜底）

# 如果遇到障碍

按以下顺序自己解决，不要来问用户：
1. 看现有 16 关的写法模仿
2. 跑 lint / build 看错误信息
3. 搜 `src/lib/astro/types.ts` 看 schema
4. 实在不行 → 把问题写到交付报告的"未解决问题"里

用户不在这个任务里实时答疑。10 周慢慢来，能写多少写多少，质量优先于数量。
```

---

## 第 3 部分 · 验收清单（agent 交付后你对照）

### 必查项
- [ ] 5 个新 track 都在（`stargazing` / `solar` / `stars` / `cosmos` / `frontier`）
- [ ] 总 lesson 数 ≥ 50
- [ ] 每关 teach card 中文字数 ≤ 80、英文 ≤ 50
- [ ] 每关 3–4 题，题型配比合理（不全是单选）
- [ ] 至少抽 5 关人肉跑通（teach → 答题 → 反馈 → settle → XP 累加）
- [ ] lint pass
- [ ] build pass
- [ ] dev server 能起（注意中文路径 Turbopack panic 是工具链 bug，不是 agent 问题）

### 加分项
- [ ] 题目答案分布合理（不是所有题都"②正确"）
- [ ] explain 文案不是简单重复题干，而是给"为什么"
- [ ] emoji 不撞色 / 不重复
- [ ] 英文版不是机翻味

### 红线（任何一项扣分 = 退回返工）
- ❌ Schema 字段拼错（`options` 应为 `choices` 等）
- ❌ 英文版是机翻 / 不通顺
- ❌ 题目选项里有"以上都对"
- ❌ 引入了未定义概念（如不解释"赫罗图"就出题）
- ❌ 改了 types.ts

---

## 第 4 部分 · 你给 agent 的同时，建议同步做的事

### 同步 BD（你亲自做）
- 在 agent 写内容的同时，你同步去小红书 / B 站搜鸟类博主
- 至少 DM 5 个，谈"观鸟主题内容顾问"合作
- 预算：¥200-500/节 × 80-100 节 = ¥2-3 万
- 目标：W2 末（T2.5）至少 1 人签约，让观鸟主题也能并行开工

### 同步开 Task B / C（你回来后我做）
- T1.2 用户进度入库（3h）
- T1.3 AI 错题讲解接 Eazo AI（3h）

---

## 第 5 部分 · 常见踩坑（提前告诉 agent 避免）

| 坑 | 怎么避 |
|---|---|
| 写完一关没注意到 `xp` 字段没填 | 写完一关就 grep 一下确保 5 个字段都在 |
| `figure` 和 `glyph` 混淆 | `figure` 是整题大图（整题只 1 个），`glyph` 是选项右侧小图标 |
| 英文版写太长被 i18n 截断 | 英文 ≤ 50 字硬约束 |
| 给"赫罗图"出题但 teach card 没解释 | 引入术语前先用 teach card 一句话铺垫 |
| 选项相似度过高 | 3 选项必须"看起来都能选"才有意义，否则改成判断题 |
| 用同色 emoji 让用户看不出区别 | 同主题 emoji 选不同色（🌕 🌖 🌗 🌘 🌑） |
| 把 explain 写成"答对了！" | explain 必须给知识增量，不能只反馈对错 |

