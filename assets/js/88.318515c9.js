(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{454:function(e,t,a){"use strict";a.r(t);var r=a(1),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"flutter-的-event-loop-事件循环-及代码运行顺序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flutter-的-event-loop-事件循环-及代码运行顺序"}},[e._v("#")]),e._v(" Flutter 的 Event Loop(事件循环)及代码运行顺序")]),e._v(" "),a("p",[e._v("接触过 Flutter 的人都知道，Flutter 是用 Dart 来写的，Dart 没有进程和线程的概念，所有的 Dart 代码 都是在 Isolate 上 运行的，那么 Isolate 到底是什么？本节将详细讨论。这篇文章讨论事件队列(event loop)及 Dart 代码运行顺序。")]),e._v(" "),a("h2",{attrs:{id:"同步代码和异步代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#同步代码和异步代码"}},[e._v("#")]),e._v(" 同步代码和异步代码")]),e._v(" "),a("p",[e._v("我们在写 Dart 代码 的时候，对 Dart 代码 进行分类,就只有两类，同步代码和异步代码；")]),e._v(" "),a("ul",[a("li",[e._v("异步代码：就是以 Future 等修饰的代码")]),e._v(" "),a("li",[e._v("同步代码：除了异步代码，平常写的代码就是同步代码")])]),e._v(" "),a("p",[e._v("在 Dart 中这两类代码是不同的：")]),e._v(" "),a("h3",{attrs:{id:"_1-运行顺序不同"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-运行顺序不同"}},[e._v("#")]),e._v(" 1.运行顺序不同")]),e._v(" "),a("p",[e._v("同步代码和异步代码运行的顺序是不同的：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("先运行同步代码，在运行异步代码\n")])])]),a("p",[e._v("就是，即使我异步代码写在最前面，同步代码写在最后面，不好意思，我也是先运行后面的同步代码，同步代码都运行完后，在运行前面的异步代码。")]),e._v(" "),a("h3",{attrs:{id:"_2-运行的机制不同"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-运行的机制不同"}},[e._v("#")]),e._v(" 2.运行的机制不同")]),e._v(" "),a("p",[e._v("异步代码是运行在 "),a("code",[e._v("event loop")]),e._v(" 里的，这是一个很重要的概念，这里可以理解成 Android 里的 Looper 机制，是一个死循环，"),a("code",[e._v("event loop")]),e._v(" 不断的从事件队列里取事件然后运行。")]),e._v(" "),a("h2",{attrs:{id:"event-loop-架构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#event-loop-架构"}},[e._v("#")]),e._v(" event loop 架构")]),e._v(" "),a("p",[e._v("下面是 event loop 大致的运行图：\n"),a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/1/8/168297301229dbb9?w=362&h=69&f=png&s=7918",alt:""}}),e._v("\n这个很好理解，事件 events 加到 Event queue 里，Event loop 循环从 Event queue 里取 Event 执行。")]),e._v(" "),a("p",[e._v("这个理解后，在看 event loop 详细的运行图：\n"),a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/1/8/1682974dd5b630bf?w=471&h=506&f=png&s=37081",alt:""}})]),e._v(" "),a("p",[e._v("从这里看到，启动 app（start app）后：")]),e._v(" "),a("ol",[a("li",[e._v("先查看 MicroTask queue 是不是空的，不是的话，先运行 microtask")]),e._v(" "),a("li",[e._v("一个 microtask 运行完后，会看有没有下一个 microtask，直到 Microtask queue 空了之后，才会去运行 Event queue 3.在 Evnet queue 取出一个 event task 运行完后，又会跑到第一步，去运行 microtask")])]),e._v(" "),a("p",[e._v("这里多了两个名词："),a("code",[e._v("MicroTask")]),e._v(" 和 "),a("code",[e._v("Event")]),e._v(" ，这代表了两个不同的异步 task")]),e._v(" "),a("h3",{attrs:{id:"_1-microtask"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-microtask"}},[e._v("#")]),e._v(" 1. MicroTask")]),e._v(" "),a("p",[e._v("这个大家应该不太清楚，但是这个也是 "),a("code",[e._v("dart:async")]),e._v(" 提供的异步方法，使用方式：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// Adds a task to the 先查看MicroTask queue.\nscheduleMicrotask((){\n  // ...code goes here...\n});\n")])])]),a("p",[e._v("或者：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("new Future.microtask((){\n    // ...code goes here...\n});\n")])])]),a("div",{staticClass:"language-! extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("如果想让任务能够尽快执行，就用 MicroTask\n")])])]),a("h3",{attrs:{id:"_2-event"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-event"}},[e._v("#")]),e._v(" 2.Event")]),e._v(" "),a("p",[e._v("Event 我们就很清楚了，就是 Future 修饰的异步方法，使用方式：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// Adds a task to the Event queue.\nnew Future(() {\n  // ...code goes here...\n});\n")])])]),a("h2",{attrs:{id:"代码运行顺序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码运行顺序"}},[e._v("#")]),e._v(" 代码运行顺序")]),e._v(" "),a("p",[e._v("纯粹讲理论知识不太好理解，我们直接上代码，讲一个例子，看如下的代码，请问打印顺序是什么样的？")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("import 'dart:async';\nvoid main() {\n  print('main #1 of 2');\n  scheduleMicrotask(() => print('microtask #1 of 3'));\n\n  new Future.delayed(new Duration(seconds:1),\n      () => print('future #1 (delayed)'));\n\n  new Future(() => print('future #2 of 4'))\n      .then((_) => print('future #2a'))\n      .then((_) {\n        print('future #2b');\n        scheduleMicrotask(() => print('microtask #0 (from future #2b)'));\n      })\n      .then((_) => print('future #2c'));\n\n  scheduleMicrotask(() => print('microtask #2 of 3'));\n\n  new Future(() => print('future #3 of 4'))\n      .then((_) => new Future(\n                   () => print('future #3a (a new future)')))\n      .then((_) => print('future #3b'));\n\n  new Future(() => print('future #4 of 4'))\n  .then((_){\n    new Future(() => print('future #4a'));\n  })\n  .then((_) => print('future #4b'));\n  scheduleMicrotask(() => print('microtask #3 of 3'));\n  print('main #2 of 2');\n}\n")])])]),a("ol",[a("li",[a("p",[e._v("首先运行同步代码")]),e._v(" "),a("p",[e._v("所以是:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("main #1 of 2\nmain #2 of 2\n")])])])]),e._v(" "),a("li",[a("p",[e._v("接下来是异步代码")]),e._v(" "),a("p",[e._v("Dart 的 Event Loop 是先判断 "),a("code",[e._v("microtask queue")]),e._v(" 里有没有 task，有的话运行 "),a("code",[e._v("microtask")]),e._v("， "),a("code",[e._v("microtask")]),e._v(" 行完后，在运行 "),a("code",[e._v("event queue")]),e._v(" 里的 "),a("code",[e._v("event task")]),e._v(",一个 "),a("code",[e._v("event task")]),e._v(" 运行完后，再去运行 "),a("code",[e._v("microtask queue")]),e._v("，然后在运行 "),a("code",[e._v("event queue")]),e._v("。")])]),e._v(" "),a("li",[a("p",[e._v("microtask queue")]),e._v(" "),a("p",[e._v("这里就是：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("microtask #1 of 3\nmicrotask #2 of 3\n")])])])]),e._v(" "),a("li",[a("p",[e._v("event queue\nevent queue 还有有特殊的情况需要考虑：")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Future.delayed")]),e._v(" "),a("p",[e._v("需要延迟执行的，Dart 是怎么执行的呢，是在延迟时间到了之后才将此 task 加到 "),a("code",[e._v("event queue")]),e._v(" 的队尾，所以万一前面有很耗时的任务，那么你的延迟 task 不一定能准时运行")])]),e._v(" "),a("li",[a("p",[e._v("Future.then")]),e._v(" "),a("p",[e._v("Future.then 里的 task 是不会加入到 "),a("code",[e._v("event queue")]),e._v(" 里的，而是当前面的 Future 执行完后立即掉起，所以你如果想保证异步 task 的执行顺序一定要用 then，否则 Dart 不保证 task 的执行顺序")])]),e._v(" "),a("li",[a("p",[e._v("scheduleMicrotask")]),e._v(" "),a("p",[e._v("一个 "),a("code",[e._v("event task")]),e._v(" 运行完后，会先去查看 "),a("code",[e._v("Micro queue")]),e._v(" 里有没有可以执行的 "),a("code",[e._v("micro task")]),e._v("。没有的话，在执行下一个 "),a("code",[e._v("event task")])]),e._v(" "),a("p",[e._v("这里就是：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("future #2 of 4\nfuture #2a\nfuture #2b\nfuture #2c\nmicrotask #0 (from future #2b)\nfuture #3 of 4\nfuture #4 of 4\nfuture #4b\nfuture #3a (a new future)\nfuture #3b\nfuture #4a\nfuture #1 (delayed)\n")])])])])])])]),e._v(" "),a("p",[e._v("这里你肯定好奇为啥 "),a("code",[e._v("future #3 of 4")]),e._v(" 后面是 "),a("code",[e._v("future #4 of 4")]),e._v("，而不 是"),a("code",[e._v("future #3a (a new future)")]),e._v("，因为 "),a("code",[e._v("future #3 of 4")]),e._v(" 的 then 里又新建了一个 Future:"),a("code",[e._v("future #3a (a new future)")]),e._v("，所以 "),a("code",[e._v("future #3a (a new future)")]),e._v(" 这个 task 会加到 "),a("code",[e._v("event queue")]),e._v("的最后面。")]),e._v(" "),a("p",[e._v("最后的结果就是：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("main #1 of 2\nmain #2 of 2\nmicrotask #1 of 3\nmicrotask #2 of 3\nmicrotask #3 of 3\nfuture #2 of 4\nfuture #2a\nfuture #2b\nfuture #2c\nmicrotask #0 (from future #2b)\nfuture #3 of 4\nfuture #4 of 4\nfuture #4b\nfuture #3a (a new future)\nfuture #3b\nfuture #4a\nfuture #1 (delayed)\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);