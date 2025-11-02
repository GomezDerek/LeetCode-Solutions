class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        res = 0

        ch_set = set()

        l = 0
        for r, ch in enumerate(s):
            if ch in ch_set:
                while (s[l] != ch):
                    ch_set.remove(s[l])
                    l+=1
                l+=1
            else:
                ch_set.add(ch)
                res = max(res, r-l+1)

        return res