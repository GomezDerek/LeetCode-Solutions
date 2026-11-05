/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    // approach #2 from Leetcode Solution
    let slow = 0;

    // set slow to first 0
    while (slow < nums.length && nums[slow] != 0) slow ++;

    let fast = slow +1;
    while (fast < nums.length) {
        while (nums[fast] === 0) fast++; // find next non-0
        // now fast is non-0, and slow is 0
        if (fast >= nums.length) break;
        nums[slow] = nums[fast];

        // set up pointers to be readjusted
        slow++;
        fast++;
    }

    for (let i=slow; i<nums.length; i++) nums[i] = 0;
};