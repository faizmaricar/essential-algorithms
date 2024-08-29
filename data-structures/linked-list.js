import Node from "./node";

export default function LinkedList() {
  this.head = null;
  this.size = 0;
}

LinkedList.prototype.append = function (val) {
  let node = new Node(val);
  let curr = this.head;
  if (curr === null) this.head = node;
  else {
    while (curr.next) {
      curr = curr.next;
    }
    curr.next = node;
  }
  this.size++;
};

LinkedList.prototype.prepend = function (val) {
  let node = new Node(val, this.head);
  this.head = node;
};

LinkedList.prototype.insertAt = function (val, index) {
  let newNode = new Node(val);
  let curr = this.head;

  while (--index) {
    if (curr !== null) curr = curr.next;
    else throw new Error("Index out of bounds");
  }

  let nextNode = curr.next;
  curr.next = newNode;
  newNode.next = nextNode;

  this.size++;
};

LinkedList.prototype.removeAt = function (index) {
  let curr = this.head,
    prev = curr,
    i = 0;

  while (i < index) {
    i++;
    prev = curr;
    curr = curr.next;
  }

  prev.next = curr.next;
};
