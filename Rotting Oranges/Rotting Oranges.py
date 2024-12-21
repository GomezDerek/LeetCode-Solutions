class Solution:
    def orangesRotting(self, grid: List[List[int]]) -> int:
        # BFS solution
        m = len(grid)
        n = len(grid[0])

        fresh = {}
        q = collections.deque()

        for i in range(m):
            for j in range(n):
                if grid[i][j] is 2:
                    q.append((i,j,0))
                elif grid[i][j] is 1:
                    fresh[(i,j)] = 11

        while q:
            x,y,minute = q.popleft()

            if grid[x][y] is 1:
                if fresh[(x,y)] > minute: fresh[(x,y)] = minute
                else: continue # skip the rest of this while loop, this is a suboptimal traversal
            
            dxdy = [(0,1),(1,0),(0,-1),(-1,0)]
            for dx,dy in dxdy:
                nx,ny = x+dx, y+dy
                if nx in range(m) and ny in range(n) and grid[nx][ny] is 1:
                    q.append((nx,ny,minute+1))

        if not fresh: return 0

        # invert values to turn min-heap into max-heap
        rot_times = [val*-1 for val in fresh.values()]
        heapq.heapify(rot_times)
        if rot_times[0]*-1 is 11: return -1
        else: return rot_times[0]*-1