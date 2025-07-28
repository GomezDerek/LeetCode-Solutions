function containsDuplicate(nums: number[]): boolean {
    const seen: boolean[] = new Array(10).fill(false);

    for (let i=0; i<nums.length; i++) {
        if (seen[nums[i]]) return true; // duplicate found!
        else seen[nums[i]] = true; // mark num as seen
    }

    return false; // no duplicates
};