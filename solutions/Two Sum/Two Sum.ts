function twoSum(nums: number[], target: number): number[] {
    const map = new Map<number, number>();
    for (const [i, num] of nums.entries()) {
        if (map.has(target-num)) return [i, map.get(target-num)];
        else map.set(num, i)
    }
};