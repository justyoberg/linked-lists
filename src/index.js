import LinkedList from "./LinkedList.js"

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
