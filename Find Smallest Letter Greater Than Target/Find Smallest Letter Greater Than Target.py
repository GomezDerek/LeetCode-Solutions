class Solution:
    def nextGreatestLetter(self, letters: List[str], target: str) -> str:
        ans = letters[0]

        for ch in letters:
            if ch > target: return ch
    
        return ans