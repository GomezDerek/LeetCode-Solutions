function characterReplacement(s: string, k: number): number {
    /* 
    as we iterate from left -> right
    record the starting point
    try to create as long a string as possible with k substitutions
    O(n^2)

    */

    let maxLength: number = 1;

    for (let i=0; i<s.length; i++) {
        let subsRemaining:number = k;
        let j=i+1;
        while (subsRemaining > 0 || s[j] == s[i]) {
            if (s[j] != s[i]) subsRemaining--;
            maxLength = Math.max(maxLength, j-i+1);
            j++;
        }
    }

    return maxLength;
};