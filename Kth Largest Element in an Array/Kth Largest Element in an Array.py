class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        heap = [] # min-heap by default

        for num in nums:
            heapq.heappush(heap, num)

        for i in range(len(nums)-k):
            heapq.heappop(heap)

        return heap[0]