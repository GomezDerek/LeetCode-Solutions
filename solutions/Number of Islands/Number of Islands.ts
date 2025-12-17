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
            
            // base cases
            // out of bounds
            if (cx < 0 || cx >= M || cy < 0 || cy >= N) continue;

            // alr visited
            else if (grid[cx][cy] === '0') continue;

            // else mark as visited and traverse to neighbors
            grid[cx][cy] = '0';
            dq.pushBack([cx+1,cy]);
            dq.pushBack([cx-1,cy]);
            dq.pushBack([cx,cy+1]);
            dq.pushBack([cx,cy-1]);
        }
    }
};