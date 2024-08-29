import LinkedList from "./linked-list";

describe("Linked List", () => {
  const list = new LinkedList();
  const values = [12, 54, 89, 23];

  test("no properties", () => {
    expect(list.head).toBe(null);
    expect(list.size).toBe(0);
  });

  test("append method assigns added node to head of list", () => {
    list.append(1);
    expect(list.head).not.toBeNull();
    expect(list.head.val).toBe(1);
    expect(list.size).toBe(1);
  });

  test("append method add node to the end of the list", () => {
    for (let value of values) list.append(value);
    let curr = list.head.next;

    for (let value of values) {
      expect(curr.val).toBe(value);
      curr = curr.next;
    }
    expect(list.size).toBe(values.length + 1);
  });

  test("insertAt method adds node to position", () => {
    let val = 63,
      index = 2;

    list.insertAt(val, index);

    let curr = list.head;

    for (let i = 0; i < index; i++) curr = curr.next;

    expect(curr.val).toBe(val);
  });

  test("inserAt method throws error if position does not exists", () => {
    expect(() => list.insertAt(34, 15)).toThrow("Index out of bounds");
  });

  test("removeAt method removes node at position", () => {
    let index = 3;
    list.removeAt(index);
    let curr = list.head;
    for (let i = 0; i < index; i++) curr = curr.next;
    expect(curr.val).toBe(89);
  });
});
