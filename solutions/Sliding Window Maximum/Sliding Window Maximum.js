/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {

    /*
    OPTIMIZATION
    implementing a queue with O(1) front pop
    by creating a pointer for the front index
    when we pop from front, we increment the front pointer

    NOTE: queue will store indices!
    */
    const maxQ = [];
    let qFront = 0;
    function getQEnd() {
        return maxQ[maxQ.length-1];
    }
    function getFrontVal() {
        return nums[ maxQ[qFront] ]
    }

    const output = [];

    // iterate through the first window (0,k]
    for (let i=0; i<k; i++) {
        let iNum = nums[i];

        // don't pop if equal
        while (iNum > nums[getQEnd()]) {
            maxQ.pop();
        }

        // always add to end of deque
        maxQ.push(i);
    }
    output.push(getFrontVal());
    console.log('maxQ for 1st window:', maxQ);

    // TODO: iterate through the rest of nums, and slide the window
    let l=0;
    for (let r=k; r<nums.length; r++) {
        
        // add new r to window
        // pop until end >= new r
        while (nums[r] > nums[getQEnd()] && maxQ.length-1 >= qFront ) {
            maxQ.pop();
        }
        maxQ.push(r); // always add r to end of deque

        console.log('qFront before recalc', qFront);
        // subtract old l from window
        if (l == maxQ[0]) {
            qFront++;
        }
        console.log('qFront after l recalc', qFront);
        l++;

        console.log(maxQ);
        output.push(getFrontVal());
    }


    return output;
};