function minSum(nums1: number[], nums2: number[]): number {
    /*
    NOTES:
        max elements is 2 * 100,000
        so runtime must be better than O(n^2)
            e.g. O(n) or O(log n)

    STRATEGY:
        BRUTE FORCE O(2N)
            linear iterate through both arrays
            sum non-zero elements
            count zeros

            IMPOSSIBLE IF:
                minSum = non-zero sum + zeroCount
                if smaller minSum canNOT be increased to larger minSum
                    then impossible

            POSSIBLE IF:
            smaller minSum can be increased to larger minSum
                if smaller minSum array has an available 0?
                    return largerMinSum
    */

    // interface for sum + zCount obj
    type Stats = {
        sum: number, 
        zCount: number
    }

    // returns {sum(arr), numZeroes}
    function helper(arr): Stats {
        let sum = 0;
        let zCount = 0;
        
        for (let i=0; i<arr.length; i++) {
            const num = arr[i];
            sum += num;
            if (num == 0) zCount ++;
        }

        return {sum: sum, zCount: zCount};
    }

    // store calculations
    const stats1: Stats = helper(nums1);
    const stats2: Stats = helper(nums2);
    // console.log(stats1);
    // console.log(stats2);

    const minSum1: number = stats1.sum + stats1.zCount;
    const minSum2: number = stats2.sum + stats2.zCount;

    let smallerMinSum: number;
    let biggerMinSum: number;

    // edge case: equal minSUm
    if (minSum1 == minSum2) return minSum1;

    // assign smaller and bigger
    else if (minSum1 < minSum2) {
        smallerMinSum = minSum1;
        biggerMinSum = minSum2;
    }
    else {
        smallerMinSum = minSum2;
        biggerMinSum = minSum1;
    }

    // not possible - nums1 can't reach nums2
    if (smallerMinSum == minSum1 && stats1.zCount < 1) {
        return -1;
    }

    // not possible - nums2 can't reach nums1
    else if (smallerMinSum == minSum2 && stats2.zCount < 1) {
        return -1;
    }

    // min equal sum is possible
    else {
        return biggerMinSum;
    }
    
};