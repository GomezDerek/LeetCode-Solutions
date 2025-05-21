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
    given 2 nodes, find their LCA in the tree


ASSUME:
    trees are balanced

STRATEGY:
    O(n)
    DFS to find each node
    as we traverse to find p & q,
        record their traversal paths (node values traversed)

    O( log n * log n) -> O( log 2n ) 
    after they've been found,
    find their LCA by iterating thorugh their traversal paths
    LCA is last shared value

EDGE CASES:
    at least 2 nodes
    p != q
    p and q always exist in BST
*/

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    
    const paths: { [key: number]: TreeNode[] } = {
        [p.val]: [],
        [q.val]: []
    }

    findPath(root, p.val, []);
    findPath(root, q.val, []);

    // console.log(paths);
    
    // iterate backwards through p path
    for (let i=paths[p.val].length-1; i >= 0; i--) {
        // iterate backwards through q path
        // console.log(paths[p.val][i]);
        for (let j=paths[q.val].length-1; j >= 0; j--) {
            // console.log(paths[p.val][i], paths[q.val][j]);
            // console.log(typeof paths[p.val][i], typeof paths[q.val][j]);
            if (paths[p.val][i].val === paths[q.val][j].val) return paths[p.val][i];
        }
    }

    console.log("LCA never found!");
    return null;

    // helper functions
    // updates global path variables
    function findPath(node: TreeNode, targetVal: number, path: TreeNode[]): void {
        // base case
        if (node === null) return;

        // add current node to path
        path.push(node);
        
        // target found, update its global path variable
        if (node.val === targetVal) {
            paths[targetVal] = path;
            return;
        }
        
        // recursion
        // continue searching for the target node
        else {
            findPath(node.left, targetVal, [...path]);
            findPath(node.right, targetVal, [...path]);
            return;
        }
    }
};