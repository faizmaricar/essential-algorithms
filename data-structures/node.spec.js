import Node from "./node";

describe("node data structure", () => {
  test("properties when there is no parameters", () => {
    const node = new Node();
    expect(node.val).toBe(null);
    expect(node.next).toBe(null);
  });

  test("properties when there is parameters", () => {
    const next = new Node(2);
    const head = new Node(1, next);
    expect(head.val).toBe(1);
    expect(head.next).toBe(next);
  });
});
