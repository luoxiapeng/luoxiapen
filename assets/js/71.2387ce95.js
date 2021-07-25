(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{437:function(t,e,n){"use strict";n.r(e);var a=n(1),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"城市选择页面实现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#城市选择页面实现"}},[t._v("#")]),t._v(" 城市选择页面实现")]),t._v(" "),n("p",[t._v("点击热映页面的左上角的城市，会跳转到城市选择页面：")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/4/13/16a1743a94f7fd52?w=446&h=768&f=jpeg&s=32447",alt:""}})]),t._v(" "),n("p",[t._v("本节就实现这个功能，这里涉及到两个知识点：")]),t._v(" "),n("ol",[n("li",[t._v("首先就是实现城市选择页面")]),t._v(" "),n("li",[t._v("另一个就是页面跳转，Flutter 实现页面跳转需要用到 Route，也就是路由。")])]),t._v(" "),n("h2",{attrs:{id:"新建文件-cityswidget-dart"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#新建文件-cityswidget-dart"}},[t._v("#")]),t._v(" 新建文件 CitysWidget.dart")]),t._v(" "),n("p",[t._v("首先实现城市选择页面，新建一个文件 CitysWidget.dart，在里面创建类 CitysWidget，注意，新的页面必须使用 Scaffold 作为 根 Widget：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("import 'package:flutter/material.dart';\n\nclass CitysWidget extends StatefulWidget {\n  @override\n  State<StatefulWidget> createState() {\n    // TODO: implement createState\n    return CityWidgtState();\n  }\n}\n\nclass CityWidgtState extends State<CitysWidget> {\n  @override\n  Widget build(BuildContext context) {\n    // TODO: implement build\n    return Scaffold(\n      body: Text('城市选择'),\n    );\n  }\n}\n")])])]),n("p",[t._v("这里返回的是一个 Text，先不急着实现页面，而是先实现页面跳转功能，当页面跳转功能实现后，在去实现页面，因为这样就可以用 HotReload 实时看到页面的效果。")]),t._v(" "),n("h2",{attrs:{id:"route"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#route"}},[t._v("#")]),t._v(" Route")]),t._v(" "),n("p",[t._v("接下来实现 Route，给 "),n("code",[t._v("main.dart")]),t._v(" 的 MaterialApp 增加一个 routes 属性：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("routes: {\n    '/Citys': (context) => CitysWidget(),\n},\n")])])]),n("p",[t._v("MaterialApp 就变成:")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("return MaterialApp(\n  title: 'Flutter Demo',\n  theme: ThemeData(\n    primarySwatch: Colors.blue,\n  ),\n  home: MyHomePage(title: '豆瓣电影'),\n  routes: {\n    '/Citys': (context) => CitysWidget(),\n  },\n);\n")])])]),n("h2",{attrs:{id:"navigator"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#navigator"}},[t._v("#")]),t._v(" Navigator")]),t._v(" "),n("p",[t._v("然后给热映页面左上角的城市添加点击事件，调用 Navigator 跳转到城市选择页面：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("  GestureDetector(\n    child: Text(\n      '深圳',\n      style: TextStyle(fontSize: 16),\n    ),\n    onTap: (){\n      Navigator.pushNamed(context, '/Citys');\n    },\n  ),\n")])])]),n("h2",{attrs:{id:"新建变量来存储当前城市的数据"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#新建变量来存储当前城市的数据"}},[t._v("#")]),t._v(" 新建变量来存储当前城市的数据")]),t._v(" "),n("p",[t._v("新建一个 String 变量 "),n("code",[t._v("curCity")]),t._v(" 来存储当前城市的数据，并且默认值设为 "),n("code",[t._v("深圳")]),t._v(":")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("class HotWidgetState extends State<HotWidget> {\n  String curCity = '深圳';//用变量来存储当前的城市\n  ...\n}\n")])])]),n("p",[t._v("然后其余用 "),n("code",[t._v("深圳")]),t._v(" 的地方都替换成 "),n("code",[t._v("curCity")]),t._v("：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("  GestureDetector(\n    child: Text(\n      curCity,\n      style: TextStyle(fontSize: 16),\n    ),\n    onTap: (){\n      Navigator.pushNamed(context, '/Citys');\n    },\n  ),\n")])])]),n("p",[t._v("同时要对 HotMoviesListWidget 进行重构，因为 HotMoviesListWidget 里的城市是写死的，现在需要将城市的数据通过参数传递过去，给 HotMoviesListWidget 的构造函数添加城市的参数，"),n("code",[t._v("HotMoviesListWidget.dart")]),t._v(" 会变为：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("class HotMoviesListWidget extends StatefulWidget {\n  String curCity ;\n\n  HotMoviesListWidget(String city){\n    curCity = city;\n  }\n\n  ...\n}\n\nclass HotMoviesListWidgetState extends State<HotMoviesListWidget> {\n  ....\n\n  void _getData() async {\n    List<HotMovieData> serverDataList = new List();\n    var response = await http.get(\n        'https://api.douban.com/v2/movie/in_theaters?apikey=0b2bdeda43b5688921839c8ecb20399b&city='+widget.curCity+'&start=0&count=10&client=&udid=');\n    ...\n  }\n\n  ...\n}\n")])])]),n("p",[n("code",[t._v("HotWidget.dart")]),t._v(" 里的")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("HotMoviesListWidget(),\n")])])]),n("p",[t._v("会变为：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("HotMoviesListWidget(curCity),\n")])])]),n("h2",{attrs:{id:"使用-navigator-传递数据"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用-navigator-传递数据"}},[t._v("#")]),t._v(" 使用 Navigator 传递数据")]),t._v(" "),n("p",[t._v("从热映页面跳转到城市选择页面，需要把当前的城市传过去，使用 "),n("code",[t._v("Navigator.pushNamed")]),t._v(" 方法的 "),n("code",[t._v("arguments")]),t._v(" 来传递参数：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("class HotWidgetState extends State<HotWidget> {\n  String curCity = '深圳';//用变量来存储当前的城市\n\n  @override\n  Widget build(BuildContext context) {\n    // TODO: implement build\n    return Column(\n      ...\n              GestureDetector(\n                child: Text(\n                  curCity,//这里改为变量来表示城市\n                  style: TextStyle(fontSize: 16),\n                ),\n                onTap: (){\n                  Navigator.pushNamed(context, '/Citys',arguments: curCity);\n                },\n              ),\n    ...\n")])])]),n("p",[t._v("传递数据，要用到 "),n("code",[t._v("Navigator.pushNamed")]),t._v(" 的 arguments 参数：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("Navigator.pushNamed(context, '/Citys',arguments: curCity);\n")])])]),n("h2",{attrs:{id:"获取数据"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#获取数据"}},[t._v("#")]),t._v(" 获取数据")]),t._v(" "),n("p",[t._v("在城市页面获取传递过来的数据需要使用 ModalRoute，ModalRoute 的使用需要 context，所以这么使用：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("class CityWidgtState extends State<CitysWidget> {\n  String curCity;\n\n  @override\n  Widget build(BuildContext context) {\n    // TODO: implement build\n    curCity = ModalRoute.of(context).settings.arguments;\n\n    return Scaffold...\n}\n\n")])])]),n("h2",{attrs:{id:"完善城市选择页面"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#完善城市选择页面"}},[t._v("#")]),t._v(" 完善城市选择页面")]),t._v(" "),n("h4",{attrs:{id:"appbar"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#appbar"}},[t._v("#")]),t._v(" AppBar")]),t._v(" "),n("p",[t._v("首先要实现 AppBar ，但要自定义一下，首先背景是白色的，title 是黑色的，而且 title 不是居中的，而是居左，并且返回按钮是绿色的，所以 AppBar 这么实现：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("class CityWidgtState extends State<CitysWidget> {\n  @override\n  Widget build(BuildContext context) {\n    // TODO: implement build\n    return Scaffold(\n      appBar: AppBar(\n        iconTheme: IconThemeData(color: Colors.green),\n        title: Text('选择城市',style: TextStyle(color: Colors.black,fontSize: 16),),\n        backgroundColor: Colors.white,\n        elevation: 1,\n        centerTitle: false,\n      ),\n    body : ...\n}\n")])])]),n("h4",{attrs:{id:"tabbar-和-tabbarview"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#tabbar-和-tabbarview"}},[t._v("#")]),t._v(" TabBar 和 TabBarView")]),t._v(" "),n("p",[t._v("TabBar 和 TabBarView 我们之前已经很熟悉了，还是使用 DefaultTabController，不一样的是这次选中的是绿色的。TabBarView 里我们只实现国内页面的部分功能，需要用到 GridView，因为只实现部分页面，这次就不写在单独的文件里了。")]),t._v(" "),n("p",[t._v("最后完整的代码如下：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("import 'package:flutter/material.dart';\n\nclass CitysWidget extends StatefulWidget {\n  @override\n  State<StatefulWidget> createState() {\n    // TODO: implement createState\n    return CityWidgtState();\n  }\n}\n\nclass CityWidgtState extends State<CitysWidget> {\n  String curCity;\n\n  @override\n  Widget build(BuildContext context) {\n    // TODO: implement build\n    curCity = ModalRoute.of(context).settings.arguments;\n    List<String> hotCitys = [\n      '北京',\n      '上海',\n      '广州',\n      '深圳',\n      '成都',\n      '武汉',\n      '杭州',\n      '重庆',\n      '郑州',\n      '南京',\n      '西安',\n      '苏州',\n      '长沙',\n      '天津',\n      '福州'\n    ];\n\n    return Scaffold(\n      backgroundColor: Color(0xE3FFFFFF),\n      appBar: AppBar(\n        iconTheme: IconThemeData(color: Colors.green),\n        title: Text(\n          '选择城市',\n          style: TextStyle(color: Colors.black, fontSize: 16),\n        ),\n        backgroundColor: Colors.white,\n        elevation: 1,\n        centerTitle: false,\n      ),\n      body: DefaultTabController(\n        length: 2,\n        child: Column(\n          children: <Widget>[\n            Container(\n              color: Colors.white,\n              constraints: BoxConstraints.expand(height: 50),\n              child: TabBar(\n                  unselectedLabelColor: Colors.black12,\n                  labelColor: Colors.black87,\n                  indicatorColor: Colors.green,\n                  tabs: <Widget>[Tab(text: '国内'), Tab(text: '国外')]),\n            ),\n            Expanded(\n              child: Container(\n                child: TabBarView(\n                  physics: ClampingScrollPhysics(),\n                  children: <Widget>[\n                    Column(\n                      crossAxisAlignment: CrossAxisAlignment.start,\n                      children: <Widget>[\n                        Container(\n                          height: 50,\n                          child: TextField(\n                            cursorColor: Colors.green,\n                            decoration: InputDecoration(\n                                hintText: '输入城市名查询',\n                                hintStyle: TextStyle(fontSize: 14),\n                                border: InputBorder.none,\n                                prefixIcon: Icon(\n                                  Icons.search,\n                                  color: Colors.black38,\n                                ),\n                                filled: true,\n                                fillColor: Colors.white),\n                          ),\n                        ),\n                        Padding(\n                          padding: EdgeInsets.only(top: 10, left: 20),\n                          child: Text(\n                            'GPS定位城市',\n                            style: TextStyle(fontSize: 12, color: Colors.grey),\n                          ),\n                        ),\n                        Padding(\n                          padding: EdgeInsets.only(top: 5, left: 20),\n                          child: MaterialButton(\n                            child: Container(\n                              width: 50,\n                              child: Row(\n                                children: <Widget>[\n                                  Icon(\n                                    Icons.location_on,\n                                    size: 14,\n                                    color: Colors.green,\n                                  ),\n                                  Text(curCity)\n                                ],\n                              ),\n                            ),\n                            color: Colors.white,\n                            elevation: 0,\n                            onPressed: () {},\n                          ),\n                        ),\n                        Padding(\n                          padding: EdgeInsets.only(top: 5, left: 20),\n                          child: Text('热门城市',\n                              style:\n                                  TextStyle(fontSize: 12, color: Colors.grey)),\n                        ),\n                        Expanded(\n                          flex: 1,\n                          child: Padding(\n                            padding:\n                                EdgeInsets.only(left: 20, right: 20, top: 10),\n                            child: GridView.builder(\n                              gridDelegate:\n                                  SliverGridDelegateWithFixedCrossAxisCount(\n                                      crossAxisCount: 3,\n                                      childAspectRatio: 2.6,\n                                      mainAxisSpacing: 20,\n                                      crossAxisSpacing: 50),\n                              itemCount: hotCitys.length,\n                              itemBuilder: (context, index) {\n                                return MaterialButton(\n                                  child: Text(hotCitys[index]),\n                                  color: Colors.white,\n                                  elevation: 0,\n                                  onPressed: () {},\n                                );\n                              },\n                            ),\n                          ),\n                        )\n                      ],\n                    ),\n                    Center(\n                      child: Text('国外'),\n                    )\n                  ],\n                ),\n              ),\n            )\n          ],\n        ),\n      ),\n    );\n  }\n}\n")])])]),n("p",[t._v("运行的效果为:")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/4/13/16a1743eee7d13d5?w=413&h=768&f=jpeg&s=37768",alt:""}})]),t._v(" "),n("h2",{attrs:{id:"返回结果"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#返回结果"}},[t._v("#")]),t._v(" 返回结果")]),t._v(" "),n("p",[t._v("选择城市后，返回选中的结果。")]),t._v(" "),n("h4",{attrs:{id:"gridview-的-item-点击事件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#gridview-的-item-点击事件"}},[t._v("#")]),t._v(" GridView 的 item 点击事件")]),t._v(" "),n("p",[t._v("将 GridView 的 itemBuilder 返回的是 MaterialButton，MaterialButton 有点击事件。")]),t._v(" "),n("h4",{attrs:{id:"返回结果-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#返回结果-2"}},[t._v("#")]),t._v(" 返回结果")]),t._v(" "),n("p",[t._v("在 MaterialButton 的 onPressed 里返回结果：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("    return MaterialButton(\n      child: Text(hotCitys[index]),\n      color: Colors.white,\n      elevation: 0,\n      onPressed: () {\n        Navigator.pop(context,hotCitys[index]);\n      },\n    )\n")])])]),n("h2",{attrs:{id:"接受结果"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#接受结果"}},[t._v("#")]),t._v(" 接受结果")]),t._v(" "),n("p",[t._v("接受结果需要用到 await，因为 "),n("code",[t._v("Navigator.pushNamed")]),t._v(" 的返回结果是 Future 对象，所以跳转的操作要写成 async 异步函数：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("  void _jumpToCitysWidget() async{\n    var selectCity = await Navigator.pushNamed(context, '/Citys',arguments: curCity);\n    if(selectCity == null) return;\n    setState(() {\n      curCity =  selectCity;\n    });\n  }\n")])])]),n("p",[t._v("跳转的方法改写为：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("  GestureDetector(\n    child: Text(\n      curCity,\n      style: TextStyle(fontSize: 16),\n    ),\n    onTap: (){\n      _jumpToCitysWidget();\n    },\n  ),\n")])])]),n("p",[t._v("接下来详细讲一下 Flutter 页面跳转及参数传递的用法。")]),t._v(" "),n("h2",{attrs:{id:"代码目录重构"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#代码目录重构"}},[t._v("#")]),t._v(" 代码目录重构")]),t._v(" "),n("p",[t._v("截止到现在，已经实现了比较多的功能，我们在去看现在的代码，发现文件很多，而且比较杂乱：")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/4/29/16a67e87f1e6d6be?w=650&h=394&f=jpeg&s=46813",alt:""}})]),t._v(" "),n("p",[t._v("所以，对代码的目录进行重构，将功能相关的代码放在同一个目录下，改造后的代码为：")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/4/29/16a67e926ea8a218?w=546&h=262&f=jpeg&s=15255",alt:""}})])])}),[],!1,null,null,null);e.default=s.exports}}]);