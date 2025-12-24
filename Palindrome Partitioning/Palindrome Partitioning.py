class Solution:
    def partition(self, s: str) -> List[List[str]]:
        allPartitions = []
        curPartition = []

        def isPalindrome(s: str) -> bool:
            i,j = 0, len(s)-1
            
            # check if invalid
            while i <= j:
                if s[i] != s[j]: 
                    return False
                else:
                    i+=1
                    j-=1

            return True # all checks passed

        def dfs(i: int) -> None:
            if i >= len(s):
                allPartitions.append( curPartition[:] )

            # recurse on all palindromes in s[i:]
            for j in range(i, len(s)):
                substr = s[i:j+1]
                if isPalindrome(substr):
                    curPartition.append(substr)
                    dfs( i + len(substr) )
                    curPartition.pop()

        dfs(0)
        return allPartitions