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

        if (nums[l] == curMax) {
            // O(k) process
            let newMax = -Infinity;
            for(let i=l+1; i<=r; i++) {
                newMax = Math.max(nums[i],newMax);
            }
            curMax = newMax;
        }
        else {
            curMax = Math.max(nums[r], curMax);
        }


        output.push(curMax);
        l++;
    }

    return output;
};