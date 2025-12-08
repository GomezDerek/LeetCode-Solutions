function maxArea(height: number[]): number {
    let answer: number = 0;

    let l: number = 0;
    let r: number = height.length-1;

    while (l < r) {
        const curArea: number = (r-l)*Math.min(height[l], height[r]);
        answer = Math.max(answer, curArea);

        if (height[l] < height[r]) l++;
        else r--;
    }

    return answer;
};