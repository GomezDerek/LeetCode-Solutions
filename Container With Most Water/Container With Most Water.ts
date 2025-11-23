/**
GOAL: find the largest 2D area of water

STRATEGY:
    brute force: calc all areas and track the largest O(n^2) create all left/right combos

    optimized: 2 pointer / sliding window

 */

// attempt after reading hint 2: "Try to use two-pointers. Set one pointer to the left and one to the right of the array. Always move the pointer that points to the lower line."

function maxArea(height: number[]): number {
    let maxArea: number = 0;
    let l: number = 0;
    let r: number = height.length -1;

    while (l < r) {
        maxArea = Math.max(maxArea,
            (r-l) * Math.min(height[l], height[r])
        );

        if (height[l] < height[r]) l++;
        // else height[l] > height[r]
        else r--;
    }

    return maxArea;   
}

// 1st 2-pointer attempt
// function maxArea(height: number[]): number {
//     let maxArea: number = 0;
//     let l: number = 0;
//     let r: number = 1;

//     while (r < height.length) {
//         maxArea = Math.max(maxArea,
//             (r-l) * Math.min(height[l], height[r])
//         );

//         if (height[r] > height[l]) l = r;

//         r++;
//     }

//     return maxArea;
// };