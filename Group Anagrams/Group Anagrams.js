/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    // strategy
    // Step 1: iterate through strs
    // Step 2: check if it can join an anagram group
    // Step 3: join group, or form new group
    

    // how to check if it belongs to group?
    // compare frequency lists with hashmaps?

    var answer = []

    function isAnagram(str1, str2) {
        // console.log(`\nisAnagram: ${str1} & ${str2}`);

        var freqMap = new Map();

        // create a frequency map for str1
        for(let i=0; i<str1.length; i++) {
            if (freqMap.has(str1[i])) {
                freqMap.set( str1[i], freqMap.get(str1[i]) + 1 );
            }
            else {
                freqMap.set(str1[i],1)
            }
        }
        // console.log(`${st1}`);

        // run str2 against str1's frequency map
        for(let i=0; i<str2.length; i++) {
            let char = str2[i]

            // decrement char count in frequency map
            if (freqMap.get(char) > 0) {
                freqMap.set( char, freqMap.get(char) - 1 );
            }

            // str2 has a higher instances of char than str1
            else return false;
        }

        // check if str1 has any leftover chars that str2 didn't use
        for(val of freqMap.values()) {
            if (val != 0) return false;
        }

        // all anagram tests passed
        // console.log(`they're anagrams!`)
        return true;
    }

    for(str of strs) {
        var joinedGroup = false;

        // check if str belongs to any anagram groups
        for(group of answer) {
            if (isAnagram(str, group[0])) {
                group.push(str);
                joinedGroup = true;
                break;
            }
        }

        // create a new group for this str b/c no anagrams found
        if (!joinedGroup) answer.push([str]);
    }

    return answer;
};