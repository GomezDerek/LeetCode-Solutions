/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     neighbors: _Node[]
 * 
 *     constructor(val?: number, neighbors?: _Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 * 
 */

// BFS approach
// strategy: 
    // clone nodes before they're added to dq
    // and use the while loop to clone and assign neighbors
function cloneGraph(node: _Node | null): _Node | null {
	if (node === null) return null; // edge case: empty graph
    
    const cloneMap: {[index: number]: _Node} = {
        1: new _Node(node.val)
    };
    
    const dq: Deque<_Node> = new Deque([node]);
    while (!dq.isEmpty()) {
        const og: _Node = dq.popFront();
        const clone: _Node = cloneMap[og.val];

        for (const neighbor of og.neighbors) {
            // if neighbor already cloned
            if (cloneMap[neighbor.val] !== undefined) {
                clone.neighbors.push(cloneMap[neighbor.val]);
            }
            // else neighbor not yet cloned
            else {
                // create neighbor clone and add to map
                cloneMap[neighbor.val] = new _Node(neighbor.val);
                
                // add to clone's neighbors
                clone.neighbors.push(cloneMap[neighbor.val]);

                // add neighbor to dq
                dq.pushBack(neighbor);
            }
        } 
    }
    
    return cloneMap[1]; // return origin node's clone
};