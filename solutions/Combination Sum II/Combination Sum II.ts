/**
STRATEGY:
    to create all unique combinations
    use dfs backtracking
    for O(2^n) runtime:
        2 decisions for each recursion
            add candidate to set
            exclude candidate from set

    how to prevent duplicates
        use a set for the valid combos, O(1) access
        sort & stringify for non-referential array comparisons


NOTES:
    each candidate may only be used once
    candidates not sorted

ASSUME: order does not matter
 */

function combinationSum2(candidates: number[], target: number): number[][] {
    const allCombos: number[][] = [];
    const curCombo: number[] = [];
    const set: Set<string> = new Set<string>();
    dfs(0, 0);
    return allCombos;

    function dfs(i: number, curSum: number) {
        console.log(curSum, curCombo);
        // good base case (target found)
        if (curSum === target) {
            const stringified: string = JSON.stringify([...curCombo].sort());
            if (!set.has(stringified)) {
                allCombos.push([...curCombo]);
                set.add(stringified);
            }
            return;
        }

        // bad base case (out of bounds or target exceeded)
        else if (curSum > target || i >= candidates.length) {
            return;
        }

        // recursion
        // include cur candidate
        curCombo.push(candidates[i]);
        dfs(i+1, curSum+candidates[i]);

        // exclude cur candidate
        curCombo.pop();
        dfs(i+1, curSum);

    }
};