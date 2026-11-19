class Solution:
    def findMaxAverage(self, nums: list[int], k: int) -> float:
        windowSum = sum(nums[:k])
        maxAvg = windowSum / k

        start = 1
        while (start + k <= len(nums)):
            windowSum = windowSum - nums[start-1] + nums[start+k-1]
            maxAvg = max(maxAvg, windowSum / k)
            start += 1

        return maxAvg