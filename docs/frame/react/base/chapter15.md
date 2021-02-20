# React 项目构建和路由

## 构建：create-react-app 快速脚手架

eact 项目的搭建在实际工作中是很简单的，因为 FaceBook 官方发布了一个无需配置的、用于快速构建开发环境的脚手架工具 create-react-app。
我们可以直接访问它的官网：https://github.com/facebookincubator/create-react-app

creat-react-app 优点

- 无需配置：官方的配置堪称完美，几乎不用你再配置任何东西，就可以上手开发项目。
- 高集成性：集成了对 React，JSX，ES6 和 Flow 的支持。
- 自带服务：集成了开发服务器，你可以实现开发预览一体化。
- 热更新：保存自动更新，让你的开发更简单。
- 全兼容性：自动处理 CSS 的兼容问题，无需添加-webkit 前缀。
- 自动发布：集成好了发布成品功能，编译后直接发布，并且包含了 sourcemaps 功能。

## create-react-app 的安装

安装需要在命令行中进行,在安装 create-react-app 前，你需要安装 node。然后在命令行中输入下面的命令：
windows 系统下：

```shell
 npm install -g create-react-app
```

Liunx 和 Mac 电脑下

```shell
sudo npm install -g create-react-app
```

这里的 -g 是全局安装的意思。

## 创建 React 项目

我们安装好 create-react-app 之后，就可以创建我们的 React 目录了，命令如下：

```js
create-react-app my-app
```

这里是有个小坑的，就是你的目录名不要使用大写，这样作只要是为了严谨性，因为在 Linux 下是严格区分大小写的。

启动服务

直接在命令行中输入：

```shell
npm start
```
