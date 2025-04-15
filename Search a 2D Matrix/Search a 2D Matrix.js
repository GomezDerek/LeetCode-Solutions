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
        this.newDist = (dist) => {
            this.row = parseInt(dist/n);
            this.col = dist%n;
        };
    }

    let left = new Pointer(0,0);
    let right = new Pointer(m-1, n-1);
    let middle = new Pointer(null,null);

    while (left.valid() && right.valid() && left.val() <= right.val()) {
        let midDist = parseInt((left.dist() + right.dist())/2);
        middle.newDist(midDist);

        if (middle.val() == target) {
            return true;
        }
        else if (middle.val() < target) { // too far left
            left.newDist(midDist + 1);
        }
        else if (middle.val() > target) { // too far right
            right.newDist(midDist - 1);
        }
    }

    // target not in matrix
    return false;
};  
