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
    while (head) {
        a.push(head);
        head = head.next;
    }

    // reorder!
    for (let i=0; i<a.length/2; i++) {
        const leftNode = a[i];
        const rightNode = a[a.length-i-1]; 

        leftNode.next = rightNode;

        // if rightNode is not nth node
        if (i>0) {
            const nextRightNode = a[a.length-i];
            nextRightNode.next = leftNode;
        }

        rightNode.next = null; 
    }

};