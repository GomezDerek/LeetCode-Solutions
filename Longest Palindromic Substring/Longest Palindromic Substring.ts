/*
Goal: return the longest possible palindrome from the given letters

ASSUME: only lowercase English letters + digits 0-9

Notes:
    multiple valid answers
    middle letter must appear twice in input,
    but once in output
    s.length <= 1000
        O(n^2) = 10^6
        O(n^3) = 10^18
        O(2^n) = 2^1000 = 10^300
        therefore O(N^2) runtime or better is needed

Naive Strategy O(2n):
    record letter freq with hashmap O(n)
    iterate through hashmap, O(26)
        if letter freq is even,
            prepend output with half O(n)
            append output with other half O(n)

*/



// naive implementation
function longestPalindrome(s: string): string {

    if (s.length === 1) return s; // edge case

    // [0,8] for digits
    // [9,35] for letters
    const freq: string[] = new Array(36).fill(""); // 26 letters + 0-9 digits

    // fill freq array
    for (let i=0; i<s.length; i++) {
        const ch: string = s[i];
        
        // if 0-9
        if (!isNaN(Number(ch))) {
            freq[Number(ch)] += ch;
        }
        // else a-z
        else {
            freq[ getFreqIndex(ch) ] += ch;
        }
    }
    // console.log(freq);

    const frontHalf: string[] = [];
    // iterate through freq array
    freq.forEach( collection => {

        let ch: string;
        if (collection.length >= 1) ch = collection[0];
        
        // freq is at least 2
        if (collection.length >= 2) {

            // add half of total ch to beginning and then half to end of output
            for(let i=0; i<Math.floor(collection.length/2); i++) {
                frontHalf.push(ch);
            }
        }
    });

    // middle ch can't be duplicated in output
    let mid: string;
    if (frontHalf.length > 1) {
        mid = frontHalf.pop();
    }

    const outputArr: string[] = new Array( frontHalf.length*2 +1 );
    outputArr[ Math.floor(outputArr.length/2) ] = mid;
    
    // double and mirror frontHalf
    for (let i=0; i<frontHalf.length; i++) {
        // add to the beginning
        outputArr[i] = frontHalf[0];

        // add to the end
        outputArr[ outputArr.length-1-i ] = frontHalf[0];
    }

    return outputArr.join('');
};

// helper function
function getFreqIndex(ch: string): number {
    // ascii for "a" is 97
    // index for a is 9
    return ch.charCodeAt(0)-88;
}