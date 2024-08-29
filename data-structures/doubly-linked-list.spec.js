import DoublyLinkedList from "./doubly-linked-list";

describe("Doubly Linked List", () => {
  const list = new DoublyLinkedList();
  test("empty list", () => {
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
    expect(list.size).toBe(0);
  });

  test("append method", () => {
    list.append(1);

    expect(list.head.val).toBe(1);
    expect(list.tail.val).toBe(1);
    expect(list.size).toBe(1);

    list.append(2);

    expect(list.head.val).toBe(1);
    expect(list.tail.val).toBe(2);
    expect(list.head.next.val).toBe(2);
    expect(list.tail.prev.val).toBe(1);
    expect(list.size).toBe(2);

    list.append(3);

    expect(list.head.val).toBe(1);
    expect(list.tail.val).toBe(3);
    expect(list.head.next.val).toBe(2);
    expect(list.tail.prev.val).toBe(2);
    expect(list.size).toBe(3);
  });
});
