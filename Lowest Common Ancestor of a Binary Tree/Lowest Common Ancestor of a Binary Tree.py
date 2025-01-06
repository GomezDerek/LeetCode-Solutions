# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':

        pPath, qPath = [], []

        def dfs(node, path):
            # base case
            nonlocal pPath, qPath
            if not node or (pPath is False and qPath is False):
                return
            

            newPath = path + [node]
            
            # check if we found our targets
            if node is p:
                pPath = newPath
            elif node is q:
                qPath = newPath

            dfs(node.left, newPath)
            dfs(node.right, newPath)

        dfs(root, [])

        # find LCA by comparing paths
        pPath.reverse()
        qPath.reverse()

        for pNode in pPath:
            for qNode in qPath:
                if pNode.val == qNode.val: 
                    return pNode