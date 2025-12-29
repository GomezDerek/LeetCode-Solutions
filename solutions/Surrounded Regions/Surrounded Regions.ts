/**
 Do not return anything, modify board in-place instead.
 */

 /**
    GOAL: capture all surrounded regions, don't touch unsurrounded regions

    STRAT:
        - create a set for unsurrounded regions' coordinates
        - use multi-insertion BFS with border regions as origins
        - iterate through the board, 
            - if coordinate is not in the set for unsurrounded,
                replace O with X

    NOTES:
        board size may up to 40,000

    9 min reading + planning
  */
function solve(board: string[][]): void {
    const m = board[0].length;
    const n = board.length;

    // store coordinates as string literals
    const unsurrounded = new Set<string>();

    const q: [number, number][] = [];

    // add all border O's to queue
    for (let col=0; col<m; col++) {
        if (board[0][col] === 'O') q.push([0,col]);     // top border
        if (board[n-1][col] === 'O') q.push([n-1,col]); // bottom border
    }
    for (let row=0; row<n; row++) {
        if (board[row][0] === 'O') q.push([row,0]);      // left border
        if (board[row][m-1] === 'O') q.push([row,m-1]);  // right border
    }

    // execute BFS - add to set when we add to queue
    for (const [x,y] of q) unsurrounded.add(`${x} ${y}`);
    let head = 0;
    while (head < q.length) {
        const [x,y] = q[head++];
        
        // traverse to neighbors
        for (const [nx,ny] of [[x+1,y],[x-1,y],[x,y+1],[x,y-1]]) {
            if (
                // in bounds
                nx >= 0 &&
                nx < n &&
                ny >= 0 &&
                ny < m &&
                // is an unvisited region
                board[nx][ny] === 'O' &&
                !unsurrounded.has(`${nx} ${ny}`)
            ) {
                unsurrounded.add(`${nx} ${ny}`);
                q.push([nx,ny]);
            }
        }
    }

    // now that all unsurrounded regions are in our set,
    // we can now capture all surrounded regions
    for (let row=1; row<n-1; row++) {
        for (let col=1; col<m-1; col++) {
            if (board[row][col] === 'O' && !unsurrounded.has(`${row} ${col}`)) {
                board[row][col] = 'X';
            }
        }
    }
};