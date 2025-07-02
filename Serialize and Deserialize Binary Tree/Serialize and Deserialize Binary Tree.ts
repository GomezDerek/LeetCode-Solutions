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
    just finished watching NC's explanation video
    
    STRATEGY:
    serialize with preorder traversal, and include nulls

    when deserializing, use leaf node as a base case
 */

/*
 * Encodes a tree to a single string.
 */
function serialize(root: TreeNode | null): string {
    let output: string = "";
    preorder(root);
    // console.log(output);
    return output;

    function preorder(node: TreeNode | null): void {
        // BASE CASE
        if (node === null) {
            output += "null,";
            return;
        }

        // OPERATIONS
        output += `${node.val},`;

        // RECURSION
        preorder(node.left);
        preorder(node.right);
    }
};

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
    const vals: string[] = data.split(','); 
    return rebuild(0)[0];       
    // return new TreeNode(null);

    // returns [nodeI node, last index in subtree]
    function rebuild(nodeI: number): [TreeNode | null, number] {
        // BASE CASE
        if ( vals[nodeI] === "null" ) return [null, nodeI];

        const node: TreeNode = new TreeNode(parseInt(vals[nodeI]));

        // RECURSION + OPERATIONS
        const lSubTree: [TreeNode|null, number] = rebuild(nodeI+1);
        node.left = lSubTree[0];

        const rSubTree: [TreeNode|null, number] = rebuild(lSubTree[1]+1);
        node.right = rSubTree[0];

        // RETURN
        return [node, rSubTree[1]];
    }
};


/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */