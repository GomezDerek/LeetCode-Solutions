/**
STRATEGY:
    recursive backtracking
    each step recurses n-1 times O(n!)

NOTES:
    max input size is 6 so O(n!) probably sufficient
 */

function permute(nums: number[]): number[][] {
    const allPermutations: number[][] = [];

    const visited: Set<number> = new Set<number>();
    
    for (let i=0; i<nums.length; i++) dfs(i);

    return allPermutations;

    // hoisted fx()
    function dfs(i: number): void {

        // bad base case
        if (visited.has(i)) {
            return;
        }
        // good base case
        else if (visited.size === nums.length-1) {
            allPermutations.push([...Array.from(visited).map(e => nums[e]), nums[i]]);
            return;
        }

        // pre-ops
        visited.add(i);
        
        // recursion
        for (let j=0; j<nums.length; j++) {
            dfs(j);
        }

        // post-ops
        visited.delete(i);
    }
};