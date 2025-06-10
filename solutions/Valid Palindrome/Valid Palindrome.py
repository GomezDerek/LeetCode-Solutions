class Solution:
    def isPalindrome(self, s: str) -> bool:
        validChars = "abcdefghijklmnopqrstuvwxyz0123456789"
        
        # empty string
        if not s: return True
        
        # check for palindrome
        l = 0
        r = len(s)-1

        while(l < r):
            # print(l,s [l])
            # print(r, s[r])
            if s[l].lower() not in validChars:
                l += 1
            elif s[r].lower() not in validChars:
                r -= 1
            elif s[l].lower() != s[r].lower():
                return False
            elif s[l].lower() == s[r].lower():
                # print(s[l].lower(), " == ", s[r].lower())
                l += 1
                r -= 1
            # else:
            #     print("uh oh")

        # palindrome check passes
        return True