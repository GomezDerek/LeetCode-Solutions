class Solution:
    def nextGreatestLetter(self, letters: List[str], target: str) -> str:
        ans = letters[0]

        for i, ch in enumerate(letters):
            if ch == target:
                j = i
                length = len(letters)
                while(letters[j] == target and j < length):
                    j += 1
                    if letters[j] != target:
                        ans = letters[j]
                        break
                break
    
        return ans