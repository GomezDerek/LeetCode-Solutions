# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        # 1 min reading
        # 2 min planning
        # 11.5 min coding

        # recursion
        # invert(node)
            # l_temp = node.left
            # r_temp = node.right
            # node.left = r_temp
            # node.right = l_temp
            # invert(node.right)
            # invert(node.left)

        def invert(node):
            if not node:
                return 
            else:
                print(node.val)

            l_temp = node.left
            r_temp = node.right
            node.left = r_temp
            node.right = l_temp
            
            invert(node.left)
            invert(node.right)
            return node

        # return root
        return invert(root)