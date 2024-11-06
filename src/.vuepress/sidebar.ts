import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "项目合集",
      prefix: "项目合集/",
      link: "项目合集/",
      children: "structure",
    },
    "intro",
  ],
});
