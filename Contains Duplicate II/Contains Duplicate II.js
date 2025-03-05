/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    /* 
    brute force strategy O(n^2)
    for each value, 
    check all succeeding values up to k+1 for a value match

    optimized solution O(n)
    hashmap storing all values from (i, i+k) akak window
    as we iterate, update the hashmap with values in the new window
    
    for each val,
    update window's hashmap
    check for duplicate in said hashmap 
    */

    if (k==0) return false;

    let set = new Set();
    let hash = new Map();

    // creating the first window [0,k)
    for (let i=1; i<k; i++) {
        hash.set(nums[i], hash.has(nums[i]) ? hash.get(nums[i])+1: 1);
    }

    // sliding window
    for (let i=0; i<nums.length; i++) {
        if (i+k < nums.length) hash.set(nums[i+k], hash.has(nums[i+k]) ? hash.get(nums[i+k])+1 : 1);
        
        if ( hash.has(nums[i]) ) {
            return true;
        }
        else {
            if ( hash.get(nums[i+1]) > 1) { // multiple values
                // decrement
                hash.set( nums[i+1], hash.get(nums[i+1])-1);
            }
            else {
                hash.delete(nums[i+1])
            }
        }
    }

    // no duplicates ever found
    return false;
};