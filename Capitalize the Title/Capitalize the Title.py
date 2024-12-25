class Solution:
    def capitalizeTitle(self, title: str) -> str:
        
        ans = ""

        wordStart = -1
        for i in range(len(title)):
            # beginning of word
            if wordStart < 0 and title[i] != " ":
                wordStart = i

            # end of word
            elif i == len(title)-1:
                if i - wordStart <= 2:
                    # lowercase because word len <= 2
                    for j in range(wordStart, i+1):
                        ans += title[j].lower()
                         
                else:
                    # uppercase beginning of word
                    ans += title[wordStart].upper()

                    #lowecase the rest of the word
                    for j in range(wordStart+1, i+1):
                        ans += title[j].lower()
                
                wordStart = -1
            
            elif title[i] == " ":
                if i - wordStart <= 2:
                    # lowercase because word len <= 2
                    for j in range(wordStart, i):
                        ans += title[j].lower()
                else:
                    # uppercase beginning of word
                    ans += title[wordStart].upper()

                    #lowercase the rest of the word
                    for j in range(wordStart+1, i):
                        ans += title[j].lower()
                
                ans += " "
                wordStart = -1


        return ans