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
    tree is NOT balanced

    preorder traversal = top -> bottom, left -> right
        parent, left, right, grandchildren

        ()=> {
            base case
            print
            recurse left
            recurse right
        }

    inorder traversal = bottom -> top, left -> right
        leaf, parent, leaf, parent, leaf

        () => {
            base case
            recurse left
            print
            recurse right
        }

    simulation
    preorder = [3,9,20,15,7], 
    inorder =  [9,3,15,20,7]

    use both to create and confirm left relationship
    create right rel
    repeat

STRATEGY:
    rebuild the tree in reverse preorder. Left then right
    
    iterate through both preorder and inorder arrays
        until the substrings mirror each other. This is a left path
        until the substrings mirror each other. This is a left path
        the next value is a right child of the leaf node
        repeat

    
conceded at: 35 min
 */

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    //1. map node values to their index in inorder
    const iI: {[key: number]: number} = {};
    inorder.forEach( (val,i) => iI[val] = i );
    // console.log(iI);

    //2. recursively build the binary tree
    console.log(iI[preorder[0]], 0, inorder.length-1);
    console.log(inorder[iI[preorder[0]]], inorder[0], inorder[inorder.length-1]);
    return build(iI[preorder[0]], 0, inorder.length-1);
    // return null;

    // recursive build definition
    // args are inorder indices
    function build(m: number, l: number, r: number): TreeNode {
        // console.log('\n', m, l, r);
        // console.log(inorder[m], inorder[l], inorder[r]);

        // base case
        if (l > r) {
            // console.log('base case triggerred');
            return null;
        }

        // operations
        const rootNode = new TreeNode(inorder[m]);

        const lM: number = Math.trunc((l+m-1)/2);
        const rM: number = Math.trunc((m+1+r)/2);

        // recursion
        rootNode.left = build(lM, l, m-1);
        // build(0,0,0) => TreeNode(9)
        // build(0,0,-1) => null
        rootNode.right = build(rM, m+1, r);

        // return
        return rootNode;
    }
}

// 1st attempt 👇
// function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
//     const root: TreeNode = new TreeNode(preorder[0]);
//     let curParent: TreeNode = root;

//     let pI: number = 0;
//     let iI: number = 0;

//     let curNode: TreeNode = curParent;
//     while (pI < preorder.length) {
//         console.log(pI, iI);

//         // create the left path
//         if ( preorder[pI] == inorder[iI] ) {// left path ends
//             console.log('creat left path from ', preorder[iI], 'to ', inorder[iI]);
//             while (iI <= pI) {
//                 curNode.left = new TreeNode(preorder[iI++]);
//                 curNode = curNode.left;
//             }

//             // start the right path
//             console.log('new right path begins at', preorder[pI+1]);
//             curParent.right = new TreeNode(preorder[pI+1]);
//             curParent = curParent.right;
//             curNode = curParent;
//         }

//         pI++;
//     }


//     return root.left;
// };