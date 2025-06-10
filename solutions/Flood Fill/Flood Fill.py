class Solution:
    def floodFill(self, image: List[List[int]], sr: int, sc: int, color: int) -> List[List[int]]:
        
        # plan
        # og_color = image[sr][sc]
        # recursive
            # change color
            # check adjacencies for og_color
            # recursion( og_color, adjacencies )

        og_color = image[sr][sc]
        print("og_color", og_color)
        adj_coords = [(1,0),(0,1),(-1,0),(0,-1)]
        m = len(image)
        n = len(image[0])

        def recursive_flood(i, j):
            # print( str(i), str(j) )
            # print( "("+str(i)+","+str(j)+") "+str(image[i][j])+"->"+str(color) )
            image[i][j] = color
            for adj in adj_coords:
                ni = i + adj[0]
                nj = j + adj[1]

                # adj is valid
                if (ni < m and ni >= 0 and nj < n and nj >= 0):
                    if image[ni][nj] == color:
                        pass
                    elif image[ni][nj] == og_color:
                        recursive_flood(ni, nj)
                    else:
                        pass

        recursive_flood(sr, sc)
        return image