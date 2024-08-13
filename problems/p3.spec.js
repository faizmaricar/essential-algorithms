import p3Solution from "./p3-solution.js";
import p3 from "./p3.js";

const func = global.isSolution ? p3Solution : p3;

describe("Problem 3: Two Sum II", () => {
  test.each([
    [[2, 7, 11, 15], 9, [1, 2]],
    [[2, 3, 4], 6, [1, 3]],
    [[-1, 0], -1, [1, 2]],
  ])("numbers = %s, target = %s -> %s", (numbers, target, expected) => {
    expect(func(numbers, target)).toEqual(expect.arrayContaining(expected));
  });
});
