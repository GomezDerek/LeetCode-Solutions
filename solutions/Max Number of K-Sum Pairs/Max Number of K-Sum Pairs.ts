function maxOperations(nums: number[], k: number): number {
    // build map
    const map: {[index: number]: number} = {};
    for (let i=0; i<nums.length; i++) {
        map[nums[i]] = (map[nums[i]] ?? 0) +1;
    }

    // count pairs
    let count = 0;
    for (let i=0; i<nums.length; i++) {
        if (nums[i] === k-nums[i] && map[nums[i]] < 2) continue;
        else if (
            map[nums[i]] > 0 && 
            (map[k-nums[i]] ?? 0) > 0
        ) {
            map[nums[i]] = map[nums[i]] - 1;
            map[k-nums[i]] = map[k-nums[i]] -1;
            count++;
        }
    }

    return count;
};