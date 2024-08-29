import BinaryTreeNode from "./binary-tree-node";

describe("Tree node", () => {
  test("no parameters set", () => {
    const node = new BinaryTreeNode();
    expect(node.val).toBeNull();
    expect(node.next).toBeUndefined();
    expect(node.left).toBeNull();
    expect(node.right).toBeNull();
  });

  test("parameters set", () => {
    const left = new BinaryTreeNode(2);
    const right = new BinaryTreeNode(3);
    const node = new BinaryTreeNode(1, left, right);
    expect(node.val).toBe(1);
    expect(node.left).toBe(left);
    expect(node.right).toBe(right);
  });
});
