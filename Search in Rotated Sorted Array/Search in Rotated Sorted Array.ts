function search(nums: number[], target: number): number {
    /*
    STRATEGY

    INITIAL: O( log n + log n)
    after rotation, we can split our rotated array into 2 sorted arrays
    1. BSA to find the pivot
    2. BSA to search through our new sorted arrays

    optimization: O( log n )
    during BSA:
        if m in leftArr and target in rightArray
            move left pointer
        
        else if m in rightArr and target in leftArray
            move right pointer
        
        else if m in leftArr and target farther left
            move right pointer

        else if m in rightArr and target farther right
            move left pointer
    
    target = 0
    4, 5, 6, 7, 0, 1, 2
    l        m        r
    m > target && l > target
    l = m +1

    0, 1, 2
    l  m  r
    m > target && l <= target
    r = m - 1
    */

    let l: number = 0;
    let r: number = nums.length -1;
    let m: number;

    while(l <= r) {
        m = Math.trunc( (l+r)/2 );
        // console.log(m, nums[m]);
    
        if (nums[m] == target) return m;

        // if m in leftArr and target in rightArray
        // l m | t r
        else if (nums[m] > target && target < nums[l]) {
            l = m + 1;
        }

        // else if m in leftArr and target farther left
        // l t m | r
        else if (nums[m] > target && target >= nums[l]) {
            r = m - 1;
        }
        
        // else if m in rightArr and target in leftArray
        // l t | m r
        else if (nums[m] < target && target > nums[r]) {
            r = m - 1;
        }

        // else if m in rightArr and target farther right
        // l | m t r
        else if (nums[m] < target && target <= nums[r]) {
            l = m + 1;
        }
    }

    return -1; // target not in array
};