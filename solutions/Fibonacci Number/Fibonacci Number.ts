// optimized runtime with cache
// Runtime: O(N)
// Space: O(N)

// fib(n) = cache[n]
const cache: number[] = [0,1];

function fib(n: number): number {
    if (cache[n] === undefined) cache[n] = fib(n-1) + fib(n-2);
    return cache[n];
};