import p2Solution from "./p2-solution.js";
import p2 from "./p2.js";

const func = global.isSolution ? p2Solution : p2;

describe("Problem 2: Two Sum", () => {
  test.each([
    [[2, 7, 11, 15], 9, [0, 1]],
    [[3, 3], 6, [0, 1]],
  ])("nums = %s, target = %s -> %s", (nums, target, expected) => {
    expect(func(nums, target)).toStrictEqual(expected);
  });
});
