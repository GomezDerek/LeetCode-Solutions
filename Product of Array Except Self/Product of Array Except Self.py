class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        # O(2N) -> O(N)
        # keep track total_product, i, and i-1
        # linear iteration
        # answer = []
        # total_product = product(nums) O(N)
        # for i in range(nums[0:])" O(N)
            # turn division into decimal multiplication
            # fraction -> decimal

        answer = []
        total_product = 1
        nonzero_total = None
        for n in nums:
            if n is 0 and nonzero_total is None:
                nonzero_total = total_product
            
            elif n is 0 and nonzero_total is not None:
                return [0 for _ in range(len(nums))]
            
            elif n is not 0 and nonzero_total is not None:
                nonzero_total = nonzero_total * n

            total_product *= n

        # print(total_product)
        
        for n in nums:
            # add in zero handler later
            if n is 0:
                answer.append(nonzero_total)
            else:
                answer.append(int(total_product * n**-1))
            
        return answer