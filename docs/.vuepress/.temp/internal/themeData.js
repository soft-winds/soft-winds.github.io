export const themeData = JSON.parse("{\"navbar\":[{\"text\":\"首页\",\"link\":\"/\"},{\"text\":\"NestJS\",\"link\":\"/article/nestjs/nestjs-photo/01-nestjs-photo-service-init\"},{\"text\":\"Vue3\",\"link\":\"/article/vue3/vue3-photo/01-continuew-admin-analysis\"},{\"text\":\"关于\",\"link\":\"/about/\"}],\"sidebarDepth\":1,\"lastUpdated\":true,\"sidebar\":{\"/article/nestjs/\":[{\"prefix\":\"nestjs-photo\",\"text\":\"NestJS\",\"children\":[\"01-nestjs-photo-service-init\",\"02-nestjs-photo-service-auth\",\"03-nestjs-photo-service-upload\",\"04-nestjs-photo-service-websocket\",\"05-nestjs-photo-service-swagger\",\"06-nestjs-photo-service-email\",\"07-nestjs-photo-service-test\",\"08-nestjs-photo-service-summary\"]}],\"/article/vue3/\":[{\"prefix\":\"vue3-photo\",\"text\":\"Vue3-photo\",\"children\":[\"01-continuew-admin-analysis\"]},{\"prefix\":\"hooks\",\"text\":\"Hooks\",\"children\":[\"01.use-dict\",\"02.use-outside-element\",\"03.use-request\",\"04.use-window-size\",\"05.use-zindex\"]},{\"prefix\":\"utils\",\"text\":\"Utils\",\"children\":[\"01.encrypt\"]}]},\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"logo\":null,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"editLink\":true,\"editLinkText\":\"Edit this page\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
