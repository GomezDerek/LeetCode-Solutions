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

 /**
 GOAL: return a deep copy of a connected, undirected graph
 STRAT:
    - track visited with a set
    - dfs approach for mem efficiency
    1. create new graph of same size, empty
    2. dfs, starting with root
        a. check if visited
        b. mark as visited by initialing clone at cloneGraph[i]
        c. recurse to neighbors
 NOTES:
    - adj list format
    - 1-indexed

done planning at 9m
*/


function cloneGraph(node: _Node | null): _Node | null {
    const clones: {[index: number]: _Node} = {};
    dfs(node);
    return clones[1];

    ///////////////
    // func defs //
    ///////////////
    function dfs(curNode: _Node): _Node | null {
        // base case
        if (curNode === null) return null;
        else if (clones[curNode.val]) return clones[curNode.val]; // return clone if already visited

        // ops
        // clone
        const curClone: _Node = new _Node(curNode.val);
        clones[curNode.val] = curClone;

        // recurse to neighbors
        const neighborClones: _Node[] = curNode.neighbors.map( ogNeighbor => dfs(ogNeighbor))

        // assign curClone's neighbors
        for (const neighborClone of neighborClones) {
            if (neighborClone !== null) curClone.neighbors.push(neighborClone);
        }

        return curClone;
    }
};