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
    is every node value unique? Assume yes

STATEGY:
    we need a sorted list to retreive kth smallest value

    Brute force O(n log n)
        1. store every node value in an array O(n)
        2. sort the array O(n logn)
        3. return sortedArray[k-1]

    optimize with heap O(log n)
        log n insertion
        log n retrieval
*/

function kthSmallest(root: TreeNode | null, k: number): number {
    // 1. store every node value in an array O(n)
    const arr: number[] = [];
    dfs(root);

    // DFS traversal func def
    function dfs(node: TreeNode | null): void {
        // base case
        if (node === null) return;

        // operations
        arr.push(node.val);

        // recursive calls
        dfs(node.left);
        dfs(node.right);
    }

    // 2. sort the array O(n logn)
    arr.sort( (a,b) => {return a-b});
    // console.log(arr);

    // 3. return sortedArray[k-1]
    return arr[k-1];
};