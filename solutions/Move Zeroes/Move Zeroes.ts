/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    // approach #2 from Leetcode Solution
    let lastNonZ = 0;

    for (let i=0; i<nums.length; i++) {
        if (nums[i] != 0) {
            nums[lastNonZ++] = nums[i];
        }
    }

    for (let i=lastNonZ; i<nums.length; i++) nums[i] = 0;
};