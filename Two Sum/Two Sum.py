class Solution:
    def twoSum(self, nums: list[int], target: int) -> list[int]:
        hmap = {}
        for i, num in enumerate(nums):
            if target - num in hmap:
                return [i, hmap[target-num]]
            else:
                hmap[num] = i