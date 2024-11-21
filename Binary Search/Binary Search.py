class Solution:
    def search(self, nums: List[int], target: int) -> int:
        
        ans = -1
        # recursive binary search
        def BSA(l, r):
            m = (l + r) // 2
            print(str(nums[l:r]))
            print(str(m), "->" ,str(nums[m]))

            # base case
            if l >= r:
                pass

            # compare middle to target
            elif nums[m] < target:
                print("<")
                BSA(m+1, r)
            elif nums[m] > target:
                print(">")
                BSA(l, m)
            elif nums[m] == target:
                print("=")
                nonlocal ans
                ans = m
            else:
                print("uh oh")
        
        BSA(0, len(nums))

        # target is never found
        return ans