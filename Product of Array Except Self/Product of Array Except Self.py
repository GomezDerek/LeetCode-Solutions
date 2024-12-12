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

            elif n is not 0 and nonzero_total is None:
                pass
    
            else:
                print("!")

            total_product *= n

        # print(total_product)
        
        for n in nums:
            # add in zero handler later
            exclusive_product = None
            if n is 0:
                exclusive_product = nonzero_total
            else:
                print(f"{n} {n**-1}")
                exclusive_product = int(total_product * n**-1)
            
            answer.append(exclusive_product)

        return answer