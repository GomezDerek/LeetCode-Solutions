class Solution:
    def orangesRotting(self, grid: List[List[int]]) -> int:
        # strategy 👇
        # use a hash map to keep track of all fresh oranges and their quickest rotting times
        # DFS for traversal
        # return -1 if traversal finishes and we still have an unrotten orange in the fresh hash
        # otherwise, return the highest rottest time

        fresh = {}

        def dfs(x,y,minute):
            if grid[x][y] is 1: # if fresh orange
                if (x,y) not in fresh.keys(): # fresh is unvisited
                        fresh[(x,y)] = minute
                elif fresh[(x,y)] > minute or fresh[(x,y)] is -1: # we have a quicker rotting time!
                    fresh[(x,y)] = minute

            # check for fresh oranges to continue DFS in the 4-directionally adjacent coordinates
            dxdy = [(0,1),(1,0),(0,-1),(-1,0)]
            for dx,dy in dxdy:
                nx,ny = x+dx, y+dy
                if 0 <= nx < m and 0 <= ny < n and grid[nx][ny] is 1: # if in bounds AND fresh
                    # recursive call(s)
                    if (nx,ny) not in fresh.keys(): # fresh is unvisited
                        dfs(nx,ny,minute+1)
                    elif fresh[(nx,ny)] > minute or fresh[(nx,ny)] is -1: # fresh is worth visiting because we have a better rotting time
                        dfs(nx,ny,minute+1)

        # double loop through the grid
        m = len(grid)
        n = len(grid[0])
        for i in range(m):
            for j in range(n):
                if grid[i][j] is 1: # fresh
                    if (i,j) not in fresh.keys():
                        fresh[(i,j)] = -1
                elif grid[i][j] is 2: # rotten
                    dfs(i,j,0)

                # ignore if no orange in grid cell
                # elif grid[i][j] is 0 # empty

        # edge case: there was never any fresh oranges to begin with, so 0 minutes until all oranges are rotten
        if not fresh:
            return 0

        ans = float(-inf)
        for val in fresh.values():
            if val is -1: return -1               # this fresh orange never rots!
            else: ans = val if val > ans else ans # track the highest rotting time amongst the fresh oranges
        
        return ans