/**
    STRATEGY:
        recursive dfs
        no visited set needed because directed and acyclic
    
    ASSUME: graph is connected (no unconnected nodes)

    NOTE: NOT ALL PATHS LEAD TO TARGET
 */
function allPathsSourceTarget(graph: number[][]): number[][] {
    const paths = [];

    dfs(graph[0], [0]);
    return paths;

    function dfs(node: number[], path: number[]): void {
        // base case
        // non-target end
        if (node.length === 0) return;

        // recurse to children/neighbors
        for (const child of node) {
            // if target found
            if (child === graph.length - 1) {
                paths.push([...path, child])
            }
            // else recurse
            else {
                dfs(graph[child], [...path, child]);
            }
        }
    }
};