/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {

    // create the frequency map (plain obj)
    const freq = {};
    for(const num of nums) {
        if (freq[num] == undefined) 
            freq[num] = 1
        else 
            freq[num] += 1;
    }

    // turn the freq obj into an array for sorting
    var freqArr = Object.entries(freq);

    // sort by value in descending order
    freqArr.sort((a,b) => b[1]-a[1]);

    // return keys of first k elements
    return freqArr.slice(0,k).map( kvPair => parseInt(kvPair[0]) );
};