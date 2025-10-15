/**
    GOAL: return an array where each element is a product of every other element in the array

    STRATEGY:
        calc the product of the entire array
        iterate through the og array
            nums[i] = product/nums[i]
        runtime: O(2n)
        space: O(1)

        BUT NO DIVISION OPERATION IS ALLOWED...

        HINT: "the product of any prefix or suffix..."

        let's calc prefixes and suffixes

        example:
        nums   = [1,2,3,4]
        suffix = [24,12,4,0] // product of all later values
        prefix = [0,1,2,6]   // product of all prev values
    
        res[i] = prefix[i] + suffix[i] 

        time: O(3n) -> O(n)
        space: O(2n) -> O(n)
 */

function productExceptSelf(nums: number[]): number[] {
    const N: number = nums.length;

    const prefix: number[] = new Array(N);
    prefix[0] = 1;
    prefix[1] = nums[0];
    for (let i=2; i<N; i++) {
        prefix[i] = prefix[i-1] * nums[i-1];
    }
    // console.log(prefix);
    
    const suffix: number[] = new Array(N);
    suffix[N-1] = 1;
    suffix[N-2] = nums[N-1];
    for (let i=N-3; i>=0; i--) {
        suffix[i] = suffix[i+1] * nums[i+1];
    }
    // console.log(suffix);

    const ans: number[] = [];
    for (let i=0; i<N; i++) {
        ans.push(prefix[i] * suffix[i]);
    }
    return ans;
};