function searchRange(nums: number[], target: number): number[] {
    /*
    NOTES:
        "non-decreasing order" allows duplicates
        O(log n) suggests BSA
        is there always a duplicate for target?
        assume no

    STRATEGY
    use BSA twice. Once for left-most value, and once for right-most value
    O(2 log n) -> O(log n)


    */
    
    // BSA setup
    let l: number = 0;
    let r: number = nums.length-1;
    let m: number;

    // use BSA to find start index
    let start: number = -1;
    while (l <= r) {
        m = Math.floor((l+r)/2);
        
        // target found
        if (nums[m] == target) {
            // if start, successfully exit!
            if (isStart(m)) {
                start = m;
                break;
            }

            // go farther left if not start
            else {
                r = m -1;
            }
        }

        // target is farther left
        else if (nums[m] > target) {
            r = m -1;
        }

        // target is farther right
        else if (nums[m] < target) {
            l = m +1;
        }
    }

    // if we didn't find a start, target doesn't exist in nums
    if (start == -1) return [-1,-1];

    // use BSA to find end index
    let end: number = -1;
    l = 0;
    r = nums.length -1;
    while (l <= r) {
        m = Math.floor((l+r)/2);
        
        // target found
        if (nums[m] == target) {
            // if end, successfully exit!
            if (isEnd(m)) {
                end = m;
                break;
            }

            // go farther right if not start
            else {
                l = m +1;
            }
        }

        // target is farther left
        else if (nums[m] > target) {
            r = m -1;
        }

        // target is farther right
        else if (nums[m] < target) {
            l = m +1;
        }
    }

    // BSA while loop has exited, so end index has been found
    return [start, end];

    // helper functions to verify if index is a valid start or end index
    function isStart(index: number): boolean {
        
        // no possible value to left
        if (index == 0) { 
            return true;
        }

        // cannot be start because target is to left
        else if (nums[index-1] == target) {
            return false;
        }

        // all checks passed
        else {
            return true;
        }
    }

    function isEnd(index: number): boolean {
        
        // no possible value to right
        if (index == nums.length-1) { 
            return true;
        }

        // cannot be start because target is to right
        else if (nums[index+1] == target) {
            return false;
        }

        // all checks passed
        else {
            return true;
        }
    }
};