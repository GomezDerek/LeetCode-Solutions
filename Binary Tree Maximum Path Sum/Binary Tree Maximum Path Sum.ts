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
    node vals can be negative
    tree is guaranteed non-null
    output max val

    ASSUME non-duplicated values

Goal: 
    find subtree with max value

NEW STRATEGY O(n):
    use recursion to pass children's subtree maxes to parents
    return max(
        root, 
        root + lMax, 
        root + rMax, 
        root + lMax + rMax
    )

OLD STRATEGY O(8^n):
    calc val of every subtree?
    DP? Recursive + memoization
    
    how do we calc an incomplete subtree 
    that doesn't nav to leaves...

    records paths for memo
    at each node, create all possible subtrees
        path + cur,
        path + cur + left,
        path + cur + right,
        path + cur + left + right,
        cur,
        cur + right,
        cur + left,
        cur + left + right,
        O(n^8)


    manual simulation:
    all possible subtrees of ex 1:
        [1], [2], [3]
        [2,1], [1,3]
        [2,1,3]

    all possible subtrees of ex 2:
        [9], [-10], [15], [20], [7]
        [9,-10], [-10,20], [-15,20], [20,7]
        ... so on and so forth
*/

function maxPathSum(root: TreeNode | null): number {
    let globalMax: number = -Infinity;
    findMax(root);
    return globalMax;
    
    // dfs func def
    function findMax(node: TreeNode | null): number {    
        // BASE CASE
        if (node === null) return 0;

        // RECURSION
        const lMax: number = findMax(node.left);
        const rMax: number = findMax(node.right);

        // OPERATIONS

        // NOTE: we cannot return a pathVal to the parent
        //       that spans across both l & r of this subtree

        // for returning to parent
        const singleMax: number = Math.max(
            node.val,
            node.val + lMax,
            node.val + rMax
        );

        // for globalMax
        const subtreeMax: number = Math.max(
            singleMax,
            node.val + lMax + rMax
        );

        globalMax = Math.max(subtreeMax, globalMax);
        // console.log(`max @ ${node.val} is ${curMax}, globalMax is ${globalMax}`);
        
        // RETURN
        return singleMax;
    }
};