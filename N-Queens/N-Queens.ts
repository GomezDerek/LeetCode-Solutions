// added sets for queen validation
function solveNQueens(n: number): string[][] {
    const allSolutions: string[][] = [];
    const curBoard: string[][] = [];
    
    // fill the board
    for (let i=0; i<n; i++) {
        curBoard.push(new Array(n).fill("."));
    }

    // to track where queens are placed
    const columns = new Set<number>();
    const posDiagonals = new Set<number>();
    const negDiagonals = new Set<number>();

    recurse(0);
    return allSolutions;  
    
    /////////////////////
    // func defs below //
    /////////////////////

    function recurse(curRow: number): void {
        // base case(s)
        if (curRow >= n) {
            // add curBoard to all solutions, copy
            saveBoard();
            return;
        }

        // attempt to place a queen at every col in this row
        for (let j=0; j<n; j++) {
            if (!isQueenAllowed(curRow, j)) continue;
            // else we can add a queen
            addQueen(curRow, j);
            recurse(curRow+1);
            removeQueen(curRow, j);
        }
    }

    // update sets and curBoard with queen position
    function addQueen(i: number, j: number): void {
        curBoard[i][j] = 'Q';
        columns.add(j);
        posDiagonals.add(i+j);
        negDiagonals.add(i-j);
    }

    // remove queen position from sets and curBoard
    function removeQueen(i: number, j: number): void {
        curBoard[i][j] = '.';
        columns.delete(j);
        posDiagonals.delete(i+j);
        negDiagonals.delete(i-j);
    }

    function isQueenAllowed(i: number, j: number): boolean {
        // col
        if (columns.has(j)) return false;
        
        // row
        // else if (curBoard[i].includes('Q')) return false;

        // posDiagonal
        else if (posDiagonals.has(i+j)) return false;

        // negDiagonal
        else if (negDiagonals.has(i-j)) return false;

        // all checks passed
        return true;
    }

    // saves the current board to allSolutions
    function saveBoard(): void {
        const newBoard: string[] = curBoard.map((rowArr) => rowArr.join(""));
        allSolutions.push(newBoard);
    }
};