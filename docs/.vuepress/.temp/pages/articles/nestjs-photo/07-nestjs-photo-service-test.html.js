import comp from "E:/AI/blog/docs/.vuepress/.temp/pages/articles/nestjs-photo/07-nestjs-photo-service-test.html.vue"
const data = JSON.parse("{\"path\":\"/articles/nestjs-photo/07-nestjs-photo-service-test.html\",\"title\":\"NestJS 技术要点\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{},\"filePathRelative\":\"articles/nestjs-photo/07-nestjs-photo-service-test.md\",\"readingTime\":{\"minutes\":1.87,\"words\":560},\"excerpt\":\"\\n<h2>技术架构</h2>\\n<h3>1. 整体架构</h3>\\n<ul>\\n<li><strong>前端</strong>：Vue 3 + TypeScript + Element Plus</li>\\n<li><strong>后端</strong>：NestJS + TypeScript + TypeORM</li>\\n<li><strong>数据库</strong>：MySQL + Redis</li>\\n<li><strong>文件存储</strong>：本地文件系统</li>\\n<li><strong>消息队列</strong>：Bull</li>\\n<li><strong>实时通信</strong>：WebSocket</li>\\n<li><strong>容器化</strong>：Docker</li>\\n<li><strong>CI/CD</strong>：GitHub Actions</li>\\n</ul>\"}")
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
