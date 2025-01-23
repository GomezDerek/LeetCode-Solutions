/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    // this solution is inspired by Neetcode

    const answer = new Map();

    strs.forEach( str => {

        const freqArr = new Array(26).fill(0);

        for(let i=0; i<str.length; i++) {
            faIndex = str.charCodeAt(i) - 'a'.charCodeAt(0);
            freqArr[faIndex] ++;
        }
       
        const answerKey = JSON.stringify(freqArr);
        if (answer.has(answerKey)) {
            answer.get(answerKey).push(str);
        }
        else {
            answer.set(answerKey, [str]);
        }

    });

    return [...answer.values()];
};