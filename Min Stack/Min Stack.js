var MinStack = function() {
    this.stack = []
    // this.min = null;
    this.minStack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val);

    if (!this.minStack.length) this.minStack.push(val);
    else if ( val < this.minStack[this.minStack.length-1] ) { // this.minStack not empty
        this.minStack.push(val);
    }  
    // if (!this.min) this.min = val;
    // else this.min = Math.min(this.min, val);

};


/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    const poppedVal = this.stack.pop();

    if (poppedVal == this.minStack[this.minStack.length-1]) {
        this.minStack.pop();
    }

    // if .pop() == this.min 
        // we need to update this.min
        // iterating through all of this.stack and recording minimum

    // 
};


/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length-1];
};


/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length-1];
};

// test area
// const testStack = new MinStack();
// testStack.push(7);
// testStack.push(3);
// testStack.push(9);
// console.log(testStack.stack);
// console.log(testStack.getMin());

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */