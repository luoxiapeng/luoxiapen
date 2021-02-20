# JSbridge.js

```js
let isAndroid = navigator.userAgent.indexOf('Android') > -1 || navigator.userAgent.indexOf('Adr') > -1
let isiOS = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)

//这是必须要写的，用来创建一些设置
function setupWebViewJavascriptBridge(callback) {
  //Android使用
  if (isAndroid) {
    if (window.WebViewJavascriptBridge) {
      callback(WebViewJavascriptBridge)
    } else {
      document.addEventListener(
        'WebViewJavascriptBridgeReady',
        function () {
          callback(WebViewJavascriptBridge)
        },
        false
      )
    }
    console.log('tag', '安卓')
    sessionStorage.phoneType = 'android'
  }

  //iOS使用
  if (isiOS) {
    if (window.WebViewJavascriptBridge) {
      return callback(WebViewJavascriptBridge)
    }
    if (window.WVJBCallbacks) {
      return window.WVJBCallbacks.push(callback)
    }
    window.WVJBCallbacks = [callback]
    var WVJBIframe = document.createElement('iframe')
    WVJBIframe.style.display = 'none'
    WVJBIframe.src = 'wvjbscheme://__BRIDGE_LOADED__'
    document.documentElement.appendChild(WVJBIframe)
    setTimeout(function () {
      document.documentElement.removeChild(WVJBIframe)
    }, 0)
    console.log('tag', 'ios')
    sessionStorage.phoneType = 'ios'
  }
}
//注册回调函数，第一次连接时调用 初始化函数(android需要初始化,ios不用)
setupWebViewJavascriptBridge(function (bridge) {
  if (isAndroid) {
    //初始化
    bridge.init(function (message, responseCallback) {
      var data = {
        'Javascript Responds': 'Wee!'
      }
      responseCallback(data)
    })
  }
})

export default {
  // js调APP方法 （参数分别为:app提供的方法名  传给app的数据  回调）
  callHandler(name, data, callback) {
    setupWebViewJavascriptBridge(function (bridge) {
      bridge.callHandler(name, data, callback)
    })
  },
  // APP调js方法 （参数分别为:js提供的方法名  回调）
  registerHandler(name, callback) {
    setupWebViewJavascriptBridge(function (bridge) {
      bridge.registerHandler(name, function (data, responseCallback) {
        callback(data, responseCallback)
      })
    })
  }
}
```

## main.js 中引入:

```js
import Bridge from './config/JSbridge.js'
Vue.prototype.$bridge = Bridge
```

组件中使用:  
**方法名和 app 开发人员沟通好，这里 js 调 app，app 提供的方法是 dataToAndroid；app 调 js，js 提供的方法是 dataToJs**

```js

    注册方法
      mounted(){
        this.getAPPDate()
      },

    js调app
      sendMsg(){
        let msg = this.msg
        this.$bridge.callHandler('dataToAndroid',msg,(res)=>{
          alert('获取app响应数据:'+res)
          this.test = res
        })
      },

    app调js
      getAPPDate(){
        this.$bridge.registerHandler('dataToJs', (data, responseCallback) => {
          alert('app主动调用js方法，传入数据:'+ data)
          responseCallback(data)
        })
      }

```
