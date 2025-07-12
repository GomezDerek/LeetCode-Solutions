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

/* BFS strategy */
function cloneGraph(node: _Node | null): _Node | null {
    if (node === null) return null;

    const deque: Deque<_Node> = new Deque();
    deque.pushBack(node);

    const cloneMap: _Node[] = [];

    while (deque.size() > 0) {
        const curNode: _Node = deque.popFront();

        // create / retrieve node's clone
        if (cloneMap[curNode.val] === undefined) {
            cloneMap[curNode.val] = new _Node(curNode.val);
        }
        const cloneNode: _Node = cloneMap[curNode.val];

        // create/ connect neighbors
        curNode.neighbors.forEach( neighbor => {

            // create / retrieve neighbor clone
            if (cloneMap[neighbor.val] === undefined) {
                cloneMap[neighbor.val] = new _Node(neighbor.val);
                deque.pushBack(neighbor); // add untraversed neighbor
            }   
            
            const neighborNode: _Node = cloneMap[neighbor.val];
            cloneNode.neighbors.push(neighborNode);
        });
    }
    
    return cloneMap[1]; // return clone of input node
};