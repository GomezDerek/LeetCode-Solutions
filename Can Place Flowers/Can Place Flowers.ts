function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    let count: number = 0;

    let i: number = 0;
    while (i<flowerbed.length) {
        if (
            flowerbed[i] === 0
            && (i===0 || flowerbed[i-1] === 0)
            && (i=== flowerbed.length-1 || flowerbed[i+1] === 0)
        ) {
            flowerbed[i] = 1; // plant flower
            count++; 
            i++; // skip next
        }

        i++;
    }

    return count >= n;
};