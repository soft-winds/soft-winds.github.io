import comp from "E:/AI/blog/docs/.vuepress/.temp/pages/nestjs/nestjs-photo/01-nestjs-photo-service-init.html.vue"
const data = JSON.parse("{\"path\":\"/nestjs/nestjs-photo/01-nestjs-photo-service-init.html\",\"title\":\"NestJS 项目初始化\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{},\"filePathRelative\":\"nestjs/nestjs-photo/01-nestjs-photo-service-init.md\",\"readingTime\":{\"minutes\":2.1,\"words\":629},\"excerpt\":\"\\n<h2>项目介绍</h2>\\n<p><code>api-photo-serve</code> 是一个基于 NestJS 框架开发的图片服务系统，提供图片上传、管理、分享等功能。本系列文章将详细介绍项目的搭建过程。</p>\\n<h2>环境准备</h2>\\n<h3>1. 安装 Node.js</h3>\\n<ul>\\n<li>推荐使用 Node.js 18.x 或更高版本</li>\\n<li>使用 nvm 管理 Node.js 版本</li>\\n</ul>\\n<h3>2. 安装 MySQL</h3>\\n<ul>\\n<li>安装 MySQL 8.0 或更高版本</li>\\n<li>创建数据库：<code>photo_service</code></li>\\n</ul>\"}")
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
