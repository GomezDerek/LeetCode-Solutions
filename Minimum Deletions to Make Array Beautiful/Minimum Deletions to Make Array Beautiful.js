/**
 * @param {number[]} nums
 * @return {number}
 */
var minDeletion = function(nums) {
    // brute force
    // iterate and find every ugly i%2 O(n)
    // for every ugly i%2: fix it and check if it fixes the array O(n^2)

    // test: [1,1,2,2,3,3]
    // ugly: [4,2,0]
    // delete 0th ugly from test
    
    // ! beautiful bc length is odd
    // test: [1,2,2,3]
    // ugly: [4,2]
    // deletions: 1

    let deletions = 0;
    let uglyStack = [];

    // find all uglies, regardless if i%2==0
    let i=nums.length-2;
    while (i>=0) {
        if (nums[i] == nums[i+1]) uglyStack.push(i);
        i--;
    }

    console.log('initialized',uglyStack);

    while (uglyStack.length) {
        const uglyPos = uglyStack.pop() - deletions;
        // console.log('uglyPos', uglyPos);
        if ( uglyPos%2 == 0 ) {
            nums.splice(uglyPos,1);
            deletions++;
            // console.log(uglyPos, ' deleted');
            // console.log('new nums: ', nums)
        }
    }

    return nums.length%2 == 0 ? deletions : deletions +1;
};