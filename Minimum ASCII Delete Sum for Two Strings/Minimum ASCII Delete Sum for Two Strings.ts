/**
GOAL: find a common substring with the smallest ASCII deletion

NOTES:
    - str lengths may be up to 1000
    - always lowercase letters
    - common substr doesn't have to be continuous

STRAT:
    1. find common substrs
    2. calc substr ascii delete sums
    3. pick lowest ascii delete sum
 
    perhaps a freq map for substrs
    but chs need to be in a specific order
    "sea" != "aes"

    if we convert strs to arrs, and delete from middle, can we safely join arr to str?
    answer: yes

    BCS: s1 & s2 are identical
    WCS: s1 & s2 share no chs

    s1:
        d, e, l, e, t, e,
        de, dl, de, dt, de,
        del, dee, det, dee, dle, dlt, dle, dte,
        delet, delee, dlet, dlee, dtee

    generating all word combo is O(n!)
    we can reduce combos with shared word frequencies
    calc pos ascii sums as we generate, 
        delete sum = og ascii sum - substr ascii sum

done planning at 21 min
 */

function minimumDeleteSum(s1: string, s2: string): number {
    const s1Freq: number[] = new Array(26).fill(0);
    const s2Freq: number[] = new Array(26).fill(0);

    let s1Score: number = 0;
    let s2Score: number = 0;

    const aCode = "a".charCodeAt(0);
    for (let i=0; i<s1.length; i++) {
        const chCode = s1.charCodeAt(i); 
        s1Freq[chCode - aCode]++;
        s1Score += chCode;
    }
    for (let i=0; i<s2.length; i++) {
        const chCode = s2.charCodeAt(i); 
        s2Freq[chCode - aCode]++;
        s2Score += chCode;
    }

    // {substr: ascii sum}
    const s1substrs: {[key: string]: number} = {};
    const s2substrs: {[key: string]: number} = {};

    // generate all substrs
    const curSubstr: string[] = [];
    let curScore = 0;
    genSubstrs(s1, 0);
    genSubstrs(s2, 0);

    // find the min ascii delete sum
    let ans = Infinity;
    for (const s1substr in s1substrs) {
        if (s2substrs[s1substr]) {
            const deleteSum: number = (s1Score - s1substrs[s1substr]) + (s2Score - s2substrs[s1substr]);
            ans = Math.min(ans, deleteSum);
        }
    }
    return ans;

    // hoisted helper
    function genSubstrs(ogstr: string, i: number): void {
        // base case(s)
        if (i >= ogstr.length) {
            if (ogstr === s1) {
                s1substrs[curSubstr.join("")] = curScore;
            }
            else if (ogstr === s2) {
                s2substrs[curSubstr.join("")] = curScore;
            } 
            return;
        }

        // recurse w/o ogstr[i]
        genSubstrs(ogstr, i+1);

        // recurse w ogstr[i]
        curSubstr.push(ogstr[i]);
        curScore += ogstr.charCodeAt(i);

        genSubstrs(ogstr, i+1);
        
        curSubstr.pop();
        curScore -= ogstr.charCodeAt(i);
    }
};