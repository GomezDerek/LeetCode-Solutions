/**
STRATEGY:
    use 2 pointers, front and back
    iterate pointers until they are at vowels
    swap anc ontinue iterating
 */

function reverseVowels(s: string): string {
    const vowels: Set<string> = new Set(['a','e','i','o','u']);
    
    const sArr: string[] = [];
    for (const ch of s) sArr.push(ch);
    
    let front: number = 0;
    let back: number = s.length-1;

    while (front < back) {
        // first align front pointer
        if ( !vowels.has(sArr[front].toLowerCase()) ) {
            front++;
        }

        // second align back pointer
        else if ( !vowels.has(sArr[back].toLowerCase()) ) {
            back--;
        }

        // once both point at vowels, swap and continue
        else {
            const temp: string = sArr[front];
            sArr[front] = sArr[back];
            sArr[back] = temp;
            front++;
            back--;
        }
    }

    return sArr.join('');
};