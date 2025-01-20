/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    hashMap = {}
    
    // populate hashMap
    nums.forEach( (num, i) => {
        hashMap[num] = i
    });

    // console.log(hashMap)

    // iterate for solution
    for(let i=0; i < nums.length; i++) {
        diff = target - nums[i]
        // console.log(`i:${i}\nnum:${nums[i]}\ndiff:${diff}\nhashMap[diff]:${hashMap[diff]}`);
        if (hashMap[diff] != undefined && hashMap[diff] != i) {
            return [i, hashMap[diff]]
        }
    }
};