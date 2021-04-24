(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{378:function(t,a,v){"use strict";v.r(a);var e=v(42),_=Object(e.a)({},(function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"dart-简介及基础语法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#dart-简介及基础语法"}},[t._v("#")]),t._v(" Dart 简介及基础语法")]),t._v(" "),v("p",[t._v("因为 Flutter 是使用 Dart 语言开发的，所以在开始 Flutter 之前，有必要先了解一下 Dart。")]),t._v(" "),v("h2",{attrs:{id:"dart-简介"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#dart-简介"}},[t._v("#")]),t._v(" Dart 简介")]),t._v(" "),v("p",[t._v("Dart 是 Google 开发的计算机编程语言，可以用于 移动端、PC 端、WEB、服务器的开发，是全栈式编程语言。虽然语言都是 Dart ，但在每个平台上使用的框架不一样，例如在 Flutter 上使用的 Dart for the Flutter，在 Web 端使用的是 Dart for the web，在服务器使用的是 Server-side Dart：")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("平台")]),t._v(" "),v("th",[t._v("开发语言")]),t._v(" "),v("th",[t._v("框架")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("Flutter(Android/iOS/Linux/MacOS/Windows/Web)")]),t._v(" "),v("td",[t._v("Dart")]),t._v(" "),v("td",[t._v("Dart for the Flutter")])]),t._v(" "),v("tr",[v("td",[t._v("Web")]),t._v(" "),v("td",[t._v("Dart")]),t._v(" "),v("td",[t._v("Dart for the web")])]),t._v(" "),v("tr",[v("td",[t._v("服务器")]),t._v(" "),v("td",[t._v("Dart")]),t._v(" "),v("td",[t._v("Server-side Dart")])])])]),t._v(" "),v("h2",{attrs:{id:"dart-的历史"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#dart-的历史"}},[t._v("#")]),t._v(" Dart 的历史")]),t._v(" "),v("ul",[v("li",[t._v("2011.10 ：Dart 语言发布")]),t._v(" "),v("li",[t._v("2013.10 ：Dart 1.0")]),t._v(" "),v("li",[t._v("2018.8 ：Dart 2.0")]),t._v(" "),v("li",[t._v("2018.12 ：Dart 2.1")]),t._v(" "),v("li",[t._v("2019.2.27 ：Dart 2.2")]),t._v(" "),v("li",[t._v("2019.4.21 ：Dart 2.3")])]),t._v(" "),v("p",[t._v("可能你是在听说了 Flutter 之后，才开始接触 Dart 语言，但是 Dart 语言已经存在并发展很久了，Dart 早在 2011 年就发布了，现在 Dart 的最新版本是 2.3 。")]),t._v(" "),v("h2",{attrs:{id:"dart-语言优势"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#dart-语言优势"}},[t._v("#")]),t._v(" Dart 语言优势")]),t._v(" "),v("ul",[v("li",[t._v("Dart 中的所有东西都是对象，包括数字、函数等，它们都继承自 Object，并且对象的默认值都是 null（包括数字）。")]),t._v(" "),v("li",[t._v("Dart 既可以支持 JIT（动态编译），也可以支持 AOT（静态编译）。")]),t._v(" "),v("li",[t._v("Dart 是强类型语言，但是由于 Dart 可以推断类型，所以也可以支持动态类型，例如 var、dynamic。")]),t._v(" "),v("li",[t._v("Dart 有强大的异步编程能力。")])]),t._v(" "),v("h2",{attrs:{id:"dart-用法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#dart-用法"}},[t._v("#")]),t._v(" Dart 用法")]),t._v(" "),v("p",[t._v("我们有了其他语言的基础，学习 Dart 语法很快的，看下面的一段代码，显示了很多 Dart 用法：")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("// 导入库\nimport 'package:flutter/material.dart';\n\n/**\n * 入口函数\n */\nvoid main() => runApp(MyApp());\n\n/**\n * 定义一个 MyApp Widget\n */\nclass MyApp extends StatelessWidget {\n\n  var content = 'Dart 语法'; // 声明并初始化变量\n  String _name = \"by 小德\";\n\n  @override\n  Widget build(BuildContext context) {\n\n    print('display $content');\n\n    // return a Widget\n    return MaterialApp(\n      title: \"Flutter Demo\",\n      theme: ThemeData(\n        primaryColor: Colors.blue,\n      ),\n      home: Scaffold(\n          appBar: AppBar(title: Text(\"Flutter Dart 语法\")),\n          body: Text(content+_name)\n          ),\n    );\n  }\n}\n")])])]),v("ul",[v("li",[v("p",[v("code",[t._v("import")])]),t._v(" "),v("p",[t._v("导入库。")])]),t._v(" "),v("li",[v("p",[t._v("注释")]),t._v(" "),v("p",[t._v("注释，有两种：")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("语法")]),t._v(" "),v("th",[t._v("含义")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("code",[t._v("/** .. **/")])]),t._v(" "),v("td",[t._v("多行注释")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("//")])]),t._v(" "),v("td",[t._v("单行注释")])])])])]),t._v(" "),v("li",[v("p",[v("code",[t._v("=>")])]),t._v(" "),v("p",[t._v("Dart 的箭头语法，即 Lambda 表达式。")])]),t._v(" "),v("li",[v("p",[v("code",[t._v("class")])]),t._v(" "),v("p",[t._v("Dart 的类。")])]),t._v(" "),v("li",[v("p",[v("code",[t._v("extends")])]),t._v(" "),v("p",[t._v("继承。")])]),t._v(" "),v("li",[v("p",[v("code",[t._v("var")])]),t._v(" "),v("p",[t._v("一种声明变量而不指定其类型的方法。")])]),t._v(" "),v("li",[v("p",[t._v("以下划线 "),v("code",[t._v("_")]),t._v(" 开头的类或成员变量是私有的")]),t._v(" "),v("p",[t._v("Dart 没有 Public、Protected、Private 的关键字，在 Dart 里，类或成员变量默认都是 Public 的，以下划线 "),v("code",[t._v("_")]),t._v(" 开头的就是私有的，例如成员变量 _name 就是私有的。")])]),t._v(" "),v("li",[v("p",[v("code",[t._v("String")])]),t._v(" "),v("p",[t._v("在声明变量时也可以指定具体类型，String 是字符串，还有其他的数据类型：int、double 等。")])]),t._v(" "),v("li",[v("p",[v("code",[t._v("'...'")]),t._v(" 或 "),v("code",[t._v('"..."')])]),t._v(" "),v("p",[t._v("字符串的使用，用单引号或双引号都行。")])]),t._v(" "),v("li",[v("p",[v("code",[t._v("$variableName")]),t._v(" 或 "),v("code",[t._v("${expression}")])]),t._v(" "),v("p",[t._v("字符串插值：将变量的值直接插入字符串中。")])])]),t._v(" "),v("h2",{attrs:{id:"变量声明"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#变量声明"}},[t._v("#")]),t._v(" 变量声明")]),t._v(" "),v("p",[t._v("以下是 Dart 中所有变量声明的方法：")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("var content = 'Dart 语法'; // Declare and initialize a variable.\nvar switchOn = false;\nvar current = 0;\n\nString name = \"by 小德\";\nint count = 0;\n\ndynamic example = 'example';\n\nObject index = 100;\n")])])]),v("p",[t._v("总共有四种：")]),t._v(" "),v("ol",[v("li",[v("p",[v("code",[t._v("var")])]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("var content = 'Dart 语法'; // Declare and initialize a variable.\nvar switchOn = false;\nvar current = 0;\n")])])]),v("p",[t._v("使用 "),v("code",[t._v("var")]),t._v(" 来声明变量，不需要特别指定变量的数据类型，因为 Dart 会自动推断其数据类型，所以可以使用 "),v("code",[t._v("var")]),t._v(" 来定义任何的变量。")]),t._v(" "),v("p",[t._v("问题来了，"),v("code",[t._v("var")]),t._v(" 为什么能定义所有的变量？")]),t._v(" "),v("div",{staticClass:"language-! extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("因为 ，var 并不是直接存储值，而是存储的值的对象的引用，例如：var content = 'Dart 语法' 这句，是名字为 content 的 var 变量存储了值为 'Dart 语法' 的 String 对象的引用，所以 var 才能定义任何变量。\n")])])])]),t._v(" "),v("li",[v("p",[t._v("明确数据类型")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v('String name = "by 小德";\nint count = 0;\n')])])]),v("p",[t._v("就是在声明变量的时候，使用明确的数据类型。")])]),t._v(" "),v("li",[v("p",[v("code",[t._v("dynamic")])]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("dynamic example = 'example';\n")])])]),v("p",[t._v("意思是数据类型是动态可变的，也可以定义任何变量，但是和 "),v("code",[t._v("var")]),t._v(" 不同的是，"),v("code",[t._v("var")]),t._v(" 一旦赋值后，就不能改变数据类型了，例如以下用法就是错误的")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("var content = 'Dart 语法';\ncontent = 1; //❌ 错误的使用方法，content为String，不能赋值数字类型\n")])])]),v("p",[t._v("但是 dynamic 就可以，dynamic 可以这么使用：")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("dynamic example = 'example';\nexample = 1;//✅  这个使用方法正确，因为 dynamic 的类型是动态可变的\n")])])])]),t._v(" "),v("li",[v("p",[v("code",[t._v("Object")])]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("Object index = 100;\n")])])]),v("p",[t._v("Dart 里所有东西都是对象，是因为 Dart 的所有东西都继承自 Object，因此 Object 可以定义任何变量，而且赋值后，类型也可以更改：")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("Object index = 100;\nindex = 'string';//✅ 因为  'String' 也是 Object\n")])])])])]),t._v(" "),v("div",{staticClass:"language-! extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("注意：请不要滥用 dynamic，一般情况下都可以用 Object 代替 dynamic。\n")])])]),v("p",[t._v("那什么情况下可以用 "),v("code",[t._v("dynamic")]),t._v(" 呢？")]),t._v(" "),v("div",{staticClass:"language-! extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("当这个变量没法用 Dart 的类型来表示时，比如 Native 和 Flutter 交互，从 Native 传来的数据。所以你会看到 PlatformChannel 里有很多地方使用到了 dynamic。\n")])])]),v("h4",{attrs:{id:"变量-final-和-const"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#变量-final-和-const"}},[t._v("#")]),t._v(" 变量："),v("code",[t._v("final")]),t._v(" 和 "),v("code",[t._v("const")])]),t._v(" "),v("p",[t._v("如果你不想更改变量的值，那么你可以用 final 和 const:")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("final content = 'Dart 语法';\nstatic const bool switchOn = false;\n")])])]),v("p",[t._v("使用时有以下几点：")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("使用 "),v("code",[t._v("final")]),t._v(" 和 "),v("code",[t._v("const")]),t._v(" 的时候可以把 "),v("code",[t._v("var")]),t._v(" 省略")])]),t._v(" "),v("li",[v("p",[v("code",[t._v("final")]),t._v(" 和 "),v("code",[t._v("const")]),t._v(" 变量只能赋值一次，而且只能在声明的时候就赋值")])]),t._v(" "),v("li",[v("p",[v("code",[t._v("const")]),t._v(" 是隐式的 "),v("code",[t._v("final")])])]),t._v(" "),v("li",[v("p",[t._v("在使用 "),v("code",[t._v("const")]),t._v(" 的时候，如果变量是类里的变量，必须加 "),v("code",[t._v("static")]),t._v(" ，是全局变量时不需要加,例如:")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("import 'package:flutter/material.dart';\n\nconst demoConst = 'demo'; // 这里不用加 static\n\nvoid main() => runApp(MyApp());\n\nclass MyApp extends StatelessWidget {\n\n    static content = 'Dart 语法'; // 这里必须加 static\n    ...\n}\n")])])])])]),t._v(" "),v("p",[t._v("那么 "),v("code",[t._v("final")]),t._v(" 和 "),v("code",[t._v("const")]),t._v(" 有什么区别呢？")]),t._v(" "),v("div",{staticClass:"language-! extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("const 是编译时常量，在编译的时候就初始化了，但是 final 变量是当类创建的时候才初始化。\n")])])]),v("h2",{attrs:{id:"dart-支持的数据类型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#dart-支持的数据类型"}},[t._v("#")]),t._v(" Dart 支持的数据类型")]),t._v(" "),v("p",[t._v("Dart 支持以下的数据类型：")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th"),t._v(" "),v("th",[t._v("含义")]),t._v(" "),v("th",[t._v("使用")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("code",[t._v("int")])]),t._v(" "),v("td",[t._v("整数，范围为 -2^63 到 2^63 - 1.")]),t._v(" "),v("td",[t._v("int x = 1;//没有小数点就是 int")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("double")])]),t._v(" "),v("td",[t._v("浮点数，64 位（双精度）浮点数")]),t._v(" "),v("td",[t._v("double y = 1.1;//有小数点就是浮点数")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("num")])]),t._v(" "),v("td",[t._v("num 是数字类型，既可以表示整数，也可以表示浮点数，具体看赋的值")]),t._v(" "),v("td",[t._v("num x = 1;//num x 是整数"),v("br"),t._v("num y = 1.1;//num y 是浮点数")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("String")])]),t._v(" "),v("td",[t._v("字符串"),v("br"),t._v("Dart 字符串采用 UTF-16 编码"),v("br"),t._v("可以使用单引号或双引号来创建字符串")]),t._v(" "),v("td",[t._v("var s1 = 'string';"),v("br"),t._v(' var s2 = "string";')])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("bool")])]),t._v(" "),v("td",[t._v("布尔值")]),t._v(" "),v("td",[t._v("var isTrue = true;")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("List")])]),t._v(" "),v("td",[t._v("List<E>"),v("br"),t._v("E 表示 List 里的数据类型"),v("br"),t._v("用中括号来赋值")]),t._v(" "),v("td",[t._v("List<int> list = [1, 2, 3];")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("Set")])]),t._v(" "),v("td",[t._v("Set<E>"),v("br"),t._v("E 表示 Set 里的数据类型"),v("br"),t._v("用大括号来赋值")]),t._v(" "),v("td",[t._v("Set<String> halogens = {'fluorine', 'chlorine', 'bromine', 'iodine', 'astatine'};")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("Map")])]),t._v(" "),v("td",[t._v("Map<K, V> "),v("br"),t._v("K 是 Key 的数据类型,V 是 Value 的数据类型")]),t._v(" "),v("td",[t._v("Map<String,String> gifts = {"),v("br"),t._v("// Key: Value 格式"),v("br"),t._v("'first': 'partridge',"),v("br"),t._v("'second': 'turtledoves',"),v("br"),t._v("'fifth': 'golden rings'};")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("Runes")])]),t._v(" "),v("td",[t._v("表示采用 UTF-32 的字符串，用于显示 Unicode"),v("br"),t._v(" 因为 Dart 字符串是 UTF-16，因此在 Dart 中表示 32 位的 Unicode 值需要 Runes 这个特殊语法。")]),t._v(" "),v("td",[t._v("Runes input = new Runes('\\u{1f600}');"),v("br"),t._v("print(new String.fromCharCodes(input));"),v("br"),t._v("打印出来的是笑脸 emoji：😆")])])])]),t._v(" "),v("h2",{attrs:{id:"函数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#函数"}},[t._v("#")]),t._v(" 函数")]),t._v(" "),v("p",[t._v("在 Dart 中函数也是对象，函数的类型是 "),v("code",[t._v("Function")]),t._v("。")]),t._v(" "),v("h4",{attrs:{id:"写一个函数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#写一个函数"}},[t._v("#")]),t._v(" 写一个函数")]),t._v(" "),v("p",[t._v("函数按照如下的格式来写：")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("返回类型 函数名(函数参数){\n\n}\n")])])]),v("p",[t._v("这里写一个名字为 say 的函数：")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v('bool say(String msg , String from, int clock){\n  print(msg+" from " + from + " at " + clock?.toString());\n  return true;\n}\n')])])]),v("h4",{attrs:{id:"函数的类型-function"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#函数的类型-function"}},[t._v("#")]),t._v(" 函数的类型："),v("code",[t._v("Function")])]),t._v(" "),v("p",[t._v("上面写了一个函数 say，写出如下的代码，判断函数 say 的类型是不是 "),v("code",[t._v("Function")]),t._v("：")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("print(say is Function);\n")])])]),v("p",[t._v("输出的是 true。")]),t._v(" "),v("p",[t._v("而且请注意，这里在判断函数的类型的时候，直接用的是函数的名字，也就是说函数的名字就像变量名一样可以直接拿来使用，当直接用函数名来使用时，就是一个对象，其类型是 Function，要调用这个函数的话，就需要传入参数来使用，下面是使用函数的方法：")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("say('Hello Flutter'，'XiaoDe',10);\n")])])]),v("h4",{attrs:{id:"函数的参数-必选参数和可选参数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#函数的参数-必选参数和可选参数"}},[t._v("#")]),t._v(" 函数的参数：必选参数和可选参数")]),t._v(" "),v("p",[t._v("函数的参数分为两类：")]),t._v(" "),v("ol",[v("li",[t._v("必选参数")]),t._v(" "),v("li",[t._v("可选参数")])]),t._v(" "),v("p",[t._v("必选参数是必填的，可选参数是选填的。")]),t._v(" "),v("p",[t._v("那如何知道参数是必选的还是可选的呢？")]),t._v(" "),v("div",{staticClass:"language-! extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("首先必选参数在前面，和普通的参数定义一样，后面跟可选参数，可选参数需要用 {} 或者 [] 包起来，用不同的括号，可选参数的意义与用法也不一样。\n")])])]),v("h4",{attrs:{id:"必选参数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#必选参数"}},[t._v("#")]),t._v(" 必选参数")]),t._v(" "),v("p",[t._v("必选参数就是使用平常的方法定义的函数参数，如下面的函数：")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v('bool say(String msg , String from, int clock){\n    print(msg+" from " + from + " at " + clock?.toString());\n    return true;\n}\n')])])]),v("p",[t._v("say 函数有三个参数：msg、from、clock，这三个参数都是必选参数。")]),t._v(" "),v("div",{staticClass:"language-! extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("必选参数必须在可选参数的前面。\n")])])]),v("h4",{attrs:{id:"可选参数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#可选参数"}},[t._v("#")]),t._v(" 可选参数")]),t._v(" "),v("p",[t._v("可选参数也分为两类：")]),t._v(" "),v("ol",[v("li",[v("strong",[t._v("可选命名参数")]),t._v("：使用 "),v("code",[t._v("{}")]),t._v(" 包起来的参数是可选命名参数")]),t._v(" "),v("li",[v("strong",[t._v("可选位置参数")]),t._v("：使用 "),v("code",[t._v("[]")]),t._v(" 包起来的参数是可选位置参数")])]),t._v(" "),v("ul",[v("li",[t._v("可选命名参数："),v("code",[t._v("{}")]),t._v("\n用 "),v("code",[t._v("{}")]),t._v(" 包起来的参数是"),v("strong",[t._v("可选命名参数")]),t._v("，前面讲数据类型的时候，使用 "),v("code",[t._v("{}")]),t._v(" 来赋值的数据类型是 Map，所以可选的命名参数的类型也是 Map， 因此调用函数时，可选参数的赋值必须是 "),v("code",[t._v("paramName: value")]),t._v(" 这种 "),v("code",[t._v("key: value")]),t._v(" 格式的，下面是可选命名参数的例子："),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v('bool say(String msg , {String from, int clock}){\n    print(msg+" from " + from + " at " + clock.toString());\n    return true;\n}\n')])])]),t._v("这里参数 "),v("code",[t._v("from")]),t._v(" 就是可选命名参数。\n要调用 "),v("code",[t._v("say")]),t._v(" 函数，方法如下："),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("say('Hello Flutter');//✅ 因为 from 和 clock 是可选参数，所以可以不填\n\nsay('Hello Flutter',from: 'XiaoMing');//对 用命名参数格式 paramName: value 为 from 赋值\nsay('Hello Flutter',clock: 11);//✅\nsay('Hello Flutter',from: 'XiaoMing',clock: 11);//✅\n")])])]),t._v("同时还可以给命名参数加 "),v("code",[t._v("@required")]),t._v(" ，意思是这个也是必填参数，例子如下："),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v('bool say(String msg , {@required String from, int clock}){\n    print(msg+" from " + from + " at " + clock.toString());\n    return true;\n    }\n')])])]),t._v("这时候要调用 "),v("code",[t._v("say")]),t._v(" 函数，方法如下："),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("say('Hello Flutter');//❌  错误调用方式，因为 from 是必选参数，不填的话会报错\n\nsay('Hello Flutter',from: 'XiaoMing');//✅ 正确调用方式\nsay('Hello Flutter',from: 'XiaoMing',clock: 11);//✅ 这个调用方式也是正确的\n")])])])]),t._v(" "),v("li",[t._v("可选位置参数："),v("code",[t._v("[]")]),t._v("\n用 "),v("code",[t._v("[]")]),t._v(" 包起来的参数是"),v("strong",[t._v("可选位置参数")]),t._v("，前面讲数据类型的时候，使用 "),v("code",[t._v("[]")]),t._v(" 来赋值的数据类型是 List，所以可选的命名参数的类型也是 List，所以赋值和参数是一一对应的，下面是可选位置参数的例子："),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v('bool say(String msg , [String from , int clock]){\n    print(msg+" from " + from + " at " + clock.toString());\n    return true;\n}\n')])])]),t._v("要给可选位置参数赋值时，必选按照顺序来赋值："),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("say('Hello Flutter');//✅ 因为 from 和 clock 是可选参数，所以可以不填\n\nsay('Hello Flutter','XiaoMing',1);//✅ 为可选位置参数赋值，只能一个参数一个参数对应的赋值，所以要全部赋值\n\nsay('Hello Flutter','XiaoMing')//✅\nsay('Hello Flutter',1)//❌ 因为  1 赋值给了 from,但是 from 是String，所以会报错\n")])])])])]),t._v(" "),v("h4",{attrs:{id:"可选参数的默认值"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#可选参数的默认值"}},[t._v("#")]),t._v(" 可选参数的默认值 ："),v("code",[t._v("=")])]),t._v(" "),v("p",[t._v("因为参数是可选的，那么参数的值很可能没有赋值，就是 null ，用到的时候就有可能会触发 NPE，所以可以给可选参数赋默认值。")]),t._v(" "),v("p",[t._v("使用 "),v("code",[t._v("=")]),t._v(" 为可选参数赋默认值")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v('    bool say(String msg , {String from = \'empty\', int clock = 0}){\n        print(msg+" from " + from + " at " + clock.toString());\n        return true;\n    }\n')])])]),v("h2",{attrs:{id:"箭头语法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#箭头语法"}},[t._v("#")]),t._v(" "),v("code",[t._v("=>")]),t._v(" ：箭头语法")]),t._v(" "),v("p",[v("code",[t._v("=>")]),t._v(" 语法是 "),v("code",[t._v("{ return expr; }")]),t._v(" 的简写，因为 "),v("code",[t._v("=>")]),t._v(" 酷似箭头，也称箭头语法,也是 Lambda 表达式。")]),t._v(" "),v("div",{staticClass:"language-! extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("=> 语句后面只能跟一行代码，而且这一行代码只能一个表达式，而不能跟语句。表达式可以是函数、值。\n")])])]),v("p",[t._v("例如，main() 函数这里:")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("void main() => runApp(MyApp());\n")])])]),v("p",[t._v("就等价于：")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("void main(){\n    return runApp(MyApp());//runApp() 返回的是 void\n}\n")])])]),v("h2",{attrs:{id:"类"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#类"}},[t._v("#")]),t._v(" 类")]),t._v(" "),v("p",[t._v("Dart 中每个对象都是一个类的实例，所有类都继承自 Object。")]),t._v(" "),v("h4",{attrs:{id:"自定一个类"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#自定一个类"}},[t._v("#")]),t._v(" 自定一个类")]),t._v(" "),v("p",[t._v("如下，我定义一个类 Point：")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("class Point {\n  num x, y;\n\n  Point(num x, num y) {\n    // There's a better way to do this, stay tuned.\n    this.x = x;\n    this.y = y;\n  }\n}\n")])])]),v("h4",{attrs:{id:"默认构造函数的写法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#默认构造函数的写法"}},[t._v("#")]),t._v(" 默认构造函数的写法")]),t._v(" "),v("p",[t._v("默认的构造函数就是使用类名作为函数名的构造函数，例如上面写的类 Point 的构造函数：Point(num x,num y)")]),t._v(" "),v("h4",{attrs:{id:"构造函数的语法糖"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#构造函数的语法糖"}},[t._v("#")]),t._v(" 构造函数的语法糖")]),t._v(" "),v("p",[t._v("Dart 里还有构造函数的语法糖，可以将构造函数改造为：")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("Point(this.x, this.y);\n")])])]),v("p",[t._v("这样 Point 类就可以简化为：")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("class Point {\n  num x,y;\n  Point(this.x, this.y);\n}\n")])])]),v("p",[t._v("这个语法糖会简化构造函数的赋值操作。")]),t._v(" "),v("h4",{attrs:{id:"widget-构造函数参数采用的是可选命名参数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#widget-构造函数参数采用的是可选命名参数"}},[t._v("#")]),t._v(" Widget 构造函数参数采用的是可选命名参数")]),t._v(" "),v("p",[t._v("因为 Widget 构造函数有很多参数，为了使用起来清晰，Widget 构造函数的参数采用的是可选命名参数。")]),t._v(" "),v("p",[t._v("后面会经常用到。")]),t._v(" "),v("h4",{attrs:{id:"创建实例-不需要使用-new"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#创建实例-不需要使用-new"}},[t._v("#")]),t._v(" 创建实例：不需要使用 new")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("Point point = Point(0,0);\n")])])]),v("p",[t._v("创建类实例的时候，都要写 new，其实很麻烦的，而且也没有必要，所以 Dart 在创建实例的时候不在需要使用 new 。")]),t._v(" "),v("h4",{attrs:{id:"使用类的变量"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#使用类的变量"}},[t._v("#")]),t._v(" 使用类的变量")]),t._v(" "),v("p",[t._v("使用点 "),v("code",[t._v(".")]),t._v(" 来引用实例变量或方法：")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("print(p.x);\n")])])]),v("h2",{attrs:{id:"操作符"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#操作符"}},[t._v("#")]),t._v(" 操作符")]),t._v(" "),v("p",[t._v("Dart 中定义了很多的操作符，分为以下几类：")]),t._v(" "),v("ol",[v("li",[t._v("算术运算符")]),t._v(" "),v("li",[t._v("比较操作符")]),t._v(" "),v("li",[t._v("类型判断符")]),t._v(" "),v("li",[t._v("赋值操作符")]),t._v(" "),v("li",[t._v("逻辑运算符")]),t._v(" "),v("li",[t._v("按位与移位运算符")]),t._v(" "),v("li",[t._v("条件运算符")]),t._v(" "),v("li",[t._v("级联操作符")]),t._v(" "),v("li",[t._v("其他操作符")])]),t._v(" "),v("h4",{attrs:{id:"_1-算术运算操作符"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-算术运算操作符"}},[t._v("#")]),t._v(" 1. 算术运算操作符")]),t._v(" "),v("p",[t._v("下面是 Dart 支持的常见的算术运算操作符：")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("操作符")]),t._v(" "),v("th",[t._v("含义")]),t._v(" "),v("th",[t._v("例子")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("code",[t._v("+")])]),t._v(" "),v("td",[t._v("加")]),t._v(" "),v("td",[t._v("var a = 2 + 3;")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("-")])]),t._v(" "),v("td",[t._v("减")]),t._v(" "),v("td",[t._v("var a = 2 - 3;")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("-exper")])]),t._v(" "),v("td",[t._v("负数")]),t._v(" "),v("td",[t._v("var a = -1;")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("*")])]),t._v(" "),v("td",[t._v("乘")]),t._v(" "),v("td",[t._v("var a = 2 * 3;")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("/")])]),t._v(" "),v("td",[t._v("除，精确除法")]),t._v(" "),v("td",[t._v("var a = 5 / 2; // a 的结果为 2.5")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("~/")])]),t._v(" "),v("td",[t._v("整除")]),t._v(" "),v("td",[t._v("var a = 5 ~/ 2; // a 的结果为 2")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("%")])]),t._v(" "),v("td",[t._v("取余")]),t._v(" "),v("td",[t._v("var a = 5 % 2; // a 的结果为 1")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("++var")])]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("var a = 1;"),v("br"),t._v("var b = ++a;// b 的结果为 2,a 的结果为 2")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("var++")])]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("var a = 1;"),v("br"),t._v("var b = a++;// b 的结果为 1,a 的结果为 2")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("--var")])]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("var a = 1;"),v("br"),t._v("var b = --a;// b 的结果为 0,a 的结果为 0")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("var--")])]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("var a = 1;"),v("br"),t._v("var b = a--;// b 的结果为 1,a 的结果为 0")])])])]),t._v(" "),v("h4",{attrs:{id:"_2-相等和大小关系操作符"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-相等和大小关系操作符"}},[t._v("#")]),t._v(" 2.相等和大小关系操作符")]),t._v(" "),v("p",[t._v("下面是 Dart 支持的判断是否相等和大小关系的操作符：")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("操作符")]),t._v(" "),v("th",[t._v("含义")]),t._v(" "),v("th",[t._v("例子")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("code",[t._v("==")])]),t._v(" "),v("td",[t._v("是否相等")]),t._v(" "),v("td",[t._v("assert(2 == 2);")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("!=")])]),t._v(" "),v("td",[t._v("不等于")]),t._v(" "),v("td",[t._v("assert(2 != 3);")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v(">")])]),t._v(" "),v("td",[t._v("大于")]),t._v(" "),v("td",[t._v("assert(3 > 2);")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("<")])]),t._v(" "),v("td",[t._v("小于")]),t._v(" "),v("td",[t._v("assert(2 < 3);")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v(">=")])]),t._v(" "),v("td",[t._v("大于等于")]),t._v(" "),v("td",[t._v("assert(3 >= 3);")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("<=")])]),t._v(" "),v("td",[t._v("小于等于")]),t._v(" "),v("td",[t._v("assert(3 <= 3);")])])])]),t._v(" "),v("h4",{attrs:{id:"_3-类型判断操作符"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-类型判断操作符"}},[t._v("#")]),t._v(" 3.类型判断操作符")]),t._v(" "),v("p",[t._v("下面是 Dart 支持的检查运行时类型的操作符：")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("操作符")]),t._v(" "),v("th",[t._v("含义")]),t._v(" "),v("th",[t._v("例子")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("code",[t._v("as")])]),t._v(" "),v("td",[t._v("类型转换")]),t._v(" "),v("td",[t._v("(emp as Person).firstName = 'Bob';")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("is")])]),t._v(" "),v("td",[t._v("判断是否是某个类型,如果是的话，就返回 true")]),t._v(" "),v("td",[t._v("if (emp is Person) {"),v("br"),t._v("// 如果 emp 是 Person 类型"),v("br"),t._v("emp.firstName ='Bob';"),v("br"),t._v("}")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("is!")])]),t._v(" "),v("td",[t._v("判断是否不是某个类型，如果不是的话，就返回 true")]),t._v(" "),v("td",[t._v("if (emp is! Person) {"),v("br"),t._v("// 如果 emp 不是 Person 类型"),v("br"),t._v("}")])])])]),t._v(" "),v("div",{staticClass:"language-! extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("上面的例子中，如果 emp 是 null 的话，as 的例子就会抛异常，is 和 isn't 的例子会返回 false.\n")])])]),v("h4",{attrs:{id:"_4-赋值操作符"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-赋值操作符"}},[t._v("#")]),t._v(" 4.赋值操作符")]),t._v(" "),v("p",[t._v("赋值操作符是 "),v("code",[t._v("=")]),t._v("。")]),t._v(" "),v("p",[t._v("如果只想当被赋值的变量为空的时候才赋值，可以使用"),v("code",[t._v("??=")]),t._v(",例如：")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("var a,b;\na = 1; //使用 = 赋值\nb ??= 1; // 当 b 是空的话才赋值，否则不会赋值\n")])])]),v("p",[v("code",[t._v("=")]),t._v(" 还可以和其他操作符结合起来使用，例如:")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[v("code",[t._v("+=")])]),t._v(" "),v("th",[v("code",[t._v("-=")])]),t._v(" "),v("th",[v("code",[t._v("*=")])]),t._v(" "),v("th",[v("code",[t._v("/=")])]),t._v(" "),v("th",[v("code",[t._v("~/=")])]),t._v(" "),v("th",[v("code",[t._v("%=")])])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("code",[t._v(">>=")])]),t._v(" "),v("td",[v("code",[t._v("<<=")])]),t._v(" "),v("td",[v("code",[t._v("^=")])]),t._v(" "),v("td",[v("code",[t._v("&=")])]),t._v(" "),v("td",[v("code",[t._v("|=")])]),t._v(" "),v("td",[v("code",[t._v("??=")])])])])]),t._v(" "),v("p",[t._v("这些组合起来的操作符，意思是先进行操作，然后在赋值，例如：")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("组合操作符")]),t._v(" "),v("th",[t._v("例子")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("code",[t._v("+=")])]),t._v(" "),v("td",[t._v("a += b ; 就等效于 a = a + b;")])])])]),t._v(" "),v("h4",{attrs:{id:"_5-逻辑运算操作符"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-逻辑运算操作符"}},[t._v("#")]),t._v(" 5.逻辑运算操作符")]),t._v(" "),v("p",[t._v("下面是 Dart 支持的逻辑运算操作符：")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("操作符")]),t._v(" "),v("th",[t._v("含义")]),t._v(" "),v("th",[t._v("例子")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("code",[t._v("!expr")])]),t._v(" "),v("td",[t._v("反转表达式（将 false 改为 true，反之亦然）")]),t._v(" "),v("td",[t._v("!(2 == 3);// 结果为 true")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("||")])]),t._v(" "),v("td",[t._v("逻辑或")]),t._v(" "),v("td",[t._v("(2 == 2)")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("&&")])]),t._v(" "),v("td",[t._v("逻辑与")]),t._v(" "),v("td",[t._v("（2 == 2）&& (3 == 3);// 结果为 true")])])])]),t._v(" "),v("h4",{attrs:{id:"_6-按位与移位运算符"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_6-按位与移位运算符"}},[t._v("#")]),t._v(" 6.按位与移位运算符")]),t._v(" "),v("p",[t._v("下面是 Dart 支持的按位与移位运算符：")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("操作符")]),t._v(" "),v("th",[t._v("含义")]),t._v(" "),v("th",[t._v("例子")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("code",[t._v("&")])]),t._v(" "),v("td",[t._v("按位与"),v("br"),t._v("对于每一个比特位，只有两个操作数相应的比特位都是 1 时，结果才为 1，否则为 0。")]),t._v(" "),v("td",[t._v("final value = 0x22;"),v("br"),t._v("final bitmask = 0x0f;"),v("br"),t._v("var result = value & bitmask;//结果为 0x02")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("|")])]),t._v(" "),v("td",[t._v("按位或，对于每一个比特位，当两个操作数相应的比特位至少有一个 1 时，结果为 1，否则为 0。")]),t._v(" "),v("td",[t._v("final value = 0x22;"),v("br"),t._v("final bitmask = 0x0f;"),v("br"),t._v("var result = value")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("^")])]),t._v(" "),v("td",[t._v("按位异或，对于每一个比特位，当两个操作数相应的比特位有且只有一个 1 时，结果为 1，否则为 0。")]),t._v(" "),v("td",[t._v("final value = 0x22;"),v("br"),t._v("final bitmask = 0x0f;"),v("br"),t._v("var result = value ^ bitmask;//结果为 0x2d")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("~expr")])]),t._v(" "),v("td",[t._v("按位非，反转操作数的比特位，即 0 变成 1，1 变成 0。")]),t._v(" "),v("td",[t._v("final value = 0x22;"),v("br"),t._v("final bitmask = 0x0f;"),v("br"),t._v("var result = value & ~bitmask;//结果为 0x20")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("<<")])]),t._v(" "),v("td",[t._v("左移")]),t._v(" "),v("td",[t._v("final value = 0x22;"),v("br"),t._v("final bitmask = 0x0f;"),v("br"),t._v("var result = value << 4;//结果为 0x220")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v(">>")])]),t._v(" "),v("td",[t._v("右移")]),t._v(" "),v("td",[t._v("final bitmask = 0x0f;"),v("br"),t._v("var result = value >> 4;//结果为 0x02")])])])]),t._v(" "),v("h4",{attrs:{id:"_7-条件运算符"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_7-条件运算符"}},[t._v("#")]),t._v(" 7.条件运算符")]),t._v(" "),v("p",[t._v("Dart 有两个运算符，可以让您使用更简单的表达式来代替可能需要 if-else 语句的表达式：")]),t._v(" "),v("ol",[v("li",[v("p",[v("code",[t._v("condition ? expr1 : expr2")])]),t._v(" "),v("p",[t._v("如果 condition 是 true，返回 expr1，否则返回 expr2。")]),t._v(" "),v("p",[t._v("当你需要根据一个 boolean 表达式来赋值时，可以使用 "),v("code",[t._v("? :")]),t._v(",例如：")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("var visibility = isPublic ? 'public' : 'private';\n")])])])]),t._v(" "),v("li",[v("p",[v("code",[t._v("expr1 ?? expr2")])]),t._v(" "),v("p",[t._v("如果 expr1 为 null，就返回 expr2 的值，否则返回 expr1 的值。")]),t._v(" "),v("p",[t._v("如果需要根据一个 boolean 表达式是否为 null 来作为条件，可以使用 "),v("code",[t._v("??")]),t._v("，例如：")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("String playerName(String name) => name ?? 'Guest';\n")])])])])]),t._v(" "),v("h4",{attrs:{id:"_8-级联操作符"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_8-级联操作符"}},[t._v("#")]),t._v(" 8.级联操作符")]),t._v(" "),v("p",[t._v("级联操作符是 "),v("code",[t._v("..")]),t._v(",允许你对同一对象进行一系列的操作。除了函数调用，您还可以访问同一对象上的字段。这通常可以为您节省创建临时变量的步骤，并允许您编写更多流畅的代码。")]),t._v(" "),v("p",[t._v("例如：")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("querySelector('#confirm') // Get an object.\n  ..text = 'Confirm' // Use its members.\n  ..classes.add('important')\n  ..onClick.listen((e) => window.alert('Confirmed!'));\n")])])]),v("p",[t._v("querySelector() 返回一个 selector 对象，后面的 "),v("code",[t._v("..text")]),t._v("、"),v("code",[t._v("..classes")]),t._v("、"),v("code",[t._v("..onClick")]),t._v("就是在 selector 对象上进行的。")]),t._v(" "),v("h4",{attrs:{id:"_9-其他操作符"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_9-其他操作符"}},[t._v("#")]),t._v(" 9.其他操作符")]),t._v(" "),v("p",[t._v("还有其他的操作符：")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("操作符")]),t._v(" "),v("th",[t._v("含义")]),t._v(" "),v("th",[t._v("例子")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("code",[t._v("()")])]),t._v(" "),v("td",[t._v("函数调用")]),t._v(" "),v("td",[t._v("代表函数调用")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("[]")])]),t._v(" "),v("td",[t._v("访问列表")]),t._v(" "),v("td",[t._v("引用列表中指定索引处的值")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v(".")])]),t._v(" "),v("td",[t._v("访问成员变量")]),t._v(" "),v("td",[t._v("访问表达式里的成员变量，例如 "),v("code",[t._v("foo.bar")]),t._v(",表示访问 "),v("code",[t._v("foo")]),t._v(" 表达式里的 "),v("code",[t._v("bar")]),t._v(" 成员变量")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("?.")])]),t._v(" "),v("td",[t._v("有条件的成员变量访问")]),t._v(" "),v("td",[t._v("很像 "),v("code",[t._v(".")]),t._v("，但是左边的表达式可以为 null，例如 "),v("code",[t._v("foo?.bar")]),t._v("，如果 foo 为 null，则不会抛异常，而是返回 null，如果 foo 不为 null，则可以返回 bar")])])])]),t._v(" "),v("p",[t._v("在说一下 Dart 里很好用但容易搞混的几个操作符："),v("code",[t._v("?.")]),t._v("、 "),v("code",[t._v("??")]),t._v(" 、"),v("code",[t._v("??=")])]),t._v(" "),v("ol",[v("li",[v("p",[v("code",[t._v("?.")])]),t._v(" "),v("p",[t._v("想要访问表达式的某个属性时，就可以使用这个，可以有效避免 NPE。")]),t._v(" "),v("p",[t._v("例如：")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("var yourName = user?.name;\n")])])]),v("p",[t._v("就等效于：")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("var yourName;\nif(user == null){\n    yourName = null;\n}else{\n    yourName = user.name;\n}\n")])])])]),t._v(" "),v("li",[v("p",[v("code",[t._v("??")])]),t._v(" "),v("p",[t._v("在赋值时，可以使用 "),v("code",[t._v("??")]),t._v("，若发现为空，可以为其赋默认值。\n例如:")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v('var yourName = name ?? "Bob";\n')])])]),v("p",[t._v("就是在为 yourName 赋值时，若 name 有值，就使用 name 的值，若 name 为空，则使用默认值 Bob，等效于：")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v('var yourName;\nif(name == null){\n    yourName = "Bob";\n}else{\n    yourName = name;\n}\n')])])])]),t._v(" "),v("li",[v("p",[v("code",[t._v("??=")])]),t._v(" "),v("p",[v("code",[t._v("expr1 ??= expr2")]),t._v(" 等效于 "),v("code",[t._v("expr1 = expr1 ?? expr2")]),t._v("\n就是判断 expr1 是否为 null，如果为 null 的话，就使用默认值 expr2。\n例如：")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("user ??= User();\n")])])]),v("p",[t._v("等效于：")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("if(user == null) {\n    user = User();\n}\n")])])])])])])}),[],!1,null,null,null);a.default=_.exports}}]);