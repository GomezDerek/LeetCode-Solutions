/*
just watched Neetcode's solution video
this is how I remember his brute force, recursive solution O(2^n)

STRATEGY:
the decision tree starts at index 0, and is as follows:
    attempt to add the next index to the current subsequence
    and
    start a new subsequence at the next index

*/

function lengthOfLIS(nums: number[]): number {
    
    let longest: number = 1;
    recurse([nums[0]], 1);
    return longest;

    // func def
    function recurse(subSeq: number[], nextI: number): void {
        // BASE CASE
        // nextI is out of bounds
        if (nextI >= nums.length) return;

        // OPERATIONS
        // console.log(subSeq, nums[nextI]);
        // if next val is larger, add to the subsequence
        if ( nums[nextI] > subSeq[subSeq.length-1] ) {
            subSeq.push(nums[nextI]);
            // console.log('✅\n');
        }
        // else console.log('❌\n');
        longest = Math.max(longest, subSeq.length);

        // RECURSION
        // recurse(subSeq, nextI+1);
        // recurse(nums[nextI], nextI+1);
        
        for (let j=nextI+1; j<nums.length; j++) {
            recurse([nums[nextI]], j);
            recurse([...subSeq], j);
        }
    }
};