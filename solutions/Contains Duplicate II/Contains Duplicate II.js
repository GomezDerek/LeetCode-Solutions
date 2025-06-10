/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    // inspired by Luis's solution

    let map = new Map();

    for (let i=0; i<nums.length; i++) {
        if (!map.has(nums[i])) {
            // add it if map doesn't have it
            map.set(nums[i], i);
        }
        else { // does exist
            // size < k?
            if ( Math.abs(i-map.get(nums[i])) <= k ) return true;
            // else 👇
            map.set(nums[i], i); // upping the index, bc duplicate found in window
        }
    }

    // if none of that worked
    return false;
};