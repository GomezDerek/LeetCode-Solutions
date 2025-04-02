/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function(head) {
    /*
    STRATEGY
    create a hashmap {originalNode: dupeNode}
    iterate through the hashmap
        dupeNode.next = hash[ originalNode.next.val ]
        dupeNode.randome = hash[ originalNode.random.val ]
    */

    const ogHead = head;
    const hash = new Map();

    // iterate original and populate hashMap
    while (head) {
        const dupeNode = new Node(head.val, null, null);
        hash.set(head, dupeNode);
        head = head.next;
    }

    // iterate through the hashMap
    for ([og, dupe] of hash) {
        // console.log(og.val, dupe.val);
        const ogNext = og.next;
        const ogRand = og.random;
        // console.log(og.val, ogNext ? ogNext.val : null, ogRand ? ogRand.val : null, '\n');

        dupe.next = ogNext != null ? hash.get(ogNext) : null;
        dupe.random = ogRand != null ? hash.get(ogRand) : null;
    }

    return hash.get(ogHead);
};
