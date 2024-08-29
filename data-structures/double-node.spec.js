import DoubleNode from "./double-node";

describe("Double Node", () => {
  test("properties when there are no parameters", () => {
    const node = new DoubleNode();
    expect(node.val).toBeNull();
    expect(node.next).toBeNull();
    expect(node.prev).toBeNull();
  });

  test("properties when there are parameters", () => {
    const second = new DoubleNode(2);
    const first = new DoubleNode(1, second);
    const third = new DoubleNode(3, undefined, second);

    second.prev = first;
    second.next = third;

    let i = 0;

    for (let node of [first, second, third]) expect(node.val).toBe(++i);

    expect(first.next).toBe(second);
    expect(second.next).toBe(third);
    expect(third.next).toBeNull();
    expect(third.prev).toBe(second);
    expect(second.prev).toBe(first);
    expect(first.prev).toBe(null);
  });
});
