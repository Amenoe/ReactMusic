# ReactMusic

仿网易云音乐 Web 端项目。

## 技术栈

- React 19 + TypeScript
- Vite 构建
- Zustand 状态管理
- Ant Design 组件库
- styled-components 样式
- Axios HTTP 请求

## 常用命令

- `pnpm dev` — 启动开发服务器（端口 8011）
- `pnpm build` — TypeScript 编译 + 生产构建
- `pnpm lint` — ESLint 检查

## 后端依赖

项目依赖本地运行的网易云音乐 Node API 服务（`localhost:3000`），通过 Vite proxy 转发 `/api` 请求。

## 代码规范

- 使用 TypeScript 严格类型
- 函数组件 + hooks
- 状态管理使用 Zustand（`src/store/`）
- 样式使用 styled-components，主题变量在 `src/assets/css/theme.ts`
- 公共组件放 `src/components/`
- 页面组件放 `src/pages/`
- API 请求放 `src/service/`
- 工具函数放 `src/utils/`

## 项目结构

```
src/
  App.tsx           -- 根组件
  main.tsx          -- 入口文件
  router/           -- 路由配置
  store/            -- Zustand 状态管理
  pages/            -- 页面组件
  components/       -- 公共组件
  service/          -- API 请求层
  assets/           -- 静态资源
  utils/            -- 工具函数
```

## 注意事项

- 确保后端服务 `localhost:3000` 运行中才能正常使用
- 音频播放依赖 HTML5 Audio API
- 歌词解析在 `src/utils/format.ts`
