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


    // HELPER FUNCTION
    function isAlphaNum(ch: string): boolean {
        // is num
        if ( "0".charCodeAt(0) <= ch.charCodeAt(0) && ch.charCodeAt(0) <= "9".charCodeAt(0) ) return true;

        // is alpha
        if ( "a".charCodeAt(0) <= ch.charCodeAt(0) && ch.charCodeAt(0) <= "z".charCodeAt(0)) return true;

        return false;
    }
};

