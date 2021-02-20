# path - 操作路径对象

```js

path 不在全局作用域中，需要先引入再使用

    const path = require('path')
```

## 方法

### path.basename(path\[, ext\])

```js
// 获得文件名及文件后缀，ext是文件后缀，若ext与实际文件后缀匹配则不输出文件后缀，否则忽略ext
const basename1 = path.basename('/a/b/c/d/index.html')
const basename2 = path.basename('/a/b/c/d/index.html', '.html')
const basename3 = path.basename('/a/b/c/d/index.html', '.css') // 第二个参数会被忽略
console.log(basename1, basename2, basename3)
// 输出index.html  index  index.html
```

### path.dirname(path)

```js
// 获得不带文件名的文件路径
const dirname = path.dirname('/a/b/c/d/index.html')
console.log(dirname)
// 输出 /a/b/c/d
```

### path.extname(path)

```js
// 获得文件后缀名
const extname = path.extname('/a/b/c/d/index.html')
console.log(extname)
// 输出 .html
```

### path.parse(path)

```js
// 将路径字符串转换为路径对象
const pathObj = path.parse('E:\\a\\b\\c\\d\\index.html')
console.log(pathObj)
/* 输出
 * {
 *  root: 'E:\\', // 文件根目录
 *  dir: 'E:\\a\\b\\c\\d', // 不带文件名的文件路径
 *  base: 'index.html', // 文件名
 *  ext: '.html', // 文件后缀
 *  name: 'index' // 不带后缀的文件名
 * }
 */
```

### path.format(pathObj)

```js
// 将路径对象转换为路径字符串
const pathObj = {
  root: 'E:\\',
  dir: 'E:\\a\\b\\c\\d',
  base: 'index.html',
  ext: '.html',
  name: 'index'
}
console.log(path.format(pathObj))
// 输出 E:\a\b\c\d\index.html
// 注意：路径对象的每个属性不是必须的，提供了dir属性时会忽略root属性，提供了base属性时会忽略ext与name属性
```

### path.isAbsolute(path)

```js
// 判断路径是否是绝对路径
console.log(path.isAbsolute('E:/a/b/c/dindex.html'))
console.log(path.isAbsolute('./a/b/c/dindex.html'))
// 输出 true false
```

### 2.1.7 path.join(\[...paths\])

```js
// 接收一组路径，并拼接为一个路径，../表示返回上一级目录，./表示同级目录
console.log(path.join('/a/b/c/d', '../', './', 'index.html'))
// 输出 \a\b\c\index.html
```

### path.relative(from, to)

```js
// 接收两个路径，返回第一个路径到第二个路径的相对路径
const to = 'C:\\orandea\\test\\aaa'
const from = 'C:\\orandea\\impl\\bbb'
console.log(path.relative(to, from))
// 输出 ..\..\impl\bbb
```

## 属性

### path.delimiter

```js
// 环境变量分隔符
console.log(path.delimiter)
// windows下输出; Linux下是:
```

### path.sep

```js
// 路径分隔符
console.log(path.sep)
// windows下输出\ Linux下是/
```
