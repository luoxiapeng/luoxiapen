# 构建：webpack 一步一步构建

如果你对 webpack 很精通，完全可以自己随心所欲的用 webpack 自己构建一个 React 的开发环境,这节从头开始自己构建一个简单的 React 开发环境。学习这节课前，你要会基本的 webpack 的开发。

## 安装 webpack

在安装 webpack 之前，我们先建立一个文件夹并进入，当然你可以用其他方法，我这里就用命令了。

```js
mkdir react-webpack
cd react-webpack
```

进入文件夹后对我们的 webpack 项目进行初始化，命令如下：

````js
npm init
``
初始化成功后可以在项目根目录下看到package.json文件。如果你一路按回车感觉有些麻烦，你可以直接加一个-y参数，这样npm就直接给我们生成了。

```js
npm init -y
````

package.json 文件建立好以后，你可以安装 webpack 了

```js
npm install --save-dev webpack
```

建议使用 cnpm 来进行安装，这样速度会快很多。安装好后，你会在 package.json 里看到你安装的版本号。这样我们 webpack 就安装好了。

## 配置 webpack.config.js

在项目根目录建立 webpack.config.js 文件，这个文件是进行 webpack 配置的，先建立基本的入口和出口文件。

```js
var path = require('path')
module.exports = {
  //入口文件
  entry: './app/index.js', //出口文件
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  }
}
```

## 新建 index.html 文件

在根目录新建 index.html 文件，并引入 webpack 设置中的出口文件，代码如下。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
        
    <meta charset="UTF-8" />
        
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        
    <title>React全家桶-dmz</title>
  </head>
  <body>
        
  </body>
  <!--引入出口文件-->
  <script src="./dist/index.js"></script>
</html>
```

## 测试 webpack 配置

通过上面的步骤，配置好了 wbpack，现在可以测试一下我们 webpack 配置是否有问题。在路口文件中写入下面的代码，并进行打包测试。
/app/index.js 文件

```js
function component() {
  var element = document.createElement('div')
  element.innerHTML = 'Hello dmz'
  return element
}
document.body.appendChild(component())
```

这段代码非常简单，不作过多的解释。如果你对这个代码看不懂，再去啃两边犀牛或者红宝书。
加入打包命令
打开 package.json 文件，在 scripts 属性中加入 build 命令。

```js
"scripts": {
    "build": "webpack"
  },
```

在终端中输入 npm run build ，就可以看到打包结果了。如果没有出现错误，在浏览器中打开，可以看到我们的编写结果。到这部为止，我们正确安装了 webpack，并进行了出入口的配置，也看到了 webpack 的输出结果。

## 开发服务器配置

你会很容易的发现，我们现在缺少一个实时更新的服务，那动手马上配置一个。
在命令行安装 webpack-dev-server,在终端中输入下面的命令。

```js
cnpm install --save-dev webpack-dev-server
```

安装完成后，配置 webpack.config.js 文件。

```js
devServer:{    

  contentBase:'./',    
  host:'localhost',    
  compress:true,    
  port:1717
}
```

配置好后再 packeage.json 里增加一个 scripts 命令，我们起名叫 server。

```js
"scripts": {   
   "build": "webpack",  
    "server": "webpack-dev-server --open" 
 },
```

这里的–open 是直接打开浏览器的意思。这些都配置完成后，就可以在终端输入 npm run server 看到结果了。

## 自动刷新浏览器

在我们修改代码时，现在并不能自动刷新浏览器，不会立即呈现我们编写的代码结果，而时要再次 npm run build 才可以。其实只要在出口文件配置中加一个 publicPath:’temp/’,然后在 index.html 引入 JS 时写这个 temp 地址就可以实时预览了。

```js
output:{    
  filename:'index.js',    
  path:path.resolve(__dirname,'dist'),    
  publicPath:'temp/'
},
```

index.html 文件引入 JS

```js
<script src='./temp/index.js'></script>
```

## Babel 安装配置

在 webpack 中配置 Babel 需要先加入 babel-loader，这里我们继续使用 npm 来进行安装，但是我们一般还需要支持 es2015 和 React，所以要安装四个包。

```js
cnpm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react
```

这里安装四个包的安装，这个四个包不能省略。安装后你会在 package.json 里看到这些包的版本。

```js
"devDependencies": {  
   "babel-core": "^6.26.0",  
   "babel-loader": "^7.1.2", 
   "babel-preset-es2015": "^6.24.1", 
   "babel-preset-react": "^6.24.1", 
   "webpack": "^3.8.1", 
   "webpack-dev-server": "^2.9.3"
  }
```

## 配置 module

在安装完成后，可以到 webpack.config.js 里配置 module，也就是配置我们常说的 loader。

```js
module: {
  loaders: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: 'babel-loader',
      query: {
        presets: ['es2015', 'react']
      }
    }
  ]
}
```

具体每项参数的作用，请观看视频讲解，这里不作过多介绍。

## 编写 React

webpack 通过上边的步骤，基本已经配置完成了，这里我们写一个 React 文件来进行测试一下。在进行编写 React 文件前，要记得安装 React 和 React-dom 这两个包。
安装 React 和 React-dom

```js
cnpm install --save react  react-dom
```

安装完成后，我们改写 app/index.js 文件，把原来原生的 JavaScript 代码改成 React 代码。
index.js

```js
import React from 'react'
import ReactDOM from 'react-dom'
ReactDOM.render(<div>Hello dmz</div>, document.getElementById('app'))
```

因为上边我们加了一个 app 的选择器，所以在 index.html 中增加一个 div 标签，并把 id 设置成 app。
index.html

```html
<div id="app"></div>
```
