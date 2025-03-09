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

    for (let i=0; i<s2.length; i++) {
        const ch = s2[i];
        // console.log(i, remFreqMap);
        if (remFreqMap[ch] == undefined || remFreqMap[ch] < 0) {
            // reset freqMap
            remFreqMap = {...ogFreqMap};
        }

        else if (remFreqMap[ch] > 0) {
            // decrement
            remFreqMap[ch]--;
            
            // if reaches 0
            if ( remFreqMap[ch]==0 && Object.values(remFreqMap).every(freq => freq==0) ) return true;
        }

    }

    // no permutations found
    return false;

    // get the index value for remFreqArr
    // function getIndex(ch:string):number {
    //     return ch.charCodeAt(0) - 'a'.charCodeAt(0);
    // }

    // create the frequency arrays
    // const ogFreqArr:number[] = new Array(26).fill(0); // ascii val [a,z]
    // for (const ch of s1) {ogFreqArr[getIndex(ch)]++};

    // let remFreqArr:number[] = ogFreqArr.slice(0);
    // console.log(remFreqArr);

    // create the frequency maps

    // for (let r=0; r<s2.length; r++) {
    //     const ch = s2[r];
    //     const chI = getIndex(ch);

    //     // ch of s2 not in freqArr
    //     if (remFreqArr[chI] == undefined) {
    //         // reset freqArr
    //         remFreqArr = ogFreqArr.slice(0);
    //         console.log(`reset at ${r},${ch}`);
    //         console.log(remFreqArr);
    //     }

    //     // if freq has reached 0
    //     else if ( remFreqArr[chI] <= 0 ) {
    //         console.log(`0 ${ch}`);
    //         // permutation found?
    //         if ( remFreqArr.every(freq => freq==0) ) return true;
    //         else 
    //     }

    //     // decrement ch freq
    //     else if (remFreqArr[chI] > 0){
    //         remFreqArr[chI]--;
    //     }
    // }

    // // no permutation found
    // return false;
};