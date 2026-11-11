function isSubsequence(s: string, t: string): boolean {
    
    return recurse(0,0);

    function recurse(chI: number, tI: number): boolean {
        if (chI >= s.length) return true;
        else if (tI >= t.length) return false;

        if (s[chI] == t[tI]) {
            return recurse(++chI, ++tI);
        }
        else {
            return recurse(chI, ++tI);
        }
    }
};