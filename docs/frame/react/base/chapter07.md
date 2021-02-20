# React 组件小实例-必做练习

在了解了基本的钩子函数后，我们再作一个跟生命周期有关的小效果，进一步了解生命周期的用途。练习这个案例还可以对 React 的 State 和 props 有更深入的了解。这个案例是自定义一个组件，并把组件进行不断闪烁，形成一种动画形式。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
        
    <meta charset="UTF-8" />
        
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        
    <title>生命周期案例</title>
        
    <script src="./common/react.js"></script>
        
    <script src="./common/react-dom.js"></script>
        
    <script src="http://cdn.bootcss.com/babel-core/5.8.38/browser.min.js"></script>
  </head>
  <body>
        
    <div id="demo"></div>
        
    <script type="text/babel">
      var Hello = React.createClass({
        getInitialState: function () {
          return { opacity: 1.0 }
        },
        componentDidMount: function () {
          setInterval(
            function () {
              var opacity = this.state.opacity
              opacity -= 0.05
              if (opacity < 0.1) {
                opacity = 1.0
              }
              this.setState({ opacity: opacity })
            }.bind(this),
            100
          )
        },
        render: function () {
          return (
            <div style={{ opacity: this.state.opacity }}>
                                     <h2>Hello {this.props.name}</h2>                   
            </div>
          )
        }
      })
      ReactDOM.render(<Hello name='world' />, document.getElementById('demo'))
    </script>
  </body>
</html>
```
