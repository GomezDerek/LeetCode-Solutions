/**
STRATEGY:
    recursive backtracking
    each step recurses n-1 times O(n!)

NOTES:
    max input size is 6 so O(n!) probably sufficient
 */

function permute(nums: number[]): number[][] {
    const allPermutations: number[][] = [];
    const curPermutation: number[] = [];
    const visited: Set<number> = new Set<number>();

    for (let i=0; i<nums.length; i++) {
        curPermutation.push(nums[i]);
        dfs(i);
        curPermutation.pop();
    }
    return allPermutations;

    function dfs(i: number): void {

        // bad base case
        if (visited.has(i)) {
            return;
        }
        // good base case
        else if (curPermutation.length === nums.length) {
            allPermutations.push([...curPermutation]);
            return;
        }

        // ops
        visited.add(i);
        
        // recursion
        for (let j=0; j<nums.length; j++) {
            curPermutation.push(nums[j]);
            dfs(j)
            curPermutation.pop();
        }

        visited.delete(i);
    }
};