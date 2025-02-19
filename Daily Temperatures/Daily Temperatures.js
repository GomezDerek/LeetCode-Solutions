/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {

    // forward iteration with ascending monotonic stack
    // stack stores [i, temp]
    const stack = [];
    const answer = new Array(temperatures.length).fill(0);

    for(let i=0; i<temperatures.length; i++) {
        const currTemp = temperatures[i];

        // while stack not empty
        while(stack.length) {
            // const stackTop = stack[stack.length-1];
            // const stackTemp = temperatures[stackTop];
            const [stackIndex, stackTemp] = stack[stack.length-1];

            // currTemp is hotter than stack top's temperature
            if( currTemp > stackTemp ) {
                answer[stackIndex] = i - stackIndex;
                // answer[stackTop] = i - stackTop;
                stack.pop(); // remove stackTemp from stack
            }
            else break; // no chance currTemp can be hotter than the rest of the stack
        }

        // always add currTempIndex to stack
        stack.push([i, currTemp]);
    }

    return answer;
};