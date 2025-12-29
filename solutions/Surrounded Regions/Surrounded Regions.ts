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
    const allRegions = new Set<string>();

    const q: [number, number][] = [];

    // process all O's
    for (let row=0; row<n; row++) {
        for (let col=0; col<m; col++) {
            if (board[row][col] === 'X') continue;

            // if O on border, add to unsurrounded
            else if (row === 0 || row === n-1 || col === 0 || col === m-1) {
                unsurrounded.add(`${row} ${col}`);
                q.push([row,col]);
            }
            
            // else add O to allRegions
            else {
                allRegions.add(`${row} ${col}`);
            }
        }
    }

    // execute BFS - add to set when we add to queue
    let head = 0;
    while (head < q.length) {
        const [x,y] = q[head++];
        
        // traverse to neighbors
        for (const [nx,ny] of [[x+1,y],[x-1,y],[x,y+1],[x,y-1]]) {
            if (
                // is an unvisited region
                allRegions.has(`${nx} ${ny}`) &&
                !unsurrounded.has(`${nx} ${ny}`)
            ) {
                unsurrounded.add(`${nx} ${ny}`);
                q.push([nx,ny]);
            }
        }
    }

    // capture all surrounded regions
    for (const region of allRegions) {
        if (!unsurrounded.has(region)) {
            const [x,y] = region.split(" ");
            board[x][y] = 'X';
        }
    }
};