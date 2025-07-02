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

    REVISIONS:
        condensed serialize to 2 lines of code, and no helper functions
        typed the QuantumNode
        built a TreeData class to type deserialization helper output
 */

/*
 * Encodes a tree to a single string.
 */
function serialize(root: TreeNode | null): string {
    if (root === null) return "null";
    else return `${root.val},${serialize(root.left)},${serialize(root.right)}`
};

/*
 * type definitions for deserialization:)
 */
type QuantumNode = TreeNode | null;
class TreeData {
    root: QuantumNode;
    last: number;
    constructor(root: QuantumNode, last: number) {
        this.root = root;
        this.last = last;
    }
}

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
    const vals: string[] = data.split(','); 
    return rebuild(0).root;       

    // helper func
    // returns [nodeI node, last index in nodeI subtree]
    function rebuild(nodeI: number): TreeData {
        // BASE CASE
        if ( vals[nodeI] === "null" ) return new TreeData(null, nodeI);

        // OPERATIONS + RECURSION
        const node: TreeNode = new TreeNode(parseInt(vals[nodeI]));

        const lSubTree: TreeData = rebuild(nodeI+1);
        node.left = lSubTree.root;

        const rSubTree: TreeData = rebuild(lSubTree.last + 1);
        node.right = rSubTree.root;

        // RETURN
        return new TreeData(node, rSubTree.last);
    }
};


/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */