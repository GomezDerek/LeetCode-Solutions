/**
STRATEGY:
    this can be solved with a prefix + postfix solution
    use an array for prefix and postfix
    productExceptSelf(n) = prefix(n-1) * postfix(n+1)
 */

function productExceptSelf(nums: number[]): number[] {
    const N = nums.length;
    const pre: number[] = new Array(N);
    const post: number[] = new Array(N);

    pre[0] = 1;
    for (let i=1; i<N; i++) {
        pre[i] = pre[i-1] * nums[i-1];
    }

    post[N-1] = 1;
    for (let i=N-2; i>=0; i--) {
        post[i] = post[i+1] * nums[i+1];
    }

    const res: number[] = new Array(N);
    for (let i=0; i<N; i++) {
        res[i] = pre[i] * post[i];
    }

    return res;
};