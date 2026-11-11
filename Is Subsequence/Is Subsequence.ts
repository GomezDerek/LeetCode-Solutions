/**
STRATEGY:
    iterate to find char 0
    from char 0, look for char 2
    etc.

    if next char not found, then
    search for next instance of prev char

    recursive

    return false if next or prev char not found


 */

function isSubsequence(s: string, t: string): boolean {
    
    return recurse(0,0);

    function recurse(chI: number, tI: number): boolean {
        // base case
        // console.log(s[chI]);
        if (chI >= s.length) return true;
        else if (tI >= t.length) return false;

        // ops
        if (s[chI] == t[tI]) {
            // console.log(s[chI], tI)
            return recurse(++chI, ++tI);
        }
        else {
            return recurse(chI, ++tI);
        }
    }
};