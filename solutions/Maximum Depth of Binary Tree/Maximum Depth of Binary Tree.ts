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
        Depth for empty tree: 0
        Depth of root node: 1
 */

function maxDepth(root: TreeNode | null): number {
    return findMaxDepth(root, 0);

    function findMaxDepth(node, curDepth) : number {
        // base case - null node
        if (node == null) return 0;

        // else non-null node 👇
        // recursive call(s)
        const leftDepth: number = findMaxDepth(node.left, curDepth);
        const rightDepth: number = findMaxDepth(node.right, curDepth);

        // return statement - depth of current node
        return 1 + Math.max(leftDepth, rightDepth);
    }
};