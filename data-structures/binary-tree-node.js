import Node from "./node";

export default function BinaryTreeNode(val, left, right) {
  Node.call(this, val);
  this.next = undefined;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

BinaryTreeNode.prototype = Object.create(Node.prototype);
