function maxAreaOfIsland(grid: number[][]): number {
    const [M,N]: [number, number] = [grid.length, grid[0].length]
    let maxArea: number = 0
    
    for (let i=0; i<M; i++) {
        for (let j=0; j<N; j++) {
            if (grid[i][j] === 1) {
                maxArea = Math.max(maxArea, dfs(i,j,0))

            }
        }
    }

    return maxArea

    ///////////////
    // func defs //
    ///////////////
    function dfs(x: number, y: number, curArea: number): number {
        // base cases
        if (
            x < 0
            || y < 0 
            || x >= M
            || y >= N
            || grid[x][y] === 0
        ) return 0;

        // ops
        grid[x][y] = 0
        let thisArea: number = 1;

        // recursion
        thisArea += dfs(x+1,y,curArea+1)
        thisArea += dfs(x-1,y,curArea+1)
        thisArea += dfs(x,y+1,curArea+1)
        thisArea += dfs(x,y-1,curArea+1)

        return thisArea;
    }
};