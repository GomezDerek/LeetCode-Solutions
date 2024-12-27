class Solution:
    def capitalizeTitle(self, title: str) -> str:
        words = title.split(" ")

        ans = []

        for i, word in enumerate(words):
            if len(word) <= 2:
                ans.append( word.lower() )
            else:
                ans.append( word[0].upper() + word[1:].lower() )

        return " ".join(ans)