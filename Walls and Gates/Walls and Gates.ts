/**
 Do not return anything, modify rooms in-place instead.
 */

function wallsAndGates(rooms: number[][]): void {
    const M: number = rooms.length;
    const N: number = rooms[0].length;

    const dq: Deque<Room> = new Deque();

    // add gates to queue
    for (let i=0; i<M; i++) {
        for (let j=0; j<N; j++) {
            if (rooms[i][j] == 0) dq.pushBack([i,j,0]);
        }
    }

    // begin BFS
    while (!dq.isEmpty()) {
        const [x,y,dist] = dq.popFront();
        
        // go to next rooms
        for (const [dx,dy] of directions) {
            const [nx,ny] = [x+dx, y+dy];
              
            if (
                // if in bounds
                nx >= 0
                && nx < M
                && ny >= 0
                && ny < N
                && rooms[nx][ny] > 0 // and not a wall or gate 
                && rooms[nx][ny] > dist+1 // and we have a shorter path
            ) {
                dq.pushBack([nx,ny,dist+1]); // add to dq
                rooms[nx][ny] = dist+1; // update distance
            }
        }
        
    }
};

// helpers
type Room = [number, number, number];

const directions: [number, number][] = [
    [1,0],
    [-1,0],
    [0,1],
    [0,-1],
];