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

function invertTree(root: TreeNode | null): TreeNode | null {
    // base case(s)
    if (root == null) return root;

    // recursive call(s)
    const leftNode = invertTree(root.left);
    const rightNode = invertTree(root.right);

    // operations
    root.left = rightNode;
    root.right = leftNode;

    // return statement
    return root;
};