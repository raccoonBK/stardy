# Stardy · 星旅（mobile）

Expo + React Native + Expo Router 移动/Web 一体项目。

## 开发

```bash
npm install
npm run web              # 起 web dev (http://localhost:8081)
npm run build:web        # 产出 dist/ 给 CloudBase 静态托管
npm run typecheck
```

## 调后端

默认 mobile 同源调 `/api/*`（假设 CloudBase 静态托管 + APIGW 触发器把 `/api/*`
路由到 `api` 云函数）。本地 dev 可显式覆盖：

```bash
EXPO_PUBLIC_API_BASE=http://127.0.0.1:9000/api npm run web
```

## 部署

走 GitHub Actions → 腾讯云 CloudBase 静态托管。详见仓库根 `README.md`。
