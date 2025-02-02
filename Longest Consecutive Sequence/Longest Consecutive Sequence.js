/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    // strategy
    // 1. create a map to store each num and provide O(1) lookup
    // 2. iterate through the map to find subsequence start candidates
    // 3. attempt subsequence starting at the candidate
    // 4. as we access map elements, delete them from the map

    // 1.
    const hMap = new Map();
    for(const num of nums) {
        if (!hMap.has(num)) 
            hMap.set(num, true);
        else 
            continue;
    }

    let maxStreak = 0;
    let currStreak = 0
    // 2. 
    for(const key of hMap.keys()) {
        // starter candidate if no prevElement
        if( !hMap.has(key-1) ) {
            // 3.
            currStreak = 0;
            let currKey = key;
            while(hMap.has(currKey)) {
                // hMap.delete(currKey);
                currStreak ++;
                maxStreak = currStreak > maxStreak ? currStreak : maxStreak;
                currKey++;
            }
        }
    }
    return maxStreak;
};