function search(nums: number[], target: number): number {
    let l: number = 0;
    let r: number = nums.length-1;
    let m: number;

    while (l <= r) {
        m = Math.floor((l+r)/2);

        // target found!
        if (target === nums[m]) return m;

        // m is left of pivot
        else if (nums[l] <= nums[m]) {
            // target is right of m
            if (target < nums[l] || target > nums[m]) {
                l = m +1;
            }

            // target is left of m
            else { // target >= nums[l] && target < nums[m]
                r = m -1;
            }
        }

        // m is right of pivot
        else {
            // target is left of m
            if (target > nums[r] || target < nums[m]) {
                r = m -1;
            }

            // target is right of m
            else { // target > nums[m] && target <= nums[l]
                l = m +1;
            }
        }
    }
    return -1; // target is not in nums
};