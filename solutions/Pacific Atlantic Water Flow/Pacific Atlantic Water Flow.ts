/**
completely starting over and restrategizing to follow the reverse flow FROM shores up to cells
time: 2 h 11 m 
 */
function pacificAtlantic(heights: number[][]): number[][] {
    const m = heights.length;
    const n = heights[0].length;

    type Cell = string;

    // reverse flow from pacific shores
    const pacificSet: Set<Cell> = new Set();
    // north shore
    for (let col=0; col<n; col++) {
        dfs(0, col, pacificSet);
    }

    // west shore
    for (let row=0; row<m; row++) {
        dfs(row, 0, pacificSet);
    }

    // reverse flow from atlantic shores
    const atlanticSet: Set<Cell> = new Set();
    // south shore
    for (let col=0; col<n; col++) {
        dfs(m-1, col, atlanticSet);
    }

    // east shore
    for (let row=0; row<m; row++) {
        dfs(row, n-1, atlanticSet);
    }

    // return intersect of ocean sets
    const res: number[][] = [];
    for (const cell of pacificSet) {
        if (atlanticSet.has(cell)) {
            res.push(cell.split(" ").map(e => parseInt(e)));
        }
    }
    return res;

    // func def
    function dfs(x: number, y: number, set: Set<Cell>): void {        
        // ops
        set.add(`${x} ${y}`);

        // recursion + base cases
        for (const [nx,ny] of [[x+1,y],[x-1,y],[x,y+1],[x,y-1]]) {
            // only recurse if
            if (
                // not alr visited
                !set.has(`${nx} ${ny}`) &&

                // in bounds
                nx >= 0 && nx < m && ny >= 0 && ny < n &&
                
                // water flows up
                heights[x][y] <= heights[nx][ny]
            ) {
                dfs(nx,ny, set);
            }
        }

        return;
    }
};