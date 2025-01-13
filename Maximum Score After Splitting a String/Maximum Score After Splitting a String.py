class Solution:
    def maxScore(self, s: str) -> int:
        # strategy
        # create n # of splits and calc scores linearly O(n^2)

        # edge cases
        # constraints don't warrant any

        maxScore = 0

        for i in range(len(s)-2):
            left = s[:i+1]
            right = s[i+1:]

            score = 0

            for num in left:
                score += 1 if num == "0" else 0
            
            for num in right:
                score += 1 if num == "1" else 0

            maxScore = score if score > maxScore else maxScore
            print(left, right, score)

        return maxScore