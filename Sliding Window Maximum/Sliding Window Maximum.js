/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {

    const output = [];

    let curMax = -Infinity;
    for (let i=0; i<k; i++) {
        curMax = Math.max(curMax, nums[i]);
    }
    output.push(curMax);

    let l = 0;
    for (let r=k; r<nums.length; r++) {
        curMax = Math.max(nums[r], curMax);
        output.push(curMax);
        l++;
    }

    return output;
};