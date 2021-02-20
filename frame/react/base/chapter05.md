# props 和 render 成员

props 是组件固有属性的集合，其数据由外部传入，一般在整个组件的生命周期中都是只读的。属性的初识值通常由 React.createElement 函数或者 JSX 中标签的属性值进行传递，并合并到组件实例对象的 this.props 中。

## props 实例

这里一点点写一个真实的 props 程序，并让大家更加了解如何定义 props。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
        
    <meta charset="UTF-8" />
        
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        
    <title>React-props</title>
        
    <script src="./common/react.js"></script>
        
    <script src="./common/react-dom.js"></script>
        
    <script src="http://cdn.bootcss.com/babel-core/5.8.38/browser.min.js"></script>
  </head>
  <body>
        
    <div id="demo"></div>
        
    <script type="text/babel">
      let HelloBox = React.createClass({
        render: function () {
          return <div>{'Hello ' + this.props.myattr}</div>
        }
      })
      ReactDOM.render(<HelloBox myattr='world' />, document.getElementById('demo'))
    </script>
  </body>
</html>
```

我们不应该修改 props 中的值。事实上，如果要在组件外更改也是一个很麻烦的事，需要找到组件实例，这没有必要。在设计组件时，就要想好组件哪些使用 state，哪些使用 props 集合，那些使用 state 集合。通常固定的组件内只读的、应由父组件传递进来的属性适合放在 props 集合中，如组件的类名、颜色、字体、事件响应回调函数等。

## props 与 state 的区别

props 不能被其所在的组件修改，从父组件传递进来的属性不会在组件内部更改；state 只能在所在组件内部更改，或在外部调用 setState 函数对状态进行间接修改。

## render 成员函数

首先说 render 是一个函数，它对于组件来说，render 成员函数是必需的。render 函数的主要流程是检测 this.props 和 this.state,再返回一个单一组件实例。
render 函数应该是纯粹的，也就是说，在 render 函数内不应该修改组件 state，不读写 DOM 信息，也不与浏览器交互。如果需要交互，应该在生命周期中进行交互。
