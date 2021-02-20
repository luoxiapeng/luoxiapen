# 安装

## install

在安装 Babel 之前，需要用 npm init 先初始化我们的项目。打开终端或者通过 cmd 打开命令行工具，进入项目目录，输入下边的命令：

```
npm init -y
```

-y 代表全部默认同意，就不用一次次按回车了。命令执行完成后，会在项目根目录下生产 package.json 文件。

```json
{
  "name": "es6",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

可以根据自己的需要进行修改，比如我们修改 name 的值。

## 全局安装 Babel-cli

在终端中输入以下命令,如果你安装很慢的话，可以使用淘宝镜像的 cnpm 来进行安装。安装 cnpm 的方法，大家自己百度吧

```
npm install -g babel-cli
```

虽然已经安装了 babel-cli，只是这样还不能成功进行转换，如果你不相信可以输入下边的命令试一下。

```
 babel src/index.js -o dist/index.js
```

你会发现，在 dist 目录下确实生产了 index.js 文件，但是文件并没有变化，还是使用了 ES6 的语法。因为我们还需要安装转换包才能成功转换，继续往下看吧。

## 本地安装 babel-preset-es2015 和 babel-cli

```
npm install --save-dev babel-preset-es2015 babel-cli
```

安装完成后，我们可以看一下我们的 package.json 文件，已经多了 devDependencies 选项。

```js
"devDependencies": {
        "babel-cli": "^6.24.1",
        "babel-preset-es2015": "^6.24.1"
      }
```

## 新建.babelrc

在根目录下新建.babelrc 文件，并打开录入下面的代码

```js
{
        "presets":[
            "es2015"
        ],
        "plugins":[]
    }
```

这个文件我们建立完成后，现在可以在终端输入的转换命令了，这次 ES6 成功转化为 ES5 的语法。

```
 babel src/index.js -o dist/index.js
```

## 简化转化命令

在学习 vue 的时候，可以使用 npm run build 直接利用 webpack 进行打包，在这里也希望利用这种方式完成转换。打开 package.json 文件，把文件修改成下面的样子。

```json
{
  "name": "es6",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "build": "babel src/index.js -o dist/index.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "babel-cli": "^6.24.1",
    "babel-preset-es2015": "^6.24.1"
  }
}
```

修改好后，以后我们就可以使用 npm run build 来进行转换了。
