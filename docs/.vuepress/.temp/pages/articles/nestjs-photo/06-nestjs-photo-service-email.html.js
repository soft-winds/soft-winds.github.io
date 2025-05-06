import comp from "E:/AI/blog/docs/.vuepress/.temp/pages/articles/nestjs-photo/06-nestjs-photo-service-email.html.vue"
const data = JSON.parse("{\"path\":\"/articles/nestjs-photo/06-nestjs-photo-service-email.html\",\"title\":\"NestJS 邮件服务集成\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{},\"filePathRelative\":\"articles/nestjs-photo/06-nestjs-photo-service-email.md\",\"readingTime\":{\"minutes\":3.56,\"words\":1069},\"excerpt\":\"\\n<h2>邮件服务配置</h2>\\n<h3>1. 安装依赖</h3>\\n<div class=\\\"language-bash line-numbers-mode line-numbers-mode\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"sh\\\"><pre class=\\\"shiki nord vp-code\\\" style=\\\"background-color:#2e3440ff;color:#d8dee9ff\\\"><code><span class=\\\"line\\\"><span class=\\\"line\\\"><span style=\\\"color:#616E88\\\"># 安装邮件相关依赖</span></span></span>\\n<span class=\\\"line\\\"><span class=\\\"line\\\"><span style=\\\"color:#88C0D0\\\">npm</span><span style=\\\"color:#A3BE8C\\\"> install</span><span style=\\\"color:#A3BE8C\\\"> @nestjs-modules/mailer</span><span style=\\\"color:#A3BE8C\\\"> nodemailer</span><span style=\\\"color:#A3BE8C\\\"> ejs</span></span></span>\\n<span class=\\\"line\\\"><span class=\\\"line\\\"><span style=\\\"color:#88C0D0\\\">npm</span><span style=\\\"color:#A3BE8C\\\"> install</span><span style=\\\"color:#A3BE8C\\\"> -D</span><span style=\\\"color:#A3BE8C\\\"> @types/nodemailer</span></span></span></code></pre>\\n<div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\" style=\\\"counter-reset:line-number 0\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div><div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\" style=\\\"counter-reset:line-number 0\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\"}")
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
