# 构建：generator-react-webpack

react 的生态圈非常庞大，第三方的构建工具也有很多种，这节课介绍一个在业内比较流行的构建工具 generator-react-webpack，它是需要 yeoman 的支持的。

## 优点介绍：

- 基于 webpack 构建，可以很容易的配置自己需要的 webpack。
- 支持 ES6，集成了 Babel-Loader。
- 支持不同风格的 CSS（sass，less，stylus）。
- 支持 PostCSS 转换样式。
- 集成了 esLint 功能。
- 可以轻松配置单元测试，比如 Karma 和 Mocha

## 安装

安装还是在命令行用 npm 进行安装，不过在全局安装 generator-react-webpack 之前，你可以先安装 yeoman。命令如下：

```shell
npm install -g yonpm install -g generator-react-webpack
```

创建目录
我们先用命令自行创建一个文件：new-react-demo

```js
mkdir new-react-demo
```

进入这个文件夹

```js
cd new-react-demo
```

用生成器生成我们的项目目录

```js
yo react-webpack
```
