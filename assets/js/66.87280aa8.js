(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{432:function(e,t,a){"use strict";a.r(t);var r=a(1),i=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"flutter-功能类-widget"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flutter-功能类-widget"}},[e._v("#")]),e._v(" Flutter 功能类 Widget")]),e._v(" "),a("p",[e._v("功能类 Widget 指的是 非 UI Widget，具有一定功能的 Widget。Flutter 中功能类 Widget 有很多，本节主要讲如下的功能类 Widget：")]),e._v(" "),a("ul",[a("li",[e._v("Theme")]),e._v(" "),a("li",[e._v("MediaQuery")]),e._v(" "),a("li",[e._v("Navigator")]),e._v(" "),a("li",[e._v("InheritedWidget")])]),e._v(" "),a("h1",{attrs:{id:"theme"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#theme"}},[e._v("#")]),e._v(" Theme")]),e._v(" "),a("p",[e._v("Theme Widget 的功能是为 MaterialApp 定义主题数据，如导航栏颜色、标题字体、Icon 样式。")]),e._v(" "),a("h2",{attrs:{id:"theme-在-materialapp-中的位置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#theme-在-materialapp-中的位置"}},[e._v("#")]),e._v(" Theme 在 MaterialApp 中的位置")]),e._v(" "),a("p",[e._v("在看代码的时候，你可能没有看到 Theme 的使用，实际上是在使用 MaterialApp 时，会自动将 Theme Widget 加上去：")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/4/23/16a491ba82426b99?w=433&h=289&f=png&s=4438",alt:""}})]),e._v(" "),a("p",[e._v("Theme 会嵌套 MaterialApp。")]),e._v(" "),a("h2",{attrs:{id:"在-flutter-中获取-theme-的实例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在-flutter-中获取-theme-的实例"}},[e._v("#")]),e._v(" 在 Flutter 中获取 Theme 的实例")]),e._v(" "),a("p",[e._v("要想在 Flutter 中获取 Theme 的实例，首先 根 Widget 必须是 MaterialApp，然后在 MaterialApp 的 子 Widget 里运行：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Theme.of(context);\n")])])]),a("p",[e._v("返回的类型是 ThemeData ，Theme 的所有数据都存储在 ThemeData 里。")]),e._v(" "),a("h3",{attrs:{id:"themedata-说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#themedata-说明"}},[e._v("#")]),e._v(" ThemeData 说明")]),e._v(" "),a("p",[e._v("ThemeData 的构造函数为：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("factory ThemeData({\n    Brightness brightness,\n    MaterialColor primarySwatch,\n    Color primaryColor,\n    Brightness primaryColorBrightness,\n    Color primaryColorLight,\n    Color primaryColorDark,\n    Color accentColor,\n    Brightness accentColorBrightness,\n    Color canvasColor,\n    Color scaffoldBackgroundColor,\n    Color bottomAppBarColor,\n    Color cardColor,\n    Color dividerColor,\n    Color highlightColor,\n    Color splashColor,\n    InteractiveInkFeatureFactory splashFactory,\n    Color selectedRowColor,\n    Color unselectedWidgetColor,\n    Color disabledColor,\n    Color buttonColor,\n    ButtonThemeData buttonTheme,\n    Color secondaryHeaderColor,\n    Color textSelectionColor,\n    Color cursorColor,\n    Color textSelectionHandleColor,\n    Color backgroundColor,\n    Color dialogBackgroundColor,\n    Color indicatorColor,\n    Color hintColor,\n    Color errorColor,\n    Color toggleableActiveColor,\n    String fontFamily,\n    TextTheme textTheme,\n    TextTheme primaryTextTheme,\n    TextTheme accentTextTheme,\n    InputDecorationTheme inputDecorationTheme,\n    IconThemeData iconTheme,\n    IconThemeData primaryIconTheme,\n    IconThemeData accentIconTheme,\n    SliderThemeData sliderTheme,\n    TabBarTheme tabBarTheme,\n    CardTheme cardTheme,\n    ChipThemeData chipTheme,\n    TargetPlatform platform,\n    MaterialTapTargetSize materialTapTargetSize,\n    PageTransitionsTheme pageTransitionsTheme,\n    AppBarTheme appBarTheme,\n    BottomAppBarTheme bottomAppBarTheme,\n    ColorScheme colorScheme,\n    DialogTheme dialogTheme,\n    Typography typography,\n    CupertinoThemeData cupertinoOverrideTheme\n  }) {\n  ...\n }\n")])])]),a("h3",{attrs:{id:"themedata-的使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#themedata-的使用"}},[e._v("#")]),e._v(" ThemeData 的使用")]),e._v(" "),a("p",[e._v("ThemeData 的数据是通过 MaterialApp 的 theme 参数来使用的，如：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('MaterialApp(\n    title: "Flutter Demo",\n    theme: ThemeData(\n        primaryColor: Colors.blue,\n    ),\n    ...\n}\n')])])]),a("h3",{attrs:{id:"theme-of-context-的使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#theme-of-context-的使用"}},[e._v("#")]),e._v(" Theme.of(context) 的使用")]),e._v(" "),a("p",[e._v("Theme.of(context) 会获得 MaterialApp 的主题数据 ThemeData，这些数据都是 final 的，所以是只读的，不能修改。")]),e._v(" "),a("p",[e._v("这里写一个例子，读取 MaterialApp 的 primaryColor 用于 Text 的 颜色。")]),e._v(" "),a("h4",{attrs:{id:"代码所在位置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码所在位置"}},[e._v("#")]),e._v(" 代码所在位置")]),e._v(" "),a("p",[e._v("flutter_widget_demo/lib/features/ThemeFeatureWidget.dart")]),e._v(" "),a("h4",{attrs:{id:"完整代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#完整代码"}},[e._v("#")]),e._v(" 完整代码")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('import \'package:flutter/material.dart\';\n\nvoid main() => runApp(ThemeFeatureWidget());\n\nclass ThemeFeatureWidget extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    return MaterialApp(\n      title: "Flutter Demo",\n      theme: ThemeData(\n        primaryColor: Colors.red,\n      ),\n      home: Scaffold(\n          appBar: AppBar(title: Text("Flutter 功能类Widget -- Theme")),\n          body: ChildText()),\n    );\n  }\n}\n\nclass ChildText extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    // TODO: implement build\n    return Text("Hello Flutter",\n        style: TextStyle(color: Theme.of(context).primaryColor));\n  }\n}\n')])])]),a("p",[e._v("运行效果为：")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/4/23/16a493271ae7fb83?w=848&h=324&f=jpeg&s=42699",alt:""}})]),e._v(" "),a("h1",{attrs:{id:"mediaquery"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mediaquery"}},[e._v("#")]),e._v(" MediaQuery")]),e._v(" "),a("p",[e._v("MediaQuery Widget 的功能是查询一些数据，例如整个屏幕的宽度、高度、设备像素比等数据")]),e._v(" "),a("h2",{attrs:{id:"mediaquery-在-materialapp-中的位置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mediaquery-在-materialapp-中的位置"}},[e._v("#")]),e._v(" MediaQuery 在 MaterialApp 中的位置")]),e._v(" "),a("p",[e._v("MediaQuery 同 Theme 一样，只看代码，你可能没有看到 MediaQuery 的使用，但实际上在使用 MaterialApp 时，会自动将 MediaQuery Widget 加上去：")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/4/23/16a494b6cfdc3ae3?w=433&h=289&f=png&s=6449",alt:""}})]),e._v(" "),a("p",[e._v("MediaQuery 会嵌套 MaterialApp。")]),e._v(" "),a("h2",{attrs:{id:"在-flutter-中获取-mediaquery-的实例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在-flutter-中获取-mediaquery-的实例"}},[e._v("#")]),e._v(" 在 Flutter 中获取 MediaQuery 的实例")]),e._v(" "),a("p",[e._v("要想在 Flutter 中获取 MediaQuery 的实例，首先 根 Widget 必须是 MaterialApp，然后在 MaterialApp 的 子 Widget 里运行：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("MediaQuery.of(context);\n")])])]),a("p",[e._v("返回的类型是 MediaQueryData。")]),e._v(" "),a("h3",{attrs:{id:"mediaquerydata-说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mediaquerydata-说明"}},[e._v("#")]),e._v(" MediaQueryData 说明")]),e._v(" "),a("p",[e._v("MediaQueryData 的构造函数为：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("class MediaQueryData {\n  const MediaQueryData({\n    this.size = Size.zero,\n    this.devicePixelRatio = 1.0,\n    this.textScaleFactor = 1.0,\n    this.platformBrightness = Brightness.light,\n    this.padding = EdgeInsets.zero,\n    this.viewInsets = EdgeInsets.zero,\n    this.alwaysUse24HourFormat = false,\n    this.accessibleNavigation = false,\n    this.invertColors = false,\n    this.disableAnimations = false,\n    this.boldText = false,\n  });\n  ...\n}\n")])])]),a("table",[a("thead",[a("tr",[a("th",[e._v("参数名字")]),e._v(" "),a("th",[e._v("参数类型")]),e._v(" "),a("th",[e._v("意义")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("size")]),e._v(" "),a("td",[e._v("Size")]),e._v(" "),a("td",[e._v("屏幕的逻辑像素大小"),a("br"),e._v("size.width：屏幕的宽度（逻辑像素）"),a("br"),e._v("size.height：屏幕的高度（逻辑像素）")])]),e._v(" "),a("tr",[a("td",[e._v("devicePixelRatio")]),e._v(" "),a("td",[e._v("double")]),e._v(" "),a("td",[e._v("像素比：每个逻辑像素代表的设备像素数")])]),e._v(" "),a("tr",[a("td",[e._v("textScaleFactor")]),e._v(" "),a("td",[e._v("double")]),e._v(" "),a("td",[e._v("每个逻辑像素代表的字体像素数")])]),e._v(" "),a("tr",[a("td",[e._v("platformBrightness")]),e._v(" "),a("td",[e._v("Brightness")]),e._v(" "),a("td",[e._v("平台的亮度模式,有两种模式:light 和 dark"),a("br"),e._v("默认为 light")])]),e._v(" "),a("tr",[a("td",[e._v("padding")]),e._v(" "),a("td",[e._v("EdgeInsets")]),e._v(" "),a("td",[e._v("表示系统状态栏或者刘海屏的 padding")])]),e._v(" "),a("tr",[a("td",[e._v("viewInsets")]),e._v(" "),a("td",[e._v("EdgeInsets")]),e._v(" "),a("td",[e._v("表示设备键盘的 padding")])]),e._v(" "),a("tr",[a("td",[e._v("alwaysUse24HourFormat")]),e._v(" "),a("td",[e._v("bool")]),e._v(" "),a("td",[e._v("格式化时间时是否使用 24 小时格式")])]),e._v(" "),a("tr",[a("td",[e._v("accessibleNavigation")]),e._v(" "),a("td",[e._v("bool")]),e._v(" "),a("td",[e._v("是否使用 TalkBack 或 VoiceOver 等辅助功能服务与应用程序进行交互")])]),e._v(" "),a("tr",[a("td",[e._v("invertColors")]),e._v(" "),a("td",[e._v("bool")]),e._v(" "),a("td",[e._v("设备是否反转平台的颜色。"),a("br"),e._v("现在只能在 iOS 上使用")])]),e._v(" "),a("tr",[a("td",[e._v("disableAnimations")]),e._v(" "),a("td",[e._v("bool")]),e._v(" "),a("td",[e._v("平台是否要求禁用动画")])]),e._v(" "),a("tr",[a("td",[e._v("boldText")]),e._v(" "),a("td",[e._v("bool")]),e._v(" "),a("td",[e._v("平台是否请求使用粗体来绘制文本。")])])])]),e._v(" "),a("h3",{attrs:{id:"mediaquery-of-context-的使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mediaquery-of-context-的使用"}},[e._v("#")]),e._v(" MediaQuery.of(context) 的使用")]),e._v(" "),a("p",[e._v("MediaQuery.of(context) 获得的 MediaQueryData 数据里，我们一般关心的是 ：")]),e._v(" "),a("ul",[a("li",[e._v("Size")]),e._v(" "),a("li",[e._v("devicePixelRatio")])]),e._v(" "),a("h4",{attrs:{id:"size"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#size"}},[e._v("#")]),e._v(" Size")]),e._v(" "),a("p",[e._v("Size 是整个屏幕的宽高数据，不管你在哪里调用 MediaQuery.of(context) ，获得的都是整个屏幕的 Size。")]),e._v(" "),a("h4",{attrs:{id:"devicepixelratio"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#devicepixelratio"}},[e._v("#")]),e._v(" devicePixelRatio")]),e._v(" "),a("p",[e._v("devicePixelRatio 表示的是 每个逻辑像素代表的设备像素数。")]),e._v(" "),a("p",[e._v("设备像素数 = 逻辑像素数 * devicePixelRatio")]),e._v(" "),a("h3",{attrs:{id:"获取-子-widget-的宽高"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取-子-widget-的宽高"}},[e._v("#")]),e._v(" 获取 子 Widget 的宽高")]),e._v(" "),a("p",[e._v("要想获取 子 Widget 的宽高，就不能使用 MediaQuery.of(context) ,这个时候要用到 GlobalKey。")]),e._v(" "),a("p",[e._v("为 子 Widget 设置 GlobalKey，然后通过 GlobalKey 获取 子 Widget 的宽高。")]),e._v(" "),a("p",[e._v("这里写一个例子，获取屏幕的宽高和子 Widget 的宽高。")]),e._v(" "),a("h4",{attrs:{id:"代码所在位置-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码所在位置-2"}},[e._v("#")]),e._v(" 代码所在位置")]),e._v(" "),a("p",[e._v("flutter_widget_demo/lib/features/MediaQueryFeatureWidget.dart")]),e._v(" "),a("h4",{attrs:{id:"完整代码-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#完整代码-2"}},[e._v("#")]),e._v(" 完整代码")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('import \'package:flutter/material.dart\';\n\nvoid main() => runApp(MediaQueryFeatureWidget());\n\nGlobalKey _globalKey = GlobalKey();\n\nclass MediaQueryFeatureWidget extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    return MaterialApp(\n      title: "Flutter Demo",\n      theme: ThemeData(\n        primaryColor: Colors.blue,\n      ),\n      home: Scaffold(\n          appBar: AppBar(title: Text("Flutter 功能类Widget -- MediaQuery")),\n          body: BodyWidget()),\n    );\n  }\n}\n\nclass BodyWidget extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    return Column(\n      children: <Widget>[\n        Text(\n          "Hello Flutter",\n          key: _globalKey,\n        ),\n        RaisedButton(\n          child: Text(\'getSize\'),\n          onPressed: () {\n            //获取屏幕的宽高\n            print("Screen width:" +\n                MediaQuery.of(context).size.width.toString() +\n                " Screen height:" +\n                MediaQuery.of(context).size.height.toString());\n            //获取子Widget 的宽高\n            print("Ttext width:" +\n                _globalKey.currentContext.size.width.toString() +\n                " Screen height:" +\n                _globalKey.currentContext.size.height.toString());\n          },\n        )\n      ],\n    );\n  }\n}\n')])])]),a("h1",{attrs:{id:"navigator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#navigator"}},[e._v("#")]),e._v(" Navigator")]),e._v(" "),a("p",[e._v("Navigator 是用来管理页面显示的 Widget，这些页面以堆栈的数据结构存储，当有新页面显示时，就会把上一个页面压入栈，所以栈底是最初的页面，栈顶是当前的页面。")]),e._v(" "),a("h2",{attrs:{id:"navigator-在-materialapp-中的位置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#navigator-在-materialapp-中的位置"}},[e._v("#")]),e._v(" Navigator 在 MaterialApp 中的位置")]),e._v(" "),a("p",[e._v("Navigator 同 Theme 一样，只看代码，你可能没有看到 Navigator 的使用，但实际上在使用 MaterialApp 时，会自动将 Navigator Widget 加上去：")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/4/23/16a4ad20fc2c8e45?w=433&h=289&f=png&s=5755",alt:""}})]),e._v(" "),a("p",[e._v("Navigator 会嵌套 MaterialApp。")]),e._v(" "),a("h2",{attrs:{id:"routes-路由"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#routes-路由"}},[e._v("#")]),e._v(" Routes（路由）")]),e._v(" "),a("p",[e._v("移动应用将全屏幕显示的叫做 “screens” 或者 “pages”，在 Flutter 里叫做 Routes（路由），Navigator 就是用来管理 Routes 显示的 Widget。")]),e._v(" "),a("h2",{attrs:{id:"navigator-的说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#navigator-的说明"}},[e._v("#")]),e._v(" Navigator 的说明")]),e._v(" "),a("p",[e._v("Navigator 提供了操作 Routes 的两种方法： "),a("code",[e._v("Navigator.push")]),e._v(" 和 "),a("code",[e._v("Navigator.pop")]),e._v("。")]),e._v(" "),a("h3",{attrs:{id:"在-flutter-中获取-navigator-的实例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在-flutter-中获取-navigator-的实例"}},[e._v("#")]),e._v(" 在 Flutter 中获取 Navigator 的实例")]),e._v(" "),a("p",[e._v("在 Flutter 中除了 MaterialApp 提供的 Navigator，也可以实现自定义的 Navigator,但是大部分情况下还是使用的 MaterialApp 提供的 Navigator。")]),e._v(" "),a("p",[e._v("首先 根 Widget 必须是 MaterialApp，然后在 MaterialApp 的 子 Widget 里运行：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Navigator.of(context);\n")])])]),a("p",[e._v("返回的类型是 NavigatorState，是 Navigator Widget 的 State 类。")]),e._v(" "),a("h3",{attrs:{id:"navigatorstate-说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#navigatorstate-说明"}},[e._v("#")]),e._v(" NavigatorState 说明")]),e._v(" "),a("p",[e._v("以下是 NavigatorState 类的图：")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/4/24/16a4af6aca3d4aa4?w=1328&h=1244&f=jpeg&s=252671",alt:""}})]),e._v(" "),a("p",[e._v("以下是 Navigator 类的图：")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/4/24/16a4af6fa3e9a512?w=1738&h=1062&f=jpeg&s=283814",alt:""}})]),e._v(" "),a("p",[e._v("可以看到 Navigator 类里的方法和 NavigatorState 类的方法都一样，所以 也可以直接使用 Navigator ，而不是 "),a("code",[e._v("Navigator.of(context)")]),e._v("。")]),e._v(" "),a("p",[e._v("这里 Navigator 就简单介绍完了， 具体使用会在后面介绍。")]),e._v(" "),a("h1",{attrs:{id:"inheritedwidget"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inheritedwidget"}},[e._v("#")]),e._v(" InheritedWidget")]),e._v(" "),a("p",[e._v("InheritedWidget 可以高效的将数据在 Widget 树 中向下传递，通常用来共享数据，Flutter 中非常重要的一个功能 Widget。")]),e._v(" "),a("p",[e._v("前面介绍的 Theme 和 MediaQuery 之所以可以在 子 Widget 内访问到数据，就是使用到了 InheritedWidget。")]),e._v(" "),a("p",[e._v("大家应该都有这样的经历，从 A 页面跳转到 B 页面，但 B 页面需要用到 A 页面的一些数据，这时候该怎么做呢？")]),e._v(" "),a("p",[e._v("通常做法是，A 页面打开 B 页面的时候，把数据从 A 页面传递给 B 页面，但这样做，会使 A 页面的数据和 B 页面的数据产生割裂，如果又要求 B 页面产生的结果又返回给 A 页面呢？这使得我们要用很大的精力去处理数据传输的问题。")]),e._v(" "),a("p",[e._v("InheritedWidget 的目的就是处理数据问题，可以将共享的数据在 InheritedWidget 里实现，这样 A 页面和 B 页面都可以直接访问数据并修改，数据一旦修改，就会触发依赖这个数据的 UI 的刷新。InheritedWidget 在 Flutter 开发中有很大的作用。")]),e._v(" "),a("p",[e._v("这里 InheritedWidget 就简单介绍完了， 具体使用会在后面介绍。")])])}),[],!1,null,null,null);t.default=i.exports}}]);