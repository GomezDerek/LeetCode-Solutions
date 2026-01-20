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
 GOAL: add 2 numbers (they are LL, in reverse)

 STRATEGY:
    - convert both LLs to numbers
        - str -> reverse -> bigint
    - add the numbers
    - convert sum to LL
 
 NOTES:
     - each num may have up to 100 digits
     - 2^52
     - use bigint instead of ints for adding
  */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {

    // convert LLs to nums
    const sArr1: string[] = [];
    while (l1 != null) {
        sArr1.push(l1.val+"");
        l1 = l1.next;
    }
    
    const sArr2: string[] = [];
    while (l2 != null) {
        sArr2.push(l2.val+"");
        l2 = l2.next;
    }

    // const num1: BigInt = BigInt(sArr1.reverse().join(""));
    // const num2: BigInt = BigInt(sArr2.reverse().join(""));
    const num1: number = parseInt(sArr1.reverse().join(""));
    const num2: number = parseInt(sArr2.reverse().join(""));
    // console.log(typeof num1, typeof num2)

    const numSum: number = num1 + num2;
    // console.log(numSum);
    const sumStr: string = numSum.toString();
    console.log(sumStr);

    // convert our sum to a LL (backwards)
    const resHat: ListNode = new ListNode();
    let tail: ListNode = resHat;
    let i = sumStr.length-1;
    while (i >= 0) {
        tail.next = new ListNode(parseInt(sumStr[i]));
        tail = tail.next;
        i--;
    }

    return resHat.next;;
};