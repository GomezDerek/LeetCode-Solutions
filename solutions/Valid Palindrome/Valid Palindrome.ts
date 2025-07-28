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

function isAlphaNum(ch: string): boolean {
    // is num
    if ( "0" <= ch && ch <= "9" ) return true;

    // is alpha
    if ( "a" <= ch && ch <= "z" ) return true;

    return false;
}