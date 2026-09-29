/**
    O(n^2) to calc max at every iteration
    O(n)
        to store top 2 max
        O(n) to iterate and find top 2 max
        O(n) to calc answer
 */

function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    const ans: boolean[] = [];
    // let maxI1: number = 0;
    // let maxI2: number = -1;

    // for (const [num, i] of candies) {
    //     if (num > candies[maxI1]) {
    //         maxI2 = maxI1;
    //         maxI1 = i;
    //     }
    //     else if (num > candies[maxI2]) {
    //         maxI2 = i;
    //     }
    // }

    const maxCandies: number = Math.max(...candies);

    for (const num of candies) {
        ans.push(num + extraCandies >= maxCandies);
    }

    return ans;
};