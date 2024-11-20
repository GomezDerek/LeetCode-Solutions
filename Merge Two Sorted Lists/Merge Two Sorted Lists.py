# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:

        # 5 min reading and planning
        # 13 min trying to figure out how to access attributes in python3, but edge cases were screwing me over >:(
        # called it quits after 42 min and watched NC explanation
       
        nuHead = ListNode()
        nuTail = nuHead

        # edge case - empty lists
        if not list2: return list1
        elif not list1: return list2

        while list1 and list2:
            
            if list1.val < list2.val:
                nuTail.next = list1
                list1 = list1.next

            else: # list1.val >= list2.val
                nuTail.next = list2
                list2 = list2.next

            nuTail = nuTail.next

        # handle remainders
        if list1:
            nuTail.next = list1
        elif list2:
            nuTail.next = list2
        
        return nuHead.next