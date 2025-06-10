/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    /*
        STRATEGY

        Array strategy
        put all nodes into an array
        iterate through array
            reverse n-sized subarrays / sub LLs
            connect subarrays/ sub LLs
        
        runtime: O(2n)
        space:   O(n)
        
        notes:
        if k == n, reverse the whole list
        there will be n%k nodes untouched at the end of the list

        edge cases:
        no empty lists
        k >= 1
        node.val is always an integer?
    */

    const nodeArray = [];

    // iterate through LL
    // populate nodeArray
    while (head) {
        nodeArray.push(head);
        head = head.next;
    }

    // iterate through array
    for (let i=0; i+k-1<nodeArray.length; i+=k) {
        const subHead = nodeArray[i];
        // console.log(i, subHead.val);
        

        // reverse the sub list
        for (let j=i; j<i+k-1; j++) {
            // console.log(`\t${j} ${nodeArray[j].val}`);
            let first = nodeArray[j];
            let second = nodeArray[j+1];

            second.next = first;
        }

        // connect new tail to next sub-list
        if(i+k < nodeArray.length) {
            subHead.next = nodeArray[i+k];
        }
        else {
            subHead.next = null;
        }

        // connect new head to prev sub-list
        if (i-k>=0) {
            let newHead = nodeArray[i+k-1];
            let prevTail = nodeArray[i-k]
            prevTail.next = newHead;
        }
    }

    // console.log(nodeArray);
    return nodeArray[k-1];
};