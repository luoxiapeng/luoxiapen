# 进阶 JSX 语法

## JSX 上的数组输出

使用 JSX 输出数组是有些小坑需要迈过的，在两年前我自学 React 时，没人指导，那时候中文的教程也很少，所以会迈一些坑，我觉的我教程的价值也是帮助大家卖坑，有些坑你在看文档是经常会跌入迈不出来。

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
      let names = ['dmz', '代码仔', 'React']
      var HelloComponent = React.createClass({
        render: function () {
          return (
            <div>
                          
              {names.map(function (name) {
                return <div key={name}>Hello,{name}!</div>
              })}
                      
            </div>
          )
        }
      })
      ReactDOM.render(<HelloComponent name='dmz' />, document.getElementById('reactContainer'))
    </script>
  </body>
   
</html>
```

上边的代码，我们使用了 ES6 的语法 maps 来进行进行循环，循环时需要注意的是，新版本的 React 需要使用 key，如果没有 key 虽然会出来效果，但是控制台会包错。key 的作用是生成虚拟 DOM 时，需要使用 key 来进行标记,DOM 更新时进行比较。

## 数组中的 JSX

我们上边的例子是循环数组的内容到 JSX 中，其实在数组中可以直接使用 JSX 语法，看下面的例子。

```js
let arr = [<h1 key='1'>Hello world!</h1>, <h2 key='2'> React is awesome</h2>]
ReactDOM.render(<div>{arr}</div>, document.getElementById('reactContainer'))
```

JSX 允许直接在模版插入 JavaScript 变量。如果这个变量是一个数组，则会展开这个数组的所有成员。
总结：通过两节课的我们对 JSX 有了初步认识，虽然 React 可以不使用任何其他插件，但是 JSX 的好处太多，React 也鼓励使用，在实际工作中也是百分百使用的，所以以后的课程中我们都会使用 JSX。
