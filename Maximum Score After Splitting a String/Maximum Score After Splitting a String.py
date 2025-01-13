class Solution:
    def maxScore(self, s: str) -> int:
        # optimization attempt #2
        
        zedCount = []
        n = len(s)

        for i in range(n):
            if i == 0:
                zedCount.append( 1 if s[i] == "0" else 0 )
            else:
                zedCount.append( zedCount[-1]+0 if s[i] == "1" else zedCount[-1]+1 )
        

        oneCount = 0
        maxScore = 0
        for i in range(n-1):
            oneCount += 1 if s[i] == "1" else 0
            leftScore = zedCount[i]
            rightScore = n - zedCount[-1] - oneCount
            
            newScore = leftScore + rightScore
            maxScore = newScore if newScore > maxScore else maxScore

        return maxScore