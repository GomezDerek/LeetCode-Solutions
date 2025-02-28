/**
 * @param {number[]} nums
 * @return {number}
 */
var minDeletion = function(nums) {
    
    let deletions = 0;

    for (let i=0; i<nums.length-1; i++) {
        if ( (i-deletions)%2==0 && nums[i] == nums[i+1] ) deletions++;
    }

    return (nums.length-deletions)%2 == 0  ? deletions : deletions +1;
};