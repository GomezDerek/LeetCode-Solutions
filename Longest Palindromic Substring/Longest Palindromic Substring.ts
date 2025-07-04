function longestPalindrome(s: string): string {
    
    // starting & ending indices for longest palindrome
    const maxPal: [number, number] = [0,0];

    const dpMatrix: (boolean | null)[][] = new Array(s.length);
    for (let i=0; i<dpMatrix.length; i++) dpMatrix[i] = new Array(s.length).fill(null);

    // fill base cases where substrings are of size 1
    for (let i=0; i<s.length; i++) {
        dpMatrix[i][i] = true;
    }

    // search for palindromes by size, starting with size 2, then iterating to full size of s
    for (let len=2; len<=s.length; len++) {

        // iterate all possible starting indices for the given size
        for (let start=0; start<s.length-len+1; start++) {
            const end: number = start+len-1;
            
            // check for valid palindromes
            if ( len === 2 && s[start] === s[end] ) {
                dpMatrix[start][end] = true;
            }
            else if ( len > 2 && s[start] === s[end] && dpMatrix[start+1][end-1] ) {
                dpMatrix[start][end] = true;
            }

            // update longest palindome 
            if (dpMatrix[start][end] && end-start+1 > maxPal[1]-maxPal[0]+1) {
                maxPal[0] = start;
                maxPal[1] = end;
            }
        }
    }

    return s.slice(maxPal[0], maxPal[1]+1);
};