/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    // naive solution, O(4N) -> O(N)
    // use a hashMap of booleans
    // key: num: string, value: exists:boolean

    // 1st iterate to find min/max value
    // 2nd iteration to set keys for hashMap 
    // 3rd iteration to populate hashMap
    // 4th iteration to find longest sequence

    let minVal = 1000000000;
    let maxVal = -1000000000;
    for(const num of nums) {
        if (num < minVal) minVal = num
        else if (num > maxVal) maxVal = num 
    }
    // console.log(minVal, maxVal);

    const hMap = new Map();
    for(let i=minVal; i<=maxVal; i++) {
        hMap.set(i, false);
    }
    // console.log(hMap);

    for(const num of nums) {
        hMap.set(num, true);
    }
    // console.log(hMap);

    let maxStreak = 0;
    let currStreak = 0;

    for(const val of hMap.values()) {
        if (!val) currStreak = 0;
        else {
            currStreak ++;
            maxStreak = currStreak > maxStreak ? currStreak : maxStreak;
        }
    }

    return maxStreak;
};