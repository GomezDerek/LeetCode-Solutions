/**
GOAL: find grid points that can flow to both the pacific and atlantic ocean

STRAT:
    - use a set for each ocean. Sets include cells that can reach respective ocean
    - for each cell, attempt to reach each ocean
        - while we traverse, track path 
        - when ocean found, add all cells in path to set
    - if a cell is alr in both sets, skip
    - if only in one set, attempt to reach other ocean

    return: intersection of both sets

    use DFS for path finding

NOTES:
    up to 400 total grid size
 */

function pacificAtlantic(heights: number[][]): number[][] {
    const m = heights.length;
    const n = heights[0].length;

    type Cell = string;
    const pacificSet: Set<Cell> = new Set();
    const atlanticSet: Set<Cell> = new Set();
    const curPath: Cell[] = [];


    for (let i=0; i<m; i++) {
        for (let j=0; j<n; j++) {
            if ( !pacificSet.has(`${i} ${j}`) || !atlanticSet.has(`${i} ${j}`) ) { // if the cell isn't in both sets
            // if ( !pacificSet.has([i,j]) || !atlanticSet.has([i,j]) ) { // if the cell isn't in both sets
                dfs(i,j);
            }
        }
    }
    
    // intersection is a ES2024 addition, LC uses ES2022
    // return Array.from( pacificSet.intersection(atlanticSet) );
    // console.log(pacificSet);
    // console.log(atlanticSet);
    // console.log(atlanticSet.has([1,4]));
    // console.log(pacificSet.has([1,4]));

    const res: number[][] = [];
    for (const cell of pacificSet) {
        if (atlanticSet.has(cell)) res.push( cell.split(" ").map(c => parseInt(c))  );
    }
    return res;


    // func def
    // TODO: prune recursion by returning boolean when ocean found
    function dfs(x: number, y: number): void {
        // base case(s)
        // ocean found
        // out of bounds -> Pacific
        if (x < 0 || y < 0) {
            for (const cell of curPath) {
                pacificSet.add(cell);
            }
            return;
        }

        // out of bounds -> Atlantic
        else if (x >= m || y >= n) {
            for (const cell of curPath) {
                atlanticSet.add(cell);
            }
            return;
        }

        // old base cases

        // let oceanFound = false;
        // const curCell: Cell = `${x} ${y}`;

        // if (cellTouchesAtlantic(x, y)) {
        //     oceanFound = true;
        //     atlanticSet.add(curCell);
        //     for (const cell of curPath) {
        //         atlanticSet.add(cell);
        //     }
        // }

        // if (cellTouchesPacific(x, y)) {
        //     oceanFound = true;
        //     pacificSet.add(curCell);
        //     for (const cell of curPath) {
        //         pacificSet.add(cell);
        //     }
        // }

        // if (oceanFound) return;

        // ops
        curPath.push(`${x} ${y}`);


        // recursion
        for (const [nx,ny] of [ [x+1,y], [x-1,y], [x,y+1], [x,y-1] ]) {
            if (curPath.includes(`${nx} ${ny}`)) continue;
            else if (
                // moved bounds to base case
                // // in bounds
                // nx >= 0 &&
                // nx < m &&
                // ny >= 0 &&
                // ny < n &&
                // and height is smaller
                // heights[x][y] >= heights[nx][ny]

                // if out of bounds, recurse
                // else in bounds, 
                    // if height is smaller recurse

                (nx < 0 || nx >= m || ny < 0 || ny >= n) || // out of bounds OR
                heights[x][y] >= heights[nx][ny]            // next height is smaller
            ) {
                dfs(nx,ny);
            }
        }

        curPath.pop();
    }

    // deprecated helpers
    // function cellTouchesAtlantic(x: number, y: number): boolean {
    //     if (x === m-1 || y === n-1) return true;
    //     else return false;
    // }

    // function cellTouchesPacific(x: number, y: number): boolean {
    //     if (x === 0 || y === 0) return true;
    //     else return false;
    // }
};