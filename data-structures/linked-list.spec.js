import LinkedList from "./linked-list";
import Node from "./node";

describe("Linked List", () => {
  const list = new LinkedList();
  test("no properties", () => {
    expect(list.head).toBe(null);
    expect(list.size).toBe(0);
  });
});
