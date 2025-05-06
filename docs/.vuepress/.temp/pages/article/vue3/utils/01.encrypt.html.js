import comp from "E:/AI/blog/docs/.vuepress/.temp/pages/article/vue3/utils/01.encrypt.html.vue"
const data = JSON.parse("{\"path\":\"/article/vue3/utils/01.encrypt.html\",\"title\":\"crypto 介绍\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{},\"filePathRelative\":\"article/vue3/utils/01.encrypt.md\",\"readingTime\":{\"minutes\":0.36,\"words\":107},\"excerpt\":\"\\n<p><code>crypto</code> 加密解密</p>\\n<h2>安装</h2>\\n<div class=\\\"language-bash line-numbers-mode line-numbers-mode\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"sh\\\"><pre class=\\\"shiki nord vp-code\\\" style=\\\"background-color:#2e3440ff;color:#d8dee9ff\\\"><code><span class=\\\"line\\\"><span class=\\\"line\\\"><span style=\\\"color:#88C0D0\\\">npm</span><span style=\\\"color:#A3BE8C\\\"> install</span><span style=\\\"color:#A3BE8C\\\"> crypto-js</span></span></span></code></pre>\\n<div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\" style=\\\"counter-reset:line-number 0\\\"></div><div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\" style=\\\"counter-reset:line-number 0\\\"><div class=\\\"line-number\\\"></div></div></div>\"}")
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
