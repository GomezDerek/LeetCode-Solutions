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

    let maxLength: number = 1;
    let l:number = 0;
    const freqMap: { [key:string]: number } = {};

    for (let r=0; r<s.length; r++) {

        // increment freqMap
        freqMap[s[r]] = freqMap[s[r]] == undefined ? 1 : freqMap[s[r]]+1;

        // ensure window is valid
        const maxFreqCount:number = Math.max(...Object.values(freqMap));

        // if not valid, iterate left & update freq
        while (k < (r-l+1 - maxFreqCount)) {
            freqMap[s[l]] = freqMap[s[l]]-1;
            l++;
        }
        
        maxLength = Math.max(maxLength, r-l+1);

    }

    return maxLength;
};