/**
    GOAL: return kth highest val from an array without sorting
    STRATEGY:
        iterate through nums
        and maintain a k-sized heap to track kth element
        top-k means heap head needs to be smallest -> min-heap
        
 */

function findKthLargest(nums: number[], k: number): number {
    const heap: MinHeap<number> = new MinHeap();
    
    for (const num of nums) {
        if (heap.size() < k) heap.insert(num);
        else if (heap.root() < num) {
            heap.extractRoot();
            heap.insert(num);
        }
    }

    return heap.root();
};