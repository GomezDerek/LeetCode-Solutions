/**
STRATEGY:
    first sort,
    then 2 pointers and shrink
 */

function maxOperations(nums: number[], k: number): number {
    nums.sort( (a,b) => a-b);
    let count = 0;
    
    let l = 0;
    let r = nums.length-1;

    while (l < r) {
        if (nums[l] + nums[r] === k) {
            count++;
            l++;
            r--;
        }

        else if (nums[l] + nums[r] > k) r--;
        else if (nums[l] + nums[r] < k) l++;

    }

    return count;
};