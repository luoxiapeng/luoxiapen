# Jest中的匹配器（下）

## toMatch()匹配器

字符串包含匹配器，比如象牙山洗脚城有三个美女：谢大脚、刘英和小红，这时候我们要看看字符串中有没有谢大脚就可以使用toMatch()匹配器。

```js
test('toMatch匹配器',()=>{
    const str="谢大脚、刘英、小红"
    expect(str).toMatch('谢大脚')
})
```
因为确实有“谢大脚”,所以就通过测试了，当然你也可以写正则表达式。

```js
test('toMatch匹配器',()=>{
    const str="谢大脚、刘英、小红"
    expect(str).toMatch(/谢大脚/)
})
```
我们可以开启yarn test就可以看到测试结果也是正确的。

## toContain()匹配器

刚才我们使用的只是一个字符串包换关系的匹配器，但是在工作中使用的多是数组，所以这里我们使用数组的匹配器toContain()。比如还是上面象牙山洗脚城的案例，我们就可以写成这样。

```js
test('toContain匹配器',()=>{
    const arr=['谢大脚','刘英','小红']
    expect(arr).toContain('谢大脚')
})
```
当然他也可以完美的兼容set的测试，比如把下面代码改为下面的方式。

```js
test('toContain匹配器',()=>{
    const arr=['谢大脚','刘英','小红']
    const data = new Set(arr)
    expect(data).toContain('谢大脚')
})
```
## toThrow()匹配器

专门对异常进行处理的匹配器，可以检测一个方法会不会抛出异常。比如我们下面一段代码。

```js
const throwNewErrorFunc = ()=>{
    throw new Error('this is a new error')
}

test('toThrow匹配器',()=>{
    expect(throwNewErrorFunc).toThrow()
})
```
我们也可以对这个匹配器中加一些字符串，意思就是抛出的异常必须和字符串相对应。

```js
const throwNewErrorFunc = ()=>{
    throw new Error('this is a new error')
}

test('toThrow匹配器',()=>{
    expect(throwNewErrorFunc).toThrow('this is a new error')
})
```
如果字符串不匹配，也没办法通过异常测试。

## not匹配器

not匹配器是Jest中比较特殊的匹配器，意思就是相反或者说取反.比如上面的例子，我们不希望方法抛出异常，就可以使用not匹配器。

```js
const throwNewErrorFunc = ()=>{
    throw new Error('this is a new error')
}

test('toThrow匹配器',()=>{
    expect(throwNewErrorFunc).not.toThrow()
})
```
现在这个测试用例就不能通过测试了，我们需要删除或注释掉抛出的异常，才可以通过测试。这就是not匹配器的用法。

## 匹配器自学方法

文章中我们只讲了最常用的一些匹配器，Jest当中有很多匹配器，我不可能全部都讲到。所以这里给出官方文档，你可以自学。

```js
https://jestjs.io/docs/en/expect
````
你可以通过这个文档自学，或者在工作中需要时来查询一下。