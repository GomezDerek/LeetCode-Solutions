/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    /* 
    NEETCODE STRATEGY
    1. tortoise-hare to find the list's halfway point
    2. reverse 2nd half of list
    3. merge the two halves
    */

    // 1. tortoise-hare to find the list's halfway point
    let tortoise = head;
    let hare = head.next;

    while(hare && hare.next) {
        tortoise = tortoise.next;
        hare = hare.next.next;
    }

    // 2. reverse the 2nd half of the list
    // 2nd half starts at tortoise.next
    function reverse(curr) {
        // base case(s)
        if (curr.next == null) return curr;

        // recursive call
        const reversedHead = reverse(curr.next);

        // reversal operation
        const nextNode = curr.next;
        curr.next = null;
        nextNode.next = curr;

        // return recursive call
        return reversedHead;
    }
    // 2nd half starts at tortoise.next
    let reversedHead = reverse(tortoise.next); 

    // separate 1st half from the 2nd
    tortoise.next = null;

    // 3. merge the two halves
    while(reversedHead) { // reversedHalf.length <= firstHalf.length
        const nextHead = head.next;
        const nextReversedHead = reversedHead.next;

        head.next = reversedHead;
        reversedHead.next = nextHead;

        head = nextHead;
        reversedHead = nextReversedHead;
    }
};