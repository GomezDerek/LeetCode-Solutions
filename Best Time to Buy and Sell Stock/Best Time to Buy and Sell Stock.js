/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    /* 
        brute force solution O(n^2)
        iterate through prices
        check profit when selling from all future days
    */

    /* 
        big brain solution O(n)
        [ 7, 1, 5, 3, 6, 4 ]
        [ _, 6, 6, 6, _, _ ]
        6 -1 = 5

        [ 7, 1, 5, 6, 9, 3, 4]
        [ 9, 9, 9, 9, _, 4, _]
        9 - 1 = 8

        as we iterate l -> r
        track min & max
        if new min, reset max
    
        [ 7, 3, 5, 6, 9, 1, 12]
        min = 1
        max = 12
        best_price = 11
    */
    let best = 0;
    let min = prices[0];
    let max = prices[0];
    for (const price of prices) {
        if (price < min) { // new minimum detected
            best = Math.max( best, max - min ); // calc before resetting
            
            // reset the window
            min = price;
            max = price;
        }
        else { // keep extending the window
            max = Math.max( max, price );
        }
    }

    // one last calculation bc iteration only triggers calc when window is reset
    best = Math.max( best, max - min );

    return best;
};