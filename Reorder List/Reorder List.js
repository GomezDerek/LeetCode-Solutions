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
    STRATEGY
    create an array of the nodes
    array indices track original order
    iterate through array and reassign node.next pointers


    Runtime:   O(2N) -> O(N)
    Spacetime: O(N)
    */

    // create and fill array
    const a = [];
    let n = 0;
    while (head) {
        a.push(head);
        head = head.next;
        n++;
    }

    // reorder!
    for (let i=0; i<n/2; i++) {
        const leftNode = a[i];
        const rightNode = a[n-i-1]; 

        rightNode.next = leftNode.next;
        leftNode.next = rightNode;
    }

    // new tail will point at null, to avoid cycle
    // a[ n//2 ] returns the middle node (& new tail) from the original list
    a[ parseInt(n/2) ].next = null;
};