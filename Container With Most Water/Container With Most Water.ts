/**
GOAL: find the largest 2D area of water

STRATEGY:
    calc all areas and track the largest O(n^2) create all left/right combos

    optimized: 2 pointer / sliding window

 */

function maxArea(height: number[]): number {
    let maxArea: number = 0;

    for (let l=0; l<height.length; l++) {
        for (let r=1; r<height.length; r++) {
            maxArea = Math.max(maxArea, 
                (r-l) * Math.min(height[l], height[r])
            );
        }
    }

    return maxArea;
};