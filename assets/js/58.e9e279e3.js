(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{345:function(t,e,v){"use strict";v.r(e);var _=v(1),a=Object(_.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"flutter-基础-widget-图片和-icon"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#flutter-基础-widget-图片和-icon"}},[t._v("#")]),t._v(" Flutter 基础 Widget —— 图片和 Icon")]),t._v(" "),e("p",[t._v("本节讲 Flutter 图片和 Icon 的使用。")]),t._v(" "),e("p",[t._v("主要讲一下 Image 和 Icon 这两种 Widget 的使用:")]),t._v(" "),e("ol",[e("li",[e("a",{attrs:{href:"https://docs.flutter.io/flutter/widgets/Image-class.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Image"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://docs.flutter.io/flutter/widgets/Icon-class.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Icon"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"_1-image"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-image"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://docs.flutter.io/flutter/widgets/Image-class.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("1.Image"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("Image 是显示图片的 Widget。")]),t._v(" "),e("h3",{attrs:{id:"代码所在位置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#代码所在位置"}},[t._v("#")]),t._v(" 代码所在位置")]),t._v(" "),e("p",[t._v("flutter_widget_demo/lib/image/ImageWidget.dart")]),t._v(" "),e("h3",{attrs:{id:"image-asset-的快速上手"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#image-asset-的快速上手"}},[t._v("#")]),t._v(" Image.asset 的快速上手")]),t._v(" "),e("p",[t._v("Image.asset 使用有些特殊，因为这里涉及到如何把本地图片资源添加到 Flutter APP 里。")]),t._v(" "),e("h4",{attrs:{id:"将本地图片资源添加到-flutter-app"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#将本地图片资源添加到-flutter-app"}},[t._v("#")]),t._v(" 将本地图片资源添加到 Flutter APP")]),t._v(" "),e("ol",[e("li",[t._v("在 Flutter 工程的根目录下创建一个 "),e("code",[t._v("images")]),t._v(" 目录（名字随便取），然后将一张 flutter.png 的图片拷贝到该目录，如下图：")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/3/9/1696267866d98457?w=428&h=340&f=jpeg&s=28604",alt:""}}),t._v(" 2. 打开 "),e("code",[t._v("pubspec.yml")]),t._v(" ,在 "),e("code",[t._v("flutter")]),t._v(" 中添加图片的配置信息：\n如果只添加一张图片：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("flutter:\n  uses-material-design: true\n\n  assets:\n    - images/flutter.png\n")])])]),e("p",[t._v("或者可以把整个目录配置上，就不用一张张图片添加了：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("flutter:\n  uses-material-design: true\n\n  assets:\n    - images/\n")])])]),e("ol",{attrs:{start:"3"}},[e("li",[t._v("使用的时候，需要传入图片的路径：")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('Image.asset("images/flutter.png"),\n')])])]),e("h4",{attrs:{id:"image-asset-的使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#image-asset-的使用"}},[t._v("#")]),t._v(" Image.asset 的使用")]),t._v(" "),e("p",[t._v("Image.asset 的最简单使用方式就是传入图片路径:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('Image.asset("images/flutter.png"),\n')])])]),e("p",[t._v("Image.asset 写到一个页面的完整 Demo 代码如下：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('import \'package:flutter/material.dart\';\n\nvoid main() => runApp(ImageWidget());\n\nclass ImageWidget extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    return MaterialApp(\n      title: "Flutter Demo",\n      theme: ThemeData(\n        primaryColor: Colors.blue,\n      ),\n      home: Scaffold(\n        appBar: AppBar(title: Text("Flutter UI基础Widget -- 图片和Icon")),\n        body: Image.asset("images/flutter.png",fit: BoxFit.cover,),\n      ),\n    );\n  }\n}\n')])])]),e("p",[t._v("运行的效果如下：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/3/9/1696271cbc0b539e?w=846&h=678&f=jpeg&s=81215",alt:""}})]),t._v(" "),e("h3",{attrs:{id:"image-network-的快速上手"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#image-network-的快速上手"}},[t._v("#")]),t._v(" Image.network 的快速上手")]),t._v(" "),e("p",[t._v("Image.network 的最简单使用方式就是传入图片 URL:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('Image.network("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557781801455&di=17f9f2fc3ded4efb7214d2d8314e8426&imgtype=0&src=http%3A%2F%2Fimg2.mukewang.com%2F5b4c075b000198c216000586.jpg"),\n')])])]),e("p",[t._v("Image.network 写到一个页面的完整 Demo 代码如下：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('import \'package:flutter/material.dart\';\n\nvoid main() => runApp(ImageWidget());\n\nclass ImageWidget extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    return MaterialApp(\n      title: "Flutter Demo",\n      theme: ThemeData(\n        primaryColor: Colors.blue,\n      ),\n      home: Scaffold(\n        appBar: AppBar(title: Text("Flutter UI基础Widget -- 图片和Icon")),\n        body: Image.network("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557781801455&di=17f9f2fc3ded4efb7214d2d8314e8426&imgtype=0&src=http%3A%2F%2Fimg2.mukewang.com%2F5b4c075b000198c216000586.jpg"),\n      ),\n    );\n  }\n}\n')])])]),e("p",[t._v("运行的效果如下：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/5/14/16ab26f3f7b69109?w=842&h=628&f=jpeg&s=68510",alt:""}})]),t._v(" "),e("h3",{attrs:{id:"image-的构造函数及参数说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#image-的构造函数及参数说明"}},[t._v("#")]),t._v(" Image 的构造函数及参数说明")]),t._v(" "),e("p",[t._v("Image 总共有 5 个构造函数，除了默认的构造函数，还有四种命名构造函数：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("class Image extends StatefulWidget {\n\n    const Image({\n        @required this.image,\n        ...\n    })\n\n    Image.network(String src,{\n        ...\n    })\n\n    Image.file(File file, {\n        ...\n    })\n\n    Image.asset(String name, {\n        ...\n    })\n\n    Image.memory(Uint8List bytes, {\n        ...\n    })\n\n}\n")])])]),e("p",[t._v("我们一般使用四种命名构造函数，而这四种命名构造函数也表示了图片的不同来源：")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("Image.network(url)：从网络加载显示图片")]),t._v(" "),e("p",[t._v("这里需要传入图片的 url，")])]),t._v(" "),e("li",[e("p",[t._v("Image.file(file)：从本地文件加载显示图片")]),t._v(" "),e("p",[t._v("这里需要传入图片的本地地址")])]),t._v(" "),e("li",[e("p",[t._v("Image.asset(name)：从 Flutter APP 的资源文件里加载显示图片")]),t._v(" "),e("p",[t._v("这里需要传入 Flutter APP 图片资源文件的路径及图片名字")])]),t._v(" "),e("li",[e("p",[t._v("Image.memory(bytes)：从内存加载显示图片")]),t._v(" "),e("p",[t._v("这里需要传入图片的 bytes 数据，类型是 Uint8List")])])]),t._v(" "),e("p",[t._v("Image 的五个构造函数的参数都有所不同，这里讲一下共同都有的参数：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("参数名字")]),t._v(" "),e("th",[t._v("参数类型")]),t._v(" "),e("th",[t._v("意义")]),t._v(" "),e("th",[t._v("必选 or 可选")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("key")]),t._v(" "),e("td",[t._v("Key")]),t._v(" "),e("td",[t._v("Widget 的标识")]),t._v(" "),e("td",[t._v("可选")])]),t._v(" "),e("tr",[e("td",[t._v("scale")]),t._v(" "),e("td",[t._v("double")]),t._v(" "),e("td",[t._v("图形显示的比例")]),t._v(" "),e("td",[t._v("可选")])]),t._v(" "),e("tr",[e("td",[t._v("semanticsLabel")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("给 Image 加上一个语义标签"),e("br"),t._v("没有实际用处")]),t._v(" "),e("td",[t._v("可选")])]),t._v(" "),e("tr",[e("td",[t._v("width")]),t._v(" "),e("td",[t._v("double")]),t._v(" "),e("td",[t._v("图片的宽"),e("br"),t._v("如果为 null 的话，则图像将选择最佳大小显示，而且会保留其固有宽高比的大小")]),t._v(" "),e("td",[t._v("可选")])]),t._v(" "),e("tr",[e("td",[t._v("height")]),t._v(" "),e("td",[t._v("double")]),t._v(" "),e("td",[t._v("图片的高"),e("br"),t._v("如果为 null 的话，则图像将选择最佳大小显示，而且会保留其固有宽高比的大小")]),t._v(" "),e("td",[t._v("可选")])]),t._v(" "),e("tr",[e("td",[t._v("color")]),t._v(" "),e("td",[t._v("Color")]),t._v(" "),e("td",[t._v("图片的混合色值")]),t._v(" "),e("td",[t._v("可选")])]),t._v(" "),e("tr",[e("td",[t._v("colorBlendMode")]),t._v(" "),e("td",[t._v("BlendMode")]),t._v(" "),e("td",[t._v("图片与颜色的混合模式")]),t._v(" "),e("td",[t._v("可选")])]),t._v(" "),e("tr",[e("td",[t._v("fit")]),t._v(" "),e("td",[t._v("BoxFit")]),t._v(" "),e("td",[t._v("用于在图片的显示空间和图片本身大小不同时指定图片的适应模式")]),t._v(" "),e("td",[t._v("可选")])]),t._v(" "),e("tr",[e("td",[t._v("alignment")]),t._v(" "),e("td",[t._v("Alignment")]),t._v(" "),e("td",[t._v("图片的对齐方式")]),t._v(" "),e("td",[t._v("可选")])]),t._v(" "),e("tr",[e("td",[t._v("repeat")]),t._v(" "),e("td",[t._v("ImageRepeat")]),t._v(" "),e("td",[t._v("当图片本身大小小于显示空间时，指定图片的重复规则")]),t._v(" "),e("td",[t._v("可选")])]),t._v(" "),e("tr",[e("td",[t._v("centerSlice")]),t._v(" "),e("td",[t._v("Rect")]),t._v(" "),e("td",[t._v("在这个矩形范围内的图片会被当成.9 的图片")]),t._v(" "),e("td",[t._v("可选")])]),t._v(" "),e("tr",[e("td",[t._v("matchTextDirection")]),t._v(" "),e("td",[t._v("bool")]),t._v(" "),e("td",[t._v("图片的绘制方向"),e("br"),t._v("true:从左往右"),e("br"),t._v("false:从右往左")]),t._v(" "),e("td",[t._v("可选")])]),t._v(" "),e("tr",[e("td",[t._v("gaplessPlayback")]),t._v(" "),e("td",[t._v("bool")]),t._v(" "),e("td",[t._v("当图像提供者更改时"),e("br"),t._v("true：继续显示旧图像"),e("br"),t._v("false：简单地显示任何内容")]),t._v(" "),e("td",[t._v("可选")])]),t._v(" "),e("tr",[e("td",[t._v("filterQuality")]),t._v(" "),e("td",[t._v("FilterQuality")]),t._v(" "),e("td",[t._v("设置图片的过滤质量")]),t._v(" "),e("td",[t._v("可选")])])])]),t._v(" "),e("ul",[e("li",[e("p",[t._v("fit：BoxFit，用于在图片的显示空间和图片本身大小不同时指定图片的适应模式。")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("BoxFit 的值")]),t._v(" "),e("th",[t._v("含义")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("BoxFit.fill")]),t._v(" "),e("td",[t._v("会拉伸填充满显示空间，图片本身长宽比会发生变化，图片会变形。")])]),t._v(" "),e("tr",[e("td",[t._v("BoxFit.contain")]),t._v(" "),e("td",[t._v("会按图片的长宽比放大后居中填满显示空间，图片不会变形，超出显示空间部分会被剪裁。")])]),t._v(" "),e("tr",[e("td",[t._v("BoxFit.cover")]),t._v(" "),e("td",[t._v("这是图片的默认适应规则，图片会在保证图片本身长宽比不变的情况下缩放以适应当前显示空间，图片不会变形。")])]),t._v(" "),e("tr",[e("td",[t._v("BoxFit.fitWidth")]),t._v(" "),e("td",[t._v("图片的宽度会缩放到显示空间的宽度，高度会按比例缩放，然后居中显示，图片不会变形，超出显示空间部分会被剪裁。")])]),t._v(" "),e("tr",[e("td",[t._v("BoxFit.fitHeight")]),t._v(" "),e("td",[t._v("图片的高度会缩放到显示空间的高度，宽度会按比例缩放，然后居中显示，图片不会变形，超出显示空间部分会被剪裁。")])]),t._v(" "),e("tr",[e("td",[t._v("BoxFit.scaleDown")]),t._v(" "),e("td",[t._v("对齐目标框内的源（默认情况下，居中），并在必要时缩小源以确保源适合框内。这与"),e("code",[t._v("contains")]),t._v("相同，如果这会缩小图像，否则它与"),e("code",[t._v("none")]),t._v("相同。")])]),t._v(" "),e("tr",[e("td",[t._v("BoxFit.none")]),t._v(" "),e("td",[t._v("图片没有适应策略，会在显示空间内显示图片，如果图片比显示空间大，则显示空间只会显示图片中间部分")])])])])]),t._v(" "),e("li",[e("p",[t._v("alignment：Alignment，图片的对齐方式")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Alignment 的值")]),t._v(" "),e("th",[t._v("含义")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("Alignment.topLeft")]),t._v(" "),e("td",[t._v("左上对齐")])]),t._v(" "),e("tr",[e("td",[t._v("Alignment.topCenter")]),t._v(" "),e("td",[t._v("上部居中对齐")])]),t._v(" "),e("tr",[e("td",[t._v("Alignment.topRight")]),t._v(" "),e("td",[t._v("右上对齐")])]),t._v(" "),e("tr",[e("td",[t._v("Alignment.centerLeft")]),t._v(" "),e("td",[t._v("中间居左对齐")])]),t._v(" "),e("tr",[e("td",[t._v("Alignment.center")]),t._v(" "),e("td",[t._v("中间对齐")])]),t._v(" "),e("tr",[e("td",[t._v("Alignment.centerRight")]),t._v(" "),e("td",[t._v("中间居右对齐")])]),t._v(" "),e("tr",[e("td",[t._v("Alignment.bottomLeft")]),t._v(" "),e("td",[t._v("左下对齐")])]),t._v(" "),e("tr",[e("td",[t._v("Alignment.bottomCenter")]),t._v(" "),e("td",[t._v("底部居中对齐")])]),t._v(" "),e("tr",[e("td",[t._v("Alignment.bottomRight")]),t._v(" "),e("td",[t._v("右下对齐")])])])])]),t._v(" "),e("li",[e("p",[t._v("repeat：ImageRepeat,当图片本身大小小于显示空间时，指定图片的重复规则。")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("ImageRepeat 的值")]),t._v(" "),e("th",[t._v("含义")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("ImageRepeat.repeat")]),t._v(" "),e("td",[t._v("在 x 和 y 轴上重复图像，直到填充满空间。")])]),t._v(" "),e("tr",[e("td",[t._v("ImageRepeat.repeatX")]),t._v(" "),e("td",[t._v("在 x 轴上重复图像，直到填充满空间。")])]),t._v(" "),e("tr",[e("td",[t._v("ImageRepeat.repeatY")]),t._v(" "),e("td",[t._v("在 y 轴上重复图像，直到填充满空间。")])]),t._v(" "),e("tr",[e("td",[t._v("ImageRepeat.noRepeat")]),t._v(" "),e("td",[t._v("不重复")])])])])]),t._v(" "),e("li",[e("p",[t._v("filterQuality：FilterQuality，设置图片的过滤质量")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("FilterQuality 的值")]),t._v(" "),e("th",[t._v("含义")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("FilterQuality.none")]),t._v(" "),e("td",[t._v("最快的过滤。")])]),t._v(" "),e("tr",[e("td",[t._v("FilterQuality.low")]),t._v(" "),e("td",[t._v("比 none 的过滤质量好，但是比 none 的时间要长。")])]),t._v(" "),e("tr",[e("td",[t._v("FilterQuality.medium")]),t._v(" "),e("td",[t._v("比 low 的过滤质量好，但是也比 low 的时间要长")])]),t._v(" "),e("tr",[e("td",[t._v("FilterQuality.high")]),t._v(" "),e("td",[t._v("过滤质量最高，但也最慢")])])])])])]),t._v(" "),e("h1",{attrs:{id:"_2-icon"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-icon"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://docs.flutter.io/flutter/widgets/Icon-class.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("2.Icon"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("Flutter 中，可以像 web 开发一样使用 iconfont，iconfont 即“字体图标”，它是将图标做成字体文件，然后通过指定不同的字符而显示不同的图片。用于显示 iconfont 的就是 Icon Widget。")]),t._v(" "),e("p",[t._v("iconfont 和图片相比有如下优势：")]),t._v(" "),e("ol",[e("li",[t._v("体积小：可以减小安装包大小。")]),t._v(" "),e("li",[t._v("矢量的：iconfont 都是矢量图标，放大不会影响其清晰度。")]),t._v(" "),e("li",[t._v("可以应用文本样式：可以像文本一样改变字体图标的颜色、大小对齐等。")]),t._v(" "),e("li",[t._v("可以通过 TextSpan 和文本混用。")])]),t._v(" "),e("h2",{attrs:{id:"代码所在位置-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#代码所在位置-2"}},[t._v("#")]),t._v(" 代码所在位置")]),t._v(" "),e("p",[t._v("flutter_widget_demo/lib/image/IconWidget.dart")]),t._v(" "),e("h2",{attrs:{id:"icon-的快速上手"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#icon-的快速上手"}},[t._v("#")]),t._v(" Icon 的快速上手")]),t._v(" "),e("p",[t._v("Icon 的使用：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Icon(\n  Icons.android,\n  size: 50.0,\n  color: Colors.green,\n)\n")])])]),e("p",[t._v("Icon 写到一个页面的完整 Demo 代码如下：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('import \'package:flutter/material.dart\';\n\nvoid main() => runApp(IconWidget());\n\nclass IconWidget extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    return MaterialApp(\n      title: "Flutter Demo",\n      theme: ThemeData(\n        primaryColor: Colors.blue,\n      ),\n      home: Scaffold(\n        appBar: AppBar(title: Text("Flutter UI基础Widget -- 图片和Icon")),\n        body: Icon(\n          Icons.android,\n          size: 50.0,\n          color: Colors.green,\n        ),\n      ),\n    );\n  }\n}\n')])])]),e("p",[t._v("运行效果：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/3/9/16962a5ea77f29f9?w=850&h=380&f=png&s=41639",alt:""}})]),t._v(" "),e("h2",{attrs:{id:"icon-的构造函数及参数说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#icon-的构造函数及参数说明"}},[t._v("#")]),t._v(" Icon 的构造函数及参数说明")]),t._v(" "),e("p",[t._v("Icon 的构造函数为:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("class Icon extends StatelessWidget {\n\n  const Icon(this.icon, {\n    Key key,\n    this.size,\n    this.color,\n    this.semanticLabel,\n    this.textDirection,\n  }) : super(key: key);\n\n  ...\n}\n")])])]),e("table",[e("thead",[e("tr",[e("th",[t._v("参数名字")]),t._v(" "),e("th",[t._v("参数类型")]),t._v(" "),e("th",[t._v("意义")]),t._v(" "),e("th",[t._v("必选 or 可选")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("key")]),t._v(" "),e("td",[t._v("Key")]),t._v(" "),e("td",[t._v("Widget 的标识")]),t._v(" "),e("td",[t._v("可选")])]),t._v(" "),e("tr",[e("td",[t._v("color")]),t._v(" "),e("td",[t._v("double")]),t._v(" "),e("td",[t._v("icon 的大小")]),t._v(" "),e("td",[t._v("可选")])]),t._v(" "),e("tr",[e("td",[t._v("size")]),t._v(" "),e("td",[t._v("Color")]),t._v(" "),e("td",[t._v("icon 的颜色")]),t._v(" "),e("td",[t._v("可选")])]),t._v(" "),e("tr",[e("td",[t._v("semanticsLabel")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("给 Image 加上一个语义标签"),e("br"),t._v("没有实际用处")]),t._v(" "),e("td",[t._v("可选")])]),t._v(" "),e("tr",[e("td",[t._v("textDirection")]),t._v(" "),e("td",[t._v("TextDirection")]),t._v(" "),e("td",[t._v("Icon 的绘制方向")]),t._v(" "),e("td",[t._v("可选")])])])])])}),[],!1,null,null,null);e.default=a.exports}}]);