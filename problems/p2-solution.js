export default function twoSum(nums, target) {
  const remainders = new Map();

  for (let i = 0; i < nums.length; i++) {
    let remainder = target - nums[i];
    if (remainders.has(nums[i])) return [remainders.get(nums[i]), i];
    remainders.set(remainder, i);
  }
}
