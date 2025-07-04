/*
ATTEMPT #4

just watched a YT video on how to implement the DP matrix solution

DP STRATEGY O(N^2):
    create a 2D array to track valid palindrome, and extend smaller valid palindromes
    dp[startingIndex][endingIndex]: True | False | null = null;

    substrings of size 1 are default True
    double for loop (i = start, j = end)
        curSubString = s.slice(i,j+1)
        curSubString is valid palindrome if
            s[i] === s[j]
            &&
            dp[i+1][j-1] == True

        if valid palindrome, 
            update global var for longest palindrome
    
*/

function longestPalindrome(s: string): string {
    let longestPal: string = s[0];

    // I didn't properly create the 2D array until min 22 😭
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
            else if (len > 2 && s[start] === s[end] && dpMatrix[start+1][end-1]) {
                dpMatrix[start][end] = true;
            }

            // update longest palindome 
            if (dpMatrix[start][end] && end-start+1 > longestPal.length) {
                longestPal = s.slice(start, end+1);
            }
        }
    }

    return longestPal;
};