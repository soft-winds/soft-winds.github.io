import comp from "E:/AI/blog/docs/.vuepress/.temp/pages/article/vue3/vue3-photo/01-continuew-admin-analysis.html.vue"
const data = JSON.parse("{\"path\":\"/article/vue3/vue3-photo/01-continuew-admin-analysis.html\",\"title\":\"Vue3 Admin 前端项目分析\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{\"updatedTime\":1746517506000,\"contributors\":[{\"name\":\"刘晓迪\",\"username\":\"\",\"email\":\"xiaodi195815052@163.com\",\"commits\":1}],\"changelog\":[{\"hash\":\"387060f1c8e74c2d52edb7059ed2e0e4928f3fde\",\"time\":1746517506000,\"email\":\"xiaodi195815052@163.com\",\"author\":\"刘晓迪\",\"message\":\"版本更新v2.0\"}]},\"filePathRelative\":\"article/vue3/vue3-photo/01-continuew-admin-analysis.md\",\"readingTime\":{\"minutes\":5,\"words\":1500},\"excerpt\":\"\\n<h1>Vue3 Admin 前端项目分析</h1>\\n<h2>项目概述</h2>\\n<p>Vue3 Admin 是一个基于 Vue 3 和 TypeScript 的现代化图片服务管理后台，提供了完整的图片管理、用户管理和系统配置功能。项目采用最新的前端技术栈，注重代码质量和开发体验。</p>\\n<h2>技术栈</h2>\\n<h3>1. 核心框架</h3>\\n<ul>\\n<li><strong>Vue 3</strong>：使用 Composition API 和 <code>&lt;script setup&gt;</code> 语法</li>\\n<li><strong>TypeScript</strong>：提供类型安全和开发体验</li>\\n<li><strong>Vite</strong>：快速的开发服务器和构建工具</li>\\n<li><strong>Pinia</strong>：状态管理解决方案</li>\\n<li><strong>Vue Router</strong>：路由管理</li>\\n</ul>\"}")
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
