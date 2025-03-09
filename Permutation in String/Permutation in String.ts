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

    const ogFreqMap:{[key:string]:number} = {};
    for (const ch of s1) { 
        ogFreqMap[ch] = ogFreqMap[ch] == undefined ? 1 : ogFreqMap[ch]+1;
    }
    // console.log(ogFreqMap);

    let remFreqMap:{[key:string]:number} = {...ogFreqMap};

    let l:number = 0;
    for (let i=0; i<s2.length; i++) {
        const ch = s2[i];
        // console.log(i, remFreqMap);

        // ch not in s1
        if (remFreqMap[ch] == undefined) {
            // reset freqMap & l pointer
            remFreqMap = {...ogFreqMap};
            l=i;
        }

        // extra ch found
        else if (remFreqMap[ch] == 0) {
            // shift l to exclude first ch
            while(s2[l] != ch) {
                remFreqMap[s2[l]]++;
                l++;
            }
            l++;
        }

        // ch is in s1
        else if (remFreqMap[ch] > 0) {
            // decrement
            remFreqMap[ch]--;
            
            // if reaches 0
            if ( remFreqMap[ch]==0 && Object.values(remFreqMap).every(freq => freq==0) ) {
                // console.log(i);
                return true;
            }
        }

    }

    // no permutations found
    return false;

};