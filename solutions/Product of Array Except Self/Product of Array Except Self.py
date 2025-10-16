# just watched NC's explanation for O(1) space solution
# STRATEGY:
#   because output doesn't contribute to extra memory
#   use output array for prefix
#   use a single var for suffix calcs 

class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        N = len(nums)

        result = [1] * N

        # calc prefixes 1st
        for i in range(1, N):
            result[i] = nums[i-1] * result[i-1]

        # then calc suffixes
        suffix = 1
        for i in range(N-1, -1, -1):
            result[i] *= suffix
            suffix *= nums[i]

        return result
            