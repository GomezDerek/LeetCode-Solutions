class Solution:
    def reverseVowels(self, s: str) -> str:
        vowels = {"a", "e", "i", "o", "u", "A", "E", "I", "O", "U"}
        subset = [char for char in s if char in vowels]
        result = ""
        for char in s:
            if char in vowels:
                result += subset.pop()
            else:
                result += char
        return result