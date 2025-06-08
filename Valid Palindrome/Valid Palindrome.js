/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    
    // 2 pointer strategy
    // set a pointer at the beginning and end of the string
    // both pointers move towards center
    // pointers stop at alphanums, then compare
    // repeat til pointers meet or pass

    // const valid = 'abcdefghijklmnopqrstuvwxyz0123456789';
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

    let lp = 0;
    let rp = s.length-1;

    while(lp < rp) {
        
        // increment left pointer until it reaches an alphanum char
        while ( !valid[ s[lp].toLowerCase() ] && lp < rp ) {
            lp++;
        }

        // decrement right pointer until it reaches an alphanum char
        while ( !valid[ s[rp].toLowerCase() ] && lp < rp ) {
            rp--;
        }

        // both pointers should be at alphanum chars
        if ( s[lp].toLowerCase() != s[rp].toLowerCase()) {
            return false;
        }
        lp++;
        rp--;
    }

    // s has passed all comparisons
    return true;
};