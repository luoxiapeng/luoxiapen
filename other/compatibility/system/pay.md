# 支付宝

## 调起支付

这种做法有兼容性，适用于只有一种支付宝，不支持花呗和支付包共存

```js
  //
    // 支付宝直联支付
    //
    func_alipay (params) {
      // 取回来的是支付宝提供的一段自执行的form表单代码
      // 这里我把这段代码插入页面中，并手动触发
      const div = document.createElement('div')
      div.innerHTML = params.payInfo.prepayInfo
      document.body.appendChild(div)
      document.forms[0].submit()
      this.current = 0
    },
```

## 解决支付宝和花呗重复调起的 bug

document.forms[0].setAttribute('target', '\_blank') 这句一开启就有 bug，兼容性问题

```js
let divForm = document.getElementsByTagName('divform')
if (divForm.length) {
  document.body.removeChild(divForm[0])
}
const div = document.createElement('divform')
div.innerHTML = res.data // res.data就是sb支付宝返回给你的form
document.body.appendChild(div)
// document.forms[0].setAttribute('target', '_blank') // 加了_blank可能出问题所以我注释了
document.getElementById('alipay_submit').submit()
```
