# this.props.children

this.props 对象的属性与组件的属性一一对应，但有一个例外，就是 this.props.children 属性。它表示组件的所有子节点。

## 子节点

组件经常会写入很多子属性，就像我们 HTML 当中的<ul>下，一定有很多<li>标签。这种子属性的需求，就要用到 this.props.children 属性。

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
      var NotesList = React.createClass({
        render: function () {
          return (
            <ol>
                          
              {React.Children.map(this.props.children, function (child) {
                return <li>{child}</li>
              })}
                      
            </ol>
          )
        }
      })
      ReactDOM.render(
        <NotesList>
           <span>hello</span>   <span>world</span>        
        </NotesList>,
        document.getElementById('demo')
      )
    </script>
  </body>
   
</html>
```

上面代码的 NoteList 组件有两个 span 子节点，他们都可以通过 this.props.children 读取。这里需要注意，this.props.children 的值有三种可能，如果当前组件没有子节点，他就是 undfined；如果有一个子节点，数据类型是 object；如果有多个子节点，数据类型就是 array。所以处理 this.proprs.children 的时候要小心。
