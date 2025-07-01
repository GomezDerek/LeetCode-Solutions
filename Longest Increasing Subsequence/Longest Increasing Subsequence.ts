/*
    watched Neetcode's explanation for the DP solution,
    so I'll be coding my interpretation from memory

    STRATEGY:
    find the longest subsequence starting from nums[-1]
    then find the longest subsequence starting from nums[-2]
    and so on and so forth...

    nums[x] = 1 || 1 + nums[y]
    where x is curI and y is all the other indexes after

    optimizes O(2^N) to O(N^2)
*/

function lengthOfLIS(nums: number[]): number {
    const cache: number[] = new Array(nums.length).fill(1);
    let globalMax: number = 1;
    dp(nums.length-1);
    return globalMax;

    function dp(i: number): void {
        // OPERATIONS
        let localMax: number = 1;

        // attempt to extend every cached subseq with current val
        for (let j=i+1; j<nums.length; j++) {
            localMax = Math.max(
                localMax, 
                1 + ( nums[j] > nums[i] ? cache[j] : 0 )
            );
        }

        cache[i] = localMax; // memoization
        globalMax = Math.max(globalMax, localMax);

        // BASE CASE
        if (i-1 >= 0) {
            dp(i-1); // RECURSION
        }
    }
};