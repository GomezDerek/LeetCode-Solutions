/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.length = 0;

    // hashmap for O(1) get and put ops
    this.dict = {};

    // how to track least used?
    this.recordStack = [];
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    // console.log('get', key, '=', this.dict[key]);
    if (this.dict[key] != undefined) {
        this.recordStack.push(key);
        return this.dict[key];
    }
    else {
        return -1;
    }
    
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    // key already exists, update
    if (this.dict[key] != undefined) {
        this.dict[key] = value; // update
    }

    // it doesn't exist AND we have space
    else if (this.length < this.capacity) {
        this.dict[key] = value; // add it in
        this.length++;
    }

    // it DNE AND we don't have space
    else {
        // EVICTION
        let seen = {};
        let numSeen = 0;

        // iterate backwards through the recordStack
        for (let i=this.recordStack.length-1; i>=0; i--) {
            let iKey = this.recordStack[i];
            if (seen[iKey]) {
                continue;
            }
            else if (numSeen >= this.capacity-1) {
                // we found an eviction!
                this.dict[iKey] = undefined;

                // add in new value
                this.dict[key] = value;
            }

            else {
                seen[iKey] = true;
                numSeen++;
            }
        }
    }

    this.recordStack.push(key);
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */