import comp from "E:/AI/blog/docs/.vuepress/.temp/pages/about/index.html.vue"
const data = JSON.parse("{\"path\":\"/about/\",\"title\":\"关于我\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{\"updatedTime\":1746517506000,\"contributors\":[{\"name\":\"刘晓迪\",\"username\":\"\",\"email\":\"xiaodi195815052@163.com\",\"commits\":1}],\"changelog\":[{\"hash\":\"387060f1c8e74c2d52edb7059ed2e0e4928f3fde\",\"time\":1746517506000,\"email\":\"xiaodi195815052@163.com\",\"author\":\"刘晓迪\",\"message\":\"版本更新v2.0\"}]},\"filePathRelative\":\"about/README.md\",\"readingTime\":{\"minutes\":0.71,\"words\":213},\"excerpt\":\"\\n<h2>个人简介</h2>\\n<p>你好，我是一名专注于前端和 Node.js 全栈开发的工程师。主要关注 Vue 生态系统和 React 技术栈，同时也擅长使用 Node.js 和 NestJS 进行后端开发。</p>\\n<h2>技能树</h2>\\n<h3>前端开发</h3>\\n<ul>\\n<li>Vue2/Vue3：熟练使用 Vue 全家桶，包括 Vue Router、Vuex/Pinia</li>\\n<li>TypeScript：深入理解 TS 类型系统，能够编写类型安全的代码</li>\\n<li>React：熟悉 React Hooks 和函数式组件开发</li>\\n</ul>\\n<h3>后端开发</h3>\"}")
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
