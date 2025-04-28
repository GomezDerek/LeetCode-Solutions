function minEatingSpeed(piles: number[], h: number): number {
    /*
    STRATEGY
    k = bananas/hour
    Goal: find the minimum k possible, given h hours to finish piles of bananas

    notes: 
    Koko cannot eat > 1 pile per hour
    Koko will always be able to finish all the bananas bc piles.length <= h 

    1 <= min k <= max(piles)

    brute force: O( max(piles) )
    store prevK
    starting from k = max(piles), and decrementing all the way to 1
        test if Koko can finish all the bananas in h time
        if she finishes the bananas
            prevK = currK
            continue
        else 
            prev k is min k

    optimization: O( log max(piles) + piles )
    use BSA to find min K between 1 and maxPiles
        calc midK
        if Koko finishes in time
            look at smaller K's, r = midK-1
        else Koko doesn't finish
            loot at larger K's, l = midK+1
    */

    let left: number = 1;
    let right: number = 1; // 1 <= piles[i] <= 10^9

    // right = max(piles)
    right = Math.max(...piles);
    // for (let i=0; i<piles.length; i++) {
    //     right = Math.max(right, piles[i]);
    // }

    let minK: number;
    let midK: number;

    // BSA
    while (left <= right) {
        midK = Math.trunc((left+right)/2);
        console.log(left, right, piles[midK]);

        if (isKValid(midK)) {
            // look lower
            right = midK -1;
            minK = midK;
        }

        else {
            // look higher
            left = midK +1;
        }
    }

    function isKValid(k: number): boolean {
        let elapsed: number = 0;
        for (let i=0; i<piles.length; i++) {
            const numBananas: number = piles[i];
            elapsed += Math.ceil(numBananas/k);
            if (elapsed > h) return false; // overtime
        }
        return true; // all bananas have been eaten in time
    }

    return minK;
};