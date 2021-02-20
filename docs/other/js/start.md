# javascript

## typeOf 能判断那些类型

答案：

- 值类型：（Number，string,boolean,null,undefined,symbol）
- 引用类型（function，Array,Object,Date）

## 深拷贝

```js
function deepClone(obj = {}) {
  if (typeof obj !== 'object' || obj == null) return obj
  let result
  if (obj instanceof Array) {
    result = []
  } else {
    result = {}
  }
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = deepClone(obj[key])
    }
  }
  return result
}
```

## 原型和原型链

js 基于原型的继承
Es6 中的 class 也是原型继承

- 如何准备判断一个变量是不是一个数组？
- 手写一个简易的 Jquery，考虑插件和扩展性
- class 的原型本质，怎么去理解

知识点：

- class
- instanceOf
- 原型和原型连

class

- constructor
- 属性
- 方法

```js
class Student {
  constructor(name, number) {
    this.name = name
    this.number = number
  }
  sayHi() {
    console.log(`姓名${this.name}`)
  }
}
通过类扩展实例

const xialuo = new Student('夏洛', 100)
```

```js
父类
class People {
  constructor(name) {
    this.name = name
  }
  eat() {
    console.log(`${this.name} eat something`)
  }
}
子类
class Student extends People {
  constructor(name, number) {
    super(name)
    this.number = number
  }
  sayHi() {
    console.log(`姓名${this.name}`)
  }
}
```

## instanceOf

判断变量是否为对应的类型

```js
xialuo instanceOf Student //true
xialuo instanceOf People  // true
xialuo instanceOf Object  // true

[] instanceOf Array //true
[] instanceOf Object // true

{} instanceOf Object //true
```

## 原型

```js
class 实际上是函数，可见是语法糖

typeof People //'function'
typeof Student //'function'

// 隐式原型和显示原型

console.log(xialuo.__proto__) //直接打印出继承的第一层，原型People
console.log(Student.prototype)
console.log(xialuo.__proto__==Student.prototype)  //true
```

## 原型关系

- 每个 class 都有显示类型原型 prototype
- 每个实例都有隐式原型**proto**
- 实例的**proto**指向对应 class 的 prototype

## 原型规则

- 获取属性 xialuo.name 或者执行方法 xialuo.sayhi()时
- 先在自身属性和方法寻找
- 如果找不到则自动去**proto**中查找

## 原型链

- console.log(Student.prototype.**proto**)
- console.log(People.prototype)
- console.log(People.prototypr===Student.prototype**proto**)

## hasOwnproperty

判断对象是否存在该方法或者属性

instanceOf 判断是否在对应的原型上的（一层一层往上找）

class 是 ES6 语法规范，由于 ECMA 委员会发布
都是 V8 引擎的实现方法，也是主流

题目解答：

如何判断一个变量是数组？

答案： a instanceOf Array

class 的原型本质？

- 原型和原型链的图示
- 属性和方法的执行规则

手写 Jquery 插件，可扩展性？

```js
基本结构：

class jQuery{
    constructor(selector){
        const result=document.querySelectorAll(selector)
        const length=result.length
        for(let i=0;i<length;i++){
            this[i]=result[i]
        }
        this.length=length
        this.selector=selector
    }
    get(index){
        return this[index]
    }
    each(fn){
        for(let i=0;i<this.length;i++){
            const elem=this[i]
            fn(elem)
        }
    }
    on(type,fn){
        return this.each(elem=>{
            elem.addEventListener(type,fn,false)
        })
    }
}
// 插件的形式

jQuery.prototype.dialog=function(info){
    alert(info)
}
// 复写机制。造轮子

class myJQury extend jQuery{
    constructor(selector){
        super(selector)
    }
    // 扩展自己的方法

    addClass(className){

    }
    style(data){

    }

}

```

使用

```js
const $p = new jQuery('p')
$p.get(1)
$p.each(elem => console.log(elem.nodeName))
$p.on('click', () => alert('clicked'))
```

## 作用域和闭包

题目：

- this 的不同应用场景，如何取值？
- 手写 bind 函数
- 实际开发中闭包的应用场景

```js
创建10个‘<a>’标签，点击的时候弹出来应用的序号

let i,a

for (i=0;i<10;i++){
    a=document.createElement('a')
    a.innerHTML=i+'<br>'
    a.addEventListener('click',function(e)=>{
        e.preventDefault()
        alert(i)
    })
    document.body.appendChild(a)
}
```

知识点：

- 作用域和自由变量
- 闭包
- this

## 作用域

```js
let a = 0
function fn1() {
  let a1 = 100
  function fn2() {
    let a2 = 200
    function fn3() {
      let a3 = 300
      return a + a1 + a2 + a3
    }
    fn3()
  }
  fn2()
}
fn1()
```

- 全局作用域
- 函数作用域
- 块级作用域（Es6 新增）

// Es6 块级作用域

```js
if (true) {
  let x = 100
}
console.log(x) // 会报错
```

自由变量：

- 一个变量在当前作用域没有定义，但被使用了
- 向上级作用域，一层一层依次寻找，直至找到为止
- 如果到全局作用域都没有被找到，则报错 xx is not defined

## 闭包

- 作用域应用的特殊情况，有两种表现
- 函数作为参数被传递
- 函数作为返回值

函数作为返回值

```js
function create() {
  let a = 100
  return function () {
    console.log(a) //100
  }
}
let fn = create()
let a = 200
fn()
```

函数作为参数

```js
function print(fn) {
  let a = 200
  fn()
}
let a = 100

function fn() {
  console.log(a) //100
}

print(fn)
```

所有自由变量的查找，是在函数定义的地方，向上级作用域查找，不是在执行的地方

## this

- 作为普通函数
- 使用 call apply bind
- 作为对象方法被调用
- 在 class 方法被调用
- 箭头函数

this 取什么值是在函数执行的时候决定的

```js
function fn1() {
  console.log(this)
}
fn1() //window

fn1.call({ x: 100 }) //{x:100}

const fn2 = fn1.bind({ x: 200 })
fn2() //{x:200}
```

场景应用：

```js
const hangman={
    name:'张三',
    sayHi(){
        // this既当前对象
        console.log(this)
    },
    wait(){
        setTimeout(function(){
            // this===window
            console.log(this)
        })
    }
}


const hangman={
    name:'张三',
    sayHi(){
        // this既当前对象
        console.log(this)
    }

    waitAgain(){
        setTimeout(()=>{
            // this 既当前对象
            console.log(this)
        })
    }
}
```

手写 bind 函数

```js
Function.prototype.bind1 = function () {
  //将参数解析为数组
  const args = Array.prototype.slice.call(arguments)
  // 获取this(取出数组第一项，数组剩余的就是传递的参数)
  const t = args.shift()

  //谁调用就是谁，fn1.bind(...)
  const self = this // 当前函数
  // 返回一个函数
  return function () {
    // 执行原函数，并返回结果
    return self.apply(t, args)
  }
}
```

实际开发中闭包的应用

- 隐藏数组

```js
// 闭包隐藏数据，只提供Api

function createCache(){
    const data={} // 闭包中的数据，被隐藏，不被外界访问
    return {
        set:function(key,val){
            data[key]=val
        }
        get:function(key){
            return data[key]
        }
    }
}
```

原型链执行的方式

```js
xialuo.__proto__.sayHi() // 姓名：undefined 学号undefined

因为：

xiaoluo.__proto__.name 获取到的值为undefined

为什么 xialuo.sayHi()可以直接获取到？

因为this指向的是sayHi本身，执行机制是xialuo.__proto__.sayHi.call(xialuo)


```

## 异步和单线程

- 同步和异步的区别是什么
- 手写用 Promise 加载一张图片
- 前端使用异步的场景

题目：

```js
//setTimeout

console.log(1)

setTimeout(function () {
  console.log(2)
}, 1000)
console.log(3)
setTimeout(function () {
  console.log(4)
}, 0)
console.log(5)
```

- 单线程和异步
- 应用场景
- callback hell 和 promise

Js 是单线程语言，只能同时做一件事

浏览器和 node.js 已支持 js 启动线程

应用场景

```js
// ajax
console.log('start')
$.get('./data1.json', function (data1) {
  console.log(data1)
})
console.log('end')
```

```js
// 图片加载

console.log('start')
let img = document.createElement('img')
img.onload = function () {
  console.log('loaded')
}
img.src = '/xxx.png'
console.log('end')
```

## callback hell

```js
// 获取第一份数据

$.get(url, data1 => {
  console.log(data1)
  // 获取第二份数据
  $.get(url2, data2 => {
    console.log(data2)
    $.get(url3, data3 => {
      console.log(data3)
    })
  })
})
```

## Promise

```js
function getData(url) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url,
      success(data) {
        resolve(data)
      },
      error(err) {
        reject(err)
      }
    })
  })
}
```

```js
const url1 = '/data1.json'
const url2 = '/data2.json'
const url3 = './data3.json'

getData(url1)
  .then(data1 => {
    console.log(data1)
    return getData(url2)
  })
  .then(data2 => {
    console.log(data2)
    return getData(url3)
  })
  .then(data3 => {
    console.log(data3)
  })
  .catch(err => console.error(err))
```

- 同步和异步的区别？

  - 基于 js 是单线程语言
  - 异步不会阻塞代码执行
  - 同步汇阻塞代码执行

- 手写 promise 加载一张图片

```js
function loadImg(src) {
  return new Promise((resolve, reject) => {
    const img = document.createElement('img')
    img.onload = () => {
      resolve(img)
    }
    img.onerror = () => {
      const err = new Error(`图片加载失败${src}`)
      reject(err)
    }
    img.src = src
  })
}
const url = '图片路径'

loadImg(url)
  .then(img => {
    console.log(img.width)
  })
  .then(img => {
    console.log(img.height)
  })
  .catch(ex => console.error(err))
```

异步场景

- 网络请求，如 ajax 图片加载
- 定时任务，如 setTimeout

## js 基础到 js web Api

- js 基础知识，规定语法
- js web API 网页操作的 Api
- 前者是后者的基础，两者结合才能真正实际结合

js web API

- DOM
- BOM
- 事件绑定
- ajax
- 存储

DOM 操作

- 数据结构
- 常用 API
- attr 和 property 的区别

知识点

- DOM 本质

  - 本质就是一棵 DOM 树

- DOM 节点操作
  - 获取 DOM 节点
  - attribute（setAttribute,getAttribute）
  - property

property 和 attribute？

- property:修改对象属性，不会体现到 html 结构中
- attribute：修改 html 属性，会改变 html 结构
- 两者都有可能引起 DOM 重新渲染

- DOM 结构操作
  - 新增/插入节点
    - createElement
    - appendChild
  - 移除节点
    - removeChild
  - 获取父元素
    - parentNode
  - 获取子元素列表
    - childNodes
- DOM 性能
  - 避免频繁操作 DOM
  - 对 DOM 查询做缓存
  - 一次性操作

避免频繁操作 DOM

```js
频繁操作：

// 不缓存DOM查询结果
for(let i=0; i<document.getElementsByTagName('p').length;i++){
    //每次循环，都会计算length，频繁进行DOM查询
}


// 缓存DOM查询结果

const pList=document.getElementsByTagName('p')
const length=pList.length

for(let i=0;i<length;i++){
    //缓存 length，只进行一次DOM查询
}
```

```js
// 将频繁操作改为一次性操作

const listNode = document.getElementById('list')
// 创建一个文档片段，此时没有到DOM树上
const frag = document.createDocumentFragment()

//执行插入

for (let x = 0; x < 10; x++) {
  const li = document.createElement('li')
  li.innerHTML = 'list item' + x
  frag.appendChild(li)
}

// 都完成之后，再统一插入到DOM树中

listNode.appendChild(frag)
```

## 事件

- 题目

  - 编写一个通用的事件监听函数
  - 描述事件冒泡的流程
  - 无限下拉图片列表，如何监听每个图片的点击？

- 知识点
  - 事件绑定
  - 事件冒泡
  - 事件代理

事件绑定

```js
const btn = document.getElementById('btn1')
btn.addEventListener('click', event => {
  console.log('clicked')
})
```

```js
// 通用的绑定函数

function bindEvent(ele, type, fn) {
  ele.addEventListener(type, fn)
}
const a = document.getElementById('link1')
bindEvent(a, 'click', e => {
  e.preventDefault() //阻止默认行为
  alert('clicked')
})
```

事件冒泡

```js
const p1 = document.getElementById('p1')
const body = document.body
bindEvent(p1, 'click', e => {
  e.stopPropagation() // 阻止事件冒泡
  alert('激活')
})
bindEvent(body, 'click', e => {
  alert('取消')
})
```

事件代理

- 代码简洁
- 减少浏览器内存占用
- 但是，不要滥用（瀑布流场景）

```html
 <div id="div1>
   <a>a1</a>
   <a>a2</a>
 </div>
```

```js
const div1 = document.getElementById('div1')
div1.addEventListener('click', e => {
  const target = e.target
  if (e.nodeName === 'A') {
    alert(target.innerHTML)
  }
})
```

```js
function bindEvent(elem, type, selector, fn) {
  if (fn == null) {
    fn = selector
    selector = null
  }
  elem.addEventListener(type, event => {
    if (selector) {
      // 代理绑定,matches判断是否满足标签选择器
      if (target.matches(selector)) {
        fn.call(target, event)
      }
    } else {
      // 普通绑定
      fn.call(target, event)
    }
  })
}

bindEvent(div1, 'click', 'a', e => {
  alert('取消')
})

bindEvent(div2, 'click', function (event) {
  event.preventDefault()
  // this,这里指向是fn，如果是箭头函数则指向window
  alert(this.innerHTML)
})
```

## ajax

- 手写一个简易的 ajax
- 跨域的常用方式

知识点

- XMLHttpRequest
- 状态码
- 跨域：同源策略

XMLHttpRequest

```js
// get请求

const xhr = new XMLHttpRequest()

// true 是代表异步请求
xhr.open('GET', '/api', false)
xhr.onreadystatechange = function () {
  // 这里的函数异步执行，可参考之前JS基础中的异步模块
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      console.log(JSON.parse(xhr.responseText))
      alert(xhr.responseText)
    }
  }
}
xhr.send(null)
```

## xhr.readyState

- 0(未初始化)还没有调用 send()方法
- 1(载入)已调用 send()方法，正在发送请求
- 2(载入完成)send()方法执行完成，已经接收到全部响应内容
- 3(交互)正在解析响应内容
- 4(完成)响应内容解析完成，可以在客户端调用

## 同源策略

- ajax 请求，浏览器要求当前网页和 serve 必须同源（安全）
- 同源：协议，域名，端口，三者必须一致

场景

- 加载图片，css ，js 可以无视同源策略
- <img src=""></img>
- <link></link><script></script>

跨域

- 所有的跨域必须经过 server 端允许和配合

## JSONP

- 访问https://imooc.com/.服务端一定返回一个html文件吗？
- 服务器可以任意动态拼接数据返回，只要符合 html 格式要求
- 同理于<script src="https://imooc.com/getData.js"></script>

```js
<script>
  window.callback=function(data){
      // 这是我们跨域得到的信息
      console.log(data)
  }
</script>
<script src="https://imooc.com/getData.js"></script>
将返回callback({x:100,y:200})
```

jquery 实现 jsonP

```js
$.ajax({
  url: 'http://localhost:8882/x-origin.json',
  dataType: 'jsonp',
  jsonpCallback: 'callback',
  success: function (data) {
    console.log(data)
  }
})
```

题目：

手写一个简易 的 ajax

```js
function ajax(url) {
  const p = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', url, true)
    xhr.onreadstateChange = function () {
      if (xhr.readstate == 4) {
        if (xhr.status == 200) {
          resolve(xhr.responseText)
        } else if (xhr.status === 404) {
          reject(new Error('404 not found'))
        }
      }
    }
    xhr.send(null)
  })
  return p
}
const url = '/data/test.json'
ajax(url)
  .then(data => {
    console.log(data)
  })
  .catch(err => console.log(err))
```

ajax 实现的基本需求

```js
$.ajax({
    //请求方式
    type:"POST",
    //请求类型
    contentType:"application/json;charset=UTF-8",
    //请求地址
    url:"http://127.0.0.1/admin/list/",
    //数据，json字符串
    data:JSON.stringfy(list),
    //请求成功
    success：function(result){
        console.log(result)
    }
    // 请求失败，包含具体的错误信息
    error:function(e){
        console.log(e.status)
        console.log(e.responseText)
    }
})
```

## fetch

一个基本的 fetch 请求设置起来很简单

```js
fetch('http://example.com/movies.json')
  .then(function (response) {
    return response.json()
  })
  .then(function (myJson) {
    console.log(myJson)
  })
```

## 存储

- cookie
- localStorage
- sessionStorage

cookie

```js
document.cookie = 'a=100'
```

## git

- git add . 提交所有修改的文件
- git commit -m '注释' 提交到 git 服务器
- git checkout -b '分支名' 新建分支
- git checkout . 回滚提交
- git checkout 分支名称 切换分支
- git status 查看修改文件以及提交记录
- git stash 将修改代码临时存放起来
- git stash pop 切换分支后将改变的代码放开
- git branch 查看已有的分支
- git push origin 分支名 推送到远程分支
- git diff 查看现在文件和改变文件的变化
- git fetch 拉取远程分支
- git log 查看提交记录
- git merge 分支名 合并分支

## webpack 和 babel

- Es6 模块化，浏览器暂不支持
- ES6 语法，浏览器并不完全支持
- 压缩代码，整合代码，让网页加载更快

## Linux

- ssh word(用户名)@192.168.10.21(主机)
- mv index.html index1.html 修改文件名
- mv index.html ../../ 移动文件
- cp index.js index1.js 复制文件
- rm index1.js 删除文件
- rm -rf src 删除文件夹
- touch d.js 新建文件
- vi d.js 新建文件再进入 vi 编辑器
- cat package.json 打开并打印文件内容到控制台
- head package.json 打开并且打印前几行
- tail package.json 打印末尾那几行
- grep "bable" package.json 查找文件中的关键字

## 运行环境

- 网页加载过程
- 性能优化
- 安全

网页加载过程

- 从输入 url 到渲染出页面的整个过程？
- window.onload 和 DOMContentLoaded 的区别？

资源形式：

- html 代码
- 媒体文件
- javascript css

加载过程

- DNS 解析：域名->IP 地址
- 浏览器根据 IP 地址向服务器发起 http 请求
- 服务器处理 http 请求，并返回给浏览器

渲染过程：

- 根据 HTML 代码生成 DOM Tree
- 根据 css 代码生成 CSSOM
- 将 DOM Tree 和 CSSOM 整合形成 Render Tree

## 性能优化

- 手写防抖，节流
- 多使用内存，缓存或其他方法
- 减少 cpu 计算量，减少网络加载耗时
- 空间换时间

缓存

- 静态资源加 hash 后缀，根据文件内容计算 hash
- 文件内容不变，则 hash 不变，则 url 不变
- url 和文件不变，则会自动触发 http 缓存机制，返回 304

## ssr

- 服务器端渲染：将网页和数据一起加载，一起渲染
- 非 ssr（前后端分离）

## 防抖 debounce

- 监听一个输入框的，文字变化后触发 change 事件
- 直接用 keyup 事件，则会频发事件

```js
const input1 = document.getElmentById('input1')
let time = null
input1.addEventListener('keyup', function () {
  if (timer) {
    clearTimeout(timer)
  }
  timer = setTimeout(() => {
    console.log(input1.value)
  }, 500)
  timer = null
})
```

```js
function debounce(fn, delay = 500) {
  let timer = null

  return function () {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments)
    }, delay)
  }
}
input1.addEventListener(
  'keyup',
  debounce(() => {
    console.log(input1.value)
  }),
  600
)
```

## 节流 throttle

- 拖拽一个元素时，要随时拿到该元素被拖拽的位置
- 直接用 drag 事件，则会频发触发，很容易造成卡顿
- 节流：无论拖拽速度多快，都会每隔 100ms 触发一次

```js
const div1 = document.getElementById('div1')
let timer=null
div.addEventListener('drag',function(e)=>{
    if(timer){
        return
    }
    timer=setTimeout(()=>{
       console.log(e.offsetX,e.offsetY)
       timer=null
    },500)
})
```

```js
function throttle(fn, delay = 100) {
  let timer = null
  return function () {
    if (timer) {
      return
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments)
      timer = null
    }, delay)
  }
}
div1.addEventListener(
  'drag',
  throttle(function (e) {
    console.log(e.offsetX, e.offsetY)
  }, 200)
)
```

## 安全

- 常见的 web 前端攻击方式有那些？
  - xss 跨站请求攻击
  - xsrf 跨站请求伪造

## xss 攻击

- 一个博客网站，我发表一篇博客，其中嵌入 script 脚本
- 脚本内容，发送到我的服务器（服务器配合跨域）
- 收集 cookie，伪造请求

xss 预防

- 替换特殊字符，如< 变为&lt;>变为&gt;
- script 变为&lt;script&gt;,直接显示，则不会作为脚本执行
- 前端要替换，后端也要替换
- 加载 xss npm 包工具

## xsrf 攻击-1

- 你正在购物，看中某一个商品，商品 id 是 100
- 付费接口 xxx.com/pay?id=100,但没有任何验证
- 我是攻击者，我看中了一个商品，id 是 200

## xsrf 攻击-2

- 我向你发送一封电子邮件，邮件标题很吸引人
- 但是邮件正文隐藏着<img src="xxx.com/pay?id=200"/>
- 你一查看邮件，就帮我购买了 id 是 200 的商品

xsrf 预防

- 使用 post 接口
- 增加验证，例如密码，短信验证码，指纹等等

## 题目 1

- var 和 let const 的区别
  - var 是 es5 语法，let const 是 ES6 语法，var 有变量提升
  - var 和 let 是变量，可修改，const 是常量，不可修改
  - let const 有块级作用域，var 没有
- typeof 返回那些类型
  - undefined string number boolean symbol
  - object （注意，typeof null==='object'）
  - function
- 列举强制类型转换和隐式类型转换
  - 强制：parseInt,parseFloat,toString 等
  - 隐式：if,逻辑运算，===等等

## 题目 2

- 手写深度比较，模拟 lodash isEqual
- split 和 join 区别
- 数组的 pop，push，unshift，shift 分别做什么

## lodash isEqual

```js
// 实现如下效果

const obj1 = { a: 10, b: { x: 100, y: 200 } }
const obj2 = { a: 10, b: { x: 100, y: 200 } }
isEqual(obj1, obj2) === true
```

```js
// 判断是否是对象
function isObject(obj){
    return type obj==='object'&& obj !==null
}
function isEqual(obj1,obj2){
    if(!isObject(obj1)||!isObject(obj2)){
        // 值类型（注意，参与equal的一般不会是函数）
        return obj1==obj2
    }
    if(obj1===obj2){
        return true
    }
    //两个都是数组，而且不相等，
    // 1. 先取出obj1和obj2的keys，比较个数
     const obj1Keys=Object.keys(obj1)
     const obj2Keys=Object.keys(obj2)
     if(obj1Keys.length!==obj2Keys.length){
         return false
     }
    // 2. 以obj1为基准，和obj2依次递归比较
    for(let key in obj1){
        // 比较当前key的val--递归
        const res = isEqual(obj1[key],obj2[key])
        if(!res){
            return false
        }
    }
    // 3.全相等
    return true

}

```

split 和 join 的区别

```js
'1-2-3'
  .split('-') // [1,2,3]
  [(1, 2, 3)].join('-') // '1-2-3'
```

数组的 pop，push，unshift，shift 分别是什么？

- 功能是什么
- 返回值是什么
- 是否会对原数组造成影响

```js
const arr = [10, 20, 30, 40]
// pop
const popRes = arr.pop()
console.log(popRes, arr)
// shift
const shiftRes = arr.shift()
console.log(shiftRes, arr)
// push
const pushRes = arr.push(50) // 返回length
console.log(pushRes, arr)
// unshift
const unshiftRes = arr.unshift(5) // 返回length
console.log(unshiftRes, arr)
```

数组上有那些事纯函数？
纯函数：

- 不改变源数组（没有副作用）
- 返回一个数组

```js
// concat
const arr1 = arr.concat([50, 60, 70])
//map
const arr2 = arr.map(num => num * 10)
// filter
const arr3 = arr.filter(num => num > 25)
//slice
const arr4 = arr.slice()
```

## 题目 3

- 数组 slice 和 splice 的区别
- [10,20,30].map(parseInt)返回结果是什么？
- ajax 的 get 和 post 的区别？

数组 slice 和 splice 区别？

- 功能区别（slice-切片，splice-剪接）
- 参数和返回值
- 是否为存函数

```js
// slice 纯函数
const arr = [10, 20, 30, 40, 50]
const arr1 = arr.slice()
const arr2 = arr.slice(1, 4)
const arr3 = arr.slice(2)
const arr4 = arr.slice(-2)

// splice非纯函数
const spliceRes = arr.splice(1, 2, 'a', 'b', 'c')
console.log(spliceRes, arr) // [10,'a','b','c',40,50]
```

[10,20,30].map(parseInt)返回结果是什么？

- map 的参数和返回值
- parseInt 参数和返回值

```js
const res=[10,20,30].map(parseInt)
console.log(res) // [10,NAN,NAN]

为什么会变NAN？

拆解：

[10,20,30].map((num,index)=>{
    return parseInt(num,index)
})

```

ajax 的 get 和 post 有什么区别？

- get 一般用于查询操作，post 一般用户提交操作
- get 参数拼接在 url 上，post 放在请求体内（数据体积可更大）
- 安全性：post 易于防止 csrf

## 题目 4

- 函数 call 和 apply 的区别
- 事件委托是什么？
- 闭包是什么？有什么特性？有什么负面影响？

函数 call 和 apply 的区别？

参数区别

```js
一个一个传进去
fn.call(this, p1, p2, p3)
通过数组的行是传递进去
fn.apply(this, arguments)
```

事件委托是什么？

```js
const p1 = document.getElementById('p1')
const body = document.body
bindEvent(p1, 'click', e => {
  e.stopPropagation()
  alert('激活')
})
bindEvent(body, 'click', e => {
  alert('取消')
})
```

闭包是什么？有什么特性？有什么负面影响？

- 回顾作用域和自由变量
- 回顾闭包应用场景：作为参数被传入，作为返回值被返回
- 回顾：自由变量的查找，要在函数定义的地方（而非执行的地方）

影响：

- 变量回常驻内存，得不到释放，闭包不要乱用

## 题目 5

- 如何阻止冒泡和默认行为？
- 查找，添加，删除，移动 DOM 节点的方法？
- 如何减少 DOM 操作？

如何阻止冒泡和默认行为？

```js
event.stopPropagation()
event.preventDefault()
```

查找，添加，删除，移动 DOM 节点的方法？

```js
 cerateElement 新建

 appendChild 移动

 removeChild 删除

```

如何减少 DOM 操作？

- 缓存 DOM 查询结果
- 多次 Dom 操作，一次插入

## 题目 6

- 解释 jsonp 的原理，为何它不是真正的 ajax？
- document load 和 ready 的区别？
- ==和===的区别

解释 jsonp 的原理，为何它不是真正的 ajax？

- 浏览器的同源策略（服务器没有同源策略）和跨域
- 哪些 html 标签可以绕过跨域

```js
<script>
  window.abc=function(data){
      console.log(data)
  }
</script>
<script src="http://localhost:8002/jsonp.js?username=xxx&callback=abc"></script>

json.js

abc(
 {name：'xxx'}
)
```

## 题目 7

- 函数什么和函数表达式的区别
- new Object()和 Object.create()的区别
- 关于 this 的场景题

函数什么和函数表达式的区别？

- 函数声明 function fn(){}
- 函数表达式 const fn=function(){}
- 函数声明会在代码执行前预加载，函数表达式不会

new Object()和 Object.create()的区别？

- {}等同于 new Object，原型 Object.prototype
- Object.create(null)没有原型
- Object.create({...})可指定原型

## 题目 8

- 关于作用域和自由变量的场景 1
- 判断字符串以字母开头，后面字母数字下划线，长度 6-30
- 关于作用域和自用变量的场景 2

关于作用域和自由变量的场景 1？

```js
let i
for (i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(i)
  }, 0)
}
```

判断字符串以字母开头，后面字母数字下划线，长度 6-30?

- const reg=/^[a-zA-Z]\w{5,29}\$/
- 手写正则表达式

关于作用域和自用变量的场景 2

```js
let a = 100
function test() {
  alert(a)
  a = 10
  alert(a)
}
test()
alert(a)
```

## 题目 9

- 手写字符串 trim 方法，保证浏览器兼容性
- 如何获取多个数字中的最大值
- 如何用 js 实现继承

手写字符串 trim 方法，保证浏览器兼容性？

```js
String.prototype.trim = function () {
  return this.replace(/^\s+/, '').replace(/\s+$/, '')
}
```

如何获取多个数字中的最大值

```js
function max() {
  const nums = Array.prototype.slice.call(arguments) //变为数组
  let max = 0
  nums.forEach(n => {
    if (n > max) {
      max = n
    }
  })
  return max
}
```

```js
Math.max(10, 20, 30, 40, 50, 100)
```

如何用 js 实现继承

- class 继承
- prototype 继承

## 题目 10

- 如何捕获 js 程序中的异常
- 什么是 json
- 获取当前页面 URL 的参数

如何捕获 js 程序中的异常？

```js
手动捕获异常
try {
} catch (ex) {
} finally {
}

自动捕获异常

windows.onerror = function (message, source, lineNom, colNom, error) {
  // 第一：对跨域的js，如cdn的，不会有详细的报错信息
  // 第二：对于压缩的js，还要配合sourceMap反查到未压缩代码的行，列
}
```

什么是 json?

- json 是一种数据格式，本质是一段字符串
- json 格式和 js 对象结构一致，对 js 语言更友好
- window.JSON 是一个全局对象：JSON.stringify，JSON.parse

获取当前页面 URL 的参数？

- 传统的方式，查找 location.search
- 新 API，URLSearchParams

```js
function query(name){
    const search=location.search.substr(1)
    // search:'a=10&b=20&c=30'
    const reg=new RegExp(`(^|&)${name}=([^&]*)(&|$)`,'i')
    const res=search.match(reg)
    id(res===null){
        return null
    }
    console.log(res)
    return res[2]
}
query('b')
```

```js
URLSearchParams

function query(name) {
  const search = location.search
  const p = new URLSearchParams(search)
  return p.get(name)
}
```

## 题目 11

- 将 url 参数解析伟 JS 对象
- 手写数组 falters，考虑多层级
- 数组去重

将 url 参数解析伟 JS 对象？

```js
function queryToObj() {
  const res = {}
  const search = location.search.substr(1) //去掉前面的`?`
  search.split('&').forEach(paramStr => {
    const arr = paramStr.split('=')
    const key = arr[0]
    const val = arr[1]
    res[key] = val
  })
  return res
}
```

```js
function queryToObj() {
  const res = {}
  const pList = new URLSearchParams(location.search)
  pList.forEach((val, key) => {
    res[key] = val
  })
  return res
}
```

手写数组 flatern，考虑多层级

```js
function flat(arr) {
  // 验证arr中，还有没有深层数组[1,2,3,[5,6]]

  const isDeep = arr.some(item => item instanceOf Array)

  if (!isDeep) {
    return arr //已经是faltern[1,2,3,4,5]
  }

  const res = Array.prototype.concat.apply([], arr)
  return flat(res) //递归
}
const res = flat([1, 2, [3, 4], 5])
console.log(res)
```

数组去重？

- 传统方式
- set 去重

```js
function unique(arr) {
  const res = []
  arr.forEach(item => {
    if (res.indexOf(item) < 0) {
      res.push(item)
    }
  })
  return res
}
```

```js
//使用Set（无序，不能重复）
function unique(arr) {
  const set = new Set(arr)
  return [...set]
}
```

## 题目 12

- 手写深拷贝
- 介绍一下 RAF requestAnimationFrame
- 前端性能优化，有哪些方案
