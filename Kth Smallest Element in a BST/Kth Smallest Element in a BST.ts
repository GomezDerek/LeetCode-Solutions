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

    O(n)
    use a hashmap, node.val is the key 
    in JS, if we use ints as keys, sorted
    BSA through the keys

*/

function kthSmallest(root: TreeNode | null, k: number): number {
    // use a hashmap, node.val is the key 
    // in JS, if we use ints as keys, sorted
    const map: {[key: number]: boolean} = {};
    fillMap(root);

    function fillMap(node: TreeNode | null): void {
        // base case
        if (node === null) return;

        // operations
        map[node.val] = true;

        // recursive calls
        fillMap(node.left);
        fillMap(node.right);
    }

    // console.log(map);
    
    const keys: string[] = Object.keys(map);
    // console.log(keys);

    return parseInt(keys[k-1]);
};