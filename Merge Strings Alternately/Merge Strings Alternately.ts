/**
strategy:
    i = longestWord.length
    iterate:
        add to res from word1
        add to res from word2
 */

function mergeAlternately(word1: string, word2: string): string {
    const resArr: string[] = [];

    const maxLength: number = Math.max(word1.length, word2.length);

    for (let i=0; i<maxLength; i++) {
        if (i < word1.length) resArr.push(word1[i]);
        if (i < word2.length) resArr.push(word2[i]);
    }

    return resArr.join("")
};