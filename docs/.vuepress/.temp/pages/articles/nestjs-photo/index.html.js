import comp from "E:/AI/blog/docs/.vuepress/.temp/pages/articles/nestjs-photo/index.html.vue"
const data = JSON.parse("{\"path\":\"/articles/nestjs-photo/\",\"title\":\"Nestjs Photo\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Nestjs Photo\"},\"git\":{},\"filePathRelative\":null}")
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
