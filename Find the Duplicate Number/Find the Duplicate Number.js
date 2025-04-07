/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    // naive implementation O(n^2)
    for(let i=0; i<nums.length; i++) {
        for (let j=i+1; j<nums.length; j++) {
            if (nums[i] == nums[j]) return nums[i];
        }
    }
    /*
    // n = size -1
    // values [1,n]
    // sum(nums) = 1 + ... + n-1, n
    sum(nums) = n!

    NAIVE SOLUTION 
    O(N^2)
    for each num  i
        for each num j after i 
            if j equals i
                return duplicate


    OPTIMIZED SOLUTION
    duplicate = sum(nums) - sum(1..n)
    ☝️ only works when only two duplicates

    n = 4
    size = 5
    nSum = 1+2+3+4 = 10

    [1,3,4,2,2] 
    arrSum = 12
    duplicate = arrSum - nSum = 2

    [3,3,3,3,3]    
    arrSum = 15
    duplicate = arrSum - nSum = 5

    [1,1,1,1,1]
    arrSum = 5
    duplicate = arrSum - nSum = -5

    */
};