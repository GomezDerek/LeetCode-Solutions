/**
STRATEGY:
    iterate through s backwards
    use 2 pointers, beginning and end of each word
        in reverse order, add each word to an array
    return array.join(" ")
 */

function reverseWords(s: string): string {
    const res: string[] = [];
    let start: number = s.length -1;
    let end: number = s.length -1;

    while (start > 0) {
        while (
            (s[start] === " " || s[start-1] !== " ") && 
            start > 0
        ) {
            start--;
        }
        
        while (s[end] === " " && end >= start) {
            end--;
        }
        
        if (end < start) break;

        res.push(s.slice(start, end+1))
        start--;
        end = start -1;
    }

    return res.join(" ");
};