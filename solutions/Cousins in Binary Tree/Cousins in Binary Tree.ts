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

function isCousins(root: TreeNode | null, x: number, y: number): boolean {
    /*
    NOTES:
        true when 
            same depth
            different parents

        tree is not guaranteed to be balanced

        x and y are guaranteed

    STRATEGY
        create global variables for each cousin?'s depth + parent
        x.parent, x,depth

        DFS to find x and y nodes
            if node.child is x or y, update variables
    */

    type cousinObj = {
        depth: number,
        parent: number
    }

    // global vars
    const xObj: cousinObj = {depth: -1, parent: -1};
    const yObj: cousinObj = {depth: -1, parent: -1};

    // DFS call
    dfs(root, 0);

    // console.log(xObj, yObj);
    return (xObj.depth == yObj.depth) && (xObj.parent != yObj.parent);

    // DFS def
    function dfs(node, depth): number {
        // base case(s)
        if (node == null) return depth;

        // recursive call(s)
        const leftDepth = dfs(node.left, depth+1);
        const rightDepth = dfs(node.right, depth+1);

        // operations
        // are children x or y?
        
        // left node
        if ( node.left && (node.left.val == x) ) {
            xObj.depth = leftDepth;
            xObj.parent = node.val;
        } 
        else if ( node.left && (node.left.val == y) ) {
            yObj.depth = leftDepth;
            yObj.parent = node.val;
        }

        // right node
        if ( node.right && (node.right.val == x) ) {
            xObj.depth = rightDepth;
            xObj.parent = node.val;
        } 
        else if ( node.right && (node.right.val == y) ) {
            yObj.depth = rightDepth;
            yObj.parent = node.val;
        } 

        // return(s)
        return depth;
    }
};