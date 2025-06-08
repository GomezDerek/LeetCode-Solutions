/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    // strategy
    // identify tallest heights and calculate water volume

    // brute force solution O(n^2)
    // calculate all possible volumes

    // optimized approach O(n)
    // two pointer solution, [0] & [length]
    // move pointers to center until max volume is found

    let l = 0;
    let r = height.length -1;

    let maxVol = 0;
    
    while(l<r) {

        let shorter;
        if(Math.min(height[l], height[r]) == height[l]) {
            shorter = l
        }
        else {
            shorter = r;
        }

        // h X w
        maxVol = Math.max(maxVol, height[shorter] * (r-l));

        if(shorter == l) {
            l++;
        }
        else if (shorter == r) {
            r--;
        }
    }

    return maxVol;
};