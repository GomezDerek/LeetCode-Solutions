/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseList(head: ListNode | null): ListNode | null {
    if (head === null) return null;
    else if (head.next === null) return head;

    const ogNext: ListNode = head.next;
    const reversedHead: ListNode = reverseList(head.next);
    ogNext.next = head;
    head.next = null;

    return reversedHead;
};