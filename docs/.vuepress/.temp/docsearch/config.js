
import { DocSearch, injectDocSearchConfig } from "E:/AI/blog/node_modules/@vuepress/plugin-docsearch/lib/client/index.js"
import 'E:/AI/blog/node_modules/@docsearch/css/dist/style.css'
import 'E:/AI/blog/node_modules/@vuepress/plugin-docsearch/lib/client/styles/docsearch.css'
import 'E:/AI/blog/node_modules/@vuepress/plugin-docsearch/lib/client/styles/vars.css'

export default {
  enhance({ app }) {
    injectDocSearchConfig(app)
    app.component('SearchBox', DocSearch)
  },
}
