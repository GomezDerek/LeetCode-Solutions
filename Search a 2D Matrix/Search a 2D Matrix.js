/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const m = matrix.length;
    const n = matrix[0].length;

    function Pointer(row,col) {
        this.row = row;
        this.col = col;
        this.val = () => {return matrix[this.row][this.col]};
        this.dist = () => {return (n)*(this.row) + this.col};
        this.valid = () => {return this.row >= 0 && this.row < m && this.col >= 0 && this.col < n};
    }

    let left = new Pointer(0,0);
    let right = new Pointer(m-1, n-1);
    let middle = new Pointer(null,null);
    // middle = new Pointer(right.row, left.col);
    console.log(left.val(), right.val());
    // console.log(left.dist(), middle.dist(), right.dist());
    // return;

    while (left.valid() && right.valid() && left.val() <= right.val()) {
        let newMidDist = parseInt((left.dist() + right.dist())/2);
        middle.row = parseInt(newMidDist/n);
        middle.col = newMidDist%n;
        // console.log(middle.val());
        // middle.row = parseInt((left.row + right.row)/2);
        // middle.col = parseInt((left.col + right.col)/2);

        // console.log(left.val(), middle.val(), right.val());
        // console.log(left.dist(), middle.dist(), right.dist());

        if (middle.val() == target) {
            return true;
        }
        else if (middle.val() < target) { // too far left
            // we want left to be the index to the right of middle
            // if the middle is the last number in the row,
            // we set it to the first number in the next row
            left.row = middle.col == n-1 ? middle.row + 1 : middle.row;
            left.col = middle.col == n-1 ? 0 : middle.col + 1;
        }
        else if (middle.val() > target) {// too far right
            right.row = middle.col == 0 ? middle.row - 1 : middle.row;
            right.col = middle.col == 0 ? n-1 : middle.col -1;
        }
    }

    // target not in matrix
    return false;
};  
