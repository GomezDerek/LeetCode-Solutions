/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    let answer = "";

    for (let i=0; i<s.length; i++) {
        if ( s[i] == "*" ) answer = answer.slice(0,answer.length-1);
        else answer += s[i];
    }

    return answer;
};