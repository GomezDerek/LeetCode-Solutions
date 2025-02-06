/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    // 2 pointer strategy inspired by the discussion section

    let i1 = 0;
    let i2 = numbers.length - 1;

    while( numbers[i1] + numbers[i2] != target ) {
        // sum is too big
        if (numbers[i1] + numbers[i2] > target ) {
            i2--;
        }

        // sum is too small
        else if ( numbers[i1] + numbers[i2] < target ) {
            i1++;
        }
    }

    return [i1+1, i2+1];
};