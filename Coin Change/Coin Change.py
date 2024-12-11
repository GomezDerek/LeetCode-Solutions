class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        # recursion + memoization
        # find answer for every number leading up to amount (1 -> amount)
        
        if amount is 0: return 0

        cache = {0:0}
        for key in coins:
            cache[key] = 1

        # for i in range(1,amount+1):
            # print(i)
            
        def recursion(num):
            # base case(s)

            # return from cache if we've already solved this subproblem
            if cache.get(num): return cache[num] 

            else:
                # recursive call(s)
                options = []
                for coin in coins:
                    if num - coin >= 0:
                        options.append( recursion( num-coin ) )

                # return statement
                options_min = float(inf)
                for o in options:
                    if 0 < o < options_min: 
                        options_min = o
                
                fewest_coins = -1 if options_min is float(inf) else 1 + options_min
                # fewest_coins = 1 + min(options) if options else -1
                cache[num] = fewest_coins
                return fewest_coins

        recursion(amount)
        return cache[amount]