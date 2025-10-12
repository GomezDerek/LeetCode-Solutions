/**
STRATEGY:
    1. extract the words and store in an arr (string.prototype.split())
    2. reverse each word
    3. join the words into a single str (array.prototype.join(" "))
 
 NOTES:
    "may contain leading or trailing spaces"
    👆 .trim()?
 */

function reverseWords(s: string): string {
    const words: string[] = s.split(" ").map(word => word.trim()).filter(word => word.length > 0);
    words.reverse();
    return words.join(" ");
};