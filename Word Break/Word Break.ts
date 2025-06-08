/*
Main idea:
    we are checking if s can be split up into the words
    included in wordDict

NOTES:
    no remainders allowed in s after word dict is subtracted


ASSUME:
    s = "aaaaaaaaaa"
    wordDict = ["a"];
    true

    s = "leecodet"
    wordDict = ["code","leet"]

NAIVE SOLUTION:
    O(N^2)
    iterate through wordDict
        if word exists in s,
            splice it out of s
    
    if no remainder in s, return true
    else return false

OPTIMIZED STRATEGY:
    use slidign window to match strings

*/
function wordBreak(s: string, wordDict: string[]): boolean {
    // iterate through wordDict
    for (let i=0; i<wordDict.length; i++) {
        const word = wordDict[i];
        // console.log(word);
        
        // if word exists in s
        // use sliding window technique
        let j: number = 0;
        let k: number = 0;
        while (k < s.length) { // while pointer 2 in bounds
            // console.log(j,k);
            // until substr is same length as word
            if ( k-j < word.length-1) {
                k++;
                continue;
            }

            // once we have a full substring
            const substr: string = s.slice(j, k+1); // ! optimize this
            // console.log(`\t${substr}`)
            
            // compare word to substr
            
            if (substr === word) {
                // console.log("\tmatch!");
                s = s.slice(0,j) + s.slice(k+1);
                // console.log(`\tnew s: ${s}`);
                
                // adjust pointers after splice
                j = k - (k-j);
                k = j;
            }

            // slide the window
            else {
                j++;
                k++;
            }
        }

    }
    
    // if no remainder in s, return true
    return s.length == 0;
};