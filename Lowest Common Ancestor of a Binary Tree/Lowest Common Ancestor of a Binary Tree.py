# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

# NOTE: TREE IS NOT GUARANTEED TO BE BALANCED
# STRAT: track paths as we DFS traverse
# restarting at 38min
class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        p_path = None
        q_path = None

        def findPaths(root, curPath) -> None:
            if root is None:
                return
            
            curPath.append(root)

            nonlocal p_path
            nonlocal q_path
            
            if root is p:
                p_path = curPath[:]
            elif root is q:
                q_path = curPath[:]

            if p_path and q_path:
                return

            findPaths(root.left, curPath[:])
            findPaths(root.right, curPath[:])
        
        findPaths(root, [])

        ans = None
        for i in range( min(len(p_path), len(q_path)) ):
            if p_path[i] is q_path[i]:
                ans = p_path[i]
        return ans