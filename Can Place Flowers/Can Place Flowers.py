class Solution(object):
    def canPlaceFlowers(self, flowerbed, n):
        """
        :type flowerbed: List[int]
        :type n: int
        :rtype: bool
        """
        count = 0
        for i in range(len(flowerbed)):
            if (flowerbed[i] or 
                (i > 0 and flowerbed[i-1]) or 
                (i < len(flowerbed)-1 and flowerbed[i+1])): 
                continue
            else:
                flowerbed[i] = 1 
                count +=1

            if count >= n: return True

        return count >= n 
        