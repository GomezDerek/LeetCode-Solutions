/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // strategy
    /*
    store a hashmap for the current substring for O(1) access
    build the substring while iterating left -> right
    and reposition the substring start when the next ch is in the hashmap
    */

    let maxL = 0;
    const map = new Map();
    let start = 0;

    for (let i=0; i<s.length; i++) {

        // duplicate ch found
        if ( map.has( s[i]) ) {
            map.set(s[i], i);
            start = i;
        }

        // no duplicate, substring grows
        else {
            map.set(s[i], i);
            maxL = Math.max(maxL, i-start+1);
        }
    }

    return maxL;
};