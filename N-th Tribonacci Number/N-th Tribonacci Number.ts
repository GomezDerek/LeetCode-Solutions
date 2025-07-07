/*
t_0 = 0
t_1 = 1
t_2 = 1
t_3 = t_1 + t_2 + t_0;
t_4 = t_1 + t_2 + t_3;

n = 4

t_4 = 1 + 1 + t_3
    = 1 + 1 + (t_0 + t_1 + t_2)
    = 1 + 1 + (0 + 1      + 1)
    = 1 + 1 + 2
    = 4

BRUTE FORCE: recurse(i) = recurse(i-1) + recurse(i-2) + recurse(i-3) O(n^3)

Optimized:
    use an array to store the rsults for each n
    array[n] = ouput
    array[n=0, n=1, n=2]
    solve n=3, n=4, up to given n
    iterate from 3 to n
        array[i] = array[i-1] + arr[i-2] + arr[i-3]
        

    return array[n]

    Time: O(n)
    Space: O(n)
*/

function tribonacci(n: number): number {
    const arr: number[] = [0, 1, 1];

    for (let i=3; i<=n; i++) {
        arr.push( arr[i-1] + arr[i-2] + arr[i-3] );
    }

    return arr[n];
};