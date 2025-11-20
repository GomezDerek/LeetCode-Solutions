function generateParenthesis(n: number): string[] {
    const allCombos: string[] = [];
    let open_count: number = 0;
    let closed_count: number = 0;
    const curCombo: string[] = [];
    dfs();
    return allCombos;

    // func def
    function dfs(): void {
        // bad base case
        if (closed_count > open_count) return;
        else if (open_count > n) return;

        // good base case
        else if (closed_count === n) {
            allCombos.push(curCombo.join(""));  
            return;
        }

        // open parenth recursion
        curCombo.push("(");
        open_count++;
        dfs();

        // popping the open parenth
        curCombo.pop();
        open_count--;

        // closed parenth recursion
        curCombo.push(")");
        closed_count++;
        dfs();

        // pop the close parenth
        curCombo.pop();
        closed_count--;
    }
};