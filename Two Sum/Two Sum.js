/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // solution inspired by Neetcode hint

    const hashMap = new Map();

    var ans = null;
    nums.some( (num, i) => {
        const diff = target - num
        
        // solution found
        if(hashMap.has(diff)) {
            ans = [i, hashMap.get(diff)]
            return true;
        }

        // solution not found yet
        else {
            hashMap.set(num, i)
        }
    });

    return ans
};