/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    /*
    BSA strategy
    */

    // find max pile
    let maxPile = -Infinity;
    for (let num of piles) {
        maxPile = num > maxPile ? num : maxPile;
    }
    let bestK = maxPile;

    // BSA
    let l = 1;
    let r = maxPile;
    while (l <= r) {
        const m = parseInt((l+r)/2);
        const mValid = isKValid(m); // is m a valid k

        if (mValid) {
            bestK = m;
            r = m-1; // keep searching left of m
        }
        else {
            l = m+1; // keep searching right of m
        }
    }
    // bestK found

    return bestK;

    // helper function 
    // to test if Koko can finish all the bananas in time
    function isKValid(k) {
        let curHours = 0;

        for (let bananas of piles) {
            if (curHours > h) return false;

            while (bananas>0) {
                bananas -= k;
                curHours++;
            }
        }

        return curHours <= h;
    }
};