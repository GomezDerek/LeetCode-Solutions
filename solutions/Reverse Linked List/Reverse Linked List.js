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
var reverseList = function(head) {
    // base case(s)
    if (!head) return null;
    if (!head.next) return head; // tail found

    let reversedHead = reverseList(head.next);

    let nextNode = head.next;
    head.next = null;
    nextNode.next = head;

    return reversedHead;
};