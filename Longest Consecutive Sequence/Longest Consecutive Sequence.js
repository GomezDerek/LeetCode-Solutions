/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    // BFS solution inspired from discussion section
    const hMap = new Map();

    // populate hashMap
    for(const num of nums) {
        hMap.set(num, null);
    }

    let maxStreak = 0;
    let currStreak = 0;

    for(const key of hMap.keys()) {

        // if num isn't in the middle/end of a subsequence
        // then we can start streak
        if ( !hMap.has(key-1) ) {
            
            let currKey = key;
            while( hMap.has(currKey) ) {
                currStreak ++;
                maxStreak = currStreak > maxStreak ? currStreak : maxStreak;

                hMap.delete(currKey);
                currKey++;    
            }
            currStreak = 0;
        }

        // num can't start a sequence
        else {
            continue;
        }
    }
    return maxStreak;
};