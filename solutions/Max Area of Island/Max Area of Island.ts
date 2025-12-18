/**
GOAL: find the size of the largest island

STRATEGY:
    traverse the grid,
        if land is found,
            explore the whole island
            area++
        update global maxArea

    return maxArea
 */

function maxAreaOfIsland(grid: number[][]): number {
    const [M,N]: [number, number] = [grid.length, grid[0].length]
    let maxArea: number = 0
    let curArea: number = 0
    
    for (let i=0; i<M; i++) {
        for (let j=0; j<N; j++) {
            if (grid[i][j] === 1) {
                dfs(i,j)
                maxArea = Math.max(maxArea, curArea)
                curArea = 0
            }
        }
    }

    return maxArea

    ///////////////
    // func defs //
    ///////////////
    function dfs(x: number, y: number): void {
        // base cases
        if (
            x < 0
            || y < 0 
            || x >= M
            || y >= N
            || grid[x][y] === 0
        ) return

        // ops
        grid[x][y] = 0
        curArea++

        // recursion
        dfs(x+1,y)
        dfs(x-1,y)
        dfs(x,y+1)
        dfs(x,y-1)
    }
};