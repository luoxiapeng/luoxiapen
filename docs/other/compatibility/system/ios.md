# ios 常见的问题

## 处理 IOS 系统里 js 默认时间解析为 NaN 问题

在 IOS 系统里，用 js 想把 日期 设为 xxxx-xx-xx 格式时，会解析成 NaN，下面这个方法可以正确设为 xxxx-xx-xx 格式。

```js
getNowFormatDate (date) {
  // 日期格式化
    let date = new Date(date.replace(/-/g, '/'));
    let str = "-";
    let str2 = ":";
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let strDate = date.getDate();
    month = month > 10 ? month : '0' + month
    strDate = strDate > 10 ? strDate : '0' + strDate
    let resultDate = year + str + month + str + strDate
    return resultDate;

```

## IOS 微信/支付宝 Input 输入框获取焦点失灵

解决方案：

```js
//在input上绑定click事件（以vue为例）

@click.capture.stop.prevent="test($event)"

//在事件中强制获取焦点

e.target.focus()
```

## IOS Input 弹出键盘后底部白条无法复原问题

安卓没有此类问题但是会出现根容器高度变小

解决方案：

将最外层盒子设置为’浮动层’

```css
positoion: fixed;

top: 0;

bottom: 0;

left: 0;

right: 0;
```

## IOS Input 获取焦点时页面放大

> IOS Input 获取焦点时页面放大

解决方案：

```css
font-size >= 16px
```

## IOS Input 获取焦点时页面移动问题

> Input 获取焦点时，弹出键盘页面会向上滑动，当失去焦点时页面‘表面归位’，其实际 dom 却没有恢复, 就会导致页面点击错误！

解决方案： 失去焦点时用 js 控制其返回页面顶部

```js
window.scrollTo(0, 0)
```

## css 解决 h5 在 ios 上滑动卡顿的问题

但是有一个限制条件，就是安卓 4.0 以上，ios 要 5.0 以上才支持（webkit108400 版本左右)

```css
-webkit-overflow-scrolling: touch;
```
