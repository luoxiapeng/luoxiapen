(window.webpackJsonp=window.webpackJsonp||[]).push([[224],{589:function(a,t,s){"use strict";s.r(t);var e=s(1),n=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"about"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#about"}},[a._v("#")]),a._v(" About")]),a._v(" "),s("p",[a._v("Lerna 是一个工具，它优化了使用 git 和 npm 管理多包存储库的工作流。\nvue,babel,react 等都在用。我司也在用。文档是英文，我便简单总结一篇，希望对大家有帮助。")]),a._v(" "),s("h2",{attrs:{id:"工作的两种模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#工作的两种模式"}},[a._v("#")]),a._v(" 工作的两种模式")]),a._v(" "),s("p",[a._v("Fixed/Locked mode (default)")]),a._v(" "),s("p",[a._v("vue,babel 都是用这种，在 publish 的时候,会在"),s("code",[a._v("lerna.json")]),a._v('文件里面"version": "0.1.5",,依据这个号，进行增加，只选择一次，其他有改动的包自动更新版本号。')]),a._v(" "),s("h2",{attrs:{id:"independent-mode"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#independent-mode"}},[a._v("#")]),a._v(" Independent mode")]),a._v(" "),s("p",[s("code",[a._v("lerna init --independent")]),a._v('初始化项目。 lerna.json 文件里面"version": "independent"')]),a._v(" "),s("p",[a._v("每次 publish 时，您都将得到一个提示符，提示每个已更改的包，以指定是补丁、次要更改、主要更改还是自定义更改。")]),a._v(" "),s("h2",{attrs:{id:"前端开发-package-面临的问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前端开发-package-面临的问题"}},[a._v("#")]),a._v(" 前端开发 package 面临的问题")]),a._v(" "),s("p",[a._v("在最初开开发 package 的时候，还属于一种刀耕火种的阶段。没有什么自动化的工具。发布 package 的时候，都是手动修改版本号。如果 packages 数量不多还可以接受。但是当数量逐渐增多的时候，且这些 packages 之间还有依赖关系的时候，对开发人员来说，就很痛苦了。工作不仅繁琐，而且需要用掉不少时间。\n举个例子，如果你要维护两个 package。分别为 module-1,module-2。\n下面是这两个 package 的依赖关系。")]),a._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// module-1 package.json")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"module-1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"version"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"1.0.0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"dependencies"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"module-2"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"^1.0.0"')]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//module-2 package.json")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"module-2"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"version"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"1.0.0"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[a._v("在这样的环境下，module-1 是依赖 module-2 的。如果 module-2 有修改，需要发布。那么你的工作有这些。")]),a._v(" "),s("ul",[s("li",[a._v("修改 module-2 版本号，发布。")])])])}),[],!1,null,null,null);t.default=n.exports}}]);