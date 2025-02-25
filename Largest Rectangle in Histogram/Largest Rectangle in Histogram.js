/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    /* Greg Hogg's strategy
    ** as we iterate through heights
    **  push to (height,index) to stack as heights increase
    **  when height decreases
    **      calculate areas going backwards
    **      and push to stack the indices' updated height for future calculations
    ** until we reach the end
    ** once we reach the end, calculate areas going backwards
    */
    
    const stack = [];
    let maxArea = 0;

    heights.forEach( (currHeight, i) => {
        
        let startIndex = i; // start of area interval
     
        // when height decreases
        // calculate previous areas and replace bars so they match shorter height & create a new interval
        while( stack.length && currHeight <= stack[stack.length-1].height) {
            const prevBar = stack.pop();

            maxArea = Math.max( maxArea, (i-prevBar.index)*prevBar.height );
            
            // start of area interval shifts left to replace prevBar
            startIndex = prevBar.index;
        }

        // push new area interval
        stack.push({height: currHeight, index: startIndex});
    });

    // calculate intervals' areas going backwards
    while(stack.length) {
        const interval = stack.pop();
        maxArea = Math.max(maxArea, (heights.length-interval.index)*interval.height );
    }

    return maxArea;
}