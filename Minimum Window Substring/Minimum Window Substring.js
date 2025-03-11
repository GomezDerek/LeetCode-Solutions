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

    let minSubstr = s;

    const tFreq = {};
    for (ch of t) tFreq[ch] = tFreq[ch] ? tFreq[ch]+1 : 1;

    let l=0;
    let distinctChRemainder = Object.keys(tFreq).length;
    // iterate left to right
    for (let r=0; r<s.length; r++) {

        const ch = s[r];
        // t-chars still absent from window
        if (distinctChRemainder>0) {
            if (tFreq[ch] != undefined) { // t-ch found
                tFreq[ch]--;
                if (tFreq[ch]==0) distinctChRemainder--; // all instances of t-ch are now in window
            }
        }

        // all t-chars in window!
        else {
            // extra t-ch found
            if (tFreq[ch] != undefined) {
                tFreq[ch]--;
                
                // shrink the window!
                let lCh = s[l];
                while (tFreq[lCh] == undefined || tFreq[lCh] < 0) {
                    if ( tFreq[lCh] < 0 ) {
                        tFreq[lCh]++;
                    }
                    lCh = s[++l]; // increment l
                }
            }
        }

        // separate if() to include the 1st iteration it becomes valid
        if (distinctChRemainder == 0) {
            minSubstr = r-l+1 < minSubstr.length ? s.slice(l,r+1) : minSubstr;
        }
    }

    // if not all of ch in t were in s, return empty string
    return distinctChRemainder == 0 ? minSubstr : "";
};