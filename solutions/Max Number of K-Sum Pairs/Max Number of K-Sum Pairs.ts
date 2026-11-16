function maxOperations(nums: number[], k: number): number {
    const map: {[index: number]: number} = {};
    
    let count = 0;

    for (let i=0; i<nums.length; i++) {
        map[nums[i]] = (map[nums[i]] ?? 0) +1;
    }

    for (let i=0; i<nums.length; i++) {
        const num = nums[i];
        const complement = k - num;
        // console.log(num, map[num], complement, map[complement]);
        if (
            (num === complement && map[num] > 1) ||
            (num !== complement) &&
            (map[num] ?? 0) > 0 && 
            (map[complement] ?? 0) > 0
        ) {
            // console.log("!");
            map[num] = map[num] - 1;
            map[complement] = map[complement] -1;
            count++;
        }
    }

    // console.log(map);

    return count;
};