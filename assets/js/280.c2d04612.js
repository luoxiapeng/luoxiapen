(window.webpackJsonp=window.webpackJsonp||[]).push([[280],{644:function(r,t,e){"use strict";e.r(t);var i=e(1),s=Object(i.a)({},(function(){var r=this,t=r.$createElement,e=r._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[e("h1",{attrs:{id:"跨域问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#跨域问题"}},[r._v("#")]),r._v(" 跨域问题")]),r._v(" "),e("p",[r._v("写服务端难免要考虑到跨域的问题，egg-cors 插件提供了 origin 的配置，给大家提供了便利。")]),r._v(" "),e("p",[r._v("egg-cors 开启：")]),r._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/7/167872a22a83d079?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:""}})]),r._v(" "),e("p",[r._v("egg-cors 配置：")]),r._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/7/167872a66b33ca0c?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:""}})]),r._v(" "),e("p",[r._v("这是目前用的比较多的插件，用来解决跨域问题。")]),r._v(" "),e("p",[r._v("但是我在实际项目中，有的需求并不能满足，所以我觉得 egg-cors 在配置上有一定的局限性。")]),r._v(" "),e("ol",[e("li",[r._v("orgin 参数只能设置一个域名，或者 ' * '，如果想要维护一个白名单，恐怕不支持；")]),r._v(" "),e("li",[r._v("设置成 ' * ' 允许所有域名跨域时，如果请求带 withCredentials: true 参数，还是有跨域问题。")])]),r._v(" "),e("p",[r._v("为了解决以上问题，决定自己动手撸一个插件 egg-origin。这是一个中间件，代码非常简单。")]),r._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/7/16787319f17a9cbb?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:""}})]),r._v(" "),e("p",[r._v("没错，以上就是全部要代码了 😅😅")]),r._v(" "),e("p",[r._v("原理：每个请求过来的时候，拿到它的 origin，如果是在配置的白名单内，就手动设置 this.ctx.response.set('Access-Control-Allow-Origin', origin); 这样就可以根据自己需求来配置跨域白名单。")]),r._v(" "),e("h2",{attrs:{id:"使用方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用方法"}},[r._v("#")]),r._v(" 使用方法：")]),r._v(" "),e("p",[r._v("使用上跟 egg-cors 一样")]),r._v(" "),e("p",[r._v("egg-origin 开启：")]),r._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/7/1678735939450d64?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:""}})]),r._v(" "),e("p",[r._v("egg-origin 配置：")]),r._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/7/167873690adf1af9?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:""}})]),r._v(" "),e("p",[r._v("这里 whiteList 参数可以设置域名，也可以直接设置成 [' * ']，一定要是数组，也是为了保持跟 egg-cors 的相同的配置习惯。")]),r._v(" "),e("p",[r._v("这个插件其实是依赖于 egg-cors 的，我在默认配置中添加了 egg-cors 的配置")]),r._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/7/167873a7be16b584?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:""}})]),r._v(" "),e("p",[r._v("egg-origin 设置的白名单，会覆盖 egg-cors 的配置。站在巨人的肩膀上，才能看的更远，感谢巨人。")]),r._v(" "),e("h2",{attrs:{id:"后期迭代计划"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#后期迭代计划"}},[r._v("#")]),r._v(" 后期迭代计划")]),r._v(" "),e("p",[r._v("目前还只是支持完全匹配的模式，后面的迭代计划包括配置 一级域名，所有的子域名都可以，还会加上 【黑名单】 配置，来过滤某些域名。")])])}),[],!1,null,null,null);t.default=s.exports}}]);