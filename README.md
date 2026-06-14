# Astro Newspaper Theme

一个旧报纸风格的 Astro 博客与文档主题。它把头版、专栏、说明书和案例页排成一份可以直接改名发布的样报。

## 技术栈

- Astro
- MDX
- Astro Content Collections
- pnpm

## 命令

```bash
pnpm install
pnpm dev
pnpm check
pnpm build
pnpm preview
```

## 使用路线

1. 修改 `src/theme.config.ts`，替换站点名、副标题、导航和社交链接。
2. 替换 `src/content/docs`、`src/content/articles`、`src/content/projects` 里的样稿。
3. 需要改视觉时，再调整 `src/styles/global.css` 和 `src/components/Masthead.astro`。
4. 发布前运行 `pnpm check` 和 `pnpm build`，确认没有私有内容、无用组件和构建错误。

## 内容目录

内容主要放在 `src/content`：

- `src/content/docs`：主题说明书
- `src/content/articles`：文章、专栏、札记
- `src/content/projects`：作品、产品、案例

站点级配置放在 `src/theme.config.ts`，可修改站名、报头、导航、社交链接和时区。

默认页面包括 `/`、`/projects/`、`/articles/`、`/docs/` 和 `/about/`。评论系统、相册、后台编辑器等强定制功能不作为主题默认能力提供，使用者可以在自己的项目里扩展。
