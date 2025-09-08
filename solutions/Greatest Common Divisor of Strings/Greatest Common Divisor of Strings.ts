function gcdOfStrings(str1: string, str2: string): string {
    if (str1 + str2 != str2 + str1) return ""; // communicative property

    // find length of GCD string
    const gcdLength = calcGCDLength(str1.length, str2.length);
    return str1.slice(0, gcdLength);
};

function calcGCDLength(a, b) {
    return a%b === 0 ? b : calcGCDLength(b, a%b); // my version
    // return b === 0 ? a : calcGCDLength(b, a%b);// gautamswt0's version
}