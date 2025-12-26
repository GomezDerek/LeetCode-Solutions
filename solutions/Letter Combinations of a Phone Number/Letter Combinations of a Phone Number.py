class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        digitToLetter = {
            "2": "abc",
            "3": "def",
            "4": "ghi",
            "5": "jkl",
            "6": "mno",
            "7": "pqrs",
            "8": "tuv",
            "9": "wxyz",
        }

        def findCombos(i: int) -> None:
            if i >= len(digits):
                allCombos.append("".join(curCombo))
                return
            # else continue

            for ch in digitToLetter[digits[i]]:
                curCombo.append(ch)
                findCombos(i+1)
                curCombo.pop()


        allCombos = []
        curCombo = []
        findCombos(0)
        return allCombos