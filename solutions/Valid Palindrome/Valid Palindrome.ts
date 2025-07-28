function isPalindrome(s: string): boolean {
    // sanitize the string and store in an array
    const alphaNums: string[] = [];

    for (const ch of s) {
        if (isAlphaNum(ch.toLowerCase())) alphaNums.push(ch.toLowerCase());
    }

    // check if it's a palindrome!
    for (let i=0; i<=alphaNums.length/2; i++) {
        const lVal: string = alphaNums[i];
        const rVal: string = alphaNums[alphaNums.length-1-i];
        if (lVal !== rVal) return false;
    }
    
    // string has survived all palindrome checks
    return true;

};

// HELPER FUNCTION
const code_a: number = "a".charCodeAt(0);
const code_z: number = "z".charCodeAt(0);
const code_0: number = "0".charCodeAt(0);
const code_9: number = "9".charCodeAt(0);

function isAlphaNum(ch: string): boolean {
    const chCode: number = ch.charCodeAt(0);
    // is num
    if ( code_0 <= chCode && chCode <= code_9 ) return true;

    // is alpha
    if ( code_a <= chCode && chCode <= code_z) return true;

    return false;
}