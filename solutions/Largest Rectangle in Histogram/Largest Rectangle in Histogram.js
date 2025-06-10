/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    // strategy
    // as we iterate through the histogram
    // add bars to our stack to track horizontal rectangles
    // when the next bar is lower than prev
        // calc prev rectangles' areas before capping their height at our new bar height
    
    // when we finish our iteration, we can pop through the stack to calculate the rect areas


    const stack = [];
    let maxArea = 0;

    // iterate and create the monotonic stack
    heights.forEach( (currHeight, newIndex) => {
        let leftIndex = newIndex;
        
        // merge current bar with previous rects that are taller
        while( stack.length && currHeight <= stack[stack.length-1].height ) {
            const prevRect = stack.pop();

            // update maxArea if prevRect's area >
            maxArea = Math.max(maxArea, prevRect.height*(newIndex-prevRect.index));

            // cap rect at currHeight and merge rects
            leftIndex = prevRect.index;
        }

        // always add either our new bar, or a new merged rect
        stack.push({height: currHeight, index: leftIndex});
    });

    // pop through the monotonic stack
    while(stack.length) {
        const rect = stack.pop();
        maxArea = Math.max(maxArea, rect.height*(heights.length-rect.index)); // rect areas are always calculated until the end of the histogram chart
    }

    return maxArea;
};