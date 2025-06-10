/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    // strategy
    // iterating through s
    // identify k, encoded_string
    // add k*encoded_string to our decoded string
    
    // stack = ["aaa", "bcbcbc"]
    // stack = ["accaccacc", ]
    // k = 3, ec = a + prev == "a" + "cc" == "acc"

    /* 
    
    stack = ["3a", "cc" ];
    let k = ""
    let ec = ""
    for(ch in s) {
        if ec already exists, and we find a digit for k: then stack.push(k+ec); reset all
        if ch is a digit: k += ch
        if ch isn't [ or ]: ec += ch
        if (ch is ]) {
            prevTop = stack.top()
            decoded_string = k*ec;
            reset k = ""
            reset ec = ""
            stack.push(decoded_string)

            if prevTop begins with number:
                then 
        }

    }
    */


    /* 
    stack = [ 3[acc ]
    ec=acc
    k=3

    for (ch in s) {
        if ch is not ]
            stack.push(ch)
        else
            while (stack.length) {
                // find ec 
                ec += stack.pop() until stack.top() == [

                stack.pop() [
                
                // find k
                k += stack.pop() until stack.top() == NaN

                stack.push(k*ec);
                reset k & ec
                break;
            }
    }
    */

    const stack = [];

    for (const ch of s) {
        if (ch != "]") stack.push(ch);
        else {
            let encoded = "";
            let k = "";
            while (stack.length) {
                // build encoded
                while (stack[stack.length-1] != "[") {
                    encoded = stack.pop() + encoded;
                }

                stack.pop(); // pop [
            
                // build k
                while ( !isNaN(stack[stack.length-1]) ) {
                    k = stack.pop() + k;
                }

                const decoded = encoded.repeat(k);
                stack.push(decoded);
                k = "";
                encoded = "";
                break;
            }
        }
    }

    return stack.join("");
};