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
    two pointer, tortoise-hare strategy
    tortoise moves 1 node at a time
    hare moves 2 nodes at a time
    if both point to the same node, we have a cycle
    no cycle if hare reaches null
    */

    let tortoise = head;
    let hare = head;

    // until hare reached end of LL and becomes null
    while (hare) {
        tortoise = tortoise.next;

        // if we can't move hare, while is exited
        try { hare = hare.next.next; }
        catch { break; }

        if (tortoise == hare) return true;
    }

    // hare found end of LL, TF LL isn't cycle
    return false; 
};