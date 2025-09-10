/*
    GOAL: for each num, return if it will be >= max if += extraCandies

    EDGE CASES:
        true if >=
        ... nothing else? Famous last words
*/
function kidsWithCandies(candies: number[], extraCandies: number): boolean[] { 
    const max: number = Math.max(...candies);
    return candies.map((num) => {
        return num+extraCandies >= max
    });
};