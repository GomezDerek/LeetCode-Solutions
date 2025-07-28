/**
    BRUTE FORCE:
        iterate through every str simultaneously
            until mismatch

        runtime: O(shortest str * # of str)
        memory:  O(1)
 */

function longestCommonPrefix(strs: string[]): string {
    
    let i=0;

    let done = false;
    while (i<strs[0].length-1 && !done) {
        const ch: string = strs[0][i];

        for (const str of strs) {
            if (ch !== str[i]) {
                done = true;
                break;
            }
        }

        if (!done) i++;
    } 

    return strs[0].slice(0,i);
};