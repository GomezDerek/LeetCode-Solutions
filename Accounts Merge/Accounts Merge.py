class Solution:
    def accountsMerge(self, accounts: List[List[str]]) -> List[List[str]]:
        # name {
        #     [
        #       { email1, email2, ... },
        #       { email3, email4, ... }
        #     】
        # }

        hashMap = {}

        for arr in accounts:
            name = arr[0]
            emails = arr[1:]
            # print(f"{name}\n{emails}\n")

            if hashMap.get(name):
                
                # check if they should be merged
                unmergedSets = []
                mergedSet = set(emails)
                
                emailSets = hashMap[name]
                for emailSet in emailSets:
                    if not emailSet.isdisjoint(emails):
                        # print(f"merge needed between:\n{emailSet}\n{emails}")
                        mergedSet.update(emailSet)
                    else:
                        unmergedSets.append(emailSet)

                hashMap[name] = unmergedSets + [mergedSet]

            else:
                hashMap[name] = [set(emails)]

        # print(hashMap)
        formattedAnswer = []
        for name, emailSets in hashMap.items():
            for emailSet in emailSets:
                formattedAnswer.append([name] + sorted(emailSet))
        return formattedAnswer