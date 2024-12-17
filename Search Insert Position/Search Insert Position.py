class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        l = 0
        r = len(nums)-1

        while r - l > 1:
            m = (l+r) // 2
            
            if nums[m] == target:
                return m
                
            elif nums[m] < target:
                l = m

            elif nums[m] > target:
                r = m
        
        if nums[l] is target or nums[l] > target:
            return l
        elif nums[r] < target:
            return r + 1
        else: # nums[l] < target < nums[r] or r is target
            return r