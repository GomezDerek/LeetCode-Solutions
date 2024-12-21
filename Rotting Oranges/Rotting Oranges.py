class Solution:
    def orangesRotting(self, grid: List[List[int]]) -> int:
        # strategy
        # use a data struct to keep track of fresh oranges (unvisited)
        # fresh orange hash will also keep track of min-minutes
        # DFS or BFS???
        # return -1 if traversal finishes, and we still have a fresh orange
        # otherwise, return the highest min-minutes

        fresh = {}

        def dfs(x,y,minute):
            # print("DFS activated")
            if grid[x][y] is 1: # if fresh orange
                # print(x,y)
                # print(fresh)
                if (x,y) not in fresh.keys():
                        fresh[(x,y)] = minute
                elif fresh[(x,y)] > minute or fresh[(x,y)] is -1: 
                    fresh[(x,y)] = minute
                # print(fresh)

            dxdy = [(0,1),(1,0),(0,-1),(-1,0)]
            for dx,dy in dxdy:
                nx,ny = x+dx, y+dy
                if 0 <= nx < m and 0 <= ny < n and grid[nx][ny] is 1: # if in bounds AND fresh
                    # if fresh is unvisited or worth visiting
                    # recursive call(s)
                    if (nx,ny) not in fresh.keys():
                        dfs(nx,ny,minute+1)
                    elif fresh[(nx,ny)] > minute or fresh[(nx,ny)] is -1: 
                        dfs(nx,ny,minute+1)

        m = len(grid)
        n = len(grid[0])
        for i in range(m):
            for j in range(n):
                if grid[i][j] is 0:   # empty
                    pass
                elif grid[i][j] is 1: # fresh
                    if (i,j) not in fresh.keys():
                        fresh[(i,j)] = -1
                elif grid[i][j] is 2: # rotten
                    dfs(i,j,0)
                else:
                    print("!")

        if not fresh:
            return 0

        print(fresh)
        ans = float(-inf)
        for val in fresh.values():
            if val is -1:
                return -1
            else:
                ans = val if val > ans else ans
        return ans