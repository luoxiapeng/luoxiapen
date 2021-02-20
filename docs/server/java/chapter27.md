# 自定义排序

```java
 public class Person implements Comparable<Person>{
    private String name;
    private int age;
    public Person(){}
    public Peson(String name, int age){
        this.name=name;
        this.age=age;
    }
    @Override
    public String toString(){
        return "Person{"+
               "name="+name+'\'+
               ",age="+age+
               '}';
    }
    public String getName(){
        return name;
    }
    public void setName(){
        this.name=name;
    }
    public int getAge(){
        return age;
    }
    public void setAge(int age){
        this.age=age;
    }
    // 重写排序的规则
     @Overrise
     public int compareTo(Person o){

        //return 0;//认为元素都是相同的

        // 自定义的规则，比较两个人的年龄
        return this.getAge()-o.getAge();//年龄升序排序

     }
 }
```

public static <T> void sort (List<T> list,Comparator<? super T>):将集合中的元素按照指定规则排序

Comparator 和 Comparable 区别：

- Comparable：自己（this）和别人（参数）比较，自己需要实现 Comparable 接口，重写比较规则 compareTo 方法
- Comparator：相当于找一个第三方的裁判，比较两个人

```java
public static void main(String[] args){
    ArrayList<Integer> list01=new ArrayList<>();
    list01.add(1);
    list01.add(3);
    list01.add(2);
    Collections.sort(list01,new Comparator<Interger>(){
        @Override
        public int compare(Integer o1,Integer o2){
           // return o1-o2; //升序
           return o2-o1;//降序
        }
    })
}
```
