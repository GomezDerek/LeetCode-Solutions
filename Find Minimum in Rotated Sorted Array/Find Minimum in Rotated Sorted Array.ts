function findMin(nums: number[]): number {
    /*
    Must use BSA because O(log n) required
    Goal is to find the first element in the array before rotation
    
    r = rotations
    [n-r, n] + [0, n-r-1]

    l = n-r, r = n-r-1
    l > r

    minimumIndex = maximumIndex + 1

    move left index, until l < r
    */

    function isIndexMin(i): boolean {
        const leftValid = i == 0 || nums[i] < nums[i-1];
        const rightValid = i == nums.length-1 || nums[i] < nums[i+1];
        return leftValid && rightValid;
    }

    let l: number = 0;
    let r: number = nums.length-1;
    let m: number = Math.trunc( (l+r)/2 );

    while ( !isIndexMin(m) ) {
        // console.log(l, r, m);
        
        // m is in [n-r, n]
        if (nums[m] > nums[r]) {
            l = m+1;
        }

        // m is in [0, n-r-1]
        else if (nums[m] < nums[r]) {
            r = m-1;
        }

        m = Math.trunc( (l+r)/2 );
    }

    return nums[m];
};