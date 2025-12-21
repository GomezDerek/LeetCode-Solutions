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
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    const hat = new ListNode(-1, head)
    let [leader, follower] = [hat, hat]
    
    // give leader headstart
    for (let i=0; i<n; i++) leader = leader.next

    // iterate both pointers until leader reaches tail
    while (leader.next !== null) {
        leader = leader.next
        follower = follower.next
    }

    // splice out nth node from end
    // follower now points at splicee's parent
    follower.next = follower.next.next

    // let garbage collector free splicee...?

    return hat.next
};