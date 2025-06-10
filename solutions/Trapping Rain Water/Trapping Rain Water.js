/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let [maxLeft, maxRight] = [0,0];
    let [left, right] = [0, height.length-1];

    let totalTrapped = 0;

    while(left < right) {
        maxLeft = Math.max(maxLeft, height[left]);
        maxRight = Math.max(maxRight, height[right]);
        
        // which pointer's index's value holds the smaller value
        let shorterIndex = height[left] < height[right] ? left : right;

        // calc and cumulate rainwater trapped at shorterIndex (before we move pointer away)
        if (shorterIndex == left) {
            // console.log(`Water trapped at l=${shorterIndex}: ${maxLeft - height[left]}`);
            totalTrapped += (maxLeft - height[left]) 
            left ++;
        }
        else { // right is shorterIndex
            // console.log(`Water trapped at r=${shorterIndex}: ${maxRight - height[right]}`);
            totalTrapped += (maxRight - height[right]) 
            right--;
        }
    }
    return totalTrapped;
};