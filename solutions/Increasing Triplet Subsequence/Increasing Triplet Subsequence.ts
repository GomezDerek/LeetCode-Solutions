function increasingTriplet(nums: number[]): boolean {
    let first: number = Infinity;
    let second: number = Infinity;

    for (const num of nums) {
        if (num < first) {
            first = num;
            second = Infinity;
        }
        else if (num < second) {
            second = num
        }
        else if (num > second && second !== Infinity) {
            return true;
        }
    }

    return false;
};