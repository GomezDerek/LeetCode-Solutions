/**
GOAL:
    count islands, defined as groups of 1's

STRATEGY:
    visited set needed
    2 traversals needed:
        - traversal to find land
        - traversal to visit all island points

    save mem, by modifying the input grid in-place to double as visited set?
    e.g. after land is visited, flip 1 -> 0

    iterate through grid with double for loop:
        if land found,
            islands++ 
            dfs traversal:
                flip 1 -> 0
                recurse in 4 directions

NOTES:
    up to 900 grid points
    grid is of strings

done planning at 8:30
 */

function numIslands(grid: string[][]): number {
    let numIslands: number = 0;

    for (let i=0; i<grid.length; i++) {
        for (let j=0; j<grid[0].length; j++) {
            if (grid[i][j] === "1") {
                numIslands++;
                dfs(i,j);
            }
        }
    }

    return numIslands;

    /////////////////////
    // func defs below //
    /////////////////////
    function dfs(x: number, y: number): void {
        // base case(s)
        if (
            x < 0
            || y < 0
            || x >= grid.length
            || y >= grid[0].length
        ) return;
        else if (grid[x][y] === "0") return;

        // op
        grid[x][y] = "0";

        // recurse
        dfs(x+1,y);
        dfs(x-1,y);
        dfs(x,y+1);
        dfs(x,y-1);
    }
};