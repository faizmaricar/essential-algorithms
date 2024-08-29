import LinkedList from "./linked-list";
import DoubleNode from "./double-node";
export default function DoublyLinkedList() {
  LinkedList.call(this);
  this.tail = null;
}

DoublyLinkedList.prototype = Object.create(LinkedList.prototype);

DoublyLinkedList.prototype.append = function (val) {
  const node = new DoubleNode(val);
  if (this.head === null) {
    this.head = node;
    this.tail = node;
  } else {
    let curr = this.head;
    while (curr.next) curr = curr.next;
    curr.next = node;
    node.prev = curr;
    this.tail = node;
  }
  this.size++;
};
