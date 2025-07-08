/*
    taking a stab at debugging this the day after I wrote it

    revisions: 
        - starts switched to set instead of array for O(1) search
        - implemented DP for k calc after starts found
*/

function maxRepeating(sequence: string, word: string): number {
    let starts: Set<number> = new Set();

    // find start indices for word substrings
    // try from every ch in sequence
    let i: number = 0;
    while (i<sequence.length) {
        
        let j: number = 0;
        while ( sequence[i+j] === word[j] && j < word.length ) {
            j++;
        }

        // if whole word in sequence, store starting index
        if (j === word.length) {
            starts.add(i);
        }

        i++;
    }

    // this is the DP part
    // dp[ startIndex ] = k-repeats of word up to and including that starting index
    const dp: {[key: number]: number} = {};
    let maxK: number = 0;

    for (const start of starts) {
        dp[start] = (dp[start - word.length] ?? 0) + 1; // 1st nullish coalescense! ES2020
        maxK = Math.max(maxK, dp[start]);
    }

    return maxK;
};

// time: O(sequence.length * word.length)
// double while loop

// space: O(n)
// starts set