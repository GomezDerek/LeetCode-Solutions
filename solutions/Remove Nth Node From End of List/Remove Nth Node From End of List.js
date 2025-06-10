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

    // identify nth node
    // prev.next = nthNode.next;

    // GOAL: remove nth node
    function recurse(prev, curr) {
        
        let currPos;
        
        if (curr.next == null) { // base case =  we find the tail
            // n == 1
            currPos = 1; // currPos = 1
        }
        else { // recursive call
            currPos = 1 + recurse(curr, curr.next);
        }

        

        // removal operation
        // prev.next = curr.next;
        if ( currPos == n && curr == head) { // if removing head
            head = head.next;
        }
        else if ( currPos == n ) {
            prev.next = curr.next;
        }
        // return
        return currPos;
    }

    recurse(null, head);
    return head;
};
/*
n = 2
1 -> 2

prev = null
curr = 1

null.next = 2
*/