/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    // DFS recursive strategy (no outside vars and array merging with .push(...))
    // use the decision tree strategy outlined by tejavenkat lanka
    // https://leetcode.com/problems/generate-parentheses/description/comments/1574327

    // track how many open/closed parentheses we have
    // closed can never be greater than open

    function recursion(str, open, closed) {
        // base case(s)
        if (closed == n) {
            return [str];
        }

        // recursive call(s)
        let paths = []
        // open parentheses
        if (open < n) {
            paths.push(...recursion(str+'(', open+1, closed));
        }

        // closed parentheses
        if (closed < n && closed < open) {
            paths.push(...recursion(str+')', open, closed+1));
        }

        return paths;
    }

    return recursion('', 0, 0, []);
};