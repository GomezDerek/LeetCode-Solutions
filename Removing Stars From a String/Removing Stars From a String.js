/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    const stack = [];

    for (let i=0; i<s.length; i++) {
        if ( s[i] == "*" ) stack.pop();
        else stack.push( s[i] );
    }

    let answer = "";
    for (let i=0; i<stack.length; i++) {
        answer += stack[i];
    }
    return answer;
};