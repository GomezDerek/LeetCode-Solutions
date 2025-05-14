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
    A height-balanced binary tree is a binary tree 
    in which the depth of the two subtrees of every node 
    never differs by more than one.

    for each node, 
        diff(lHeight, rHeight) < 2
        else false
*/

function isBalanced(root: TreeNode | null): boolean {
    
    let answer = true;
    calcBalanced(root);
    return answer;

    // definitions
    type NodeHeight = number;
    function calcBalanced(node: TreeNode | null): NodeHeight {
        // base case(s)
        if (node == null) return 0;
        
        // if we've already detected an inbalance, 
        // exit the recursion ASAP
        else if (answer == false) return -1;

        // recurse to children
        const lHeight = calcBalanced(node.left);
        const rHeight = calcBalanced(node.right);

        // operation - check for inbalance
        if ( Math.abs(lHeight - rHeight) > 1 ) {
            answer = false;
            return -1;
        }

        // return this node's height
        return 1 + Math.max(lHeight, rHeight);
    }
};