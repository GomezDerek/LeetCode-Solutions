/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    // backward iteration with descending monotonic stack
    const stack = [];
    const answer = new Array(temperatures.length);

    // because we know last element is ALWAYS 0
    answer[answer.length - 1] = 0;
    stack.push( temperatures.length-1 );

    for (let i = temperatures.length - 2; i >= 0; i--) {
        let stackIndex = stack.length - 1;
        let stackVal = temperatures[stack[stackIndex]];

        let daysUntilHotter = 0;

        if (!(stackVal <= temperatures[i])) { // we found a temperature that is hotter than current
            daysUntilHotter = stack[stackIndex] - i;
        }
        else {
            while (stack.length) { // while stack has something
                stack.pop();

                if(!stack.length) {
                    break;
                }

                // recalculate after pop()
                stackIndex = stack.length - 1;
                stackVal = temperatures[stack[stackIndex]];

                if (!(stackVal <= temperatures[i])) { // we found a temperature that is hotter than current
                    daysUntilHotter = stack[stackIndex] - i;
                    break;
                }
            }
        }

        answer[i] = daysUntilHotter;
        stack.push(i);

        // if !(stackTopVal < currVal)
        //      answer[i] = stackIndex - i;
        // }
        // else {
        //  stack.pop()
        //  compare the new stackTopVal with currVal
        // if stack is empty, then
        // answer[i] = 0;
    }

    return answer;
};