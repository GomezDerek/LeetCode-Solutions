/**
 * @param {number[]} nums
 * @return {number}
 */
var minDeletion = function(nums) {
    const deletions = nums.reduce( (delAcc, val, i) => ((i-delAcc)%2 == 0 && nums[i] == nums[i+1]) ? delAcc+1 : delAcc, 0);
    return (nums.length-deletions)%2 == 0  ? deletions : deletions+1;
};