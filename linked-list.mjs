export class LinkedList {
  constructor() {
    this.headNode = null;
    this.tailNode = null;
    this.currNode = null;
  }

  append(key, value) {
    const newTail = new Node(key, value);

    if (this.headNode === null) {
      this.headNode = newTail;
      this.tailNode = newTail;
    } else {
      this.tailNode.nextNode = newTail;
      this.tailNode = newTail;
    }
  }

  prepend(value) {
    const newHead = new Node(value);

    if (this.headNode === null) {
      this.headNode = newHead;
      this.tailNode = newHead;
    } else {
      newHead.nextNode = this.headNode;
      this.headNode = newHead;
    }
  }

  size() {
    let size = 0;
    this.currNode = this.headNode;

    while (this.currNode !== null) {
      this.currNode = this.currNode.nextNode;
      size++;
    }
    return size;
  }

  head() {
    return this.headNode;
  }

  tail() {
    return this.tailNode;
  }

  at(index) {
    this.currNode = this.headNode;

    for (let i = 0; i < index; i++) {
      this.currNode = this.currNode.nextNode;
    }
    return this.currNode;
  }

  pop() {
    this.tailNode = null;
    this.currNode = this.headNode;

    while (this.currNode !== null) {
      if (this.currNode.nextNode.nextNode === null) {
        this.tailNode = this.currNode;
        this.currNode.nextNode = null;
      }
      this.currNode = this.currNode.nextNode;
    }
  }

  containsValue(value) {
    this.currNode = this.headNode;

    while (this.currNode !== null) {
      if (this.currNode.value === value) {
        return true;
      }
      this.currNode = this.currNode.nextNode;
    }

    return false;
  }

  containsKey(key) {
    this.currNode = this.headNode;

    while (this.currNode !== null) {
      if (this.currNode.key === key) {
        return true;
      }
      this.currNode = this.currNode.nextNode;
    }

    return false;
  }

  updateExisting(key, value) {
    this.currNode = this.headNode;

    while (this.currNode !== null) {
      if (this.currNode.key === key) {
        this.currNode.value = value;
      }
      this.currNode = this.currNode.nextNode;
    }
  }

  find(value) {
    this.currNode = this.headNode;

    let i = 0;
    while (this.currNode !== null) {
      if (this.currNode.value === value) {
        return i;
      }
      this.currNode = this.currNode.nextNode;
      i++;
    }
    return null;
  }

  toString() {
    let str = "";
    this.currNode = this.headNode;

    while (this.currNode !== null) {
      str += `( ${this.currNode.value} ) -> `;
      this.currNode = this.currNode.nextNode;
    }
    str += "null";
    return str;
  }

  getValue(key) {
    this.currNode = this.headNode;

    while (this.currNode !== null) {
      if (this.currNode.key === key) {
        return this.currNode.value;
      }
      this.currNode = this.currNode.nextNode;
    }
    return null;
  }

  removeExisting(key) {
    this.currNode = this.headNode;
    let prevNode = this.currNode;

    while (this.currNode !== null) {
      if (this.currNode.key === key) {
        prevNode.nextNode = this.currNode.nextNode;
        this.currNode = null;
        return true;
      }
      prevNode = this.currNode;
      this.currNode = this.currNode.nextNode;
    }
    return false;
  }

  getKeys() {
    const keys = [];
    this.currNode = this.headNode;

    while (this.currNode !== null) {
      keys.push(this.currNode.key);
      this.currNode = this.currNode.nextNode;
    }
    return keys;
  }
}

class Node {
  constructor(key = null, value = null, nextNode = null) {
    this.key = key;
    this.value = value;
    this.nextNode = nextNode;
  }
}

// LinkedList {
//   head: Node1;
//   tail: Node3;
//   curr: Node2;
//   Node1 {
//     value,
//     nextNode,
//   }
//   Node2 {
//     value,
//     nextNode,
//   }
//   Node3 {
//     value,
//     nextNode,
//   }
// }
