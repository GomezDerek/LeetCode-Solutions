/*
GOAL: find amount of triplets

NOTES:
    nums[i] + diff = nums[j]
    nums[j] + diff = nums[k]
    STRICTLY INCREASING = no duplicates


STRATEGY:
    sliding window?
    find doubles, then triples
    two pointers for doubles:
        if j-i < diff: j++
        else if j-i > diff: i++ 
        else if j==i: j++
        when double found:
            add 3rd pointer (k)
                follow same logic to find diff
*/

// 25 min: ready to test / submit. Walked through my algo. Manually tested against example test cases
function arithmeticTriplets(nums: number[], diff: number): number {
    let i: number = 0;
    let j: number = 1;
    let k: number;

    let tripleCount: number = 0;

    while (j < nums.length) {
        if (i === j) j++; // avoid index overlap

        // look for double
        if (nums[j] - nums[i] < diff) j++;      // increase diff
        else if (nums[j] - nums[i] > diff) i++; // decrease diff
        
        // DOUBLE FOUND
        else if (nums[j] - nums[i] === diff) {
            // look for triple
            k = j+1;
            while (k < nums.length) {
                if (nums[k] - nums[j] === diff) {
                    tripleCount++;
                    i++;
                    break;
                }
                else {
                    k++;
                }
            }
        }
    }

    return tripleCount;
};