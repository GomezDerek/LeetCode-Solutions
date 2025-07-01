/*
SUBMITTING JUST TO SAVE MY 1ST ATTEMPT

GOAL: 

NOTE:
    duplicates are not "strictly increasing"

STRATEGY:
    find the min
    find the max after min
    return max - min

NAIVE STRATEGY: O(N^2):
    find the longest increasing subsequence,
    by starting from every value

    and checking against every other value,
    where the 2nd value is the end of the subsequence

OPTIMIZED STRATEGY:
    find the longest increasing subsequence of EVERY substring
    use recursion + memoization,
    and record value + pos of both min and max of each substring

    O(n!) before memoization
    not sure of O() after memoization

    1 [0,6]
    2 [0,5] [1,6]
    3 [0,4] [1,5] [2,6]
    4 [0,3] [1,4] [2,5] [3,6]
    5 [0,2] [1,3] [2,4] [3,5] [4,6]
    6 [0,1] [1,2] [2,3] [3,4] [4,5] [5,6]
    7 [0,0] [1,1] [2,2] [3,3] [4,4] [5,5] [6,6]

    = 1*n + 2*(n-1) + 3*(n-2) + 4*(n-3)...
    = n^2?

    map: {minVal, minPos, maxVal, maxPos} = {}
    dfs(lBound, rBound) {
        // base case
        if bounds aren't valid,
            return ?

        // recursion
        // calc smaller by one from both sides
        left = dfs(lBound+1, rBound)
        right = dfs(lBound, rBound+1)
        
        // operations
        // note: consider duplicates
        calculate min val & pos
        calculate max val & pos
        calculate longest subsequence

        // return
        return {minVal, minPos, maxVal, maxPos, longestSubsequence}
    }

conceded after 1 h 38 m
*/

function lengthOfLIS(nums: number[]): number {

    // obj / type defs
    class ValAndPos {
        val: number;
        pos: number;
        constructor(val, pos) {
            this.val = val;
            this.pos = pos;
        }
    }

    class SeqStats {
        min: ValAndPos | null;
        max: ValAndPos | null;
        longest: number;
        constructor(min, max, longest) {
            this.min = min;
            this.max = max;
            this.longest = longest;
        }
        
    }

    return recurse(0, nums.length-1).longest;

    // func def
    function recurse(lBound: number, rBound: number): SeqStats {
        console.log(lBound, rBound);
        // base cases
        if (lBound === rBound) {
            const curPos: number = lBound;
            const curVal: number = nums[curPos];
            console.log(`single`);
            return {
                min: new ValAndPos(curVal, curPos),
                max: new ValAndPos(curVal, curPos),
                longest: 1
            }
        }
        else if (lBound > rBound) {
            return new SeqStats(null, null, 0);
        }

        // recursion
        const leftSubseq: SeqStats = recurse(lBound+1, rBound);
        const rightSubseq: SeqStats = recurse(lBound, rBound-1);

        // operations
        // consider this test case
        // cur =   [3,2,3]
        // left =  [3,2]
        // right = [2,3]
        // we want to move min left, and max right
        let minVal: number;
        let minPos: number;
        
        if (
            leftSubseq.min.val < rightSubseq.min.val
            && 
            leftSubseq.min.pos < rightSubseq.min.pos
            
        ) {
            console.log(`left min wins!`);
            minVal = leftSubseq.min.val;
            minPos = leftSubseq.min.pos;
        }
        else {
            console.log(`right min wins!`)
            minVal = rightSubseq.min.val;
            minPos = rightSubseq.min.pos;
        }
        const minInfo: ValAndPos = {
            val: minVal, 
            pos: minPos
        };

        let maxVal: number;
        let maxPos: number;

        if (
            rightSubseq.max.val > leftSubseq.max.val
            && 
            rightSubseq.max.pos > leftSubseq.max.pos
        ) {
            console.log(`right max wins!`);
            maxVal = rightSubseq.max.val;
            maxPos = rightSubseq.max.pos;
        }
        else {
            console.log(`left max wins!`)
            maxVal = leftSubseq.max.val;
            maxPos = leftSubseq.max.pos;
        }

        const maxInfo: ValAndPos = {
            val: maxVal, 
            pos: maxPos
        };

        const longest: number = maxPos - minPos;

        // return
        console.log(`${minPos} -> ${maxPos} = ${longest}`);
        return {min: minInfo, max: maxInfo, longest: longest}
        
    }

    return -1;
};