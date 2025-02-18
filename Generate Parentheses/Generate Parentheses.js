/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    // strategy
    // decision tree + backtracking? O(n!) ?
    
    // n = 1
    // ()
    
    // n = 2
    // ()() = n=1+()
    // (()) = (n=1)

    // n = 3
    // ()()() = n=2 + ()
    // (())() = n=2 + ()
    // ()(()) = () + n=2
    // (()()) = (n=2)
    // ((())) = (n=2)

    // curr = ...prev+(), ()+...prev + (...prev)

    // answer[n] = all combinations of n pairs of parentheses
    // use Set to prevent duplicates
    // prefill with n = 0
    const answer = [new Set()]; 
    answer[0].add('');

    for(let i=1; i<=n; i++) {
        nCombos = new Set();
        
        // iterate through prev
        for(const combo of answer[i-1]) {
            // add new combos to nCombos
            nCombos.add( combo+'()' );
            nCombos.add( '()'+combo );
            nCombos.add('('+combo+')');
        }

        // add nCombos to our answer
        answer.push(nCombos);
    }

    // convert our set to an array
    return [...answer[n]];
};