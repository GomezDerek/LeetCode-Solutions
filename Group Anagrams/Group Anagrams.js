/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    // strategy
    const ans = new Map();

    for(let i=0; i< strs.length; i++) {
        var freqMap = new Array(26).fill(0);
        for(let j=0; j< strs[i].length; j++) {
            const currChar = strs[i][j];
            freqMap[currChar.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
        }

        freqMap = JSON.stringify(freqMap);

        if (ans.has(freqMap)) {
            const res = ans.get(freqMap);
            res.push(strs[i]);
            ans.set(freqMap, res);
        }
        else {
            ans.set(freqMap, [strs[i]]);
        }
    }

    // console.log(ans);
    return [...ans.values()];
    // return Object.values(ans);

};