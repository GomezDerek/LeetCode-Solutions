# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        hat = ListNode(-1, head)
        leader, follower = hat, hat

        # give leader headstart
        for _ in range(n): leader = leader.next

        # iterate both pointers together until leader reaches the tail
        while leader.next != None:
            leader = leader.next
            follower = follower.next

        # splice out LL[-n]
        follower.next = follower.next.next

        return hat.next