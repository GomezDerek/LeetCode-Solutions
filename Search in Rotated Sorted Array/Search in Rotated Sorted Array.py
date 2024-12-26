class Solution:
    def search(self, nums: List[int], target: int) -> int:
        # Neetcode solution from memory

        l, r = 0, len(nums)-1

        while(l <= r):
            m = (l+r)//2
            
            # target found
            if nums[m] == target:
                return m
            
            # m in left of partition
            elif nums[l] < nums[m]:
                if target < nums[l]:
                    l = m+1
                elif target > nums[m]:
                    l = m+1
                else: # nums[l] < target < nums[m]
                    r = m-1

            # m in right of partition
            else:
                if target > nums[r]:
                    r = m-1
                elif target < nums[m]:
                    r = m-1
                else: # nums[m] < target < nums[r]
                    l = m + 1

        return -1