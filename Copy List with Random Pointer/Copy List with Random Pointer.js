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
    interweaving strategy from Hints 3 & 4
    */

    // weave new nodes into original list
    let traveler = head;
    while (traveler) {
        const cachedNext = traveler.next;
        const copy = new Node(traveler.val, cachedNext, null);

        traveler.next = copy;  // interweaves copy into original
        traveler = cachedNext; // iterate traveler pointer
    }
    const copyHead = head.next;

    // set the random pointers
    // NOTE: we do this before setting next pointers because
    //       setting next pointers will unweave the lists,
    traveler = head;
    while (traveler) {
        const ogRandom = traveler.random;

        const copy = traveler.next;
        copy.random = ogRandom != null ? ogRandom.next : null;

        traveler = copy.next;
    }

    // set the next pointers
    traveler = head;
    while (traveler) {
        const copy = traveler.next;
        const ogNext = copy.next;

        copy.next = ogNext != null ? ogNext.next : null;
        traveler.next = ogNext;

        traveler = ogNext;
    }

    return copyHead;
};