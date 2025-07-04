function longestPalindrome(s: string): string {

    let maxPal: {[key: string]: number} = {l: 0, r: 0};

    function getMaxPalLen(): number {
        return maxPal.r - maxPal.l +1;
    }

    let l: number;
    let r: number;
    for (let i=0; i<s.length; i++) {
        
        // check for odd len palindromes
        l = i-1;
        r = i+1;
        while (
            l >=0            // l in bounds
            && r < s.length  // r in bounds
            && s[l] === s[r] // l & r vals match
        ) {
            if (r-l+1 > getMaxPalLen()) maxPal = {l: l, r: r};
            l--;
            r++;
        }

        // check for even len palindromes
        l = i;
        r = i+1;
        while (
            l >=0            // l in bounds
            && r < s.length  // r in bounds
            && s[l] === s[r] // l & r vals match 
        ) {
            if (r-l+1 > getMaxPalLen()) maxPal = {l: l, r: r};
            l--;
            r++;
        }
    }

    return s.slice(maxPal.l, maxPal.r+1)
};

// time: O(n^3)
// space: O(n)