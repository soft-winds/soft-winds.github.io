import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";
import { viteBundler } from "@vuepress/bundler-vite";
import { backToTopPlugin } from "@vuepress/plugin-back-to-top";
import { nprogressPlugin } from "@vuepress/plugin-nprogress";
import { shikiPlugin } from "@vuepress/plugin-shiki";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";
import { readingTimePlugin } from "@vuepress/plugin-reading-time";
import { blogPlugin } from "@vuepress/plugin-blog";
import { commentPlugin } from "@vuepress/plugin-comment";
import { markdownImagePlugin } from "@vuepress/plugin-markdown-image";
import { markdownTabPlugin } from "@vuepress/plugin-markdown-tab";
import { tocPlugin } from "@vuepress/plugin-toc";
import { activeHeaderLinksPlugin } from "@vuepress/plugin-active-header-links";

export default defineUserConfig({
  lang: "zh-CN",
  title: "X.D’Blog",
  description: "使用 VuePress 2.x 搭建的个人博客",
  bundler: viteBundler(),
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  theme: defaultTheme({
    navbar: [
      { text: "首页", link: "/" },
      {
        text: "NestJS",
        link: "/article/nestjs/nestjs-photo/01-nestjs-photo-service-init",
      },
      {
        text: "Vue3",
        link: "/article/vue3/vue3-photo/01-continuew-admin-analysis",
      },
      { text: "关于", link: "/about/" },
    ],
    sidebarDepth: 1,
    lastUpdated: true,
    sidebar: {
      "/article/nestjs/": [
        {
          prefix: "nestjs-photo",
          text: "NestJS",
          children: [
            "01-nestjs-photo-service-init",
            "02-nestjs-photo-service-auth",
            "03-nestjs-photo-service-upload",
            "04-nestjs-photo-service-websocket",
            "05-nestjs-photo-service-swagger",
            "06-nestjs-photo-service-email",
            "07-nestjs-photo-service-test",
            "08-nestjs-photo-service-summary",
          ],
        },
      ],
      "/article/vue3/": [
        {
          prefix: "vue3-photo",
          text: "Vue3-photo",
          children: ["01-continuew-admin-analysis"],
        },
        {
          prefix: "hooks",
          text: "Hooks",
          children: [
            "01.use-dict",
            "02.use-outside-element",
            "03.use-request",
            "04.use-window-size",
            "05.use-zindex",
          ],
        },
        {
          prefix: "utils",
          text: "Utils",
          children: ["01.encrypt"],
        },
      ],
    },
  }),
  extendsPage: (page) => {
    // 在 routeMeta 中设置目录信息
    page.routeMeta = {
      // 目录标题
      title: page.title,
      // ... 其他信息
    };
  },
  plugins: [
    backToTopPlugin(),
    nprogressPlugin(),
    shikiPlugin(),
    docsearchPlugin({
      appId: "YOUR_ALGOLIA_APP_ID",
      apiKey: "YOUR_ALGOLIA_API_KEY",
      indexName: "YOUR_INDEX_NAME",
    }),
    readingTimePlugin(),
    blogPlugin({}),
    commentPlugin({
      provider: "Artalk",
    }),
    markdownImagePlugin({
      // 启用 figure
      figure: true,
      // 启用图片懒加载
      lazyload: true,
      // 启用图片标记
      mark: true,
      // 启用图片大小
      size: true,
    }),
    markdownTabPlugin({
      // 启用代码选项卡
      codeTabs: true,
      // 启用选项卡
      tabs: true,
    }),
    tocPlugin({}),
    activeHeaderLinksPlugin({}),
  ],
});
