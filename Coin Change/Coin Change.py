class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        # recursion + memoization
        # find answer for every number leading up to amount (1 -> amount)
        
        cache = {0:-1}
        for key in coins:
            cache[key] = 1

        # for i in range(1,amount+1):
            # print(i)
            
        def recursion(num):
            # base case(s)

            # recursive call(s)
            op

            # return statement
            
        recursion(amount)
        return cache[amount]