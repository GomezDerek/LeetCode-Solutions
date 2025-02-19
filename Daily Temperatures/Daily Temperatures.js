/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {

    // forward iteration with ascending monotonic stack
    const stack = [];
    const answer = new Array(temperatures.length).fill(0);

    for(let i=0; i<temperatures.length; i++) {

        // while stack not empty
        while(stack.length) {

            // currTemp is hotter than stack top's temperature
            if( temperatures[i] > temperatures[ stack[stack.length-1] ] ) {
                answer[ stack[stack.length-1] ] = i - stack.pop();
            }
            else break; // no chance currTemp can be hotter than the rest of the stack
        }

        // always add currTempIndex to stack
        stack.push(i);
    }

    return answer;
};