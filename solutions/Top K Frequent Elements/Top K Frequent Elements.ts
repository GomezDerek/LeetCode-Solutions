/**
STRATEGY:
    heap + hashtable
    hashtable to record element frequency
    k-sized heap to maintain top k frequent
 */

function topKFrequent(nums: number[], k: number): number[] {
    const frequency: {[index: number]: number} = {}
    const kHeap: MinHeap<number> = new MinHeap<number>( (a) => frequency[a] );

    for (const num of nums) {
        // update frequency
        if (frequency[num] === undefined) frequency[num] = 1;
        else frequency[num]++;

        // maintain k-sized heap
        if (kHeap.size() < k && frequency[num] === 1) kHeap.push(num);
        else if (frequency[num] > frequency[kHeap.root()]) {
            kHeap.pop();
            kHeap.push(num);
        }
    }
    
    return kHeap.toArray();
};