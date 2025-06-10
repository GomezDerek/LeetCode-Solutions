/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// 1 -> 2 -> 3 -> null
// 1 -> 2 -> 3 -> null
// 1 -> 2 <- 3 

var reverseList = function(head) {
    
    // edge case for empty LL
    if ( !head) {
        return head;
    }

    // base case for original tail
    if( head.next == null) {
        return head;
    }

    // recursive call
    let headNext = head.next;
    let reverseTail = reverseList(headNext);
    headNext.next = head;
    head.next = null;

    // return
    return reverseTail
};