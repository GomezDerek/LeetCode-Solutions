function partition(s: string): string[][] {
    const allPartitions: string[][] = [];
    const curPartition: string[] = [];
    recurse(0);
    return allPartitions;
    
    // func defs
    function recurse(i: number): void {
        // base case
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
};