class Solution:
    def reverseVowels(self, s: str) -> str:
        vowels = {'a','e','i','o','u'}
        sArr = list(s)
        front = 0
        back = len(s) -1
        while (front < back):
            if s[front].lower() not in vowels: front +=1
            elif s[back].lower() not in vowels: back -=1
            else:
                temp = s[front]
                sArr[front] = s[back]
                sArr[back] = temp
                front +=1
                back -=1
        return ''.join(sArr)