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
    
    let maxAvg = nums.slice(0,k).reduce((acc, el) => acc+=el) * 1.0 / k;
    let prevSum = maxAvg * k;
    let start = 1;
    const N = nums.length;

    // console.log(maxAvg);
    // console.log(prevSum);

    while (start + k <= N) {
        const newAvg = (prevSum - nums[start-1] + nums[start+k-1]) / k;
        // console.log(newAvg);
        maxAvg = Math.max(maxAvg, newAvg);
        prevSum = newAvg * k;        
        start++;
    }

    return maxAvg;
};