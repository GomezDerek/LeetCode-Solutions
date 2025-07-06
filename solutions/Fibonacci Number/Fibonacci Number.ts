// optimized runtime with cache
// Runtime: O(N)
// Space: O(N)

function fib(n: number): number {
    const cache: number[] = [0,1];
    return recurse(n);
    
    function recurse(n: number): number {
        if (cache[n] === undefined) cache[n] = fib(n-1) + fib(n-2);
        return cache[n];
    }
};