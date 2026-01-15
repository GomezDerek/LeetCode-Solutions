/**
GOAL: find the edge that can be removed to create a valid tree

STRAT:
    - find the shortest loop in the cycle
    - break the cycle, without disconnecting the graph
                 o__________                 
                / \_________\o
    __________o/

    - in the shortest loop, any edge can be disconnected 
      EXCEPT "root" that connects to the rest of the graph
    - to choose edge, 
        from all edges in shortest loop,
            choose the edge closest to end of output

    - to find the shortest loop,
        keep visited set,
        as soon as cycle detected,
            that is our loop (cycle root -> cycle root)
            visited set -> cycle set
            from cycle set -> find last edge in input

    - optimization: index the input edges in a map
        {key: edge.stringify(), value: index}


NOTES:
    nodes are 1-indexed

    If there are multiple answers, 
    return the answer that occurs last in the input.

    valid tree criteria:
        - no cycles
        - connected
        - each vertex only has 2 edges? WRONG
 
    done planning at 14 min
 */

function findRedundantConnection(edges: number[][]): number[] {

    // build adj list && index the edges
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
    // console.log(adjList.forEach((edge, i) => console.log(i, edge)));

    // find cycle set
    const visited = new Set<number>();
    const cycleRoot = findCycleRoot(1,-1);

    const visitedArr: number[] = [...visited];
    const cycleRootIndex: number = visitedArr.indexOf(cycleRoot);
    // console.log('visitedArr: ', visitedArr);
    // console.log('cycleRootIndex: ', cycleRootIndex);
    const cycleNodes: number[] = visitedArr.slice(cycleRootIndex); // slice starting at cycleRootIndex
    // console.log('cycleNodes: ', cycleNodes);
    const nonCycleNodes = new Set<number>(visitedArr.slice(0, cycleRootIndex));
    // console.log('nonCycleNodes: ', nonCycleNodes);

    // find last edge in cycle set
    let lastEdgeIndex = 0;
    cycleNodes.reverse();
    // console.log('reversed cycleNodes: ', cycleNodes);

    for (const node of cycleNodes) {
        for (const neighbor of adjList[node]) {
            if (nonCycleNodes.has(neighbor) || !visited.has(neighbor)) continue;
            lastEdgeIndex = Math.max(lastEdgeIndex, edgeIndex[`${node} ${neighbor}`]);
        }
    }
    
    return edges[lastEdgeIndex];

    // hoisted helpers
    function findCycleRoot(i: number, prev: number): number {
        // base case
        if (visited.has(i)) return i;

        // ops
        visited.add(i);

        // recursion
        for (const neighbor of adjList[i]) {
            if (neighbor === prev) continue;
            const ans = findCycleRoot(neighbor, i);
            if (ans > 0) return ans;
        }

        return 0; // leaf node found
    }
};