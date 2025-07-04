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
    Breadth First Search Traversal Strategy
*/

type QuantumNode = TreeNode | null;

/*
 * Encodes a tree to a single string.
 */
function serialize(root: TreeNode | null): string {
    let output: string = "";
    const q: QuantumNode[] = [root];
    let front: number = 0;

    while(front < q.length) {
        const popped: QuantumNode = q[front];
        front++;
        
        if (popped === null) {
            output += "null,";
        }
        else {
            output += `${popped.val},`;
            q.push(popped.left);
            q.push(popped.right);
        }
    }
    return output;
};

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
    const vals: string[] = data.split(',');
    vals.pop(); // remove "" from split array

    // edge case: empty tree
    if (vals[0] === 'null') return null; 


    // store all the non-null nodes for each level
    // {lvl: [node1, node2, ...]}
    const hashMap: { [key: number]: TreeNode[] } = [];

    // start with the rootNode
    const rootNode: TreeNode = new TreeNode(parseInt(vals[0]));
    hashMap[1] = [rootNode] 
    
    // iterate through the rest of the serialization
    let curLvl: number = 2;
    let i: number = 1; // skip rootNode
    while(i < vals.length) {
        hashMap[curLvl] = []; // initialize new level's node array

        const prevLvlNodes: TreeNode[] = hashMap[curLvl-1];
        const prevLvlSize: number = prevLvlNodes.length;
        const curLvlSize: number = 2 * prevLvlSize; // remember prevLvlSize only counts non-nulls

        // only iterate through the current lvl's vals
        for (let j=i; j<i+curLvlSize; j++) {
            if (vals[j] === 'null') continue; // skip null values
            
            const childNode: TreeNode = new TreeNode( parseInt(vals[j]) );
            hashMap[curLvl].push(childNode); // add this node to the level's node array

            const parentNode: TreeNode = prevLvlNodes[ Math.floor((j-i)/2) ];

            // connect parent and child node
            parentNode[ (j-i)%2 === 0 ? "left" : "right" ] = childNode; 
        }

        // increments for while loop
        i += curLvlSize; // jump to the beginning of the next level
        curLvl++;
    } // end while loop for vals iteration

    return rootNode;
};


/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */