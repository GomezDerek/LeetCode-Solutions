'''
GOAL: find all queen placement configurations

STRAT:
    - find all distinct solutions -> DFS backtracking


NOTES:
    - n <= 9, so efficiency isn't important
    - queens may not be in the same row, column, or diagonals
    - 1 queen for each row, column, and diagonal
    - put a queen in each row, then column, while avoiding diagonal collisions
    - set for row, column, & diagonal
'''

class Solution:
    def solveNQueens(self, n: int) -> List[List[str]]:
        colSet = set()
        posDiagSet = set() # r+c
        negDiagSet = set() # r-c

        validBoards = []
        curBoard = [['.' for _ in range(n)] for _ in range(n)]
        
        def saveCurBoard() -> None:
            validBoards.append(
                ["".join(strArr) for strArr in curBoard]
            )

        def isSafeSquare(x: int, y: int) -> bool:
            if y in colSet: return False
            elif (x+y) in posDiagSet: return False
            elif (x-y) in negDiagSet: return False
            else: return True

        def addQueen(x: int, y: int) -> None:
            curBoard[x][y] = 'Q'
            colSet.add(y)
            posDiagSet.add(x+y)
            negDiagSet.add(x-y)
        
        def removeQueen(x: int, y: int) -> None:
            curBoard[x][y] = '.'
            colSet.remove(y)
            posDiagSet.remove(x+y)
            negDiagSet.remove(x-y)

        def dfs(row: int) -> None:
            # base case(s)
            if (row >= n): 
                saveCurBoard()
                return

            # pre-recursion ops

            # recursion
            for col in range(n):
                # if [row][col] is safe, add queen and recurse
                if not isSafeSquare(row, col):
                    continue
                else:
                    addQueen(row, col)
                    dfs(row+1)
                    removeQueen(row, col)

            # post-recursion ops

        dfs(0)
        return validBoards
