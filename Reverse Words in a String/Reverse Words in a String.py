class Solution:
    def reverseWords(self, s: str) -> str:
        start = len(s) -1
        end = start

        wordArr = []

        while (start >= 0 and end >= 0):
            while (
                (s[start] == " " 
                or s[start-1] != " ")
                and start > 0
            ): 
                start -=1

            while (
                s[end] == " "
                and end >= start
            ): 
                end -= 1

            if (end < start): break

            wordArr.append(s[start:end+1])
            start -= 1
            end = start

        return " ".join(wordArr)