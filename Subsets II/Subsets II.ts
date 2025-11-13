function subsetsWithDup(nums: number[]): number[][] {
    nums.sort((a,b) => a-b); // 🙄

    const N: number = nums.length;

    const allSubsets: Map<string, number[]> = new Map<string, number[]>();
    allSubsets.set('[]', []);

    const curSubset: number[] = [];
    dfs(0);
    return [...allSubsets.values()];

    // func def
    function dfs(i: number): void {
        // base case
        if (i >= N) return;

        // op - no if needed, bc no duplicate keys allowed in maps
        allSubsets.set(JSON.stringify([...curSubset, nums[i]]), [...curSubset, nums[i]]);

        // recurse with nums[i] in curSubset
        curSubset.push(nums[i]);
        dfs(i+1);

        // recurse without nums[i] in curSubset
        curSubset.pop();
        dfs(i+1);

    }
};