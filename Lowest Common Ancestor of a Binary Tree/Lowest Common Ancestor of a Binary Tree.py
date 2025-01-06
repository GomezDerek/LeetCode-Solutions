# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':

        paths = {}
        pFound, qFound = False, False

        def dfs(node, path):
            # base case
            nonlocal pFound, qFound
            if not node or (pFound is True and qFound is True):
                return
            
            # check if we found our targets
            elif node is p:
                pFound = True
            elif node is q:
                qFound = True

            newPath = path + [node]
            paths[node] = newPath

            dfs(node.left, newPath)
            dfs(node.right, newPath)

        dfs(root, [])

        # find LCA by comparing paths
        pPath = paths[p]
        qPath = paths[q]
        pPath.reverse()
        qPath.reverse()

        for pNode in pPath:
            for qNode in qPath:
                if pNode.val == qNode.val: 
                    return pNode