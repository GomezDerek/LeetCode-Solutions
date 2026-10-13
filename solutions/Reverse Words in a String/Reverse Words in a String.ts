/**
EASY SOLUTION:
    use as many built-in methods as possible
    use string.prototype.split to create an array of all words in s
    reverse split array with array.prototype.reverse    
*/

function reverseWords(s: string): string {
    return s.split(" ").filter(w => w).reverse().join(" ");
};