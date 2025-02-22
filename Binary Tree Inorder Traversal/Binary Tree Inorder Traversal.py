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
        # answer = []
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
                answer[ traveler.val ] = True
                breadCrumbs.append( traveler )
                traveler = traveler.right

            # we're at the root; with no leaf nodes nor sub-branches
            elif not breadCrumbs:
                # answer.append( traveler.val )
                answer[ traveler.val ] = True
                traveler = None

            # leaf node
            else:
                # answer.append( traveler.val ) # add traveler.val to answer
                answer[ traveler.val ] = True

                traveler = breadCrumbs.pop() # traveler = parent

                # sever leaf node, so we don't revisit it
                # if traveler.left and traveler.left.val == answer[-1]:
                if traveler.left and answer[ traveler.left.val ]:
                    traveler.left = None

                # elif traveler.right and traveler.right.val == answer[-1]:
                elif traveler.right and answer[ traveler.right.val ]:
                    traveler.right = None

        # return answer
        return list(answer.keys())