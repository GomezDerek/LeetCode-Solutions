class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        # strategy
        # iterate through every coordinate
        # if land, check if it's an island

        # optimization: BFS + memory

        # new stategy
        # copy of matrix to track visited
        # iterate through 2d array
        # if we find land, BFS the island and add all elements to visited matrix



        numIslands = 0
        m = len(grid)
        n = len(grid[0])

        stack = []
        visited = [ [False for _ in range(n)] for _ in range(m)]

        for row in range(m):
            for col in range(n):
                # print(f"{(row,col)} = {grid[row][col]}")
                if visited[row][col]:
                    # print("\t alr visited") 
                    continue # skip bc we've already visited
                else: 
                    visited[row][col] = True # mark as visited

                if int(grid[row][col]): # ==1, land found! This is the beginnign of an island
                    numIslands += 1 
                    # bfs
                    stack.append((row,col))
                    while stack:
                        currX, currY = stack.pop(0)
                        # print(f"\t{(currX,currY)}")
                        visited[currX][currY] = True
                        
                        dxdy = [(0,1), (1,0), (0,-1), (-1,0)] # neighbor coordinates
                        for dX, dY in dxdy:
                            nX, nY = currX + dX, currY + dY # new coordinates
                            if 0 <= nX < m and 0 <= nY < n:                   # if in bounds
                                if not visited[nX][nY] and int(grid[nX][nY]): # and it's unvisited land
                                    stack.append((nX,nY))                     # add to stack and continue mapping island

        return numIslands