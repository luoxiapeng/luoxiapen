# 表单的应用  

## 表单的事件响应和 bind 复用

事件响应

表单组件可以通过设置 onChange()回调函数来监听组件变化。当用户的交互行文导致一下变化时，onChange()被执行并通过浏览器做出响应。

- `<input>`或`<textarea>`的 value 发生变化。
- `<input>`的 checked 状态改变。
- `<option>`的 selected 状态改变。

## bind 复用

bind 方法为事件相应函数增加一个参数，事件响应函数通过该参数识别事件源。

我们作一个文本框，并使用 bind 进行复用，我希望你自己可以亲自动手敲一下代码，加深对 bind 复用的理解。

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
          return { username: '', gender: 'man', checked: true }
        },
        handleChange: function (name, event) {
          var newState = {}
          newState[name] = name == 'checked' ? event.target.checked : event.target.value
          this.setState(newState)
          console.log(newState)
        },
        submitHandler: function (e) {
          e.preventDefault()
          var is = this.state.checked ? '是' : '不是'
          var gender = this.state.gender == 'man' ? '帅哥' : '美女'
          alert(this.state.username + is + gender + '.')
        },
        render: function () {
          return (
            <form onSubmit={this.submitHandler}>
              <label htmlFor='username'>情输入您的姓名：</label>             
              <input type='text' name='username' onChange={this.handleChange.bind(this, 'username')} value={this.state.username} id='username' />
              <br />
              <label htmlFor='checkbox'>是或否：</label>             
              <input type='checkbox' value='是否' name='checked' id='checkbox' onChange={this.handleChange.bind(this, 'checked')} checked={this.state.checked} />
              <br />
              <label htmlFor='username'>请选择</label>             
              <select name='gender' onChange={this.handleChange.bind(this, 'gender')} value={this.state.gender}>
                                    <option value='man'>帅哥</option>                    <option value='woman'>美女</option>             
              </select>
              <br />
              <button type='submit'>提交</button>             
            </form>
          )
        }
      })
      ReactDOM.render(<MyForm />, document.getElementById('demo'))
    </script>
  </body>
   
</html>
```

上边的代码精髓就在 handleChange 里边，所以一定要注意里边的写法，因为在 React 中这非常常用。

```js
handleChange:function(name,event){                
  var newState={};               
   newState[name]=name=="checked"?event.target.checked:event.target.value;         
   this.setState(newState); 
   console.log(newState);          
},
```

另外需要注意的是在`<label>`标签里的 for 不能在正常使用了，而是要写成 htmlFor。
