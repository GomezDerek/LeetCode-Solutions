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
 NOTES:
    return an array of the right-most value for each level

STRATEGY:
    use DFS to traverse left, then right branches
        as we traverse, update the answer array's level with the current node
        the order of left then right, will ensure we have the right-most nodes for each level 
 */

function rightSideView(root: TreeNode | null): number[] {
    const answer: number[] = [];
    dfs_helper(root, 0);
    return answer;

    // function definition
    function dfs_helper(node, level): void {
        // base case
        if (node === null) return;

        // operations
        // level doesn't exist yet
        if (answer.length <= level) answer.push(node.val);

        // level already exists
        else answer[level] = node.val;

        // recursion
        dfs_helper(node.left, level+1);
        dfs_helper(node.right, level+1);
    }
};