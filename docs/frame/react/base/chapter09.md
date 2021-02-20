## props 属性验证

组件的属性是可以接收任何值的，但有时候我们希望对外界父级组件传递进来的属性数据进行限定，比如希望 name 属性不能缺少、onClick 属性必须是函数类型等，这对确保组件被正确使用非常有意义。为此 React 引入了 propTypes 机制。React.PropTypes 提供各种验证器（validator）来验证传入数据的有效性。当向 props 传入无效数据时，React 会在 JavaScript 控制台抛出警告。

## PropsTypes

我们来作一个小列子，看一下 PropTypes 的用法。

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
      var MyTitle = React.createClass({
        propTypes: {
          title: React.PropTypes.string.isRequired
        },

        render: function () {
          return <h2>{this.props.title}</h2>
        }
      })
      var data = 123
      ReactDOM.render(<MyTitle title={data} />, document.getElementById('demo'))
    </script>
  </body>
   
</html>
```

上面的代码，我们创建了一个组件，组件里有一个 title 属性。PropTypes 告诉 React，这个 title 属性是必须的，而且它的值必须是字符串。而我们在程序中却给它设置为数值。打开浏览器控制台你可以看到报错信息。
更多的 PropTypes 的设置，可以查看官方文档。

## getDefaultProps 默认值设置

使用 getDefaultProps 方法可以用来设置组件属性的默认值。

```js
var MyTitle = React.createClass({
  getDefaultProps: function () {
    return {
      title: 'Hello dmz'
    }
  },
  render: function () {
    return <h2>{this.props.title}</h2>
  }
})
ReactDOM.render(<MyTitle />, document.getElementById('demo'))
```

浏览器这时候显示的是 Hello World。
