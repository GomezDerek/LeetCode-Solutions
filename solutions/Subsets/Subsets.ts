function subsets(nums: number[]): number[][] {
    const allSubsets: number[][] = [[]];
    const curSubset: number[] = [];
    dfs(0);
    return allSubsets;

    function dfs(i: number) {

        // bad base case
        if (i >= nums.length) return;
        // else continue

        // ops
        curSubset.push(nums[i]);
        allSubsets.push([...curSubset]);

        // O(2^n) recursive decision tree
        // include nums[i]
        dfs(i+1);

        // exclude nums[i]
        curSubset.pop();
        dfs(i+1);
    } 
};