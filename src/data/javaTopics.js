const javaTopics = [
  { title: "Introduction", path: "introduction" },
  { title: "Features", path: "features" },
  { title: "Variables", path: "variables" },
  { title: "Data Types", path: "datatypes" },
  { title: "Operators", path: "operators" },
  {
    title: "OOP",
    children: [
      { title: "Class", path: "class" },
      { title: "Object", path: "object" },
      { title: "Inheritance", path: "inheritance" },
      { title: "Polymorphism", path: "polymorphism" },
      { title: "Abstraction", path: "abstraction" },
      { title: "Encapsulation", path: "encapsulation" },
    ],
  },
  { title: "Exception Handling", path: "exception-handling" },
  {
    title: "Collections",
    children: [
      { title: "List", path: "list" },
      { title: "ArrayList", path: "arraylist" },
      { title: "LinkedList", path: "linkedlist" },
      { title: "Set", path: "set" },
      { title: "HashSet", path: "hashset" },
      { title: "Map", path: "map" },
      { title: "HashMap", path: "hashmap" },
    ],
  },
  { title: "Multithreading", path: "multithreading" },
  { title: "Java 8 Features", path: "java8-features" },
  { title: "Java 11 Features", path: "java11-features" }, // ✅ new topic
];

export default javaTopics;
