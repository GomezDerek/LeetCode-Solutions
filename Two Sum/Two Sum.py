class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        
        l = {}
        for i in range( len(nums) ):
            if l.get( target-nums[i] ) != None:
                return [ l[target-nums[i] ], i ]
            else:
                l[nums[i]] = i