import comp from "E:/AI/blog/docs/.vuepress/.temp/pages/article/nestjs/nestjs-photo/08-nestjs-photo-service-summary.html.vue"
const data = JSON.parse("{\"path\":\"/article/nestjs/nestjs-photo/08-nestjs-photo-service-summary.html\",\"title\":\"NestJS 项目总结\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{},\"filePathRelative\":\"article/nestjs/nestjs-photo/08-nestjs-photo-service-summary.md\",\"readingTime\":{\"minutes\":3.62,\"words\":1085},\"excerpt\":\"\\n<h2>项目概述</h2>\\n<p><code>api-photo-serve</code> 是一个基于 NestJS 框架开发的图片服务系统，提供了完整的图片上传、管理、分享等功能。项目采用前后端分离架构，后端使用 NestJS + TypeScript，前端使用 Vue 3 + TypeScript。</p>\\n<h2>技术栈</h2>\\n<h3>1. 后端技术栈</h3>\\n<ul>\\n<li><strong>核心框架</strong>：NestJS</li>\\n<li><strong>编程语言</strong>：TypeScript</li>\\n<li><strong>数据库</strong>：MySQL</li>\\n<li><strong>ORM</strong>：TypeORM</li>\\n<li><strong>认证</strong>：JWT + Passport</li>\\n<li><strong>文件上传</strong>：Multer</li>\\n<li><strong>实时通信</strong>：WebSocket</li>\\n<li><strong>邮件服务</strong>：Nodemailer</li>\\n<li><strong>任务队列</strong>：Bull</li>\\n<li><strong>API 文档</strong>：Swagger</li>\\n<li><strong>测试框架</strong>：Jest</li>\\n<li><strong>容器化</strong>：Docker</li>\\n</ul>\"}")
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
