/**
 * @param {number[]} nums
 * @return {number}
 */
var minDeletion = function(nums) {
    let deletions = nums.reduce( (delAcc, val, i) => ((i-delAcc)%2 == 0 && nums[i] == nums[++i]) ? ++delAcc : delAcc, 0);
    return (nums.length-deletions)%2 == 0 ? deletions : ++deletions;
};