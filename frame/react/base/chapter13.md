# React 表单-可控组件

可控组件和不可控组件：

在 React 中的 input 标签是有些小坑的，input 本身就有自己的缓存机制，然后 React 的 State 也有缓存机制。这两种缓存机制我们在编码中是要进行取舍的。将 input 中的 value 绑定到 state 的 React 组件就是可控组件，反之则是不可控组件。

可控组件：

在 render()函数中设置了 value 的<input>是一个功能受限的组件，渲染出来的 HTML 元素始终保持 value 属性的值，即使用户输入也不会改变。

```js
var MyForm = React.createClass({
  render: function () {
    return (
      <div>
                    
        <input type='text' value='dmz' />
                    
      </div>
    )
  }
})
```

这时候你在浏览器中打开的 dmz 的值是不可变的，甚至连删除都删除不了，这是由 React 的渲染策略决定的。如果要写成功能正常和可用性组件，我们需要编写 onChange 事件，并将 value 绑定到 state 中。

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
      var MyForm = React.createClass({
        getInitialState: function () {
          return { value: 'dmz' }
        },
        handleChange: function (event) {
          this.setState({ value: event.target.value })
          console.log(this.state.value)
        },
        render: function () {
          return (
            <div>
                                  
              <input type='text' value={this.state.value} onChange={this.handleChange} />
                                  
            </div>
          )
        }
      })
      ReactDOM.render(<MyForm />, document.getElementById('demo'))
    </script>
  </body>
   
</html>
```

在情况允许的条件下，我们应该优先考虑编写可控组件。
可控组件的有点：

- 符合 React 单向数据流特性，即从 state 流向 render 输出的结果。
- 数据存储在 state 中，便于访问和处理。
