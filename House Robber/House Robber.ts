// runtime: O(n)
// space:   O(n)
function rob(nums: number[]): number {
    if (nums.length === 1) return nums[0]; // edge case

    // create DP cache
    const mem: number[] = new Array(nums.length).fill(null);
    mem[0] = nums[0];
    mem[1] = nums[1];

    let maxSteal: number = 0;

    for (let i=0; i<nums.length; i++) {
        maxSteal = Math.max(maxSteal, dp(i));
    }

    return maxSteal;
    
    // func def
    function dp(house: number): number {
        // if house out of bounds...
        if (house < 0) return 0;
        
        // if house in mem, simply return mem
        else if (mem[house] !== null) return mem[house];

        // else calculate optimal path to curHouse
        const pathA: number = dp(house-2);
        const pathB: number = dp(house-3);

        mem[house] = nums[house] + Math.max(pathA, pathB);
    
        return mem[house];
    }
};