/*
    GOAL: find how many min until all oranges are rotten

    NOTES:
        we're guaranteed a grid
        return -1 if impossible (not all oranges will rot)
        rotting happens in 4 directions
        ASSUME multiple rotten oranges is possible

    STRATEGY:
        use a timer to track minutes til full rot
        counter for total oranges <- traverse to count O(mxn)
        counter for total rotted

        simulate rot spread
        multi-insertion BFS
            pass (vertexes (oranges), rotTime)
            update timer with rotTime


        return total oranges === total rotted ? timer : -1;

*/
function orangesRotting(grid: number[][]): number {
    let maxRotTime: number = 0;
    let totalRotted: number = 0;
    let totalOranges: number = 0;

    const rottenStarts: [number, number][] = [];

    const rowCount: number = grid.length;
    const colCount: number = grid[0].length;
    
    // traverse to count oranges
    for (let r=0; r<rowCount; r++) {
        for (let c=0; c<colCount; c++) {
            const val: number = grid[r][c];
            if (val === 1) totalOranges++;
            else if (val === 2) {
                totalOranges++;
                // totalRotted++;
                rottenStarts.push([r,c]);
            }
        }
    }

    // console.log(rottenStarts);

    // BFS traversal
    const dq: Deque<[number, number, number]> = new Deque<[number, number, number]>();
    rottenStarts.forEach( coord => dq.pushBack([...coord, 0]));
    // console.log(dq);

    while (dq.size() > 0) {
        const [row, col, rotTime] = dq.popFront();
        maxRotTime = Math.max(rotTime, maxRotTime);
        // console.log(`[${row},${col}], val = ${grid[row][col]}, rotTime=${rotTime}`);
        grid[row][col] = 2; // mark orange as rotted
        totalRotted++;
        // console.log(row, col, rotTime);

        // spread the rot if coord valid && fresh orange exists
        const dirs: [number, number][] = [
            [row, col-1],// up
            [row, col+1],// down
            [row-1, col],//left
            [row+1, col],//right
        ];
        
        dirs.forEach(dir => {
            // check if fresh and in bounds, // add to dq
            if ( 
                dir[0] >=0 && dir[0] < rowCount // row valid
                && dir[1] >= 0 && dir[1] < colCount // col valid
                && grid[dir[0]][dir[1]] === 1 // fresh
            ) {
                grid[dir[0]][dir[1]] = 2;// mark as rotten
                dq.pushBack([dir[0], dir[1], rotTime+1]);
            }
        })
    }

    // console.log(grid);
    // console.log(totalRotted, totalOranges);

    return totalRotted === totalOranges ? maxRotTime : -1;
};