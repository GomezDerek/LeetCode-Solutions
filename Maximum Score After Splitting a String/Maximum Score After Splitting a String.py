class Solution:
    def maxScore(self, s: str) -> int:
        # optimization attempt #2
        
        zedCount = []

        for i, num in enumerate(s):
            if i == 0:
                zedCount.append( 1 if num == "0" else 0 )
            else:
                zedCount.append( zedCount[-1]+0 if num == "1" else zedCount[-1]+1 )
        

        oneCount = 0
        maxScore = 0
        for i in range(len(s)-1):
            oneCount += 1 if s[i] == "1" else 0
            leftScore = zedCount[i]
            rightScore = len(s) - zedCount[-1] - oneCount
            
            newScore = leftScore + rightScore
            maxScore = newScore if newScore > maxScore else maxScore

        return maxScore