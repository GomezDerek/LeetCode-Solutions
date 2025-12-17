// Breadth First Search approach
function numIslands(grid: string[][]): number {
    const [M,N]: [number, number] = [grid.length, grid[0].length];
    let numIslands: number = 0;

    const dq: Deque<[number, number]> = new Deque<[number, number]>();

    for (let i=0; i<M; i++) {
        for (let j=0; j<N; j++) {
            if (grid[i][j] === '1') {
                numIslands++;
                bfs(i,j);
            }
        }
    }

    return numIslands;

    //////////////////
    // BFS func dec //
    //////////////////
    function bfs(x: number, y: number): void {
        dq.pushBack([x,y]);

        while (!dq.isEmpty()) {
            const [cx,cy] = dq.popFront();
            grid[cx][cy] = '0'; // mark as visited

            // traverse to neighbors
            const neighbors: [number, number][] = [];
            neighbors.push([cx+1,cy]);
            neighbors.push([cx-1,cy]);
            neighbors.push([cx,cy+1]);
            neighbors.push([cx,cy-1]);

            for (const [nx,ny] of neighbors) {
                // skip neighbor traversal if invalid coords or alr explored
                if (nx < 0 || nx >= M || ny < 0 || ny >= N || grid[nx][ny] === '0') continue;
                else dq.pushBack([nx,ny]);
            }
        }
    }
};