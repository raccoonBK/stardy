# Stardy · 星旅 · 天文闯关

> **Duolingo 化知识科普产品的可复用模板。** 第一条线就是 Stardy · 星旅 = 天文闯关。下一条线（如果有），是观鸟 / 蘑菇 / 古典乐 / 任何可量化学习的领域。

| 子项目 | 路径 | 栈 | 部署 |
|---|---|---|---|
| **mobile**（活跃主线） | `mobile/` | Expo SDK 57 · RN 0.86 · React 19 · Expo Router · NativeWind v4 · TS | Cloudflare Pages · web build；可加 EAS 出 iOS / Android |
| **worker**（API 后端） | `worker/` | Cloudflare Workers · D1 · 原生 fetch | Cloudflare Workers · `wrangler deploy` |
| **legacy-nextjs**（参考快照） | `legacy-nextjs/` | 原 Next.js 16 + Postgres + Netlify 实现 | 已退役，留作对照 |

## 开发

```bash
# 1. mobile (RN web + 原生)
cd mobile
npm install
npm run web                 # 起 web dev server
npm run build:web           # 产出 dist/ 给 CF Pages 部署

# 2. worker (CF Workers 本地)
cd worker
npm install
npx wrangler d1 create stardy       # 把 database_id 填进 wrangler.toml
npx wrangler d1 migrations apply stardy --local   # 本地建表
npm run dev                # 起本地 API (http://127.0.0.1:8787)

# 3. mobile 调本地 API
# 在 mobile/ 里跑 web 时，api-client 默认打到 127.0.0.1:8787。
# 真实部署时用 EXPO_PUBLIC_API_BASE=https://stardy-api.<account>.workers.dev
```

## 部署流水线

```
开发者机器 ── git push ──▶ GitHub (raccoonBK/stardy)
                                │
                                ├── GitHub Actions (deploy.yml)
                                │       ├──▶ mobile/  → Cloudflare Pages
                                │       │             （PR 预览：preview-<PR#>.stardy.pages.dev；
                                │       │                main：stardy.pages.dev）
                                │       └──▶ worker/  → Cloudflare Workers
                                │                                （stardy-api.<account>.workers.dev）
                                │
                                └── 镜像（备份） → 腾讯云 CloudBase 静态托管
                                                  （境内 IP 优化；CI 自动同步）
```

### GitHub Secrets 配置

| Secret | 用途 |
|---|---|
| `CF_ACCOUNT_ID` | Cloudflare Account ID |
| `CF_API_TOKEN` | Cloudflare Pages + Workers 部署 token |
| `TENCENTCLOUD_SECRETID` | 腾讯云访问管理 API key |
| `TENCENTCLOUD_SECRETKEY` | 腾讯云访问管理 API key |
| `TCB_ENV_ID` | 腾讯云 CloudBase 环境 ID |

### Cloudflare 资源

1. `pages create stardy` 绑 GitHub（已用 GH Actions 构建，CF 端 Build settings 留空）
2. `d1 create stardy` → 把 database_id 贴进 `worker/wrangler.toml`
3. `wrangler deploy` 部署 worker
4. （可选）自定义域名 `stardy.app` 在 CF Pages → Custom domains 绑

## 课程数据

53 节天文课在 `mobile/lib/astro/content.ts` + `mobile/lib/astro/content-expansion.ts`。
所有题目支持中英双语 (`pickLocale`)。

Track：stargazing / solar / stars / cosmos / frontier / journey / phenomena。

## License

私密项目 · © 2026
