import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "七月的星期七",
  description: "刘晓迪_blog",
  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
