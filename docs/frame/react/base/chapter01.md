# 环境搭建和 HelloWorld 程序

如果不考虑工程化的问题，React 的运行基础环境非常简单，只需要在 HTML 文件中引入两个 js 文件（react.min.js 和 react-dom.min.js）即可开始工作。

## 搭建开发环境

首先我们访问 https://facebook.github.io/react/,在页面中单击网页左上角的React版本（课程录制时是v15.6.1）。点击后下载两个文件。

- react.js：实现 React 核心逻辑，且于具体的渲染引擎无关，从而可以跨平台公用。如果应用要迁移到 React Native，这一部分逻辑是不需要改变的。
- react-dom.js：包含了具体的 DOM 渲染更新逻辑，以及服务端渲染的逻辑，这部分就是与浏览器相关的部分了。
  下载时你需要有科学上网环境，这里不作过多介绍。如果你不会科学上网，可以直接在我网站上进行下载。下载好后，你只需要在你 HTML 中引入这两个文件就可以编写 React 代码了。

## Hello World 程序

按照国际惯例，学习一个新程序知识都要写 HelloWorld 的。我们先动手把这个程序敲出来，然后再讲解。建立工程文件夹，这里假定为 d:/react_demo.视频中使用的代码编辑工具是 VSCode，你可以用其它你习惯的编辑器（如果你是前端新手，建议使用和视频中一样的编辑器，这样可以保证操作一致）。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
        
    <meta charset="UTF-8" />
        
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        
    <title>Document</title>
  </head>
  <body>
        
    <div id="reactContainer"></div>
        
    <script src="./common/react.js"></script>
        
    <script src="./common/react-dom.js"></script>
        
    <script>
      var HelloComponent = React.createClass({
        render: function () {
          return React.createElement('h1', null, 'Hello world')
        }
      })
      ReactDOM.render(React.createElement(HelloComponent, null), document.getElementById('reactContainer'))
    </script>
  </body>
</html>
```

## React.createClass

它的作用是注册一个组件类 HelloComponent,这个组件类只包含一个 render 函数，该函数通过调用 React.createElement 实现了以下 HTML 内容：

```html
<h1>Hello world</h1>
```

## ReactDOM.render()

ReactDOM.render 是 React 的最基本方法，用于将模板转为 HTML 语言，并插入指定的 DOM 节点。
