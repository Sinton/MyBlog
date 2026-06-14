export type ThemeNavItem = {
  label: string;
  href: string;
};

export type ThemeSocialLink = {
  label: string;
  href: string;
};

export const themeConfig = {
  siteTitle: "我的晚报",
  siteSubtitle: "Astro 旧报纸主题",
  description: "一个旧报纸风格的 Astro 博客与文档主题。",
  lang: "zh-CN",
  issue: "第一卷 第一号",
  since: "2026",
  location: "Github Repo",
  frequency: "周刊",
  timezone: "Asia/Shanghai",
  navItems: [
    { label: "头版", href: "/" },
    { label: "案例", href: "/projects/" },
    { label: "专栏", href: "/articles/" },
    { label: "说明书", href: "/docs/" },
    { label: "关于", href: "/about/" },
  ] satisfies ThemeNavItem[],
  socialLinks: [
    { label: "GitHub", href: "https://github.com/" },
    { label: "X", href: "https://x.com/" },
  ] satisfies ThemeSocialLink[],
};
