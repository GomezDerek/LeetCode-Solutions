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

/**
    STRATEGY:
        travel through the BST, progressing towards both p and q nodes
        once they must diverge OR one of the nodes has been found, 
            we have found our LCA
*/

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    // base case
    console.log(root.val);
    if (root === p) return root;
    else if (root === q) return root;

    // recursion
    else if (p.val > root.val && q.val > root.val) return lowestCommonAncestor(root.right, p, q);
    else if (p.val < root.val && q.val < root.val) return lowestCommonAncestor(root.left, p, q);
    
    // paths diverge
    else return root; 
};