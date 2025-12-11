function partition(s: string): string[][] {
    const allPartitions: string[][] = [];
    const curPartition: string[] = [];
    dfs(0);
    return allPartitions;

    function dfs(i: number): void {
        // base case
        if (i === s.length) {
            allPartitions.push([...curPartition]);
            return;
        }

        // ops
        const palindromes: string[] = [];
        for (let j=i; j<s.length; j++) {
            const substr: string = s.slice(i, j+1);
            if (isPalindrome(substr)) palindromes.push(substr);
        }

        // recursion
        for (const palindrome of palindromes) {
            curPartition.push(palindrome);
            dfs(i+palindrome.length);
            curPartition.pop();
        }
    }
};

// helper - palindrome checker
function isPalindrome(s: string): boolean {
    let i: number = 0
    let j: number = s.length-1;

    // find invalidity
    while (i <= j) {
        if (s[i] !== s[j]) return false;
        i++;
        j--;
    }

    // passed all validity checks
    return true;
}