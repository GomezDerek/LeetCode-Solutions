# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        
        ans = ListNode(None)
        traveler = ans

        while list1 and list2:
            if list1.val < list2.val:
                traveler.next = ListNode(list1.val)
                list1 = list1.next
            else: # list2.val <= list1.val
                traveler.next = ListNode(list2.val)
                list2 = list2.next
            traveler = traveler.next


        if list1:
            traveler.next = list1
        elif list2:
            traveler.next = list2
        
        return ans.next