/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    /*
    strategy
    what is the slowest rate k (bananas/hr)
    that will let Koko finish ALL the bananas in h hours

    only one pile per hour allowed
    hours >= piles.length

    if h == n
    then k = max(piles)

    if h == n*2
    then k = sum(piles)/n

    sum(piles)/n = avg # of bananas in each pile

    [100, 2], h = 2
    k = 102/2 = 61
    wrong
    k = 100

    h == n is edge case?
    
    [100,2], h=8
    k = 102/8 = 13 (round-up)
    100/7 >= 13?
    also wrong

    Ahead of time, I know:
    how many hours
    how many piles

    After traversing the piles, I know:
    avg bananas
    min and max bounds
    
    considering piles.length <= 10,000,
    solution must be better than O(n^2)

    worst k is max banana bound
    best k is min banana bound
    */

    // BRUTE FORCE
    let maxPile = -Infinity;
    for (let num of piles) {
        maxPile = num > maxPile ? num : maxPile;
    }

    let bestK = null;
    
    let curK = maxPile;
    let curHours = 0;    

    // try every int starting from maxPile
    while ( curK > 0 && curHours <= h) { // exits when k isn't fast enough to finish all the bananas
        curHours = 0;
        // console.log(curK);

        for (let bananas of piles) {
            if (curHours > h) break;
            // console.log(`\t${bananas}`);

            while (bananas>0) {
                bananas -= curK;
                curHours++;
            }

            // console.log(`\t${bananas}`);
        }

        if (curHours > h) {
            // console.log(curHours);
            break;
        }
        bestK = curK;
        curK--;
    }

    return bestK;
};