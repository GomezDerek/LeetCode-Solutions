/**
STRATEGY:
    heap + hashtable
    hashtable to record element frequency
    k-sized heap to maintain top k frequent

    REVISION: add set for O(1) heap.has(num)
 */

function topKFrequent(nums: number[], k: number): number[] {
    const frequency: {[index: number]: number} = {}
    const kHeap: MinHeap<number> = new MinHeap<number>( (a) => frequency[a] );
    const numsInK: Set<number> = new Set<number>();

    for (const num of nums) {
        // update frequency
        if (frequency[num] === undefined) frequency[num] = 1;
        else frequency[num]++;

        // maintain k-sized heap
        if (kHeap.size() < k && frequency[num] === 1) { 
            kHeap.push(num);
            numsInK.add(num);
        }
        // ensure not alr in heap, before swapping
        else if (
            frequency[num] > frequency[kHeap.root()]
            && !numsInK.has(num)
        ) {
            numsInK.delete(kHeap.pop());
            kHeap.push(num);
            numsInK.add(num);
        }
    }

    return kHeap.toArray();
};