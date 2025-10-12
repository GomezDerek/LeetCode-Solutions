function reverseVowels(s: string): string {
    const vowels: Set<string> = new Set(['a','e','i','o','u']);
    const isVowel = (ch: string) => vowels.has(ch.toLowerCase()); 
    
    const sArr: string[] = s.split("");
    
    let front: number = 0;
    let back: number = s.length-1;

    while (front < back) {
        // move pointers to vowels
        while (front < back && !isVowel(sArr[front])) front++;
        while (front < back && !isVowel(sArr[back])) back--;
        
        // when both pointers are at vowels
        const temp: string = sArr[front];
        sArr[front] = sArr[back];
        sArr[back] = temp;
        front++;
        back--;
    }

    return sArr.join("");
};