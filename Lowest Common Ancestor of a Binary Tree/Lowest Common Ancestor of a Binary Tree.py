# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

# wrote from mem after reading my prev solutions
class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        # base case(s)
        # end recursion, no targets found in null subtree
        if not root:
            return None

        # end recursion, target / LCA found
        if root is p or root is q:
            return root

        l = self.lowestCommonAncestor(root.left, p, q)  # target found in left subtree
        r = self.lowestCommonAncestor(root.right, p, q) # target found in right subtree

        # root is LCA if targets in both subtrees
        if l and r:
            return root
        # LCA in subtree if no targets in other subtree
        else:
            return l or r
        