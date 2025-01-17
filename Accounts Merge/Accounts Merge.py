class Solution:
    def accountsMerge(self, accounts: List[List[str]]) -> List[List[str]]:
        # strategy 
        # data structure = { 
        #   sharedName1: [ 
        #       [ email1, email2, ... ],
        #       [ email3, email4, ... ],
        #   ],
        #   sharedName2: [
        #       ...
        #   ]
        # }

        # Step 1: populate the hashmap
        # Step 2: merge the arrays

        # Step 3: optimize to merge during insertion
        answer = {}

        for account in accounts:
            name, emails = account[0], account[1:]
            if answer.get(name):
                answer[name].append(emails)
            else:
                answer[name] = [emails]

        print(answer)
        return answer