(window.webpackJsonp=window.webpackJsonp||[]).push([[737],{1024:function(t,s,a){"use strict";a.r(s);var n=a(1),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"nuxt-目录结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nuxt-目录结构"}},[t._v("#")]),t._v(" Nuxt 目录结构")]),t._v(" "),s("h2",{attrs:{id:"目录结构介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#目录结构介绍"}},[t._v("#")]),t._v(" 目录结构介绍")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("    └─my"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("nuxt"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("demo\n      ├─"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nuxt               "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Nuxt自动生成，临时的用于编辑的文件，build")]),t._v("\n      ├─assets              "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 用于组织未编译的静态资源如LESS、SASS或JavaScript,对于不需要通过 Webpack 处理的静态资源文件，可以放置在 static 目录中")]),t._v("\n      ├─components          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 用于自己编写的Vue组件，比如日历组件、分页组件")]),t._v("\n      ├─layouts             "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 布局目录，用于组织应用的布局组件，不可更改⭐")]),t._v("\n      ├─middleware          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 用于存放中间件")]),t._v("\n      ├─node_modules\n      ├─pages               "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 用于组织应用的路由及视图,Nuxt.js根据该目录结构自动生成对应的路由配置，文件名不可更改⭐")]),t._v("\n      ├─plugins             "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 用于组织那些需要在 根vue.js应用 实例化之前需要运行的 Javascript 插件。")]),t._v("\n      ├─"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v("              "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 用于存放应用的静态文件，此类文件不会被 Nuxt.js 调用 Webpack 进行构建编译处理。 服务器启动的时候，该目录下的文件会映射至应用的根路径 / 下。文件夹名不可更改。⭐")]),t._v("\n      └─store               "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 用于组织应用的Vuex 状态管理。文件夹名不可更改。⭐")]),t._v("\n      ├─"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("editorconfig       "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 开发工具格式配置")]),t._v("\n      ├─"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("eslintrc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ESLint的配置文件，用于检查代码格式")]),t._v("\n      ├─"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gitignore          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 配置git忽略文件")]),t._v("\n      ├─nuxt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 用于组织Nuxt.js 应用的个性化配置，以便覆盖默认配置。文件名不可更改。⭐")]),t._v("\n      ├─"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("lock"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("json   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// npm自动生成，用于帮助package的统一设置的，yarn也有相同的操作")]),t._v("\n      ├─"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("json        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// npm 包管理配置文件")]),t._v("\n      ├─"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("README")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("md\n")])])]),s("h2",{attrs:{id:"配置文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置文件"}},[t._v("#")]),t._v(" 配置文件")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" pkg "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./package'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("mode")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'universal'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  当前渲染使用模式")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("head")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  页面head配置信息")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("title")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" pkg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  title")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("meta")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  meat")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("charset")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'utf-8'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'viewport'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("content")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'width=device-width, initial-scale=1'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("hid")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'description'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'description'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("content")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" pkg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("description "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("link")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  favicon，若引用css不会进行打包处理")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("rel")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'icon'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'image/x-icon'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/favicon.ico'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("loading")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("color")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#fff'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  页面进度条")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("css")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  全局css（会进行webpack打包处理）")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'element-ui/lib/theme-chalk/index.css'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("plugins")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  插件")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@/plugins/element-ui'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("modules")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  模块")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@nuxtjs/axios'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("axios")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("build")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  打包")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("transpile")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("^element-ui")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("extend")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ctx")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  webpack自定义配置")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"nuxt-运行命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nuxt-运行命令"}},[t._v("#")]),t._v(" Nuxt 运行命令")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"scripts"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  开发环境")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"dev"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cross-env NODE_ENV=development nodemon server/index.js --watch server"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  打包")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"build"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"nuxt build"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  在服务端运行")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"start"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cross-env NODE_ENV=production node server/index.js"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  生成静态页面")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"generate"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"nuxt generate"')]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);