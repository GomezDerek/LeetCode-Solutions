class Solution:
    def maximumProduct(self, nums: List[int]) -> int:
        heapq.heapify(nums)

        smallest = heapq.nsmallest(2, nums)
        largest = heapq.nlargest(3, nums)

        product_1 = smallest[0] * smallest[1] * largest[0]
        product_2 = largest[1] * largest[2] * largest[0]

        return product_1 if product_1 > product_2 else product_2