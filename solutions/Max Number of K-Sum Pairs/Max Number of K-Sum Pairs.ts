function maxOperations(nums: number[], k: number): number {
    // build map
    const map: {[index: number]: number} = {};
    for (let i=0; i<nums.length; i++) {
        map[nums[i]] = (map[nums[i]] ?? 0) +1;
    }

    // count pairs
    let count = 0;
    for (let i=0; i<nums.length; i++) {
        const num = nums[i];
        const complement = k - num;
        if (num === complement && map[num] < 2) continue;
        else if (
            map[num] > 0 && 
            (map[complement] ?? 0) > 0
        ) {
            map[num] = map[num] - 1;
            map[complement] = map[complement] -1;
            count++;
        }
    }

    return count;
};