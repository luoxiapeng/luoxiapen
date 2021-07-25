(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{421:function(t,e,i){"use strict";i.r(e);var l=i(1),n=Object(l.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"flutter-布局-widget-弹性布局"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#flutter-布局-widget-弹性布局"}},[t._v("#")]),t._v(" Flutter 布局 Widget —— 弹性布局")]),t._v(" "),i("p",[t._v("Flutter 中的弹性布局是 "),i("a",{attrs:{href:"https://docs.flutter.io/flutter/widgets/Flex-class.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Flex"),i("OutboundLink")],1),t._v("。Flex 类似于 CSS 的 Flexbox。")]),t._v(" "),i("p",[t._v("Flex 有主轴和交叉轴，Flex 里的 子 Widget 默认沿主轴排列，并且 Flex 和 Expanded 配合使用可以实现 子 widge 按照一定比例来分配父容器空间。所以 Flex 叫做弹性布局。")]),t._v(" "),i("p",[i("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/3/31/169d172a70fb12c0?w=521&h=706&f=png&s=15168",alt:""}})]),t._v(" "),i("h1",{attrs:{id:"flex"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#flex"}},[t._v("#")]),t._v(" Flex")]),t._v(" "),i("h2",{attrs:{id:"代码所在位置"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#代码所在位置"}},[t._v("#")]),t._v(" 代码所在位置")]),t._v(" "),i("p",[t._v("flutter_widget_demo/lib/flex/FlexWidget.dart")]),t._v(" "),i("h2",{attrs:{id:"flex-的快速上手"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#flex-的快速上手"}},[t._v("#")]),t._v(" Flex 的快速上手")]),t._v(" "),i("p",[t._v("Flex 有一个必填参数：direction，用于确定主轴的方向，然后就可以在 children 里写 子 Widget。")]),t._v(" "),i("p",[t._v("Flex 使用的代码为：")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("Flex(\n    direction: Axis.horizontal,\n    children: <Widget>[\n      ...\n    ],\n)\n")])])]),i("h2",{attrs:{id:"flex-的构造函数及参数说明"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#flex-的构造函数及参数说明"}},[t._v("#")]),t._v(" Flex 的构造函数及参数说明")]),t._v(" "),i("p",[t._v("Flex 的构造函数为：")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("class Flex extends MultiChildRenderObjectWidget {\n  Flex({\n    Key key,\n    @required this.direction,\n    this.mainAxisAlignment = MainAxisAlignment.start,\n    this.mainAxisSize = MainAxisSize.max,\n    this.crossAxisAlignment = CrossAxisAlignment.center,\n    this.textDirection,\n    this.verticalDirection = VerticalDirection.down,\n    this.textBaseline,\n    List<Widget> children = const <Widget>[],\n  }) : assert(direction != null),\n       assert(mainAxisAlignment != null),\n       assert(mainAxisSize != null),\n       assert(crossAxisAlignment != null),\n       assert(verticalDirection != null),\n       assert(crossAxisAlignment != CrossAxisAlignment.baseline || textBaseline != null),\n       super(key: key, children: children);\n    ...\n}\n")])])]),i("table",[i("thead",[i("tr",[i("th",[t._v("参数名字")]),t._v(" "),i("th",[t._v("参数类型")]),t._v(" "),i("th",[t._v("意义")]),t._v(" "),i("th",[t._v("必选 or 可选")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[t._v("key")]),t._v(" "),i("td",[t._v("Key")]),t._v(" "),i("td",[t._v("Widget 的标识")]),t._v(" "),i("td",[t._v("可选")])]),t._v(" "),i("tr",[i("td",[t._v("direction")]),t._v(" "),i("td",[t._v("Axis")]),t._v(" "),i("td",[t._v("主轴的方向")]),t._v(" "),i("td",[t._v("必选")])]),t._v(" "),i("tr",[i("td",[t._v("mainAxisAlignment")]),t._v(" "),i("td",[t._v("MainAxisAlignment")]),t._v(" "),i("td",[t._v("表示 子 Widget 在主轴的对齐方式")]),t._v(" "),i("td",[t._v("可选")])]),t._v(" "),i("tr",[i("td",[t._v("mainAxisSize")]),t._v(" "),i("td",[t._v("MainAxisSize")]),t._v(" "),i("td",[t._v("表示主轴应该占用多大的空间")]),t._v(" "),i("td",[t._v("可选")])]),t._v(" "),i("tr",[i("td",[t._v("crossAxisAlignment")]),t._v(" "),i("td",[t._v("CrossAxisAlignment")]),t._v(" "),i("td",[t._v("表示 子 Widget 在交叉轴的对齐方式")]),t._v(" "),i("td",[t._v("可选")])]),t._v(" "),i("tr",[i("td",[t._v("textDirection")]),t._v(" "),i("td",[t._v("TextDirection")]),t._v(" "),i("td",[t._v("表示 子 Widget 在主轴方向上的布局顺序")]),t._v(" "),i("td",[t._v("可选")])]),t._v(" "),i("tr",[i("td",[t._v("verticalDirection")]),t._v(" "),i("td",[t._v("VerticalDirection")]),t._v(" "),i("td",[t._v("表示 子 Widget 在交叉轴方向上的布局顺序")]),t._v(" "),i("td",[t._v("可选")])]),t._v(" "),i("tr",[i("td",[t._v("textBaseline")]),t._v(" "),i("td",[t._v("TextBaseline")]),t._v(" "),i("td",[t._v("排列 子 Widget 时使用哪个基线")]),t._v(" "),i("td",[t._v("可选")])]),t._v(" "),i("tr",[i("td",[t._v("children")]),t._v(" "),i("td",[t._v("List< Widget>")]),t._v(" "),i("td",[t._v("Flex 布局 里排列的内容")]),t._v(" "),i("td",[t._v("可选")])])])]),t._v(" "),i("h4",{attrs:{id:"direction-主轴的方向"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#direction-主轴的方向"}},[t._v("#")]),t._v(" direction : 主轴的方向")]),t._v(" "),i("p",[t._v("direction 的类型是 Axis：")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",[t._v("Axis 的值")]),t._v(" "),i("th",[t._v("含义")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[t._v("Axis.horizontal")]),t._v(" "),i("td",[t._v("主轴方向为水平方向，那么 子 Widget 就会沿水平方向排列，交叉轴就是垂直方向。")])]),t._v(" "),i("tr",[i("td",[t._v("Axis.vertical")]),t._v(" "),i("td",[t._v("主轴方向为垂直方向，那么 子 Widget 就会沿垂直方向排列，交叉轴就是水平方向。")])])])]),t._v(" "),i("p",[i("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/3/30/169cde68c2cc5843?w=843&h=683&f=jpeg&s=61280",alt:""}})]),t._v(" "),i("h4",{attrs:{id:"mainaxisalignment-子-widget-在主轴的对齐方式"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#mainaxisalignment-子-widget-在主轴的对齐方式"}},[t._v("#")]),t._v(" mainAxisAlignment ：子 Widget 在主轴的对齐方式")]),t._v(" "),i("p",[t._v("mainAxisAlignment 的类型是 MainAxisAlignment：")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",[t._v("MainAxisAlignment 的值")]),t._v(" "),i("th",[t._v("含义")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[t._v("MainAxisAlignment.start")]),t._v(" "),i("td",[t._v("沿着主轴的起点对齐"),i("br"),t._v("textDirection 必须有值，以确定是从左边开始的还是从右边开始的")])]),t._v(" "),i("tr",[i("td",[t._v("MainAxisAlignment.end")]),t._v(" "),i("td",[t._v("沿着主轴的终点对齐"),i("br"),t._v("textDirection 必须有值，以确定是在左边结束的还是在右边结束的")])]),t._v(" "),i("tr",[i("td",[t._v("MainAxisAlignment.center")]),t._v(" "),i("td",[t._v("在主轴上居中对齐")])]),t._v(" "),i("tr",[i("td",[t._v("MainAxisAlignment.spaceBetween")]),t._v(" "),i("td",[t._v("在主轴上，两端对齐，项目之间的间隔都相等。")])]),t._v(" "),i("tr",[i("td",[t._v("MainAxisAlignment.spaceAround")]),t._v(" "),i("td",[t._v("在主轴上，将多余的控件均匀分布给 子 Widget 之间，而且第一个 子 Widget 和 最后一个子 Widget 距边框的距离是 两个 子 Widget 距离的一半")])]),t._v(" "),i("tr",[i("td",[t._v("MainAxisAlignment.spaceEvenly")]),t._v(" "),i("td",[t._v("在主轴上，将多余的控件均匀分布给 子 Widget 之间，而且第一个 子 Widget 和 最后一个子 Widget 距边框的距离和 子 Widget 之间的距离一样")])])])]),t._v(" "),i("p",[i("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/4/9/16a001d0d922566e?w=866&h=1098&f=jpeg&s=130256",alt:""}})]),t._v(" "),i("h4",{attrs:{id:"mainaxissize-表示主轴应该占用多大的空间"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#mainaxissize-表示主轴应该占用多大的空间"}},[t._v("#")]),t._v(" mainAxisSize : 表示主轴应该占用多大的空间")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",[t._v("MainAxisSize 的值")]),t._v(" "),i("th",[t._v("含义")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[t._v("MainAxisSize.min")]),t._v(" "),i("td",[t._v("主轴的大小是能显示完 子 Widget 的最小大小，主轴的大小就是 子 Widget 的大小")])]),t._v(" "),i("tr",[i("td",[t._v("MainAxisSize.max")]),t._v(" "),i("td",[t._v("主轴能显示的最大的大小，根据约束来判断")])])])]),t._v(" "),i("p",[t._v("紫色代表主轴占用的空间：")]),t._v(" "),i("p",[i("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/4/9/16a00183506751fd?w=860&h=594&f=jpeg&s=74057",alt:""}})]),t._v(" "),i("h4",{attrs:{id:"crossaxisalignment-表示-子-widget-在交叉轴的对齐方式"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#crossaxisalignment-表示-子-widget-在交叉轴的对齐方式"}},[t._v("#")]),t._v(" crossAxisAlignment ：表示 子 Widget 在交叉轴的对齐方式")]),t._v(" "),i("p",[t._v("crossAxisAlignment 的类型是 CrossAxisAlignment：")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",[t._v("CrossAxisAlignment 的值")]),t._v(" "),i("th",[t._v("含义")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[t._v("CrossAxisAlignment.start")]),t._v(" "),i("td",[t._v("沿着交叉轴的起点对齐"),i("br"),t._v("verticalDirection 必须有值，以确定是从左边开始的还是从右边开始的")])]),t._v(" "),i("tr",[i("td",[t._v("CrossAxisAlignment.end")]),t._v(" "),i("td",[t._v("沿着主轴的终点对齐"),i("br"),t._v("verticalDirection 必须有值，以确定是在左边结束的还是在右边结束的")])]),t._v(" "),i("tr",[i("td",[t._v("CrossAxisAlignment.center")]),t._v(" "),i("td",[t._v("在交叉轴上居中对齐")])]),t._v(" "),i("tr",[i("td",[t._v("CrossAxisAlignment.stretch")]),t._v(" "),i("td",[t._v("要求 子 Widget 在交叉轴上填满")])]),t._v(" "),i("tr",[i("td",[t._v("CrossAxisAlignment.baseline")]),t._v(" "),i("td",[t._v("要求 子 Widget 的基线在交叉轴上对齐")])])])]),t._v(" "),i("p",[i("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/4/9/16a001e173775b64?w=428&h=768&f=png&s=60682",alt:""}})]),t._v(" "),i("h4",{attrs:{id:"textdirection-表示-子-widget-在主轴方向上的布局顺序"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#textdirection-表示-子-widget-在主轴方向上的布局顺序"}},[t._v("#")]),t._v(" textDirection ：表示 子 Widget 在主轴方向上的布局顺序")]),t._v(" "),i("p",[t._v("textDirection 的类型是 TextDirection：")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",[t._v("TextDirection 的值")]),t._v(" "),i("th",[t._v("含义")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[t._v("TextDirection.rtl")]),t._v(" "),i("td",[t._v("表示从右到左")])]),t._v(" "),i("tr",[i("td",[t._v("TextDirection.ltr")]),t._v(" "),i("td",[t._v("表示从左到右")])])])]),t._v(" "),i("p",[i("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/4/9/16a00192951bfaeb?w=870&h=620&f=jpeg&s=69010",alt:""}})]),t._v(" "),i("h4",{attrs:{id:"verticaldirection-表示-子-widget-在交叉轴方向上的布局顺序"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#verticaldirection-表示-子-widget-在交叉轴方向上的布局顺序"}},[t._v("#")]),t._v(" verticalDirection ：表示 子 Widget 在交叉轴方向上的布局顺序")]),t._v(" "),i("p",[t._v("verticalDirection 的类型是 VerticalDirection：")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",[t._v("VerticalDirection 的值")]),t._v(" "),i("th",[t._v("含义")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[t._v("VerticalDirection.up")]),t._v(" "),i("td",[t._v("表示从下到上")])]),t._v(" "),i("tr",[i("td",[t._v("VerticalDirection.down")]),t._v(" "),i("td",[t._v("表示从上到下")])])])]),t._v(" "),i("p",[i("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/4/9/16a001a2fed97946?w=856&h=746&f=jpeg&s=74494",alt:""}})]),t._v(" "),i("h2",{attrs:{id:"flexible-与-expanded"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#flexible-与-expanded"}},[t._v("#")]),t._v(" Flexible 与 Expanded")]),t._v(" "),i("p",[t._v("如果当 Flex 里的内容过长，超过主轴的大小，例如如下的代码：")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("Flex(\n    direction: Axis.horizontal,\n    mainAxisAlignment: MainAxisAlignment.start,\n    children: <Widget>[\n      Text('Hello Flutter!Hello Flutter!Hello Flutter!Hello Flutter!Hello Flutter!Hello Flutter!Hello Flutter!Hello Flutter!')\n    ],\n)\n")])])]),i("p",[t._v("Flex 的主轴是水平方向，而 Text 里的内容太多，超过了屏幕的宽度，就会抛出 layout 错误：")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("A RenderFlex overflowed by 267 pixels on the right.\n")])])]),i("p",[t._v("界面上也会看到黑黄的条：")]),t._v(" "),i("p",[i("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/5/14/16ab3d210f9fd6a6?w=862&h=166&f=jpeg&s=34459",alt:""}})]),t._v(" "),i("p",[t._v("为了避免 子 Widget 在 Row、Column、Flex 中超界，就可以使用 Flexible 与 Expanded。Flexible 与 Expanded 可以让 Row、Column、Flex 的 子 Widget 具有弹性能力。")]),t._v(" "),i("p",[t._v("比如上面的例子用 Flexible 或 Expended 来改写：")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("  Flexible(\n    child: Text(\n        'Hello Flutter!Hello Flutter!Hello Flutter!Hello Flutter!Hello Flutter!Hello Flutter!Hello Flutter!Hello Flutter!'),\n  )\n")])])]),i("p",[t._v("或")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("  Expended(\n    child: Text(\n        'Hello Flutter!Hello Flutter!Hello Flutter!Hello Flutter!Hello Flutter!Hello Flutter!Hello Flutter!Hello Flutter!'),\n  )\n")])])]),i("p",[t._v("运行的效果如下：")]),t._v(" "),i("p",[i("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/5/14/16ab4a507477269b?w=856&h=320&f=jpeg&s=58921",alt:""}})]),t._v(" "),i("p",[t._v("用 Flexible 与 Expanded 来包 子 Widget，当 子 Widget 要超过主轴的大小时，会自动换行，但是 Flexible 与 Expanded 也有不同的地方，Expanded 是 Flexible 的子类。")]),t._v(" "),i("p",[t._v("Flexible 的构造函数为：")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("class Flexible extends ParentDataWidget<Flex> {\n  const Flexible({\n    Key key,\n    this.flex = 1,\n    this.fit = FlexFit.loose,\n    @required Widget child,\n  }) : super(key: key, child: child);\n  ...\n}\n")])])]),i("table",[i("thead",[i("tr",[i("th",[t._v("参数名字")]),t._v(" "),i("th",[t._v("参数类型")]),t._v(" "),i("th",[t._v("意义")]),t._v(" "),i("th",[t._v("必选 or 可选")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[t._v("key")]),t._v(" "),i("td",[t._v("Key")]),t._v(" "),i("td",[t._v("Widget 的标识")]),t._v(" "),i("td",[t._v("可选")])]),t._v(" "),i("tr",[i("td",[t._v("flex")]),t._v(" "),i("td",[t._v("int")]),t._v(" "),i("td",[t._v("此 Widget 的弹性因子")]),t._v(" "),i("td",[t._v("可选")])]),t._v(" "),i("tr",[i("td",[t._v("fit")]),t._v(" "),i("td",[t._v("FlexFit")]),t._v(" "),i("td",[t._v("如何分配 弹性 Widget 在可用空间里的大小")]),t._v(" "),i("td",[t._v("可选")])]),t._v(" "),i("tr",[i("td",[t._v("child")]),t._v(" "),i("td",[t._v("Widget")]),t._v(" "),i("td",[t._v("要显示的 Widget")]),t._v(" "),i("td",[t._v("必选")])])])]),t._v(" "),i("p",[t._v("Expanded 的构造函数为：")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("class Expanded extends Flexible {\n  /// Creates a widget that expands a child of a [Row], [Column], or [Flex]\n  /// expand to fill the available space in the main axis.\n  const Expanded({\n    Key key,\n    int flex = 1,\n    @required Widget child,\n  }) : super(key: key, flex: flex, fit: FlexFit.tight, child: child);\n}\n")])])]),i("table",[i("thead",[i("tr",[i("th",[t._v("参数名字")]),t._v(" "),i("th",[t._v("参数类型")]),t._v(" "),i("th",[t._v("意义")]),t._v(" "),i("th",[t._v("必选 or 可选")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[t._v("key")]),t._v(" "),i("td",[t._v("Key")]),t._v(" "),i("td",[t._v("Widget 的标识")]),t._v(" "),i("td",[t._v("可选")])]),t._v(" "),i("tr",[i("td",[t._v("flex")]),t._v(" "),i("td",[t._v("int")]),t._v(" "),i("td",[t._v("此 Widget 的弹性因子")]),t._v(" "),i("td",[t._v("可选")])]),t._v(" "),i("tr",[i("td",[t._v("child")]),t._v(" "),i("td",[t._v("Widget")]),t._v(" "),i("td",[t._v("要显示的 Widget")]),t._v(" "),i("td",[t._v("必选")])])])]),t._v(" "),i("p",[t._v("可以明显看到，Flexible 和 Expanded 的 fit 参数不同，Flexible 的 fit 是 FlexFit.loose，Expanded 的 fit 参数是 FlexFit.tight。所以，当还有剩余空间时，Expanded 会占满剩余的所有空间，而 Flexible 只会占用自身大小的空间。")]),t._v(" "),i("p",[t._v("这里举一个例子，当 Text 的内容不够长时：")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("  Flexible(\n    child: Container(\n      color: Colors.yellow,\n      child: Text('使用 Flexible 来包裹 子Widget'),\n    ),\n  ),\n")])])]),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("  Expanded(\n    child: Container(\n      color: Colors.yellow,\n      child: Text('使用 Expanded 来包裹 子Widget'),\n    ),\n  ),\n")])])]),i("p",[t._v("效果如下：")]),t._v(" "),i("p",[i("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/5/14/16ab4b04fb7adf76?w=860&h=396&f=jpeg&s=67145",alt:""}})]),t._v(" "),i("p",[t._v("Flexible 会占用自身大小，而 Expanded 会占满全屏幕。")]),t._v(" "),i("h3",{attrs:{id:"总结"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),i("p",[t._v("Flexible 与 Expanded 可以让 Row、Column、Flex 的 子 Widget 具有弹性能力，当 子 Widget 要超过主轴的大小时，会自动换行，当还有剩余空间时，Expanded 会占满剩余的所有空间，而 Flexible 只会占用自身大小的空间。")]),t._v(" "),i("h3",{attrs:{id:"fexible-和-expanded-的-flex-弹性系数"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#fexible-和-expanded-的-flex-弹性系数"}},[t._v("#")]),t._v(" Fexible 和 Expanded 的 flex 弹性系数")]),t._v(" "),i("p",[t._v("Fexible 和 Expanded 还有一个很重要的参数："),i("code",[t._v("flex")]),t._v("，flex 为弹性系数，其布局过程如下：")]),t._v(" "),i("ol",[i("li",[t._v("如果 flex 为 0 或 null，则 child 是没有弹性的，称为 非弹性子 Widget，非弹性子 Widget 的大小就是其本身的大小，不会被扩展去占用多余的空间。")]),t._v(" "),i("li",[t._v("如果 flex 大于 0，child 是有弹性的，称为 弹性子 Widget，首先会计算出第一步所有 flex 为 0 或 null 的 子 Widget 的大小，然后会会按照 弹性子 Widget 的 flex 占 所有弹性子 Widget 的 flex 总和 的比例来分割主轴的空闲空间。")])]),t._v(" "),i("h4",{attrs:{id:"flexible-的-flex-的使用"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#flexible-的-flex-的使用"}},[t._v("#")]),t._v(" Flexible 的 flex 的使用")]),t._v(" "),i("p",[t._v("Flexible 的 flex 的使用方式就是使用 Flexible 嵌套这些 Widget，然后设置 flex 的值：")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("Flexible(\n    flex: 1,\n    child: ...\n)\n")])])]),i("p",[t._v("Demo 如下：")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("Flex(\n    direction: Axis.horizontal,\n    mainAxisAlignment: MainAxisAlignment.start,\n    children: <Widget>[\n      Flexible(\n        flex: 1,\n        child: Container(\n          height: 30.0,\n          width: 30.0,\n          color: Colors.yellow,\n        ),\n      ),\n      Flexible(\n        flex: 2,\n        child: Container(\n          height: 30.0,\n          width: 30.0,\n          color: Colors.green,\n        ),\n      ),\n      Flexible(\n        flex: 1,\n        child: Container(\n          height: 30.0,\n          width: 30.0,\n          color: Colors.blue,\n        ),\n      ),\n    ],\n  ),\n")])])]),i("p",[t._v("使用 Flexible 包裹三个宽高都为 30 的色块，并设置 flex 为 1、2、1，效果如下：")]),t._v(" "),i("p",[i("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/5/14/16ab4c0388e777c8?w=852&h=150&f=jpeg&s=15837",alt:""}})]),t._v(" "),i("p",[t._v("因为 子 Widget 的宽度是固定的，所以 Flexible 只会占用本身的大小。")]),t._v(" "),i("h4",{attrs:{id:"expanded-的-flex-使用"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#expanded-的-flex-使用"}},[t._v("#")]),t._v(" Expanded 的 flex 使用")]),t._v(" "),i("p",[t._v("Expanded 的 flex 的使用方式就是使用 Expanded 嵌套这些 Widget，然后设置 flex 的值：")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("Expanded(\n    flex: 1,\n    child: ...\n)\n")])])]),i("p",[t._v("Demo 代码如下：")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("Flex(\n    direction: Axis.horizontal,\n    mainAxisAlignment: MainAxisAlignment.start,\n    children: <Widget>[\n      Expanded(\n        flex: 1,\n        child: Container(\n          height: 30.0,\n          width: 30.0,\n          color: Colors.yellow,\n        ),\n      ),\n      Expanded(\n        flex: 2,\n        child: Container(\n          height: 30.0,\n          width: 30.0,\n          color: Colors.green,\n        ),\n      ),\n      Expanded(\n        flex: 1,\n        child: Container(\n          height: 30.0,\n          width: 30.0,\n          color: Colors.blue,\n        ),\n      ),\n    ],\n  ),\n")])])]),i("p",[t._v("使用 Expanded 包裹三个宽高都为 30 的色块，并设置 flex 为 1、2、1，效果如下：")]),t._v(" "),i("p",[i("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/5/14/16ab4c396f5d1292?w=862&h=194&f=jpeg&s=19569",alt:""}})]),t._v(" "),i("p",[t._v("虽然三个色块的宽度是固定的，但是 Expanded 还是按照比例瓜分了剩余的全部空间。")])])}),[],!1,null,null,null);e.default=n.exports}}]);