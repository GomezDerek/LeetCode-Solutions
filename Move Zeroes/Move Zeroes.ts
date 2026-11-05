/**
 Do not return anything, modify nums in-place instead.
 */

/**
STRATEGY:
    2 pointers. One at the last non-zero position
    the other iterates looking for zero from beginning
    O(n) time and O(1) space

    WHILE MAINTAINING THE RELATIVE ORDER
    left pointer starts at the right most zero and moves left?
    then swap into len-1 --?

    edge cases?
 */
function moveZeroes(nums: number[]): void {
    // inefficient solution is better than non-working solution
    const nonZ: number[] = nums.filter(num => num != 0);
    for (let i=0; i<nonZ.length; i++) nums[i] = nonZ[i];
    for (let i=nonZ.length; i<nums.length; i++) nums[i] = 0;

    // 2nd attempt doesn't preserve the order either...
    // let l = nums.length-1; 
    // let r = nums.length-1;
    // while (l >= 0) {
    //     while (nums[l] !== 0) l--;
    //     if (l >= 0) {
    //         const temp = nums[l];
    //         nums[l] = nums[r];
    //         nums[r] = temp;
    //     }
    //     l--;
    //     r--;
    // }

    //first attempt
    // let l = 0;
    // let r = nums.length -1;

    // while (l < r) {
    //     while (nums[r] === 0) r--;
    //     while (nums[l] != 0) l++;

    //     if (l < r) {
    //         const temp = nums[l];
    //         nums[l] = nums[r];
    //         nums[r] = temp;
    //     }
    // }
};