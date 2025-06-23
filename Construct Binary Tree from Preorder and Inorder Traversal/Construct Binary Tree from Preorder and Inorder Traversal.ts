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

//  ATTEMPT #4
//  after rewatching the NC's solution
//  preorder = [3,9,20,15,7]
//  inorder =  [9,3,15,20,7]

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    // 1. create a map for preorder val -> inorder index
    const inorderIndex: {[key: number]: number} = {};
    inorder.forEach((val,i) => inorderIndex[val] = i);
    // console.log(inorderIndex);

    // extra credit
    // bounds obj class
    class Bounds {
        left: number;
        right: number;
        
        constructor(left: number, right: number) {
            this.left = left;
            this.right = right;
        }
    }

    // 2. build the tree with DFS
    return build(new Bounds(0, preorder.length-1), new Bounds(0, inorder.length-1));

    // dfs build func
    function build(preBounds: Bounds, inBounds: Bounds): TreeNode | null {
        // base case
        // console.log(preBounds.left, preBounds.right);
        if (preBounds.left > preBounds.right) {
            // console.log("kill");
            return null;
        }

        // operations
        const rootVal: number = preorder[preBounds.left];
        const rootNode: TreeNode = new TreeNode(rootVal);

        const inMid: number = inorderIndex[rootVal];
        const leftTreeSize: number = inMid - inBounds.left;
        // console.log(inMid);

        // recursion
        rootNode.left = build(
            new Bounds(preBounds.left+1, preBounds.left + leftTreeSize), 
            new Bounds(inBounds.left,inMid-1)
        );

        rootNode.right = build(
            new Bounds(preBounds.left+leftTreeSize+1, preBounds.right), 
            new Bounds(inMid+1, inBounds.right)
        );

        // return 
        return rootNode;
    }
};