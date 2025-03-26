/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    /*
    STRATEGY
        add a visited property to each ListNode.
        cycle detected if traveling node finds a visited node
    */

    let traveler = head;

    while(traveler) {
        
        // cycle detected, node already visited
        if (traveler.visited) return true;

        // add visited property
        else traveler.visited = true;

        traveler = traveler.next;
    }

    // no cycle, traveler found end of LL
    return false;
};