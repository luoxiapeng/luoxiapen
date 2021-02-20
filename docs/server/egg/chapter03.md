# Egg.js 线上部署——利用 pkg 打包 Egg.js 工程

## 利用 pkg 打包 Egg.js 代码

pkg 是将整个工程打包为一个二进制文件，包括 node 运行环境一起打包，非常方便迁移，而且不需要客户环境重新部署 Node.js 以及下载相关依赖，具体步骤如下：

## 安装 pkg(参考 pkg)

```js
  npm install pkg -g
```

配置 Egg.js 的 public 路径。由于打包后为二进制文件，对于某些用户将前端代码放在 Egg.js 工程目录下的将不能操作，于是修改 Egg.js 的 public 路径配置到运行路径下

```js
// 修改config/config.default.js
config.static = {
  prefix: '/',
  dir: process.cwd() + '/public'
}
```

配置 Egg.js 的运行时路径。由于 Egg.js 运行时会生成 run 文件夹以及相关文件，而 pkg 打包后为二进制文件，不能在继续进行写操作，故将 rundir 配置到运行路径下：

```js
//修改config/config.default.js
config.rundir = process.cwd() + '/run'
```

## 修改 package.json 配置 pkg 相关参数

将代码以静态文件方式添加到打包中：

```js
//修改package.json，增加pkg节点
    "pkg": {
        "assets": [
          "./config/*.js",
          "./app.js",
          "./app/**/*.js",
          "./node_modules/nanoid/**/*.js"  //该行为必须添加，由于Egg.js使用nanoid库，其中用到一个文件pkg未能解析，于是手动添加
            ]
        }
```

## 配置 pkg 入口

```js
 // 修改package.json，增加bin节点，指定入口文件
    "bin": "build.js"
    // build.js文件内容
    require(__dirname + '/node_modules/egg-scripts/bin/egg-scripts.js')
```

## 配置 build 命令

```js
// 修改package.json,在scripts下增加build命令
    "scripts": {
        "build": "pkg . --targets node8-linux-x64 --out-path /usr/dist  --debug"
      }
    // --targets 指定node版本为8以及linux-x64
    // --out-path 指定打包后文件输出路径
    // --debug 指定debug模式编译
```

## 开始打包

```js
 // 初次打包时间较长，后续打包pkg会使用node缓存，提高打包效率
    npm run build
```

## 运行

```js
  ./test_pkg start /snapshot/test_pkg --port=9001 --title=test_pkg
    // ./test_pkg 打包后的二进制文件
    // /snapshot/test_pkg 其中/snapshot为必须路径，test_pkg为工程目录路径
    // --port --title等支持与平常启动时的任意命令参数
```

以上即完成了 Egg.js 的项目打包工作，这时可能有人会想到数据库相关配置怎么动态来改变呢？ C++编译的模块能否支持打包呢？，那请继续阅读。

## 如何支持动态 config

可能有人会想到利用 Egg.js 的启动周期来做呀，那么说对了，就是利用 configWillLoad 周期来做，在项目中创建 app.js 文件（如果已经有的请忽略），利用周期读取外部 config.js，然后替换 config/config.default.js 内容，示例代码如下：

```js
// 替换sequelize的storage，替换dataPath路径
var fs = require('fs')
class AppBootHook {
  constructor(app) {
    this.app = app
  }
  configWillLoad() {
    let customConfig = require(process.cwd() + '/config.js')
    this.app.config.sequelize.storage = customConfig.dbPath
    this.app.config.dataPath = customConfig.dataPath
  }
}

module.exports = AppBootHook
```

## 注意

Node.js 大部分用户应该都会使用 sequelize，而对于 Egg.js 使用 egg-sequelize，由于 egg-sequelize 周期中包含 agent.js，启动时读取 config/config.default.js，会导致启动失败，于是本人修改了一版 egg-sequelize_pkg 用于打包使用，除配置名称差异外使用方法与 egg-sequelize 一致，不需要修改原有代码,如下配置更改即可

```js
// {app_root}/config/plugin.js
exports.sequelizePkg = {
  enable: true,
  package: 'egg-sequelize_pkg'
}
// {app_root}/config/config.default.js
exports.sequelizePkg = {}
```

github 地址为：https://github.com/MrSmallLiu/egg-sequelize_pkg 欢迎提问题，也欢迎 star

## C++模块引入

pkg 介绍对于 C++编译的.node 模块，在打包时不会将其打包进二进制文件中，故需要特殊处理，目前是修改源码引用（各位有好的办法可以推荐给我）,然后将.node 模块拿到运行目录下：

- 修改 node_modules 中对应模块源码的 require 二进制文件的地方，将其修改为：

```js
// 以node-sqlite3为例
将lib / sqlite3.js中的
var binding = require(binding_path)
修改为
var binding = require(process.cwd() + '/node_sqlite3.node')
```

将源码中的 node_sqlite3.node 文件拷贝到编译后的运行目录，将整个文件夹 zip 即可在任何地方运行
