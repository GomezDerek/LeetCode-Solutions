/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    // naive strategy
    // create a list of every possible pair 
    // for every pair, try to find a 3rd index
    // time complexity: O(n^2) * O(n) -> O(n^3)

    // how to prevent duplicates??
    // sort, stringify, and then store the values into a set

    // to return the answer
    // convert set to array, and then convert the strings into number[]


    const pairs = [];
    const triplets = new Set();

    // create every possible pair of vals
    for(let i=0; i<nums.length; i++) {
        for(let j=i+1; j<nums.length; j++) {
            pairs.push( [nums[i], nums[j]] );
        }
    }
    
    // try to find valid triplets for every pair
    pairs.forEach( ([a,b]) => {
        
        // iterate through the entire num[] for the 3rd element
        nums.forEach( c => {
            // skip to avoid duplicate values
            if ( [a,b].includes(c) ) {
                return;
            }

            // valid triplet found!
            if (a+b+c == 0) {
                // sort, stringify, and store!
                const triplet = [a,b,c].sort().toString();
                triplets.add( triplet );
            }
        });
    });

    return [...triplets].map( s => s.split(',').map( n => parseInt(n)) );
};