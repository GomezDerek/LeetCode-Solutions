function search(nums: number[], target: number): number {
    let [l,r] = [0, nums.length-1]
    
    let m: number
    while (l <= r) {
        m = Math.floor( (l+r)/2 )
        if (nums[m] === target) return m
        else if (nums[m] > target) r = m-1
        else if (nums[m] < target) l = m+1
    }

    return -1 // target DNE
};