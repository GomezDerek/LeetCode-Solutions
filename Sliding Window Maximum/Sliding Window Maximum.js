/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    // STRATEGY
    /*
    1. create empty output array
    2. create k-sized window, find max, append to output array
    3. move window
        a. drop left most element in window
            if dropped == prevMax
                find new max O(k)
        b. add next element to window
            if new element > currMax
                currMax = new element
    4. repeat until end

    edge cases to consider:
        what if dropped left was max. Is O(k) most efficient?

    */

    // 1. create empty output array
    const output = [];

    // 2. create k-sized window, find max, append to output
    let curMax = -Infinity;
    for (let i=0; i<k; i++) {
        curMax = Math.max(curMax, nums[i]);
    }
    output.push(curMax);

    // 3. Iterate through nums, and slide window
    let l = 0; // this will be updated at the end of each loop
    // let right = k+1;
    for (let r=k; r<nums.length; r++) {
        // calculations

        // 3b. add new element to window
        curMax = Math.max(nums[r], curMax);

        // 3a. drop left element from window
        //      if dropped == prevMax, AND new right doesn't replace dropped left, 
        //          find new max
        if (nums[l] == curMax && nums[l] != nums[r]) {
            // find new max
            let newMax = -Infinity;
            for (let i=l+1; i<=r; i++) { // (new l, new r)
                newMax = Math.max(nums[i], newMax);
            }
            curMax = newMax;
        }
        
        // append this window's max to the output array
        output.push(curMax);

        // then move left pointer for next iterations
        l++;
    }

    return output;
};