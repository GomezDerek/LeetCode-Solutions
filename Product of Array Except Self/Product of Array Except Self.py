class Solution:
    def productExceptSelf(self, nums: list[int]) -> list[int]:
        N = len(nums)
        pre = [1] * N
        post = [1] * N

        for i in range(1, N):
            pre[i] = pre[i-1] * nums[i-1]

        for i in range(N-2, -1, -1):
            post[i] = post[i+1] * nums[i+1]        

        return [ pre[i] * post[i] for i in range(N) ]