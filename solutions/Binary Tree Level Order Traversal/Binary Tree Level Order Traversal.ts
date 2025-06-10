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
    return a double nested array, where each nested array is a tree level
    tree may be empty

STRATEGY:
    BFS traversal
    create a value array for each level, and then push to global answer array

*/

function levelOrder(root: TreeNode | null): number[][] {
    const answerArr: number[][] = [];

    // set up the queue (FIFO)
    let front: number = 0;
    const q: (TreeNode | null)[] = [root];

    // BFS
    while (q.length > front) {
        const levelArr: number[] = []; // stores all values for the tree level

        const size: number = q.length; // store static length before iterating through queue
        
        // iterate through the level
        for (let i=front; i<size; i++) {
            // node is non-null
            if (q[i] !== null) {
                levelArr.push(q[i].val); // add node val to queue

                // add children to the queue
                q.push(q[i].left);
                q.push(q[i].right);
            }
            // else (node == null) do nothing

            front++; // remove this node from front of the queue
        }
        if (levelArr.length > 0) answerArr.push(levelArr);
    }

    return answerArr;
};