# createComponent

> 这个函数不是必须的，除非你想要完美结合 TypeScript 提供的类型推断来进行项目的开发。

这个函数仅仅提供了类型推断，方便在结合 TypeScript 书写代码时，能为 setup() 中的 props 提供完整的类型推断。

```jsx
import { createComponent } from 'vue'

export default createComponent({
  props: {
    foo: String
  },
  setup(props) {
    props.foo // <- type: string
  }
})
```
