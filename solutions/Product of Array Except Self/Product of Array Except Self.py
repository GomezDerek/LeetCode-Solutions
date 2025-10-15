class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        N = len(nums)
        prefix = [1]
        for i in range(1, N):
            prefix.append( prefix[i-1] * nums[i-1] )

        suffix = [None] * N
        suffix[-1] = 1
        for i in range(N-2, -1, -1):
            suffix[i] = suffix[i+1] * nums[i+1]

        ans = [None] * N
        for i in range(N):
            ans[i] = prefix[i] * suffix[i]

        return ans