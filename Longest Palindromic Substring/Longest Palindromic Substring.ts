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
    const dpMatrix: ( (boolean | null)[] )[] = new Array(s.length);
    for (let i=0; i<dpMatrix.length; i++) dpMatrix[i] = new Array(s.length).fill(null);

    // fill base cases where substrings are of size 1
    for (let i=0; i<s.length; i++) {
        dpMatrix[i][i] = true;
    }

    for (let start=0; start<s.length; start++) {

        // end index can only be after startIndex
        for (let end=start+1; end<s.length; end++) {

            // candidate substring.length ==  2
            if (start - end == 1 && s[start] === s[end]) {    
                dpMatrix[start][end] = true; // valid palindrome of size 2
            }

            // candidate substring.length == 2
            else if (s[start] == s[end]) {
                dpMatrix[start][end] = true; // valid palindrome extended!
            }
            // else {
            //     dpMatrix[start][end] = false;
            // }

            // update longest palindrome
            if (dpMatrix[start][end] && end-start+1 > longestPal.length) {
                longestPal = s.slice(start, end+1);
            }
        }
    }

    return longestPal;
};