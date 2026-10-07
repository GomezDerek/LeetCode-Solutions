/** 
STRATEGY:
    O(n) time, linear iteration
    keep a counter,
    for each 0, check neighbors before planting a flower
    skip OR plant a flower and increment counter
*/

function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    let newFlowers: number = 0;

    for (let i=0; i<flowerbed.length; i++) {
        if (flowerbed[i]) continue;
        
        if (
            (flowerbed[i-1] ?? 0) == 0 &&
            (flowerbed[i+1] ?? 0) == 0
        ) {
            flowerbed[i] = 1;
            newFlowers++;
            if (newFlowers >= n) return true;
        }
    }

    return newFlowers >= n;
};