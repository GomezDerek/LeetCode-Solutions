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
    // console.log(output);
    return output;
};

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
    const vals: string[] = data.split(',');
    // console.log(vals);
    if (vals[0] === 'null') return null; // edge case: empty tree

    const rootNode: TreeNode = new TreeNode(parseInt(vals[0]));
    // {lvl: [node1, node2, ...]}
    // note: hashMap ONLY stores non-null nodes
    const hashMap: { [key: number]: TreeNode[] } = {1: [rootNode]};
    // console.log(hashMap);
    
    let curLvl: number = 2;
    let i: number = 1;
    // use vals.length-1 because the last value in vals is ""
    while(i < vals.length-1) {
        // console.log(`lvl ${curLvl} starts at index ${i}, val ${vals[i]}`);
        hashMap[curLvl] = [];

        const prevLvlNodes = hashMap[curLvl-1];
        // console.log(`lvl ${curLvl-1} nodes: `, prevLvlNodes);
        const prevLvlSize: number = prevLvlNodes.length;
        const curLvlSize: number = 2 * prevLvlSize; // remember prevLvlSize only counts non-nulls

        // only iterate through the length of the current lvl
        for (let j=i; j<i+curLvlSize; j++) {
            // console.log(vals[j]);
            const childNode = vals[j] === 'null' 
                ? null 
                : new TreeNode(parseInt(vals[j]));
            
            if (childNode != null) hashMap[curLvl].push(childNode);
            
            const parentNode = prevLvlNodes[ Math.floor((j-i)/2) ];
            // console.log('parentNode', parentNode);
            parentNode[ (j-i)%2 === 0 ? "left" : "right" ] = childNode; 
            // console.log(`${vals[j]} is ${(j-i)%2 === 0 ? "left" : "right"} child of ${parentNode.val}\n`)
        }
        i += curLvlSize;
        curLvl++;
    }

    return rootNode;
};


/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */