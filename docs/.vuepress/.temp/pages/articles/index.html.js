import comp from "E:/AI/blog/docs/.vuepress/.temp/pages/articles/index.html.vue"
const data = JSON.parse("{\"path\":\"/articles/\",\"title\":\"文章列表\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{},\"filePathRelative\":\"articles/README.md\",\"readingTime\":{\"minutes\":0.12,\"words\":37},\"excerpt\":\"\\n<h2>技术文章</h2>\\n<ul>\\n<li><a href=\\\"/articles/vue3-photo/01-continuew-admin-analysis.html\\\" target=\\\"_blank\\\">Vue3 后台管理最佳实践</a></li>\\n<li><a href=\\\"/articles/nestjs-photo/01-nestjs-photo-service-init.html\\\" target=\\\"_blank\\\">NestJS 后台管理搭建教程</a></li>\\n</ul>\\n\"}")
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
