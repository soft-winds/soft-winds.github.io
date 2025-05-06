import { defineClientConfig } from "@vuepress/client";
import TypeWriter from "./components/TypeWriter.vue";
import Home from "./components/Home.vue";
import "./styles/index.css";
export default defineClientConfig({
  enhance({ app }) {
    app.component("TypeWriter", TypeWriter);
    app.component("Home", Home);
  },
  setup() {
    // 客户端配置
  },
});
