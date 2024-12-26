class Solution:
    def maximumProduct(self, nums: List[int]) -> int:
        ans = 1
        if len(nums) == 3:
            for num in nums:
                    ans *= num
            return ans

        nums.sort()
        abs_ans = float("-inf")
        if nums[0] < 0 and nums[1] < 0:
            abs_ans = nums[0] * nums[1] * nums[-1]

        reg_ans = nums[-3] * nums[-2] * nums[-1]
        return max(abs_ans, reg_ans)