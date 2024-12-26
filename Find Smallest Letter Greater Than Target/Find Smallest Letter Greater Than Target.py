class Solution:
    def nextGreatestLetter(self, letters: List[str], target: str) -> str:
        ans = letters[0]

        for i, ch in enumerate(letters):
            if ch > target:
                return ch
    
        return ans