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

    let set = new Set();

    // creating the first window [0,k)
    for (let i=1; i<k; i++) {
        set.add(nums[i]);
    }

    // sliding window
    for (let i=0; i<(nums.length-k); i++) {
        set.add( nums[i+k] );
        if ( set.has(nums[i]) ) {
            return true;
        }
        else {
            set.delete(nums[i+1]);
        }
    }

    // no duplicates ever found
    return false;
};