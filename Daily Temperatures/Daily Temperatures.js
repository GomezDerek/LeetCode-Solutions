/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    /*
        STRATEGY O(n)
        keep a stack of temperatures that need a warmer day
        
        as we iterate from left -> right
        if currTemp > stack.top()
        output [top.index] = top.temp;
        continue until currTemp < top

        after iterating,
        all temps in stack never found a warmer day,
        ~~assign all their outputs to 0~~
        nvm they're already 0 if we initialize our output with .fill(0)
    */

    const output = new Array(temperatures.length).fill(0);

    const stack = [];

    for (let i=0; i<temperatures.length; i++) {
        const currTemp = temperatures[i];
        
        while (stack.length && currTemp > stack[stack.length-1].temp) {
            const top = stack.pop();
            output[top.index] = i-top.index;
        }

        stack.push({index: i, temp: currTemp});
    }

    return output;
};