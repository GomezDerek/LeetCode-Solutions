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
    NOTE:
        numbers may be larger than 2^32, 9*10^19
        in JS, we use BigInts

    STRAT:
        build each list's number as we traverse backwards O(l1 + l2)
        add the two numbers together O(1)
        convert sum to LI O(sum.length)
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    // build l1's number
    // first convert from LL -> str
    let s1: string = "";
    while (l1 != null) {
        s1 = l1.val + s1;
        l1 = l1.next;
    } 
    const n1: bigint = BigInt(s1);

    // do the same to l2
    let s2: string = "";
    while (l2 != null) {
        s2 = l2.val + s2;
        l2 = l2.next;
    }
    const n2: bigint = BigInt(s2);

    // add the numbers!
    const nSum: bigint = n1+n2;

    // convert sum to list
    const sSum: string = nSum.toString();
    const sumHat = new ListNode();
    let sumNode = sumHat;
    for (let i=sSum.length-1; i>=0; i--) {
        sumNode.next = new ListNode(parseInt(sSum[i]));
        sumNode = sumNode.next;
    }

    return sumHat.next;
};