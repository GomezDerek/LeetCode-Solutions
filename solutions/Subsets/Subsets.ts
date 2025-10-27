/**
    STRATEGY:
        brute force
        recurse through all possibilities
        O(N!)


    SIMULATION:
    powerset = [ [], 
                [1], 
                [2], [1,2]
                [3], [3,2], [3,1,2], [3,1]
                [4], 4 + [3...], 4 + [2...], 4+ [1...]
            ]

 */

function subsets(nums: number[]): number[][] {
    const hash: Map<number, number[][]> = new Map<number, number[][]>();

    for (const num of nums) {
        const subsets: number[][] = [];
        subsets.push([num]);

        for (const [key, value] of hash) {
            // value is an array of arrays
            for (const set of value) {
                subsets.push([...set, num]);
            }
        }

        hash.set(num, subsets);
    }

    console.log(hash);

    // [ value1, value2, ... ]
    // [ [[], [], []] , ... ]
    // [] + []
    // arr.join() -> string
    // [].push(...[])
    const res: number[][] = [[]];
    // hash.values().forEach( parentArray => {
    for (const parentArray of hash.values()) {
        parentArray.forEach(childArray => { res.push([...childArray]) })
    };
    return res;
    // return [...hash.values()];
    // return [[]];
};