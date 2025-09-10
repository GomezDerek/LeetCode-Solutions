/*
    GOAL: determine whether n new flowers can be planted
    STRATEGY:
        simulate with linear iteration and counter
*/
function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    let count: number = 0;

    for (let i=0; i<flowerbed.length; i++) {
        // if left, current, and right plot are empty
        if (
            flowerbed[i] === 0
            && (i===0 || flowerbed[i-1] === 0)
            && (i=== flowerbed.length-1 || flowerbed[i+1] === 0)
        ) {
            flowerbed[i] = 1; // plant flower
            count++; 
            i++; // skip next
        }

    }

    return count >= n;
};