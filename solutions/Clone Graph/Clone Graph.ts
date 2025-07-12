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

 /*
    given an adjacency list, create a deep copy of the graph
    return an adjacency list

    NOTE:
        beware! assign clone nodes, not refs
        _Node.neighbors = _Node[]

        we do NOT know exact graph size...

    STRATEGY: O(N)
        create an empty adjacency list of input size
        traverse graph with DFS:
            if clone exists, node alr traversed - return clone
            else clone DNE 👇
                create + add clone of cur node

                for all neighbors:
                    DFS traverse
                    store neighbor clones

                return cur node clone   


        DS:
        cloneHash: {nodeVal:  neighbors[] }
        👆auto sorts in asc order by key 
        O(N) to convert to adjacency list
        assume node values [1, N]
 */


function cloneGraph(node: _Node | null): _Node | null {
    if (node === null) return null; // edge case
	const cloneMap: {[key: number]: _Node } = {};
    dfs(node);
    return cloneMap[node.val];

    function dfs(curNode: _Node): _Node {
        // base case
        if (cloneMap[curNode.val] !== undefined) {
            return cloneMap[curNode.val];
        }
        
        const curClone: _Node = new _Node(curNode.val);
        cloneMap[curClone.val] = curClone;

        // recursion
        curClone.neighbors = curNode.neighbors.map( (adjNode) => {
            return dfs(adjNode);
        });

        // return
        return curClone;
    }
};