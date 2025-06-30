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
GOAL: convert a binary tree to/from a string


STRATEGY:
    mimic Leetcode's serialization technique
        BFS serialization by level
        index 0 is root
        [1,2] is 2nd level
        [3,6] is 3rd level
        [7,15] is 4th
        ...

    
    # of nodes in level = 2^(lvl-1)
    node's level pos = index - # of nodes in prev level
    parent index = first index in prev level + (node level pos) // 2


        1
    2       3
          4   5

    [1,2,3,n,n,4,5]
     0 1 2 3 4 5 6
 */

/*
 * Encodes a tree to a single string.
 */
function serialize(root: TreeNode | null): string {
    let output: string = "";

    // BFS serialization
    let front: number = 0;
    const q: (TreeNode | null)[] = [root];

    while (front < q.length) {
        const popNode: TreeNode | null = q[front];
        
        // if null
        if (popNode === null) {
            // console.log(null);
            output += "null,";
        }

        // non-null
        else {
            // console.log(popNode.val);
            output += `${popNode.val},`;
            q.push(popNode.left);
            q.push(popNode.right);
        }
        front++;
    }

    // console.log(output);
    return output;
};

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
    // console.log(data);
    const nodeVals = data.split(",");

    // edge case - empty tree 
    if (nodeVals[0] === "null") return null;

    const root: TreeNode | null = new TreeNode( parseInt(nodeVals[0]) );
    
    // plain obj to map nodeVals to nodes
    const hashMap:  {[key:number]: TreeNode} = {[root.val]: root};

    // iterate through nodeVals lvl by lvl, from lvl 2
    let lvlStart: number = 1; // track the beginning of each level by index
    for (let lvl=2; lvl<Math.log2(nodeVals.length); lvl++) {
        // console.log(`lvl ${i}`);
        
        let leftChild: boolean = true; // will alternate with each iteration

        // only iterate through the nodes in their lvl
        const numNodes: number = 2**(lvl-1);
        // console.log(`lvl ${lvl} starts at ${lvlStart}`);
        // console.log(`lvl = ${lvl}, numNodes = ${numNodes}`);
        for (let j=lvlStart; j<(lvlStart+numNodes); j++){
            // console.log(lvl, j, nodeVals[j]);
            let nodeVal: number | null;

            if (nodeVals[j] === "") continue;
            else if (nodeVals[j] === "null") nodeVal = null;
            else nodeVal = parseInt( nodeVals[j] )
            // console.log(nodeVal);

            // parent index = first index in prev level + (node level pos) // 2
            const prevLvlStart: number = lvlStart - 2**(lvl-2);
            const nodeLvlPos: number = j - lvlStart;
            // console.log(nodeLvlPos);
            const parentIndex: number = Math.floor( prevLvlStart + (nodeLvlPos/2) );
            const parentVal: number = parseInt(nodeVals[parentIndex]);
            // console.log(`parent of ${nodeVal} is ${parentVal}`);
            // console.log(nodeVals[parentIndex]);

            // connect the nodes
            const node: TreeNode | null= nodeVal === null ? null: new TreeNode(nodeVal);
            const parentNode: TreeNode = hashMap[parentVal];
            // console.log(parentNode.val);

            // is this node left or right child?

            // console.log(`${nodeVal} is ${leftChild ? "left": "right"} child`);
            // if node is left child
            if (leftChild) {
                parentNode.left = node;
                // console.log(parentNode.left?.val);
            }

            // // else node is right child
            else {
                parentNode.right = node;
                // console.log(parentNode.right?.val);
            }

            // add this node to the hashmap
            if (node != null) hashMap[node.val] = node;

            leftChild = !leftChild; // alternate
        }

        lvlStart += numNodes;
    }

    // console.log(serialize(root));
    return root;
};


/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */