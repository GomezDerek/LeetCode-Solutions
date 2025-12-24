/**
GOAL: calc how long it takes for all oranges to rot
STRAT: 
    multi-insertion BFS to simultaneously rot from multiple origins
    traverse the entire grid to:
        1. add rotten oranges to queue
        2. count non-rotten oranges

    during BFS:
        if orange is rotted, non-rottenCounter -=1

    after, if non-rottenCounter > 0, return -1
    else return numTurns
NOTES:

 */


type Orange = [number, number, number] // [x,y,turn]
const directions = [[1,0],[-1,0],[0,1],[0,-1]];

function orangesRotting(grid: number[][]): number {
    const M = grid.length;
    const N = grid[0].length;
    let turns = 0;
    let numFresh = 0;

    const q = new Deque<Orange>();

    for (let i=0; i<M; i++) {
        for (let j=0; j<N; j++) {
            if (grid[i][j] === 2) {
                q.pushBack([i,j,0]);
            }
            else if (grid[i][j] === 1) {
                numFresh++;
            }
        }
    }

    while (!q.isEmpty()) {
        const [x, y, turn] = q.popFront();
        turns = Math.max(turns, turn);

        for (const [dx, dy] of directions) {
            const [nx, ny] = [x+dx, y+dy];
            if (
                // in bounds
                nx >= 0 &&
                nx < M &&
                ny >= 0 &&
                ny < N &&
                // and fresh orange
                grid[nx][ny] === 1
            ) {
                // rot it >:)
                grid[nx][ny] = 2;
                numFresh--;
                q.pushBack([nx,ny,turn+1]);
            }
        }
    }


    return numFresh > 0 ? -1 : turns;
};