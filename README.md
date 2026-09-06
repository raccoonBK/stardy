# Stardy · 星旅 · 天文闯关

> **Duolingo 化知识科普产品的可复用模板。** 第一条线就是 Stardy · 星旅 = 天文闯关。

> 🇨🇳 全部跑在腾讯云 CloudBase：静态托管 + HTTP 云函数 + NoSQL 文档库。零境外流量 + 中国大陆直接访问。

| 子项目 | 路径 | 栈 |
|---|---|---|
| **mobile**（活跃主线） | `mobile/` | Expo SDK 57 · RN 0.86 · React 19 · Expo Router · NativeWind v4 · TS |
| **functions**（API 后端） | `functions/api/` | CloudBase HTTP 云函数 · Node 18 · `@cloudbase/node-sdk` · NoSQL |
| **legacy-nextjs**（参考快照） | `legacy-nextjs/` | 原 Next.js 16 + Postgres + Netlify 实现 |
| **docs / ima** | 业务文档与内容 brief | |

## 开发

```bash
# 1. mobile (RN web + 原生)
cd mobile
npm install
npm run web                 # 起 web dev server (http://localhost:8081)

# 2. functions 本地模拟
cd functions/api
npm install
node index.js               # 监听 9000

# 3. mobile 调本地 API
# 在 mobile/ 下另开终端：
EXPO_PUBLIC_API_BASE=http://127.0.0.1:9000/api npm run web
```

## 部署（完全在腾讯云）

```
开发者机器 ── git push ──▶ GitHub (raccoonBK/stardy)
                                │
                                └── GitHub Actions (deploy.yml)
                                        │
                                        ├──▶ CloudBase 静态托管  (mobile/dist → <envId>.tcbapp.cn)
                                        │
                                        └──▶ CloudBase HTTP 云函数 (functions/api → 函数名 api)
                                                                │
                                                                └──▶ APIGW 触发器 (path /api/*)
                                                                          ↑
                                                                          静态托管同源即可 /api 调函数
```

### GitHub Secrets 配置

| Secret | 用途 |
|---|---|
| `TENCENTCLOUD_SECRETID` | 腾讯云 API key |
| `TENCENTCLOUD_SECRETKEY` | 腾讯云 API key |
| `TCB_ENV_ID` | 腾讯云 CloudBase 环境 ID |
| `TCB_ALLOW_ORIGIN` | CORS 允许源（如 `https://xxx.tcbapp.cn`，本地 dev 用 `*`） |

### 一次性手动配置

1. 开通 [腾讯云开发 CloudBase](https://console.cloud.tencent.com/tcb)
2. 创建环境（建议**上海**区域，免费额度足够）
3. 拿到 `EnvId` → 设为 GitHub Secret `TCB_ENV_ID`
4. 访问管理 → API 密钥管理 → 新建 API key → 把 SecretId/SecretKey 也设为 Secret
5. 第一次部署后到 console → 云函数 → `api` → 函数配置 → 安全规则：
   - **触发器：APIGW 触发器** `path=/api/*`，方法 `ANY`
   - 安全规则：放行匿名访问（lobby 游戏不需要账号强绑）
   - 或者把允许的 Origin 加进 `TCB_ALLOW_ORIGIN`

### 域名

- 默认：`https://<TCB_ENV_ID>.tcbapp.cn`
- 自定义域名：CloudBase 静态托管 → 自定义域名 → CNAME + HTTPS 一键配置

## 课程数据

53 节天文课在 `mobile/lib/astro/content.ts` + `mobile/lib/astro/content-expansion.ts`。
所有题目支持中英双语 (`pickLocale`)。

Track：stargazing / solar / stars / cosmos / frontier / journey / phenomena。

## License

私密项目 · © 2026
