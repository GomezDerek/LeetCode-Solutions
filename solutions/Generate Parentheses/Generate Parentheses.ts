/**
STRATEGY:
    recursive dfs backtracking
    decision tree: ( )  O(2^n)

    open_counter = 2
    closed_counter = 2
           ""
        "("      1
    "(("2  "()"0
           "()(" 1
    

    allCombos = str[]
    dfs(curCombo: str):
        // good base case
        pairs of parantheses == n: push to allcombos

        // bad base case
        curCmbo not valid parentheses
        bc closed_counter > open_counter


        recurse and add open parenth.
        // pop and update counters between recursions
        recurse and closed parenth.
        // pop and update counters between recursions


 */

function generateParenthesis(n: number): string[] {
    const allCombos: string[] = [];
    let open_count: number = 0;
    let closed_count: number = 0;
    let curCombo: string = "";
    dfs();
    return allCombos;

    // func def
    function dfs(): void {
        // bad base case
        if (closed_count > open_count) return;
        else if (open_count > n) return;
        
        // good base case
        else if (closed_count === n) {
            allCombos.push(curCombo.slice());  
            return;
        }

        // open parenth recursion
        // curCombo.concat("(");
        curCombo += "(";
        open_count++;
        dfs();

        // popping the open parenth
        curCombo = curCombo.slice(0,curCombo.length-1);
        open_count--;

        // closed parenth recursion
        // curCombo.concat(")");
        curCombo += ")";
        closed_count++;
        dfs();

        // pop the close parenth
        curCombo = curCombo.slice(0,curCombo.length-1);
        closed_count--;
    }
};