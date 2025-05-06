export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/AI/blog/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/about/", { loader: () => import(/* webpackChunkName: "about_index.html" */"E:/AI/blog/docs/.vuepress/.temp/pages/about/index.html.js"), meta: {"title":"关于我"} }],
  ["/article/vue3/hooks/01.use-dict.html", { loader: () => import(/* webpackChunkName: "article_vue3_hooks_01.use-dict.html" */"E:/AI/blog/docs/.vuepress/.temp/pages/article/vue3/hooks/01.use-dict.html.js"), meta: {"title":"use-dict 介绍"} }],
  ["/article/vue3/hooks/02.use-outside-element.html", { loader: () => import(/* webpackChunkName: "article_vue3_hooks_02.use-outside-element.html" */"E:/AI/blog/docs/.vuepress/.temp/pages/article/vue3/hooks/02.use-outside-element.html.js"), meta: {"title":"use-outside-element 介绍"} }],
  ["/article/vue3/hooks/03.use-request.html", { loader: () => import(/* webpackChunkName: "article_vue3_hooks_03.use-request.html" */"E:/AI/blog/docs/.vuepress/.temp/pages/article/vue3/hooks/03.use-request.html.js"), meta: {"title":"use-request 介绍"} }],
  ["/article/vue3/hooks/04.use-window-size.html", { loader: () => import(/* webpackChunkName: "article_vue3_hooks_04.use-window-size.html" */"E:/AI/blog/docs/.vuepress/.temp/pages/article/vue3/hooks/04.use-window-size.html.js"), meta: {"title":"use-window-size 介绍"} }],
  ["/article/vue3/hooks/05.use-zindex.html", { loader: () => import(/* webpackChunkName: "article_vue3_hooks_05.use-zindex.html" */"E:/AI/blog/docs/.vuepress/.temp/pages/article/vue3/hooks/05.use-zindex.html.js"), meta: {"title":"use-zindex 介绍"} }],
  ["/article/vue3/utils/01.encrypt.html", { loader: () => import(/* webpackChunkName: "article_vue3_utils_01.encrypt.html" */"E:/AI/blog/docs/.vuepress/.temp/pages/article/vue3/utils/01.encrypt.html.js"), meta: {"title":"crypto 介绍"} }],
  ["/article/vue3/vue3-photo/01-continuew-admin-analysis.html", { loader: () => import(/* webpackChunkName: "article_vue3_vue3-photo_01-continuew-admin-analysis.html" */"E:/AI/blog/docs/.vuepress/.temp/pages/article/vue3/vue3-photo/01-continuew-admin-analysis.html.js"), meta: {"title":"Vue3 Admin 前端项目分析"} }],
  ["/article/nestjs/nestjs-photo/01-nestjs-photo-service-init.html", { loader: () => import(/* webpackChunkName: "article_nestjs_nestjs-photo_01-nestjs-photo-service-init.html" */"E:/AI/blog/docs/.vuepress/.temp/pages/article/nestjs/nestjs-photo/01-nestjs-photo-service-init.html.js"), meta: {"title":"NestJS 项目初始化"} }],
  ["/article/nestjs/nestjs-photo/02-nestjs-photo-service-auth.html", { loader: () => import(/* webpackChunkName: "article_nestjs_nestjs-photo_02-nestjs-photo-service-auth.html" */"E:/AI/blog/docs/.vuepress/.temp/pages/article/nestjs/nestjs-photo/02-nestjs-photo-service-auth.html.js"), meta: {"title":"NestJS 用户认证模块"} }],
  ["/article/nestjs/nestjs-photo/03-nestjs-photo-service-upload.html", { loader: () => import(/* webpackChunkName: "article_nestjs_nestjs-photo_03-nestjs-photo-service-upload.html" */"E:/AI/blog/docs/.vuepress/.temp/pages/article/nestjs/nestjs-photo/03-nestjs-photo-service-upload.html.js"), meta: {"title":"NestJS 文件上传模块"} }],
  ["/article/nestjs/nestjs-photo/04-nestjs-photo-service-websocket.html", { loader: () => import(/* webpackChunkName: "article_nestjs_nestjs-photo_04-nestjs-photo-service-websocket.html" */"E:/AI/blog/docs/.vuepress/.temp/pages/article/nestjs/nestjs-photo/04-nestjs-photo-service-websocket.html.js"), meta: {"title":"NestJS WebSocket 实时通信"} }],
  ["/article/nestjs/nestjs-photo/05-nestjs-photo-service-swagger.html", { loader: () => import(/* webpackChunkName: "article_nestjs_nestjs-photo_05-nestjs-photo-service-swagger.html" */"E:/AI/blog/docs/.vuepress/.temp/pages/article/nestjs/nestjs-photo/05-nestjs-photo-service-swagger.html.js"), meta: {"title":"NestJS Swagger API 文档配置"} }],
  ["/article/nestjs/nestjs-photo/06-nestjs-photo-service-email.html", { loader: () => import(/* webpackChunkName: "article_nestjs_nestjs-photo_06-nestjs-photo-service-email.html" */"E:/AI/blog/docs/.vuepress/.temp/pages/article/nestjs/nestjs-photo/06-nestjs-photo-service-email.html.js"), meta: {"title":"NestJS 邮件服务集成"} }],
  ["/article/nestjs/nestjs-photo/07-nestjs-photo-service-test.html", { loader: () => import(/* webpackChunkName: "article_nestjs_nestjs-photo_07-nestjs-photo-service-test.html" */"E:/AI/blog/docs/.vuepress/.temp/pages/article/nestjs/nestjs-photo/07-nestjs-photo-service-test.html.js"), meta: {"title":"NestJS 技术要点"} }],
  ["/article/nestjs/nestjs-photo/08-nestjs-photo-service-summary.html", { loader: () => import(/* webpackChunkName: "article_nestjs_nestjs-photo_08-nestjs-photo-service-summary.html" */"E:/AI/blog/docs/.vuepress/.temp/pages/article/nestjs/nestjs-photo/08-nestjs-photo-service-summary.html.js"), meta: {"title":"NestJS 项目总结"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"E:/AI/blog/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
