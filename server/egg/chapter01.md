# 安装 egg.js 开发环境

## 认识 egg.js 框架

egg.js 是由阿里开源的面向企业级开发的 Node.js 服务端框架，目的就是帮助团队和开发人员降低开发和维护成本。需要说的是他的底层是 Koa2 来搭建的。（这个框架完全可以开一节新课程讲一下，里边的内容还是非常多的，但是我们在个人博客这样简单的系统中，使用的并不是很多，所以我就用到那里给大家讲那里，不用的我就不讲了。）Koa2 虽然已经很好了，但是它并没有任何约定和规范，这样在团队开发中，会出现混乱的现象。

Github 地址：https://github.com/eggjs/egg

目前项目由 1.3 万 star，是非常火爆的开源项目，不过使用的大部分都是国人。框架主要是简化我们的开发流程。

## 搭建开发环境

我们先进入到项目的根文件夹中，然后在根文件夹下，建立一个 service 的文件夹，这就是中台的文件夹了。

全局安装`egg.js`的脚手架工具`egg-init`：

```shell
npm i egg-init -g
```

因为 npm 的源还是比较慢的，所以需要多等一些时间。安装完成后，用 cd 命令进入 service 文件夹。 用脚手架自动生成项目的基本结构，在终端中直接输入下面的命令。

```shell
egg-init --type=simple
```

如果不成功，你需要多式几次，这多是网络不顺畅造成的，所以没有什么更好的办法来解决。等待顺利完成后，可以打开文件夹，看一下是否自动生成了很多文件和文件夹。但是现在还没有安装相关的依赖包，所以要使用命令安装 egg 项目所需要的所有依赖包。

```shell
npm install
```

安装完成后，就可以启动服务查看一下结果了。

```shell
npm run dev
```

然后在浏览器中打开网址:http://127.0.0.1:7001/

如果在页面中显示 hi.egg 说明我们环境搭建完成。这节课也就先到这里，下节课我们继续开发中台。

## egg.js 目录结构和约定规范

### egg.js 目录结构介绍

这里我只介绍比较重要的文件，如果是开发中不太常用的我就不作过多介绍了，毕竟我们这是实战项目，讲解太多的基础知识会耽误大家时间。大家可以自己去看文档（文档全部中文，很好理解）。

- app 文件夹:项目开发文件，程序员主要操作的文件，项目的大部分代码都会写在这里。
- config 文件夹：这个是整个项目的配置目录，项目和服务端的配置都在这里边进行设置。
- logs 文件夹：日志文件夹，正常情况下不用修改和查看里边内容。
- node_modules:项目所需要的模块文件，这个前端应该都非常了解，不多作介绍。
- run 文件夹：运行项目时，生成的配置文件，基本不修改里边的文件。
- test 文件夹：测试使用的配合文件，这个在测试时会使用。
- autod.conf.js: egg.js 自己生成的配置文件，不需要进行修改。
- eslinttrc 和 eslintignore：代码格式化的配置文件。
- gitgnore：git 设置忽略管理的配置文件。
- package.json： 包管理和命令配置文件，这个文件经常进行配置。

这些就是 egg.js 项目比较重要的一些文件作用，这里只是简单的介绍了一下，在以后课程中如果开发用到，我们会详细讲解。比较重要的是 app 文件夹、config 文件夹和 package.json 文件。

## Egg.js 目录约定规范

上节课我说过 Koa2 框架虽然小巧好用，但是在团队开发中使用，是缺少规范的，所以不擅长企业级开发。Egg.js 框架就是在 Koa2 的基础上规范了这些约定，所以也带来了一些文件目录的限制。

在 app 目录下，egg 要求我们必须要有下面的文件：

- controller 文件夹：控制器，渲染和简单的业务逻辑都会写道这个文件里。配置路由时也会用到（路由配置需要的文件都要写在控制器里）。
- public 文件夹：公用文件夹，把一些公用资源都放在这个文件夹下。
- router.js: 项目的路由配置文件，当用户访问服务的时候，在没有中间件的情况下，会先访问 router.js 文件。
- service 文件夹：这个是当我们的业务逻辑比较复杂或和数据库打交道时，会把业务逻辑放到这个文件中。
- view 文件夹：模板文件夹，相当于表现层的专属文件夹，这个项目，我们使用接口的形式，所以不需要建立 view 文件夹。
- extend 文件：当我们需要写一些模板中使用的扩展方法时，我们会放到这个文件夹里。
- middleware：中间件文件夹，用来写中间件的，比如最常用的路由首位。

当然我们现在有个最基础的，然后又需要再不断向文件夹里加文件就可以。

现在我们作一个小例子，在/app/controller/home.js 文件中，加入一个 list 方法，然后再进行配置路由。

home.js

```js
async list() {
    const { ctx } = this;
    ctx.body = '<h1>dmz blog list</h1>';
  }
```

router.js

```js
'use strict'

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app
  router.get('/', controller.home.index)
  router.get('/list', controller.home.list)
}
```

这时候，你启动一下服务，然后访问一下,http://127.0.0.1:7001/list,可以看到我们的页面放生了变化。

这节课就到这里，大家只要理解 egg.js 目录结构和相应的约定规范就可以了。

## RESTful API 设计简介和路由配置

我们的所有数据的获得和业务逻辑的操作都是通过中台实现的，也就是说中台只提供接口，这里的设计我们采用 RESTful 的规则，让 egg 为前端提供 Api 接口，实现中台主要的功能。

## RESTful 简介和约束方式

RESTful 是目前最流行的网络应用程序设计风格和开发方式，大量使用在移动端 App 上和前后端分离的接口设计。这种形式更直观并且接口也有了一定的约束性。

约束的请求方式和对应的操作。

- **GET(SELECT)** ： 从服务端取出资源，可以同时取出一项或者多项。
- **POST(CREATE)** ：在服务器新建一个资源。
- **PUT(UPDATE)** ：在服务器更新资源（客户端提供改变后的完整资源）。
- **DELETE(DELETE)** ：从服务器删除资源

还有一些不常用的请求方式，因为不常用或者说我们的博客中用不到，所以我就不作过多的介绍了。

## 在 egg.js 中 Api 接口的路由配置

首先打开 service 根目录下的 controller 文件夹，在这个文件夹中新建两个文件夹 admin（管理端使用的所有 API 接口）和 default（客户端使用的所有 API 接口）文件夹。

目前我们只有客户端（前台）的页面，所以先在 default 目录下建立一个 home.js 文件，用于前台首页所需要的 api 接口。代码如下：

/service/app/controller/default/home.js

```js
'use strict'

const Controller = require('egg').Controller

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'api接口'
  }
}

module.exports = HomeController
```

接口写好以后，我们需要配置一下路由。这里为了把路由也分成前后端分离的，所以在 app 文件夹下新建一个 router 文件夹。

在文件夹下新建两个文件 default.js 和 admin.js。

default.js 文件

```js
module.exports = app => {
  const { router, controller } = app
  router.get('/default/index', controller.default.home.index)
}
```

router.js 文件

```js
'use strict'

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  require('./router/default')(app)
}
```

编写好以后，我们使用 yarn dev 命令进行开启服务器，然后到浏览器中输入地址http://127.0.0.1:7001/default/index,如果能出现api接口字样，说明已经完成了基本的路由设置。
