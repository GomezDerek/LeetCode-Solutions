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
    for (let i=0; i<piles.length; i++) {
        maxPile = piles[i] > maxPile ? piles[i] : maxPile;
    }
    let bestK = maxPile;

    // BSA O(logN)
    let l = 1;
    let r = maxPile;
    while (l <= r) {
        const m = parseInt((l+r)/2);
        const mValid = isKValid(m); // is m a valid k

        if (mValid) {
            // console.log(`[${l}, ${r}] ${m} ✅`);
            bestK = m;
            r = m-1; // keep searching left of m
        }
        else {
            // console.log(`[${l}, ${r}] ${m} ❌`);
            l = m+1; // keep searching right of m
        }
    }
    // bestK found

    return bestK;

    // helper function O(n*?)
    // to test if Koko can finish all the bananas in time
    function isKValid(k) {
        let curHours = 0;

        for (let bananas of piles) {
            if (curHours > h) return false;
            curHours += Math.ceil(bananas/k);
            // while (bananas>0) {
            //     bananas -= k;
            //     curHours++;
            // }
        }

        return curHours <= h;
    }
};