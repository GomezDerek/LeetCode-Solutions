// iterative bottom-up DP
// Runtime: O(N)
// Space: O(1)

function fib(n: number): number {
    if ( n <= 1) return n;
    
    // else n >= 2
    let pre1: number = 1; // (n-1)
    let pre2: number = 0; // (n-2)
    let tmp: number;

    for (let i=2; i<n; i++) {
        tmp = pre1;
        pre1 += pre2;
        pre2 = tmp;
    }

    return pre1 + pre2; // (n-1) + (n-2)
};