/*
    REDO

    HASHMAP STRATEGY:
        iterate through nums and build a hashmap {numsVal: numsIndex}
        iterate through nums again
            if hashmap[nums[i] + diff]
                if hashmap[nums[i] + diff*2]
                    triplet found
*/

function arithmeticTriplets(nums: number[], diff: number): number {
    const hash: Map<number, number> = new Map();

    nums.forEach( (num, i) => hash.set(num, i));


    let numTriples: number = 0;
    nums.forEach( num => {
        //find double
        if (hash.has(num + diff)) {
            // find triple
            if (hash.has(num + diff*2)) {
                numTriples++;
            }
        }
    });

    return numTriples;
};