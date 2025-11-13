/**
    note: constraints nums.length <= 10 TF efficiency not expected

    strategy:
        is this not just O(2^n) recursive decision tree?

        to skip duplicates:
            if nums = [1,2,2]
                how to discern between indexes [0,1] & [0,2] ?

            let's try using a set / map for distinct subsets
 */

function subsetsWithDup(nums: number[]): number[][] {
    const N: number = nums.length;
    const allSubsets: Map<string, number[]> = new Map<string, number[]>();
    allSubsets.set('[]', []);

    const curSubset: number[] = [];
    dfs(0);
    return [...allSubsets.values()];

    function dfs(i: number): void {
        // console.log(i, [...curSubset, nums[i]], allSubsets.get(JSON.stringify([...curSubset, nums[i]])));
        
        // base cases
        if (i >= N) return;
        else if (curSubset.length > 0 // curSubset !== [] 
            && allSubsets.has(JSON.stringify([...curSubset, nums[i]]))
        ) return;

        allSubsets.set(JSON.stringify([...curSubset, nums[i]]), [...curSubset, nums[i]]);

        // recurse with nums[i] in curSubset
        curSubset.push(nums[i]);
        dfs(i+1);

        // recurse without nums[i] in curSubset
        curSubset.pop();
        dfs(i+1);

    }
};