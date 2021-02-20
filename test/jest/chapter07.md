# 让Jest支持import和ES6语法

目前我们的Jest是不支持import...from....这种形式，如果使用就会报错，因为Jest默认支持的是CommonJS规范，也就是Node.js中的语法，他只支持require这种引用。所以我们使用import...from...是ES6的语法，所以使用就会报错。我们找到了报错的原因后，就非常好解决了，只要我们把import形式转行成require就可以了呗。

## 修改dabaojian.js文件

打开dabaojian.js文件，然后把文件改成下面的样子.

```js
export function baojian1(money){
    return money>=200? '至尊享受':'基本按摩'
}

export function baojian2(money){
    return money>=1000? '双人服务':'单人服务'
}
```
然后再打开dabaojian.test.js文件，修改为下面的代码。

```js
import {baojian1,baojian2} from './math.js'

test('保健1 300元',()=>{
    expect(baojian1(300)).toBe('至尊享受')
})

test('保健2  2000元',()=>{
    expect(baojian2(2000)).toBe('双人服务')
})
```
这时候你用yarn test来测试，你会发现是没办法使用的，会报很多错误。这是因为我们需要用Babel进行转换，没有Babel转换是肯定会报错的。

## Babel转换器的安装

其实解决这个问题，直接使用Babel就可以把代码转换成CommonJS代码，然后就可以顺利进行测试了。那现在就来安装一下Babel.

```js
npm install @babel/core@7.4.5 @babel/preset-env@7.4.5 -D
```
或者直接使用yarn来进行安装

```js
yarn add  @babel/core@7.4.5 @babel/preset-env@7.4.5  --dev
```
耐心等待babel安装完成，然后打开package.json文件，可以看到文件里有这样两行代码。

```js
 "devDependencies": {
    "@babel/core": "^7.4.5",
    "@babel/preset-env": "^7.4.5",
    "jest": "^24.8.0"
  },
```
看到这样的代码，说明Babel已经安装成功。然后我们还需要对Babel进行配置。

## Babel的基本配置

我们在项目根目录下新建一个.babelrc的文件，作为一个前端，你对这个文件应该是非常熟悉的，babel的转换配置就写在这个文件里。

```js
{
    "presets":[
        [
                "@babel/preset-env",{
                "targets":{
                    "node":"current"
                }
            }
        ]
    ]
}
```

当你写完这段代码后，就可以进行转换了。我们再次使用yarn test进行测试，这时候就可以正确通过测试了。也就是说我们用的babel起到作用了。

那为什么会这样那?其实在Jest里有一个babel-jest组件，我们在使用yarn test的时候，它先去检测开发环境中是否安装了babel，也就是查看有没有babel-core，如果有bable-core就会去查看.babelrc配置文件，根据配置文件进行转换，转换完成，再进行测试。

