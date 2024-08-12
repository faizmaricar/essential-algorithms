import p1Solution from "./p1-solution.js";
import p1 from "./p1.js";

console.log(process.argv);
const [, , isSolution] = process.argv;

const func = isSolution ? p1Solution : p1;

describe("Problem 1: Move zeroes to the end", () => {
  test.each([
    [
      [0, 1, 0, 3, 12],
      [1, 3, 12, 0, 0],
    ],
    [[0], [0]],
  ])("%s > %s", (nums, expected) => {
    func(nums);
    expect(nums).toStrictEqual(expected);
  });
});
