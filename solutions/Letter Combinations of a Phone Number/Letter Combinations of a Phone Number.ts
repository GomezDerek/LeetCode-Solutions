/**
    GOAL: generate all possible letter combos

    STRATEGY:
        "generate all possible combos" = backtracking decision tree
        each number -> 3 letters
        runtime: O(3^n)

        dfs for recursive traversal

    NOTES:
        max input length is 4
        brute force ok, no runtime efficiency needed 

 */

function letterCombinations(digits: string): string[] {
    const map: {[key: number]: string} = {
        2: "abc",
        3: "def",
        4: "ghi",
        5: "jkl",
        6: "mno",
        7: "pqrs",
        8: "tuv",
        9: "wxyz",
    }
    const curCombo: string[] = [];
    const allCombos: string[] = [];
    dfs(0);
    return allCombos;

    // func def
    function dfs(i: number): void {
        // base case
        if (i === digits.length) {
            allCombos.push([...curCombo].join(""));
            return;
        }

        // recursion
        for (const ch of map[digits[i]]) {
            curCombo.push(ch);
            dfs(i+1);
            curCombo.pop();
        }
    }
};