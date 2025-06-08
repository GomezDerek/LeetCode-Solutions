function wordBreak(s: string, wordDict: string[]): boolean {
    const memo: { [key:number]: boolean } = {};

    function dfs(start: number): boolean {
        // console.log(start);
        if (memo[start] != undefined) return memo[start];
        else if ( start == s.length) return true;

        for (let i=0; i<wordDict.length; i++) {
            const word: string = wordDict[i];
            
            if (start + word.length > s.length) {
                continue;
            }

            // match
            else if (word === s.slice(start, start+word.length)) {
                // console.log("match!");
                const valid = dfs(start+word.length);
                if (valid) {
                    memo[start] = true;
                    return true;
                }
            }
        
            // else no match
            // continue
        }
        return false; // no matches found at all
    }

    return dfs(0);
}


/*
Conceded at 1h 50m and watched NC's video
https://www.youtube.com/watch?v=Sx9NNgInc3A

See commented code below for my foolhardy attempts

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


RESTRATEGIZE:
    s = "cars"
    wordDict = ["car", "ca", "rs"];
    memo = {
        s: false,
        rs: true,
        ca: true.
    }

                    cars
        car          ca             rs
         
         s             rs              ca
    car  ca  rs    car ca rs       car ca rs
     X    X   X     X   X  O        X   O  X

    O(wordDict.length ^ n)

    DP memo can fix run tiem?

                        leetcode
            leet                     code
            code                     leet
        leet    code              leet    code
          X       O                 O       X

    memo = {substr: segmented?}
    memo = {
        code: true,
        leet: true.

    }

    memo = {
        an: false,
        andog: false,
    }

                        catsanddog
        cats
        andog
        dog
        an
        X
    
*/
// function wordBreak(s: string, wordDict: string[]): boolean {
//     const memo: {[key: string]: boolean} = {};
    
//     function dfs(substr): boolean {
//         // base case
//         // memo exists
//         if ( memo[substr] != undefined ) {
//             return memo[substr];
//         }

//         for (let i=0; i<wordDict.length; i++) {
//             const word = wordDict[i];
//             console.log(substr, word);
            
//             // look for the word in the substr
//             let j: number = 0;
//             let k: number = word.length-1;

//             while (k < substr.length) {
//                 const windowStr = substr.slice(j,k+1);

//                 // match found!
//                 if (windowStr == word) {
//                     const newSubstr = substr.slice(0,j) + substr.slice(k+1);
//                     console.log(`${word} found in ${substr}! newSubstr: ${newSubstr}, length: ${newSubstr.length}`)
                    
//                     if (newSubstr.length === 0) {
//                         memo[substr] = true;
//                         return true;
//                     }
                    
//                     const valid = dfs(newSubstr);
//                     if (valid) {
//                         memo[substr] = true;
//                         return true;
//                     }
//                 }
//                 else {
//                     // slide window
//                     j++;
//                     k++;
//                 }
//             }
//         }

//         // no match 
//         memo[substr] = false;
//         return false; // no valid segmentation
//     }  

//     return dfs(s);
// };