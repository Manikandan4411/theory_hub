# Inheritance in Java

Inheritance allows one class to acquire properties of another.

## Example
```java
class Parent {
    void show() { System.out.println("Parent class"); }
}
class Child extends Parent {
    void display() { System.out.println("Child class"); }
}
public class InheritanceDemo {
    public static void main(String[] args) {
        Child c = new Child();
        c.show();
        c.display();
    }
}
