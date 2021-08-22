(window.webpackJsonp=window.webpackJsonp||[]).push([[395],{766:function(s,a,t){"use strict";t.r(a);var n=t(1),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"koa-开发环境搭建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#koa-开发环境搭建"}},[s._v("#")]),s._v(" Koa 开发环境搭建")]),s._v(" "),t("h2",{attrs:{id:"安装-node-js"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-node-js"}},[s._v("#")]),s._v(" 安装 Node.js")]),s._v(" "),t("p",[s._v("安装 Node 很简单，如果你会安装 QQ，我相信安装 Node 你绝对自己能搞定。但是作 Koa2 的开发，Node.js 是有要求的，它要求 Node.js 版本高于 V7.6。因为 node.js 7.6 版本开始完全支持 async/await,不需要再加 flag，所以才能完全你支持我们的 Koa2。")]),s._v(" "),t("p",[s._v("查看 Node 版本方法（windows 版本）：\n打开运行（快捷键：win+R），然后输入 cmd 打开命令行工具，在命令行里输入：")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("node -v\n")])])]),t("p",[s._v("如果你的版本低于 v7.6，那你需要升级，这一步一定要检查，要不会给以后的课程留下隐患。\n升级 Node 版本方法\n如果你的版本过低，还是 windows 系统，我告诉你一个最暴力的方法，直接下载新的安装包，重新安装，覆盖原来的安装位置。\n安装位置查找方法，在命令行里输入:")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("where node\n")])])]),t("p",[s._v("在工作中我不使用 n 包来更新的，因为 n 包需要 sh 的支持。我的录课电脑是 windows，sh 支持的不是很好。如果你是 Mac 电脑，完全可以使用 n 包来更新。\nMac 更新方法：")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -g n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" n stable\n")])])]),t("p",[s._v("两行命令轻松搞定，你说前端程序员能不喜欢使用 Mac 开发吗？")]),s._v(" "),t("h2",{attrs:{id:"搭建环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#搭建环境"}},[s._v("#")]),s._v(" 搭建环境")]),s._v(" "),t("p",[s._v("找一个你喜欢的盘符，然后建立一个文件夹，我这里选择 E 盘下的 code 文件夹下的 koa2 文件夹。命令行下建立如下：")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" code  //进入code文件夹\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" koa2 //创建koa2文件夹\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" koa2  //进入koa2文件夹\n")])])]),t("p",[s._v("进入之后，我们初始化生产 package.json 文件")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" init -y\n")])])]),t("p",[s._v("生成 package.json 后，安装 koa 包，我们这里使用 npm 来进行安装。")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" --save koa\n")])])]),t("p",[s._v("如果你安装错误，一般都是网速问题，可以使用 cnpm 来进行安装。")]),s._v(" "),t("h2",{attrs:{id:"hellokoa2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hellokoa2"}},[s._v("#")]),s._v(" HelloKoa2")]),s._v(" "),t("p",[s._v("现在环境已经安装好了，我们就来练手我们的第一个程序吧。在文件夹跟目录下新建 index.js 文件，输入下面代码。具体代码在视频中讲解。")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" Koa "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'koa'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" app "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Koa")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\napp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("use")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("async")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("ctx")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  ctx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("body "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hello koa2'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\napp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("listen")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3000")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'[demo] start-quick is starting at port 3000'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),t("p",[s._v("编写完成后在命令行中输入：")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("node index.js\n")])])]),t("p",[s._v("然后在浏览器中输入："),t("a",{attrs:{href:"http://127.0.0.1:3000",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://127.0.0.1:3000"),t("OutboundLink")],1),s._v(" 就可以看到结果了。")])])}),[],!1,null,null,null);a.default=e.exports}}]);