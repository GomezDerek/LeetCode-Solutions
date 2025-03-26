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
    // recursive solution
    if (!head) return false;       // non-cyclical bc end of LL reached
    if (head.visited) return true; // cycle detected, node already visited
    else head.visited = true;      // mark node as visited
    return hasCycle(head.next);
};