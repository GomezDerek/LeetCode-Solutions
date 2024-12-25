class Solution:
    def capitalizeTitle(self, title: str) -> str:
        
        ans = ""
        words = [""]

        for ch in title:
            if ch != " ":
                words[-1] += ch
            if ch == " ":
                words.append("")

        for word in words:
            if len(word) <= 2:
                ans += word.lower()
            else:
                ans += word[0].upper()
                ans += word[1:].lower()
            
            ans += " "

        return ans[:len(ans)-1]