import Node from "./node";

export default function DoubleNode(val, next, prev) {
  Node.call(this, val, next);
  this.prev = prev === undefined ? null : prev;
}

DoubleNode.prototype = Object.create(Node.prototype);
