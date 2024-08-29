import LinkedList from "./linked-list";

export default function DoublyLinkedList() {
  LinkedList.call(this);
  this.tail = null;
}
