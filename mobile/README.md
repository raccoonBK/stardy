# Stardy · 星旅

React Native + Expo 项目，**一份代码同时产 Web / iOS / Android**。

## 本地开发

```bash
# 1. 装依赖
npm install

# 2. 起 web（默认浏览器打开）
npm run web

# 3. 起原生（需要 Expo Go 或真机扫码）
npm start

# 4. 类型检查
npm run typecheck

# 5. 构建 web 静态产物（Cloudflare 部署用）
npm run build:web

# 6. 本地预览 Cloudflare Pages 行为
npm run preview:web   # = build + wrangler pages dev
```

## 部署流水线

```
本地  ─── push ──▶  GitHub  ─── CI ──▶  Cloudflare Pages（境外主站）
                            │
                            └─── CI ──▶ 腾讯云 CloudBase 静态托管（境内镜像）
```

### Cloudflare Pages（主站）

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/) → **Workers & Pages** → Create application → **Pages** → Connect to Git
2. 选择本仓库 → Build settings 留空（GitHub Actions 已经处理构建）
3. 设置环境变量 / secrets：
   - `CF_ACCOUNT_ID`（Account 主页右上角）
   - `CF_API_TOKEN`（My Profile → API Tokens → Edit Cloudflare Pages → template）
4. 每次 PR 都会在 `https://preview-<PR>.stardy.pages.dev` 自动起预览
5. main 分支合并 → 部署到 `https://stardy.pages.dev`（CNAME 后续接 `stardy.app`）

### 腾讯云 CloudBase（境内镜像）

1. 开通 [云开发 CloudBase](https://console.cloud.tencent.com/tcb) → 创建环境
2. 静态托管 → 上传站点文件夹 → 拿到默认域名
3. GitHub Secrets：
   - `TENCENTCLOUD_SECRETID` / `TENCENTCLOUD_SECRETKEY`（访问管理 → API 密钥管理）
   - `TCB_ENV_ID`（CloudBase 环境 ID）
4. CI 自动 `tcb hosting deploy dist`，每天跟随 main 同步

## 目录约定

```
app/                 # Expo Router file-based routing
  index.tsx          # /          = 首页 / 星图
  lesson/[id].tsx    # /lesson/<id>
  leaderboard.tsx    # /leaderboard
  account.tsx        # /account
components/          # 共享 UI
lib/                 # 工具 / 数据层
assets/              # 图标 / 启动图

.wrangler.toml       # Cloudflare Pages 配置
.github/workflows/   # CI/CD
```

## 后续要做（用户后续排期）

- [ ] 接 Better Auth + Cloudflare D1（替代目前 astro-quest 的 stub auth）
- [ ] 用户进度入库（lesson 完成 → D1）
- [ ] 群组功能（groups / group_members 表）
- [ ] 排行榜接真数据
- [ ] 真·关卡内容（替换目前的 5-track 演示）
- [ ] 按用户上传的设计稿调整 LessonRunner 排布
- [ ] 删 astro-quest/ 里的 EAZO 残留
