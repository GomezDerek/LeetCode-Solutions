/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    /* 
        ASSUMPTIONS
        well formed parentheses means that each ")" is preceded by a "("
        order of combinations doesn't matter

        STRATEGY O(2^n)
        use recursion to traverse a decision tree
        use a global var to store all combinations
        add to combinations when num of ")" === n
    */
    const combos = [];

    function recursion(str, open, close) {
        // base case(s)
        if (close==n) combos.push(str);

        // recursive call(s)
        if (open < n) recursion(str+"(", open+1, close);
        if (close < open) recursion(str+")", open, close+1);

    }

    recursion("",0,0);

    return combos;
};