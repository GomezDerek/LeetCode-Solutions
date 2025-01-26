const delimiter = "对吗";
/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
var encode = function(strs) {
    var msg = ``;
    for(let str of strs) {
        msg += delimiter;
        for(let ch of str) {
            msg += ch;
        }
    }
    return msg;
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function(s) {

    const strs = [];
    
    let i = 2;
    let currStr = "";

    while(i < s.length) {
        if (s[i] == delimiter[0] && s[i+1] == delimiter[1]) {
            strs.push(currStr);
            currStr = "";
            i += 2;
        }
        else {
            currStr += s[i];
            i += 1;
        }
    }

    strs.push(currStr);
    return strs
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */