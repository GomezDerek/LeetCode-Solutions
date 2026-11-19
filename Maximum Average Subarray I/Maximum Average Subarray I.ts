/**
    strategy:
        find the window with the highest avg val
        calc window at index = 0
        and iterate window by 1 until you reach the end
        keep track of highestt avg
        calc eavg of each window

 */

function findMaxAverage(nums: number[], k: number): number {
    // initialize with 1st window
    let maxAvg = 0.0;
    for (let i=0; i<k; i++) maxAvg += nums[i];
    maxAvg = maxAvg / k;

    let prevSum = maxAvg * k;
    let start = 1;

    while (start + k <= nums.length) {
        const newAvg = (prevSum - nums[start-1] + nums[start+k-1]) / k;
        maxAvg = Math.max(maxAvg, newAvg);
        prevSum = newAvg * k;        
        start++;
    }

    return maxAvg;
};