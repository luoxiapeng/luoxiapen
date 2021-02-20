# Collections

## api

- addAll 往集合添加一些元素
- shuffle 打乱集合：打乱集合顺序
- sort 将集合中元素按照默认规则排序

```java
 ArrayList<String> list = new ArrayList<>();
 Collections.addAll(list,'a','b','c','d');
 Collections.shuffle(list)
 Collections.sort(list)//默认是升序
```

注意：

- sort(List<T> list)使用前提
- 被排序的集合里面存储的元素，必须实现 Comparable,重写接口中的方法 compareTo 定义的排序的规则

Comparable 接口的排序规则：

- 自己（this）-参数 就是升序
- 参数-自己就是降序
