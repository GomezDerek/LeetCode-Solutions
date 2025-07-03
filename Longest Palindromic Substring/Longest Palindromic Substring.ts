/*
attempt #2
(misunderstood the problem for the 1st attempt)

Goal: find the longest CONTINUOUS AND UNBROKEN substring that forms a palindrome

NAIVE STRATEGY:
    create every possible substring and record which is longest palindrome

    simulation for "babad":
        2: "ba", "ab", "ba", "ad"
        3: "bab", "aba", "bad"
        4: "baba", "abad"
        5: "babad"
    
    O(2^N)?

OPTIMIZED DP STRATEGY:
    {startIndex: endIndex for longest palindrome}
    hashMap = {};

    work backwards
    e.g. longest palindrome from last index is 1
    
    from each index, attempt a palindrome
        if next index is palindrome,
            check if (i+1)'s palindrome can be extended on both sides

    O(N^2)?

*/

function longestPalindrome(s: string): string {
    // last[startIndex] = length of palindrome
    const palLen: number[] = new Array(s.length).fill(1);
    let longestPal: number = s.length-1;

    // iterate backwards through s
    for (let i=s.length-2; i>=0; i--) {

        // check if we can extend next index's palindrome

        // 0121
        // abaa
        // if next index doesn't have palindrome 
        if (palLen[i+1] === 1) {
            
            // len2 palindrome?
            if (s[i] === s[i+1]) palLen[i] = 2;

            // len3 palindrome?
            if ( s[i+2] != undefined && s[i+2] === s[i] ) palLen[i] = 3;
        }

        // else next index has palindrome > 1
        else {
            // attempt to expand palindrome by 1
            const nextPalLen: number = palLen[i+1];
            const newEndIndex: number = i+nextPalLen+1;

            // if start matches end
            if (s[i] === s[newEndIndex]) {
                palLen[i] = 1 + palLen[i+1] + 1; // new palindrome!
            }

            else {
                // check if we can add to a single char palindrome > 1
                // ex: "ccccc"
                let extendable: boolean = true;
                for (let j=i; j<=i+palLen[i+1]; j++) {
                    if (s[i] != s[j]) {
                        extendable = false;
                        break;
                    }
                }
                if (extendable) palLen[i] = palLen[i+1] +1;
            }
        }

        // update index for start of longest palindrome
        longestPal = palLen[longestPal] > palLen[i]
        ? longestPal
        : i;

    }

    return s.slice(longestPal, longestPal + palLen[longestPal]);
};

// space: O(n)
// time:  O(n)