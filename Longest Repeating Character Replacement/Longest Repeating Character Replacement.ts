function characterReplacement(s: string, k: number): number {
    // strategy
    /* 
    Step 1: identify longest existing string
    Step 2: expand string to connect to matching characters
            a. how to decide whether to expand left or right?
               - stay within bounds
               - while k>0
               - recursive decision tree?

    Questions:
        can s[i] be more than either A || B ?
        if s.length==0, answer == ""
        will s[i] always be uppercase?

    */

    // find longest existing string O(n)
    let maxCh: string = s[0];
    let maxRange: number[] = [0,0];

    let curCh: string = s[0];
    let curStart: number = 0;

    for (let i=1; i<s.length; i++) {

        // if this string is longer than our max, update the max
        if (s[i]==curCh && i-curStart > maxRange[1]-maxRange[0]) {
            maxCh = s[i];
            maxRange = [curStart, i];
        }

        // new ch -> new substring
        else {
            curCh = s[i];
            curStart = i;
        }
    }

    // console.log(maxCh, maxRange);

    // expand string to connect to matching characters O(k)
    function recursion(start, end, k): number[] {
        // console.log(start,end,k);
        // base case(s)
        if (k<=0) return [start, end]

        // recursive call(s)
        let left:number[] = [null,null];
        if (start>0 && s[start]==s[end]) { // can expand left w/o substitution
            // console.log('l -> k');
            left = recursion(start-1, end, k);
        }
        else if (start>0) { // expand left WITH substitution
            // console.log('l -> k-1');
            left = recursion(start-1, end, k-1);
        }

        // console.log(`${s[end]}==${s[end+1]} ? ${s[end]==s[end+1]}`);
        let right:number[] = [null,null];
        if (end<s.length-1 && s[end]==s[start]) { // can expand right w/o substitution
            // console.log('r -> k');
            right = recursion(start, end+1, k); 
        }
        else if (end<s.length-1) { // expand right WITH substitution
            // console.log('r -> k-1');
            right = recursion(start, end+1, k-1);
        }

        // return
        // console.log([left[0] || start, right[1] || end]);
        return [left[0] || start, right[1] || end];
    }

    const finalRange:number[] = recursion(maxRange[0], maxRange[1],k);
    return finalRange[1] - finalRange[0] +1;
};