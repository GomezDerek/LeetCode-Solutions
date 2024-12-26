class Solution:
    def maximumProduct(self, nums: List[int]) -> int:
        # edge case, 0 is included in highest 3
        # edge case, multiplying negative numbers gets us higher product
        
        heapq.heapify(nums)
        
        largest = heapq.nlargest(3, nums)
        
        ans = 1
        for num in largest:
            ans *= num

        return ans
