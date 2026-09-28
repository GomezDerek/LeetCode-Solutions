/**
    Use a hashmap where key: num, val: num_index
    iterate through nums,
        check hashmap for target - nums[i]
*/

function twoSum(nums: number[], target: number): number[] {
    const hash: {[key: number]: number} = {};
    for (let i=0; i<nums.length; i++) {
        if (hash[target-nums[i]] !== undefined) return [i, hash[target-nums[i]]]
        else hash[nums[i]] = i;
    }
};