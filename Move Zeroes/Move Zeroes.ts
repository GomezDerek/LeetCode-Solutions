/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    // approach #3 from Leetcode Solution
    let lastNonZ = 0;

    for (let i=0; i<nums.length; i++) {
        if (nums[i] != 0) {
            const temp = nums[i];
            nums[i] = nums[lastNonZ];
            nums[lastNonZ] = temp;
            lastNonZ++;
        }
    }
};