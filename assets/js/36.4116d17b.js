(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{382:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setup"}},[t._v("#")]),t._v(" setup")]),t._v(" "),a("p",[a("code",[t._v("setup()")]),t._v(" 函数是 vue3 中，专门为组件提供的新属性。它为我们使用 vue3 的 Composition API 新特性提供了统一的入口。")]),t._v(" "),a("h2",{attrs:{id:"执行时机"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行时机"}},[t._v("#")]),t._v(" 执行时机")]),t._v(" "),a("p",[t._v("setup 函数会在 beforeCreate 之后、created 之前执行")]),t._v(" "),a("h2",{attrs:{id:"接收-props-数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#接收-props-数据"}},[t._v("#")]),t._v(" 接收 props 数据")]),t._v(" "),a("ul",[a("li",[t._v("在 props 中定义当前组件允许外界传递过来的参数名称：")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("props"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  p1"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" String\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[t._v("通过 setup 函数的第一个形参，接收 props 数据：")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setup")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("props")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("props"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("p1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"context"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[t._v("#")]),t._v(" context")]),t._v(" "),a("p",[t._v("setup 函数的第二个形参是一个上下文对象，这个上下文对象中包含了一些有用的属性，这些属性在 vue 2.x 中需要通过 this 才能访问到，在 vue 3.x 中，它们的访问方式如下：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" MyComponent "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setup")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("props"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" context")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("attrs\n    context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("slots\n    context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parent\n    context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("root\n    context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("emit\n    context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("refs\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("注意：在 setup() 函数中无法访问到 this")])])])}),[],!1,null,null,null);s.default=e.exports}}]);