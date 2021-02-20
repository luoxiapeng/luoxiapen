# React 表单 name 复用

name 复用方式直接读取表单的属性值，比 bind 写法少一个参数（React 中事件响应函数会自动绑定 this）。其原理是在所有的标签中设置统一的 name 属性，并将这个属性值对应为 state 属性，在事件响应函数中通过读取表单的 name 值获得 state 属性，从 event.target.value 获取用户输入的值（check 控件稍有不同），要求所有相关的标签（包括 input 标签）都要统一设置 name 属性。–引用《React 前端技术与工程实践》

也许你会对上边的话不理解，其实这种方法看起来更简单，就是每个标签加一个 name，然后判断 name 来进行 state 的更改。但是我不建议这样使用，因为为每个标签增加一个 name 属性值并不友好。下面我们修改昨天的代码把 bind 复用形式改为 name 复用形式。

其实改的就几个点：改变 handleChange 的方法，然后改变触发方法，直接写成 this.handleChange。

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
        handleChange: function (event) {
          var newState = {}
          newState[event.target.name] = event.target.name == 'checked' ? event.target.checked : event.target.value
          this.setState(newState)
          console.log(newState)
        },
        submitHandler: function () {
          e.preventDefault()
          var is = this.state.checked ? '是' : '不是'
          var gender = this.state.gender == 'man' ? '帅哥' : '美女'
          alert(this.state.username + is + gender + '.')
        },
        render: function () {
          return (
            <form onSubmit={this.submitHandler}>
              <label htmlFor='username'>情输入您的姓名：</label>            
              <input type='text' name='username' onChange={this.handleChange} value={this.state.username} id='username' />
               <br />
              <label htmlFor='checkbox'>是或否：</label>             
              <input type='checkbox' value='是否' name='checked' id='checkbox' onChange={this.handleChange} checked={this.state.checked} />
              <br />
              <label htmlFor='username'>请选择</label>             
              <select name='gender' onChange={this.handleChange} value={this.state.gender}>
                <option value='man'>帅哥</option>                    
                <option value='woman'>美女</option>             
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
        handleChange: function (event) {
          var newState = {}
          newState[event.target.name] = event.target.name == 'checked' ? event.target.checked : event.target.value
          this.setState(newState)
          console.log(newState)
        },
        submitHandler: function () {
          e.preventDefault()
          var is = this.state.checked ? '是' : '不是'
          var gender = this.state.gender == 'man' ? '帅哥' : '美女'
          alert(this.state.username + is + gender + '.')
        },
        render: function () {
          return (
            <form onSubmit={this.submitHandler}>
              <label htmlFor='username'>情输入您的姓名：</label>             
              <input type='text' name='username' onChange={this.handleChange} value={this.state.username} id='username' />
              <br />
              <label htmlFor='checkbox'>是或否：</label>             
              <input type='checkbox' value='是否' name='checked' id='checkbox' onChange={this.handleChange} checked={this.state.checked} />
              <br />
              <label htmlFor='username'>请选择</label>             
              <select name='gender' onChange={this.handleChange} value={this.state.gender}>
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
