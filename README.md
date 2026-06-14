# Astro Newspaper Theme

一个旧报纸风格的 Astro 博客与文档主题。

这个仓库有两种身份：

- 直接克隆后运行，是一份可以预览的主题样报。
- 被其他 Astro 项目依赖时，是一套可复用的布局、组件、样式和内容 schema。

## Run The Demo

```bash
pnpm install
pnpm dev
pnpm check
pnpm build
pnpm preview
```

默认演示站包含：

- `/`：主题头版
- `/projects/`：案例
- `/articles/`：专栏
- `/docs/`：说明书
- `/about/`：关于

演示内容放在 `src/content`，用于展示主题效果。使用者不需要继承这些内容。

## Use In Another Blog

如果你的目录是：

```text
Sinton/
├─MyBlog/
└─sinton.github.io/
```

可以在 `sinton.github.io/package.json` 里本地依赖主题：

```json
{
  "dependencies": {
    "astro-newspaper-theme": "link:../MyBlog"
  }
}
```

页面里这样使用：

```astro
---
import BaseLayout from "astro-newspaper-theme/layouts/BaseLayout.astro";
import Masthead from "astro-newspaper-theme/components/Masthead.astro";
import { themeConfig } from "../theme.config";
import "astro-newspaper-theme/styles/global.css";
---

<BaseLayout config={themeConfig}>
  <Masthead config={themeConfig} />
</BaseLayout>
```

稳定版本可以使用 GitHub tag：

```json
{
  "dependencies": {
    "astro-newspaper-theme": "github:Sinton/MyBlog#v0.1.0"
  }
}
```

## Package Exports

主题包导出这些边界：

- `astro-newspaper-theme/components/*`
- `astro-newspaper-theme/layouts/*`
- `astro-newspaper-theme/styles/*`
- `astro-newspaper-theme/lib/*`

个人博客应该自己维护真实内容和自定义功能：

- `src/content/articles`
- `src/content/projects`
- `src/pages`
- `src/components`
- `src/theme.config.ts`

## Theme Config

主题组件通过 `config` 接收站点配置。可以从主题里复用类型和默认配置：

```ts
import {
  defaultThemeConfig,
  type NewspaperThemeConfig,
} from "astro-newspaper-theme/lib/theme-config";

export const themeConfig: NewspaperThemeConfig = {
  ...defaultThemeConfig,
  siteTitle: "我的晚报",
  siteSubtitle: "个人博客",
  description: "我的文章、项目和记录。",
  socialLinks: [
    { label: "GitHub", href: "https://github.com/Sinton" },
  ],
};
```

## Content Schema

如果个人博客想复用主题默认内容结构，可以在 `src/content.config.ts` 中引入：

```ts
import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import {
  articlesSchema,
  docsSchema,
  projectsSchema,
} from "astro-newspaper-theme/lib/content-schema";

const articles = defineCollection({
  loader: glob({ base: "./src/content/articles", pattern: "**/*.{md,mdx}" }),
  schema: articlesSchema,
});
```

## Boundary

`MyBlog` 负责主题能力：布局、组件、样式、默认 schema 和演示说明。

`sinton.github.io` 负责个人博客：真实文章、真实项目、私有页面、自定义组件，以及旅行地图、相册、评论等个性化功能。
