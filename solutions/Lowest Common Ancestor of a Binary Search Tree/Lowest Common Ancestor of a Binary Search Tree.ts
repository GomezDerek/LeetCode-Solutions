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

// solution based off of Neetcode's hints

/*
ASSUME: 
    tree is balanced and sorted

NOTES:
    our LCA is the root node of p & q's shared subtree
    subtrees split after the LCA
    p.val <= LCA <= q.val

STRATEGY:
    traverse the tree using the p,q values to pick paths
    when we need to split, return the LCA
*/

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    // edge case: p < q == false
    
    while (root !== null) {
        // p or q is the LCA
        if (root.val == p.val || root.val == q.val) return root;
        
        // traverse left
        else if (root.val > p.val && root.val > q.val) root = root.left;

        // traverse right
        else if (root.val < p.val && root.val < q.val) root = root.right;

        // we found the split node/LCA
        else {
            return root;
        }
    }
};