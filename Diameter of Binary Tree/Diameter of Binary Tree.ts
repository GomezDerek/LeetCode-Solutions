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
    diameter MAY not pass through the root
    diameter is longest path in tree

    node's diameter = leftDepth + rightDepth

STRATEGY:
    global variable for max diameter.

    use recursive DFS to calc diameter at every node
        node's diameter = leftDepth + rightDepth
        check if node diameter is new max diameter

    
 */

function diameterOfBinaryTree(root: TreeNode | null): number {
    let diameter: number = 0;

    findDiameter(root);
    return diameter;

    // definitions
    type NodeHeight = number;
    function findDiameter(node): NodeHeight  {
        // base case
        if (node == null) return 0;

        // recursion
        const leftHeight = findDiameter(node.left)
        const rightHeight = findDiameter(node.right)

        // operation
        const newDiameter: number = leftHeight + rightHeight;
        diameter = Math.max(diameter, newDiameter);

        // return
        return 1 + Math.max(leftHeight, rightHeight);
    }

    
};