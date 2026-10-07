class Solution(object):
    def canPlaceFlowers(self, flowerbed, n):
        """
        :type flowerbed: List[int]
        :type n: int
        :rtype: bool
        """
        count = 0
        last_i = len(flowerbed) -1
        
        # check i = 0
        if (flowerbed[0] == 0 and 
            (len(flowerbed) > 1 and flowerbed[1] == 0)
        ):
            flowerbed[0] == 1
            count +=1

        # check i = len() -1
        if (flowerbed[last_i] == 0 and
            flowerbed[last_i -1] == 0
        ):
            flowerbed[last_i] = 1
            count +=1

        for i in range(1, last_i):
            if (flowerbed[i] or
                flowerbed[i-1] or
                flowerbed[i+1]
            ):
                continue
            else:
                flowerbed[i] = 1
                count +=1

            if count >= n: return True

        return count >= n 
        