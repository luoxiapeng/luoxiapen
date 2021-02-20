# fs - 操作文件对象

```js
fs 不在全局作用域中，需要先引入再使用

  const path = require('fs')

```

## fs.readFile(path\[, options\], callback)

```js
首先在同级目录中创建文件 text.text，内容为 Hello World!，稍后打印出来

    // 异步读取文件内容
    // 第一个参数为目标文件路径
    // 第二个参数为可选参数，指定读取出来的字符编码(encoding)及读写权限(flag),不指定字符编码时，默认输出二进制字节流
    // 第三个参数为读取成功后的回调函数
    // 回调函数有两个参数，第一个参数是错误参数，为null表示未发生错误，第二个参数为读取出来的内容字符串
    fs.readFile(path.join('./text.text'),{encoding: 'utf8'}, (err,fileContent) => {
      if(err !== null) {
        // 输出错误信息
        console.log(err.stack)
      } else {
        // 输出utf8编码的Hello World!
        console.log(fileContent)
      }
    })
```

## fs.readFileSync(path\[, options\])

```js
// 同步读取文件内容，同步执行时没有回调函数，需要自定处理错误，函数返回文件内容
try {
  const fileContent = fs.readFileSync(path.join('./text.tet'), { encoding: 'utf8' })
  // 输出utf8编码的Hello World!
  console.log(fileContent)
} catch (err) {
  console.log('写入文件发送错误，请检查文件路径')
}
```

## fs.writeFile(path, data\[, options\], callback)

```js
// 异步写入文件内容
// path与options参数同上，第二个参数data为写入的内容，回调函数只有一个错误对象参数err
fs.writeFile(path.join('./text.text'), 'Hello World!!!', { encoding: 'utf8' }, err => {
  if (err !== null) {
    console.error(err.stack)
  }
})
// 再次查看text.text文件会发现内容改为了Hello World!!
```

## fs.writeFileSync(path, data\[, options\])

```js
// 同步写入文件内容
try {
  fs.writeFileSync('./text.text', 'Hello World!!!', { encoding: 'utf8' })
} catch (err) {
  console.log('写入文件发送错误，请检查文件路径')
}
// 再次查看text.text文件会发现内容改为了Hello World!!!
```

## 文件对象

## 获取文件对象

### fs.stat(path, callback)

```js
// 异步获取文件对象
// 回调函数的第二个参数即为文件对象
fs.stat('./text.text', (err, stat) => {
  if (err) {
    console.log(err.stack)
  } else {
    console.log(stat)
  }
})
```

### fs.statSync(path)

```js
// 同步获取文件对象
try {
  const stat = fs.statSync('./text.text')
  console.log(stat)
} catch (err) {
  console.log('写入文件发送错误，请检查文件路径')
}
```

## 文件对象方法

### stats.isDirectory()

判断当前文件对象是否是文件目录

### stats.isFile()

判读单当前文件对象是否是常规文件

## 文件对象属性

### birthtime

文件创建时间

### atime

文件访问时间

### mtime

文件修改时间（指文件数据被修改）

### ctime

文件修改时间（指文件访问权限被修改）

### fs.mkdir(path\[, options\], callback)

```js
// 异步创建一个文件目录，第二个参数可以通过recursive设置是否同时创建子文件夹

// 不存在a文件夹的时候会报错
fs.mkdir('./a/b', err => {
  if (err) {
    console.log(err.stack)
  }
})
// 设置第二个参数，在不存在a目录的时候自动创建a目录，然后在a目录中创建b目录
fs.mkdir('./a/b/c', { recursive: true }, err => {
  if (err) {
    console.log(err.stack)
  }
})
```

### fs.mkdirSync(path\[, options\])

```js
// 同步创建文件夹
try {
  fs.mkdirSync('./a/b', { recursive: true })
} catch (err) {
  console.log('创建文件夹错误')
}
```

### fs.readdir(path\[, options\], callback)

```js
// 异步读取一个目录下的所有文件及文件夹
// __dirname是当前文件所在目录的路径
fs.readdir(__dirname, (err, files) => {
  if (err) {
    console.log(err.stack)
  } else {
    // 输出指定目录下的所有文件名及文件夹名组成的数组
    console.log(files)
  }
})
```

### fs.readdirSync(path\[, options\])

```js
// 同步读取一个目录下的所有文件及文件夹
try {
  const files = fs.readdirSync(__dirname)
  console.log(files)
} catch (err) {
  console.log('读取文件夹错误')
}
```

### fs.rmdir(path, callback)

```js
// 异步删除空文件夹
fs.rmdir('./a', err => {
  if (err) {
    console.log(err.stack)
  }
})
// 注意：只能删除空的文件夹，想要删除非空文件夹可以使用递归
```

### fs.rmdirSync(path)

```js
// 同步删除空文件夹
try {
  fs.rmdirSync('./a')
} catch (err) {
  console.log('删除文件夹失败')
}
```
