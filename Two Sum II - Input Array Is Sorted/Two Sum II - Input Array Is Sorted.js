/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    // strategy
    // iterate from beginning
    // 2nd iteration to find index2 until >diff

    let i1 = 0;
    let i2 = 1;

    while(i1 < numbers.length) {
        let diff = target - numbers[i1];

        i2 = i1 + 1;
        while(numbers[i1] + numbers[i2] < target) {
            i2++;
        }
        
        if (numbers[i1] + numbers[i2] == target) break;

        i1++;
    }

    return [i1+1, i2+1];
};