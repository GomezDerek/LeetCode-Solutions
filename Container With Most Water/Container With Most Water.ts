/**
GOAL: find the largest 2D area of water

STRATEGY:
    brute force: calc all areas and track the largest O(n^2) create all left/right combos

    optimized: 2 pointer / sliding window

 */
 
 function maxArea(height: number[]): number {
    let maxArea: number = 0;
    let l: number = 0;
    let r: number = height.length -1;

    while (l < r) {
        maxArea = Math.max(maxArea,
            (r-l) * Math.min(height[l], height[r])
        );

        if (height[l] < height[r]) l++;
        else r--;
    }

    return maxArea;   
}