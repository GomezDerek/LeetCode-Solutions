class Solution:
    def partition(self, s: str) -> List[List[str]]:
        allPartitions = []
        curPartitions = []

        def dfs(i: int) -> bool:
            # base case
            if i == len(s): 
                allPartitions.append(curPartitions[:])
                return 

            # ops
            palindromes = []
            for j in range(i,len(s)):
                substr = s[i:j+1]
                if (isPalindrome(substr)): palindromes.append(substr)

            # recursion
            for palindrome in palindromes:
                curPartitions.append(palindrome)
                dfs(i+len(palindrome))
                curPartitions.pop()

        dfs(0)
        return allPartitions

# helper function - verify string is palindrome
def isPalindrome(w: str) -> bool:
    i,j = 0, len(w)-1

    # check for invalidity
    while i <= j:
        if w[i] != w[j]: return False
        else:
            i+=1
            j-=1

    # all validity checks passed
    return True