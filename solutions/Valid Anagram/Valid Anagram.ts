function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false; // can't be anagrams if not same length

    const sFreq: number[] = new Array(26).fill(0);
    for (let i=0; i<s.length; i++) {
        sFreq[ s[i].charCodeAt(0) - "a".charCodeAt(0) ]++;
    }

    for (let i=0; i<t.length; i++) {
        sFreq[ t[i].charCodeAt(0) - "a".charCodeAt(0) ]--;
    }

    for (let i=0; i<26; i++) {
        if ( sFreq[i] > 0 ) return false;
    }

    return true;
};