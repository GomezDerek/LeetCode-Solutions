/**
    STRATEGY:
        use a set
        iterate through the nums arr,
            use set to check duplicates

        runtime: O(N)
        space: O(N)
 */
function containsDuplicate(nums: number[]): boolean {
    const seen = new Set<number>();
    for (const num of nums) {
        if (seen.has(num)) return true; // duplicate found
        else seen.add(num);
    }

    return false; // no duplicates
};