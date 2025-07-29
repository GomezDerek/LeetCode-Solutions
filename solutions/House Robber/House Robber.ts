/**
    NOTES:
        we cannot break into two adjacent houses
        assume the optimal answer won't always be a skip 1 sequence
        [9,0,1,9]
        [9,1], [9,9]
        [0,1], [0,9]

    GOAL:
        calculate the max amount of money we can steal without stealing from adjacent houses

    STRATEGY:
        calculate all possible combinations and choose the most profitable
        start from max val,  O(n) to identify
        
        [9,0,1,9]
        [9,1] = 10, [9,9] = 18
        [0,1] = 1,  [0,9] = 9

        create doubles, then triples - so on and so forth
        use a hashmap to store values for sequences
        key: stringified indices, val: sum
        e.g. {"1 3 5": 14}

    // simulation
    // numHouses = 5
    possible combos:
        [0,2,4]
        [0,3]
        [1,3]
        [1,4]
    
    WHEN CHOOSING A NEW HOUSE, IT CAN BE EITHER +2 OR +3 INDICES
 */

function rob(nums: number[]): number {
    if (nums.length === 1) return nums[0]; // edge case
    

    const mem: number[] = new Array(nums.length).fill(null);
    mem[0] = nums[0];
    mem[1] = nums[1];
    let maxSteal: number = Math.max(nums[0], nums[1]);

    for (let i=0; i<nums.length; i++) {
        dpRecurse(i);
    }


    return maxSteal;
    
    // func def
    function dpRecurse(house: number): number {
        // if house out of bounds...
        if (house >= nums.length || house < 0) return 0;
        
        // if house in mem, return mem
        if (mem[house] !== null) return mem[house];
        
        const pathA: number = dpRecurse(house-2);
        const pathB: number = dpRecurse(house-3);

        mem[house] = nums[house] + Math.max(pathA, pathB);

        maxSteal = Math.max(maxSteal, mem[house]);
    
        return mem[house];
    }
};