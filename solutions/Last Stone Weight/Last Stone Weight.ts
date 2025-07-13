function lastStoneWeight(stones: number[]): number {
    const stoneHeap: MaxPriorityQueue<number> = MaxPriorityQueue.fromArray<number>(stones);

    while (stoneHeap.size() >= 2) {
        const stone1: number = stoneHeap.dequeue();
        const stone2: number = stoneHeap.dequeue();

        // SMASH
        if (stone1 !== stone2) stoneHeap.enqueue( Math.abs(stone1 - stone2) );
        // else both stones are destroyed
    }

    return stoneHeap.front() ?? 0;    
};



// 1st attempt before restarting at min12
/*
    Goal: return the weight of the last stone standing

    STRATEGY:
        while stones > 1
            pop n stone in array is CHAMPION
            smash champion against n-1 stone
            n-1 is replaced by champion weight

*/

// function lastStoneWeight(stones: number[]): number {
//     while (stones.length > 1) {
//         const champion: number = stones.pop();
//         const challenger: number = stones[stones.length-1];

//         // SMASH and declare new champion
//         if (champion === challenger) {
//             stones.pop(); // both stones are destroyed
//         }
//         else { 
//             stones[stones.length-1] = Math.abs(champion-challenger); // new champ's weight = diff
//         }
//     }

//     return stones[0] ?? 0;
// };