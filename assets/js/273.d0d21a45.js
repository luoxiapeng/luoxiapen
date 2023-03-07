(window.webpackJsonp=window.webpackJsonp||[]).push([[273],{561:function(t,e,s){"use strict";s.r(e);var a=s(1),r=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"面试官-说说对fiber架构的理解-解决了什么问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#面试官-说说对fiber架构的理解-解决了什么问题"}},[t._v("#")]),t._v(" 面试官：说说对Fiber架构的理解？解决了什么问题？")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://static.vue-js.com/554da6d0-ed24-11eb-85f6-6fac77c0c9b3.png",alt:""}})]),t._v(" "),e("h2",{attrs:{id:"一、问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、问题"}},[t._v("#")]),t._v(" 一、问题")]),t._v(" "),e("p",[e("code",[t._v("JavaScript")]),t._v("引擎和页面渲染引擎两个线程是互斥的，当其中一个线程执行时，另一个线程只能挂起等待")]),t._v(" "),e("p",[t._v("如果 "),e("code",[t._v("JavaScript")]),t._v(" 线程长时间地占用了主线程，那么渲染层面的更新就不得不长时间地等待，界面长时间不更新，会导致页面响应度变差，用户可能会感觉到卡顿")]),t._v(" "),e("p",[t._v("而这也正是 "),e("code",[t._v("React 15")]),t._v(" 的 "),e("code",[t._v("Stack Reconciler")]),t._v("所面临的问题，当 "),e("code",[t._v("React")]),t._v("在渲染组件时，从开始到渲染完成整个过程是一气呵成的，无法中断")]),t._v(" "),e("p",[t._v("如果组件较大，那么"),e("code",[t._v("js")]),t._v("线程会一直执行，然后等到整棵"),e("code",[t._v("VDOM")]),t._v("树计算完成后，才会交给渲染的线程")]),t._v(" "),e("p",[t._v("这就会导致一些用户交互、动画等任务无法立即得到处理，导致卡顿的情况")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://static.vue-js.com/5eb3a850-ed24-11eb-ab90-d9ae814b240d.png",alt:""}})]),t._v(" "),e("h2",{attrs:{id:"二、是什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、是什么"}},[t._v("#")]),t._v(" 二、是什么")]),t._v(" "),e("p",[t._v("React Fiber 是 Facebook 花费两年余时间对 React 做出的一个重大改变与优化，是对 React 核心算法的一次重新实现。从Facebook在 React Conf 2017 会议上确认，React Fiber 在React 16 版本发布")]),t._v(" "),e("p",[t._v("在"),e("code",[t._v("react")]),t._v("中，主要做了以下的操作：")]),t._v(" "),e("ul",[e("li",[t._v("为每个增加了优先级，优先级高的任务可以中断低优先级的任务。然后再重新，注意是重新执行优先级低的任务")]),t._v(" "),e("li",[t._v("增加了异步任务，调用requestIdleCallback api，浏览器空闲的时候执行")]),t._v(" "),e("li",[t._v("dom diff树变成了链表，一个dom对应两个fiber（一个链表），对应两个队列，这都是为找到被中断的任务，重新执行")])]),t._v(" "),e("p",[t._v("从架构角度来看，"),e("code",[t._v("Fiber")]),t._v(" 是对 "),e("code",[t._v("React")]),t._v("核心算法（即调和过程）的重写")]),t._v(" "),e("p",[t._v("从编码角度来看，"),e("code",[t._v("Fiber")]),t._v("是 "),e("code",[t._v("React")]),t._v("内部所定义的一种数据结构，它是 "),e("code",[t._v("Fiber")]),t._v("树结构的节点单位，也就是 "),e("code",[t._v("React 16")]),t._v(" 新架构下的虚拟"),e("code",[t._v("DOM")])]),t._v(" "),e("p",[t._v("一个 "),e("code",[t._v("fiber")]),t._v("就是一个 "),e("code",[t._v("JavaScript")]),t._v("对象，包含了元素的信息、该元素的更新操作队列、类型，其数据结构如下：")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("type Fiber "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 用于标记fiber的WorkTag类型，主要表示当前fiber代表的组件类型如FunctionComponent、ClassComponent等")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("tag")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" WorkTag"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ReactElement里面的key")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("key")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" string"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ReactElement.type，调用`createElement`的第一个参数")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("elementType")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" any"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The resolved function/class/ associated with this fiber.")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 表示当前代表的节点类型")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" any"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 表示当前FiberNode对应的element组件实例")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("stateNode")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" any"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 指向他在Fiber节点树中的`parent`，用来在处理完这个节点之后向上返回")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Fiber "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 指向自己的第一个子节点")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("child")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Fiber "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 指向自己的兄弟结构，兄弟节点的return指向同一个父节点")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("sibling")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Fiber "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("index")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" number"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("ref")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("handle")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" mixed")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("_stringRef")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("string "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" RefObject"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当前处理过程中的组件props对象")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("pendingProps")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" any"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 上一次渲染完成之后的props")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("memoizedProps")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" any"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 该Fiber对应的组件产生的Update会存放在这个队列里面")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("updateQueue")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" UpdateQueue"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("any"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 上一次渲染的时候的state")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("memoizedState")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" any"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 一个列表，存放这个Fiber依赖的context")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("firstContextDependency")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ContextDependency"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("mixed"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("mode")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" TypeOfMode"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Effect")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 用来记录Side Effect")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("effectTag")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" SideEffectTag"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 单链表用来快速查找下一个side effect")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("nextEffect")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Fiber "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 子树中第一个side effect")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("firstEffect")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Fiber "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 子树中最后一个side effect")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("lastEffect")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Fiber "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 代表任务在未来的哪个时间点应该被完成，之后版本改名为 lanes")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("expirationTime")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ExpirationTime"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 快速确定子树中是否有不在等待的变化")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("childExpirationTime")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ExpirationTime"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// fiber的版本池，即记录fiber更新过程，便于恢复")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("alternate")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Fiber "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h2",{attrs:{id:"三、如何解决"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、如何解决"}},[t._v("#")]),t._v(" 三、如何解决")]),t._v(" "),e("p",[e("code",[t._v("Fiber")]),t._v("把渲染更新过程拆分成多个子任务，每次只做一小部分，做完看是否还有剩余时间，如果有继续下一个任务；如果没有，挂起当前任务，将时间控制权交给主线程，等主线程不忙的时候在继续执行")]),t._v(" "),e("p",[t._v("即可以中断与恢复，恢复后也可以复用之前的中间状态，并给不同的任务赋予不同的优先级，其中每个任务更新单元为 "),e("code",[t._v("React Element")]),t._v(" 对应的 "),e("code",[t._v("Fiber")]),t._v("节点")]),t._v(" "),e("p",[t._v("实现的上述方式的是"),e("code",[t._v("requestIdleCallback")]),t._v("方法")]),t._v(" "),e("p",[e("code",[t._v("window.requestIdleCallback()")]),t._v("方法将在浏览器的空闲时段内调用的函数排队。这使开发者能够在主事件循环上执行后台和低优先级工作，而不会影响延迟关键事件，如动画和输入响应")]),t._v(" "),e("p",[t._v("首先 React 中任务切割为多个步骤，分批完成。在完成一部分任务之后，将控制权交回给浏览器，让浏览器有时间再进行页面的渲染。等浏览器忙完之后有剩余时间，再继续之前 React 未完成的任务，是一种合作式调度。")]),t._v(" "),e("p",[t._v("该实现过程是基于 "),e("code",[t._v("Fiber")]),t._v("节点实现，作为静态的数据结构来说，每个 "),e("code",[t._v("Fiber")]),t._v(" 节点对应一个 "),e("code",[t._v("React element")]),t._v("，保存了该组件的类型（函数组件/类组件/原生组件等等）、对应的 DOM 节点等信息。")]),t._v(" "),e("p",[t._v("作为动态的工作单元来说，每个 "),e("code",[t._v("Fiber")]),t._v(" 节点保存了本次更新中该组件改变的状态、要执行的工作。")]),t._v(" "),e("p",[t._v("每个 Fiber 节点有个对应的 "),e("code",[t._v("React element")]),t._v("，多个 "),e("code",[t._v("Fiber")]),t._v("节点根据如下三个属性构建一颗树：")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 指向父级Fiber节点")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("return "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 指向子Fiber节点")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("child "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 指向右边第一个兄弟Fiber节点")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sibling "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n")])])]),e("p",[t._v("通过这些属性就能找到下一个执行目标")]),t._v(" "),e("h2",{attrs:{id:"参考文献"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[t._v("#")]),t._v(" 参考文献")]),t._v(" "),e("ul",[e("li",[t._v("https://juejin.cn/post/6926432527980691470")]),t._v(" "),e("li",[t._v("https://zhuanlan.zhihu.com/p/137234573")]),t._v(" "),e("li",[t._v("https://vue3js.cn/interview")])])])}),[],!1,null,null,null);e.default=r.exports}}]);