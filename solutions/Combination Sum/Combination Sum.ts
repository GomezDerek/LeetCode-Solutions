/**
    STRATEGY:
        recursive decision tree O(N!)
        1. add candidates to a set
        2. start decision tree from every candidate
            a. cumulate sum until target
            b. traverse to all candidates (curSum + cand <= target)

        [2,3,6,7], target = 7
            2
          2    3
        2  3  2  3
           ^  ^
        reverse DP iteration O(n^2)
        1. iterate backwards (sorted)
            a. for every candidate, note closest possible sum to target
        
        [7,6,3,2]
        [
            7,
            6,
            [3,6],
            [2,4,6]
        ]
        res = [
            [2,2,2,2],
            [2,2,3]
        ]

    NOTES:
        candidates may be used unlimited times
        max 30 candidates, TLE unlikely
        candidates unsorted

    finished planning at min 17
    abandoned DP optimization, pursuing recursion
 */

function combinationSum(candidates: number[], target: number): number[][] {
    const combosRes: number[][] = [];
    
    // in-place asc sort
    candidates.sort((a,b)=> a-b);

    for (let i=0; i<candidates.length; i++) dfs(i, []);

    return combosRes;

    function dfs(candIndex: number, curCombo: number[]): void {
        // add new candidate to combo
        curCombo.push(candidates[candIndex]);
        const curSum: number = curCombo.reduce((acc,x) => acc+=x); 
        
        // base case, target reached
        if ( target === curSum) {
            combosRes.push(curCombo);
        }

        // recursive call(s)
        for (let i=candIndex; i>=0; i--) {
            if (curSum + candidates[i] <= target) {
                dfs(i, [...curCombo]);
            }
        } 
    }
};