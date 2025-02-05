/**
 * @param {string} s
 * @return {boolean}
        'a': true,
 */
var isPalindrome = function(s) {
    // strategy
    // clean s to only include alphanumeric chars
    // compare s[0] with s[-1] and so on and so forth
    const cleaned = [];

    const valid = {
        'a': true,
        'b': true,
        'c': true,
        'd': true,
        'e': true,
        'f': true,
        'g': true,
        'h': true,
        'i': true,
        'j': true,
        'k': true,
        'l': true,
        'm': true,
        'n': true,
        'o': true,
        'p': true,
        'q': true,
        'r': true,
        's': true,
        't': true,
        'u': true,
        'v': true,
        'w': true,
        'x': true,
        'y': true,
        'z': true,
        '1': true,
        '2': true,
        '3': true,
        '4': true,
        '5': true,
        '6': true,
        '7': true,
        '8': true,
        '9': true,
        '0': true,
    }

    for(let i=0; i<s.length; i++) {
        const ch = s[i].toLowerCase();
        if ( valid[ch] ) {
            cleaned.push(ch);
        }
    }

    for(let i=0; i<Math.floor(cleaned.length/2); i++) {
        if (cleaned[i] != cleaned[cleaned.length-1-i]) return false;        
    }

    // palindrome has passed all checks
    return true;
};