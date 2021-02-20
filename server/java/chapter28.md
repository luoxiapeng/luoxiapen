# Map

public interface Map<K,V>

将键映射到值对象，一个映射不能宝行重复的键；每个键最多只能映射到一个值；

特点：

- Map 集合是一个双列集合，一个元素包含 key，value
- Map 集合中的元素，key 和 value 的数据类型可以相同，也可以不同
- Map 集合中的元素，key 是不允许重复的，value 是可以重复的
- Map 集合中的元素，key 和 value 是一一对应的

## 常用的子类

- HashMap<k,v>集合 implements Map<k,v>接口
  - 查询速度非常快
  - jdk1.8 之前：数据+单向链表
  - jdk1.8 之后：数组+单项链表/红黑树（链表的长度超过 8）：提高查询速度
  - hashMap 结合是一个无序的集合，存储元素和取出元素的顺序有可能不一致
- LinkedHashMap
  - 底层是哈希表+链表
  - 是一个有序的集合，存储和取出元素顺序是一致的

## Map 接口中常用方法

- put (K key,V value)把指定的键与指定的值添加到 Map
- putAll 将所有元素映射到 map 中
- remove(Object key) 把指定的键所对应的键值对元素再 Map 集合中删除。返回被删除的元素值
- get 根据指定的键，在 Map 集合中获取对应的值
- containsKey 判断 Map 是否包含对应的 key
- keySet 获取 Map 集合中所有的键，存储到 Set 集合中
- entrySet 获取 Map 集合中的所有键值对对象的集合（Set）集合

### put

```java
 Map<String,String>= new HashMap<>()
 String v1=map.put("李晨","范冰冰1")
 System.out.println("v1:"+v1)


 String v2=map.put("李晨","范冰冰2")
 System.out.println("v2:"+v2)

 System.put.println(map); //{李晨=范冰冰2}
```

### remove

返回值：v

key 存在,v 返回被删除的值

key 不存在，v 返回 null

```java
 Map<String,Integer>= new HashMap<>();
 map.put("赵丽颖",168)
 map.put("杨颖",165)
 System.out.println(map);

 Integer v1=map.remove("赵丽颖")
 System.out.println("v1:"+v1);

 Integer v2=map.remove("杨过");
 System.out.println("v2:"+v2); // null

 // 空指针异常 NullPointerException

 int v2 =map.remove("林志颖");//自动拆箱，空指针异常
```

### get（Object key）

key 存在,v 返回 map 的值

key 不存在，v 返回 null

```java
 Map<String,Integer>= new HashMap<>();
 map.put("赵丽颖",168)
 map.put("杨颖",165)
 Integer v3=map.get("杨颖");
 System.out.println("v3:"+v3); // null
```

### containsKey 判断 Map 是否包含对应的 key、

```java
Map<String,Integer>= new HashMap<>();
map.put("赵丽颖",168)
map.put("杨颖",165)

boolean b1= map.containsKey("赵丽颖");
Sytem.out.println(b1)
```

## 遍历 Map 集合

- keySet() 把 Map 集合中所有的 key 去取出来到 Set 集合中：使用迭代器/增强 for 循环遍历 Set 集合
- entrySet

```java
 通过键找值的方式

 实现步骤：
   1.使用map集合的方法keySet(),把Map集合所有的key取出来，存储到一个set集合中
   2.遍历set集合，获取map集合中每一个key
   3.通过map集合中的方法get(key),通过key找到value

    Map<String,Integer> set= new HashMap<>();
    map.put("赵丽颖",168)
    map.put("杨颖",165)

    Set<String> set =map.keySet();
    Iterator<String> it =set.iterator();
    while(it.hashNext()){
        String key=it.next();
        Integer value=map.get(key);
        System.out.println(key+"="+value);
    }

    // 增强for

    for(String key:map.keySet()){
        Integet value=map.get(key);
        System.out.println(key+"="+value);
    }
```

## Entry 键值对对象

Map.Entry<k,v> 在 Map 接口中有一个内部 Entry

作用：Map 集合一创建，那么就会在 Map 集合中创建一个 Entry 对象，用来记录键与值

- getKey()：获取 Entry 对象中的键
- getValue():获取 Entry 对象中的值
- entrySet():获取到 Map 集合中所有的键值对对象的集合（Set 集合）

```java
实现步骤：
  1.使用Map集合中的方法entrySet()把Mao集合中多个Entry对象取出来，存储到一个Set集合中
  2.遍历Set集合，获取灭一个特Entry对象
  3.使用Entry对象中的方法getKey()

   Map<String,Integer> set= new HashMap<>();
    map.put("赵丽颖",168)
    map.put("杨颖",165)

    Set<Map.Entry<String,Integer>> set =map.entrySet();
    Iterator<Map.Entry<String,Integer>> it =set.iterator();
    while(it.hashNext()){
        Map.Entry<String,Integer> entry=it.next();
        String key=map.getKey();
        Integer value=entry.getValue();
        System.out.println(key+"="+value);
    }

    // 增强for

    for(Map.Entry<String,Integer>:map.entrySet();){
        String key=map.getKey();
        Integer value=entry.getValue();
        System.out.println(key+"="+value);
    }


```

## HashMap 存储自定义类型键值

- 保证 Key 是唯一的：必须重写 hashCode，equals 方法，以保证 key 唯一

```java
 package demo06;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;

public class hashPerson {
    public static void main(String[] args) {
        show01();
        show02();
    }

    /**
     * HashMap存储自定义类型键值
     * key：Person类型
     *     Person类就必须重写hashCode方法和equels方法一保证key唯一
     *
     * Value：Person类型
     *     value可以重复
     */
    private static void show02() {
        HashMap<Person,String> map=new HashMap<>();
        map.put(new Person("女王",19),"英国");
        map.put(new Person("秦始皇",19),"秦国");
        map.put(new Person("普京",19),"俄罗斯");
        map.put(new Person("女王",19),"毛里求斯");
        Set<Map.Entry<Person, String>> set = map.entrySet();
        for (Map.Entry<Person,String> entry:set){
            Person key=entry.getKey();
            String value=entry.getValue();
            System.out.println(key+"---->"+value);
        }


    }

    private static void show01() {
        HashMap<String,Person> map=new HashMap<>();
        map.put("北京",new Person("张三",18));
        map.put("上海",new Person("赵四",19));
        map.put("广州",new Person("王五",20));
        map.put("南京",new Person("赵六",21));
        map.put("湖南",new Person("田七",22));

        System.out.println(map);

        Set<String> set = map.keySet();
        for(String key:set){
            Person value=map.get(key);
            System.out.println(key+"--->"+value);
        }

    }

}

```

```java
package demo06;

import java.util.Objects;

public class Person {
    private String name;
    private int age;

    public Person() {
    }

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Person person = (Person) o;
        return age == person.age &&
                Objects.equals(name, person.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(name, age);
    }

    @Override
    public String toString() {
        return "Person{" +
                "name='" + name + '\'' +
                ", age=" + age +
                '}';
    }
}

```
