# isRef

`isRef()` 用来判断某个值是否为 ref() 创建出来的对象；应用场景：当需要展开某个可能为 ref() 创建出来的值的时候，例如：

```js
import { isRef } from '@vue/composition-api'

const unwrapped = isRef(foo) ? foo.value : foo
```
