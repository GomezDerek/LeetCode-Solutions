/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    /* 
    O(n^2) STRATEGY
    for every ch in s
    try to build a window that has all of the characters in T
    */

    

    let minSubstr = s;

    const tFreq = {};
    for (ch of t) tFreq[ch] = tFreq[ch] == undefined ? 1 : tFreq[ch]+1;

    let chRemaining = {...tFreq};

    // edge cases
    // substr doesn't exist because s.length < t.length
    if (s.length < t.length) return "";

    // s doesn't contain all of t's letters, so substr doesn't exist
    
    // for every ch in s
    for (let i=0; i<s.length; i++) {
        let distinctChLeft = Object.keys(chRemaining).length;
        
        // for every remaining ch in s
        for (let j=i; j<s.length; j++) {
            const ch = s[j];
            if (chRemaining[ch] > 0) { // && != undefined
                chRemaining[ch]--; // decrement

                if (chRemaining[ch]==0) distinctChLeft--;
            }

            // first valid substring found!
            if (distinctChLeft == 0) {
                // replace minSubstr if substr is shorter
                const substr = s.slice(i,j+1);
                minSubstr = substr.length < minSubstr.length ? substr : minSubstr;
            }
        }
        chRemaining = {...tFreq}; // reset the checklist
    }

    return minSubstr;
};