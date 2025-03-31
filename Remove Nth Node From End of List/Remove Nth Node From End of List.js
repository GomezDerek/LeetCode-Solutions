/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    /* 
    1 -> 2 -> 3 -> 4 -> 5
    a = [1, 2, 3, 4, 5]
    n = 2
    node to remove = 4
    3  -> 5

    a[a.length - n] = a[3] = 4


    n = 4
    a[1] = a[a.length - n] = a[5-4]

    idxRemoved = a.length - n;
    prev = a[idxRemoved - 1];
    next = a[idxRemoved + 1];

    prev.next = next;

    n = 2
    remove 4

    idxRemoved = 3
    prev = a[2] = 3
    mext = a[4] = 5
    3.next = 5;

    edge cases:
    remove head
    return head.next
    if idxRmoved == 0
        return head.next;
    
    remove tail
    check out of bounds for next = a[...]
    */

    // fills array with nodes
    const a = [];
    let traveler = head;
    while(traveler) {
        a.push(traveler);
        traveler = traveler.next;
    }

    const targetIndex = a.length - n;

    // head node removed
    if (targetIndex == 0) return head.next;

    const prevNode = a[targetIndex-1];
    const nextNode = targetIndex == a.length-1 ? null : a[targetIndex+1];

    prevNode.next = nextNode;

    return head;
};