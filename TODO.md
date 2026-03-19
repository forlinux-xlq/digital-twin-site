# Task: 开发徐龙强个人主页

## Plan
- [x] 1. 环境准备与全局样式配置
  - [x] 扫描项目结构
  - [x] 配置 `tailwind.config.js` 语义化颜色
  - [x] 更新 `src/index.css` 定义设计变量
- [x] 2. 聊天机器人数据与逻辑实现
  - [x] 创建 `src/data/chatData.ts` 预设问答逻辑
- [x] 3. 页面组件开发
  - [x] 创建 `src/components/Hero.tsx` (顶部 Hero 区)
  - [x] 创建 `src/components/InfoSection.tsx` (个人信息展示区)
  - [x] 创建 `src/components/ChatSection.tsx` (数字分身聊天区)
- [x] 4. 页面组装与路由
  - [x] 创建 `src/pages/Home.tsx`
  - [x] 更新 `src/routes.tsx`
  - [x] 更新 `src/App.tsx` (如果需要)
- [x] 5. 最终验证
  - [x] 查找并替换头像图片
  - [x] 运行 `npm run lint` 并修复

## Notes
- 纯前端实现，无需 Supabase。
- 主色调：深蓝色 (hsl(220, 80%, 15%))。
- 聊天机器人需支持精确匹配和模糊匹配。
