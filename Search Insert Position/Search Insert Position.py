class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        # Optimized Greg Hogg solution
        l = 0
        r = len(nums)-1

        while l <= r:
            m = (l+r) // 2

            if nums[m] < target:
                l = m + 1

            elif nums[m] > target:
                r = m - 1

            else:
                return m

        return l