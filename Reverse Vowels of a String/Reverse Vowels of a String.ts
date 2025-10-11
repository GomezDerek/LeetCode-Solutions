/**
    STRATEGY:
        use 2 pointers, front and back.
        when both are at vowels, swap
    
    Notes:
        preserve casing 
 */
function reverseVowels(s: string): string {
    const sArr: string[] = s.split("");
    
    let front: number = 0;
    let back: number = s.length-1;

    while (front < back) {
        // move pointers to vowels
        if (!isVowel(sArr[front])) front++;
        if (!isVowel(sArr[back])) back--;
        
        // when both pointers are at vowels
        if (isVowel(sArr[front]) && isVowel(sArr[back])) {
            const temp: string = sArr[front];
            sArr[front] = sArr[back];
            sArr[back] = temp;
            front++;
            back--;
        }
    }

    return sArr.join("");
};

function isVowel(ch: string) {
    return ['a','e','i','o','u'].includes(ch.toLowerCase());
}