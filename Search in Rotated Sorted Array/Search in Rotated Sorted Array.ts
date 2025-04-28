function search(nums: number[], target: number): number {
    /*
    STRATEGY

    NAIVE: O( log n + log n)
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

    function isPivotIndex(k: number): boolean {
        const leftValid = k == 0 || nums[k] < nums[k-1];
        const rightValid = k == nums.length -1 || nums[k] < nums[k+1];
        return leftValid && rightValid; 
    }

    // find the pivot with BSA
    let l: number = 0;
    let r: number = nums.length-1;
    let k: number = Math.trunc( (l+r)/2 );
    while ( !isPivotIndex(k) ) {
        // console.log(k, nums[k]);
        
        // k is in leftArr
        if (nums[k] > nums[r]) {
            l = k+1;
        }

        // k is in rightArr
        else if (nums[k] < nums[r]) {
            r = k-1;
        }

        k = Math.trunc( (l+r)/2 );
    }

    // pivot found! (when while exits)
    // console.log(k, nums[k]);

    // split the rotated array into 2 sorted arrays
    const arr1: number[] = nums.slice(0,k);
    const arr2: number[] = nums.slice(k)
    // console.log(arr1, arr2);

    // determine which array the target is in
    // note: doesn't recognize if the target is in neither
    let targetArr: number[];

    if (target >= arr1[0] && target <= arr1[arr1.length-1]) {
        targetArr = arr1;
    }
    else {
        targetArr = arr2;
    }
    // console.log(targetArr);

    // find the target in the targetArr with BSA
    // reuse the pointers from the pivot BSA
    l = 0;
    r = targetArr.length-1;
    let m: number;
    while (l <= r) {
        m = Math.trunc( (l+r)/2 );
        // console.log(m, targetArr[m]);

        if (targetArr[m] === target) {
            // calculate the index in nums, not targetArr
            if (targetArr[0] == arr1[0]) return m; // targetArr is leftArr
            else return m + arr1.length;           // targetArr is rightArr
        }
        else if (targetArr[m] > target) {
            r = m -1;
        }
        else if (targetArr[m] < target) {
            l = m +1;
        }
    }
    
    return -1; // target not in targetArr
};