// NC solution from memory

function combinationSum(candidates: number[], target: number): number[][] {
    const allCombos: number[][] = [];
    const curCombo: number[] = [];
    dfs(0, 0);
    return allCombos;

    function dfs(i: number, curSum: number): void {
        // good base case
        if (curSum === target) {
            allCombos.push([...curCombo]);
            return;
        }
        // bad base case
        else if (i >= candidates.length || curSum > target) {
            return;
        }

        // O(2^n) recursion
        // include i in combo
        curCombo.push(candidates[i]);
        dfs(i, curSum+candidates[i]);

        // exclude i in combo
        curCombo.pop();
        dfs(i+1, curSum);
    }
};