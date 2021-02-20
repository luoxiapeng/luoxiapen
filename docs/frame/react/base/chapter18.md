# 路由：Hello React 路由

## Router 包安装:

安装包还是要打开命令行工具，使用 npm 来进行安装。

```js
npm install --save react-router react-router-dom
```

react-router：是基本的 router 包，里边函的内容较多，但是在网页开发中有很多用不到，现在的市面上的课程讲的基本都是这个包的教程。
react-router-dom：随着 react 生态环境的壮大，后出现的包，这个包比 react-router 包轻巧了很多。
注意：其实安装了 react-router 包就不用安装了 react-router-dom 包了，这里我们只是为了讲课方便所以安装了两个包。在实际开发中，请根据需要进行安装。安装时使用 – -save，因为这是要在生产环境中使用的。
复习 component
以前学习过 React 的组件如何编写，这里简单复习一下。我们作一个 A 页面的组件（还是接着上节课的程序继续作），我们在/app 文件夹下新建一个 dmz.js 页面。然后引进 React 包，并编写一个 A 页面的组件。请看下面的代码。

dmz.js

```js
import React from 'react'
export default class dmz extends React.Component {
  render() {
    return <div>A默认页面</div>
  }
}
```

这里我们采用了 ES6 的类语法，这也是现在 React 推荐使用的，如果使用老语法会有一条黄色的警告。
写好组件后，引入 index.js 页面，在头部加入引入语句，并改写渲染代码。

```js
import React from 'react'
import ReactDOM from 'react-dom'
import dmz from './dmz'
ReactDOM.render(<dmz />, document.getElementById('app'))
```

引入完成后，预览可以看到我们写的 A 页面的组件。通过上边基本的练习，我们有了一定经验，那么接下来我们仿照上面的方法制作两个新组件,dmzb 和 dmzc。代码如下：

dmzb.js

```js
import React from 'react'
export default class dmzb extends React.Component {
  render() {
    return <div>B页面</div>
  }
}
```

dmzc.js

```js
import React from 'react'
export default class dmzc extends React.Component {
  render() {
    return <div>C页面</div>
  }
}
```

写完三个页面组件以后，我们把这三个页面都引入到 index.js 文件里边。

```js
import dmz from './dmz'
import dmzb from './dmzb'
import dmzc from './dmzc'
```

## 引入和书写路由

三个页面都已经作好，现在就需要路由来切换他们了，先用 import 引入我们的路由包，这里我们用两个模块，一个是 Router（我自己叫它路由器），另一个是 Route（我自己叫它路由）。

```js
import { BrowserRouter as Router, Route } from 'react-router-dom'
```

然后我们改写文件，增加路由设置。

```js
ReactDOM.render(
  <Router>
            
    <div>
                              
      <Route exact path='/' component={dmz} />
                  
      <Route path='/dmzb' component={dmzb} />
                  
      <Route path='/dmzc' component={dmzc} />
              
    </div>
        
  </Router>,
  document.getElementById('app')
)
```

注意：这里的 exact 是精确匹配的意思，比如我们有多层路由进行嵌套时，exact 可以帮助我们精确匹配到你想跳转的路由。
我们路由已经设置完毕了，但是我们现在还不能进行切换，那我们就做个切换的组件，命名为<nav/>

## 制作 Nav 组件

在 app 文件夹下新建一个 nav.js 的文件，先引入 React 和 react-router-dom 两个包。

```js
import React from 'React'
import { NavLink } from 'react-router-dom'
```

编写基本的 nav 组件

```js
const NavBar = () => (
  <div>
        
    <div>
               
      <NavLink exact to='/'>
        dmza
      </NavLink>{' '}
      |&nbsp;    
      <NavLink to='/dmzb'>dmzb</NavLink> |&nbsp;
      <NavLink to='/dmzc'>dmzc</NavLink>    
    </div>
  </div>
)
export default NavBar
```

组件编写完成后，引入 index.js，并添加<Nav/>标签到代码里。

```js
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import dmz from './dmz'
import dmzb from './dmzb'
import dmzc from './dmzc'
import Nav from './nav'
ReactDOM.render(
  <Router>
            
    <div>
               <Nav />
                  
      <Route exact path='/' component={dmz} />
                  
      <Route path='/dmzb' component={dmzb} />
                  
      <Route path='/dmzc' component={dmzc} />
              
    </div>
        
  </Router>,
  document.getElementById('app')
)
```

## 路由：NavLink 中常用选项

Route 和 NavLink 的 exact 选项

一般而言 React 会匹配所有能匹配的路由组阶，exact 可以使我们的匹配更精确。exact 的值为 bool 型，为 true 是表示严格匹配，为 false 时为正常匹配。

```html
<Route path="/" component="{dmz}" /> <Route path="/dmzb" component="{dmzb}" />//这种情况下，输入路由"/dmzb",会把dmz组件也展示出来
```

所以我们经常使用 exact 来解决这个问题。

```html
<Route exact path="/" component="{dmz}" /> <Route path="/dmzb" component="{dmzb}" />
```

在多层路由（路由嵌套）时也会出现这个问题，所以要多使用 exact 来解决精确匹配问题。

## NavLink 使用样式

如果我们想给路由一个样式，这时候我们写了一个 CSS 文件，我们如何才能使用在 NavLink 上？其实这并不难，不过要配置一下 webpack.config.js 文件。
先写一个 CSS 文件，并放在和 nav.js 一个文件夹下,命名为 nav.css。

nav.css

```css
.blue {
   color: blue;
}
```

然后用 es6 的 import 方法引入到 nav.js 组件里。

nav.js

```js
import './nav.css'
```

这时还不能正确出现效果，因为 webpack 还不能对 CSS 文件进行正确的解析，需要我们加入 CSS 的 loader。我们先用 npm 安装 style-loader 和 css-loader。

```js
npm install --save-dev style-loader css-loader
```

安装好后，在 webpack.config.js 里配置 CSS 的 loader。代码如下：

webpack.config.js

```js
{    
  test:/\.css$/,    
  loader:['style-loader','css-loader']
}
```

配置好后，需要重新启动一下服务器，才可以正确解析。这时候我们就可以在 NavLink 上加 className 指定 CSS 类了。

```html
<NavLink exact to="/" className="blue">dmza</NavLink> |&nbsp;
```

现在可以打开浏览器看一下我们配置的结果了。

直接在 NavLink 上写样式

除了这种用 CSS 文件的方式写样式，还可以更直接和玻璃，这节在 NavLink 上写样式，看下面的代码。

```html
<NavLink exact to='/' style={{color:'red',fontSize:'50px'}}>dmza</NavLink>
```

这种方法虽然直观好用，但是不建议在实际开发中使用，这增加了代码的耦合度，不是一种好的编程方式。

## activeClassName

作为一个链接是用激活状态的，激活状态就是当我们处在这个链接时。activeClassName 就是设置激活状态的样式，它接受一个类名，我们现在 nav.css 顶一个 active 的类，把字体设置为红色。

nav.css

```css
.blue {
      color: blue;
}
.active {
      color: red;
}
```

然后改写 NavLink 标签。

nav.js

```js
import React from 'React'
import { NavLink } from 'react-router-dom'
import './nav.css'
const NavBar = () => (
  <div>
    <div>
        
      <NavLink exact to='/' className='blue'>
        dmza
      </NavLink> |&nbsp;   <NavLink to='/dmzb' activeClassName='active'>
        dmzb
      </NavLink> |&nbsp;  <NavLink to='/dmzc' activeClassName='active'>
        dmzc
      </NavLink>
    </div>
  </div>
)
export default NavBar
```

## 路由：404 设置和跳转设置

项目中都要设置 404 页面，也就是当找不到这个路由时我们要跳转的页面。React 中的 404 主要靠 Switch 组件来完成

Switch 组件的使用

编写 404 页面
现在需要一个统一的 404 页面，这里在 app 文件夹下新建一个 error.js 文件。然后封装成组件，方便路由进行调用。

error.js

```js
import React from 'react'
export default class error extends React.Component {
  render() {
    return <h2>404</h2>
  }
}
```

在 nav.js 页面中加入一个不存在的链接 NavLink，为的时让它在错误的时候能自动跳转到 404 页面上。

nav.js

```html
<NavLink to="/react" activeClassName="active">404</NavLink>
```

下面该主角 Switch 上场了，改写我们的 index.js 页面，改为下面的样子。

```js
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import dmz from './dmz'
import dmzb from './dmzb'
import dmzc from './dmzc'
import Nav from './nav'
import Error from './error'
ReactDOM.render(
  <Router>
          
    <div>
      <Nav />
         <Switch>
                        
        <Route exact path='/' component={dmz} />
                        
        <Route path='/dmzb' component={dmzb} />
                        
        <Route path='/dmzc' component={dmzc} />
                        
        <Route component={Error} />
                    
      </Switch>                    
    </div>
        
  </Router>,
  document.getElementById('app')
)
```

然后到浏览器中进行预览，你会看到当点击 404 链接时，因为链接地址是我们瞎写的，但是它跳到了 error.js 页面。注意顺序：错误页面应该在最后面。

## Redirect 组件使用

有时候我们开发中希望在程序中根据业务逻辑进行跳转，或者一个链接点击后直接跳转到其它链接。这时候可以使用 Redirect 组件解决。
引入 Redirect 组件

在 index.js 中引入 Redirect 组件

```js
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
```

加入跳转链接
在 nav.js 里加入一个准备跳转的链接，代码如下。

```html
<NavLink to="/redirect" activeClassName="active">Redirect</NavLink>
```

这时候点击这个链接，会跳转到 404 页面，但是我们希望跳转到 dmzb 页面。
加入`<Redirect>`标签
在 index.js 文件中，加入`<Redirect>`标签。

```js
<Redirect from='/redirect' to='/dmzb' />
```

- from：表示来自于什么链接，也就是当链接是 redirect 时，我们触发跳转命令。

- to：表示要跳转到的链接，这里是跳转到 dmzb 的组件中。
  写完后你可以在浏览器中查看这个跳转效果了。

总结:设置 404 和跳转都要先加入 Switch 的支持，在制作 404 时一定记得要把 404 的 Route 设置到所有路由的后边。跳转时使用 Redirect 标签，这个很容易实现。

## 路由：通过路由传值的方法

最常见的传值

传值是比较简单的。在传值时，主要依靠 props 进行接收，在基础课程中已经讲过组件之间传值的方法。路由和页面之间的传值也很类似。代码还是接着上节课的进行编写。
先在 nav.js 页面传送值，看下面的代码，传送的值为 ILoveWeb。

```html
<NavLink to="/dmzc/ILoveWeb" activeClassName="bbb">dmz-c</NavLink>|&nbsp;
```

我们设置了传值，如果不在路由里告诉路由，它是捕获不到的，所以还需要在路由里进行设置，这里用冒号（：）来通知路由。

```html
<Route path="/dmzc/:param" component="{dmzc}" />
```

在输出参数前，我们在 dmzc.js 页面的声明周期里看一下，这时候的 props 里都有什么值，了解之后，我们再进行输出。

```js
import React from 'react'
export default class dmzc extends React.Component {
  componentWillMount() {
    console.log(this.props)
  }
  render() {
    return <div>C页面</div>
  }
}
```

我们可以在 match 下的 params 发现我们的参数，这时候我们就可以打印在页面上了。打印代码如下。

```js
import React from 'react'
export default class dmzc extends React.Component {
  componentWillMount() {
    console.log(this.props)
  }
  render() {
    return <div>C页面,参数:{this.props.match.params.param}</div>
  }
}
```

## 路由：Router 中的属性和路由模式

现在我们已经掌握了 React 路由导航的基本方法，这节课学习一下标签上的属性和用法。这节课还有一个重点就是路由的 5 种模式讲解。
basename 属性

basename 的作用是个我们增加一级导航目录，比如以前的导航目录是：http://localhost:1717/dmzb 现在想访问同一个页面，但是路径变成 http://localhost:1717/demo/dmzb。这时候就可以使用 basename 属性来设置。basename 属性是放在`<router>`标签里边的。
index.js

```js
<Router basename='demo'>
          
  <div>
           
    <nav />
    <Switch>
        
      <Route exact path='/' component='{dmz}' />
       
      <Route path='/dmzb' component='{dmzb}' />
      <Route path='/dmzc/:param' component='{dmzc}' />
      <Redirect from='/redirect' to='/dmzb' />
      <Route component='{Error}' />{' '}
    </Switch>
                        
  </div>
</Router>
```

设置好后，这时所有的导航路径都加入了 demo 层级。但是要注意，此时设置的是全局增加，如果是单个路由增加你需要特殊个性设置。
forceRefresh 属性
这个属性的作用是开启或者关闭 React Router，也就是说如果你把 forceRefresh 的值设置成真，它将关闭 React 路由系统，而真实的去服务器端请求信息。
现在我们把 forceRefresh 设置成 true，你会发现路由已经不能使用了。

```js
<Router basename='demo' forceRefresh='{true}'>
      
  <div>
            
    <nav />
    <Switch>
                 
      <Route exact path='/' component='{dmz}' />
                  
      <Route path='/dmzb' component='{dmzb}' />
                  
      <Route path='/dmzc/:param' component='{dmzc}' />
                  
      <Redirect from='/redirect' to='/dmzb' />
       
      <Route component='{Error}' />
              
    </Switch>
                
  </div>
</Router>
```

这个操作经常使用在大型项目，在服务器跳转和 ReactRouter 切换时使用。比如作一个 APP 活动页面，第一次请求时我们到服务器端请求整个页面，然后请求后，整个页面 DOM 进行本地缓存，生成 React Router 实现本地单页应用。 只要设置我们的 forceRefresh 就可以了。
5 种路由方式
我们一直在使用的路由方式是 BrowserRouter，也就是浏览器的路由方式，其实 React 还有几种路由方式：

- BrowserRouter：浏览器的路由方式，也是我们一直在学习的路由方式，在开发中最常使用。
- HashRouter：在路径前加入#号成为一个哈希值。Hash 模式的好处是，再也不会因为我们刷新而找不到我们的对应路径了。
- MemoryRouter：不存储 history，所有路由过程保存在内存里，不能进行前进后退，因为地址栏没有发生任何变化。
- NativeRouter：经常配合 ReactNative 使用，多用于移动端，以后 ReactNative 课程中会详细讲解。
- StaticRouter：设置静态路由，需要和后台服务器配合设置，比如设置服务端渲染时使用。
  每种模式都有自己的优缺点，根据项目的需求选择适合项目的就可以。
  要想使用 HashRouter 或者 MemoryRouter 模式，我们必须先用 import 引入。

```js
import { BrowserRouter as Router, HashRouter, MemoryRouter, Route, Switch, Redirect } from 'react-router-dom'
```

HashRouter 设置代码：

```js
<HashRouter basename='demo'>
      
  <div>
           
    <Nav />
            
    <Switch>
                  
      <Route exact path='/' component={dmz} />
       
      <Route path='/dmzb' component={dmzb} />
       
      <Route path='/dmzc/:param' component={dmzc} />
        
      <Redirect from='/redirect' to='/dmzb' />
               
      <Route component={Error} />
              
    </Switch>            
  </div>
</HashRouter>
```

MemoryRouter 设置代码：

```js
<MemoryRouter basename='demo'>
      
  <div>
           
    <nav />
    <Switch>
      <Route exact path='/' component='{dmz}' />
               
      <Route path='/dmzb' component='{dmzb}' />
      <Route path='/dmzc/:param' component='{dmzc}' />
                
      <Redirect from='/redirect' to='/dmzb' />
      <Route component='{Error}' />
              
    </Switch>
                
  </div>
</MemoryRouter>
```

## 路由：prompt 用法讲解

在很多网站应用中，当你想离开页面时都会弹出一个提示框（alert），让你选择是否残忍离开。React 路由也为我们准备了这样的组件，就是 prompt。

`<Prompt>`标签
要使用`<Prompt>`标签先要用 import 进行引入，我们在 dmzb.js 里引入。

```js
import { Prompt } from 'react-router-dom'
```

引入后可以在 render()方法里直接使用。看完整代码如下：

```js
import React from 'react'
import { Prompt } from 'react-router-dom'
export default class dmzb extends React.Component {
  render() {
    return (
      <div>
                        B页面                
        <Prompt message='残忍离开？' />
                    
      </div>
    )
  }
}
```

需要注意的是，如果你用 MemoryRouter 路由模式，`<Prompt>`不起作用。
`<Prompt>`标签有两个属性：
message：用于显示提示的文本信息。
when：传递布尔值，相当于标签的开关，默认是 true，设置成 false 时，`<Prompt>`失效。
那我们如何动态该改变 when 的状态那，这里做一个小实例：写一个按钮，然后设置一个 power 状态，通过点击按钮改变状态，来控制`<Prompt>`标签的启用和关闭。（详细编程思路我会在视频中讲解）

```js
import React from 'react'
import { Prompt } from 'react-router-dom'
export default class dmzb extends React.Component {
  constructor(props) {
    super(props)
    this.state = { power: false }
    this.changePower = this.changePower.bind(this)
  }
  changePower() {
    alert('已经开启')
    this.setState({ power: true })
  }
  render() {
    return (
      <div>
                        
        <p> B页面</p>                
        <Prompt message='残忍离开？' when={this.state.power} />
        <button onClick={this.changePower}>启用</button>
      </div>
    )
  }
}
```
