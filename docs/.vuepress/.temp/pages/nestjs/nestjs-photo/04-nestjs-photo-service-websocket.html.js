import comp from "E:/AI/blog/docs/.vuepress/.temp/pages/nestjs/nestjs-photo/04-nestjs-photo-service-websocket.html.vue"
const data = JSON.parse("{\"path\":\"/nestjs/nestjs-photo/04-nestjs-photo-service-websocket.html\",\"title\":\"NestJS WebSocket 实时通信\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{},\"filePathRelative\":\"nestjs/nestjs-photo/04-nestjs-photo-service-websocket.md\",\"readingTime\":{\"minutes\":2.27,\"words\":681},\"excerpt\":\"\\n<h2>WebSocket 配置</h2>\\n<h3>1. 安装依赖</h3>\\n<div class=\\\"language-bash line-numbers-mode line-numbers-mode\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"sh\\\"><pre class=\\\"shiki nord vp-code\\\" style=\\\"background-color:#2e3440ff;color:#d8dee9ff\\\"><code><span class=\\\"line\\\"><span class=\\\"line\\\"><span style=\\\"color:#616E88\\\"># 安装 WebSocket 相关依赖</span></span></span>\\n<span class=\\\"line\\\"><span class=\\\"line\\\"><span style=\\\"color:#88C0D0\\\">npm</span><span style=\\\"color:#A3BE8C\\\"> install</span><span style=\\\"color:#A3BE8C\\\"> @nestjs/websockets</span><span style=\\\"color:#A3BE8C\\\"> @nestjs/platform-socket.io</span></span></span>\\n<span class=\\\"line\\\"><span class=\\\"line\\\"><span style=\\\"color:#88C0D0\\\">npm</span><span style=\\\"color:#A3BE8C\\\"> install</span><span style=\\\"color:#A3BE8C\\\"> -D</span><span style=\\\"color:#A3BE8C\\\"> @types/socket.io</span></span></span></code></pre>\\n<div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\" style=\\\"counter-reset:line-number 0\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div><div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\" style=\\\"counter-reset:line-number 0\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
