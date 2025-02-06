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

    const valid = 'abcdefghijklmnopqrstuvwxyz0123456789';

    let lp = 0;
    let rp = s.length-1;

    while(lp < rp) {
        
        // increment left pointer until it reaches an alphanum char
        while ( !valid.includes(s[lp].toLowerCase()) && lp < rp ) {
            lp++;
        }

        // decrement right pointer until it reaches an alphanum char
        while ( !valid.includes(s[rp].toLowerCase()) && lp < rp ) {
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