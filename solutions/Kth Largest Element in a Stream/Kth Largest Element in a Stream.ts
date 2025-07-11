// import {
//   PriorityQueue,
//   MinPriorityQueue,
//   MaxPriorityQueue,
//   ICompare,
//   IGetCompareValue,
// } from '@datastructures-js/priority-queue';


class KthLargest {
    k: number;
    kHeap: MinPriorityQueue<number>;
    
    constructor(k: number, nums: number[]) {
        this.k = k; 
        this.kHeap = MinPriorityQueue.fromArray<number>(nums);
        
        // pop until heap is k-sized
        while (this.kHeap.size() > k) this.kHeap.pop();
    }

    add(val: number): number {
        // just add to heap if it's not k-sized yet
        if (this.k > this.kHeap.size()) this.kHeap.enqueue(val);
        
        // replace kth largest
        else if ( val > this.kHeap.front() ) {
            this.kHeap.pop();
            this.kHeap.enqueue(val);
        }

        // else (val < this.kHeap.front()) continue

        return this.kHeap.front();
    }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */