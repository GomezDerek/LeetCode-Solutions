/**
 * @param {number[]} nums
 * @return {number}
 */
var minDeletion = function(nums) {
    
    let deletions = 0;
    let uglyStack = [];

    // find all uglies, regardless if i%2==0
    for (let i=nums.length-2; i>=0; i--) {
        if (nums[i] == nums[i+1]) uglyStack.push(i);
    }

    // pop through the entire stack
    while (uglyStack.length) {

        // subtrgact dels to calc index in hypothetically modded array
        const uglyInd = uglyStack.pop()-deletions; 

        // "delete" if uglyIndex is even
        if (uglyInd%2 == 0) deletions++;
    }

    // length must be even to be beautiful
    return (nums.length - deletions)%2 == 0 ? deletions : deletions +1;
};