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

/* DFS strategy */
function cloneGraph(node: _Node | null): _Node | null {
    if (node === null) return null;

    const cloneMap: _Node[] = [];
    dfs(node);
    return cloneMap[1];

    function dfs(curNode: _Node): _Node {
        if ( cloneMap[curNode.val] !== undefined ) return cloneMap[curNode.val];

        const clone: _Node = new _Node(curNode.val);
        cloneMap[clone.val] = clone;

        // recursion
        for (let i=0; i<curNode.neighbors.length; i++) {
            clone.neighbors.push( dfs(curNode.neighbors[i]) );
        }

        return clone;
    }
};