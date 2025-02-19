/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    // DFS recursive strategy
    // use the decision tree strategy outlined by tejavenkat lanka
    // https://leetcode.com/problems/generate-parentheses/description/comments/1574327

    // track how many open/closed parentheses we have
    // closed can never be greater than open

    let answer = [];

    function recursion(str, open, closed) {
        // base case(s)
        if (closed == n) {
            answer.push(str);
        }

        // recursive call(s)
        // open parentheses
        if (open < n) recursion(str+'(', open+1, closed);

        // closed parentheses
        if (closed < n && closed < open) recursion(str+')', open, closed+1);
    }

    recursion('', 0, 0);

    return answer;
};