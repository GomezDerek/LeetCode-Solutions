/*
    GOAL: calc how many diff ways to reach the top of a staircase, with 1 or 2 steps combo

    NOTES:


    STRATEGY:

    BRUTE FORCE:
                 recurse(0)
         recurse(1)     recurse(2)
        r(2)    r(3)     r(3)   r(4)
      r(3)        r(4) r(4) r(5)  r(5) r(6)
      r(4)
      r(5)
      r(6)

    time: O(2^n)
    space: O(n)

    OPTIMIZED:
    run: O(n)
    space: O(n)

    use an arr to store our solutions to subproblems with O(1)

    go backwards from n -> 0
    arr[i] = arr[i+1] + arr[i+2]

    return arr[0]


    example:
    n = 6
    arr[6] = 0;    arr[5] = 1;
    arr[4] = 2;
    arr[3] = arr[4] + arr[5]
    arr[2] = ...
    arr[1] = ...
    return arr[0]

*/


function climbStairs(n: number): number {
    const arr: number[] = new Array(n+1);
    arr[n] = 0;
    arr[n-1] = 1;
    arr[n-2] = 2;

    // edge case
    if (n === 1) return 1;

    for (let i=n-3; i>=0; i--) {
        arr[i] = arr[i+1] + arr[i+2];
    }

    return arr[0];
};