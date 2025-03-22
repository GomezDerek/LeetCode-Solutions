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
    if (!head.next || !head) return head; // tail found

    // recursive call
    let reversedHead = reverseList(head.next);

    // STEPS FOR REVERSAL
    // 1. store nextNode
    let nextNode = head.next;

    // 2. remove nextNode from head.next
    head.next = null;

    // 3. nextNode.next = head
    nextNode.next = head;

    // return currently reversed LL
    return reversedHead;
};