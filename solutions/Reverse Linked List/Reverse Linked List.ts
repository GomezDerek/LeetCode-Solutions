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
    // const hat: ListNode = new ListNode(null, head); <- completely unnecessary
    let traveler: ListNode | null = head; // <- also necessary... but acceptable
    let prev: ListNode = null;

    while (traveler !== null) {
        const tNext: ListNode | null = traveler.next;

        traveler.next = prev;
        prev = traveler;
        traveler = tNext;
    }

    // n -><- 1 <- 2 <- 3  n


    return prev;
};