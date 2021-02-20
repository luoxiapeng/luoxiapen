# React 表单-不可控组件

在 input 标签中不把 value 绑定到 state 上的就是不可控组件，它的数据不合 state 对应，所以在开发时会给自己挖很多坑，但是不可控组件并不是不可掌控，就用一节课的时间，我们了解一下不可控组件的小技巧。
我们先来做一个最简单的不可用组件。

```js
var MyForm = React.createClass({
  render: function () {
    return (
      <div>
                        
        <input type='text' />
                    
      </div>
    )
  }
})
```

组件完成之后给它加上一个 onChange 事件，发现是可以监控到变化值的。如果要获得 iput 中的 value 值，需先拿到其 DOM 节点，然后获取其 value 值。

```js
var MyForm = React.createClass({
  handleChange: function () {
    var inputValue = ReactDOM.findDOMNode(this.refs.dmz).value
    console.log(inputValue)
  },
  render: function () {
    return (
      <div>
                        
        <input type='text' onChange={this.handleChange} ref='dmz' />
                    
      </div>
    )
  }
})
```

当然我们也可以给 input 加入默认值，但是不是 value 了，而是 defaultValue。

```html
<input type="text" onChange="{this.handleChange}" ref="dmz" defaultValue="dmz" />
```
