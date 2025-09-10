function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    let count: number = 0;

    let i: number = 1; // for the while loop

    // first flowerbed
    if (flowerbed.length > 1 && !flowerbed[1] && !flowerbed[0]) {
        flowerbed[0] = 1;
        count++;
        i = 2;
    }

    // rest of the flowerbeds
    while (i<flowerbed.length-1) {
        if (!flowerbed[i] && !flowerbed[i-1] && !flowerbed[i+1]) {
            flowerbed[i] = 1; // plant flower
            count++; 
            i++; // skip next
        }

        i++;
    }

    // last flowerbed
    if (!flowerbed[i-1] && !flowerbed[i]) {
        count++;
    }
    
    console.log(flowerbed);

    return count >= n;
};