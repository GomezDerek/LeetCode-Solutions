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

    for (let i=0; i<nums.length; i++) {
        if (minHeap.size() < k) minHeap.enqueue(nums[i]);
        else if (nums[i] > minHeap.front()) {
            minHeap.dequeue();
            minHeap.enqueue(nums[i]);
        }
    }
    
    return minHeap.front();
};

// runtime: O(n)
// space: O(k)