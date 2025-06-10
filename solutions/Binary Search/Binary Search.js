/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length-1;
    let middle;

    while (left <= right) {
        middle = parseInt((left + right)/2);
        let midVal = nums[middle];

        if (midVal == target) {
            return middle;
        }
        else if (midVal < target) { // middle is too far left
            left = middle + 1;
        }
        else if (midVal > target) { // middle is too far right
            right = middle - 1;
        }
    }

    // target doesn't exist
    return -1;
};