/**
    STRATEGY:
        create frequency lists for each word's letters
        if any frequency doesn't match,
            return false, they're not anagrams
 */

function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false; // can't be anagrams if not same length

    // create freq list for s
    // use unicode for indices
    const sFreq: number[] = new Array(26).fill(0);
    for (let i=0; i<s.length; i++) {
        sFreq[ s[i].charCodeAt(0) - "a".charCodeAt(0) ]++;
    }

    for (let i=0; i<t.length; i++) {
        sFreq[ t[i].charCodeAt(0) - "a".charCodeAt(0) ]--;
    }

    // all freqs should be 0
    for (const freq of sFreq) {
        if (freq > 0) return false;
    }

    return true;
};