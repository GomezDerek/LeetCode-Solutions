// iterative bottom-up DP
// optimized runtime with cache
// Runtime: O(N)
// Space: O(N)

function fib(n: number): number {
    const cache: number[] = [0,1];
    
    for (let i=2; i<=n; i++) {
        cache.push( cache[i-1] + cache[i-2] );
    }

    return cache[n];
};