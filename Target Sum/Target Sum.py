class Solution:
    def findTargetSumWays(self, nums: List[int], target: int) -> int:
        # solution will be O(2^N)
        # recursively traverse and branch through the index
        # each branches with a negative or positive
        # there's probably an opportunity for optimization with dynamic programming

        # return len(nums)

        ans = 0

        cache = {}

        def r(prog_sum, i):
            # base case
            # print(i)
            if i == len(nums)-1:
                nonlocal ans
                if prog_sum + nums[i] == target: ans += 1
                if prog_sum - nums[i] == target: ans += 1
                return

            # print(i, nums[i])

            # recursive call(s)
            for num in [nums[i], -nums[i]]:
                # print(cache)
                # i_cache = cache[(prog_sum, num)]
                if (prog_sum, num) in cache:
                    # r(i_cache, i+1)
                    r(cache[(prog_sum, num)], i+1)

                else:
                    cache[(prog_sum, num)] = prog_sum + num
                    r(cache[(prog_sum, num)], i+1)
            # r(prog_sum + nums[i], i+1)
            # r(prog_sum - nums[i], i+1) 

        r(0,0)
        return ans


        #                                                   0
        #                        [-49]                                               [+49]
        #        [-49 +19]                [-49 -19]                   [+49 +19]                  [+49 -19]
        # [-49 +19 +9] [-49 +19 -9] [-49 -19 +9] [-49 -19 -9] [+49 +19 +9] [+49 +19 -9] [+49 - 19 +9] [+49 - 19 -9]