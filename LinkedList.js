// Node class
class Node {
    constructor(value = null, nextNode = null) {
      this.value = value;
      this.nextNode = nextNode;
    }
  }
  
  // LinkedList class
  class LinkedList {
    constructor() {
      this.headNode = null;
    }
  
    append(value) {
      const newNode = new Node(value);
      if (this.headNode === null) {
        this.headNode = newNode;
        return;
      }
      let current = this.headNode;
      while (current.nextNode !== null) {
        current = current.nextNode;
      }
      current.nextNode = newNode;
    }
  
    prepend(value) {
      const newNode = new Node(value, this.headNode);
      this.headNode = newNode;
    }
  
    size() {
      let count = 0;
      let current = this.headNode;
      while (current !== null) {
        count++;
        current = current.nextNode;
      }
      return count;
    }
  
    head() {
      return this.headNode;
    }
  
    tail() {
      let current = this.headNode;
      if (!current) return null;
      while (current.nextNode !== null) {
        current = current.nextNode;
      }
      return current;
    }
  
    at(index) {
      let count = 0;
      let current = this.headNode;
      while (current !== null) {
        if (count === index) return current;
        count++;
        current = current.nextNode;
      }
      return null;
    }
  
    pop() {
      if (this.headNode === null) return;
  
      if (this.headNode.nextNode === null) {
        this.headNode = null;
        return;
      }
  
      let current = this.headNode;
      while (current.nextNode.nextNode !== null) {
        current = current.nextNode;
      }
      current.nextNode = null;
    }
  
    contains(value) {
      let current = this.headNode;
      while (current !== null) {
        if (current.value === value) return true;
        current = current.nextNode;
      }
      return false;
    }
  
    find(value) {
      let current = this.headNode;
      let index = 0;
      while (current !== null) {
        if (current.value === value) return index;
        current = current.nextNode;
        index++;
      }
      return null;
    }
  
    toString() {
      let str = '';
      let current = this.headNode;
      while (current !== null) {
        str += `( ${current.value} ) -> `;
        current = current.nextNode;
      }
      str += 'null';
      return str;
    }
  
    
    insertAt(value, index) {
      if (index === 0) {
        this.prepend(value);
        return;
      }
  
      const previous = this.at(index - 1);
      if (previous === null) return;
  
      const newNode = new Node(value, previous.nextNode);
      previous.nextNode = newNode;
    }
  
    removeAt(index) {
      if (index === 0) {
        if (this.headNode !== null) {
          this.headNode = this.headNode.nextNode;
        }
        return;
      }
  
      const previous = this.at(index - 1);
      if (previous === null || previous.nextNode === null) return;
  
      previous.nextNode = previous.nextNode.nextNode;
    }
  }
  
  
  export { LinkedList };
  