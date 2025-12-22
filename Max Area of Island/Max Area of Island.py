class Solution:
    def maxAreaOfIsland(self, grid: List[List[int]]) -> int:
        m, n = len(grid), len(grid[0])
        
        maxArea = 0
        curArea = 0

        dq = deque()
        def BFS(x: int, y: int) -> None:
            nonlocal curArea

            dq.append([x,y])
            grid[x][y] = 0

            while dq:
                cx, cy = dq.popleft()
                curArea += 1

                for nx,ny in [
                    [cx+1,cy],
                    [cx-1,cy],
                    [cx,cy+1],
                    [cx,cy-1]
                ]:
                    if 0 <= nx < m and 0 <= ny < n and grid[nx][ny] == 1:
                        dq.append([nx,ny])
                        grid[nx][ny] = 0

        for i in range(m):
            for j in range(n):
                if grid[i][j] == 1: # LAND HO!
                    BFS(i,j)
                    maxArea = max(maxArea, curArea)
                    curArea = 0

        return maxArea