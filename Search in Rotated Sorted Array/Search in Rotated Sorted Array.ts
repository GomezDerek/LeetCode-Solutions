function search(nums: number[], target: number): number {
    // Leetcode strategy from memory
    let l: number = 0;
    let r: number = nums.length-1;
    let m: number;

    while (l <= r) {
        m = Math.floor((l+r)/2);

        if (nums[m] === target) return m; 

        // middle is left of pivot
        if (nums[l] > nums[r]) {
            // target is right of middle
            if (target < nums[l]) {
                l = m +1;
            }
            else if (target > nums[m]) {
                l = m + 1;
            }
            // target is left from middle
            else { // target < nums[m]
                r = m -1;
            }

        }

        // middle is right of pivot
        else {
            // target is left of middle
            if (target > nums[r]) {
                r = m -1;
            }
            else if (target < nums[m]) {
                r = m -1;
            }

            // target is right of middle
            else { // target > nums[m]
                l = m +1;
            }
        }
    }

    // target isn't in nums
    return -1;
};