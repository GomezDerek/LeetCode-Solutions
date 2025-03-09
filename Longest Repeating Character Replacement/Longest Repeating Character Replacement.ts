function characterReplacement(s: string, k: number): number {
    /* 
    Greg Hogg solution
    https://www.youtube.com/watch?v=tkNWKvxI3mU

    O(n)
    as we iterate from left -> right
    record the frequency of each letter

    ensure window is valid
    by ensuring that k< non most frequent character

    if not valid, iterate left and update freq
    
    update maxLength if window valid
    */

    let maxLength:number = 1;
    let maxCount:number = 0;
    let l:number = 0;
    const freqArr:number[] = new Array(26).fill(0);

    for (let r=0; r<s.length; r++) {

        // increment freqArr
        freqArr[ s.charCodeAt(r) -65 ] ++;
        maxCount = Math.max(maxCount, freqArr[ s.charCodeAt(r) -65 ]);

        // ensure window is valid
        while (k < (r-l+1 - maxCount)) {
            // if not valid, iterate left & update freq
            freqArr[ s.charCodeAt(l) -65 ] --;
            l++;
        }
        
        maxLength = Math.max(maxLength, r-l+1);

    }

    return maxLength;
};