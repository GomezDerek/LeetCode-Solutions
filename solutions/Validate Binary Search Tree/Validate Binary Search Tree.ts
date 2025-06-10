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
    Goal:
        determine whether a tree is a valid BST
        valid = left subtree is valid && right subtree is valid

    NOTES:
        validate smallest subtrees to validate parent trees
        root is not valid is any of its subtrees are invalid

    STRATEGY:
        DFS traversal
            current subtree is valid if right & left are valid
                left tree is valid if its max value < curr root value
                right tree is valid if its min value > curr root value
            
            return [valid, min, max]
 */

function isValidBST(root: TreeNode | null): boolean {
    
    // returns [subtreeValid, min, max]
    function dfs(node: TreeNode | null): [boolean, number, number] {
        // base case
        if (node === null) {
            return [true, Infinity, -Infinity];
        }

        // recursive calls
        const left = dfs(node.left);
        const right = dfs(node.right);

        // operations

        // if either subtree is invalid
        if (!left[0] || !right[0]) 
        {
            // console.log(node.val, 1);
            return [false, -Infinity, Infinity];
        }

        // check if left subtree is invalid
        // left tree is invalid if its max value > curr root value
        if ( node.val <= left[2] ) 
        {
            // console.log(node.val, 2);
            return [false, -Infinity, Infinity];
        }
        // check if right subtree is invalid
        if ( node.val >= right[1] ) 
        {
            // console.log(node.val, 3);
            return [false, -Infinity, Infinity];
        }

        // all validity checks have been passed
        const min = node.left === null ? node.val : left[1];
        const max = node.right === null ? node.val : right[2];
        return [true, min, max];
    }

    return dfs(root)[0];
};

// runtime: O(n)
// space:   O(height)