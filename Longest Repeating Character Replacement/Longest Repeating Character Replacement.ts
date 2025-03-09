function characterReplacement(s: string, k: number): number {
    /* 
    O(n^2) solution
    as we iterate from left -> right
    record the starting point
    create the longest substring going to the right as possible
    do the same for the left
    */

    let maxLength: number = 1;

    for (let i=0; i<s.length; i++) {
        let subsRemaining:number = k;
        let j:number = i+1;

        // expand right
        while ( (subsRemaining > 0 || s[j] == s[i]) && j<s.length) {
            if (s[j] != s[i]) subsRemaining--;
            maxLength = Math.max(maxLength, j-i+1);
            j++;
        }


        // expand left
        let l:number = i-1;
        while( (subsRemaining > 0 || s[l] == s[i]) && l>=0) {
            if (s[i] != s[l]) subsRemaining--;
            maxLength = Math.max(maxLength, j-l);
            l--;
        }
    }

    return maxLength;
};