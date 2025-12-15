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
GOAL: in a BST, find the closest parent/ancestor of 2 nodes

STRATEGY:
    for each target node,
        - create an ancestry list, from root to parent
    
    simultaneously iterate through both ancestry lists,
    until ancestors diverge

NOTES:
    - nodes can be their own parents
    
  */

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    const path1: TreeNode[] = [];
    const path2: TreeNode[] = [];

    createPath(root, path1, p);
    createPath(root, path2, q);

    let lca: TreeNode = root;
    let i: number = 0;
    while(i < Math.min(path1.length, path2.length) && path1[i].val === path2[i].val) {
        lca = path1[i];
        i++;
    }
    return lca;

    // func def
    function createPath(curNode: TreeNode | null, path: TreeNode[], targetNode: TreeNode): void {
        // base case
        if (curNode === null) return;
        else if (curNode.val === targetNode.val) {
            path.push(curNode);
            return;
        }

        // ops
        path.push(curNode);

        // recursion
        if (curNode.val < targetNode.val) createPath(curNode.right, path, targetNode);
        else if (curNode.val > targetNode.val) createPath(curNode.left, path, targetNode);
    }
};