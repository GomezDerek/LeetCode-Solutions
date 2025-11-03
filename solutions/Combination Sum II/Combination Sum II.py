class Solution:
    def combinationSum2(self, candidates: List[int], target: int) -> List[List[int]]:
        all_combos = []
        candidates.sort()
        cur_combo = []
        def dfs(i: int, cur_sum: int) -> None:
            nonlocal cur_combo
            if cur_sum == target: 
                all_combos.append(cur_combo.copy())
                return
            elif cur_sum > target or i >= len(candidates): 
                return
            cur_combo.append(candidates[i])
            dfs(i+1, cur_sum + candidates[i])
            cur_combo.pop()
            while i < len(candidates)-1 and candidates[i] == candidates[i+1]:
                i+=1 
            dfs(i+1, cur_sum)
        dfs(0,0)
        return all_combos