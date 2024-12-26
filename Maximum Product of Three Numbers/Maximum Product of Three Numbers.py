class Solution:
    def maximumProduct(self, nums: List[int]) -> int:
        heapq.heapify(nums)

        max1 = 1
        for num in heapq.nlargest(3, nums):
            max1 *= num

        max2 = heapq.nlargest(1, nums)[0]
        for num in heapq.nsmallest(2, nums):
            max2 *= num

        return max(max1, max2)