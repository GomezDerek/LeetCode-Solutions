function possibleBipartition(n: number, dislikes: number[][]): boolean {
    const graph: number[][] = Array.from({ length: n + 1 }, () => []);
    const color: number[] = Array(n + 1).fill(0); // 0: unvisited, 1: group A, -1: group B

    // Build adjacency list
    for (const [a, b] of dislikes) {
        graph[a].push(b);
        graph[b].push(a);
    }

    // Try to color each component
    for (let i = 1; i <= n; i++) {
        if (color[i] !== 0) continue;

        const queue: number[] = [i];
        color[i] = 1;

        while (queue.length > 0) {
            const current = queue.shift()!;
            for (const neighbor of graph[current]) {
                if (color[neighbor] === 0) {
                    color[neighbor] = -color[current];
                    queue.push(neighbor);
                } else if (color[neighbor] === color[current]) {
                    return false; // Same color on both ends of an edge = not bipartite
                }
            }
        }
    }

    return true;
}