/**
STRATEGY:

chars can include a digit, so how do we differentiate between compression of
"aa" and "a2" since "a" is not compressed to "a1"?

Answer: we count during, not after compression

iterate chars.length: O(n)
    if char === first:
        curCounter++;

    else:
        chars.push(first+""+curCounter)
        globalCounter += curCounter
        first = char

 */
function compress(chars: string[]): number {
    const N = chars.length;
    let totalCount = 0;
    let compressionCount = 1;
    let curChar = chars[0];

    for (let i=1; i<N; i++) {
        // if it's a match
        if (chars[i] === curChar) {
            compressionCount++;
            continue;
        }

        // if it's not a match
        // and the prevChar was only 1 count
        else if (compressionCount === 1) {
            chars.push(curChar);
        }

        // or the prevChar was count > 1
        else if (compressionCount > 1) {
            chars.push(curChar);
            compressionCount.toString().split("").forEach(s => {
                chars.push(s); 
            });
        }

        curChar = chars[i]; // then reset the curChar for new char
        // update total count
        totalCount ++;
        totalCount += compressionCount === 1 ? 0 : compressionCount.toString().length;
        compressionCount = 1; // reset the compressionCount
    }

    // finish last compression
    chars.push(curChar);
    totalCount++;
    if (compressionCount > 1) {
        chars.push(...compressionCount.toString().split(""));
        totalCount += compressionCount === 1 ? 0 : compressionCount.toString().length;
    }

    // console.log(chars);
    chars.splice(0,N);
    // console.log(chars);
    return totalCount;
};