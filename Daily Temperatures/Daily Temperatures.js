/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    // naive solution 
    // O(n^2) runtime
    // for each day, iterate through the rest of the string to find the warmer day

    const answer = [];
    
    for(let i=0; i<temperatures.length; i++) {
        let daysToWait = 0;
        for(let j=i+1; j<temperatures.length; j++) {
            if(temperatures[j] > temperatures[i]) {
                daysToWait = j-i;
                break;
            }
        }
        answer.push(daysToWait);
    }
    
    return answer;
};