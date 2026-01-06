function validTree(n: number, edges: number[][]): boolean {
    const adjList: number[][] = Array.from( {length: n}, () => [] );

    for (let i=0; i<edges.length; i++) {
        const [a,b] = edges[i];
        adjList[a].push(b);
        adjList[b].push(a);
    }

    const inCycle = new Set<number>();
    const visited = new Set<number>();

    if (hasCycle(0, -1)) return false; // not a valid tree if graph has cycle

    // check if graph is connected
    if (visited.size < n) return false; // not a valid tree if unconnected nodes found

    return true; // no cycles, valid tree

    // hoisted function
    function hasCycle(curNode: number, prevNode: number): boolean {
        // base case(s)
        if (inCycle.has(curNode)) return true;

        // pre-recursion ops
        inCycle.add(curNode);
        visited.add(curNode);

        // recursion - to all neighbors for cycle detection
        for (let i=0; i<adjList[curNode].length; i++) {
            const neighbor = adjList[curNode][i];
            if (neighbor === prevNode) continue;
            if (hasCycle(neighbor, curNode)) return true; // cycle detected in the neighbor
        }

        // post-recursion ops
        inCycle.delete(curNode);

        // return
        return false; // no cycle detected
    }
};