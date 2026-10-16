/** 
STRATEGY:
    put all kv pairs in a hashmap so that {nums[i]: i} & map[nums[i]] = i
    keep a hashmap of doubles?
    sort in asc order?
    2 lists, 1 by i & the other by nums[i]...
    use double lists to create doubles and find diff for triplet?
    
    for each num1, 
        for each num2 > num1
            if num2i > num1i
                doubles.push(num1i, num2i)
    
    for each double,
        for each num2i,
            for each num3i > num2i
                if num3 > num2
                    triples.push(..double, num3i)

    NOTE: there can be duplicate vals, but not indices
    expected output is boolean

    O(n^3) time
    O(n) space

    LET'S SORT FIRST

    edge cases?

 */

function increasingTriplet(nums: number[]): boolean {
    const sorted: [number, number][] = nums.map((num, i) => {
        return [num, i];
    });
    sorted.sort( (a,b) => a[0] - b[0]);
    // console.log(sorted);

    for (let i=0; i<sorted.length; i++) {
        const [numA, iA] = sorted[i];
        // console.log(numA, iA);
        for (let j=i+1; j<sorted.length; j++) {
            const [numB, jB] = sorted[j];
            // console.log(`\t`, numB, jB)
            
            if (jB > iA) {
                for (let k=j+1; k<nums.length; k++) {
                    const [numC, kC] = sorted[k];
                    // console.log(`\t\t`, numC, kC);

                    if (kC > jB) return true;
                }
            }
        }
    }

    return false;
};