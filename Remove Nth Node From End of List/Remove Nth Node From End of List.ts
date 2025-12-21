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

 /**
GOAL: splice out the -n node from a LL

STRAT:
    iterate 2 pointers, leading and following
        give leading pointer, a headstart of n nodes
        then iterate both
        when lead ptr reaches end,
            splice follower out

NOTES:
    n will always be >= 1 && <= sz
    consider ex 2, sz = 1, n = 1
  */

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    const hat = new ListNode(-1, head)
    let leader = hat
    let followerParent = hat
    
    // give leader headstart
    for (let i=0; i<n; i++) {
        leader = leader.next
    }

    // iterate both until leader reaches tail
    while (leader.next !== null) {
        leader = leader.next
        followerParent = followerParent.next
    }

    // splice out nth node from end
    followerParent.next = followerParent.next.next;

    return hat.next
};