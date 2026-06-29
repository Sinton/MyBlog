import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://example.com", // 替换为你的真实博客域名，用于生成 Canonical URL 和站点地图
  integrations: [mdx()],
});
