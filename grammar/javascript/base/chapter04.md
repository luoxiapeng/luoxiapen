# 字符串

JavaScript 中的 String 类型用于表示文本型的数据. 它是由无符号整数值（16bit）作为元素而组成的集合. 字符串中的每个元素在字符串中占据一个位置. 第一个元素的 index 值是 0, 下一个元素的 index 值是 1, 以此类推. 字符串的长度就是字符串中所含的元素个数.你可以通过 String 字面值或者 String 对象两种方式创建一个字符串。

## String 字面量

```js
'foo'
'bar'

```

16 进制转义序列
\x 之后的数值将被认为是一个 16 进制数.

```js
'\xA9' // "©"

```

## Unicode 转义序列

Unicode 转义序列在\u 之后需要至少 4 个字符

```js
'\u00A9' // "©"

```

## Unicode 字元逸出

这是 ECMAScript 6 中的新特性。有了 Unicode 字元逸出，任何字符都可以用 16 进制数转义, 这使得通过 Unicode 转义表示大于 0x10FFFF 的字符成为可能。使用简单的 Unicode 转义时通常需要分别写字符相应的两个部分（译注：大于 0x10FFFF 的字符需要拆分为相应的两个小于 0x10FFFF 的部分）来达到同样的效果。

`String.fromCodePoint()` 或 `String.prototype.codePointAt()`。

```js
'\u{2F804}'

// the same with simple Unicode escapes
'\uD87E\uDC04'

```

## 字符串对象

String 对象是对原始 string 类型的封装 .

```js
var s = new String('foo') // Creates a String object
console.log(s) // Displays: { '0': 'f', '1': 'o', '2': 'o'}
typeof s // Returns 'object'
```

String 字面值上使用 String 对象的任何方法—JavaScript 自动把 String 字面值转换为一个临时的 String 对象, 然后调用其相应方法,最后丢弃此临时对象.在 String 字面值上也可以使用 String.length 属性.

## eval

将字符串转为数字相加

```js
var s1 = '2 + 2' // Creates a string literal value
var s2 = new String('2 + 2') // Creates a String object
eval(s1) // Returns the number 4
eval(s2) // Returns the string "2 + 2"
```

String 对象有一个属性, length, 标识了字符串中的字符个数.举例, 下面的代码把 13 赋值给了 x, 因为"Hello, World!"包含了 13 个字符（译注：注意 W 之前有个空格）:

```js
var mystring = 'Hello, World!'
var x = mystring.length
```

String 对象有许多方法: 举例来说有些方法返回字符串本身的变体, 如 substring 和 toUpperCase.

## String 对象方法

- `charAt`, `charCodeAt`, `codePointAt` 返回字符串指定位置的字符或者字符编码。
- `indexOf`, `lastIndexOf` 分别返回字符串中指定子串的位置或最后位置。
- `startsWith`, `endsWith`, `includes` 返回字符串是否以指定字符串开始、结束或包含指定字符串。
- `concat` 连接两个字符串并返回新的字符串。
- `fromCharCode`, `fromCodePoint` 从指定的 Unicode 值序列构造一个字符串。这是一个 String 类方法，不是实例方法。 -` split` 通过将字符串分离成一个个子串来把一个 String 对象分裂到一个字符串数组中。

- `slice` 从一个字符串提取片段并作为新字符串返回。
- `substring`, `substr` 分别通过指定起始和结束位置，起始位置和长度来返回字符串的指定子集。
- `match`, `replace`, `search` 通过正则表达式来工作.

- `toLowerCase`, `toUpperCase` 分别返回字符串的小写表示和大写表示。
- `normalize` 按照指定的一种 Unicode 正规形式将当前字符串正规化。
- `repeat` 将字符串内容重复指定次数后返回。
- `trim` 去掉字符串开头和结尾的空白字符。

## 多行模板字符串

## 多行

```js
console.log(
  'string text line 1\n\
string text line 2'
)
// "string text line 1
// string text line 2"
```

为了实现同样效果的多行字符串, 现在可以写成如下形式:

```js
console.log(`string text line 1
string text line 2`)
// "string text line 1
// string text line 2"
```

## 嵌入表达式

为了在一般的字符串中嵌入表达式, 需要使用如下语法:

```js
var a = 5
var b = 10
console.log('Fifteen is ' + (a + b) + ' and\nnot ' + (2 * a + b) + '.')
// "Fifteen is 15 and
// not 20."
```

现在, 使用模板字符串, 可以使用语法糖让类似功能的实现代码更具可读性:

```js
var a = 5
var b = 10
console.log(`Fifteen is ${a + b} and\nnot ${2 * a + b}.`)
// "Fifteen is 15 and
// not 20."
```
