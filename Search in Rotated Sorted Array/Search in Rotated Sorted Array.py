class Solution:
    def search(self, nums: List[int], target: int) -> int:
        # Neetcode solution

        l, r = 0, len(nums)-1

        while l <= r:
            m = (l+r)//2

            # target found
            if target == nums[m]:
                return m

            # left sorted portion
            if nums[l] <= nums[m]:    # left < mid
                if target > nums[m]:    # target > mid
                    l = m + 1               # search nums[m:r]
                elif target < nums[l]:  # target < left
                    l = m + 1               # search nums[m:r]
                else:                   # left < target < middle
                    r = m - 1               # search nums[l:m]

            # right sorted portion
            else:                       # left >= mid
                if target < nums[m]:        # target < mid
                    r = m -1                    # search nums[l:m]
                elif target > nums[r]:      # target > right
                    r = m - 1                   # search nums[l:m]
                else:                   # middle < target < right
                    l = m + 1               # search nums[m:r]

        return -1