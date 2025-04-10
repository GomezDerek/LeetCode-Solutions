/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {

    const map = {};
    const resHat = new ListNode();
    let resTail = resHat;

    const k = lists.length;

    // O(N)
    // iterate through lists to access each LL
    // and populate our map
    for (let i=0; i<k; i++) {
        let iHead = lists[i];

        // iterate through LL to access every node
        while (iHead) {
            // val list DNE
            if (map[iHead.val] == undefined) {
                // create val list
                map[iHead.val] = new ListNode(iHead.val);
            }

            // val list does exist
            else {
                // add to val list
                const newHead = new ListNode(iHead.val, map[iHead.val]);
                map[iHead.val] = newHead;
            }

            iHead = iHead.next;
        }
    }

    // no need to sort our list,
    // because numeric object keys self-sort
    const valLists = Object.values(map); // O(N)

    // add each valList to our resList
    valLists.forEach( head => {
        resTail.next = head;
        while (resTail.next) {resTail = resTail.next};
    });

    return resHat.next;

    /*
    STRATEGY

    NOTES:
        - lists can be different sizes
        - up to 100,000 lists of 500 nodes
        - although each list is sorted, the array of lists is not
        
    Question:
        - are we allowed to create our final LL with node copies?
        assuming yes

    
    LL1[0] is not guaranteed to be less than LL1[1]
    LL1 = 5 -> 6
    LL2 = 1 -> 2

    t    h
    1 -> 2 -> 5 -> 6
    
    store refs to previous min and max for back insertion

   use a hashmap to store nodes for each value
   this will simplify in-order insertion
   {node.val: LL of nodes of the same val}
    */
};