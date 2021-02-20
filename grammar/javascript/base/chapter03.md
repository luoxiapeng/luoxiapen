# 日期对象

## Date 对象

- "set" 方法, 用于设置 Date 对象的日期和时间的值
- "get" 方法,用于获取 Date 对象的日期和时间的值。
- "to" 方法,用于返回 Date 对象的字符串格式的值。
- parse 和 UTC 方法, 用于解析 Date 字符串。

通过“get”和“set”方法，你可以分别设置和获取秒，分，时，日，星期，月份，年。这里有个 getDay 方法可以返回星期，但是没有相应的 setDay 方法用来设置星期，因为星期是自动设置的。这些方法用整数来代表以下这些值：

- 秒，分： 0 至 59
- 时： 0 至 23
- 星期： 0 (周日) 至 6 (周六)
- 日期：1 至 31
- 月份： 0 (一月) to 11 (十二月)
- 年份： 从 1900 开始的年数

> var Xmas95 = new Date("December 25, 1995");

```js
var today = new Date()
var endYear = new Date(1995, 11, 31, 23, 59, 59, 999) // 设置日和月，注意，月份是0-11
endYear.setFullYear(today.getFullYear()) // 把年设置为今年
var msPerDay = 24 * 60 * 60 * 1000 // 每天的毫秒数
var daysLeft = (endYear.getTime() - today.getTime()) / msPerDay
var daysLeft = Math.round(daysLeft) //返回今年剩下的天数
```

parse 方法对于从日期字符串赋值给现有的 Date 对象很有用，例如：以下代码使用 parse 和 setTime 分配了一个日期值给 IPOdate 对象：

```js
var IPOdate = new Date()
IPOdate.setTime(Date.parse('Aug 9, 1995'))
```

JSClock()函数返回了用数字时钟格式的时间：

```js
function JSClock() {
  var time = new Date()
  var hour = time.getHours()
  var minute = time.getMinutes()
  var second = time.getSeconds()
  var temp = '' + (hour > 12 ? hour - 12 : hour)
  if (hour == 0) temp = '12'
  temp += (minute < 10 ? ':0' : ':') + minute
  temp += (second < 10 ? ':0' : ':') + second
  temp += hour >= 12 ? ' P.M.' : ' A.M.'
  return temp
}
```
