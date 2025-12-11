/**
    GOAL: 
        return all partitions where each substring is a palindrome

    STRATEGY:
        default partition is every character
        combine substrings to find palindromes
        1. find all substring palindromes
            a. from each ch, expand substring on both sides
            b. store substr palindromes in an array,
                beginning and ending indices
        2. create all partition combos
            a. partition every ch
            b. for each substr
                i. partition all other chs
                ii. for remaining substrings, attempt to add to partitioning

    NOTES: 
        s.length <= 16, brute force may be ok
        guaranteed partition: partition at every ch

    17 minutes planning
    gave up at minute 35
    https://assets.leetcode.com/users/images/b6f5ade4-d5b8-445e-8ee9-e16a0d4f2292_1711522213.8992066.png
     
    NEW STRATEGY:
        recursive DFS, from left to right
        for every recursion,
            generate all possible substrings from remaining chs
            if substr is valid palindrome, recurse
        when recursions finish and partitions finish,
            add partition to answer
     */

function partition(s: string): string[][] {
    // new attempt
    const allPartitions: string[][] = [];
    const curPartition: string[] = [];
    recurse(0);
    return allPartitions;
    
    // func defs
    function recurse(i: number): void {
        // base cases
        if (i >= s.length) {
            allPartitions.push([...curPartition]);
            return;
        }
        
        // ops
        const palindromes: string[] = [];
        for (let j=i; j<s.length; j++) {
            // generate all substrings from i to end
            // create array of palindromic substrs
            const substr: string = s.slice(i,j+1);
            if (isPalindrome(substr)) palindromes.push(substr);
        }
        console.log(i, palindromes);

        // recursion
        for (const palindrome of palindromes) {
            curPartition.push(palindrome);
            recurse(i+palindrome.length);    
            curPartition.pop();
        }

    }

    // helper function
    function isPalindrome(str: string): boolean {
        let i: number;
        let j: number;

        // if length is even
        if (str.length % 2 === 0) {
            j = str.length/2;
            i = j - 1;
        }

        // if length is odd
        else {
            i = Math.floor(str.length / 2);
            j = i;
        }

        // validate palindrome
        while ( i>=0 && j<str.length ) {
            if (str[i] !== str[j]) return false; // not valid
            else {
                i--;
                j++;
            }
        }
        // validated
        return true;
    }

    // 1st attempt
    // const sArr: string[] = s.split("");
    
    // // find all substring palindromes
    // const palindromes: [number, number][] = [];
    // for (let i=0; i<s.length; i++) {
    //     let [l,r] = [i,i];

    //     // for odd-num palindromes
    //     while (s[l] === s[r]) {
    //         if (
    //             l>0 
    //             && r<s.length-1
    //             && s[l-1] === s[r+1]
    //         )
    //             l--;
    //             r++;
    //             palindromes.push([l,r]);
    //             console.log(`${s.slice(l,r+1)} found from i=${i}`);
    //     }

    // }
    // console.log(
    //     palindromes.map( ([l,r]) => {
    //         return s.slice(l,r+1)
    //     } )
    // );
    // return [["z"]];
};