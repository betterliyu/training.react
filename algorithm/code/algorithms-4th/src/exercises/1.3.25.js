/* eslint-disable no-param-reassign */
class Node {
  constructor(item) {
    this.item = item;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.first = null;
  }

  findIndex(i) {
    let cur = this.first;
    let pos = 1;
    while (cur && pos !== i) {
      pos += 1;
      cur = cur.next;
    }

    return cur;
  }

  append(item) {
    if (this.first == null) {
      this.first = new Node(item);
      return;
    }

    let last = this.first;

    while (last.next != null) {
      last = last.next;
    }
    last.next = new Node(item);
  }

  delete(k) {
    if (this.first == null) {
      return null;
    }

    if (k === 1) {
      const res = this.first;
      this.first = this.first.next;
      return res.item;
    }

    let cur = this.first;
    let pos = 2;

    while (cur.next != null) {
      if (pos === k) {
        const res = cur.next;
        cur.next = cur.next.next;
        return res.item;
      }
      pos += 1;
      cur = cur.next;
    }

    return null;
  }

  size() {
    if (this.first == null) {
      return 0;
    }

    let cur = this.first;
    let pos = 1;

    while (cur.next != null) {
      pos += 1;
      cur = cur.next;
    }
    return pos;
  }

  [Symbol.iterator]() {
    const self = this;
    let cur = self.first;
    return {
      next() {
        if (cur) {
          const value = cur.item;
          cur = cur.next;
          return { done: false, value };
        }
        return { done: true };
      },
    };
  }
}
module.exports = {
  LinkedList,
};

const insertAfter = (node, insert) => {
  if (node && insert) {
    insert.next = node.next;
    node.next = insert;
  }
};

module.exports = {
  insertAfter,
  LinkedList,
  Node,
};
