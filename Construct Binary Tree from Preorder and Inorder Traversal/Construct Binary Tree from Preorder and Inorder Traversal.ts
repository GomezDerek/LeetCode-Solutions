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
STRATEGY
use preorder to navigate between root nodes of subtrees
use inorder to partition left and right subtrees from root
use recursion to build every subtree
use a map to connect preorder values to inorder indices
 */

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    const map: {[key: number]: number} = {};
    const n = preorder.length -1;

    inorder.forEach( (val,i) => map[val] = i );
    // console.log(map);

    return dfsBuild(
        {l: 0, r: n}, 
        {l: 0, r: n}
    );

    // type def
    interface Bounds {
        l: number,
        r: number
    }

    // func def for recursion
    function dfsBuild(preBounds: Bounds, inBounds: Bounds): TreeNode | null {
        // base case
        // assume preBounds.len == inBounds.len
        if (preBounds.l > preBounds.r) return null;

        // operations
        const rootVal = preorder[preBounds.l]; // root is always first value in preorder
        const rootNode: TreeNode = new TreeNode(rootVal);

        // recursion
        const inRootIndex = map[rootVal];
        const lSubtreeLen = inRootIndex - inBounds.l;
        rootNode.left = dfsBuild(
            {l: preBounds.l + 1, r: preBounds.l + lSubtreeLen}, // shift to left subtree's root
            {l: inBounds.l, r: inRootIndex-1}     // only include left subtree partition in inorder 
        );

        rootNode.right = dfsBuild(
            {l: preBounds.l+1 + lSubtreeLen, r: preBounds.r}, // shift to right subtree's root (skip all nodes in left subtree)
            {l: inRootIndex+1, r: inBounds.r}                 // only include right subtree partition in inorder
        );

        // return 
        return rootNode;
    }

    // return null; 
};