# Buffer 类

原生 JavaScript 中没有处理二进制数据流的机制，而服务端有处理二进制数据流的需求，对此，nodeJS 引入了 Buffer 类来处理二进制数据。

## 实例化方法

### Buffer.alloc(size\[, fill\[, encoding\]\])

```js
// 创建一个长度为3，值为0的Buffer
const buf1 = Buffer.alloc(3)
console.log(buf1)
// 输出：<Buffer 00 00 00>

// 创建一个长度为3，值为16的Buffer
const buf2 = Buffer.alloc(3, 16)
console.log(buf2)
// 输出：<Buffer 10 10 10>

//encoding是编码方式，默认为utf8
```

### Buffer.from(array)

```js
// 接收一个整数数组，返回一个buffer对象
const buf = Buffer.from([1, 2, 3])
console.log(buf)
// 输出<Buffer 00 02 03>
```

### Buffer.from(string\[, encoding\])

```js
// 接收一个字符串，返回一个buffer对象，encoding是编码方式，默认为utf8
const buf = Buffer.from('Hello World!')
console.log(buf.toString())
// 输出Hello World!
```

## 静态方法

### Buffer.isEncoding(encoding)

```js
// 判断是否支持某种编码方式
console.log(Buffer.isEncoding('utf8')) //输出true
console.log(Buffer.isEncoding('ascii')) //输出true
console.log(Buffer.isEncoding('base64')) //输出true
```

### Buffer.isBuffer(obj)

```js
// 判断是否为Buffer对象
console.log(Buffer.isBuffer(Buffer.alloc(3))) // 输出true
```

### Buffer.byteLength(string\[, encoding\])

```js
// 返回指定编码方式的字符串长度
const str = '\u00bd + \u00bc = \u00be' // Unicode编码的字符串
console.log(str.length) // Unicode编码的字符串长度为9
console.log(Buffer.byteLength(str, 'utf8')) // utf8编码的字符串长度为12
```

### Buffer.concat(list\[, totalLength\])

```js
// 合并传入的buffer数组，totalLength表示最终返回的buffer的长度
const buf1 = Buffer.alloc(1, 1)
const buf2 = Buffer.alloc(1, 2)
const buf3 = Buffer.alloc(1, 3)
const buf4 = Buffer.concat([buf1, buf2, buf3])
console.log(buf4)
// 输出<Buffer 01 02 03>
const buf5 = Buffer.concat([buf1, buf2, buf3], 2)
console.log(buf5)
// 输出<Buffer 01 02>
const buf6 = Buffer.concat([buf1, buf2, buf3], 4)
console.log(buf6)
// 输出<Buffer 01 02 03 00>
```

## 实例方法

### buf.write(string\[, offset\[, length\]\]\[, encoding\])

```js
// 向buffer写入内容，offset为开始写入的位置，length为写入的长度，encoding为写入内容的编码方式
const buf = Buffer.alloc(10)
buf.write('hello', 1, 4) //在1的位置开始写入前4位的'hello'
console.log(buf)
// 输出<Buffer 00 68 65 6c 6c 00 00 00 00 00>
console.log(buf.toString())
// 输出hell
```

### buf.slice(\[start\[, end\]\])

```js
// 截取buffer的一部分,start是开始位置，不传则复制整个buf，end为结束位置，不传则截取到最后一位
const buf1 = Buffer.from('Hello World!')
const buf2 = buf1.slice(1, 5)
const buf3 = buf1.slice(1)
const buf4 = buf1.slice()
console.log(buf2.toString())
console.log(buf3.toString())
console.log(buf4.toString())
// 输出ello
//     ello World!
//     Hello World!
```

### buf.toString(\[encoding\[, start\[, end\]\]\])

```js
// 将二进制数据流转换为字符串，encoding是编码方式，start与end效果同slice类似
const buf = Buffer.from('Hello World!')
console.log(buf.toString('utf8', 1, 5))
console.log(buf.toString('utf8', 1))
console.log(buf.toString('utf8'))
// 输出ello
//     ello World!
//     Hello World!
```
