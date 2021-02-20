# 获取真实 DOM 节点

React 中的 DOM 也是虚拟 DOM（virtual DOM），这点跟我们以前讲的 Vue 非常类似。只有当它插入文档以后，才会变成真实的 DOM。React 也是在虚拟 DOM 发生变化时，进行比对后，只渲染变化的部分，它是 React 极高性能的主要原因之一。
但是有时候我们需要从组件中获取真实的 DOM 节点，来进行业务逻辑的编写，React 为我们提供了 ref 属性。下面我们通过一个实例来了解 Ref 的用法。

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
        
    <script src="http://cdn.bootcss.com/babel-core/5.8.38/browser.min.js"></script></head
  > 
  <body>
        
    <div id="demo"></div>
        
    <script type="text/babel">
      var MyComponent = React.createClass({
        handleClick: function () {
          this.refs.myTextInput.focus()
        },
        render: function () {
          return (
            <div>
                                      
              <input type='text' ref='myTextInput' />
                                      
              <input type='button' value='Focus the text input' onClick={this.handleClick} />
                                  
            </div>
          )
        }
      })
      ReactDOM.render(<MyComponent />, document.getElementById('demo'))
    </script>
  </body>
   
</html>
```

这个案例很简单，就是有一个文本框，当你点击按钮时，光标定位到文本框里。这时就必须获取真实的 DOM 节点，虚拟 DOM 是拿不到用户输入的。为了做到这一点，文本框必须有一个 ref 属性，用 this.refs.xxx 就可以返回真实的 DOM 节点。
注意：
由于 this.refs.[refName]属性获取的是真实 DOM，所以必须得到虚拟 DOM 插入文档以后，才能使用这个属性，否则会报错。
