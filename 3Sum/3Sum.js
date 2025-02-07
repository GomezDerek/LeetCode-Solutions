/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort();
    const ans = [];

    for(let i=0; i<nums.length; i++) {
        if (nums[i] > 0) break;

        // skip duplicates
        if (i > 0 && nums[i] === nums[i-1]) {
            continue;
        }
    
        // solve for two-sum
        let l = i+1;
        let r = nums.length-1;

        while(l<r) {
            const sum3 = nums[i] + nums[l] + nums[r];

            // twosum is too big
            if (sum3 > 0)   {
                r = decrementR(nums, r);
            }
            // twosum is too small
            else if (sum3 < 0) {
                l = incrementL(nums, l);
            }

            // twosum is just right
            else if (sum3 == 0)  {
                const triplet = [nums[i],nums[l],nums[r]];
                ans.push(triplet);
                
                // continue looking for valid triplets for this i
                r = decrementR(nums,r);
                l = incrementL(nums, l);
            }
        }
    }
    return ans;
};

var decrementR = function(nums,r) {
    r--;
    while(nums[r] == nums[r+1]) {
        r--;
    }
    return r;
}

var incrementL = function(nums,l) {
    l++;
    while(nums[l] == nums[l-1]) {
        l++;
    }
    return l;
}