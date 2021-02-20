# Vite 简介和搭建 Vue3 开发环境

## Vite 简介

Vite 这个单词是一个法语单词，意思就是轻快的意思。它和我们以前使用 Vue-cli 的作用基本相同，都是项目初始化构建工具，相当于 Vue 项目构建的第二代产品，当然它也包含了项目的编译功能。需要注意一下 Vite 的生产环境下打包是通过 Rollup 来完成的，

> Rollup 是 JavaScriptd 的模块 bundler(打包器)，可以将一小段代码编译为更大或更复杂的内容，例如库或应用程序。

Rollup 是 JavaScriptd 的模块 bundler(打包器)，可以将一小段代码编译为更大或更复杂的内容，例如库或应用程序。

## Vite 特性介绍

- Vite 主打特点就是轻快冷服务启动。冷服务的意思是，在开发预览中，它是不进行打包的。
- 开发中可以实现热更新，也就是说在你开发的时候，只要一保存，结果就会更新。
- 按需进行更新编译，不会刷新全部 DOM 节点。这功能会加快我们的开发流程度。

当然 Vite 和 Vue-cli 还有很多不同的地方，如何理解这种不同那？Vite 属于第二代升级产品，这就好比你去红浪漫，有你熟悉的姑娘，这非常好，当然轻车熟路。但是来了年轻漂亮的新菇娘，在我们钱包允许的情况下，都会选择尝试体验的。

说实话，我工作中也没有使用 Vite，但是我自己的项目中，我愿意尝试这种新的东西。目前 Vite 还是属于 Beta 版本，官网 Github 虽然说在不久就会升级为正式版，但我对尤雨溪团队的理解，这个不久至少在半年以上。

## 开始使用 Vite - npm 版

在使用 Vite 前，你需要知道一点，目前它只支持 Vue3.x 的版本，不支持 Vue2.x 版本。通俗的理解就是我只服侍高端用户。

下面就来看一下如何搭建 Vite 的使用环境活着说叫做 Vite 的使用方法。

先使用 npm init vite-app 进行初始化，你可以随便起一个项目名字，比如就叫做 honglangman。然后进入到项目中。

这时候项目中并没有安装项目所需要的依赖包，所以你要使用 npm install 进行依赖包的安装。 最后直接用 npm run dev 来看看项目是否可以跑起来

```js
npm init vite-app <project-name>
cd <project-name>
npm install
npm run dev
```

如果一切正常，在命令行中，你可以看到如下结果：

```js
vite v1.0.0-rc.9
[vite] Optimizable dependencies detected:
vue

  Dev server running at:
  > Network:  http://192.168.0.118:3000/
  > Local:    http://localhost:3000/
```

这时候，打开浏览器，在地址栏里输入http://192.168.0.118:3000,就可以看到如下页面。

<img src="https://newimg.jspang.com/Vite001.png">

看到这个就说明我们的项目已经搭建好了。下面再使用 yarn 的形式来一遍。

## 用 yarn 来初始化项目

很多人已经开始使用 yarn，所以有必要讲一下 yarn 的初始化方法。

```js
yarn create vite-app <project-name>
cd <project-name>
yarn
yarn dev
```
