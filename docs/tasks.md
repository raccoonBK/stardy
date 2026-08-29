# Stardy · 6 周执行任务书

> 写于 2026-08-25 · 节奏：**10 周观鸟上线（用户决策）**
> 用户三条决策：**先免费 · 无 B2B · 天文主线先做好 + 观鸟同时开工**
> 这份任务书可被拆给 2-3 个 agent / 兼职并行跑，进度统一通过此文档追踪。

---

## 已完成 ✅

### F0. 主题抽象骨架（今天）
- ✅ `src/lib/themes/types.ts` — `ThemePack` / `ThemePalette` / `ThemeMascot` 类型
- ✅ `src/lib/themes/packs/astronomy.ts` — 把现有 `content.ts` 数据迁移为 astronomy 主题包
- ✅ `src/lib/themes/registry.ts` — `listThemePacks` / `findThemePack` / `DEFAULT_THEME_ID`
- ✅ `src/lib/themes/index.ts` — 桶文件，统一导出
- ✅ `src/stores/theme-pack-store.tsx` — `ThemePackProvider` + `useThemePack` hook（localStorage 持久化当前主题）
- ✅ `src/app/layout.tsx` — 接入 `ThemePackProvider`（嵌套在 `ThemeProvider` 内）
- ✅ lint 0 错 / build 通过 / typecheck 仅剩原项目 test 文件的 happy-dom 问题

> **架构现状**：现在已有"主题"作为一等公民的存储、注册、状态、上下文层。现有 UI 仍然读 `lib/astro/content`，行为完全等价于 astronomy 主题。观鸟主题后续只要新建 `packs/birds.ts` + 注册到 `registry.ts` 即可，**不需要再动 UI 通用代码**。

---

## 第 1 周（W36 · 2026-08-25 → 2026-08-31）

### T1.1 ⭐ 把内容从 16 关扩到 50 关 / 5 阶段
- **owner**: 内容（我）+ 工程（小改）
- **依赖**: 无
- **路径**: `src/lib/astro/content.ts`
- **动作**: 按 `pasted-text` 里的 A/B/C/D/E 5 阶段 × 微节表补完；改 `trackId` 为 `stargazing / solar / stars / cosmos / frontier`；顶部加主题切换 Tab（先做 UI 不做后端）
- **验收**: 5 个 track 共 50+ 关，星图分 5 章可滑动
- **风险**: 内容文案量大；分 2-3 批写

### T1.2 ⭐ 用户进度入库 PostgreSQL
- **owner**: 工程
- **依赖**: 已有 `users` 表
- **路径**: 新增 `src/lib/db/schema/progress.ts`，`src/lib/db/queries/progress.ts`
- **动作**: Drizzle 表 `user_progress(user_id, theme_id, lesson_id, stars, best_at, attempts)`；改 `game-store` 的 `completeLesson` 把进度 upsert 到 DB（用 `requireAuth` 拿 userId）；本地缓存 + 服务端同步
- **验收**: 完成一关后刷新页面 / 换设备进度都在
- **风险**: 离线场景要先乐观更新再回写

### T1.3 ⭐ 错题讲解接 Eazo AI
- **owner**: 工程
- **依赖**: 已接 `appAi.chat`
- **路径**: `src/components/astro/feedback-sheet.tsx`
- **动作**: 在 explain 文案下加「让 AI 老师再讲一遍」按钮，调 `appAi.chat({ model: "deepseek.v3.1", stream: true })`，限 200 字；失败 toast 已写好（`appAIRequest`）
- **验收**: 答错后点按钮看到 2 段 50 字科普讲解
- **风险**: 流式输出需要处理 AbortController 防重复点击

### T1.4 主题包数据写入 `content.ts`（架构演示）
- **owner**: 工程（小活）
- **依赖**: F0 已完成
- **动作**: 验证 astronomy pack 数据完整性；为未来观鸟 pack 预留位置；给 `lib/themes/registry.ts` 加一个调试日志（在 dev 环境）打印当前 themeId + 包名
- **验收**: dev server 启动后 console 出现 `theme-pack: astronomy`

---

## 第 2 周（W37 · 2026-09-01 → 2026-09-07）

### T2.1 ⭐ 主题切换器 UI（顶部小图标）
- **owner**: 工程
- **依赖**: F0
- **路径**: `src/components/shell/theme-switcher.tsx`（新），加进 `app-shell.tsx` 顶部
- **动作**: 圆点小图标 + 当前主题 emoji；点击弹底部 sheet，列出所有 `all` 主题；切完 0.5s 切色动画
- **验收**: 现在 astronomy 一个也照常工作，未来加 birds 后能切换
- **风险**: 切换时不要破坏 lesson 进度读取

### T2.2 主题色 / i18n 词条主题包化
- **owner**: 工程
- **依赖**: F0
- **路径**: `src/app/globals.css`，`src/i18n/locales/{zh-CN,en-US}.json`
- **动作**: 把 `--primary / --accent / --cream / --night-*` 从全局 `:root` 移到 `[data-theme-palette="astronomy"]` 属性选择器；token 通过 `<ThemePackProvider>` 注入到 `<html data-theme-palette={pack.id}>`；i18n 主题相关词条放进 `themes/astronomy/i18n/`
- **验收**: 切换主题后主色立刻变；目前只有 astronomy，行为不变
- **风险**: 颜色迁移别动 `--font-*` 这种全局 token

### T2.3 通用模块 vs 主题模块插槽分离
- **owner**: 工程
- **依赖**: T2.2
- **动作**: 把"今晚看什么"占位从产品代码中拆出，新建 `src/lib/themes/runtime/astronomy/tonight.tsx`（当前是空 placeholder），HomeHero / DailyExtra / LessonFinish 三个 slot 改成从 `pack.features` 决定渲染
- **验收**: 现有 UI 视觉零变化；未来 `features.tonight = true` 时显示「今晚看什么」面板

### T2.4 真排行榜 + 周赛季重置
- **owner**: 工程
- **依赖**: T1.2
- **路径**: `src/lib/db/schema/seasons.ts`，`src/app/leaderboard/page.tsx`
- **动作**: 表 `season_xp(user_id, theme_id, season_id, xp, week_no)`；按周聚合；排行榜按主题分组 + 全局榜
- **验收**: 完成课程后排行变化

### T2.5 观鸟主题 KOL 顾问签约（并行启动）
- **owner**: 你
- **依赖**: 无
- **动作**: 小红书 / B 站搜 3-5 个鸟类博主（粉丝 5k-50k 区间），DM 谈"主题包内容顾问"合作；预算 ¥200-500/节 × 80-100 节 ≈ ¥2-3 万
- **验收**: 至少 1 人签约，启动观鸟内容生产

---

## 第 3-4 周（W38-W39 · 2026-09-08 → 2026-09-21）

### T3.1 FSRS 间隔重复算法
- **owner**: 工程
- **依赖**: T1.2
- **动作**: 引入 `fsrs` npm 包；每日一题从固定 1 题改成按 FSRS 选最该复习的 1 题；DB 加 `card_state(user_id, theme_id, lesson_id, stability, difficulty, due_at)`
- **验收**: 学完一关后第二天看到自己刚答错的题重新出现

### T3.2 知识图谱：节点可跳 / 支线可解锁
- **owner**: 工程
- **依赖**: T1.1
- **动作**: Lesson 加 `requires: string[]`；StarPath 节点状态根据 `requires` 重算；新增「跳级测试」（按你 pasted-text 里设计的 N×8 题 / 限时 40 秒 / 通过线 75%）
- **验收**: 学完 A 想跳到 D，可发起跳级测试

### T3.3 通知推送接 Eazo Notifications
- **owner**: 工程
- **依赖**: 已有 daily-digest cron 骨架
- **动作**: 写"今晚看什么" / "连胜 24h 后断" / "你 7 天没学" 三条模板；时区按 `device.tz`；Cron `0 17 * * *` 触发
- **验收**: 注册后第二天收到推送

### T3.4 ⭐ 观鸟主题包内容生产启动（并行）
- **owner**: 内容（KOL 顾问 + 你）
- **依赖**: T2.5 签约
- **路径**: `src/lib/themes/packs/birds.ts`（新）
- **动作**: 80-100 关分 4 阶段（鸟的身体 / 城市常见 / 林鸟 / 进阶）；每关 2 teach card + 3 题；先用 emoji 占位图，后续替换
- **验收**: 观鸟 pack 注册到 registry 后不报错；UI 切到观鸟看到完整星图

### T3.5 主题切换器接入观鸟（验证模板）
- **owner**: 工程
- **依赖**: T2.1 + T3.4
- **动作**: birds pack 接入 palette（森林绿 + 暖橙）；i18n 词条翻译
- **验收**: 在主题切换器切到「林间」后整屏配色变绿，emoji 切鸟

---

## 第 5 周（W40 · 2026-09-22 → 2026-09-28）

### T4.1 「今天哪里有鸟」主题模块（观鸟专属）
- **owner**: 工程
- **依赖**: T3.5
- **路径**: `src/lib/themes/runtime/birds/today-sightings.tsx`
- **动作**: 接 eBird API（free tier，地区热鸟 + 公园推荐）；位置权限申请（Eazo `device.location`）
- **验收**: 打开观鸟主题首页看到附近常见鸟种列表
- **风险**: eBird API 海外有 free tier，国内可能需要 VPN 或对接中国观鸟记录中心

### T4.2 「今晚看什么」主题模块（天文专属）
- **owner**: 工程
- **依赖**: T2.3
- **路径**: `src/lib/themes/runtime/astronomy/tonight.tsx`
- **动作**: 用 `astronomy-engine`（离线计算）+ USNO 数据；显示今晚月相 / 行星可见性 / 流星雨窗口
- **验收**: 打开天文主题首页看到今晚月相 + 可见行星

### T4.3 Merlin AI 鸟种识别接入
- **owner**: 工程（外包或低优）
- **依赖**: T3.5
- **动作**: Merlin Bird ID API（免费），用户拍照上传 → AI 识别 → 写入"我的鸟种记录"
- **验收**: 上传一张鸟照，5 秒内出识别结果 + 置信度

### T4.4 错题本 UI（错题讲解的副产品）
- **owner**: 工程
- **依赖**: T1.3
- **动作**: 答错的题进入错题本；可手动标记"已掌握"；可重新挑战
- **验收**: 账户页加一个"错题本"入口

---

## 第 6 周（W41 · 2026-09-29 → 2026-10-05）

### T5.1 主题包数据进 DB（从 TS 模块迁移）
- **owner**: 工程
- **依赖**: T3.4
- **动作**: themes / tracks / lessons / questions 表结构；migration 脚本把现有 astronomy + birds 数据灌进去；`useThemePack` 改成从 API 取数据
- **验收**: 不再 import `packs/*.ts`，改成 `useEffect` 拉 `/api/themes/[id]`
- **风险**: 性能：内容数据量大，需要客户端缓存

### T5.2 「今晚看什么」主题模块全功能
- **owner**: 工程
- **依赖**: T4.2
- **动作**: 加 ISS 过境 / 合月 / 月食倒计时；订阅推送

### T5.3 多语言扩展（es/ja/ko）— 优先级低
- **owner**: 工程
- **动作**: 加 3 语言词条；i18next 已经支持

### T5.4 观鸟主题上线（**M4 硬指标**）
- **owner**: 全员
- **依赖**: T3.4 / T3.5 / T4.1
- **验收**: 模板复用成功 —— 观鸟主题从立项到上线 ≤ 10 周
- **风险**: 如果做不到，回头改架构而不是改内容

---

## 第 7-10 周（W42-W45 · 2026-10-06 → 2026-11-02）— 收尾与打磨

### T6.1 视频 + 互动小动画
### T6.2 A/B 测试框架
### T6.3 反作弊（排行榜）
### T6.4 数据埋点（posthog 或自建）
### T6.5 SEO 长尾页面（每微节一个 SSR 页面）
### T6.6 PWA 离线模式
### T6.7 可访问性（屏幕阅读器 / 色弱）
### T6.8 青少年模式开关

---

## 关键里程碑（验收硬指标）

| 时间 | 里程碑 | 验证 |
|---|---|---|
| W1 末 | 50 关 + 进度入库 + AI 错题讲解 | lint pass / 端到端手测 |
| W2 末 | 主题切换器 + 主题色抽象 + 插槽分离 | dev 切主题 demo |
| W4 末 | 观鸟 pack 数据 50+ 关 + 主题色切到森林绿 | registry 注册不报错 |
| W6 末 | 「今晚看什么」+「今天哪里有鸟」两个模块上线 | 真数据展示 |
| W10 末 | 观鸟主题完整上线 | **模板复用硬指标达成** |

---

## 角色与节奏（建议）

- **你**: 战略 + 商务 + 内容把关 + KOL BD
- **AI agent A（我）**: 工程实现 + 主题抽象 + 内容编写辅助
- **AI agent B（待 spawn）**: 50 关内容批量生产 + i18n 翻译 + AI 出题
- **鸟类学顾问（待招）**: 观鸟主题内容审校
- **天文顾问（你已具备）**: 天文主题内容把关

> 1 人 + 2 agent + 1 顾问 = 10 周内观鸟上线可行。

---

## 退出标准（如果中途发现路线错了）

- W2 末若主题切换器 demo 跑不通 → 改 theme abstraction 的粒度（不要硬抽象到 token）
- W4 末若观鸟 pack 数据不足 30 关 → 暂停第二个主题，先把天文主线磨深
- W6 末若天文 7 日留存 < 15% → 暂停所有新功能，先做留存专项
- W10 末若观鸟上线成本 > 4 人月 → 模板抽象不到位，砍掉 B2B 之外的"第二个主题"叙事，回到单产品深耕

---

## 文档地图

| 文档 | 用途 |
|---|---|
| `astro-quest-bp.md` | 战略、用户、市场、商业模式、路线图 |
| `astro-quest-template-architecture.md` | 模板架构设计：怎么从天文复制到观鸟 |
| `astro-quest-brainstorm.md` | 行动清单脑暴版（按 ROI 排序） |
| `tasks.md`（本文件） | 6 周可执行任务书，可被 agent 拆分执行 |
