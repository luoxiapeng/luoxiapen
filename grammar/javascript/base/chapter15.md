# 闭包

闭包是 JavaScript 中最强大的特性之一。JavaScript 允许函数嵌套，并且内部函数可以访问定义在外部函数中的所有变量和函数，以及外部函数能访问的所有变量和函数。但是，外部函数却不能够访问定义在内部函数中的变量和函数。这给内部函数的变量提供了一定的安全性。此外，由于内部函数可以访问外部函数的作用域，因此当内部函数生存周期大于外部函数时，外部函数中定义的变量和函数的生存周期将比内部函数执行时间长。当内部函数以某一种方式被任何一个外部函数作用域访问时，一个闭包就产生了。

```js
var pet = function (name) {
  //外部函数定义了一个变量"name"
  var getName = function () {
    //内部函数可以访问 外部函数定义的"name"
    return name
  }
  //返回这个内部函数，从而将其暴露在外部函数作用域
  return getName
}
myPet = pet('Vivie')

myPet() // 返回结果 "Vivie"
```

```js
var createPet = function (name) {
  var sex

  return {
    setName: function (newName) {
      name = newName
    },

    getName: function () {
      return name
    },

    getSex: function () {
      return sex
    },

    setSex: function (newSex) {
      if (typeof newSex == 'string' && (newSex.toLowerCase() == 'male' || newSex.toLowerCase() == 'female')) {
        sex = newSex
      }
    }
  }
}

var pet = createPet('Vivie')
pet.getName() // Vivie

pet.setName('Oliver')
pet.setSex('male')
pet.getSex() // male
pet.getName() // Oliver
```

闭包的缺点：使用闭包时仍然要小心避免一些陷阱。如果一个闭包的函数定义了一个和外部函数的某个变量名称相同的变量，那么这个闭包将无法引用外部函数的这个变量。

```js
var createPet = function (name) {
  // Outer function defines a variable called "name"
  return {
    setName: function (name) {
      // Enclosed function also defines a variable called "name"
      name = name // ??? How do we access the "name" defined by the outer function ???
    }
  }
}
```

## 嵌套函数和闭包

```js
函数里面嵌套另外一个函数。嵌套（内部）函数对其容器（外部）函数是私有的。它自身也形成了一个闭包。一个闭包是一个可以自己拥有独立的环境与变量的表达式（通常是函数）。

内部函数形成了一个闭包：它可以访问外部函数的参数和变量，但是外部函数却不能使用它的参数和变量。

function addSquares(a, b) {
  function square(x) {
    return x * x;
  }
  return square(a) + square(b);
}
a = addSquares(2, 3); // returns 13
b = addSquares(3, 4); // returns 25
c = addSquares(4, 5); // returns 41
```
