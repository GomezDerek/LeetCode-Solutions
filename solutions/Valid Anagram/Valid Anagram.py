class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        
        if len(s) != len(t):
            return False

        charHash = {}
        for ch in s:
            # if ch in charHash.keys():
            if charHash.get(ch):
                charHash[ch] += 1
            else:
                charHash[ch] = 1
        
        for ch in t:
            if not charHash.get(ch):
                return False
            else: 
                charHash[ch] -= 1
        return True    