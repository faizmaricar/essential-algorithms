export default function Node(val, next) {
  this.val = val === undefined ? null : val;
  this.next = next === undefined ? null : next;
}
