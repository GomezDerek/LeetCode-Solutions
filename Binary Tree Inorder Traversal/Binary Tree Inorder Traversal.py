# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        # iterative solution

        breadCrumbs = []
        answer = {}

        traveler = root

        while traveler:
            # navigate as far left as possible
            if traveler.left:
                breadCrumbs.append( traveler )
                traveler = traveler.left

            # navigate right bc only the right node is available
            elif traveler.right:
                # answer.append( traveler.val )
                answer[ traveler ] = traveler.val
                breadCrumbs.append( traveler )
                traveler = traveler.right

            # we're at the root; with no leaf nodes nor sub-branches
            elif not breadCrumbs:
                answer[ traveler ] = traveler.val
                traveler = None

            # leaf node
            else:
                answer[ traveler ] = traveler.val

                traveler = breadCrumbs.pop() # traveler = parent

                # sever leaf node, so we don't revisit it
                if traveler.left and answer[ traveler.left ]:
                    traveler.left = None

                elif traveler.right and answer[ traveler.right ]:
                    traveler.right = None

        # return answer
        return list(answer.values())