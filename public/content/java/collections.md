# Java Collections Framework

The Java Collections Framework provides a set of classes and interfaces to store and manipulate groups of objects.

## Key Interfaces
- **List** – Ordered collection, allows duplicates (e.g., ArrayList, LinkedList).
- **Set** – Unordered collection, no duplicates (e.g., HashSet, TreeSet).
- **Map** – Key-value pairs (e.g., HashMap, TreeMap).
- **Queue** – FIFO structure (e.g., PriorityQueue, LinkedList).

## Example

```java
import java.util.*;

public class CollectionsDemo {
    public static void main(String[] args) {
        List<String> list = new ArrayList<>();
        list.add("Java");
        list.add("Python");
        list.add("C++");

        for (String lang : list) {
            System.out.println(lang);
        }
    }
}
