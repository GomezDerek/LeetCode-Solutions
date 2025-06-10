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
    goal: identify if the subtree exists within the main tree
    subtrees match if they share the same structure and node values

STRATEGY:
    recursive DFS through the main tree,
        at each step, use nested DFS to compare subtrees at main's current node

    nested DFS will be Same Tree algo

hiccup: didn't consider edge case outlined in ex. 2
*/

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    // base case
    // if (root === null) return true; // doesn't mean subtree DNE
    if (root === null) return false;
    // else (root is non-null) continue

    // recursive calls
    // if we've already found a matching subtree, immediately shoot it up to the top. Don't look for more matches
    const lMatch = isSubtree(root.left, subRoot);
    if (lMatch) {
        // console.log("\t", root.left?.val);
        return true;
    }

    const rMatch = isSubtree(root.right, subRoot);
    if (rMatch) {
        // console.log("\t", root.right?.val);
        return true;
    }

    // check if subtree match exists at current node
    return isSameTree(root, subRoot);
};

// p = 0, q = null
function isSameTree(p: TreeNode | null, q: TreeNode | null ): boolean {
    // base case (null reached)
    if (p == null && q == null) return true; // same - they reached null together
    else if (p == null || q == null) return false; // not same - only one node reached null
    // else (p && q) continue

    // current nodes match?
    if (p.val !== q.val) return false; // not same - current nodes don't match


    // left sides match?
    const lSame = isSameTree(p.left, q.left);
    if (!lSame) return false; // not same - left sides differ

    // right sides match?
    const rSame = isSameTree(p.right, q.right);
    if (!rSame) return false; // not same - right sides differ


    // return
    return true; // all checks passed
}