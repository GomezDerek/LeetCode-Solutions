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

        // reheapify if num alr in heap
        if (numsInK.has(num)) kHeap.fix();

        // if ((num !== 1) && (num !== 2)) {
        //     console.log(num);
        //     console.log('\t',kHeap.toArray(), 'root = ', kHeap.root());
        //     console.log('\t',numsInK,frequency);
        //     console.log('\t',frequency[num], frequency[kHeap.root()]);
        // }
        // ensure not alr in heap, before swapping
        if (
            frequency[num] > frequency[kHeap.root()]
            && !numsInK.has(num)
        ) {
            const extracted: number = kHeap.pop(); 
            numsInK.delete(extracted);
            kHeap.push(num);
            numsInK.add(num);
            console.log(`${extracted} -> ${num}`)
        }
        // if (num !== 1 && num !== 2) console.log(num, numsInK, frequency);
    }
    // console.log(numsInK);
    // console.log(frequency);

    return kHeap.toArray();
};