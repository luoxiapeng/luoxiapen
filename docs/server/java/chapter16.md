# Arrays

数组操作工具类，提供大量的静态方法，用来实现数组常见操作

- public static String toString(数组):将数组变成字符串

```java
 int [] array={10,10}
 String intStr=Arrays.toString(arr)
```

- sort(数组)：对数组进行排序

  如果是数字，sort 默认按照升序从小到大

  如果是字符串，sort 默认按照字母升序

  如果是自定义类型，那么这个自定义的类，需要有 Comparable 或者 Comparator 接口的支持。
