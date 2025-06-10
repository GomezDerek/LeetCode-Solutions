class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        # NC solution
        m,n = len(grid), len(grid[0])

        visited = set()
        numIslands = 0

        def bfs(row,col):
            visited.add((row,col))
            
            queue = collections.deque()
            queue.append((row,col))
            while queue:
                x,y = queue.popleft()
                dxdy = [(0,1), (1,0), (0,-1), (-1,0)]
                for dX,dY in dxdy:
                    nX,nY = x+dX, y+dY
                    if nX in range(m) and nY in range(n) and int(grid[nX][nY]) and (nX,nY) not in visited:
                        queue.append((nX,nY))
                        visited.add((nX,nY))

        # double loop to iterate through every element
        for row in range(m):
            for col in range(n):
                if int((grid[row][col])) and (row,col) not in visited: # land ho! unvisited land!
                    numIslands += 1
                    bfs(row, col)

        return numIslands