(window.webpackJsonp=window.webpackJsonp||[]).push([[311],{598:function(t,s,a){"use strict";a.r(s);var n=a(1),p=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"面试官-说说你对图的理解-相关操作有哪些"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#面试官-说说你对图的理解-相关操作有哪些"}},[t._v("#")]),t._v(" 面试官：说说你对图的理解？相关操作有哪些？")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.vue-js.com/7876c2f0-2059-11ec-8e64-91fdec0f05a1.png",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"一、是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、是什么"}},[t._v("#")]),t._v(" 一、是什么")]),t._v(" "),s("p",[t._v("在计算机科学中，图是一种抽象的数据类型，在图中的数据元素通常称为结点，"),s("code",[t._v("V")]),t._v("是所有顶点的集合，"),s("code",[t._v("E")]),t._v("是所有边的集合")]),t._v(" "),s("p",[t._v("如果两个顶点"),s("code",[t._v("v")]),t._v(","),s("code",[t._v("w")]),t._v("，只能由"),s("code",[t._v("v")]),t._v("向"),s("code",[t._v("w")]),t._v("，而不能由"),s("code",[t._v("w")]),t._v("向"),s("code",[t._v("v")]),t._v("，那么我们就把这种情况叫做一个从 "),s("code",[t._v("v")]),t._v(" 到 "),s("code",[t._v("w")]),t._v(" 的有向边。"),s("code",[t._v("v")]),t._v("也被称做初始点，"),s("code",[t._v("w")]),t._v("也被称为终点。这种图就被称做有向图")]),t._v(" "),s("p",[t._v("如果"),s("code",[t._v("v")]),t._v("和"),s("code",[t._v("w")]),t._v("是没有顺序的，从"),s("code",[t._v("v")]),t._v("到达"),s("code",[t._v("w")]),t._v("和从"),s("code",[t._v("w")]),t._v("到达"),s("code",[t._v("v")]),t._v("是完全相同的，这种图就被称为无向图")]),t._v(" "),s("p",[t._v("图的结构比较复杂，任意两个顶点之间都可能存在联系，因此无法以数据元素在存储区中的物理位置来表示元素之间的关系")]),t._v(" "),s("p",[t._v("常见表达图的方式有如下：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("邻接矩阵")])]),t._v(" "),s("li",[s("p",[t._v("邻接表")])])]),t._v(" "),s("h3",{attrs:{id:"邻接矩阵"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#邻接矩阵"}},[t._v("#")]),t._v(" 邻接矩阵")]),t._v(" "),s("p",[t._v("通过使用一个二维数组"),s("code",[t._v("G[N][N]")]),t._v("进行表示"),s("code",[t._v("N")]),t._v("个点到"),s("code",[t._v("N-1")]),t._v("编号，通过邻接矩阵可以立刻看出两顶点之间是否存在一条边，只需要检查邻接矩阵行"),s("code",[t._v("i")]),t._v("和列"),s("code",[t._v("j")]),t._v("是否是非零值，对于无向图，邻接矩阵是对称的")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.vue-js.com/881d4300-2059-11ec-a752-75723a64e8f5.png",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"邻接表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#邻接表"}},[t._v("#")]),t._v(" 邻接表")]),t._v(" "),s("p",[t._v("存储方式如下图所示：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.vue-js.com/949fedd0-2059-11ec-a752-75723a64e8f5.png",alt:""}})]),t._v(" "),s("p",[t._v("在"),s("code",[t._v("javascript")]),t._v("中，可以使用"),s("code",[t._v("Object")]),t._v("进行表示，如下：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" graph "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("B")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("C")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("D")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("E")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("F")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("G")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("图的数据结构还可能包含和每条边相关联的数值（edge value），例如一个标号或一个数值（即权重，weight；表示花费、容量、长度等）")]),t._v(" "),s("h2",{attrs:{id:"二、操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、操作"}},[t._v("#")]),t._v(" 二、操作")]),t._v(" "),s("p",[t._v("关于的图的操作常见的有：")]),t._v(" "),s("ul",[s("li",[t._v("深度优先遍历")]),t._v(" "),s("li",[t._v("广度优先遍历")])]),t._v(" "),s("p",[t._v("首先构建一个图的邻接矩阵表示，如下面的图：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.vue-js.com/a1311790-2059-11ec-8e64-91fdec0f05a1.png",alt:""}})]),t._v(" "),s("p",[t._v("用代码表示则如下：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" graph "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"深度优先遍历"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#深度优先遍历"}},[t._v("#")]),t._v(" 深度优先遍历")]),t._v(" "),s("p",[t._v("也就是尽可能的往深处的搜索图的分支")]),t._v(" "),s("p",[t._v("实现思路是，首先应该确定一个根节点，然后对根节点的没访问过的相邻节点进行深度优先遍历")]),t._v(" "),s("p",[t._v("确定以 0 为根节点，然后进行深度遍历，然后遍历1，接着遍历 2，然后3，此时完成一条分支"),s("code",[t._v("0 - 1- 2- 3")]),t._v("的遍历，换一条分支，也就是4，4后面因为3已经遍历过了，所以就不访问了")]),t._v(" "),s("p",[t._v("用代码表示则如下：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" visited "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("dfs")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("n")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  visited"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 访问过添加记录")]),t._v("\n  graph"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("c")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("visited"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("has")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 判断是否访问呢过")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dfs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"广度优先遍历"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#广度优先遍历"}},[t._v("#")]),t._v(" 广度优先遍历")]),t._v(" "),s("p",[t._v("先访问离根节点最近的节点，然后进行入队操作，解决思路如下：")]),t._v(" "),s("ul",[s("li",[t._v("新建一个队列，把根节点入队")]),t._v(" "),s("li",[t._v("把队头出队并访问")]),t._v(" "),s("li",[t._v("把队头的没访问过的相邻节点入队")]),t._v(" "),s("li",[t._v("重复二、三步骤，知道队列为空")])]),t._v(" "),s("p",[t._v("用代码标识则如下：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" visited "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("dfs")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("n")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  visited"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" q "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("q"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" q"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("shift")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    graph"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("c")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("visited"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("has")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        q"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  \n        visited"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"三、总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、总结"}},[t._v("#")]),t._v(" 三、总结")]),t._v(" "),s("p",[t._v("通过上面的初步了解，可以看到图就是由顶点的有穷非空集合和顶点之间的边组成的集合，分成了无向图与有向图")]),t._v(" "),s("p",[t._v("图的表达形式可以分成邻接矩阵和邻接表两种形式，在"),s("code",[t._v("javascript")]),t._v("中，则可以通过二维数组和对象的形式进行表达")]),t._v(" "),s("p",[t._v("图实际是很复杂的，后续还可以延伸出无向图和带权图，对应如下图所示：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.vue-js.com/b0d88200-2059-11ec-8e64-91fdec0f05a1.png",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"参考文献"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[t._v("#")]),t._v(" 参考文献")]),t._v(" "),s("ul",[s("li",[t._v("https://zh.wikipedia.org/wiki/%E5%9B%BE_(%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84)")]),t._v(" "),s("li",[t._v("https://www.kancloud.cn/imnotdown1019/java_core_full/2159607")])])])}),[],!1,null,null,null);s.default=p.exports}}]);