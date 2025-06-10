class Solution:
    def findTargetSumWays(self, nums: List[int], target: int) -> int:
        # neetcode solution 

        cache = {}

        def recursion(i, prog_sum):
            # base case(s)
            if i == len(nums):
                return 1 if prog_sum == target else 0

            if (i, prog_sum) in cache:
                return cache[(i, prog_sum)]

            # recursive call(s)
            cache[(i, prog_sum)] = recursion(i+1, prog_sum + nums[i]) + recursion(i+1, prog_sum - nums[i])

            # return
            return cache[(i, prog_sum)]

        return recursion(0,0)