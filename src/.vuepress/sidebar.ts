import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "vue",
      prefix: "vue/",
      link: "vue/",
      children: "structure",
    },
    "intro",
  ],
});
