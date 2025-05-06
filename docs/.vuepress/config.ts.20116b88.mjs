// docs/.vuepress/config.ts
import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";
import { viteBundler } from "@vuepress/bundler-vite";
import rightAnchor from "vuepress-plugin-right-anchor";
var config_default = defineUserConfig({
  lang: "zh-CN",
  title: "X.D\u2019Blog",
  description: "\u4F7F\u7528 VuePress 2.x \u642D\u5EFA\u7684\u4E2A\u4EBA\u535A\u5BA2",
  bundler: viteBundler(),
  theme: defaultTheme({
    navbar: [
      { text: "\u9996\u9875", link: "/" },
      { text: "\u6587\u7AE0", link: "/articles/" },
      { text: "\u5173\u4E8E", link: "/about/" }
    ],
    sidebar: {
      "/articles/": [
        {
          text: "NestJS",
          children: [
            "/articles/nestjs-photo/01-nestjs-photo-service-init",
            "/articles/nestjs-photo/02-nestjs-photo-service-auth",
            "/articles/nestjs-photo/03-nestjs-photo-service-upload",
            "/articles/nestjs-photo/04-nestjs-photo-service-websocket",
            "/articles/nestjs-photo/05-nestjs-photo-service-swagger",
            "/articles/nestjs-photo/06-nestjs-photo-service-email",
            "/articles/nestjs-photo/07-nestjs-photo-service-test",
            "/articles/nestjs-photo/08-nestjs-photo-service-summary"
          ]
        }
      ]
    }
  }),
  plugins: [
    [
      rightAnchor,
      {
        showDepth: 2,
        // 显示层级深度
        ignore: ["/"],
        // 忽略某些页面
        expand: {
          trigger: "hover",
          // 鼠标悬停展开
          clickModeDefaultOpen: true
        },
        customClass: "your-custom-class"
        // 自定义样式
      }
    ]
  ]
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udnVlcHJlc3MvY29uZmlnLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRTovQUkvYmxvZy9kb2NzLy52dWVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRTpcXFxcQUlcXFxcYmxvZ1xcXFxkb2NzXFxcXC52dWVwcmVzc1xcXFxjb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6L0FJL2Jsb2cvZG9jcy8udnVlcHJlc3MvY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lVXNlckNvbmZpZyB9IGZyb20gXCJ2dWVwcmVzc1wiO1xyXG5pbXBvcnQgeyBkZWZhdWx0VGhlbWUgfSBmcm9tIFwiQHZ1ZXByZXNzL3RoZW1lLWRlZmF1bHRcIjtcclxuaW1wb3J0IHsgdml0ZUJ1bmRsZXIgfSBmcm9tIFwiQHZ1ZXByZXNzL2J1bmRsZXItdml0ZVwiO1xyXG5pbXBvcnQgcmlnaHRBbmNob3IgZnJvbSBcInZ1ZXByZXNzLXBsdWdpbi1yaWdodC1hbmNob3JcIjtcclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lVXNlckNvbmZpZyh7XHJcbiAgbGFuZzogXCJ6aC1DTlwiLFxyXG4gIHRpdGxlOiBcIlguRFx1MjAxOUJsb2dcIixcclxuICBkZXNjcmlwdGlvbjogXCJcdTRGN0ZcdTc1MjggVnVlUHJlc3MgMi54IFx1NjQyRFx1NUVGQVx1NzY4NFx1NEUyQVx1NEVCQVx1NTM1QVx1NUJBMlwiLFxyXG4gIGJ1bmRsZXI6IHZpdGVCdW5kbGVyKCksXHJcbiAgdGhlbWU6IGRlZmF1bHRUaGVtZSh7XHJcbiAgICBuYXZiYXI6IFtcclxuICAgICAgeyB0ZXh0OiBcIlx1OTk5Nlx1OTg3NVwiLCBsaW5rOiBcIi9cIiB9LFxyXG4gICAgICB7IHRleHQ6IFwiXHU2NTg3XHU3QUUwXCIsIGxpbms6IFwiL2FydGljbGVzL1wiIH0sXHJcbiAgICAgIHsgdGV4dDogXCJcdTUxNzNcdTRFOEVcIiwgbGluazogXCIvYWJvdXQvXCIgfSxcclxuICAgIF0sXHJcbiAgICBzaWRlYmFyOiB7XHJcbiAgICAgIFwiL2FydGljbGVzL1wiOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGV4dDogXCJOZXN0SlNcIixcclxuICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgIFwiL2FydGljbGVzL25lc3Rqcy1waG90by8wMS1uZXN0anMtcGhvdG8tc2VydmljZS1pbml0XCIsXHJcbiAgICAgICAgICAgIFwiL2FydGljbGVzL25lc3Rqcy1waG90by8wMi1uZXN0anMtcGhvdG8tc2VydmljZS1hdXRoXCIsXHJcbiAgICAgICAgICAgIFwiL2FydGljbGVzL25lc3Rqcy1waG90by8wMy1uZXN0anMtcGhvdG8tc2VydmljZS11cGxvYWRcIixcclxuICAgICAgICAgICAgXCIvYXJ0aWNsZXMvbmVzdGpzLXBob3RvLzA0LW5lc3Rqcy1waG90by1zZXJ2aWNlLXdlYnNvY2tldFwiLFxyXG4gICAgICAgICAgICBcIi9hcnRpY2xlcy9uZXN0anMtcGhvdG8vMDUtbmVzdGpzLXBob3RvLXNlcnZpY2Utc3dhZ2dlclwiLFxyXG4gICAgICAgICAgICBcIi9hcnRpY2xlcy9uZXN0anMtcGhvdG8vMDYtbmVzdGpzLXBob3RvLXNlcnZpY2UtZW1haWxcIixcclxuICAgICAgICAgICAgXCIvYXJ0aWNsZXMvbmVzdGpzLXBob3RvLzA3LW5lc3Rqcy1waG90by1zZXJ2aWNlLXRlc3RcIixcclxuICAgICAgICAgICAgXCIvYXJ0aWNsZXMvbmVzdGpzLXBob3RvLzA4LW5lc3Rqcy1waG90by1zZXJ2aWNlLXN1bW1hcnlcIixcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgfSksXHJcbiAgcGx1Z2luczogW1xyXG4gICAgW1xyXG4gICAgICByaWdodEFuY2hvcixcclxuICAgICAge1xyXG4gICAgICAgIHNob3dEZXB0aDogMiwgLy8gXHU2NjNFXHU3OTNBXHU1QzQyXHU3RUE3XHU2REYxXHU1RUE2XHJcbiAgICAgICAgaWdub3JlOiBbXCIvXCJdLCAvLyBcdTVGRkRcdTc1NjVcdTY3RDBcdTRFOUJcdTk4NzVcdTk3NjJcclxuICAgICAgICBleHBhbmQ6IHtcclxuICAgICAgICAgIHRyaWdnZXI6IFwiaG92ZXJcIiwgLy8gXHU5RjIwXHU2ODA3XHU2MEFDXHU1MDVDXHU1QzU1XHU1RjAwXHJcbiAgICAgICAgICBjbGlja01vZGVEZWZhdWx0T3BlbjogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGN1c3RvbUNsYXNzOiBcInlvdXItY3VzdG9tLWNsYXNzXCIsIC8vIFx1ODFFQVx1NUI5QVx1NEU0OVx1NjgzN1x1NUYwRlxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICBdLFxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF5UCxTQUFTLHdCQUF3QjtBQUMxUixTQUFTLG9CQUFvQjtBQUM3QixTQUFTLG1CQUFtQjtBQUM1QixPQUFPLGlCQUFpQjtBQUN4QixJQUFPLGlCQUFRLGlCQUFpQjtBQUFBLEVBQzlCLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxFQUNQLGFBQWE7QUFBQSxFQUNiLFNBQVMsWUFBWTtBQUFBLEVBQ3JCLE9BQU8sYUFBYTtBQUFBLElBQ2xCLFFBQVE7QUFBQSxNQUNOLEVBQUUsTUFBTSxnQkFBTSxNQUFNLElBQUk7QUFBQSxNQUN4QixFQUFFLE1BQU0sZ0JBQU0sTUFBTSxhQUFhO0FBQUEsTUFDakMsRUFBRSxNQUFNLGdCQUFNLE1BQU0sVUFBVTtBQUFBLElBQ2hDO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUCxjQUFjO0FBQUEsUUFDWjtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sVUFBVTtBQUFBLFlBQ1I7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0YsQ0FBQztBQUFBLEVBQ0QsU0FBUztBQUFBLElBQ1A7QUFBQSxNQUNFO0FBQUEsTUFDQTtBQUFBLFFBQ0UsV0FBVztBQUFBO0FBQUEsUUFDWCxRQUFRLENBQUMsR0FBRztBQUFBO0FBQUEsUUFDWixRQUFRO0FBQUEsVUFDTixTQUFTO0FBQUE7QUFBQSxVQUNULHNCQUFzQjtBQUFBLFFBQ3hCO0FBQUEsUUFDQSxhQUFhO0FBQUE7QUFBQSxNQUNmO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
