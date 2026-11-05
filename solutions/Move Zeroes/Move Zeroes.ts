/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    // approach #3 from Leetcode Solution
    let lastNonZ = 0;

    for (let i=1; i<nums.length; i++) {
        if (nums[i] != 0) {
            nums[lastNonZ++] = nums[i];
        }
        nums[i] = 0;
    }
};