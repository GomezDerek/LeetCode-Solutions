/*
just watched Neetcode's solution video
this is how I remember his brute force, recursive solution O(2^n)

STRATEGY:
the decision tree starts at index 0, and is as follows:
    measure the length of the current subsequence
    attempt to add every remaining value to the subsequence
    and 
    start a new subsequence at the next value
*/

function lengthOfLIS(nums: number[]): number {
    
    let longest: number = -1;
    recurse([nums[0]], 0);
    return longest;

    // func def
    function recurse(subSeq: number[], curI: number): void {
        // BASE CASE

        // OPERATIONS
        longest = Math.max(longest, subSeq.length);

        // RECURSE
        // start fresh subseq at next val
        if (curI < nums.length-2) recurse([nums[curI+1]], curI+1); 
        
        for (let j=curI+1; j<nums.length; j++) {
            // try to add all other values to our subseq
            // BASE CASE?
            if ( nums[j] > subSeq[subSeq.length-1] ) {
                recurse( [...subSeq, nums[j]], j );
            }
        }
    }
};