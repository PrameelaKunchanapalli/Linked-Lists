import { LinkedList } from './LinkedList.js';

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());
list.insertAt("rabbit", 1);
console.log(list.toString());

list.removeAt(3);
console.log(list.toString());
list.pop();

console.log(list.toString());

console.log(list.contains('cat') );

console.log(list.at(7));



