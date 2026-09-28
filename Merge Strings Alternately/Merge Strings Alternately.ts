/**
strategy:
    i = longestWord.length
    iterate:
        add to res from word1
        add to res from word2
 */

function mergeAlternately(word1: string, word2: string): string {
    const resArr: string[] = [];

    for (let i=0; i<Math.max(word1.length, word2.length); i++) {
        if (i < word1.length) resArr.push(word1[i])
        else {
            resArr.push(word2.slice(i))
            break;
        }
        if (i < word2.length) resArr.push(word2[i])
        else {
            resArr.push(word1.slice(i+1))
            break;
        }
    }

    return resArr.join("")
};