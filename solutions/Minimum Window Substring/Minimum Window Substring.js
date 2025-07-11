/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    /* 
    O(N) STRATEGY
    as we iterate from left -> right
    build the window
    window is valid when distinctCharsRemaining == 0
    when the window, is valid: compare against current minSubstr

    when we already have a valid window && we find a ch from t:
    trim left elements to create the smallest valid window
    by trimming non-t chars, and extra t-chars

    t-chars are extra if count < 0. essential if count == 0
    */

    // edge case optimization
    if (s.length < t.length) return ""

    let minSubstr = [0, s.length-1];

    // create the frequency map
    const tFreq = {};
    for (ch of t) tFreq[ch] = tFreq[ch] ? tFreq[ch]+1 : 1;

    // l pointer
    let l=0;

    // track if we've found ALL instances of a ch
    let distinctChRemainder = Object.keys(tFreq).length;

    // iterate left to right
    for (let r=0; r<s.length; r++) {

        const ch = s[r];

        // ch in t found!
        if (tFreq[ch] != undefined) {
            tFreq[ch]--;

            // all instances of t-ch are now in window
            if (tFreq[ch]==0) distinctChRemainder--;
        }

        // separate if() to include the 1st iteration it becomes valid
        if (distinctChRemainder == 0) {
            shrinkWindow();
            minSubstr = r-l < minSubstr[1] - minSubstr[0] ? [l,r] : minSubstr;
        }
    }

    
    // helper function to shrink the window (left side)
    function shrinkWindow() {
        let ch = s[l];
        while (tFreq[ch] == undefined || tFreq[ch] < 0) {
            if ( tFreq[ch] < 0 ) {
                tFreq[ch]++;
            }
            ch = s[++l]; // increment l
        }
    }

    // if not all of ch in t were in s, return an empty string
    return distinctChRemainder == 0 ? s.slice(minSubstr[0],minSubstr[1]+1) : "";
};