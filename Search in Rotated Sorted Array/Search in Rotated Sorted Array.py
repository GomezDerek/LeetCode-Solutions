class Solution:
    def search(self, nums: List[int], target: int) -> int:
        # find pivot?
        # binary search on either side of pivot?

        pivot = None

        l = 0
        r = len(nums)-1
        while( l < r):
            m = (l+r)//2

            # pivot found!
            if nums[m] < nums[m-1]:
                pivot = m
                break
            elif nums[m] > nums[m+1]:
                pivot = m+1
                break

            # no pivot found

            # is pivot between l and r?
            if nums[l] > nums[r]:
                l = (l+m)//2
                r = (r+m)//2
                continue
            # or did we pass the pivot?
            else:
                print("pivot passed", l, r)
                break
                # return


        print("pivot:", pivot)

        unpivoted = None
        if not pivot:
            unpivoted = nums
        
        # unrotate array
        else:
            unpivoted = nums[pivot:] + nums[:pivot]
        print(unpivoted)

        def calc_ind_w_k(m):
            # if value is after pivot in nums
            if nums[pivot] <= unpivoted[m] <= nums[-1]:
                return m + pivot

            # if value is before pivot in nums
            elif nums[0] <= unpivoted[m] <= nums[pivot-1]:
                return (m + pivot)%len(nums)
                # t p
                # 5 1 3 
                # 1 3 5
                # p   t
 
        # binary search on unpivoted
        l = 0
        r = len(nums) - 1
        while (l <= r):
            m = (l+r)//2
            print(f"m: {m}\n[m]: {unpivoted[m]}")
            
            # target found! We win!
            if unpivoted[m] == target:
                print("target found!")
                return calc_ind_w_k(m) if pivot else m

            elif unpivoted[m] < target:
                l = m+1
                continue

            elif unpivoted[m] > target:
                r = m-1
                continue

        # target DNE
        return -1