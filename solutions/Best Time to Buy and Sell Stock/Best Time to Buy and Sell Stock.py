class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        
        # 3 min to read
        # 5 min to plan
        # 12 min coding O(n^2) solution
        # 22 min coding O(n) solution

        # 1) find max(prices[1:])
        # 2) find min(prices[0:max])

        # edge cases 👇
        # empty array
        if len(prices) < 2: return 0
        # decreasing values
        # all duplicates

        # O(n^2) solution 
        # maxPrice = 0
        # for i in range(len(prices)):
        #     for j in range(i, len(prices)):
        #         diff = prices[j] - prices[i]
        #         # print(str(prices[j])+" - "+str(prices[i])+" = "+str(diff))
        #         if diff > maxPrice:
        #             maxPrice = diff
        # return maxPrice

        # maxRange = [minIndex, maxIndex]
        minPrice = prices[0]
        maxPrice = 0
        maxDiff = 0

        for p in prices[1:]:
            if p < minPrice:
                minPrice = p
                maxPrice = p
            elif p >= maxPrice:
                maxPrice = p
                if maxDiff < maxPrice - minPrice: maxDiff = maxPrice - minPrice
                # print(str(maxPrice), " - ", str(minPrice))
        return maxDiff