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

    const res: number[][] = [[]];
    for (const parentArray of hash.values()) {
        parentArray.forEach(childArray => { res.push([...childArray]) })
    };
    return res;
};