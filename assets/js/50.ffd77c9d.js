(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{416:function(t,e,o){"use strict";o.r(e);var n=o(1),a=Object(n.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"flutter-基础-widget-bottomsheet"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#flutter-基础-widget-bottomsheet"}},[t._v("#")]),t._v(" Flutter 基础 Widget —— BottomSheet")]),t._v(" "),o("p",[t._v("本节讲 Flutter "),o("a",{attrs:{href:"https://docs.flutter.io/flutter/material/BottomSheet-class.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("BottomSheet"),o("OutboundLink")],1),t._v(" 的使用。")]),t._v(" "),o("p",[t._v("BottomSheet 是从底部弹出来的对话框，总共分为两种，而且每种的使用方式都不同：")]),t._v(" "),o("ol",[o("li",[o("p",[t._v("PersistentBottomSheet：持续的底部对话框")]),t._v(" "),o("p",[t._v("持续的 BottomSheet，当 BottomSheet 弹出时，会一直覆盖在 APP 的界面上，而且背景是透明的，所以你还可以和界面有其他交互，且点击背景不能让 PersistentBottomSheet 消失。除非点击返回，PersistentBottomSheet 才会消失。")]),t._v(" "),o("p",[t._v("PersistentBottomSheet 的创建和显示的方法：")]),t._v(" "),o("ul",[o("li",[t._v("可以用 Scaffold 的 "),o("code",[t._v("showBottomSheet()")]),t._v(" 方法")]),t._v(" "),o("li",[t._v("也可以设置 Scaffold 的 "),o("code",[t._v("bottomSheet")]),t._v(" 参数。")])])]),t._v(" "),o("li",[o("p",[t._v("ModalBottomSheet：有半透明背景的对话框")]),t._v(" "),o("p",[t._v("ModalBottomSheet 类似一个 Dialog，有一个半透明的背景层，点击背景，ModalBottomSheet 会消失。")]),t._v(" "),o("p",[t._v("ModalBottomSheet 的创建和显示的方法：")]),t._v(" "),o("ul",[o("li",[t._v("只能使用 "),o("code",[t._v("showModalBottomSheet()")]),t._v(" 方法。")])])])]),t._v(" "),o("div",{staticClass:"language-! extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("在使用显示 BottomSheet 的方法的时候，必须要注意这些方法只能在 Scaffold 的 子Widget 里使用，因为这些方法需要用到 Scaffold 的 Context，如果和 Scaffold 在同一层，那么就要使用 Builder。\n")])])]),o("h2",{attrs:{id:"bottomsheet"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#bottomsheet"}},[t._v("#")]),t._v(" BottomSheet")]),t._v(" "),o("p",[t._v("这里先介绍一下 BottomSheet，然后在介绍使用方法。")]),t._v(" "),o("h2",{attrs:{id:"bottomsheet-的构造函数及参数说明"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#bottomsheet-的构造函数及参数说明"}},[t._v("#")]),t._v(" BottomSheet 的构造函数及参数说明")]),t._v(" "),o("p",[t._v("BottomSheet 的构造函数为：")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("class BottomSheet extends StatefulWidget {\n  const BottomSheet({\n    Key key,\n    this.animationController,\n    this.enableDrag = true,\n    this.elevation = 0.0,\n    @required this.onClosing,\n    @required this.builder\n  })\n  ...\n}\n")])])]),o("table",[o("thead",[o("tr",[o("th",[t._v("参数名字")]),t._v(" "),o("th",[t._v("参数类型")]),t._v(" "),o("th",[t._v("意义")]),t._v(" "),o("th",[t._v("必选 or 可选")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[t._v("key")]),t._v(" "),o("td",[t._v("Key")]),t._v(" "),o("td",[t._v("Widget 的标识")]),t._v(" "),o("td",[t._v("可选")])]),t._v(" "),o("tr",[o("td",[t._v("animationController")]),t._v(" "),o("td",[t._v("AnimationController")]),t._v(" "),o("td",[t._v("控制 BottomSheet 的动画")]),t._v(" "),o("td",[t._v("可选")])]),t._v(" "),o("tr",[o("td",[t._v("enableDrag")]),t._v(" "),o("td",[t._v("bool")]),t._v(" "),o("td",[t._v("BottomSheet 是否可以拖动"),o("br"),t._v("默认为 true，可以向上拖、向下拖或者向下滑动关闭 BottomSheet")]),t._v(" "),o("td",[t._v("可选")])]),t._v(" "),o("tr",[o("td",[t._v("elevation")]),t._v(" "),o("td",[t._v("double")]),t._v(" "),o("td",[t._v("BottomSheet 相对于其父级放置的 z 坐标，这可以控制 BottomSheet 的阴影大小"),o("br"),t._v("默认值为 0.0，该值必须>=0")]),t._v(" "),o("td",[t._v("可选")])]),t._v(" "),o("tr",[o("td",[t._v("onClosing")]),t._v(" "),o("td",[t._v("VoidCallback")]),t._v(" "),o("td",[t._v("当 BottomSheet 关闭的时候调用"),o("br"),t._v("这个事件可能会多次调用")]),t._v(" "),o("td",[t._v("必选")])]),t._v(" "),o("tr",[o("td",[t._v("builder")]),t._v(" "),o("td",[t._v("WidgetBuilder")]),t._v(" "),o("td",[t._v("BottomSheet 要显示的内容")]),t._v(" "),o("td",[t._v("必选")])])])]),t._v(" "),o("h1",{attrs:{id:"persistentbottomsheet-持续的底部对话框"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#persistentbottomsheet-持续的底部对话框"}},[t._v("#")]),t._v(" PersistentBottomSheet：持续的底部对话框")]),t._v(" "),o("p",[t._v("PersistentBottomSheet 的创建和显示的方法：")]),t._v(" "),o("ol",[o("li",[t._v("可以用 Scaffold 的 "),o("code",[t._v("showBottomSheet()")]),t._v(" 方法")]),t._v(" "),o("li",[t._v("也可以设置 Scaffold 的 "),o("code",[t._v("bottomSheet")]),t._v(" 参数。")])]),t._v(" "),o("h2",{attrs:{id:"_1-showbottomsheet"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_1-showbottomsheet"}},[t._v("#")]),t._v(" 1. showBottomSheet()")]),t._v(" "),o("h4",{attrs:{id:"代码所在位置"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#代码所在位置"}},[t._v("#")]),t._v(" 代码所在位置")]),t._v(" "),o("p",[t._v("flutter_widget_demo/lib/bottomsheet/ShowPersistentBottomSheetWidget.dart")]),t._v(" "),o("h4",{attrs:{id:"showbottomsheet-方法的定义及参数说明"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#showbottomsheet-方法的定义及参数说明"}},[t._v("#")]),t._v(" showBottomSheet() 方法的定义及参数说明")]),t._v(" "),o("p",[t._v("showBottomSheet() 方法的定义为:")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("PersistentBottomSheetController<T> showBottomSheet<T>({\n  @required BuildContext context,\n  @required WidgetBuilder builder,\n}) {\n  assert(context != null);\n  assert(builder != null);\n  return Scaffold.of(context).showBottomSheet<T>(builder);\n}\n")])])]),o("table",[o("thead",[o("tr",[o("th",[t._v("参数名字")]),t._v(" "),o("th",[t._v("参数类型")]),t._v(" "),o("th",[t._v("意义")]),t._v(" "),o("th",[t._v("必选 or 可选")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[t._v("context")]),t._v(" "),o("td",[t._v("BuildContext")]),t._v(" "),o("td",[t._v("应用上下文")]),t._v(" "),o("td",[t._v("必选")])]),t._v(" "),o("tr",[o("td",[t._v("builder")]),t._v(" "),o("td",[t._v("WidgetBuilder")]),t._v(" "),o("td",[t._v("要显示的 BottomSheet")]),t._v(" "),o("td",[t._v("必选")])])])]),t._v(" "),o("h4",{attrs:{id:"showbottomsheet-的使用"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#showbottomsheet-的使用"}},[t._v("#")]),t._v(" showBottomSheet() 的使用")]),t._v(" "),o("p",[t._v("showBottomSheet() 使用的完整 Demo 如下：")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("import 'package:flutter/material.dart';\n\nmain() => runApp(new ShowPersistentBottomSheetWidget());\n\nclass ShowPersistentBottomSheetWidget extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    return new MaterialApp(\n      title: 'Test',\n      home: new Scaffold(\n          appBar:\n              new AppBar(title: new Text('Flutter UI Widget -- BottomSheet')),\n          body: Builder(\n            builder: (context) {\n              return RaisedButton(\n                onPressed: () {\n                  showBottomSheet(\n                      context: context,\n                      builder: (context) => BottomSheet(\n                          onClosing: () {},\n                          builder: (context) => Container(\n                                height: 200.0,\n                                color: Colors.blue,\n                                child: Center(\n                                  child: RaisedButton(\n                                    onPressed: () {\n                                      Navigator.of(context).pop();\n                                    },\n                                    child: Text('dismissBottomSheet'),\n                                  ),\n                                ),\n                              )));\n                },\n                child: Text('showBottomSheet'),\n              );\n            },\n          )),\n    );\n  }\n}\n")])])]),o("p",[t._v("运行后的效果为：")]),t._v(" "),o("p",[o("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/4/9/16a000c0850831a0?w=428&h=768&f=png&s=47145",alt:""}})]),t._v(" "),o("ul",[o("li",[o("p",[t._v("PersistentBottomSheet 的关闭")]),t._v(" "),o("p",[t._v("PersistentBottomSheet 出现时,TitleBar 的右上角会多一个返回的按钮，可以关闭 PersistentBottomSheet，因为 PersistentBottomSheet 无法通过点击背景关闭。")]),t._v(" "),o("p",[t._v("或者在 BottomSheet 里使用 "),o("code",[t._v("Navigator.of(context).pop();")]),t._v(" 来关闭 PersistentBottomSheet。")])])]),t._v(" "),o("h2",{attrs:{id:"_2-scaffold-的-bottomsheet-参数"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_2-scaffold-的-bottomsheet-参数"}},[t._v("#")]),t._v(" 2. Scaffold 的 bottomSheet 参数")]),t._v(" "),o("p",[t._v("就是直接给 Scaffold 的 bottomSheet 参数赋 BottomSheet 的实例，这样 Scaffold 一创建的时候就会显示 BottomSheet。")]),t._v(" "),o("h4",{attrs:{id:"代码所在位置-2"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#代码所在位置-2"}},[t._v("#")]),t._v(" 代码所在位置")]),t._v(" "),o("p",[t._v("flutter_widget_demo/lib/bottomsheet/PersistentBottomSheetWidgetWidget.dart")]),t._v(" "),o("h4",{attrs:{id:"bottomsheet-的使用"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#bottomsheet-的使用"}},[t._v("#")]),t._v(" bottomSheet 的使用")]),t._v(" "),o("p",[t._v("完整 Demo 如下：")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("import 'package:flutter/material.dart';\n\nmain() => runApp(new PersistentBottomSheetWidgetWidget());\n\nclass PersistentBottomSheetWidgetWidget extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    return new MaterialApp(\n      title: 'Test',\n      home: new Scaffold(\n        appBar: new AppBar(title: new Text('Flutter UI Widget -- BottomSheet')),\n        body: Builder(\n          builder: (context) {\n            return RaisedButton(\n              onPressed: () {},\n              child: Text('showBottomSheet'),\n            );\n          },\n        ),\n        bottomSheet: BottomSheet(\n            onClosing: () {},\n            builder: (context) => Container(\n                  height: 200.0,\n                  color: Colors.blue,\n                  child: Center(\n                    child: RaisedButton(\n                      onPressed: () {\n                        Navigator.of(context).pop();\n                      },\n                      child: Text('dismissBottomSheet'),\n                    ),\n                  ),\n                )),\n      ),\n    );\n  }\n}\n")])])]),o("p",[t._v("运行效果和上面的一样。")]),t._v(" "),o("h1",{attrs:{id:"modalbottomsheet-有半透明背景的对话框"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#modalbottomsheet-有半透明背景的对话框"}},[t._v("#")]),t._v(" ModalBottomSheet：有半透明背景的对话框")]),t._v(" "),o("p",[t._v("ModalBottomSheet 的创建和显示的方法：")]),t._v(" "),o("ul",[o("li",[t._v("只能使用 "),o("code",[t._v("showModalBottomSheet()")]),t._v(" 方法。")])]),t._v(" "),o("h4",{attrs:{id:"代码所在位置-3"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#代码所在位置-3"}},[t._v("#")]),t._v(" 代码所在位置")]),t._v(" "),o("p",[t._v("flutter_widget_demo/lib/bottomsheet/ShowModalBottomSheetWidget.dart")]),t._v(" "),o("h2",{attrs:{id:"showmodalbottomsheet-方法的定义及参数说明"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#showmodalbottomsheet-方法的定义及参数说明"}},[t._v("#")]),t._v(" showModalBottomSheet() 方法的定义及参数说明")]),t._v(" "),o("p",[t._v("showModalBottomSheet() 方法的定义如下：")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("Future<T> showModalBottomSheet<T>({\n  @required BuildContext context,\n  @required WidgetBuilder builder,\n}) {\n  assert(context != null);\n  assert(builder != null);\n  assert(debugCheckHasMaterialLocalizations(context));\n  return Navigator.push(context, _ModalBottomSheetRoute<T>(\n    builder: builder,\n    theme: Theme.of(context, shadowThemeOnly: true),\n    barrierLabel: MaterialLocalizations.of(context).modalBarrierDismissLabel,\n  ));\n}\n")])])]),o("table",[o("thead",[o("tr",[o("th",[t._v("参数名字")]),t._v(" "),o("th",[t._v("参数类型")]),t._v(" "),o("th",[t._v("意义")]),t._v(" "),o("th",[t._v("必选 or 可选")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[t._v("context")]),t._v(" "),o("td",[t._v("BuildContext")]),t._v(" "),o("td",[t._v("应用上下文")]),t._v(" "),o("td",[t._v("必选")])]),t._v(" "),o("tr",[o("td",[t._v("builder")]),t._v(" "),o("td",[t._v("WidgetBuilder")]),t._v(" "),o("td",[t._v("要显示的 BottomSheet")]),t._v(" "),o("td",[t._v("必选")])])])]),t._v(" "),o("h4",{attrs:{id:"showmodalbottomsheet-的使用"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#showmodalbottomsheet-的使用"}},[t._v("#")]),t._v(" showModalBottomSheet() 的使用")]),t._v(" "),o("p",[t._v("可以看到 showModalBottomSheet() 和 showBottomSheet() 的参数一样，所以使用方法也一样，直接把第一个 Demo 里的方法名替换为 showModalBottomSheet()。")]),t._v(" "),o("p",[t._v("完整 Demo 如下：")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("import 'package:flutter/material.dart';\n\nmain() => runApp(new ShowModalBottomSheetWidget());\n\nclass ShowModalBottomSheetWidget extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    return new MaterialApp(\n      title: 'Test',\n      home: new Scaffold(\n          appBar:\n              new AppBar(title: new Text('Flutter UI Widget -- BottomSheet')),\n          body: Builder(\n            builder: (context) {\n              return RaisedButton(\n                onPressed: () {\n                  showModalBottomSheet(\n                      context: context,\n                      builder: (context) => BottomSheet(\n                          onClosing: () {},\n                          builder: (context) => Container(\n                                height: 200.0,\n                                color: Colors.blue,\n                                child: Center(\n                                  child: RaisedButton(\n                                    onPressed: () {\n                                      Navigator.of(context).pop();\n                                    },\n                                    child: Text('dismissBottomSheet'),\n                                  ),\n                                ),\n                              )));\n                },\n                child: Text('showBottomSheet'),\n              );\n            },\n          )),\n    );\n  }\n}\n")])])]),o("p",[t._v("运行效果为：")]),t._v(" "),o("p",[o("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/4/9/16a000c84b8fe2bc?w=428&h=768&f=png&s=42081",alt:""}})]),t._v(" "),o("p",[t._v("可以看到 ModalBottomSheet 弹出来时，背景是半透明的，点击半透明的背景也能关闭 ModalBottomSheet。")])])}),[],!1,null,null,null);e.default=a.exports}}]);