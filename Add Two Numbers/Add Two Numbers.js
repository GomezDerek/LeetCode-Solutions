/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    /*
    STRATEGY
    1. make both lists the same length
        add trailing 0's to shorter list
        to align digits' places

    2. reverse both lists

    3. add the lists, create the sum list
        simultaneously iterate through both lists
        append the sum of both nodes to the sum list
        use an external var to track carry

    NOTE: minute 42 - just realized that the answer needs to be reversed, too 😖
    */

    // 1. make both lists the same length
    let t1 = l1;
    let t2 = l2;

    while (t1.next || t2.next) {
        if (!t1.next && t2.next) {
            t1.next = new ListNode(0,null);
        }
        else if (t1.next && !t2.next) {
            t2.next = new ListNode(0,null);
        }

        t1 = t1.next;
        t2 = t2.next;
    }
    console.log(l1);
    console.log(l2);

    const sumListHat = new ListNode();
    let sumList = sumListHat;
    let carry = 0;

    while (l1 && l2) {
        let sum = l1.val + l2.val + carry;

        if (sum > 9) {
            const strSum = sum+"";
            const carryStr = strSum.slice(0,strSum.length-1);
            carry = parseInt(carryStr);

            sum = sum%10;
        }
        else {
            carry = 0;
        }

        l1 = l1.next;
        l2 = l2.next;

        sumList.next = new ListNode(sum, null);
        sumList = sumList.next;
    }

    if (carry > 0) sumList.next = new ListNode(carry, null);

    return sumListHat.next;
};