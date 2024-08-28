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
