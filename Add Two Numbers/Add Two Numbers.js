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

    naive solution
    iterate through each list, to build each int
    calc sum of ints
    create new linked list to represent the sum

    optimal solution
    create new linked list as we iterate through l1 & l2
    use recursion to iterate backwards
    create a variable to store the number to carry when node sum > 10

    EDIT: bc lengths may differ, just reverse the lists before iterating

    NOTE: l1 & l2 lengths may differ
          l1 & l1 are non-empty
          return list is not backwards\
    */

    // reverse both lists 1st
    function reverseLL(cur) {
        // base case
        if (!cur.next) return cur; // cur is tail

        // recursive call
        const reversed = reverseLL(cur.next);

        // operation
        const cachedNext = cur.next;
        cachedNext.next = cur;
        cur.next = null;

        // return
        return reversed;
    }

    let rl1 = reverseLL(l1);
    let rl2 = reverseLL(l2);

    
    const dummyNode = new ListNode(null);
    let dummyPtr = dummyNode;
    let carry = 0;

    // iterate through both lists
    while (rl1 || rl2) {
        // calc sum
        const val1 = rl1 ? rl1.val : 0;
        const val2 = rl2 ? rl2.val : 0;
        let sum = val1 + val2 + carry;
        
        // adjust if >9
        if (sum > 9) {
            // console.log('\nsum > 9, sum = ',sum);
            let strSum = sum+"";
            const strCarry = strSum.slice(0,strSum.length-1);
            strSum = strSum.slice(strSum.length-1);
            
            carry = parseInt(strCarry);
            sum = parseInt(strSum);
            // console.log(`adjusted:\nsum = ${sum}\ncarry = ${carry}`);
        }
        else {
            carry = 0;
        }

        // add to sumList
        dummyPtr.next = new ListNode(sum)
        dummyPtr = dummyPtr.next;

        // iterate lists
        if (rl1) rl1 = rl1.next;
        if (rl2) rl2 = rl2.next;
    }

    if (carry>0) dummyPtr.next = new ListNode(carry);

    return dummyNode.next;
};