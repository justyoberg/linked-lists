import Node from "./Node.js"

export default class LinkedList {

  constructor() {
    this.head = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);
    this.length++;
    if (this.head === null) {return this.head = newNode};
    let ptr = this.head;
    while(ptr.next !== null) {
      ptr = ptr.next;
    };
    ptr.next = newNode;
  }

  prepend(value) {
    const newNode = new Node(value);
    this.length++;
    if (this.head === null) {return this.head = newNode};
    newNode.next = this.head;
    this.head = newNode;
  }

  size() {
    return this.length;
  }

  head() {
    return this.head;
  }

  tail() {
    let next = this.head;

    while(next.next !== null) {
      next = next.next;
    };

    return next;
  }

  at(index) {
    if (index > this.length - 1) return `List only contains ${this.length} items.`;
    
    let ptr = this.head;
    for(let i = 0; i < index; i++) {
      ptr = ptr.next;
    };

    return ptr;
  }

  pop() {
    let newTail = this.at(this.length - 2);
    let oldTail = newTail.next;
    newTail.next = null;
    this.length--;
    return oldTail;
  }

  contains(value) {
    let ptr = this.head;

    while(ptr.next !== null) {
      if(ptr.value === value) return true;
      ptr = ptr.next;
    };
    return false;
  }

  find(value) {
    let ptr = this.head;
    let index = 0;

    while(index <= this.length - 1) {
      if (ptr.value === value) return index;
      index++;
      ptr = ptr.next;
    };

    return null;
  }

  toString() {
    let ptr = this.head;
    let string = "";

    for(let i = 0; i < this.length; i++) {
      string += `(${ptr.value}) => `;
      ptr = ptr.next;
    };
    string += "null";

    return string;
  }

  insertAt(value, index) {
    if (index < 0) return "Index cannot be negative";
    if (index > this.length - 1) {
      return this.append(value);
    };

    const newNode = new Node(value);
    this.length++;

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    } ;
    
    let ptr = this.head;
    for (let i = 1; i < index; i++) {
      ptr = ptr.next;
    };
    newNode.next = ptr.next;
    ptr.next = newNode;
  }

  removeAt(index) {
    if (index < 0) return console.log("Index cannot be negative");
    if (index > this.length - 1) return console.log("Index higher than length of list");
    if (index === 0) {
      this.length--;
      return this.head = this.head.next;
    }

    let ptr = this.head;
    for (let i = 1; i < index; i++) {
      ptr = ptr.next;
    };
    
    if (ptr.next === null) this.pop();
    else {
      ptr.next = ptr.next.next;
    }
    this.length--;
  }

}

let list = new LinkedList();

list.append(10);
list.append(20);
list.prepend(30);
console.log(list);
console.log(list.tail().value);
list.append(40);
list.prepend(50);
list.append(60);
console.log(list);
console.log(list.size());
console.log(list.pop())
console.log(list.size());
console.log(list.at(5));
console.log(list);
console.log(list.contains(20));
console.log(list.contains(60));
console.log(list.find(20));
console.log(list.find(40));
console.log(list.find(50));
console.log(list.find(30));
console.log(list.find(5435));
console.log(list.toString());
list.insertAt("XX", 3);
console.log(list.toString());
list.insertAt("YY", 43535);
console.log(list.toString());
list.removeAt(4);
console.log(list.toString());