# 常用的构造方法

```
 Date date=new Date()
```

## 日期带参数的构造方法

```
 Date date=new Date(0l)//可以将毫秒值转换为日期
```

- getTime() 把日期转换为毫秒

```
 Date date=new Date()
 long time=date.getTime()

```

- DateForman 类日期格式化

作用：格式化，日期->文本

成员方法：

- String format(Date date)按照指定的模式，把 Date 日期，格式化为符合模式的字符串
- Date parse(String source) 把符合模式的字符串，解析为 Date 日期
- DateFormat 类是一个抽象类，无法直接船舰对象使用，可以用 DateFormat 的子类
- java.text.SimpleDateFormat extends DateFormat

构造方法：

- SimpleDateFormat(String pattern) 用给定的模式和默认的语言环境日期格式符号构造 SimpleDateFormat
- 模式：区分大小写
- y 年 M 月 d 日 H 时 m 分 s 秒
- 对应的格式：yyyy-MM-dd HH:mm:ss

注意：
模式中的字母不能更改，连接模式的符号可以改变

```
 SimpleDateFormat sdf =new SimpleDateFormat("yyyy年MM月dd日 HH时mm分ss秒");
 Date date=new Date()
 String d=sdf.format(date) //2088年10月1日 10：00：06

```

Date parse(String source) 把符合模式的字符串，解析为 Date 日期

注意：

- parse 方法声明一个异常叫做 parseException
- 如果字符串和构造方法的模式一样，那么程序就会抛出异常

```
 SimpleDateFormat sdf =new SimpleDateFormat("yyyy年MM月dd日 HH时mm分ss秒");

 Date date=sdf.parse("2088年08月08日 15时51秒54分")

 程序会抛出异常，需要Alt+enter解决这个异常即可(throws ParseException)

```

```
public class DateFomatDemo {
    public static void main(String[] args) throws ParseException {
        DateDemo();
    }

    private static void DateDemo() throws ParseException {

        SimpleDateFormat sdf = new SimpleDateFormat("yyyy年MM月dd日 HH时mm分ss秒");
        Date date = new Date();
        String s = sdf.format(date);
        System.out.println(s);


        System.out.println("====================");

        Date d=sdf.parse("2020年08月08日 15时15分54秒");
    }
}
```

## Calendar 类日历类(抽象类)

- GregorianCalendar 子类对象

注意：

- java.util.Calendar 类：日历类
- Calendar 类是一个抽象类，里面提供了很多操作方法（YEAR....）
- Calendar 类无法直接创建对象使用。里面有一个静态方法叫 getInstance(),改方法返回 CalenDar 类的子类对象
- static Calendar getInstance()使用默认时区和语言环境获得一个日历
- 可以获取年月日和时区等

```
import java.util.Calendar;

public class CalendarClass {
    public static void main(String[] args) {
        Calendar c=Calendar.getInstance();//多态
        System.out.println(c);
    }
}
```

常用的成员方法：

- public int get(int field)
- public void set(int field,int value)：将给定的日历字段设置为定值
- public abstract void add(int field ,int amount):根据日历规则，为给定的日历字段添加或减去指定的时间量
- public Date getTime():返回一个表示词 Calendar 时间值的 Date 对象

参数：

- int field 日历类的字段（）
- int amount:增加/减少指定值 正数：增加 负数：减少

返回日历的年月日的字段值

```
 private static void demo01() {
        Calendar c =Calendar.getInstance();
        int year=c.get(Calendar.YEAR);
        System.out.println(year);
        int moth =c.get(Calendar.MONTH);
        System.out.println(moth);
        int day=c.get(Calendar.DATE);
        System.out.println(day);


    }
```

## set

手动设置年月日

```
Calendar c =Calendar.getInstance();
c.set(Calendar.YEAR,99999);
int year=c.get(Calendar.YEAR);

连续设：

   c.set(8888,8,8);
```

## add

```
c.add(Calendar.YEAR,2);
```

## getTime()

- 获取日期对象

## LinkedList 集合

特点：

- 底层是一个链表结构：查询慢，增删快
- 里面包含大量操作首尾元素的方法

## api

- addFirst 在指定的元素插入（插入在此列表的头部）
- addLast 在集合的末尾添加
- push 在集合的末尾添加，与 addLast 一样
- getFist 获取第一个
- getLast 获取集合的最后一个
- isEmpty 判断是否为空
- removeFirst 移除第一个元素
- removeLst 移除最后一个元素
- pop 移除第一个元素

## Vertor

## Set

extent Collection 接口

特点

- 不允许存储重复的元素
- 没有索引，没有带索引的方法，也不能使用普通的 for 循环

原理

- Set 集合在调用 add 方法的时候，add 方法调用元素的 hashCode 方法和 equals 方法,判断元素是否重复

```
 HashSet<String> set= new HashSet<>();
 String s1= new String("abc")
 String s2= new String("abc")
 set.add(s1)
 set.add(s2)
 set.add("哈哈")
```

## HashSet

特点

- 不允许存储重复的元素
- 没有索引，没有索引的方法，也不能使用普通的 for 循环遍历
- 是一个无序的集合，存储元素和取出元素的顺序有可能不一致
- 底层是一个哈希表结构（查询速度非常快）

```java
 Set<Integer> set =new HashSet<>()\

 set.add(1)

```
