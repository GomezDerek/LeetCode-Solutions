/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    // strategy
    // sort nums
    // use 3 pointers: l,m,r
    // l increments linearly across nums
    // m and r will use the 2sum strategy for all elements after l
    // skip duplicates by comparing current pointer's to prev index. This works bc we're sorted

    nums.sort( (a,b) => a - b);
    ans = [];

    for(let l=0; l<nums.length-2; l++) {

        // skip duplicates
        if(l > 0 && nums[l] == nums[l-1]) continue;

        let m = l+1;
        let r = nums.length-1;

        // twosum strategy with all elements past l
        while(m<r) {
            

            const tripleSum = nums[l] + nums[m] + nums[r];

            // increase m if less than 0
            if (tripleSum < 0) {
                m++;
            }
            // decrease r if more than 0
            else if (tripleSum > 0) {
                r--;
            }

            // valid triplet found
            if ( tripleSum == 0 ) {
                // add triplet to answer
                ans.push([nums[l],nums[m],nums[r]]);
                
                // same logic as in prev if/else
                m++;
                while( nums[m] == nums[m-1] ) {
                    m++;
                }

                r--;
                while( nums[r] == nums[r+1] ) {
                    r--;
                }
            }
        }
    }
    return ans;
};