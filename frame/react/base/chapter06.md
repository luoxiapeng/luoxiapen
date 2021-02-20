# 生命周期

一个组件完整的生命周期包含实例化阶段、活动阶段、销毁阶段三个阶段。每个阶段又由相应的方法管理。
过程中涉及三个主要的动作术语：

- mounting:表示正在挂接虚拟 DOM 到真实 DOM。
- updating:表示正在被重新渲染。
- unmounting:表示正在将虚拟 DOM 移除真实 DOM。

每个动作术语提供两个函数：

- componentWillMount()
- componentDidMount()
- componentWillUpdate(object nextProps, object nextState)
- componentDidUpdate(object prevProps, object prevState)
- componentWillUnmount()

## 实例编写

通过一个简单的实例，来看 React 组件的生命周期。

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
      var AddCount = React.createClass({
        getInitialState: function () {
          console.log('1...getInitialSate')
          return { count: 1 }
        },
        componentWillMount: function () {
          console.log('2...componentWillMount')
        },
        componentDidMount: function () {
          console.log('3...componentDidMount')
        },
        componentWillUpdate: function () {
          console.log('4...componentWillUpdate')
        },
        componentDidUpdate: function () {
          console.log('4...componentDidUpdate')
        },
        handleClick: function (event) {
          this.setState({ count: this.state.count + 1 })
        },

        render: function () {
          return (
            <p>
              {this.state.count}
              <br />
              <button onClick={this.handleClick}>Add</button>
            </p>
          )
        }
      })

      ReactDOM.render(<AddCount />, document.getElementById('demo'))
    </script>
  </body>
</html>
```

这个案例在每个生命周期里都加入了输出语句，我们可以打开控制台看代码的执行过程。
