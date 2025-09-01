function mergeAlternately(word1: string, word2: string): string {
    const m: number = word1.length;
    const n: number = word2.length;

    const outputArr: string[] = [];

    let i: number = 0;
    while (i < Math.min(m,n)) {
        outputArr.push(word1[i]);
        outputArr.push(word2[i]);
        i++;
    }

    if (i < m) {
        return outputArr.join("") + word1.slice(i);
    }
    else if (i < n) {
        return outputArr.join("") + word2.slice(i);
    }
    else 
        return outputArr.join("");
};
