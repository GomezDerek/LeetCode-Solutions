/*
ATTEMPT #3

just watched multiple videos on this problem. I'm ready! 

O(N^3) STRATEGY:
    from each value, expand in both directions to try to create longest palindrome possible

    maxPal = ""
    for each val
        l = i-1
        r = i+1
        while (val[l] == val[r])
            if r-l > maxPal.len
                maxPal = .slice(l,r+1)
            l--;
            r++;
*/

function longestPalindrome(s: string): string {
    let maxPal: string = "";

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
            if (r-l+1 > maxPal.length) maxPal = s.slice(l,r+1);
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
            if (r-l+1 > maxPal.length) maxPal = s.slice(l,r+1);
            l--;
            r++;
        }
    }

    return maxPal;
};

// time: O(n^3)
// space: O(n)