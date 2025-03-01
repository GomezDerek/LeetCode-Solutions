/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    // inspired by the Neetcode solution

    const stack = [];

    // iterate through input
    for(const ch of s) {

        // if ch is not ], add it to the stack
        if (ch != "]") stack.push(ch);
        
        // ch is ]
        else {
            // build substr
            let substr = "";
            while (stack.length && stack[stack.length-1] != "[") {
                substr = stack.pop() + substr;
            }
            stack.pop(); // pop "["

            // build k
            let k = "";
            while (stack.length && !isNaN(stack[stack.length-1])) {
                k = stack.pop() + k;
            }

            substr = substr.repeat( parseInt(k) );
            stack.push(substr);
        }
    }

    // combine stack elements
    return stack.reduce( (acc,val) => acc+val, "");
};