/**
GOAL: validate tree, ensure graph has no cycles, and tree is connected
STRAT:
    - create the adj list 
    - run a dfs cycle detection for all nodes

    - optimization: once a node has been verified, clear children/neighbors 

 */
function validTree(n: number, edges: number[][]): boolean {
    const adjList: number[][] = Array.from( {length: n}, () => [] );

    for (const [n1, n2] of edges) {
        adjList[n1].push(n2);
        adjList[n2].push(n1);
    }
    // console.log(adjList);

    const visited = new Set<number>();

    // for (let i=0; i<n; i++) {
    //     if (hasCycle(i)) return false; // cycle detected, not a valid tree
    // }

    if (hasCycle(0, -1)) return false; // not a valid tree if graph has cycle

    // check if graph is connected
    if (adjList.some(neighborArray => neighborArray.length)) return false; // not a valid tree if unconnceted nodes found 

    return true; // no cycles, valid tree

    function hasCycle(curNode: number, prevNode: number): boolean {
        // base case(s)
        if (visited.has(curNode)) return true;

        // ops
        visited.add(curNode);

        // recursion - to all neighbors for cycle detection
        for (const neighbor of adjList[curNode]) {
            if (neighbor === prevNode) continue;
            if (hasCycle(neighbor, curNode)) return true; // cycle detected in the neighbor
        }

        // post-recursion ops
        adjList[curNode] = [];
        visited.delete(curNode);

        // return
        return false; // no cycle detected
    }
};