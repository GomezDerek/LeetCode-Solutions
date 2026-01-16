function findRedundantConnection(edges: number[][]): number[] {

    const edgeIndex: {[key: string]: number} = {};
    const adjList: number[][] = []; // sparse array bc we don't know n

    for (const [i, [a,b]] of edges.entries()) {
        // build adj list
        if (adjList[a] === undefined) adjList[a] = [];
        adjList[a].push(b);
        
        if (adjList[b] === undefined) adjList[b] = [];
        adjList[b].push(a);

        // index the edges
        edgeIndex[`${a} ${b}`] = i;
        edgeIndex[`${b} ${a}`] = i;
    }

    // find cycle set
    const visited = new Set<number>();
    const cyclePath: number[] = findCyclePath(1, []);

    // find last edge in cycle set
    let lastEdgeIndex = 0;
    const cycleNodes = cyclePath.toReversed();

    for (const node of cycleNodes) {
        for (const neighbor of adjList[node]) {
            if (!cycleNodes.includes(neighbor)) continue;
            lastEdgeIndex = Math.max(lastEdgeIndex, edgeIndex[`${node} ${neighbor}`]);
        }
    }
    
    return edges[lastEdgeIndex];

    // hoisted helpers
    function findCyclePath(i: number, path: number[]): number[] {
        // base case
        if (visited.has(i)) {
            // slice out leading nodes before cycle start
            return path.slice(path.indexOf(i)); 
        }

        // ops
        visited.add(i);
        path.push(i);

        // recursion
        for (const neighbor of adjList[i]) {
            if (neighbor === path[path.length-2]) continue; // avoid traversing backwards
            const neighborPath: number[] = findCyclePath(neighbor, path);
            if (neighborPath.length > 0) return neighborPath; // return cyclePath if found
        }

        path.pop();
        return []; // leaf node found
    }
};