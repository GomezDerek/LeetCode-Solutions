/**
GOAL:
    return all board configs of n queens on an n x n sized board

STRATEGY:
    "return all distinct solutions" -> generate combos -> backtracking
    n = 9 -> non-efficient solution ok

    use a 3rd ch to mark a space as unavailable:
        Q = queen
        . = available space
        x = unavailable space

    1. global var to store all board solutions
    2. make a board of n x n size
    3. recursive dfs; for every recursion:
        a. attempt to place a queen at every possible square in the row
        b. when we place a queen, mark all unavailable spaces

    4. when returning global var, replace all x's with .'s

NOTES:
    queens cannot be in the same row, column, or diagonals

 */

function solveNQueens(n: number): string[][] {
    const allSolutions: string[][] = [];
    const curBoard: string[][] = [];
    
    // create empty row string
    const emptyRow: string[] = new Array(n).fill(".");
    for (let i=0; i<n; i++) {
        curBoard.push(emptyRow.slice());
    }

    recurse(0);

    return allSolutions;  

    // func def
    function recurse(curRow: number): void {
        // base case(s)
        if (curRow >= n) {
            // add curboard to all solutions, copy
            saveBoard();
            return;
        }

        // attempt to place a queen at every col in this row
        for (let j=0; j<n; j++) {
            if (!queenAllowed(curRow, j)) continue;
            // else we can add a queen
            curBoard[curRow][j] = 'Q';
            recurse(curRow+1);
            curBoard[curRow][j] = ".";
        }
    }

    function queenAllowed(i: number, j: number): boolean {
        // col
        if (curBoard[i].includes('Q')) return false;

        // row
        for (let k=0; k<n; k++) {
            if (curBoard[k][j] === 'Q') return false;
        }

        let x: number = i;
        let y: number = j;
        
        // bottom \
        while (x < n && y < n) {
            if (curBoard[x][y] === 'Q') return false; 
            x++;
            y++;
        }

        // upper \
        x = i;
        y = j
        while (x >= 0 && y >= 0) {
            if (curBoard[x][y] === 'Q') return false;
            x--;
            y--;
        }

        // bottom /
        x = i;
        y = j
        while (x >= 0 && y < n) {
            if (curBoard[x][y] === 'Q') return false;
            x--;
            y++;
        }

        // upper /
        x = i;
        y = j
        while (x < n && y >= 0) {
            if (curBoard[x][y] === 'Q') return false;
            x++;
            y--;
        }

        // all checks passed
        return true;
    }

    // saves the current board to allSolutions
    function saveBoard(): void {
        const newBoard: string[] = curBoard.map((rowArr) => rowArr.join(""));
        allSolutions.push(newBoard);
    }

    // function addQueen(i: number, j: number): void {
    //     // block the whole row
    //     curBoard[i] = new Array(n).fill("x");

    //     // block the whole col
    //     for (let k=0; k<n; k++) {
    //         curBoard[k][j] = "x";
    //     }

    //     // bottom \
    //     let x: number = i;
    //     let y: number = j;
    //     while (x < n && y < n) {
    //         curBoard[x][y] = 'x'; 
    //         x++;
    //         y++;
    //     }

    //     // upper \
    //     x = i;
    //     y = j
    //     while (x >= 0 && y >= 0) {
    //         curBoard[x][y] = 'x';
    //         x--;
    //         y--;
    //     }

    //     // bottom /
    //     x = i;
    //     y = j
    //     while (x >= 0 && y < n) {
    //         curBoard[x][y] = 'x';
    //         x--;
    //         y++;
    //     }

    //     // upper /
    //     x = i;
    //     y = j
    //     while (x < n && y >= 0) {
    //         curBoard[x][y] = 'x';
    //         x++;
    //         y--;
    //     }

    //     // add in the queen
    //     curBoard[i][j] = "Q";
    // }
};