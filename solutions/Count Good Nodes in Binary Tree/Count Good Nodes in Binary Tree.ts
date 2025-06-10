/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

/*
GOAL:
    is to count how many good nodes there are
    good = no prev nodes with a higher value

STRATEGY 1:
    DFS traversal, pass maxValSeen
    if currNode >= maxValSeen
        update counter
        update maxValSeen

    return counter

    runtime: O(n)
    space: O(height)
*/
function goodNodes(root: TreeNode | null): number {
    let numGoodNodes = 0;

    function dfs(node: TreeNode | null, maxValSeen: number): void {
        // base case
        if (node === null) {
            return;
        }

        // operations (checking for a good node)
        if (node.val >= maxValSeen) {
            numGoodNodes++; // update counter
            maxValSeen = node.val;
        }

        // recursive calls
        dfs(node.left, maxValSeen);
        dfs(node.right, maxValSeen);
    }


    dfs(root, -Infinity);

    return numGoodNodes;
};