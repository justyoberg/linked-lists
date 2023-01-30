import Node from "./Node.js"

export default class LinkedList {

  constructor() {
    this.head = null;
    this.length = 0;
  }

  append(value) {
    // Add new node to end of the list
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
    // Add new node to start of the list
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
    // Return the tail of the list
    let ptr = this.head;

    while(ptr.next !== null) {
      ptr = ptr.next;
    };

    return ptr;
  }

  at(index) {
    // Return a node at the given index
    if (index > this.length - 1) return console.log(`List only contains ${this.length} items.`);
    
    let ptr = this.head;
    for(let i = 0; i < index; i++) {
      ptr = ptr.next;
    };

    return ptr;
  }

  pop() {
    // Remove the last node of the list, and return it
    let newTail = this.at(this.length - 2);
    let oldTail = newTail.next;
    newTail.next = null;
    this.length--;
    return oldTail;
  }

  contains(value) {
    // Returns true if the given value is contained in the list, else false
    let ptr = this.head;

    while(ptr.next !== null) {
      if(ptr.value === value) return true;
      ptr = ptr.next;
    };
    return false;
  }

  find(value) {
    // Returns the index of the given value in the list
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
    // Returns a string representation of the list
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
    // Inserts the value at the given index
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
    // Removes the given index from the list
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
