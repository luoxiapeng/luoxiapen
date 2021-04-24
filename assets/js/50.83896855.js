(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{403:function(t,e,n){"use strict";n.r(e);var a=n(42),d=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"flutter-容器类-widget"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#flutter-容器类-widget"}},[t._v("#")]),t._v(" Flutter 容器类 Widget")]),t._v(" "),n("p",[t._v("容器类 Widget 不同于 布局类 Widget：")]),t._v(" "),n("ol",[n("li",[t._v("首先，布局类 Widget 的子 Widget 一般都是数组，而容器类 Widget 的子 Widget 一般只有一个。")]),t._v(" "),n("li",[t._v("布局类 Widget 是按照一定的排列方式对其 子 Widget 进行排列，而 容器类 Widget 用于嵌套其他 Widget，对 Widget 添加一些修饰（补白或背景色等）、变换(旋转或剪裁等)、或限制(大小等)。")])]),t._v(" "),n("div",{staticClass:"language-! extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("在前面使用 UI Widget 的时候，想必你已经发现，大部分 UI Widget 都不能指定宽高、设置内边距和外边距，这时候就需要使用 容器类Widget 了。\n")])])]),n("h1",{attrs:{id:"padding"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#padding"}},[t._v("#")]),t._v(" Padding")]),t._v(" "),n("p",[t._v("Padding 通过给自己指定内边距来添加 子 Widget。")]),t._v(" "),n("h2",{attrs:{id:"代码所在位置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#代码所在位置"}},[t._v("#")]),t._v(" 代码所在位置")]),t._v(" "),n("p",[t._v("flutter_widget_demo/lib/containers/PaddingWidget.dart")]),t._v(" "),n("h2",{attrs:{id:"padding-的-快速上手"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#padding-的-快速上手"}},[t._v("#")]),t._v(" Padding 的 快速上手")]),t._v(" "),n("p",[t._v("Padding 的必填参数是 padding，然后其 child 参数就是你想要添加 padding 的 Widget，例如：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("Padding(\n  padding: EdgeInsets.all(100),\n  child: Text('Hello Flutter'),\n)\n")])])]),n("p",[t._v("Padding 在一个页面使用的完整 Demo 如下：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("import 'package:flutter/material.dart';\n\nmain() => runApp(new PaddingWidget());\n\nclass PaddingWidget extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    return new MaterialApp(\n        title: 'Test',\n        home: new Scaffold(\n            appBar: new AppBar(title: new Text('Flutter 容器Widget -- Padding')),\n            body: Padding(\n              padding: EdgeInsets.all(100),\n              child: Text('Hello Flutter'),\n            )));\n  }\n}\n")])])]),n("p",[t._v("运行效果如下：")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/4/9/16a002b3007d4a1b?w=834&h=722&f=jpeg&s=56893",alt:""}})]),t._v(" "),n("h2",{attrs:{id:"padding-的构造函数及参数说明"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#padding-的构造函数及参数说明"}},[t._v("#")]),t._v(" Padding 的构造函数及参数说明")]),t._v(" "),n("p",[t._v("Padding 的构造函数为:")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("class Padding extends SingleChildRenderObjectWidget {\n  const Padding({\n    Key key,\n    @required this.padding,\n    Widget child,\n  }) : assert(padding != null),\n       super(key: key, child: child);\n    ...\n}\n")])])]),n("table",[n("thead",[n("tr",[n("th",[t._v("参数名字")]),t._v(" "),n("th",[t._v("参数类型")]),t._v(" "),n("th",[t._v("意义")]),t._v(" "),n("th",[t._v("必选 or 可选")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("key")]),t._v(" "),n("td",[t._v("Key")]),t._v(" "),n("td",[t._v("Widget 的标识")]),t._v(" "),n("td",[t._v("可选")])]),t._v(" "),n("tr",[n("td",[t._v("padding")]),t._v(" "),n("td",[t._v("EdgeInsetsGeometry")]),t._v(" "),n("td",[t._v("容器内边距")]),t._v(" "),n("td",[t._v("必选")])]),t._v(" "),n("tr",[n("td",[t._v("child")]),t._v(" "),n("td",[t._v("Widget")]),t._v(" "),n("td",[t._v("容器里显示的 Widget")]),t._v(" "),n("td",[t._v("可选")])])])]),t._v(" "),n("h4",{attrs:{id:"padding-容器内边距"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#padding-容器内边距"}},[t._v("#")]),t._v(" padding：容器内边距")]),t._v(" "),n("p",[t._v("padding 的类型是 EdgeInsetsGeometry，EdgeInsetsGeometry 是抽象类，我们一般使用 EdgeInsets：")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("EdgeInsets 的值")]),t._v(" "),n("th",[t._v("含义")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("EdgeInsets.all(double value)")]),t._v(" "),n("td",[t._v("上、下、左、右 边距都一样")])]),t._v(" "),n("tr",[n("td",[t._v("EdgeInsets.only({this.left = 0.0,this.top = 0.0,this.right = 0.0,this.bottom = 0.0})")]),t._v(" "),n("td",[t._v("可以单独指定一个的边距")])]),t._v(" "),n("tr",[n("td",[t._v("EdgeInsets.symmetric({double vertical = 0.0,double horizontal = 0.0,})")]),t._v(" "),n("td",[t._v("vertical 的值是上、下边距， horizontal 是左右边距的值")])])])]),t._v(" "),n("h1",{attrs:{id:"container"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#container"}},[t._v("#")]),t._v(" Container")]),t._v(" "),n("p",[t._v("Container 是一个拥有绘制、定位、调整大小的 Widget。")]),t._v(" "),n("h2",{attrs:{id:"代码所在位置-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#代码所在位置-2"}},[t._v("#")]),t._v(" 代码所在位置")]),t._v(" "),n("p",[t._v("flutter_widget_demo/lib/containers/ContainerWidget.dart")]),t._v(" "),n("h2",{attrs:{id:"container-的快速上手"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#container-的快速上手"}},[t._v("#")]),t._v(" Container 的快速上手")]),t._v(" "),n("p",[t._v("Container 可以为 Widget 添加大小、背景等各种参数，其 child 参数就是你想要添加 Container 的 Widget，例如：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("Container(\n    child:\n        ...\n)\n")])])]),n("p",[t._v("Container 在一个页面使用的完整 Demo 如下：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("import 'package:flutter/material.dart';\n\nmain() => runApp(new ContainerWidget());\n\nclass ContainerWidget extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    return new MaterialApp(\n        title: 'Test',\n        home: new Scaffold(\n            appBar:\n                new AppBar(title: new Text('Flutter 容器Widget -- Container')),\n            body: Container(\n              margin: EdgeInsets.only(top: 50.0, left: 120.0), //容器外补白\n              constraints:\n                  BoxConstraints.tightFor(width: 200.0, height: 150.0), //卡片大小\n              decoration: BoxDecoration(\n                  //背景装饰\n                  gradient: RadialGradient(\n                      //背景径向渐变\n                      colors: [Colors.green, Colors.blue],\n                      center: Alignment.topLeft,\n                      radius: .98),\n                  boxShadow: [\n                    //卡片阴影\n                    BoxShadow(\n                        color: Colors.black54,\n                        offset: Offset(2.0, 2.0),\n                        blurRadius: 4.0)\n                  ]),\n              transform: Matrix4.rotationZ(.2), //卡片倾斜变换\n              alignment: Alignment.center, //卡片内文字居中\n              child: Text(\n                //卡片文字\n                \"Hello Flutter\",\n                style: TextStyle(color: Colors.white, fontSize: 40.0),\n              ),\n            )));\n  }\n}\n")])])]),n("p",[t._v("运行效果如下：")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/4/9/16a002bf22b876bd?w=862&h=772&f=jpeg&s=78703",alt:""}})]),t._v(" "),n("h2",{attrs:{id:"container-的构造函数及参数说明"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#container-的构造函数及参数说明"}},[t._v("#")]),t._v(" Container 的构造函数及参数说明")]),t._v(" "),n("p",[t._v("Container 的构造函数为：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("class Container extends StatelessWidget {\n  Container({\n    Key key,\n    this.alignment,\n    this.padding,\n    Color color,\n    Decoration decoration,\n    this.foregroundDecoration,\n    double width,\n    double height,\n    BoxConstraints constraints,\n    this.margin,\n    this.transform,\n    this.child,\n  }) :\n  ...\n}\n")])])]),n("table",[n("thead",[n("tr",[n("th",[t._v("参数名字")]),t._v(" "),n("th",[t._v("参数类型")]),t._v(" "),n("th",[t._v("意义")]),t._v(" "),n("th",[t._v("必选 or 可选")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("key")]),t._v(" "),n("td",[t._v("Key")]),t._v(" "),n("td",[t._v("Widget 的标识")]),t._v(" "),n("td",[t._v("可选")])]),t._v(" "),n("tr",[n("td",[t._v("alignment")]),t._v(" "),n("td",[t._v("AlignmentGeometry")]),t._v(" "),n("td",[t._v("容器内 child 的对齐方式")]),t._v(" "),n("td",[t._v("可选")])]),t._v(" "),n("tr",[n("td",[t._v("padding")]),t._v(" "),n("td",[t._v("EdgeInsetsGeometry")]),t._v(" "),n("td",[t._v("容器内边距")]),t._v(" "),n("td",[t._v("可选")])]),t._v(" "),n("tr",[n("td",[t._v("color")]),t._v(" "),n("td",[t._v("Color")]),t._v(" "),n("td",[t._v("容器的背景色")]),t._v(" "),n("td",[t._v("可选")])]),t._v(" "),n("tr",[n("td",[t._v("decoration")]),t._v(" "),n("td",[t._v("Decoration")]),t._v(" "),n("td",[t._v("容器的背景装饰")]),t._v(" "),n("td",[t._v("可选")])]),t._v(" "),n("tr",[n("td",[t._v("foregroundDecoration")]),t._v(" "),n("td",[t._v("Decoration")]),t._v(" "),n("td",[t._v("容器的前景装饰")]),t._v(" "),n("td",[t._v("可选")])]),t._v(" "),n("tr",[n("td",[t._v("width")]),t._v(" "),n("td",[t._v("double")]),t._v(" "),n("td",[t._v("容器的宽度")]),t._v(" "),n("td",[t._v("可选")])]),t._v(" "),n("tr",[n("td",[t._v("height")]),t._v(" "),n("td",[t._v("double")]),t._v(" "),n("td",[t._v("容器的高度")]),t._v(" "),n("td",[t._v("可选")])]),t._v(" "),n("tr",[n("td",[t._v("constraints")]),t._v(" "),n("td",[t._v("BoxConstraints")]),t._v(" "),n("td",[t._v("容器的大小限制")]),t._v(" "),n("td",[t._v("可选")])]),t._v(" "),n("tr",[n("td",[t._v("margin")]),t._v(" "),n("td",[t._v("EdgeInsetsGeometry")]),t._v(" "),n("td",[t._v("容器外边距")]),t._v(" "),n("td",[t._v("可选")])]),t._v(" "),n("tr",[n("td",[t._v("transform")]),t._v(" "),n("td",[t._v("Matrix4")]),t._v(" "),n("td",[t._v("容器的变化")]),t._v(" "),n("td",[t._v("可选")])]),t._v(" "),n("tr",[n("td",[t._v("child")]),t._v(" "),n("td",[t._v("Widget")]),t._v(" "),n("td",[t._v("容器里显示的 Widget")]),t._v(" "),n("td",[t._v("可选")])])])]),t._v(" "),n("h1",{attrs:{id:"align"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#align"}},[t._v("#")]),t._v(" Align")]),t._v(" "),n("p",[t._v("Align 可以控制其 子 Widget 的对齐方式，并可以根据 子 Widget 的大小自动调整自己的大小。")]),t._v(" "),n("h2",{attrs:{id:"代码所在位置-3"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#代码所在位置-3"}},[t._v("#")]),t._v(" 代码所在位置")]),t._v(" "),n("p",[t._v("flutter_widget_demo/lib/containers/AlignWidget.dart")]),t._v(" "),n("h2",{attrs:{id:"align-的快速上手"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#align-的快速上手"}},[t._v("#")]),t._v(" Align 的快速上手")]),t._v(" "),n("p",[t._v("Align 可以为 Widget 添加对齐方式，其 child 参数就是你想要添加 Align 的 Widget，例如：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("Align(\n  alignment: Alignment.topRight,\n  child: Text(\n    'Hello Flutter',\n    style: TextStyle(color: Colors.red, fontSize: 50),\n  ),\n )\n")])])]),n("p",[t._v("Align 在一个页面使用的完整 Demo 如下：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("import 'package:flutter/material.dart';\n\nmain() => runApp(new AlignWidget());\n\nclass AlignWidget extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    return new MaterialApp(\n        title: 'Test',\n        home: new Scaffold(\n            appBar: new AppBar(title: new Text('Flutter 容器Widget -- Align')),\n            body: Align(\n              alignment: Alignment.topRight,\n              child: Text(\n                'Hello Flutter',\n                style: TextStyle(color: Colors.red, fontSize: 50),\n              ),\n            )));\n  }\n}\n")])])]),n("p",[t._v("运行效果为：")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/4/9/16a002ca3e1dd49e?w=854&h=610&f=jpeg&s=65116",alt:""}})]),t._v(" "),n("h2",{attrs:{id:"align-的构造函数及参数说明"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#align-的构造函数及参数说明"}},[t._v("#")]),t._v(" Align 的构造函数及参数说明")]),t._v(" "),n("p",[t._v("Align 的构造函数为：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("class Align extends SingleChildRenderObjectWidget {\n  const Align({\n    Key key,\n    this.alignment = Alignment.center,\n    this.widthFactor,\n    this.heightFactor,\n    Widget child\n  }) : assert(alignment != null),\n       assert(widthFactor == null || widthFactor >= 0.0),\n       assert(heightFactor == null || heightFactor >= 0.0),\n       super(key: key, child: child);\n    ...\n}\n")])])]),n("table",[n("thead",[n("tr",[n("th",[t._v("参数名字")]),t._v(" "),n("th",[t._v("参数类型")]),t._v(" "),n("th",[t._v("意义")]),t._v(" "),n("th",[t._v("必选 or 可选")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("key")]),t._v(" "),n("td",[t._v("Key")]),t._v(" "),n("td",[t._v("Widget 的标识")]),t._v(" "),n("td",[t._v("可选")])]),t._v(" "),n("tr",[n("td",[t._v("alignment")]),t._v(" "),n("td",[t._v("Alignment")]),t._v(" "),n("td",[t._v("容器内 child 的对齐方式")]),t._v(" "),n("td",[t._v("可选")])]),t._v(" "),n("tr",[n("td",[t._v("widthFactor")]),t._v(" "),n("td",[t._v("double")]),t._v(" "),n("td",[t._v("宽度因子。如果没有设置，则 Align 的宽度就是 match_parent；如果为 非 null，则将容器的宽度设置为 子 Widget 的宽度 乘以此宽度因子"),n("br"),t._v("值必须>=0")]),t._v(" "),n("td",[t._v("可选")])]),t._v(" "),n("tr",[n("td",[t._v("heightFactor")]),t._v(" "),n("td",[t._v("double")]),t._v(" "),n("td",[t._v("高度因子。如果没有设置，则 Align 的高度就是 match_parent；如果为 非 null，则将容器的高度设置为 子 Widget 的高度 乘以此高度因子"),n("br"),t._v("值必须>=0")]),t._v(" "),n("td",[t._v("可选")])]),t._v(" "),n("tr",[n("td",[t._v("child")]),t._v(" "),n("td",[t._v("Widget")]),t._v(" "),n("td",[t._v("容器里显示的 Widget")]),t._v(" "),n("td",[t._v("可选")])])])]),t._v(" "),n("h1",{attrs:{id:"center"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#center"}},[t._v("#")]),t._v(" Center")]),t._v(" "),n("p",[t._v("Center 可以将其 子 Widget 居中显示在自身内部。Center 继承自 Align，其实就是 alignment 为 Alignment.center 的 Align。")]),t._v(" "),n("h2",{attrs:{id:"代码所在位置-4"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#代码所在位置-4"}},[t._v("#")]),t._v(" 代码所在位置")]),t._v(" "),n("p",[t._v("flutter_widget_demo/lib/containers/CenterWidget.dart")]),t._v(" "),n("h2",{attrs:{id:"center-的快速上手"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#center-的快速上手"}},[t._v("#")]),t._v(" Center 的快速上手")]),t._v(" "),n("p",[t._v("Center 可以让 Widget 居中，其 child 参数就是你想要居中的 Widget，例如：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("Center(\n  child: Text(\n    'Hello Flutter',\n    style: TextStyle(color: Colors.red, fontSize: 50),\n  ),\n)\n")])])]),n("p",[t._v("Center 在一个页面使用的完整 Demo 如下：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("import 'package:flutter/material.dart';\n\nmain() => runApp(new CenterWidget());\n\nclass CenterWidget extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    return new MaterialApp(\n        title: 'Test',\n        home: new Scaffold(\n            appBar: new AppBar(title: new Text('Flutter 容器Widget -- Center')),\n            body: Center(\n              child: Text(\n                'Hello Flutter',\n                style: TextStyle(color: Colors.red, fontSize: 50),\n              ),\n            )));\n  }\n}\n")])])]),n("p",[t._v("运行效果为：")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/4/9/16a002d87b5f9bcb?w=428&h=768&f=png&s=45164",alt:""}})]),t._v(" "),n("h2",{attrs:{id:"center-的构造函数及参数说明"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#center-的构造函数及参数说明"}},[t._v("#")]),t._v(" Center 的构造函数及参数说明")]),t._v(" "),n("p",[t._v("Center 的构造函数为：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("class Center extends Align {\n  /// Creates a widget that centers its child.\n  const Center({ Key key, double widthFactor, double heightFactor, Widget child })\n    : super(key: key, widthFactor: widthFactor, heightFactor: heightFactor, child: child);\n}\n")])])]),n("table",[n("thead",[n("tr",[n("th",[t._v("参数名字")]),t._v(" "),n("th",[t._v("参数类型")]),t._v(" "),n("th",[t._v("意义")]),t._v(" "),n("th",[t._v("必选 or 可选")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("key")]),t._v(" "),n("td",[t._v("Key")]),t._v(" "),n("td",[t._v("Widget 的标识")]),t._v(" "),n("td",[t._v("可选")])]),t._v(" "),n("tr",[n("td",[t._v("widthFactor")]),t._v(" "),n("td",[t._v("double")]),t._v(" "),n("td",[t._v("宽度因子。如果没有设置，则 Align 的宽度就是 match_parent；如果为 非 null，则将容器的宽度设置为 子 Widget 的宽度 乘以此宽度因子"),n("br"),t._v("值必须>=0")]),t._v(" "),n("td",[t._v("可选")])]),t._v(" "),n("tr",[n("td",[t._v("heightFactor")]),t._v(" "),n("td",[t._v("double")]),t._v(" "),n("td",[t._v("高度因子。如果没有设置，则 Align 的高度就是 match_parent；如果为 非 null，则将容器的高度设置为 子 Widget 的高度 乘以此高度因子"),n("br"),t._v("值必须>=0")]),t._v(" "),n("td",[t._v("可选")])]),t._v(" "),n("tr",[n("td",[t._v("child")]),t._v(" "),n("td",[t._v("Widget")]),t._v(" "),n("td",[t._v("容器里显示的 Widget")]),t._v(" "),n("td",[t._v("可选")])])])])])}),[],!1,null,null,null);e.default=d.exports}}]);