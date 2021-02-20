# 抽象类

图形（抽象方法）：（平行四边形，三角形，圆形）

子类就是一个父类

一个大的概念包含所有小的的，相当于一个容器装很多个不同的物件

如果父类当中的方法不确定如何进行{}方法

## 抽象方法

抽象方法：就是加上 abstract 关键字，然后去掉大括号没直接分号结束

抽象类：抽象方法所在类,必须是抽象类

如何使用抽象类和抽象方法：

- 不能直接创建 new 抽象类对象
- 必须用子类来继承抽象类
- 子类必须覆盖重写抽象父类当中所有的抽象方法（@Override）
- 只要在父类中存在 abstract 这个修饰符，调用的子类就必须全部实现
- 创建子类对象进行使用

```java
 public abstract class  Animal{
     Public  abstract  void eat(); //由于调用的子类去实现
 }
```

使用

```java
 public class zi extends Animal{

 }
```

快捷生成：`ALT+回车`

## 案例

## User

```java
package demo1;

public class User {
    private String name; //名字
    private int money; //金额

    public  User(){

    }

    public User(String name, int money) {
        this.name = name;
        this.money = money;
    }

    public void show(){
        System.out.println("我叫："+name+",我有多少钱"+money);
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getMoney() {
        return money;
    }

    public void setMoney(int money) {
        this.money = money;
    }
}

```

## Manager

```java
package demo1;

import java.util.ArrayList;
//群主的类
public class Manager extends  User{
    public Manager(){

    }

    public Manager(String name, int money) {
        super(name, money);
    }
    public ArrayList<Integer> send(int totalMoney,int count){
        ArrayList<Integer> redList=new ArrayList<>(); //用来存储若干个红包的余额
        int leftMoney=super.getMoney();//群主当前的余额
        if(totalMoney>leftMoney){
            System.out.println("余额不足");
            return redList;
        }
//         扣钱
        super.setMoney((leftMoney-totalMoney));

        int avg=totalMoney/count; // 发红包需要平分的份数
        int mod=totalMoney%count; //余数抹零

//        除不开零头，包在最后一个红包当中
//       下面吧红包一个个放在集合中
        for (int i = 0; i < count-1; i++) {
            redList.add(avg);
        }
//        最后一个红包
        int last=avg+mod;
        redList.add(last);
        return redList;

    }
}

```

## Member

```java
package demo1;

import java.util.ArrayList;
import java.util.Random;
//普通的成员变量
public class Member extends User {
    public Member(){

    }
    public Member(String name, int money) {
        super(name, money);
    }
    public void receive(ArrayList<Integer> list){
        //随机获取一个集合当中的索引编号
        int index =new Random().nextInt(list.size());
        //根据索引，从集合删除，并且得到被删除的红包，给我自己
        int delta=list.remove(index);
        // 当前成员自己本来有多少钱
        int money=super.getMoney();
        // 加法，并且重新设置回去
        super.setMoney(money+delta);
    }
}

```

## MainRead

```java
package demo1;

import java.util.ArrayList;

public class MainRead {
    public static void main(String[] args) {
        Manager manager=new Manager("群主",100);
        Member one=new Member("成员A",0);
        Member two=new Member("成员B",0);
        Member three=new Member("成员C",0);

        manager.show(); //100
        one.show(); //0
        two.show();//0
        three.show();// 0
        System.out.println("=================");

        ArrayList<Integer> redList=manager.send(20,3);
        one.receive(redList);
        two.receive(redList);
        three.receive(redList);


        manager.show(); //100-20=80
        one.show();
        two.show();
        three.show()
```
