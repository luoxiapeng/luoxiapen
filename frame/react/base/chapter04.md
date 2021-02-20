# state 成员

## state 成员

组件总是需要和用户互动的。React 的一大创新，就是将界面组件看成一个状态机，用户界面拥有不同状态并根据状态进行渲染输出，用户界面和数据始终保持一致。开发者的主要工作就是定义 state，并根据不同的 state 渲染对应的用户界面。

## setState()

通知 React 组件数据发生变化的方法是调用成员函数 setState(data,callback)。这个函数会合并 data 到 this.state,并重新渲染组件。渲染完成后，调用可选的 callback 回调。（大部分情况下不需要调用回调，因为 React 会负责把界面更新到最新状态）

## 动手敲个小例子

我们用一个小例子来了解一下状态机的机制。该例子包含一个文本框和一个按钮，单击按钮可以改变文本框的编辑状态：禁止编辑或允许编辑。

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
        
    <script src="http://cdn.bootcss.com/babel-core/5.8.38/browser.min.js"></script></head
  > 
  <body>
        
    <div id="reactContainer"></div>
          
    <script type="text/babel">
      var TextBoxComponent = React.createClass({
        getInitialState: function () {
          return { enable: false }
        },
        handleClick: function (event) {
          this.setState({ enable: !this.state.enable })
        },
        render: function () {
          return (
            <p>
                                      
              <input type='text' disabled={this.state.enable} />
                                      <button onClick={this.handleClick}>改变textbox状态</button>                    
            </p>
          )
        }
      })
      ReactDOM.render(<TextBoxComponent />, document.getElementById('reactContainer'))
    </script>
  </body>
   
</html>
```

程序中需要注意的点

- getInitialState 函数必须有返回值，可以是 null,false,一个对象。
- 访问 state 数据的方法是”this.state.属性名”。
- 变量用{}包裹，不需要再加双引号。
