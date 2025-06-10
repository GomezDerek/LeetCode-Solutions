/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    const dummy = new ListNode();
    let tail = dummy;

    // while both pointers are valid
    // (we'll be directly iterating the heads as pointers)
    while (list1 && list2) {
        let lesserPointer = list1.val <= list2.val ? list1 : list2;
        
        tail.next = new ListNode(lesserPointer.val);
        tail = tail.next;

        // iterate the list whose head was added to the tail
        // lesserPointer = lesserPointer.next;
        if (lesserPointer.val == list1.val) list1 = list1.next;
        else list2 = list2.next;
    }

    // once one list finishes, add the remainder of the other
    if (!list1) {
        tail.next = list2; 
    } else { // !list2
        tail.next = list1;
    }

    return dummy.next;
};