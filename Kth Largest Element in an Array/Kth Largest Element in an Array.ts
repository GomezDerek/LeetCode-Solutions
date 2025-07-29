/**
    BRUTE FORCE O(n logn): 
        sort array in desc order
        return nums[k]

    OPTIMIZED O(n):
        maintain k sized min heap of top k elements
        return min val
 */
function findKthLargest(nums: number[], k: number): number {
    const minHeap = new MinPriorityQueue<number>();

    for (const num of nums) {
        if (minHeap.size() < k) minHeap.enqueue(num);
        else if (num > minHeap.front()) {
            minHeap.dequeue();
            minHeap.enqueue(num);
        }
    }
    
    return minHeap.front();
};

// runtime: O(n)
// space: O(k)