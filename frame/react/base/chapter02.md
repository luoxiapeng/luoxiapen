# 初识 JSX 语法

JSX 即 Javascript XML，它使用 XML 标记来创建虚拟 DOM 和声明组件。第 02 节的 HelloWorld 程序从本质上能完成所有的工作。只是有一些开发效率问题，比如 JavaScript 代码与标签混写在一起、缺乏模板支持等。而使用 JSX，则可以有效解决这些问题。

## 加入 JSX 语法支持

如果要使用 JSX 语法的支持，你可以使用 Babel 来进行转换，但是为了讲解方便我们这里直接引入 Babel 的核心文件 browser.min.js。你可以去网上提供的静态资源库引用（http://www.bootcdn.cn/），也可以自己下载。
重写 HelloWorld
写的 HelloWorld 程序，这节课我们用 JSX 的方式进行重写。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
        
    <meta charset="UTF-8" />
        
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        
    <title>Document</title>
        
    <script src="./common/react.js"></script>
        
    <script src="./common/react-dom.js"></script>
        
    <script src="http://cdn.bootcss.com/babel-core/5.8.38/browser.min.js"></script>
           
  </head>
  <body>
        
    <div id="reactContainer"></div>
              
    <script type="text/babel">
      var HelloComponent = React.createClass({
        render: function () {
          return <h1>Hello World</h1>
        }
      })
      ReactDOM.render(<HelloComponent />, document.getElementById('reactContainer'))
    </script>
  </body>
</html>
```

通过上边的代码你可以发现 JSX 的好处:

- 可以使用熟悉的语法仿照 HTML 来定义虚拟 DOM。
- 程序代码更加直观。
- 于 JavaScript 之间等价转换，代码更加直观。

## JSX 中的表达式

JSX 是支持表达式的，你只要使用{}括号，就可以使用表达式了。我们把 HelloWorld 程序改写成使用表达式的。
我们把上边的程序改写成带表达式的形式。

```js
var HelloComponent = React.createClass({
  render: function () {
    return
    ;<h1>Hello {this.props.name ? this.props.name : 'world'}</h1>
  }
})
ReactDOM.render(<HelloComponent name='dmz' />, document.getElementById('reactContainer'))
```

需要注意的是表达式不支持 if…else 这样的语句，但是支持三元运算符和二元运算符。
