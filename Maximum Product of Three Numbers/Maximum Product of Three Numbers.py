class Solution:
    def maximumProduct(self, nums: List[int]) -> int:
        heapq.heapify(nums)

        smallest = heapq.nsmallest(2, nums)

        abs_ans = float("-inf")
        if smallest[0] < 0 and smallest[1] < 0:
            abs_ans = heapq.nlargest(1, nums)[0]
            for num in smallest:
                abs_ans *= num

        reg_ans = 1
        for num in heapq.nlargest(3, nums):
            reg_ans *= num
        return max(abs_ans, reg_ans)