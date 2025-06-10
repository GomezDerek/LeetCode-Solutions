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
    trees are identical if:
        structurally identical, and 
        node values are the same

    so each node's children should be identical

STRATEGY:
    recursive DFS through both trees simultaneously
    at each step,
        verify current nodes are the same value
        verify children nodes' values match
            to verify structures and avoid false positives (see ex. 2)
*/
function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    // base cases (null reached)
    if (!p && !q) return true; // both null (still same)
    else if (!p || !q) return false; // one null (not same)
    
    // continue - both p & q are non-null

    // operations
    // check if node values don't match
    if (p.val != q.val) {
        return false;
    }
    
    // recursive calls
    // check if children don't match
    const lMatch = isSameTree(p.left, q.left);
    if (!lMatch) return false;

    const rMatch = isSameTree(p.right, q.right);
    if (!rMatch) return false;
    
    // return
    return true; // all checks passed
};