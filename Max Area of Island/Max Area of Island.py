class Solution:
    def maxAreaOfIsland(self, grid: List[List[int]]) -> int:
        m, n = len(grid), len(grid[0])
        
        maxArea = 0
        curArea = 0

        def dfs(x: int, y: int) -> None:
            # base case
            if (
                0 <= x < m 
                and 0 <= y < n
                and grid[x][y] == 1
            ): pass
            else: return
            
            # ops
            nonlocal curArea
            curArea += 1
            grid[x][y] = 0

            # recursion
            dfs(x+1,y)
            dfs(x-1,y)
            dfs(x,y+1)
            dfs(x,y-1)

        for i in range(m):
            for j in range(n):
                if grid[i][j] == 1: # LAND HO!
                    dfs(i,j)
                    maxArea = max(maxArea, curArea)
                    curArea = 0

        return maxArea