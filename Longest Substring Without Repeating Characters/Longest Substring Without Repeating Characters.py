class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        res = 0

        ch_map = {} # key: ch, val: s index for most recent ch

        l = 0
        for r, ch in enumerate(s):
            if ch in ch_map and ch_map[ch] < r:
                l = ch_map[ch] + 1
                
            else:
                res = max(res, r-l+1)

            ch_map[ch] = r
            
        return res