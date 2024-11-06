import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    // {
    //   text: "如何使用",
    //   icon: "laptop-code",
    //   prefix: "demo/",
    //   link: "demo/",
    //   children: "structure",
    // },
    {
      text: "前端",
      prefix: "web/",
      link: "web/",
      children: "structure",
    },
    {
      text: "后端",
      prefix: "server/",
      link: "server/",
      children: "structure",
    },
    {
      text: "我的项目",
      prefix: "project/",
      link: "project/",
      children: "structure",
    },
    "intro",
    // "slides",
  ],
});
