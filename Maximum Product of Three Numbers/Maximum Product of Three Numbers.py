class Solution:
    def maximumProduct(self, nums: List[int]) -> int:
        heapq.heapify(nums)

        smallest = heapq.nsmallest(2, nums)
        largest = heapq.nlargest(3, nums)

        small_sum = smallest[0] * smallest[1]
        large_sum = largest[1] * largest[2]

        if small_sum > large_sum:
            return small_sum * largest[0]
        else:
            return large_sum * largest[0]