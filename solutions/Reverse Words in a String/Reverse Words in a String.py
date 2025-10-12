class Solution:
    def reverseWords(self, s: str) -> str:
        sArr = s.split()
        sArr.reverse()
        return ' '.join(sArr)