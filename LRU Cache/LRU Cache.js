/* starting over at 1hr 6min*/
// list: Tail -> 2 -> 1
var ListNode = function(key, val, prev, next) {
    this.key = key != undefined ? key : null;
    this.val = val != undefined ? val : null;
    this.prev = prev != undefined ? prev : null;
    this.next = next != undefined ? next : null;
}


/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.length = 0;

    // {key: {val, prev, next}}
    this.dict = {};

    this.head = new ListNode();
    this.tail = this.head;
    this.lru = () => {return this.tail.next};
    this.printList = function() {
        let string = "";

        let traveler = this.tail;
        while(traveler) {
            string += `${traveler.key} →`
            traveler = traveler.next;
        }

        console.log(string);
    }
};

// remove node from the list
LRUCache.prototype.spliceNode = function(node) {
    if (node.key == this.head.key) {
        this.head = this.head.prev;
    }
    node.prev.next = node.next;
    if (node.next) node.next.prev = node.prev;
    // console.log('after splice: ');
    // this.printList();
}

// add node to head
LRUCache.prototype.newHead = function(node) {
    node.prev = this.head;
    node.next = null;
    
    this.head.next = node;
    this.head = this.head.next;

    // console.log('after new head:');
    // this.printList();
}

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    // console.log('get', key);
    // key exists
    if (this.dict[key] != undefined) {
        let keyNode = this.dict[key];
        this.spliceNode(keyNode);
        this.newHead(keyNode);
        // console.log(`lru = ${this.lru()}`);
        // console.log(`updated ${key}, new lru = ${this.lru().key}`);
        // console.log(keyNode.val);
        return keyNode.val;
    }
    else {
        // console.log(-1);
        return -1;
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    // console.log('\nput', key);
    // update, key already exists
    if (this.dict[key] != undefined) {
        let keyNode = this.dict[key];
        keyNode.val = value; // update val

        this.spliceNode(keyNode);
        this.newHead(keyNode);
    }

    // add, space exists and key is new
    else if (this.length < this.capacity) {
        let newNode = new ListNode(key, value);
        this.newHead(newNode); // add to list

        this.dict[key] = newNode; // add to dict
        this.length++;
    }

    // evict + add, space DNE and key is new
    else {
        // console.log('eviction!');
        let evictedNode = this.lru();
        this.spliceNode(evictedNode); // list eviction
        this.dict[evictedNode.key] = undefined; // dict eviction
        // console.log(`evicted: {${evictedNode.key},${evictedNode.val}}`);
        // console.log(`dict[${evictedNode.key}] = ${this.dict[evictedNode.key]}`);

        let newNode = new ListNode(key, value);
        this.newHead(newNode); // add to list

        this.dict[key] = newNode; // add to dict
    }

    // console.log('put successful!');
    // this.printList();
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */