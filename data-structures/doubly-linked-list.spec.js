import DoublyLinkedList from "./doubly-linked-list";

describe("Doubly Linked List", () => {
  const list = new DoublyLinkedList();
  test("empty list", () => {
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
    expect(list.size).toBe(0);
  });
});
