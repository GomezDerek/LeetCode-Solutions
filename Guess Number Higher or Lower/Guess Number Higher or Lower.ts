/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */


function guessNumber(n: number): number {
    if (n === 1) return 1;

    let curPick: number = Math.floor(n / 2);
    let guessResult: number = guess(curPick);
    let left: number = 1;
    let right: number = n;

    while (guessResult !== 0) {
        if (guessResult < 0) { //num is lower than curPick
            right = curPick;
            curPick = Math.floor( (left+curPick) / 2 );
        }
        else if (guessResult > 0) { // num is higher than curPick
            left = curPick;
            curPick = Math.floor( (right+curPick) / 2 );
        }
        guessResult = guess(curPick);
    }

    return curPick;
};