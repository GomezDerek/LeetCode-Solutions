/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {

    // Neetcode solution
    /*
        array's values point to indices and form a linked list
        a duplicate number creates a cycle
        the duplicate nummber is the head of the cycle
    */

    // 0 index is head of LL
    // pointers represent index
    let slow = 0;
    let fast = nums[0]; // starts 1 node ahead

    while (slow != fast) {
        slow = nums[slow];
        fast = nums[ nums[fast] ];
    }
    // breaks when fast catches slow in the cycle

    let chaser = 0;
    slow = nums[slow];
    while (chaser != slow) {
        slow = nums[slow];
        chaser = nums[chaser];
    }
    // breaks at the head of the cycle

    return chaser;



    // below was from first attempt
    ////////////////////////////////////////////////
    
    // TLE
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
    ☝️ only works when only one duplicate



    n = 4
    size = 5
    nSum = 1+2+3+4 = 10

    [1,3,2,2,2]
    arrSum = 10
    diff = 0 = nSum - arrSum = 10-10
    avg = arrSum/size = 2

    [1,3,4,2,2] 
    arrSum = 12
    duplicate = arrSum - nSum = 2
    avg = arrSum/size = 12/5 = 2.4

    [3,3,3,3,3]    
    arrSum = 15
    duplicate = arrSum - nSum = 5

    [1,1,1,1,1]
    arrSum = 5
    duplicate = arrSum - nSum = -5

    */
};