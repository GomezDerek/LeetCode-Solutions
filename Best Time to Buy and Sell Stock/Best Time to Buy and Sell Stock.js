/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    /*
    brute force solution O(n^2)
    as we iterate through prices,
    compare against all future prices to find the best profit
    
    optimized solution O(n)
    as we iterate through prices,
    track the lowest price,
    calculate profit of current price and lowest price tracked
    */

    let bestProfit = 0;
    let lowestPrice = Infinity;

    prices.forEach( price => {
        lowestPrice = Math.min(lowestPrice, price);
        bestProfit = Math.max(bestProfit, price-lowestPrice);
    });

    return bestProfit;


};