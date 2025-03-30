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

    0 -> n 
    n -> 1

    1 -> n-1
    n-1 -> 2

    0 -> n,    n+1 -> 0
    1 -> n-1,  n   -> 1
    2 -> n-2,  n-1 -> 2

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

        leftNode.next = rightNode;

        // if rightNode is not nth node
        if (i>0) {
            const nextRightNode = a[n-i];
            nextRightNode.next = leftNode;
        }

        rightNode.next = null; 
    }

};