// Arrays
let colors = ['red', 'green', 'blue'];
console.log(colors[0]); // Output: red

// Objects
let person = {
  name: 'John Doe',
  age: 30,
  isStudent: false
};
console.log(person.name); // Output: John Doe

// Maps
let fruitMap = new Map();
fruitMap.set('apple', 10);
fruitMap.set('banana', 20);
console.log(fruitMap.get('banana')); // Output: 20

// Sets
let uniqueNumbers = new Set();
uniqueNumbers.add(1);
uniqueNumbers.add(2);
uniqueNumbers.add(1); // Adding duplicate value, it won't be added
console.log(uniqueNumbers.size); // Output: 2

// Linked List
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  addToHead(value) {
    let newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  printList() {
    let current = this.head;
    while (current !== null) {
      console.log(current.value);
      current = current.next;
    }
  }
}

let linkedList = new LinkedList();
linkedList.addToHead(3);
linkedList.addToHead(2);
linkedList.addToHead(1);
linkedList.printList(); // Output: 1, 2, 3