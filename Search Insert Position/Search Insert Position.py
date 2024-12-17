class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        l = 0
        r = len(nums)-1

        while r - l > 1:
            m = (l+r) // 2
            print(l,r,m)
            
            if nums[m] == target:
                return m
                
            elif nums[m] < target:
                l = m

            elif nums[m] > target:
                r = m

            else:
                print("uh oh")
        
        if nums[l] is target:
            return l
        else:
            return r