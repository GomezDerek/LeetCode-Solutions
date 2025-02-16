/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const pairs = {
        '(': ')',
        '[': ']',
        '{': '}'
    }

    const stack = [];

    // iterate through the string s
    for(const ch of s) {

        // ch is an opener
        if ( pairs[ch] ) stack.push(ch);

        // ch is a closer
        else if ( ch != pairs[ stack.pop() ] ) return false; // closer doesn't match opener!
    }

    // s is valid 😁
    return true;  
};