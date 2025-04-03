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
          l1 & l2 are non-empty
          return list is not backwards
    */

    // giving up on my optimized solution at minute 50
    // here is the implementation of the naive solution!

    const val1 = getValStr(l1);
    const val2 = getValStr(l2);

    function getValStr(node) {
        // base case(s)
        if (!node) {
            return "";
        }

        // recursive call(s)
        const valStr = getValStr(node.next);
    
        // return
        return valStr + node.val
    }

    const sum = parseInt(val1) + parseInt(val2);
    const strSum = sum + "";

    // create sumList backwards
    let sumHead = null;
    for(ch of strSum) {
        const newHead = new ListNode(parseInt(ch), sumHead);
        sumHead = newHead;
    }

    return sumHead;
};