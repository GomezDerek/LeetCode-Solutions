/*
    comparing word to substring of sequence is O(word.length)

NAIVE SOLUTION:
    O(word.length * sequence.length) -> 10^6, acceptable?
    for every char in sequence,
        if char begins with word[0]
            iterate through both word and sequence to confirm match
                if match, record start in DS
                continue sequence iteration after last char in sequence
    
    find max-k, by trying to string word start records
    iterate through starts,
        if start + wordLength = another start
            k++ 

    reminder: consider sequence.length || word.length == 1
*/

function maxRepeating(sequence: string, word: string): number {
    let k: number = 0;
    let starts: number[] = [];

    // find starts
    let i: number = 0;
    while (i<sequence.length) {
        // console.log(i);
        
        let j: number = 0;
        while ( sequence[i+j] === word[j] && j < word.length ) {
            // console.log(`\t${i+j}`)
            j++;
        }

        // if whole word in sequence, store startign index
        if (j === word.length) {
            starts.push(i);
        }

        // i++ if no match at all
        // or continue from end of string comparison
        // if (j === 0) i++;
        // else i += j;
        i++;
    }

    // console.log(starts);
    i = 0; // reuse var from 1st loop
    let streak: number = 1;
    while (i < starts.length) {
        

        streak = starts[i-1] === starts[i] - word.length
            ? streak + 1
            : 1
            ;

        k = Math.max(k, streak);
        i++;
    }

    // console.log(starts)
    return k;
};