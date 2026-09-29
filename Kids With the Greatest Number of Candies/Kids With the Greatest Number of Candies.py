# Strategy:
# one pass to find max index
# another pass to build answer

class Solution:
    def kidsWithCandies(self, candies: list[int], extraCandies: int) -> list[bool]:
        max_candies = max(candies)
        return [num + extraCandies >= max_candies for num in candies]