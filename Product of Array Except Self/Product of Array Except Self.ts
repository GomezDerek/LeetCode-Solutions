/**
    just watched NC's explanation and then I coded it in Python
    now trying in TS

    STRATEGY:
        because output doesn't count towards mem complexity
        - use output to calc prefixes
        - use a single var for suffixes
 */

function productExceptSelf(nums: number[]): number[] {
    const N: number = nums.length;

    const output: number[] = new Array(N).fill(1);

    // calc prefixes 1st
    for (let i=1; i<N; i++) {
        output[i] = nums[i-1] * output[i-1];
    }

    // then calc suffixes
    let suffix: number = 1;
    for (let i=N-1; i>=0; i--) {
        output[i] *= suffix;
        suffix *= nums[i];
    }

    return output;
};