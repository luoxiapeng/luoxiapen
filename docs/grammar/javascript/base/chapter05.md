# 日期和时间格式化

DateTimeFormat 对象在日期和时间的格式化方面很有用. 下面的代码把一个日期格式化为美式英语格式. (不同时区结果不同.)

```js
var msPerDay = 24 * 60 * 60 * 1000

// July 17, 2014 00:00:00 UTC.
var july172014 = new Date(msPerDay * (44 * 365 + 11 + 197)) //2014-1970=44年
//这样创建日期真是醉人。。。还要自己计算天数。。。11是闰年中多出的天数。。。
//197是6×30+16(7月的16天)+3(3个大月)-2(2月少2天)

var options = { year: '2-digit', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', timeZoneName: 'short' }
var americanDateTime = new Intl.DateTimeFormat('en-US', options).format

console.log(americanDateTime(july172014)) // 07/16/14, 5:00 PM PDT
```

## 数字格式化

NumberFormat 对象在数字的格式化方面很有用, 比如货币数量值.

```js
var gasPrice = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 3 })

console.log(gasPrice.format(5.259)) // $5.259

var hanDecimalRMBInChina = new Intl.NumberFormat('zh-CN-u-nu-hanidec', { style: 'currency', currency: 'CNY' })

console.log(hanDecimalRMBInChina.format(1314.25)) // ￥ 一,三一四.二五
```

## 定序

Collator 对象在字符串比较和排序方面很有用.

举例, 德语中有两种不同的排序方式 电话本（phonebook） 和 字典（dictionary）. 电话本排序强调发音, 比如在排序前 “ä”, “ö”等被扩展为 “ae”, “oe”等发音.

```js
var names = ['Hochberg', 'Hönigswald', 'Holzman']

var germanPhonebook = new Intl.Collator('de-DE-u-co-phonebk')

// as if sorting ["Hochberg", "Hoenigswald", "Holzman"]:
console.log(names.sort(germanPhonebook.compare).join(', '))
// logs "Hochberg, Hönigswald, Holzman"
```

有些德语词包含变音, 所以在字典中忽略变音进行排序是合理的 (除非待排序的单词只有变音部分不同: schon 先于 schön).

```js
var germanDictionary = new Intl.Collator('de-DE-u-co-dict')

// as if sorting ["Hochberg", "Honigswald", "Holzman"]:
console.log(names.sort(germanDictionary.compare).join(', '))
// logs "Hochberg, Holzman, Hönigswald"
```
