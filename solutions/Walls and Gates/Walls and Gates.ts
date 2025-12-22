/**
 Do not return anything, modify rooms in-place instead.
 */

 /**
 GOAL: fill each empty room with distance to nearest gate
 STRAT: 
    BFS approach bc short paths
    start BFS from empty rooms or gates...?
    answer: gates
    multi-insertion BFS like rotten oranges

    1. traverse grid and add all gates to queue (FIFO)
    2. execute BFS while queue is full
        a. coord, dist = frontPop()
        b. if dist is shorter than cur && > 1
            - update dist
            - q.pushBack()
            else skip bc gate, wall, or closer to diff gate


 NOTES: 
    assume we may only travel up, down, left, right and not diagonally
  */

// helpers
class Room {
    x: number;
    y: number;
    dist: number;
    constructor(x: number, y: number, dist: number) {
        this.x = x;
        this.y = y;
        this.dist = dist;
    }
}

const directions: [number, number][] = [
    [1,0],
    [-1,0],
    [0,1],
    [0,-1],
];

// implementation
function wallsAndGates(rooms: number[][]): void {
    const INF: number = 2147483647;
    const M: number = rooms.length;
    const N: number = rooms[0].length;

    const dq: Deque<Room> = new Deque();

    // add gates to queue
    for (let i=0; i<M; i++) {
        for (let j=0; j<N; j++) {
            if (rooms[i][j] == 0) dq.pushBack(new Room(i,j,0));
        }
    }

    // begin BFS
    while (!dq.isEmpty()) {
        const {x,y,dist} = dq.popFront();
        
        // go to next rooms
        for (const [dx,dy] of directions) {
            const [nx,ny] = [x+dx, y+dy];
            // const nDist = rooms[nx][ny]; // threw errors bc indices weren't verified to be in bounds
              
            if (
                // if in bounds
                nx >= 0
                && nx < M
                && ny >= 0
                && ny < N
                && rooms[nx][ny] > 0 // and not a wall or gate 
                && rooms[nx][ny] > dist+1 // and we have a shorter path
            ) {
                dq.pushBack(new Room(nx,ny,dist+1)); // add to dq
                rooms[nx][ny] = dist+1; // update distance
            }
        }
        
    }
};
