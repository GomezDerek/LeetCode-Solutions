/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let numSet = new Set();

    // check all rows
    for(const row of board) {
        for(const cell of row) {
            if (cell == '.') continue;
            else if (numSet.has(cell)) return false;
            else numSet.add(cell);
        }
        numSet = new Set(); // reset after each row
    }

    // check all columns
    for(let c=0; c<9; c++) {
        numSet = new Set(); // reset before checking each column
        
        for(let r=0; r<9; r++) {
            const cell = board[r][c];

            if (cell == '.') continue;
            else if (numSet.has(cell)) return false;
            else numSet.add(cell);
        }
    }
    
    // top left corner of each house
    const starts = [
        [0,0], [3,0], [6,0],
        [0,3], [3,3], [6,3],
        [0,6], [3,6], [6,6]
    ];

    // check all houses
    for(const [x,y] of starts) {
      numSet = new Set();
      for(let i=x; i<x+3; i++) {
        for(let j=y; j<y+3; j++) {
            const cell = board[i][j];
            if (cell == '.') continue;
            else if (numSet.has(cell)) return false;
            else numSet.add(cell);
        }
      }  
    }

    // the sudoku board has passed all checks!
    return true;
}