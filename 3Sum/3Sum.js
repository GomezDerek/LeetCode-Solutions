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

    // TLE counter -> hashmap


    const pairs = [];
    const hMap = {};
    const triplets = new Set();

    // create every possible pair of vals
    for(let i=0; i<nums.length; i++) {
        const val = nums[i];
        if ( !hMap[val] ) {
            hMap[val] = [i];
        }
        else {
            hMap[val].push(i);
        }
        for(let j=i+1; j<nums.length; j++) {
            pairs.push( [i,j] );
        }
    }

    // // try to find valid triplets for every pair
    pairs.forEach( ([i,j]) => {
        const [a,b] = [i,j].map(n => nums[n]); // pair's values
        const c = 0-a-b; // last triplet value

        // third value doesn't exist in nums
        if ( !hMap[c] ) {
            return;
        }
        
        const cIndices = hMap[c]; // all indices in nums that store value c
        
        // if no duplicate indices
        if ( cIndices.some(k => ![i,j].includes(k)) ) {
            const triplet = [a,b,c].sort().toString();
            triplets.add(triplet);
        }

    });

    return [...triplets].map( s => s.split(',').map( n => parseInt(n)) );
};