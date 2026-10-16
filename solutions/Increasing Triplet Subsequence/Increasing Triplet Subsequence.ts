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

    .map() = O(n)
    .sort() = O(n log n)

    triple for loop O(n^3) -> 10^125 operations...

    is this DP?

    we can figure out a way to skip duplicates hehe
    remove duplicates = O(n)
 */

function increasingTriplet(nums: number[]): boolean {
    const tuples: [number, number][] = nums.map((num, i) => {
        return [num, i];
    });
    const sorted: [number, number][] = tuples.sort( (a,b) => a[0] - b[0]);
    // console.log(sorted);

    const uniques: [number, number][] = [];
    let prevNum: number | null = null;
    for (const [num, i] of sorted) {
        if (num === prevNum) continue;
        
        uniques.push([num, i]);
        prevNum = num;
    }

    // console.log(uniques);

    for (let i=0; i<uniques.length; i++) {
        const [numA, iA] = uniques[i];
        // console.log(numA, iA);
        for (let j=i+1; j<uniques.length; j++) {
            const [numB, jB] = uniques[j];
            // console.log(`\t`, numB, jB)
            
            if (numA === numB) continue;

            if (jB > iA) {
                for (let k=j+1; k<uniques.length; k++) {
                    const [numC, kC] = uniques[k];
                    // console.log(`\t\t`, numC, kC);

                    if (numB === numC) continue;
                    if (kC > jB) return true;
                }
            }
        }
    }

    return false;
};