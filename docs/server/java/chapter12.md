# 构造方法

构造方法是专门用来创建对象的方法，当我们通过关键字 new 来创建对象时，其实就是调用钩爪方法

格式 L
public 类名称(参数类型 参数名称){
方法体

}

注意事项：

1. 构造方法的名称必须和所在名称完全一样，就连大小写也要一样
2. 钩爪方法不要写返回值类型，连 void 都不要写
3. 构造方法不能 return 一个具体的返回值
4. 如果没有编写任何构造方法，那么编辑器将会默认赠送一个构造方法，没有参数，方法体
5. 一旦编写了至少一个钩爪方法,那么编辑器将不再赠送
6. 构造方法可以进行重载

```java
public class Student{
   private String name;
   private int age;
   public Student(){
        Sytem.out.println("构造方法执行啦")
    }
   public Student(String name,int age){
        Sytem.out.println("全参构造方法执行了")
        this.name=name;
        this.age=age;
    }
}
```

```java
  Student s= new Student('张三'，18)

```

一个标准类：

1. 所有的成员变量都要使用 private 关键字修饰
2. 为每一个成员变量编写一对 Getter/setter 方法
3. 编写一个无参数的构造方法
4. 编写一个全参数的构造方法

快速生成代码

点击 code -> Generate ->选择 Getter 和 setter->按住 shift+鼠标全选

快速生成无参数的构造方法和全参数的构造方法

点击 code -> Generate ->Constructor->按住 shift+鼠标全选

```java
public class Student{
   private String name;
   private int age;
   public Student(){
        Sytem.out.println("构造方法执行啦")
    }
   public Student(String name,int age){
        Sytem.out.println("全参构造方法执行了")
        this.name=name;
        this.name=age;
    }
     public void setter(String name){
        this.name=name;
    }
    public String Getter(){
       return this.age;
    }
}
```
