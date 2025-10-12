class Solution:
    def reverseVowels(self, s: str) -> str:
        vowels = {'a','e','i','o','u','A','E','I','O','U'} # set
        
        sArr = [ch for ch in s]
        l, r = [0, len(s)-1]

        while (l < r):
            # point both pointers to vowels
            while ( l < r and sArr[l] not in vowels):
                l+=1

            while ( l < r and sArr[r] not in vowels ):
                r-=1

            # swap chars
            temp = sArr[l]
            sArr[l] = sArr[r]
            sArr[r] = temp

            # move pointers after swap
            l+=1
            r-=1

        return "".join(sArr)
