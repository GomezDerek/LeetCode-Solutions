// revised my code after watching NC's solution

function combinationSum2(candidates: number[], target: number): number[][] {
    const allCombos: number[][] = [];
    const curCombo: number[] = [];
    candidates.sort();
    dfs(0, 0);
    return allCombos;

    function dfs(i: number, curSum: number): void {
        // console.log(curSum, curCombo);
        // good base case (target found)
        if (curSum === target) {
            allCombos.push([...curCombo]);
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
        while ( 
            i < candidates.length 
            && candidates[i] === candidates[i+1] // out of bounds -> undefined
        ) {
            i++;
        }

        dfs(i+1, curSum);

    }
};