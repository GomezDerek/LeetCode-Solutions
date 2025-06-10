class Solution:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        # Neetcode solution

        combinations = []

        def dfs(i, currCombo, total):
            # successful base case
            if total == target:
                combinations.append(currCombo[:]) # append a copy instead of a reference
                return

            # failed base case
            elif i >= len(candidates) or total > target:
                return

            # recursive call(s)
            else:
                currCombo.append(candidates[i])
                dfs(i, currCombo, total + candidates[i]) # branch to a duplicate of current candidate
                currCombo.pop()
                dfs(i+1, currCombo, total) # branch to the next candidate

        dfs(0,[],0)
        return combinations