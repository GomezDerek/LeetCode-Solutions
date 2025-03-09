function checkInclusion(s1: string, s2: string): boolean {
  /*
    strategy O(n)
    create a freqMap of s1

    iterate through s2 left -> right
    
    if ch in s2 is in freqMap
        freqMap[s[2]]--

    else reset freqMap and leftPointer

    true when all values of freqMap reach 0
  */  

    // create the frequency maps
    const ogFreqMap:{[key:string]:number} = {};
    for (const ch of s1) { 
        ogFreqMap[ch] = ogFreqMap[ch] == undefined ? 1 : ogFreqMap[ch]+1;
    }

    let remFreqMap:{[key:string]:number} = {...ogFreqMap};

    let l:number = 0;
    for (let r=0; r<s2.length; r++) {
        const ch = s2[r];

        // ch not in s1
        if (remFreqMap[ch] == undefined) {
            // reset freqMap & l pointer
            remFreqMap = {...ogFreqMap};
            l=r+1; // move l just after i, because i is invalid
        }

        // extra ch found
        else if (remFreqMap[ch] == 0) {
            // shift l to exclude first ch
            while(s2[l] != ch) {
                remFreqMap[s2[l]]++;
                l++;
            }
            
            // l is at ch, so move pointer just after it
            // ch count is the same
            l++;
        }

        // ch is in s1
        else if (remFreqMap[ch] > 0) {
            // decrement
            remFreqMap[ch]--;
            
            // if reaches 0
            if ( r-l+1 == s1.length && Object.values(remFreqMap).every(freq => freq==0) ) {
                return true;
            }
        }

    }

    // no permutations found
    return false;

};