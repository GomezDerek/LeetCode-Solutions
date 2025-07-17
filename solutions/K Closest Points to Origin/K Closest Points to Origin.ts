function kClosest(points: number[][], k: number): number[][] {
    const kHeap: MaxPriorityQueue<number[]> = new MaxPriorityQueue<number[]>(calcDist);

    points.forEach( coords => {
        if (kHeap.size() < k) kHeap.enqueue(coords);
        else if ( calcDist(kHeap.front()) > calcDist(coords) ) {
            kHeap.dequeue();
            kHeap.enqueue(coords);
        }
    });

    return kHeap.toArray();
};

function calcDist(coords: number[]) {
    const x: number = coords[0];
    const y: number = coords[1];
    return x**2 + y**2;
}