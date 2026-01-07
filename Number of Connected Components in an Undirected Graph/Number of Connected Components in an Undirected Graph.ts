/**
GOAL: count disconnected components
STRAT:
    - create the adj list
    - dfs to traverse components
        - as we visit nodes, empty neighbors in adj list to avoid retraversal
    - to visit next component find an untraversed node with neighbors

NOTES:
    - at least 1 node & 1 edge
    - no self-loops
    - cycles are possible
    - 0 indexed

done planning at 5min
 */
function countComponents(n: number, edges: number[][]): number {
    let numComponents: number = 0;
    
    const adjList: number[][] = Array.from({length: n}, ()=> []);
    for (let i=0; i<edges.length; i++) {
        const [a,b] = edges[i];
        adjList[a].push(b);
        adjList[b].push(a);
    }
    // console.log(adjList);

    const visited = new Set<number>();
    for (let i=0; i<n; i++) {
        if (adjList[i].length) {
            dfs(i,-1);
            numComponents++;
        }
    }

    return numComponents;

    // hoisted funcs
    function dfs(node: number, prevNode: number): void {
        // base case(s)
        if (visited.has(node)) {
            return;
        }

        // pre-recurse ops
        visited.add(node);

        // recurse
        for (let i=0; i<adjList[node].length; i++) {
            const neighbor = adjList[node][i];
            if (neighbor === prevNode) continue;
            else {
                dfs(neighbor, node);
            }
        }

        // post-recurse ops
        adjList[node] = [];
    }
};